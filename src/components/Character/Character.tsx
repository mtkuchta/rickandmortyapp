import React, { forwardRef, useEffect, useState } from 'react';
import { Wrapper } from './Character.style';

export interface CharacterProps {
  charName: string;
  charImage: string;
  charId: number;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Character = forwardRef<HTMLDivElement, CharacterProps>(({ charName, charImage, charId, handleClick }, ref) => {
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    setTransformValue(Number((Math.random() * 10 - 5).toFixed(1)));
  }, []);

  return (
    <Wrapper ref={ref} rotation={`${transformValue}deg`} id={String(charId)} onClick={handleClick}>
      <h1 id={String(charId)}>{charName}</h1>
      <img id={String(charId)} src={charImage} alt="" />
    </Wrapper>
  );
});

export default Character;
