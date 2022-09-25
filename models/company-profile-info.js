
const mongoose = require('mongoose')

const companiesProfileInfoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyID: {
        type: String,
        required: true
    },
    describe: {
        type: String,
        required: true
    },
    inBusinessSince: {
        type: String,
        required: true
    },
    category: {
        type: Object,
        required: true
    },
    description: {
        type: String

    },
    website:{
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('ProfileInfo', companiesProfileInfoSchema)