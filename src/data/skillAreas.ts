import { ISkill, SkillCategory, SkillOption, getSkillsByCategory, skillCategoryMeta } from './skills';

export type SkillAreaOption = 'frontend' | 'backend' | 'other';

export interface ISkillArea {
    skillAreaName: SkillAreaOption;
    title: string;
    description: string;
    fontAwesomeIconClass: string;
    categories: SkillCategory[];
    skills: ISkill[];
}

const frontendMeta = skillCategoryMeta.find((item) => item.category === SkillCategory.Frontend)!;
const backendMeta = skillCategoryMeta.find((item) => item.category === SkillCategory.Backend)!;

const preferredFrontendOrder: SkillOption[] = [
    'reactjs',
    'typescript',
    'nextjs',
    'javascript',
    'mobx',
    'materialui',
    'styledcomponents',
    'tailwindcss',
    'sass',
    'html',
    'css',
    'tamagui',
];

const preferredBackendOrder: SkillOption[] = [
    'aspnetcore',
    'csharp',
    'mssqlserver',
    'tsql',
    'sql',
    'dapper',
    'postgresql',
    'supabase',
    'drizzle',
];

const preferredCloudAndToolsOrder: SkillOption[] = ['azure', 'gitgithub', 'azuredevops', 'serilog', 'sanity', 'shadcnui'];

const uniqueBySkillName = (skills: ISkill[]): ISkill[] => {
    const map = new Map<SkillOption, ISkill>();
    skills.forEach((skill) => map.set(skill.skillName, skill));
    return Array.from(map.values());
};

const sortSkillsByPreferredOrder = (skills: ISkill[], preferredOrder: SkillOption[]): ISkill[] => {
    const orderMap = new Map(preferredOrder.map((skill, index) => [skill, index]));

    return [...skills].sort((a, b) => {
        const aIndex = orderMap.get(a.skillName) ?? Number.MAX_SAFE_INTEGER;
        const bIndex = orderMap.get(b.skillName) ?? Number.MAX_SAFE_INTEGER;
        return aIndex - bIndex;
    });
};

const frontendSkills = sortSkillsByPreferredOrder(getSkillsByCategory(SkillCategory.Frontend), preferredFrontendOrder);

const backendSkillsRaw = [...getSkillsByCategory(SkillCategory.Backend), ...getSkillsByCategory(SkillCategory.Data)];

const backendSkills = sortSkillsByPreferredOrder(uniqueBySkillName(backendSkillsRaw), preferredBackendOrder);

const cloudAndToolsSkillsRaw = getSkillsByCategory(SkillCategory.CloudAndPractices);
const cloudAndToolsSkills = sortSkillsByPreferredOrder(cloudAndToolsSkillsRaw, preferredCloudAndToolsOrder);

const skillAreas: ISkillArea[] = [
    {
        skillAreaName: 'frontend',
        title: frontendMeta.title,
        description: frontendMeta.description,
        fontAwesomeIconClass: 'fas fa-code',
        categories: [SkillCategory.Frontend],
        skills: frontendSkills,
    },
    {
        skillAreaName: 'backend',
        title: backendMeta.title,
        description: backendMeta.description,
        fontAwesomeIconClass: 'fas fa-code-branch',
        categories: [SkillCategory.Backend, SkillCategory.Data],
        skills: backendSkills,
    },
    {
        skillAreaName: 'other',
        title: 'Cloud & Tools',
        description: 'Cloud platforms, deployment workflows, version control, and supporting tools used to build, deploy, and maintain applications.',
        fontAwesomeIconClass: 'fas fa-terminal',
        categories: [SkillCategory.CloudAndPractices],
        skills: cloudAndToolsSkills,
    },
];

export default skillAreas;
