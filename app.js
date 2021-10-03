
const express = require('express')
//import db
const connectDB = require('./config/db')

const colors = require('colors')

const dotenv = require('dotenv')

const cors = require('cors')
// load  ENV variables from config file
dotenv.config({path: './config/config.env'})




const app = express()
//add cors
app.use(cors())

//add request body parser for using JSON
app.use(express.json())


// mount routes
const books = require('./routes/books')

app.use('/api/v1/books', books)


const {NODE_ENV, PORT = 5001,USER_DB, PASSWORD_DB, DB_NAME} = process.env

// const MOGODBURI = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@cluster0.2iiy6.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`


//DB connection


connectDB()

const server = app.listen(PORT, ()=>{
    console.log(`Server running in ${NODE_ENV} in mode on PORT -- ${PORT}`.italic.cyan.bold)
})

process.on('unhandledRejection', (error, promise)=> {
    console.log(`Error: ${error.message}`.bold.red.bgGreen)
    server.close(()=> process.exit(1))
})



// app.listen(process.env.PORT || 5001, ()=>{
//     console.log(`server running in ${process.env.NODE_ENV} in mode on PORT -- ${process.env.PORT}`)
// })



