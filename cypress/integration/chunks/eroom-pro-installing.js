export default function installEroomPro() {

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
            .attachFile('eroom-zoom-meetings-webinar-pro-master.zip', { subjectType: 'drag-n-drop' })
    })
    it('Installing plugin', function() {
        cy.get('#install-plugin-submit').click()
        cy.url().should('match', /update/)
        cy.get('.wrap > :nth-child(4)').should('contain', 'Plugin installed successfully.')
    })
    it('Activation plugin', function() {
        cy.get('#menu-plugins > .wp-submenu > li.wp-first-item > .wp-first-item').click()
        cy.get('[data-slug="eroom-zoom-meetings-webinar-pro"] > .plugin-title > strong').should('exist')
        cy.get('#activate-eroom-zoom-meetings-webinar-pro').click()
        cy.get('#fs_license_key').type({ parseSpecialCharSequences: false }, 'sk_9HOzB+%;#={)7a~RMLI*ib>?}O-Y?')
    })




}