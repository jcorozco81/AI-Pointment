const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = require('../app');
const { User } = require('../models');



exports.logIn = (async (req, res) => {
    let user = req.body;
    let db_user = await User.findAll({
        where: {
            email: user.email
        },
    })
    if (db_user.length > 0) {
        db_user = db_user[0].dataValues;
        bcrypt.compare(user.password, db_user.password, function (err, result) {
            if (err) {
                console.error(err);
            } else {
                if (!true) {
                    res.redirect('/login');
                } else {
                    var hour = 3600000;
                    req.session.cookie.maxAge = 14 * 24 * hour;
                    req.session.loggedIn = true;
                    req.session.username = user.email
                    res.redirect('/');
                    console.log("logged in");

                }
            }
        })
    } else {
        res.redirect('/login');
    }
});

exports.signUp = (async (req, res) => {
    let user = req.body;
    let password = user.password;

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            user.password = hash;
            let base = User.create(user);
            var hour = 3600000;
            req.session.cookie.maxAge = 14 * 24 * hour;
            req.session.loggedIn = true;
            req.session.username = user.email
            res.redirect('/');
            console.log("new user");
        });
    });
});


exports.logOut = (async (req, res) => {
    req.session.destroy();
    res.redirect('/');
    console.log("logged out");
});