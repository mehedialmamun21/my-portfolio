import React from 'react';
import cPlusPlus from '../../assets/images/c++_logo.png'
import javaScript from '../../assets/images/javaScript_logo.png'
import es6 from '../../assets/images/ES6_logo.png'
import react from '../../assets/images/react_logo.png'
import html from '../../assets/images/html5_logo.png'
import css from '../../assets/images/css3_logo.png'
import bootstrap from '../../assets/images/bootstrap5_logo.png'
import tailwind from '../../assets/images/tailwindCss_logo.png'
import mongoDb from '../../assets/images/mongoDB_logo.png'
import nodeJS from '../../assets/images/nodeJs_logo.png'
import express from '../../assets/images/expressJs_logo.png'
import restApi from '../../assets/images/restApi_logo.png'
import stripe from '../../assets/images/stripe_logo.png'
import firebase from '../../assets/images/firebase_logo.png'
import git from '../../assets/images/git_logo.png'
import github from '../../assets/images/github_logo.png'
import heroku from '../../assets/images/heroku_logo.png'
import netlify from '../../assets/images/netlify_logo.png'
import vsCode from '../../assets/images/vsCode_logo.png'
import chromeDevTool from '../../assets/images/chromeDevTool_logo.jpg'
import figma from '../../assets/images/figma_logo.png'

const Skills = () => {
    return (
        <section className='p-10 bg-primary text-secondary'>

            <div className=''>
                <h1 className='text-3xl text-center text-secondary py-4'>My <span className='text-orange-500'>Skills</span> </h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-5 text-secondary'>
                    <div className=''>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={cPlusPlus} alt="" width="50" />
                            <p className='text-xl ml-5'>C++</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={javaScript} alt="" width="50" />
                            <p className='text-xl ml-5'>JavaScript</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={es6} alt="" width="50" />
                            <p className='text-xl ml-5'>ES6</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={react} alt="" width="50" />
                            <p className='text-xl ml-5'>React</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={html} alt="" width="50" />
                            <p className='text-xl ml-5'>HTML5</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={bootstrap} alt="" width="50" />
                            <p className='text-xl ml-5'>Bootstrap5</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={css} alt="" width="50" />
                            <p className='text-xl ml-5'>CSS3</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={tailwind} alt="" width="50" />
                            <p className='text-xl ml-5'>Tailwind CSS</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={mongoDb} alt="" width="50" />
                            <p className='text-xl ml-5'>MongoDB</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={nodeJS} alt="" width="50" />
                            <p className='text-xl ml-5'>Node.js</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={express} alt="" width="50" />
                            <p className='text-xl ml-5'>Express.js</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={restApi} alt="" width="50" />
                            <p className='text-xl ml-5'>REST API</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={stripe} alt="" width="50" />
                            <p className='text-xl ml-5'>Stripe Payment</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={firebase} alt="" width="50" />
                            <p className='text-xl ml-5'>Firebase</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={git} alt="" width="50" />
                            <p className='text-xl ml-5'>Git</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={github} alt="" width="50" />
                            <p className='text-xl ml-5'>GitHub</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={heroku} alt="" width="50" />
                            <p className='text-xl ml-5'>Heroku</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={netlify} alt="" width="50" />
                            <p className='text-xl ml-5'>Netlify</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={vsCode} alt="" width="50" />
                            <p className='text-xl ml-5'>Visual Studio Code</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={chromeDevTool} alt="" width="50" />
                            <p className='text-xl ml-5'>Chrome Dev Tool</p>
                        </div>
                        <div className='flex items-center mb-5 border-solid border-2 border-indigo-600 py-4 px-2 justify-center'>
                            <img src={figma} alt="" width="50" />
                            <p className='text-xl ml-5'>Figma</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;