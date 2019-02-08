import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 70px;
    width: 65%;
    padding: 12px 20px;
    margin: 8px 0;
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

const Input = (props) => {
    const {id, placeholder, labelText} = props
    return(
        <>
            <StyledLabel htmlFor={id}>{labelText}</StyledLabel>
            <StyledInput id={id} placeholder={placeholder}></StyledInput>
        </>
    );
}


export default Input;