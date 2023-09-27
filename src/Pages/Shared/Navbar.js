import React from 'react';
import navIcon from '../../assets/images/nav_icon.png';
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from "react-scroll";
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';

const Navbar = () => {

    return (
        <section className='sticky top-0 z-50 bg-zinc-100 lg:px-20 shadow-sm bg-opacity-80 backdrop-blur'>
            <div class="navbar">


                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content p-2 shadow bg-gray-200 rounded-none w-52 mt-4">

                            <li>
                                <HashLink smooth to="/home#homeDetails" className='text-lg text-zinc-800  hover:text-white hover:bg-primary border border-b-black'>Home</HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#aboutme" className='text-lg  lg:mx-2 hover:text-white hover:bg-primary border border-b-black'>About Me</HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#education" className='text-lg  lg:mx-2 hover:text-white hover:bg-primary border border-b-black'>Education</HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#projects" className='text-lg text-zinc-800 lg:mx-2 hover:text-white hover:bg-primary border border-b-black'>Projects</HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#contact" className='text-lg text-zinc-800 lg:mx-2 hover:text-white hover:bg-primary'>Contact</HashLink>
                            </li>

                        </ul>
                    </div>

                    <div className=''>
                        <HashLink to="/home#homeDetails">
                            <div onClick={() => scroll.scrollToTop()}>
                                <img className='' src={navIcon} alt="" width="140" />
                            </div>
                        </HashLink>
                    </div>

                </div>



                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-white">

                        <li>
                            <HashLink smooth to="/home#homeDetails" className='text-lg text-zinc-600  hover:text-orange-400 font-semibold'>Home</HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/home#aboutme" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-400 font-semibold'>About Me</HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/home#education" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-400 font-semibold'>Education</HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/home#projects" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-400 font-semibold'>Projects</HashLink>
                        </li>
                        {/* <li>
                            <HashLink smooth to="/home#blogs" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-400'>Blogs</HashLink>
                        </li> */}
                        <li>
                            <HashLink smooth to="/home#contact" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-400 font-semibold'>Contact</HashLink>
                        </li>

                    </ul>
                </div>



                <div class="grid grid-flow-col gap-4 lg:ml-28">
                    <BsGithub className='text-xl lg:text-2xl' />

                    <GrLinkedin className='text-blue-500 bg-white rounded text-xl lg:text-2xl' />

                    <BsFacebook className='text-blue-500 text-xl lg:text-2xl' />

                    <BsInstagram className='text-red-500 text-xl lg:text-2xl' />

                    <BsTwitter className='text-blue-500 text-xl lg:text-2xl' />
                </div>


            </div>
        </section >
    );
};

export default Navbar;