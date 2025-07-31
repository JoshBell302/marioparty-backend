const db = require('../database');

// Add player
exports.addPlayer = (req, res) => {
    const { session_id } = req.params;
    const { name, character } = req.body;
    console.log(`Calling Add Player | req: ${req}, res: ${res}`)
    console.log(`name=${name}`);
    console.log(`character=${character}`);
    console.log(`session_id=${session_id}`);
    const sql = 'INSERT INTO players (session_id, name, character_name, coins, stars) VALUES (?, ?, ?, 0, 0)';
    db.query(sql, [session_id, name, character], (err, results) => {
        if (err) return res.status(500).json({error: err, message: 'DB Add Player Error'});
        res.json({results: results, message: `Player ${name} added`});
    });
};

// Get all players
exports.getAllPlayers = (req, res) => {
    const { session_id } = req.params;
    console.log(`Calling Get All Players | req: ${req}, res: ${res}`)
    console.log(`session_id=${session_id}`);
    db.query('SELECT * FROM players WHERE session_id = ?', [session_id], (err, results) => {
        if (err) return res.status(500).json({error: err, message: 'DB Get All Players Error'});
        res.json({results: results});
    });
};

// Update coins
exports.updateCoins = (req, res) => {
    const { player_id } = req.params;
    const { coins } = req.body;
    console.log(`Calling Update Coins | req: ${req}, res: ${res}`)
    console.log(`player_id=${player_id}`);
    console.log(`coins=${coins}`);
    db.query('UPDATE players SET coins = ? WHERE id = ?', [coins, player_id], (err) => {
        if (err) return res.status(500).json({error: err, message: 'DB Update Coins Error'});
        res.json({message: `Updated Coins from Player ID ${id} to ${coins}`});
  });
};

// Update stars
exports.updateStars = (req, res) => {
    const { player_id } = req.params;
    const { stars } = req.body;
    console.log(`Calling Update Stars | req: ${req}, res: ${res}`)
    console.log(`player_id=${player_id}`);
    console.log(`stars=${stars}`);
    db.query('UPDATE players SET stars = ? WHERE id = ?', [stars, player_id], (err) => {
        if (err) return res.status(500).json({error: err, message: 'DB Update Stars Error'});
        res.json({message: `Updated Coins from Player ID ${id} to ${stars}`});
  });
};

// Delete player
exports.deletePlayer = (req, res) => {
    const { player_id } = req.params;
    console.log(`Calling Delete Player | req: ${req}, res: ${res}`)
    console.log(`player_id=${player_id}`);
    db.query('DELETE FROM players WHERE id = ?', [player_id], (err, results) => {
        if (err) return res.status(500).json({error: err, message: 'DB Delete Player Error'});
        if (results.affectedRows === 0) {return res.status(404).json({ message: `Player ${player_id} not found` });}
        res.json({results: results, message: `Player ${player_id} has been deleted`});
    });
};