const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`  Keep connection: *:${port}`)
})