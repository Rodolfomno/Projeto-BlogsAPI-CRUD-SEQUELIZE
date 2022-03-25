require('dotenv/config');
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const categorieRouter = require('./router/categorieRouter');
const loginRouter = require('./router/loginRouter');
const postRouter = require('./router/postRouter');
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

app.use('/categories', categorieRouter);

app.use('/post', postRouter);

app.use(errorHandler);