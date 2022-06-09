import React, { useState } from 'react';
import Axios from 'axios';
import fileDownload from 'js-file-download';
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

    const download = (e) => {
        e.preventDefault();
        Axios({
            url: "http://localhost:4000",
            method: "GET",
            responseType: "blob"
        })
            .then((res) => {
                fileDownload(res.data, "Mehedi_Web_Developer_Resume.pdf")
            })
    }

    return (
        <div>
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
                        <Link to="/contact"><button type='button' className='btn btn-secondary hover:text-black font-bold hover:bg-accent text-white'>Hire Me</button></Link>
                    </div>

                    <br />

                    <div className='text-center'>
                        <a className='btn btn-accent hover:bg-secondary hover:text-white text-black font-semibold' href="https://drive.google.com/file/d/1KjLJo7K06H5mTI77cfvuUYXr_Lgw6-P1/view?usp=sharing" onClick="window.open('https://drive.google.com/file/d/1KjLJo7K06H5mTI77cfvuUYXr_Lgw6-P1/view?usp=sharing')" target="_blank">Download Resume</a>
                    </div>

                    {/* <button onClick={(e) => download(e)} type='button' className='btn btn-accent hover:bg-secondary hover:text-white text-black font-semibold'>
                        Download Resume
                        <img src={downloadIcon} alt="" width="30" className='ml-2' />
                    </button> */}

                </div>
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    );
};

export default Home;