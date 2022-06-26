import React from 'react';
import navIcon from '../../assets/images/nav_icon.png';
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {

    return (
        <section className='sticky top-0 z-50 bg-teal-600 lg:px-10'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li>
                                <HashLink smooth to="/home#homeDetails" className='text-lg font-bold  hover:text-white hover:bg-teal-600'>Home</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/home#about" className='text-lg font-bold lg:mx-2 hover:text-white hover:bg-teal-600'>About</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/home#projects" className='text-lg font-bold lg:mx-2 hover:text-white hover:bg-teal-600'>Projects</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/home#blogs" className='text-lg font-bold lg:mx-2 hover:text-white hover:bg-teal-600'>Blogs</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/home#contact" className='text-lg font-bold lg:mx-2 hover:text-white hover:bg-teal-600'>Contact</HashLink>
                            </li>

                        </ul>
                    </div>
                    <HashLink to="/home#homeDetails" class="btn btn-ghost normal-case font-bold text-2xl border-none">
                        <div onClick={() => scroll.scrollToTop()}>
                            <img className='mx-20' src={navIcon} alt="" width="55" />
                        </div>
                    </HashLink>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-white">

                        <li>
                            <div onClick={() => scroll.scrollToTop()}>
                                <HashLink smooth to="/home#homeDetails" className='text-lg font-bold  hover:text-orange-400'>Home</HashLink>
                            </div>
                        </li>
                        <li>
                            <HashLink smooth to="/home#about" className='text-lg font-bold lg:mx-2 hover:text-orange-400'>About Me</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/home#projects" className='text-lg font-bold lg:mx-2 hover:text-orange-400'>Projects</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/home#blogs" className='text-lg font-bold lg:mx-2 hover:text-orange-400'>Blogs</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/home#contact" className='text-lg font-bold lg:mx-2 hover:text-orange-400'>Contact</HashLink>
                        </li>

                    </ul>
                </div>
            </div>
        </section >
    );
};

export default Navbar;