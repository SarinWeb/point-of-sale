const express = require('express');
const { dbConnection } = require('./config/db');
const dotenv = require('dotenv');
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');

 // dotenv config
dotenv.config();
const app = express();

app.use('/api/category',categoryRouter);
app.use('/api/product',productRouter);

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