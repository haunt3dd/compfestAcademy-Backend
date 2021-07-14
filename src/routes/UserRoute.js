module.exports = (app) => {
    const userController = require("../controllers/UserController");

    app.post("/patient", userController.createPatient);
    app.get("/patient", userController.readAllPatient);
    app.post("/patient/role", userController.checkRole);
}