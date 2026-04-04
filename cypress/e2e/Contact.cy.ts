describe('Contact section', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#contact-content-container').scrollIntoView();
    });

    it('renders contact form fields and social contact links', () => {
        cy.get('#contact-content-container h2').should('have.text', 'Contact');
        cy.get('#fullName').should('be.visible');
        cy.get('#subject').should('be.visible');
        cy.get('#message').should('be.visible');

        cy.get('a[aria-label="LinkedIn link."]').should('have.attr', 'href').and('include', 'linkedin.com');
        cy.get('a[aria-label="GitHub link."]').should('have.attr', 'href').and('include', 'github.com/JoeCastle');
        cy.get('a[aria-label="Email address."]').should('have.attr', 'href').and('include', 'mailto:');
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
