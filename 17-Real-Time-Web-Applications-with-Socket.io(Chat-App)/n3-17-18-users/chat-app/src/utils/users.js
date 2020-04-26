const users = []

const addUser = ({
  id,
  username,
  room
}) => {
  // Clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate the data
  if (!username || !room) {
    return {
      error: 'Erro, verifique o nome e a sala!'
    }
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.username === username && user.room === room
  })

  // Validade username
  if (existingUser) {
    return {
      error: 'Nome em uso nesta sala!'
    }
  }

  // Store user
  const user = {
    id,
    username,
    room
  }
  users.push(user)
  return {
    user
  }
}

const removeUser = id => {
  const index = users.findIndex(user => user.id === id)

  if (index !== -1) {
    return users.splice(index, 1)[0] //remode do array pelo index e retorno o registro que foi removido
  }
}

const getUser = id => {
  return users.find(user => user.id === id)
}

const getUsersInRoom = room => {
  room = room.trim().toLowerCase()
  return users.filter(user => user.room === room)
}

module.exports = {
  addUser,
  removeUser,
  getUsersInRoom
}