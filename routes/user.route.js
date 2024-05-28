import { Router } from "express";
import {consultaDeSaldoById, createUser, getAllUsers, getUser, removeUser, updateUser} from "../controller/user.controller.js"

const router = Router()

router.get('/consultaSaldoById/:uid', consultaDeSaldoById)

router.get('/', getAllUsers)

router.get('/:uid', getUser)

router.post('/', createUser)

router.delete('/:uid', removeUser )

router.put('/:uid', updateUser )
 

export default router;