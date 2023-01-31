module.exports = (req, res) => {
  console.log(req.user);
  const { username, admin } = req.user;
  res.status(200).json({ username, admin });
};