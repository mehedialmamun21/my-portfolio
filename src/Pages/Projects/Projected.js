import React from 'react';

import { useNavigate } from 'react-router-dom';

import { TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";

const Projected = ({ project }) => {
    const { id, img, name, about } = project;

    const navigate = useNavigate();

    const navigateToProjectDetail = id => {
        navigate(`/detail/${id}`);
    }

    return (

        <div class="card lg:card-side border-2 border-t-purple-500 border-zinc-300 rounded-none bg-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:px-0">
            {/* <div class="card lg:card-side border border-zinc-300 rounded-none bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:px-0" data-aos="zoom-in-right"> */}
            {/* <div class="card lg:card-side border border-zinc-300 rounded-none bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:px-7"> */}

            {/* <figure class="px-5 lg:px-5 py-5 lg:py-10">
                <img src={img} alt="" class="rounded-xl " />
            </figure> */}

            <div class="card-body ">
                <h2 class="card-title text-lg text-zinc-700 flex mb-3 font-sans">{name}</h2>
                <p className='text-zinc-600 text-sm mb-3 font-sans'>{about}</p>
                <div className='flex justify-between items-center'>
                    {/* <button className='btn text-white w-2/4 lg:w-2/6 border-none rounded-none hover:bg-gradient-to-r hover:from-[var(--primary-blue)] hover:to-[var(--primary-purple)]' onClick={() => navigateToProjectDetail(id)}>Details</button> */}
                    <button className='bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] hover:bg-gradient-to-r hover:from-[var(--primary-blue)] hover:to-[var(--primary-purple)] text-white px-7 lg:px-7 py-2 text-lg' onClick={() => navigateToProjectDetail(id)}>Details</button>
                    <div className='flex gap-1'>
                        <TbBrandJavascript className='text-yellow-600' size="2rem" />
                        <TiHtml5 className='text-orange-700' size="2rem" />
                        <IoLogoCss3 className='text-blue-600' size="2rem" />
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Projected;