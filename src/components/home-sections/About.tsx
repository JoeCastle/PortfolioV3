import React, { useRef } from 'react';
import useOnScreen, { PageSectionIdType } from '../../hooks/useOnScreen';

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
                    I'm a full-stack software developer with extensive hands-on experience in crafting high-quality, bespoke enterprise web applications. I have a deep
                    understanding of effectively addressing complex technical requirements.
                </p>
                <p>
                    Proficient in a diverse range of technologies, including React, .NET, and SQL Server, I approach projects with precision and creativity, ensuring the best
                    possible technical outcomes.
                </p>
                <p>
                    Throughout my career, I've successfully delivered customised solutions that empower companies to excel in their respective industries by catering to their
                    unique business requirements. My strong focus on building scalable and efficient applications is driven by a genuine passion for leveraging cutting-edge
                    technology to drive technical success.
                </p>
                <p>
                    I thoroughly enjoy problem-solving and possess a keen ability to analyze and overcome technical challenges, ensuring seamless and innovative solutions. In my
                    work, I prioritize clean code, documentation, testing, user experience and continuous learning, which enables me to deliver high-quality solutions that align
                    with best practices and industry standards.
                </p>
                <p>
                    Beyond coding, I value effective communication and teamwork. I enjoy collaborating with cross-functional teams, bridging the gap between technical and
                    non-technical stakeholders, and turning complex ideas into user-friendly solutions.
                </p>
            </div>
        </div>
    );
};

export default About;
