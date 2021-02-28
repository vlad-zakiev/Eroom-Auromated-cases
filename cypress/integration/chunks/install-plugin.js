export default function installPlugin() {

    it('Adding plugin', () => {
        cy.visit('http://localhost/lms.loc/wp-admin')
        cy.get('#menu-plugins').click()
        cy.get('.page-title-action').click()
        cy.get('.upload').click()
            //cy.get('#menu-appearance > .wp-has-submenu > .wp-menu-name').click()
    })
    it('Upload plugin ', function() {
        //installing
        cy.get('#pluginzip')
            .attachFile('eroom-zoom-meetings-webinar-master.zip', { subjectType: 'drag-n-drop' })
    })
    it('Installing plugin', function() {
        cy.get('#install-plugin-submit').click()
        cy.url().should('match', /update/)
            //cy.get('.wrap > :nth-child(4)').should('contain', 'Plugin installed successfully.')
    })
    it('Checking for succses installetion', function() {
        cy.get('.wrap > :nth-child(4)').should('contain', 'Plugin installed successfully.')
    })





}