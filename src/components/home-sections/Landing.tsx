import React, { useRef } from 'react';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';
import { Button } from 'reactstrap';

interface Props { }

/**
 * The landing section on the homepage.
 * @param props Landing section props.
 * @returns The landing section content.
 */
export const Landing: React.FC<Props> = () => {
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    /**
     * Smooth-scrolls to the projects section.
     */
    const handleScrollToProjects = (): void => {
        const element: HTMLElement | null = document.getElementById('Projects');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    /**
     * Smooth-scrolls to the contact section.
     */
    const handleScrollToContact = (): void => {
        const element: HTMLElement | null = document.getElementById('Contact');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="section landing" id="Landing">
            <div className="content-container landing-inner-container" id={`${PageSectionIdType.Landing}`} ref={ref}>
                <div className="landing-inner">
                    <div className="landing-left">
                        <p className="landing-role">Senior Full-Stack Developer</p>

                        <h1 className="landing-heading">
                            I build scalable, production-ready web applications
                        </h1>

                        <p className="landing-subtext">
                            7+ years working with React, TypeScript, .NET, and Azure - focused on performance, maintainability, and real-world impact.
                        </p>

                        <div className="landing-actions">
                            <Button
                                className="portfolio-btn projects-btn landing-btn-primary"
                                onClick={handleScrollToProjects}
                            >
                                View Projects
                            </Button>

                            <Button
                                className="portfolio-btn projects-btn landing-btn-secondary"
                                onClick={handleScrollToContact}
                            >
                                Contact Me
                            </Button>
                        </div>
                    </div>

                    <div className="landing-right">
                        <pre className="code-snippet">
                            {`const developer = {
  name: "Joseph Castle",
  stack: ["React", "TypeScript", ".NET", "Azure"],
  focus: "Scalable Web Applications"
};`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;