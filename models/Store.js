const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

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

StoreShema.pre('save', async function(next){
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type:'Point',
    coordinates : [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  }
  next();
})

module.exports = mongoose.model('Store', StoreShema);