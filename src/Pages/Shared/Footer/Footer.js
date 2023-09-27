import React from 'react';
import { BiWinkSmile } from 'react-icons/bi';

const Footer = () => {
    var today = new Date();
    var date = today.getFullYear();
    return (
        <div className='px-5 lg:px-20 py-5 lg:py-10 mt-20 lg:mt-28 bg-slate-800'>
            <footer class="footer footer-center">
                <div className='text-base text-white lg:flex lg:items-center'>
                    <p className="lg:text-lg">Copyright © <span className='font-semibold'>{date}</span> </p>
                    <div className='flex items-center'>
                        <p className='pr-2 lg:text-lg'>All rights are reserved</p>
                        <BiWinkSmile size="1.4rem" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;