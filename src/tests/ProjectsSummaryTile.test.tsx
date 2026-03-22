import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectsSummaryTile } from '../components/home-sections/projects/ProjectsSummaryTile';
import { IProject, ProjectType } from '../data/projects';
import { ISkill } from '../data/skills';

jest.mock('yet-another-react-lightbox', () => () => null);
jest.mock('yet-another-react-lightbox/plugins/counter', () => () => null, { virtual: true });
jest.mock('yet-another-react-lightbox/plugins/zoom', () => () => null, { virtual: true });
jest.mock('yet-another-react-lightbox/plugins/captions', () => () => null, { virtual: true });
jest.mock('yet-another-react-lightbox/styles.css', () => ({}), { virtual: true });
jest.mock('yet-another-react-lightbox/plugins/counter.css', () => ({}), { virtual: true });
jest.mock('yet-another-react-lightbox/plugins/captions.css', () => ({}), { virtual: true });

describe('ProjectsSummaryTile', () => {
    it('opens the project details modal when Read more is clicked', async () => {
        const mockProject: IProject = {
            projectName: 'portfolio',
            attributes: {
                title: 'Portfolio',
                disclaimer: '',
                description: ['Summary paragraph', 'Detailed paragraph'],
                technologies: [
                    {
                        skillName: 'reactjs',
                        title: 'React',
                        img: 'https://example.com/react.png',
                        altTag: 'React logo',
                    } as ISkill,
                ],
                tags: [],
                thumbnail: {
                    src: 'https://example.com/thumb.png',
                    alt: 'Thumbnail',
                    title: 'Thumbnail title',
                },
                carouselImages: [],
                readMoreLink: '/Projects/Portfolio',
                routeURL: 'Projects/Portfolio',
                sourceCode: 'https://github.com/example/repo',
                sourceTitle: 'GitHub',
                liveDemo: 'https://example.com',
                nonLiveDemo: '',
                projectType: ProjectType.Personal,
                isDeleted: false,
                yearCompleted: '2026',
            },
        };

        render(<ProjectsSummaryTile project={mockProject} />);

        expect(screen.queryByText('Detailed paragraph')).not.toBeInTheDocument();

        await userEvent.click(screen.getByRole('button', { name: /Read more/i }));

        const dialog: HTMLElement = screen.getByRole('dialog');

        expect(within(dialog).getByText('Detailed paragraph')).toBeInTheDocument();
        expect(within(dialog).getByText('Portfolio')).toBeInTheDocument();
    });
});