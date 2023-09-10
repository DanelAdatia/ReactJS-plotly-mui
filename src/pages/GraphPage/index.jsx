import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GraphDetail from '../GraphDetail';
import { Box, Card, Typography } from '@mui/material';
import useFormattedDateMonth from '../../utils/monthnames';

const GraphPage = () => {
  const location = useLocation();
  const [formattedDate, formatDate] = useFormattedDateMonth();

  const graphPage = location.state;

  useEffect(() => {
    formatDate(graphPage?.date);
  }, [graphPage?.date, formatDate]);
  return (
    <Box
      sx={{
        backgroundColor: '#ADD8E6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Card
        style={{
          height: '90vh',
          width: '90vw',
          overflowY: 'visible',
        }}
      >
        <Typography
          sx={{
            backgroundColor: '#ADD8E6',
            display: 'flex',
            justifyContent: 'center',
            border: '2px black solid',
          }}
        >
          TimeLine for {formattedDate}{' '}
        </Typography>
        <GraphDetail data={graphPage} isFullScreen />
      </Card>
    </Box>
  );
};

export default GraphPage;
