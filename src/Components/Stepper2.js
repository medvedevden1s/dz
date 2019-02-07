import React from 'react';
import styled from 'styled-components'

const StepperContainer = styled.div`
    flex-direction: column;
    display: flex;
    margin-left: 24px;
`;

const StepLabel = styled.span`
    padding-left: 8px;
    color: rgba(0, 0, 0, 0.54);
    font-family: "Verdana", sans-serif;
    line-height: 25px;

    ${props => props.active && `
    color: #EE4F2B;
    font-weight: bold;
    font-family: "Verdana", sans-serif;
    `};
`;

const StepNumber = styled.span`
    width: 30px;
    height: 30px;
    text-align: center;
    background: white;
    border: 1px solid #EE4F2B;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.54);
    line-height: 25px;

    ${props => props.active && `
    color: #EE4F2B;
    font-weight: bold;
    font-family: "Verdana", sans-serif;
    `};
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
`;

const Stepper = () => {
    return (
        <div>
            <StepperContainer>
                <StepBorderLine></StepBorderLine>
                <StepBorderLine></StepBorderLine>
                <div>
                    <StepContainer>
                        <StepNumber active>1</StepNumber>
                        <StepLabel active>Set name and duration</StepLabel>
                    </StepContainer>
                </div>
                <StepBorderLine></StepBorderLine>
                <div>
                    <StepContainer>
                        <StepNumber>2</StepNumber>
                        <StepLabel>Sipping address</StepLabel>
                    </StepContainer>
                </div>
            </StepperContainer>
        </div>
    );
}




export default Stepper;
