"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _types = require("./../actions/types");

var initialState = {};

function getArticles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _types.GET_ARTICLES) {
    return action.payload;
  } else {
    return state;
  }
}

function getArticle() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _types.GET_ARTICLE) {
    return action.payload;
  } else {
    return state;
  }
}

var rootReducer = (0, _redux.combineReducers)({
  getArticle: getArticle,
  getArticles: getArticles
});
var _default = rootReducer; // export default function(state)

exports["default"] = _default;