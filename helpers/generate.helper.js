const randomString = require('randomstring')
const crypto = require('crypto-js')

const generateKey = (length) => {
  return randomString.generate(length)
}

const encryptKey = (string) => {
  return crypto.SHA256(string).toString()
}

module.exports = {
  generateKey,
  encryptKey
}