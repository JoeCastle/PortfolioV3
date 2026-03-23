import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    it('validates and shows a useful error message for empty submission', async () => {
        render(<ContactForm />);

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        expect(await screen.findByText('Full name, Subject, and Message are missing or invalid.')).toBeInTheDocument();
    });

    it('submits with valid data and encodes line breaks in email body', async () => {
        render(<ContactForm />);

        const mockNavigateToEmail = jest.fn();
        jest.spyOn(utils, 'navigateToEmail').mockImplementation(mockNavigateToEmail);

        await userEvent.type(screen.getByLabelText('Full name:'), 'John Doe');
        await userEvent.type(screen.getByLabelText('Subject:'), 'Test Subject');
        await userEvent.type(screen.getByLabelText('Message:'), 'Line one{enter}Line two');

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        expect(mockNavigateToEmail).toHaveBeenCalledWith('Test Subject', 'Hi Joe, %0D%0A%0D%0ALine one%0D%0ALine two %0D%0A%0D%0ARegards,%0D%0AJohn Doe');
        expect(screen.getByLabelText('Full name:')).toHaveValue('');
        expect(screen.getByLabelText('Subject:')).toHaveValue('');
        expect(screen.getByLabelText('Message:')).toHaveValue('');
    });

    it('clears values and previous form errors when Clear is clicked', async () => {
        render(<ContactForm />);

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
        expect(await screen.findByText('Full name, Subject, and Message are missing or invalid.')).toBeInTheDocument();

        await userEvent.type(screen.getByLabelText('Full name:'), 'Jane Doe');
        await userEvent.type(screen.getByLabelText('Subject:'), 'Hello');
        await userEvent.type(screen.getByLabelText('Message:'), 'Message');

        await userEvent.click(screen.getByRole('button', { name: 'Clear' }));

        expect(screen.getByLabelText('Full name:')).toHaveValue('');
        expect(screen.getByLabelText('Subject:')).toHaveValue('');
        expect(screen.getByLabelText('Message:')).toHaveValue('');
        expect(screen.queryByText('Full name, Subject, and Message are missing or invalid.')).not.toBeInTheDocument();
    });
});
