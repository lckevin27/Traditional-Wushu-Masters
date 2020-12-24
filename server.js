const express = require('express')
const path = require('path')
const app = express()
 
app.use(express.static(path.join(__dirname, 'dist')))
app.listen(80,() => {
    console.log('app listening on port 80.')
})