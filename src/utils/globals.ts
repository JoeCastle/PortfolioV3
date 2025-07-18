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
const numOfTechsToDisplayPerProject: number = 7;

const isDarkModeDefault: boolean = true;

const metaData: MetaDataType = {
    title: 'Joseph Castle | Senior Full-Stack Software Developer',
    description: 'Joseph Castle is a Senior Full-Stack Software Developer with experience building websites and web applications using React, .NET and SQL.',
    keywords:
        'joseph castle, joe castle, full stack software developer, software developer, web developer, senior software engineer, senior developer, full stack developer, full stack software engineer, react developer, typescript developer, .NET developer, C# developer, SQL Server expert, UK software engineer',
};

const globals = {
    obfuscatedEmailAddress,
    gitHubData,
    linkedInData,
    numOfSummaryProjectsToDisplay,
    numOfTechsToDisplayPerProject,
    isDarkModeDefault,
    metaData,
};

export default globals;
