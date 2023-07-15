import Projected from './Projected';

const Projects = () => {

    const projects = [
        { id: 1, img: "https://i.postimg.cc/c4tXWFx9/cms.png", name: 'Dental Service Provider', about: "This site is build for offering Dental services for users. User can booking consaltant and make payment by cards." },
        { id: 2, img: "https://i.postimg.cc/7Yr6GM5h/warehouse.png", name: 'Warehouse Management', about: "This site is build for selling modile phone. Customers can buy phone from here and admin can upload or delete products." },
        { id: 3, img: "https://i.postimg.cc/c4tXWFx9/cms.png", name: 'Leaf Disease Classification', about: "This site is build for predicting crop disease. Here, we've worked on Potato Leaf Disease prediction with CNN algorithm." },
        { id: 4, img: "https://i.postimg.cc/c4tXWFx9/cms.png", name: 'License Plate Detection', about: "By this, we can detect vehicles (car's) number plate accurately." },
        // { id: 5, img: "https://i.postimg.cc/PJtGWxYL/manufacturer.png", name: 'Manufacturer Website', about: "This website is build for a manufacturer company who manufactures some products and sell those here." }
    ]

    return (
        <section className='px-5 lg:px-20 pt-20 pb-10 lg:pt-20'>

            <div className=''>
                <h1 className='text-3xl lg:text-4xl text-zinc-700 pb-10 font-semibold lg:py-10'>Recent <span className='text-orange-400'>Projects</span> </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-'>
                    {
                        projects.map(project => <Projected
                            key={project.id}
                            project={project}
                        ></Projected>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Projects;