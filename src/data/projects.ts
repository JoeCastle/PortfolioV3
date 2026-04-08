import globals from '../utils/globals';
import { ISkill, getSkills } from './skills';

export type ProjectTypes =
    | 'aihandbook'
    | 'flashcardsynth'
    | 'joebloggs'
    | 'portfolio'
    | 'trainingApp'
    | 'startPage'
    | 'arduinoTemperatureSensor'
    | 'jla'
    | 'robocoderobot';

export enum ProjectType {
    Personal = 'Personal',
    University = 'University',
    Work = 'Work',
    Freelance = 'Freelance',
    Contract = 'Contract',
}

export type HomepageTier = 'primary' | 'secondary' | 'hidden';

interface IAttributes {
    title: string;
    description: string[]; // Array allows for multiple paragraphs to be included. Can map different index to a new element.
    isComplete: boolean;
    disclaimer: string;
    summary?: string; // A short description, probably used on the home page.
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
    projectType: ProjectType; // University, Personal, Work, Freelance
    yearCompleted?: string; // 2018, 2017* - Initially completed in 2017 at uni, but built my own web page once I left.
    isDeleted: boolean;
    homepageTier?: HomepageTier;
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
        projectName: 'aihandbook',
        attributes: {
            title: 'AI Handbook',
            isComplete: false,
            disclaimer:
                'Active development. Core cross-platform learning and content workflows are implemented, while selected integrations and polish passes are still being refined.',
            summary:
                'A cross-platform AI knowledge platform designed to structure fast-moving concepts into maintainable, scalable learning systems across web and mobile.',
            description: [
                'A cross-platform knowledge platform built to turn evolving AI topics into structured, maintainable learning content across web and mobile.',
                'The system is organised as a TypeScript monorepo with shared UI and domain packages, allowing web and mobile clients to reuse logic while keeping platform-specific concerns separate.',
                'A CMS-driven content model controls rendering, routing, metadata, and discovery across guides, articles, and concept collections.',
                'An AI-assisted content pipeline uses schema-aware generation, typed validation, and transformation steps so generated content can be reviewed and integrated consistently.',
                'The backend handles authentication, row-level access control, and external service integration through clear data-access boundaries.',
                'Shared domain models and modular packages make it easier to add features such as search and subscriptions without duplicating logic across web and mobile.',
            ],
            technologies: getSkills([
                'nextjs',
                'reactjs',
                'typescript',
                'tamagui',
                'supabase',
                'postgresql',
                'reactnative',
                'sanity',
                'visualstudiocode',
            ]),
            tags: [
                'SaaS Side Project',
                'AI',
                'Cross-Platform',
                'Content Platform',
                'Monorepo',
                'Full-Stack',
                'CMS',
                'Developer Tooling',
            ],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744512/PortfolioScreenshots/AIHandbook/Thumbnail/Handbook_tvlcls.png',
                alt: 'Screenshot of the handbook overview in AI Handbook.',
                title: 'Handbook Overview - AI Handbook',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744569/PortfolioScreenshots/AIHandbook/Full/Handbook_ya7tvb.png',
                    alt: 'Screenshot of the handbook overview in AI Handbook.',
                    title: 'Handbook Overview - AI Handbook',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744571/PortfolioScreenshots/AIHandbook/Full/Handbook_Dark_gv5d2k.png',
                    alt: 'Screenshot of the handbook overview Dark Theme in AI Handbook.',
                    title: 'Handbook Dark Theme - AI Handbook',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744560/PortfolioScreenshots/AIHandbook/Full/LearningPaths_Resume_ovftez.png',
                    alt: 'Screenshot of the learning path overview in AI Handbook.',
                    title: 'Learning Paths - AI Handbook',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744568/PortfolioScreenshots/AIHandbook/Full/Guide_vmv8se.png',
                    alt: 'Screenshot of a guide detail page.',
                    title: 'Guide Detail - AI Handbook',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744565/PortfolioScreenshots/AIHandbook/Full/Articles_List_myg1ka.png',
                    alt: 'Screenshot of the article list.',
                    title: 'Article List - AI Handbook',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744561/PortfolioScreenshots/AIHandbook/Full/Article_piyjw5.png',
                    alt: 'Screenshot of an article.',
                    title: 'Article Detail - AI Handbook',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744563/PortfolioScreenshots/AIHandbook/Full/Search_Feature_wrz5u7.png',
                    alt: 'Screenshot of search and filtered content results.',
                    title: 'Search and Discovery - AI Handbook',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744566/PortfolioScreenshots/AIHandbook/Full/Glossary_List_hy4lov.png',
                    alt: 'Screenshot of the glossary list.',
                    title: 'Glossary List - AI Handbook',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744558/PortfolioScreenshots/AIHandbook/Full/Knowledge_Hub_irdfxj.png',
                    alt: 'Screenshot of the knowledge hub.',
                    title: 'Knowledge Hub - AI Handbook',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774744573/PortfolioScreenshots/AIHandbook/Full/Help_Page_vlfe6w.png',
                    alt: 'Screenshot of the help page.',
                    title: 'Help Page - AI Handbook',
                }
            ],
            readMoreLink: getProjectReadMoreLink('AIHandbook'),
            routeURL: getProjectRouteURL('AIHandbook'),
            sourceCode: '',
            sourceTitle: '',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjectType.Personal,
            isDeleted: false,
            homepageTier: 'primary',
            yearCompleted: '2025-present',
        },
    },
    {
        projectName: 'flashcardsynth',
        attributes: {
            title: 'FlashcardSynth',
            isComplete: false,
            disclaimer:
                'Active development. Core deck creation, review, and study workflows are implemented, with AI and subscription features still being implemented.',
            summary:
                'An AI-assisted flashcard platform designed to streamline content creation and optimise learning through structured spaced-repetition workflows.',
            description: [
                'An AI-assisted learning platform built around structured content workflows, spaced repetition, and a scheduling engine that supports long-term review and study.',
                'The system is designed to let users create, refine, and study flashcard decks without unnecessary workflow complexity.',
                'A core part of the platform is the scheduling engine, which manages review cycles, grading, and repetition logic while handling user-specific learning preferences.',
                'AI is integrated into the workflow to generate and refine flashcards from notes and external sources, with validation and transformation steps to keep output consistent and usable.',
                'The backend uses typed APIs and structured data models to support CRUD operations, validation, and multi-format import and export workflows.',
                'The architecture supports additional learning strategies, analytics, and configurable review logic without requiring changes to core data structures.',
            ],
            technologies: getSkills(['nextjs', 'reactjs', 'typescript', 'tailwindcss', 'postgresql', 'visualstudiocode']),
            tags: ['SaaS', 'EdTech', 'AI', 'Spaced Repetition', 'Accessibility', 'Full-Stack'],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303482/PortfolioScreenshots/FlashcardSynth/Thumbnail/Review_Hub_wk1gkv.png',
                alt: 'Screenshot of the review hub page of FlashcardSynth.',
                title: 'Review Hub - FlashcardSynth',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303459/PortfolioScreenshots/FlashcardSynth/Full/Review_Hub_hiw4uq.png',
                    alt: 'Screenshot of the review hub page of FlashcardSynth.',
                    title: 'Review Hub - FlashcardSynth',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303456/PortfolioScreenshots/FlashcardSynth/Full/Landing_Page_qywp8f.png',
                    alt: 'Screenshot of the landing page of FlashcardSynth.',
                    title: 'Landing Page (incomplete) - FlashcardSynth',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303454/PortfolioScreenshots/FlashcardSynth/Full/Create_Deck_Options_pgimkw.png',
                    alt: 'Screenshot of the create deck page of FlashcardSynth.',
                    title: 'Create Deck - FlashcardSynth',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303455/PortfolioScreenshots/FlashcardSynth/Full/AI_Deck_Refinement_meayeo.png',
                    alt: 'Screenshot of the AI deck refinement page of FlashcardSynth.',
                    title: 'AI Deck Refinement - FlashcardSynth',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303457/PortfolioScreenshots/FlashcardSynth/Full/Deck_List_dfgemx.png',
                    alt: 'Screenshot of the deck list page of FlashcardSynth.',
                    title: 'Deck List - FlashcardSynth',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303458/PortfolioScreenshots/FlashcardSynth/Full/Review_Session_1_khgryn.png',
                    alt: 'Screenshot of the review session (question) page of FlashcardSynth.',
                    title: 'Review Session (question) - FlashcardSynth',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303459/PortfolioScreenshots/FlashcardSynth/Full/Review_Session_2_gzioan.png',
                    alt: 'Screenshot of the review session (answer) page of FlashcardSynth.',
                    title: 'Review Session (answer) - FlashcardSynth',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1774303461/PortfolioScreenshots/FlashcardSynth/Full/Settings_Accessibility_ngtvgw.png',
                    alt: 'Screenshot of the settings and accessibility page of FlashcardSynth.',
                    title: 'Settings & Accessibility - FlashcardSynth',
                },
            ],
            readMoreLink: getProjectReadMoreLink('FlashcardSynth'),
            routeURL: getProjectRouteURL('FlashcardSynth'),
            sourceCode: '',
            sourceTitle: '',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjectType.Personal,
            isDeleted: false,
            homepageTier: 'primary',
            yearCompleted: '2025-present',
        },
    },
    {
        projectName: 'joebloggs',
        attributes: {
            title: 'JoeBloggs',
            isComplete: true,
            disclaimer: '',
            summary:
                'A performance-focused blog platform built with Next.js and TypeScript, designed for scalable content publishing, SEO, and maintainable content workflows.',
            description: [
                'A statically generated publishing platform built with Next.js, with a build pipeline that validates content, generates SEO artifacts, and serves predictable static output.',
                'The build process indexes posts and series, enforcing metadata structure, ordering rules, and publish state before pages are generated.',
                'Static artifacts including sitemap, RSS, robots, and recent-post feeds are generated at build time so SEO concerns are part of the delivery pipeline rather than added later.',
                'Posts and series are modelled as structured data, with route-level metadata and canonical handling to keep rendering and indexing consistent.',
                'Quality is enforced through unit, integration, and end-to-end tests, including accessibility checks, visual regression, and performance budgets.',
            ],
            technologies: getSkills(['nextjs', 'reactjs', 'sass', 'typescript', 'visualstudiocode']),
            tags: [],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1751922195/PortfolioScreenshots/Blog/Thumbnail/BlogList_dcyhes.png',
                alt: 'Screenshot of the blog post list page (homepage) of JoeBloggs.',
                title: 'Blog post list - JoeBloggs',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1751921938/PortfolioScreenshots/Blog/Full/BlogList_c9kugy.png',
                    alt: 'Screenshot of the blog post list page (homepage) of JoeBloggs.',
                    title: 'Blog post list - JoeBloggs',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1751921938/PortfolioScreenshots/Blog/Full/BlogList_Light_s5pyqk.png',
                    alt: 'Screenshot of the light theme on the blog post list page (homepage) of JoeBloggs.',
                    title: 'Blog post list (light theme) - JoeBloggs',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1751921938/PortfolioScreenshots/Blog/Full/BlogPost_p6nsjm.png',
                    alt: 'Screenshot of a blog post on JoeBloggs.',
                    title: 'Blog post - JoeBloggs',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1751921938/PortfolioScreenshots/Blog/Full/BlogList_mobile_yvmclp.png',
                    alt: 'Screenshot of the blog post list page (homepage) of JoeBloggs when viewed on a mobile.',
                    title: 'Blog post list mobile view - JoeBloggs',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1751921938/PortfolioScreenshots/Blog/Full/BlogPost_mobile_wclrye.png',
                    alt: 'Screenshot of a blog post on JoeBloggs when viewed on a mobile.',
                    title: 'Blog post mobile view - Portfolio',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1751921938/PortfolioScreenshots/Blog/Full/BlogPost_mobile_2_zdprge.png',
                    alt: 'Screenshot of a blog post on JoeBloggs when viewed on a mobile, with the reading progress.',
                    title: 'Blog post mobile view, with reading progress - Portfolio',
                },
            ],
            readMoreLink: getProjectReadMoreLink('JoeBloggs'),
            routeURL: getProjectRouteURL('JoeBloggs'),
            sourceCode: 'https://github.com/JoeCastle/JoeBloggsV3',
            sourceTitle: 'GitHub',
            liveDemo: 'https://blog.joecastle.co.uk?utm_source=portfolio&utm_medium=project-list',
            nonLiveDemo: '',
            projectType: ProjectType.Personal,
            isDeleted: false,
            homepageTier: 'primary',
            yearCompleted: '2025',
        },
    },
    {
        projectName: 'portfolio',
        attributes: {
            title: 'Portfolio',
            isComplete: true,
            disclaimer: '',
            summary:
                'A modular portfolio platform designed to showcase projects, skills, and content through structured components, dynamic data, and SEO-aware delivery.',
            description: [
                'A React and TypeScript portfolio platform built around structured project data, reusable content sections, and SEO-aware delivery for a long-term maintainable personal site.',
                'Content for projects, skills, and blog integrations is modelled as typed data rather than hardcoded UI text, helping keep the site easier to extend and maintain.',
                'The build pipeline includes automated content ingestion and validation so invalid external blog data or SEO contract issues fail fast before deployment.',
                'Quality is protected through layered testing across unit, Cypress, and Playwright flows, including accessibility checks, visual regression snapshots, and responsive behaviour coverage.',
                'Release and deployment workflows include versioning, tagging, and controlled rollout steps to keep delivery predictable and reduce the risk of accidental regressions.',
            ],
            technologies: getSkills(['reactjs', 'sass', 'typescript', 'visualstudiocode']),
            tags: [],
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
            liveDemo: 'https://joecastle.co.uk',
            nonLiveDemo: '',
            projectType: ProjectType.Personal,
            isDeleted: false,
            homepageTier: 'primary',
            yearCompleted: '2023',
        },
    },
    {
        projectName: 'trainingApp',
        attributes: {
            title: 'Training & Assessment Platform',
            isComplete: true,
            disclaimer: '',
            summary:
                'A full-stack training platform supporting role-based workflows for trainers and trainees, focused on accessible learning, structured assessment, and scalable data handling.',
            description: [
                'A full-stack training platform designed around role-based workflows, accessible UI patterns, and structured assessment and progress tracking.',
                'The system allows trainers to create groups, assign users, build quizzes, and review results, while trainees can complete assigned work and track their progress.',
                'The application combines a React and TypeScript frontend with a .NET backend and SQL Server data layer to support structured data handling and role-based workflows.',
                'Accessibility was treated as a core requirement, including high-contrast themes, clear typography, semantic structure, and evaluation against established accessibility guidance.',
                'The project covers requirements, architecture, implementation, and evaluation, including measurable accessibility outcomes as part of the wider dissertation work.',
            ],
            technologies: getSkills(['reactjs', 'mobx', 'sass', 'typescript', 'aspnetcore', 'visualstudio', 'tsql', 'sqlservermanagementstudio']),
            tags: [],
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
                    alt: 'Screenshot of the view quiz results page of the training app.',
                    title: 'View quiz results - Training App',
                },
            ],
            readMoreLink: getProjectReadMoreLink('TrainingApp'),
            routeURL: getProjectRouteURL('TrainingApp'),
            sourceCode: 'https://github.com/JoeCastle/WebAppProj',
            sourceTitle: 'GitHub',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjectType.University,
            isDeleted: false,
            homepageTier: 'secondary',
            yearCompleted: '2019',
        },
    },
    {
        projectName: 'startPage',
        attributes: {
            title: 'Startpage',
            isComplete: true,
            disclaimer: '',
            summary:
                'A lightweight browser start page focused on fast access to frequently used resources, with emphasis on simplicity, usability, and maintainable front-end design.',
            description: [
                'A lightweight browser start page designed for fast access to frequently used resources with minimal friction.',
                'The system focuses on simplicity and usability, allowing users to organise and manage bookmarks and categories efficiently.',
                'The implementation prioritises clean front-end structure and maintainability over unnecessary complexity.',
                'The project also included mentoring a junior developer, providing guidance on styling decisions, component structure, and practical front-end patterns.',
            ],
            technologies: getSkills(['html', 'css', 'javascript', 'visualstudiocode']),
            tags: [],
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
            readMoreLink: getProjectReadMoreLink('StartPage'),
            routeURL: getProjectRouteURL('StartPage'),
            sourceCode: 'https://github.com/RTCRhino/StartPage',
            sourceTitle: 'GitHub',
            liveDemo: 'https://rtcrhino.github.io/StartPage/',
            nonLiveDemo: '',
            projectType: ProjectType.Personal,
            isDeleted: false,
            homepageTier: 'hidden',
            yearCompleted: '2019',
        },
    },
    {
        projectName: 'arduinoTemperatureSensor',
        attributes: {
            title: 'Arduino Temperature Sensor',
            isComplete: true,
            disclaimer: '',
            description: [
                'A collaborative university group project focused on delivering an end-to-end temperature monitoring solution using Arduino, with teamwork and delivery process as primary learning outcomes.',
                'I worked as the Embedded Developer, designing the circuit and implementing logic to read temperature values, trigger LED status indicators (cold/ok/hot), and provide data output for the connected web experience.',
                'The module emphasised cross-functional collaboration: we planned and tracked work in weekly cycles, split responsibilities across technical and non-technical roles, and relied on clear communication and version control to keep progress aligned.',
                'Beyond technical delivery, this project strengthened practical team skills, including coordination, role ownership, and integration between hardware and software contributors, which are directly transferable to real product teams.',
            ],
            technologies: getSkills(['c/c++', 'arduino']),
            tags: [],
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
            projectType: ProjectType.University,
            isDeleted: true,
            yearCompleted: '2017',
        },
    },
    {
        projectName: 'jla',
        attributes: {
            title: 'Java Learning App',
            isComplete: true,
            disclaimer: '',
            description: [
                'A mobile learning app prototype built with MIT App Inventor to help students practice Java concepts through guided content and quizzes.',
                'This was delivered for a university module centred on the full software project lifecycle: planning, design, implementation, testing, and evaluation. The work was intentionally scoped as an MVP, balancing time constraints with a coherent end-to-end user journey.',
                'The project demonstrates my ability to adapt to unfamiliar platforms, translate requirements into usable product flows, and apply structured evaluation to improve quality and learning outcomes.',
            ],
            technologies: getSkills(['mitappinventor']),
            tags: [],
            thumbnail: {
                src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955379/PortfolioScreenshots/JavaLearningApp/Thumbnail/jla_designer_qkuo2u.jpg',
                alt: 'Screenshot of the app designer showing the homescreen of the app.',
                title: 'Designer view of homescreen - Java Learning App',
            },
            carouselImages: [
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_designer_rmn8i3.jpg',
                    alt: 'Screenshot of the app designer showing the homescreen of the app.',
                    title: 'Designer view of homescreen - Java Learning App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955384/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_code1_jnezr1.jpg',
                    alt: 'Screenshot of the app code blocks showing the functionality behind the homescreen of the app. Part 1.',
                    title: 'Code blocks view of homescreen part 1 - Java Learning App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_code2_wqedis.jpg',
                    alt: 'Screenshot of the app code blocks showing the functionality behind the homescreen of the app. Part 2.',
                    title: 'Code blocks view of homescreen part 2 - Java Learning App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz_list_sduhpu.jpg',
                    alt: 'Screenshot of the quiz list.',
                    title: 'List of quizzes - Java Learning App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz1_unchnx.jpg',
                    alt: 'Screenshot of a quiz.',
                    title: 'New quiz - Java Learning App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz2_sckzzr.jpg',
                    alt: 'Screenshot of a quiz with the answers selected.',
                    title: 'Completed quiz - Java Learning App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_quiz3_dpuudx.jpg',
                    alt: 'Screenshot of a quiz with the answers submitted and marked.',
                    title: 'Submitted quiz with answers - Java Learning App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_wiki1_u5j0oa.jpg',
                    alt: 'Screenshot of the database.',
                    title: 'Database list - Java Learning App',
                },
                {
                    src: 'https://res.cloudinary.com/doswdcvtx/image/upload/v1667955385/PortfolioScreenshots/JavaLearningApp/Full/Final/jla_wiki2_n4s4yv.jpg',
                    alt: 'Screenshot of the database being searched.',
                    title: 'Database list with filtered results - Java Learning App',
                },
            ],
            readMoreLink: getProjectReadMoreLink('JavaLearningApp'),
            routeURL: getProjectRouteURL('JavaLearningApp'),
            sourceCode: 'https://gallery.appinventor.mit.edu/?galleryid=42738c58-a87f-4c93-b858-b67acdee5558',
            sourceTitle: 'MIT App Inventor',
            liveDemo: '',
            nonLiveDemo: '',
            projectType: ProjectType.University,
            isDeleted: true,
            yearCompleted: '2016',
        },
    },
    {
        projectName: 'robocoderobot',
        attributes: {
            title: 'Robocode robot',
            isComplete: true,
            disclaimer: '',
            description: [
                'A Java-based autonomous robot built for the Robocode programming game, designed to combine movement strategy, targeting logic, and adaptive battle behaviour.',
                'Core capabilities include circling and strafing movement, linear predictive targeting, wall avoidance, closest-opponent detection, pursuit logic, and evasive dodging behaviours. Together these features improve survivability while maintaining offensive pressure.',
                'This university-era project strengthened my understanding of algorithmic thinking, state-driven behaviour, and real-time decision-making in constrained environments.',
            ],
            technologies: getSkills(['java']),
            tags: [],
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
            projectType: ProjectType.University,
            isDeleted: true,
            yearCompleted: '2015',
        },
    },
];

export default projects;

/**
 * Gets a list of the active projects.
 * @returns An array of IProject items.
 */
export const getActiveProjects = (): IProject[] => {
    return projects.filter((p) => !p.attributes.isDeleted);
};

/**
 * Gets a list of ISkills for a project.
 * @param project The project.
 * @returns An array of ISkill items.
 */
export const getProjectSkills = (project: IProject): ISkill[] => {
    return project.attributes.technologies.slice(0, globals.numOfTechsToDisplayPerProject);
};

const HOMEPAGE_PRIMARY_ORDER: ProjectTypes[] = ['aihandbook', 'flashcardsynth', 'portfolio', 'joebloggs'];
const HOMEPAGE_SECONDARY_ORDER: ProjectTypes[] = ['trainingApp'];

const getProjectsByOrder = (orderedNames: ProjectTypes[]): IProject[] => {
    const projectMap: Map<ProjectTypes, IProject> = new Map(
        getActiveProjects().map((project) => [project.projectName, project]),
    );

    return orderedNames
        .map((projectName) => projectMap.get(projectName))
        .filter((project): project is IProject => !!project);
};

/**
 * Gets curated primary projects for the homepage.
 * @returns Ordered primary homepage projects.
 */
export const getHomepagePrimaryProjects = (): IProject[] => {
    return getProjectsByOrder(HOMEPAGE_PRIMARY_ORDER).filter((project) => project.attributes.homepageTier === 'primary');
};

/**
 * Gets curated secondary projects for the homepage.
 * @returns Ordered secondary homepage projects.
 */
export const getHomepageSecondaryProjects = (): IProject[] => {
    return getProjectsByOrder(HOMEPAGE_SECONDARY_ORDER).filter((project) => project.attributes.homepageTier === 'secondary');
};

/**
 * Gets curated homepage projects based on whether secondary projects should be included.
 * @param showAll Whether secondary projects should be included.
 * @returns Ordered homepage projects.
 */
export const getHomepageProjects = (showAll: boolean): IProject[] => {
    const primaryProjects: IProject[] = getHomepagePrimaryProjects();
    if (!showAll) {
        return primaryProjects;
    }

    return [...primaryProjects, ...getHomepageSecondaryProjects()];
};