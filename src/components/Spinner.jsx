import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    spinner: {
        animation: '$ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        width: '4rem',
        height: '4rem',
        margin: '2rem',
        borderRadius: '50%',
        backgroundColor: theme.palette.sky ? theme.palette.sky[600] : '#3C82F6', 
    },
    '@keyframes ping': {
        '0%': {
            transform: 'scale(1)',
            opacity: 1,
        },
        '50%, 100%': {
            transform: 'scale(1.5)',
            opacity: 0,
        },
    },
}));

const Spinner = () => {
    const classes = useStyles();

    return <div className={classes.spinner}></div>;
}

export default Spinner;
