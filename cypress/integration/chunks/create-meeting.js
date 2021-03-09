export default function createMeeting() {
    const pass = '12345' /*<< PASSWORD*/
    it('Visitin admin', function() {
            cy.visit('http://localhost/lms.loc/wp-admin')
        })
        // Geting in Eroom>>Meerings
    it('Get in meetings', function() {
            cy.get('#toplevel_page_stm_zoom > .wp-has-submenu > .wp-menu-name').click()
        })
        //Adding new meeting
    it('Add meeting', function() {
        cy.get('.wrap > [href="http://localhost/lms.loc/wp-admin/post-new.php?post_type=stm-zoom"]').click()
    })
    it('Creation Meeting with waiting room', function() {
        //typing meeting Title
        cy.get('#title').type('Test meeting (Waiting room on)')
            //typing meeting description
        cy.get('#tab_1-stm_agenda').type('Description meeting. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ')
            //choosing a host
        cy.get('#tab_1-stm_host').select('Zakiev Vladislav (zakiev.vladislav@stylemix.net)')
            //clicking on calendar
        cy.get('.mx-input').click()
            //select date! You should choose date that you need here 
        cy.get('[title="10.03.2021"]' /*<< DATE*/ ).click()
            //typing duration - You should type the duration here
        cy.get('#tab_1-stm_duration').type('20' /*<< DURATION*/ )
            //waiting room 'On'
        cy.get('#tab_1-stm_waiting_room').click()
            //typing password
        cy.get('#tab_1-stm_password').type(pass /*<< PASSWORD*/ )
            //publishing meeting
        cy.get('#publish').click()
            //visiting meeting url
        cy.get('#sample-permalink > a').click()
        cy.url().should('match', /stm-zoom/)
        cy.get('.countdown_title').should('contain', 'Meeting starts in')
        cy.get('.zoom_info > h2').should('contain', 'Test meeting (Waiting room on)')
        cy.get('.join_in_menu').should('contain', 'Join in browser')
        cy.get('.outline').should('contain', 'Join in zoom app')

        //joining to the meeting "Join in browser"
        cy.get('.join_in_menu').click()


        //Creating meeting with joing before host 

        //Join before host 'On'
        //cy.get('#tab_1-stm_join_before_host').click()


    })

}