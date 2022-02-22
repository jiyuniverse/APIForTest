const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs');
app.use(cors())

// app.get('/', function(req, res) {
//     res.send("^.^")
// })

app.get('/', function(req, res) {
    fs.readFile('./test.json', 'utf8', (error, jsonFile) => {
        if (error) {
            return res.status(400).send({
                message: '캔낫 readFile'
            });
        }
        res.send(jsonFile)
    });
})

app.get('/getOptionData', function(req, res) {
    fs.readFile('./test2.json', 'utf8', (error, jsonFile) => {
        if (error) {
            return res.status(400).send({
                message: '캔낫 readFile'
            });
        }
        res.send(jsonFile)
    });
})

app.listen(3000, () => {
    console.log("암 listening on 3000")
})