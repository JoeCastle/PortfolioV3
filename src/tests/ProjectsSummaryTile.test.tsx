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
    const onOpenDetails = jest.fn();

    beforeEach(() => {
        onOpenDetails.mockClear();
    });

    const mockProject: IProject = {
        projectName: 'portfolio',
        attributes: {
            title: 'Portfolio',
            isComplete: true,
            disclaimer: 'Demo disclaimer',
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

    it('calls onOpenDetails when Read more is clicked', async () => {
        render(<ProjectsSummaryTile project={mockProject} isDarkMode={false} onOpenDetails={onOpenDetails} />);

        await userEvent.click(screen.getByRole('button', { name: /Read more/i }));

        expect(onOpenDetails).toHaveBeenCalledTimes(1);
        expect(onOpenDetails).toHaveBeenCalledWith(mockProject);
    });

    it('hides source and live links when project does not provide them', () => {
        const projectWithoutLinks: IProject = {
            ...mockProject,
            attributes: {
                ...mockProject.attributes,
                sourceCode: '',
                liveDemo: '',
            },
        };

        render(<ProjectsSummaryTile project={projectWithoutLinks} isDarkMode={false} onOpenDetails={onOpenDetails} />);

        expect(screen.queryByRole('link', { name: /Portfolio source code/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('link', { name: /Portfolio live demo/i })).not.toBeInTheDocument();
    });

    it('renders summary text on the card', () => {
        render(<ProjectsSummaryTile project={mockProject} isDarkMode={false} onOpenDetails={onOpenDetails} />);

        const summaryRegion: HTMLElement = screen.getByText('Summary paragraph');
        expect(summaryRegion).toBeInTheDocument();
    });

    it('renders technology logos with title metadata', () => {
        render(<ProjectsSummaryTile project={mockProject} isDarkMode={false} onOpenDetails={onOpenDetails} />);

        const [logoContainer] = screen.getAllByTitle('React');
        expect(within(logoContainer).getByAltText('React logo')).toBeInTheDocument();
    });

    it('falls back to summary when description is empty', () => {
        const summaryOnlyProject: IProject = {
            ...mockProject,
            attributes: {
                ...mockProject.attributes,
                summary: 'Summary from summary field',
                description: [],
            },
        };

        render(<ProjectsSummaryTile project={summaryOnlyProject} isDarkMode={true} onOpenDetails={onOpenDetails} />);

        expect(screen.getByText('Summary from summary field')).toBeInTheDocument();
    });
});