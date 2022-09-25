
const express = require('express')
const CompanyContactInfo = require('../models/company-contact-info')

const router = express.Router()

exports.contactInfo = (req, res) => {
    CompanyContactInfo.findOneAndUpdate({ companyID: req.companyID ?? '12345' }, {
        $set: {
            personName: req.body.personName,
            CompanyEmail: req.body.CompanyEmail,
            PhoneNo: req.body.PhoneNo,
            preferredTime: req.body.preferredTime ?? ""
        }
    })
    .then(result => {
        return res.status(200).json({
            message: "record created"
        })

    })
    .catch(err => {
        return res.status(400).json({
            message: "bad request",
            error: err
        })
    })

}