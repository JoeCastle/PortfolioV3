import { useEffect, useState, UIEvent } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { FourZeroFour } from './components/pages/FourZeroFour';
import { NavMenu } from './components/shared/NavMenu';
import { Footer } from './components/shared/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import globals from './utils/globals';

//Query strings
//https://tylermcginnis.com/react-router-query-strings/

interface Props {}

interface State {
    isDarkMode: boolean;
    hasMounted: boolean;
}

//const userDarkTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches === true;
const isDarkModeDefault = globals.isDarkModeDefault;

export const RouteContainer = (props: Props, state: State): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
    const [hasMounted, setHasMounted] = useState<boolean>(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (hasMounted === true) {
            const themeType: string | null = typeof window !== 'undefined' ? localStorage.getItem('isDarkMode') : null;
            let isDarkMode: boolean = isDarkModeDefault;

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

    // Scroll to the top of the page.
    const handleScrollToTop = (): void => {
        let element: HTMLElement | null = document.getElementById('page-parent');

        if (element) {
            element.classList.add('smooth-scroll');

            element.scrollTop = 0;

            element.classList.remove('smooth-scroll');
        }
    };

    // Only show the scroll to top button when scrolled.
    const handleScrollToTopButtonVisibility = (e: UIEvent<HTMLDivElement>): void => {
        let element: HTMLElement | null = document.getElementById('scroll-to-top-btn');

        if (element) {
            const scrollTop: number = (e.target as HTMLElement).scrollTop;
            if (scrollTop >= 100) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        }
    };

    // Change theme
    const handleChangeTheme = (): void => {
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
            <ScrollToAnchor />
            <NavMenu isDarkMode={isDarkMode} {...props} />

            <main>
                <Routes>
                    <Route path={`/`} element={<Home {...props} isDarkMode={state.isDarkMode} />} />
                    {/* Will catch any route not defined and redirect to the 404 page. */}
                    <Route path={`/404`} element={<FourZeroFour {...props} />} />
                    <Route path={`*`} element={<Navigate to="/404" replace />} />
                </Routes>
            </main>
            <footer>
                <Footer {...props} />
            </footer>

            <button id="scroll-to-top-btn" className={'portfolio-btn'} onClick={handleScrollToTop} title="Scroll to top">
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
