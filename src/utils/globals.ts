const obfuscatedEmailAddress = 'joe&#64;&#116;c&#97;s&#116;&#108;e&#46;co&#46;u&#107;';

type SocialDataType = {
    url: string;
    displayName: string;
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
const numOfSummaryProjectsToDisplay: number = 8;

/** The number of technologies to display on each project tile in the projects section on the homepage. */
const numOfTechsToDisplayPerProject: number = 7;

const globals = {
    obfuscatedEmailAddress,
    gitHubData,
    linkedInData,
    numOfSummaryProjectsToDisplay,
    numOfTechsToDisplayPerProject,
};

export default globals;
