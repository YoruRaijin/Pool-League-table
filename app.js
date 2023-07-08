const express = require('express');
const app = express();

app.use(express.static('public', { maxAge: 0 }));

app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/scoring', (req, res) => {
  res.render('scoring');
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
