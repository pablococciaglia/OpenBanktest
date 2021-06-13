import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import { useContext } from 'react';
import { Context } from '../Context';

export const StepProgress = () => {
    const {activeStep} = useContext (Context); /* traemos del context la variable del useState que indica en que paso se encuentra para setear en la etapa correcta */


    /* step-progress-barr de material-UI modificado*/
    const steps = getSteps();
          
    return (
        <>  
            <Stepper 
                alternativeLabel activeStep={activeStep} 
                connector={<ColorlibConnector />}
                style={{ backgroundColor: "transparent" }}
            >
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                </Step>
                ))}
            </Stepper> 
        </>
    )
}

/* estilos del step-progress-bar */

const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 19,
    },
    active: {
      '& $line': {
        background: '#FF0049',
      },
    },
    completed: {
      '& $line': {
        background: '#FF0049',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#788f9c',
    },
  })(StepConnector);
  
  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#788f9c',
      zIndex: 1,
      color: '#FFF1E5',
      width: 40,
      height: 40,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      position: 'relative',
      bottom: '5px',
      background: '#002B45',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      width: 50,
      height: 50,
    },
    completed: {
      background: '#FF0049',
    },
  });
  
  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
  
    const { active, completed } = props;
  
    const numbers = {
      1: 1,
      2: 2,
      3: 3,
    };  
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {completed ? <Check className={classes.completed} /> : numbers[String(props.icon)]}
        
      </div>
    );
  }
    
  function getSteps() {
    return ['1', '2', '3'];
  }
  