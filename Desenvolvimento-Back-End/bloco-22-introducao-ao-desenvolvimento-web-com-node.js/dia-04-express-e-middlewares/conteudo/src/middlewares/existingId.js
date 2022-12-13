const existingId = (req, res, next) => {
    const id = Number(req.params.id);
    if(Number.isNaN(id)) {
        res.status(400).json({ message: 'ID invalido' })
    } else {
        next()
    }
}

module.exports = existingId;