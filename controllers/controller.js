const express = require("express");

module.exports = {
  home: (_request, response) => {
    response.render("home");
  },
};
