var express = require('express');
var router = express.Router();
const ArticleController = require('./../controllers/user/ArticleController');

/* GET users listing. */
router.get('/articles', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);

module.exports = router;
