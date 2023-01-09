const express = require('express');
const app = express();
const path = require('path');
let port = 3030;

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/clientes',(req,res) => res.sendFile(path.join(__dirname,'views','clientes.html')))
app.get('/contacto',(req,res) => res.sendFile(path.join(__dirname,'views','contacto.html')))
app.get('/servicios',(req,res) => res.sendFile(path.join(__dirname,'views','servicios.html')))
app.get('/nosotros',(req,res) => res.sendFile(path.join(__dirname,'views','nosotros.html')))
app.get('/blog',(req,res) => res.sendFile(path.join(__dirname,'views','blog.html')))



app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))