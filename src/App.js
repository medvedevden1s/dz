import React from 'react';
import './App.css';
import Stepper from './Stepper';
import Button from './Components/Atoms/Button';
import Stepper2 from './Components/Stepper2'
import Content from './Components/Content';

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
            <h1>Create a RESERV > Set name and duration</h1>
            <Content>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                <Button primary onClick={handleNext}> 
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next ->'}
                </Button>
              </div>
            </Content>
          </article>
          <aside>
            <Stepper2 steps={steps} activeStep={activeStep}></Stepper2>
            {/* <Stepper steps={steps} activeStep={activeStep}></Stepper> */}
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
