// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {
  MongoClient,
  ObjectID
} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error, client) => {
  if (error) {
    return console.error('Unable to connect to database')
  }

  const db = client.db(databaseName)

  db.collection('users').insertOne({
    _id: id,
    name: 'Palmeiras',
    age: 51
  }, (error, result) => {
    if (error) {
      return console.error('Unable to insert user')
    }

    console.log(result.ops)
  })

  // db.collection('users').insertMany([{
  //     name: 'Angelina',
  //     age: 10
  //   },
  //   {
  //     name: 'Luigi',
  //     age: 0.8
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.error('Unable to insert documents!')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('task').insertMany([{
  //     description: 'Clean the house',
  //     completed: true
  //   },
  //   {
  //     description: 'Renew inspection',
  //     completed: false
  //   },
  //   {
  //     description: 'Pot plants',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.error('Unable to insert tasks!')
  //   }

  //   console.log(result.ops)
  // })
})