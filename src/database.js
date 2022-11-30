const mongoose = require('mongoose');
require('dotenv').config()
const db_uri =  process.env.DB_URI
mongoose
.connect(db_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: `garoe`,
})

.then (db => console.log ("Conectado a BBDD "))
.catch ((err) => console.error("No conectado por " + err));