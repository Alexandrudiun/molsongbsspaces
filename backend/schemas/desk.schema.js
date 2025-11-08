import mongoose from "mongoose";

// Define Desk Schema
const deskSchema = new mongoose.Schema({
  locationId: { type: String, required: true },
  bookings: [{
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    status: { type: String, enum: ['created', 'pending', 'accepted', 'cancelled'], required: true },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  }],
});

// Create model from connection
export const createDeskModel = (connection) => {
    return connection.model('Desk', deskSchema);
};

export default deskSchema;
