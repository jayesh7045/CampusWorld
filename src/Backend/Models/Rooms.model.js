import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const roomSchema = new mongoose.Schema({
  hostel_name: {
    required: true,
    type: String,
  },
  rent: {
    required: true,
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
  no_of_persons: {
    type: Number,
    required: true,
  },
  wifi_availability: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  washing_machine_availability: {
    type: String,
    required: true,
  },

  deposit_amount: {
    type : String, 
    required : true
  },
  image_urls: [{
    type : String, 
    required : true
  }],
  furnished: {
    type : Boolean, 
    required : true
  },
  desc : {
    type : String, 
    required : true
  }
}, Timestamp = true);

const sample = mongoose.model("samples", roomSchema);
