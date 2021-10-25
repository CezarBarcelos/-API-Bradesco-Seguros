import bodyParser from 'body-parser';
import express from 'express';
import dataBase from './Config/database'
import { useRouter } from './Routes/routes';

const PORT = process.env.PORT || 8091;
const app = express();

if(dataBase != 0 && dataBase != 3 && dataBase != 99)
{
    app.use(bodyParser.json())
    useRouter(app);

    //app.get('/api/v1', (req: Request, res: Response)=> {res.json({"msg": "ok"})})

    app.listen(PORT,() => console.log('Servidor iniciado na porta: ' + PORT))
}
else
{
    console.log("Não foi possível conectar ao MongoDB.");
}