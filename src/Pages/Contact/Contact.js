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
        <section className='py-10 flex justify-center bg-primary'>
            <div className=''>

                <div className='container pb-5 lg:px-5 rounded-xl my-20'>
                    <h1 className='py-8 text-3xl text-accent font-bold'>Get In Touch</h1>
                    <form className='row' onSubmit={sendEmail}>
                        <div className='flex flex-col items-center'>
                            <div>
                                <label className='text-warning'>Name</label>
                                <input type="text" name="user_name" className='form-control w-80 mt-2 rounded py-1 px-2 outline-none' required />
                            </div>
                            <div className='my-3'>
                                <label className='text-warning'>Email</label>
                                <input type="email" name="user_email" className='form-control w-80 mt-2 rounded py-1 px-2 outline-none' required />
                            </div>
                            <div>
                                <label className='text-warning'>Message</label>
                                <textarea name='message' rows="4" className='form-control w-80 mt-2 rounded py-1 px-2 outline-none' required />
                            </div>
                            <input type="submit" value="Send" className='form-control btn bg-orange-500 text-white w-80 mt-6 mb-2 font-bold' />
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;