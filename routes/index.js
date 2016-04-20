var express = require('express');
var router = express.Router();
var User = require('../models/user').User;
var ObjectID = require('mongodb').ObjectID;
var HttpError = require('../error').HttpError;
var AuthError = require('../models/user').AuthError;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('frontpage', { title: 'Express' });
});

// Registration
router.get('/registration', function(req, res, next){
  res.render('registration')
});

router.post('/registration', function(req, res, next){

  var email = req.body.email;
  var firstName = req.body.firstName;
  var secondName = req.body.secondName;
  var birthday = req.body.birthday;
  var sex = req.body.sex;
  var sexualPreferences = req.body.sexualPreferences;
  var location = req.body.location;
  var education = req.body.education;
  var profession = req.body.profession;
  var interests = req.body.interests;
  var personalInfo = req.body.personalInfo;
  var password = req.body.password;

  User.register(email, password, firstName, secondName, birthday, sex, sexualPreferences, location, education, profession, interests, personalInfo, function(user){

    req.session.user = user._id;
    res.send({});

  });
});

// Get users db
router.get('/users', function(req, res, next){
  User.find({}, function(err, users){
    if(err) return next(err);
    res.json(users);
  })
});

router.get('/user/:id', function (req, res, next) {
  try {
    var id = new ObjectID(req.params.id);
  } catch (e) {
    return next(404);
  }

  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    if (!user) {
      next(404);
    }
    res.json(user);
  });
});

// Login

router.get('/logout', function(req, res, next){
  req.user = res.locals.user = null;
  res.send('done')
});

router.post('/', function (req, res, next) {

  var email = req.body.email;
  var password = req.body.password;


  User.authorize(email, password, function (err, user) {
    if (err) {
      if (err instanceof AuthError) {
        return next(new HttpError(403, err.message));
      } else {
        return next(err);
      }
    }

    req.session.user = user._id;
    res.send({});

  });
});

module.exports = router;
