import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import _ from 'lodash';
import router from './routes';


const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use((req, res, next) => {
  const delay = parseInt(process.env.DELAY || '0');
  setTimeout(next, delay);
});

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());


import './databases/mongodb';
import './databases/redis';

// utf8
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.use((req, res, next) => {
  const error: any = new Error('Not Found');
  error.code = 404;
  next(error);
});

// manage errors
app.use((error: ResponseType, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    error: true,
    message: 'Internal Server Error'
  });
});

export default app;
