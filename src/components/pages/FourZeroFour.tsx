import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { PageSectionIdTypes } from '../../hooks/useOnScreen';

export const FourZeroFour = (): JSX.Element => {
    const ref: React.MutableRefObject<HTMLInputElement> = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const onScreen = true;

    return <div className='page not-found-page'>
        <Helmet>
            <title>Page not found - Joseph Castle</title>
            <meta name="description" content="404 page not found | Joseph Castle is a full-stack software developer with experience building websites and web applications using React, .NET and SQL." />
            <meta name="robots" content="noindex" />
        </Helmet>
            
        <div className='fourzerofour' id='404'>
            <div
                className='content-container'
                id={`${PageSectionIdTypes.FourZeroFour}`}
                ref={ref}>
                <div className=''>
                    <h1>Oops! This page could not be found!</h1>
                </div>
                <div className=''>
                    <p>Page not found, click <Link to={'/'}>here</Link> to get back to the home page</p>
                </div>
            </div>
        </div>
    </div>
}
