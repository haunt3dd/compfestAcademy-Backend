const jwt = require('jsonwebtoken');
const API_KEY = process.env.API_KEY;
const User = require('../models/UserModel');


exports.createToken = (req, res) => {
    let body = {
        username: req.body.username,
        password: req.body.password,
    }

    User.findOne(body, (error, document) => {
        if (!document) {
            return res.status(500).send({
                status: 500,
                message: "Username or Password Wrong",
            });
        }

        if (error) {
            return res.status(500).send({
                status: 500,
                message: "Failed to find Login",
                Exception: error,
            });
        }

        let token = jwt.sign({ id: body.id }, API_KEY, {
            expiresIn: 86400, // 24jam
        })
        return res.status(200).send({
            status: 200,
            data: document,
            token: token,
        });
    });


}