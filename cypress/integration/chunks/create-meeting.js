export default function createMeeting() {

    it('Visitin admin', function() {
        cy.visit('http://localhost/lms.loc/wp-admin')
    })
    it('Zoom Settings', function() {
        cy.get('#toplevel_page_stm_zoom > .wp-has-submenu > .wp-menu-name').click()
    })
    it('Add meeting', function() {
        cy.get('.wrap > [href="http://localhost/lms.loc/wp-admin/post-new.php?post_type=stm-zoom"]').click()
    })
    it('Creation Meeting', function() {
        cy.get('#title').type('Test meeting')
        cy.get('#tab_1-stm_agenda').type('Description meeting ' * 5)
        cy.get('#tab_1-stm_host').select('Zakiev Vladislav (zakiev.vladislav@stylemix.net)')
        cy.get('.mx-input').select([title = "03.03.2021"])
        cy.get('#tab_1-stm_time').type('1200')
    })

}