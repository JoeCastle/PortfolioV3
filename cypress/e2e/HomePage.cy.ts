describe('Home page content', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('renders the portfolio value proposition and primary CTAs', () => {
        cy.get('#landing-content-container').should('be.visible');
        cy.get('#landing-content-container h1').should('contain.text', 'I build scalable, production-ready web applications');
        cy.contains('button', 'View Projects').should('be.visible');
        cy.contains('button', 'Contact Me').should('be.visible');
    });

    it('renders all core homepage sections with expected headings', () => {
        const sections: Array<{ id: string; heading: string }> = [
            { id: 'about-content-container', heading: 'About' },
            { id: 'project-summary-content-container', heading: 'Projects' },
            { id: 'skills-summary-content-container', heading: 'Skills' },
            { id: 'blog-summary-content-container', heading: 'Blog' },
            { id: 'contact-content-container', heading: 'Contact' },
        ];

        sections.forEach(({ id, heading }) => {
            cy.get(`#${id}`).scrollIntoView().should('be.visible');
            cy.get(`#${id}`).find('h2').should('contain.text', heading);
        });

        cy.get('.recent-posts-list li').its('length').should('be.greaterThan', 0);
        cy.contains('a', 'Visit the Blog').should('have.attr', 'href').and('include', 'blog.joecastle.co.uk');
    });
});
