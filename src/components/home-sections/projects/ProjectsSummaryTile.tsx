import React, { Suspense } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { getProjectSkills, IImage, IProject } from '../../../data/projects';
import ProjectDetailsModal from './ProjectDetailsModal';

interface IProjectProps {
    project: IProject;
    isDarkMode: boolean;
}

interface Props extends IProjectProps { }

export const ProjectsSummaryTile = React.memo(({ project, isDarkMode }: Props): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = React.useState<boolean>(false);
    const preloadedImageUrlsRef = React.useRef<Set<string>>(new Set<string>());

    const hasImages: boolean = project.attributes.carouselImages !== undefined ? project.attributes.carouselImages.length > 0 : false;

    const isLive: boolean = !!project.attributes.liveDemo;
    const hasSource: boolean = !!project.attributes.sourceCode;

    const getFallbackLogoText = React.useCallback((title: string): string => {
        const parts = title
            .split(/\s+/)
            .map((part) => part.trim())
            .filter(Boolean);

        if (parts.length === 0) return '?';
        if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }, []);

    const techs: JSX.Element[] = React.useMemo(() => {
        return getProjectSkills(project).map((item, i) => (
            <div key={i} className="project-summary-logo-container" title={item.title}>
                {item.img.trim().length > 0 ? (
                    <img className="project-summary-logo" src={item.img} alt={item.altTag} title={item.title} referrerPolicy="no-referrer" loading="lazy" />
                ) : (
                    <span className="project-summary-logo-fallback" aria-label={item.title}>
                        {getFallbackLogoText(item.title)}
                    </span>
                )}
            </div>
        ));
    }, [getFallbackLogoText, project]);

    const lightboxSlides = React.useMemo(() => {
        return (
            project.attributes.carouselImages?.map((image) => ({
                src: image.src,
                alt: image.alt,
                title: image.title,
                description: image.alt,
            })) || []
        );
    }, [project.attributes.carouselImages]);

    const handleSetIsOpen: (isOpen: boolean) => void = React.useCallback(
        (isOpen: boolean): void => {
            if (hasImages) {
                setIsOpen(isOpen);
            }
        },
        [hasImages],
    );

    const preloadTimeoutRef = React.useRef<number | null>(null);

    /**
     * Preload the carouselImages as you hover over the thumbnail. Looks like the image loads quickly when you click the lightbox.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const preloadImages: () => void = React.useCallback(() => {
        if (!hasImages || !project.attributes.carouselImages) return;

        const images: IImage[] = project.attributes.carouselImages;
        const index: number = 0; // preload the first image only

        const url: string = images[index].src;

        if (!preloadedImageUrlsRef.current.has(url)) {
            const img: HTMLImageElement = new Image();
            img.src = url;
            preloadedImageUrlsRef.current.add(url);
        }
    }, [hasImages, project.attributes.carouselImages]);

    return (
        <div className="project-summary-tile">
            <div
                className={`project-summary-img-container ${hasImages ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={() => handleSetIsOpen(true)}
                onMouseEnter={() => {
                    if (preloadTimeoutRef.current === null) {
                        preloadTimeoutRef.current = window.setTimeout(() => {
                            preloadImages();
                            preloadTimeoutRef.current = null;
                        }, 150); // 150ms delay
                    }
                }}
                onMouseLeave={() => {
                    if (preloadTimeoutRef.current !== null) {
                        clearTimeout(preloadTimeoutRef.current);
                        preloadTimeoutRef.current = null;
                    }
                }}
            >
                <img src={project.attributes.thumbnail.src} alt={project.attributes.thumbnail.alt} referrerPolicy="no-referrer" loading="lazy" />
            </div>
            <div className="project-summary-tile-content">
                <div className="project-summary-tile-title" title={project.attributes.title}>
                    {project.attributes.title}
                </div>
                <div className="project-summary-tile-desc" title={project.attributes.description[0]}>
                    {project.attributes.description[0]}
                </div>
                <div className="project-summary-tile-other">
                    <div className="project-summary-tile-techs">
                        <button type="button" className="project-summary-tile-read-more" onClick={() => setIsDetailsModalOpen(true)}>
                            Read more <i className="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                        {techs}
                    </div>
                    <div className="project-summary-tile-links">
                        {hasSource && (
                            <a target="_blank" rel="noopener noreferrer" href={project.attributes.sourceCode} title={project.attributes.sourceTitle}>
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                        {isLive && (
                            <a target="_blank" rel="noopener noreferrer" href={project.attributes.liveDemo} title="Live/demo">
                                <i className="fas fa-globe"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <Suspense fallback={<div>Loading lightbox...</div>}>
                <Lightbox
                    plugins={[Counter, Zoom, Captions]}
                    open={isOpen && hasImages}
                    close={() => setIsOpen(false)}
                    slides={lightboxSlides}
                    counter={{
                        container: {
                            style: { top: 'unset', bottom: 0, left: 'unset', right: 0 },
                        },
                    }}
                />
            </Suspense>

            <ProjectDetailsModal project={project} isOpen={isDetailsModalOpen} toggle={() => setIsDetailsModalOpen((prev) => !prev)} isDarkMode={isDarkMode} />
        </div>
    );
});
