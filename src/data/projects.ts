import { ISkill, getSkill, getSkills } from './skills';

export type ProjectTypes = 'default' | 'portfolio' | 'trainingApp' | 'arduinoTemperatureSensor' | 'startPage' | 'jla' | 'fizzBuzzTask' | 'robocoderobot';

enum ProjType {
    Personal = 'Personal',
    University = 'University',
    Work = 'Work',
    Freelance = 'Freelance',
    Contract = 'Contract',
}

interface IAttributes {
    title: string;
    description: string[]; //Array allows for multiple paragraphs to be included. Can map different index to a new element.
    disclaimer: string;
    summary?: string; //A short description, probably used on the home page.
    technologies: ISkill[];
    tags: string[];
    thumbnail: IImage;
    carouselImages?: IImage[];
    readMoreLink: string;
    routeURL: string;
    sourceCode: string;
    sourceTitle: string;
    liveDemo: string;
    nonLiveDemo: string; // For snapshots, videos or other examples. (If the site has been taken down or changed.)
    projectType: ProjType; //University, Personal, Work, Freelance
    yearCompleted?: string; //2018, 2017* - Initially completed in 2017 at uni, but built my own web page once I left.
    isDeleted: boolean;
}

export interface IProject {
    projectName: ProjectTypes;
    attributes: IAttributes;
}

export interface IImage {
    src: string;
    alt: string;
    title: string;
}

const getProjectRouteURL = (projectName: string): string => {
    return `Projects/${projectName}`;
};

const getProjectReadMoreLink = (projectName: string): string => {
    return `/${getProjectRouteURL(projectName)}`;
};

// Images are hosted on Cloudinary.com
/**
 * List of all projects.
 */
const projects: IProject[] = [
    {
        projectName: 'portfolio',
        attributes: {
            title: 'Portfolio',
            disclaimer: '',
            description: [
                "This is the website you are currently viewing. It's an online portfolio of my past projects, skills and experience.",
                'The primary goals of this project were to serve as a central repository of my projects, and to be a simple and easily maintainable project that can be updated and revised rapidly.',
                'The biggest challenge I had to overcome was my lack of artistic and design skills. I found it difficult to design a website that was simple, visually appealing and unique.',
            ],
            technologies: getSkills(['reactjs', 'sass', 'typescript', 'aspnetcore', 'visualstudio']),
            tags: ['tag1', 'tag2', 'tag3'],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Portfolio/Thumbnail/Projects_section_yu5fko.jpg',
                alt: 'Screenshot of the projects section of my portfolio.',
                title: 'Projects - Portfolio',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Projects_section_lqmdbl.png',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: 'Projects - Portfolio',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Skills_section_m7nvli.png',
                    alt: 'Screenshot of the skills section of my portfolio.',
                    title: 'Skills - Portfolio',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Footer_section_dgwcic.png',
                    alt: 'Screenshot of the footer section of my portfolio.',
                    title: 'Footer - Portfolio',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Projects_section_mobile_zeazq8.png',
                    alt: 'Screenshot of the projects section of my portfolio when viewed on a mobile.',
                    title: 'Projects mobile view - Portfolio',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Skills_section_mobile_c1zspe.png',
                    alt: 'Screenshot of the skills section of my portfolio when viewed on a mobile.',
                    title: 'Skills mobile view - Portfolio',
                },
            ],
            readMoreLink: getProjectReadMoreLink('Portfolio'),
            routeURL: getProjectRouteURL('Portfolio'),
            sourceCode: 'https://github.com/JoeCastle/PortfolioV3',
            sourceTitle: 'GitHub',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.Personal,
            isDeleted: false,
            yearCompleted: '2023',
        },
    },
    {
        projectName: 'trainingApp',
        attributes: {
            title: 'Training App',
            disclaimer: '',
            description: [
                'The Training App was built for the project section of my university dissertation. Its purpose was to support the arguments I made within my report and demonstrate many of the features of web accessibility that I discovered during my research.',
                'The web application itself allows trainers to create multiple choice quizzes for trainees that are assigned to their group.',
                'It demonstrates a variety of web accessibility features such as ...',
                'In order to test the accessibility level of the application I used multiple online automatic accessibility testing tools which include ...',
            ],
            technologies: getSkills(['reactjs', 'mobx', 'sass', 'typescript', 'aspnetcore', 'visualstudio', 'tsql', 'sqlservermanagementstudio']),
            tags: ['tag1', 'tag2', 'tag3'],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955382/PortfolioScreenshots/DissertationArtefact/Thumbnail/Artefact1_ebgs1l.png',
                alt: 'Screenshot of the homepage of the training app.',
                title: 'Homepage - Training App',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955382/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact1_xwy01d.png',
                    alt: 'Screenshot of the homepage of the training app.',
                    title: 'Homepage - Training App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact2_cwfyey.png',
                    alt: 'Screenshot of the group page of the training app.',
                    title: 'Add to group - Training App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact3_visddq.png',
                    alt: 'Screenshot of the view quiz page of the training app.',
                    title: 'View quiz - Training App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact4_dg6xux.png',
                    alt: 'Screenshot of the create quiz page of the training app.',
                    title: 'Create a quiz - Training App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact5_l6u84z.png',
                    alt: 'Screenshot of the group results page of the training app.',
                    title: 'Group results list - Training App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact6_d4cbgs.png',
                    alt: 'Screenshot of the view quiz page of the training app, with high contrast theme.',
                    title: 'View quiz, with high contrast theme - Training App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact7_w6dxvb.png',
                    alt: 'Screenshot of the start quiz page of the training app.',
                    title: 'Start quiz - Training App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact8_zb6e9c.png',
                    alt: 'Screenshot of the view  quiz results page of the training app.',
                    title: 'View quiz results - Training App',
                },
            ],
            readMoreLink: getProjectReadMoreLink('TrainingApp'),
            routeURL: getProjectRouteURL('TrainingApp'),
            sourceCode: 'https://github.com/JoeCastle/WebAppProj',
            sourceTitle: 'GitHub',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.University,
            isDeleted: false,
            yearCompleted: '2019',
        },
    },
    {
        projectName: 'arduinoTemperatureSensor',
        attributes: {
            title: 'Arduino Temperature Sensor',
            disclaimer: '',
            description: [
                'This was completed as part of a group project for my university course. The primary goal of the module was not just programming, but collaborative development between a group of students. Working together with other students do develop a product from start to finish, with communication between group members as a key aspect. This involved planning sprints, allocating tasks and weekly meetings.',
                'As collaboration was the core focus, we would meet weekly, communicate frequently and use version control to manage the code between developers.',
                'My role on the project was Embedded Developer. It was my job to design and build the Arduino circuit, as well as write the code to collect the temperature data, act on the readings, and post the results to a webpage. Other roles in the group included web developers, project manager, business manager and database administrator.',
                'I thoroughly enjoyed this module as it was the first time at university that I was able to collaborate with other students in this way. I also learned something new, as I had never use an Arduino before and had no experience with electrical engineering.',
                'The product itself was simple. We were given a pre-defined project brief, an Arduino kit, and randomly assigned roles and responsibilities. We had to create and design a system that would read the temperature of a room, light an LED depending on the temperature (Green = cold, yellow = fine, red = hot), and send the data to a webpage where to use could visualize the historical data. The user would also be able to define which temperature was considered too hot or too cold.',
                "Unfortunately I wasn't given access to the website code, as that was the responsibility of the web developers, so to demonstrate this project I'd need to re-create the website from scratch. I'd also need to purchase my own Arduino kit.",
            ],
            technologies: getSkills(['c/c++', 'arduino']),
            tags: ['tag1', 'tag2', 'tag3'],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955381/PortfolioScreenshots/ArduinoTempSensor/Thumbnail/ArduinoCircuit4_plu0xi.jpg',
                alt: 'Photo of Arduino board and circuit.',
                title: 'Arduino board and circuit',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/ArduinoTempSensor/Full/Final/ArduinoCircuit4_tgmcdj.jpg',
                    alt: 'Photo of the full Arduino board and circuit for the temperature sensor.',
                    title: 'Arduino board and circuit - Arduino Temperature Sensor',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955383/PortfolioScreenshots/ArduinoTempSensor/Full/Final/ArduinoCircuit1_z1jnoh.jpg',
                    alt: 'Photo of the Arduino board.',
                    title: 'Arduino board - Arduino Temperature Sensor',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955382/PortfolioScreenshots/ArduinoTempSensor/Full/Final/Circuit_Image_V2_wlzrvi.png',
                    alt: 'Screenshot of the full circuit design.',
                    title: 'Full circuit design - Arduino Temperature Sensor',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955380/PortfolioScreenshots/ArduinoTempSensor/Full/Final/Circuit_Diagram_V2_ek7iri.png',
                    alt: 'Screenshot of the full circuit diagram.',
                    title: 'Full circuit diagram - Arduino Temperature Sensor',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955381/PortfolioScreenshots/ArduinoTempSensor/Full/Final/Serial_Output_xphgrt.jpg',
                    alt: 'Screenshot of the redacted console output.',
                    title: 'Redacted console output - Arduino Temperature Sensor',
                },
            ],
            readMoreLink: getProjectReadMoreLink('ArduinoTemperatureSensor'),
            routeURL: getProjectRouteURL('ArduinoTemperatureSensor'),
            sourceCode: 'https://github.com/JoeCastle/ArduinoTemperatureSensor',
            sourceTitle: 'GitHub',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.University,
            isDeleted: false,
            yearCompleted: '2017',
        },
    },
    {
        projectName: 'startPage',
        attributes: {
            title: 'Startpage',
            disclaimer: '',
            description: [
                'A basic web page created in collaboration with another developer and built using vanilla HTML, CSS and JavaScript. I was inspired to create this after stumbling upon an online community that showcases personalized "Start pages".',
                'A "start page" is a web page that you see when you first open your browser. The idea is that you can provide links to your favourite websites, but you\'re able to add any content you want as it\'s just a web page.',
                'The main goals for this project were to build a website using only vanilla technologies, collaborate with another developer, and create something that I could actually use.',
                "Overall I would consider this project a success as I achieved two out of the three goals. As it stands, the page doesn't have enough features to warrant me using it as my daily startpage.",
                'Though I would like to revisit it to add more features and polish the existing features.',
            ],
            technologies: getSkills(['html', 'css', 'javascript', 'visualstudiocode']),
            tags: ['tag1', 'tag2', 'tag3'],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955383/PortfolioScreenshots/Startpage/Thumbnail/startpage_img_1_z5rcxh.jpg',
                alt: 'Screenshot of Startpage bookmarks.',
                title: 'Startpage bookmarks',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_1_mtsibz.jpg',
                    alt: 'Screenshot of the startpage bookmarks.',
                    title: 'Bookmarks - Startpage',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_2_sy9tvt.jpg',
                    alt: 'Screenshot of the add new bookmark modal dialog.',
                    title: 'Add new bookmark modal dialog - Startpage',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_3_nu0fiw.jpg',
                    alt: 'Screenshot of the add new category modal dialog.',
                    title: 'Add new category modal dialog - Startpage',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_4_najscb.jpg',
                    alt: 'Screenshot of the edit category modal dialog.',
                    title: 'Edit category modal dialog - Startpage',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_5_c94jbi.jpg',
                    alt: 'Screenshot of the startpage bookmarks with edit icon and delete icon shown when hovering over category title.',
                    title: 'Category edit and delete icons - Startpage',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_6_otw4qn.jpg',
                    alt: 'Screenshot of the startpage bookmarks with delete icon shown when hovering over bookmark.',
                    title: 'Bookmark delete icon - Startpage',
                },
            ],
            readMoreLink: getProjectReadMoreLink('Startpage'),
            routeURL: getProjectRouteURL('Startpage'),
            sourceCode: 'https://github.com/RTCRhino/StartPage',
            sourceTitle: 'GitHub',
            liveDemo: 'https://rtcrhino.github.io/StartPage/',
            nonLiveDemo: '',
            projectType: ProjType.Personal,
            isDeleted: false,
            yearCompleted: '2019',
        },
    },
    {
        projectName: 'jla',
        attributes: {
            title: 'Java Learning App',
            disclaimer: '',
            description: [
                'A prototype mobile application designed to help students learn the Java programming language. Built using MIT App Inventor. The app includes a wiki, tutorials and quizzes for a fully contained learning experience. Though in reality the app was a proof of concept MVP rather than a fully fledged application, as there was only a few weeks to accomplish everything.',
                'I created this as part of my university course. The goal of this module was to design, create and evaluate a piece of software by following the software development lifecycle. This helped me to appreciate how valuable analysis and design are when developing software.',
            ],
            technologies: getSkills(['mitappinventor']),
            tags: ['tag1', 'tag2', 'tag3'],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955379/PortfolioScreenshots/JavaLearningApp/Thumbnail/jla_designer_qkuo2u.jpg',
                alt: 'App designer',
                title: 'App designer',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_designer_rmn8i3.jpg',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: '',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_code1_jnezr1.jpg',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: '',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_code2_wqedis.jpg',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: '',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz_list_sduhpu.jpg',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: '',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz1_unchnx.jpg',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: '',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz2_sckzzr.jpg',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: '',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz3_dpuudx.jpg',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: '',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_wiki1_u5j0oa.jpg',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: '',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_wiki2_n4s4yv.jpg',
                    alt: 'Screenshot of the projects section of my portfolio.',
                    title: '',
                },
            ],
            readMoreLink: getProjectReadMoreLink('JavaLearningApp'),
            routeURL: getProjectRouteURL('JavaLearningApp'),
            sourceCode: 'https://gallery.appinventor.mit.edu/?galleryid=42738c58-a87f-4c93-b858-b67acdee5558',
            sourceTitle: 'MIT App Inventor',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.University,
            isDeleted: false,
            yearCompleted: '2016',
        },
    },
    {
        projectName: 'fizzBuzzTask',
        attributes: {
            title: 'FizzBuzzTask',
            disclaimer: '',
            description: ['desc', 'test', 'test'],
            technologies: [getSkill('reactjs'), getSkill('sass'), getSkill('typescript'), getSkill('aspnetcore'), getSkill('visualstudio')],
            tags: ['tag1', 'tag2', 'tag3'],
            thumbnail: {
                src: '',
                alt: 'Home page of the FizzBuzz coding task.',
                title: 'Home page of the FizzBuzz coding task.',
            },
            readMoreLink: getProjectReadMoreLink('FizzBuzzTask'),
            routeURL: getProjectRouteURL('FizzBuzzTask'),
            sourceCode: 'https://github.com/JoeCastle/FizzBuzzTask',
            sourceTitle: 'GitHub',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.Personal,
            isDeleted: true,
            yearCompleted: '2019',
        },
    },
    {
        projectName: 'robocoderobot',
        attributes: {
            title: 'Robocode robot',
            disclaimer: '',
            description: [
                'A robot built for the Robocode programming game, that utilizes advanced features such as circling, strafing, linear predictive targeting, wall avoidance, opponent detection, following, evading and dodging.',
            ],
            technologies: getSkills(['java']),
            tags: ['tag1', 'tag2', 'tag3'],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955380/PortfolioScreenshots/Robocode/Thumbnail/Robocode1_o4avab.jpg',
                alt: 'Screenshot of Robocode robot in battle.',
                title: 'Robocode robot in battle',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Robocode/Full/4.%20Final/Robocode1_egy0wr.png',
                    alt: 'Screenshot of the Robocode battle view of my robot duelling an AI enemy at the top of the screen.',
                    title: 'Robot duelling AI enemy - Robocode robot',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Robocode/Full/4.%20Final/Robocode2_qj7d9y.png',
                    alt: 'Screenshot of the Robocode battle view of my robot engaging an AI enemy in the center of the screen.',
                    title: 'Robot engaging AI enemy - Robocode robot',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Robocode/Full/4.%20Final/Robocode3_r3yyj8.png',
                    alt: 'Screenshot of the Robocode battle view of my robot fighting an AI enemy in the center of the screen.',
                    title: 'Robot fighting AI enemy - Robocode robot',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Robocode/Full/4.%20Final/Robocode4_pjy4g8.png',
                    alt: 'Screenshot of the Robocode battle view of my robot destroying an AI enemy on the right side of the screen.',
                    title: 'Robot destroying AI enemy - Robocode robot',
                },
            ],
            readMoreLink: getProjectReadMoreLink('RobocodeRobot'),
            routeURL: getProjectRouteURL('RobocodeRobot'),
            sourceCode: 'https://github.com/JoeCastle/RobocodeRobot',
            sourceTitle: 'GitHub',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.University,
            isDeleted: false,
            yearCompleted: '2017',
        },
    },
];

export default projects;

/**
 * Gets a list of ISkills fora project.
 * @param project The project.
 * @param displayNumber The number of skills to return.
 * @returns An array of ISkill items.
 */
export const getProjectSkills = (project: IProject, displayNumber: number): ISkill[] => {
    return project.attributes.technologies.slice(0, displayNumber).filter((item) => item.skillName !== 'default');
};
