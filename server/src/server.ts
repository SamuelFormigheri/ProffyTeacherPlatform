import express, { response } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
//Permitir outras portas acessarem o backend
app.use(cors());
//Backend compreender json
app.use(express.json());

//Rotas da aplicação
app.use(routes);

app.listen(8080);