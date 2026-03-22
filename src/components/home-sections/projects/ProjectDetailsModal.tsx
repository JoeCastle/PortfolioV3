import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { IProject } from '../../../data/projects';

interface Props {
    project: IProject;
    isOpen: boolean;
    toggle: () => void;
}

export const ProjectDetailsModal: React.FC<Props> = ({ project, isOpen, toggle }): JSX.Element => {
    const [isGalleryOpen, setIsGalleryOpen] = React.useState<boolean>(false);

    const hasSource: boolean = !!project.attributes.sourceCode;
    const isLive: boolean = !!project.attributes.liveDemo;
    const hasDisclaimer: boolean = project.attributes.disclaimer.trim().length > 0;
    const hasGallery: boolean = !!project.attributes.carouselImages && project.attributes.carouselImages.length > 0;
    const isDarkMode: boolean = typeof window !== 'undefined' ? window.localStorage.getItem('isDarkMode') !== 'false' : true;

    const gallerySlides = React.useMemo(
        () =>
            project.attributes.carouselImages && project.attributes.carouselImages.length > 0
                ? project.attributes.carouselImages.map((image) => ({
                    src: image.src,
                    alt: image.alt,
                    title: image.title,
                    description: image.alt,
                }))
                : [
                    {
                        src: project.attributes.thumbnail.src,
                        alt: project.attributes.thumbnail.alt,
                        title: project.attributes.thumbnail.title,
                        description: project.attributes.thumbnail.alt,
                    },
                ],
        [project.attributes.carouselImages, project.attributes.thumbnail.alt, project.attributes.thumbnail.src, project.attributes.thumbnail.title],
    );

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            centered
            scrollable
            size="lg"
            className={`project-details-modal ${isDarkMode ? 'project-details-modal-dark' : 'project-details-modal-light'}`}
            contentClassName="project-details-modal-content"
        >
            <ModalHeader toggle={toggle} className="project-details-modal-header" wrapTag="div">
                <div className="project-details-modal-title-wrapper">
                    <h3 className="project-details-modal-title">{project.attributes.title}</h3>
                    <p className="project-details-modal-subtitle">
                        {project.attributes.projectType}
                        {project.attributes.yearCompleted ? ` • ${project.attributes.yearCompleted}` : ''}
                    </p>
                </div>
            </ModalHeader>
            <ModalBody className="project-details-modal-body">
                <div className="project-details-modal-overview">
                    <div className="project-details-modal-thumbnail-wrapper">
                        <button type="button" className="project-details-modal-thumbnail-btn" onClick={() => setIsGalleryOpen(true)}>
                            <img
                                className="project-details-modal-thumbnail"
                                src={project.attributes.thumbnail.src}
                                alt={project.attributes.thumbnail.alt}
                                referrerPolicy="no-referrer"
                                loading="lazy"
                            />
                        </button>
                    </div>

                    <div className="project-details-modal-quick-info">
                        <div className="project-details-modal-links">
                            {hasSource && (
                                <a
                                    className="portfolio-btn portfolio-btn-primary project-details-modal-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={project.attributes.sourceCode}
                                >
                                    <i className="fab fa-github" aria-hidden="true"></i> Source code
                                </a>
                            )}
                            {isLive && (
                                <a className="portfolio-btn portfolio-btn-primary project-details-modal-link" target="_blank" rel="noopener noreferrer" href={project.attributes.liveDemo}>
                                    <i className="fas fa-globe" aria-hidden="true"></i> Live demo
                                </a>
                            )}
                            <button type="button" className="project-details-modal-gallery-link" onClick={() => setIsGalleryOpen(true)}>
                                <i className="far fa-images" aria-hidden="true"></i> {hasGallery ? 'Open gallery' : 'Open image'}
                            </button>
                        </div>

                        <div className="project-details-modal-technologies">
                            {project.attributes.technologies.map((tech, i) => (
                                <div key={i} className="project-details-modal-tech-item" title={tech.title}>
                                    <img className="project-details-modal-tech-logo" src={tech.img} alt={tech.altTag} loading="lazy" referrerPolicy="no-referrer" />
                                    <span className="project-details-modal-tech-title">{tech.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="project-details-modal-description">
                    {project.attributes.description.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>

                {hasDisclaimer && <p className="project-details-modal-disclaimer">{project.attributes.disclaimer}</p>}
            </ModalBody>

            <Lightbox
                plugins={[Counter, Zoom, Captions]}
                open={isGalleryOpen}
                close={() => setIsGalleryOpen(false)}
                slides={gallerySlides}
                counter={{
                    container: {
                        style: { top: 'unset', bottom: 0, left: 'unset', right: 0 },
                    },
                }}
            />
        </Modal>
    );
};

export default ProjectDetailsModal;