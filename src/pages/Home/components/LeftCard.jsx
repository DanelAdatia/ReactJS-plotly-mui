import React, { useRef } from 'react';
import GraphDetail from '../../GraphDetail';
import { makeStyles } from '@mui/styles';
import { Box, Card, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  randomDetails: {
    margin: '8px', 
    display: 'flex',
    justifyContent: 'center',
    color: 'skyblue',
    fontSize: '16px',
    fontWeight: 800,
    cursor: 'pointer',
  },
}));

const LeftCard = ({ data }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const contentNode = useRef(null);

  return (
    <Card sx={{ overflow: 'visible', m: 2 }} ref={contentNode}>
      <Box
        onClick={() => {
          navigate(`/date/${data.date}`, { state: data });
        }}
        className={classes.randomDetails}
      >
        TimeLine
      </Box>
      <Divider />

      <GraphDetail data={data} contentRef={contentNode} />
    </Card>
  );
};

export default LeftCard;
