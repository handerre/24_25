const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Sett opp EJS som template-motor
app.set('view engine', 'ejs');

// Koble til SQLite-databasen
const db = new sqlite3.Database('database.db');

// Hovedrute for å vise brukere
app.get('/', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Database error!");
        } else {
            res.render('index', { users: rows });
        }
    });
});

// Start serveren
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
