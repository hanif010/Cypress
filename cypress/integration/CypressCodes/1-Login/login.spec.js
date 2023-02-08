

describe('Verify the login functionality',function(){
    it('verify the login functionality with Valid Credentials',function(){
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type('standard_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[type="submit"]').click()
        cy.get('.app_logo').should('be.visible',)
        cy.get('.title').should('be.visible')
    })

    
    it.skip('Verify the login functionalty with invalid credentials',function(){
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type('standard_user23')
        cy.get('input[id="password"]').type('secret_sauce25')
        cy.get('input[type="submit"]').click()
        cy.get('h3[data-test="error"]').should('be.text','Epic sadface: Username and password do not match any user in this service')
    })
})