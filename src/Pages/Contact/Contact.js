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
        event.target.reset()
    }
    return (
        <section className='py-10 flex justify-center'>
            <div className='lg:h-screen'>
                <div className='container border pb-5 bg-contact-backImg bg-cover w-50 px-20 py-5 rounded-xl'>
                    <h1 className='pt-5 pb-3 text-2xl text-white text-center'>Contact Form</h1>
                    <form className='row' onSubmit={sendEmail}>
                        <div className='flex flex-col items-center'>
                            <div>
                                <label className='text-warning'>Name</label>
                                <input type="text" name="user_name" className='form-control w-80' required />
                            </div>
                            <div className='my-3'>
                                <label className='text-warning'>Email</label>
                                <input type="email" name="user_email" className='form-control w-80' required />
                            </div>
                            <div>
                                <label className='text-warning'>Message</label>
                                <textarea name='message' rows="4" className='form-control w-80' required />
                            </div>
                            <input type="submit" value="Send" className='form-control btn btn-accent text-white hover:bg-secondary w-60 mt-8 font-bold' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;