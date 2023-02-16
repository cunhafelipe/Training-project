const express = require("express"); // importando o express
const server = express(); // instanciação da biblioteca
const userController = require("./controllers/controller");

server.set("view engine", "ejs");

server.get("/", userController.home);
server.get("/login", userController.login);
server.get("/register", userController.register);

server.listen(4001, () => console.log("Servidor executado na porta 4001"));
