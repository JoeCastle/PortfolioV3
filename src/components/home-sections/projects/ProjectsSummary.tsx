import React, { useRef } from 'react';
import { ProjectsSummaryTile } from './ProjectsSummaryTile';
import { getActiveProjects } from '../../../data/projects';
import useOnScreen, { PageSectionIdType } from '../../../hooks/useOnScreen';
import globals from '../../../utils/globals';

interface Props {}

/**
 * The project summary section on the homepage.
 * @param props
 * @returns
 */
export const ProjectsSummary: React.FC<Props> = (props) => {
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    const summaryProjects: JSX.Element[] = getActiveProjects()
        .slice(0, globals.numOfSummaryProjectsToDisplay + 1)
        .map((item, i) => <ProjectsSummaryTile key={i} project={item} />);

    return (
        <div className="section" id="Projects">
            <div className="content-container" id={`${PageSectionIdType.Projects}`} ref={ref}>
                <div className="section-title-wrapper">
                    <h2>Projects</h2>
                </div>
                <div className="project-summary-tiles">{summaryProjects}</div>
            </div>
        </div>
    );
};

export default ProjectsSummary;
