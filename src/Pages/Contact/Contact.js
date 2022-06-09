import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section>

            <div className='bg-gray-300 h-screen flex justify-center'>

                <form onSubmit="sendEmail(); reset(); return false;">
                    <h3 id='contact-header'>GET IN TOUCH</h3>
                    <input type="text" id="name" placeholder='Your Name' required />
                    <input type="email" id="email" placeholder='Email' required />
                    <input type="text" id="phone" placeholder='Phone No' required />
                    <textarea id="message" rows="4" placeholder='How can I help you?' ></textarea>
                    <button type="submit">Send</button>
                </form>

            </div>

            {/* <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script>
                function sendEmail(){
                    Email.send({
                        Host: "smtp.yourisp.com",
                        Username: "username",
                        Password: "password",
                        To: 'them@website.com',
                        From: "you@isp.com",
                        Subject: "This is the subject",
                        Body: "And this is the body"
                    }).then(
                        message => alert(message)
                    );
                }
            </script> */}

        </section>
    );
};

export default Contact;