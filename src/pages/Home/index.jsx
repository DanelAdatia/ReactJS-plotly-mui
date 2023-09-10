import React from 'react';
import OutsideCard from './components/OutsideCard';
import TopHeadingCard from './components/TopHeadingCard';
import LeftCard from './components/LeftCard';
import RightCard from './components/RightCard';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  topHeading: {
    flexGrow: 0,
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    overflowY: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const location = useLocation();
  const selectedData = location.state;


  return (
    <OutsideCard>
      <TopHeadingCard data={selectedData}  />
      <div className={classes.cardsContainer}>
        {selectedData ? (
          <>
            <LeftCard data={selectedData} />
            <RightCard data={selectedData} />
          </>
        ) : (
          'No data selected'
        )}
      </div>
    </OutsideCard>
  );
};

export default Home;
