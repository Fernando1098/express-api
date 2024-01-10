import jwt from "jsonwebtoken"

export function verificarToken(req, res, next) {

  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({message: 'Unauthorized access'});
  }

  try {
    const tokenSplited = token.split(" ")[1]
    const tokenDecode = jwt.verify(tokenSplited, process.env.JWT_SECRET);

    if (tokenDecode.exp < Date.now() / 1000) {
      return res.status(401).json({message: 'Token expired'});
    }

    next();
  } catch (error) {
    console.error('error:', error);
    return res.status(401).json({message: error.message});
  }
}

export function generarToken() {

  const payload = {
    sub: '020415',
    name: 'CodeCarfer',
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1m'});
}

