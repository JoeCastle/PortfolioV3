import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import globals from '../../utils/globals';

interface Props {
}


export const Footer: React.FC<Props> = (props) => {
    return ( 
        <div>
            <div>
                <h3>Joseph Castle</h3>
                <h4>Software Developer</h4>
                <div className='contact-info-footer'>
                    <a target='_blank' rel='noopener noreferrer' href={globals.LinkedInData.URL} title={'LinkedIn - ' + globals.LinkedInData.DisplayName} aria-label='LinkedIn link.'>
                        <div>
                            <i className='fab fa-linkedin-in'></i>
                        </div>
                    </a>
                    {/* https://www.albionresearch.com/tools/obfuscator */}
                    {/* Obfuscate email against bots. */}
                    <a href='&#109;ailto&#58;&#106;&#37;&#54;Fe&#64;t&#99;a&#115;t%&#54;C%65%&#50;&#69;c%6F%&#50;Euk' title='Email - joe&#64;&#116;c&#97;s&#116;&#108;e&#46;co&#46;u&#107;' aria-label='Email address.'>
                        <div>
                            <i className='fas fa-at'></i>
                        </div>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href={globals.GitHubData.URL} title={'GitHub - ' + globals.GitHubData.DisplayName} aria-label='GitHub link.'>
                        <div>
                            <i className='fab fa-github'></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className='divider' />

            <ul className='footer-navlinks' id='footer-navlinks'>
                {/* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */}
                <li>
                    <NavLink smooth to='/#About'>About</NavLink>
                </li>
                <li>
                    <NavLink smooth to='/#Projects'>Projects</NavLink>
                </li>
                <li>
                    <NavLink smooth to='/#Skills'>Skills</NavLink>
                </li>
                <li>
                    <NavLink smooth to='/#Contact'>Contact</NavLink>
                </li>
            </ul>
            
            <p className='copyright-text'>Copyright &copy; {new Date().getFullYear()} Joseph Castle. All Rights Reserved.</p>

            <p className='version-text'>v1.0.3</p>
        </div>
    )
}
