const express: any = require('express')
// const mysql: any = require('mysql2')
const app: any = express()

app.use(express.json())

const db = require('./config/database')


db.authenticate()
.then(() => console.log("database connected"))
.catch((err: any) => console.log(err))


app.use('/files', require('./routes/fileUpload'))


app.listen(5000, () => {
    console.log("Server is up")
})