# Avaliação de Web 2: API CRUD RESTful usando Node.js, Express.js e Sequelize

Esta é uma aplicação CRUD simples para gerenciar informações de alunos.

## Como Executar
### 1. Clone o repositório
```bash
git clone
```
### 2. Instale as dependências
```bash
npm install
```
### 3. Iniciar um servidor MySQL
Inicie um servidor MySQL utilizando alguma ferramenta como o XAMPP.
### 4. Configurar conexão com o servidor MySQL
Vá para o diretório src/models/aluno.js e substitua os valores da conexão com os valores reais do seu ambiente.

Ex.:
```js
const sequelize = new Sequelize('mysql:// root@localhost:3306/alunos_db');
```
### 5. Inicie o servidor 
```
node src/index.js
```

## Rotas
### Criar Aluno:
- Método: POST
- URL: http://localhost:8000/alunos
- Corpo: JSON { "nome": "Nome do Aluno", "idade": 20 }

### Obter Informações de um Aluno:
- Método: GET
- URL: http://localhost:8000/alunos/:id

### Atualizar Informações de um Aluno:
- Método: PUT
- URL: http://localhost:8000/alunos/:id
- Corpo: JSON { "nome": "Novo Nome", "idade": 21 }

### Excluir Aluno:
- Método: DELETE
- URL: http://localhost:8000/alunos/:id

