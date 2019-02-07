import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const VerticalLinearStepper = (props) => {
  return (
    <div>
      <Stepper className="stepper2" 
              activeStep={props.activeStep}
              orientation="vertical">
        
        {props.steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}

      </Stepper>
    </div>
  );
}

export default VerticalLinearStepper;
