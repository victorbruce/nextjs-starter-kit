# NextJs Starter Kit

A NextJs starter kit template for my personal needs.

## Demo Link

This template is hosted on vercel at: [vb-nextjs-template](https://google.com)

## Table of Content

- [About The App](#about-the-app)
- [Tech Stack](#tech-stack)
- [Setting Up The Project](#setting-up-the-project)
- [Project Folder Structure](#project-folder-structure)

## About The App

A NextJs texmplate starter kit that comes with **theme switching**, **multi language swtiching**, **analytics**, **end-to-end testing** using Cypress, **linting and code formating**, and **continuous integration** using Github Actions already set up.

## Tech Stack

- React (NextJs)
- Typescript
- TailwindCss
- Framer Motion
- Cypress
- Github Actions

## Setting Up The Project

- Clone the project onto your development machine
- Cd into the project and install all the dependencies by running `yarn install`
- Run the command `yarn dev` to kick start the development server
- Run the command `yarn test` to run Cypress in headless mode or `yarn run e2e` to run cypress in a browser

## Project Folder Structure

- 📂 .github: holds all the yaml files for your github actions
- 📂 .husky: contains post and pre commit scripts to ensure linting and formatting rules are adhered to before commiting your code
- cypress: folder that contains all your e2e tests written in Cypress
- 📂 public: keep all your images, svgs, fonts, etc. here
- 📂 src: this is where all your main code for your app resides
  - 📂 components: contains a list of shared components used across the app.
  - 📂 context: contains a list of shared context used across the app.
  - 📂 data: a folder that is great for storing any mock data like json data or constant variables that don't change, etc.
  - 📂 hooks: keep any hooks file shared across the app you can think of here.
  - 📂 lang: holds a list of different languages for internationalisation purposes(switching between different languages).
  - 📂 layouts: specifically for components that deals with laying things out such as side bars, nav bars, etc.
  - 📂 lib: abstract 3rd party libraries that will be used across many places in your code. Eg. axios, etc.
  - 📂 pages: holds files to individual pages users can route to.
  - 📂 services: place all your services for interacting with APIs here.
  - 📂 styles: keep your stylesheets here
  - 📂 utils: keep resuable functions for performing a single task here(pure functions)
