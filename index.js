const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

//Tela inicial
app.get("/index", (req,res) => {
    res.render("index");
});

//Tela do usuario
app.get("/user", (req, res) => {
    res.render("user")
});


//Tela dos clientes
app.get("/clientes", (req,res) => {
    res.render("clientes");
});

//Tela de pedidos
app.get("/carrinho", (req,res) => {
    res.render("carrinho");
});

//Tela de produtos
app.get("/produtos", (req,res) => {
    res.render("produtos");
});












app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado!")
    }
});