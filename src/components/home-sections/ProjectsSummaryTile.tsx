﻿import globals from '../../utils/globals';
import React from 'react';
import Lightbox from 'react-image-lightbox';
import { getProjectSkills, IProject } from '../../data/projects';

//Clicking on the summary tile will navigate to a seperate page.
//Should be able to navigate to the page directly using URL.
interface IProjectProps {
    project: IProject;
}

interface Props extends IProjectProps {
}

export const ProjectsSummaryTile = (props: Props): JSX.Element => {
    const project: IProject = props.project;

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = React.useState<number>(0);
    const [hasImages, setHasImages] = React.useState<boolean>(project.attributes.carouselImages !== undefined && project.attributes.carouselImages.length > 0);
    const [isLive, setIsLive] = React.useState<boolean>(project.attributes.liveDemo !== '');
    const [hasSource, setHasSource] = React.useState<boolean>(project.attributes.sourceCode !== '');

    const techs: JSX.Element[] = getProjectSkills(project, globals.NumOfTechsToDisplayPerProject)
        .map((item, i) =>
            <div key={i} className="project-summary-logo-container">
                <img className="project-summary-logo" src={item.img} alt={item.altTag} title={item.title} referrerPolicy="no-referrer" loading="lazy" />
            </div>
    );

    return <div className='project-summary-tile'>
        <div className={`project-summary-img-container ${hasImages ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => setIsOpen(true)}>
            <img src={project.attributes.img} alt={project.attributes.imgAlt} referrerPolicy="no-referrer" loading="lazy" />
        </div>
        <div className='project-summary-tile-content'>
            <div className='project-summary-tile-title' title={project.attributes.title}>{project.attributes.title}</div>
            <div className='project-summary-tile-desc' title={project.attributes.description[0]}>{project.attributes.description[0]}</div>
            <div className='project-summary-tile-other'>
                <div className='project-summary-tile-techs'>{techs}</div>
                <div className='project-summary-tile-links'>
                    {hasSource && (<a target='_blank' rel='noopener noreferrer' href={project.attributes.sourceCode} title="GitHub"><i className='fab fa-github'></i></a>)}
                    {isLive && (<a target='_blank' rel='noopener noreferrer' href={project.attributes.liveDemo} title="Live/demo"><i className='fas fa-globe'></i></a>)}
                </div>
            </div>
        </div>

        {isOpen && hasImages && (
            <Lightbox
                mainSrc={project.attributes.carouselImages![photoIndex]}
                nextSrc={project.attributes.carouselImages![(photoIndex + 1) % project.attributes.carouselImages!.length]}
                prevSrc={project.attributes.carouselImages![(photoIndex + project.attributes.carouselImages!.length - 1) % project.attributes.carouselImages!.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + project.attributes.carouselImages!.length - 1) % project.attributes.carouselImages!.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % project.attributes.carouselImages!.length)
                }
                imagePadding={55}
            />
        )}
    </div>;
}