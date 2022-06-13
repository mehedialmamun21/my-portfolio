import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import downloadIcon from '../../assets/images/download_icon.png';

const HomeDetails = () => {

    const [state] = useState({
        titleOne: "Hello, This is",
        titleTwo: "Md. Mehedi Al Mamun"
    })

    return (
        <center>

            <div className='lg:flex py-10'>

                <div className='w-50 lg:ml-40 mt-5'>

                    <h2>
                        <div className='text-lg text-center text-secondary'>{state.titleOne}</div>
                        <div className='text-2xl font-semibold text-center text-orange-500'>{state.titleTwo}</div>
                    </h2>

                    <div className='text font-bold text-xl text-accent text-center mt-4'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    "Web Developer",
                                    "Programmer",
                                    "Tech Enthusiast"
                                ],
                            }} />
                    </div>

                    <br />

                    <div>
                        <a href="Mehedi_Web_Developer_Resume.pdf" download="Mehedi_Web_Developer_Resume.pdf">
                            <center>
                                <button className='flex justify-center text-lg border border-green-500 text-green-500 px-3 py-2 rounded hover:text-white hover:bg-green-500'>
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