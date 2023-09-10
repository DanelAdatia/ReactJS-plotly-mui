import React from 'react';
import { Box, Card } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  },
  cardLayout: {
    width: '100%',
    height: '80vh', 
    maxWidth: 'calc(100% - 32px)',
    display: 'flex',
    flexDirection: 'column', 
  },
}));

const OutsideCard = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card className={classes.cardLayout}>{children}</Card>
    </Box>
  );
};

export default OutsideCard;
