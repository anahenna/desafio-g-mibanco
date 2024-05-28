import { userModel } from "./user.model.js"
import { pool } from "../database/connection.js"

const findUltimosDiez = async () => {
    const {rows} = await pool.query ("SELECT  * FROM TRANSFER LIMIT 10")
    return rows
}


const findAll = async () => {
    const {rows} = await pool.query ("SELECT  * FROM TRANSFER")
    return rows
}

const createTransfer = async (origen, destino, valor) => {
    try{
        await pool.query("BEGIN")

        const user1 = await userModel.updateSaldo(origen, -valor)
        if(!user1) throw new Error("Falló")
 
        const user2 = await userModel.updateSaldo(destino, +valor)
        if(!user2) throw new Error("Falló")

        const query = {
            text: "INSERT INTO TRANSFER (ORIGEN, DESTINO, VALOR) VALUES ($1, $2, $3) RETURNING*",
            values: [origen, destino, valor]
        }

        const {rows} = await pool.query(query)

        await pool.query("COMMIT")
        return {
            ok: true,
            data: rows[0]
        }
    }catch(error){
        console.log(error)
        await pool.query("ROLLBACK")
        return {
            ok: false,
            data: "Error en la transferencia"
        }
    }
}   

export const transferModel = {
    createTransfer,
    findAll,
    findUltimosDiez
}