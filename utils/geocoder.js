const NodeGeocoder = require('node-geocoder');
require("dotenv").config();

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEOCODER_APIKEY,
  formatter: null 
};
 
const geocoder = NodeGeocoder(options);
 
module.exports = geocoder;