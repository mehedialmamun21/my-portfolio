import React from 'react';
import { BsLightningChargeFill } from 'react-icons/bs'

import { ReactComponent as MySVG } from '../../assets/images/home2.svg'

import { home } from '../../assets/images/home4.png'
import { TbBrandJavascript } from 'react-icons/tb';
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaPhp, FaAws, FaDocker } from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';

const AboutMe = () => {
    return (
        <section className='px-5 lg:px-20 lg:py-20'>

            <div>
                <h1 className='text-4xl text-zinc-700 py-10'>About <span className='text-orange-500'>Me</span> </h1>
                {/* <h2 className='text-3xl text-zinc-700 pb-4'> What I Do? </h2> */}
            </div>
            <div>
                <div className='lg:flex'>

                    <div className="mb-5 lg:mb-0 pl-7 lg:pl-0 pt-0 lg:pt-5">
                        {/* <MySVG className="w-full h-3/4" /> */}
                        <img src="https://i.postimg.cc/BbPFtdfN/home5-removebg-preview.png" alt="" />
                    </div>

                    <div className='grid grid-cols-1'>

                        <div className='lg:pl-16 pt-5'>

                            <h1 className='text-2xl lg:text-3xl pb-3 lg:pb-5'>Full Stack Development</h1>
                            <div className='grid grid-cols-7 lg:grid-cols-9 gap-2 lg:gap-5 pb-5'>
                                <TbBrandJavascript className='text-yellow-600' size="3rem" />
                                <TiHtml5 className='text-orange-700' size="3rem" />
                                <IoLogoCss3 className='text-blue-600' size="3rem" />
                                <FaReact className='text-blue-600' size="3rem" />
                                <FaPhp className='text-violet-700' size="3rem" />
                                <SiFlask className='text-green-600' size="3rem" />
                                <SiMysql className='text-violet-700' size="3rem" />
                                <FaAws className='text-orange-500' size="3rem" />
                                <FaDocker className='text-blue-500' size="3rem" />
                            </div>
                            <div className='flex items-center'>
                                <span>
                                    <BsLightningChargeFill className='text-orange-500' size="1rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-500 pl-2'>Building responsive website front end using ReactJS</p>
                            </div>
                            <div className='flex items-center'>
                                <span>
                                    <BsLightningChargeFill className='text-orange-500' size="1rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-500 pl-2'>Creating application backend in PHP, SQL & Flask</p>
                            </div>
                        </div>

                        <div className='lg:pl-16 pt-5 lg:pt-0'>

                            <h1 className='text-2xl lg:text-3xl pb-3 lg:pb-5'>Familiar with other tools</h1>

                            <div className='flex items-center'>
                                <span>
                                    <BsLightningChargeFill className='text-orange-500' size="1rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-500 pl-2'>Experience working on multiple cloud platforms</p>
                            </div>
                            {/* <div className='flex items-center'>
                                <span>
                                    <BsLightningChargeFill className='text-orange-500' size="1rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-500 pl-2'>Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
                            </div> */}
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