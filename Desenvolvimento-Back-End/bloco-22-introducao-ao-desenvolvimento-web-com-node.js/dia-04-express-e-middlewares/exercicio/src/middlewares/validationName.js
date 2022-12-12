const validationName = (req, res, next) => {
  const { name } = req.body

  if (name.length < 4) {
    return res.status(400).json(
      { message: 'O campo name deve ter pelo menos 4 caracteres' },
    );
  }
  
  if(!name) 
    return res.status(400).json({ message: "requer o atributo name" })

  next()
}

module.exports = validationName;
