import React, { useRef } from 'react';
import { SkillsSummaryTile } from './SkillsSummaryTile';
import skills from '../../../data/skills';
import useOnScreen, { PageSectionIdType } from '../../../hooks/useOnScreen';

/**
 * The skills (skill summary) sections on the homepage. Currently unused.
 * @param props
 * @returns
 */
export const SkillsSummary = (): JSX.Element => {
    const ref: React.MutableRefObject<HTMLInputElement> = useRef() as React.MutableRefObject<HTMLInputElement>;
    useOnScreen(ref);

    const numOfSummarySkillsToDisplay = 16;

    const summarySkills: JSX.Element[] = skills.slice(0, numOfSummarySkillsToDisplay + 1).map((item, i) => <SkillsSummaryTile key={i} skill={item} />);

    return (
        <div className="section" id="Skills">
            <div className="content-container" id={`${PageSectionIdType.Skills}`} ref={ref}>
                <div className="section-title-wrapper">
                    <h2>Skills</h2>
                </div>
                <div className="skill-summary-tiles">{summarySkills}</div>
            </div>
        </div>
    );
};
