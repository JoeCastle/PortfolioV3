describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
        cy.get('#introduction-content-container').contains("Hey there, I'm Joe, a full-stack software developer based in the UK.");
    });
});
