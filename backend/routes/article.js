const express = require('express');
const router = express.Router();
const Article = require('../models/Articles')

//   article/newArticle
router.post('/newArticle', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
