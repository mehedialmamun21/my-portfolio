import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import GlassCard from './GlassCard';

const HomeDetails = () => {

    const [state] = useState({
        titleOne: "Mehedi Al Mamun",
    })

    return (
        <section className='px-10 lg:px-20'>

            <div className='lg:py-20'>

                <center>
                    <div className='pt-7 lg:p-5'>
                        <GlassCard />
                    </div>
                </center>

                <center>
                    <div className='lg:px-5 lg:py-10 pt-10 pb-20 lg:w-1/2'>
                        <h2>
                            <div className='text-4xl text-secondary font-semibold'>{state.titleOne}</div>
                        </h2>

                        <div className='text text-xl text-secondary mt-4'>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Frontend Web Developer",
                                        "React Developer"
                                    ],
                                }} />
                        </div>

                        <div className='mt-10'>
                            <a href="Mehedi_Resume.pdf" download="Mehedi_Resume.pdf" className='inline-block'>
                                <button className='flex items-center text-lg px-10 py-1 rounded text-white bg-teal-600 hover:bg-orange-500'>
                                    <p className='mr-2'>Resume</p>
                                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                </button>
                            </a>
                        </div>

                    </div>
                </center>

            </div>

        </section>
    );
};

export default HomeDetails;