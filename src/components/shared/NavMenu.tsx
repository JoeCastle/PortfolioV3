import React from 'react';
import { NavLinkIdType } from '../../hooks/useOnScreen';
import Logo from '../../images/logo_cropped.png';
import { Link } from 'react-router-dom';

interface Props {
    isDarkMode: boolean;
}

/**
 * The navbar at the top of the page.
 * @param props
 * @returns
 */
export const NavMenu: React.FC<Props> = (props: Props) => {
    const { isDarkMode } = props;

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-expand-md ${isDarkMode === true ? 'navbar-dark' : ''}`}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h1>
                            <Link className="navbar-brand" to={'/#Home'}>
                                <img src={Logo} alt="Joseph Castle" />
                            </Link>
                        </h1>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav" id="navmenu-ul">
                            <li>
                                <Link id={NavLinkIdType.About} to="/#About">
                                    <i className="fas fa-info"></i> About
                                </Link>
                            </li>
                            <li>
                                <Link id={NavLinkIdType.Projects} to="/#Projects">
                                    <i className="fas fa-laptop-code"></i> Projects
                                </Link>
                            </li>
                            <li>
                                <Link id={NavLinkIdType.Skills} to="/#Skills">
                                    <i className="fas fa-code"></i> Skills
                                </Link>
                            </li>
                            <li>
                                <Link id={NavLinkIdType.Contact} to="/#Contact">
                                    <i className="fas fa-envelope"></i> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
