const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async(req, res) => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser : true,
      useCreateIndex : true,
      useFindAndModify : false,
      useUnifiedTopology : true
    });
    console.log('mongodb connected : '+conn.connection.host);
  }catch(err){
    console.log(err)
  }
}

module.exports = {connectDB}  