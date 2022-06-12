import { useParams } from 'react-router-dom';

const ProjectDetail = () => {

    const projects = [
        { id: 1, img: "https://i.postimg.cc/76NjgmGM/manufacturer.png", name: 'Manufacturer Website', about: "This website is build for a manufacturer company who manufactures a particular products and sell it on their website." },
        { id: 2, img: "https://i.postimg.cc/rsPnJb8W/warehouse.png", name: 'Warehouse Management', about: "This site is build for selling modile phone. User can buying phone from here and admin can upload or delete products." },
        { id: 3, img: "https://i.postimg.cc/c4tXWFx9/cms.png", name: 'Service based Content Management System', about: "This site is build for offering Dental services for users. User can booking consaltant and make payment by cards." }
    ]

    const { id } = useParams();

    const projectData = projects.find(project => project.id === parseInt(id))

    console.log(projectData);

    const { img, name, about } = projectData;

    return (
        <div className='text-center mt-5 mb-10'>
            <center>
                <img src={img} alt="" width="800px" />
            </center>
            <div className='mt-5'>
                <h2>{name}</h2>
                <h2>{about}</h2>
            </div>
        </div>
    );
};

export default ProjectDetail;