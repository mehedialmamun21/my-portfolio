import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('service_tmmdrwb', 'template_ldytsjj', event.target, 'hw9Ysv3f0-IYVBsp0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Thank you! Your message has been successfully sent.");
        event.target.reset();
    }

    return (
        <section className='pt-20 pb-10 lg:pb-0 px-5 lg:px-20' id="contact">

            <div className='pb-10 lg:py-10'>

                <h1 className='text-3xl text-center lg:text-4xl font-semibold text-zinc-700'>Get in <span className='text-orange-400'>Touch</span> </h1>

            </div>

            <div className='lg:pb-10 lg:flex justify-center items-center'>

                {/* <div className='hidden lg:block'>
                    <img src="https://i.postimg.cc/wjR0JxFT/background-textbox-label-frame-flowers-wallpaper-plant-floral-design-pattern-graphics-transparent-pn.png" className='' alt="" />
                </div> */}

                <div className='w-full mt-8 lg:mt-0 md:w-5/12 text-black lg:px-0 lg:py-5'>

                    <form className='row' onSubmit={sendEmail}>

                        <div className='flex flex-col gap-4 w-full'>
                            <div className='flex gap-4 w-full'>
                                <input type="text" name="user_name" placeholder='Your Name' className='form-control shadow-2xl border border-zinc-500 bg-white w-full py-4 px-3 outline-none rounded-sm' required />
                                <input type="email" name="user_email" placeholder='Your Email' className='form-control shadow-2xl border border-zinc-500 bg-white w-full py-4 px-3 outline-none rounded-sm' required />
                            </div>

                            <input name="user_subject" type="text" placeholder="Subject" className="form-control shadow-2xl border border-zinc-500 bg-white py-4 px-3 h-14 w-full mt-0 lg:mt-2 focus:outline-none rounded-sm"></input>

                            <div>
                                <textarea name='message' rows="4" placeholder='Type Your Message' className='form-control shadow-2xl border border-zinc-500 bg-white w-full mt-0 lg:mt-2 py-4 px-3 outline-none rounded-sm' required />
                            </div>

                            <div className='flex justify-between'>
                                <div>

                                </div>
                                <div>
                                    <input type="submit" value="Send Message" className='form-control bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] hover:bg-gradient-to-r hover:from-[var(--primary-blue)] hover:to-[var(--primary-purple)] shadow-2xl border-none btn text-white w-full px-7 lg:px-10 py-3 mt-2 lg:mt-2 rounded-sm font-bold' />
                                </div>
                            </div>

                        </div>

                    </form>
                </div>


            </div>

        </section>
    );
};

export default Contact;