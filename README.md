# tulipe-personal-todolist

Yet an other TodoList but ... Built with [Sails.js](http://sailsjs.org) and [AngularJS](http://angularjs.org/) and ... 
it's pretty cool

![Screenshot](http://i.imgur.com/cF6LzPA.png)

With tulipe-personal-todolist you can manage your tasks and classify them into 3 categories :
+ Important
+ Project
+ Reminder

You can also add sub-task (only one depth for the moment)

Mobile devices are supported with minimal width screen: 370px.

## Requirements

Tulipe-personal-todolist is a nodejs application built with Sails.js (backend) and AngularJS (frontend).
Here are the versions of dependencies currently used:
+ nodejs v0.10.20 or higher
+ npm v1.3.11 or higher
+ sails v0.9.4
+ grunt: 0.4.1
+ ejs: 0.8.4 (sails dependencies currently not used)
+ optimist: 0.3.4

A Demo is available [here](https://tulipe-todo-list.herokuapp.com).

## Installation

**DEV - Installation Process**

+ Download archive from github [here](https://github.com/rdroro/tulipe-personal-todolist/archive/master.zip)
+ Unzip archive
+ Run npm install in unzipped folder to checkout dependencies
+ Start application by running : node app.js

In development mode, all data are saved on disk in file : .tmp/.disk.db

**If you want to test any modification, you can use [nodemon](https://npmjs.org/package/nodemon).
`nodemon` automatically restart the application when files change. To do this, start app by using:**
	
	nodemon app.js



Application is now available from [http://localhost:1337](http://localhost:1337)

## @Todo

+ Manage errors in the backend - model : Task (creation and deletion)
+ Do unit and ent-to-end test for angular
+ Display errors in UI
+ Do unit test for the sails backend
+ Implements Edit-In-Place
+ Improve angular controllers (one controller is maybe enough ...) 
+ Connect angular services with socket.io
+ Add ACL for the backend
+ Documentation about Sails.js and AngularJS communication
