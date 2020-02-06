# REACT Portal
A react project for Understanding APIs in React

## Tools needed
1. node, postman, create-react-app

## 01 React Project Structure
1. Module 1 Summary:
1.1. Intitialize project with create-react-app
1.2. Register an account with newsapi

### 01.01 Initialize a React project
1. create-react-app portal
2. npm start

### 01.02 Concepts
RESTful APIs
1. Use HTTP protocols to do transactions with backend
2. Use GET, POST, PUT, DELETE calls to the backend
3. Interact with endpoints created on backend

Asynchronous vs Synchronous Code
1. Sync: Seq code execution. Thus if code halts, next code won't execute. But in async, next code execution won't halt

### 01.03 Intro to API
https://newsapi.org/

## 02 Fetch method for APIs
1. Module 2 Summary:
1.1. Initial component for news

### 02.01 Create news component, Fetch data & update ur state

### 02.02 Finalize component with data
1. Style with https://materializecss.com/

### 02.03 Refactor component for reuse

## 03 Axios
1. Module 3 Summary:
1.1. Intro to Axios

### 03.01 Intro to Axios
https://github.com/axios/axios
Axios: 
1. Promise based HTTP library to make API calls
2. Simplified Syntax
3. Automatic transformation of JSON data (In normal Fetch calls, it's a 2 step process)
4. Also have access to manipulate data
5. Modify request or response, before/after the call has been made

Install:
1. `npm install --save axios`

### 03.02 Create SideNews

### 03.03 Axios Get and POST