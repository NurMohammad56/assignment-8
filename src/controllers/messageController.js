exports.create = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Representing messageController"
    })
}

exports.read = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Reading messageController"
    })
}

exports.delete = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Deleting messageController"
    })
}
exports.update = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Updating messageController"
    })
}