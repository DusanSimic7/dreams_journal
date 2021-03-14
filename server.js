const express = require('express');
const app = express();

const {mongoose} = require('./db/db')



// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Dreams API Routes
app.use('/api/dreams', require('./routes/api/dreams'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));