const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
pen1: String,
pen2: String,
pen_cost: Number
})
module.exports = mongoose.model("pen",penSchema)