import { useParams } from 'react-router-dom';

const ProjectDetail = () => {

    const projects = [
        {
            id: 1,
            img1: "https://i.postimg.cc/4dgmV6dX/manufacturer-1.png",
            img2: "https://i.postimg.cc/cHh43P2c/manufacturer-2.png",
            img3: "https://i.postimg.cc/13DS6LNN/manufacturer-3.png",
            name: 'Manufacturer Website',
            about: "This website is build for a manufacturer company who manufactures a particular products and sell it on their website."
        },
        {
            id: 2,
            img1: "https://i.postimg.cc/3x4v5jbZ/warehouse1.png",
            img2: "https://i.postimg.cc/t4xYmqYS/warehouse2.png",
            img3: "https://i.postimg.cc/QCvjp7kX/warehouse3.png",
            name: 'Warehouse Management',
            about: "This site is build for selling modile phone. User can buying phone from here and admin can upload or delete products."
        },
        {
            id: 3,
            img1: "https://i.postimg.cc/XJPYjmP1/cms2.png",
            img2: "https://i.postimg.cc/XYnGzS69/cms3.png",
            img3: "https://i.postimg.cc/PqRCJCpM/cms4.png",
            name: 'Service based Content Management System',
            about: "This site is build for offering Dental services for users. User can booking consaltant and make payment by cards."
        }
    ]

    const siteLinks = [
        {
            id: 1,
            gitClient: "https://github.com/mehedialmamun21/manufacturer-website-client",
            gitServer: "https://github.com/mehedialmamun21/manufacturer-website-server",
            liveSite: "https://parts-supplier.web.app/"
        },
        {
            id: 2,
            gitClient: "https://github.com/mehedialmamun21/warehouse-management-client",
            gitServer: "https://github.com/mehedialmamun21/warehouse-management-server",
            liveSite: "https://smartphone-warehouse-7f130.web.app/"
        },
        {
            id: 3,
            gitClient: "https://github.com/mehedialmamun21/doctors-portal-website-client",
            gitServer: "https://github.com/mehedialmamun21/doctors-portal-website-server",
            liveSite: "https://doctors-portal-a0858.web.app/"
        }
    ]

    const { id } = useParams();

    const projectData = projects.find(project => project.id === parseInt(id))

    const { img1, img2, img3 } = projectData;

    const linkData = siteLinks.find(siteLink => siteLink.id === parseInt(id))

    const { gitClient, gitServer, liveSite } = linkData;

    return (
        <section className='bg-primary text-white lg:flex lg:px-20'>

            <div className='flex flex-col gap-4 py-10 lg:px-10 text-center px-20 t-0 b-0 lg:fixed z-10 w-full lg:w-2/12'>
                <a href={gitClient} target='_blank' rel='noreferrer' className='border-2 border-orange-600 hover:bg-green-800 mx-5 lg:mx-0 py-2 lg:px-5 lg:py-2 text-orange-400 hover:text-white'>GitHub client</a>

                <a href={gitServer} target='_blank' rel='noreferrer' className='border-2 border-orange-600 hover:bg-green-800 mx-5 lg:mx-0 py-2 text-orange-400 lg:px-5 lg:py-2 hover:text-white'>GitHub server</a>

                <a href={liveSite} target='_blank' rel='noreferrer' className='border-2 border-orange-600 bg-green-800 mx-5 lg:mx-0 py-2 hover:bg-green-600 lg:px-5 lg:py-2 text-white'>Live Site</a>
            </div>

            <div className='flex flex-col gap-4 py-10 mx-4 lg:w-full lg:mx-0 relative'>
                <div className='flex lg:justify-end w-full'>
                    <img src={img1} alt="" className='lg:w-8/12' />
                </div>
                <div className='flex lg:justify-end w-full'>
                    <img src={img2} alt="" className='lg:w-8/12' />
                </div>
                <div className='flex lg:justify-end w-full'>
                    <img src={img3} alt="" className='lg:w-8/12' />
                </div>
            </div>

        </section>
    );
};

export default ProjectDetail;