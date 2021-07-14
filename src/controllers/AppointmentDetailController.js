const AppointmentDetail = require("../models/AppointmentDetailModel");
const jwt = require("jsonwebtoken");

exports.addRegistrant = (req, res) => {
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

    const appointmentDetail = new AppointmentDetail({
        AppointmentID: req.body.AppointmentID,
        Registrant: req.body.Registrant,
    })

    appointmentDetail.save((error, document) => {
        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Cant Register Registrant",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `Add Registrant with Name ${appointmentDetail.Registrant} Sucessfully`,
        });
    });
};

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
        AppointmentID: req.params.AppointmentID
    }


    AppointmentDetail.find(params, (error, document) => {
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

exports.findMyAppointment = (req, res) => {
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
        Registrant: req.params.Registrant
    }


    AppointmentDetail.find(params, (error, document) => {
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

exports.repeatAppointment = (req, res) => {
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


    let body = {
        AppointmentID: req.body.AppointmentID,
        Registrant: req.body.Registrant
    }


    AppointmentDetail.findOne(body, (error, document) => {
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
            message: `You Already Registered For This Appointment`,
            data: true,
        });
    })
}

exports.cancelAppointment = (req, res) => {
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


    let body = {
        AppointmentID: req.body.AppointmentID,
        Registrant: req.body.Registrant
    }


    AppointmentDetail.deleteOne(body, (error, document) => {
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
            message: `Appointment Canceled`,
            data: document,
        });
    });
};