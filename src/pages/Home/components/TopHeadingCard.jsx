import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useFormattedDateMonth from '../../../utils/monthnames';

const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: theme.palette.blue.main,
    color: 'white',
    width: '100%',
    paddingTop: 0,
    paddingBottom: theme.spacing(0.5),
    fontSize: '1.2rem',
    textAlign: 'left',
    
  },
}));

const TopHeadingCard = ({data}) => {
  const classes = useStyles();
  const [formattedDate, formatDate] = useFormattedDateMonth();

  useEffect(() => {
    formatDate(data?.date);
  }, [data?.date, formatDate]);

  return (
    <div>
      <Typography className={classes.heading}  sx={{pl:1}} fontSize="16px">
        {formattedDate}
      </Typography>
    </div>
  );
};

export default TopHeadingCard;
