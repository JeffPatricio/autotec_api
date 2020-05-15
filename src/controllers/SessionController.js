const { createUtils } = require('../utils');

class SessionController {

  constructor() {
    this.utils = createUtils();
  }

  create(req, res) {
    const { cpf, password } = req.body;

    if (!cpf || !password || !this.utils.validateCpf(cpf) || cpf !== '11111111111' || password !== '123456')
      return res.status(400).json({ success: false, code: 'invalid_data', message: 'CPF ou senha inválidos' });

    return res.status(200).json({
      success: true,
      user: { nome: 'Jhonny Cooper', foto: 'https://blog.hotmart.com/blog/2019/01/BLOG_Perfil-empreendedor.png' },
      token: '5gbahb22ska52rhkiuta1096vg3ht7vj34k2m4234234'
    });
  }

  read(req, res) {
    return res.status(200).json({
      success: true,
      message: 'Usuário autenticado'
    });
  }
}

module.exports = {
  createSessionController: () => {
    return new SessionController();
  }
}