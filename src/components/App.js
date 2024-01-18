// import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../services/youtube';

import '../styles/App.scss';

const App = () => {
  const onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
  };

  return (
    <>
      <div className="ui container">
        <h1>Welcome to ClipTube</h1>
        <SearchBar onTermSubmit={onTermSubmit} />
      </div>
    </>
  );
};

export default App;
