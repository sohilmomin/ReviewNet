var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport')
const bcrypt = require("bcryptjs")
const crypto = require("crypto")
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/keys')
const { SENDGRID_API, EMAIL } = require('../config/keys')
const sendGridTransport = require('nodemailer-sendgrid-transport')
const Companies = require('../models/companyModel');
const authenticate = require('../routes/authenticate')
//var authenticate = require('../authenticate');
var CompanyRouter = express.Router();
CompanyRouter.use(bodyParser.json())

CompanyRouter.post('/signup', (req, res) => {
    const { name, email, password, pic, fullname } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ error: "Please add all the  fields" })
    }
    else {
        Companies.findOne({ $or: [{ email: email }, { name: name }] })
            .then((savedCompany) => {
                if (savedCompany) {
                    return res.status(422).json({ error: "Company with same name or email already exist" })
                }
                else {
                    bcrypt.hash(password, 12)
                        .then((hasedpassword => {
                            const company = new Companies({ name, email, password: hasedpassword, pic: pic, fullname: fullname, isVerified: false })
                            company.save()
                                .then((company) => {
                                    res.json({ message: "Registration request sent Successfully, We will emal you after verifing your details. " })
                                })
                        }))
                }
            })
            .catch(err => {
                console.log("error to find such User")
                console.log(err)
            })
    }
})

CompanyRouter.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please provide email or password" })
    }
    else {
        Companies.findOne({ email: email })
            .then((savedCompany) => {
                if (!savedCompany) {
                    return res.status(422).json({ error: "Invalid Email or password" })
                }
                else {
                    bcrypt.compare(password, savedCompany.password)
                        .then(doMatch => {
                            if (doMatch) {
                                if (!savedCompany.isVerified) {
                                    res.json({ message: "You are not verified yet. Wait for our Email." })
                                }
                                else {
                                    const token = jwt.sign({ _id: savedCompany._id }, JWT_SECRET)
                                    const { _id, name, email, fullname, pic } = savedCompany
                                    res.json({ token, company: { _id, name, email, fullname, pic } })
                                    //res.json({ message: "successfully signed in" })
                                }
                            }
                            else {
                                return res.status(422).json({ error: "Invalid Email or password" })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
    }
})

CompanyRouter.get("/companydata", authenticate.verifyCompany, (req, res, next) => {
    req.company.password = null
    const { authorization } = req.headers
    const token = authorization.replace("Bearer ", "")
    const { _id, name, email, fullname, pic } = req.company
    res.json({ token, company: { _id, name, email, fullname, pic } })
})

CompanyRouter.get('/not-verified', authenticate.VerifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Companies.find({ isVerified: false })
        .then((companies) => {
            res.setHeader('Content-Type', 'application/json')
            res.json(companies)
        }, (err) => next(err))
        .catch((err) => {
            res.status(422).json(err)
            next(err)
        })
})
CompanyRouter.put('/verify', authenticate.VerifyUser, authenticate.verifyAdmin, (req, res, next) => {
    console.log(req.body.id)
    Companies.findByIdAndUpdate(req.body.id, { isVerified: true }, { new: true })
        .then((company) => {
            res.json(company)
            console.log('successfully verified ' + company.isVerified)
        }, (err) => next(err))
        .catch((err) => {
            next(err)
        })
})
// CompanyRouter.post("/resetpassword", (req, res) => {
//   crypto.randomBytes(32, (err, Buffer) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       const token = Buffer.toString("hex")
//       User.findOne({ email: req.body.email })
//         .then(user => {
//           if (!user) {
//             return res.status(404).json({ error: "Email not exist" })
//           }
//           else {
//             user.resetToken = token,
//               user.expireToken = Date.now() + 3600000
//             user.save().then((result) => {
//               tranporter.sendMail({
//                 to: user.email,
//                 from: "201701227@daiict.ac.in",
//                 subject: "Password reset",
//                 html: `
//                               <p>You requested for password Reset</p>
//                               <h6>Click on this <a href="${EMAIL}/reset/${token}" >link</a> to reset password</h6>
//                           `
//               })
//               res.json({ message: "Check Your Email" })
//             })
//           }
//         })
//     }
//   })
// })

// CompanyRouter.post('/newpassword', (req, res) => {
//   const newPassword = req.body.password
//   const sentToken = req.body.token
//   User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
//     .then(user => {
//       if (!user) {
//         res.status(404).json({ error: "Try Again. Session Expired" })
//       }
//       else {
//         bcrypt.hash(newPassword, 12).then(hasedpassword => {
//           user.password = hasedpassword
//           user.resetToken = undefined
//           user.expireToken = undefined
//           user.save().then((savedUser) => {
//             res.json({ message: "password Updated." })
//           })
//         })
//       }
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })


// CompanyRouter.route('/signup').post((req, res, next) => {
//   const newUser = new Users({ username: req.body.username, company: req.body.company, firstname: req.body.firstname, lastname: req.body.lastname })
//   Users.register(newUser, req.body.password, (err, user) => {
//     if (err) {
//       res.statusCode = 500
//       res.setHeader('Content-Type', 'application/json')
//       res.json({ err: err })
//     }
//     else {
//       passport.authenticate('local')(req, res, () => {
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'application/json')
//         res.json({ status: 'Registration Successful', success: true })
//       })
//     }
//   })
// })

// CompanyRouter.route('/login').post(passport.authenticate('local'), (req, res, next) => {
//   var token = authenticate.getToken({ _id: req.user._id });
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json({ success: true, token: token, status: 'You are successfully logged in!' });
// })

// CompanyRouter.get('/logout', (req, res, next) => {
//   if (req.session) {
//     req.session.destroy()
//     res.clearCookie('session-id')
//     res.send('Successfully logged Out')
//     res.redirect('/')
//   }
//   else {
//     const err = new Error("You are not loggedIn")
//     err.status = 403
//     return next(err)
//   }
// })

// CompanyRouter.route('/').get((req, res, next) => {
//   console.log('Get from users')
//   Users.find()
//     .then(users => {
//       res.send(users)
//       console.log(users)
//     })
//     .catch(err => next(err))
// })
//   .post((req, res, next) => {
//     console.log('posted user')
//     Users.create(req.body)
//       .then(user => {
//         res.send(user)
//         console.log('User Added')
//       })
//       .catch(err => next(err))
//   })

module.exports = CompanyRouter;
