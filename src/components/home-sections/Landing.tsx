import React, { useRef } from 'react';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';
import { Button } from 'reactstrap';
import globals from '../../utils/globals';

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

                <div className="contact-info">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={globals.linkedInData.url}
                        title={'LinkedIn - ' + globals.linkedInData.displayName}
                        aria-label="LinkedIn link."
                    >
                        <div>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    {/* https://www.albionresearch.com/tools/obfuscator  */}
                    {/* Obfuscate email against bots.  */}
                    <a
                        href="&#109;ailto&#58;&#106;&#37;&#54;Fe&#64;t&#99;a&#115;t%&#54;C%65%&#50;&#69;c%6F%&#50;Euk"
                        title="Email - joe&#64;&#116;c&#97;s&#116;&#108;e&#46;co&#46;u&#107;"
                        aria-label="Email address."
                    >
                        <div>
                            <i className="fas fa-at"></i>
                        </div>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={globals.gitHubData.url} title={'GitHub - ' + globals.gitHubData.displayName} aria-label="GitHub link.">
                        <div>
                            <i className="fab fa-github"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Landing;
