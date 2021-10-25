import { Router } from 'express';
import { chatbotController }  from '../Controles/chatbotController';

const chatbotRouter = Router();
chatbotRouter.put('/add', chatbotController.InsertChatbot);
chatbotRouter.post('/upd/:id', chatbotController.UpdateChatbot);
chatbotRouter.get('/get/:id', chatbotController.GetChatbot);
chatbotRouter.get('/list', chatbotController.ListChatbots);
chatbotRouter.delete('/del/:id', chatbotController.DeleteChatbot);

export{
    chatbotRouter
}