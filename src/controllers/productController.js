exports.create = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Representing productController"
    })
}

exports.read = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Reading productController"
    })
}

exports.delete = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Deleting productController"
    })
}
exports.update = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Updating productController"
    })
}