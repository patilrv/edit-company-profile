
const express = require('express')
const router = express.Router()
const CompanyAccountInfo = require('../models/company-account-info')

exports.accountInfo = (req, res) => {
    const gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$')
    if (gstinformat.test(req.body.GSTNo)) {
        CompanyAccountInfo.findOneAndUpdate({ companyID: req.companyID ?? '12345' }, {
            $set: {
                GSTNo: req.body.GSTNo ?? '',
                bankName: req.body.bankName ?? '',
                accountNo: req.body.accountNo ?? '',
                accountType: req.body.accountType,
                IFSCNo: req.body.IFSCNo ?? '',
                branchAddress: req.body.branchAddress ?? '',
                UPINo: req.body.UPINo ?? '',
                incorporationCertificate: req.files ? req.files.incorporationCertificate : {},
                last3YearsBalanceSheet: req.files ? req.files.last3YearsBalanceSheet : {},
                IOSCertificate: req.files ? req.files.IOSCertificate : {}
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

    } else {
        return res.status(400).json({
            message: "bad request invalid GST No"
        })
    }

}



