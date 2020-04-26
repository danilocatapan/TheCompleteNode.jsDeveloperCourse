const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
  console.log('Nova conexão WebSocket')

  socket.emit('message', 'Bem vindo!') //msg usuario principal
  socket.broadcast.emit('message', 'Um novo usuário entrou na sala!') //msg pra todos usuario, menos principal

  socket.on('sendMessage', message => {
    io.emit('message', message) //msg para todos usuarios
  })

  socket.on('disconnect', () => {
    io.emit('message', 'Um usuário saiu da sala!')
  })
})

server.listen(port, () => {
  console.log(`Servidor está subiu na porta ${port}!`)
})