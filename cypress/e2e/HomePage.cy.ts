describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
        cy.get('#landing-content-container').should('be.visible');
        cy.get('#landing-header').should('contain.text', "Hey, I'm Joseph Castle");
        cy.get('#about-content-container').should('exist').scrollIntoView().should('be.visible');
        cy.get('#project-summary-content-container').should('exist').scrollIntoView().should('be.visible');
    });
});
