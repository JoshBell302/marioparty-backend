const db = require('../database');

// Add item
exports.createSession = (req, res) => {
  const { session_id } = req.body;
  const sql = 'INSERT INTO sessions (session_id) VALUES (?)';
  db.query(sql, [session_id], (err, result) => {
    if (err) return res.status(500).json({error: err, message: 'DB Add Session Error'});
    res.json({result: result, message: `Session created with ID ${session_id}`});
  });
};

// Get all items
exports.getSession = (req, res) => {
  db.query('SELECT * FROM sessions', (err, results) => {
    if (err) return res.status(500).json({error: err, message: 'DB Get Session Error'});
    res.json({result: results});
  });
};

// Delete items
exports.deleteSession = (req, res) => {
  db.query('TRUNCATE TABLE sessions', (err) => {
    if (err) return res.status(500).json({error: err, message: 'DB Delete Session Error'});
    res.json({message: `Deleted Session`});
  });
};