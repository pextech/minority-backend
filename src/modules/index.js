import { Router } from 'express';
import homeRouter from './home';
import userRouter from './auth/user.route';

const indexRouter = Router();

indexRouter.use('/home', homeRouter);
indexRouter.use('/user', userRouter);
indexRouter.use('/edit-profile', userRouter);

export default indexRouter;
