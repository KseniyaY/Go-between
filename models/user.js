var crypto = require('crypto');
var async = require('async');
var util = require('util');

var mongoose = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    secondName: {
        type: String
    },
    birthday:{
        type: String
    },
    sex:{
        type: String
    },
    sexualPreferences: {
        type: String
    },
    location: {
        type: String
    },
    education: {
        type: String
    },
    profession:{
        type: String
    },
    interests:{
        type: String
    },
    personalInfo:{
        type: String
    },
    photo:{
        data: Buffer,
        contentType: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

schema.methods.encryptPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('password')
    .set(function (password) {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function () {
        return this._plainPassword;
    });

schema.methods.checkPassword = function (password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

schema.statics.authorize = function(email, password, callback){
    var User = this;

    async.waterfall([
        function (callback){
            User.findOne({email: email}, callback);
        },
        function (user, callback){
            if (user) {
                if (user.checkPassword(password)){
                    console.log(user);
                    callback(null, user);
                } else {
                    callback(new AuthError("Wrong password"));
                }
            } else {
                return callback(new AuthError("Register first"))
            }
        }
    ], callback);
};


schema.statics.register = function(email, firstName, secondName, password, callback){
    var User = this;

    var user = new User({
        email: email,
        firstName: firstName,
        secondName: secondName,
        password: password
    });
    console.log('Data to DB' + user);
    user.save(function(){
        console.log('User saved');
        callback(user);
    });
};

schema.statics.updateUser = function(id, email, firstName, secondName, password, birthday, sex, sexualPreferences, location, education, profession, interests, personalInfo, callback){
    var User = this;

    async.waterfall([
        function(callback){
            User.findOne({_id: id}, callback)
        },
        function(user, callback){
            if (user){
                user.email = email;
                user.firstName = firstName;
                user.secondName = secondName;
                user.password = password;
                user.birthday = birthday;
                user.sex = sex;
                user.sexualPreferences = sexualPreferences;
                user.location = location;
                user.education = education;
                user.profession = profession;
                user.interests = interests;
                user.personalInfo = personalInfo;
                user.save(function(err){
                    if(err) return callback(err);
                    callback(null, user)
                })
            }
        }
    ], callback);
};


exports.User = mongoose.model('User', schema);

function AuthError(message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, AuthError);

    this.message = message;
}

util.inherits(AuthError, Error);

AuthError.prototype.name = 'AuthError';

exports.AuthError = AuthError;