import express from 'express'
const app = express()

app.get('/', (_request: any, response: { json: (arg0: { example: string[] }) => void }) => {
  response.json({example: ["one", "two", "three"]})
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
