# React TypeScript

## 01 Set Up and Basics

### 01.01 Initialize a Project
1. `npx create-react-app react-typescript`

### 01.02 Install TypeScript
1. Minimum react-scripts version: 2.1. we have: 3.4.3
2. `npm install --save typescript @types/node @types/react-dom @types/jest`
3. Change `.js` files into `.tsx`
    * App.tsx
    * index.tsx
4. Run: `npm start`
    - will create the tsconfig.json file automatically for us

## 02 React and TS
### 02.01 Intro to TS with React
1. ts packages in package.json for: node, react-dom and jest
2. tsconfig.json file for ts settings

### 02.02 Basic Types
1. `let firstValue: string = 'Manny';`
2. `// let secondValue: number = 'Manny';` Wrong
3. `let secondValue: number = 34;`
4. `let thirdValue: boolean = true;`
5. Array types:
    * `let fourthValue: number[] = [2,3,56];`
    * `let fifthValue: Array<string> = ['kiran', 'hero'];`
