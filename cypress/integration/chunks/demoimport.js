import { timeout } from "async"

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
                //cy.WpAdminLogOut()
        })
        ///sss
    describe('Logging In - CSRF Tokens', function() {
            const email = 'zakiev.vladislav@stylemix.net'
            const password = '3839772-Zv5v'

            Cypress.Commands.add('loginByCSRF', (csrfToken) => {
                console.log(csrfToken);
                cy.request({
                    method: 'POST',
                    url: 'https://support.stylemixthemes.com/auth/login',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: {
                        email: email,
                        password: password
                    },
                })
            })

            it('strategy #1: parse token from HTML', function() {
                cy.request('https://support.stylemixthemes.com/auth/login')
                    .its('body')
                    .then((body) => {
                        console.log('we are here')
                            // we can use Cypress.$ to parse the string body
                            // thus enabling us to query into it easily
                        const $html = Cypress.$(body)
                        const csrf = $html.find('input[name=_token]').val()

                        cy.loginByCSRF(csrf)
                            .then((resp) => {
                                console.log(resp)
                                expect(resp.status).to.eq(200)
                            })
                    })

                // successful "cy.request" sets all returned cookies, thus we should
                // be able to visit the protected page - we are logged in!
                cy.visit('https://support.stylemixthemes.com/')
                cy.visit('https://support.stylemixthemes.com/theme-activation?envatoId=14740561&site=http%3A%2F%2Flocalhost%2Fconsulting.loc')
                cy.get('form > .uk-button').click()
                cy.get('#user_login').type('admin')
                cy.get('#user_pass').type('1')
                cy.get('.forgetmenot #rememberme').click()
                cy.get('#wp-submit').contains('Log In').click()
                cy.url().should('match', /wp-admin/)
            })


        })
        // describe('Logging In - CSRF Tokens', function() {
        //     it('visit admin', () => {
        //         cy.visit('http://localhost/consulting.loc/wp-admin') // visiting the site
        //         cy.get('#toplevel_page_stm-admin > .wp-has-submenu > .wp-menu-name').click()
        //         //cy.WpAdminLogOut()
        //     })
        // })
}