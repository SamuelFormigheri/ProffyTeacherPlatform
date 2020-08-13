import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import LoginsController from './controllers/LoginsController';
const routes = express.Router();

//#region Classes
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const loginsController = new LoginsController();
//#endregion

//#region Routes

//#region Details
/*
Métodos: 
GET:    Buscar
POST:   Criar
PUT:    Atualizar
DELETE: Deletar 

Toda requisição tem:
Req:          Request
Res:          Response
Route Params: identificar o id passado... acessa-o colocando : no endereço
              ex: "/users:id"
Query Params: Paginação, filtros, ordenação.
*/
//#endregion

//#region Connections

//Listar Conexões
routes.get("/connections", connectionsController.ListConnections);
//Criar Conexões
routes.post("/connections", connectionsController.CreateConnection);

//#endregion

//#region Classes

//Listar Aulas
routes.get("/classes", classesController.ListClasses);
//Criar Aula
routes.post("/classes", classesController.CreateClass);

//#endregion

//#region Login

//Buscar Login - Usuário
routes.post("/login", loginsController.GetUser);
//Criar Login - Usuário
routes.post("/register", loginsController.CreateUser);
//Buscar o Perfil - Usuário
routes.post("/profile", loginsController.GetProfile);
//Atualizar o Perfil - Usuário
routes.post("/update-profile", loginsController.UpdateProfile);

//#endregion

//#endregion

export default routes;