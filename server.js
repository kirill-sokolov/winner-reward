let port = process.env.PORT || process.argv[2] || 4080;
const express = require('express');
const app = express();
app.use(express.static('./dist/winner-reward'));
app.get('/*',  (req, res) => {
  res.sendFile('index.html', {root: 'dist/winner-reward/'});
});
app.listen(port);
console.log('working on ' + port);
