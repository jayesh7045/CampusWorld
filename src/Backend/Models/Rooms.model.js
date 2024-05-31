import mongoose from "mongoose";
const roomSchema = new mongoose.Schema({
  hostel_name: {
    required: true,
    type: String,
  },
  rent: {
    required: true,
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  no_of_person: {
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
 
 
}, {timestamps : true});

export const mycollections = mongoose.model("mycollections", roomSchema);
