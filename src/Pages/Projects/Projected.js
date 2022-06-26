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

            <div class="card lg:card-side mb-5 lg:mb-10 lg:border-none bg-gray-700 shadow-2xl lg:px-5" data-aos="zoom-in-right">

                <figure class="px-5 lg:px-5 py-5 lg:py-10">
                    <img src={img} alt="" class="rounded-xl " />
                </figure>

                <div class="card-body lg:w-2/3 lg:py-10">
                    <h2 class="card-title text-xl text-secondary flex justify-center">{name}</h2> <br />
                    <p className='text-secondary'>{about}</p>
                    <br />
                    <div className='text-white hidden lg:block'>
                        <button className='bg-gray-500 px-1 py-1 mr-2 mb-2 rounded'>React.js</button>
                        <button className='bg-gray-500 px-1 py-1 mr-2 mb-2 rounded'>Node.js</button>
                        <button className='bg-gray-500 px-1 py-1 mr-2 mb-2 rounded'>Express.js</button>
                        <button className='bg-gray-500 px-1 py-1 mr-2 mb-2 rounded'>MongoDB</button>
                        <button className='bg-gray-500 px-1 py-1 mr-2 mb-2 rounded'>Bootstrap4</button>
                        <button className='bg-gray-500 px-1 py-1 mr-2 mb-2 rounded'>Firebase</button>
                        <button className='bg-gray-500 px-1 py-1 mr-2 mb-2 rounded'>Heroku</button>
                    </div>
                    <br />
                    <center>
                        <button className='btn rounded-md text-white w-2/3 lg:w-2/4 bg-teal-500 hover:bg-orange-500' onClick={() => navigateToProductDetail(id)}>Details</button>
                    </center>
                </div>

            </div>

        </center>

    )
};

export default Projected;