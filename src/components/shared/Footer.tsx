import React from 'react';
import globals from '../../utils/globals';
import utils from '../../utils/utils';

interface Props {}

/**
 * The footer component at the bottom of every page.
 * @param props
 * @returns
 */
export const Footer: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="footer-top-content">
                <div>
                    <h3>Joseph Castle</h3>
                    <p>
                        A full-stack software developer with {utils.getYearsOfExperience()} years of experience building bespoke web applications with React, .NET and SQL Server.
                    </p>
                </div>
                <div className="socials-footer">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={globals.linkedInData.url}
                        title={'LinkedIn - ' + globals.linkedInData.displayName}
                        aria-label="LinkedIn link."
                    >
                        <div>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    {/* https://www.albionresearch.com/tools/obfuscator */}
                    {/* Obfuscate email against bots. */}
                    <a
                        href="&#109;ailto&#58;&#106;&#37;&#54;Fe&#64;t&#99;a&#115;t%&#54;C%65%&#50;&#69;c%6F%&#50;Euk"
                        title="Email - joe&#64;&#116;c&#97;s&#116;&#108;e&#46;co&#46;u&#107;"
                        aria-label="Email address."
                    >
                        <div>
                            <i className="fas fa-at"></i>
                        </div>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={globals.gitHubData.url} title={'GitHub - ' + globals.gitHubData.displayName} aria-label="GitHub link.">
                        <div>
                            <i className="fab fa-github"></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className="divider" />

            <div className="footer-bottom-content">
                <p className="copyright-text">Copyright &copy; 2019 - {new Date().getFullYear()} Joseph Castle. All Rights Reserved.</p>

                <p className="version-text">v{process.env.REACT_APP_VERSION}</p>
            </div>
        </div>
    );
};
