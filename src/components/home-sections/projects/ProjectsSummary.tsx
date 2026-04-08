import React, { useRef, useState } from 'react';
import { ProjectsSummaryTile } from './ProjectsSummaryTile';
import { getHomepageProjects, getHomepageSecondaryProjects, IProject } from '../../../data/projects';
import useOnScreen, { PageSectionIdType } from '../../../hooks/useOnScreen';
import { Button } from 'reactstrap';

interface Props {
    isDarkMode: boolean;
}

/**
 * The project summary section on the homepage.
 * @param props Project summary props.
 * @returns The projects section content.
 */
export const ProjectsSummary: React.FC<Props> = (props) => {
    const { isDarkMode } = props;
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    const [showAll, setShowAll] = useState<boolean>(false);

    const projectsToShow: IProject[] = getHomepageProjects(showAll);
    const secondaryProjects: IProject[] = getHomepageSecondaryProjects();
    const summaryProjects: JSX.Element[] = projectsToShow.map((item, i) => (
        <ProjectsSummaryTile key={i} project={item} isDarkMode={isDarkMode} />
    ));

    /**
     * Toggles between limited and full project list views.
     */
    const handleToggle = (): void => {
        setShowAll((prev) => !prev);
    };

    const shouldShowToggle: boolean = secondaryProjects.length > 0;

    return (
        <div className="section projects-section" id="Projects">
            <div className="content-container projects-container" id={`${PageSectionIdType.Projects}`} ref={ref}>
                <header className="section-header">
                    <p className="section-eyebrow">PERSONAL WORK</p>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-intro">Selected personal projects that reflect my interests in full-stack delivery, structured content systems, AI-assisted workflows, and maintainable software design.</p>
                </header>

                <div className="project-summary-tiles">
                    {summaryProjects}
                </div>

                {shouldShowToggle && (
                    <div className="view-more-projects-btn-container">
                        <Button
                            className="portfolio-btn portfolio-btn-primary view-more-projects-btn"
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