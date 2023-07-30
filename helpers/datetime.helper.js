const moment = require('moment-timezone')

const datetimeFormat = (datetime) => {
  const date = moment(datetime).tz('Asia/Bangkok').format('MMMM DD, YYYY')
  const time = moment(datetime).tz('Asia/Bangkok').format('hh:mm')
  return `${date} เมื่อ ${time}`
}

module.exports = {
  datetimeFormat
}