const socket = io()

socket.on('countUpdated', (count) => {
  console.log('O contador foi atualizado!', count)
})

document.querySelector('#increment').addEventListener('click', () => {
  console.log('Clicado')
  socket.emit('increment')
})