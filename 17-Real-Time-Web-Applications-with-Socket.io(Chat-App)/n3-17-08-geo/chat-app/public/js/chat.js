const socket = io()

socket.on('message', message => {
  console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', e => {
  e.preventDefault() //não atualizar toda pagina

  const message = e.target.elements.message.value

  socket.emit('sendMessage', message)
})

document.querySelector('#send-location').addEventListener('click', e => {
  if (!navigator.geolocation) {
    return alert('Seu browser não tem suporte ao Geolocation')
  }

  navigator.geolocation.getCurrentPosition(position => {
    socket.emit('sendLocation', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  })
})