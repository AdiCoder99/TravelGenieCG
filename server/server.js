import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import itineraryRoutes from './routes/itineraryRoutes.js'

const app = express()

app.use(cors())
dotenv.config()

app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/itinerary', itineraryRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
