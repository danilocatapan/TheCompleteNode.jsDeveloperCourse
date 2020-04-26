const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    console.log('auth', token)
    const decoded = jwt.verify(token, 'nodejs-secret')
    console.log('auth', decoded)
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token
    })

    console.log('auth', user)

    if (!user) {
      throw new Error()
    }

    req.user = user
    next()
  } catch (e) {
    res.status(401).send({
      error: 'Please authenticate.'
    })
  }
}

module.exports = auth