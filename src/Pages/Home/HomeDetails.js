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
        <section className='px-10 lg:py-20'>

            <div className='lg:flex justify-center items-center'>

                <div className='px-5 py-5 w-1/2'>
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
                                    "Tech Enthusiast",
                                    "Web Developer",
                                    "Programmer",
                                ],
                            }} />
                    </div>

                    <br />

                    <div className='text-secondary'>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local and multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    </div>

                    <br />

                    <div>
                        <a href="Mehedi_Web_Developer_Resume.pdf" download="Mehedi_Web_Developer_Resume.pdf">

                            <button className='flex justify-center text-lg border border-green-500 text-green-500 px-2 py-1 rounded hover:text-white hover:bg-green-500'>
                                <p className='mr-2'>Resume</p>
                                <img src={downloadIcon} alt="" width="30" />
                            </button>

                        </a>
                    </div>

                </div>

                <div className='lg:p-5'>
                    <GlassCard />
                </div>

            </div>

        </section>
    );
};

export default HomeDetails;