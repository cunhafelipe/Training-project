const express = require("express"); // importando o express
const server = express(); // instanciação da biblioteca
const userController = require("./controllers/controller");

server.set("view engine", "ejs");

server.get("/", userController.home);

server.listen(4001, () => console.log("Servidor executado na porta 4001"));
