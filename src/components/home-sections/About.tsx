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
                    Throughout my career, I've successfully delivered customised solutions that empower companies to excel in their respective industries by catering to their
                    unique business requirements. My strong focus on building scalable and efficient applications is driven by a genuine passion for leveraging cutting-edge
                    technology to drive technical success. I thoroughly enjoy problem-solving and possess a keen ability to analyze and overcome technical challenges, ensuring
                    seamless and innovative solutions.
                </p>
                <p>
                    I hold a first-class degree, BSc (Hons) Computer Science (Software Engineering) with Placement, from the University of Wolverhampton. This academic journey has
                    greatly shaped my expertise in software engineering principles and practices, enhancing my ability to consistently deliver exceptional solutions.
                </p>

                <p>Take a look below at some of my personal projects.</p>
            </div>
        </div>
    );
};

export default About;
