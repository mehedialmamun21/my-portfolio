import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiMessageDots } from 'react-icons/bi';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8c82sgd', 'template_ycoyo1p', form.current, 'WPhPoqlYxWHkHvPyC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert("Thank you! Your message has been successfully sent.");
        e.target.reset()
    };

    return (
        <section className='flex flex-col items-center justify-center pb-5 lg:pb-40 lg:pt-20'>

            <div className='w-full lg:w-6/12 mt-8 lg:mt-0 rounded-sm text-black px-5 lg:px-5 pb-0 lg:pb-0'>

                <div className='flex items-center justify-center'>
                    <h4 className='text-3xl lg:text-4xl text-zinc-700 font-semibold pb-4 lg:pb-7 flex items-center justify-center'> Get In  <span className='text-orange-500 ml-2'>Touch</span> </h4>
                </div>

                <div className='flex justify-center items-center mb-5'>
                    <p className='border border-blue-600 rounded-sm'> <span className='px-2 py-1 rounded-sm'>Email:</span>  <span className='text-blue-700 pr-2 py-1'>mehedi.hstu.cse@gmail.com</span> </p>
                </div>

                <center>
                    <div className="divider font-mono text-slate-700 text-xl lg:w-6/12">Or,</div>
                </center>

                <div className='px-2 lg:px-24 py-5 lg:py-10 lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-400 rounded-sm'>

                    <form className='row' ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col gap-5 w-full'>
                            <div className='flex gap-4 w-full'>
                                <input type="text" name="user_name" placeholder='Your Name' className='form-control stylish-input' required />

                                <input type="email" name="user_email" placeholder='Your Email' className='form-control stylish-input' required />
                            </div>

                            <input name="user_subject" type="text" placeholder="Subject" className="form-control stylish-input"></input>

                            <div>
                                <textarea name='message' rows="4" placeholder='Type Your Message' className='form-control stylish-textarea' required />
                            </div>

                            <div className='flex justify-end'>
                                <input type="submit" value="Send Message" className='form-control stylish-button' />
                            </div>

                        </div>

                    </form>
                </div>
            </div>

        </section >
    );
};

export default Contact;