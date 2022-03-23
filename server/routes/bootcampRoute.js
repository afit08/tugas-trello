import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.get('/',indexCtrl.bootcampCtrl.findAll),
router.get('/:id',indexCtrl.bootcampCtrl.findOne)

export default router