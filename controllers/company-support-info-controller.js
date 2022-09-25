const express = require('express')
const CompanySupporteInfo = require('../models/company-support-info')

const router = express.Router()

exports.supportInfo = (req, res) => {

    CompanySupporteInfo.findOneAndUpdate({ companyID: req.companyID ?? '12345' }, {
        $set: {
            companyPhoneNo: req.body.companyPhoneNo ?? "",
            CompanyEmail: req.body.CompanyEmail ?? "",
            companyAddress1: req.body.companyAddress1 ?? "",
            companyAddress2: req.body.companyAddress2 ?? "",
            country: req.body.country ?? "",
            city: req.body.city ?? "",
            zipCode: req.body.zipCode ?? "",
            contactLink: req.body.contactLink ?? ""
        }
    })
    .then(result => {
        return res.status(200).json({
            message: "record updated"
        })

    })
    .catch(err => {
        return res.status(400).json({
            message: "bad request",
            error: err
        })
    })

}