import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../components/home-sections/ContactForm';
import utils from '../utils/utils';

// Mock the entire useOnScreen module
jest.mock('../hooks/useOnScreen');

describe('ContactForm', () => {
    it('renders the form with input fields and a submit button', () => {
        render(<ContactForm />);

        expect(screen.getByLabelText('Full name:')).toBeInTheDocument();
        expect(screen.getByLabelText('Subject:')).toBeInTheDocument();
        expect(screen.getByLabelText('Message:')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    });

    it('validates and shows error messages for empty fields when submitted', async () => {
        render(<ContactForm />);

        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

        expect(await screen.findByText(/Full name.*missing or invalid/i)).toBeInTheDocument();
        expect(await screen.findByText(/Subject.*missing or invalid/i)).toBeInTheDocument();
        expect(await screen.findByText(/Message.*missing or invalid/i)).toBeInTheDocument();
    });

    it('submits the form and clears input fields on successful submission', () => {
        render(<ContactForm />);

        // Simulate user input
        fireEvent.change(screen.getByLabelText('Full name:'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText('Subject:'), { target: { value: 'Test Subject' } });
        fireEvent.change(screen.getByLabelText('Message:'), { target: { value: 'Test Message' } });

        // Mock the utility function to prevent actual navigation
        const mockNavigateToEmail = jest.fn();
        jest.spyOn(utils, 'navigateToEmail').mockImplementation(mockNavigateToEmail);

        // Simulate form submission
        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

        // Assertions
        // Verify that input fields are cleared after submission
        expect(screen.getByLabelText('Full name:')).toHaveValue('');
        expect(screen.getByLabelText('Subject:')).toHaveValue('');
        expect(screen.getByLabelText('Message:')).toHaveValue('');

        // Verify that the utility function was called with the expected arguments
        expect(mockNavigateToEmail).toHaveBeenCalledWith('Test Subject', 'Hi Joe, %0D%0A%0D%0ATest Message %0D%0A%0D%0ARegards,%0D%0AJohn Doe');
    });
});
