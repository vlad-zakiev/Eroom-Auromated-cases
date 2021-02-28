export default function ActivateFreePlugin() {
    it('Visiting wp admin plugins page', function() {
        cy.get('#menu-plugins > .wp-submenu > li.wp-first-item > .wp-first-item').click()
        cy.url().should('match', /plugins/)
    })
    it('Checking for the plugin', function() {
        cy.get('[data-slug="eroom-zoom-meetings-webinar"] > .plugin-title > strong').should('contain', 'eRoom - Zoom Meetings & Webinar')
    })
    it('Activating plugin', function() {
        cy.get('#activate-eroom-zoom-meetings-webinar').click()
    })
    it('Activation check', function() {
        cy.get('#deactivate-eroom-zoom-meetings-webinar').should('contain', 'Deactivate')
    })
}