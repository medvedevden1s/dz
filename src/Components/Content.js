import React from 'react';
import Input from './Atoms/Input';
import styled from 'styled-components'


const StyledDiv = styled.div`
    display: inline-flex;
    justify-content: right;
    margin-left: 75px;
    margin-top: 50px;
    flex-direction: column;
    width: 100%;
`;

const Button = styled.button`
  background: white;
  color: black;
  font-size: 1.2em;
  width: 7em;
  height: 120px;
  border-radius: 7px;
  border-color: #EE4F2B;
  margin-right: 20px;
  border-style: double;
  outline: none;
`;

const StyledInput = styled.input`
    height: 70px;
    width: 40rem;
    padding: 12px 20px;
    margin: 8px 0;
    margin-left: 40px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 20px;
`;

const StyledLabel = styled.label`
    font-size: 24px;
    margin-right: 15px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.54);
    line-height: 85px;
`;

const Content = (props) => {
    return (
        <StyledDiv>
            <div style={{ 'margin-bottom': '25px' }}>
                <StyledLabel>Name the Reserv</StyledLabel>
                <StyledInput id='reservName' placeholder='Weekend shopping'></StyledInput>
            </div>
            
            <div>
                <div style={{ 'margin-bottom': '25px', 'margin-left': '120px' }}>
                    <StyledLabel>Duration</StyledLabel>
                    <Button>4 WEEKS</Button>
                    <Button>6 MONTHS</Button>
                    <Button>CUSTOM</Button>
                </div>
            </div>            
            {props.children}
        </StyledDiv>
    );
}



export default Content;