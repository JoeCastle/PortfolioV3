import React, { useRef } from 'react';
import { SkillAreasTile } from './SkillAreasTile';
import skillAreas from '../../../data/skillAreas';
import useOnScreen from '../../../hooks/useOnScreen';

interface Props {}

/**
 * The skills (skill areas) sections on the homepage.
 * @param props
 * @returns
 */
export const SkillAreas: React.FC<Props> = (props) => {
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref, '-300px');

    const summarySkillAreas: JSX.Element[] = skillAreas.map((item, i) => <SkillAreasTile key={i} skillArea={item} />);

    return (
        <div className="section" id="Skills">
            <div className="content-container" id="skills-summary-content-container" ref={ref}>
                <div className="section-title-wrapper">
                    <h2>Skills</h2>
                </div>
                <div className="skillarea-summary-tiles">{summarySkillAreas}</div>
            </div>
        </div>
    );
};

export default SkillAreas;
