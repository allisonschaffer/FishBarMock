# Message Board SPA

For this lesson we're going to build a single-page application (SPA) using [Firebase](firebase.google.com). The app will contain all four parts of CRUD and be ready to deploy live (if you really want to).

## Terminology

### Firebase

[Firebase](firebase.google.com) is a back-end as a service platform. In almost all web applications, there is a front-end and a back-end. The front-end has to be written using HTML, CSS, and Javascript, while the back-end can be written using a number of languages and technologies (such as Javascript and Node.js). Because we don't know how to write back-end code, we're going to utilize Firebase as our back-end. Firebase provides hosting, authentication, authorization, persistance, and analytics. In this exercise we will only be using the persistance features of Firebase (database storage).

### CRUD

CRUD is an acronym that stands for create-read-update-delete. CRUD is often used to refer to applications that process and store data for users. Message boards, inventory software, and todo lists are all examples of CRUD apps. The user is allowed to create, read, and modify data in any way they see fit.

### SPA

A single-page web application is a site that exists on a single HTML page. Instead of links redirecting to other pages, links trigger functionality that change the page. A single-page web application downloads all of the code it needs at the start, then maintains state afterwards. A single-page application should almost never have to be refreshed.

## Setting Up Firebase

First, we'll need to sign up for a Firebase account. Head over to the [Firebase website](firebase.google.com) to get started. You can login with your Google account (if you don't have one, you'll need one). Once you're signed up you'll want to navigate to your [developer console](https://console.firebase.google.com). Create a new project and give it any name you'd like. Once it's created, click on the project to go to the dashboard.

### Disabling Security

By default Firebase has security that requires you to authenticate to use it. We're going to disable that for the purposes of this demo. You can do this by going to the "Database" tab on the left side of the dashboard, then going to the "Rules" tab near the top. Once there, you should modify your rules to look like the ones in my screenshot below.

![rules](./images/rules.png)

When you're done modifying the rules be sure to hit the "Publish" button.

## The Starter Code

The starter code provided to you has all of the HTML and CSS written, as well as a bit of Javascript. Your job is to read the comments in the Javascript and use them as a guide to implement the required functionality. We will implement some of the requirements together in class.

### Adding Firebase

To get started, you'll need to add some code from Firebase that injects the data for your specific app. To do this, go to your project's main dashboard in Firebase (hit the house at the top-left to get back home). On that page you'll see a link that says "Add Firebase to your web app". Click that link to bring up a dialog with code in it.

![code](./images/code.png)

Click the "Copy" button and paste the copied code into your HTML file where I placed a `<!-- Firebase code here  -->` comment. This will initialize your application using your Firebase URL.

### HTTP Server

You'll likely want to server this page using a server and not just load the file from the file system. We installed the `http-server` NPM package in a previous class, so we're going to use that again. Just open up the terminal, navigate to your code directory, then run `http-server -p 3000`. Once you do that, you can open up [localhost:3000](localhost:3000) to view your app.

## The Requirements

The app must do the following when done:

- The app must display a list of all of the messages. When a message is added, deleted, or modified the list must update.
- You must be able to add a message using the form at the bottom of the page.
- You must be able to delete a message using the X button on the right side of the message cell
- You must be able to upvote and downvote a post using the thumbs icons on the right side of the message cell# FishBarMock
