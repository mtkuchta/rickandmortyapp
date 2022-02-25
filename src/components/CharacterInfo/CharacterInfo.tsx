import { Wrapper, StyledName, StyledValue } from './CharacterInfo.style';

interface CharacterInfoProps {
  attribute: string;
  value: string;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ attribute, value }) => {
  return (
    <Wrapper>
      <StyledName>{attribute}</StyledName>
      <StyledValue>{value}</StyledValue>
    </Wrapper>
  );
};

export default CharacterInfo;
