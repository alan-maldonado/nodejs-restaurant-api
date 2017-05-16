import mongoose, { Schema } from 'mongoose';

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;
