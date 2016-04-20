var mongoose = require('./lib/mongoose');
var async = require('async');
//var User = require('./models/user').User;

async.series([
    open,
    dropDatabase,
    requireModels,
    createUsers
], function (err) {
    console.log(arguments);
    mongoose.disconnect();
    process.exit(err ? 255 : 0);
});

function open(callback) {
    mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function requireModels(callback){
    require('./models/user');

    async.each(Object.keys(mongoose.models), function(modelName, callback){
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
}

function createUsers(callback){
    var users = [
        {email: 'some@mail.com', password: '123'},
        {email: 'someOther@mail.com', password: '321'},
        {email: 'someRandom@mail.com', password: '124', firstName: 'Name', secondName: 'Name2', sex: 'M'}
    ];

    async.each(users, function(userData, callback){
        var user = new mongoose.models.User(userData);
        user.save(callback);
    }, callback);
}