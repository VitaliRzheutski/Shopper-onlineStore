const Sequelize = require('sequelize');
const db = require('./database');
const User = db.define("user", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      address:{
        type:Sequelize.TEXT,
        allowNull:false
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          },
        },
      },
      imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: "https://fortmyersradon.com/wp-content/uploads/2019/12/dummy-user-img-1.png",
      },
})

module.exports = User