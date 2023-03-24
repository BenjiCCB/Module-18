const { Schema, model } = require('mongoose');

const thoughtSchema = require('./Thought');
// const userSchema = require('./User');

// Schema to create Thought model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],

  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// virtual property that gets the amount of friends per user
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;
