import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavMenu } from '../components/shared/NavMenu';

describe('NavMenu', () => {
    it('renders all navigation links with expected anchors', () => {
        render(
            <BrowserRouter>
                <NavMenu isDarkMode={false} />
            </BrowserRouter>,
        );

        expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/#About');
        expect(screen.getByRole('link', { name: 'Commercial' })).toHaveAttribute('href', '/#CommercialWork');
        expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/#Projects');
        expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '/#Skills');
        expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/#Blog');
        expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/#Contact');
    });

    it('applies dark mode class when enabled', () => {
        const { container } = render(
            <BrowserRouter>
                <NavMenu isDarkMode={true} />
            </BrowserRouter>,
        );

        expect(container.querySelector('nav')).toHaveClass('navbar-dark');
    });
});
