module.exports = (app) => {
    const authController = require("../controllers/AuthController");

    app.post("/login", authController.createToken);
}