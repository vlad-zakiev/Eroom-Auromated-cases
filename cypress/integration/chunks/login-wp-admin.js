export default function login(login, password) {
    it('WP admin visit', () => {

        cy.visit('http://lms.loc/wp-admin/') // visiting the site
        cy.get('#user_login').type(login)
        cy.get('#user_pass').type(password)
        cy.get('.forgetmenot #rememberme').click()
        cy.get('#wp-submit').contains('Log In').click()
        cy.url().should('match', /wp-admin/)

    })

}