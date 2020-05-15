const express = require('express');
const cors = require('cors')
const routes = require('./routes')

require('./database')

const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Server running on port ${port}`))