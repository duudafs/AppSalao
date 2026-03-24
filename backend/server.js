const express = require ('express');
const app = express();
import { useEffect } from 'react';

app.use(express.json());

app.get('/usuarios', (req, res) => {
  res.json([{ nome: 'duda' }]);
});

app.listen(3000, () => {
  console.log('rodando na porta 3000');
});


useEffect(() => {
  fetch('http://192.168.50.172:3000/usuarios')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}, []);

app.post('/login', (req, res) => {
  const { nome, senha } = req.body;

  if (nome === 'du' && senha === '123') {
    res.json({ sucesso: true });
  } else {
    res.status(401).json({ erro: 'login inválido' });
  }
});