export type SkillTypes =
    | 'default'
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
    | 'gitgithub';

enum SkillType {
    Language = 0,
    Software = 1,
    OperatingSystem = 2,
    Other = 3,
}

enum SkillAreaType {
    FrontEnd = 0,
    BackEnd = 1,
    Other = 2,
}

export interface ISkill {
    skillName: SkillTypes;
    title: string;
    img: string;
    imgSource?: string;
    altTag: string;
    type: SkillType;
    skillArea: SkillAreaType;
}

const skills: ISkill[] = [
    //{
    //    skillName: 'default',
    //    title: 'default',
    //    img: '',
    //    altTag: 'default logo',
    //    type: SkillType.other,
    //    skillArea: SkillAreaType.other
    //},
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
        title: 'ASP.NET Core',
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
        altTag: 'reactjs logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'mobx',
        title: 'MobX',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Mobx_logo_aricjz.png',
        altTag: 'mobx logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.FrontEnd,
    },
    {
        skillName: 'sql',
        title: 'SQL',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Database_logo_s7tzjp.png',
        imgSource: 'https://www.kisspng.com/png-oracle-database-computer-icons-logo-encapsulated-p-852860/download-png.html',
        altTag: 'sql logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'tsql',
        title: 'T-SQL',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Database_logo_s7tzjp.png',
        imgSource: 'https://www.kisspng.com/png-oracle-database-computer-icons-logo-encapsulated-p-852860/download-png.html',
        altTag: 'tsql logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'mssqlserver',
        title: 'SQL Server',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Mssqlserver_logo_brlbri.png',
        altTag: 'mssqlserver logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'sqlservermanagementstudio',
        title: 'SSMS',
        img: '',
        imgSource: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Database_logo_s7tzjp.png',
        altTag: 'sql logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'java',
        title: 'Java',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716410/PortfolioScreenshots/Skills/Full/tinypng/Java_logo_i5y8ct.png',
        altTag: 'java logo',
        type: SkillType.Language,
        skillArea: SkillAreaType.BackEnd,
    },
    {
        skillName: 'eclipse',
        title: 'Eclipse',
        img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1677716411/PortfolioScreenshots/Skills/Full/tinypng/Eclipse_logo_hag6hu.png',
        altTag: 'eclipse logo',
        type: SkillType.Software,
        skillArea: SkillAreaType.Other,
    },
    //{
    //    skillName: 'knockoutjs',
    //    title: 'KnockoutJS',
    //    img: images.mssqlserverLogo,
    //    altTag: 'knockoutjs logo',
    //    type: SkillType.language,
    //    skillArea: SkillAreaType.frontEnd
    //},
    {
        skillName: 'azure',
        title: 'Azure',
        img: '',
        imgSource: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
        altTag: 'azure logo',
        type: SkillType.Other,
        skillArea: SkillAreaType.Other,
    },
    {
        skillName: 'azuredevops',
        title: 'Azure DevOps',
        img: '',
        altTag: 'azuredevops logo',
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
];

export default skills;

export const getFrontendSkills = (): ISkill[] => {
    return skills.filter((skill) => skill.skillArea === SkillAreaType.FrontEnd && skill.skillName !== 'default');
};

export const getBackendSkills = (): ISkill[] => {
    return skills.filter((skill) => skill.skillArea === SkillAreaType.BackEnd && skill.skillName !== 'default');
};

export const getOtherSkills = (): ISkill[] => {
    return skills.filter((skill) => skill.skillArea === SkillAreaType.Other && skill.skillName !== 'default');
};

export const getSkill = (skillName: SkillTypes): ISkill => {
    return skills.find((skill) => skill.skillName === skillName)!;
};

export const getSkills = (skillNames: SkillTypes[]): ISkill[] => {
    let skills: ISkill[] = [];

    for (let i = 0; i < skillNames.length; i++) {
        skills.push(getSkill(skillNames[i]));
    }

    return skills;
};
