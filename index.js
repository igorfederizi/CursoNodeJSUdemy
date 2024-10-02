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
});

// treinando rotas

// rota simples de GET
app.get("/", function(req, res) {
    res.send("Bem vindo ao meu site!");
})

//rota com parâmetros dinâmicos
app.get("/usuario/:nome", function(req, res) {

    var nome = req.params.nome;
    res.send("Olá "+ nome)
})

//rota com multiplos métodos HTTP
app.get("/produto", function(req, res) {
    res.send("lista de produtos");
});

app.post("/produto", function(req, res) {
    res.send("Produto criado");

});

//rota com query params
app.get("/buscar", function(req, res) {
    
    // acessando o query param nome
    var nome = req.query.nome;

if (nome) {
    res.send("Nome " + nome);    
} else {
    res.send("Nome não fornecido");
    }
});

// rota com middleware
const isAuthenticated = false;

function verificarAutenticacao(req, res, next) {
    if (isAuthenticated) {
        next(); // Usuário autenticado, prossiga para a rota
    } else {
        res.status(403).send("Acesso negado! Você precisa estar autenticado.");
    }
}

app.get('/admin', verificarAutenticacao, (req, res)=> {
    res.send("Acesso permitido!");
});




// iniciando o servidor
app.listen(4000, function(error) {
    if(error){
        console.log('Ocorreu um erro!');
    } else {
        console.log("Servidor rodando!");
       }
})