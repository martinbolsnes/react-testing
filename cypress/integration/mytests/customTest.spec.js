/// <reference types="cypress" />

describe('describing app', () => {
  it('renders', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Learn React').should('be.visible');
    cy.contains('Learn React').click();
  });
});
