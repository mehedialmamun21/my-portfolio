import React from 'react';
import homeImg from "../../assets/images/home.jpg"
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled(animated.div)`
    display: inline-block;
    z-index: 1;
    position: relative;
    cursor: pointer;
`;

const StyledImg = styled.img`
    width: 280px;
    height: auto;
    border-radius: 2%;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 300, friction: 50 } }))
    return (
        <Container
            onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg className='bg-secondary' src={homeImg} alt="" />
        </Container>
    );
};

export default GlassCard;