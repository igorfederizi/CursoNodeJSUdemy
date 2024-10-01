// importando o express
const express = require("express");

// função que carrega o express
const app = express();

// iniciando o servidor
app.listen(4000, function(error) {
    if(error){
        console.log('Ocorreu um erro!');
    } else {
        console.log("Servidor rodando!");
       }
})