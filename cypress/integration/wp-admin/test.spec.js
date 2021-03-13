it('test tab', function() {
    cy.visit('http://localhost/lms.loc', {
        onBeforeLoad(win) {
            cy.stub(win, 'open').as('windowOpen');
        },
    });

    cy.get('button').contains('New Window').click();

    cy.get('@windowOpen').should('be.called');
})