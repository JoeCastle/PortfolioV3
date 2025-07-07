import React, { useRef, useState } from 'react';
import { ProjectsSummaryTile } from './ProjectsSummaryTile';
import { getActiveProjects, IProject } from '../../../data/projects';
import useOnScreen, { PageSectionIdType } from '../../../hooks/useOnScreen';
import globals from '../../../utils/globals';
import { Button } from 'reactstrap';

interface Props { }

/**
 * The project summary section on the homepage.
 * @param props
 * @returns
 */
export const ProjectsSummary: React.FC<Props> = (props) => {
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    const [showAll, setShowAll] = useState<boolean>(false);

    const activeProjects: IProject[] = getActiveProjects();
    const displayLimit: number = globals.numOfSummaryProjectsToDisplay;
    const projectsToShow: IProject[] = showAll ? activeProjects : activeProjects.slice(0, displayLimit);
    const summaryProjects: JSX.Element[] = projectsToShow.map((item, i) => <ProjectsSummaryTile key={i} project={item} />);

    const handleToggle = (): void => {
        setShowAll((prev) => !prev)
    };

    const shouldShowToggle: boolean = activeProjects.length > displayLimit;

    return (
        <div className="section" id="Projects">
            <div className="content-container" id={`${PageSectionIdType.Projects}`} ref={ref}>
                <div className="section-title-wrapper">
                    <h2>Projects</h2>
                </div>
                <div className="project-summary-tiles">{summaryProjects}</div>
                {shouldShowToggle && (
                    <div className="view-more-projects-btn-container">
                        <Button
                            className="portfolio-btn portfolio-btn-primary contact-button submit-button view-more-projects-btn"
                            onClick={handleToggle}
                            aria-expanded={showAll}
                        >
                            {showAll ? 'View Less' : 'View More'}{' '}
                            <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsSummary;
