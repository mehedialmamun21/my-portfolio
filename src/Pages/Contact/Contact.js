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
        <div className='container border my-20 pb-5 w-1/2 bg-contact-backImg bg-center bg-cover'>
            <h1 className='py-10 text-center text-2xl'>Contact Form</h1>
            <form className='row' onSubmit={sendEmail}>

                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" className='form-control' required />
                </div>

                <div className='my-3'>
                    <label>Email</label>
                    <input type="email" name="user_email" className='form-control' required />
                </div>

                <div>
                    <label>Message</label>
                    <textarea name='message' rows="4" className='form-control' required />
                </div>

                <center>
                    <input type="submit" value="Send" className='form-control btn btn-accent mt-4 w-50' />
                </center>

            </form>
        </div>
    );
};

export default Contact;