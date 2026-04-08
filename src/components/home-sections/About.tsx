import React, { useRef } from 'react';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';
import globals from '../../utils/globals';

interface Props { }

/**
 * The about section on the homepage.
 * @param props About section props.
 * @returns The about section content.
 */
export const About: React.FC<Props> = () => {
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    return (
        <div className="section about" id="About">
            <div className="content-container about-container" id={`${PageSectionIdType.About}`} ref={ref}>
                <header className="section-header">
                    <p className="section-eyebrow">Background</p>
                    <h2 className="section-title">About</h2>
                    <p className="section-intro">
                        Senior Full-Stack Software Developer with 7+ years building and improving internal business systems with complex workflows, large datasets, and performance-critical paths.
                    </p>
                </header>

                <div className="about-body">
                    <div className="about-column">
                        <p>
                            My main background is in <strong>React, TypeScript, .NET, SQL Server, and Azure.</strong> I've spent several years building and owning bespoke <strong>systems used by operational teams</strong>, working across the full stack to deliver software that is reliable, maintainable, and practical for day-to-day use. Much of my work involves messy business rules, data-heavy workflows, reporting, deployments, and production support across long-lived codebases, often over multiple years of continued development and improvement.
                        </p>
                    </div>

                    <div className="about-column">
                        <p>
                            I am particularly interested in improving slow or inefficient systems, simplifying complex workflows, and turning unclear requirements into software that is easier to use, support, and maintain. Outside of commercial work, I build personal projects to explore architecture, structured content systems, cross-platform applications, and AI-assisted workflows. I also enjoy mentoring developers and reviewing technical decisions critically and raising concerns early when they introduce unnecessary complexity or risk.
                        </p>
                    </div>
                </div>

                <div className="about-footer">
                    <p className="about-footer-label">Find me on</p>

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

                        {/* https://www.albionresearch.com/tools/obfuscator */}
                        {/* Obfuscate email against bots. */}
                        <a
                            href="&#109;ailto&#58;&#106;&#37;&#54;Fe&#64;t&#99;a&#115;t%&#54;C%65%&#50;&#69;c%6F%&#50;Euk"
                            title="Email - joe&#64;&#116;c&#97;s&#116;&#108;e&#46;co&#46;u&#107;"
                            aria-label="Email address."
                        >
                            <div>
                                <i className="fas fa-at"></i>
                            </div>
                        </a>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={globals.gitHubData.url}
                            title={'GitHub - ' + globals.gitHubData.displayName}
                            aria-label="GitHub link."
                        >
                            <div>
                                <i className="fab fa-github"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;