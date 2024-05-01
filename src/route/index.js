const express = require('express');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');

const router = express.Router();
router.use(cookieParser());

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/addBook', (req, res) => {
  res.render('addbook');
});

router.get('/book/:id', async (req, res) => {
  const id = req.params.id;
  const response = await fetch(`https://bookshelf-s8jz.onrender.com/api/book/${id}`);
  const data = await response.json();
  const bookData = data.body.bookData;

  res.render('book', { bookData: bookData });
});

router.get('/addedbook/:id', async (req, res) => {
  const id = req.params.id;
  const response = await fetch(`https://bookshelf-s8jz.onrender.com/api/addedBook/${id}`);
  const data = await response.json();
  
  res.render('addedBook', { bookData: data[0] });
});

router.get('/bookshelf/', async (req, res) => {
  const response = await fetch(`https://bookshelf-s8jz.onrender.com/api/book/`);
  const data = await response.json();
  console.log(data)
  res.render('bookshelf', {books: data})
})



module.exports = router;
