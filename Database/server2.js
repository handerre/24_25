// Importer nødvendige moduler
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Sett opp EJS som template-motor
app.set('view engine', 'ejs');

// Koble til SQLite-databasen
const sqliteDb = new sqlite3.Database('Biler.db');


// Rute for å vise brukere fra SQLite-databasen
app.get('/sqlite', (req, res) => {
    sqliteDb.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("SQLite Database error!");
        } else {
            res.render('index', { users: rows }); // Render data fra SQLite
        }
    });
});

// Rute for å vise brukere og biler fra MySQL-databasen
app.get('/mysql', (req, res) => {
    const query = `
        SELECT eier.*, poststed.Poststed, bil.* 
        FROM Eier eier
        LEFT JOIN Poststed poststed ON eier.Postnummer = poststed.Postnummer
        LEFT JOIN Eier_Bil eier_bil ON eier.Personnummer = eier_bil.Personnummer
        LEFT JOIN Bil bil ON eier_bil.Registreringsnummer = bil.Registreringsnummer;
    `;

    mysqlDb.query(query, (err, results) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("MySQL Database error!");
        } else {
            const users = results.reduce((acc, row) => {
                const user = acc[row.Personnummer] || {
                    fornavn: row.Fornavn,
                    etternavn: row.Etternavn,
                    mobil: row.Mobil,
                    gateadresse: row.Gateadresse,
                    gatenummer: row.Gatenummer,
                    email: row.E_post,
                    postnummer: row.Postnummer,
                    poststed: row.Poststed,
                    biler: []
                };

                if (row.Registreringsnummer) {
                    user.biler.push({
                        registreringsnummer: row.Registreringsnummer,
                        merke: row.Merke,
                        modell: row.Modell,
                        km: row.Km,
                        drivstofftype: row.Drivstofftype,
                        farge: row.Farge,
                        registreringsdato: row.Registreringsdato
                    });
                }

                acc[row.Personnummer] = user;
                return acc;
            }, {});

            res.render('index', { users: Object.values(users) }); // Render data fra MySQL
        }
    });
});

// Start serveren
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
