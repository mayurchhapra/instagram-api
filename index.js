import express from 'express';

import { routes } from './src/routes/index';

const app = express();
app.use(express.json());


app.get("/", (req, res) => {  
  let get = app._router.stack.filter(r => r.route && r.route.methods.get).map(r => r.route.path);
  let post = app._router.stack.filter(r => r.route && r.route.methods.post).map(r => r.route.path);
  res.send({ get: get, post: post });
});

routes(app);

app.listen(3000, () => {
  console.log('The server is listening on port 3000');
});
