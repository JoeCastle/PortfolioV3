import React, { useRef } from 'react';
import { SkillAreasTile } from './SkillAreasTile';
import skillAreas from '../../../data/skillAreas';
import useOnScreen from '../../../hooks/useOnScreen';

interface Props { }

/**
 * The skills (skill areas) sections on the homepage.
 * @param props Skill areas props.
 * @returns Skills area section content.
 */
export const SkillAreas: React.FC<Props> = (props) => {
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    const summarySkillAreas: JSX.Element[] = skillAreas.map((item, i) => <SkillAreasTile key={i} skillArea={item} />);

    return (
        <div className="section" id="Skills">
            <div className="content-container" id="skills-summary-content-container" ref={ref}>
                <header className="section-header">
                    <p className="section-eyebrow">Core Stack</p>
                    <h2 className="section-title">Skills</h2>
                    <p className="section-intro">
                        Core technical strengths I rely on when building, improving, and supporting internal systems in active use.
                    </p>
                </header>
                <div className="skillarea-summary-tiles">{summarySkillAreas}</div>
            </div>
        </div>
    );
};

export default SkillAreas;
