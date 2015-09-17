/*! modernizr 3.0.0-alpha.4 (Custom Build) | MIT *
 * http://modernizr.com/download/#-animation-cssanimations-csspseudoanimations-csspseudotransitions-cssreflections-mutationobserver-nthchild-opacity-overflowscrolling-pointerevents-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixes-testallprops-testprop-teststyles !*/
!function(e, t, n) {
  function r(e) {
    var t = S.className, n = Modernizr._config.classPrefix || "";
    if (w && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2")
    }
    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), w ? S.className.baseVal = t : S.className = t)
  }
  function o(e, t) {
    return typeof e === t
  }
  function i() {
    var e, t, n, r, i, s, a;
    for (var f in C) {
      if (e = [], t = C[f], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
        for (n = 0; n < t.options.aliases.length; n++)
          e.push(t.options.aliases[n].toLowerCase());
      for (r = o(t.fn, "function")?t.fn():t.fn, i = 0; i < e.length; i++)
        s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]]instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), _.push((r ? "" : "no-") + a.join("-"))
    }
  }
  function s(e, t) {
    if ("object" == typeof e)
      for (var n in e)
        P(e, n) && s(n, e[n]);
    else {
      e = e.toLowerCase();
      var o = e.split("."), i = Modernizr[o[0]];
      if (2 == o.length && (i = i[o[1]]), "undefined" != typeof i)
        return Modernizr;
      t = "function" == typeof t ? t() : t, 1 == o.length ? Modernizr[o[0]] = t : (!Modernizr[o[0]] || Modernizr[o[0]]instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = t), r([(t && 0 != t ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, t)
    }
    return Modernizr
  }
  function a() {
    return"function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
  }
  function f(e) {
    return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
      return t + n.toUpperCase()
    }).replace(/^-/, "")
  }
  function u(e) {
    return e.replace(/([A-Z])/g, function(e, t) {
      return"-" + t.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }
  function l() {
    var e = t.body;
    return e || (e = a(w ? "svg" : "body"), e.fake = !0), e
  }
  function d(e, n, r, o) {
    var i, s, f, u, d = "modernizr", c = a("div"), p = l();
    if (parseInt(r, 10))
      for (; r--; )
        f = a("div"), f.id = o ? o[r] : d + (r + 1), c.appendChild(f);
    return i = a("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), s = n(c, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = u, S.offsetHeight) : c.parentNode.removeChild(c), !!s
  }
  function c(t, r) {
    var o = t.length;
    if ("CSS"in e && "supports"in e.CSS) {
      for (; o--; )
        if (e.CSS.supports(u(t[o]), r))
          return!0;
      return!1
    }
    if ("CSSSupportsRule"in e) {
      for (var i = []; o--; )
        i.push("(" + u(t[o]) + ":" + r + ")");
      return i = i.join(" or "), d("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
        return"absolute" == getComputedStyle(e, null).position
      })
    }
    return n
  }
  function p(e, t) {
    return!!~("" + e).indexOf(t)
  }
  function m(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  }
  function v(e, t, n) {
    var r;
    for (var i in e)
      if (e[i]in t)
        return n === !1 ? e[i] : (r = t[e[i]], o(r, "function") ? m(r, n || t) : r);
    return!1
  }
  function g(e, t, r, i) {
    function s() {
      l && (delete L.style, delete L.modElem)
    }
    if (i = o(i, "undefined") ? !1 : i, !o(r, "undefined")) {
      var u = c(e, r);
      if (!o(u, "undefined"))
        return u
    }
    for (var l, d, m, v, g, h = ["modernizr", "tspan"]; !L.style; )
      l = !0, L.modElem = a(h.shift()), L.style = L.modElem.style;
    for (m = e.length, d = 0; m > d; d++)
      if (v = e[d], g = L.style[v], p(v, "-") && (v = f(v)), L.style[v] !== n) {
        if (i || o(r, "undefined"))
          return s(), "pfx" == t ? v : !0;
        try {
          L.style[v] = r
        } catch (y) {
        }
        if (L.style[v] != g)
          return s(), "pfx" == t ? v : !0
      }
    return s(), !1
  }
  function h(e, t, n, r, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + E.join(s + " ") + s).split(" ");
    return o(t, "string") || o(t, "undefined") ? g(a, t, r, i) : (a = (e + " " + T.join(s + " ") + s).split(" "), v(a, t, n))
  }
  function y(e, t, r) {
    return h(e, n, n, t, r)
  }
  var _ = [], C = [], x = {_version: "3.0.0-alpha.4", _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0}, _q: [], on: function(e, t) {
      var n = this;
      setTimeout(function() {
        t(n[e])
      }, 0)
    }, addTest: function(e, t, n) {
      C.push({name: e, fn: t, options: n})
    }, addAsyncTest: function(e) {
      C.push({name: null, fn: e})
    }}, Modernizr = function() {
  };
  Modernizr.prototype = x, Modernizr = new Modernizr, Modernizr.addTest("mutationobserver", !!e.MutationObserver || !!e.WebKitMutationObserver);
  var b = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
  x._prefixes = b;
  var S = t.documentElement, w = "svg" === S.nodeName.toLowerCase(), z = "Moz O ms Webkit", T = x._config.usePrefixes ? z.toLowerCase().split(" ") : [];
  x._domPrefixes = T;
  var P;
  !function() {
    var e = {}.hasOwnProperty;
    P = o(e, "undefined") || o(e.call, "undefined") ? function(e, t) {
      return t in e && o(e.constructor.prototype[t], "undefined")
    } : function(t, n) {
      return e.call(t, n)
    }
  }(), x._l = {}, x.on = function(e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
      Modernizr._trigger(e, Modernizr[e])
    }, 0)
  }, x._trigger = function(e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function() {
        var e, r;
        for (e = 0; e < n.length; e++)
          (r = n[e])(t)
      }, 0), delete this._l[e]
    }
  }, Modernizr._q.push(function() {
    x.addTest = s
  });
  var E = x._config.usePrefixes ? z.split(" ") : [];
  x._cssomPrefixes = E;
  var j = function(t) {
    var r, o = b.length, i = e.CSSRule;
    if ("undefined" == typeof i)
      return n;
    if (!t)
      return!1;
    if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i)
      return"@" + t;
    for (var s = 0; o > s; s++) {
      var a = b[s], f = a.toUpperCase() + "_" + r;
      if (f in i)
        return"@-" + a.toLowerCase() + "-" + t
    }
    return!1
  };
  x.atRule = j;
  var N = function(e) {
    function n(t, n) {
      var o;
      return t ? (n && "string" != typeof n || (n = a(n || "div")), t = "on" + t, o = t in n, !o && r && (n.setAttribute || (n = a("div")), n.setAttribute(t, ""), o = "function" == typeof n[t], n[t] !== e && (n[t] = e), n.removeAttribute(t)), o) : !1
    }
    var r = !("onblur"in t.documentElement);
    return n
  }();
  x.hasEvent = N, Modernizr.addTest("pointerevents", function() {
    var e = !1, t = T.length;
    for (e = Modernizr.hasEvent("pointerdown"); t-- && !e; )
      N(T[t] + "pointerdown") && (e = !0);
    return e
  }), Modernizr.addTest("webanimations", "animate"in a("div")), Modernizr.addTest("opacity", function() {
    var e = a("a").style;
    return e.cssText = b.join("opacity:.55;"), /^0.55$/.test(e.opacity)
  });
  var A = function() {
    var t = e.matchMedia || e.msMatchMedia;
    return t ? function(e) {
      var n = t(e);
      return n && n.matches || !1
    } : function(t) {
      var n = !1;
      return d("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
      }), n
    }
  }();
  x.mq = A;
  var O = x.testStyles = d;
  O("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function(e) {
    Modernizr.addTest("nthchild", function() {
      for (var t = e.getElementsByTagName("div"), n = !0, r = 0; 5 > r; r++)
        n = n && t[r].offsetWidth === r % 2 + 1;
      return n
    })
  }, 5);
  var k = {elem: a("modernizr")};
  Modernizr._q.push(function() {
    delete k.elem
  });
  var L = {style: k.elem.style};
  Modernizr._q.unshift(function() {
    delete L.style
  });
  x.testProp = function(e, t, r) {
    return g([e], n, t, r)
  };
  x.testAllProps = h;
  var q = x.prefixed = function(e, t, n) {
    return 0 === e.indexOf("@") ? j(e) : (-1 != e.indexOf("-") && (e = f(e)), t ? h(e, t, n) : h(e, "pfx"))
  };
  x.prefixedCSS = function(e) {
    var t = q(e);
    return t && u(t)
  };
  x.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("csspseudoanimations", function() {
    var t = !1;
    if (!Modernizr.cssanimations || !e.getComputedStyle)
      return t;
    var n = ["@", Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/, ""), '#modernizr:before { content:" "; font-size:5px;', Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"), "}"].join("");
    return Modernizr.testStyles(n, function(n) {
      t = "10px" === e.getComputedStyle(n, ":before").getPropertyValue("font-size")
    }), t
  }), Modernizr.addTest("overflowscrolling", y("overflowScrolling", "touch", !0)), Modernizr.addTest("cssreflections", y("boxReflect", "above", !0)), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("csspseudotransitions", function() {
    var t = !1;
    if (!Modernizr.csstransitions || !e.getComputedStyle)
      return t;
    var n = '#modernizr:before { content:" "; font-size:5px;' + Modernizr._prefixes.join("transition:0s 100s;") + "}#modernizr.trigger:before { font-size:10px; }";
    return Modernizr.testStyles(n, function(n) {
      e.getComputedStyle(n, ":before").getPropertyValue("font-size"), n.className += "trigger", t = "5px" === e.getComputedStyle(n, ":before").getPropertyValue("font-size")
    }), t
  }), i(), r(_), delete x.addTest, delete x.addAsyncTest;
  for (var M = 0; M < Modernizr._q.length; M++)
    Modernizr._q[M]();
  e.Modernizr = Modernizr
}(window, document);