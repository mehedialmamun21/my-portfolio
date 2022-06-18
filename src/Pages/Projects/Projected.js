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

            <div class="card lg:card-side mb-5 lg:mb-10 border border-green-600 lg:border-none bg-gray-700 shadow-2xl lg:px-5" data-aos="zoom-in-right">

                <figure class="px-5 lg:px-5 py-5 lg:py-20">
                    <img src={img} alt="" class="rounded-xl " />
                </figure>

                <div class="card-body lg:w-2/3 lg:py-20">
                    <h2 class="card-title text-xl text-accent flex justify-center">{name}</h2> <br />
                    <p className='text-secondary'>{about}</p>
                    <br />
                    <center>
                        <button className='btn rounded-md border-2 lg:border-none lg:bg-gray-500 lg:text-white border-green-600 w-2/3 lg:w-2/4 text-orange-400 hover:bg-green-500 hover:text-white hover:border-white' onClick={() => navigateToProductDetail(id)}>Details</button>
                    </center>
                </div>

            </div>

        </center>

    )
};

export default Projected;