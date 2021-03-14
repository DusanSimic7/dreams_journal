const express = require('express');
const app = express();

const {mongoose} = require('./db/db')

const moment = require('moment');
const winston = require('winston');

const logger = winston.createLogger({
    'transports': [
        new winston.transports.Console()
    ],
});

const customLogger = (req, res, next) => {
    let logMessage = `${req.protocol}://${req.get('host')}${
        req.originalUrl
    }: ${moment().format()}`;

    logger.info(logMessage);
    next();
};

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(customLogger);

// Dreams API Routes
app.use('/api/dreams', require('./routes/api/dreams'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));