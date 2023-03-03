import React, { useState } from "react";
import { Grid } from "@mui/material";
import { SearchBar, VideoDetail, VideoList } from "./components";
import youtube from "./api/youtube";
import Test from "./components/tets";
import Test_2 from "./components/test2";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResult: 5,
        key: 'AIzaSyDuVuiSj1hcrNYm2HhHc2qjxQphkdZZcuc',
        q: searchTerm,
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Grid justify="center" container spacing={2}>
      <Test />
      <Test_2 />
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
