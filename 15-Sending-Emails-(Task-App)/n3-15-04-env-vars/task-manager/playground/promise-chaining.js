require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {
    age
  })
  const count = await User.countDocuments({
    age
  })
  return count
}

updateAgeAndCount('5ea07fd37b50622584cc9bf4', 3).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({
    completed: false
  })
  return count
}

deleteTaskAndCount('5ea08dcb6a10a519f83af3f2').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})