import express from "express";
import TodoController from "./todo.cont";

const router = express.Router()

router.get('/',TodoController.getAllReq)
router.get('/:id',TodoController.getOneReq)
router.post('/',TodoController.createReq)
router.put('/:id',TodoController.updateReq)
router.delete('/:id',TodoController.deleteReq)

export default router