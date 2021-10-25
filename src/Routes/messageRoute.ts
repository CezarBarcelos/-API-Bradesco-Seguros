import { Router } from 'express';
import { messageController } from '../Controles/messageController';

const messageRouter = Router();
messageRouter.get('/get/:id', messageController.GetMessage);
messageRouter.get('/list/:conversationId', messageController.ListMessages);
messageRouter.put('/add', messageController.InsertMessage); //para testes

export{
    messageRouter
}