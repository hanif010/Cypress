/// <reference types="cypress" />

describe('Verify the users APIs',function(){

    it("Retrive users page wise",function(){

        cy.request({
            method: "GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(res){
            expect(res.status).to.eq(200)
        })
    })

    it("Creat user",function(){

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body:{
                name: "morpheus",
                job: "leader"
            }
        }).then(function(res){
            expect(res.status).to.eq(201)
        })
    })

    it("Update users",function(){

        cy.request({
            method: "PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                name: "Hanif",
                job: "Tester"
            }
        }).then(function(res){
            expect(res.status).to.equal(200)
        })
    })

    it('Delet user',function(){

        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2"
        }).then(function(res){
            expect(res.status).to.equal(204)
        })
    })
})