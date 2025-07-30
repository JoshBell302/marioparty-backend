const db = require('../db');

// Add player
exports.addPlayer = (req, res) => {
    const { session_id } = req.params;
    const { name, character } = req.body;
    const sql = 'INSERT INTO players (session_id, name, character_name, coins, stars) VALUES (?, ?, ?, 0, 0)';
    db.query(sql, [session_id, name, character], (err, result) => {
        if (err) return res.status(500).send('DB Add Player Error');
        res.send({ id: result.insertId, message: `Player ${name} added!` });
    });
};

// Get all players
exports.getAllPlayers = (req, res) => {
    const { session_id } = req.params;
    db.query('SELECT * FROM players WHERE session_id = ?', [session_id], (err, results) => {
    if (err) return res.status(500).send('DB Get All Players Error');
    res.send(results);
  });
};

// Update coins
exports.updateCoins = (req, res) => {
    const { id } = req.params;
    const { coins } = req.body;
    db.query('UPDATE players SET coins = ? WHERE id = ?', [coins, id], (err) => {
    if (err) return res.status(500).send('DB Update Coins Error');
    res.send({ message: 'Coins updated' });
  });
};

// Update stars
exports.updateStars = (req, res) => {
    const { id } = req.params;
    const { stars } = req.body;
    db.query('UPDATE players SET stars = ? WHERE id = ?', [stars, id], (err) => {
    if (err) return res.status(500).send('DB Update Stars Error');
    res.send({ message: 'Stars updated' });
  });
};