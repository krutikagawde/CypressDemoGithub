describe('Loop over an array of URLs', () => {
  const urls = [
    'https://example.cypress.io',
    'https://docs.cypress.io',
    'https://www.google.com',
  ];

  urls.forEach((url) => {
    it(`Visits ${url} and checks title`, () => {
      cy.visit(url);
      cy.title().should('not.be.empty');
    });
  });
});

