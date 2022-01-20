import React from 'react';
import { Wrapper } from './Loader.style';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <Wrapper>
      <h1>Loading...</h1>
    </Wrapper>
  );
};

export default Loader;
