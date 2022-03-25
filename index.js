require('dotenv/config');
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use(errorHandler);