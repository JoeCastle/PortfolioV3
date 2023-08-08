import { ISkill, getFrontendSkills, getBackendSkills, getOtherSkills } from './skills';

export type SkillAreaTypes = 'default' | 'frontend' | 'backend' | 'other';

enum skillAreaType {
    default = 0,
    frontEnd = 1,
    backEnd = 2,
    other = 3,
}

export interface ISkillArea {
    skillAreaName: SkillAreaTypes;
    title: string;
    description: string;
    fontAwesomeIconClass: string;
    type: skillAreaType;
    skills: ISkill[];
    itemsTitle: string;
}

let skillAreas: ISkillArea[] = [
    {
        skillAreaName: 'default',
        title: 'default',
        description: '',
        fontAwesomeIconClass: '',
        type: skillAreaType.other,
        skills: getOtherSkills(),
        itemsTitle: 'Languages',
    },
    {
        skillAreaName: 'frontend',
        title: 'Front-end',
        description: 'Experience building modern front-end web applications.',
        fontAwesomeIconClass: 'fas fa-code',
        type: skillAreaType.frontEnd,
        skills: getFrontendSkills(),
        itemsTitle: 'Languages',
    },
    {
        skillAreaName: 'backend',
        title: 'Back-end',
        description: 'Proficient with back-end technologies including databases and SQL.',
        fontAwesomeIconClass: 'fas fa-code-branch',
        type: skillAreaType.backEnd,
        skills: getBackendSkills(),
        itemsTitle: 'Languages',
    },
    {
        skillAreaName: 'other',
        title: 'Other',
        description: 'Knowledge of advanced tools to aid the development of software.',
        fontAwesomeIconClass: 'fas fa-terminal',
        type: skillAreaType.other,
        skills: getOtherSkills(),
        itemsTitle: 'Software',
    },
];

export default skillAreas;
