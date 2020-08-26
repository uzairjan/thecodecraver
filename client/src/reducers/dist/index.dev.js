"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _types = require("./../actions/types");

var initialState = {};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.GET_ARTICLE:
      var data = action.payload;
      return data;

    case _types.GET_ARTICLES:
      return action.payload;

    default:
      return state;
  }
} // export default function(state)