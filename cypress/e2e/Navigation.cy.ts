describe('Navigation', () => {
    it('has expected nav link anchors and updates hash when clicked', () => {
        cy.visit('/');

        cy.get('#about-navlink').should('have.attr', 'href', '/#About').click();
        cy.location('hash').should('eq', '#About');

        cy.get('#projects-navlink').should('have.attr', 'href', '/#Projects').click();
        cy.location('hash').should('eq', '#Projects');

        cy.get('#skills-navlink').should('have.attr', 'href', '/#Skills').click();
        cy.location('hash').should('eq', '#Skills');

        cy.get('#blog-navlink').should('have.attr', 'href', '/#Blog').click();
        cy.location('hash').should('eq', '#Blog');

        cy.get('#contact-navlink').should('have.attr', 'href', '/#Contact').click();
        cy.location('hash').should('eq', '#Contact');
    });
});
