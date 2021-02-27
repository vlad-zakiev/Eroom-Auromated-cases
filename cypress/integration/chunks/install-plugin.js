export default function installPlugin() {

    it('Upload plugin', () => {
        cy.visit('http://localhost/lms.loc/wp-admin')
        cy.get('#menu-plugins').click()
        cy.get('.page-title-action').click()
        cy.get('.upload').click()
            //cy.get('#menu-appearance > .wp-has-submenu > .wp-menu-name').click()
    })
    it('File Upload JSON file', function() {
        cy.get('#pluginzip')
            .attachFile('eroom-zoom-meetings-webinar-master.zip', { subjectType: 'drag-n-drop' })
        cy.get('#install-plugin-submit').click()
        cy.url().should('match', /update/)
        cy.get('.wrap > :nth-child(4)').should('contain', 'Plugin installed successfully.')
        cy.get('#menu-plugins > .wp-submenu > li.wp-first-item > .wp-first-item').click()
        cy.url().should('match', /plugins/)
        cy.get('[data-slug="eroom-zoom-meetings-webinar"] > .plugin-title > strong').should('contain', 'eRoom - Zoom Meetings & Webinar')
        cy.get('#activate-eroom-zoom-meetings-webinar').click()
        cy.get('#deactivate-eroom-zoom-meetings-webinar').should('contain', 'Deactivate')
            //cy.get('.button').click()
            // cy.wait(9000)

    })


}