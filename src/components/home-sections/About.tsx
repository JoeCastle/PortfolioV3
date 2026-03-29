import React, { useRef } from 'react';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';
import globals from '../../utils/globals';
import utils from '../../utils/utils';

interface Props { }

/**
 * The about section on the homepage.
 * @param props
 * @returns
 */
export const About: React.FC<Props> = (props) => {
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    return (
        <div className="section about" id="About">
            <div className="content-container" id={`${PageSectionIdType.About}`} ref={ref}>
                <div className="section-title-wrapper">
                    <h2>About</h2>
                </div>
                <p>
                    I'm a Senior Full-Stack Software Developer with {utils.getYearsOfExperience()}+ years' experience building and improving data-driven web applications across a range of industries. My main background is in React, TypeScript, .NET, and SQL Server, and I enjoy working across the full stack to deliver robust, maintainable solutions.
                </p>
                <p>
                    Much of my experience has involved building bespoke systems with complex business rules, large datasets, and performance-sensitive workflows. I've worked on everything from frontend implementation and backend logic to database design, reporting, and deployment, with a strong focus on reliability, usability, and long-term maintainability.
                </p>
                <p>
                    I'm particularly interested in solving practical problems: improving slow or inefficient systems, designing cleaner workflows, and turning complex requirements into software that is easier to use and support. I also enjoy mentoring other developers, asking the right questions early, and challenging decisions when something could be done better or more safely.
                </p>
                <p>
                    Outside of my main work, I build personal projects to explore modern tools and architectures, including cross-platform and AI-assisted applications.
                </p>

                <div className="socials">
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

export default About;
