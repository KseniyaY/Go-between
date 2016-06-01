var express = require('express');
var router = express.Router();
var multer  = require('multer');
var User = require('../models/user').User;
var ObjectID = require('mongodb').ObjectID;
var HttpError = require('../error').HttpError;
var AuthError = require('../models/user').AuthError;

var upload = multer({ dest: 'public/images/users/' });


// Ксюша сюда вставляй свой рут

//router.get('/имя', function(req, res, next){
//  res.render('имя документа во views без .jade')
// })


router.get('/', function(req, res, next) {
  res.render('main_page.jade');
});

/*Get inner application page*/
router.get('/SPA_page', function(req, res, next) {
  res.render('SPA_page.jade');
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('frontpage', { title: 'Express' });
  console.log(req.session);
});

// Registration

router.get('/registration', function(req, res, next){
  res.render('registration')
});

router.post('/registration', function(req, res, next){
  var email = req.body.email;
  var firstName = req.body.firstName;
  var secondName = req.body.secondName;
  var password = req.body.password;

  User.register(email, firstName, secondName, password, function(user){

    req.session.user = user._id;
    res.send({});

  })
});

// Settings
router.get('/settings', function(req, res, next){
  res.render('settings');
});

router.post('/settings', function(req, res, next){

  var id = req.session.user;
  var email = req.body.email;
  var firstName = req.body.firstName;
  var secondName = req.body.secondName;
  var password = req.body.password;
  var birthday = req.body.birthday;
  var sex = req.body.sex;
  var sexualPreferences = req.body.sexualPreferences;
  var location = req.body.location;
  var education = req.body.education;
  var profession = req.body.profession;
  var interests = req.body.interests;
  var personalInfo = req.body.personalInfo;


  User.updateUser(id, email, firstName, secondName, password, birthday, sex, sexualPreferences, location, education, profession, interests, personalInfo, function(err, user){

    if (err) {
      if (err instanceof AuthError) {
        return next(new HttpError(403, err.message));
      } else {
        return next(err);
      }
    }

    req.session.user = user._id;
    console.log("This is " + req.session.user);
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
  req.session.destroy();
  console.log(req.user)
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

router.get('/user', function(req, res, next){
  res.render('user')
});

module.exports = router;
