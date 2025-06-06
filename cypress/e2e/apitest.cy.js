/// <reference types="cypress" />

let postUser;
const userNotFound = "0tssPY0cbmQhpEz1";

describe("Testes de API", () => {
  it("Buscar usuários cadastrados", () => {
    cy.request({
      method: "GET",
      url: "/usuarios",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("usuarios");
    });
  });

  it("Cadastrar usuário", () => {
    const user = {
      nome: "Adroaldo da Silva",
      email: "adroaldo@teste.com.br",
      password: "123",
      administrador: "true",
    };

    cy.request({
      method: "POST",
      url: "/usuarios",
      body: user,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("_id");
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");

      postUser = response.body._id;
    });
  });

  it("Busca de usuário por id", () => {
    cy.request({
      method: "GET",
      url: `/usuarios/${postUser}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).not.empty;
      expect(response.body).to.have.property("nome");
      expect(response.body).to.have.property("_id");
      expect(response.body.nome).to.equal("Adroaldo da Silva");
    });
  });

  it("Excluir usuário", () => {
    cy.request({
      method: "DELETE",
      url: `/usuarios/${postUser}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Registro excluído com sucesso");
    });
  });

  it("Busca de usuário inexistente", () => {
    cy.request({
      method: "GET",
      url: `/usuarios/${userNotFound}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Usuário não encontrado");
    });
  });
});
