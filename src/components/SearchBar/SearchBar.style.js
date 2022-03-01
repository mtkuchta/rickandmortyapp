import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; ;
`;

export const StyledInput = styled.input`
  font-size: 3em;
  width: 40%;
  padding: 5px 15px;
  border: 2px solid gray;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    letter-spacing: 2px;
  }
`;
