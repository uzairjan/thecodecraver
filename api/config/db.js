const mongoose = require('mongoose');


const db = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost/blog",{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = db;    