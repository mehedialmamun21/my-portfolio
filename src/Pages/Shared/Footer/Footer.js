import React from 'react';
import { BiWinkSmile } from 'react-icons/bi';

const Footer = () => {
    var today = new Date();
    var date = today.getFullYear();
    return (
        <div className='mt-10 lg:mt-20 border border-t-2 border-zinc-300'>
            <footer class="footer footer-center p-10 lg:p-20">
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