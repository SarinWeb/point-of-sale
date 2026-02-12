const {default: mongoose} = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required!!!'], 
        unique: true,
    },
    note: {  
        type: String,
        required: false,
    }

}, {timestamps: true});

const category = mongoose.model('category', categorySchema);
module.exports= category;