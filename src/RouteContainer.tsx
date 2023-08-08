import * as React from 'react';
import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { FourZeroFour } from './components/pages/FourZeroFour';
import { NavMenu } from './components/shared/NavMenu';
import { Footer } from './components/shared/Footer';

//Query strings
//https://tylermcginnis.com/react-router-query-strings/

interface Props {}

interface State {
    isDarkMode: boolean;
    hasMounted: boolean;
}

//const userDarkTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches === true;
const isDarkModeDefault = true;

export const RouteContainer = (props: Props, state: State) => {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const [hasMounted, setHasMounted] = React.useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (hasMounted === true) {
            const themeType = typeof window !== 'undefined' ? localStorage.getItem('isDarkMode') : null;
            let isDarkMode = isDarkModeDefault;

            if (themeType !== null && themeType !== undefined) {
                if (themeType === 'true') {
                    isDarkMode = true;
                } else if (themeType === 'false') {
                    isDarkMode = false;
                }
            }

            setIsDarkMode(isDarkMode);
        }
    }, [hasMounted]);

    //Scroll to the top of the page.
    const handleScrollToTop = () => {
        let element = document.getElementById('page-parent');

        if (element) {
            element.classList.add('smooth-scroll');

            element.scrollTop = 0;

            element.classList.remove('smooth-scroll');
        }
    };

    //Only show the scroll to top button when scrolled.
    const handleScrollToTopButtonVisibility = (e: any) => {
        let element = document.getElementById('scroll-to-top-btn');

        if (element) {
            if (e.target.scrollTop >= 100) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        }
    };

    //Change theme
    const handleChangeTheme = () => {
        if (isDarkMode === true) {
            setIsDarkMode(false);
            if (typeof window !== 'undefined') {
                localStorage.setItem('isDarkMode', 'false');
            }
        } else {
            setIsDarkMode(true);

            if (typeof window !== 'undefined') {
                localStorage.setItem('isDarkMode', 'true');
            }
        }
    };

    return (
        <div id="page-parent" className={`theme-container${isDarkMode === true ? ' dark-theme' : ''}`} onScroll={handleScrollToTopButtonVisibility}>
            <NavMenu isDarkMode={isDarkMode} {...props} />

            <main>
                <Routes>
                    <Route path={`/`} element={<Home {...props} isDarkMode={state.isDarkMode} />} />

                    {/*https://www.codereadability.com/replacing-if-statements-with-object-lookups/ */}
                    {/*{projects
                    .filter(item =>
                        item.projectName != 'default')
                    .map((item, i) =>
                        <Route
                            key={i}
                            exact
                            path={`${props.match.url}${item.attributes.routeURL}`}
                            render={(props: any) =>
                                <Project
                                    key={item}
                                    projectName={item.projectName}
                                    {...props}
                                />
                            }
                        />
                    )}*/}

                    {/* Will catch any route not defined and redirect to the 404 page. */}
                    <Route path={`/404`} element={<FourZeroFour {...props} />} />
                    <Route path={`*`} element={<Navigate to="/404" replace />} />
                </Routes>
            </main>
            <footer>
                <Footer {...props} />
            </footer>

            <button id="scroll-to-top-btn" onClick={handleScrollToTop} title="Scroll to top">
                <i className="fas fa-arrow-up"></i>
            </button>

            {hasMounted === true && (
                <button id="theme-changer-btn" onClick={handleChangeTheme} title={isDarkMode === true ? 'Switch to light mode' : 'Switch to dark mode'}>
                    <i className={`fas ${isDarkMode === true ? 'fa-moon' : 'fa-sun'}`}></i>
                </button>
            )}
        </div>
    );
};
