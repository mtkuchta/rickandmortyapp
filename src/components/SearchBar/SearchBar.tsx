import { Wrapper, StyledInput } from './SearchBar.style';

interface SearchBarProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleChange }) => {
  return (
    <Wrapper>
      <StyledInput type="text" placeholder="Find Characters . . . " onChange={handleChange} />
    </Wrapper>
  );
};

export default SearchBar;
