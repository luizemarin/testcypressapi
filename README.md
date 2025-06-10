# Repositorio de teste automatizado api - Cypress

Este repositório contém testes de API desenvolvidos com Cypress e JavaScript, focados em validar funcionalidades de APIs. [Cypress](https://www.cypress.io/)

### Pré-requisitos
Antes de começar, certifique-se de ter o Node.js e o npm (ou Yarn) instalados em sua máquina.
- [Node.js](https://nodejs.org/) Recomenda-se usar a versão LTS
- Npm é instalado juntamente com o Node.js
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) pacote alternativo caso não queira utilizar o npm

## Configuração e Instalação

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:
1. Clone do repositório:
   ``` sh
   git clone https://github.com/luizemarin/testcypressapi.git
   cd testcypressapi
   ```

2. Instalar as dependências:
     ```sh
     npm install
     # ou
     yarn install
     ```

### Como executar os testes

- Você pode executar os testes de API em modo headless (sem interface gráfica) usando o seguinte comando:
  ```sh
  npm run test
  # ou
  yarn test
  ```
Obs.: Este comando executará todos os testes definidos no projeto no terminal. E está configurado no arquivo package.json

- Se quiser executar o teste de maneira mais interativa usando a interface do Cypress e visualizar os testes sendo executados, use:
  ```sh
  npm run test:open
  # ou
  yarn test:open
  ```

## Referências
- Documentação Oficial do Cypress: Para mais informações e guias detalhados sobre como usar o Cypress, visite a [Documentação do cypress](https://docs.cypress.io/app/get-started/why-cypress)
