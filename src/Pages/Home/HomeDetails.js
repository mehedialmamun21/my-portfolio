import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import downloadIcon from '../../assets/images/download_icon.png';

const HomeDetails = () => {

    const [state] = useState({
        titleOne: "Hi there,",
        titleTwo: "I'M",
        titleThree: "Md. Mehedi Al Mamun",
    })

    return (
        <center>

            <div className='lg:flex py-10'>

                <div className='w-50 lg:ml-40 mt-5'>

                    <h2>
                        <div className='text-xl text-center'>{state.titleOne}</div>
                        <div className='text-xl font-semibold text-center'><span>{state.titleTwo}</span> </div>
                        <div className='text-2xl font-semibold text-center text-orange-500'>{state.titleThree}</div>
                    </h2>

                    <div className='text font-bold text-xl text-blue-500 text-center mt-4'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    "Web Developer",
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

                <div className='w-50 lg:ml-16'>
                    <img src="" alt="" width="700" className='rounded' />
                </div>

            </div>

        </center>
    );
};

export default HomeDetails;