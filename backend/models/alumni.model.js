import mongoose from "mongoose";    

const alumniSchema = new mongoose.Schema({
  alumniImg: {
    type: String
  },
  alumniname: {
    type: String,
    required: true
  },
  yog: {
    type: Number,
    required: true,
    validate : {
      validator : (value) => value <= new Date().getFullYear(),
      message : "Year of graduation cannot be in the future",
    }
  },
  city: {
    type: String
  },
  branch: {
    type: String,
    enum: ["CSE", "IT", "ECE", "EE", "ME", "CE", "AIML", "DS", "Other"],
    required: true
  },
  company: {
    type: String
  },
  bio: {
    type: String
  },
  skills: {
    type: [String]
  }
}, { timestamps: true });


const Alumni = mongoose.model("Alumni", alumniSchema);

export default Alumni;