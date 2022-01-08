import React, { useEffect, useState, useRef } from 'react';
import { Wrapper } from './Characters.style';
import { gql, Observer, useQuery } from '@apollo/client';
import Character from '../Character/Character';

interface CharactersProps {}

interface RootElement {
  element: HTMLElement;
  id: string;
}

// interface ObserveOptions {
//   rootElement?: RootElement;
//   rootMargin?: string;
//   threshold?: number | number[];
// }
// type ObserverCallback = () => void;
// interface ObserverInstance {
//   callback?: ObserverCallback;
//   options?: ObserveOptions;
//   // visible?: boolean;
//   // observerId?: string;
// }

const CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`;

const Characters: React.FC<CharactersProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState<Array<string>>([]);
  const { loading, error, data } = useQuery(CHARACTERS, { variables: { page: currentPage } });

  const lastItemRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (data) {
      setCharacters([...characters, ...data.characters.results]);
    }
  }, [data]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries: any[]) => {
        if (entries[0].isIntersecting) {
          setCurrentPage(currentPage + 1);
        }
      },
      { root: document, threshold: 1 }
    );

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [characters]);

  return (
    <Wrapper>
      {characters.map(({ id, name, image }: any, i: number) => {
        if (i === characters.length - 1) return <Character key={id} charName={name} charImage={image} ref={lastItemRef} />;
        return <Character key={id} charName={name} charImage={image} />;
      })}
    </Wrapper>
  );
};

export default Characters;
