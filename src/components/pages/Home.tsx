import { Helmet } from 'react-helmet-async';
import React from 'react';
//import { Suspense } from 'react';
//const Introduction = React.lazy(() => import('../home-sections/Introduction'));
//const ProjectsSummary = React.lazy(() => import('../home-sections/ProjectsSummary'));
//const ContactForm = React.lazy(() => import('../home-sections/ContactForm'));
//const SkillAreas = React.lazy(() => import('../home-sections/SkillAreas'));
import Introduction from '../home-sections/Introduction';
import ProjectsSummary from '../home-sections/projects/ProjectsSummary';
import ContactForm from '../home-sections/ContactForm';
import SkillAreas from '../home-sections/skills/SkillAreas';

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
                <title>Joseph Castle | Full-Stack Software Developer</title>
                <meta
                    name="description"
                    content="Joseph Castle is a full-stack software developer with experience building websites and web applications using React, .NET and SQL."
                />
                <meta property="og:title" content="Joseph Castle | Full-Stack Software Developer" />
                <meta
                    property="og:description"
                    content="Joseph Castle is a full-stack software developer with experience building websites and web applications using React, .NET and SQL."
                />
                <meta property="og:image" content={process.env.PUBLIC_URL + `/Projects_section.jpg`} />
                <meta name="twitter:title" content="Joseph Castle | Full-Stack Software Developer" />
                <meta
                    name="twitter:description"
                    content="Joseph Castle is a full-stack software developer with experience building websites and web applications using React, .NET and SQL."
                />
                <meta name="twitter:image" content={process.env.PUBLIC_URL + `/Projects_section.jpg`} />
            </Helmet>
            {/*<meta name="theme-color" content={this.props.isDarkMode ? "#000000" : "#000000"} />*/}
            <Introduction {...props} />
            <ProjectsSummary {...props} />
            <SkillAreas {...props} />
            <ContactForm {...props} />
        </div>
    );
};
