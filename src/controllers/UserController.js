const User = require('../models/UserModel');
const jwt = require("jsonwebtoken");

exports.createPatient = (req, res) => {
    const patient = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: 'patient'
    })

    patient.save((error, document) => {
        if (error) {
            return res.status(500).send({
                status: 500,
                message: 'Cant Register Patient',
                Exception: error,
            })
        }

        return res.status(200).send({
            status: 200,
            message: `Create patient with username ${patient.username} Successfully`,
        });
    });
}

exports.read = (req, res) => {
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
    User.find((error, document) => {
        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Failed to find user",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `users found`,
            data: document,
        });
    });
}

exports.checkRole = (req, res) => {
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
        _id: req.body.id,
    }

    User.findOne(body, (error, document) => {
        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Failed to find user",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `users found`,
            data: document,
        });
    });
}

exports.readAllPatient = (req, res) => {
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
        role: 'patient',
    }

    User.find(param, (error, document) => {
        if (!document) {
            return res.status(500).send({
                status: 500,
                message: "User Not Found",
            });
        }

        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Failed to find User",
                Exception: error,
            });
        }

        return res.status(200).send({
            status: 200,
            message: `user found`,
            data: document,
        });
    });
};