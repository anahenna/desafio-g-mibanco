import { userModel } from "../models/user.model.js"
import { nanoid } from "nanoid"

export const consultaDeSaldoById = async(req, res) => {
    const {uid} = req.params
    const userSaldo = await userModel.consultaSaldoById(uid)
    res.json(`El saldo del usuario es: ${userSaldo}`)
}


export const getAllUsers = async (req, res) => {
    const users = await userModel.findAll()
    res.json(users)
}

export const getUser = async (req, res) => {
    const {uid} = req.params
    const user =  await userModel.findOneById(uid)
    res.json(user)
}

export const createUser = async (req, res) => {
    const {email} = req.body
    const uid = nanoid()
    const newUser = await userModel.create(uid, email)
    res.json(newUser)

}

export const removeUser = async (req, res) => {
    const {uid} = req.params
    const user = await userModel.remove(uid)
    res.json(user)
}

export const updateUser = async (req, res) => {
    const {uid} = req.params
    const {valor} = req.body
    const user = await userModel.updateSaldo(uid, valor)
    res.json(user)
}