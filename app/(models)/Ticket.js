import { Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = {
  title: String,
  desc: String,
  category: String,
  priority: Number,
  progress: Number,
  status: String,
  isActive: Boolean,
  time: String,
};

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
