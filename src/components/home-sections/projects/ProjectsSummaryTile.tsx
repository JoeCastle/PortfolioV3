import globals from '../../../utils/globals';
import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { getProjectSkills, IImage, IProject } from '../../../data/projects';

//Clicking on the summary tile will navigate to a separate page.
//Should be able to navigate to the page directly using URL.
interface IProjectProps {
    project: IProject;
}

interface Props extends IProjectProps {}

/**
 * A project tile for the project summary section.
 * @param props
 * @returns
 */
export const ProjectsSummaryTile = (props: Props): JSX.Element => {
    const project: IProject = props.project;

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [hasImages] = React.useState<boolean>(project.attributes.carouselImages !== undefined && project.attributes.carouselImages.length > 0);
    const [isLive] = React.useState<boolean>(project.attributes.liveDemo !== '');
    const [hasSource] = React.useState<boolean>(project.attributes.sourceCode !== '');

    const techs: JSX.Element[] = getProjectSkills(project, globals.numOfTechsToDisplayPerProject).map((item, i) => (
        <div key={i} className="project-summary-logo-container">
            <img className="project-summary-logo" src={item.img} alt={item.altTag} title={item.title} referrerPolicy="no-referrer" loading="lazy" />
        </div>
    ));

    const handleSetIsOpen = (isOpen: boolean): void => {
        if (hasImages) {
            setIsOpen(isOpen);
        }
    };

    const getLightboxSlides = (images: IImage[] | undefined): SlideImage[] => {
        return images ? images.map((i) => getLightboxSlide(i)) : [];
    };

    const getLightboxSlide = (image: IImage): SlideImage => {
        const imageSlideData: SlideImage = {
            src: image.src,
            alt: image.alt,
            title: image.title,
            description: image.alt,
        };

        return imageSlideData;
    };

    return (
        <div className="project-summary-tile">
            <div className={`project-summary-img-container ${hasImages ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleSetIsOpen(true)}>
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

            <Lightbox
                plugins={[Counter, Zoom, Captions]}
                open={isOpen && hasImages}
                close={() => setIsOpen(false)}
                slides={getLightboxSlides(project.attributes.carouselImages)}
                counter={{ container: { style: { top: 'unset', bottom: 0, left: 'unset', right: 0 } } }}
            />
        </div>
    );
};
