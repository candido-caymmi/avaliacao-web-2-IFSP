const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/aluno');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/alunos', alunoRoutes);

app.listen(8000, () => {
  console.log(`Servidor rodando na porta 8000`);
});