const db = require('../db');

// Add item
exports.addItem = (req, res) => {
    const { session_id } = req.params;
    const { player_id, item_name } = req.body;
    const sql = 'INSERT INTO items (session_id, player_id, item_name) VALUES (?, ?, ?)';
    db.query(sql, [session_id, player_id, item_name], (err, result) => {
    if (err) return res.status(500).send('DB Add Item Error');
    res.send({ id: result.insertId, message: `Player ${player_id} recieved ${item_name} added!` });
  });
};

// Get all items
exports.getAllItems = (req, res) => {
    const { session_id } = req.params;
    db.query('SELECT * FROM items WHERE session_id = ?', [session_id], (err, results) => {
    if (err) return res.status(500).send('DB Get All Items Error');
    res.send(results);
  });
};

// Delete items
exports.deleteItem = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM items WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send('DB Delete Item Error');
    res.send({ message: `Deleted Item ${id} updated` });
  });
};