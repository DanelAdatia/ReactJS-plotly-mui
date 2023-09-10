import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FetchAllData } from '../../api/Home';
import Spinner from '../../components/Spinner';
import { Card, CardContent, Grid, Box, Typography } from '@mui/material';
import GraphDetail from '../GraphDetail';

const Dashboard = () => {
  const navigate = useNavigate();
  const contentNode = useRef(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    try {
      const res = await FetchAllData();
      setData(res.data?.stats?.twitter?.timelineStats?.timeline);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentNode.current) {
        contentNode.current.reset();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {loading ? (
          <Spinner />
        ) : (
          data?.map((dateData, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                ref={contentNode}
                onClick={() => navigate('/home', { state: dateData })}
                sx={{ cursor: 'pointer', border: '1px solid black' }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      backgroundColor: '#ADD8E6',
                      display: 'flex',
                      justifyContent: 'center',
                      border: '2px black solid',
                    }}
                  >
                    TimeLine for {dateData?.date}{' '}
                  </Typography>
                  <GraphDetail data={dateData} cardRef={contentNode} />
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Dashboard;
