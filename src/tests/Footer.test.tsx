import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { Footer } from '../components/shared/Footer';
import globals from '../utils/globals';
import utils from '../utils/utils';

describe('Footer', () => {
    test('renders footer content', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>,
        );

        expect(screen.getByText('Joseph Castle')).toBeInTheDocument();

        expect(
            screen.getByText(new RegExp(`Senior Full-Stack Software Developer with\\s*${utils.getYearsOfExperience()}\\s*\\+ years of experience`, 'i')),
        ).toBeInTheDocument();

        const linkedInLink: HTMLElement = screen.getByRole('link', { name: /LinkedIn link/i });
        const emailLink: HTMLElement = screen.getByRole('link', { name: /Email address/i });
        const gitHubLink: HTMLElement = screen.getByRole('link', { name: /GitHub link/i });

        expect(linkedInLink).toHaveAttribute('href', globals.linkedInData.url);
        expect(gitHubLink).toHaveAttribute('href', globals.gitHubData.url);
        expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));

        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`Copyright © 2019 - ${currentYear} Joseph Castle. All Rights Reserved.`)).toBeInTheDocument();

        expect(screen.getByText(`v${process.env.REACT_APP_VERSION}`)).toBeInTheDocument();
    });
});
