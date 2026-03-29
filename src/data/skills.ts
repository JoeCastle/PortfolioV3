/**
 * List of all possible skills such as languages, software, and other technologies.
 */
export type SkillOption =
    | 'html'
    | 'css'
    | 'sass'
    | 'less'
    | 'javascript'
    | 'typescript'
    | 'aspnetcore'
    | 'csharp'
    | 'visualstudio'
    | 'visualstudiocode'
    | 'reactjs'
    | 'mobx'
    | 'materialui'
    | 'styledcomponents'
    | 'sql'
    | 'dapper'
    | 'tsql'
    | 'mssqlserver'
    | 'sqlservermanagementstudio'
    | 'java'
    | 'eclipse'
    | 'knockoutjs'
    | 'azure'
    | 'azuredevops'
    | 'serilog'
    | 'arduino'
    | 'c/c++'
    | 'mitappinventor'
    | 'gitgithub'
    | 'vb'
    | 'vbnet'
    | 'nextjs'
    | 'postgresql'
    | 'drizzle'
    | 'shadcnui'
    | 'tailwindcss'
    | 'pgadmin4'
    | 'tamagui'
    | 'supabase'
    | 'reactnative'
    | 'sanity';

/**
 * The type of skill. Language, software, operating system or other.
 */
enum SkillType {
    Language = 0,
    Software = 1,
    OperatingSystem = 2,
    Other = 3,
}

/**
 * The area of software development the skill is most relevant to. Front-end, back-end or other.
 */
export enum SkillAreaType {
    FrontEnd = 0,
    BackEnd = 1,
    Other = 2,
}

export enum SkillCategory {
    Frontend = 0,
    Backend = 1,
    Data = 2,
    CloudAndPractices = 3,
}

export interface ISkillCategoryMeta {
    category: SkillCategory;
    title: string;
    description: string;
}

export const skillCategoryMeta: ISkillCategoryMeta[] = [
    {
        category: SkillCategory.Frontend,
        title: 'Front-end',
        description: 'Building modern, responsive web applications with React and TypeScript, focusing on usability, performance, and maintainable UI architecture.',
    },
    {
        category: SkillCategory.Backend,
        title: 'Back-end',
        description: 'Developing backend services and APIs with .NET and C#, handling business logic, data processing, and system integration.',
    },
    {
        category: SkillCategory.Data,
        title: 'Data & Databases',
        description: 'Designing and optimising relational data models, queries, and performance using SQL Server, PostgreSQL, and T-SQL.',
    },
    {
        category: SkillCategory.CloudAndPractices,
        title: 'Cloud & Practices',
        description: 'Working with cloud-hosted applications, monitoring, deployment workflows, version control, and integration patterns used to support reliable software delivery.',
    },
];

/**
 * Interface representing a skill such as a programming language, software, or other technology. Each skill has a name, title, image, alt tag, type and area of relevance. The skillName property is used as a unique identifier for the skill and should be in lowercase with no spaces. The title property is the display name of the skill. The img property is the URL of an image representing the skill. The altTag property is the alt text for the image. The type property indicates whether the skill is a language, software, operating system or other. The skillArea property indicates whether the skill is most relevant to front-end development, back-end development or other.
 */
export interface ISkill {
    skillName: SkillOption;
    title: string;
    img: string;
    imgSource?: string;
    altTag: string;
    type: SkillType;
    category: SkillCategory;
    skillArea?: SkillAreaType;
    showInSkillsSection?: boolean;
    isCore?: boolean;
}

/**
 * List of all skills such as programming languages, software, and other technologies. Each skill has a unique skillName which is used as an identifier, a title for display purposes, an image URL, alt text for the image, a type indicating whether it's a language, software, operating system or other, and a skillArea indicating whether it's most relevant to front-end development, back-end development or other. This list is used throughout the site to display skills on project tiles and in the skills section.
 */
const skills: ISkill[] = [
    {
        skillName: 'html',
        title: 'HTML5',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/HTML5_Logo_512_g2wzbj.png',
        altTag: 'html logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'css',
        title: 'CSS3',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/CSS3_logo_aoxm2w.png',
        altTag: 'css logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'sass',
        title: 'SASS',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/SASS_logo_rvd8vv.png',
        altTag: 'sass logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'less',
        title: 'LESS',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Less_logo_rxyq98.png',
        altTag: 'less logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
        showInSkillsSection: false,
    },
    {
        skillName: 'javascript',
        title: 'JavaScript',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/JavaScript_logo_pp1fw7.png',
        altTag: 'javascript logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'typescript',
        title: 'TypeScript',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Typescript_logo_jfy09t.png',
        altTag: 'typescript logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
        isCore: true,
    },
    {
        skillName: 'aspnetcore',
        title: '.NET',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Aspnetcore_logo_k0ibuu.png',
        imgSource: 'https://github.com/campusMVP/dotnetCoreLogoPack',
        altTag: 'aspnetcore logo',
        type: SkillType.Other,
        category: SkillCategory.Backend,
        skillArea: SkillAreaType.BackEnd,
        isCore: true,
    },
    {
        skillName: 'csharp',
        title: 'C#',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Csharp_logo_gx7nfp.png',
        altTag: 'c# logo',
        type: SkillType.Language,
        category: SkillCategory.Backend,
        skillArea: SkillAreaType.BackEnd,
        isCore: true,
    },
    {
        skillName: 'visualstudio',
        title: 'Visual Studio',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Visualstudio2017_logo_wo0j0j.png',
        imgSource: 'https://logos.fandom.com/wiki/Microsoft_Visual_Studio',
        altTag: 'visual studio logo',
        type: SkillType.Software,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
        showInSkillsSection: false,
    },
    {
        skillName: 'visualstudiocode',
        title: 'VS Code',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Visualstudiocode_logo_xsstui.png',
        altTag: 'visual studio code logo',
        type: SkillType.Software,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
        showInSkillsSection: false,
    },
    {
        skillName: 'reactjs',
        title: 'React',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/React_logo_aicspt.png',
        altTag: 'React logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
        isCore: true,
    },
    {
        skillName: 'mobx',
        title: 'MobX',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Mobx_logo_aricjz.png',
        altTag: 'MobX logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'materialui',
        title: 'Material UI',
        img: '',
        altTag: 'Material UI logo',
        type: SkillType.Other,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'styledcomponents',
        title: 'styled-components',
        img: '',
        altTag: 'styled-components logo',
        type: SkillType.Other,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'sql',
        title: 'SQL',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Database_logo_s7tzjp.png',
        imgSource: 'https://www.kisspng.com/png-oracle-database-computer-icons-logo-encapsulated-p-852860/download-png.html',
        altTag: 'SQL logo',
        type: SkillType.Language,
        category: SkillCategory.Data,
        skillArea: SkillAreaType.BackEnd,
        isCore: true,
    },
    {
        skillName: 'dapper',
        title: 'Dapper',
        img: '',
        altTag: 'Dapper logo',
        type: SkillType.Other,
        category: SkillCategory.Data,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'tsql',
        title: 'T-SQL',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Database_logo_s7tzjp.png',
        imgSource: 'https://www.kisspng.com/png-oracle-database-computer-icons-logo-encapsulated-p-852860/download-png.html',
        altTag: 'T-SQL logo',
        type: SkillType.Language,
        category: SkillCategory.Data,
        skillArea: SkillAreaType.BackEnd,
        isCore: true,
    },
    {
        skillName: 'mssqlserver',
        title: 'SQL Server',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Mssqlserver_logo_brlbri.png',
        altTag: 'MS SQL Server logo',
        type: SkillType.Software,
        category: SkillCategory.Data,
        skillArea: SkillAreaType.Other,
        isCore: true,
    },
    {
        skillName: 'sqlservermanagementstudio',
        title: 'SSMS',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Database_logo_s7tzjp.png',
        altTag: 'Database logo',
        type: SkillType.Software,
        category: SkillCategory.Data,
        skillArea: SkillAreaType.Other,
        showInSkillsSection: false,
    },
    {
        skillName: 'java',
        title: 'Java',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Java_logo_i5y8ct.png',
        altTag: 'Java logo',
        type: SkillType.Language,
        category: SkillCategory.Backend,
        skillArea: SkillAreaType.BackEnd,
        showInSkillsSection: false,
    },
    {
        skillName: 'eclipse',
        title: 'Eclipse',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Eclipse_logo_hag6hu.png',
        altTag: 'Eclipse logo',
        type: SkillType.Software,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
        showInSkillsSection: false,
    },
    {
        skillName: 'knockoutjs',
        title: 'KnockoutJS',
        img: '',
        altTag: 'KnockoutJS logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
        showInSkillsSection: false,
    },
    {
        skillName: 'azure',
        title: 'Azure',
        img: '',
        imgSource: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
        altTag: 'Azure logo',
        type: SkillType.Other,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
        isCore: true,
    },
    {
        skillName: 'azuredevops',
        title: 'Azure DevOps',
        img: '',
        altTag: 'Azure Devops logo',
        type: SkillType.Other,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'serilog',
        title: 'Serilog',
        img: '',
        altTag: 'Serilog logo',
        type: SkillType.Other,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'arduino',
        title: 'Arduino',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Arduino_logo_tq24vc.png',
        altTag: 'Arduino logo',
        type: SkillType.Other,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
        showInSkillsSection: false,
    },
    {
        skillName: 'c/c++',
        title: 'C/C++',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/C__Logo_agunhv.png',
        altTag: 'C/C++ logo',
        type: SkillType.Language,
        category: SkillCategory.Backend,
        skillArea: SkillAreaType.BackEnd,
        showInSkillsSection: false,
    },
    {
        skillName: 'mitappinventor',
        title: 'MIT App Inventor',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/AppInventor_logo_oqzbsm.png',
        altTag: 'MIT App Inventor logo',
        type: SkillType.Other,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
        showInSkillsSection: false,
    },
    {
        skillName: 'gitgithub',
        title: 'Git/GitHub',
        img: '',
        altTag: 'Git/GitHub logo',
        type: SkillType.Other,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
        isCore: true,
    },
    {
        skillName: 'vb',
        title: 'Visual Basic',
        img: '',
        altTag: 'Visual Basic logo',
        type: SkillType.Language,
        category: SkillCategory.Backend,
        skillArea: SkillAreaType.BackEnd,
        showInSkillsSection: false,
    },
    {
        skillName: 'vbnet',
        title: 'VB.NET',
        img: '',
        altTag: 'VB.NET logo',
        type: SkillType.Language,
        category: SkillCategory.Backend,
        skillArea: SkillAreaType.BackEnd,
        showInSkillsSection: false,
    },
    {
        skillName: 'nextjs',
        title: 'Next.js',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/NextJS_logo_nu1yqt.png',
        imgSource: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png',
        altTag: 'Next.js logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
        isCore: true,
    },
    {
        skillName: 'postgresql',
        title: 'PostgreSQL',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303425/PortfolioScreenshots/Skills/Full/tinypng/Postgresql_logo_idk8zx.png',
        altTag: 'PostgreSQL logo',
        type: SkillType.Software,
        category: SkillCategory.Data,
        skillArea: SkillAreaType.BackEnd,
        isCore: true,
    },
    {
        skillName: 'drizzle',
        title: 'Drizzle ORM',
        img: '',
        altTag: 'Drizzle ORM logo',
        type: SkillType.Software,
        category: SkillCategory.Data,
        skillArea: SkillAreaType.BackEnd,
        isCore: true,
    },
    {
        skillName: 'pgadmin4',
        title: 'pgAdmin 4',
        img: '',
        altTag: 'pgAdmin 4 logo',
        type: SkillType.Software,
        category: SkillCategory.Data,
        skillArea: SkillAreaType.Other,
        showInSkillsSection: false,
    },
    {
        skillName: 'tailwindcss',
        title: 'Tailwind CSS',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303425/PortfolioScreenshots/Skills/Full/tinypng/Tailwind_logo_swetk9.png',
        altTag: 'Tailwind CSS logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
        isCore: true,
    },
    {
        skillName: 'shadcnui',
        title: 'shadcn/ui',
        img: '',
        altTag: 'shadcn/ui logo',
        type: SkillType.Software,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
        showInSkillsSection: false,
    },
    {
        skillName: 'tamagui',
        title: 'Tamagui',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774794166/PortfolioScreenshots/Skills/Full/tinypng/Tamagui_Logo_sgxd1q.png',
        altTag: 'Tamagui logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'supabase',
        title: 'Supabase',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774794160/PortfolioScreenshots/Skills/Full/tinypng/Supabase_Logo_nfrxei.png',
        altTag: 'Supabase logo',
        type: SkillType.Language,
        category: SkillCategory.Data,
        skillArea: SkillAreaType.BackEnd,
        isCore: true,
    },
    {
        skillName: 'reactnative',
        title: 'React Native',
        img: '',
        altTag: 'React Native logo',
        type: SkillType.Language,
        category: SkillCategory.Frontend,
        skillArea: SkillAreaType.FrontEnd,
        showInSkillsSection: false,
    },
    {
        skillName: 'sanity',
        title: 'Sanity',
        img: '',
        altTag: 'Sanity logo',
        type: SkillType.Other,
        category: SkillCategory.CloudAndPractices,
        skillArea: SkillAreaType.Other,
        isCore: true,
    },
];

export default skills;

/**
 * Get a list of skills filtered by the specified area of software development (front-end, back-end or other). This function is used to retrieve skills relevant to a particular area when displaying them on project tiles and in the skills section.
 * @param area The area of software development to filter skills by.
 * @returns An array of skills that belong to the specified area.
 */
export const getSkillsByArea = (area: SkillAreaType): ISkill[] => {
    if (area === SkillAreaType.Other) {
        return [...getSkillsByCategory(SkillCategory.Data), ...getSkillsByCategory(SkillCategory.CloudAndPractices)];
    }

    if (area === SkillAreaType.FrontEnd) {
        return getSkillsByCategory(SkillCategory.Frontend);
    }

    return getSkillsByCategory(SkillCategory.Backend);
};

export const getSkillsByCategory = (category: SkillCategory): ISkill[] => {
    return skills.filter((s) => s.category === category && s.showInSkillsSection !== false);
};

export const getCoreSkills = (): ISkill[] => {
    return skills.filter((s) => s.isCore);
};

export const getVisibleSkills = (): ISkill[] => {
    return skills.filter((s) => s.showInSkillsSection !== false);
};

/**
 * Get a skill by its unique skillName identifier. This function is used to retrieve skill details when displaying them on project tiles and in the skills section.
 * @param skillName The unique identifier of the skill to retrieve.
 * @returns The skill object that matches the specified skillName.
 */
export const getSkill = (skillName: SkillOption): ISkill => {
    return skills.find((skill) => skill.skillName === skillName)!;
};

/**
 * Get a list of skills based on an array of skillName identifiers. This function is used to retrieve multiple skills when displaying them on project tiles and in the skills section.
 * @param skillNames An array of unique identifiers of the skills to retrieve.
 * @returns An array of skill objects that match the specified skillName identifiers.
 */
export const getSkills = (skillNames: SkillOption[]): ISkill[] => {
    return skillNames.map((skillName) => getSkill(skillName));
};
