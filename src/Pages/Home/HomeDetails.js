import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
// import GlassCard from './GlassCard';

import { ReactComponent as MySVG } from '../../assets/images/home1.svg'

const HomeDetails = () => {

    const [state] = useState({
        titleOne: "Md. Mehedi Al Mamun",
    })

    return (
        <section className='px-5 lg:px-20 lg:pt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>

                {/* <div className='pt-7 lg:p-5 flex justify-center'>
                        <GlassCard />
                    </div> */}

                <center>
                    <div className='lg:py-10 pt-20 pb-20 lg:w-2/3'>
                        <h2>
                            <div className='text-2xl lg:text-4xl text-zinc-700 font-serif font-semibold'>{state.titleOne}</div>
                        </h2>

                        <div className='text text-lg lg:text-xl text-orange-500 font-serif mt-4'>
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

                        <div className='mt-10'>
                            <a href="#" className='inline-block'>
                                <button className='flex items-center text-lg px-10 py-1 text-white bg-blue-400'>
                                    <p className='pr-3'>Resume</p>
                                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                </button>
                            </a>
                        </div>

                        <div className='mt-10 lg:border-l-4 lg:border-r-2 border-orange-500'>
                            <p className='text-zinc-500 text-lg lg:text-2xl px-2 lg:px-1 font-sans font-semibold '>
                                A passionate individual who always thrives to work on end to
                                end products which develop sustainable and scalable social
                                and technical systems to create impact.
                            </p>
                        </div>

                    </div>
                </center>

                <div className="">
                    <MySVG className="w-full h-3/4" />
                </div>
            </div>
        </section>
    );
};

export default HomeDetails;