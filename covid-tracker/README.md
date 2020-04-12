# COVID-19 Tracker
## 1. Intro and Setup
This is a web application using which we will be able to track covid-19 reports for any specific country and also monitor global stats. We will also be able to pin specific countries so that the results will always show at the top.

### 1.1 Create app with create-react-app
1. Create react app is a tool that helps us create a react app quickly so that we don't have to setup the project from scrathc. Run the command: `npx create-react-app covid-tracker`.

### 1.2 Understanding Project structure
1. The project created by create-react-app has 2 main folders
    - **public**: to hold publicly accessible resources of our app
    - **src**: will hold actual react code
2. **public folder - public/index.html**:
    - index html file is present inside public folder. This file is going to be sent to the client when react app loads.
    - **div with id root**: index.html file has a div with id `root` which is the target where our react app is going to load.
    - There is a **noscript** tag which will execute if JS is disabled for client browser. So if client's browser has JS disabled, client will get the message written in noscript tag.
3. **src folder**:
    - **index.js**: Code in this will help us insert our React App into index.html with `ReactDOM.render()`. ReactDOM is an extension of React that helps us with rendering react components on to DOM.
    - **index.css**: Holds global css for our app. All styles written here will be applied to all the components in our App.
    - **App.js**: Holds JS code for our root React component
    - **App.css**: Holds CSS code for our root React component
4. **package.json**:
    - Holds details of all the packages that are used so far.
    - Also holds the scripts for starting dev server, creating a build and testing our app.
5. Run the command `npm run start` to run the project on localhost:3000
6. Change app title to COVID-19 Tracker in index.html file.
