#App rokketLabs

This is an app made exclusively for job application purposes only, no testing done for deployment.

##Table of contents
###Requirements
###Files
###Getting started
###Usage
###License


###Requirements
rokketLabs app need the following requirements to work:

For backend:
Node.js (-v 12.18.3 at least), npm (-v 6.14.6),

Dependencies: "express", "dotenv", "mongoose" and "body-parser".

For further information please consult the official documentation.

For frontend:
"react", "react-dom-router", "react-redux", "redux-thunk" and "axios".

For further information please consult the official documentation.

###Files
rokketLabs main directory structure has the following files:

/backend
/frontend (*)
.babelrc
.env
.gitmodules (*)
README

(*): please take into consideration the frontend folder is a submodule from another GitHub repository called "frontend". That means you'll need to clone both repositories locally to make it work.

Inside /backend
/models
/routes
config.js
server.js

From those files, server.js initializes the backend app.

Inside/frontend
/public
/src
README

/public, as the name suggests, keeps all the assets

Inside /src
/actions
/constants
/reducers
/screens
App.js
index.js
store.js

This directory structure follows a straight-forward MVC schema.

###Getting started

From Git Bash (or command line) clone rokketLabs repo locally. Then clone frontend repo inside frontend folder (it would be empty if you don't do it).
Arrange frontend folder in order to respect above structure (you'll need to move the cloned folder one level up).

Once you have the project arranged as shown above open your editor with Node.js installed.

First, install backend dependencies. Move your path into /backend and write "npm init" and "npm i dependency1 dependency2..." following the names stated above.

Second, check server is running properly. To do that you'll need to write "node server.js".

Remark: if you happen to run into an error related to ES6 please check this thread:https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module

Once server is running, open a new terminal and move your path into /frontend, then install the dependencies "npm i dependency1 dependency2..." following the names stated above.

After that, write "npm start", after a couple of seconds the app should open the browser and start.

###Usage

This is a single-view app where you can add and manage clothes inventory. At first you'll see an empty table with the columns indicating each expected value and a "Create product" button at the upper-right corner. Press it and a form will appear. Please fill up each blank line as the following example suggests:

Name: string
Price: 10
Image: /asset_1.jpg
Brand: str
Category: str1
Count in stock: 1
Description: test

Then click create button. Inmediately after that you should be redirected to the home screen where you should see the product created in the first row.

Repeat this process as needed.

For edition and deletion purposes click action buttons. To update information the form, this time with the data filling the blanks, will appear. Change as you need. For deletion if you click the button, the product will disappear from the table.

###License

No license needed, this is for job application purposes only.


