describe('Responsive viewport behavior', () => {
    it('shows navbar toggler on mobile', () => {
        cy.viewport('iphone-x');
        cy.visit('/');

        cy.get('.navbar-toggler').should('be.visible');
        cy.get('#landing-content-container h1').should('be.visible');
        cy.contains('button', 'View Projects').should('be.visible');
    });

    it('shows desktop nav layout and section content on large screens', () => {
        cy.viewport(1440, 900);
        cy.visit('/');

        cy.get('.navbar').should('be.visible');
        cy.get('#landing-content-container h1').should('be.visible');
        cy.get('#about-content-container').should('exist').scrollIntoView().should('be.visible');
        cy.get('#skills-summary-content-container').should('exist').scrollIntoView().should('be.visible');
    });
});