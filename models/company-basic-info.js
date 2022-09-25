'use strict'
const mongoose = require('mongoose')

const companiesBasicInfoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyID: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true,
    },
    companyProfileImg: {
        type: Object
    },
    country: {
        type: String,
        required: true,
    },
    socialMediaHandler:{
        instagram: {
            type: String
        },
        ownWebsite: {
            type: String
        },
        fiver: {
            type: String
        },
        relevantWebsite: {
            type: String
        }
    }

}, { timestamps: true })


module.exports = mongoose.model('BasicInfo', companiesBasicInfoSchema)