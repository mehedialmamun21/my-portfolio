import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';

import homeImg from '../../assets/images/about.svg'

const HomeDetails = () => {
    const [state] = useState({
        titleOne: "Mehedi Al Mamun",
    });

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
                                    strings: ["Full-Stack Developer", "React Developer"],
                                }}
                            />
                        </div>

                        <div className='my-7 lg:border-l-4 lg:border-r-2 border-orange-500'>
                            <p className='text-zinc-700 text-lg lg:text-2xl px-2 lg:px-3 font-serif'>
                                A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
                            </p>
                        </div>

                        <div className='flex gap-4 justify-center items-center'>
                            <a href="https://github.com/mehedialmamun21" target="_blank" rel="noreferrer">
                                <BsGithub className='text-xl lg:text-2xl text-black' size="1.6rem" />
                            </a>
                            <a href="https://www.linkedin.com/in/mehedihstu/" target="_blank" rel="noreferrer">
                                <GrLinkedin className='bg-white rounded text-xl text-blue-500 lg:text-2xl' size="1.6rem" />
                            </a>
                            <a href="https://twitter.com/mehedihstu" target="_blank" rel="noreferrer">
                                <BsTwitter className='text-xl lg:text-2xl text-teal-500' size="1.6rem" />
                            </a>
                            <a href="https://www.facebook.com/mehedihstu72" target="_blank" rel="noreferrer">
                                <BsFacebook className='text-xl lg:text-2xl text-blue-500' size="1.6rem" />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaInstagram className='text-xl lg:text-2xl text-pink-500' size="1.6rem" />
                            </a>
                        </div>
                    </div>
                </center>

                <center>
                    <div className='pt-10 lg:pt-12'>
                        <img src={homeImg} className='w-9/12 lg:w-9/12 rounded-md' alt="" />
                    </div>
                </center>
            </div>
        </section>
    );
};

const HeadSection = () => {
    return (
        <head>
            <script type="text/javascript" src="https://freehitcounters.org/count/dowp"></script>
            <script type='text/javascript' src='https://whomania.com/ctr?id=8187674d2f9746a6a0b951eb1b4cbf36b2171f1e'></script>
        </head>
    );
};

const App = () => {
    return (
        <html lang="en">
            <HeadSection />
            <body>
                <HomeDetails />
            </body>
        </html>
    );
};

export default App;
