import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import GlassCard from './GlassCard';
import { Link } from "react-scroll";

const HomeDetails = () => {

    const [state] = useState({
        titleOne: "Hello, This is",
        titleTwo: "Md. Mehedi Al Mamun"
    })

    return (
        <section className='px-10'>

            <div className='lg:flex justify-center items-center lg:py-20'>

                <div className='lg:px-5 lg:py-10 pt-10 pb-20 lg:w-1/2'>
                    <h2>
                        <div className='text-lg  text-secondary'>{state.titleOne}</div>
                        <div className='text-2xl font-semibold  text-accent'>{state.titleTwo}</div>
                    </h2>

                    <div className='text text-xl text-orange-400  mt-4'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    "Programmer",
                                    "Front End Developer",
                                    "React Developer"
                                ],
                            }} />
                    </div>

                    <br />

                    <div className='text-secondary lg:w-3/4'>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I want to gain confidence and fame using my potential and express my innovative creative skills for self and company growth. Love to learn new technologies and trying to improve myself.</p>
                    </div>

                    <br />

                    <div className='mt-5'>
                        <a href="Mehedi_Resume.pdf" download="Mehedi_Resume.pdf" className='inline-block'>
                            <button className='flex items-center text-lg px-8 py-1 rounded bg-green-700 hover:bg-gray-700 text-white'>
                                <p className='mr-2'>Resume</p>
                                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                            </button>
                        </a>
                    </div>

                    <br />

                    <div className='my-5'>
                        <Link to="contact" className='border-2 text-orange-400 hover:text-white border-orange-400 bg-primary px-5 py-2 rounded-3xl mb-10 cursor-pointer' smooth={true} duration={1000}>Get In Touch</Link>
                    </div>

                </div>

                <center>
                    <div className='lg:p-5'>
                        <GlassCard />
                    </div>
                </center>

            </div>

        </section>
    );
};

export default HomeDetails;