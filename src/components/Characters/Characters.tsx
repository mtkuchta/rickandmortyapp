import React, { useEffect, useState } from 'react';
import { Wrapper } from './Characters.style';
import { gql, useQuery } from '@apollo/client';
import Character from '../Character/Character';

interface CharactersProps {}

const CHARACTERS = gql`
  query {
    characters {
      results {
        name
        image
      }
    }
  }
`;

const Characters: React.FC<CharactersProps> = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useQuery(CHARACTERS);

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data]);

  return (
    <Wrapper>
      {characters.map(({ name, image }: any) => {
        return <Character key={name} charName={name} charImage={image} />;
      })}
    </Wrapper>
  );
};

export default Characters;
