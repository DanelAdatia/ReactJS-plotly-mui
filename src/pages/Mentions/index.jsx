import React, { useState } from 'react';
import EachCard from './components/EachCard';
import {
  Box,
  Typography,
  Container,
  Card,
  TextField,
} from '@mui/material';

const Index = ({ data }) => {
  const [search, setSearch] = useState('');

  const filteredTweets = data?.allTweets?.filter((item) =>
    item?.tweet?.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Container>
      <Typography
        fontSize='20px'
        fontWeight={800}
        align='center'
        gutterBottom
        sx={{ mb: 4 }}
      >
        Mentions
      </Typography>
    
      <TextField
        sx={{ display: 'flex', alignContent: 'center', m: 2 }}
        value={search}
        placeholder='Search...'
        size='small'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Card sx={{ height: '60vh', overflowY: 'visible' }}>
        <Box
          my={1}
          mx={3.5}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <p>Date</p>
          <p>Likes</p>
          <p>Followers</p>
        </Box>
      { 
          filteredTweets.map((item, index) => (
            <Box
              key={index}
              display='flex'
              justifyContent='center'
              my={1}
              mx={3}
            >
              <EachCard item={item} />
            </Box>
          ))
         }
        
      </Card>
    </Container>
  );
};

export default Index;
