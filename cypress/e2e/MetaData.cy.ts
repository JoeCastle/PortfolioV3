describe('Metadata and SEO', () => {
    it('sets expected home page title and social metadata', () => {
        cy.visit('/');

        cy.title().should('include', 'Joseph Castle');
        cy.get('meta[name="description"][content*="Senior Full-Stack Software Developer"]').should('have.length.at.least', 1);
        cy.get('meta[property="og:title"][content*="Joseph Castle"]').should('have.length.at.least', 1);
        cy.get('meta[property="og:description"][content*="scalable"]').should('have.length.at.least', 1);
        cy.get('meta[name="twitter:title"][content*="Joseph Castle"]').should('have.length.at.least', 1);
        cy.get('meta[name="twitter:description"][content*="Full-Stack"]').should('have.length.at.least', 1);
        cy.get('meta[name="robots"][content="index, follow"]').should('have.length.at.least', 1);
    });

    it('sets noindex robots metadata on the 404 page', () => {
        cy.visit('/404');

        cy.title().should('include', 'Page not found - Joseph Castle');
        cy.get('meta[name="description"][content*="404 page not found"]').should('have.length.at.least', 1);
        cy.get('meta[name="robots"][content="noindex, follow"]').should('have.length.at.least', 1);
    });
});
