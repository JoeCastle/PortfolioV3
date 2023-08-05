import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { NavLinkIdTypes } from '../../hooks/useOnScreen';
import Logo from '../../images/logo_cropped.png';

interface Props {
    isDarkMode: boolean;
}

/**
 * The navbar at the top of the page.
 * @param props 
 * @returns 
 */
export const NavMenu: React.FC<Props> = (props) => {
    const { isDarkMode } = props;

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-expand-md ${isDarkMode === true ? 'navbar-dark' : ''}`}>
                <div className="container-fluid">
                    <div className='navbar-header'>
                        <h1><NavLink className='navbar-brand' smooth to={'/#Home'}><img src={Logo} alt="Joseph Castle" /></NavLink></h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='nav navbar-nav' id='navmenu-ul'>
                            {/* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */}
                            {/* Changed activeClassName to 'isActive' so that I can set 'active' manually. Leaving it blank had the same effect as setting activeClassName to 'active' */}
                            <li>
                                <NavLink id={NavLinkIdTypes.About} smooth to='/#About' className={({ isActive }) => (isActive ? " isActive" : "")}><i className='fas fa-info'></i> About</NavLink>
                            </li>
                            <li>
                                <NavLink id={NavLinkIdTypes.Projects} smooth to='/#Projects' className={({ isActive }) => (isActive ? " isActive" : "")}><i className='fas fa-laptop-code'></i> Projects</NavLink>
                            </li>
                            <li>
                                <NavLink id={NavLinkIdTypes.Skills} smooth to='/#Skills' className={({ isActive }) => (isActive ? " isActive" : "")}><i className='fas fa-code'></i> Skills</NavLink>
                            </li>
                            <li>
                                <NavLink id={NavLinkIdTypes.Contact} smooth to='/#Contact' className={({ isActive }) => (isActive ? " isActive" : "")}><i className='fas fa-envelope'></i> Contact</NavLink>
                            </li>
                        </ul>
                     </div>
                </div>
            </nav>
        </>
    )
}