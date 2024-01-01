import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavMenu } from '../components/shared/NavMenu';

describe('NavMenu', () => {
    it('renders the navigation links correctly', () => {
        // Render the component with a Router wrapper
        render(
            <BrowserRouter>
                <NavMenu isDarkMode={false} />
            </BrowserRouter>,
        );

        // Verify that navigation links are rendered
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Skills')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
});
