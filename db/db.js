const  mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/dreams_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


module.exports = {mongoose}