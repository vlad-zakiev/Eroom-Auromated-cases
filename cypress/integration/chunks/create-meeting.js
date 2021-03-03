export default function createMeeting() {
    const pass = '12345' /*<< PASSWORD*/
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
        //typing meeting Title
        cy.get('#title').type('Test meeting')
            //typing meeting description
        cy.get('#tab_1-stm_agenda').type('Description meeting. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ')
            //choosing a host
        cy.get('#tab_1-stm_host').select('Zakiev Vladislav (zakiev.vladislav@stylemix.net)')
            //clicking on calendar
        cy.get('.mx-input').click()
            //select date! You should choose date that you need here 
        cy.get('[title="03.03.2021"]' /*<< DATE*/ ).click()
            //typing duration - You should type the duration here
        cy.get('#tab_1-stm_duration').type('20' /*<< DURATION*/ )
            //meeting options
        cy.get('#tab_1-stm_join_before_host').click()
            //typing password
        cy.get('#tab_1-stm_password').type(pass /*<< PASSWORD*/ )


    })

}