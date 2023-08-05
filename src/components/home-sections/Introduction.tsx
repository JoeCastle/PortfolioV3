import React from 'react';
import useOnScreen, { PageSectionIdTypes } from '../../hooks/useOnScreen';
import globals from '../../utils/globals';

interface Props {
}

/**
 * The introduction (about) section on the homepage.
 * @param props 
 * @returns 
 */
export const Introduction: React.FC<Props> = (props) => {
    const ref: React.MutableRefObject<HTMLInputElement> = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    useOnScreen(ref, '-300px');

    return <div className='section about' id='About'>
        <div
            className='content-container'
            id={`${PageSectionIdTypes.About}`}
            ref={ref}
        >
            <p>Hey there, I'm Joe, a full-stack software developer based in the UK. With extensive hands-on experience in crafting high-quality, bespoke enterprise web applications, I have a deep understanding of effectively addressing complex technical requirements.</p>
            <p>Throughout my career, I've successfully delivered customised solutions that empower companies to excel in their respective industries by catering to their unique business requirements. My strong focus on building scalable and efficient applications is driven by a genuine passion for leveraging cutting-edge technology to drive technical success. I thoroughly enjoy problem-solving and possess a keen ability to analyze and overcome technical challenges, ensuring seamless and innovative solutions.</p>
            <p>I hold a first-class degree, BSc (Hons) Computer Science (Software Engineering) with Placement, from the University of Wolverhampton. This academic journey has greatly shaped my expertise in software engineering principles and practices, enhancing my ability to consistently deliver exceptional solutions.</p>
            <p>Proficient in a diverse range of technologies, including React, .NET, and SQL Server, I approach projects with precision and creativity, ensuring the best possible technical outcomes.</p>

            <div className='contact-info'>
                <a target='_blank' rel='noopener noreferrer' href={globals.linkedInData.url} title={'LinkedIn - ' + globals.linkedInData.displayName} aria-label='LinkedIn link.'>
                    <div>
                        <i className='fab fa-linkedin-in'></i>
                    </div>
                </a>
                {/* https://www.albionresearch.com/tools/obfuscator */}
                {/* Obfuscate email against bots. */}
                <a href='&#109;ailto&#58;&#106;&#37;&#54;Fe&#64;t&#99;a&#115;t%&#54;C%65%&#50;&#69;c%6F%&#50;Euk' title='Email - joe&#64;&#116;c&#97;s&#116;&#108;e&#46;co&#46;u&#107;' aria-label='Email address.'>
                    <div>
                        <i className='fas fa-at'></i>
                    </div>
                </a>
                <a target='_blank' rel='noopener noreferrer' href={globals.gitHubData.url} title={'GitHub - ' + globals.gitHubData.displayName} aria-label='GitHub link.'>
                    <div>
                        <i className='fab fa-github'></i>
                    </div>
                </a>
            </div>
        </div>
    </div>;
}

export default Introduction;