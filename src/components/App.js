import { useState } from 'react';
import youtube from '../services/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div className="ui container">
        <h1>Welcome to ClipTube</h1>
        <SearchBar onTermSubmit={onTermSubmit} />
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
      </div>
    </>
  );
};

export default App;
