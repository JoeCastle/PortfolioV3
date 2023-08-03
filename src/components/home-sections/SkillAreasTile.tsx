import React from 'react';
import { ISkillArea } from '../../data/skillAreas';

interface ISkillAreaProps {
    skillArea: ISkillArea;
}

interface Props extends ISkillAreaProps {
}

export const SkillAreasTile = (props: Props): JSX.Element => {
    const skillArea: ISkillArea = props.skillArea;

    const techs: JSX.Element[] = skillArea.skills
        .map((item, i) =>
            <li key={i} className=""><span>{item.title}</span></li>
        )

    return <div className='skillarea-summary-tile'>
        <div className='skillarea-summary-img-container'>
            <i className={skillArea.fontAwesomeIconClass}></i>
        </div>
        <div className='skillarea-summary-tile-content'>
            <div className='skillarea-summary-tile-title'>{skillArea.title}</div>
            <div className='skillarea-summary-tile-desc'>{skillArea.description}</div>
            <div className='skillarea-summary-tile-other'>
                <ul className='skillarea-summary-tile-techs'>{techs}</ul>
            </div>
        </div>
    </div>;
}