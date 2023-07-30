const { datetimeFormat } = require('../helpers/datetime.helper')

const commentListFormat = async (comments, users) => {
  return await comments.map((item) => {
    const user = users.find((user) => (user.userId === item.createBy))
    return {
      commentId: item._id,
      name: user.name,
      imageKey: user.imageKey || 'default/avatar.png',
      message: item.message,
      createDt: datetimeFormat(item.createDt),
    }
  })
}

module.exports = {
  commentListFormat
}