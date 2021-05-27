export default function demoImport() {
    it('visit admin', () => {
        cy.visit('http://localhost/consulting.loc/wp-admin') // visiting the site
        cy.get('#user_login').type('admin')
        cy.get('#user_pass').type('1')
        cy.get('.forgetmenot #rememberme').click()
        cy.get('#wp-submit').contains('Log In').click()
        cy.url().should('match', /wp-admin/)
        cy.get('#menu-dashboard > .wp-has-submenu > .wp-menu-name').should('contain', 'Dashboard')
            //cy.WpAdminLogOut()
    })
    it('theme activation', () => {
        cy.get('#menu-appearance > .wp-has-submenu > .wp-menu-name').click()
        cy.get('[aria-describedby="consulting-action consulting-name"] > .theme-id-container > .theme-actions > .activate').click()
            //cy.get('.inactive-theme > .activate').click()
        cy.get('.stm-button').click()
        cy.get('#email').type('zakiev.vladislav@stylemix.net')
        cy.get('#password').type('3839772-Zv5v')
        cy.get('.solid-button').click()
            //cy.WpAdminLogOut()
    })
}