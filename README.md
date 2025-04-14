# tcc 

## Como executar
- Clone este repositório
- Instale as dependencias nessa ordem
```bash
npm init -y
npm i express cors mysql 
npm install dotenv
npm install body-parser
npm install --save-dev nodemon
npm install bcrypt
npm install express-validator
npm install @prisma/client
npx prisma generate
npx nodemon server.js

```

## Teste no insomnia 
- http://localhost:3000/cadastrar
- exemplo:
{
  "email": "teste@exemplo.com",
  "senha": "123456"
}

