# PortfolioV3

A personal portfolio website built with React and TypeScript. It is designed to showcase projects, technical skills, and recent blog content to peers, collaborators, and potential hiring managers.

## Highlights

- Single-page portfolio with section-based navigation
- Project showcase with expandable details
- URL deep-link support for project modals via query parameters
- Skills and experience summaries
- Blog feed integration from external source with local backup data
- Contact section with direct social and email links
- Responsive layout across mobile and desktop
- SEO metadata and social sharing tags
- Accessibility-aware UI and practical automated test coverage

## Tech Stack

- React 18
- TypeScript
- SCSS + Bootstrap/Reactstrap
- React Router
- React Helmet Async
- Create React App (react-scripts)

## Testing

This project uses Jest, Cypress, and Playwright.

See the full testing strategy and commands in [TESTING.md](TESTING.md).

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
git clone https://github.com/JoeCastle/PortfolioV3.git
cd PortfolioV3
npm install
```

### Run Locally

```bash
npm start
```

Open http://localhost:3000.

## Scripts

- `npm start`: starts the app in development mode
- `npm run build`: fetches recent posts, updates project date metadata, then builds production assets
- `npm test`: runs Jest tests via `react-scripts test`
- `npm run pretty`: runs Prettier across JS/TS/SCSS/CSS/JSON
- `npm run cypress:open`: opens Cypress UI
- `npm run cypress-component`: runs Cypress component tests
- `npm run cypress-e2e`: runs Cypress e2e tests
- `npm run cypress-e2e:coverage`: runs Cypress e2e and generates NYC reports
- `npm run playwright:test`: runs Playwright tests
- `npm run playwright:test:headed`: runs Playwright in headed mode
- `npm run playwright:test:update-snapshots`: updates Playwright visual snapshots
- `npm run serve:build`: serves the `build` directory on `127.0.0.1:3000`
- `npm run fetch-recent-posts`: fetches recent blog posts and validates SEO data contract
- `npm run update-project-date`: updates sitemap/project date metadata

## Project Deep Linking

The homepage project modal supports URL query parameters for direct linking.

- Example: `/?project=joebloggs`
- Example: `/?project=trainingApp`

Behaviour:

- A valid `project` parameter scrolls the page to the Projects section and opens the matching modal.
- If the project is in the secondary list, the section expands first, then opens the modal.
- Closing the modal removes the `project` parameter from the URL.
- Invalid project values are ignored safely.

## Project Structure

- `src/`: application source code
- `src/components/`: page, section, and shared React components
- `src/data/`: portfolio/project/skills/blog backup data
- `src/scss/`: styling architecture
- `cypress/`: Cypress component and e2e tests
- `e2e/`: Playwright tests and reliability helpers
- `scripts/`: build-time and data maintenance scripts
- `public/`: static public assets

## Deployment

Deployment notes and hosting considerations are documented in [DEPLOYMENT.md](DEPLOYMENT.md).

## License

- Website/application code: [LICENSE-website](LICENSE-website)
- Content (text/media): [LICENSE-content](LICENSE-content)
