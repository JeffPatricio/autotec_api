const { createUtils } = require('../utils');

class SessionController {

  constructor() {
    this.utils = createUtils();
  }

  create(req, res) {
    const { cpf, password } = req.body;

    if (!cpf || !password || !this.utils.validateCpf(cpf) || cpf !== '76621002009' || password !== '123456')
      return res.json({ success: false, code: 'invalid_data', message: 'CPF ou senha inválidos' });

    return res.json({
      success: true,
      user: { name: 'Jhonny Cooper', photo: 'https://blog.m2br.com/wp-content/uploads/2018/10/analista_de_marketing_digital.jpg' },
      token: '5gbahb22ska52rhkiuta1096vg3ht7vj34k2m4234234'
    });
  }

  read(req, res) {
    return res.json({
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