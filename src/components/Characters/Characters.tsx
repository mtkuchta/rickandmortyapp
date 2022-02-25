import React, { useEffect, useState, useRef } from 'react';
import { Wrapper } from './Characters.style';
import { gql, useQuery } from '@apollo/client';
import Character from '../Character/Character';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import CharacterDetails from '../CharacterDetails/CharacterDetails';

interface CharactersProps {}

interface RootElement {
  element: HTMLElement;
  id: string;
}

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
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleClickCharacter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { target } = e;
    setActiveCharacter((target as HTMLElement).id);
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveCharacter(null);
  };

  return (
    <Wrapper>
      {characters.map(({ id, name, image }: any, i: number) => {
        if (i === characters.length - 1)
          return (
            <Character
              key={id}
              charName={name}
              charImage={image}
              ref={lastItemRef}
              charId={id}
              handleClick={handleClickCharacter}
            />
          );
        return <Character key={id} charName={name} charImage={image} charId={id} handleClick={handleClickCharacter} />;
      })}
      {loading && <Loader />}
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
        {activeCharacter && <CharacterDetails character={activeCharacter} />}
      </Modal>
    </Wrapper>
  );
};

export default Characters;
