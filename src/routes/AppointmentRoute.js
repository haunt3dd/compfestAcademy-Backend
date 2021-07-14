module.exports = (app) => {
    const appointmentController = require("../controllers/AppointmentController");
    const appointmentDetailController = require("../controllers/AppointmentDetailController");

    app.post("/appointment", appointmentController.createAppointment);
    app.get("/allAppointment", appointmentController.findAllAppointment);

    app.put("/appointment/update/status/:id", appointmentController.updateAppointmentStatus);
    app.put("/appointment/update/:id", appointmentController.updateAppointment);
    app.delete("/appointment/delete/:id", appointmentController.deleteAppointment);
    app.get("/appointment/find/:id", appointmentController.findAppointment);



    app.post("/addRegistrant", appointmentDetailController.addRegistrant);
    app.get("/myAppointment/:Registrant", appointmentDetailController.findMyAppointment);
    app.get("/appointment/:AppointmentID", appointmentDetailController.findAppointment);
    app.post("/appointment/detail/", appointmentDetailController.repeatAppointment);
    app.delete("/appointment/cancelAppointment", appointmentDetailController.cancelAppointment);
}