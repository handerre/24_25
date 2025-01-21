const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL
    )`);

    db.run(`INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')`);
    db.run(`INSERT INTO users (name, email) VALUES ('Jane Smith', 'jane@example.com')`);
});

db.close();
