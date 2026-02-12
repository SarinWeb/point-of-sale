// const
 exports.addCategory = (req, res) => {
    try {

        res.status(200).json({
            success: true,
            message: "Category Running...",
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })

    }
}

// module.exports = {
//     addCategory,
// } 