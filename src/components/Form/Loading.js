import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

/* Declaración de estilos del spiner que se utiliza como loading screen */
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export const Loading = () => {
  
  const classes = useStyles();

  return (
    <div className="loading__container animate__animated animate__fadeIn">
      <div className="loading__window">
        <div className={classes.root}>
          <CircularProgress color="secondary" />
        </div>
        <h2 className="loading__text">Espere un momento por favor</h2>          
      </div>
    </div>
  );
}
