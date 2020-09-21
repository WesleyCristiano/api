import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import 'shared/container'

import '@shared/infra/typeorm'
import routes from '@shared/infra/http/routes'
import AppError from '@shared/erros/AppError'
import uploads from '@config/uploads'

const app = express()
app.use('/files', express.static(uploads.uploadsFolder))
app.use(express.json())
const port = process.env.SERVER_PORT

app.use(routes)

app.use((error: Error, request: Request, response: Response, next: NextFunction)=>{
    console.log(error);
    
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })    
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server Error"
    })
})

app.listen(port, ()=>{
    console.log(`The server is running in the port ${port}`)
})