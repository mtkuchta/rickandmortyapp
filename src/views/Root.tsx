import React from 'react';
import Characters from '../components/Characters/Characters';
import MainTemplate from '../components/templates/MainTemplate';

const Root: React.FC = () => {
  return (
    <MainTemplate>
      <Characters />
    </MainTemplate>
  );
};

export default Root;
