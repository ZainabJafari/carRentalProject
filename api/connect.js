import mysql from 'mysql';
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jaza1998?',
    database: 'rentcarapi'
});
// Anslut till MySQL-databasen
db.connect((err) => {
    if (err) {
        console.error('Kunde inte ansluta till databasen:', err);
        return;
    }
    console.log('Ansluten till MySQL-databasen');
});
export { db };
