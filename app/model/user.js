'use strict'
// 用户相关模型

module.exports = app => {

  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    email: { type: String, required: true },
    passwd: { type: String, required: true, select: false },
    nickname: { type: String, required: true },
    avatar: { type: String, required: false, default: '' },
    __v: { type: Number, required: false, select: false },
  }, {
    timestamps: true,
  })

  return mongoose.model('User', UserSchema)
}
