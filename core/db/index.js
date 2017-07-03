const mongoose = require('mongoose');
const config = require('../../common/config/env');

const Db = function (dbConfig) {
    this.connected = false;
    this.connection = null;
    this.config = dbConfig;
    this.connectionInProgress = false;
};

Db.prototype.connect = function () {
    this.connectionInProgress = true;
    if (!this.connected) {
        let uri = this.config.host + ':' + this.config.port + '/' + this.config.name;
        mongoose.connect(uri);
        this.connection = mongoose.connection;
        this.connection.on('error', function (err) {
            this.connectionInProgress = false;
            console.log('error', 'MongoDb error', err);
            process.exit(1);
        }.bind(this));
        this.connection.once('open', function () {
            console.info('Connected to Db %s', uri);
            this.connected = true;
            this.connectionInProgress = false;
        }.bind(this));
    }
};

let dbConnection = new Db(config.db);

module.exports = dbConnection;
