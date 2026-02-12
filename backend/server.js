const express = require('express');
const { dbConnection } = require('./config/db');
const dotenv = require('dotenv');
const categoryRouter = require('./routes/category.route');

 // dotenv config
dotenv.config();
const app = express();

app.use('/api/category',categoryRouter);

app.get('/',(req, res) => {
    res.send("Home page")
})

// database connection
dbConnection();

const port = process.env.PORT;
app.listen(port, () => {
    console.log('server running...');
    console.log(`http://localhost:${port}`);
})