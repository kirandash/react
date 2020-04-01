# React AWS ToDo Application

## 1. Hosting React App on AWS
### 1.1 Creating react app
1. `npx create-react-app react-aws-todo`
2. `cd react-aws-do`
3. `npm start` will launch app on localhost:3000

### 1.2 AWS S3 hosting with Amplify
1. Create AWS account with debit/credit card details. Not chargeable for free account with basic usage.
2. Install amplify cli: `sudo npm install -g @aws-amplify/cli` (Installs globally)
3. Configure amplify: `amplify configure` will open console.aws on browser. Make sure that you have signed in to AWS account before configuring this. Once signed in, return to the terminal. Hit enter, And choose the region. eg us-east-1, user name: default name. Hit enter. Will launch browser. - Programmatic access --> Next --> Next --> Create. 
4. User created
5. Return to terminal. Hit enter. Enter Access Key Id, secretaccesskey, profile name default and enter. Download csv file or copy the details (Important since it won't show up again)
6. User is successfully setup

### 1.3 Hosting a React App on AWS
1. `cd react-aws-todo` and init amplify: `amplify init`
2. enter details: project: react-aws-todo, environment: todo, editor: VSCode, app: js, framework: react, choose commands, use aws profile ---> Default one
3. Add hosting: `amplify hosting add`, choose: DEV (S3 Only with HTTP), choose default settings for the rest
4. Now our app is setup successfully on local. Publish it to aws server with `amplify publish`
5. Once published, we can check our app on aws console at s3 services: https://s3.console.aws.amazon.com/s3/home?region=us-east-2#. This will show 2 buckets. A deployment bucket for entire project and one hosting bucket from which our project is running. Go in hosting bucket to check the project structure.
6. App is hosted at s3 bucket: http://react-aws-todo-20200401173150-hostingbucket-todo.s3-website-us-east-1.amazonaws.com/

### 1.4 Edit, Test Locally and Deploy to AWS
1. Change code
2. Check locally: `npm run start`
3. Deploy to AWS: `amplify publish`
4. App changes can be seen at: http://react-aws-todo-20200401173150-hostingbucket-todo.s3-website-us-east-1.amazonaws.com/

## 2. User Authentication for React App
### 2.1 IAM and Cognito concepts
1. User ---> AWS services ---> Incognito Identity pool ---> Identity Provider (viz Google, FB, Twitter etc) OR User Pool(Create username and password without any provider).
2. In this project we are going to use the **user pool** for authentication

### 2.2 Adding user auth to an AWS project
1. `amplify add auth`, choose default configuration. ---> Choose username for sign in ---> Additional Settings ---> For sign up need Email Address ---> Email Verification Link with Redirect
2. `amplify status` to check if Auth has been added to amplify.
3. `amplify push` to push our changes to aws server. Note that we are not using `amplify publish`, since there is no change to our hosting code. But changes are to additional resource ie Auth.\
4. Once pushing is finished. Go to aws console, services ---> search for cognito ---> Go to Manage Identity Pools ---> Create Identity Pool, allow unauthenticated Identities ---> Create Identity ---> Go to Dashboard to check reports
5. Create a user pool: services ---> search for cognito ---> Go to View Identity Pools ---> Create User pool
6. Add amplify to code: `npm add aws-amplify aws-amplify-react`

## Extra Default Info
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
