export default function createWebinarWithJoinBeforeHost() {
    const pass = '12345' /*<< PASSWORD*/
    it('Visitin admin', function() {
            cy.visit('http://localhost/lms.loc/wp-admin')
        })
        // Geting in Eroom>>Meerings
    it('Get in webinars', function() {
            cy.get('#toplevel_page_stm_zoom > .wp-has-submenu > .wp-menu-name').click()
            cy.get('#toplevel_page_stm_zoom > .wp-submenu > :nth-child(3) > a').click()
        })
        //Adding new meeting
    it('Add webinar', function() {
        cy.get('.wrap > [href="http://localhost/lms.loc/wp-admin/post-new.php?post_type=stm-zoom-webinar"]').click()
    })
    it('Creation Meeting with join before host', function() {
        //typing meeting Title
        cy.get('#title').type('Test meeting (Join before host on)')
            //typing meeting description
        cy.get('#tab_1-stm_agenda').type('Description meeting. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ')
            //choosing a host
        cy.get('#tab_1-stm_host').select('Zakiev Vladislav (zakiev.vladislav@stylemix.net)')
            //clicking on calendar
        cy.get('.mx-input').click()
            //select date! You should choose date that you need here 
        cy.get('[title="24.03.2021"]' /*<< DATE*/ ).click()
            //selecting timezone
        cy.get('#tab_1-stm_timezone').select('Asia/Tashkent')
            //inputing time
        cy.get('#tab_1-stm_time').type('01:30' /*<< TIME*/ )
            //typing duration - You should type the duration here
        cy.get('#tab_1-stm_duration').type('20' /*<< DURATION*/ )
            //typing password
        cy.get('#tab_1-stm_password').type(pass /*<< PASSWORD*/ )
            //before host 'On'
        cy.get('#tab_1-stm_join_before_host').click()
            //publishing meeting
        cy.get('#publish').click()
    })
    it('Visiting created meeting', function() {
        //visiting meeting url
        cy.get('#sample-permalink > a').click()
            //joining with browser to the meeting
        cy.get('.join_in_menu').invoke('removeAttr', 'target').click()
            //cy.get('.outline').invoke('removeAttr', 'target').click()//join with app
        cy.wait(30000)
            //assertion of zoom
        cy.get('#wc-container-left > #wc-footer').should('exist')
    })
}