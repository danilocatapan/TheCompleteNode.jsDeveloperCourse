require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5ea080536050e335586aeb67').then((task) => {
  console.log(task)
  return Task.countDocuments({
    completed: false
  })
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})