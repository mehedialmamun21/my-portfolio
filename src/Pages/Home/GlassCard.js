import React from 'react';
import profile from '../../assets/images/profile.png';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
    padding: 3em;
    background: #C7D2FE66;
    border-radius: 10px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    background-clid: border-box;
    cursor: pointer;
`;

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    border: 2px solid #000;
    border-radius: 30%;
`;
const StyledH1 = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilory";
    font-size: 20px;
`;

const GlassCard = () => {
    return (
        <Container className='text-secondary'>
            <StyledImg src={profile} alt="" />
            <StyledH1>Front End Developer</StyledH1>
        </Container>
    );
};

export default GlassCard;