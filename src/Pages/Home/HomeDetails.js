// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react';
// import Typewriter from 'typewriter-effect';
// import { BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs';
// import { GrLinkedin } from 'react-icons/gr';
// import { FaInstagram } from 'react-icons/fa';

// // import homeImg from '../../assets/images/home.jpg'

// const HomeDetails = () => {

//     const [state] = useState({
//         titleOne: "Md. Mehedi Al Mamun",
//     })

//     return (
//         <section className='px-5 lg:px-24 py-0 lg:pt-20 lg:pb-10'>

//             <div className='grid grid-cols-1 lg:grid-cols-2'>

//                 <center>
//                     <div className='pt-20 pb-10 lg:py-20 lg:my-0 lg:w-2/3'>
//                         <h2>
//                             <div className='text-2xl lg:text-4xl text-zinc-700 font-serif font-semibold'>{state.titleOne}</div>
//                         </h2>

//                         <div className='text text-xl lg:text-xl text-orange-500 font-serif mt-4'>
//                             <Typewriter
//                                 options={{
//                                     autoStart: true,
//                                     loop: true,
//                                     delay: 40,
//                                     strings: [
//                                         "Full-Stack Developer",
//                                         "React Developer"
//                                     ],
//                                 }} />
//                         </div>


//                         {/* resume added here */}


//                         {/* <div className='mt-10'>
//                             <a href="Mehedi_Resume.pdf" download="Mehedi_Resume.pdf" className='inline-block'>
//                                 <button className='flex items-center text-lg px-10 py-1 rounded text-white bg-teal-600 hover:bg-orange-500'>
//                                     <p className='mr-2'>Resume</p>
//                                     <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
//                                 </button>
//                             </a>
//                         </div> */}


//                         <div className='mt-5'>
//                             <a href="/home" className='inline-block'>
//                                 <button className='flex items-center text-lg px-10 py-1 text-white hover:bg-gradient-to-r hover:from-[var(--primary-blue)] hover:to-[var(--primary-purple)]'>
//                                     <p className='pr-3'>Resume</p>
//                                     <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
//                                 </button>
//                             </a>
//                         </div>

//                         <div className='my-7 lg:border-l-4 lg:border-r-2 border-orange-500'>
//                             <p className='text-zinc-700 text-lg lg:text-2xl px-2 lg:px-1 font-sans font-semibold '>
//                                 A passionate individual who always thrives to work on end to
//                                 end products which develop sustainable and scalable social
//                                 and technical systems to create impact.
//                             </p>
//                         </div>

//                         <div class="flex gap-4 justify-center items-center">
//                             <a href="https://github.com/mehedialmamun21" target="_blank" rel="noreferrer">
//                                 <BsGithub className='text-xl lg:text-2xl text-black' size="1.9rem" />
//                             </a>
//                             <a href="https://www.linkedin.com/in/mehedihstu/" target="_blank" rel="noreferrer">
//                                 <GrLinkedin className='bg-white rounded text-xl text-blue-500 lg:text-2xl' size="1.9rem" />
//                             </a>
//                             <a href="https://twitter.com/mehedihstu" target="_blank" rel="noreferrer">
//                                 <BsTwitter className='text-xl lg:text-2xl text-teal-400' size="1.9rem" />
//                             </a>
//                             <a href="https://www.facebook.com/mehedihstu72" target="_blank" rel="noreferrer">
//                                 <BsFacebook className='text-xl lg:text-2xl text-blue-500' size="1.9rem" />
//                             </a>
//                             <a href="#" target="_blank" rel="noreferrer">
//                                 <FaInstagram className='text-xl lg:text-2xl text-pink-500' size="1.9rem" />
//                             </a>
//                         </div>

//                     </div>
//                 </center>

//                 <center>
//                     <div className='pt-10'>
//                         <img src="https://i.postimg.cc/XYWWXWCm/home1-removebg-preview.png" className='w-4/6 lg:w-8/12 rounded-md' alt="" />
//                     </div>
//                 </center>

//             </div>
//         </section>
//     );
// };

// export default HomeDetails;


// Import necessary libraries and components
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';

const HomeDetails = () => {
    const [state] = useState({
        titleOne: "Md. Mehedi Al Mamun",
    });

    return (
        <section className='px-5 lg:px-24 py-0 lg:pt-20 lg:pb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <center>
                    <div className='pt-20 pb-10 lg:py-20 lg:my-0 lg:w-2/3'>
                        <h2>
                            <div className='text-2xl lg:text-4xl text-zinc-700 font-serif font-semibold'>{state.titleOne}</div>
                        </h2>

                        <div className='text text-xl lg:text-xl text-orange-500 font-serif mt-4'>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: ["Full-Stack Developer", "React Developer"],
                                }}
                            />
                        </div>

                        <div className='mt-5'>
                            <a href="/home" className='inline-block'>
                                <button className='flex items-center text-lg px-5 py-0 text-white hover:bg-gradient-to-r hover:from-[var(--primary-blue)] hover:to-[var(--primary-purple)]'>
                                    <p className='pr-3 text-md'>Resume</p>
                                    <FontAwesomeIcon icon={faDownload} />
                                </button>
                            </a>
                        </div>

                        <div className='my-7 lg:border-l-4 lg:border-r-2 border-orange-500'>
                            <p className='text-zinc-700 text-lg lg:text-2xl px-2 lg:px-3 font-serif'>
                                A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
                            </p>
                        </div>

                        <div className='flex gap-4 justify-center items-center'>
                            <a href="https://github.com/mehedialmamun21" target="_blank" rel="noreferrer">
                                <BsGithub className='text-xl lg:text-2xl text-black' size="1.6rem" />
                            </a>
                            <a href="https://www.linkedin.com/in/mehedihstu/" target="_blank" rel="noreferrer">
                                <GrLinkedin className='bg-white rounded text-xl text-blue-500 lg:text-2xl' size="1.6rem" />
                            </a>
                            <a href="https://twitter.com/mehedihstu" target="_blank" rel="noreferrer">
                                <BsTwitter className='text-xl lg:text-2xl text-teal-500' size="1.6rem" />
                            </a>
                            <a href="https://www.facebook.com/mehedihstu72" target="_blank" rel="noreferrer">
                                <BsFacebook className='text-xl lg:text-2xl text-blue-500' size="1.6rem" />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaInstagram className='text-xl lg:text-2xl text-pink-500' size="1.6rem" />
                            </a>
                        </div>
                    </div>
                </center>

                <center>
                    <div className='pt-10 lg:pt-16'>
                        <img src="https://i.postimg.cc/XYWWXWCm/home1-removebg-preview.png" className='w-4/6 lg:w-7/12 rounded-md' alt="" />
                    </div>
                </center>
            </div>
        </section>
    );
};

// Include the HeadSection for tracking scripts
const HeadSection = () => {
    return (
        <head>
            <script type="text/javascript" src="https://freehitcounters.org/count/dowp"></script>
            <script type='text/javascript' src='https://whomania.com/ctr?id=8187674d2f9746a6a0b951eb1b4cbf36b2171f1e'></script>
        </head>
    );
};

// Main App component including HeadSection and HomeDetails
const App = () => {
    return (
        <html lang="en">
            <HeadSection />
            <body>
                <HomeDetails />
            </body>
        </html>
    );
};

export default App;
