import { render, screen } from '@testing-library/react';
import About from '../components/home-sections/About';

// Mock the entire useOnScreen module
jest.mock('../hooks/useOnScreen');

describe('about', () => {
    it('renders about content', () => {
        render(<About />);

        // Assert that specific content is present in the rendered component
        // expect(screen.getByText(/Hey there, I'm Joe/i)).toBeInTheDocument();
        // expect(screen.getByText(/Senior Full-Stack Software Developer based in the UK/i)).toBeInTheDocument();
        // expect(screen.getByText(/extensive hands-on experience in crafting high-quality, bespoke enterprise web applications/i)).toBeInTheDocument();
    });

    it('renders contact links', () => {
        render(<About />);

        // Assert that contact links are present with appropriate labels
        expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Email/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
    });
});
