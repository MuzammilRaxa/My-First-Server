import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("I'm Express.js server")
})
app.get('/home', (req, res) => {
  res.send("this home Server page ")
})
app.get('/About', (req, res) => {
  res.send("this About Server page ")
})

app.listen(port, () => {
  console.log(`hello server is listening at http://localhost:3000`)
})
