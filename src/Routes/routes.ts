import { messageRouter } from './messageRoute';
import { chatbotRouter } from './chatbotRouter';
import Router, { Application } from 'express';

export const useRouter = (app: Application) =>  {
    const apiRouter = Router();
    apiRouter.use('/message', messageRouter);
    apiRouter.use('/chatbot', chatbotRouter);

    app.use('/api/v1/', apiRouter);
}