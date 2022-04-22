const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js");


const categoriesController = require("./categories/categoriesController");
const articlesController = require("./articles/articlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

app.set('view engine','ejs');
app.use(express.static('public'));

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Database

connection
    .authenticate()
    .then(() => {
        console.log('Conexão efetuada com sucesso!');
    }).catch((error) =>{
        console.log(error);
    })


app.use("/", categoriesController);
app.use("/", articlesController);


app.get("/", (req, res) =>{
    res.render("index");
});


app.listen(8080, () => {
    console.log("servidor rodando");
});





