import React from 'react';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import HomeDetails from './HomeDetails';
import Footer from '../Shared/Footer/Footer';
import Skills from '../Skills/Skills';
import Blogs from '../Blogs/Blogs';

const Home = () => {

    return (
        <section className='bg-primary'>

            <div id='homeDetails'>
                <HomeDetails />
            </div>

            <div id='about'>
                <Skills />
            </div>

            <div id='projects'>
                <Projects />
            </div>

            <div id='blogs'>
                <Blogs />
            </div>

            <div id='contact'>
                <Contact />
            </div>

            <Footer />

        </section>
    );
};

export default Home;