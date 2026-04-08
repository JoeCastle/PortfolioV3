const obfuscatedEmailAddress = 'joe&#64;&#116;c&#97;s&#116;&#108;e&#46;co&#46;u&#107;';

type SocialDataType = {
    url: string;
    displayName: string;
};

type MetaDataType = {
    title: string;
    description: string;
    keywords: string;
};

const gitHubData: SocialDataType = {
    url: 'https://github.com/JoeCastle',
    displayName: 'JoeCastle',
};

const linkedInData: SocialDataType = {
    url: 'https://linkedin.com/in/joseph-castle-19170b188',
    displayName: 'Joseph Castle',
};

/** The number of project tiles to display in the projects section on the homepage. */
const numOfSummaryProjectsToDisplay: number = 6;

/** The number of technologies to display on each project tile in the projects section on the homepage. */
const numOfTechsToDisplayPerProject: number = 5;

const isDarkModeDefault: boolean = false;

/** Top offset (in px) used when navigating to hash anchors. */
const anchorScrollOffsetPx: number = -25;

/** Viewport offset line (in px) used to determine the active nav section while scrolling. */
const navActiveSectionOffsetPx: number = 130;

const metaData: MetaDataType = {
    title: 'Joseph Castle | Senior Full-Stack Software Developer',
    description:
        'Senior Full-Stack Software Developer with 7+ years of experience building scalable, data-driven web applications using React, TypeScript, and .NET. Experienced in system design, performance optimisation, and end-to-end feature ownership.',
    keywords:
        'joseph castle, joe castle, senior software developer, full stack developer, full stack engineer, react developer, typescript developer, .net developer, c# developer, web application developer, software engineer UK, remote software developer',
};

const globals = {
    obfuscatedEmailAddress,
    gitHubData,
    linkedInData,
    numOfSummaryProjectsToDisplay,
    numOfTechsToDisplayPerProject,
    isDarkModeDefault,
    anchorScrollOffsetPx,
    navActiveSectionOffsetPx,
    metaData,
};

export default globals;
