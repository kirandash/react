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

### 01.04 Creating Pages

### 01.05 Reacct-router links for navbar with Link
1. import { Link } from "react-router-dome":

### 01.06 URL parameters with react-router
1. <Route path="/article:name" component={ArticlePage} exact />
2. { match }, .find and .map to loop through results

### 01.07 Creating and Linking the articles List

### 01.08 Making Article List Modular

### 01.09 Creating a 404 page in React
1. Switch makes sure that NotFoundPage does not appear on other pages aswell. Only one route is shown at a time.