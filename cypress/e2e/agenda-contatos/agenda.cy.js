/// <reference types="cypress" />

describe("testes para agenda interativa", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app")
    })

    function adicionaContato(nome, email, tel) {
        cy.get('[type="text"]').type(nome)
        cy.get('[type="email"]').type(email)
        cy.get('[type="tel"]').type(tel)
        cy.get('.adicionar').click()
    }
    
    it("deve adicionar contato", () => {
        adicionaContato(
            "Ramon Sávio",
            "ramon@gmail.com",
            "83 92325373",
        )
        cy.get('.contato:last-child').should('contain', "Ramon Sávio")

        adicionaContato(
            "Júlia",
            "julia@gmail.com",
            "11 92325353",
        )
        cy.get('.contato:last-child').should('contain', "Júlia")
    })

    it("deve deletar contato", () => {
        cy.get('.contato').its('length').then((qtd) => {
            const quantidadeDeContatos = qtd
            cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
            cy.get('.contato').should('have.length', quantidadeDeContatos - 1)
        })  
    })

    it("deve editar contato", () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type("Novo nome")
        cy.get('input[type="email"]').clear().type("novoemail@gmail.com")
        cy.get('input[type="tel"]').clear().type("12 03293120")
        cy.get('.alterar').click()
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain', 'Novo nome')
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should('contain', "12 03293120")
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').should('contain', "novoemail@gmail.com")
    })
})