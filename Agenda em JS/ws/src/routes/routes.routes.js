
import salaoRoute from "./salao.routes.js";
import clienteRoute from "./cliente.routes.js";
import colaboradorRoute from "./colaborador.routes.js";
import e from "express";

const appRoutes = e();
appRoutes.use('/salao', salaoRoute);
appRoutes.use('/cliente', clienteRoute);
appRoutes.use('/colaborador', colaboradorRoute);

export default appRoutes;