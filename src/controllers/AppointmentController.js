const Appointment = require("../models/AppointmentModel");
const jwt = require("jsonwebtoken");

exports.createAppointment = (req, res) => {
    const token = req.headers.authorization;


    if (!token) {
        return res.status(400).send({
            status: 400,
            message: "Token not Available",
        })
    }

    jwt.verify(token, process.env.API_KEY, function (err, decoded) {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: "Failed to authenticate token."
            });
        }
    });

    const appointment = new Appointment({
        doctorName: req.body.doctorName,
        Description: req.body.Description,
        Status: req.body.Status,
    })

    appointment.save((error, document) => {
        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Cant Register User",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Create Appointment with Doctor ${appointment.doctorName} Sucessfully`,
        });
    });
};

exports.findAllAppointment = (req, res) => {
    const token = req.headers.authorization;


    if (!token) {
        return res.status(400).send({
            status: 400,
            message: "Token not Available",
        })
    }

    jwt.verify(token, process.env.API_KEY, function (err, decoded) {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: "Failed to authenticate token."
            });
        }
    });



    Appointment.find((error, document) => {
        if (!document) {
            return res.status(500).send({
                status: 500,
                message: "Appointment Not Found",
            });
        }

        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Failed to find Appointment",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Appointment Found`,
            data: document,
        });
    })
}



exports.updateAppointment = (req, res) => {
    const token = req.headers.authorization;


    if (!token) {
        return res.status(400).send({
            status: 400,
            message: "Token not Available",
        })
    }

    jwt.verify(token, process.env.API_KEY, function (err, decoded) {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: "Failed to authenticate token."
            });
        }
    });

    let param = {
        _id: req.params.id
    }

    let body = {
        doctorName: req.body.doctorName,
        Description: req.body.Description,
        Status: req.body.Status,
    }

    Appointment.findByIdAndUpdate(param, body, (error, document) => {
        if (!document) {
            return res.status(500).send({
                status: 500,
                message: "Appointment Not Found",
            });
        }

        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Failed to find Appointment",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Appointment updated`,
            data: document,
        });
    })
}

exports.findAppointment = (req, res) => {
    const token = req.headers.authorization;


    if (!token) {
        return res.status(400).send({
            status: 400,
            message: "Token not Available",
        })
    }

    jwt.verify(token, process.env.API_KEY, function (err, decoded) {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: "Failed to authenticate token."
            });
        }
    });

    let params = {
        _id: req.params.id
    }


    Appointment.findOne(params, (error, document) => {
        if (!document) {
            return res.status(500).send({
                status: 500,
                message: "Appointment Not Found",
            });
        }

        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Failed to find Appointment",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Appointment Found`,
            data: document,
        });
    })
}

exports.updateAppointmentStatus = (req, res) => {
    const token = req.headers.authorization;


    if (!token) {
        return res.status(400).send({
            status: 400,
            message: "Token not Available",
        })
    }

    jwt.verify(token, process.env.API_KEY, function (err, decoded) {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: "Failed to authenticate token."
            });
        }
    });

    let param = {
        _id: req.params.id
    }

    let body = {
        Status: req.body.Status,
    }

    Appointment.findByIdAndUpdate(param, body, (error, document) => {
        if (!document) {
            return res.status(500).send({
                status: 500,
                message: "Appointment Not Found",
            });
        }

        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Failed to find Appointment",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Appointment updated`,
            data: document,
        });
    })
}

exports.deleteAppointment = (req, res) => {
    const token = req.headers.authorization;


    if (!token) {
        return res.status(400).send({
            status: 400,
            message: "Token not Available",
        })
    }

    jwt.verify(token, process.env.API_KEY, function (err, decoded) {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: "Failed to authenticate token."
            });
        }
    });


    let param = {
        _id: req.params.id
    }


    Appointment.findByIdAndDelete(param, (error, document) => {
        if (!document) {
            return res.status(500).send({
                status: 500,
                message: "Appointment Not Found",
            });
        }

        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Failed to find Appointment",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Appointment deleted`,
            data: document,
        });
    });
};