## MIDTERM DUE 03/24 - 11:59PM - NO LATE SUBMISSIONS ACCEPTED

#### Using the API selected from HW Week 7 create a custom CLI and Custom Node Module to demonstrate your understanding of a Node.js CLI, APIs and Node Modules. Your CLI and Custom Node Module will allow a user to perform a search via the command line and then select a result from that search list to view detailed data.

---
### CLI Requirements
Create a command line interface similar to the examples in class.

**package.json** <br/>
The module should have a package.json file that is properly filled out.
  - It should include but not limited to (name, version, author, description, dependencies, etc)

**cli.js** <br/>
  - The CLI app should display a help menu by typing: `node cli.js help`
  - The CLI should include a search command `node cli.js search <item to be search>`

 **app.js** <br/>
  - The app should allow a user to select from a search result list and after selection fetch details.
  - The app should display the details formatted cleanly printed as strings (do not print objects).

**Additional Guidelines**
  - The CLI portion should not contain the API URL.
  - The CLI should being using your custom node module.


---
### Custom Module Requirements

**package.json** <br/>
The module should have a package.json file that is properly filled out.
  - It should include but not limited to (name, version, author, description, dependencies, etc)

**index.js** <br/>
The module should export a method for searching.
  - Given a search criteria it should return an an array that represent the result set. <br/>
    (EX: game title, city, character, actor/actress or artist)

The module should export a method for fetching data by id. <br/>
  - Given an id of some item it should return an object representing the data requested) <br/>
  - (EX: game title, city, character, actor/actress or artist)

**Additional Guidelines**
  - Your custom module should use superagent/request or similar modules to make the direct HTTP calls to your API.
  - You should be creating a config.json to hold the base portion of the url and API key (if your API requires one).

---

### WHAT TO UPLOAD TO CSNS

- ZIP File with 2 folders inside
  - FOLDER for the custom module which includes - ONLY index.js, package.json, config.json
  - FOLDER for the CLI which includes - ONLY cli.js, app.js, package.json
- 2 Min Video Presentation (mp4 only)

---

### GRADING

*** Video & Timing**
  - Create a video that is 2 minutes or less to present on a portion of code.
  - Present on the code in a clear manner where you explain what you've written
  - Run a demo of your application.
  - Going over time loses points.
  - Going WAY under time would also lost points.

**Code**
  - Code runs during video presentation without errors
  - Code runs during grading without errors
  - Code covers/includes exactly what is detailed in the above requirements
  - Code uses proper ES6 syntax including using let/const properly
  - Code is clean and formatted. Variables names make sense and are logical.
  - Nothing is hard coded unless absolutely needed.
  - There should be no use of setTimeout() or setInterval

---



