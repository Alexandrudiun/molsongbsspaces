import { Schema, Model } from "mongoose";

// Define User Schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  role: { type: String, enum: ['admin', 'manager', 'user'], default: 'user' },
  location: { type: String },
  bookings: [
    {
      placeId: { type: Schema.Types.ObjectId, ref: 'Place' },
      seatId: { type: Schema.Types.ObjectId, ref: 'Seat' },
      tableId: { type: Schema.Types.ObjectId, ref: 'Table' },
      timeframe: {
        start: { type: Date, required: true },
        end: { type: Date, required: true }
      }
    }
  ]
});
// Create User Model
const User = new Model('User', userSchema);

export default User;


