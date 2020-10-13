# React - Testing and Debugging

## 1. Setup
### 1.1 Jest Intro
1. By default create-react-app comes with Jest integrated. File: App.test.js
2. `npm run test`

### 1.2 Type checking with Flow
1. `npm i flow-bin --save-dev`
2. Add flow script to package.json.
3. `npm run flow init`: initialize file
    - should create `.flowconfig` file
4. Add commenet `// @flow` to the top of .js or .tsx file on which we want to run type check.
5. `npm run flow`
    - should show all errors related to type checking in code

### 1.3 Linting with ESLint
1. VS: Install ESLint by Dirk Baeumer
2. install globally: `npm i -g eslint`
3. initialize a new file automatically: (eslint airbnb settings)
    * `eslint --init`
    * how: to check syntax, find problems and enforce code style
    * modules: js modules
    * project: react
    * where? browser and node
    * style? use a popular style guide
    * style guide? airbnb
    * config? JSON format
    * install npm? yes
4. will create `.eslintrc.json` file.
5. Note eslint will not break our code but help us maintain coding standards.

## 2. Testing with Jest
### 2.1 Test Numbers with Matchers
1. comp/listings/Grid.js
2. `npm run test`

### 2.2 Test string with matchers
1. toContain, toMatch
