# Modern React Project with React Ecosystem
## 1. Intro
### 1.1 Project Summary
1. Building more maintainable and robust React applications
2. Installing React and other tools
3. Adding Redux
4. Dealing with side effects
5. Libraries for dealing with side effects
6. Styling React apps more effectively with styled-components
7. Using React hooks
8. React fragments
9. Testing Redux, Redux-Thunk, Reselect, and styled-components

### 1.2 Why React ecosystem?
1. Problem with Basic/Vanilla React: Vanila React was designed to be efficient for modular, performant UI. So it was designed to mainly control the View part of MVC. However not designed to handle Model and Controller efficiently.
2. React is purposefully designed to allow developers to make their own data management decisions.
3. Most developers don't pay attention to data management and end up building huge tangled components. Thus hard to expand and maintain.
4. React ecosystem helps with data management and building a maintainable code base.

### 1.3 React Ecosystem summary
1. React Redux: Most popular Addon. Helps with state management using Flux architecture.
2. Redux Thunk: Side-effect management. (Network requests etc)
3. Reselect: A selector library for redux. Abstract away the state's architecture.
4. Styled Components: Better way of styling our components rather than using separate css files. Particularly when style of a component depends on state.

## 2. Project Setup
### 2.1 React Project from scratch
1. Make sure nodejs is installed. And then run the command : `npx create-react-app my-app`. create-react-app is a tool used for creating a react app easily. Note, with npx command we don't have to install create-reacta-app.
2. We will not use the tool and create the app from scratch.
3. Files needed to create React App from scratch:
    - index.html (The file that will be sent to client and where React will render our app)
    - Support for ES6
    - webpack (This will take care of building our app and also handle use of css modules to style our app. Also to serve our app during dev)
    - Root component (Base of Container Tree. So, basically a container that holds rest of our components)
    - react-hot-loader (will reload the app immediately)

### 2.2 The React entry point
1. create folder `react-ecosystem` ---> `cd react-ecosystem`
2. `npm init -y`: initialize your project with package.json file.
3. create folders:
    - **public**: to hold publicly accessible resources of our app
    - **src**: will hold actual react code
4. create **index.html** file inside public folder. This file is going to be sent to the client when react app loads.
5. Add code to index.html file with a div of id `root` which is the target where our react app is going to load. 
6. Add a noscript tag if JS is disabled for client browser.
7. Add bundle.js to index.html.