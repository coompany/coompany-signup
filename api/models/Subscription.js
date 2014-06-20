/**
* Subscription.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  autoUpdatedAt: false,

  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 32
    },
    email: {
      type: 'email',
      required: true,
      unique: true,
      maxLength: 64
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.email;
      return obj;
    }
  }
};

