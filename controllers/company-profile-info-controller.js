const mongoose = require('mongoose')
const express = require('express')
const CompanyProfileInfo = require('../models/company-profile-info')
// const {uploads, uploadMultiple} = require('../helpers/basic-info-file-helper')


const router = express.Router()

exports.profileInfo = (req, res) => {

    CompanyProfileInfo.findOneAndUpdate({ companyID: req.companyID ?? '12345' }, {
        $set: {
            describe: req.body.describe ?? "",
            inBusinessSince: req.body.inBusinessSince ?? "",
            category: req.body.category ?? "",
            website: req.body.website ?? "",
            description: req.body.description ?? ""
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