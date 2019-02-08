import React from 'react';
import Input from './Atoms/Input';
import styled from 'styled-components'


const StyledDiv = styled.div`
    display: flex;
    justify-content: right;
    margin-left: 75px;
    margin-top: 50px;
`;

const Content = () => {
    return (
        <StyledDiv>
            <Input id='reservName' placeholder='Weekend shopping' labelText='Name the Reserv'></Input>
        </StyledDiv>
    );
}



export default Content;