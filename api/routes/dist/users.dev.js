"use strict";

var express = require('express');

var router = express.Router();

var ArticleController = require('./../controllers/user/ArticleController');
/* GET users listing. */


router.get('/articles', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.get('/jwt', function (req, res) {
  res.send('hello wolrd');
});
module.exports = router;