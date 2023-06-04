import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
// import GlassCard from './GlassCard';

import { ReactComponent as MySVG } from '../../assets/images/home1.svg'

const HomeDetails = () => {

    const [state] = useState({
        titleOne: "Mehedi Al Mamun",
    })

    return (
        <section className='px-5 lg:px-20 lg:py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>

                {/* <div className='pt-7 lg:p-5 flex justify-center'>
                        <GlassCard />
                    </div> */}

                <center>
                    <div className='lg:py-10 pt-10 pb-20 lg:w-2/3'>
                        <h2>
                            <div className='text-3xl text-secondary font-serif font-semibold'>{state.titleOne}</div>
                        </h2>

                        <div className='text text-xl lg:text-xl text-orange-400 font-serif mt-4'>
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
                                <button className='flex items-center text-lg px-10 py-1 text-white bg-teal-600'>
                                    <p className='pr-3'>Resume</p>
                                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                </button>
                            </a>
                        </div>

                        <div className='mt-10 border-l-4 border-orange-500'>
                            <p className='text-slate-300 text-lg pl-2 font-serif'>
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