// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Cookies.defaults({
    preserve: /wordpress|wp/
})
Cypress.Commands.add('typeWpAdminLogin', (user) => {
    cy.visit('http://localhost/lms.loc/wp-admin') // visiting the site
    cy.get('#user_login').type('admin')
    cy.get('#user_pass').type('1')
    cy.get('.forgetmenot #rememberme').click()
    cy.get('#wp-submit').contains('Log In').click()
    cy.url().should('match', /wp-admin/)
    cy.get('#menu-dashboard > .wp-has-submenu > .wp-menu-name').should('contain', 'Dashboard')
})
Cypress.Commands.add('WpAdminLogOut', (user) => {
    cy.url().should('match', /wp-admin/)
    cy.get('#wp-admin-bar-my-account .ab-sub-wrapper').invoke('show').should('be.visible').find('#wp-admin-bar-logout').click()
    cy.url().should('match', /wp-login/)

})