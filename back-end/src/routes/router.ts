import { Router } from "express";
import routerCliente from "./rotaClientes";

const router = Router();

router.use('/clientes', routerCliente);

export default router;