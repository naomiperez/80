// get instance of express middleware
const express = require('express')
// for JSON stuff
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
// app will run on port
const port = process.env.port || 4000

const mysql = require('mysql')

const mydb = {
    host: 'localhost',
    user: 'root',
    // default localhost mysql port
    port: 3306,
    // make this an env variable or something
    password: 'password',
    database: '80db'
}

const db = mysql.createConnection(mydb)

app.use(cors());
// Only works with express v4.16.0 and higher since bodyParser constructor is deprecated
app.use(express.json());

app.post('/api/insert', (req, res) => {
    const date = req.body.date
    const mood = req.body.mood

    const sqlInsert = 'INSERT INTO user_mood (iduser_mood, date, mood) VALUES (?, ?, ?)';

    db.query(sqlInsert, [userid, date, mood], (err, result) => {
        if(err) {
            console.log('error connecting: ' + err.message)
        } else {
            res.send('sent data')
        }
    });
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})
