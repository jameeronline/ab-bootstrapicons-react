"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgBadge8K = function SvgBadge8K(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "badge-8k_svg__bi badge-8k_svg__bi-badge-8k",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4.837 11.114c1.406 0 2.333-.725 2.333-1.766 0-.945-.712-1.38-1.256-1.49v-.053c.496-.15 1.02-.55 1.02-1.331 0-.914-.831-1.587-2.084-1.587-1.257 0-2.087.673-2.087 1.587 0 .773.51 1.177 1.02 1.331v.053c-.546.11-1.258.54-1.258 1.494 0 1.042.906 1.762 2.312 1.762m.013-3.643c-.545 0-.95-.356-.95-.866s.405-.852.95-.852.945.343.945.852c0 .51-.4.866-.945.866m0 2.786c-.65 0-1.142-.395-1.142-.984S4.2 8.28 4.85 8.28c.646 0 1.143.404 1.143.993s-.497.984-1.143.984M13.408 5h-1.306L9.835 7.685h-.057V5H8.59v5.998h1.187V9.075l.615-.699 1.679 2.623H13.5l-2.232-3.414z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
  }));
};
var _default = exports["default"] = SvgBadge8K;