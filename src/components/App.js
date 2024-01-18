import { useState, useEffect } from 'react';
import youtube from '../services/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('sailor moon');
  }, []);

  const onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div className="ui container">
        <h1>Welcome to ClipTube</h1>
        <SearchBar onTermSubmit={onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={onVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
