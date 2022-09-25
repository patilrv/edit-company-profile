const express = require('express')
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
require('./db')();

const profile = require('./routes/edit-profile-routes')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload({
    createParentPath : true,
    abortOnLimit : true,
    responseOnLimit:"File size limit has been reached",
    limits: {
        fileSize: 300 * 300
    }
}));

app.use('/v1/edit-profile', profile)

app.use((req, res) => {
    
    return res.status(500).json({
        message: "server internal error "
    } )

})

module.exports =app