// Create web server application with express.js
const express = require('express');
const app = express();
const port = 3000;

// Set the template engine to use
app.set('view engine', 'pug');
app.set('views', './views');

// Set the static file folder
app.use(express.static('public'));

// Import the data from data.js
const { comments } = require('./data');

// Route for the index page
app.get('/', (req, res) => {
  res.render('index', { title: 'Comments', comments });
});

// Route for the comments page
app.get('/comments', (req, res) => {
  res.render('comments', { title: 'Comments', comments });
});

// Route for the comment page
app.get('/comments/:commentId', (req, res) => {
  const commentId = req.params.commentId;
  const comment = comments.find(c => c.id === commentId);
  res.render('comment', { title: `Comment ${commentId}`, comment });
});

// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));