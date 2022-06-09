import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-accent">
            <div class="navbar-start mx-10">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li >
                            <Link to="/" className='text-lg font-semibold'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className='text-lg font-semibold lg:mx-2 text-gray-100'>About</Link>
                        </li>
                        <li>
                            <Link to="/skills" className='text-lg font-semibold text-gray-100'>Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects" className='text-lg font-semibold lg:mx-2 text-gray-100'>Projects</Link>
                        </li>
                        <li>
                            <Link to="/education" className='text-lg font-semibold text-gray-100'>Education</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='text-lg font-semibold lg:mx-2 text-gray-100'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case font-bold text-2xl text-gray-100">Developer_Mehedi</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li >
                        <Link to="/" className='text-lg font-bold text-gray-100'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='text-lg font-bold lg:mx-2 text-gray-100'>About</Link>
                    </li>
                    <li>
                        <Link to="/skills" className='text-lg font-bold text-gray-100'>Skills</Link>
                    </li>
                    <li>
                        <Link to="/projects" className='text-lg font-bold lg:mx-2 text-gray-100'>Projects</Link>
                    </li>
                    <li>
                        <Link to="/education" className='text-lg font-bold text-gray-100'>Education</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='text-lg font-bold lg:mx-2 text-gray-100'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;