import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000
// const uri = (add your database uri in here)

app.use(cors())
app.use(express.json())

app.listen(port, (err) => {
    if (err) return console.log(err)
    console.log(`Listening at http://localhost:${port}`)
    console.log("Press ctrl+C to stop listening")
})