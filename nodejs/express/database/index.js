const database = {};

database.user = require('.models/user.model');

function initializeUsers(){
    const NAMES = ["jimena", "alejandro", "luis", "marta"];
    NAMES.forEach(function(username){
        database.user.registterr(username, "1234")
    });
}

function initializeDB(){
    initializeUsers();
}

initializeDB();

module.exports = database;