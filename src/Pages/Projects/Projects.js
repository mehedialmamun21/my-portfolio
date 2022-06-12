import Projected from './Projected';

const Projects = () => {

    const projects = [
        { id: 1, img: "https://i.postimg.cc/76NjgmGM/manufacturer.png", name: 'Manufacturer Website', about: "This website is build for a manufacturer company who manufactures a particular products and sell it on their website." },
        { id: 2, img: "https://i.postimg.cc/rsPnJb8W/warehouse.png", name: 'Warehouse Management', about: "This site is build for selling modile phone. User can buying phone from here and admin can upload or delete products." },
        { id: 3, img: "https://i.postimg.cc/c4tXWFx9/cms.png", name: 'Service based Content Management System', about: "This site is build for offering Dental services for users. User can booking consaltant and make payment by cards." }
    ]

    return (
        <section className='bg-gray-200 px-4'>

            <div className='p-10'>
                <h1 className='text-center text-3xl pb-4'>Recent <span className='text-orange-500'>Projects</span> </h1>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 z-2'>
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