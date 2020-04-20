const Store = require('../models/Store')

const index = async(req, res) => {
  try{
    const stores = await Store.find();
    return res.status(200).json({
      success:true,
      count:stores.length,
      data:stores
    })
  }catch(err){
    console.log(err)
  }
}
const store = async(req, res) => {
  try{
    const data = {
      storeId : req.body.storeId,
      address : req.body.address,
      location:{
        type:req.body.location.type,
        coordinates:req.body.location.coordinates,
        formattedAddress: req.body.location.formattedAddress
      }
    }
    const store = await Store.create(data);
    return res.status(201).json({
      success:true,
      data:store
    })
  }catch(err){
    console.log(err)
  }
}
const show = async(req, res) => {
  try{
    const stores = await Store.findOne({_id:req.params.id});
    return res.status(200).json({
      success:true,
      count:stores.length,
      data:stores
    })
  }catch(err){
    console.log(err)
  }
}
const update = async(req, res) => {
  try{
    const data = {
      storeId : req.body.storeId,
      address : req.body.address,
      location:{
        type:req.body.location.type,
        coordinates:req.body.location.coordinates,
        formattedAddress: req.body.location.formattedAddress
      }
    }
    const store = await Store.updateOne({_id:req.params.id},{$set:{data}});
    return res.status(200).json({
      success:true,
      count:store.length,
      data:store
    })
  }catch(err){
    console.log(err)
  }
}
const destroy = async(req, res) => {
  try{
    const store = await Store.deleteOne({_id:req.params.id});
    return res.status(200).json({
      success:true,
      count:stores.length,
      data:store
    })
  }catch(err){
    console.log(err)
  }
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}