import React from 'react';

const Footer = () => {
    var today = new Date();
    var date = today.getFullYear();
    return (
        <div>
            <footer class="footer footer-center p-10 text-black bg-zinc-200 rounded">

                <div className='text-base'>
                    <p className='px-5 py-1'>Copyright © {date} <span className='px-1'>💛</span> All rights are reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;