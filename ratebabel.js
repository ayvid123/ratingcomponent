"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIconsKit = require("react-icons-kit");
var _star = require("react-icons-kit/fa/star");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Rate = function Rate(_ref) {
  var count = _ref.count,
    rating = _ref.rating,
    filled = _ref.filled,
    unfilled = _ref.unfilled,
    onRating = _ref.onRating,
    size = _ref.size,
    icon = _ref.icon;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    hoverRating = _useState2[0],
    setHoverRating = _useState2[1];
  var getColor = function getColor(index) {
    if (hoverRating >= index) {
      return filled;
    } else if (!hoverRating && rating >= index) {
      return filled;
    }
    return unfilled;
  };
  var starRating = (0, _react.useMemo)(function () {
    return Array(count).fill(0).map(function (_, i) {
      return i + 1;
    }).map(function (idx) {
      return /*#__PURE__*/_react["default"].createElement(_reactIconsKit.Icon, {
        key: idx,
        className: "cursor-pointer",
        size: size,
        icon: icon,
        onClick: function onClick() {
          return onRating(idx);
        },
        style: {
          color: getColor(idx)
        },
        onMouseEnter: function onMouseEnter() {
          return setHoverRating(idx);
        },
        onMouseLeave: function onMouseLeave() {
          return setHoverRating(0);
        }
      });
    });
  }, [count, rating, hoverRating]);
  return /*#__PURE__*/_react["default"].createElement("div", null, starRating);
};
Rate.propTypes = {
  count: _propTypes["default"].number,
  rating: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  filled: _propTypes["default"].string,
  unfilled: _propTypes["default"].string,
  size: _propTypes["default"].number,
  icon: _propTypes["default"].element
};
Rate.defaultProps = {
  count: 5,
  rating: 0,
  filled: "#f5eb3b",
  unfilled: "#DCDCDC",
  icon: _star.star,
  size: 20
};
var _default = Rate;
exports["default"] = _default;
