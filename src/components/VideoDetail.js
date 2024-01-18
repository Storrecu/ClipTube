import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <p>{video.snippet.title}</p>
    </>
  );
};

export default VideoDetail;
