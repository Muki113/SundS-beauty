// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Statische Dateien bereitstellen
app.use(express.static('public'));

// Route für die Hauptseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/impressum', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'impressum.html'));
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});