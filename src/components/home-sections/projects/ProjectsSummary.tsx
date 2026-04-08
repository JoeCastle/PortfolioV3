import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ProjectsSummaryTile } from './ProjectsSummaryTile';
import { getHomepagePrimaryProjects, getHomepageProjects, getHomepageSecondaryProjects, IProject, ProjectTypes } from '../../../data/projects';
import useOnScreen, { PageSectionIdType } from '../../../hooks/useOnScreen';
import { Button } from 'reactstrap';
import { useSearchParams } from 'react-router-dom';
import ProjectDetailsModal from './ProjectDetailsModal';
import globals from '../../../utils/globals';

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
    const [searchParams, setSearchParams] = useSearchParams();

    const [showAll, setShowAll] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
    const [pendingDeepLinkProject, setPendingDeepLinkProject] = useState<ProjectTypes | null>(null);

    const projectsToShow: IProject[] = getHomepageProjects(showAll);
    const secondaryProjects: IProject[] = getHomepageSecondaryProjects();
    const homepagePrimaryProjects: IProject[] = getHomepagePrimaryProjects();
    const homepageAllProjects: IProject[] = useMemo(
        () => [...homepagePrimaryProjects, ...secondaryProjects],
        [homepagePrimaryProjects, secondaryProjects],
    );

    const projectByName: Map<ProjectTypes, IProject> = useMemo(
        () =>
            new Map(
                homepageAllProjects.map((project) => [project.projectName, project]),
            ),
        [homepageAllProjects],
    );

    const updateProjectQueryParam = useCallback(
        (projectName: ProjectTypes | null, replace = false): void => {
            const nextParams: URLSearchParams = new URLSearchParams(searchParams);

            if (projectName) {
                nextParams.set('project', projectName);
            } else {
                nextParams.delete('project');
            }

            setSearchParams(nextParams, { replace });
        },
        [searchParams, setSearchParams],
    );

    const scrollProjectsIntoView = useCallback((behavior: ScrollBehavior): void => {
        const projectsSectionElement: HTMLElement | null = document.getElementById('Projects');
        if (!projectsSectionElement) {
            return;
        }

        const pageContainer: HTMLElement | null = document.getElementById('page-parent');
        if (!pageContainer) {
            projectsSectionElement.scrollIntoView({ behavior, block: 'start' });
            return;
        }

        const containerRect: DOMRect = pageContainer.getBoundingClientRect();
        const targetRect: DOMRect = projectsSectionElement.getBoundingClientRect();
        const absoluteTop: number = pageContainer.scrollTop + (targetRect.top - containerRect.top);
        const top: number = Math.max(0, absoluteTop - globals.anchorScrollOffsetPx);
        pageContainer.scrollTo({ top, behavior });
    }, []);

    const summaryProjects: JSX.Element[] = projectsToShow.map((item, i) => (
        <ProjectsSummaryTile key={i} project={item} isDarkMode={isDarkMode} onOpenDetails={handleOpenProject} />
    ));

    const projectQueryParam: string | null = searchParams.get('project');

    useEffect(() => {
        if (!projectQueryParam) {
            setPendingDeepLinkProject(null);
            setSelectedProject(null);
            return;
        }

        const projectFromQuery: IProject | undefined = projectByName.get(projectQueryParam as ProjectTypes);
        if (!projectFromQuery) {
            setPendingDeepLinkProject(null);
            setSelectedProject(null);
            return;
        }

        if (selectedProject?.projectName === projectFromQuery.projectName) {
            setPendingDeepLinkProject(null);
            return;
        }

        if (projectFromQuery.attributes.homepageTier === 'secondary' && !showAll) {
            setShowAll(true);
        }

        setPendingDeepLinkProject(projectFromQuery.projectName);
    }, [projectByName, projectQueryParam, selectedProject?.projectName, showAll]);

    useEffect(() => {
        if (!pendingDeepLinkProject) {
            return;
        }

        const isProjectVisible: boolean = projectsToShow.some((project) => project.projectName === pendingDeepLinkProject);
        if (!isProjectVisible) {
            return;
        }

        const projectFromQuery: IProject | undefined = projectByName.get(pendingDeepLinkProject);
        if (!projectFromQuery) {
            setPendingDeepLinkProject(null);
            return;
        }

        scrollProjectsIntoView('smooth');

        const openTimer: number = window.setTimeout(() => {
            setSelectedProject(projectFromQuery);
            setPendingDeepLinkProject(null);
        }, 220);

        return () => {
            window.clearTimeout(openTimer);
        };
    }, [pendingDeepLinkProject, projectByName, projectsToShow, scrollProjectsIntoView]);

    /**
     * Toggles between limited and full project list views.
     */
    const handleToggle = (): void => {
        setShowAll((prev) => !prev);
    };

    /**
     * Opens project details from the card interaction and keeps URL state in sync.
     * @param project The project to open.
     */
    function handleOpenProject(project: IProject): void {
        if (project.attributes.homepageTier === 'secondary' && !showAll) {
            setShowAll(true);
        }

        setSelectedProject(project);
        updateProjectQueryParam(project.projectName);
    }

    /**
     * Closes project details and removes deep-link query state.
     */
    const handleCloseProject = (): void => {
        setSelectedProject(null);
        setPendingDeepLinkProject(null);
        updateProjectQueryParam(null);
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

                {selectedProject && (
                    <ProjectDetailsModal
                        project={selectedProject}
                        isOpen={!!selectedProject}
                        toggle={handleCloseProject}
                        isDarkMode={isDarkMode}
                    />
                )}
            </div>
        </div>
    );
};

export default ProjectsSummary;