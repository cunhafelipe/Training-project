const express = require("express"); // importando o express
const server = express(); // instanciação da biblioteca

server.set("view engne", "ejs");

server.listen(4001, () => console.log("Servidor executado na porta 4001"));
