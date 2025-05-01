import React, { Suspense } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { getProjectSkills, IImage, IProject } from '../../../data/projects';

interface IProjectProps {
    project: IProject;
}

interface Props extends IProjectProps {}

export const ProjectsSummaryTile = React.memo(({ project }: Props): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const preloadedImageUrls: Set<string> = new Set<string>();

    const hasImages: boolean = project.attributes.carouselImages !== undefined ? project.attributes.carouselImages.length > 0 : false;

    const isLive: boolean = !!project.attributes.liveDemo;
    const hasSource: boolean = !!project.attributes.sourceCode;

    const techs: JSX.Element[] = React.useMemo(() => {
        return getProjectSkills(project).map((item, i) => (
            <div key={i} className="project-summary-logo-container">
                <img className="project-summary-logo" src={item.img} alt={item.altTag} title={item.title} referrerPolicy="no-referrer" loading="lazy" />
            </div>
        ));
    }, [project]);

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

    const handleSetIsOpen = React.useCallback(
        (isOpen: boolean): void => {
            if (hasImages) {
                setIsOpen(isOpen);
            }
        },
        [hasImages],
    );

    const preloadTimeoutRef = React.useRef<number | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const preloadImages: () => void = React.useCallback(() => {
        if (!hasImages || !project.attributes.carouselImages) return;

        const images: IImage[] = project.attributes.carouselImages;
        const index: number = 0; // preload the first image only

        const url: string = images[index].src;

        if (!preloadedImageUrls.has(url)) {
            const img: HTMLImageElement = new Image();
            img.src = url;
            preloadedImageUrls.add(url);
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
                        }, 150); // 150ms delay — adjust as needed
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
                    <div className="project-summary-tile-techs">{techs}</div>
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
        </div>
    );
});
