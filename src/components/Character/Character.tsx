import React, { forwardRef, useEffect, useState } from 'react';
import { Wrapper } from './Character.style';

export interface CharacterProps {
  charName: string;
  charImage: string;
}

const Character = forwardRef<HTMLDivElement, CharacterProps>(({ charName, charImage }, ref) => {
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    setTransformValue(Number((Math.random() * 10 - 5).toFixed(1)));
  }, []);

  return (
    <Wrapper ref={ref} rotation={`${transformValue}deg`}>
      <h1>{charName}</h1>
      <img src={charImage} alt="" />
    </Wrapper>
  );
});

export default Character;
