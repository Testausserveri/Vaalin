const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = {
    origin: ["http://localhost:5173"],
}

app.use(cors(corsOptions))

app.get('/', (request, response) => {
  response.json({example: ["one", "two", "three"]})
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
