import { useState } from 'react';
import { Wrapper } from './SearchCharacters.style';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect } from 'react';

interface SearchCharactersProps {}

const FILTERED_CHARACTERS = gql`
  query GetCharacters($filterValue: String!) {
    characters(filter: { name: $filterValue }) {
      results {
        id
        name
        image
      }
    }
  }
`;

const SearchCharacters: React.FC<SearchCharactersProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [getCharacters, { loading, error, data }] = useLazyQuery(FILTERED_CHARACTERS);

  useEffect(() => {
    if (searchValue !== '') {
      getCharacters({ variables: { filterValue: searchValue } });
    }
  }, [searchValue]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    console.log(typeof e.target.value);
  };
  return (
    <Wrapper>
      <SearchBar handleChange={handleInputChange} />
    </Wrapper>
  );
};

export default SearchCharacters;
