import { useParams } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
const ProjectDetail = () => {

    const projects = [
        {
            id: 1,
            img1: "https://i.postimg.cc/sgfgG2bq/image.png",
            img2: "https://i.postimg.cc/hjcycHXL/image.png",
            img3: "https://i.postimg.cc/SsbQxbNh/Screenshot-2024-01-18-051432.png"
        },

        // {
        //     id: 2,
        //     img1: "https://i.postimg.cc/3x4v5jbZ/warehouse1.png",
        //     img2: "https://i.postimg.cc/t4xYmqYS/warehouse2.png",
        //     img3: "https://i.postimg.cc/QCvjp7kX/warehouse3.png"
        //     // name: 'Warehouse Management',
        // },

        {
            id: 3,
            img1: "https://i.postimg.cc/YCYBNBXw/image.png",
            img2: "https://i.postimg.cc/N01c7vjH/image.png",
            img3: "https://i.postimg.cc/prHst3fK/image.png"
            // name: 'Leaf Disease Classification',
        },

        {
            id: 4,
            img1: "https://i.postimg.cc/5NDW6m0s/Screenshot-2023-06-30-015436.png",
            img2: "https://i.postimg.cc/8PfMR1pT/Screenshot-2023-06-30-020327.png",
            img3: "https://i.postimg.cc/SNcfMWfy/Screenshot-2023-06-30-020654.png"
            // name: 'License Plate Detection',
        },

        // {
        //     id: 5,
        //     img1: "https://i.postimg.cc/cHh43P2c/manufacturer-2.png",
        //     img2: "https://i.postimg.cc/13DS6LNN/manufacturer-3.png",
        //     img3: "https://i.postimg.cc/4dgmV6dX/manufacturer-1.png"
        //     // name: 'Manufacturer Website',
        // }
    ]

    const siteLinks = [

        {
            id: 1,
            gitClient: "https://github.com/mehedialmamun21/doctors-portal-website-client-new",
            gitServer: "https://github.com/mehedialmamun21/doctors-portal-website-server",
            liveSite: "https://doctors-portal-a0858.web.app/",
            projectReport: "https://drive.google.com/file/d/1Av3MzRO8BCIYCI4aLD_qcb5DB0pu7Zgc/view?usp=sharing"
        },

        // {
        //     id: 2,
        //     gitClient: "https://github.com/mehedialmamun21/warehouse-management-client",
        //     gitServer: "https://github.com/mehedialmamun21/warehouse-management-server",
        //     // liveSite: "https://smartphone-warehouse-7f130.web.app/"
        //     liveSite: ""
        // },

        {
            id: 3,
            gitClient: "",
            gitServer: "",
            liveSite: "",
            projectReport: ""
        },

        {
            id: 4,
            gitClient: "",
            gitServer: "",
            liveSite: "",
            projectReport: ""
        },

        // {
        //     id: 5,
        //     gitClient: "https://github.com/mehedialmamun21/manufacturer-website-client",
        //     gitServer: "https://github.com/mehedialmamun21/manufacturer-website-server",
        //     // liveSite: "https://parts-supplier.web.app/",
        //     liveSite: ""
        // }
    ]

    const { id } = useParams();

    const projectData = projects.find(project => project.id === parseInt(id))

    const { img1, img2, img3 } = projectData;

    const linkData = siteLinks.find(siteLink => siteLink.id === parseInt(id))

    const { gitClient, gitServer, liveSite, projectReport } = linkData;

    return (
        <section className='bg-zinc-200 text-white lg:flex lg:px-40'>

            <div className='flex flex-col gap-4 py-7 lg:py-10 lg:px-5 text-center px-20 t-0 b-0 lg:fixed z-10 w-full lg:w-2/12'>
                <a href={gitClient} target='_blank' rel='noreferrer' className='rounded-sm border lg:border border-zinc-500 bg-white mx-5 lg:mx-0 py-2 lg:px-5 lg:py-2 text-zinc-800 lg:text-lg hover:text-orange-500'><span className='flex justify-center items-center gap-3'><FiGithub size="1.3rem" /> GitHub Client</span></a>

                <a href={gitServer} target='_blank' rel='noreferrer' className='rounded-sm border lg:border border-zinc-500 bg-white mx-5 lg:mx-0 py-2 lg:px-5 lg:py-2 text-zinc-800 lg:text-lg hover:text-orange-500'> <span className='flex justify-center items-center gap-3'><FaGithub size="1.3rem" /> GitHub Server</span> </a>

                <a href={liveSite} target='_blank' rel='noreferrer' className='rounded-sm border lg:border border-zinc-500 bg-white mx-5 lg:mx-0 py-2 lg:px-5 lg:py-2 hover:text-orange-500 lg:text-lg text-zinc-800'> <span className='flex justify-center items-center gap-3'><FaExternalLinkAlt size="1rem" /> Live Site Link</span> </a>

                <a href={projectReport} target="_blank" rel="noreferrer" className="rounded-sm border lg:border border-zinc-500 bg-white mx-5 lg:mx-0 py-2 lg:px-5 lg:py-2 hover:text-orange-500 lg:text-lg text-zinc-800">
                    <span className="flex justify-center items-center gap-3">
                        <HiOutlineDocumentReport size="1.4rem" /> Project Report
                    </span>
                </a>

            </div>

            <div className='flex flex-col gap-5 lg:gap-7 pb-10 lg:py-10 mx-4 lg:w-full lg:mx-0 relative'>
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