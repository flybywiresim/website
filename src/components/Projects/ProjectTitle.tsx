import React from 'react';

interface ProjectTitleProps {
    projectTitle: string;
}

const ProjectTitle: React.FC<ProjectTitleProps> = ({ projectTitle }) => (
    <div className="project-title">
        <h2 className="text-white uppercase">{projectTitle}</h2>
        <h2 className="text-transparent [text-stroke:1px_#3b82f6]">X</h2>
    </div>
);

export default ProjectTitle;
