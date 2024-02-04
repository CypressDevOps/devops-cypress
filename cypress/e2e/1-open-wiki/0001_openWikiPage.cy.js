/// <reference types = "cypress" />

describe('Navigieren und Verifizieren der Wikipedia-Website', () => {

    beforeEach('Navigiere zur Wikipedia-Website', () => {
        cy.visit('/');
    });

    it('Verifiziere die Wikipedia-Website', () => {
        cy.url().should('equal', Cypress.config().baseUrl);
    });
});