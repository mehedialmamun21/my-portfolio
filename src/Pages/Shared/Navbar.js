import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from 'react-scroll';
import { GrLinkedin, GrProjects, GrContactInfo } from 'react-icons/gr';
import { BsGithub, BsTwitter, BsFacebook } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineRoundaboutRight, MdCastForEducation } from 'react-icons/md';
import navIcon from '../../assets/images/nav_icon.png';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    const [searchQuery, setSearchQuery] = useState('');

    const handleLinkClick = (section) => {
        setActiveLink(section);
    };

    return (
        <section className='sticky top-0 z-50 bg-zinc-100 lg:px-40 shadow-sm bg-opacity-80 backdrop-blur'>
            <div class="navbar">

                <div class="navbar-start">
                    <div class="dropdown  rounded-md mr-1 lg:mr-0">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content p-2 shadow bg-gray-100 rounded-none w-52 mt-4">

                            <li className=''>
                                <HashLink smooth to="/home#homeDetails" className='text-lg hover:text-white hover:bg-primary'><AiOutlineHome /> <span className='text-sky-600'>Home</span> </HashLink>
                            </li>

                            <li className=''>
                                <HashLink smooth to="/home#aboutme" className='text-lg  lg:mx-2 hover:text-white hover:bg-primary'><MdOutlineRoundaboutRight /> <span className='text-sky-600'>About Me</span> </HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#education" className='text-lg  lg:mx-2 hover:text-white hover:bg-primary'><MdCastForEducation /> <span className='text-sky-600'>Education</span> </HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#projects" className='text-lg lg:mx-2 hover:text-white hover:bg-primary'><GrProjects /> <span className='text-sky-600'>Projects</span> </HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/home#contact" className='text-lg lg:mx-2 hover:text-white hover:bg-primary'><GrContactInfo /> <span className='text-sky-600'>Contact</span> </HashLink>
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




                <div className='ml-3 lg:mx-14' style={{ position: 'relative', width: '45%' }}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #808080',
                            borderRadius: '0px',
                            fontSize: '12px',
                            padding: '5px 40px 5px 5px', // Adjust padding as needed
                            width: '100%', // Adjust width as needed
                        }}
                    />
                    <span className="bg-zinc-600 text-white px-2 py-1 cursor-pointer" style={{ position: 'absolute', right: '0px', top: '0px' }}>
                        <BiSearchAlt2 size="1.3rem" />
                    </span>
                </div>




                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-black">
                        <li>
                            <HashLink
                                smooth
                                to="/home#homeDetails"
                                className={`text-lg ${activeLink === 'home' ? 'underline' : 'text-zinc-600'
                                    } lg:mx-2 hover:text-orange-500 font-semibold`}
                                onClick={() => handleLinkClick('home')}
                            >
                                Home
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="/home#aboutme"
                                className={`text-lg ${activeLink === 'aboutme' ? 'underline' : 'text-zinc-600'
                                    } lg:mx-2 hover:text-orange-500 font-semibold`}
                                onClick={() => handleLinkClick('aboutme')}
                            >
                                About Me
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="/home#education"
                                className={`text-lg ${activeLink === 'education' ? 'underline' : 'text-zinc-600'
                                    } lg:mx-2 hover:text-orange-500 font-semibold`}
                                onClick={() => handleLinkClick('education')}
                            >
                                Education
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="/home#projects"
                                className={`text-lg ${activeLink === 'projects' ? 'underline' : 'text-zinc-600'
                                    } lg:mx-2 hover:text-orange-500 font-semibold`}
                                onClick={() => handleLinkClick('projects')}
                            >
                                Projects
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="/home#contact"
                                className={`text-lg ${activeLink === 'contact' ? 'underline' : 'text-zinc-600'
                                    } lg:mx-2 hover:text-orange-500 font-semibold`}
                                onClick={() => handleLinkClick('contact')}
                            >
                                Contact
                            </HashLink>
                        </li>
                    </ul>
                </div>

                {/* <div class="grid grid-flow-col gap-4 ml-6 lg:ml-28 hidden lg:block">
                    <a href="https://github.com/mehedialmamun21" target="_blank" rel="noreferrer">
                        <BsGithub className='text-xl lg:text-2xl text-black' />
                    </a>
                    <a href="https://www.linkedin.com/in/mehedihstu/" target="_blank" rel="noreferrer">
                        <GrLinkedin className='bg-white rounded text-xl text-blue-500 lg:text-2xl' />
                    </a>
                    <a href="https://twitter.com/mehedihstu" target="_blank" rel="noreferrer">
                        <BsTwitter className='text-xl lg:text-2xl text-teal-400' />
                    </a>
                    <a href="https://www.facebook.com/mehedihstu72" target="_blank" rel="noreferrer">
                        <BsFacebook className='text-xl lg:text-2xl text-blue-500' />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <FaInstagram className='text-xl lg:text-2xl text-pink-500' />
                    </a>
                </div> */}

            </div>
        </section>
    );
};

export default Navbar;

