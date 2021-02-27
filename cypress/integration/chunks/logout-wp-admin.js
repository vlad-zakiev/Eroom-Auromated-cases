export default function logoutWpAdmin() {
    it('WP Admin Logout', () => {
        //cy.typeWpAdminLogin()
        cy.WpAdminLogOut()
    })
}