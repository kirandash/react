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

### 2.3 Adding user auth to a React App
1. import assets
2. config auth: `Auth.configure(awsconfig);`
3. We will see sign up screen on app front page (can be customized)

### 2.4 Creating user through React App
1. Sign up on React FE (kirandash, testpassword)
2. Sign in with same details.
3. Check in cognito user pool if data is there (sign in ---> manage user pools ---> click users and groups ---> refresh to see if user exists)
4. use `{includeGreetings: true}` to show sign out link as well.

## 3. DynamoDB API with AppSync
### 3.1 AppSync Concepts and setup
1. Go to aws console ---> services ---> search for AWS AppSync
2. Create API ---> Create with wizard ---> start ---> Create
3. We can manage this API directly from react app. Since we are using AWS amplify. No need to even create this API here. This is just for demo and will be deleted later

### 3.2 DynamoDB Tables
1. Choose API ---> Data Sources ---> Click on Table name from Resources column
2. Can do CRUD operation on aws console. But we will use the API through amplify in React
3. In AppSync console, go to APIs, select API and delete
4. Deleting API doesnt delete table. So go to dynamodb table console, select db and delete

### 3.3 Creating a GraphQL API with Amplify
1. Go to Terminal - project folder
2. Run: `amplify add api` ---> GraphQL ---> API name: todo ---> Authorization: Amazon Cognito User pool ---> Additional Settings ---> Guided schema (Y) ---> Single object with fields ---> Edit (Y) have a look at model and leave as is
3. push: `amplify push`: will show list of data being pushed. Make sure todo API is in the list mentioned as Create operation
4. Generate code for new GraphQL API (Y) ---> All defaults

## 4. AppSync GraphQL Calls with React
### 4.1 Adding AppSync GraphQL to a React App
1. Add configuration in App.js file

### 4.2 Adding DynamoDB data through a React app
1. Add Get queries

### 4.3 CRUD DynamoDB data with a React app

### 4.4 Get username
1. `Auth.currentAuthenticatedUser({})`