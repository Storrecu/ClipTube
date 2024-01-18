import axios from 'axios';

const KEY = 'AIzaSyBIBXWvDF5QwZ-aOgkPDMZJ8ryHZRTDzSA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 15,
    key: KEY,
  },
});
