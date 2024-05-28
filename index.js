import express from 'express'
import 'dotenv/config'
import userRoutes from './routes/user.route.js'
import transferRoutes from './routes/transfer.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/transfer', transferRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})