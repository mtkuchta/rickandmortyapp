import React from 'react';
import { Wrapper } from './Character.style';

export interface CharacterProps {
  charName: string;
  charImage: string;
}

const Character: React.FC<CharacterProps> = ({ charName, charImage }) => {
  return (
    <Wrapper>
      <h1>{charName}</h1>
      <img src={charImage} alt="" />
    </Wrapper>
  );
};

export default Character;
