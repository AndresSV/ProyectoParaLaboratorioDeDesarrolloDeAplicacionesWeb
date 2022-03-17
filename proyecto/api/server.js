var express = require('express');
var mysql = require('mysql');

var app = express();

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ReportMe'
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connection established.");
});

//Habilitando la aplicación para parsear json (POST request)
app.use(express.json())

//Creando un endpoint básico
app.get('/', (req, res)=>{
    let sql_query = "SELECT * FROM usuarios;";
    con.query(sql_query, function(err, result){
        if (err) throw err;
        for(let i=0; i<result.length; i++){
            console.log(result[i].name);
        }
        res.json(result);
    });
    //res.send("Hello world");
});

app.post('/add', (req, res)=>{
    data = req.body;
    console.log(data);

    let sql_query = "INSERT INTO usuarios VALUES(DEFAULT, ?,?,?);";
    con.query(sql_query, [data.name, data.lastname, data.phone], function(err, results){
        if (err) throw err;
        console.log(results.message);
    });


    res.send("User created!");
});

app.listen(5000);

console.log("App running at http://localhost:5000");