import React from 'react';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import HomeDetails from './HomeDetails';
// import Skills from '../Skills/Skills';
// import Blogs from '../Blogs/Blogs';
import Footer from '../Shared/Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';

const Home = () => {

    return (
        <section className='bg-zinc-100'>

            <div id='homeDetails'>
                <HomeDetails />
            </div>

            <div id='aboutme'>
                <AboutMe />
            </div>

            <div id='education'>
                <Education />
            </div>

            <div id='projects'>
                <Projects />
            </div>

            {/* <div id='blogs'>
                <Blogs />
            </div> */}

            <div id='contact'>
                <Contact />
            </div>

            <Footer />

        </section>
    );
};

export default Home;