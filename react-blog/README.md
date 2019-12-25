# REACT BLOG
## Intro
### Setting up a React Project
1. create-react-app: npx create-react-app project-name --use-npm e.g. npx create-react-app react-blog
2. cd react-blog and npm start
3. Project structure: public/index.html - entry point of our app, public/manifest.json : Used with mobile phones
4. src/App.js: Root component of our blog, App.css and App.test.js are the CSS and test files for the root component

### Create the APP component
1. src/pages/HomePage.js, React.Fragment to wrap JSX expressions or <> and </>

### Setup Navigation
1. Install react-router for navigation: npm install --save react-router-dom
2. import { BrowserRouter as Router, Route } from 'react-router-dom';
3. <Router/> wraps entire app component that is dynamic. And exact to match the path exactly otherwise everything will be mapped to root