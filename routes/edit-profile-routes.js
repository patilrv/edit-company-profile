const express = require('express')
const router = express.Router()

// const authorizeUser = require('../authentication/auth-service')
const fileUpload = require('../helpers/basic-info-file-helper')
const filesUpload = require('../helpers/account-info-file-helper')
const basicInfoController = require('../controllers/company-basic-info-controller')
const profileInfoController = require('../controllers/company-profile-info-controller')
const contactInfoController = require('../controllers/company-contact-info-controller')
const supportInfoController = require('../controllers/company-support-info-controller')
const accountInfoController = require('../controllers/company-account-info-controller')


// Edit Basic-Information
router.put('/basic-information',fileUpload.fileUplod, basicInfoController.basicInfo)

// Edit Profile-Information
router.put('/profile-information', profileInfoController.profileInfo)

// Edit Contact-Information
router.put('/contact-information', contactInfoController.contactInfo)

// Edit Support-Details
router.put('/support-details', supportInfoController.supportInfo)

// Edit Company-Account-Details
router.put('/company-account-details',filesUpload.uploadFiles, accountInfoController.accountInfo)

module.exports = router
