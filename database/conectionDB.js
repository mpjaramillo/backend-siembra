const mongoose = require('mongoose');

//const URI = "mongodb://admin:root@cluster0-5h1ng.mongodb.net:27017,cluster0-5h1ng.mongodb.net:27017,cluster0-5h1ng.mongodb.net:27017/registro?ssl=true&replicaSet=cluster0-5h1ng&authSource=admin";
const URI = "mongodb://admin:root@cluster0-shard-00-00-5h1ng.mongodb.net:27017,cluster0-shard-00-01-5h1ng.mongodb.net:27017,cluster0-shard-00-02-5h1ng.mongodb.net:27017/registro?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!');
};

module.exports = connectDB;
