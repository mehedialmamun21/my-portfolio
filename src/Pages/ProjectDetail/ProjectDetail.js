import React from 'react';

const ProjectDetail = ({ project }) => {
    const { id, img, name, about } = project;
    return (
        <div>
            <img src={img} alt="" />
            <h2>name : {name}</h2>
            <p>about : {about}</p>
        </div>
    );
};

export default ProjectDetail;