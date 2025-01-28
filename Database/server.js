const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Sett opp EJS som template-motor
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Koble til SQLite-databaser
const dbUsers = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error(err.message);
    console.log('Koblet til user-databasen.');
});
const dbBiler = new sqlite3.Database('./Biler.db', (err) => {
    if (err) console.error(err.message);
    console.log('Koblet til Biler-databasen.');
});



// Hovedrute
app.get('/', (req, res) => {
    res.render('index', { title: 'Velkommen til mine databaser' });
});
// Rute for å vise brukere
app.get('/users', (req, res) => {
    const query = `SELECT * FROM users`;
    dbUsers.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Database feil/error!");
        } else {
            res.render('users', { title:'Brukere', users: rows });
        }
    });
});

// Rute for å vise bilinformasjon
app.get('/biler', (req, res) => {
    const query = `SELECT * FROM Bil`;
    dbBiler.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Feil ved henting av data.');
        } else {
            res.render('biler', { title: 'Biloversikt', biler: rows });
        }
    });
});

// Start serveren
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
