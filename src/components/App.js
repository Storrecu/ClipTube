import { useState } from 'react';
import youtube from '../services/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import '../styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);

  const onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  return (
    <>
      <div className="ui container">
        <h1>Welcome to ClipTube</h1>
        <SearchBar onTermSubmit={onTermSubmit} />
        <VideoList videos={videos} />
      </div>
    </>
  );
};

export default App;
