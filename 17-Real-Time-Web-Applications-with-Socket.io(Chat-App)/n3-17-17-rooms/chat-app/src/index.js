const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const {
  generateMessage,
  generateLocationMessage
} = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
  console.log('Nova conexão WebSocket')

  socket.on('join', ({
    username,
    room
  }) => {
    socket.join(room)

    socket.emit('message', generateMessage('Bem vindo!'))
    socket.broadcast.to(room).emit('message', generateMessage(`${username} entrou na sala!`)) //.to(room) somente na sala
  })

  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter()

    if (filter.isProfane(message)) {
      return callback('Palavrões não são permitidos!')
    }

    io.emit('message', generateMessage(message))
    callback()
  })

  socket.on('sendLocation', (coords, callback) => {
    io.emit('locationMessage', generateLocationMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
    callback()
  })

  socket.on('disconnect', () => {
    io.emit('message', generateMessage('Um usuário saiu da sala!'))
  })
})

server.listen(port, () => {
  console.log(`Servidor está subiu na porta ${port}!`)
})