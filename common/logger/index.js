const winston = require('winston');
const moment = require('moment');

module.exports = new winston.Logger({
    level: 'info',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            filename: moment().format('DD-MM-Y') + '.log'
        })
    ]
});
