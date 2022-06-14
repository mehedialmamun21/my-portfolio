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

    // console.log(projectData);

    const { img1, img2, img3 } = projectData;

    const linkData = siteLinks.find(siteLink => siteLink.id === parseInt(id))

    const { gitClient, gitServer, liveSite } = linkData;

    return (
        <section className='bg-primary text-white lg:flex px-20'>

            <div className='flex flex-col gap-4 py-10 px-10'>
                <a href={gitClient} target="_blank" className='border-2 border-green-600 hover:bg-green-800 px-3 py-1 lg:px-5 lg:py-2 font-bold text-orange-400 hover:text-white'>GitHub ( Client )</a>
                <a href={gitServer} target="_blank" className='border-2 border-green-600 hover:bg-green-800 px-3 py-1 font-bold text-orange-400 lg:px-5 lg:py-2 hover:text-white'>GitHub ( Server )</a>
                <a href={liveSite} target="_blank" className='border-2 border-orange-600 bg-green-800 hover:bg-green-600 px-3 py-1 font-bold lg:px-5 lg:py-2'>Live Site</a>
            </div>

            <div className='flex flex-col items-center justify-center gap-4 py-10 lg:w-3/4'>
                <img src={img1} alt="" width="1000px" />
                <img src={img2} alt="" width="1000px" />
                <img src={img3} alt="" width="1000px" />
            </div>

        </section>
    );
};

export default ProjectDetail;