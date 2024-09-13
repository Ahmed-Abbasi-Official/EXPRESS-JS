const express = require('express')
const app = express()
const port = 4000

        // For Home Page Route .

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>')
})

    // For About Page Route .

app.get('/about', (req, res) => {
  res.send('<h1>about</h1>')
})

    // For Contact Page Route .

app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1>')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})