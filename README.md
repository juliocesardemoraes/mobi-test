<h1 align="center"> MobiFipeChecker </h1> <br>

[![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/juliocesardemoraes/mobi-test) [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://mobi-test-green.vercel.app/)

<p align="center">
  <a href="https://mobi-test-green.vercel.app/">
    <img alt="MobiFipe" title="MobiFipe" src="http://i.imgur.com/plessGy.png" width="450">
  </a>
</p>

<p align="center">
  Fipe search app. It shows the average price of an specific vehicle. Built with nextjs
</p>


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Checklist](#technical-test-checklist)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [How to run it](#how-to-run-it)

## Introduction
Fipe search is your place to go regarding knowledge of how much an average car costs in brazil based on brand/model/year.

**Available for any web browser.**

<p align="center">
  <img src = "http://i.imgur.com/Fy5qgqi.png" width=350>
</p>

## Features

A few of the things you can do with MobiFipeChecker:

* Check average vehicle prices from cars,motorcycles or trucks.
* Check prices for different models and years of specific brands.
* Share the link with your friends so they can get the same result without searching.
* Prices are not hardcoded. So if the api updates the website will work as fine.
* Error handling for better user experience.

<p align="center">
  <h3>Common workflow</h3>
  <img src = "http://i.imgur.com/TtBny8E.png" width=700>
</p>

## Technical Test Checklist
- [X] A dica é seguir o layout e entregar um teste onde ela mostre os conhecimentos em Nextjs, Hooks, gerenciamento de estado (pode ser com context, redux, até mobx).
- [X] Arquitetura de pastas(Atomic design pattern)
- [X] Usar Typescript
- [X] Usar código legível
- [X] Validar o formulário
- [X] Para obter os dados, consulte esta API. http://deividfortuna.github.io/fipe/v2/
- [X] Para os componentes (Button e Select/Autocomplete), recomenda-se utilizar o framework Material-UI.
- [X] Para a estilização, utilizar alguma biblioteca CSS-in-JS, podendo ser o próprio Material-UI ou outra, como Styled-Components. A fonte deve ser a "Roboto".
- [X] Será avaliada a qualidade do código (semântica e legibilidade). *Criei o código tendo isto em mente*

### Requisitos obrigatórios
- [X] Next.js
- [X] Redux, MobX ou Context API
- [X] Deploy na Vercel

### Diferenciais
- [X] Typescript
- [X] Algum tipo de teste unitário. *Foi utilizado react-testing-library e jest*
- [X] Algum tipo de teste E2E. *Foi utilizado o cypress*


## Technologies
### Core
* Nextjs.
* Reactjs.
* Typescript.
  
## HTTP Client
* Axios.

### StateManager
* Redux.

### Styles
* MUI. Material UI. https://mui.com/material-ui/
* Tailwind. https://tailwindcss.com/
* Vanilla css. 

### Tests
* *CI/CD* implementation with cypress and react testing library/jest.
* E2E with cypress.
* Unit testing with React Testing Library/jest.
* Locally with husky. github pre-push testing logic.

### Code quality/style
* Eslint.
* Prettier.

## Deployment
https://mobi-test-green.vercel.app/

## How to run it?
1- Install the dependencies
```
npm install
```
2- Run the server
```
npm run dev
```
3-(Optional) Run the unit tests
```
npm run test
```
4-(Optional) Run the e2e tests
```
npm run cy
```
5-(Optional) Run the e2e tests only in the terminal
```
npm run cyt
```
