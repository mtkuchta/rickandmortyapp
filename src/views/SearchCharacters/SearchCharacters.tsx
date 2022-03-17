import { useState, useEffect, useContext } from 'react';
import { Wrapper, CharactersContainer } from './SearchCharacters.style';
import { gql, useLazyQuery } from '@apollo/client';
import SearchBar from '../../components/SearchBar/SearchBar';
import Character from '../../components/Character/Character';
import { ModalContext } from '../../providers/ModalProvider';
import Modal from '../../components/Modal/Modal';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import Error from '../../components/Error/Error';

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

const SearchCharacters: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<string>>([]);
  const [getCharacters, { loading, error, data }] = useLazyQuery(FILTERED_CHARACTERS);
  const { activeCharacter, isModalOpen, handleClickCharacter, handleCloseModal } = useContext(ModalContext);

  useEffect(() => {
    if (searchValue !== '') {
      getCharacters({ variables: { filterValue: searchValue } });
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  useEffect(() => {
    if (!data) return;
    if (data.characters) {
      setSearchResults(data.characters.results);
    } else {
      setSearchResults([]);
    }
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  return (
    <Wrapper>
      <SearchBar handleChange={handleInputChange} />
      {error && <Error message={error.graphQLErrors[0].message} />}
      <CharactersContainer>
        {searchResults &&
          searchResults.map(({ id, name, image }: any, i: number) => {
            return <Character key={id} charName={name} charImage={image} charId={id} handleClick={handleClickCharacter} />;
          })}
      </CharactersContainer>
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
        {activeCharacter && <CharacterDetails character={activeCharacter} />}
      </Modal>
    </Wrapper>
  );
};

export default SearchCharacters;
