import React from 'react';
import './App.css';
import Stepper from './Stepper';
import styled from 'styled-components';
import Button from './Components/Atoms/Button';

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
            <Button primary onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </article>
          <aside>
            <div>
              <div className="stepper">
              <div>
              </div>
                <span className="stepBorderLine"></span>
              <div>
              </div>
                <span className="stepBorderLine"></span>
              <div>
                <span className="stepContainer stepActive">
                  <span className="stepNumber">1</span>
                  <span className="stepLabel">Set name and duration</span>
                </span>
              </div>
                <span className="stepBorderLine"></span>
              <div>
                <span className="stepContainer">
                  <span className="stepNumber">2</span>
                  <span className="stepLabel">Sipping address</span>
                </span>
              </div>
            </div>
            </div>

            <Stepper steps={steps} activeStep={activeStep}></Stepper>

          </aside>
        </div>
        <footer className="footer">
            <div className="logo"><a href="http://localhost:3000/#">RESERV</a></div>
            <div className="exit"><a href="http://localhost:3000/#">Exit X</a></div>
        </footer>
      </div>     
    );
}

export default App;
