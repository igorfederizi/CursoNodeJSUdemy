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
    var canal = req.query["canal"]
    res.send(canal);
})

//rota com parâmetro
app.get("/ola/:nome", function(req, res) {

    // req dados enviados pelo usuário
    // ressão dados que serão devolvido ao usuário
    res.send("OI");


})


// iniciando o servidor
app.listen(4000, function(error) {
    if(error){
        console.log('Ocorreu um erro!');
    } else {
        console.log("Servidor rodando!");
       }
})