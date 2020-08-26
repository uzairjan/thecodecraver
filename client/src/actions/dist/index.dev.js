"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticles = exports.article = exports.articles = exports.getArticle = void 0;

var _types = require("./types");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Set logged in user
var getArticle = function getArticle(data) {
  var action = {
    type: _types.GET_ARTICLE,
    payload: data
  };
  return action;
};

exports.getArticle = getArticle;

var articles = function articles() {
  return function (dispatch) {
    _axios["default"].get('users/articles').then(function (res) {
      console.log(res);
      dispatch(getArticles(res.data));
    });
  };
};

exports.articles = articles;

var article = function article(id) {
  return function (dispatch) {
    _axios["default"].get('http://localhost:8000/users/article/' + id).then(function (res) {
      dispatch(getArticle(res.data));
      console.log('single article:', res);
    });
  };
};

exports.article = article;

var getArticles = function getArticles(data) {
  return {
    type: _types.GET_ARTICLES,
    payload: data
  };
};

exports.getArticles = getArticles;