require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5ea07fd37b50622584cc9bf4', {
  age: 10
}).then((user) => {
  console.log(user)
  return User.countDocuments({
    age: 0
  })
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})