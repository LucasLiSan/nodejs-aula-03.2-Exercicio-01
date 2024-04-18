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
        {profilePic: "imgs/profilePic/BillGates.webp" , nome: "William Gates", cpf: "123.456.789-10", endereco: "Rua Seattle"},
        {profilePic: "imgs/profilePic/LinusTorvalds.webp" ,nome: "Linus Torvalds", cpf: "456.789.012-13", endereco: "Rua Helsinque"},
        {profilePic: "imgs/profilePic/MarkZuckerberg.webp" ,nome: "Mark Zuckerberg", cpf: "789.012.345-16", endereco: "Rua White Plains"},
        {profilePic: "imgs/profilePic/SergeyBrin.webp" ,nome: "Sergey Brin", cpf: "012.345.678-19", endereco: "Rua Moscou"},
        {profilePic: "imgs/profilePic/LawrencePage.webp" ,nome: "Lawrence Page", cpf: "345.678.901-22", endereco: "Rua Lansing"},
        {profilePic: "imgs/profilePic/JeffreyBezos.webp" ,nome: "Jeffrey Bezos", cpf: "678.901.234-25", endereco: "Rua Albuquerque"},
        {profilePic: "imgs/profilePic/GabeNewell.webp" ,nome: "Gabe Newell", cpf: "901.234.567-128", endereco: "Rua Colorado"}
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
        {imgProd: "imgs/placaDeVideosRTX4060.jpg", nomeProd: "Placa de Vídeo RTX 4060 VENTUS 2x Black OC MSI NVIDIA GeForce, 8GB GDDR6, DLSS, Ray Tracing", preco: 2149.99, categoria: "hardware"},
        {imgProd: "imgs/ProcessadorAMDRyzen5-4600G.jpg", nomeProd: "Processador AMD Ryzen 5 4600G, 3.7GHz (4.2GHz Max Turbo), Cache 11MB, AM4, Vídeo Integrado", preco: 599.99, categoria: "hardware"},
        {imgProd: "PlacaMãeAsusTUFGAMINGA520MPLUSII-AMD-AM4.jpg", nomeProd: "Placa Mãe Asus TUF GAMING A520M-PLUS II, AMD AM4, mATX, DDR4", preco: 569.99, categoria: "hardware"},
        {imgProd: "Microsoft365Personal.jpg", nomeProd: "Microsoft 365 Personal, 12 Meses - QQ2-01017 / QQ2-01386 - Mídia Física", preco: 139.99, categoria: "software"},
        {imgProd: "MicrosoftWindows11Pro64.webp", nomeProd: "Licença Microsoft Windows 11 Pro 64 Bits ESD", preco: 79.90, categoria: "software"},
        {imgProd: "AdobePhotoshop2023.jpg", nomeProd: "Adobe Photoshop 2023", preco: 229.00, categoria: "software"}
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