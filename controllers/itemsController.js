const db = require('../database');

// Add item
exports.addItem = (req, res) => {
  const { session_id } = req.params;
  const { player_id, item_name } = req.body;
  console.log(`Calling Add Item | req: ${req}, res: ${res}`)
  console.log(`item_name=${item_name}`);
  console.log(`player_id=${player_id}`);
  console.log(`session_id=${session_id}`);
  const sql = 'INSERT INTO items (session_id, player_id, item_name) VALUES (?, ?, ?)';
  db.query(sql, [session_id, player_id, item_name], (err, result) => {
    if (err) return res.status(500).json({error: err, message: 'DB Add Item Error'});
    res.json({result: result, message: `Player ID ${player_id} recieved ${item_name}`});
  });
};

// Get all items
exports.getAllItems = (req, res) => {
  const { session_id } = req.params;
  console.log(`Calling Get All Items | req: ${req}, res: ${res}`)
  console.log(`session_id=${session_id}`);
  db.query('SELECT * FROM items WHERE session_id = ?', [session_id], (err, results) => {
    if (err) return res.status(500).json({error: err, message: 'DB Get All Items Error'});
    res.json({result: results});
  });
};

// Delete items
exports.deleteItem = (req, res) => {
  const { item_id } = req.params;
  console.log(`Calling Delete Item | req: ${req}, res: ${res}`)
  console.log(`item_id=${item_id}`);
  db.query('DELETE FROM items WHERE id = ?', [item_id], (err, results) => {
    if (err) return res.status(500).json({error: err, message: 'DB Delete Item Error'});
    if (results.affectedRows === 0) {return res.status(404).json({ message: `Item ${item_id} not found` });}
    res.json({message: `Deleted Item ${item_id}`});
  });
};