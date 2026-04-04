describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('exposes canonical section anchors for all primary nav items', () => {
        const navLinks: Array<{ selector: string; href: string; hash: string }> = [
            { selector: '#about-navlink', href: '/#About', hash: '#About' },
            { selector: '#projects-navlink', href: '/#Projects', hash: '#Projects' },
            { selector: '#skills-navlink', href: '/#Skills', hash: '#Skills' },
            { selector: '#blog-navlink', href: '/#Blog', hash: '#Blog' },
            { selector: '#contact-navlink', href: '/#Contact', hash: '#Contact' },
        ];

        navLinks.forEach(({ selector, href, hash }) => {
            cy.get(selector).should('be.visible').and('have.attr', 'href', href).click();
            cy.location('hash').should('eq', hash);
        });
    });

    it('shows portfolio brand link with expected home anchor', () => {
        cy.get('.navbar-brand').should('have.attr', 'href', '/#Home');
        cy.get('.navbar-brand img').should('have.attr', 'alt', 'Joseph Castle');
    });
});
