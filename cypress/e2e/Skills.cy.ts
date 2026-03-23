describe('Skills section', () => {
    it('shows skills heading and skill area tiles', () => {
        cy.visit('/');
        cy.get('#skills-summary-content-container').scrollIntoView();
        cy.get('#skills-summary-content-container h2').should('have.text', 'Skills');
        cy.get('.skillarea-summary-tiles').children().its('length').should('be.greaterThan', 0);
    });
});