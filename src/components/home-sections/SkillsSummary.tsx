﻿import React from 'react';
import { SkillsSummaryTile } from './SkillsSummaryTile';
import skills from '../../data/skills';
import useOnScreen, { PageSectionIdTypes } from "../../hooks/useOnScreen";

export const SkillsSummary = (): JSX.Element => {
    const ref: React.MutableRefObject<HTMLInputElement> = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    useOnScreen(ref, "-300px");

    const numOfSummarySkillsToDisplay = 16;

    const summarySkills: JSX.Element[] = skills
        .slice(0, numOfSummarySkillsToDisplay + 1)
        .filter(item =>
            item.skillName != 'default')
        .map((item, i) =>
            <SkillsSummaryTile
                key={i}
                skill={item}
            />
        )

    return <div className='section' id='Skills'>
        <div
            className='content-container'
            id={`${PageSectionIdTypes.Skills}`}
            ref={ref}>
            <div className='section-title-wrapper'>
                <h2>Skills</h2>
            </div>
            <div className='skill-summary-tiles'>
                {summarySkills}
            </div>
        </div>
    </div>;
}