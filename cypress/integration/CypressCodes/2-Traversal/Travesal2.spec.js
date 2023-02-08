/// <reference types="cypress" />

describe('Travers Methods in Cypress', function () {

    // .children()
    it('To get children of DOM elements, use the .children() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().should('have.length', 4)
    })


    // .first()
    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().first().should('have.text', 'Danger')
    })


    // .last()

    it('To get the last DOM element within elements, use the .last() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().last().should('have.text', 'Alert')
        .and('have.attr','type','button')
    })


    // .eq()
    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().eq(2).should('have.text','Info')
    })


    // .prev()
    it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.text','Tea')
    })


    // .next()
    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next().should('have.text','Espresso')
    })


    // .siblings()
    it('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').siblings().should('have.length',4)
    })


    // .nextAll()
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextAll().should('have.length',4)
    })


    // .prevAll()
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevAll().should('have.length',4)
    })


    // .prevUntil()
    it('To get DOM elements within elements until other element .prevUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#tea').should('have.length',2)
    })

    // nextUntil()
    it('To get DOM elements within elements until other element .nextUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })


    // .filter()
    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })


    // .not()
    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })


    // find()
    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('th').should('have.length',3)
        .eq(0).should('have.text','Firstname')
    })


    // .parent()
    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').parent().should('have.class','thumbnail')
    })


    // .closest()
    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').closest('div').should('have.class','thumbnail')
    })


    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').closest('div[class="container"]').should('have.class','container')
    })

    // parents()
    it('To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parents('div').should('have.class','container')
    })

})