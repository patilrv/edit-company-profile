
const mongoose = require('mongoose')

const companiesSupportInfoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyID: {
        type: String
    },
    companyPhoneNo: {
        type: String
    },
    CompanyEmail: {
        type: String
    },
    companyAddress1: {
        type: String
    },
    companyAddress2: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    zipCode:{
        type: String
    },
    contactLink: {
        type: String
    }

}, { timestamps: true })


module.exports = mongoose.model('SupportInfo', companiesSupportInfoSchema)