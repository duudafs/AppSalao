const express = require ('express');
const app = express();

app.use(express(json));

app.get('/usuarios', (req, res) => {
  res.json([{ nome: 'duda' }]);
});

app.listen(3000, () => {
  console.log('rodando na porta 3000');
});