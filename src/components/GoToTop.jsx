import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Wrapper>
            {isVisible && (
                <div className="top-btn" onClick={goToTop}>
                    <IoIosArrowUp className="icon" />
                </div>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .top-btn {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    background-color: #4974a5;
    color: white;
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    z-index: 1000;
    transition: background-color 0.3s ease, transform 0.3s ease;

  }

  .icon {
    font-size: 1.5rem;
    animation: floatUp 1.2s ease-in-out infinite alternate;
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-4px);
    }
  }
`;

export default GoToTop;
