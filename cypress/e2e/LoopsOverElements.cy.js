describe('Loop over elements with each()', () => {
  it('Clicks all buttons in a list', () => {
    cy.visit('https://example.cypress.io/commands/actions');

    // Find all buttons inside a container and click each
    cy.get('.action-btn').each(($btn, index, $list) => {
      cy.wrap($btn).click();
      cy.log(`Clicked button ${index + 1}`);
    });
  });
});
