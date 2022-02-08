import { ModalWrapper, CloseButton } from './Modal.style';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, handleClose }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root') as HTMLElement} isOpen={isOpen} onRequestClose={handleClose}>
      <CloseButton onClick={handleClose}>X</CloseButton>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
