const express = require('express')
const app = express()
const fs = require('fs');

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

app.listen(3333, () => {
    console.log("암 listening on 3333")
})