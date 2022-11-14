const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "moviles"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get/ventas', (req, res) => {
    const sqlSelect = "select * from ventas" 

        db.query(sqlSelect, (err, result) => {
            res.send(result)
        })
})

app.get('/api/get/vendedores', (req, res) => {
    const sqlSelect = "select * from vendedor" 

        db.query(sqlSelect, (err, result) => {
            res.send(result)
        })
})

app.post('/api/insert/vendedor', (req, res) => {

    const idVendedor = req.body.idVendedor
    const nombreVendedor = req.body.nombreVendedor
    const emailVendedor = req.body.emailVendedor
    
    const sqlInsert = "insert into vendedor (idVendedor, nombreVendedor, correoVendedor, totalComisiones) values (?, ?, ?, 0)" 
    
    db.query(sqlInsert, [idVendedor, nombreVendedor, emailVendedor], (err, result) => {
            console.log(result)
    })  
})

app.post('/api/insert/venta', (req, res) => {

    const idVenta = req.body.idVenta
    const zonaVenta = req.body.zonaVenta
    const fechaVenta = req.body.fechaVenta
    const valorVenta = req.body.valorVenta
    let valorComision = 0;

    if(zonaVenta == 1){
        valorComision = valorVenta * .02
    }else{
        valorComision = valorVenta * .03
    }
    
    const sqlInsert = "insert into ventas (idVendedor, zonaVenta, fechaVenta, valorVenta, valorComision) values (?, ?, ?, ?, ?)" 
    
    db.query(sqlInsert, [idVenta, zonaVenta, fechaVenta, valorVenta, valorComision], (err, result) => {
            console.log(result)
    })  
})

app.listen(3001, () => {
    console.log('Running on port 3001')
})

