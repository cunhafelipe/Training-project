module.exports = {
  home: (_request, response) => {
    response.render("home");
  },
  login: (request, response) => {
    response.render("login");
  },
  register: (request, responde) => {
    responde.render("register");
  },
};
