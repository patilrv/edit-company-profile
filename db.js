const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/Figma-DB',
        {
            useNewUrlParser: true
        },
        (error) => {
            if (!error) {
                console.log('MongoDB Connection Succeeded.')
            }
            else {
                console.log('Error in DB connection : ' + error)
            }
        });

}