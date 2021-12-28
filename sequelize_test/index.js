
// https://baeharam.netlify.app/posts/Node.js/Node.js-Sequelize-%EB%8B%A4%EB%A3%A8%EA%B8%B0
const models = require("./models");

models.User.create({
    user_name: "John"
  }).then(_ => console.log("Data is created!"));