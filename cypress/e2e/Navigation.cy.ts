/// <reference types="cypress" />

/**
 * Navigation tests
 */
describe('Navigation', () => {
    const navLinkIds: string[] = ['#about-navlink', '#projects-navlink', '#skills-navlink', '#contact-navlink'];

    const checkNavLinkState = (navLinkId: string) => {
        // Assert that the current navlink being set to active has the active class.
        cy.get(navLinkId).should('have.class', 'active');
        // Get all navlinks excluding the current one being set to active and assert that they should not be active.
        cy.get(navLinkIds.join(', ')).not(navLinkId).should('not.have.class', 'active');
    };

    beforeEach(() => {
        cy.visit('/');
    });

    // Test the active navlink changing as the user scrolls.
    it('passes', () => {
        // Initial active navlink should be About
        checkNavLinkState(navLinkIds[0]);

        // Scroll to projects
        cy.get('#project-summary-content-container').scrollIntoView();
        // Active navlink should be Projects
        checkNavLinkState(navLinkIds[1]);

        // Scroll to skills
        cy.get('#skills-summary-content-container').scrollIntoView();
        // Active navlink should be Skills
        checkNavLinkState(navLinkIds[2]);

        // Scroll to contact
        cy.get('#contact-content-container').scrollIntoView();
        // Active navlink should be Contact
        checkNavLinkState(navLinkIds[3]);

        // Scroll back to about
        cy.get('#introduction-content-container').scrollIntoView();
        // Active navlink should be About again
        checkNavLinkState(navLinkIds[0]);
    });

    // Additional tests to add:
    // - Clicking the logo.
    // - Clicking the navlinks and checking the appropriate component shows.
    // - Clicking the scroll to top button and checking the appropriate component shows.
    // - Check scroll to top button visibility at different scroll heights.
    // - Check url is changing when clicking nav links - navigation.cy.js
});
