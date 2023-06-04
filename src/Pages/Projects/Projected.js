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

        <div class="card lg:card-side lg:border-none rounded-none bg-white shadow-2xl lg:px-3" data-aos="zoom-in-right">

            {/* <figure class="px-5 lg:px-5 py-5 lg:py-10">
                <img src={img} alt="" class="rounded-xl " />
            </figure> */}

            <div class="card-body ">
                <h2 class="card-title text-xl text-zinc-700 flex">{name}</h2>
                <p className='text-zinc-600 text-sm'>{about}</p>
                <div className='flex justify-between items-center'>
                    <button className='btn text-white w-2/4 lg:w-2/4 mt-2 border-none rounded-none' onClick={() => navigateToProjectDetail(id)}>Details</button>
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