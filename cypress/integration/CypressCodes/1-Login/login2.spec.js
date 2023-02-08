


describe('verify the login functionality',function(){
    it('verify the login functionality with valid credentials',function(){
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.app_logo').should('be.visible')
        cy.get('.title').should('be.visible')
    })

    it('verify the login functionalty with invalid credentials',function(){
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user12')
        cy.get('#password').type('secret_sauce23')
        cy.get('#login-button').click()
        cy.get('h3[data-test="error"]').should('be.visible')

    })
})