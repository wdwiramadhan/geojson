const mongoose = require('mongoose');

const StoreShema = new mongoose.Schema({
  storeId: {
    type:String,
    required:[true, 'please add store id'],
    unique:true,
    trim:true,
    maxlength:[10, 'id must be less than 10 char']
  },
  address:{
    type:String,
    require:true
  },
  location:{
    type:{
      type:String,
      enum:['Point'],
    },
    coordinates:{
      type:[Number],
      index:'2dsphere', 
    },
    formattedAddress:String 
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
})

module.exports = mongoose.model('Store', StoreShema);