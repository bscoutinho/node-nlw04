import 'reflect-metadata'
import express from 'express'
import './database/index.ts'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)


app.get("/", (request, response) => {
    return response.send({ message: 'Teste MSG'})
})

app.post("/", (request, response) => {
    return response.json({ message: 'Dados salvos com sucesso'})
})

app.listen(3333, () => console.log('Server is running'))