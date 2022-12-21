/*const http = require('http')


const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
response.statusCode = 200
response.setHeader('Content-Type', 'text/plain')
response.end('Brolin Llamocca Quispe')
})

server.listen(port, hostname, () => {
console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
}) */




const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response)=>{ //Metodo get para conectarese al servidor
response.send('5+5=11')
})
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});

