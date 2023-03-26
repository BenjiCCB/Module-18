# ReadMe - Module 18 Challenge 📝

## Description 

This app is a social network API, designed to manage a database in various ways.  Through the API, one can create, read, update and delete users, which have thoughts and friends associated with them, as well as thoughts themselves, which have reactions associated with them via embedded documents. The app is built using Node.js, Express, MongoDB and Mongoose.  

View below for more info, as well as the github repo, a video preview, and a screenshot of the app in action.  

Github: [link here](https://github.com/BenjiCCB/challenge-18)

Video overview: [link here](https://www.youtube.com/watch?v=CU9BR6PX6kk)

![screenshot](./assets/appshot.png)



---

## Table of Contents 

* [Descripton](#description)

* [Installation Instructions](#installation-instructions)

* [Usage Information](#usage-information)

* [App License](#app-license)

* [Contribution Guidelines](#contribution-guidelines)

* [Testing Instructions](#testing-instructions)

* [Questions](#questions)



---

## Installation Instructions 

Installation of the app is quite straightforward... after downloading, simply run npm install from the directory, and then npm start to launch the server

---

## Usage Information 

Once your server is running, you can use a thrid-party app like Insomnia to query the database/API.  Functionality of the app includes:

* Create, read, update, and delete users
* Create, read, update, and delete thoughts
* Create and delete friend relationships
* Create and delete reactions

Notes:
* Creating and updating users can include linking thought and/or friend IDs (or empty arrays to clear)
* New thoughts can be linked to a user ID, which will pull the user's username and insert the thought into the user's thoughts array
* Deleting a thought will remove it from any user's thoughts array 

---

## App License 

This app is covered under the following license: None

---

## Contribution Guidelines 

This app was developed indepentently, though all suggestions are welcome

---

## Testing Instructions 

Feel free to try finding bugs, although hopefully there shouldn't be any!

---

## Questions 

For more information and questions, please contact me at <bensdecker@gmail.com> or by visiting my [github account](https://github.com/benjiCCB)