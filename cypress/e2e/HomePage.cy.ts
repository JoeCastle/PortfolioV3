describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
        cy.get('#about-content-container').contains("Hey there, I'm Joe, a Senior Full-Stack Software Developer based in the UK.");
    });
});
