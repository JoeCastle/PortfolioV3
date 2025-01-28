import React, { useRef } from 'react';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';
import globals from '../../utils/globals';
import utils from '../../utils/utils';

interface Props {}

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
                    I'm a Senior Full-Stack Software Developer with {utils.getYearsOfExperience()} years of experience building software. Throughout my career, I've successfully
                    delivered custom solutions that empower companies to excel in their respective industries by catering to their unique business requirements. My focus on
                    building scalable and efficient applications is driven by a genuine passion for leveraging cutting-edge technology to drive technical success. I have a deep
                    understanding of effectively addressing complex technical requirements.
                </p>
                <p>
                    I thoroughly enjoy problem-solving and possess a keen ability to analyze and overcome technical challenges, ensuring seamless and innovative solutions. In my
                    work, I prioritize clean code, documentation, testing, user experience and continuous learning, which enables me to deliver high-quality solutions that align
                    with best practices and industry standards. I approach projects with precision and creativity, ensuring the best possible technical outcomes.
                </p>
                <p>
                    Beyond coding, I value effective communication and teamwork. I enjoy collaborating with cross-functional teams, bridging the gap between technical and
                    non-technical stakeholders, and turning complex ideas into user-friendly solutions.
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
