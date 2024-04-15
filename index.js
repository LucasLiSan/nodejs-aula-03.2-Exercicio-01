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
    var clientes = [
        {nome: "Lucas Lima", cpf: "123.456.789-10", endereco: "Rua 1"}
    ];
    res.render("clientes", {
        clientes : clientes
    });
});

//Tela de pedidos
app.get("/carrinho", (req,res) => {
    var pedidos = [
        {numPedido: 1, valor: 2000}
    ];
    res.render("carrinho", {
        pedidos : pedidos
    });
});

//Tela de produtos
app.get("/produtos", (req,res) => {
    var produtos = [
        {nomeProd: "celular", preco: 2000, categoria: "smartphone"}
    ];
    res.render("produtos", {
        produtos : produtos
    });
});












app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado!")
    }
});