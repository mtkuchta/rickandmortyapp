import styled, { keyframes } from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  min-height: 20%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 15px;
  z-index: 1000;

  &:focus {
    outline: none;
  }
  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  font-size: 18px;
  line-height: 20px;
  background-color: black;
  color: white;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  @media (min-width: 1200px) {
    transition: 0.6s;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
  }
`;
