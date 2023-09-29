import React from 'react';
import navIcon from '../../assets/images/nav_icon.png';
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from "react-scroll";
import { GrLinkedin, GrProjects, GrContactInfo } from 'react-icons/gr';
import { BsGithub, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineRoundaboutRight, MdCastForEducation } from 'react-icons/md';

const Navbar = () => {

    return (
        <section className='sticky top-0 z-50 bg-zinc-100 lg:px-20 shadow-sm bg-opacity-80 backdrop-blur'>

            <div class="navbar">

                <div class="navbar-start">
                    <div class="dropdown bg-cyan-500 rounded-md mr-3 lg:mr-0">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content p-2 shadow bg-gray-100 rounded-none w-52 mt-4">

                            <li className=''>
                                <HashLink smooth to="/home#homeDetails" className='text-lg text-zinc-800  hover:text-white hover:bg-primary'><AiOutlineHome className='' />Home</HashLink>
                            </li>

                            <li className=''>
                                <HashLink smooth to="/home#aboutme" className='text-lg  lg:mx-2 hover:text-white hover:bg-primary'><MdOutlineRoundaboutRight className='' />About Me</HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#education" className='text-lg  lg:mx-2 hover:text-white hover:bg-primary'><MdCastForEducation className='' />Education</HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#projects" className='text-lg text-zinc-800 lg:mx-2 hover:text-white hover:bg-primary'><GrProjects className='' />Projects</HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#contact" className='text-lg text-zinc-800 lg:mx-2 hover:text-white hover:bg-primary'><GrContactInfo className='' />Contact</HashLink>
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



                <div class="grid grid-flow-col gap-4 ml-6 lg:ml-28">

                    <a href="https://github.com/mehedialmamun21" target="_blank" rel="noreferrer"><BsGithub className='text-xl lg:text-2xl' /></a>

                    <a href="https://www.linkedin.com/in/mehedihstu/" target="_blank" rel="noreferrer"><GrLinkedin className='text-blue-500 bg-white rounded text-xl lg:text-2xl' /></a>

                    <a href="https://www.facebook.com/mehedihstu72" target="_blank" rel="noreferrer"><BsFacebook className='text-blue-500 text-xl lg:text-2xl' /></a>

                    {/* <BsInstagram className='text-red-500 text-xl lg:text-2xl' /> */}

                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><BsTwitter className='text-blue-500 text-xl lg:text-2xl' /></a>

                </div>


            </div>
        </section >
    );
};

export default Navbar;