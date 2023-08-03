import { ISkill, getSkill, getSkills } from './skills';
import utils from '../utils/utils'

export type ProjectTypes =
    'default' |
    'portfolio' |
    'trainingApp' |
    'arduinoTemperatureSensor' |
    'startPage' |
    'jla' |
    'fizzBuzzTask' |
    'robocoderobot';

enum ProjType {
    Personal = "Personal",
    University = "University",
    Work = "Work",
    Freelance = "Freelance",
    Contract = "Contract"
}

interface IAttributes {
    title: string;
    description: string[]; //Array allows for multiple paragraphs to be included. Can map different index to a new element.
    disclaimer: string; 
    summary?: string; //A short description, probably used on the home page.
    technologies: ISkill[];
    tags: string[];
    img: string;
    imgAlt: string;
    carouselImages?: string[];
    readMoreLink: string;
    routeURL: string;
    sourceCode: string;
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

let getProjectRouteURL = (projectName: string): string => {
    return `Projects/${projectName}`;
}

let getProjectReadMoreLink = (projectName: string): string => {
    return `/${getProjectRouteURL(projectName)}`;
}

// Images are hosted on Google Drive
let projects: IProject[] = [
    {
        projectName: 'portfolio',
        attributes: {
            title: 'Portfolio',
            disclaimer: '',
            description: [
                'This is the website you are currently viewing. It\'s an online portfolio of my past projects, skills and experience.',
                'The primary goals of this project were to serve as a central repository of my projects, and to be a simple and easily maintainable project that can be updated and revised rapidly.',
                'The biggest challenge I had to overcome was my lack of artistic and design skills. I found it difficult to design a website that was simple, visually appealing and unique.'
            ],
            technologies: getSkills(['reactjs', 'sass', 'typescript', 'aspnetcore', 'visualstudio']),
            tags: ['tag1', 'tag2', 'tag3'],
            img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Portfolio/Thumbnail/Projects_section_yu5fko.jpg',
            imgAlt: 'About section of portfolio',
            carouselImages: [
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Projects_section_lqmdbl.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Skills_section_m7nvli.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Footer_section_dgwcic.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Projects_section_mobile_zeazq8.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955388/PortfolioScreenshots/Portfolio/Full/4.%20Final/Skills_section_mobile_c1zspe.png'
            ],
            readMoreLink: getProjectReadMoreLink('Portfolio'),
            routeURL: getProjectRouteURL('Portfolio'),
            sourceCode: '',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.Personal,
            isDeleted: false,
            yearCompleted: "2021"
        }
    },
    {
        projectName: 'trainingApp',
        attributes: {
            title: 'Training App',
            disclaimer: '',
            description: ['The Training App was built for the project section of my university dissertation. Its purpose was to support the arguments I made within my report and demonstrate many of the features of web accessibility that I discovered during my research.', 'The web application itself allows trainers to create multiple choice quizzes for trainees that are assigned to their group.', 'It demonstrates a variety of web accessibility features such as ...', 'In order to test the accessibility level of the application I used multiple online automatic accessbility testing tools which include ...'],
            technologies: getSkills(['reactjs', 'mobx', 'sass', 'typescript', 'aspnetcore', 'visualstudio', 'tsql', 'sqlservermanagementstudio']),
            tags: ['tag1', 'tag2', 'tag3'],
            img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955382/PortfolioScreenshots/DissertationArtefact/Thumbnail/Artefact1_ebgs1l.png',
            imgAlt: 'Homepage of training app',
            carouselImages: [
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955382/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact1_xwy01d.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact2_cwfyey.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact3_visddq.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact4_dg6xux.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact5_l6u84z.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact6_d4cbgs.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact7_w6dxvb.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/DissertationArtefact/Full/4.%20Final/Artefact8_zb6e9c.png'
            ],
            readMoreLink: getProjectReadMoreLink('TrainingApp'),
            routeURL: getProjectRouteURL('TrainingApp'),
            sourceCode: 'https://github.com/JoeCastle/WebAppProj',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.University,
            isDeleted: false,
            yearCompleted: "2019"
        }
    },
    {
        projectName: 'arduinoTemperatureSensor',
        attributes: {
            title: 'Arduino Temperature Sensor',
            disclaimer: '',
            description: [
                'This was completed as part of a group project for my university course. The primary goal of the module was not just programming, but collaborative development between a group of students. Working together with other students do develop a product from start to finish, with communication between group members as a key aspect. This involved planning sprints, allocating tasks and weekly meetings.',
                'As collaboration was the core focus, we would meet weekly, communicate frequently and use version control to manage the code between developers.',
                'My role on the project was Embeded Developer. It was my job to design and build the arduine circuit, as well as write the code to collect the temperature data, act on the readings, and post the results to a webpage. Other roles in the group included web developers, project manager, business manager and database administrator.',
                'I thoroughly enjoyed this module as it was the first time at university that I was able to collaborate with other students in this way. I also learned something new, as I had never use an Arduino before and had no experience with electrical engineering.',
                'The product itself was simple. We were given a pre-defined project brief, an Arduino kit, and randomly assigned roles and responsibilities. We had to create and design a system that would read the temperature of a room, light an LED depending on the temperature (Green = cold, yellow = fine, red = hot), and send the data to a webpage where to use could visualize the historical data. The user would also be able to define which temperature was considered too hot or too cold.',
                'Unfortunately I wasn\'t given access to the website code, as that was the responsibility of the web developers, so to demonstrate this project I\'d need to re-create the website from scratch. I\'d also need to purchase my own Arduino kit.'
            ],
            technologies: getSkills(['c/c++', 'arduino']),
            tags: ['tag1', 'tag2', 'tag3'],
            img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955381/PortfolioScreenshots/ArduinoTempSensor/Thumbnail/ArduinoCircuit4_plu0xi.jpg',
            imgAlt: 'Arduino board and circuit.',
            carouselImages: [
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/ArduinoTempSensor/Full/Final/ArduinoCircuit4_tgmcdj.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955383/PortfolioScreenshots/ArduinoTempSensor/Full/Final/ArduinoCircuit1_z1jnoh.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955382/PortfolioScreenshots/ArduinoTempSensor/Full/Final/Circuit_Image_V2_wlzrvi.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955380/PortfolioScreenshots/ArduinoTempSensor/Full/Final/Circuit_Diagram_V2_ek7iri.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955381/PortfolioScreenshots/ArduinoTempSensor/Full/Final/Serial_Output_xphgrt.jpg',
            ],
            readMoreLink: getProjectReadMoreLink('ArduinoTemperatureSensor'),
            routeURL: getProjectRouteURL('ArduinoTemperatureSensor'),
            sourceCode: 'https://github.com/JoeCastle/ArduinoTemperatureSensor',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.University,
            isDeleted: false,
            yearCompleted: "2017"
        }
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
                'Overall I would consider this project a success as I achieved two out of the three goals. As it stands, the page doesn\'t have enough features to warrant me using it as my daily startpage.',
                'Though I would like to revisit it to add more features and polish the existing features.'
            ],
            technologies: getSkills(['html', 'css', 'javascript', 'visualstudiocode']),
            tags: ['tag1', 'tag2', 'tag3'],
            //img: projectImages.startPageImages.startpageImg1Thumbnail,
            img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955383/PortfolioScreenshots/Startpage/Thumbnail/startpage_img_1_z5rcxh.jpg',
            imgAlt: 'Start page bookmarks',
            carouselImages: [
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_1_mtsibz.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_2_sy9tvt.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_3_nu0fiw.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_4_najscb.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_5_c94jbi.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955378/PortfolioScreenshots/Startpage/Full/Final/startpage_img_6_otw4qn.jpg',
            ],
            readMoreLink: getProjectReadMoreLink('Startpage'),
            routeURL: getProjectRouteURL('Startpage'),
            sourceCode: 'https://github.com/RTCRhino/StartPage',
            liveDemo: 'https://rtcrhino.github.io/StartPage/',
            nonLiveDemo: '',
            projectType: ProjType.Personal,
            isDeleted: false,
            yearCompleted: "2019"
        }
    },
    {
        projectName: 'jla',
        attributes: {
            title: 'Java Learning App',
            disclaimer: '',
            description: [
                'A prototype mobile application designed to help students learn the Java programming language. Built using MIT App Inventor. The app includes a wiki, tutorials and quizzes for a fully contained learning experience. Though in reality the app was a proof of concept MVP rather than a fully fledged application, as there was only a few weeks to accomplish everything.',
                'I created this as part of my university course. The goal of this module was to design, create and evaluate a piece of software by following the software development lifecycle. This helped me to appreciate how valubale analysis and design are when developing software.',
            ],
            technologies: getSkills(['mitappinventor']),
            tags: ['tag1', 'tag2', 'tag3'],
            //img: projectImages.jlaImages.jla_designerThumbnail,
            img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955379/PortfolioScreenshots/JavaLearningApp/Thumbnail/jla_designer_qkuo2u.jpg',
            imgAlt: 'App designer',
            carouselImages: [
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_designer_rmn8i3.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_code1_jnezr1.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_code2_wqedis.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz_list_sduhpu.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz1_unchnx.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz2_sckzzr.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz3_dpuudx.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_wiki1_u5j0oa.jpg',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_wiki2_n4s4yv.jpg'
            ],
            readMoreLink: getProjectReadMoreLink('JavaLearningApp'),
            routeURL: getProjectRouteURL('JavaLearningApp'),
            sourceCode: 'https://gallery.appinventor.mit.edu/?galleryid=42738c58-a87f-4c93-b858-b67acdee5558',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.University,
            isDeleted: false,
            yearCompleted: "2016"
        }
    },
    {
        projectName: 'fizzBuzzTask',
        attributes: {
            title: 'FizzBuzzTask',
            disclaimer: '',
            description: ['desc', 'test', 'test'],
            technologies: [getSkill('reactjs'), getSkill('sass'), getSkill('typescript'), getSkill('aspnetcore'), getSkill('visualstudio')],
            tags: ['tag1', 'tag2', 'tag3'],
            img: "",
            imgAlt: 'Home page of the FizzBuzz coding task.',
            readMoreLink: getProjectReadMoreLink('FizzBuzzTask'),
            routeURL: getProjectRouteURL('FizzBuzzTask'),
            sourceCode: 'https://github.com/JoeCastle/FizzBuzzTask',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.Personal,
            isDeleted: true,
            yearCompleted: "2019"
        }
    },
    {
        projectName: 'robocoderobot',
        attributes: {
            title: 'Robocode robot',
            disclaimer: '',
            description: ['A robot built for the Robocode programming game, that utilizes advanced features such as circling, strafing, linear predictive targeting, wall avoidance, opponent detection, following, evading and dodging.'],
            technologies: getSkills(['java']),
            tags: ['tag1', 'tag2', 'tag3'],
            img: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955380/PortfolioScreenshots/Robocode/Thumbnail/Robocode1_o4avab.jpg',
            imgAlt: 'Robocode robot in battle.',
            carouselImages: [
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Robocode/Full/4.%20Final/Robocode1_egy0wr.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Robocode/Full/4.%20Final/Robocode2_qj7d9y.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Robocode/Full/4.%20Final/Robocode3_r3yyj8.png',
                'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955389/PortfolioScreenshots/Robocode/Full/4.%20Final/Robocode4_pjy4g8.png'
            ],
            readMoreLink: getProjectReadMoreLink('RobocodeRobot'),
            routeURL: getProjectRouteURL('RobocodeRobot'),
            sourceCode: 'https://github.com/JoeCastle/RobocodeRobot',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjType.University,
            isDeleted: false,
            yearCompleted: "2017"
        }
    },
];

export default projects;

export let getProjectSkills = (project: IProject, displayNumber: number): ISkill[] => {
    return project.attributes.technologies
        .slice(0, displayNumber)
        .filter(item => item.skillName !== 'default');
}