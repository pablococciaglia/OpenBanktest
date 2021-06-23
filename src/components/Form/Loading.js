import React from 'react';
/* import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

 Declaración de estilos del spiner que se utiliza como loading screen 
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      
    },
  },
})); */

export const Loading = () => {
  
 /*  const classes = useStyles(); */

  return (
    <div className="d-flex justify-content-center loading__container animate__animated animate__fadeIn">
      <div className="loading__box">
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status"></div>
          <span class="sr-only">Loading...</span>
        </div>
{/*         <div className={classes.root}>
          <LinearProgress />
        </div> */}
      </div>
      
    </div>
  );
}
