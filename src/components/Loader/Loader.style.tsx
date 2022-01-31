import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 15%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5em;
    color: white;
    letter-spacing: 5px;
  }
`;

export const Container = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  margin: 5px;
  opacity: 0;
`;
