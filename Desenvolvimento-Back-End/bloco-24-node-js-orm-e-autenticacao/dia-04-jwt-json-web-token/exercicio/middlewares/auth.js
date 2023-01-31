const jwt = require('jsonwebtoken');

require('dotenv/config');

const { JWT_SECRET } = process.env;

const authorizationVerify = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    return next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = {
  authorizationVerify,
};