const socket = io()

// server (emit) -> client (receive) --acknowledgement--> server
// client (emit) -> server (receive) --acknowledgement--> client

socket.on('message', message => {
  console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', e => {
  e.preventDefault() //não atualizar toda pagina

  const message = e.target.elements.message.value

  socket.emit('sendMessage', message, (error) => {
    if (error) {
      return console.log(error)
    }

    console.log('Mensagem entrege!')
  })
})

document.querySelector('#send-location').addEventListener('click', e => {
  if (!navigator.geolocation) {
    return alert('Seu browser não tem suporte ao Geolocation')
  }

  navigator.geolocation.getCurrentPosition(position => {
    socket.emit('sendLocation', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }, () => {
      console.log('Localização compartilhada!')
    })
  })
})