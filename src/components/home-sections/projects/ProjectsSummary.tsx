import React from 'react';
import { ProjectsSummaryTile } from './ProjectsSummaryTile';
import projects from '../../../data/projects';
import useOnScreen, { PageSectionIdTypes } from "../../../hooks/useOnScreen";
import globals from '../../../utils/globals';

interface Props {
}

/**
 * The project summary section on the homepage.
 * @param props 
 * @returns 
 */
export const ProjectsSummary: React.FC<Props> = (props) => {
    const ref: React.MutableRefObject<HTMLInputElement> = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    useOnScreen(ref, "-300px");

    const summaryProjects: JSX.Element[] = projects
        .slice(0, globals.numOfSummaryProjectsToDisplay + 1)
        .filter(item =>
            item.projectName !== 'default' &&
            item.attributes.isDeleted === false)
        .map((item, i) =>
            <ProjectsSummaryTile
                key={i}
                project={item}
            />
        )

    return <div className='section' id='Projects'>
        <div
            className='content-container'
            id={`${PageSectionIdTypes.Projects}`}
            ref={ref}>
            <div className='section-title-wrapper'>
                <h2>Projects</h2>
            </div>
            <div className='project-summary-tiles'>
                {summaryProjects}
            </div>
        </div>
    </div>;

}

export default ProjectsSummary;