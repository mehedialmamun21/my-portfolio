import React from 'react';
import { BsArrowRight, BsLightningChargeFill, BsStackOverflow } from 'react-icons/bs';
import { SiHackerrank, SiLeetcode, SiStopstalk } from 'react-icons/si';

const Education = () => {
    return (
        <section className='px-5 lg:px-20 pt-20 pb-10 lg:pt-20'>

            <div>
                <h1 className='text-3xl lg:text-4xl text-zinc-700 pb-10 font-semibold lg:py-10'>Basic <span className='text-orange-400'>Qualification</span> </h1>
            </div>
            <div>
                <div className='lg:grid grid-cols-1 lg:grid-cols-2'>

                    <div className="mb-5 lg:mb-0 pt-0 lg:pt-5 flex justify-center">
                        <img src="https://i.postimg.cc/7LVwsZsq/6814115-removebg-preview.png" className='w-2/3 lg:w-3/5' alt="" />
                    </div>

                    <div className='pt-0 lg:pt-8'>

                        <div className='text-center'>
                            <h2 className='text-4xl lg:text-5xl font-semibold pb-3 lg:pb-5'>Education</h2>
                            <p className='text-2xl lg:text-3xl font-semibold pb-3 lg:pb-5'>Basic Qualification and Certifcations</p>
                            <p className='text-xl lg:text-2xl pb-3 lg:pb-4'>All Handle including Leetcode, HackerRank, Codeforces, Atcoder, Codechef, etc</p>
                            <div className='flex gap-7 items-center justify-center'>
                                <a href="#"><SiLeetcode size="3rem" /></a>
                                <a href="#"><SiHackerrank className='text-green-500' size="3rem" /></a>
                                <a href="#"><SiStopstalk className='text-red-700' size="3rem" /></a>
                                <a href="#"><BsStackOverflow className='text-yellow-500' size="3rem" /></a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex'>

                </div>
            </div>


            <div className='lg:px-48'>

                <h1 className='text-2xl lg:text-4xl text-center mt-24 mb-8 text-zinc-800 pr-4 lg:pr-7 font-semibold'>Degrees Received</h1>

                <div className='shadow-2xl'>
                    <div className='bg-blue-300 rounded-lg px-5 py-5 lg:flex justify-between'>

                        {/* <img src="https://i.postimg.cc/JztS8YWT/hstu-logo.png" className='w-2/12 shadow-2xl rounded-full px-4 py-1' alt="" /> */}

                        <div className='pb-1 lg:pb-0'>
                            <h2 className='text-lg lg:text-xl font-semibold'>Hajee Mohammad Danesh Science & Technology University</h2>
                            <p className='text-sm lg:text-lg pt-1 font-semibold'>Dinajpur, Bangladesh</p>
                            <p className='text-md lg:text-lg pt-3'>B.Sc (Engg.) in Computer Science and Engineering</p>
                        </div>
                        <div className='font-semibold'>
                            <p>2018 - JAN 2023</p>
                        </div>
                    </div>
                    <div className='px-5 py-5'>
                        <div className='flex items-center pb-3'>
                            <span>
                                <BsLightningChargeFill className='text-orange-500' size="1rem" />
                            </span>
                            <p className='text-md lg:text-lg text-zinc-800 pl-2'> I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.</p>
                        </div>
                        <div className='flex items-center'>
                            <span>
                                <BsLightningChargeFill className='text-orange-500' size="1rem" />
                            </span>
                            <p className='text-md lg:text-lg text-zinc-800 pl-2'>Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.</p>
                        </div>
                        <div className='flex justify-end mt-7'>
                            <div>

                            </div>
                            <div className='flex items-center justify-center'>
                                <BsArrowRight size="2rem" />
                                <a href="https://www.hstu.ac.bd/" className='bg-blue-400 text-white px-5 py-2 rounded text-lg ml-3' target="_blank">Visit Website</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    );
};

export default Education;