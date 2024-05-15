const express = require('express');
const app = express();

const port = process.env.APP_PORT || 3000;
const host = process.env.APP_IP || 'localhost';
const target = process.env.TARGET || 'https://www.google.com';

app.use('/',function (_, response) {
  response.redirect(target)
});

app.listen(port);

console.log(`Server started on http://${host}:${port}. Redirecting to ${target}`);
