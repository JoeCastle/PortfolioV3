describe('MetaData', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('has expected title and key meta tags on home page', () => {
        cy.title().should('include', 'Joseph Castle');
        cy.get('meta[name="description"]').should('have.attr', 'content').and('include', 'Joseph Castle');
        cy.get('meta[property="og:title"]').should('have.attr', 'content').and('include', 'Joseph Castle');
        cy.get('meta[name="twitter:title"]').should('have.attr', 'content').and('include', 'Joseph Castle');
        cy.get('meta[name="robots"]').should('have.attr', 'content', 'index, follow');
    });
});
