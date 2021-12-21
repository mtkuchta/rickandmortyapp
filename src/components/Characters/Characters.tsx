import React, { useEffect, useState } from 'react';
import { Wrapper } from './Characters.style';
import { gql, useQuery } from '@apollo/client';

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
    console.log(data.characters.results);
    setCharacters(data.characters.results);
  }, [data]);

  return <Wrapper></Wrapper>;
};

export default Characters;
