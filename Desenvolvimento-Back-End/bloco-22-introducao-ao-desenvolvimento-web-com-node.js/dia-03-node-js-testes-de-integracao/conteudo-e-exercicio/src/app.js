// src/app.js

const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express())

app.listen(3001, () => console.log('O servidor esta online para porta: 3001'));

app.get('/chocolates', async (req, res) => {
    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json({ chocolates });
});
//----- exercicio------------

app.get('/chocolates/total', async (req, res) => {
    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json({ totalChocolates: chocolates.length });
});

//----------------------------
app.get('/chocolates/:id', async (req, res) => {
    const { id } = req.params;
    // Usamos o Number para converter o id em um inteiro
    const chocolate = await cacauTrybe.getChocolateById(Number(id));
    if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
    res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
    const { brandId } = req.params;
    const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
    res.status(200).json({ chocolates });
});


module.exports = app;