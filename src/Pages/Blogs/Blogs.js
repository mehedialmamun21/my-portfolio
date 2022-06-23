import React from 'react';
import Particle from "../../components/Particle.jsx"

const Blogs = () => {
    return (
        <section className='lg:px-20'>
            <div className='text-secondary text-center py-10 lg:pt-20'>
                <Particle />
                <h1 className='text-center text-4xl text-secondary pb-10'>My <span className='text-orange-500'>Blogs</span> </h1>
                <div>
                    <h2 className='text-2xl'>Coming soon..</h2>
                </div>
            </div>
        </section>
    );
};

export default Blogs;