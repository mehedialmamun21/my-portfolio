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
        <section className='bg-gray-100 py-3'>
            <div className='container border pb-5 w-1/2 bg-contact-backImg bg-cover'>
                <h1 className='pt-3 pb-3 text-2xl text-white text-center'>Contact Form</h1>
                <form className='row' onSubmit={sendEmail}>
                    <div className='flex flex-col items-center'>
                        <div className='w-3/4 text-warning'>
                            <label>Name</label>
                            <input type="text" name="user_name" className='form-control' required />
                        </div>
                        <div className='my-3 w-3/4 text-warning'>
                            <label>Email</label>
                            <input type="email" name="user_email" className='form-control' required />
                        </div>
                        <div className='w-3/4 text-warning'>
                            <label>Message</label>
                            <textarea name='message' rows="4" className='form-control' required />
                        </div>
                        <input type="submit" value="Send" className='form-control btn btn-accent text-white hover:bg-secondary w-50 mt-4 font-bold' />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;