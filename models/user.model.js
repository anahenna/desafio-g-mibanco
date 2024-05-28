import { text } from "express"
import { pool } from "../database/connection.js"

const consultaSaldoById = async (uid) => {
    const query = {
        text: "SELECT saldo FROM USERS WHERE UID = $1",
        values: [uid]
    }
    const {rows} = await pool.query(query)
    return rows[0] ? rows[0].saldo : null;
}

const findAll = async() => {
    const {rows} = await pool.query('SELECT * FROM USERS')
    return rows
}

const findOneById = async (uid) => {
    const query = {
        text: "SELECT * FROM USERS WHERE UID = $1",
        values: [uid]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}

const create = async (uid, email) => {
    const query = {
        text: "INSERT INTO USERS (uid, email) VALUES ($1, $2) RETURNING *",
        values: [uid, email]
    } 
    const {rows} = await pool.query(query)
    return rows
}

const remove = async (uid) => {
    const query = {
        text: "DELETE FROM USERS WHERE UID = $1 RETURNING*",
        values: [uid]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}

const updateSaldo = async (uid, valor) => {
    const query = {
        text: "UPDATE USERS SET saldo = saldo + $1 WHERE uid = $2 RETURNING*",
        values: [valor, uid]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}

export const userModel = {
    findAll,
    create,
    findOneById,
    remove,
    updateSaldo,
    consultaSaldoById
}