/// <reference types="cypress" />

describe('Validate the functionality for Checkboxea and Radiobuttons',()=>{

    beforeEach(()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('Tc-01 Verify the checkbox with click method',()=>{
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.wait(2000)
        cy.get('input[value="option-1"]').click().should('not.be.checked')
    })

    it('Tc-02 Validate checkbox with check,uncheck method',()=>{
        cy.get('input[value="option-3"]').check().should('be.checked')
        cy.wait(3000)
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
    })

    it('Tc-03 Validate the multiple selection with check,unchecked method',()=>{
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
        cy.wait(3000)
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4']).should('not.be.checked')
    })

    it.only('Tc-04 verify the Radiobutton check method',()=>{
        cy.get('#radio-buttons').find('input').each((el)=>{
            cy.wait(3000)

        cy.wrap(el).check().should('be.checked')
        })
    })
})