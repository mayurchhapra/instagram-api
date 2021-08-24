import express from 'express';

import { routes } from './src/routes/index';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Good Day.'
  });
});

app.listen(3000, () => {
  console.log('The server is listening on port 3000');
});
