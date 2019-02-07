import React from 'react';
import styled from 'styled-components'

const StepperContainer = styled.div`
    flex-direction: column;
    display: flex;
    margin-left: 24px;
`;

const StepLabel = styled.span`
    padding-left: 8px;
    color: inherit;
    font-family: "Verdana", sans-serif;
    line-height: 25px;
`;

const Step = styled.span`
    width: 30px;
    height: 30px;
    text-align: center;
    background: white;
    border: 1px solid #EE4F2B;
    border-radius: 50%;
    color: inherit;
    line-height: 25px;
`;

const StepBorderLine = styled.span`
    margin-left: 14px;
    min-height: 24px;
    border-left-style: solid;
    border-left-width: 1px;
    display: block;
    border-color: #bdbdbd;
`;

const StepContainer = styled.span`
    display: flex;
    align-items: center;

    ${props => props.activeStep && `
        color: #EE4F2B;
        font-weight: bold;
        font-family: "Verdana", sans-serif;
    `};
`;

const Stepper = (props) => {
    const {steps, activeStep} = props;

    return (
        <div>
            <StepperContainer>
                <StepBorderLine></StepBorderLine>
                <StepBorderLine></StepBorderLine>								
				{steps.map((label, i) => (
                    <div key={i}>
                        <StepContainer activeStep={i === activeStep ? 'activeStep': ''}> 
                            <Step>{i+1}</Step>
                            <StepLabel >{label}</StepLabel>
                        </StepContainer>
                        {steps.length -1 === i ? "" : <StepBorderLine></StepBorderLine>}
                    </div>
                ))}
            </StepperContainer>
        </div>
    );
}

export default Stepper;
