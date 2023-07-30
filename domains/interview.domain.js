const { datetimeFormat } = require('../helpers/datetime.helper')

const interviewListFormat = async (interviews, users) => {
  return await interviews.map((item) => {
    const user = users.find((user) => (user.userId === item.createBy))
    return {
      interviewId: item._id,
      topic: item.topic,
      detail: item.detail,
      status: item.status,
      name: user.name,
      imageKey: user.imageKey || 'default/image.png',
      createDt: datetimeFormat(item.createDt),
    }
  })
}

const interviewFormat = async (interview, user) => {
  return {
    interviewId: interview._id,
    topic: interview.topic,
    detail: interview.detail,
    name: user.name,
    email: user.email,
    imageKey: user.imageKey || 'default/image.png',
    status: interview.status,
    createDt: datetimeFormat(interview.createDt),
  }
}

module.exports = {
  interviewListFormat,
  interviewFormat,
}