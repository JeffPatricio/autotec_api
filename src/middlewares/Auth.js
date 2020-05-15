class Auth {
  validate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ success: false, code: 'invalid_token', message: 'O Token não foi fornecido ou é inválido.', auth: false });
    const token = authHeader.split(' ')[1];
    if (token !== '5gbahb22ska52rhkiuta1096vg3ht7vj34k2m4234234') res.status(401).json({ success: false, code: 'invalid_token', message: 'O Token não foi fornecido ou é inválido.', auth: false });
    return next();
  }
}

module.exports = {
  createAuthMiddleware: () => {
    return new Auth();
  }
}