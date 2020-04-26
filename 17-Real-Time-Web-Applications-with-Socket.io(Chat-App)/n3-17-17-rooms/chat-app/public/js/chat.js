const socket = io()

// Elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

// Options
const {
  username,
  room
} = Qs.parse(location.search, {
  ignoreQueryPrefix: true // ponto interrogação é ignorado
})

socket.on('message', message => {
  console.log(message)
  const html = Mustache.render(messageTemplate, {
    message: message.text,
    createdAt: moment(message.createdAt).format('HH:mm:ss') //momentjs
  })
  $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('locationMessage', message => {
  console.log(message)
  const html = Mustache.render(locationMessageTemplate, {
    url: message.url,
    createdAt: moment(message.createdAt).format('HH:mm:ss')
  })
  $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener('submit', e => {
  e.preventDefault()

  $messageFormButton.setAttribute('disabled', 'disabled')

  const message = e.target.elements.message.value

  socket.emit('sendMessage', message, (error) => {

    $messageFormButton.removeAttribute('disabled', 'disabled')
    $messageFormInput.value = ''
    $messageFormInput.focus()

    if (error) {
      return console.log(error)
    }

    console.log('Mensagem entrege!')
  })
})

$sendLocationButton.addEventListener('click', e => {
  if (!navigator.geolocation) {
    return alert('Seu browser não tem suporte ao Geolocation')
  }

  $sendLocationButton.setAttribute('disabled', 'disabled')

  navigator.geolocation.getCurrentPosition(position => {
    socket.emit('sendLocation', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }, () => {
      $sendLocationButton.removeAttribute('disabled', 'disabled')
      console.log('Localização compartilhada!')
    })
  })
})

socket.emit('join', {
  username,
  room
})