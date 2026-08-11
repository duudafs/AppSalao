const express = require('express');
const app = express();

app.use(express.json());

app.get('/usuarios', (req, res) => {
  res.json([{ nome: 'duda' }]);
});

app.post('/login', (req, res) => {
  const { nome, senha } = req.body;

  if (nome === 'duda' && senha === '123') {
    res.json({ sucesso: true });
  } else {
    res.status(401).json({ erro: 'login inválido' });
  }
});

const servicos = [
  { id: 1, nome: 'Manicure', preco: 45 },
  { id: 2, nome: 'Pedicure', preco: 35 },
  { id: 3, nome: 'Pintura no Cabelo', preco: 70 },
];

app.get('/servicos', (req, res) => {
  res.json(servicos);
});
// escuta em 0.0.0.0 pra o celular conseguir alcançar
app.listen(3000, '0.0.0.0', () => {
  console.log('rodando na porta 3000');
});