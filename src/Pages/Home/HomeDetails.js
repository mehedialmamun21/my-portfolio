import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';

// import homeImg from '../../assets/images/home.jpg'

const HomeDetails = () => {

    const [state] = useState({
        titleOne: "Md. Mehedi Al Mamun",
    })

    return (
        <section className='px-5 lg:px-24 py-0 lg:pt-20 lg:pb-10'>

            <div className='grid grid-cols-1 lg:grid-cols-2'>

                <center>
                    <div className='pt-20 pb-10 lg:py-20 lg:my-0 lg:w-2/3'>
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
                            <a href="/home" className='inline-block'>
                                <button className='flex items-center text-lg px-10 py-1 text-white hover:bg-gradient-to-r hover:from-[var(--primary-blue)] hover:to-[var(--primary-purple)]'>
                                    <p className='pr-3'>Resume</p>
                                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                </button>
                            </a>
                        </div>

                        <div className='my-7 lg:border-l-4 lg:border-r-2 border-orange-500'>
                            <p className='text-zinc-700 text-lg lg:text-2xl px-2 lg:px-1 font-sans font-semibold '>
                                A passionate individual who always thrives to work on end to
                                end products which develop sustainable and scalable social
                                and technical systems to create impact.
                            </p>
                        </div>

                        <div class="flex gap-4 justify-center items-center">
                            <a href="https://github.com/mehedialmamun21" target="_blank" rel="noreferrer">
                                <BsGithub className='text-xl lg:text-2xl text-black' size="1.9rem" />
                            </a>
                            <a href="https://www.linkedin.com/in/mehedihstu/" target="_blank" rel="noreferrer">
                                <GrLinkedin className='bg-white rounded text-xl text-blue-500 lg:text-2xl' size="1.9rem" />
                            </a>
                            <a href="https://twitter.com/mehedihstu" target="_blank" rel="noreferrer">
                                <BsTwitter className='text-xl lg:text-2xl text-teal-400' size="1.9rem" />
                            </a>
                            <a href="https://www.facebook.com/mehedihstu72" target="_blank" rel="noreferrer">
                                <BsFacebook className='text-xl lg:text-2xl text-blue-500' size="1.9rem" />
                            </a>
                            <a href="" target="_blank" rel="noreferrer">
                                <FaInstagram className='text-xl lg:text-2xl text-pink-500' size="1.9rem" />
                            </a>
                        </div>

                    </div>
                </center>

                {/* <center>
                    <div className='px-5 lg:px-20 pt-0 lg:pt-10 pb-3 lg:pb-5 lg:my-20 w-full lg:w-9/12 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        <div className='px-7 lg:px-10 py-4 lg:py-1'>
                            <img src={homeImg} className='rounded-sm' alt="" />
                        </div>
                        <p className='pt-0 lg:pt-3 flex items-center justify-center'> <BsTelephoneInbound size="1.7rem" className='text-green-600 font' /> <span className='pl-5 text-lg lg:text-lg'>+880 1521413730</span> </p>
                    </div>
                </center> */}


                <center>
                    <div className='pt-10'>
                        <img src="https://i.postimg.cc/XYWWXWCm/home1-removebg-preview.png" className='w-4/6 lg:w-8/12 rounded-md' alt="" />
                    </div>
                </center>



                {/* <div className="my-5 lg:my-0 flex justify-center items-center bg-gray-200 lg:bg-gray-100">
                    <img src="https://i.postimg.cc/05WVtM9v/2143.jpg" className='w-4/5 lg:w-3/6 h-4/6 lg:h-4/6 rounded-sm' alt="" />
                </div> */}

            </div>
        </section>
    );
};

export default HomeDetails;