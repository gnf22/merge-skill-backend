import express from 'express';

import './database';

import './shared/container';

const app = express();

app.get('/', (request, response) => {
  return response.json({ hello: 'world' });
});

app.listen(3333, () => console.log('Server is running!'));
