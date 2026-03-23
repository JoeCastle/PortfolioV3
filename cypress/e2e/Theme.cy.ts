describe('Theme toggle', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('toggles dark mode class and updates localStorage', () => {
        cy.get('#page-parent').as('pageRoot');

        cy.get('@pageRoot').then(($root) => {
            const startsDark = $root.hasClass('dark-theme');

            cy.get('#theme-changer-btn').click();
            cy.window().its('localStorage.isDarkMode').should('eq', startsDark ? 'false' : 'true');
            cy.get('@pageRoot').should(startsDark ? 'not.have.class' : 'have.class', 'dark-theme');
        });
    });
});
