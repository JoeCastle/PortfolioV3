import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { Footer } from '../components/shared/Footer';

describe('Footer', () => {
    test('renders footer content', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>,
        );

        // Assert name renders
        expect(screen.getByText('Joseph Castle')).toBeInTheDocument();

        // Assert role text renders
        expect(screen.getByText('Full-Stack Software Developer')).toBeInTheDocument();

        // Assert contact links render
        expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Email/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();

        // Assert nav links render
        expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Skills/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();

        // Assert copyright date is current year
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`Copyright © 2019 - ${currentYear} Joseph Castle. All Rights Reserved.`)).toBeInTheDocument();

        // Assert version text
        expect(screen.getByText(`v${process.env.REACT_APP_VERSION}`)).toBeInTheDocument();
    });
});
