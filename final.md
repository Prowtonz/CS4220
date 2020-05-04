## Final DUE Tuesday 05/12 - 11:59PM - NO LATE SUBMISSIONS ACCEPTED

#### Using the API selected and the Custom Node Module from the Midterm.  Create a Node.js Server and Vue.js Application that allows users to interact with your API.


---
### Custom Module Requirements.

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
  - You should ensure any points lost from the Midterm due to an incorrect Custom Node Module are fixed. Not fixing this issues will result in points lost.
  - Your custom module should use superagent/request or similar modules to make the direct HTTP calls to your API.
  - You should be creating a config.json to hold the base portion of the url and API key (if your API requires one).

---
### Node Server Requirements

**package.json** <br/>
The module should have a package.json file that is properly filled out.
  - It should include but not limited to (name, version, author, description, dependencies, etc)

**server.js** <br/>
  - Responsible for serving the Vue.js frontend.
  - Responsible for creating routes to handle HTTP requests from the Vue.js frontend.

**api/routes.js** <br/>
  - Routes that your Vue.js frontend will make HTTP requests to.
  - These Routes will also utilize your Custom Node Module to get data from the API.

**Additional Guidelines**
Your Node.js server is responsible communicating with your Vue.js frontend via HTTP requests.
Your Node.js server is responsible utilizing your Custom Node Module to communicate with your selected API.


---
### Vue Requirements

**App &  Components**

**style.css**
  - The Vue.js frontend should be styled. Use a CSS framework (bootstrap, materilize) or create your own custom CSS styles.

**index.html**
  - HTML 5 file that the user interact with and display data to the user by using Vue.js app instance.

**app.js**
  - Vue.js application code.  Creates a new Vue instance and contains the logic for communicating with the Node.js server.
  - Makes use of all the options demo-ed in class: `el`, `data`, `computed` and `methods`.

**Guidelines**
  - Create an input field that the User will use to perform the search.
  - Indicate to the User the type of search that your application provides.
    -  For example if you have a Music API - indicate the search will work on song titles or artist names.
  - After the User performs a search, the Vue app should display the results list.
  - Allow the User to select a single result from this list.
  - Perform the necessary steps to fetch the detail by ID on the selected item.
    - The details should be formatted cleanly, so that it is easily readable.
    - DO NOT display JSON structures.
    - The details should include an image.  
    - IF your API does not have images returned in results - then use a tasteful default image of your choice related to your API. MUST use v-bind to display the image(s).

---

### WHAT TO UPLOAD TO CSNS

- ZIP File with 2 folders inside
  - FOLDER for the custom module which includes - ONLY index.js, package.json, config.json
  - FOLDER for the Web Application which contains 2 sub folders:
    - FOLDER for Node.js server 
    - FOLDER for the Vue.js application.
- 2 Min Video Presentation (mp4 only)

---

### GRADING

*** Video & Timing**
  - Create a video that is 2 minutes or less to present on a portion of code.
  - Present on a portion of code that you wrote inside app.js for the Vue.js portion.
  - Explain the code that is unique to your application. (do not spend time presenting on code covered in demos).
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
### Initial Search Page
![Initial Search Page](https://github.com/cydneymikel/CS4220/blob/master/final-images/initial-page.png)

### Search Results List
![Results from Search](https://github.com/cydneymikel/CS4220/blob/master/final-images/result-list.png)

### Fetch by ID that the User Selected
![Fetch By Id of Selected Item](https://github.com/cydneymikel/CS4220/blob/master/final-images/fetch-by-id.png)

### Extra Credit History Component
![Extra Credit](https://github.com/cydneymikel/CS4220/blob/master/final-images/history-extra-credit.png)
