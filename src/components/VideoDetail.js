import React, { Component } from 'react'
import { Paper, Typography } from '@mui/material'

const VideoDetails = ({video}) => {
  if(!video) return <div>Loading...</div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <React.Fragment>
      <Paper elevation={6} style={{height: '70%'}}> 
      <iframe title="Video Player" src={videoSrc} allowFullScreen style={{height: '100%', width: '100%'}} />
      </Paper>
      <Paper elevation={6} style={{padding: '15px'}}>
        <Typography variant="subtitle1">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  )
}

export default VideoDetails
