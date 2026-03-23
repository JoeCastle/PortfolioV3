import { render, screen } from '@testing-library/react';
import About from '../components/home-sections/About';
import globals from '../utils/globals';
import utils from '../utils/utils';

// Mock the entire useOnScreen module
jest.mock('../hooks/useOnScreen');

describe('About', () => {
    it('renders section heading and dynamic experience text', () => {
        render(<About />);

        expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
        expect(screen.getByText(new RegExp(`${utils.getYearsOfExperience()} years of experience building software`))).toBeInTheDocument();
    });

    it('renders social links with expected targets', () => {
        render(<About />);

        const linkedInLink: HTMLElement = screen.getByRole('link', { name: /LinkedIn link/i });
        const emailLink: HTMLElement = screen.getByRole('link', { name: /Email address/i });
        const gitHubLink: HTMLElement = screen.getByRole('link', { name: /GitHub link/i });

        expect(linkedInLink).toHaveAttribute('href', globals.linkedInData.url);
        expect(gitHubLink).toHaveAttribute('href', globals.gitHubData.url);
        expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
    });
});
