import { transferModel } from "../models/transfer.model.js"

export const transferUltimosDiez = async (req, res) => {
    const transfersDiez = await transferModel.findUltimosDiez()
    return res.json(transfersDiez)
}

export const transferAll = async(req, res) => {
    const transfers = await transferModel.findAll()
    return res.json(transfers)
}

export const transferAmmount =  async(req, res) => {
    const {origen, destino, valor} = req.body
    //aca se deberia validar el valor
    const response =  await transferModel.createTransfer(origen, destino, valor)
    if(!response.ok){
        return res.status(500).json(response)
    }
    res.json(response)
}

