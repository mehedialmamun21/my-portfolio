import React from 'react';
import { BsArrowRight, BsLightningChargeFill, BsStackOverflow } from 'react-icons/bs';
import { SiHackerrank, SiLeetcode, SiStopstalk } from 'react-icons/si';

const Education = () => {
    return (
        <section className='pt-10 pb-10 lg:pt-20'>

            <div>
                <h1 className='text-3xl lg:text-4xl flex items-center justify-center text-zinc-700 pb-10 font-semibold lg:py-10'>Basic <span className='text-orange-400'>Qualification</span> </h1>
            </div>
            <div>
                <div className='lg:grid grid-cols-1 lg:grid-cols-2'>

                    <div className="mb-5 lg:mb-0 flex justify-center">
                        <img src="https://i.postimg.cc/7LVwsZsq/6814115-removebg-preview.png" className='w-3/6 lg:w-4/12' alt="" />
                    </div>

                    <div className=''>

                        <div className='text-center lg:pr-40'>
                            <h2 className='text-4xl lg:text-4xl font-semibold pb-3 lg:pb-5'>Education</h2>
                            <p className='text-2xl lg:text-2xl font-semibold pb-3 lg:pb-5'>Basic Qualification and Certifcations</p>
                            <p className='text-xl lg:text-xl pb-5 lg:pb-5'>All Handle including Leetcode, HackerRank, Codeforces, Atcoder, Codechef, etc</p>
                            <div className='flex gap-7 items-center justify-center'>
                                <a href="#"><SiLeetcode size="2rem" /></a>
                                <a href="#"><SiHackerrank className='text-green-500' size="2rem" /></a>
                                <a href="#"><SiStopstalk className='text-red-700' size="2rem" /></a>
                                <a href="#"><BsStackOverflow className='text-yellow-500' size="2rem" /></a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex'>

                </div>
            </div>


            <div className='lg:px-48'>

                <h1 className='text-2xl lg:text-4xl text-center mt-12 mb-8 text-zinc-800 pr-4 lg:pr-7 font-semibold'>Degrees Received</h1>

                <center>
                    <div className='shadow-2xl border border-zinc-400 w-11/12'>

                        <div className='bg-blue-200 px-10 py-5 lg:pl-10 lg:pr-5 lg:py-2 lg:flex lg:justify-between'>

                            <div className='pt-0 lg:pt-4'>
                                <h2 className='text-lg lg:text-2xl font-semibold'>Hajee Mohammad Danesh Science & Technology University</h2>
                                <p className='text-sm lg:text-md pt-1'>HSTU, Dinajpur, Bangladesh</p>
                                <p className='text-md lg:text-lg pt-3 font-semibold'>B.Sc (Engg.) in Computer Science and Engineering</p>
                                <p className='text-sm lg:text-md pt-1'>2018 - JAN 2023</p>
                            </div>

                            <img src="https://i.postimg.cc/JztS8YWT/hstu-logo.png" className='h-2 lg:h-40 w-4/12 lg:w-2/12 invisible lg:visible' alt="" />

                        </div>
                        <div className='px-5 py-5'>
                            <div className='flex pb-3'>
                                <span className=''>
                                    <BsLightningChargeFill className='text-orange-500' size="1rem" />
                                </span>
                                <p className='text-md lg:text-md text-zinc-800 pl-2'> I have studied basic software engineering subjects like Data Structure, Algorithms, DBMS, Operating System, OOP, Artificial Intelligence, Machine Learning, Computer Architecture and Organization, Software Engineering, Web Engineering, Numerical Analysis, Cybersecurity, Cloud Computing, Data Communication and Networking etc.</p>
                            </div>
                            <div className='flex'>
                                <span>
                                    <BsLightningChargeFill className='text-orange-500' size="1rem" />
                                </span>
                                <p className='text-md lg:text-md text-zinc-800 pl-2'>Apart from this, I have done courses on Deep Learning, Cloud Computing and Full Stack Development.</p>
                            </div>
                            <div className='flex justify-end mt-7'>
                                <div>

                                </div>
                                <div className='flex items-center justify-center'>
                                    <BsArrowRight size="1.6rem" className='text-blue-700' />
                                    <a href="https://www.hstu.ac.bd/" rel="noreferrer" className='bg-gradient-to-r 
            from-[var(--primary-purple)] to-[var(--primary-blue)] hover:bg-gradient-to-r 
            hover:from-[var(--primary-blue)] hover:to-[var(--primary-purple)] 
            text-white px-5 lg:px-7 py-2 text-lg ml-3' target="_blank">Visit Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>

            </div>



            <div className='lg:px-48'>

                <h1 className='text-2xl lg:text-4xl text-center mt-12 mb-8 text-zinc-800 pr-4 lg:pr-7 font-semibold'>Certifications</h1>

                <center>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-1 items-center'>

                        <div className=''>
                            <img src="https://i.postimg.cc/1XbtYcMf/certification.png" className='h-64 lg:h-96' alt="" />
                        </div>

                        <div className=''>
                            <img src="https://i.postimg.cc/nL7qprNs/b-belt-poster.png" className='h-64 lg:h-96 rounded-xl w-10/12' alt="" />
                        </div>

                    </div>
                </center>

            </div>





        </section>
    );
};

export default Education;