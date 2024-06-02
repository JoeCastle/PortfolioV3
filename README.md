# PortfolioV3

Welcome to my web portfolio! This project showcases my past projects, skills, and experience in a dynamic and interactive way. It's built using React, SASS, and Typescript and is based off [Create React App](https://github.com/facebook/create-react-app).

## Features

- **Single Page Design:** The homepage provides easy access to relevant information through scrolling or navigation links.

- **Project Showcase:** Explore a collection of my past projects, each with its own details, technologies used, and links to live demos or repositories.

- **Skills Section:** Discover the range of skills I possess, categorized for clarity. From programming languages to frameworks and tools, get insights into my technical proficiency.

- **Contact form:** Contact form with relevant contact information throughout the site.

- **Responsive Design:** The portfolio is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.

- **Accessibility:** Prioritize inclusivity with accessibility features, ensuring a user-friendly experience for individuals with diverse needs.

- **SEO:** Enhance visibility and reach a wider audience by implementing SEO best practices, optimizing the site for search engines.


## Tech Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- React
- SASS
- Typescript
- Bootstrap

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository to your local machine:
    ```
    git clone https://github.com/JoeCastle/PortfolioV3.git
    ```

2. Navigate to the project directory:
   ```
   cd PortfolioV3
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Project

1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the web portfolio.

## Project Structure

- **src:** Contains the source code for the React application.
  - **components:** React components including pages and sections.
    - **home-sections:** The main sections of the homepage.
    - **pages:** Individual pages.
    - **shared:** Components shared across multiple components or pages.
  - **data:** Typescript objects storing data used on the website such as projects and skills.
  - **scss:** SASS files for styling the components and pages.
- **cypress** Tests folder containing Cypress integration and component tests.
- **public**  Static folder containing index.html, favicon and other assets.

## Available Scripts

- `npm start`
- `npm run build`
- `npm test`
- `npm eject`
- `npm run pretty`
- `npm run cypress:open`
- `npm run cypress-component`
- `npm run cypress-e2e`
- `npm run update-project-date`
   - Updates the date in `.env.local` and `sitemap.xml` to the current date.

## TODO:

- [x] Write README.md.
- [x] Update styling and structure of the About and Landing sections.
- [x] Improve UX by updating styling for buttons and links.
- [x] Update styling and structure of the Contact section.
- [x] Update styling and structure of the footer.
- [ ] Update general copy.
- [ ] Update project copy.
- [ ] Add cypress tests.
- [ ] Add jest tests.

## License

The code in this project is licensed under the terms of the [LICENSE-website](LICENSE-website), while the content, including text and media, is licensed under the [LICENSE-content](LICENSE-content). See the respective files for detailed licensing information.
