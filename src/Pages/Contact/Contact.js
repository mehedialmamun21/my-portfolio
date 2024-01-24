import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
        <section className='flex flex-col items-center justify-center pb-10 lg:pb-40 pt-20 lg:pt-20'>

            <div className='w-full lg:w-6/12 rounded-sm text-black px-5 lg:px-5 pb-0 lg:pb-0'>

                <div className='flex items-center justify-center'>
                    <h4 className='text-3xl lg:text-4xl text-zinc-700 font-semibold pb-10 lg:py-10 flex items-center justify-center'> Get In  <span className='text-orange-400 ml-2'>Touch</span> </h4>
                </div>

                <div className='px-2 lg:px-24 py-5 lg:py-10 lg:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:border-2 lg:border-slate-300 lg:bg-white'>

                    <form className='row' ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col gap-5 w-full'>
                            <div className='flex gap-4 w-full'>
                                <input type="text" name="user_name" placeholder='Your Name' className='form-control stylish-input shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' required />

                                <input type="email" name="user_email" placeholder='Your Email' className='form-control stylish-input shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' required />
                            </div>

                            <input name="user_subject" type="text" placeholder="Subject" className="form-control stylish-input shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></input>

                            <div>
                                <textarea name='message' rows="4" placeholder='Type Your Message' className='form-control stylish-textarea shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' required />
                            </div>

                            <div className='flex justify-end'>
                                {/* <input type="submit" value="Send Message" className='form-control stylish-button' /> */}
                                <input type="submit" value="Send Message" className='bg-gradient-to-r from-[var(--primary-purple)] 
                                to-[var(--primary-blue)] hover:bg-gradient-to-r hover:from-[var(--primary-blue)] hover:to-[var(--primary-purple)] text-white px-5 lg:px-7 py-2 text-lg ml-3 cursor-pointer' />
                            </div>

                        </div>

                    </form>
                </div>
            </div>

        </section >
    );
};

export default Contact;