/// <reference types="cypress" />

describe('Verify the Table Functionality',()=>{

    it('Verify the sum of age in table',()=>{

        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function($el,index){
            if(index != 0){
                cy.log($el.children().last().text())
                sum = sum + Number($el.children().last().text())
            }
        }).then(function(){
            expect(sum).to.equal(159)
        })

       
    })


    it('Verify the Table Functionality',()=>{

        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tr').each(function($el,index){
            if(index != 0){
                cy.log($el.children().last().text())
                sum = sum + Number($el.children().last().text())
            }
        }).then(function(){
            expect(sum).to.equal(163)
        })

        
    })
})