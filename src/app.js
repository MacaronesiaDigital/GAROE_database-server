const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const User = require('./models/User');

const app = express();
app.set ('port', process.env.PORT || 4000);

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const whitelist = ["http://localhost:8100"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
var database;
app.use("/api/users", require('./routes/users.routes'));
app.get("/api/users", (req, res)=>{
    database.collection('users').find({}).toArray((err, res) =>{
        if(err) throw err
        res.send(res)
    })
})



app.use("/api/stations", require('./routes/stations.routes'));
app.get("/api/stations", (req, res)=>{
    database.collection('stations').find({}).toArray((err, res) =>{
        if(err) throw err
        res.send(res)
    })
})

app.use("/api/siarData", require('./routes/siarData.routes'));
app.get("/api/siarData", (req, res)=>{
    database.collection('siarData').find({}).toArray((err, res) =>{
        if(err) throw err
        res.send(res)
    })
})

app.use("/api/reports", require('./routes/reports.routes'));
app.get("/api/reports", (req, res)=>{
    database.collection('reports').find({}).toArray((err, res) =>{
        if(err) throw err
        res.send(res)
    })
})

module.exports = app;