/// <reference types="cypress" />


describe("Verify the contactus form", () => {

    it.skip("Verify the Contactus Form with Hard code values", () => {

        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type('Hanif')
        cy.get('input[name="last_name"]').type('Jamadar')
        cy.get('input[name="email"]').type('hanifaj23@gamil.com')
        cy.get('textarea[name="message"]').type('I am learning Cypress')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible')
            .and('have.text', 'Thank You for your Message!')
    })


    // Object
    // let info = {
    //     firstname: "Hanif",
    //     lastname: "Jamadar",
    //     email: "hanifaj23@gmai.com",
    //     message: "I am Learning Cypress"
    // }

    let dataA;

    before(function () {
        cy.fixture('contactus').then((obj) => {
            dataA = obj
        })
    })

    it("Verify the Contactus Form With Object", function () {

        cy.log(dataA)
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('input[name="first_name"]').type(info.firstname)
        // cy.get('input[name="last_name"]').type(info.lastname)
        // cy.get('input[name="email"]').type(info.email)
        // cy.get('textarea[name="message"]').type(info.message)
        // cy.get('input[type="submit"]').click()
        // cy.get('h1').should('be.visible')
        //     .and('have.text', 'Thank You for your Message!')
    })

    


    it("Verify the Contctus form wit fixtures", () => {

        cy.log(dataA)
        // cy.fixture('contactus').then((obj) => {
        //     cy.log(obj)
        // })
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('input[name="first_name"]').type(obj.firstname)
        // cy.get('input[name="last_name"]').type(obj.lastname)
        // cy.get('input[name="email"]').type(obj.email)
        // cy.get('textarea[name="message"]').type(obj.message)
        // cy.get('input[type="submit"]').click()
        // cy.get('h1').should('be.visible')
        //     .and('have.text', 'Thank You for your Message!')
    })



})