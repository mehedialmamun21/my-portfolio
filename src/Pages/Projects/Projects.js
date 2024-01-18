import Projected from './Projected';

const Projects = () => {

    const projects = [
        { id: 1, img: "https://i.postimg.cc/c4tXWFx9/cms.png", name: 'DentaMart: Teledentistry Platform with E-Commerce Functionality', about: "This unique project not only facilitates easy scheduling of dental services but also enables users to explore and purchase dental care products directly through the website." },
        // { id: 2, img: "https://i.postimg.cc/7Yr6GM5h/warehouse.png", name: 'Warehouse Management', about: "This site is build for selling modile phone. Customers can buy phone from here and admin can upload or delete products." },
        { id: 3, img: "https://i.postimg.cc/c4tXWFx9/cms.png", name: 'Leaf Disease Classification', about: "Explore my latest project, a specialized platform for predicting crop diseases, where I've implemented a cutting-edge CNN algorithm for the accurate identification and classification of Potato Leaf Diseases. " },
        { id: 4, img: "https://i.postimg.cc/c4tXWFx9/cms.png", name: 'License Plate Detection', about: "This innovative system accurately identifies and captures license plates on cars, providing a valuable tool for applications such as law enforcement, traffic management, and parking enforcement." },
        // { id: 5, img: "https://i.postimg.cc/PJtGWxYL/manufacturer.png", name: 'Manufacturer Website', about: "This website is build for a manufacturer company who manufactures some products and sell those here." }
    ]

    return (
        <section className='px-5 lg:px-48 pt-20 pb-10 lg:pt-20'>

            <div className=''>
                <h1 className='text-3xl lg:text-4xl text-zinc-700 pb-10 font-semibold lg:py-10 flex justify-center'>Recent <span className='text-orange-400 pl-2'>Projects</span> </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5'>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:px-96'> */}
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