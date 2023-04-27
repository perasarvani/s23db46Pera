const mongoose = require("mongoose");

const penSchema = mongoose.Schema({
  pen1: { 
    type: String 
  },
  pen2: { 
    type: String 
  },
  pen_cost: {
    type: Number,
    min: [0, "Price must be min 0"],
    max: [200, "Price must be max 200"]
  },
});
module.exports = mongoose.model("pen", penSchema);