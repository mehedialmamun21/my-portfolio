import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import downloadIcon from '../../assets/images/download_icon.png';
import GlassCard from './GlassCard';

const HomeDetails = () => {

    const [state] = useState({
        titleOne: "Hello, This is",
        titleTwo: "Md. Mehedi Al Mamun"
    })

    return (
        <section className='px-5 lg:py-20'>

            <div className='lg:flex justify-center items-center'>

                <div className='lg:px-5 py-5 lg:w-1/2'>
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

                    <div className='text-secondary'>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I want to gain confidence and fame using my potential and express my innovative creative skills for self and company growth. Love to learn new technologies and trying to improve myself.</p>
                    </div>

                    <br />

                    <div>
                        <a href="Mehedi_Web_Developer_Resume.pdf" download="Mehedi_Web_Developer_Resume.pdf">

                            <button className='flex my-5 text-lg border border-green-500 text-green-500 px-8 py-2 rounded hover:text-white hover:bg-green-500'>
                                <p className='mr-2'>Resume</p>
                                <img src={downloadIcon} alt="" width="30" />
                            </button>

                        </a>
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