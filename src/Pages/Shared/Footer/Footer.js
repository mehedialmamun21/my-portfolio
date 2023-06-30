import React from 'react';
import { BiWinkSmile } from 'react-icons/bi';

const Footer = () => {
    var today = new Date();
    var date = today.getFullYear();
    return (
        <div className='mt-10 lg:mt-20'>
            <footer class="footer footer-center p-10 text-black bg-gray-600">

                <div className='text-base text-white lg:flex lg:items-center'>
                    <p>Copyright © {date}</p>
                    <div className='flex items-center'>
                        <p className='pr-3'>All rights are reserved</p>
                        <BiWinkSmile size="2rem" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;