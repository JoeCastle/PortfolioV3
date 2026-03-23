describe('Projects section', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#project-summary-content-container').scrollIntoView();
    });

    it('renders project tiles and opens details modal', () => {
        cy.get('#project-summary-content-container h2').should('have.text', 'Projects');
        cy.get('.project-summary-tile').its('length').should('be.greaterThan', 0);

        cy.contains('button', 'Read more').first().click();
        cy.get('[role="dialog"]').should('be.visible');
        cy.get('[role="dialog"] .project-details-modal-title').should('not.be.empty');
        cy.get('[role="dialog"] .project-details-modal-description p').its('length').should('be.greaterThan', 0);
    });

    it('toggles between View More and View Less when available', () => {
        cy.get('body').then(($body) => {
            const toggleSelector = '.view-more-projects-btn';
            if ($body.find(toggleSelector).length > 0) {
                cy.get(toggleSelector).should('contain.text', 'View More').click();
                cy.get(toggleSelector).should('contain.text', 'View Less');
                cy.get(toggleSelector).click();
                cy.get(toggleSelector).should('contain.text', 'View More');
            }
        });
    });
});