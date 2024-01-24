import React from 'react';
import { BsLightningChargeFill, BsPatchQuestion, BsTelephoneInbound } from 'react-icons/bs'
import { TbBrandJavascript } from 'react-icons/tb';
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaAngular } from 'react-icons/fa';
import { SiMysql, SiFirebase, SiMongodb, SiDjango } from 'react-icons/si';
import { TbBrandDjango } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

import homeImg from '../../assets/images/home.jpg'

const AboutMe = () => {
    return (
        <section className='px-5 lg:px-20 pt-20 pb-10 lg:pt-20'>

            <div>
                <h1 className='text-3xl lg:text-4xl text-center font-semibold text-zinc-700 pb-10 lg:py-10'>About <span className='text-orange-400'>Me</span> </h1>
            </div>
            <div>
                <div className='lg:grid grid-cols-1 lg:grid-cols-2'>

                    <div className="my-5 lg:my-0 flex justify-center items-center">

                        <center>
                            {/* <div className='px-5 lg:px-20 pt-0 lg:pt-0 pb-3 lg:pb-5 lg:my-20 w-full lg:w-9/12  bg-slate-200 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] border-2 border-l-teal-500 border-t-teal-500'> */}
                            <div className='px-5 lg:px-20 pt-0 lg:pt-0 pb-3 lg:pb-5 lg:my-20 w-full lg:w-9/12'>
                                <div className='px-7 lg:px-10 py-4 lg:py-1 rounded-full overflow-hidden'>
                                    <img src={homeImg} className='w-full h-auto' alt="" />
                                </div>

                                <p className='pt-2 lg:pt-5 flex items-center justify-center'> <TfiEmail size="1rem" className='text-orange-600' /> <span className='pl-3 text-md lg:text-md'>mehedi.hstu.cse@gmail.com</span> </p>
                                <p className='pt-2 flex items-center justify-center'> <BsTelephoneInbound size="1rem" className='text-orange-600' /> <span className='pl-3 text-md lg:text-md'>+880 1521413730</span> </p>

                            </div>
                        </center>

                    </div>

                    <div className='grid grid-cols-1'>

                        <div className='pt-5 lg:pt-0'>
                            <div className='flex items-center justify-center lg:justify-start pb-3 lg:pb-3'>
                                <h2 className='text-2xl pr-2 text-zinc-700 font-semibold'> What I Do </h2>
                                <BsPatchQuestion size="2rem" />
                            </div>
                            <span className='flex items-center justify-center lg:justify-start'>
                                <h1 className='text-2xl lg:text-2xl pb-3 text-zinc-800'>Full Stack Development</h1>
                            </span>
                            <div className='grid grid-cols-6 lg:grid-cols-12 pb-3'>
                                <FaReact className='text-blue-600' size="2.2rem" />
                                <TbBrandJavascript className='text-yellow-600' size="2.5rem" />
                                <TiHtml5 className='text-orange-700' size="2.2rem" />
                                <IoLogoCss3 className='text-blue-600' size="2.2rem" />
                                <FaNodeJs className='text-green-600' size="2.2rem" />
                                <SiMongodb className='text-green-500 bg-black rounded-full' size="2.2rem" />
                            </div>
                            <div className='flex'>
                                <span className='pt-2 lg:pt-0'>
                                    <BsLightningChargeFill className='text-slate-500 lg:mt-2' size="0.9rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Building responsive website front end using ReactJS.</p>
                            </div>
                            <div className='flex'>
                                <span className='pt-2 lg:pt-0'>
                                    <BsLightningChargeFill className='text-slate-500 lg:mt-2' size="0.9rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Creating application backend in Node.js, MongoDB & SQL.</p>
                            </div>
                            <div className='flex'>
                                <span className='pt-2 lg:pt-0'>
                                    <BsLightningChargeFill className='text-slate-500 lg:mt-2' size="0.9rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Managing database interactions and ensuring data integrity.</p>
                            </div>
                            <div className='flex'>
                                <span className='pt-2 lg:pt-0'>
                                    <BsLightningChargeFill className='text-slate-500 lg:mt-2' size="0.9rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Managing deployment processes to ensure efficient updates.</p>
                            </div>

                        </div>

                        <div className='pt-5 lg:pt-0'>

                            <h1 className='text-2xl lg:text-2xl flex justify-center lg:justify-start text-zinc-800 pb-3 lg:pt-3'>Familiar with other tools</h1>

                            <div className='grid grid-cols-6 lg:grid-cols-12 pb-3'>
                                <FaAngular className='text-red-600' size="2.2rem" />
                                <TbBrandDjango className='text-black' size="2.2rem" />
                                <FaDocker className='text-blue-500' size="2.2rem" />
                                <SiFirebase className='text-orange-500' size="2.2rem" />
                                <SiMysql className='text-blue-600' size="2.2rem" />
                                <FaAws className='text-orange-600' size="2.2rem" />
                            </div>

                            <div className='flex'>
                                <span className='pt-2 lg:pt-0'>
                                    <BsLightningChargeFill className='text-slate-500 lg:mt-2' size="0.9rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Familiar with containerization technologies for streamlined deployment and scaling.</p>
                            </div>

                            <div className='flex'>
                                <span className='pt-2 lg:pt-0'>
                                    <BsLightningChargeFill className='text-slate-500 lg:mt-2' size="0.9rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Optimizing code for better performance.</p>
                            </div>

                            <div className='flex'>
                                <span className='pt-2 lg:pt-0'>
                                    <BsLightningChargeFill className='text-slate-500 lg:mt-2' size="0.9rem" />
                                </span>
                                <p className='text-lg lg:text-xl text-zinc-600 pl-2'>Working on multiple cloud platforms.</p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* <div className='flex justify-end pr-5 lg:pr-0 lg:justify-center mt-7 lg:pl-44'>
                    <div>

                    </div>
                    <div className='px-4 rounded-sm lg:px-5 py-1 flex items-center justify-center bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] 
                        hover:bg-gradient-to-r hover:from-[var(--primary-blue)] hover:to-[var(--primary-purple)] text-white'>
                        <a href="/home" className='text-lg pr-2' target="_blank">More Details</a>
                        <BsArrowRight size="1.3rem" className='text-white' />
                    </div>
                </div> */}

                <div className='flex'>

                </div>
            </div>

        </section>
    );
};

export default AboutMe;