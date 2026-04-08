import { render, screen, within } from '@testing-library/react';
import CommercialWorkSection from '../components/home-sections/commercial-work/CommercialWorkSection';

jest.mock('../hooks/useOnScreen', () => ({
    __esModule: true,
    default: jest.fn(),
    PageSectionIdType: {
        Commercial: 'commercial-work-content-container',
    },
}));

describe('CommercialWorkSection', () => {
    it('renders section heading, intro and four commercial work cards', () => {
        render(<CommercialWorkSection />);

        expect(screen.getByText('COMMERCIAL SYSTEMS')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Selected Commercial Work', level: 2 })).toBeInTheDocument();
        expect(screen.getByText(/Client and product details are intentionally anonymised/i)).toBeInTheDocument();

        const cardHeadings = screen.getAllByRole('heading', { level: 3 });
        expect(cardHeadings).toHaveLength(4);

        const firstCard = cardHeadings[0].closest('article');
        expect(firstCard).not.toBeNull();

        if (firstCard) {
            expect(within(firstCard).getByText(/^Stack:/i)).toBeInTheDocument();
            expect(within(firstCard).getAllByRole('listitem').length).toBeGreaterThanOrEqual(8);
        }
    });
});