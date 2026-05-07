import { Router } from "express";
import { criarFuncionario, login, listToken } from "../controllers/controllerFuncionarios";

const router = Router();

router.post('/criarFuncionarios' ,criarFuncionario);
router.post('/login', login)
router.get('/listByToken', listToken);

export default router;