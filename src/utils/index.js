class Utils {
  validateCpf(cpfReceived) {
    var cpf = cpfReceived.split(".").join("");
    cpf = cpf.split("-").join("");
    if (cpf.length < 11) return false;
    var sum = 0;
    var rest = 0;
    if (cpf == "00000000000") return false;
    if (cpf == "11111111111") return false;
    if (cpf == "22222222222") return false;
    if (cpf == "33333333333") return false;
    if (cpf == "44444444444") return false;
    if (cpf == "55555555555") return false;
    if (cpf == "66666666666") return false;
    if (cpf == "77777777777") return false;
    if (cpf == "88888888888") return false;
    if (cpf == "99999999999") return false;
    if (cpf == "12345678909") return false;
    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
}

module.exports = {
  createUtils: () => {
    return new Utils();
  }
}