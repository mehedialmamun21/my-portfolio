import React from 'react';
import manufacturer from '../../assets/images/manufacturer.png';
import warehouse from '../../assets/images/warehouse.png';
import cms from '../../assets/images/cms.png';

const Projects = () => {
    return (
        <section className='bg-gray-100 px-4'>

            <div className='pt-10 pb-20'>

                <h1 className='text-center text-3xl my-10'>Recent <span className='text-orange-500'>Projects</span> </h1>

                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>

                    <div class="card w-100 bg-base-100 shadow-xl ">
                        <figure class="px-10 pt-10 mb-5">
                            <img src={manufacturer} alt="manufacturer" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center bg-gray-500 text-white">
                            <h2 class="card-title text-2xl">Manufacturer Website</h2> <br />
                            <p>This website is build for a manufacturer company who manufactures a particular products and sell it on their website</p>
                            <button>Details</button>
                        </div>
                    </div>

                    <div class="card w-100 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10 mb-5">
                            <img src={warehouse} alt="warehouse" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center bg-gray-500 text-white">
                            <h2 class="card-title text-2xl">Warehouse Management</h2> <br />
                            <p>This site is build for selling modile phone. User can buying phone from here and admin can upload or delete products.</p>
                            <button>Details</button>
                        </div>
                    </div>

                    <div class="card w-100 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={cms} alt="cms" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center bg-gray-500 text-white">
                            <h2 class="card-title text-2xl mb-5">Service based Content Management System</h2>
                            <p>This site is build for offering Dental services for users. User can booking consaltant and make payment by cards.</p>
                            <button>Details</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Projects;