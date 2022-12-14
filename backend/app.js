const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'ok' });
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
