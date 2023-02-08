/// <reference types="cypress" />

describe("Verify the Functionality API's",function(){

    let data
    let data2
    before(function(){
        cy.fixture('CreateUser').then((obj)=>{
            data = obj
        })

        cy.fixture('updateUser').then((obj)=>{
            data2 = obj
        })
    })

    it('Verify the Get list of user',function(){
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers:{
                Authorization: `Bearer c6df613f113a4558b4a901621f4808b4b24c2b747b4d6e6d5d5f40d26e736137`
            }
        }).then(function(res){
            expect(res.status).to.eql(200)
        })
    })


    it("Verify the create user api",function(){
        cy.log(data)
        data.email = `tenali.ramakrishnah${Math.random()*6}@15ce.com`

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: data,
            headers:{
                Authorization: `Bearer c6df613f113a4558b4a901621f4808b4b24c2b747b4d6e6d5d5f40d26e736137`
            }
        }).then(function(res){
            expect(res.status).to.eql(201)
        })
    })

    
    it("Verify the update user api",function(){
        data2.email = `tenali.ramakrishnak${Math.random()*6}@15ce.com`
        cy.request({
            method: "PUT",
            url:"https://gorest.co.in/public/v2/users/2989",
            body:data2,
            headers:{
                Authorization: `Bearer c6df613f113a4558b4a901621f4808b4b24c2b747b4d6e6d5d5f40d26e736137`
            }
        }).then(function(res){
            expect(res.status).to.eql(200)
        })
    })


    // it.skip('Verify the Delete user api',function(){
    //     cy.request({
    //         method:"DELETE",
    //         url:"https://gorest.co.in/public/v2/users/3098",
    //         headers:{
    //             Authorization:`Bearer c6df613f113a4558b4a901621f4808b4b24c2b747b4d6e6d5d5f40d26e736137`
    //         }
    //     }).then(function(res){
    //         //cy.log(res)
    //         expect(res.status).to.eql(204)
    //     })

    // })
})