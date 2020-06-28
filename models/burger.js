
var orm = require("../config/orm.js");

var burger = {
  selcetAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgerss", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;