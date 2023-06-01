# MVC-Tech-Blog

Week-14 Challenge (Model-View-Controller)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-URL](#live-url)

- [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

- [Screenshots](#screenshots)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Credits](#credits)

- [Features](#features)

- [Usage-Information](#usage-information)

- [Suggested-Future-Development](#suggested-future-development)

- [Contribution-Guidelines](#contribution-guidelines)

- [Test-Instructions](#test-instructions)

- [License](#license)

- [Questions](#questions)

## Description

This full-stack application was developed so that users could come create and interact with content regarding the tech industry. The application gives users a space to store created content via the dashboard page, comment on other users posts, as well as edit and delete their own posts. When arriving to the homepage, users will be able to see all current posts without needing an account, however will be directed to login or create an account when trying to access the dashboard, or in trying to create or view specific posts. User authentication via session storage and cookies is utilized in the application and offers a secure profile through specific routing and page protection. Users passwords are hashed through the bcrypt dependency before being entered into the MySQL database giving additional safeguards to users.

This project implements a model-view-control (MVC) specific set up, uses the object-relational-mapping (ORM) dependency Sequelize to connect the front-end code (UI) to the database, and Express routing. This project also utilizes handlebars templating engine which allowed data to be passed from the database and appended to the front-end in a DRY and simplified way.

Challenges faced when creating this application were the use of the handlebars template engine. This was my first time using one, and it took quite a bit of tinkering to find the best way to give certain partials access to the data I wanted to pass to the page. I also still struggle a bit with routing, and middleware in regards to the syntax used. This was the first full-stack web application I have built, so there was definitely a few times where I felt overwhelmed with the amount of files I was needing to comb through, however I eventually did get the feel for how all the different parts connected resulting in the completed application!

## Live URL

***

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1cBZTOKL3T1VV4NQSmrrQKnCZvbiZaKwQ/view

## Screenshots

![Screenshot1-week-14-challenge](https://github.com/rmessett15/MVC-Tech-Blog/assets/120127903/d3b4e9c7-44ae-49e7-a2b8-9cf210875a6f)

![Screenshot2-week-14-challenge](https://github.com/rmessett15/MVC-Tech-Blog/assets/120127903/906aa42d-7628-4282-b39d-d5272f2953f5)

![Screenshot3-week-14-challenge](https://github.com/rmessett15/MVC-Tech-Blog/assets/120127903/64582c7b-acf0-411f-bdf7-36925d18ee34)

![Screenshot4-week-14-challenge](https://github.com/rmessett15/MVC-Tech-Blog/assets/120127903/a47f326c-1ca0-45f3-99f2-6ae1d42a77b8)

![Screenshot5-week-14-challenge](https://github.com/rmessett15/MVC-Tech-Blog/assets/120127903/9cb35897-0e31-47b2-9d58-dcdf3150cc19)

## Technologies Used

This application is powered by Node.js (v16.19.1), Express.js (v.14.18.2), JavaScript, MySQL, Sequelize (ORM), and Handlebars (template engine). It utilizes the node package manager (npm) dependencies sequelize (v6.31.1), mysql2 (v3.3.0), express (v4.18.2), dotenv (v16.0.3), nodemon (v2.0.22), bcrypt (v.5.1.0), bootstrap (v5.2.3), connect-session-sequelize(v.7.1.6), express-handlebars (v7.0.7), and express-session (v1.17.3). Jest (v.29.5.0) is installed for future unit testing. Also, the Insomnia application was utilized to test the functionality of routes within the program.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Installation

1. Clone the repo:
   git clone https://github.com/rmessett15/MVC-Tech-Blog.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install dependencies directly from the command line).

   Commands to install each dependency:

   - Command for sequelize will be npm i sequelize
   - Command for mysql2 will be npm i mysql2
   - Command for express will be npm i express@4.18.2
   - Command for dotenv will be npm i dotenv
   - Command for nodemon will be npm i nodemon
   - Command for bcrypt will be npm i bcrypt
   - Command for bootstrap will be npm i bootstrap
   - Command for connect-session-sequelize will be npm i connect-session-sequelize
   - Command for express-handlebars will be npm i express-handlebars
   - Command for express-session will be npm i express-session
   - Command for jest will be npm i jest

6. Next, you will need to make sure you have an added .env file within the root directory of your repository, within which you will pass your environmental variables specifying the database name, your MySQL username, and your MySQL password. This will need to be completed before running the application, and will allow the connection.js file to utilize your environmental variables keeping your sensitive information protected.

7. If you do not have a MySQL account, you will need to create one (see https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

8. Once all dependencies are installed, you will need to create the database. To do this you will need to navigate to the directory db directory containing the schema.sql file. Once there, you will need to open up a MySQL shell using the command mysql -u root -p, where you will then be prompted to enter you password. Once your password is entered you will be in the MySQL shell.

9. Once in the MySQL shell you will then run the command source schema.sql. This will create the database.

10. Once the database has been created, you will then need to seed the database (this will also create the model structure for the tables within the database). To do this, navigate to the root directory and run the command npm run seed. This needs to be done from the root directory because the .env file lives within the root.

11. Once the database has been seeded, you will then be able to run the command npm start from the root directory to spin up the server. With nodemon installed, you will also be able to utilize the command npm run watch to keep the server spun up between code edits.

12. From there, you can utilize applications such as Insomnia to test the functionality of the routes within the program and make edits to both the front-end and back-end of the code base.

## Credits

Much of this application code followed outline code within the week-14 mini project, as well as the code my team wrote while working on project-2. I also collaborated with a tutor (Joem Casusi), the class TAs (Mark Alfano & Jennifer Trevisoto), and the class instructor (Jonathan Dionne) to correct some of the final errors I was running into regarding the edit/delete functionality of blog posts, and session cookie set up.

## Features

Features of this application include the users ability to create an account, where their login info will be hashed and saved to a database and validated at a later login with session storage. Visitors of the site will be able to see the homepage or public feed without needing to create an account, however will be prompted to set up an account when trying to access specific blogs or when trying to create posts. Once an account has been created the site features access to the dashboard page which gives users space to store their own created content, interact with other users posts (i.e. leave comments), and edit and delete their own posts. 

## Usage Information

Usage of this application is very intuitive. Users will interact with the site completely through the frontend UI. They will see a public facing feed, and a login button where they will be prompted to either login or create an account. From there navigation of the entire application can be conducted, and users can contribute and start creating content instantly.

## Suggested Future Development

- Dark Mode Toggle
- Continued display and UI development
- Ability to like and up-vote posts
- Functionality allowing users to favorite specific content
- Addition of a friends feature
- Continued user authentication -> only allowing author of the post access to the edit and delete feature
- Including unit testing

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

NOTICE: Contributor Covenant is released under the Creative Commons Attribution 4.0 International Public License, which requires that attribution be included.

## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/rmessett15)

<a href="mailto:rmessett15@gmail.com">rmessett15@gmail.com</a>
