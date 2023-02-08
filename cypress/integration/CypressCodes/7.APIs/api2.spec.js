/// <reference types="cypress" />


describe("Verify the user per page", function () {

    it("Count the user per page", function () {

        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (res) {
                // console.log(res)
                expect(res.status).to.eq(200)
                // expect(res.duration).to.be.lessThan(50)
                expect(res.body.per_page).to.eq(res.body.data.length)
            })
    })

    it("VAlidate the keys in object", function () {

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (res) {
                // cy.log(res)
                res.body.data.forEach(element => {

                    expect(element).to.have.keys("id", 'email', 'first_name', 'last_name', 'avatar')
                })
            })
    })


    it("Creat new user", function () {

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(res){
            cy.log(res)
            expect(res.body).to.have.keys("name","job","id","createdAt")
            expect(res.status).to.eq(201)

            // expect(res.body.id).to.not.be.null
            // expect(res.body.name).to.not.be.null
            // expect(res.body.job).to.not.be.null
            // expect(res.body.createdAt).to.not.be.null

            for(let val of Object.values(res.body)){
                expect(val).not.to.be.null
            }
        })
    })
})