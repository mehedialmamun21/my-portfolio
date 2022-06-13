import React from 'react';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import HomeDetails from './HomeDetails';
import Footer from '../Shared/Footer/Footer';
import Skills from '../Skills/Skills';

const Home = () => {

    return (
        <section className='bg-primary'>

            <div>
                <HomeDetails />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>

            <Footer />
        </section>
    );
};

export default Home;