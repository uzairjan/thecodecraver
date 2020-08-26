"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = require('./../../config/db');

var Articles = db.Articles; // getArticle
// addArticle
// getAll
// clapArticle
// commentArticle

var ArticleController =
/*#__PURE__*/
function () {
  function ArticleController() {
    _classCallCheck(this, ArticleController);
  }

  _createClass(ArticleController, [{
    key: "getArticles",

    /**
     * getAll articles
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    value: function getArticles(req, res, next) {
      return regeneratorRuntime.async(function getArticles$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                Articles.find({}, function (err, articles) {
                  if (!articles) {
                    res.status(400).json({
                      message: 'User not found.'
                    });
                  } else {
                    res.status(200).json({
                      success: true,
                      count: articles.length,
                      data: articles
                    });
                  }
                });
              } catch (error) {
                console.log(error);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
    /**
     * get single article
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "getArticle",
    value: function getArticle(req, res, next) {
      return regeneratorRuntime.async(function getArticle$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                Articles.find({
                  _id: req.params.id
                }, function (err, article) {
                  if (!article) {
                    res.status(400).json({
                      message: 'User not found.'
                    });
                  } else {
                    res.status(200).json({
                      success: true,
                      count: article.length,
                      data: article
                    });
                  }
                });
              } catch (error) {
                console.log(error);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return ArticleController;
}();

module.exports = new ArticleController();