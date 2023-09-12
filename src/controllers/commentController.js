exports.create = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Representing commentController"
    })
}

exports.read = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Reading commentController"
    })
}

exports.delete = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Deleting commentController"
    })
}
exports.update = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Updating commentController"
    })
}