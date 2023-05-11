// Import express
const express = require("express");
// Import routes files
const routes = require("./Develop/controllers");
// Import sequelize connection
const sequelize = require("./Develop/config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// Syncs the database so table can be created and seeded using sequelize
// Allows for server to listen for routes
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
