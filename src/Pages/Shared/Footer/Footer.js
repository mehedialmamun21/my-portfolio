import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsTelephoneInbound } from 'react-icons/bs';

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
        <div className='grid grid-cols-1 pl-12 lg:px-0 lg:flex lg:gap-3 items-center justify-center text-white mt-10 lg:mt-10 py-7 lg:py-10 text-sm bg-zinc-800'>

            <div className='font-mono pb-2 lg:pb-0'>

                <span className='font-mono'>Date: <span className='lg:border lg:border-white lg:rounded-full lg:px-3 lg:py-1'>{date}</span> </span>
                <span className='text-white mr-2 lg:mr-3 font-mono invisible lg:visible'> Time: <span className='border border-white rounded-full px-3 py-1'>{time}</span> </span>

                <span className='pl-0 lg:pl-3 lg:pr-5 mt-5 lg:mt-0 lg:inline block font-mono'>© ALL RIGHT RESERVED</span>
                <span className='invisible lg:visible'>|</span>

            </div>

            <div className='flex'>
                <span className='flex items-center font-mono'>Developed By: </span> <span className='text-yellow-500 pl-2 font-sans'>MEHEDI</span>
            </div>
        </div>
    );
};

export default Footer;










