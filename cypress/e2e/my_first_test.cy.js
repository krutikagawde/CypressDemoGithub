describe('Wikipedia Homepage Test', function () {
 it('Visits Wikipedia and checks for the Welcome message', function () {
   cy.visit('https://www.wikipedia.org')
   cy.contains('Wikipedia')
     .should('be.visible')
 })
})
