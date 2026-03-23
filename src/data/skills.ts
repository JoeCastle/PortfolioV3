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
    | 'sql'
    | 'tsql'
    | 'mssqlserver'
    | 'sqlservermanagementstudio'
    | 'java'
    | 'eclipse'
    | 'knockoutjs'
    | 'azure'
    | 'azuredevops'
    | 'arduino'
    | 'c/c++'
    | 'mitappinventor'
    | 'arduino'
    | 'gitgithub'
    | 'vb'
    | 'vbnet'
    | 'nextjs'
    | 'postgresql'
    | 'drizzle'
    | 'stripe'
    | 'shadcnui'
    | 'tailwindcss'
    | 'pgadmin4';

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
    skillArea: SkillAreaType;
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
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'css',
        title: 'CSS3',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/CSS3_logo_aoxm2w.png',
        altTag: 'css logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'sass',
        title: 'SASS',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/SASS_logo_rvd8vv.png',
        altTag: 'sass logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'less',
        title: 'LESS',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Less_logo_rxyq98.png',
        altTag: 'less logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'javascript',
        title: 'JavaScript',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/JavaScript_logo_pp1fw7.png',
        altTag: 'javascript logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'typescript',
        title: 'TypeScript',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Typescript_logo_jfy09t.png',
        altTag: 'typescript logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'aspnetcore',
        title: '.NET',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Aspnetcore_logo_k0ibuu.png',
        imgSource: 'https://github.com/campusMVP/dotnetCoreLogoPack',
        altTag: 'aspnetcore logo',
        type: SkillType.Other,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'csharp',
        title: 'C#',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Csharp_logo_gx7nfp.png',
        altTag: 'c# logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'visualstudio',
        title: 'Visual Studio',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Visualstudio2017_logo_wo0j0j.png',
        imgSource: 'https://logos.fandom.com/wiki/Microsoft_Visual_Studio',
        altTag: 'visual studio logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'visualstudiocode',
        title: 'VS Code',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Visualstudiocode_logo_xsstui.png',
        altTag: 'visual studio code logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'reactjs',
        title: 'React',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/React_logo_aicspt.png',
        altTag: 'React logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'mobx',
        title: 'MobX',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Mobx_logo_aricjz.png',
        altTag: 'MobX logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'sql',
        title: 'SQL',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Database_logo_s7tzjp.png',
        imgSource: 'https://www.kisspng.com/png-oracle-database-computer-icons-logo-encapsulated-p-852860/download-png.html',
        altTag: 'SQL logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'tsql',
        title: 'T-SQL',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Database_logo_s7tzjp.png',
        imgSource: 'https://www.kisspng.com/png-oracle-database-computer-icons-logo-encapsulated-p-852860/download-png.html',
        altTag: 'T-SQL logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'mssqlserver',
        title: 'SQL Server',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Mssqlserver_logo_brlbri.png',
        altTag: 'MS SQL Server logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'sqlservermanagementstudio',
        title: 'SSMS',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Database_logo_s7tzjp.png',
        altTag: 'Database logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'java',
        title: 'Java',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Java_logo_i5y8ct.png',
        altTag: 'Java logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'eclipse',
        title: 'Eclipse',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Eclipse_logo_hag6hu.png',
        altTag: 'Eclipse logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'knockoutjs',
        title: 'KnockoutJS',
        img: '',
        altTag: 'KnockoutJS logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'azure',
        title: 'Azure',
        img: '',
        imgSource: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
        altTag: 'Azure logo',
        type: SkillType.Other,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'azuredevops',
        title: 'Azure DevOps',
        img: '',
        altTag: 'Azure Devops logo',
        type: SkillType.Other,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'arduino',
        title: 'Arduino',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Arduino_logo_tq24vc.png',
        altTag: 'Arduino logo',
        type: SkillType.Other,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'c/c++',
        title: 'C/C++',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/C__Logo_agunhv.png',
        altTag: 'C/C++ logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'mitappinventor',
        title: 'MIT App Inventor',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/AppInventor_logo_oqzbsm.png',
        altTag: 'MIT App Inventor logo',
        type: SkillType.Other,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'gitgithub',
        title: 'Git/GitHub',
        img: '',
        altTag: 'Git/GitHub logo',
        type: SkillType.Other,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'vb',
        title: 'Visual Basic',
        img: '',
        altTag: 'Visual Basic logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'vbnet',
        title: 'VB.NET',
        img: '',
        altTag: 'VB.NET logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'nextjs',
        title: 'Next.js',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/NextJS_logo_nu1yqt.png',
        imgSource: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png',
        altTag: 'Next.js logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'postgresql',
        title: 'PostgreSQL',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303425/PortfolioScreenshots/Skills/Full/tinypng/Postgresql_logo_idk8zx.png',
        altTag: 'PostgreSQL logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'pgadmin4',
        title: 'pgAdmin 4',
        img: '',
        altTag: 'pgAdmin 4 logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'tailwindcss',
        title: 'Tailwind CSS',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303425/PortfolioScreenshots/Skills/Full/tinypng/Tailwind_logo_swetk9.png',
        altTag: 'Tailwind CSS logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
];

export default skills;

/**
 * Get a list of skills filtered by the specified area of software development (front-end, back-end or other). This function is used to retrieve skills relevant to a particular area when displaying them on project tiles and in the skills section.
 * @param area The area of software development to filter skills by.
 * @returns An array of skills that belong to the specified area.
 */
export const getSkillsByArea = (area: SkillAreaType): ISkill[] => {
    return skills.filter((skill) => skill.skillArea === area);
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
