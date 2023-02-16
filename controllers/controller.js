const { request } = require("express");
const express = require("express");

module.exports = {
  home: (_request, response) => {
    response.render("home");
  },
  login: (request, response) => {
    response.render("login");
  },
};
