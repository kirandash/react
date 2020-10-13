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
5. **Array types**:
    * `let fourthValue: number[] = [2,3,56];`
    * `let fifthValue: Array<string> = ['kiran', 'hero'];`
6. `{typeof variablename}` is used to check the type of a variable.

### 02.03 Complex Types
1. **Tuple**: Similar to array but can have multiple types.
2. enum
3. any
4. void
    * In fn, when no return statements - return type should be void

### 02.03 Functional/Stateless Component Intro
1. A Fn component is a JS fn at it's core which returns JSX or HTML statemetns.
2. **Type**:
    * Fn arguments
    * return type

### 02.04 Functional/Stateless Component Syntax
1. `(prop: {message: string}): any => {}`
    * prop - message of type string
    * return type: any - default: any - so optional.

### 02.05 Class/Stateful Component Intro
1. Class is a syntax introduced in ES6 in JS. And also used in TS
2. Class allows us to create a blueprint of properties and methods that can be used and leveraged later.

### 02.06 Class/Stateful Component Syntax
1. `class ClassMessage extends React.Component <any>`

### 02.07 Interfaces
1. Interfaces are great to define the shape or model of our data and the types of properties in data.
2. used by compiler for - validation only. Not for programming.
3. interface is not a JS feature. Only available with typescript
4. syntax: `interface UserMessage {
    name: string,
    message: string
}`
5. `const Message = (props: UserMessage): any => {}`
