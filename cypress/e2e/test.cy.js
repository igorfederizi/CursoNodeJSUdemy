describe('teste', () => {
    it('teste api', () => {
        cy.request('GET', 'https://api.spacexdata.com/v3/cores/B1042')
        .its('status').should('equal', 200);
 
    });
});