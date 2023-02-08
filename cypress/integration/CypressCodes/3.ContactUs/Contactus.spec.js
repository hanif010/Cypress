/// <reference types="cypress" />

describe('Verify the Contactus form',function(){
    this.beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('Verify the contactus form with valid details', function(){
        cy.get('input[name="first_name"]').type('dsa')
        cy.get('input[name="last_name"]').type('dsa')
        cy.get('input[name="email"]').type('dsa@gmail.com')
        cy.get('textarea[name="message"]').type('learning javascript')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible')
        .and('have.text','Thank You for your Message!')
    })

    it('Verify the contactus form with invalid details',function(){
        cy.get('input[name="first_name"]').type('dsa')
        cy.get('input[name="last_name"]').type('dsa')
        cy.get('input[name="email"]').type('dsa@galicom')
        cy.get('textarea[name="message"]').type('Learnong JavaScript')
        cy.get('input[type="submit"]').click()

        cy.get('body').should('contain','Error')

    })

    it('Verify the contactUs for reset functionality',function(){
        cy.get('input[name="first_name"]').type('dsa')
        cy.get('input[name="last_name"]').type('dsa')
        cy.get('input[name="email"]').type('dsa@galicom')
        cy.get('textarea[name="message"]').type('Learnong JavaScript')
        cy.get('input[type="reset"]').click()

        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')

    })

    it('Verify the Heading for Contactus page',function(){
        cy.get('h2[name="contactme"]').should('be.visible')
        .and('have.text','CONTACT US')
    })
})