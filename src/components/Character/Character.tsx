import React, { forwardRef } from 'react';
import { Wrapper } from './Character.style';

export interface CharacterProps {
  charName: string;
  charImage: string;
}

const Character = forwardRef<HTMLDivElement, CharacterProps>(({ charName, charImage }, ref) => {
  return (
    <Wrapper ref={ref}>
      <h1>{charName}</h1>
      <img src={charImage} alt="" />
    </Wrapper>
  );
});

export default Character;
