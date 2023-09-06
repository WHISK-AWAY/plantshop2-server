const Sequelize = require('sequelize');
const db = require('../database.js');

const Tag = db.define('tag', {
  tagName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
    unique: true,
  },
});

module.exports = Tag;
