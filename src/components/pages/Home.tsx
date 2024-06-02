import { Helmet } from 'react-helmet-async';
import React from 'react';
//import { Suspense } from 'react';
//const about = React.lazy(() => import('../home-sections/about'));
//const ProjectsSummary = React.lazy(() => import('../home-sections/ProjectsSummary'));
//const ContactForm = React.lazy(() => import('../home-sections/ContactForm'));
//const SkillAreas = React.lazy(() => import('../home-sections/SkillAreas'));
import About from '../home-sections/About';
import ProjectsSummary from '../home-sections/projects/ProjectsSummary';
import ContactForm from '../home-sections/ContactForm';
import SkillAreas from '../home-sections/skills/SkillAreas';
import Landing from '../home-sections/Landing';
import globals from '../../utils/globals';

interface Props {
    isDarkMode: boolean;
}

/**
 * The home page. Contains many sections including projects and skills.
 * @param props
 * @returns
 */
export const Home: React.FC<Props> = (props) => {
    return (
        <div id="Home">
            <Helmet>
                <title>{globals.metaData.title}</title>
                <meta name="description" content={globals.metaData.description} />
                <meta property="og:title" content={globals.metaData.title} />
                <meta property="og:description" content={globals.metaData.description} />
                <meta property="og:image" content={process.env.PUBLIC_URL + `/Projects_section.jpg`} />
                <meta name="twitter:title" content={globals.metaData.title} />
                <meta name="twitter:description" content={globals.metaData.description} />
                <meta name="twitter:image" content={process.env.PUBLIC_URL + `/Projects_section.jpg`} />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <Landing {...props} />
            <About {...props} />
            <ProjectsSummary {...props} />
            <SkillAreas {...props} />
            <ContactForm {...props} />
        </div>
    );
};
