import express from 'express'
import cors from 'cors'
const app = express()

// POST method route
app.post('http://localhost:5173/register', (req, res) => {
    res.json('test ok')
  })

app.listen(5173)