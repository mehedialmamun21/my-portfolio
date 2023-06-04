import React from 'react';
import { Link } from "react-scroll";
import blogImg from '../../assets/images/blogImg.png';
import touch from '../../assets/images/touch.png'

const Blogs = () => {
    return (
        <section className='px-5 lg:px-20'>

            <div className='text-secondary'>

                <div class="flex flex-col h-screen items-center justify-center">

                    <img class="w-40 lg:w-60" src={blogImg} alt="" />

                    <div class="mt-5  ">

                        <h1 class="md:text-4xl text-3xl  font-bold  text-white">
                            <span class="text-orange-600"> Blogs</span> <span className='text-zinc-700'>Comming Soon</span>
                        </h1>
                        <p class="w-full bg-orange-500 rounded-full mt-3 h-[1px]"></p>
                        <p class="ml-1 mt-2 text-center text-gray-500 text-lg">Keep an eye on my portfolio</p>

                        <div className='flex mt-10 items-center justify-center mx-auto'>
                            <Link to="contact" className='border-2 text-orange-400 hover:text-white border-orange-400 bg-primary px-5 rounded-3xl cursor-pointer' smooth={true} duration={1000}>Get In Touch <img className='inline' src={touch} alt="" width="40" /> </Link>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Blogs;