/// <reference types="cypress" />


describe("Creat update delete user", function () {

    it("creat update delete user", function () {
        cy.request({
            url: "https://gorest.co.in/public/v2/users",
            method: "POST",
            body: {
                id: 4705,
                name: "Tenali Ramakrishna",
                email: `${Math.random()}tenali.ramakrishnak@15ce.com`,
                gender: "male",
                status: "active"
            },
            headers: {
                Authorization: "Bearer c6df613f113a4558b4a901621f4808b4b24c2b747b4d6e6d5d5f40d26e736137"
            }
        }).then(function (res) {
            return res.body.id
        })
            .then(function (id) {
                cy.request({
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    method:"PUT",
                    body:{
                        name: "Allasani Peddana",
                        email: `${Math.random()}tenali.ramakrishnaa@15ce.com`,
                        status: "active"
                    },
                    headers:{
                        Authorization: "Bearer c6df613f113a4558b4a901621f4808b4b24c2b747b4d6e6d5d5f40d26e736137"
                    }
                }).then(function(res){
                    return res.body.id
                })
                .then(function(id){
                    cy.request({
                        method: "DELETE",
                        url: `https://gorest.co.in/public/v2/users/${id}`,
                        headers:{
                            Authorization:"Bearer c6df613f113a4558b4a901621f4808b4b24c2b747b4d6e6d5d5f40d26e736137"
                        }
                    }).then(function(res){
                        expect(res.status).to.eql(204)
                    })
                })
            })
    })
})