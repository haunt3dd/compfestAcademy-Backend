const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    doctorName: { type: String, required: true },
    Description: { type: String, required: true },
    Status: { type: String, required: true },
})

module.exports = mongoose.model("Appointment", appointmentSchema);