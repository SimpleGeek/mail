# Mail

## Overview

It's all in the title.  This is a simple mail client, built with electron.
At this point in time, it does effectively nothing.  My goal is to have it
interact with my IMAP server, and actually provide basic view-send-reply-forward-delete functionality.

## Development Tips/Reminders
I'm bad at JS, so here are my reminders:

External scripts have to be included within the body tags, after all other elements.

You can't use inline event handlers for elements like 'onclick="myFun"', because Chrome
doesn't allow this.  You'll have to give the element an ID, include the external script
that handles it, and add a click event listener, like this:
```
document.getElementById('myButton').addEventListener('click', clicked);
```

Helpful link on how to add new element in JS:
https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript

Ways to include HTML from within HTML - might or might not be helpful:
https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file

Read through this example by Electron, very helpful on how to do JS and HTML imports:
https://github.com/electron/electron-api-demos/blob/master/docs.md

It looks like the main-process section is mostly for app-level stuff, like menus, notifications, etc.


## Running

### Running from source

First, you'll want to create a directory to hold the project somewhere on your file
system, and navigate into said directory.  The rest of the work can be done from here.

To run this, just clone this code into your current directory using this line:
```
git clone https://github.com/SimpleGeek/mail.git
```

Now, install the project dependencies:
```
npm install
```

Lastly, just run the project:
```
npm start
```