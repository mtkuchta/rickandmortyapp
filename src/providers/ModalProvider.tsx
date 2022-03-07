import React, { useState } from 'react';

export interface ModalProvider {
  children: React.ReactElement;
}

interface ModalContext {
  activeCharacter: string | null;
  isModalOpen: boolean;
  handleClickCharacter: (e: React.MouseEvent<HTMLElement>) => void;
  handleCloseModal: () => void;
}

const defaultState = {
  activeCharacter: null,
  isModalOpen: false,
  handleClickCharacter: () => {},
  handleCloseModal: () => {},
};

export const ModalContext = React.createContext<ModalContext>(defaultState);

export const ModalProvider: React.FunctionComponent<ModalProvider> = ({ children }) => {
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickCharacter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { target } = e;
    setActiveCharacter((target as HTMLElement).id);
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveCharacter(null);
  };

  return (
    <ModalContext.Provider value={{ activeCharacter, isModalOpen, handleClickCharacter, handleCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
