describe('Projects section', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#project-summary-content-container').scrollIntoView();
    });

    it('renders project tiles with meaningful content and technologies', () => {
        cy.get('#project-summary-content-container h2').should('have.text', 'Projects');
        cy.get('.project-summary-tile').its('length').should('be.greaterThan', 0);

        cy.get('.project-summary-tile').first().within(() => {
            cy.get('.project-summary-tile-title').invoke('text').should('match', /\S+/);
            cy.get('.project-summary-tile-desc').invoke('text').should('match', /\S+/);
            cy.get('.project-summary-logo, .project-summary-logo-fallback').its('length').should('be.greaterThan', 0);
        });
    });

    it('opens project details modal from read-more action', () => {
        cy.get('.project-summary-tile-read-more').first().click();

        cy.get('[role="dialog"]').should('be.visible');
        cy.get('[role="dialog"] .project-details-modal-title').should('not.be.empty');
        cy.get('[role="dialog"] .project-details-modal-description p').its('length').should('be.greaterThan', 0);
    });

    it('toggles between View More and View Less when available', () => {
        cy.get('body').then(($body) => {
            const toggleSelector = '.view-more-projects-btn';
            if ($body.find(toggleSelector).length > 0) {
                cy.get('.project-summary-tile').its('length').then((initialCount) => {
                    cy.get(toggleSelector).should('contain.text', 'View More').click();
                    cy.get('.project-summary-tile').its('length').should('be.greaterThan', initialCount as number);
                });

                cy.get(toggleSelector).should('contain.text', 'View Less');
                cy.get(toggleSelector).click();
                cy.get(toggleSelector).should('contain.text', 'View More');
            }
        });
    });
});