const db = require('../database');

// Add item
exports.addItem = (req, res) => {
  const { session_id } = req.params;
  const { player_id, item_name } = req.body;
  const sql = 'INSERT INTO items (session_id, player_id, item_name) VALUES (?, ?, ?)';
  db.query(sql, [session_id, player_id, item_name], (err, result) => {
    if (err) return res.status(500).json({error: err, message: 'DB Add Item Error'});
    res.json({ result: result, message: `Player ID ${player_id} recieved ${item_name}` });
  });
};

// Get all items
exports.getAllItems = (req, res) => {
  const { session_id } = req.params;
  db.query('SELECT * FROM items WHERE session_id = ?', [session_id], (err, results) => {
    if (err) return res.status(500).json({error: err, message: 'DB Get All Items Error'});
    res.json({ result: result});
  });
};

// Delete items
exports.deleteItem = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM items WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({error: err, message: 'DB Delete Item Error'});
    res.json({ message: `Deleted Item ${id}` });
  });
};