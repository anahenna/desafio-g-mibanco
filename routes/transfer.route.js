import { Router } from "express";
import { transferAll, transferAmmount, transferUltimosDiez } from "../controller/transfer.controller.js";

const router = Router()

router.get('/', transferAll)
router.get('/ultimos10registros', transferUltimosDiez)
router.post('/', transferAmmount)

export default router