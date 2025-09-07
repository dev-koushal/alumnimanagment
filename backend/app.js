import express from 'express';
import { PORT } from './config/env.js'; 
import userRouter from './routes/user.routes.js';
import connectDB from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('API is running.');
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});

export default app;