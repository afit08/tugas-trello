import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.put('/batch/:id',indexCtrl.batch_editCtrl.update),
router.put('/talent_batch/:id',indexCtrl.batch_editCtrl.updated),
router.get('/batch/',indexCtrl.batch_editCtrl.findAll),
router.get('/talent_batch',indexCtrl.batch_editCtrl.findAlll)

export default router