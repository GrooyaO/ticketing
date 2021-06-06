import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@grooyatickets/common';
import { createChargeRouter } from './routers/new';

const app = express();
//trust https proxy such as ngnix
app.set('trust proxy', true);
app.use(json());
//disable encryption on cookie since JWT is already enrypted
//cookie is only used over https connection
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser);

app.use(createChargeRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
