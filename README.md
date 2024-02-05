<h1 align="center"> MobiFipeChecker </h1> <br>

[![Versão Atual](https://img.shields.io/badge/vers%C3%A3o-1.0.0-green.svg)](https://github.com/juliocesardemoraes/mobi-test) [![Demonstração ao Vivo](https://img.shields.io/badge/demo-online-green.svg)](https://mobi-test-green.vercel.app/)

<p align="center">
  <a href="https://mobi-test-green.vercel.app/">
    <img alt="MobiFipe" title="MobiFipe" src="http://i.imgur.com/plessGy.png" width="450">
  </a>
</p>

<p align="center">
  Aplicativo de pesquisa Fipe. Ele exibe o preço médio de um veículo específico. Desenvolvido com Next.js.
</p>

## Índice

- [Introdução](#introdução)
- [Recursos](#recursos)
- [Checklist Técnico](#checklist-técnico-do-teste)
- [Tecnologias](#tecnologias)
- [Deploy](#deploy)
- [Como executar](#como-executar)

## Introdução

A pesquisa Fipe é o seu local para obter informações sobre quanto custa em média um carro no Brasil com base na marca/modelo/ano.

**Disponível para qualquer navegador da web.**

<p align="center">
  <img src = "http://i.imgur.com/Fy5qgqi.png" width=350>
</p>

## Recursos

Alguns dos recursos do MobiFipeChecker:

- Verificar os preços médios de veículos, como carros, motocicletas ou caminhões.
- Verificar os preços de diferentes modelos e anos de marcas específicas.
- Compartilhar o link com seus amigos para que eles possam obter o mesmo resultado sem precisar pesquisar.
- Os preços não estão "hardcoded". Caso a api utilizada seja atualizada o website também será de maneira dinâmica.
- Tratamento de erros para uma melhor experiência do usuário.

<p align="center">
  <h3>Fluxo de funcionamento</h3>
  <img src = "http://i.imgur.com/TtBny8E.png" width=700>
</p>

## Checklist Técnico do Teste
**Não estava no desafio porém eu adicionei uma navbar para melhor navegamento da página**
- [x] Seguiu o layout e entregou um teste demonstrando conhecimento em Next.js, Hooks, e gerenciamento de estado (Context, Redux ou MobX).
- [x] Utilizou a arquitetura de pastas (padrão Atomic Design).
- [x] Usou TypeScript.
- [x] Escreveu código legível.
- [x] Validou o formulário.
- [x] Para obter os dados, consultou esta API: http://deividfortuna.github.io/fipe/v2/
- [x] Para os componentes (Button e Select/Autocomplete), utilizou o framework Material-UI.
- [x] Para a estilização, utilizou alguma biblioteca CSS-in-JS, podendo ser o próprio Material-UI ou outra, como Styled-Components. A fonte utilizada foi a "Roboto".
- [x] A qualidade do código (semântica e legibilidade) foi avaliada.

### Requisitos Obrigatórios
- [x] Next.js.
- [x] Redux, MobX ou Context API.
- [x] Implantação na Vercel.

### Diferenciais
- [x] TypeScript.
- [x] Implementou algum tipo de teste unitário (utilizando react-testing-library e jest).
- [x] Implementou algum tipo de teste E2E (utilizando Cypress).

## Tecnologias

> Principais

- Next.js.
- React.js.
- TypeScript.

> Cliente HTTP

- Axios.

> Gerenciador de Estado

- Redux.

> Estilos

- MUI. Material UI. https://mui.com/material-ui/
- Tailwind. https://tailwindcss.com/
- Vanilla CSS.

> Testes

- Implementação CI/CD com Cypress e React Testing Library/jest.
- Testes E2E com Cypress.
- Testes unitários com React Testing Library/jest.
- Execução local com Husky. Lógica de teste pré-push no GitHub.

> Qualidade/Estilo de Código

- Eslint.
- Prettier.

## Deploy

https://mobi-test-green.vercel.app/

## Como Executar?

1- Instale as dependências

```
npm install
```

2- Rodar o servidor

```
npm run dev
```

3-(Optional) Executar testes unitários

```
npm run test
```

4-(Optional) Executar testes end to end.

```
npm run cy
```

5-(Optional) Executar testes end to end somente no terminal

```
npm run cyt
```
