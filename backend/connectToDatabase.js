const mongoose  = require ('mongoose');

const connectToDatabase = async () => {

    mongoose.connect('mongodb://localhost:27017/My_Notes', ()=>{

    console.log('Connected to database');
    });
};

module.exports = connectToDatabase;