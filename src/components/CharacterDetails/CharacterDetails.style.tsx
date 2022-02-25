import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    'name name'
    'image description';

  padding: 10px 25px;
  h2 {
    grid-area: name;
    width: 100%;
    text-align: center;
    font-size: 3em;
    padding: 10px 0;
  }
`;

export const ImageContainer = styled.div`
  grid-area: image;
  width: 20vw;
  img {
    border-radius: 15px;
    box-shadow: 6px 6px 15px 1px rgba(66, 68, 90, 1);
  }
`;

export const DescriptionContainer = styled.div`
  grid-area: description;
`;
