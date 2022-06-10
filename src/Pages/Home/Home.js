import React, { useState } from 'react';
// import Axios from 'axios';
// import fileDownload from 'js-file-download';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import bannerImg from '../../assets/images/bannerImg.jpg';
import downloadIcon from '../../assets/images/download_icon.png';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {

    const [state] = useState({
        titleOne: "Hi there,",
        titleTwo: "I'M",
        titleThree: "Md. Mehedi Al Mamun",
    })

    return (
        <section>

            <div className='lg:flex bg-black py-10'>

                <div className='w-50 lg:ml-16'>
                    <img src={bannerImg} alt="" width="700" className='rounded' />
                </div>

                <div className='w-50 lg:ml-40 mt-20'>
                    <h2>
                        <div className='text-xl text-white text-center'>{state.titleOne}</div>
                        <div className='text-2xl font-semibold text-white text-center'><span>{state.titleTwo}</span> </div>
                        <div className='text-3xl font-semibold text-center text-orange-500'>{state.titleThree}</div>
                    </h2>

                    <div className='text font-bold text-2xl text-blue-500 text-center mt-5'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    "Front-End Web Developer",
                                    "Tech Enthusiast"
                                ],
                            }} />
                    </div>

                    <div className='text-center mt-10'>
                        <Link to="/contact"><button type='button' className='btn btn-secondary text-sm hover:bg-accent text-white border-none'>Hire Me</button></Link>
                    </div>
                    <br />

                    <div>
                        <a href="Mehedi_Web_Developer_Resume.pdf" download="Mehedi_Web_Developer_Resume.pdf">
                            <center>
                                <button className='flex justify-center text-lg bg-accent px-3 py-2 rounded hover:text-white hover:bg-secondary'>
                                    <p className='mr-2'>Download Resume</p>
                                    <img src={downloadIcon} alt="" width="30" />
                                </button>
                            </center>
                        </a>
                    </div>
                </div>

            </div>


            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
        </section>
    );
};

export default Home;