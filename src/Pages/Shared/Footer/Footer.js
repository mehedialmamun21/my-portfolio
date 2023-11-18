import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Footer = () => {
    // Initialize the time state
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update the time every second using useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    // Format the date and time
    const date = currentTime.getFullYear() + '-' + (currentTime.getMonth() + 1) + '-' + currentTime.getDate();
    const time = currentTime.getHours() + ':' + (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
    return (
        <div className='grid grid-cols-1 px-12 lg:px-0 lg:flex lg:gap-3 items-center justify-center text-white mt-5 lg:mt-5 py-5 lg:py-7 text-sm bg-zinc-800'>

            <p className='font-mono pb-2 lg:pb-0'>
                <span className='text-white mr-2 lg:mr-4 border border-white rounded-3xl px-3 py-1'>{time}</span>
                <span className=''>{date} </span>
                <span className='pl-0 lg:pl-5 lg:pr-5 mt-3 lg:mt-0 lg:inline block'>© ALL RIGHT RESERVED</span>
                <span className='invisible lg:visible'>|</span>
            </p>

            <div className='flex items-center'>
                <a href="https://mehedi404.web.app/" target="_blank" rel="noreferrer" className='pl-0 lg:pl-3'>
                    <p className='font-mono'>
                        <span className='relative group'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-y-0 lg:gap-x-3'>
                                <span className='flex items-center'>Design & Developed by :</span> <span className='flex items-center text-yellow-500 py-1'>MEHEDI AL MAMUN</span>
                            </div>
                            <span className='opacity-0 group-hover:opacity-100 bg-sky-600 rounded-sm text-white px-3 py-1 text-xs absolute top-0 mt-3 lg:-mt-5 left-1/5 lg:left-1/2 transform -translate-x-2/2'>
                                more about <span className=''>Mehedi</span>
                            </span>
                        </span>
                    </p>
                </a>
            </div>
        </div>
    );
};

export default Footer;