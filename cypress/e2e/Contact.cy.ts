describe('Contact section', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#contact-content-container').scrollIntoView();
    });

    it('shows validation error when submitting empty form', () => {
        cy.contains('button', 'Submit').click();
        cy.contains('Full name, Subject, and Message are missing or invalid.').should('be.visible');
    });

    it('clears entered values when Clear is clicked', () => {
        cy.get('#fullName').type('Jane Recruiter');
        cy.get('#subject').type('Portfolio feedback');
        cy.get('#message').type('Great site.');

        cy.contains('button', 'Clear').click();

        cy.get('#fullName').should('have.value', '');
        cy.get('#subject').should('have.value', '');
        cy.get('#message').should('have.value', '');
    });
});
