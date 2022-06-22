import React from "react";
import styled from 'styled-components';
import "./Hello.css";

function Hello() {
    const StyledButton = styled.button`
        color:red;
        background-color:gray;
    `
    const PracticeStyle = {
        marginTop: '10px',
        backgroundColor: 'blue',
    }
    return (
        <>
            <StyledButton>나만의 버튼</StyledButton>
            <div style={PracticeStyle}>Hello World!</div>
            <div className='red'>Hello World!</div>
            <div style={PracticeStyle}>Hello World!</div>
        </>
    );
}
export default Hello;