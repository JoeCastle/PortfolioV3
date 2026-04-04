describe('Skills section', () => {
    it('shows skills heading, summary tiles, and skill labels', () => {
        cy.visit('/');
        cy.get('#skills-summary-content-container').scrollIntoView();
        cy.get('#skills-summary-content-container h2').should('have.text', 'Skills');

        cy.get('.skillarea-summary-tile').its('length').should('be.greaterThan', 1);
        cy.get('.skillarea-summary-tile').first().within(() => {
            cy.get('.skillarea-summary-tile-title').invoke('text').should('match', /\S+/);
            cy.get('.skillarea-summary-tile-desc').invoke('text').should('match', /\S+/);
            cy.get('.skillarea-summary-tile-techs li').its('length').should('be.greaterThan', 2);
        });
    });
});