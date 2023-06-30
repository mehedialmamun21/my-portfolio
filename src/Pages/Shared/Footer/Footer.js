import React from 'react';
import { BiWinkSmile } from 'react-icons/bi';

const Footer = () => {
    var today = new Date();
    var date = today.getFullYear();
    return (
        <div className='mt-10 lg:mt-20'>
            <footer class="footer footer-center py-10 text-black bg-gray-600">

                <div className='text-base flex items-center text-white'>
                    <p>Copyright © {date} <span className='px-1'> || </span> All rights are reserved</p>
                    <BiWinkSmile size="2rem" />
                </div>
            </footer>
        </div>
    );
};

export default Footer;