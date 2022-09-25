'use strict'
const mongoose = require('mongoose')

const companiesAccountInfoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyID: {
        type: String,
        required: true
    },
    GSTNo: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    accountNo: {
        type: Number,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    IFSCNo: {
        type: String,
        required: true
    },
    branchAddress: {
        type: String,
        required: true
    },
    UPINo:{
        type: String,
        required: true
    },
    incorporationCertificate: {
        type: Object
    },
    last3YearsBalanceSheet: {
        type: Object
    },
    IOSCertificate: {
        type: Object
    }

}, { timestamps: true })


module.exports = mongoose.model('AccountInfo', companiesAccountInfoSchema)