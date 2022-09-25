
const express = require('express')
const router = express.Router()
const CompanyBasicInfo = require('../models/company-basic-info')

exports.basicInfo = (req, res) => {
    CompanyBasicInfo.findOneAndUpdate({ companyID: req.companyID ?? '12345' }, {
        $set: {
            companyName: req.body.companyName ?? "",
            brandName: req.body.brandName ?? "",
            country: req.body.country ?? "",
            companyProfileImg: req.files ? req.files.companyProfileImg : {},
            socialMediaHandler: {
                instagram: req.body.socialMediaHandler.instagram ?? '',
                ownWebsite: req.body.socialMediaHandler.ownWebsite ?? '',
                fiver: req.body.socialMediaHandler.fiver ?? '',
                relevantWebsite: req.body.socialMediaHandler.relevantWebsite ?? ''
            }
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




