import React from 'react';
import { Paper, Typography } from '@mui/material';

const VideoDetails = ({ video }) => {
  if (!video) return <div></div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: '70%' }}>
        <iframe
          title="Video Player"
          src={videoSrc}
          allowFullScreen
          style={{ height: '100%', width: '100%' }}
        />
      </Paper>
        <Typography variant="subtitle1" style={{color:'#e7eaf6' , margin: '20px'}}>
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2" style={{color:'#e7eaf6', margin: '20px'}}>
          {video.snippet.channelTitle}
        </Typography>
    </React.Fragment>
  );
};

export default VideoDetails;
