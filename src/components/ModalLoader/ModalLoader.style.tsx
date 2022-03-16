import styled from 'styled-components';

export const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;

  &:after {
    content: ' ';
    display: block;
    width: 164px;
    height: 164px;
    margin: 18px;
    border-radius: 50%;
    border: 10px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
