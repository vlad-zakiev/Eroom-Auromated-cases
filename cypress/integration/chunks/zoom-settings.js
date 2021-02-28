export default function ZoomSettings() {
    // it('Visitin admin', function() {
    //     cy.visit('http://localhost/lms.loc/wp-admin')
    // })

    it('Zoom setting', () => {
        cy.get('#toplevel_page_stm_zoom').click()
        cy.get('#toplevel_page_stm_zoom > .wp-submenu > :nth-child(8) > a').click()
    })
    it('Clearing key forms', () => {
        cy.get('#tab_1-api_key').clear()
        cy.get('#tab_1-api_secret').clear()
    })
    it('Input zoom keys', () => {
        //cy.get('#tab_1-api_key').clear()
        cy.get('#tab_1-api_key').type('vl76_OO2Rku9r0ixz6CrIQ')
            //cy.get('#tab_1-api_secret').clear()
        cy.get('#tab_1-api_secret').type('wfPBVV7gFOVeZE3w1gpE23o0i235rzcIt1t3')
    })

    it('Saving settings', () => {
        cy.get('.button > span').should('contain', 'Save Settings').click()
    })

}