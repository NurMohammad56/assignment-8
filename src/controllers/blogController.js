exports.create = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Representing blogController"
    })
}

exports.read = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Reading blogController"
    })
}

exports.delete = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Deleting blogController"
    })
}
exports.update = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Updating blogController"
    })
}