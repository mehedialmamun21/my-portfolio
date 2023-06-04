import React from 'react';

const Footer = () => {
    var today = new Date();
    var date = today.getFullYear();
    return (
        <div>
            <footer class="footer footer-center p-10 text-white bg-primary rounded">

                <div className='text-base'>
                    <p>Copyright © {date} <span className='px-3'>||</span> All rights are reserved by <span className='text-orange-400'> Mehedi</span> </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;