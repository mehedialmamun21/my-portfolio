import React from 'react';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import HomeDetails from './HomeDetails';

const Home = () => {

    return (
        <section>
            <div>
                <HomeDetails />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
        </section>
    );
};

export default Home;