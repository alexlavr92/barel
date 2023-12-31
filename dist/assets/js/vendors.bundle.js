/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vendor/modernizr/modernizr.min.js":
/*!**************************************************!*\
  !*** ./src/js/vendor/modernizr/modernizr.min.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-boxshadow-csstransforms3d-csstransitions-history-svg-video-domprefixes-mq-prefixed-prefixes-setclasses-shiv-testallprops-teststyles !*/
!function (e, t, n) {
  function r(e, t) {
    return _typeof(e) === t;
  }
  function o() {
    var e, t, n, o, a, i, s;
    for (var l in C) if (C.hasOwnProperty(l)) {
      if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
      for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), S.push((o ? "" : "no-") + s.join("-"));
    }
  }
  function a(e) {
    var t = E.className,
      n = Modernizr._config.classPrefix || "";
    if (w && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), w ? E.className.baseVal = t : E.className = t);
  }
  function i(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }
  function s() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }
  function l() {
    var e = t.body;
    return e || (e = s(w ? "svg" : "body"), e.fake = !0), e;
  }
  function c(e, n, r, o) {
    var a,
      i,
      c,
      u,
      f = "modernizr",
      d = s("div"),
      p = l();
    if (parseInt(r, 10)) for (; r--;) c = s("div"), c.id = o ? o[r] : f + (r + 1), d.appendChild(c);
    return a = s("style"), a.type = "text/css", a.id = "s" + f, (p.fake ? p : d).appendChild(a), p.appendChild(d), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), i = n(d, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = u, E.offsetHeight) : d.parentNode.removeChild(d), !!i;
  }
  function u(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function f(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function d(e, t, n) {
    var o;
    for (var a in e) if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? f(o, n || t) : o);
    return !1;
  }
  function p(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }
  function m(t, n, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var a = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (a) {
        var i = a.error ? "error" : "log";
        a[i].call(a, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o;
  }
  function h(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) if (e.CSS.supports(p(t[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var a = []; o--;) a.push("(" + p(t[o]) + ":" + r + ")");
      return a = a.join(" or "), c("@supports (" + a + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == m(e, null, "position");
      });
    }
    return n;
  }
  function v(e, t, o, a) {
    function l() {
      f && (delete F.style, delete F.modElem);
    }
    if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) {
      var c = h(e, o);
      if (!r(c, "undefined")) return c;
    }
    for (var f, d, p, m, v, g = ["modernizr", "tspan", "samp"]; !F.style && g.length;) f = !0, F.modElem = s(g.shift()), F.style = F.modElem.style;
    for (p = e.length, d = 0; p > d; d++) if (m = e[d], v = F.style[m], u(m, "-") && (m = i(m)), F.style[m] !== n) {
      if (a || r(o, "undefined")) return l(), "pfx" == t ? m : !0;
      try {
        F.style[m] = o;
      } catch (y) {}
      if (F.style[m] != v) return l(), "pfx" == t ? m : !0;
    }
    return l(), !1;
  }
  function g(e, t, n, o, a) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + z.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined") ? v(s, t, o, a) : (s = (e + " " + _.join(i + " ") + i).split(" "), d(s, t, n));
  }
  function y(e, t, r) {
    return g(e, n, n, t, r);
  }
  var S = [],
    C = [],
    x = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function on(e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function addTest(e, t, n) {
        C.push({
          name: e,
          fn: t,
          options: n
        });
      },
      addAsyncTest: function addAsyncTest(e) {
        C.push({
          name: null,
          fn: e
        });
      }
    },
    Modernizr = function Modernizr() {};
  Modernizr.prototype = x, Modernizr = new Modernizr(), Modernizr.addTest("history", function () {
    var t = navigator.userAgent;
    return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1;
  }), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var b = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  x._prefixes = b;
  var E = t.documentElement,
    w = "svg" === E.nodeName.toLowerCase();
  w || !function (e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
        r = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
    }
    function r() {
      var e = S.elements;
      return "string" == typeof e ? e.split(" ") : e;
    }
    function o(e, t) {
      var n = S.elements;
      "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), S.elements = n + " " + e, c(t);
    }
    function a(e) {
      var t = y[e[v]];
      return t || (t = {}, g++, e[v] = g, y[g] = t), t;
    }
    function i(e, n, r) {
      if (n || (n = t), f) return n.createElement(e);
      r || (r = a(n));
      var o;
      return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o);
    }
    function s(e, n) {
      if (e || (e = t), f) return e.createDocumentFragment();
      n = n || a(e);
      for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) o.createElement(s[i]);
      return o;
    }
    function l(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return S.shivMethods ? i(n, e, t) : t.createElem(n);
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
      }) + ");return n}")(S, t.frag);
    }
    function c(e) {
      e || (e = t);
      var r = a(e);
      return !S.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e;
    }
    var u,
      f,
      d = "3.7.3",
      p = e.html5 || {},
      m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      v = "_html5shiv",
      g = 0,
      y = {};
    !function () {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, f = 1 == e.childNodes.length || function () {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement;
        }();
      } catch (n) {
        u = !0, f = !0;
      }
    }();
    var S = {
      elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
      version: d,
      shivCSS: p.shivCSS !== !1,
      supportsUnknownElements: f,
      shivMethods: p.shivMethods !== !1,
      type: "default",
      shivDocument: c,
      createElement: i,
      createDocumentFragment: s,
      addElements: o
    };
    e.html5 = S, c(t), "object" == ( false ? 0 : _typeof(module)) && module.exports && (module.exports = S);
  }("undefined" != typeof e ? e : this, t);
  var T = "Moz O ms Webkit",
    _ = x._config.usePrefixes ? T.toLowerCase().split(" ") : [];
  x._domPrefixes = _, Modernizr.addTest("video", function () {
    var e = s("video"),
      t = !1;
    try {
      t = !!e.canPlayType, t && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""));
    } catch (n) {}
    return t;
  });
  var P = "CSS" in e && "supports" in e.CSS,
    N = ("supportsCSS" in e);
  Modernizr.addTest("supports", P || N);
  var k = function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t ? function (e) {
      var n = t(e);
      return n && n.matches || !1;
    } : function (t) {
      var n = !1;
      return c("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
      }), n;
    };
  }();
  x.mq = k;
  var z = (x.testStyles = c, x._config.usePrefixes ? T.split(" ") : []);
  x._cssomPrefixes = z;
  var j = function j(t) {
    var r,
      o = b.length,
      a = e.CSSRule;
    if ("undefined" == typeof a) return n;
    if (!t) return !1;
    if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in a) return "@" + t;
    for (var i = 0; o > i; i++) {
      var s = b[i],
        l = s.toUpperCase() + "_" + r;
      if (l in a) return "@-" + s.toLowerCase() + "-" + t;
    }
    return !1;
  };
  x.atRule = j;
  var M = {
    elem: s("modernizr")
  };
  Modernizr._q.push(function () {
    delete M.elem;
  });
  var F = {
    style: M.elem.style
  };
  Modernizr._q.unshift(function () {
    delete F.style;
  }), x.testAllProps = g;
  x.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@") ? j(e) : (-1 != e.indexOf("-") && (e = i(e)), t ? g(e, t, n) : g(e, "pfx"));
  };
  x.testAllProps = y, Modernizr.addTest("boxshadow", y("boxShadow", "1px 1px", !0)), Modernizr.addTest("csstransforms3d", function () {
    return !!y("perspective", "1px", !0);
  }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("backgroundcliptext", function () {
    return y("backgroundClip", "text");
  }), o(), a(S), delete x.addTest, delete x.addAsyncTest;
  for (var O = 0; O < Modernizr._q.length; O++) Modernizr._q[O]();
  e.Modernizr = Modernizr;
}(window, document);

/***/ }),

/***/ "./src/js/vendor/plugins/current-device/device.js":
/*!********************************************************!*\
  !*** ./src/js/vendor/plugins/current-device/device.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * current-device v0.9.1 - https://github.com/matthewhudson/current-device
 * MIT Licensed
 */
!function (n, o) {
  "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = o() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (o),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(window, function () {
  return function (n) {
    var o = {};
    function e(t) {
      if (o[t]) return o[t].exports;
      var r = o[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return n[t].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }
    return e.m = n, e.c = o, e.d = function (n, o, t) {
      e.o(n, o) || Object.defineProperty(n, o, {
        enumerable: !0,
        get: t
      });
    }, e.r = function (n) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(n, "__esModule", {
        value: !0
      });
    }, e.t = function (n, o) {
      if (1 & o && (n = e(n)), 8 & o) return n;
      if (4 & o && "object" == _typeof(n) && n && n.__esModule) return n;
      var t = Object.create(null);
      if (e.r(t), Object.defineProperty(t, "default", {
        enumerable: !0,
        value: n
      }), 2 & o && "string" != typeof n) for (var r in n) e.d(t, r, function (o) {
        return n[o];
      }.bind(null, r));
      return t;
    }, e.n = function (n) {
      var o = n && n.__esModule ? function () {
        return n["default"];
      } : function () {
        return n;
      };
      return e.d(o, "a", o), o;
    }, e.o = function (n, o) {
      return Object.prototype.hasOwnProperty.call(n, o);
    }, e.p = "", e(e.s = 0);
  }([function (n, o, e) {
    n.exports = e(1);
  }, function (n, o, e) {
    "use strict";

    e.r(o);
    var t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (n) {
        return _typeof(n);
      } : function (n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : _typeof(n);
      },
      r = window.device,
      i = {},
      a = [];
    window.device = i;
    var c = window.document.documentElement,
      d = window.navigator.userAgent.toLowerCase(),
      u = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "pov_tv", "hbbtv", "ce-html"];
    function l(n, o) {
      return -1 !== n.indexOf(o);
    }
    function s(n) {
      return l(d, n);
    }
    function f(n) {
      return c.className.match(new RegExp(n, "i"));
    }
    function b(n) {
      var o = null;
      f(n) || (o = c.className.replace(/^\s+|\s+$/g, ""), c.className = o + " " + n);
    }
    function p(n) {
      f(n) && (c.className = c.className.replace(" " + n, ""));
    }
    function w() {
      i.landscape() ? (p("portrait"), b("landscape"), y("landscape")) : (p("landscape"), b("portrait"), y("portrait")), v();
    }
    function y(n) {
      for (var o in a) a[o](n);
    }
    i.macos = function () {
      return s("mac");
    }, i.ios = function () {
      return i.iphone() || i.ipod() || i.ipad();
    }, i.iphone = function () {
      return !i.windows() && s("iphone");
    }, i.ipod = function () {
      return s("ipod");
    }, i.ipad = function () {
      var n = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
      return s("ipad") || n;
    }, i.android = function () {
      return !i.windows() && s("android");
    }, i.androidPhone = function () {
      return i.android() && s("mobile");
    }, i.androidTablet = function () {
      return i.android() && !s("mobile");
    }, i.blackberry = function () {
      return s("blackberry") || s("bb10") || s("rim");
    }, i.blackberryPhone = function () {
      return i.blackberry() && !s("tablet");
    }, i.blackberryTablet = function () {
      return i.blackberry() && s("tablet");
    }, i.windows = function () {
      return s("windows");
    }, i.windowsPhone = function () {
      return i.windows() && s("phone");
    }, i.windowsTablet = function () {
      return i.windows() && s("touch") && !i.windowsPhone();
    }, i.fxos = function () {
      return (s("(mobile") || s("(tablet")) && s(" rv:");
    }, i.fxosPhone = function () {
      return i.fxos() && s("mobile");
    }, i.fxosTablet = function () {
      return i.fxos() && s("tablet");
    }, i.meego = function () {
      return s("meego");
    }, i.cordova = function () {
      return window.cordova && "file:" === location.protocol;
    }, i.nodeWebkit = function () {
      return "object" === t(window.process);
    }, i.mobile = function () {
      return i.androidPhone() || i.iphone() || i.ipod() || i.windowsPhone() || i.blackberryPhone() || i.fxosPhone() || i.meego();
    }, i.tablet = function () {
      return i.ipad() || i.androidTablet() || i.blackberryTablet() || i.windowsTablet() || i.fxosTablet();
    }, i.desktop = function () {
      return !i.tablet() && !i.mobile();
    }, i.television = function () {
      for (var n = 0; n < u.length;) {
        if (s(u[n])) return !0;
        n++;
      }
      return !1;
    }, i.portrait = function () {
      return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? l(screen.orientation.type, "portrait") : i.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ? 90 !== Math.abs(window.orientation) : window.innerHeight / window.innerWidth > 1;
    }, i.landscape = function () {
      return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? l(screen.orientation.type, "landscape") : i.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ? 90 === Math.abs(window.orientation) : window.innerHeight / window.innerWidth < 1;
    }, i.noConflict = function () {
      return window.device = r, this;
    }, i.ios() ? i.ipad() ? b("ios ipad tablet") : i.iphone() ? b("ios iphone mobile") : i.ipod() && b("ios ipod mobile") : i.macos() ? b("macos desktop") : i.android() ? i.androidTablet() ? b("android tablet") : b("android mobile") : i.blackberry() ? i.blackberryTablet() ? b("blackberry tablet") : b("blackberry mobile") : i.windows() ? i.windowsTablet() ? b("windows tablet") : i.windowsPhone() ? b("windows mobile") : b("windows desktop") : i.fxos() ? i.fxosTablet() ? b("fxos tablet") : b("fxos mobile") : i.meego() ? b("meego mobile") : i.nodeWebkit() ? b("node-webkit") : i.television() ? b("television") : i.desktop() && b("desktop"), i.cordova() && b("cordova"), i.onChangeOrientation = function (n) {
      "function" == typeof n && a.push(n);
    };
    var m = "resize";
    function h(n) {
      for (var o = 0; o < n.length; o++) if (i[n[o]]()) return n[o];
      return "unknown";
    }
    function v() {
      i.orientation = h(["portrait", "landscape"]);
    }
    Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (m = "orientationchange"), window.addEventListener ? window.addEventListener(m, w, !1) : window.attachEvent ? window.attachEvent(m, w) : window[m] = w, w(), i.type = h(["mobile", "tablet", "desktop"]), i.os = h(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "macos", "windows", "fxos", "meego", "television"]), v(), o["default"] = i;
  }])["default"];
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/js/vendors.js ***!
  \***************************/


__webpack_require__(/*! ./vendor/modernizr/modernizr.min.js */ "./src/js/vendor/modernizr/modernizr.min.js");
__webpack_require__(/*! ./vendor/plugins/current-device/device.js */ "./src/js/vendor/plugins/current-device/device.js");
})();

/******/ })()
;
//# sourceMappingURL=vendors.bundle.js.map