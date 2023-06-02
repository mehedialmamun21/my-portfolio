import React from 'react';

import { useNavigate } from 'react-router-dom';

const Projected = ({ project }) => {
    const { id, img, name, about } = project;

    const navigate = useNavigate();

    const navigateToProjectDetail = id => {
        navigate(`/detail/${id}`);
    }

    return (

        <div class="card lg:card-side lg:border-none rounded-none bg-gray-200 shadow-2xl lg:px-3" data-aos="zoom-in-right">

            {/* <figure class="px-5 lg:px-5 py-5 lg:py-10">
                <img src={img} alt="" class="rounded-xl " />
            </figure> */}

            <div class="card-body ">
                <h2 class="card-title text-xl text-black flex">{name}</h2>
                <p className='text-black text-sm'>{about}</p>
                <button className='btn text-white w-2/4 lg:w-2/4 mt-2 border-none rounded-none' onClick={() => navigateToProjectDetail(id)}>Details</button>
            </div>
        </div>

    )
};

export default Projected;