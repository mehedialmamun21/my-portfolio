import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projected = ({ project }) => {
    const { id, img, name, about } = project;

    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/detail/${id}`);
    }

    return (
        <div class="card w-100 bg-base-100 shadow-xl ">
            <figure class="px-10 pt-10 mb-5">
                <img src={img} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center bg-gray-500 text-white">
                <h2 class="card-title text-2xl">{name}</h2> <br />
                <p>{about}</p>
                <button className='btn btn-accent px-3 py-2 rounded text-white hover:bg-secondary' onClick={() => navigateToProductDetail(id)}>Details</button>
            </div>
        </div>
    )
};

export default Projected;