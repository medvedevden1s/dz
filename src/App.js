import React from 'react';
import './App.css';
import Stepper from './Stepper'
import Button from '@material-ui/core/Button';

  function getSteps() {
    return ['Set name and durationn', 'Sipping address', 'Select account', 'Confirm your reserv'];
  }

 const App = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  // function handleReset() {
  //   setActiveStep(0);
  // }

  return (
      <div>
        <div id="main">
          <article>
            <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </article>
          <aside>
            <Stepper steps={steps} activeStep={activeStep}></Stepper>
            
            <svg height="100" width="100">
              <circle cx="35" cy="35" r="12" stroke="orange" strokeWidth="2" fill="white" />
              <text x="35%" y="35%" text-anchor="middle" stroke="orange" stroke-width="1px" dy=".3em">1</text>
            </svg>

          </aside>
        </div>
        <footer className="footer">
            <div className="logo"><a href="http://localhost:3000/#">RESERVE</a></div>
            <div className="exit"><a href="http://localhost:3000/#">Exit X</a></div>
        </footer>
      </div>     
    );
}

export default App;
