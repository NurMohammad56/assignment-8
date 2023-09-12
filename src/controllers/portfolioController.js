exports.create = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Representing portfolioController"
    })
}

exports.read = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Reading portfolioController"
    })
}

exports.delete = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Deleting portfolioController"
    })
}
exports.update = async (req, res)=>{
    res.status(200).json({
        status: "Success",
        data : "Updating portfolioController"
    })
}