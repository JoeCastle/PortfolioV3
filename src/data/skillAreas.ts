import { ISkill, SkillOption, getSkills } from './skills';

export type SkillAreaOption = 'frontend' | 'backend' | 'other';

export interface ISkillArea {
    skillAreaName: SkillAreaOption;
    title: string;
    description: string;
    fontAwesomeIconClass: string;
    skills: ISkill[];
}

const fullStackDeliverySkills: SkillOption[] = [
    'reactjs',
    'typescript',
    'aspnetcore',
    'csharp',
    'nextjs',
    'mobx',
];

const dataAndPerformanceSkills: SkillOption[] = [
    'mssqlserver',
    'tsql',
    'sql',
    'dapper',
    'postgresql',
];

const systemsAndToolingSkills: SkillOption[] = ['azure', 'azuredevops', 'gitgithub', 'serilog'];

const skillAreas: ISkillArea[] = [
    {
        skillAreaName: 'frontend',
        title: 'Full-Stack Delivery',
        description:
            'Building and maintaining internal business systems across the full stack, with a focus on reliability, maintainability, and practical day-to-day usability for operational teams.',
        fontAwesomeIconClass: 'fas fa-code',
        skills: getSkills(fullStackDeliverySkills),
    },
    {
        skillAreaName: 'backend',
        title: 'Data & Performance',
        description:
            'Designing relational data models, writing and optimising queries, and improving reporting, processing, and data-heavy workflows across long-lived production systems.',
        fontAwesomeIconClass: 'fas fa-database',
        skills: getSkills(dataAndPerformanceSkills),
    },
    {
        skillAreaName: 'other',
        title: 'Systems, Delivery & Support',
        description:
            'Supporting internal software through deployments, debugging, Azure-hosted infrastructure, release workflows, and engineering practices that keep systems stable and maintainable.',
        fontAwesomeIconClass: 'fas fa-server',
        skills: getSkills(systemsAndToolingSkills),
    },
];

export default skillAreas;
