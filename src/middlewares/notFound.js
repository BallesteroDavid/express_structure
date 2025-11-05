// middleware
// si aucune route trouvé on tombe dedans!

module.exports = (req, res) => {
    res.status(404).json({
        success: false,
        message: "Ressource not found",
        data: null
    })
}