describe('MetaData', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io');
    });
    // Tests to add:
    // - Title, description etc on each page.
});
context('MetaData', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/window');
    });

    it('cy.window() - get the global window object', () => {
        // https://on.cypress.io/window
        cy.window().should('have.property', 'top');
    });

    it('cy.document() - get the document object', () => {
        // https://on.cypress.io/document
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    });

    it('cy.title() - get the title', () => {
        // https://on.cypress.io/title
        cy.title().should('include', 'Kitchen Sink');
    });

    it('Should check the page title', () => {
        cy.title().should('eq', 'Sample Page'); // Replace with the expected title
    });

    it('Should check the page description meta tag', () => {
        cy.get('meta[name="description"]').should('have.attr', 'content', 'This is a sample description'); // Replace with the expected description
    });

    // Tests to add:
    // - Title, description etc on each page.
});
