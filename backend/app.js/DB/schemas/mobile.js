var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mobiles',{useNewUrlParser:true});

const mobileSchema = new mongoose.Schema({
  unit: { type: String, trim: true },
  name: { type: String, minlength: 3, trim: true },
  description: { type: String, trim: true },
  label: { type: String, trim: true },
  type: { type: String, trim: true },
  asset: { type: String, trim: true },
  liability: { type: String, trim: true }
}, { versionKey: false, timestamps: true });

module.exports = mongoose.model('mobiles', assetSchema);