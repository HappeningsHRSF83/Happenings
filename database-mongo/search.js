const mongoose = require('mongoose');
const db = require('./index.js');

const search = () => {
  db.find({});
};

module.exports = search;
