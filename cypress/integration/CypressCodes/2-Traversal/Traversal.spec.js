/// <reference types="cypress" />

describe('Traversal methods in cypress',function(){

    // children()
    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-buttons').children().should('have.length',5)
    })

    // frist()
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().first().should('have.text','Danger')
    })

    // Last()
    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().last().should('have.text','Alert').and('have.attr','type','button')
    })

    // eq()
    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().eq(2).should('have.text','Info').and('have.attr','type','button')
    })

    


})