const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const port = 3000
var statedevice ="Sleep"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.send('estate device!'+statedevice)
})

app.post('/statedevice',(req,res)=>{
    statedevice = req.body.build_status
    console.log("POST estate device " +statedevice)
    res.send('POST estate device!'+statedevice)
})
app.listen(port,()=>{
    console.log('Ejecutando app desde el puerto ${port}')
})
