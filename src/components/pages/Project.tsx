import React, { useEffect } from 'react';
import projects, { IProject, ProjectTypes } from '../../data/projects';
import { Helmet } from 'react-helmet-async';

//Clicking on the summary tile will navigate to a separate page.
//Should be able to navigate to the page directly using URL.
interface IProjectProps {
    projectName: ProjectTypes;
}

interface Props extends IProjectProps {}

/**
 * The project page. Currently unused.
 * @param props
 * @returns
 */
export const Project: React.FC<Props> = (props) => {
    const { projectName } = props;

    const project: IProject | undefined = projects.find((project) => project.projectName === projectName);

    const isLive: boolean = project!.attributes.liveDemo === '' ? false : true;
    const hasSource: boolean = project!.attributes.sourceCode === '' ? false : true;

    useEffect(() => {
        handleScrollReset();
    }, []);

    const handleScrollReset = () => {
        let element: HTMLElement | null = document.getElementById('page-parent');
        element!.scrollTop = 0;
    };

    return (
        <div className="project-summary">
            <Helmet>
                <title>{project!.attributes.title} | Project - Joseph Castle</title>
                <meta name="description" content={project!.attributes.summary} />
            </Helmet>
            <div className="content-container">
                <div className="proj-content-wrapper project-title-section">
                    <h1 className="project-title">{project!.attributes.title}</h1>
                    <div className="project-links">
                        <p className="project-subtitle">Links:</p>

                        {hasSource ? (
                            <a target="_blank" rel="noopener noreferrer" href={project!.attributes.sourceCode}>
                                <i className="fab fa-github"></i> Source
                            </a>
                        ) : (
                            <a className="disabled-link" title="No source available">
                                <i className="fab fa-github"></i> Source unavailable
                            </a>
                        )}

                        {isLive ? (
                            <a target="_blank" rel="noopener noreferrer" href={project!.attributes.liveDemo}>
                                <i className="fas fa-globe"></i> Live
                            </a>
                        ) : (
                            <a className="disabled-link" title="No demo available">
                                <i className="fas fa-globe"></i> Live unavailable
                            </a>
                        )}
                    </div>
                </div>
                <div className="proj-content-wrapper">
                    <div className="project-image-container">
                        <img className="project-image" src={project!.attributes.thumbnail.src} alt={project!.attributes.thumbnail.alt} referrerPolicy="no-referrer" />
                    </div>
                    <div>
                        <ul>
                            <span className="project-subtitle">Techs:</span>{' '}
                            {project!.attributes.technologies!.map((item, i) => (
                                <li key={i}> {(i ? ', ' : '') + item}</li>
                            ))}
                        </ul>
                        <ul>
                            <span className="project-subtitle">Tags:</span>{' '}
                            {project!.attributes.tags.map((item, i) => (
                                <li key={i}> {(i ? ', ' : '') + item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="project-desc">
                    {project!.attributes.description.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
