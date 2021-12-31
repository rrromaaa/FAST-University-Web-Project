const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({ //USER KI JO JO CHEZEN DB MA SAVE HON GI
    //YE ALAG SE MODELS MA HONA CHAHIYEY THA BUT YAHAN KAAM KR RAHA HA TO ILL KEEP IT HERE
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

  
const User = mongoose.model('User', UserSchema);
module.exports = User;