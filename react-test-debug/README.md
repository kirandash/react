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
