const { createApp } = require('./app');
require('dotenv/config');

const server = createApp();

server.listen(process.env.PORT, () => {
  console.log('Server running in port ' + process.env.PORT)
});