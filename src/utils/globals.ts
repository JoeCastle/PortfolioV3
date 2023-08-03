const ObsfucatedEmailAddress = 'joe&#64;&#116;c&#97;s&#116;&#108;e&#46;co&#46;u&#107;';

type SocialDataType = {
    URL: string;
    DisplayName: string;
};

const GitHubData: SocialDataType = {
    URL: 'https://github.com/JoeCastle',
    DisplayName: 'JoeCastle'
}

const LinkedInData: SocialDataType = {
    URL: 'https://linkedin.com/in/joseph-castle-19170b188',
    DisplayName: 'Joseph Castle'
}

/** The number of project tiles to display in the projects section on the homepage. */
const NumOfSummaryProjectsToDisplay: number = 8;

/** The number of technologies to display on each project tile in the projects section on the homepage. */
const NumOfTechsToDisplayPerProject: number = 7;

const globals = {
    ObsfucatedEmailAddress,
    GitHubData,
    LinkedInData,
    NumOfSummaryProjectsToDisplay,
    NumOfTechsToDisplayPerProject
}

export default globals;