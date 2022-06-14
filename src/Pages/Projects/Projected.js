import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projected = ({ project }) => {
    const { id, img, name, about } = project;

    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/detail/${id}`);
    }

    return (
        <center>
            <div class="card lg:w-2/3 border border-green-600 bg-gray-700 shadow-2xl lg:px-5" data-aos="zoom-in-right">
                <figure class="px-5 py-5">
                    <img src={img} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-lg text-green-600 flex justify-center">{name}</h2> <br />
                    <p className='text-secondary'>{about}</p>
                    <br />
                    <button className='btn rounded-md border-2 border-green-600 w-2/3 text-orange-400 hover:bg-green-500 hover:text-white' onClick={() => navigateToProductDetail(id)}>Details</button>
                </div>
            </div>
        </center>
    )
};

export default Projected;