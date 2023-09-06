import { ISkill, SkillAreaType, getSkillsByArea } from './skills';

export type SkillAreaOption = 'frontend' | 'backend' | 'other';

export interface ISkillArea {
    skillAreaName: SkillAreaOption;
    title: string;
    description: string;
    fontAwesomeIconClass: string;
    type: SkillAreaType;
    skills: ISkill[];
}

const skillAreas: ISkillArea[] = [
    {
        skillAreaName: 'frontend',
        title: 'Front-end',
        description: 'Experience building modern front-end web applications.',
        fontAwesomeIconClass: 'fas fa-code',
        type: SkillAreaType.FrontEnd,
        skills: getSkillsByArea(SkillAreaType.FrontEnd),
    },
    {
        skillAreaName: 'backend',
        title: 'Back-end',
        description: 'Proficient with back-end technologies including databases and SQL.',
        fontAwesomeIconClass: 'fas fa-code-branch',
        type: SkillAreaType.BackEnd,
        skills: getSkillsByArea(SkillAreaType.BackEnd),
    },
    {
        skillAreaName: 'other',
        title: 'Other',
        description: 'Knowledge of advanced tools to aid the development of software.',
        fontAwesomeIconClass: 'fas fa-terminal',
        type: SkillAreaType.Other,
        skills: getSkillsByArea(SkillAreaType.Other),
    },
];

export default skillAreas;
