import React, { useRef } from 'react';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';
import { Button } from 'reactstrap';

interface Props {}

/**
 * The landing section on the homepage.
 * @param props
 * @returns
 */
export const Landing: React.FC<Props> = (props) => {
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    const handleScrollToProjects = (): void => {
        let element: HTMLElement | null = document.getElementById('Projects');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="section landing" id="Landing">
            <div className="content-container" id={`${PageSectionIdType.Landing}`} ref={ref}>
                <div className="section-title-wrapper-landing">
                    <h2 id="landing-header">Hey, I'm Joseph Castle</h2>
                </div>

                <p style={{ textAlign: 'center' }}>
                    A full-stack software developer with extensive hands-on experience in crafting high-quality, bespoke enterprise web applications. Proficient with React, .NET,
                    and SQL Server.
                </p>

                <div className="projects-btn-container">
                    <Button className="portfolio-btn projects-btn" onClick={handleScrollToProjects}>
                        Projects
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
