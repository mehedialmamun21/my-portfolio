import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { useEffect, useState } from 'react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const heightToVisible = 250;
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        setIsVisible(scrollY > heightToVisible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Wrapper>
            {isVisible && (
                <div className='top-btn' onClick={goToTop}>
                    <IoIosArrowDropupCircle className='icon' size='3.7rem' color='#30b36d' />
                </div>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    .top-btn {
        position: fixed;
        bottom: 0.8rem;
        right: 0.1rem;
        z-index: 999;
        display: flex;
        cursor: pointer;
    }

    .icon {
        animation: gototop 1s ease-in-out infinite alternate;
        transition: transform 0.5s ease-in-out;
    }

    @keyframes gototop {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-0.5rem);
        }
    }
`;

export default GoToTop;

