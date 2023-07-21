import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

import GlassCard from './GlassCard';
import { BsFillPhoneFill, BsTelephoneInbound } from 'react-icons/bs';

const HomeDetails = () => {

    const [state] = useState({
        titleOne: "Md. Mehedi Al Mamun",
    })

    return (
        <section className='px-5 lg:px-24 py-0 lg:py-20'>

            <div className='grid grid-cols-1 lg:grid-cols-2'>

                <center>
                    <div className='pt-20 pb-5 lg:py-20 lg:my-12 lg:w-2/3'>
                        <h2>
                            <div className='text-2xl lg:text-4xl text-zinc-700 font-serif font-semibold'>{state.titleOne}</div>
                        </h2>

                        <div className='text text-xl lg:text-xl text-orange-500 font-serif mt-4'>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Full-Stack Developer",
                                        "React Developer"
                                    ],
                                }} />
                        </div>

                        {/* <div className='mt-10'>
                            <a href="Mehedi_Resume.pdf" download="Mehedi_Resume.pdf" className='inline-block'>
                                <button className='flex items-center text-lg px-10 py-1 rounded text-white bg-teal-600 hover:bg-orange-500'>
                                    <p className='mr-2'>Resume</p>
                                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                </button>
                            </a>
                        </div> */}

                        <div className='mt-5'>
                            <a href="#" className='inline-block'>
                                <button className='flex items-center text-lg px-10 py-1 text-white'>
                                    <p className='pr-3'>Resume</p>
                                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                </button>
                            </a>
                        </div>

                        <div className='mt-5 lg:border-l-4 lg:border-r-2 border-orange-500'>
                            <p className='text-zinc-700 text-lg lg:text-2xl px-2 lg:px-1 font-sans font-semibold '>
                                A passionate individual who always thrives to work on end to
                                end products which develop sustainable and scalable social
                                and technical systems to create impact.
                            </p>
                        </div>

                    </div>
                </center>

                <center>
                    <div className='px-10 pt-12 pb-7 lg:px-24 lg:pt-12 lg:pb-6 lg:my-20 w-full lg:w-5/6 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] px-7 lg:px-10 py-5 lg:py-3'>
                            <GlassCard />
                        </div>
                        <p className='pt-8 lg:pt-8 flex justify-center items-center'> <BsTelephoneInbound size="2rem" className='text-green-500' /> <span className='pl-5 text-lg lg:text-xl'>+880 1521413730</span> </p>
                    </div>
                </center>

            </div>
        </section>
    );
};

export default HomeDetails;