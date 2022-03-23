var express = require("express")
var mysql = require("mysql")

var app = express()

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ReportMe",
})

con.connect(function (err) {
  if (err) throw err
  console.log("Connection established.")
})

//Habilitando la aplicación para parsear json (POST request)
app.use(express.json())

// USER END POINT
// GET /users
app.get("/user/all", (req, res) => {
  let sql_query = "SELECT * FROM users;"
  con.query(sql_query, function (err, result) {
    if (err) throw err
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].name)
    }
    res.json(result)
  })
})
// POST /user/add
app.post("/user/add", (req, res) => {
  data = req.body
  console.log(data)

  let sql_query = "INSERT INTO users VALUES(?,?,?,?,?,?);"
  con.query(
    sql_query,
    [data.userid, data.name, data.lastname, data.phone, data.privilege, 0],
    function (err, results) {
      if (err) throw err
      console.log(results.message)
    }
  )
  res.send("User created!")
})

// REPORTS END POINT
// GET /report
// Get active reports
app.get("/report", (req, res) => {
  let sql_query = "SELECT * FROM `reports` WHERE status = 1; "
  con.query(sql_query, function (err, result) {
    if (err) throw err
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].title)
    }
    res.json(result)
  })
})
// GET /report/all
// Get all reports
app.get("/report/all", (req, res) => {
  let sql_query = "SELECT * FROM `reports`; "
  con.query(sql_query, function (err, result) {
    if (err) throw err
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].title)
    }
    res.json(result)
  })
})
// POST /report/add
app.post("/report/add", (req, res) => {
  data = req.body
  console.log(data)

  let sql_query = "INSERT INTO reports VALUES(?,?,?,?,?,?);"
  con.query(
    sql_query,
    [
      data.reportid,
      data.userid,
      data.date,
      data.title,
      data.description,
      data.status,
    ],
    function (err, results) {
      if (err) throw err
      console.log(results.message)
    }
  )
  res.send("Report created!")
})

// PORT
app.listen(5000)

console.log("App running at http://localhost:5000")
