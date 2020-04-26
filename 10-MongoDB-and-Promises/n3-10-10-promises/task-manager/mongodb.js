const {
  MongoClient,
  ObjectID
} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error, client) => {
  if (error) {
    return console.error('Unable to connect to database')
  }

  const db = client.db(databaseName)

  // db.collection('users').findOne({
  //   _id: new ObjectID('5ea03e6efff51f384c802607')
  // }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('users').find({
  //   name: 'Danilo'
  // }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').find({
  //   name: 'Danilo'
  // }).count((error, count) => {
  //   console.log(count)
  // })

  db.collection('tasks').findOne({
    _id: new ObjectID('5ea03f38860b840988521e0d')
  }, (error, task) => {
    console.log(task)
  })

  db.collection('tasks').find({
    completed: false
  }).toArray((error, tasks) => {
    console.log(tasks)
  })

})