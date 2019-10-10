var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mobiles',{useNewUrlParser:true});


const image = new mongoose.Schema({
  img:String,
})

const mobileSchema = new mongoose.Schema({
  id: Number,
  Name: String,
  Brand: String,
  RAM: Number,
  Primary_Camera: String,
  Secondary_Camera: Number,
  ROM: Number,
  Battery: Number,
  Screen: Number,
  Display: String,
  Processor: Number,
  Warranty: Number,
  Price: Number,
  Cover: String,
  images: [image],
}, { versionKey: false, timestamps: true });

module.exports = mongoose.model('mobiles', mobileSchema);