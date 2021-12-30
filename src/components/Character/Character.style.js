import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 20vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0;
  margin: 10px 10px;
  padding-bottom: 10px;
  border: 3px solid black;
  border-radius: 15px;
  cursor: pointer;

  h1 {
    letter-spacing: 2px;
  }

  img {
    width: 80%;
    border-radius: 15px;
    transform: rotate(4deg);
  }
`;
