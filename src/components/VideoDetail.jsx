import React from 'react';
import { useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack} from '@mui/material'
import { CheckCircle  } from '@mui/icons-material';

import { Video} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';


const VideoDetail = () => {
  const [videoDetail, setVideosDetail] = useState(null);
  const { id } = useParams();

  useEffect(()=> {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideosDetail(data.items[0]))
  }, [id]);

  // const 


  return (
    <Box minHeight="95vh">
      <Stack direction= {{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail.snippet.title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail;