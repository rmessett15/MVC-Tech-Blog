// // Import express
// const express = require("express");
// // Import routes files
// const routes = require("./Develop/controllers");
// // Import sequelize connection
// const sequelize = require("./Develop/config/connection");

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // app.use(routes);

// // Syncs the database so table can be created and seeded using sequelize
// // Allows for server to listen for routes
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}!`);
//   });
// });

const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 12000000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use("/jquery", express.static(path.join(__dirname, "/node_modules/jquery/dist")));
// app.use("/bootstrap", express.static(path.join(__dirname, "/node_modules/bootstrap/dist")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});


// Why does the login info sometimes not work after a while?
// Why does comment table have a column that says blog_post_id not blogPost_id?

// NEW QUESTIONS
// Change logout from a button to a a tag link
// Change date format????
// Why am I logged out? Confused why/when session ends????
// How to get user name to display who wrote the comment as oppose to user_id
// Need to figure out why description is null when I create a new post as a user from create new post button
// Need to make it so I can always see the new post button no matter if there are any user posts or not
// Need to add edit button and delete button functionality once I click on my own blog posts from the dashboard page for both pages -> (/dashboard & /blogPost/:id)
// Why does bootstrap not seem to always carry over styles (logout button and submit button on comments page)
// STYLE Page

// AFTER THURSDAY CLASS
// Style Page -> make it a tech blog
// Need to add edit button and delete button functionality once I click on my own blog posts from the dashboard page for both pages -> (/dashboard & /blogPost/:id)
// Need to make it so that when I idle on the site for too long when I click the delete button then I am redirected to the login page
