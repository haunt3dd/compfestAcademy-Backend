const mongoose = require('mongoose');

const appointmentDetailSchema = mongoose.Schema({
    AppointmentID: { type: String, required: true },
    Registrant: { type: String, required: true },
})

module.exports = mongoose.model("AppointmentDetail", appointmentDetailSchema);