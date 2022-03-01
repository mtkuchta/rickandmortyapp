import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Characters from './Characters/Characters';
import SearchCharacters from './SearchCharacters/SearchCharacters';
import MainTemplate from '../components/templates/MainTemplate';

const Root: React.FC = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="search" element={<SearchCharacters />} />
      </Routes>
    </MainTemplate>
  );
};

export default Root;
