class Log {
  requestLog(req, res, next) {
    console.log(
      "\x1b[34m%s\x1b[0m",
      `[${new Date().toLocaleDateString('pt-BR').split('-').reverse().join('/') + " " + new Date().toLocaleTimeString('pt-BR')}] IP: ${req.ip} | Method: ${req.method} | URL: ${req.url}`
    );
    return next();
  }
}

module.exports = {
  createLogMiddleware: () => {
    return new Log();
  }
}