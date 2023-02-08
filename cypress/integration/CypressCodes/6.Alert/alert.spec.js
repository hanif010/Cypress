/// <reference types="cypress" />

describe('Verify the JS alerts', function () {

    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Handling click for Js alerts', function () {

        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', function (str) {
            expect(str).to.eql('I am a JS Alert')
            return true
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })


    it('Handling Click for JS Confirm and OK', function () {
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
            return true
        })

        cy.get('#result').should('have.text', 'You clicked: Ok')
    })


    it('Handling click for JS confirm and cancel', function () {
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })


    it('Handling JS prompt and click ok', function () {
        cy.window().then(function($win){
            cy.stub($win,'prompt').returns('I am learning JS')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text','You entered: I am learning JS')
    })


    it('Handling JS prompt and click cancel',function(){
        cy.window().then(function($win){
            cy.stub($win,'prompt').returns(false)
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text','You entered: false')
    })
})