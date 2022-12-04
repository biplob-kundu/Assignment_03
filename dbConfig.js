const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.Database_Local);
console.log('Database is connected');
module.exports = {client};