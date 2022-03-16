import { Wrapper, ContentWrapper, ImageContainer, DescriptionContainer } from './CharacterDetails.style';
import { gql, useQuery } from '@apollo/client';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import ModalLoader from '../ModalLoader/ModalLoader';
import Error from '../Error/Error';

interface CharacterDetailsProps {
  character: string | null;
}

const CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      status
      gender
      type
      species
      origin {
        name
      }
      location {
        name
      }
      type
    }
  }
`;

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  const { loading, error, data } = useQuery(CHARACTER, { variables: { id: character } });

  return (
    <Wrapper>
      {loading && <ModalLoader />}
      {error && <Error message={error.graphQLErrors[0].message} />}
      <ContentWrapper>
        {data && (
          <>
            <h2>{data.character.name}</h2>
            <ImageContainer>
              <img src={data.character.image} alt="" />
            </ImageContainer>
            <DescriptionContainer>
              <CharacterInfo attribute="Species:" value={data.character.species} />
              <CharacterInfo attribute="Status:" value={data.character.status} />
              <CharacterInfo attribute="Origin:" value={data.character.origin.name} />
              <CharacterInfo attribute="Last known location:" value={data.character.location.name} />
            </DescriptionContainer>
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default CharacterDetails;
