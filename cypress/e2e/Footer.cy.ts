describe('Footer', () => {
    it('renders social links and legal/version content', () => {
        cy.visit('/');

        cy.get('footer').scrollIntoView();
        cy.get('footer h3').should('contain.text', 'Joseph Castle');
        cy.get('footer').within(() => {
            cy.get('a[aria-label="LinkedIn link."]').should('have.attr', 'href').and('include', 'linkedin.com');
            cy.get('a[aria-label="LinkedIn link."]').should('have.attr', 'target', '_blank');
            cy.get('a[aria-label="GitHub link."]').should('have.attr', 'href').and('include', 'github.com/JoeCastle');
            cy.get('a[aria-label="GitHub link."]').should('have.attr', 'target', '_blank');
            cy.get('a[aria-label="Email address."]').should('have.attr', 'href').and('include', 'mailto:');
        });

        cy.get('footer .copyright-text').should('contain.text', new Date().getFullYear().toString());
        cy.get('footer .version-text').should('contain.text', 'v');
    });
});