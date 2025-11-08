import { Schema, Model } from "mongoose";

// Define Desk Schema
const deskSchema = new Schema({
  locationId: { type: String, required: true },
  bookings: [{
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    status: { type: String, enum: ['created', 'pending', 'accepted', 'cancelled'], required: true },
    attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  }],
});

// Create Desk Model
const Desk = new Model('Desk', deskSchema);

export default Desk;
