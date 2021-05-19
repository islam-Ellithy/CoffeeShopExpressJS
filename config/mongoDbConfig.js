const mongoose = require('mongoose');
const {
    dbPassword,
    dbUsername
} = require('../config/appConfig');


const dbUrl = `mongodb+srv://${dbUsername}:${dbPassword}@freeworkcluster.sydrs.mongodb.net/test?retryWrites=true&w=majority`;


exports.module = mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, () => {
    console.log("Connected successfully to db");
});