import React, { useRef } from 'react';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';
import { Button } from 'reactstrap';
import utils from '../../utils/utils';

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
    const handleScrollToWork = (): void => {
        const element: HTMLElement | null = document.getElementById('CommercialWork');

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
                        <p className="landing-role">Senior Full-Stack Software Developer</p>

                        <h1 className="landing-heading">
                            I build and improve complex, data-driven business systems
                        </h1>

                        <p className="landing-subtext">
                            {utils.getYearsOfExperience()}+ years building and evolving internal software with React, TypeScript, .NET, SQL Server, and Azure - focused on performance, maintainability, and operational software used in the real world.
                        </p>

                        <div className="landing-actions">
                            <Button
                                className="portfolio-btn projects-btn landing-btn-primary"
                                onClick={handleScrollToWork}
                            >
                                View Work
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
  stack: ["React", "TypeScript", ".NET", "SQL Server", "Azure"],
  focus: "Complex Business Systems",
};`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;