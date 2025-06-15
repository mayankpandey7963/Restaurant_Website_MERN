import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  discount: {
    type: Number,
    default: 0,
  },
  imageSrc: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;
