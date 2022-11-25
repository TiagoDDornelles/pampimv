const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "admin",
    host: "pampa.cyzohgcaap3y.us-east-1.rds.amazonaws.com",
    password: "admin123",
    database: "pampa",
});

app.post('/register', (req, res) => {

    const usuario = req.body.usuario
    const senha = req.body.senha
    const email = req.body.email

    db.query("INSERT INTO Login (usuario, senha, email) VALUE (?,?,?)", [usuario, senha, email], (err, result) => {
        if (err) {
            res.send("deu errado!")
        } else
            res.send("deu certo!")

    });

});


app.post('/login', (req, res) => {

    const usuario = req.body.usuario
    const senha = req.body.senha

    db.query("SELECT * FROM Login where usuario = ? AND senha = ?", [usuario, senha], (err, result) => {
        console.log(result[0])
        if (result[0]) {

            res.send("funcionou");
        } else {
            res.send("400");
        }
    });
})

app.listen(3001, () => {
    console.log("Server funcionando");

});