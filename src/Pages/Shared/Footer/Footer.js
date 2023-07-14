import React from 'react';
import { BiWinkSmile } from 'react-icons/bi';

const Footer = () => {
    var today = new Date();
    var date = today.getFullYear();
    return (
        <div className='px-5 lg:px-20 py-20 '>
            <footer class="footer footer-center">
                <div className='text-base text-black lg:flex lg:items-center'>
                    <p className="lg:text-lg">Copyright © <span className='font-semibold'>{date}</span> </p>
                    <div className='flex items-center'>
                        <p className='pr-3 lg:text-lg'>All rights are reserved</p>
                        <BiWinkSmile size="2rem" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;