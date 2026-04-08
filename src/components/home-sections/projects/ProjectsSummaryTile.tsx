import React, { Suspense } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { getProjectSkills, getProjectSummary, IImage, IProject } from '../../../data/projects';

interface IProjectProps {
    project: IProject;
    isDarkMode: boolean;
    onOpenDetails: (project: IProject) => void;
}

interface Props extends IProjectProps { }

export const ProjectsSummaryTile = React.memo(({ project, onOpenDetails }: Props): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const preloadedImageUrlsRef = React.useRef<Set<string>>(new Set<string>());

    const hasImages: boolean = project.attributes.carouselImages !== undefined ? project.attributes.carouselImages.length > 0 : false;

    const isLive: boolean = !!project.attributes.liveDemo;
    const hasSource: boolean = !!project.attributes.sourceCode;
    const projectSummary: string = getProjectSummary(project);

    /**
     * Creates an initial-based fallback label when a technology logo is unavailable.
     * @param title Technology title text.
     * @returns Two-character fallback text.
     */
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
                    <img
                        className="project-summary-logo"
                        src={item.img}
                        alt={item.altTag}
                        title={item.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                    />
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

    /**
     * Opens or closes the project image lightbox when image data exists.
     * @param isOpen Whether the lightbox should be open.
     */
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
        const index: number = 0;

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
                        }, 150);
                    }
                }}
                onMouseLeave={() => {
                    if (preloadTimeoutRef.current !== null) {
                        clearTimeout(preloadTimeoutRef.current);
                        preloadTimeoutRef.current = null;
                    }
                }}
            >
                <img
                    src={project.attributes.thumbnail.src}
                    alt={project.attributes.thumbnail.alt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                />
            </div>

            <div className="project-summary-tile-content">
                <div className="project-summary-tile-top">
                    <div className="project-summary-tile-title" title={project.attributes.title}>
                        {project.attributes.title}
                    </div>

                    <div className="project-summary-tile-links">
                        {hasSource && (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.attributes.sourceCode}
                                title={project.attributes.sourceTitle}
                                aria-label={`${project.attributes.title} source code`}
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        )}

                        {isLive && (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.attributes.liveDemo}
                                title="Live/demo"
                                aria-label={`${project.attributes.title} live demo`}
                            >
                                <i className="fas fa-globe"></i>
                            </a>
                        )}
                    </div>
                </div>

                <div className="project-summary-tile-desc" title={projectSummary}>
                    {projectSummary}
                </div>

                <div className="project-summary-tile-footer">
                    <button
                        type="button"
                        className="project-summary-tile-read-more"
                        onClick={() => onOpenDetails(project)}
                    >
                        Read more <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </button>

                    <div className="project-summary-tile-techs">
                        {techs}
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
        </div>
    );
});