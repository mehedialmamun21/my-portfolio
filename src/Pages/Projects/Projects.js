import Projected from './Projected';

const Projects = () => {

    const projects = [
        { id: 1, img: "https://i.postimg.cc/PJtGWxYL/manufacturer.png", name: 'Manufacturer Website', about: "This website is build for a manufacturer company who manufactures some products and sell those here." },
        { id: 2, img: "https://i.postimg.cc/7Yr6GM5h/warehouse.png", name: 'Warehouse Management', about: "This site is build for selling modile phone. Customers can buy phone from here and admin can upload or delete products." },
        { id: 3, img: "https://i.postimg.cc/c4tXWFx9/cms.png", name: 'CMS System', about: "This site is build for offering Dental services for users. User can booking consaltant and make payment by cards." }
    ]

    return (
        <section className='px-5 lg:px-20'>

            <div className='lg:py-20'>
                <h1 className='text-4xl text-secondary pb-10'>Recent <span className='text-orange-500'>Projects</span> </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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