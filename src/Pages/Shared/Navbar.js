// import React from 'react';
// import navIcon from '../../assets/images/nav_icon.png';
// import { HashLink } from 'react-router-hash-link';
// import { animateScroll as scroll } from "react-scroll";
// import { GrLinkedin, GrProjects, GrContactInfo } from 'react-icons/gr';
// import { BsGithub, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
// import { AiOutlineHome } from 'react-icons/ai';
// import { MdOutlineRoundaboutRight, MdCastForEducation } from 'react-icons/md';

// const Navbar = () => {

//     return (
//         <section className='sticky top-0 z-50 bg-zinc-100 lg:px-20 shadow-sm bg-opacity-80 backdrop-blur'>
//             {/* <section className='bg-zinc-100 lg:px-20 shadow-sm bg-opacity-80 backdrop-blur'> */}

//             <div class="navbar">

//                 <div class="navbar-start">
//                     <div class="dropdown  rounded-md mr-1 lg:mr-0">
//                         <label tabindex="0" class="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabindex="0" class="menu menu-compact dropdown-content p-2 shadow bg-gray-100 rounded-none w-52 mt-4">

//                             <li className=''>
//                                 <HashLink smooth to="/home#homeDetails" className='text-lg hover:text-white hover:bg-primary'><AiOutlineHome /> <span className='text-sky-600'>Home</span> </HashLink>
//                             </li>

//                             <li className=''>
//                                 <HashLink smooth to="/home#aboutme" className='text-lg  lg:mx-2 hover:text-white hover:bg-primary'><MdOutlineRoundaboutRight /> <span className='text-sky-600'>About Me</span> </HashLink>
//                             </li>

//                             <li>
//                                 <HashLink smooth to="/home#education" className='text-lg  lg:mx-2 hover:text-white hover:bg-primary'><MdCastForEducation /> <span className='text-sky-600'>Education</span> </HashLink>
//                             </li>

//                             <li>
//                                 <HashLink smooth to="/home#projects" className='text-lg lg:mx-2 hover:text-white hover:bg-primary'><GrProjects /> <span className='text-sky-600'>Projects</span> </HashLink>
//                             </li>

//                             <li>
//                                 <HashLink smooth to="/home#contact" className='text-lg lg:mx-2 hover:text-white hover:bg-primary'><GrContactInfo /> <span className='text-sky-600'>Contact</span> </HashLink>
//                             </li>

//                         </ul>
//                     </div>

//                     <div className=''>
//                         <HashLink to="/home#homeDetails">
//                             <div onClick={() => scroll.scrollToTop()}>
//                                 <img className='' src={navIcon} alt="" width="140" />
//                             </div>
//                         </HashLink>
//                     </div>

//                 </div>



//                 <div class="navbar-center hidden lg:flex">
//                     <ul class="menu menu-horizontal p-0 text-white">

//                         <li>
//                             <HashLink smooth to="/home#homeDetails" className='text-lg text-zinc-600  hover:text-orange-500 font-semibold'>Home</HashLink>
//                         </li>

//                         <li>
//                             <HashLink smooth to="/home#aboutme" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-500 font-semibold'>About Me</HashLink>
//                         </li>

//                         <li>
//                             <HashLink smooth to="/home#education" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-500 font-semibold'>Education</HashLink>
//                         </li>

//                         <li>
//                             <HashLink smooth to="/home#projects" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-500 font-semibold'>Projects</HashLink>
//                         </li>
//                         {/* <li>
//                             <HashLink smooth to="/home#blogs" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-400'>Blogs</HashLink>
//                         </li> */}
//                         <li>
//                             <HashLink smooth to="/home#contact" className='text-lg text-zinc-600 lg:mx-2 hover:text-orange-500 font-semibold'>Contact</HashLink>
//                         </li>

//                     </ul>
//                 </div>



//                 <div class="grid grid-flow-col gap-4 ml-6 lg:ml-28">

//                     <a href="https://github.com/mehedialmamun21" target="_blank" rel="noreferrer"><BsGithub className='text-xl lg:text-2xl' /></a>

//                     <a href="https://www.linkedin.com/in/mehedihstu/" target="_blank" rel="noreferrer"><GrLinkedin className='bg-white rounded text-xl lg:text-2xl' /></a>

//                     <a href="https://www.facebook.com/mehedihstu72" target="_blank" rel="noreferrer"><BsFacebook className='text-xl lg:text-2xl' /></a>

//                     {/* <BsInstagram className='text-red-500 text-xl lg:text-2xl' /> */}

//                     <a href="https://twitter.com/" target="_blank" rel="noreferrer"><BsTwitter className='text-xl lg:text-2xl' /></a>

//                 </div>


//             </div>
//         </section >
//     );
// };

// export default Navbar;



import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from 'react-scroll';
import { GrLinkedin, GrProjects, GrContactInfo } from 'react-icons/gr';
import { BsGithub, BsTwitter, BsFacebook } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineRoundaboutRight, MdCastForEducation } from 'react-icons/md';
import navIcon from '../../assets/images/nav_icon.png';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (section) => {
        setActiveLink(section);
    };

    return (
        <section className='sticky top-0 z-50 bg-zinc-100 lg:px-20 shadow-sm bg-opacity-80 backdrop-blur'>
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

                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-black">
                        <li>
                            <HashLink
                                smooth
                                to="/home#homeDetails"
                                className={`text-lg ${activeLink === 'home' ? 'underline' : 'text-zinc-600'
                                    }  hover:text-orange-500 font-semibold`}
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

                <div class="grid grid-flow-col gap-4 ml-6 lg:ml-28">
                    <a href="https://github.com/mehedialmamun21" target="_blank" rel="noreferrer">
                        <BsGithub className='text-xl lg:text-2xl' />
                    </a>
                    <a href="https://www.linkedin.com/in/mehedihstu/" target="_blank" rel="noreferrer">
                        <GrLinkedin className='bg-white rounded text-xl lg:text-2xl' />
                    </a>
                    <a href="https://www.facebook.com/mehedihstu72" target="_blank" rel="noreferrer">
                        <BsFacebook className='text-xl lg:text-2xl' />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <BsTwitter className='text-xl lg:text-2xl' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
