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

    it('persists selected theme state after reload', () => {
        cy.get('#page-parent').as('pageRoot');

        cy.get('@pageRoot').then(($root) => {
            const startsDark = $root.hasClass('dark-theme');
            const expectedStored = startsDark ? 'false' : 'true';

            cy.get('#theme-changer-btn').click();
            cy.reload();

            cy.window().its('localStorage.isDarkMode').should('eq', expectedStored);
            cy.get('@pageRoot').should(expectedStored === 'true' ? 'have.class' : 'not.have.class', 'dark-theme');
        });
    });
});
