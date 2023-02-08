/// <reference types="cypress" />

describe('Verify the ContactUs form',function(){
    before(function(){
        cy.log('I am executed First')
    })

    after(function(){
        cy.log('I am executed Last')
    })

    beforeEach(function(){
        cy.log('This is executed before each testcase')
    })

    afterEach(function(){
        cy.log('This executed after each test case')
    })

    it('test case one',function(){
        cy.log('Testcase one')
    })

    it('Tets case two',function(){
        cy.log('Testcase two')
    })

})