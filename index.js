// importando o express
const express = require("express");

// função que carrega o express
const app = express();


//criando rota
app.get("/", function(req, res) {
res.send("Bem vindo à rota!")
});

app.get("/blog", function(req, res) {
res.send("bem vindo ao blog")
});

app.get("/canal/youtube", function(req, res) {
    res.send("Bem vindo ao youtube");
})


// iniciando o servidor
app.listen(4000, function(error) {
    if(error){
        console.log('Ocorreu um erro!');
    } else {
        console.log("Servidor rodando!");
       }
})