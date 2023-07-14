import React from 'react';
import { BsLightningChargeFill, BsPatchQuestion } from 'react-icons/bs'

import { TbBrandJavascript } from 'react-icons/tb';
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaPhp, FaAws, FaDocker } from 'react-icons/fa';
// import { SiFlask } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import GlassCard from '../Home/GlassCard';

const AboutMe = () => {
    return (
        <section className='px-5 lg:px-20 pt-20 pb-10 lg:pt-20'>

            <div>
                <h1 className='text-3xl lg:text-4xl font-semibold text-zinc-700 pb-10 lg:py-10'>About <span className='text-orange-400'>Me</span> </h1>
            </div>
            <div>
                <div className='lg:grid grid-cols-1 lg:grid-cols-2'>

                    <div className="my-5 lg:my-0 flex justify-center">

                        <img src="https://i.postimg.cc/XYWWXWCm/home1-removebg-preview.png" className='w-3/5 lg:w-4/6' alt="" />

                    </div>

                    <div className='grid grid-cols-1'>

                        <div className='pt-5 lg:pt-0'>
                            <div className='flex items-center pb-5 lg:pb-5'>
                                <h2 className='text-3xl pr-2 text-zinc-900 font-semibold'> What I Do </h2>
                                <BsPatchQuestion size="2rem" />
                            </div>
                            <h1 className='text-2xl lg:text-3xl pb-5 text-zinc-800'>Full Stack Development</h1>
                            <div className='grid grid-cols-5 lg:gap-0 lg:grid-cols-10 pb-5'>
                                <TbBrandJavascript className='text-yellow-600' size="3rem" />
                                <TiHtml5 className='text-orange-700' size="3rem" />
                                <IoLogoCss3 className='text-blue-600' size="3rem" />
                                <FaPhp className='text-violet-700' size="3rem" />
                                <FaReact className='text-blue-600' size="3rem" />
                                {/* <SiFlask className='text-green-600' size="3rem" /> */}
                                <FaDocker className='text-blue-500' size="3rem" />
                                <SiMysql className='text-violet-700' size="3rem" />
                                <FaAws className='text-orange-500' size="3rem" />
                            </div>
                            <div className='flex items-center'>
                                <span>
                                    <BsLightningChargeFill className='text-orange-500' size="1rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Building responsive website front end using ReactJS</p>
                            </div>
                            <div className='flex items-center'>
                                <span>
                                    <BsLightningChargeFill className='text-orange-500' size="1rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Creating application backend in PHP, SQL & Flask</p>
                            </div>
                        </div>

                        <div className='pt-5 lg:pt-0'>

                            <h1 className='text-2xl lg:text-3xl text-zinc-800 pb-3 lg:pt-7'>Familiar with other tools</h1>

                            <div className='flex items-center'>
                                <span>
                                    <BsLightningChargeFill className='text-orange-500' size="1rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Experience working on multiple cloud platforms</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='flex'>

                </div>
            </div>

        </section>
    );
};

export default AboutMe;