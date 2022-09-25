
exports.uploadFiles = (req, res, next) => {

    if (req.files) {
        let uploadPath = "D:\\NodeJs\\tech curve assignment\\uploads\\account info\\" + `${req.companyID ?? '12345'}-`;

        if (req.files.incorporationCertificate) {
            sampleFile = req.files.incorporationCertificate;

            sampleFile.mv(uploadPath +"incorporationCertificate-" + new Date().toDateString()+ "-"+ sampleFile.name,
                function (err) {
                    if (err)
                    return res.status(500).json({
                        error: err
                    });
                    sampleFile.path = uploadPath +"incorporationCertificate-" + new Date().toDateString()
                })
        }
        if (req.files.last3YearsBalanceSheet) {
            sampleFile = req.files.last3YearsBalanceSheet;
            sampleFile.mv(uploadPath +"last3YearsBalanceSheet-" + new Date().toDateString()+ "-"+ sampleFile.name,
                function (err) {
                    if (err)
                    return res.status(500).json({
                        error: err
                    });
                    sampleFile.path = uploadPath +"last3YearsBalanceSheet-" + new Date().toDateString()
                })
        }
        if (req.files.IOSCertificate) {
            sampleFile = req.files.IOSCertificate;
            sampleFile.mv(uploadPath +"IOSCertificate-" + new Date().toDateString() + "-"+ sampleFile.name,
                function (err) {
                    if (err)
                    return res.status(500).json({
                        error: err
                    });
                    sampleFile.path = uploadPath +"IOSCertificate-" + new Date().toDateString()
                })
        }
        next()
    } 
    else {
        next()
    }
}
