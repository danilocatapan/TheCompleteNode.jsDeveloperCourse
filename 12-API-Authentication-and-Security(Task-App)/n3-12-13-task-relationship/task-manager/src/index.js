const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
  .use(taskRouter)

app.listen(port, () => {
  console.log('Server is up on por ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('5ea1cb186e36361c383add0b')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('5ea1cb0d6e36361c383add09')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)

}

main()