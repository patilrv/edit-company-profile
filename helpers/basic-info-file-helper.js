
exports.fileUplod = (req, res, next) => {
    if (req.files) {
        if (req.files.companyProfileImg) {
            
            sampleFile = req.files.companyProfileImg;
            let uploadPath = "D:\\NodeJs\\tech curve assignment\\uploads\\basic info\\" + `${req.companyID ?? '12345'}-companyProfileImg-` + new Date().toDateString().split(' ').join('-') + sampleFile.name;

            sampleFile.mv(uploadPath, function (err) {
                if (err)
                    return res.status(500).json({
                        error: err
                    });
                sampleFile.path = uploadPath
                next()
            })
        }
    }else{
        next()
    }
}