"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = exports.compose = void 0;

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    fns.forEach(function (fn) {
      return fn && fn.apply(void 0, args);
    });
  };
};

exports.compose = compose;

var pick = function pick(obj) {
  for (var _len3 = arguments.length, props = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    props[_key3 - 1] = arguments[_key3];
  }

  return props.reduce(function (newObj, prop) {
    if (obj && obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }

    return newObj;
  }, {});
};

exports.pick = pick;