
const mongoose = require('mongoose')

const companiesContactInfoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyID: {
        type: String,
        required: true
    },
    personName: {
        type: String,
        required: true
    },
    CompanyEmail: {
        type: String,
        required: true
    },
    PhoneNo: {
        type: Number,
        required: true
    },
    preferredTime: {
        type: String
    }
}, { timestamps: true })


module.exports = mongoose.model('ContactInfo', companiesContactInfoSchema)