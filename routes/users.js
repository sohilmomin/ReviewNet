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
const Users = require('../models/userModel');
const authenticate = require('../routes/authenticate')
//var authenticate = require('../authenticate');
var UserRouter = express.Router();
UserRouter.use(bodyParser.json())

UserRouter.post('/signup', (req, res) => {
  const { name, email, password, pic, fullname } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please add all the  fields" })
  }
  else {
    Users.findOne({ $or: [{ email: email }, { name: name }] })
      .then((savedUser) => {
        if (savedUser) {
          return res.status(422).json({ error: "User with same name or email already exist" })
        }
        else {
          bcrypt.hash(password, 12)
            .then((hasedpassword => {
              const user = new Users({ name, email, password: hasedpassword, pic: pic, fullname: fullname })
              user.save()
                .then((user) => {
                  // tranporter.sendMail({
                  //     to: user.email,
                  //     from: "201701227@daiict.ac.in",
                  //     subject: "signup  Success",
                  //     html: "<h1>Welcome To InstaClone</h1>"
                  // })
                  res.json({ message: "Signed Up Successfully." })
                })
                .catch(err => {
                  console.log(err)
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

UserRouter.get("/userdata", authenticate.VerifyUser, (req, res, next) => {
  req.user.password = null
  const { authorization } = req.headers
  const token = authorization.replace("Bearer ", "")
  const { _id, name, email, fullname, pic } = req.user
  res.json({ token, user: { _id, name, email, fullname, pic } })
})

UserRouter.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please provide email or password" })
  }
  else {
    Users.findOne({ email: email })
      .then((saveduser) => {
        if (!saveduser) {
          return res.status(422).json({ error: "Invalid Email or password" })
        }
        else {
          bcrypt.compare(password, saveduser.password)
            .then(doMatch => {
              if (doMatch) {
                const token = jwt.sign({ _id: saveduser._id }, JWT_SECRET)
                const { _id, name, email, fullname, pic } = saveduser
                res.json({ token, user: { _id, name, email, fullname, pic } })
                //res.json({ message: "successfully signed in" })
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

// UserRouter.post("/resetpassword", (req, res) => {
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

// UserRouter.post('/newpassword', (req, res) => {
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


// UserRouter.route('/signup').post((req, res, next) => {
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

// UserRouter.route('/login').post(passport.authenticate('local'), (req, res, next) => {
//   var token = authenticate.getToken({ _id: req.user._id });
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json({ success: true, token: token, status: 'You are successfully logged in!' });
// })

// UserRouter.get('/logout', (req, res, next) => {
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

// UserRouter.route('/').get((req, res, next) => {
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

module.exports = UserRouter;
