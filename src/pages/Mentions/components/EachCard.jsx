import React, { useEffect } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useFormattedDate from '../../../utils/useFormattedDate';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const useStyles = makeStyles({
  card: {
    borderLeft: '8px solid red',
    borderBottom: '1px solid red',
    marginBottom: '10px',
  },
});

const EachCard = ({ item }) => {
  const classes = useStyles();
  const [formattedDate, formatDate] = useFormattedDate();
  console.log(item, 'item');

  useEffect(() => {
    if (item?.date) {
      formatDate(item.date);
    }
  }, [item, formatDate]);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography fontWeight={800}>{formattedDate}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThumbUpIcon sx={{ mr: 1 }} />
            <p>{item?.favorite_count}</p>
          </Box>
          <Box>
            <p>{item?.followers}</p>
          </Box>
        </Box>
        <Typography fontSize='12px'>{item?.tweet}</Typography>
      </CardContent>
    </Card>
  );
};

export default EachCard;
