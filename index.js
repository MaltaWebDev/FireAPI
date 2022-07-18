const express = require('express')
const app = express()
const PORT = 8080

app.get('/api', (req, res) => {

    const apiKey = req.query.apiKey

    // validate api key 
    // bill user for usage

    res.send({data: '🔥🔥🔥🔥🔥🔥🔥🔥🐐'})

})

app.listen(PORT, () => console.log(`live on http://localhost:${PORT}`))

