window.Q = function (t, i, n) {
    "use strict";

    function e(t, i, n) {
        if (t[eh]()) {
            var s = t._ff || t.getChildren();
            if (s) {
                s = s._jd || s;
                for (var r = 0, h = s[sh]; h > r; r++) if (i[rh](n, s[r]) === !1 || e(s[r], i, n) === !1) return !1;
                return !0
            }
        }
    }

    function s(t) {
        if (!t.hasChildren()) return t instanceof nq ? t : null;
        for (var i, n = t._ff._jd, e = n.length - 1; e >= 0;) {
            if (i = n[e], i = s(i)) return i;
            e--
        }
        return null
    }

    function r(t, i, n, e) {
        return e ? h(t, i, n) : a(t, i, n)
    }

    function h(t, i, n) {
        t = t._jd || t;
        for (var e, s = 0, r = t[sh]; r > s; s++) if (e = t[s], e[eh]() && !h(e.children, i, n) || i[rh](n, e) === !1) return !1;
        return !0
    }

    function a(t, i, n) {
        t = t._jd || t;
        for (var e, s = 0, r = t.length; r > s; s++) if (e = t[s], i[rh](n, e) === !1 || e.hasChildren() && !a(e[hh], i, n)) return !1;
        return !0
    }

    function o(t, i, n, e) {
        return e ? f(t, i, n) : u(t, i, n)
    }

    function f(t, i, n) {
        t = t._jd || t;
        for (var e, s = t[sh], r = s - 1; r >= 0; r--) if (e = t[r], e[eh]() && !f(e.children, i, n) || i[rh](n, e) === !1) return !1;
        return !0
    }

    function u(t, i, n) {
        t = t._jd || t;
        for (var e, s = t[sh], r = s - 1; r >= 0; r--) if (e = t[r], i.call(n, e) === !1 || e[eh]() && !u(e.children, i, n)) return !1;
        return !0
    }

    function c(t, i, n) {
        for (var e, s = (t._jd || t)[ah](0); s[sh];) {
            e = s[0], s = s[oh](1);
            var r = i[rh](n, e);
            if (r === !1) return !1;
            if (e[eh]()) {
                var h = e.children;
                h = h._jd || h, s = s[fh](h)
            }
        }
        return !0
    }

    function _(t, i, n) {
        for (var e, s = (t._jd || t)[ah](0); s[sh];) {
            e = s[s.length - 1], s = s[oh](0, s[sh] - 1);
            var r = i[rh](n, e);
            if (r === !1) return !1;
            if (e.hasChildren()) {
                var h = e[hh];
                h = h._jd || h, s = s[fh](h)
            }
        }
        return !0
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t[sh], s = n.length, r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }

        function e(t) {
            var i = t[sh], s = Math[uh](i / 2);
            return 1 >= i ? t : n(e(t[ah](0, s)), e(t.slice(s)))
        }

        return e(t)
    }

    function l(t, i, n, e) {
        t instanceof DH && (t = t._jd);
        for (var s = 0, r = (t._jd || t)[sh]; r > s; s++) {
            var h = i[rh](n, t[s], s, e);
            if (h === !1) return !1
        }
        return !0
    }

    function v(t, i, n) {
        for (var e = t instanceof DH, s = t._jd || t, r = 0, h = s[sh]; h > r; r++) {
            var a = s[r];
            i.call(n, a) && (e ? t.remove(a) : t[oh](r, 1), r--, h--)
        }
    }

    function b(t, i, n, e) {
        t instanceof DH && (t = t._jd);
        for (var s = (t._jd || t)[sh] - 1; s >= 0; s--) {
            var r = i[rh](n, t[s], s, e);
            if (r === !1) return !1
        }
        return !0
    }

    function y(t) {
        if (t.clone instanceof Function) return t[ch](!0);
        var i, n = [];
        return l(t, function (t) {
            i = t && t[ch] instanceof Function ? t[ch]() : t, n[_h](i)
        }, this), n
    }

    function g(t, i, e) {
        e === n || 0 > e ? t[_h](i) : t.splice(e, 0, i)
    }

    function x(t, i) {
        var n = t[dh](i);
        return 0 > n || n >= t.length ? !1 : t[oh](n, 1)
    }

    function m(t, i) {
        var n = !1;
        return l(t, function (t) {
            return i == t ? (n = !0, !1) : void 0
        }), n
    }

    function p(t, i) {
        var n = t;
        for (var e in i) if (i.__lookupGetter__) {
            var s = i.__lookupGetter__(e), r = i.__lookupSetter__(e);
            s || r ? (s && n.__defineGetter__(e, s), r && n.__defineSetter__(e, r)) : n[e] = i[e]
        } else n[e] = i[e];
        return n
    }

    function E(t, i, n) {
        if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
        var e = null;
        lh == typeof i && (e = i, i = t, t = function () {
            i.apply(this, arguments)
        });
        var s = t[vh], r = function () {
        };
        return r[vh] = i.prototype, t[vh] = new r, t[bh] = i[vh], t[bh].constructor = i, p(t[vh], s), e && p(t[vh], e), n && p(t.prototype, n), t.prototype.class = t, t
    }

    function w(t, i, n) {
        return T(t, i, "constructor", n)
    }

    function T(t, i, n, e) {
        var s = i[bh];
        if (s) {
            var r = s[n];
            return r ? r[yh](t, e) : void 0
        }
    }

    function k(t, i, n, e) {
        if ("constructor" == n) return O(t, i, e);
        if (i.super_ instanceof Function) {
            var s = i.super_[vh][n];
            return s instanceof Function ? s[yh](t, e) : void 0
        }
    }

    function O(t, i, n) {
        return i[gh] instanceof Function ? i[gh][yh](t, n) : void 0
    }

    function S(t, i) {
        return t[gh] = i, t.prototype = Object.create(i[vh], {
            super_: {value: i, enumerable: !1},
            constructor: {value: t, enumerable: !1}
        }), t
    }

    function A(t, i, n) {
        if (!(t instanceof Function) && t instanceof Object) {
            i = t[xh];
            var e;
            return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ? function () {
                i[yh](this, arguments)
            } : function () {
            }, A(e, i, t)
        }
        if (i && !(i instanceof Function) && i instanceof Object) return A(t, i[xh], i);
        if (i && S(t, i), n) {
            var s = t[vh];
            for (var r in n) s[r] = n[r]
        }
        return t
    }

    function M(t, i, e, s, r) {
        if (s) return void Object[mh](t, i, {value: e, enumerable: !0});
        var h = {configurable: !0, enumerable: !0}, a = ph + i;
        e !== n && (t[a] = e), h.get = function () {
            return this[a]
        }, h.set = function (t) {
            var n = this[a];
            if (n == t) return !1;
            var e = new iY(this, i, t, n);
            return this[Eh](e) ? (this[a] = t, r && r.call(this, t, n), this[wh](e), !0) : !1
        }, Object[mh](t, i, h)
    }

    function I(t, i) {
        for (var n = 0, e = i[sh]; e > n; n++) {
            var s = i[n];
            M(t, s[Th] || s, s.defaultValue || s[kh], s.readOnly, s[Oh])
        }
    }

    function L(t, i, n) {
        return i instanceof Object ? t = t.bind(i) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
    }

    function P(i, n) {
        return n && (i = i[Sh](n)), t[Ah](i)
    }

    function C(t, i) {
        return t[Mh] = i, t
    }

    function j(t, i) {
        if (!t.hasOwnProperty(Ih)) {
            var n = t[Lh](Ph);
            if (!n) return C(t, i);
            for (var e = n[Ch](jh), s = 0, r = e[sh]; r > s; s++) if (e[s] == i) return;
            return n += jh + i, C(t, n)
        }
        t[Ih].add(i)
    }

    function R(t, i) {
        if (!t.hasOwnProperty(Ih)) {
            var n = t[Lh](Ph);
            if (!n || !n[dh](i)) return;
            for (var e = "", s = n.split(jh), r = 0, h = s.length; h > r; r++) s[r] != i && (e += s[r] + jh);
            return C(t, e)
        }
        t[Ih][Rh](i)
    }

    function D(t) {
        return !isNaN(t) && t instanceof Number || Dh == typeof t
    }

    function N(t) {
        return t !== n && (t instanceof String || Nh == typeof t)
    }

    function B(t) {
        return t !== n && (t instanceof Boolean || Bh == typeof t)
    }

    function $(t) {
        return Array.isArray(t)
    }

    function F(i) {
        i || (i = t.event), i[$h] ? i[$h]() : i[Fh] = !1
    }

    function G(i) {
        i || (i = t[Gh]), i[zh] ? i[zh]() : i[Hh] || (i[Hh] = !0)
    }

    function z(t) {
        F(t), G(t)
    }

    function H(t) {
        return Math[Yh](Math[Uh]() * t)
    }

    function Y() {
        return Math[Uh]() >= .5
    }

    function U(t) {
        var i = !0;
        for (var n in t) {
            i = !1;
            break
        }
        return i
    }

    function W(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math[Yh](16777215 * Math.random());
            return Wh + (i >> 16 & 255) + qh + (i >> 8 & 255) + qh + (255 & i) + qh + t[Vh](2) + Xh
        }
        return X(Math[Yh](16777215 * Math[Uh]()))
    }

    function q(t) {
        return t > 0 ? Math[Yh](t) : Math.ceil(t)
    }

    function V(t) {
        return t > 0 ? Math[uh](t) : Math[Yh](t)
    }

    function X(t) {
        return 16777216 > t ? Kh + (Jh + t.toString(16)).slice(-6) : Wh + (t >> 16 & 255) + qh + (t >> 8 & 255) + qh + (255 & t) + qh + ((t >> 24 & 255) / 255).toFixed(2) + Xh
    }

    function K(t, i, n) {
        lh != typeof n || n.hasOwnProperty(Zh) || (n[Zh] = !0), Object[mh](t, i, n)
    }

    function J(t, i) {
        for (var n in i) if (Qh != n[0]) {
            var e = i[n];
            lh != typeof e || e.hasOwnProperty(Zh) || (e[Zh] = !0)
        }
        Object.defineProperties(t, i)
    }

    function Z(i, n) {
        n || (n = t);
        for (var e = i[Ch](ta), s = 0, r = e[sh]; r > s; s++) {
            var h = e[s];
            n = n[h]
        }
        return n
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t[ia] !== n
    }

    function ti() {
        t[na] && console.log.apply(console, arguments)
    }

    function ii(i) {
        t.console && console[ea](i)
    }

    function ni(i) {
        t[na] && console.error(i)
    }

    function ei(t, i, n) {
        var e, s, r;
        0 == t._nb ? (e = -1, r = 0, s = i) : 0 == t._n8 ? (e = 0, r = 1, s = n) : (e = -1 / t._nb, s = (t._nb - e) * i + t._n9, r = 1);
        var h = new GH;
        return h._nb = e, h._n9 = s, h._n8 = r, h._n7 = i, h._n3 = n, h._l3 = Math.atan2(e, r), h[sa] = Math.cos(h._l3), h[ra] = Math.sin(h._l3), h
    }

    function si(t, i, n, e, s) {
        var r, h;
        i > e ? r = -1 : e > i && (r = 1), n > s ? h = -1 : s > n && (h = 1);
        var a, o;
        if (!r) return o = 0 > h ? t.y : t[ha], {x: i, y: o};
        if (!h) return a = 0 > r ? t.x : t.right, {x: a, y: n};
        var f = (n - s) / (i - e), u = n - f * i, c = 0 > r ? i - t.x : i - t[aa], _ = 0 > h ? n - t.y : n - t[ha];
        return Math.abs(f) >= Math.abs(_ / c) ? (o = 0 > h ? t.y : t[ha], a = (o - u) / f) : (a = 0 > r ? t.x : t[aa], o = f * a + u), {
            x: a,
            y: o
        }
    }

    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }

    function hi(t, i, n, e, s, r) {
        return s >= t && t + n >= s && r >= i && i + e >= r
    }

    function ai(t, i, n, e, s, r, h, a, o) {
        return o && (t -= o, i -= o, n += o + o, e += o + o), s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }

    function oi(t, i, n, e, s, r, h, a) {
        var o = t;
        o += n;
        var f = i;
        f += e;
        var u = s;
        u += h;
        var c = r;
        return c += a, s > t && (t = s), r > i && (i = r), o > u && (o = u), f > c && (f = c), o -= t, f -= i, 0 > o || 0 > f ? null : new HH(t, i, o, f)
    }

    function fi(t) {
        return oa in t && fa in t
    }

    function ui(t, i) {
        var n = ci(t, i.width, i[ua]);
        return n.x += i.x || 0, n.y += i.y || 0, n
    }

    function ci(t, i, e) {
        if (!t) return {x: 0, y: 0};
        if (N(t) && (t = UH[ca](t)), t instanceof UH) {
            var s, r, h = t.horizontalPosition, a = t[_a];
            switch (h) {
                case WH:
                    s = 0;
                    break;
                case VH:
                    s = i;
                    break;
                default:
                    s = i / 2
            }
            switch (a) {
                case XH:
                    r = 0;
                    break;
                case JH:
                    r = e;
                    break;
                default:
                    r = e / 2
            }
            return {x: s, y: r}
        }
        if (t.x !== n) return t[da] ? {x: t.x * i, y: t.y * e} : {x: t.x, y: t.y};
        throw new Error("Position not be supported - " + t)
    }

    function _i(t, i, n) {
        t.children.add(i, n), t[la](i, n)
    }

    function di(t, i) {
        t._ff && (t._ff[Rh](i), t[va](i))
    }

    function li(t) {
        return t[ba](/^-ms-/, ya)[ba](/-([\da-z])/gi, function (t, i) {
            return i.toUpperCase()
        })
    }

    function vi(t) {
        return t[ba](/[A-Z]/g, function (t) {
            return ga + t[xa]()
        })[ba](/^ms-/, ma)
    }

    function bi(t, i) {
        var n = t[pa];
        if (!n) return !1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = yY(e)) && (n[s] = i[e]);
        return t
    }

    function yi(t) {
        var i, n, e = "";
        for (i in t) t.hasOwnProperty(i) && (n = yY(i)) && (e += vi(n) + Ea + t[i] + wa);
        return e ? e[Ta](0, e.length - 1) : e
    }

    function gi(t, i, n) {
        (i = yY(i)) && (t.style[i] = n)
    }

    function xi(t, i) {
        return vY ? (i && !N(i) && (i = yi(i)), vY[ka] ? void vY[ka](t + Oa + i + Sa, 0) : void(vY[Aa] && vY[Aa](t, i, 0))) : !1
    }

    function mi(t, i) {
        var n = t[Ma];
        return n ? (i = i || t[Ia](), i[La] / n) : 1
    }

    function pi(i, n) {
        i[ia] && (i = i[Pa] && i[Pa][sh] ? i[Pa][0] : i[ia][0]);
        var e = n[Ia](), s = i[Ca] || 0, r = i[ja] || 0;
        CH && AH && (t.pageXOffset && s == i.pageX && (s -= t[Ra]), t[Da] && r == i[Na] && (r -= t[Da])), s -= e.left, r -= e.top;
        var h = mi(n, e);
        return h && 1 !== h && (s /= h, r /= h), {x: s, y: r}
    }

    function Ei(t, i) {
        var n, e;
        t[ia] ? (n = t.cx, e = t.cy) : (n = t[Ca], e = t.clientY);
        var s = mi(i);
        return s && 1 !== s && (n /= s, e /= s), {timeStamp: t[Ba], x: n, y: e}
    }

    function wi(t, i, n) {
        this._lz = t, this._scope = n, this[$a] = i, this._dragPoints = new ki, this[Fa]()
    }

    function Ti(t) {
        return MH && t[Ga] || !MH && t[za]
    }

    function ki() {
        this.points = []
    }

    function Oi(t, i, n, e, s) {
        Ai(t, function (e) {
            if (i) {
                var s = e[Ha];
                if (!s) return void(n || VY)(Ya + t + Ua);
                i(s)
            }
        }, n, e, s)
    }

    function Si(t, i, n, e, s) {
        Ai(t, function (e) {
            if (i) {
                var s, r = e[Wa];
                if (!r) return (n || VY)(Ya + t + qa), s = new Error(Ya + t + qa), i(r, s);
                try {
                    r = JSON[Va](r)
                } catch (h) {
                    (n || VY)(h), s = h
                }
                i(r, s)
            }
        }, n, e, s)
    }

    function Ai(t, i, n, e, s) {
        (n === !1 || e === !1) && (s = !1);
        try {
            var r = new XMLHttpRequest, h = encodeURI(t);
            if (s !== !1) {
                var a;
                a = h.indexOf(Xa) > 0 ? "&" : Xa, h += a + Ka + Date.now()
            }
            r[Ja](Za, h), r[Qa] = function () {
                return 4 == r[to] ? r[io] && 200 != r[io] ? void(n || VY)(Ya + t + no) : void(i && i(r)) : void 0
            }, r[eo](e)
        } catch (o) {
            (n || VY)(Ya + t + no, o)
        }
    }

    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }

    function ai(t, i, n, e, s, r, h, a) {
        return s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }

    function Mi(t, i, n) {
        return t instanceof Object && t.x ? Li(t, i, 0, 0) : Ii(t, i, n, 0, 0)
    }

    function Ii(t, i, n, e, s) {
        var r = Math.sin(n), h = Math.cos(n), a = t - e, o = i - s;
        return t = a * h - o * r + e, i = a * r + o * h + s, new $H(t, i, n)
    }

    function Li(t, i, n, e) {
        n = n || 0, e = e || 0;
        var s = Math.sin(i), r = Math.cos(i), h = t.x - n, a = t.y - e;
        return t.x = h * r - a * s + n, t.y = h * s + a * r + e, t
    }

    function Pi(t, i, n) {
        return Ci(t, i, n, 0, 0)
    }

    function Ci(t, i, n, e, s) {
        var r = Ii(t.x, t.y, i, e, s), h = Ii(t.x + t[La], t.y, i, e, s), a = Ii(t.x + t[La], t.y + t[ua], i, e, s),
            o = Ii(t.x, t.y + t[ua], i, e, s);
        return n ? n[so]() : n = new HH, n[ro](r), n[ro](h), n.addPoint(a), n[ro](o), n
    }

    function ji(t, i) {
        var n = this.ratio || 1;
        this[pa][La] = t + ho, this.style.height = i + ho, this[La] = t * n, this[ua] = i * n
    }

    function Ri(t) {
        var i = t[ao] || t[oo] || t[fo] || t[uo] || t.backingStorePixelRatio || 1;
        return JY / i
    }

    function Di(t, n, e) {
        var s = i.createElement(co);
        if (s.g = s.getContext(_o), t !== !0 && !e) return t && n && (s[La] = t, s[ua] = n), s;
        var r = s.g;
        return r[lo] = s[lo] = Ri(r), s.setSize = ji, r._l5 = function () {
            this.canvas[La] = this[co].width
        }, t && n && s.setSize(t, n), s
    }

    function Ni(t, i) {
        return ZY || (ZY = Di()), t && i && (ZY.width = t, ZY[ua] = i), ZY.g
    }

    function Bi(t, i, n) {
        return (n || RH[vo]) + jh + (i || RH.FONT_SIZE) + bo + (t || RH[yo])
    }

    function $i(t, i, n, e, s, r, h, a, o, f) {
        if (t[go](), t[xo](n, e), QY && tU > h) {
            var u = h / tU;
            t[mo](u, u), h = tU, f = null
        }
        o || (o = RH[po]), h || (h = RH[Eo]), o *= h, t[wo] = f || Bi(r, h, a), t[To] = s, t.textBaseline = ko;
        for (var c = o / 2, _ = i.split(Oo), d = 0, l = _.length; l > d; d++) {
            var v = _[d];
            t[So](v, 0, c), c += o
        }
        t[Ao]()
    }

    function Fi(t, i, n, e, s, r) {
        if (!t) return {width: 0, height: 0};
        if (i || (i = RH[Eo]), QY && tU > i) {
            var h = i / tU, a = Fi(t, tU, n, e, s);
            return a[La] *= h, a[ua] *= h, a
        }
        var o = Ni();
        o[wo] = r || Bi(n, i, e), s || (s = RH[po]);
        for (var f = i * s, u = 0, c = 0, _ = t[Ch](Oo), d = 0, l = _.length; l > d; d++) {
            var v = _[d];
            u = Math.max(o[Mo](v).width, u), c += f
        }
        return {width: u, height: c}
    }

    function Gi(t, i, n, e, s) {
        var r;
        try {
            r = t[Io](i, n, e, s)
        } catch (h) {
        }
        return r
    }

    function zi(t) {
        return Math.log(t + Math[Lo](t * t + 1))
    }

    function Hi(t, i) {
        i = i || t(1);
        var n = 1 / i, e = .5 * n, s = Math.min(1, i / 100);
        return function (r) {
            if (0 >= r) return 0;
            if (r >= i) return 1;
            for (var h = r * n, a = 0; a++ < 10;) {
                var o = t(h), f = r - o;
                if (Math.abs(f) <= s) return h;
                h += f * e
            }
            return h
        }
    }

    function Yi(t, i, n) {
        var e = 1 - t, s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
            r = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0], a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {x: s, y: r, rotate: Math[Po](a, h)}
        }
        return {t: t, x: s, y: r}
    }

    function Ui(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1
    }

    function Wi(t, i) {
        i.add(t[4], t[5]);
        var n = Ui(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Yi(n, t);
            i.add(e.x, e.y)
        }
        var s = Ui(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Yi(s, t);
            i.add(e.x, e.y)
        }
        return i
    }

    function qi(t, i) {
        return Math.abs(t - i) < 1e-7
    }

    function Vi(t, i) {
        return qi(t[0], i[0]) && qi(t[1], i[1])
    }

    function Xi(t) {
        if (Vi([t[0], t[1]], [t[2], t[3]])) {
            var i = t[0], n = t[1], e = t[4], s = t[5], r = Math[Lo](iU(i, n, e, s));
            return function (t) {
                return r * t
            }
        }
        if (Vi([t[0], t[1]], [t[4], t[5]]) || Vi([t[2], t[3]], [t[4], t[5]])) {
            var i = t[0], n = t[1], e = t[2], s = t[3], r = Math[Lo](iU(i, n, e, s));
            return function (t) {
                return r * t
            }
        }
        var h = t[0], a = t[2], o = t[4], f = h - 2 * a + o, u = 2 * a - 2 * h;
        h = t[1], a = t[3], o = t[5];
        var c = h - 2 * a + o, _ = 2 * a - 2 * h, d = 4 * (f * f + c * c), l = 4 * (f * u + c * _), v = u * u + _ * _,
            r = 4 * d * v - l * l;
        if (1e-5 > r && r > -1e-5) {
            var b = FH(t[0], t[1], t[2], t[3]), y = FH(t[2], t[3], t[4], t[5]);
            return function (t) {
                return (2 * b + (y - b) * t) * t
            }
        }
        var g = 1 / r, x = .125 * Math.pow(d, -1.5), m = 2 * Math[Lo](d),
            p = (r * zi(l / Math.sqrt(r)) + 2 * Math.sqrt(d) * l * Math[Lo](v)) * x;
        return function (t) {
            var i = l + 2 * t * d, n = i / Math[Lo](r), e = i * i * g;
            return (r * Math.log(n + Math.sqrt(e + 1)) + m * i * Math[Lo](v + t * l + t * t * d)) * x - p
        }
    }

    function Ki(t, i, n) {
        var e = 1 - t, s = i[0], r = i[2], h = i[4], a = i[6],
            o = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], r = i[3], h = i[5], a = i[7];
        var u = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
            return {x: o, y: u, rotate: Math[Po](c, f)}
        }
        return {x: o, y: u}
    }

    function Ji(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var r = 2 * t - 4 * i + 2 * n, h = i - t, a = r * r - 4 * s * h;
        return 0 > a ? void 0 : 0 == a ? [-r / (2 * s)] : (a = Math[Lo](a), [(a - r) / (2 * s), (-a - r) / (2 * s)])
    }

    function Zi(t, i) {
        i.add(t[6], t[7]);
        var n = Ji(t[0], t[2], t[4], t[6]);
        if (n) for (var e = 0; e < n[sh]; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var r = Ki(s, t);
                i.add(r.x, r.y)
            }
        }
        if (n = Ji(t[1], t[3], t[5], t[7])) for (var e = 0; e < n[sh]; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var r = Ki(s, t);
                i.add(r.x, r.y)
            }
        }
    }

    function Qi(t) {
        var i = {x: t[0], y: t[1]}, n = {x: t[2], y: t[3]}, e = {x: t[4], y: t[5]}, s = {x: t[6], y: t[7]}, r = i.x - 0,
            h = i.y - 0, a = n.x - 0, o = n.y - 0, f = e.x - 0, u = e.y - 0, c = s.x - 0, _ = s.y - 0,
            d = 3 * (-r + 3 * a - 3 * f + c), l = 6 * (r - 2 * a + f), v = 3 * (-r + a),
            b = 3 * (-h + 3 * o - 3 * u + _), y = 6 * (h - 2 * o + u), g = 3 * (-h + o), x = function (t) {
                var i = d * t * t + l * t + v, n = b * t * t + y * t + g;
                return Math.sqrt(i * i + n * n)
            }, m = (x(0) + 4 * x(.5) + x(1)) / 6;
        return m
    }

    function tn(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e, r = 2 * t - 4 * i + 2 * n, h = i - t;
            return function (t) {
                return 3 * (s * t * t + r * t + h)
            }
        }

        function e(t, i) {
            var n = s(t), e = r(t);
            return Math.sqrt(n * n + e * e) * i
        }

        var s = n(t[0], t[2], t[4], t[6]), r = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var h = 1 / i;
        return function (t) {
            if (!t) return 0;
            for (var i, n = 0, s = 0; ;) {
                if (i = n + h, i >= t) return s += e(n, i - n);
                s += e(n, h), n = i
            }
        }
    }

    function nn(t, i, n) {
        return iU(i, n, t.cx, t.cy) <= t[Co] + nU
    }

    function en(t, i, n, e) {
        return n = n || sn(t, i), new rn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }

    function sn(t, i) {
        return FH(t.x, t.y, i.x, i.y)
    }

    function rn(t, i, n, e, s, r, h) {
        this.cx = t, this.cy = i, this.r = n, this[Co] = n * n, this.p1 = e, this.p2 = s, this.p3 = r, this._otherPoint = h
    }

    function hn(t, i, n, e) {
        this.cx = t, this.cy = i, this[La] = n, this.height = e
    }

    function an(t) {
        var i = t[0], n = t[1], e = t[2], s = rn[jo](i, n, e);
        return fn(t, i, n, e, s)
    }

    function on(t, i) {
        i = i || un(t);
        for (var n, e = i[La] / i[ua], s = [], r = t[sh], h = 0; r > h; h++) n = t[h], s[_h]({x: n.x, y: n.y * e});
        var a = an(s);
        return a ? new hn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
    }

    function fn(t, i, n, e, s) {
        for (var r, h, a = t[sh], o = s[Co], f = 0; a > f; f++) if (r = t[f], r != i && r != n && r != e) {
            var u = iU(s.cx, s.cy, r.x, r.y);
            u - nU > o && (o = u, h = r)
        }
        if (!h) return s;
        var c, _ = rn[jo](h, i, n), d = rn[jo](h, i, e), l = rn._k3Circle(h, e, n);
        return nn(_, e.x, e.y) && (c = _), nn(d, n.x, n.y) && (!c || c.r > d.r) && (c = d), nn(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, n = c.p2, e = c.p3 || c[Ro], fn(t, i, n, e, c)
    }

    function un(t) {
        for (var i, n = t[sh], e = new HH, s = 0; n > s; s++) i = t[s], e.add(i.x, i.y);
        return e
    }

    function cn(t, i, n, e, s) {
        this._6e && this[Do]();
        var r = s ? this.getBounds(s) : this.bounds, h = n / r[La], a = t - h * r.x, o = e / r[ua], f = i - o * r.y,
            u = this._f6, c = [];
        return l(u, function (t) {
            var i = t[ch](), n = i[No];
            if (n && n[sh]) {
                for (var e = n[sh], s = [], r = 0; e > r; r++) {
                    var u = n[r];
                    r++;
                    var _ = n[r];
                    u = h * u + a, _ = o * _ + f, s.push(u), s[_h](_)
                }
                i.points = s
            }
            c[_h](i)
        }, this), new CU(c)
    }

    function _n(t, i, n, e, s, r) {
        if (s = s || 0, n = n || 0, !s && !r) return !1;
        if (!e) {
            var h = this[Bo](s);
            if (!h[$o](t, i, n)) return !1
        }
        var a = Math[Fo](2 * n) || 1, o = Ni(a, a), f = (o[co], -t + n), u = -i + n;
        if (o.setTransform(1, 0, 0, 1, f, u), !o[Go]) {
            this._lg(o), s && o[zo](), r && o[Ho]();
            var c = Gi(o, 0, 0, a, a);
            if (!c) return !1;
            c = c[Yo];
            for (var _ = c[sh] / 4; _ > 0;) {
                if (c[4 * _ - 1] > PU) return !0;
                --_
            }
            return !1
        }
        return o[Uo] = (s || 0) + 2 * n, this._lg(o), s && o.isPointInStroke(n, n) ? !0 : r ? o[Wo](n, n) : !1
    }

    function dn(t, i, n) {
        if (!this._iy) return null;
        var e = this._f6;
        if (e[sh] < 2) return null;
        n === !1 && (t += this._iy);
        var s = e[0];
        if (0 >= t) return Js(s[No][0], s[No][1], e[1][No][0], e[1][No][1], t, i);
        if (t >= this._iy) {
            s = e[e[sh] - 1];
            var r, h, a = s[No], o = a[sh], f = a[o - 2], u = a[o - 1];
            if (o >= 4) r = a[o - 4], h = a[o - 3]; else {
                s = e[e[sh] - 2];
                var c = s[qo];
                r = c.x, h = c.y
            }
            return Js(f, u, f + f - r, u + u - h, t - this._iy, i)
        }
        for (var _, d = 0, l = 1, o = e.length; o > l; l++) if (_ = e[l], _._iy) {
            if (!(d + _._iy < t)) {
                var v, c = s[qo];
                if (_[Vo] == MU) {
                    var b = _[No];
                    v = ln(t - d, _, c.x, c.y, b[0], b[1], b[2], b[3], _._r)
                } else {
                    if (!_._lf) return Js(c.x, c.y, _.points[0], _.points[1], t - d, i);
                    var y = Hi(_._lf, _._iy)(t - d), b = _[No];
                    v = _[Vo] == AU && 6 == b[sh] ? Ki(y, [c.x, c.y][fh](b), !0) : Yi(y, [c.x, c.y][fh](b), !0), v.t = y
                }
                return i && (v.x -= i * Math.sin(v[Xo] || 0), v.y += i * Math.cos(v[Xo] || 0)), v
            }
            d += _._iy, s = _
        } else s = _
    }

    function ln(t, i, n, e, s, r, h, a) {
        if (t <= i._l1) return Js(n, e, s, r, t, t);
        if (t >= i._iy) return t -= i._iy, Js(i[Ko], i[Jo], h, a, t, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i[Zo] && (o = -o);
            var f = Ii(i[Qo], i[tf], o, i._o.x, i._o.y);
            return f[Xo] += i[nf] || 0, f[Xo] += Math.PI, f
        }
        return Js(i[Qo], i[tf], i[Ko], i._p2y, t, t)
    }

    function ei(t, i, n) {
        var e, s, r;
        0 == t._nb ? (e = -1, r = 0, s = i) : 0 == t._n8 ? (e = 0, r = 1, s = n) : (e = -1 / t._nb, s = (t._nb - e) * i + t._n9, r = 1);
        var h = new GH;
        return h._nb = e, h._n9 = s, h._n8 = r, h._n7 = i, h._n3 = n, h
    }

    function vn(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function bn(t, i, n, e, s, r, h, a) {
        var o = FH(i, n, e, s), f = FH(e, s, r, h);
        if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._iy = 0;
        var u = gn(e, s, i, n), c = gn(e, s, r, h);
        t[nf] = u, t._nb2 = c;
        var _ = u - c;
        _ = vn(_), _ > Math.PI && (_ = 2 * Math.PI - _, t._CCW = !0);
        var d = Math.PI - _, l = Math.tan(_ / 2), v = a / l, b = Math.min(o, f);
        v > b && (v = b, a = l * v);
        var y, g = e + Math.cos(u) * v, x = s + Math.sin(u) * v, m = e + Math.cos(c) * v, p = s + Math.sin(c) * v,
            E = new GH(i, n, e, s), w = new GH(e, s, r, h), T = ei(E, g, x), k = ei(w, m, p), O = T._3u(k),
            S = Math[Po](x - O.y, g - O.x), A = Math[Po](p - O.y, m - O.x);
        y = t[Zo] ? A : S;
        for (var M, I = 0; 4 > I;) {
            var L = I * NH;
            if (vn(L - y) <= d) {
                var P, C;
                if (M ? M++ : M = 1, 0 == I ? (P = O.x + a, C = O.y) : 1 == I ? (P = O.x, C = O.y + a) : 2 == I ? (P = O.x - a, C = O.y) : (P = O.x, C = O.y - a), t[ef + M] = {
                        x: P,
                        y: C
                    }, 2 == M) break
            }
            I++
        }
        return t._p1x = g, t._p1y = x, t[Ko] = m, t[Jo] = p, t._o = O, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._iy = t._l1 + d * a
    }

    function yn(t, i, n, e, s, r, h) {
        var a = gn(n, e, t, i), o = gn(n, e, s, r), f = a - o;
        return h ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
    }

    function gn(t, i, n, e) {
        return Math[Po](e - i, n - t)
    }

    function xn(t, i) {
        for (var n = t[Io](0, 0, i[La], i[ua]).data, e = !1, s = 3, r = n[sh]; r > s; s += 4) if (n[s] < 255) {
            e = !0;
            break
        }
        return e
    }

    function mn(t) {
        return t = En(t), /^png/i.test(t) || /^gif/i[sf](t)
    }

    function pn(t, i, n, e, s) {
        if (i && n) {
            t[Uo] = .5, t[rf] = hf, t[af](0, 0, i, n), e && (t[of] = e, t[ff](0, 0, i, n));
            var r = 2, h = 40, a = 28, o = 10, f = Math.min(i / (h + o), n / (a + o));
            t[go](), t.globalAlpha = .6, t[xo](i / 2, n / 2), t.scale(f, f), t[xo](-h / 2, -a / 2), t[uf](), t.rect(0, 0, h, a), t.clip(), t[of] = cf, t.fill(), t[_f] = 1, t[df](0, 21), t[lf](12, 12), t[lf](26, 28), t[df](18, 18), t.lineTo(28, 8), t.lineTo(40, 18), t[Uo] = r, t.strokeStyle = vf, t[zo](), s && (t.beginPath(), t[df](26, -4), t.lineTo(17, 11), t[lf](23, 17), t.lineTo(14, 32), t[Uo] = 5, t[rf] = e || bf, t[zo]()), t[Ao]()
        }
    }

    function En(t) {
        var i = sU.exec(t);
        if (i) return i[1];
        var n = t.lastIndexOf(ta);
        return n >= 0 && n < t[sh] - 1 ? t[Ta](n + 1) : void 0
    }

    function wn(t) {
        if (!t) return null;
        if (t instanceof CU) return cU;
        if (t.draw instanceof Function) return uU;
        if (N(t)) {
            var i = En(t);
            if (i) {
                if (!pH && rU[sf](i)) return fU;
                if (hU[sf](i)) return oU
            }
            return aU
        }
    }

    function Tn(t, i, n) {
        if (this._lm = wn(t), !this._lm) throw new Error("the image format is not supported", t);
        this._ln = t, this[yf] = i, this._92 = n, this[La] = i || RH[gf], this[ua] = n || RH[xf], this._ja = {}
    }

    function kn(t, i, n, e) {
        return i ? (vU[t] = new Tn(i, n, e), t) : void delete vU[t]
    }

    function On(t) {
        if (t._kh) return t._kh;
        var i = N(t);
        if (!i && !t[Th]) return t._kh = new Tn(t);
        var n = t.name || t;
        return n in vU ? vU[n] : vU[n] = new Tn(t)
    }

    function Sn(t) {
        return t in vU
    }

    function An(t, i, n) {
        n = n || {};
        var e = t[Bo](n[Uo]);
        if (!e[La] || !e[ua]) return !1;
        var s = i[mf](_o), r = i[lo] || 1, h = n[pf] || Ef, a = /full/i.test(h), o = /uniform/i[sf](h), f = 1, u = 1;
        if (a) {
            var c = i.width, _ = i[ua], d = n[wf], l = 0, v = 0;
            if (d) {
                var b, y, g, x;
                D(d) ? b = y = g = x = d : (b = d.top || 0, y = d[ha] || 0, g = d[Tf] || 0, x = d[aa] || 0), c -= g + x, _ -= b + y, l += g, v += b
            }
            f = c / e.width, u = _ / e.height, o && (f > u ? (l += (c - u * e[La]) / 2, f = u) : u > f && (v += (_ - f * e[ua]) / 2, u = f)), (l || v) && s[xo](l, v)
        }
        s[xo](-e.x * f, -e.y * u), t[kf](s, r, n, f, u, !0)
    }

    function Mn(t, i, n) {
        var e = On(t);
        return e ? (e.validate(), (e._lm == fU || e._6k()) && e[Of](function (t) {
            t[Sf] && (this[La] = this[La], An(t[Sf], this, n))
        }, i), void An(e, i, n)) : (XY[Af](Mf + t), !1)
    }

    function In(t, i, n, e) {
        var s = t[sh];
        if (s && !(0 > s)) {
            e = e || 1;
            for (var r, h, a = 0; a++ < s;) if (r = t[If](a, 0), r && (h = FH(i, n, r.x, r.y), !(h > e))) {
                for (var o = 0; o++ < e;) if (r = t.getLocation(a + o, 0)) {
                    var f = FH(i, n, r.x, r.y);
                    if (f >= h) {
                        a += o;
                        break
                    }
                    h = f
                }
                for (var u = a, c = t[sh] - 1, _ = 0, a = 0, d = t._f6[sh]; d > a; a++) if (_ += t._f6[a]._iy || 0, _ > u) {
                    c = a;
                    break
                }
                return r.length = u, r[Lf] = c, r
            }
        }
    }

    function Ln(t, i, n) {
        return {x: t.x + (i.x - t.x) * n, y: t.y + (i.y - t.y) * n}
    }

    function Pn(t, i, n, e, s) {
        e = e || RH[Pf];
        var r = In(t, i, n, s);
        if (r) {
            i = r.x, n = r.y;
            var h = t._f6, a = r[Lf], o = a == h[sh] - 1, f = h[a], u = h[ah](0);
            if (f.type == OU || f.type == IU) if (Cf == e) u[oh](a, 0, new LU(OU, [r.x, r.y])); else {
                var c = h[a - 1].lastPoint, _ = f.firstPoint, d = FH(c.x, c.y, i, n) / FH(c.x, c.y, _.x, _.y),
                    l = Ln(c, r, d), v = Ln(r, _, d);
                u.splice(a, 1, new LU(SU, [l.x, l.y, i, n]), new LU(SU, f[jf] ? [v.x, v.y] : [v.x, v.y, _.x, _.y]))
            } else if (Rf in r && Cf != e) {
                var d = r.t;
                if (f.type == AU) {
                    var c = h[a - 1][qo], _ = {x: f.points[0], y: f[No][1]}, b = {x: f[No][2], y: f[No][3]},
                        y = {x: f[No][4], y: f[No][5]}, l = Ln(c, _, d), v = Ln(_, b, d), g = Ln(b, y, d),
                        x = Ln(l, v, d), m = Ln(v, g, d);
                    u[oh](a, 1, new LU(AU, [l.x, l.y, x.x, x.y, i, n]), new LU(AU, f[jf] ? [m.x, m.y, g.x, g.y] : [m.x, m.y, g.x, g.y, y.x, y.y]))
                } else if (f.type == SU) {
                    var c = h[a - 1][qo], _ = {x: f[No][0], y: f[No][1]}, b = {x: f[No][2], y: f[No][3]},
                        l = Ln(c, _, d), v = Ln(_, b, d);
                    u[oh](a, 1, new LU(SU, [l.x, l.y, i, n]), new LU(SU, f[jf] ? [v.x, v.y] : [v.x, v.y, b.x, b.y]))
                }
            } else {
                var _ = f[qo];
                u[oh](a, 1, new LU(OU, [i, n]), new LU(OU, [_.x, _.y]))
            }
            return {atEnd: o, index: a, isCurve: Cf !== e, segments: u}
        }
    }

    function Cn(t) {
        var i = t[La], n = t[ua], e = Gi(t.g, 0, 0, i, n);
        return e ? Rn(e.data, i, n) : void 0
    }

    function jn(t, i, n) {
        this._$y(t, i, n)
    }

    function Rn(t, i, n) {
        return new jn(t, i, n)
    }

    function Dn(t) {
        if (Kh == t[0]) {
            if (t = t[Ta](1), 3 == t[sh]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]; else if (6 != t[sh]) return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i[sf](t)) {
            var i = t[dh](Df), n = t[dh](Xh);
            if (0 > i || i > n) return;
            if (t = t[Ta](i + 1, n), t = t[Ch](qh), t.length < 3) return;
            var e = parseInt(t[0]), s = parseInt(t[1]), r = parseInt(t[2]), h = 3 == t.length ? 255 : parseInt(t[3]);
            return [e, s, r, h]
        }
        XY.error("color format error, [" + t + Nf)
    }

    function Nn(t, i, n) {
        return n || (n = RH[Bf]), n == KY.BLEND_MODE_MULTIPLY ? t * i : n == KY[$f] ? Math.min(t, i) : n == KY[Ff] ? 1 - (1 - i) / t : n == KY[Gf] ? t + i - 1 : n == KY[zf] ? Math.max(t, i) : n == KY[Hf] ? t + i - t * i : i
    }

    function Bn(t, i, n) {
        var e = Gi(t.g, 0, 0, t[La], t.height);
        if (e) {
            var s = e.data;
            if (n instanceof Function) s = n(t, s, i) || s; else {
                var r = i[0] / 255, h = i[1] / 255, a = i[2] / 255;
                if (n == KY[Yf]) for (var o = 0, f = s[sh]; f > o; o += 4) {
                    var u = 77 * s[o] + 151 * s[o + 1] + 28 * s[o + 2] >> 8;
                    s[o] = u * r | 0, s[o + 1] = u * h | 0, s[o + 2] = u * a | 0
                } else for (var o = 0, f = s[sh]; f > o; o += 4) s[o] = 255 * Nn(r, s[o] / 255, n) | 0, s[o + 1] = 255 * Nn(h, s[o + 1] / 255, n) | 0, s[o + 2] = 255 * Nn(a, s[o + 2] / 255, n) | 0
            }
            var t = Di(t[La], t[ua]);
            return t.g[Uf](e, 0, 0), t
        }
    }

    function $n(t, i, n, e) {
        return 1 > n && (n = 1), Fn(t - n, i - n, 2 * n, 2 * n, e)
    }

    function Fn(t, i, n, e, s) {
        n = Math[Fo](n) || 1, e = Math.round(e) || 1;
        var r = Ni(n, e);
        r[Wf](1, 0, 0, 1, -t, -i), s[kf](r);
        var h = Gi(r, 0, 0, n, e);
        if (!h) return !1;
        h = h.data;
        for (var a = h[sh] / 4; a-- > 0;) if (h[4 * a - 1] > PU) return !0;
        return !1
    }

    function Gn(t, i, n, e, s, r) {
        t -= s.$x, i -= s.$y;
        var h = s._fg[qf](t, i, n, e);
        if (!h) return !1;
        t = h.x * r, i = h.y * r, n = h[La] * r, e = h[ua] * r, n = Math.round(n) || 1, e = Math[Fo](e) || 1;
        var a = Ni(), o = a[co];
        o[La] < n || o.height < e ? (o.width = n, o[ua] = e) : (a.setTransform(1, 0, 0, 1, 0, 0), a[Vf](0, 0, n, e)), a[Wf](1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r), a.scale(r, r), s._jl(a, 1);
        var f = Gi(a, 0, 0, n, e);
        if (!f) return !1;
        f = f.data;
        for (var u = f[sh] / 4; u-- > 0;) if (f[4 * u - 1] > PU) return !0;
        return !1
    }

    function zn(t, i, n, e, s, r, h, a, o) {
        if (hi(t, i, n, e, a, o)) return null;
        var f, u, c, _ = new LU(OU, [t + n - s, i]), d = new LU(SU, [t + n, i, t + n, i + r]),
            l = new LU(OU, [t + n, i + e - r]), v = new LU(SU, [t + n, i + e, t + n - s, i + e]),
            b = new LU(OU, [t + s, i + e]), y = new LU(SU, [t, i + e, t, i + e - r]), g = new LU(OU, [t, i + r]),
            x = new LU(SU, [t, i, t + s, i]), m = (new LU(IU), [_, d, l, v, b, y, g, x]),
            p = new HH(t + s, i + r, n - s - s, e - r - r);
        t > a ? (f = WH, c = 5) : a > t + n ? (f = VH, c = 1) : (f = qH, c = 0), i > o ? (u = XH, f == WH && (c = 7)) : o > i + e ? (u = JH, f == VH ? c = 3 : f == qH && (c = 4)) : (u = KH, f == WH ? c = 6 : f == VH && (c = 2));
        var E = Vn(c, t, i, n, e, s, r, h, a, o, p), w = E[0], T = E[1], k = new CU, O = k._f6;
        O[_h](new LU(kU, [w.x, w.y])), O[_h](new LU(OU, [a, o])), O[_h](new LU(OU, [T.x, T.y])), T._lx && (O.push(T._lx), T[Xf]++);
        for (var S = T._lxNO % 8, A = w._lxNO; O[_h](m[S]), ++S, S %= 8, S != A;) ;
        return w._lx && O[_h](w._lx), k[Kf](), k
    }

    function Hn(t, i, e, s, r, h, a, o, f, u, c, _, d, l) {
        var v = new GH(_, d, e, s), b = new GH(i[0], i[1], i[4], i[5]), y = b._3u(v, c), g = y[0], x = y[1];
        if (g[Jf] !== n) {
            g[Xf] = (t - 1) % 8, x[Xf] = (t + 1) % 8;
            var m = g._rest;
            7 == t ? (g.y = h + u + Math.min(l[ua], m), x.x = r + f + Math.min(l[La], m)) : 5 == t ? (g.x = r + f + Math.min(l[La], m), x.y = h + o - u - Math.min(l[ua], m)) : 3 == t ? (g.y = h + o - u - Math.min(l[ua], m), x.x = r + a - f - Math.min(l.width, m)) : 1 == t && (g.x = r + a - f - Math.min(l[La], m), x.y = h + u + Math.min(l[ua], m))
        } else {
            v._n0(v._n7, v._n3, g.x, g.y), g = v._$c(i), v._n0(v._n7, v._n3, x.x, x.y), x = v._$c(i);
            var p = Xn(i, [g, x]), E = p[0], w = p[2];
            g[Xf] = t, x[Xf] = t, g._lx = new LU(SU, E.slice(2)), x._lx = new LU(SU, w.slice(2))
        }
        return [g, x]
    }

    function Yn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r) u = {y: n, x: o - a}, u[Xf] = 0; else {
            u = {y: n + h, x: Math.max(i, o - a)};
            var _ = [i, n + h, i, n, i + r, n], d = new GH(o, f, u.x, u.y);
            if (u = d._$c(_)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Xn(_, [u]);
                l = l[0], l && (u._lx = new LU(SU, l[ah](2))), u[Xf] = 7
            } else u = {y: n, x: i + r}, u._lxNO = 0
        }
        if (i + e - r >= o + a) c = {y: n, x: o + a}, c[Xf] = 0; else {
            c = {y: n + h, x: Math.min(i + e, o + a)};
            var v = [i + e - r, n, i + e, n, i + e, n + h], d = new GH(o, f, c.x, c.y);
            if (c = d._$c(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Xn(v, [c]);
                l && l[l[sh] - 1] && (c._lx = new LU(SU, l[l.length - 1][ah](2))), c[Xf] = 1
            } else c = {y: n, x: i + e - r}, c._lxNO = 0
        }
        return [u, c]
    }

    function Un(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h) u = {x: i + e, y: f - a}, u[Xf] = 2; else {
            u = {x: i + e - r, y: Math.max(n, f - a)};
            var _ = [i + e - r, n, i + e, n, i + e, n + h], d = new GH(o, f, u.x, u.y);
            if (u = d._$c(_)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Xn(_, [u]);
                l = l[0], l && (u._lx = new LU(SU, l[ah](2))), u[Xf] = 1
            } else u = {x: i + e, y: n + h}, u[Xf] = 2
        }
        if (n + s - h >= f + a) c = {x: i + e, y: f + a}, c._lxNO = 2; else {
            c = {x: i + e - r, y: Math.min(n + s, f + a)};
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s], d = new GH(o, f, c.x, c.y);
            if (c = d._$c(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Xn(v, [c]);
                l[1] && (c._lx = new LU(SU, l[1][ah](2))), c._lxNO = 3
            } else c = {x: i + e, y: n + s - h}, c._lxNO = 2
        }
        return [u, c]
    }

    function Wn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r) c = {y: n + s, x: o - a}, c[Xf] = 4; else {
            c = {y: n + s - h, x: Math.max(i, o - a)};
            var _ = [i + r, n + s, i, n + s, i, n + s - h], d = new GH(o, f, c.x, c.y);
            if (c = d._$c(_)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Xn(_, [c]);
                l = l[l[sh] - 1], l && (c._lx = new LU(SU, l[ah](2))), c[Xf] = 5
            } else c = {y: n + s, x: i + r}, c._lxNO = 4
        }
        if (i + e - r >= o + a) u = {y: n + s, x: o + a}, u[Xf] = 4; else {
            u = {y: n + s - h, x: Math.min(i + e, o + a)};
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s], d = new GH(o, f, u.x, u.y);
            if (u = d._$c(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Xn(v, [u]);
                l[0] && (u._lx = new LU(SU, l[0][ah](2))), u[Xf] = 3
            } else u = {y: n + s, x: i + e - r}, u[Xf] = 4
        }
        return [u, c]
    }

    function qn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h) c = {x: i, y: f - a}, c[Xf] = 6; else {
            c = {x: i + r, y: Math.max(n, f - a)};
            var _ = [i, n + h, i, n, i + r, n], d = new GH(o, f, c.x, c.y);
            if (c = d._$c(_)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Xn(_, [c]);
                l = l[l[sh] - 1], l && (c._lx = new LU(SU, l[ah](2)))
            } else c = {x: i, y: n + h};
            c[Xf] = 7
        }
        if (n + s - h >= f + a) u = {x: i, y: f + a}, u[Xf] = 6; else {
            u = {x: i + r, y: Math.min(n + s, f + a)};
            var v = [i + r, n + s, i, n + s, i, n + s - h], d = new GH(o, f, u.x, u.y);
            if (u = d._$c(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Xn(v, [u]);
                l[0] && (u._lx = new LU(SU, l[0][ah](2))), u[Xf] = 5
            } else u = {x: i, y: n + s - h}, u[Xf] = 6
        }
        return [u, c]
    }

    function Vn(t, i, n, e, s, r, h, a, o, f, u) {
        var c = a / 2;
        switch (r = r || 1e-4, h = h || 1e-4, t) {
            case 7:
                var _ = [i, n + h, i, n, i + r, n], d = i + r, l = n + h;
                return Hn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 5:
                return _ = [i + r, n + s, i, n + s, i, n + s - h], d = i + r, l = n + s - h, Hn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 3:
                return _ = [i + e, n + s - h, i + e, n + s, i + e - r, n + s], d = i + e - r, l = n + s - h, Hn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 1:
                return _ = [i + e - r, n, i + e, n, i + e, n + h], d = i + e - r, l = n + h, Hn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
            case 0:
                return Yn(t, i, n, e, s, r, h, c, o, f, u);
            case 2:
                return Un(t, i, n, e, s, r, h, c, o, f, u);
            case 4:
                return Wn(t, i, n, e, s, r, h, c, o, f, u);
            case 6:
                return qn(t, i, n, e, s, r, h, c, o, f, u)
        }
    }

    function Xn(t, i) {
        for (var e, s, r, h, a, o, f = t[0], u = t[1], c = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i[sh]; b++) a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (c - f) * o, s = u + (_ - u) * o, r = c + (d - c) * o, h = _ + (l - _) * o, v.push([f, u, e, s, a.x, a.y]), f = a.x, u = a.y, c = r, _ = h) : v[_h](null);
        return r !== n && v[_h]([a.x, a.y, r, h, d, l]), v
    }

    function Kn(t) {
        return this[Zf] && this[Qf] && (t.x -= this._nbm.x, t.y -= this[Qf].y), this[tu] && Li(t, this[tu]), t.x += this.$offsetX || 0, t.y += this.$offsetY || 0, this[iu] && this[nu] ? Li(t, this[nu]) : t
    }

    function Jn(t) {
        return this[iu] && this[nu] && Li(t, -this[nu]), t.x -= this[eu] || 0, t.y -= this.$offsetY || 0, this[tu] && Li(t, -this.$rotate), this[Zf] && this._nbm && (t.x += this[Qf].x, t.y += this._nbm.y), t
    }

    function Zn() {
        var t = this[su];
        this.$invalidateSize && (this[su] = !1, this[ru] = !0, this._8c[hu](this._jj), this.$padding && this._8c.grow(this[au]), this[ou] && this._8c[fu](this.$border));
        var i = this._$m();
        if (i) var n = this[uu] && this.$pointerWidth;
        return this[ru] && this.$layoutByAnchorPoint && (this.$invalidateAnchorPoint = !1, n && (t = !0), this[Qf] = ci(this[cu], this._8c[La], this._8c[ua]), this._nbm.x += this._8c.x, this[Qf].y += this._8c.y), i ? (t && (this[_u] = !0, Qn[rh](this, n)), this[_u] && (this._n9ackgroundGradientInvalidateFlag = !1, this._n9ackgroundGradient = this[du] && this[lu] && this._ltShape.bounds ? bU[vh][vu][rh](this.backgroundGradient, this[lu][bu]) : null), t) : (this[yu] = !1, t)
    }

    function Qn(t) {
        var i = this._8c.x + this.$border / 2, n = this._8c.y + this[ou] / 2, e = this._8c.width - this.$border,
            s = this._8c[ua] - this[ou], r = 0, h = 0;
        if (this[gu] && (D(this[gu]) ? r = h = this[gu] : (r = this[gu].x || 0, h = this[gu].y || 0), r = Math.min(r, e / 2), h = Math.min(h, s / 2)), t && (this._pointerX = this._nbm.x - this[eu] + this.$pointerX, this[xu] = this[Qf].y - this.$offsetY + this[mu], !this._8c[$o](this._pointerX, this[xu]))) {
            var a = new RU(i, n, e, s, r, h, this[pu], this[Eu], this._pointerY);
            return this._ltShape = a._lx, this[lu][bu].set(i, n, e, s), void(this[yu] = !0)
        }
        this._ltShape && this._ltShape[so](), this[lu] = sq[wu](i, n, e, s, r, h, this[lu]), this._ltShape.bounds.set(i, n, e, s)
    }

    function te(t, i, n, e) {
        return e && (t[La] < 0 || t.height < 0) ? (t.x = i, t.y = n, void(t[La] = t.height = 0)) : (i < t.x ? (t[La] += t.x - i, t.x = i) : i > t.x + t[La] && (t[La] = i - t.x), void(n < t.y ? (t.height += t.y - n, t.y = n) : n > t.y + t.height && (t[ua] = n - t.y)))
    }

    function ie(t, i, e) {
        var s, r = t[Tu], h = t[ku] === n ? this.layoutByPath : t.layoutByPath;
        return this[Ou] instanceof CU && h ? (s = eU[Su](r, this[Ou], this.lineWidth, i, e), s.x *= this._jv, s.y *= this._jx) : (s = ci(r, this._8c.width, this._8c.height), s.x += this._8c.x, s.y += this._8c.y), Kn.call(this, s)
    }

    function ne(t, i) {
        if (i) if (i._8c.isEmpty()) t.$x = i.$x, t.$y = i.$y; else {
            var n = ie.call(i, t);
            t.$x = n.x, t.$y = n.y, t[Au] = n.rotate
        } else t.$x = 0, t.$y = 0;
        t[Mu] && BU[rh](t)
    }

    function ee(t) {
        if (t[Iu] === n) {
            var i, e;
            if (t[Lu]) i = t.getLineDash, e = t[Lu]; else {
                var s;
                if (t[Pu] !== n) s = Pu; else {
                    if (t.webkitLineDash === n) return !1;
                    s = Cu
                }
                e = function (t) {
                    this[s] = t
                }, i = function () {
                    return this[s]
                }
            }
            K(t, Iu, {
                get: function () {
                    return i.call(this)
                }, set: function (t) {
                    e[rh](this, t)
                }
            })
        }
        if (t[ju] === n) {
            var r;
            if (t[Ru] !== n) r = Ru; else {
                if (t[Du] === n) return;
                r = Du
            }
            K(t, ju, {
                get: function () {
                    return this[r]
                }, set: function (t) {
                    this[r] = t
                }
            })
        }
    }

    function se(t, i, n, e, s) {
        var r, h, a, o, f, u, c, _, d = function (t) {
            return function (i) {
                t(i)
            }
        }, l = function () {
            h = null, a = null, o = f, f = null, u = null
        }, v = function (t) {
            r = t, c || (c = Di()), c.width = r[La], c[ua] = r.height, i[La] = r.width, i[ua] = r.height
        }, b = function (t) {
            y(), l(), h = t[Nu] ? t.transparencyIndex : null, a = 10 * t.delayTime, f = t[Bu]
        }, y = function () {
            if (u) {
                var t = u[Io](0, 0, r[La], r.height), n = {data: t, _pixels: Rn(t.data, r.width, r.height), delay: a};
                s.call(i, n)
            }
        }, g = function (t) {
            u || (u = c[mf](_o));
            var i = t[$u] ? t.lct : r.gct, n = u[Io](t[Fu], t[Gu], t.width, t[ua]);
            t[zu][Hu](function (t, e) {
                h !== t ? (n[Yo][4 * e + 0] = i[t][0], n[Yo][4 * e + 1] = i[t][1], n[Yo][4 * e + 2] = i[t][2], n[Yo][4 * e + 3] = 255) : (2 === o || 3 === o) && (n[Yo][4 * e + 3] = 0)
            }), u.putImageData(n, t[Fu], t[Gu])
        }, x = function () {
        }, m = {
            hdr: d(v), gce: d(b), com: d(x), app: {NETSCAPE: d(x)}, img: d(g, !0), eof: function () {
                y(), n[rh](i)
            }
        }, p = new XMLHttpRequest;
        pH || p[Yu]("text/plain; charset=x-user-defined"), p[Uu] = function () {
            _ = new HU(p[Wa]);
            try {
                UU(_, m)
            } catch (t) {
                e[rh](i, Va)
            }
        }, p.onerror = function () {
            e.call(i, Wu)
        }, p[Ja](Za, t, !0), p[eo]()
    }

    function re(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
        return i[Hu](function (n, e) {
            i[e] = t(n)
        }), i.join("")
    }

    function he(t, i) {
        try {
            if (null == t || t[sh] < 8) return;
            if (null == i || i.length <= 0) return;
            for (var n = "", e = 0; e < i[sh]; e++) n += i[qu](e).toString();
            var s = Math[Yh](n.length / 5),
                r = parseInt(n.charAt(s) + n[Vu](2 * s) + n[Vu](3 * s) + n[Vu](4 * s) + n[Vu](5 * s), 10),
                h = Math[Fo](i[sh] / 2), a = Math.pow(2, 31) - 1, o = parseInt(t[Ta](t.length - 8, t[sh]), 16);
            for (t = t[Ta](0, t.length - 8), n += o; n[sh] > 10;) n = (parseInt(n.substring(0, 10), 10) + parseInt(n[Ta](10, n[sh]), 10)).toString();
            n = (r * n + h) % a;
            for (var f = "", u = "", e = 0; e < t[sh]; e += 2) f = parseInt(parseInt(t[Ta](e, e + 2), 16) ^ Math[Yh](n / a * 255), 10), u += String[Xu](f), n = (r * n + h) % a;
            return 0 | u[0] ? EW = JU[Ku + tW + Ju](u) : null
        } catch (c) {
        }
    }

    function ae() {
        var t = qU;
        if (!t) return void(AW = !0);
        pW = t;
        var i;
        t = t[Ch](qh);
        for (var n = 0; n < t.length && (i = he(t[n], XU), !(i && i[Ch](Oo).length >= 8));) 1 == t.length && (i = he(t[n], Zu)), n++;
        if (!i || i[Ch](Oo).length < 8) return kW = !0, "" === XU || XU == Qu + sW + tc + rW + Rf || XU == ic + eW + nc ? (OW = LW, AW = !1, void(mW = !1)) : (OW = LW, void(AW = !0));
        mW = i.split(Oo);
        var e = mW[3];
        if (e != PV) return void(kW = !0);
        AW = !1;
        var s = mW[0];
        s > 1 && (kW = !1);
        var r = mW[5];
        SW = r;
        var h = mW[6];
        OW = h
    }

    function oe() {
        var t = pW;
        if (t) {
            var i;
            t = t.split(qh);
            for (var n = 0; n < t[sh] && (i = PW(t[n], XU), !(i && i[Ch](Oo)[sh] >= 8));) 1 == t[sh] && (i = PW(t[n], Zu)), n++;
            if (i[Ch](Oo)[sh] >= 8) return void(MW = !1)
        }
        return XU && XU != Qu + sW + tc + rW + Rf && XU != ic + eW + nc ? void(MW = !0) : void(MW = !1)
    }

    function fe() {
        if (kW) {
            var t = mr[uW + Vo]._jl, i = TW;
            mr[uW + Vo]._jl = function () {
                t.apply(this, arguments), i[rh](this[ec], this.g)
            };
            var n = WW[uW + Vo]._gh;
            WW[uW + Vo]._gh = function (t) {
                n[yh](this, arguments), i[rh](this, t)
            }
        }
    }

    function ue() {
        if (SW !== !0 && SW) {
            var t = SW.split(ta);
            if (3 != t[sh]) return void(hq[vh]._jl = null);
            var i = parseInt(t[0], 10), n = parseInt(t[1], 10), e = parseInt(t[2], 10), s = 3,
                r = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            VU > r && (hq.prototype._jl = null)
        }
    }

    function ce() {
        var t = 0 | OW;
        if (t) {
            var i = dY.prototype._kg;
            dY[uW + Vo]._kg = function () {
                return this._jd.length > t ? !1 : i.apply(this, arguments)
            }
        }
    }

    function _e() {
        AW && (DH[uW + Vo]._kg = DH[uW + Vo]._f9)
    }

    function de() {
        if (MW) {
            var t = TW, i = WW[uW + Vo]._gh;
            WW[uW + Vo]._gh = function (n) {
                i[yh](this, arguments), t[rh](this, n)
            }
        }
    }

    function le() {
        if (IW) {
            var t = mr[uW + Vo]._jl, i = TW;
            mr[uW + Vo]._jl = function () {
                t[yh](this, arguments), i[rh](this[ec], this.g)
            }
        }
    }

    function ve() {
        mW === n && (WW[uW + Vo]._j0 = HH[sc])
    }

    function be(t) {
        var i = Di(!0);
        return ee(i.g), i.onselectstart = function () {
            return !1
        }, t.appendChild(i), i[Mh] = NW, i
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t[sh], s = n[sh], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }

        function e(t) {
            var i = t[sh], s = Math.ceil(i / 2);
            return 1 >= i ? t : n(e(t.slice(0, s)), e(t[ah](s)))
        }

        return e(t)
    }

    function ye(t) {
        t.width = t[La]
    }

    function ge(t) {
        HW || (HW = "imageSmoothingEnabled" in CanvasRenderingContext2D[vh] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D[vh] ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D[vh] ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D[vh] ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[HW] = !1
    }

    function xe(t, i, n, e, s) {
        e = V(i + e) - (i = q(i)), s = V(n + s) - (n = q(n)), t.clearRect(i, n, e, s), t[rc](i, n, e, s)
    }

    function q(t) {
        return Math.floor(t)
    }

    function V(t) {
        return Math[uh](t)
    }

    function me(t) {
        var i = [];
        return t[Hu](function (t) {
            i[_h](-t)
        }), i
    }

    function pe(t) {
        return t %= VW, 0 > t && (t += VW), t
    }

    function Ee(t, i, n, e, s, r, h, a) {
        var o = ((t * e - i * n) * (s - h) - (t - n) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h)),
            f = ((t * e - i * n) * (r - a) - (i - e) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h));
        if (isNaN(o) || isNaN(f)) return !1;
        if (t >= n) {
            if (!(o >= n && t >= o)) return !1
        } else if (!(o >= t && n >= o)) return !1;
        if (i >= e) {
            if (!(f >= e && i >= f)) return !1
        } else if (!(f >= i && e >= f)) return !1;
        if (s >= h) {
            if (!(o >= h && s >= o)) return !1
        } else if (!(o >= s && h >= o)) return !1;
        if (r >= a) {
            if (!(f >= a && r >= f)) return !1
        } else if (!(f >= r && a >= f)) return !1;
        return !0
    }

    function we(t, i) {
        for (var n = 0, e = t[sh]; e > n;) {
            for (var s = t[n], r = t[(n + 1) % e], h = 0; 4 > h;) {
                var a = i[h], o = i[(h + 1) % e];
                if (Ee(s[0], s[1], r[0], r[1], a[0], a[1], o[0], o[1])) return !0;
                h++
            }
            n++
        }
        return !1
    }

    function Te(t, i, n, e) {
        return [t * e - i * n, t * n + i * e]
    }

    function ke(t) {
        return t[hc] ? (t = t[hc], t._dk ? t._dk : t instanceof rq && t._h4 === !1 ? t : null) : null
    }

    function Oe(t, i, n) {
        if (n = n || i[ac], n == t) return !1;
        var e = t[oc](n);
        return e || (e = new pV(t, n), t[fc][n.id] = e), e._im(i, t)
    }

    function Se(t, i, n) {
        if (n = n || i[ac], n == t) return !1;
        var e = t[oc](n);
        return e ? e[uc](i, t) : void 0
    }

    function Ae(t, i, e) {
        return e === n && (e = i[ac]), e != t ? (t._85 || (t._85 = new DH), t._85.add(i) === !1 ? !1 : void t._9j++) : void 0
    }

    function Me(t, i, n) {
        return t._85 && t._85[Rh](i) !== !1 ? (t._9j--, void Se(t, i, n)) : !1
    }

    function Ie(t, i) {
        return i[cc] != t ? (t._9e || (t._9e = new DH), t._9e.add(i) === !1 ? !1 : void t[_c]++) : void 0
    }

    function Le(t, i) {
        return t._9e && t._9e[Rh](i) !== !1 ? (t[_c]--, void Se(i[cc], i, t)) : !1
    }

    function Pe(t, i) {
        if (i === n && (i = t instanceof iq), i) {
            if (t[dc]()) return null;
            var e = Pe(t.from, !1);
            if (t[lc]()) return e;
            for (var s = Pe(t.to, !1); null != e && null != s;) {
                if (e == s) return e;
                if (e[vc](s)) return s;
                if (s.isDescendantOf(e)) return e;
                e = Pe(e, !1), s = Pe(s, !1)
            }
            return null
        }
        for (var r = t.parent; null != r;) {
            if (r._he()) return r;
            r = r[hc]
        }
        return null
    }

    function Ce(t, i, n) {
        t._he() && t[eh]() && t[hh][Hu](function (t) {
            t instanceof nq && i.add(t) && Ce(t, i, n)
        }, this), t[bc]() && t._dw[Hu](function (t) {
            (null == n || n.accept(t)) && i.add(t) && Ce(t, i, n)
        })
    }

    function je(t, i) {
        i[hc] ? i[hc][yc](i, i[hc][gc] - 1) : t[xc][mc](i, t[xc][sh] - 1)
    }

    function Re(t, i) {
        i[hc] ? i.parent[yc](i, 0) : t.roots[mc](i, 0)
    }

    function De(t, i) {
        if (i instanceof iq) return void(i[dc]() || Be(t, i));
        for (je(t, i); i = i.parent;) je(t, i)
    }

    function Ne(t, i) {
        if (i instanceof iq) return void(i[dc]() || $e(t, i));
        for (Re(t, i); i = i.parent;) Re(t, i)
    }

    function Be(t, i) {
        var n = i.fromAgent;
        if (i[lc]()) je(t, n); else {
            var e = i[ac];
            je(t, n), je(t, e)
        }
    }

    function $e(t, i) {
        var n = i[cc];
        if (i[lc]()) Re(t, n); else {
            var e = i.toAgent;
            Re(t, n), Re(t, e)
        }
    }

    function Fe(t, i) {
        return t._9j++, t._fb ? (i._hi = t._hp, t._hp._hg = i, void(t._hp = i)) : (t._fb = i, void(t._hp = i))
    }

    function Ge(t, i) {
        t._9j--, t._hp == i && (t._hp = i._hi), i._hi ? i._hi._hg = i._hg : t._fb = i._hg, i._hg && (i._hg._hi = i._hi), i._hi = null, i._hg = null, Se(t, i, i.$to)
    }

    function ze(t, i) {
        return t[_c]++, t._i7 ? (i._j3 = t._jg, t._jg._j6 = i, void(t._jg = i)) : (t._i7 = i, void(t._jg = i))
    }

    function He(t, i) {
        t[_c]--, t._jg == i && (t._jg = i._j3), i._j3 ? i._j3._j6 = i._j6 : t._i7 = i._j6, i._j6 && (i._j6._j3 = i._j3), i._j3 = null, i._j6 = null
    }

    function Ye(t, i) {
        return i = i || new DH, t[pc](function (t) {
            i.add({id: t.id, edge: t, fromAgent: t[Ec]._dk, toAgent: t.$to._dk})
        }), t.forEachChild(function (t) {
            t instanceof nq && Ye(t, i)
        }), i
    }

    function Ue(t, i, n) {
        return qe(t, i, n) === !1 ? !1 : We(t, i, n)
    }

    function We(t, i, n) {
        if (t._fb) for (var e = t._fb; e;) {
            if (i[rh](n, e) === !1) return !1;
            e = e._hg
        }
    }

    function qe(t, i, n) {
        if (t._i7) for (var e = t._i7; e;) {
            if (i.call(n, e) === !1) return !1;
            e = e._j6
        }
    }

    function Ve(t, i, e, s, r, h, a) {
        return h || a ? (h = h || 0, a = a === n ? h : a || 0, h = Math.min(h, s / 2), a = Math.min(a, r / 2), t[df](i + h, e), t.lineTo(i + s - h, e), t[wc](i + s, e, i + s, e + a), t[lf](i + s, e + r - a), t[wc](i + s, e + r, i + s - h, e + r), t[lf](i + h, e + r), t[wc](i, e + r, i, e + r - a), t[lf](i, e + a), t[wc](i, e, i + h, e), t[Kf](), t) : (t[df](i, e), t.lineTo(i + s, e), t[lf](i + s, e + r), t.lineTo(i, e + r), t.closePath(), t)
    }

    function Xe(t, i) {
        var n = i.r || 1, e = i.cx || 0, s = i.cy || 0, r = n * Math.tan(Math.PI / 8), h = n * Math.sin(Math.PI / 4);
        t[df](e + n, s), t[wc](e + n, s + r, e + h, s + h), t[wc](e + r, s + n, e, s + n), t.quadTo(e - r, s + n, e - h, s + h), t.quadTo(e - n, s + r, e - n, s), t.quadTo(e - n, s - r, e - h, s - h), t.quadTo(e - r, s - n, e, s - n), t.quadTo(e + r, s - n, e + h, s - h), t[wc](e + n, s - r, e + n, s)
    }

    function Ke(t, i, n, e, s) {
        i instanceof hn && (e = i.width, s = i[ua], n = i.cy - s / 2, i = i.cx - e / 2);
        var r = .5522848, h = e / 2 * r, a = s / 2 * r, o = i + e, f = n + s, u = i + e / 2, c = n + s / 2;
        return t[df](i, c), t[Tc](i, c - a, u - h, n, u, n), t.curveTo(u + h, n, o, c - a, o, c), t[Tc](o, c + a, u + h, f, u, f), t[Tc](u - h, f, i, c + a, i, c), t
    }

    function Je(t, i, n, e, s) {
        var r = 2 * e, h = 2 * s, a = i + e / 2, o = n + s / 2;
        return t[df](a - r / 4, o - h / 12), t[lf](i + .306 * e, n + .579 * s), t[lf](a - r / 6, o + h / 4), t[lf](i + e / 2, n + .733 * s), t[lf](a + r / 6, o + h / 4), t[lf](i + .693 * e, n + .579 * s), t.lineTo(a + r / 4, o - h / 12), t[lf](i + .611 * e, n + .332 * s), t.lineTo(a + 0, o - h / 4), t[lf](i + .388 * e, n + .332 * s), t[Kf](), t
    }

    function Ze(t, i, n, e, s) {
        return t.moveTo(i, n), t.lineTo(i + e, n + s / 2), t.lineTo(i, n + s), t[Kf](), t
    }

    function Qe(t, i, n, e, s) {
        return t[df](i, n + s / 2), t[lf](i + e / 2, n), t.lineTo(i + e, n + s / 2), t[lf](i + e / 2, n + s), t.closePath(), t
    }

    function ts(t, i, n, e, s, r) {
        return t[df](i, n), t[lf](i + e, n + s / 2), t.lineTo(i, n + s), r || (t[lf](i + .25 * e, n + s / 2), t[Kf]()), t
    }

    function is(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
        for (var r, h, a = 0, o = 2 * Math.PI / t, f = new CU; t > a;) r = i + e * Math.cos(s), h = n + e * Math.sin(s), a ? f[lf](r, h) : f[df](r, h), ++a, s += o;
        return f[Kf](), f
    }

    function ns() {
        var t = new CU;
        return t[df](75, 40), t[Tc](75, 37, 70, 25, 50, 25), t.curveTo(20, 25, 20, 62.5, 20, 62.5), t[Tc](20, 80, 40, 102, 75, 120), t[Tc](110, 102, 130, 80, 130, 62.5), t.curveTo(130, 62.5, 130, 25, 100, 25), t[Tc](85, 25, 75, 37, 75, 40), t
    }

    function es() {
        var t = new CU;
        return t[df](20, 0), t[lf](80, 0), t.lineTo(100, 100), t[lf](0, 100), t[Kf](), t
    }

    function ss() {
        var t = new CU;
        return t.moveTo(100, 0), t[lf](100, 80), t[lf](0, 100), t.lineTo(0, 20), t.closePath(), t
    }

    function rs() {
        var t = new CU;
        return t[df](20, 0), t[lf](100, 0), t[lf](80, 100), t[lf](0, 100), t.closePath(), t
    }

    function hs() {
        var t = new CU;
        return t[df](43, 23), t[lf](28, 10), t[lf](37, 2), t[lf](63, 31), t[lf](37, 59), t[lf](28, 52), t[lf](44, 38), t[lf](3, 38), t.lineTo(3, 23), t.closePath(), t
    }

    function as() {
        var t = new CU;
        return t[df](1, 8), t[lf](7, 2), t[lf](32, 26), t.lineTo(7, 50), t[lf](1, 44), t[lf](18, 26), t.closePath(), t[df](27, 8), t.lineTo(33, 2), t[lf](57, 26), t.lineTo(33, 50), t.lineTo(27, 44), t[lf](44, 26), t[Kf](), t
    }

    function os() {
        var t = new CU;
        return t[df](0, 15), t.lineTo(23, 15), t[lf](23, 1), t[lf](47, 23), t[lf](23, 43), t.lineTo(23, 29), t[lf](0, 29), t.closePath(), t
    }

    function fs() {
        var t = new CU;
        return t[df](0, 21), t[lf](30, 21), t[lf](19, 0), t[lf](25, 0), t.lineTo(47, 25), t.lineTo(25, 48), t.lineTo(19, 48), t.lineTo(30, 28), t[lf](0, 28), t[Kf](), t
    }

    function us() {
        var t = new CU;
        return t[df](0, 0), t[lf](34, 24), t[lf](0, 48), t[lf](14, 24), t[Kf](), t
    }

    function cs() {
        var t = new CU;
        return t[df](20, 0), t[lf](34, 14), t[lf](20, 28), t.lineTo(22, 18), t.lineTo(1, 25), t.lineTo(10, 14), t[lf](1, 3), t[lf](22, 10), t[Kf](), t
    }

    function _s() {
        var t = new CU;
        return t.moveTo(4, 18), t.lineTo(45, 18), t[lf](37, 4), t.lineTo(83, 25), t[lf](37, 46), t[lf](45, 32), t[lf](4, 32), t[Kf](), t
    }

    function ds() {
        var t = new CU;
        return t[df](17, 11), t[lf](27, 11), t[lf](42, 27), t[lf](27, 42), t.lineTo(17, 42), t[lf](28, 30), t.lineTo(4, 30), t[lf](4, 23), t[lf](28, 23), t[Kf](), t
    }

    function ls() {
        sq.register(KY[kc], Ke(new CU, 0, 0, 100, 100)), sq[Oc](KY[Sc], Ve(new CU, 0, 0, 100, 100)), sq.register(KY[Ac], Ve(new CU, 0, 0, 100, 100, 20, 20)), sq[Oc](KY[Mc], Je(new CU, 0, 0, 100, 100)), sq.register(KY[Ic], Ze(new CU, 0, 0, 100, 100)), sq[Oc](KY.SHAPE_PENTAGON, is(5)), sq[Oc](KY.SHAPE_HEXAGON, is(6)), sq[Oc](KY[Lc], Qe(new CU, 0, 0, 100, 100)), sq.register(KY[Pc], ns()), sq.register(KY[Cc], es()), sq[Oc](KY[jc], ss()), sq[Oc](KY.SHAPE_PARALLELOGRAM, rs());
        var t = new CU;
        t.moveTo(20, 0), t.lineTo(40, 0), t[lf](40, 20), t[lf](60, 20), t[lf](60, 40), t[lf](40, 40), t.lineTo(40, 60), t[lf](20, 60), t[lf](20, 40), t[lf](0, 40), t[lf](0, 20), t[lf](20, 20), t[Kf](), sq.register(KY[Rc], t), sq.register(KY.SHAPE_ARROW_STANDARD, ts(new CU, 0, 0, 100, 100)), sq[Oc](KY.SHAPE_ARROW_1, hs()), sq.register(KY[Dc], as()), sq[Oc](KY.SHAPE_ARROW_3, os()), sq[Oc](KY[Nc], fs()), sq.register(KY[Bc], us()), sq.register(KY[$c], cs()), sq[Oc](KY[Fc], _s()), sq[Oc](KY[Gc], ds()), sq[Oc](KY.SHAPE_ARROW_OPEN, ts(new CU, 0, 0, 100, 100, !0))
    }

    function vs() {
        w(this, vs, arguments), this[zc] = !0
    }

    function bs() {
        w(this, bs), this._$o = new aY
    }

    function ys() {
        if (this._h4 === !0) {
            var t = this._85, i = this._9e;
            if (t) for (t = t._jd; t[sh];) {
                var n = t[0];
                Me(this, n, n[ac])
            }
            if (i) for (i = i._jd; i[sh];) {
                var n = i[0];
                Le(this, n, n[cc])
            }
            return void this[Hc](function (t) {
                t._he() && ys[rh](t)
            })
        }
        var e = Ye(this);
        e[Hu](function (t) {
            t = t[Yc];
            var i = t[Ec], n = t.$to, e = i[vc](this), s = n[vc](this);
            e && !s ? (Ae(this, t), Oe(this, t)) : s && !e && (Ie(this, t), Oe(t[cc], t, this))
        }, this)
    }

    function gs() {
        w(this, gs, arguments), this[Uc] = null
    }

    function xs(t, i, n, e) {
        return t[i] = n, e ? {
            get: function () {
                return this[i]
            }, set: function (t) {
                if (t !== this[i]) {
                    this[i] = t, !this[Wc], this._1a = !0;
                    for (var n = e[sh]; --n >= 0;) this[e[n]] = !0
                }
            }
        } : {
            get: function () {
                return this[i]
            }, set: function (t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }

    function ms(t, i) {
        var n = {}, e = {};
        for (var s in i) {
            var r = i[s];
            r[qc] && r.validateFlags[Hu](function (t, i, n) {
                n[i] = Vc + t, e[t] = !0
            }), n[s] = xs(t, ph + s, r.value, r[qc])
        }
        for (var h in e) t[Vc + h] = !0;
        Object.defineProperties(t, n)
    }

    function ps(t, i, n, e) {
        if (Array[Xc](i)) for (var s = i[sh]; --s >= 0;) ps(t, i[s], n, e); else {
            var r = i[Kc];
            if (r) {
                if (r instanceof hq || (r = t[r]), !r) return
            } else r = t;
            if (e || (e = t[Jc](i.property, n)), i[Zc] && (r[i[Zc]] = e), i[Qc]) {
                var h = i[Qc];
                h instanceof Function || (h = t[h]), h instanceof Function && h[rh](t, e, r)
            }
        }
    }

    function Es() {
        aq[Hu](function (t) {
            this[t] = {}
        }, this)
    }

    function ws(t, i, n, e) {
        return e == KY[t_] ? void(t[n] = i) : e == KY[i_] ? void t.set(n, i) : e == KY[n_] ? void t[e_](n, i) : !1
    }

    function Ts() {
        w(this, Ts, arguments)
    }

    function ks() {
        w(this, ks, arguments)
    }

    function Os(t, i, n, e, s, r) {
        var h = Ss(t, i, n, e), a = [];
        return Ls(t) ? As(h, i, n, a, e.getStyle(oq[s_]), s, r) : Gs(t, i, n, a, h, e, s, r), a
    }

    function Ss(t, i, n) {
        if (null != t) {
            if (t == KY[r_] || t == KY[h_] || t == KY[a_] || t == KY[o_] || t == KY[f_]) return !0;
            if (t == KY[u_] || t == KY.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == KY.EDGE_TYPE_VERTICAL_HORIZONTAL || t == KY[c_] || t == KY.EDGE_TYPE_EXTEND_BOTTOM) return !1
        }
        var e = js(i, n), s = Rs(i, n);
        return e >= s
    }

    function As(t, i, n, e, s) {
        t ? Ws(i, n, e, s) : qs(i, n, e, s)
    }

    function Ms(t, i) {
        return i[__](oq[d_])
    }

    function Is(t) {
        return null != t && (t == KY[c_] || t == KY[o_] || t == KY[l_] || t == KY[f_])
    }

    function Ls(t) {
        return t && (t == KY[v_] || t == KY[r_] || t == KY.EDGE_TYPE_ELBOW_VERTICAL)
    }

    function Ps(t, i, n, e, s, r, h) {
        if (t == KY[a_]) return {x: h.x, y: r.y};
        if (t == KY[b_]) return {x: r.x, y: h.y};
        var a;
        if (Is(t)) {
            var o = Math.min(n.y, e.y), f = Math.min(n.x, e.x), u = Math.max(n.bottom, e[ha]),
                c = Math.max(n[aa], e.right);
            if (a = s[__](oq[s_]), t == KY[c_]) return new $H((f + c) / 2, o - a);
            if (t == KY.EDGE_TYPE_EXTEND_LEFT) return new $H(f - a, (o + u) / 2);
            if (t == KY[l_]) return new $H((f + c) / 2, u + a);
            if (t == KY[f_]) return new $H(c + a, (o + u) / 2)
        }
        var _ = Ms(t, s);
        if (a = _ ? Ds(t, i, n, e, s[__](oq[y_])) : s.getStyle(oq[g_]), a == Number[x_] || a == Number.POSITIVE_INFINITY) return new $H(e.x + e.width / 2, e.y + e.height / 2);
        if (0 == a) return new $H(n.x + n[La] / 2, n.y + n[ua] / 2);
        if (i) {
            var d = n.x + n[aa] < e.x + e[aa];
            return new $H($s(d, a, n.x, n[La]), n.y + n[ua] / 2)
        }
        var l = n.y + n[ha] < e.y + e.bottom;
        return new $H(n.x + n[La] / 2, $s(l, a, n.y, n[ua]))
    }

    function Cs(t, i, n, e) {
        var s = Math.max(i, e) - Math.min(t, n);
        return s - (i - t + e - n)
    }

    function js(t, i) {
        var n = Math.max(t.x + (t[La] || 0), i.x + (i.width || 0)) - Math.min(t.x, i.x);
        return n - (t.width || 0) - (i[La] || 0)
    }

    function Rs(t, i) {
        var n = Math.max(t.y + (t[ua] || 0), i.y + (i.height || 0)) - Math.min(t.y, i.y);
        return n - (t[ua] || 0) - (i.height || 0)
    }

    function Ds(t, i, n, e, s) {
        var r = Ns(s, i, n, e, null);
        return r * s
    }

    function Ns(t, i, n, e) {
        return i ? Bs(t, n.x, n[aa], e.x, e[aa]) : Bs(t, n.y, n[ha], e.y, e.bottom)
    }

    function Bs(t, i, n, e, s) {
        var r = Cs(i, n, e, s), h = e + s > i + n;
        if (r > 0) {
            if (1 == t) return r + (s - e) / 2;
            if (t >= 0 && 1 > t) return r;
            if (0 > t) return h ? e - i : n - s
        }
        return Math.abs(h && t > 0 || !h && 0 > t ? n - s : i - e)
    }

    function $s(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
    }

    function Fs(t, i) {
        var n = t.length;
        if (!(3 > n)) {
            var e = i[__](oq[m_]);
            if (e != KY.EDGE_CORNER_NONE) {
                var s = i[__](oq[p_]), r = 0, h = 0;
                s && (D(s) ? r = h = s : (r = s.x || 0, h = s.y || 0));
                for (var a, o, f, u, c = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
                    var v = t[l], b = _.x - c.x, y = _.y - c.y, m = v.x - _.x, p = v.y - _.y,
                        E = !b || b > -nU && nU > b, w = !y || y > -nU && nU > y, T = !m || m > -nU && nU > m,
                        k = !p || p > -nU && nU > p, O = w;
                    (E && k || w && T) && (O ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, r), o = Math.min(l == n - 1 ? Math.abs(p) : Math.abs(p) / 2, h), f = new $H(_.x - (b > 0 ? a : -a), _.y), u = new $H(_.x, _.y + (p > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(m) : Math.abs(m) / 2, r), o = Math.min(2 == l ? Math.abs(y) : Math.abs(y) / 2, h), f = new $H(_.x, _.y - (y > 0 ? o : -o)), u = new $H(_.x + (m > 0 ? a : -a), _.y)), x(t, _), l--, n--, (f.x != c.x || f.y != c.y) && (g(t, f, l), l++, n++), e == KY.EDGE_CORNER_BEVEL ? (g(t, u, l), l++, n++) : e == KY[E_] && (g(t, [_, u], l), l++, n++)), c = _, _ = v
                }
                null != d && u.x == _.x && u.y == _.y && x(t, _)
            }
        }
    }

    function Gs(t, i, n, e, s, r, h, a) {
        var o = r[__](oq.EDGE_CONTROL_POINT), f = null == o;
        if (null != o) {
            var u = (new HH)[w_](i).union(n);
            u.intersects(o) || (s = zs(o.x, o.y, u.y, u.x, u[ha], u[aa]))
        } else o = Ps(t, s, i, n, r, h, a);
        s ? Us(i, n, o, e, f, h, a) : Ys(i, n, o, e, f, h, a)
    }

    function zs(t, i, n, e, s, r) {
        return n > i && n - i > e - t && n - i > t - r || i > s && i - s > e - t && i - s > t - r ? !1 : !0
    }

    function Hs(t, i, n) {
        return i >= t.x && i <= t[aa] && n >= t.y && n <= t[ha]
    }

    function Ys(t, i, n, e, s, r, h) {
        var a = Math.max(t.y, i.y), o = Math.min(t.y + t.height, i.y + i[ua]), f = null != n ? n.y : o + (a - o) / 2,
            u = r ? r.x : t.x + t.width / 2, c = h ? h.x : i.x + i.width / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t.width && (u = n.x), n.x >= i.x && n.x <= i.x + i[La] && (c = n.x)), Hs(i, u, f) || Hs(t, u, f) || e[_h](new $H(u, f)), Hs(i, c, f) || Hs(t, c, f) || e.push(new $H(c, f)), 0 == e[sh]) if (null != n) Hs(i, n.x, f) || Hs(t, n.x, f) || e.push(new $H(n.x, f)); else {
            var _ = Math.max(t.x, i.x), d = Math.min(t.x + t[La], i.x + i.width);
            e[_h](new $H(_ + (d - _) / 2, f))
        }
    }

    function Us(t, i, n, e, s, r, h) {
        var a = Math.max(t.x, i.x), o = Math.min(t.x + t.width, i.x + i.width), f = null != n ? n.x : o + (a - o) / 2,
            u = r ? r.y : t.y + t[ua] / 2, c = h ? h.y : i.y + i[ua] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[ua] && (u = n.y), n.y >= i.y && n.y <= i.y + i[ua] && (c = n.y)), Hs(i, f, u) || Hs(t, f, u) || e[_h](new $H(f, u)), Hs(i, f, c) || Hs(t, f, c) || e[_h](new $H(f, c)), 0 == e[sh]) if (null != n) Hs(i, f, n.y) || Hs(t, f, n.y) || e[_h](new $H(f, n.y)); else {
            var _ = Math.max(t.y, i.y), d = Math.min(t.y + t[ua], i.y + i[ua]);
            e[_h](new $H(f, _ + (d - _) / 2))
        }
    }

    function Ws(t, i, n, e) {
        var s = i.x + i[La] < t.x, r = t.x + t.width < i.x, h = s ? t.x : t.x + t[La], a = t.y + t.height / 2,
            o = r ? i.x : i.x + i.width, f = i.y + i.height / 2, u = e, c = s ? -u : u, _ = new $H(h + c, a);
        c = r ? -u : u;
        var d = new $H(o + c, f);
        if (s == r) {
            var l = s ? Math.min(h, o) - e : Math.max(h, o) + e;
            n.push(new $H(l, a)), n.push(new $H(l, f))
        } else if (_.x < d.x == s) {
            var v = a + (f - a) / 2;
            n[_h](_), n.push(new $H(_.x, v)), n[_h](new $H(d.x, v)), n[_h](d)
        } else n[_h](_), n.push(d)
    }

    function qs(t, i, n, e) {
        var s = i.y + i[ua] < t.y, r = t.y + t[ua] < i.y, h = t.x + t[La] / 2, a = s ? t.y : t.y + t.height,
            o = i.x + i[La] / 2, f = r ? i.y : i.y + i[ua], u = e, c = s ? -u : u, _ = new $H(h, a + c);
        c = r ? -u : u;
        var d = new $H(o, f + c);
        if (s == r) {
            var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
            n[_h](new $H(h, l)), n[_h](new $H(o, l))
        } else if (_.y < d.y == s) {
            var v = h + (o - h) / 2;
            n.push(_), n[_h](new $H(v, _.y)), n[_h](new $H(v, d.y)), n[_h](d)
        } else n.push(_), n.push(d)
    }

    function Vs(t) {
        return t == KY.EDGE_TYPE_ORTHOGONAL || t == KY[h_] || t == KY.EDGE_TYPE_HORIZONTAL_VERTICAL || t == KY[T_] || t == KY.EDGE_TYPE_VERTICAL_HORIZONTAL || t == KY[c_] || t == KY.EDGE_TYPE_EXTEND_LEFT || t == KY[l_] || t == KY[f_] || t == KY[v_] || t == KY[r_] || t == KY[u_]
    }

    function Xs(t, i) {
        var n, e;
        i && i[La] && i[ua] ? (n = i[La], e = i[ua]) : n = e = isNaN(i) ? RH[k_] : i;
        var s = sq[O_](t, -n, -e / 2, n, e);
        return s || (s = new CU, s.moveTo(-n, -e / 2), s[lf](0, 0), s[lf](-n, e / 2)), s
    }

    function Ks(t, i) {
        var n = Math.sin(i), e = Math.cos(i), s = t.x, r = t.y;
        return t.x = s * e - r * n, t.y = s * n + r * e, t
    }

    function Js(t, i, n, e, s, r) {
        var h = Math[Po](e - i, n - t), a = new $H(s, r);
        return a[Xo] = h, Ks(a, h), a.x += t, a.y += i, a
    }

    function Zs(t, i, e, s, r, h) {
        i = si(s, i.x, i.y, e.x, e.y), e = si(r, e.x, e.y, i.x, i.y);
        var a = Math.PI / 2 + Math[Po](e.y - i.y, e.x - i.x), o = t * Math.cos(a), f = t * Math.sin(a);
        i.x += o, i.y += f, e.x += o, e.y += f;
        var u = e.x - i.x, c = e.y - i.y;
        if (h == KY[S_]) {
            var _ = Math[Lo](u * u + c * c), d = 5;
            return _ > 2 * d && (a = Math[Po](e.y - i.y, e.x - i.x), u = d * Math.cos(a), c = d * Math.sin(a), i.x += u, i.y += c, e.x -= u, e.y -= c), [new LU(OU, [i.x, i.y]), new LU(OU, [e.x, e.y])]
        }
        return [new LU(AU, [i.x + .25 * u, i.y + .25 * c, i.x + .75 * u, i.y + .75 * c, n, n])]
    }

    function Qs(t, i, e) {
        if (g(t, new LU(kU, [i.x, i.y]), 0), e) {
            if (t[sh] > 1) {
                var s = t[t[sh] - 1];
                if (SU == s[Vo] && (s[jf] || s[No][2] === n || null === s.points[2])) return s[No][2] = e.x, s[No][3] = e.y, void(s[jf] = !0);
                if (AU == s[Vo] && (s[jf] || s[No][4] === n || null === s[No][4])) return s[No][4] = e.x, s.points[5] = e.y, void(s[jf] = !0)
            }
            t[_h](new LU(OU, [e.x, e.y]))
        }
    }

    function tr(t, i, n) {
        var e = i[A_](t.getStyle(oq[M_]), n), s = t[__](oq[I_]);
        return s && (e.x += s.x || 0, e.y += s.y || 0), e
    }

    function ir(t, i, n) {
        var e = i[A_](t.getStyle(oq[L_]), n), s = t[__](oq[P_]);
        return s && (e.x += s.x || 0, e.y += s.y || 0), e
    }

    function nr(t, i, n, e, s) {
        var r = e == s, h = t[C_][j_](e), a = r ? h : t[C_][j_](s);
        if (h && a) {
            var o = i[R_], f = t.getEndPointBounds(h), u = r ? f : t[D_](a), c = i[N_]();
            if (r && !c) return t[B_](t.path, h, o, f);
            var _ = tr(t, h, f), d = ir(t, a, u);
            if (!r && !o && !c) {
                var l = e[zc], v = s[zc];
                if (l != v) {
                    var b, y, g, x, m = i.angle;
                    l ? (b = h, y = f, g = a, x = u) : (b = a, y = u, g = h, x = f);
                    var p = or(y, b, l, g, x, m);
                    if (p && 2 == p[sh]) {
                        var E = p[0], w = p[1];
                        return n.moveTo(E.x, E.y), w.x == E.x && w.y == E.y && (w.y += .01), n.lineTo(w.x, w.y), void(n._6e = !0)
                    }
                }
            }
            t._3i(i, n, h, a, o, f, u, _, d), (!r || c) && er(t, i, n, h, a, o, f, u, _, d), n._6e = !0
        }
    }

    function er(t, i, e, s, r, h, a, o, f, u) {
        var c = t[$_], _ = t[F_];
        if (!c && !_) return void Qs(e._f6, f, u);
        var d = e._f6;
        if (d[sh]) {
            if (c) {
                var l = d[0], v = l[G_];
                sr(s, a, v, f, n, n)
            }
            if (_) {
                var b, y = d[d.length - 1], g = y[qo], x = y[No][sh], m = y[jf] || g.x === n || g.y === n;
                x >= 4 && (m || o[z_](g.x, g.y)) && (m || (u = g), b = !0, g = {
                    x: y[No][x - 4],
                    y: y[No][x - 3]
                }, o[z_](g.x, g.y) && (u = g, x >= 6 ? (g = {
                    x: y[No][x - 6],
                    y: y[No][x - 5]
                }, y[No] = y[No].slice(0, 4), y[Vo] = SU) : 1 == d[sh] ? (g = {
                    x: f.x,
                    y: f.y
                }, y.points = y[No][ah](0, 2), y[Vo] = OU) : (y = d[d.length - 2], g = y[qo]))), sr(r, o, g, u, n, n), b && (x = y[No].length, y.points[x - 2] = u.x, y[No][x - 1] = u.y, u = null)
            }
        } else {
            var p = Math[Po](u.y - f.y, u.x - f.x), E = Math.cos(p), w = Math.sin(p);
            c && sr(s, a, u, f, E, w), _ && sr(r, o, f, u, -E, -w)
        }
        Qs(e._f6, f, u)
    }

    function sr(t, i, e, s, r, h) {
        if (r === n) {
            var a = Math.atan2(e.y - s.y, e.x - s.x);
            r = Math.cos(a), h = Math.sin(a)
        }
        for (e = {x: e.x, y: e.y}, i.contains(e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y)); ;) {
            if (!i.contains(e.x, e.y)) return s;
            if (t.hitTest(e.x - r, e.y - h, RH.LOOKING_EDGE_ENDPOINT_TOLERANCE)) {
                s.x = e.x - r / 2, s.y = e.y - h / 2;
                break
            }
            e.x -= r, e.y -= h
        }
        return s
    }

    function rr(t, i, n, e, s, r, h, a) {
        if (i[N_]()) return i._91;
        var o = i[R_];
        if (Vs(o)) {
            var f = Os(o, n, e, t, h, a);
            if (!f || !f.length) return null;
            g(f, h, 0), f[_h](a), o != KY[v_] && Fs(f, t);
            for (var u = [], c = f[sh], _ = 1; c - 1 > _; _++) {
                var d = f[_];
                u[_h]($(d) ? new LU(SU, [d[0].x, d[0].y, d[1].x, d[1].y]) : new LU(OU, [d.x, d.y]))
            }
            return u
        }
        if (i[H_]) {
            var l = t._1v();
            if (!l) return;
            return Zs(l, h, a, n, e, t[__](oq.EDGE_BUNDLE_TYPE))
        }
    }

    function hr(t, i, n) {
        var e = t.getStyle(oq[Y_]), s = t._1v(), r = e + .2 * s, h = i.x + i[La] - r, a = i.y, o = i.x + i.width,
            f = i.y + r;
        e += s;
        var u = .707, c = -.707, _ = i.x + i[La], d = i.y, l = _ + u * e, v = d + c * e, b = {x: h, y: a},
            y = {x: l, y: v}, g = {x: o, y: f}, x = b.x, m = y.x, p = g.x, E = b.y, w = y.y, T = g.y,
            k = ((T - E) * (w * w - E * E + m * m - x * x) + (w - E) * (E * E - T * T + x * x - p * p)) / (2 * (m - x) * (T - E) - 2 * (p - x) * (w - E)),
            O = ((p - x) * (m * m - x * x + w * w - E * E) + (m - x) * (x * x - p * p + E * E - T * T)) / (2 * (w - E) * (p - x) - 2 * (T - E) * (m - x)),
            r = Math[Lo]((x - k) * (x - k) + (E - O) * (E - O)), S = Math[Po](b.y - O, b.x - k),
            A = Math.atan2(g.y - O, g.x - k), M = A - S;
        return 0 > M && (M += 2 * Math.PI), ar(k, O, S, M, r, r, !0, n)
    }

    function ar(t, i, n, e, s, r, h, a) {
        var o, f, u, c, _, d, l, v, b, y, g;
        if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math[uh](Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, u = n, _ > 0) {
            d = t + Math.cos(u) * s, l = i + Math.sin(u) * r, moveTo ? a[df](d, l) : a[lf](d, l);
            for (var x = 0; _ > x; x++) u += f, c = u - f / 2, v = t + Math.cos(u) * s, b = i + Math.sin(u) * r, y = t + Math.cos(c) * (s / Math.cos(f / 2)), g = i + Math.sin(c) * (r / Math.cos(f / 2)), a[wc](y, g, v, b)
        }
    }

    function or(t, i, n, e, s, r) {
        var h = s.cx, a = s.cy, o = Math.cos(r), f = Math.sin(r), u = ur(i, t, {x: h, y: a}, -o, -f);
        if (!u) {
            var c = h < t.x, _ = h > t.right, d = a < t.y, l = a > t[ha], v = t.cx, b = t.cy, y = c || _, g = d || l;
            r = Math[Po](a - b, h - v), y || g || (r += Math.PI), o = Math.cos(r), f = Math.sin(r), u = ur(i, t, {
                x: h,
                y: a
            }, -o, -f) || {x: v, y: b}
        }
        var x = ur(e, s, {x: u.x, y: u.y}, -u.perX || o, -u.perY || f, !1) || {x: h, y: a};
        return n ? [u, x] : [x, u]
    }

    function fr(t, i, n, e, s, r) {
        var h = i < t.x, a = i > t[aa], o = n < t.y, f = n > t[ha];
        if (h && e > 0) {
            var u = t.x - i, c = n + u * s / e;
            if (c >= t.y && c <= t[ha]) return {x: t.x, y: c, perX: e, perY: s}
        }
        if (a && 0 > e) {
            var u = t[aa] - i, c = n + u * s / e;
            if (c >= t.y && c <= t[ha]) return {x: t[aa], y: c, perX: e, perY: s}
        }
        if (o && s > 0) {
            var _ = t.y - n, d = i + _ * e / s;
            if (d >= t.x && d <= t[aa]) return {x: d, y: t.y, perX: e, perY: s}
        }
        if (f && 0 > s) {
            var _ = t.bottom - n, d = i + _ * e / s;
            if (d >= t.x && d <= t[aa]) return {x: d, y: t[ha], perX: e, perY: s}
        }
        return r !== !1 ? fr(t, i, n, -e, -s, !1) : void 0
    }

    function ur(t, i, n, e, s, r) {
        if (!i[z_](n.x, n.y)) {
            if (n = fr(i, n.x, n.y, e, s, r), !n) return;
            return cr(t, i, n, n.perX, n[U_])
        }
        return r === !1 ? cr(t, i, n, e, s) : cr(t, i, {x: n.x, y: n.y, perX: e, perY: s}, e, s) || cr(t, i, n, -e, -s)
    }

    function cr(t, i, n, e, s) {
        for (; ;) {
            if (!i[z_](n.x, n.y)) return;
            if (t[W_](n.x + e, n.y + s)) break;
            n.x += e, n.y += s
        }
        return n
    }

    function _r(t) {
        return Sn(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) || /^data:image\/(\w+\+?\w+);base64,/i[sf](t) ? t : (t = Z(t), t instanceof Object && t[kf] ? t : void 0)
    }

    function dr(t) {
        for (var i = t.parent; i;) {
            if (i[q_]) return i;
            i = i[hc]
        }
        return null
    }

    function lr() {
        w(this, lr, arguments)
    }

    function vr(t, n, e, s, r, h, a) {
        var o = i[V_](X_);
        o[Mh] = K_, bi(o, Oq), n && bi(o, n);
        var f = i[V_](J_);
        return h && (CH && (f[Z_] = h), TY || (f[Q_] = h)), f[Th] = a, f.src = e, bi(f, Sq), r && bi(f, r), s && gi(f, td, id), o[nd] = f, o[ed](f), t.appendChild(o), o
    }

    function br(t, n) {
        this[sd] = i[V_](X_), this[sd][Mh] = rd, bi(this[sd], {
            "background-color": hd,
            overflow: ad,
            "user-select": od,
            position: fd
        }), this._top = vr(this._navPane, {width: ud}, RH[cd], !1, null, n, _d), this[dd] = vr(this[sd], {height: ud}, RH[ld], !1, Aq, n, Tf), this[vd] = vr(this._navPane, {
            height: ud,
            right: bd
        }, RH[ld], !0, Aq, n, aa), this[yd] = vr(this[sd], {
            width: ud,
            bottom: bd
        }, RH[cd], !0, null, n, ha), t[ed](this[sd])
    }

    function yr(t, i) {
        if (!RH[ld]) {
            var n = Di(20, 40), e = n.g;
            e[mo](e[lo], e[lo]), e.moveTo(16, 4), e.lineTo(4, 20), e[lf](16, 36), e.lineWidth = 3, e[gd] = Fo, e.lineJoin = Fo, e.strokeStyle = bf, e[xd] = md, e.shadowBlur = 5, e[zo](), RH.NAVIGATION_IMAGE_LEFT = n.toDataURL();
            var s = Di(n[ua], n[La], !1);
            s.g[xo](s[La], 0), s.g.rotate(Math.PI / 2), s.g[pd](n, 0, 0), RH[cd] = s[Ed]()
        }
        this[ec] = t;
        var r = function (i) {
            z(i);
            var n, e, s = i[Kc], r = s[Th];
            if (Tf == r) n = 1; else if (aa == r) n = -1; else if (_d == r) e = 1; else {
                if (ha != r) return;
                e = -1
            }
            CH && (s[Mh] = wd, setTimeout(function () {
                s[Mh] = ""
            }, 100)), z(i), t._ko._94(n, e)
        };
        br.call(this, i, r), this._3e(i.clientWidth, i[Td])
    }

    function gr(t, i) {
        this[ec] = t, this[kd](i, t)
    }

    function xr() {
        w(this, xr, arguments)
    }

    function mr(t, i) {
        this._n9aseCanvas = t, this._je = be(i), this.g = this._je.g, this._9l = new DH
    }

    function pr(t) {
        var i = t[Od], n = [];
        return t.graphModel[Hu](function (i) {
            t[Sd](i) && t.isSelectable(i) && n[_h](i)
        }), i.set(n)
    }

    function Er(t, i, n, e) {
        var s = t.bounds;
        n = n || s, i = i || 1;
        var r = null;
        r && n[La] * n.height * i * i > r && (i = Math.sqrt(r / n[La] / n[ua]));
        var h = Di();
        ee(h.g), h[La] = n[La] * i, h[ua] = n[ua] * i, t._8m._gh(h.g, i, n);
        var a = null;
        try {
            a = h[Ed](e || Ad)
        } catch (o) {
            XY.error(o)
        }
        return {canvas: h, data: a, width: h.width, height: h[ua]}
    }

    function wr(t) {
        this[C_] = t, this[Md] = t[Md]
    }

    function Tr(t, i) {
        this.interactions = t, this.defaultCursor = i || Id
    }

    function kr() {
        w(this, kr, arguments)
    }

    function Or(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e
    }

    function Sr() {
        w(this, Sr, arguments)
    }

    function Ar(t, i, n, e) {
        var s;
        return t[Ld](function (r) {
            var h = r[Yo];
            return h instanceof XY[Pd] && (!e || e(h) !== !1) && r[Cd][$o](i - r.x, n - r.y) && r[W_](i, n, RH[jd] / t[mo]) ? (s = h, !1) : void 0
        }), s
    }

    function Mr(t) {
        this[rc] = t[Bo](), this[No] = t.getPortPoints(), this.defaultPoint = t.getDefaultPortPoint()
    }

    function Ir() {
        w(this, Ir, arguments)
    }

    function Lr() {
        w(this, Lr, arguments)
    }

    function Pr() {
        w(this, Pr, arguments)
    }

    function Cr(i, n, e) {
        i += t[Ra], n += t.pageYOffset;
        var s = e[Ia]();
        return {x: i + s[Tf], y: n + s.top}
    }

    function jr(t, i, n) {
        var e = t.offsetWidth, s = t[Rd];
        t[pa][Tf] = i - e / 2 + ho, t[pa].top = n - s / 2 + ho
    }

    function Rr(t) {
        var n = i.createElement(co), e = n[mf](_o), s = getComputedStyle(t, null), r = s[wo];
        r || (r = s[Dd] + jh + s[Nd] + jh + s[Bd]), e[wo] = r;
        var h = t[kh], a = h[Ch](Oo), o = parseInt(s[Nd]), f = 0, u = 0;
        return XY[Hu](a, function (t) {
            var i = e.measureText(t)[La];
            i > f && (f = i), u += 1.2 * o
        }), {width: f, height: u}
    }

    function Dr(t, n) {
        if (Dh == typeof t[$d] && Dh == typeof t[Fd]) {
            var e = t.value, s = t[$d];
            t.value = e[ah](0, s) + n + e[ah](t[Fd]), t[Fd] = t[$d] = s + n[sh]
        } else if (Gd != typeof i[zd]) {
            var r = i.selection[Hd]();
            r.text = n, r[Yd](!1), r.select()
        }
    }

    function Nr(i) {
        if (pH) {
            var n = t[Ud] || t[Ra], e = t[Wd] || t[Da];
            return i[qd](), void t[Vd](n, e)
        }
        i[qd]()
    }

    function Br() {
    }

    function $r() {
        w(this, $r, arguments), this[Xd] = CH ? 8 : 5
    }

    function Fr(t) {
        return t.type == SU || t[Vo] == AU
    }

    function Gr() {
        w(this, Gr, arguments), this[Xd] = CH ? 8 : 4, this._rotateHandleLength = CH ? 30 : 20
    }

    function zr(t, i) {
        var n = new HH;
        return n.addPoint(Kn[rh](t, {x: i.x, y: i.y})), n[ro](Kn[rh](t, {
            x: i.x + i[La],
            y: i.y
        })), n[ro](Kn[rh](t, {x: i.x + i[La], y: i.y + i[ua]})), n[ro](Kn[rh](t, {x: i.x, y: i.y + i[ua]})), n
    }

    function Hr(t) {
        t %= 2 * Math.PI;
        var i = Math[Fo](t / Lq);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : Kd
    }

    function Yr() {
    }

    function Ur(n, e, s) {
        var r = i[Jd], h = new HH(t[Ra], t.pageYOffset, r[Ma] - 2, r.clientHeight - 2), a = n[Zd], o = n[Rd];
        e + a > h.x + h[La] && (e = h.x + h[La] - a), s + o > h.y + h[ua] && (s = h.y + h[ua] - o), e < h.x && (e = h.x), s < h.y && (s = h.y), n.style[Tf] = e + ho, n[pa].top = s + ho
    }

    function Wr(t) {
        this[Qd] = t, this[tl] = function (t) {
            return this._kk && (this[il] ? (cancelAnimationFrame(this._kk), this[il] = null) : clearTimeout(this._kk), this._kk = null), t === !0 || t === !1 ? void this._nbction() : t ? void(this._kk = setTimeout(function () {
                this[Qd](), this._kk = null
            }[Sh](this), t)) : (this[il] = !0, void(this._kk = requestAnimationFrame(function () {
                this._nbction(), this._kk = null, this[il] = null
            }[Sh](this))))
        }
    }

    function qr(t, i, n, e, s) {
        this.source = t, this[Vo] = nl, this[el] = i, this.event = n, this[Yo] = e, this.datas = s
    }

    function Vr(t) {
        this._4s = {}, this._ko = t, this._ko._1f.addListener(this._98, this), this[sl] = KY.INTERACTION_MODE_DEFAULT
    }

    function Xr(t) {
        return t >= 100 && 200 > t
    }

    function Kr(t) {
        return t == qq || t == iV || t == tV || t == Kq || t == sV || t == rV
    }

    function Jr() {
        var t, i, n = {}, e = [], s = 0, r = {}, h = 0;
        this.graph[Hu](function (a) {
            if (this[rl](a)) if (a instanceof nq) {
                var o = {node: a, id: a.id, x: a.x, y: a.y};
                for (this[hl] && this.appendNodeInfo(a, o), n[a.id] = o, e[_h](o), s++, i = a.parent; i instanceof rq;) {
                    t || (t = {});
                    var f = t[i.id];
                    f || (f = t[i.id] = {id: i.id, children: []}), f[hh][_h](o), i = i[hc]
                }
            } else if (a instanceof iq && !a[lc]() && a[cc] && a[ac]) {
                var o = {edge: a};
                r[a.id] = o, h++
            }
        }, this);
        var a = {};
        for (var o in r) {
            var f = r[o], u = f[Yc], c = u[cc], _ = u[ac], d = c.id + ga + _.id, l = _.id + ga + c.id;
            if (n[c.id] && n[_.id] && !a[d] && !a[l]) {
                var v = n[c.id], b = n[_.id];
                f[al] = v, f.to = b, a[d] = f, this[ol] && this[ol](u, f)
            } else delete r[o], h--
        }
        return {groups: t, nodesArray: e, nodes: n, nodeCount: s, edges: r, edgeCount: h, minEnergy: this[fl](s, h)}
    }

    function Zr(t) {
        this.graph = t, this[ul] = {}
    }

    function Qr() {
        w(this, Qr, arguments)
    }

    function th(t, i, n, e, s) {
        e ? t[pc](function (e) {
            var r = e[cl](t);
            r != n && r[_l] != s && i(r, t)
        }, this, !0) : t[dl](function (e) {
            var r = e.toAgent;
            r != n && r._marker != s && i(r, t)
        })
    }

    var ih = "f1a767550a16458176eed9196f823989e2abb395f32dc27b8fff15751c137837e53b9b63478cfba5fc4dd2ad623392eaa820e3921b36224968983bafe4db1e87b9149981620c1a893ac1c2a21d0fef4a3d12a8ff18559be9248979e84cd5bc94d5c7798320ab7bc10975af0078e538f5ae69c6f0055bad6c4a5783415ced64d364d1a8c7793b17f392968cc18a7b3da7f0314131ef5d16726377ff4f84acfea68253ade2eb987ee6e0bb08ba46d8f3b93a5143109a4d8fbc75140579c09e69b5481e736f11716ec58c534f8a861b6d91f18d07e9759b532f979e83c75dd698d432756bc591d74dfa76a4892947b687818030933bbed27408346d37242e6baa39a43f886c4dd80b4093237dcb54d796df145c5f673f765ca9df4433dfcb3296306749f5c126256727807d8553d7169e91a8a95a0957c3cc125775e0e8f64db7d88c104f787ad1ae01300d0d17b74b41c540af2eb6195c0bb1d9551333c208ae3e9a632430e92fa72ecd687701c05a239eacab6cf27c7c1b32d896e742e8a8f0b681a27c944771db309286d77c65234dd61d3067c0b8072319054113e3ea42b64244fce54b30e5e1005eecc8873a686c14b01769f78df3de33f01650da2a80dc29a293db1c3adebcd1f81e62a9ed7a37f3b950bec11da5c588527897e44d4bbf3a3f167608fd5b8cc7af7f5463510ce38f7291709ff3cdaa1c4c424d5340d983246b2a58a039f7be0d3e7c654b429ec8b814c31836e38d5341a687665e16ac6cc6914e2246476dfa2d6c9a3a7b1345858657c594bfd878e1f075229bbb6dafc537a1cff17495fb16b9fc540c89f7ed0d76cea3adf008d10f72d59e9c39e7d542c371ceb462c9e3852f0753a81168946cc9deae84d579c38ce703071d1c935ba007c167a998326d12213ad2f7b22efa814c6b66d47a2daecb6cb4bb4e8ab5ef922d4a24aef51c98db424b83743dfa1d5754885a973ead9387fbb34aa1944c0b4a0dd87184b8b60701def585fa76a30cce8e4af1f1da152bf958bf44d4394fd4bf9bd3c8a74aaa232026b660076416da0bcc961bab22903542e67b524fa09cd72fed702d6c85118a74df8e4f8412fed0fec13dc8eedd2b536b26712f018180d91d2b5ed0c87cf6122e1f6b380dbd9c9e91120be69a99021edbdb6256ad9f0adfcba15d1062d86bc444577759b3fb862d509e75fc8817fa61255586405c5f9d7a3f8906eb38b1c84b12df4a92bb0acd6eac4aeddeccf076010df10703d7f61b3e17f1e3a20d016301ba3797a49e25e659ef78677beacec3a2faa4e579f87480cdca368655c1c2af87c3ecb69666c64f53b3f7cf660ff09c56c2f4f76db1300d65e932e3e0a038986654140091a67c776bc12c7a9860feb0563d9f6bb01fae21962973f6eeab41f588d3e515668c61c5fa6a5507190d7f37e1e350548b55ce171096faa1e8b41f22c87bc6ba7cfa7aaccb929f6918d0cc82ad2e59f59941fb668ca4d25b6fafb00d18fb3efef5ddb07dd82795d0733520f8aaac7ebce57faadc48117264f39b4b45d34d97aa3217bab03a45bf1870ac4c53fab3e1d41e844ba88372118e389dd02e501ce711c11fe94f03601356d3705ec9af10e499506e72f7aa3e9b1769b5e1577fb215e1c4eb388d4a315df5cab29be66f204eb7d03fb99b13c08b579de60a2efdecfad85aed6675b14b9877b9167a5e7f14f8197f83c04ee4d0512b906a0d9dbd7731a5e99eb512fba9d11ea609aafe75208cd12e4208308b82e4c0ef0be69748e508957777bd4d3aabcf094a42d96cbc27996c69421df77d9f111336da73113763032d2958e6c316da6fff09fde8ad56a8615f3ab0048319c3ccc795c255d38c25eee825d76bfc70e45ba38d62893663fffd97cd2b0a6065a195c819e32b9565fd1fae619a8f52c90ba4805bf77075e3ea04ef1f2f6fd7e10e2a0d529720b2bfbe1ca9250084c9b1390268ea1c1a415c702acc87990520f522722e490867f0a1e3b0c5ef7837458b687be1fde72af2abf2f8bf5a10463e853d9fb5e38dfedd3d13891d46abf498b3b89865c6a530dfa0542f921ee40dcf6d4b28eb7a5c30c319ec60d05fc5df1e18512199c40323da99820b638e0f9d9ccee472aea368865dd206f8a2f257562a2b8938b826904839674b0adc152cb9c8b1e5bf5f8dbe140336a4fa695226516798635a0b03be18ebf30e2128ed74bee2e98d594c76ef3a60ce3271896a905bcacb7f9dea15d33bd2f1898a3cc3533a446140dcb19d1ed0aada38137e1f98acaecbb18e56330b425c9a63871b5389ff1f139fa1c5dbe4f64e34359b63a13e622d2c9bb53a40ecc12c9100cb554a7edb3de73020ce5e2b7fef1150aab1f477a192025867ec3020367c2010c7fb043d2862adfc715b74ee0648dd0dba3ddbf68ebc880daeb3643f432418a018c601257e796f0de87071604fc0cacab829160ea3a8946882f1aecd29b481a0e60d61ead8cd5b5f3f3460fd60de864eb49b5d9113ec53441e7e36fb14e189c692d0f6b6427911b30ca3f4b63e14e83b2c30f00269223e48c8dea2547c06083e23156ec80d60c2bc67253cea0eb8ed44026e2f86d163ba1f42a73ea6e99e72efc8889a9176085f4a4ed9c983b08df4da91113be714a12ede2828082a4394c0edfeff6962df68d65caf6ca352ec4f841cad2e05bacbd1090660032c9a6804f17b380f6867c4bf189c3d0fdcc6ba144db0ea7aa9b9c268cd6ab5c274b63a78950f73d38b57c406c7f1d8d07d4036c1f99424b20d48897c96e0e22bc64bbe394a8406608ffab5c6f27d7f1193344caa18b898b8b5a141d2814c6e6680f2a4f53699dca078d72888e0d3de977243852f37703daf16c646506aeb05adaacad5b2f1c168546cc513e065b30c99f78b1d0ace437a3c81e20c204d5b9b81d55f07ed06cefd9d2131db8a4fbe32df2a1fdb02e6c0895fad3d960e34a66bd15c3367dc22c05a0d660195325dfb89ebdfa31b7e6a0a344be64cd5c464db2b77fabb453d19b7a8b7b6b4b6b510779b2b0bea9f0127bd87c328a0f8204a371d203c177d572f067c1f10b9fff815cf9d5a3315695907d86633660db4122238ac20e99ef7873e196a119bc1de399f3f4742a3fbbdc0397d333bb0aa3af61170bf8f6a08e708feec560e606c86ab298befb137c300558e29dc9be34084b540553cb0ba23dd9759fd1573ee08142a81aac63ee2fd35087990507ee8b2d41773331145b1663ed1c130ca24152d90aa707f6ae9543a0a55d022962d0858caf4ca315c582294f4fa6963818e911d7e56acfccdf64285f7fc723943eae6881a6a04bbfc924364a7133a4cd3c57a2c1f3b5946a7be4f64d028211d9e664a35b39c611d5d4e1c69e3e017d0d76c149b02502d66bdbc87e2458c895fcb3470d1306075b2ab24cb222d62af54534f110e315bf086804838aa760508b9f39da2e50efbabe2424fcd518d07eabcda364b23b8fe1e5a42df4787abb68574ae78fd448842d3ef87a12a25153a7750680b96cdfd4c503d34a9d2385f7a1b30823a80d4190c6460a79453d40448321ab9fd6705b6b6898abc293250495d6243a88397c408f29a6cca0878b12681e526b0fc0ec55b95fa89bac7fe84e3b4eab5db119dc643fa6f8e86f97312d3cf478c825d57430e144e840b1a83f83e054903202cc161d29074baa45adc460170fb77247c59800eff280d20c48ca8777a9493591846914745a0fb0a3908c0ddef209762a7c85446de3ccd13dc1b196aaf7096513ce7a6f417704f99e61c4151a5c51b9f787fb4d556fa946e24f9a8e38a46fbeb524a4ea732cca7e9cf76b75463641dbe43212ab58e31db56a031d929766d5013e289854a7b5918f9956f113cffbc558500dede5457f599b661bf664892872c21aa61d908afb8db517f444c69aba9998f0f18c22eb90cfaeb50b478a5fbd40e5fc233670ed4b41f7272e3c718425a0045d93c752bc0a352bb6e4630ba6f6123eb86310869cf5c859c877192dd184bdb422b3ec59cf4b7852c7b62450087cb9fe4ad563b20d48203467f13bbaca930c34d7f1ebb5245ddb4dc06378e1ac47970f45235968963c91424022082ec189372a9316e96d5d84c0e02c03bff3f29982a48585db2f2e8c1e22f2f4c72ee8e462de61b6cde6e2bca48ec03d52333b63aacf4c288d364ddc5aef727f64026006482d7d6b73e38e192e1f6e5bc104f5dba436d8ac9e878baf981b816f7b3f6f7f407db04621f7440b06554d2be5fab6f95abc9a6119ee092d690a92f0aedfe22aa3f9e7c65094d84f2524578d12491b23709a95fdab11622e4e02ce8d25401bb8fa694c578b9ee0e629cc78c200eedc5d76152488c45c98c77bd50642b4ca352b0dba6c2c4b425585519dfc73ff64efe1185e0e10dc5211318f3f796fc99d56ace9c7ed29ce7498f026c0d8ef0f93d7203336bfd5d6dd21024d9d3c8cdb85f39aaab8c38d8faa826317613c97883f26081926b291415b2305c491382d8ca7adab06f77aa7ecac4e943f081e60df322f13de62c3f1bcc35f2bd051926c33e728035e8d40469571a006ee62133d9c8689e8cf58925e3984c9689233711f5a1763659067b56bbfc6d8f5bf8bbac067dd7bddc02ec879f3803766768f04d22c4932f696398ca69ed05cc6c9b946c4c3b241cb935c3a7f8178427f12aae61ca8eaea939a9e19d1ef01b1b68fae4412691a606172b4b3da566b689ad7430635cfdfdd3d9dfe0c7d26c74b01dc9aa903fc3cb105d5c977e51cc2eb3240f2f44bdfceed891171c5d41edaaa09134c52e6c37574db8b130e2477010ae0d7e7e04efb573b488693ad75a56768d6b53f6f6b718c002f146d91a1e665ff7cbce08351685f77efe309bc3e12dea3dcd0260f1ade7dada754d73ddb2a7eb517f444d42e30cc6f0601319298a0d622d892db9ab22d0f8fc2502af3c5445834988ec6a04412f477e6e09302d00692d190b954365967698a02aa5a2317cea03e9d8261d5ce1c267cd8e9bc72b8877f154c1779fb84c8f3266b220d812f4d575d2a16c8596ec6550e81154e19ff4ef0ff759db53dbcdc8462a1d8cbaf57ac78afc78c1c3c9efee6782689d02b911bb5dcd846acb09464a112e41ac77370d3b04451c7a8eff6aaa186328058d925750561494fe33aa0920290e27ea396fcb46cb243c25624117ecd84e15fc67fdfcba443cb9815ef15da714f8a3fa743888d145aa77f93f383d06fcf0977ee4a5cb0488badb62075575cfa76f18829c78eb5f3971dbf529fcd3883e058a6052aad8dc1d105648c3bad85b95d9586472fdcce65af4ef0a8c2b04eb9e1fc1aef6ead8bd6900357bfd55980742733211a0bf481a94ea566cbea31a8aa1d08bfc1dc64e21547721ae6cd698be6791dabed11b8188e3c4c3f52f5fdef1c71fc5d0ea7202497ba8d6684d6e2cc41b1ef0ff2db725fd496b5f75883ccff7b2de069dbaee2e09cb5c3571de0cf2f4202e26d8aeec94443e1b895e68b2aebbb8cf1c19892557f019b74fe10111c61e1206f26321175dc0339e5f63c1ceceb61254ba36c62e762546232089d1d052fb6045170f6b5494310c6c269c3f1d713172c067d3074f5df3c564d88abfb0bf8cc84ad84e31f480608daf3f0493d6fce5ee43afc1341a5c163e352079895b7f37d812a6fcb61ad249a5f6f6435e2d1761b7b6d7f1ec366b55e832a6f237a4b9677ef0e361abb58b386ea7e6871b701e4dc06378fd15f2fc8cd1d074cd33435fddfa331efb560962825bd23e89107d23fa35d9cc995486478b47661ebe55c0e12b3e164ec722f58f3fdd1c84f65bea5ffd2819e35d94497e9148886cda6a4d76a7ad6b6d590fc855225a47ccd0934094230608eb1aa69f5942a60977c9ce834fd0012c5c5655d8e4a261f0f3d16ce026e211ebe1e8dac0e4901bc14a7ff0b87a3ec55385189c8d0ecda74d22a10b509abc4f08f412468faedb63c918bb24be9dad70e7e8bd413e02bcb2beff15436961058aa42fa930715208af0ccdd8967687e7d8f25008dd5e5a648a10c23b07d3d79461398ccad70d1b3cbf76129b904fe61dae70ff6975808a7a57ebdf68fc2d90613fca85589fe13e46092a937117c5ee53703abf2478ad8fe79903fe7474bff4b2ebc2ae120be52f6191e573bdcb168d48092ec19803aabf435d87087f6a7c7199f8359e485a3b5e91cee7aec5b23a8af0bb917a83f223f232bacf404b56f9e564bd5223c5728274d77b2c8f1e02ee9cbbe8ac102f188ec56cd89faf33f4d3b69d1b4f1129a554d875e1086aab60677ca81bfc0d3ccf5b7de1e5f7b818a8b551ad0f8b724c8eb27c32382c5a636b5bc77f318a312cddb265b673f64a235fdfd7e5dbfb37efaa4e4f7967c3c063bd19fe97487d83d6c6be5764800b93326aa70fe3801d5bc072540b5de2ed526dfd3734262e985b6a3085509e651501a6c8fdc2dc2b61dae9cc576da0fd48302a03e56a4412968d986cf1c9f033d8abda71ba0796e22da3ea34a7173c27718925a9cc2b8c12a1264ad278ca6dae985cf164bafd8fb56f1294b1f0092d9209db2f9b3b2b0e672ce3c0ae51dc9a7645efea00641e6b1bb59e71f9604d1d6476458286784b7471d77b1a5e136466ef37db12116ffe30299c5e2c60086722a576e95b2977bb1f3527920bdc9e90a2c14763d1fb6e6fd0382b839b81d51514eec0d177c9842e8bd208e2ae0e4d2eef6a18db4038e11fbb43607913e2e4949d92f5351d56b43fa7ed71416e144d9a1a66149c914ea7fc87fcecc15edd5057f1b2b58e85ddfa40e826e23c1848d9401fedaea7e766872545d4676fb7541aca21aed5a22a6979f61a3cefb7cdd5093ba042da20448fe009c7127718d565e857eff87f351417a0d2a18c2c06cb4668183f987c19c63a0a57ad63c67752adada51a0db89268d12afc7e470fe8a5b2223d5c65ab55cdfd1f6340acd837bf89f76f5f8d36eff9bae33d46cd26adf069eef0cf4520518aee26793243227bc1721a80075ad0668609811dc398733ee7b03fa528c52ed8845eeab2df8857610eb4b1c87a6bf00a181bea83ccbf21ba06e147a6130761abe554e31603ad283edb3988fbcdc3f37e23bb4a31503b247258988630b91cf2c88815b0f4c9392f861b82714ed4ce9fa5958010d4bdef8145effdd42eb49afa1aad01cbbdc86375988bb74bc2061399c01f3e818e409ae12680fb5f055715db2d91dae5bd6eed8d891233276cfe5a1178ffba488bb77197dbf27bd0a3051f9f6639dbf0a97e951d0da33dcf4c4eea779acd30de867254dbb49d108fa3fa9c70f777a66581fc4f9391e39dadfb5916c910cc38c4a75bacd347e0734d4bc572f1977f30d2daf7ac4f8abc2f9ee086bddab7185891924b7fcc39858467e618352d95780cee47ace8db971bcfe85b3884ef02f05a6aaf9f98eb12ea66cccd7c4615a3cd0e6353cbfc66fe759c5bca4b89c50f0929964058b5e29f1683e004aad2138f4043bb39b7c5e6818980a1f6f840278966880241fef10e549d556160e211553b385969bf7b5d17d34cd07c571678472d31661db115e6efb85d052b23237f8a1c48a42ca4d18329de6e44ccea41df87c14b5410a860fa902a39a2b3fee63b4e196fdaaf77db484748d90309798e5ab57b3025cae7c089688d890ad5089a4ea2663a270f2a6d2544cec90ba22463d24484b976c30af6c98d7bd9fcaa6b7bd23aaf9160d03a78dcafba91a1d540b2f3b76d9d43ce18b6a37d98a442cdb21641bc73e1cc4b710e6439989f750f7eca515cce1099bea086afb779694da43450eda1672e6ee04ba748a26dbf083cc534c64fe5c808420cda11b88d05b5e9ce0705ab020f06e959a3dbb9f3700e7526e81bc69f49c14fd067e62be8ffba275036e6e98a102014fbb2a413f3ef50073cc5904e0d544891148aee7695d0707507073e1de1528b9a1f1ba7ca46e91cd919e0ebf1db0bfa8dd829a8d27b603691e978d44c9851e715f98983ec6ad8c07a0c6c4d2de5006e0faaebf1bf446a9536614fb0504d1492b1b19b3362558caa39b9283b2cc1387cb1cc096b546ad9682ed4e31d3575aa12c10fc9595d20a49c8799ac2364a45db882d7a56b0eabf5793efd512ccf86291ee8466f664c75f556b89b3b35d15825fded87ad13a79d2b61af552a7a12c74460c454cfe0c1119e087fac7f1a78f78a1bdc44c5f3230bac08e0fe09248321b18851d32c7a873c74cd592144f734996234736d357975ef64e8379b18d565bf0838978a3290ce1ef6f24372ee49521d1e22e1e56d98df66f7f270114a71374cf1760a1eaad8315c77c601626d1faf3e9df7ed6563d268fcfab455fa159cac2f2fb8e66e669f882f19661c2eec835de86f035b9f523422fc241909e71f94248e9b81e2d9dd98c51f3c8f8567b4533293495b7a3c5dcdee79a05fda23f1a9608b0a6f2527c6372666b7c36fc63e26b762efdc0668f055a0cd2921660e85b1041b786e244daf6dae51434b6b5a0160e012457d712da3455fba857573f689cf10c21ab60956195ff901a4f7f43e04b5d103e75ae846d1ed1422fba3239e546bb45ea36e1e38df3cf7b0f47818911cd59dfe2b0afe280206d8ade97bd06e31a26c123e9123e8f9d2b4692c693c431425272662378fef2b3a27bedfed33020426a8ff82519b554a0173b14e9345485a416f41a193a0779f23384b1257833aa63d5378a2a391508d8a067ec230084e3a978bcabf8ed7ad3bd881276145888751c516754d6d540e8db6a8b941ad934c75fb9fb9085633b80181e686a8937d49fd1ab1d92b345564ad393ae3688bf1bff20ae697159a967caddd77291f306cb847b1be20c38d077635a3f4ed2fe90920f69982a5d4d60d46f8821a89c8fd8ea2dc567ade1a680f29ddf857bef47ee9a268d3d33a3da6d1eb1d774fa7264532dca99837ab9063faa3e4bcc65387dab60857319fad248097a4b8ebfcb8e66b5bb8708cf227fe2bff3ecfb2706ce604e14f581914c1942e540280f65e32ad70e3338d1a8d791bf7704d4fe133fef458f9aebffb8ae2770a38d5d29fb0ab5c57903f099a5707a2359f7dc96d71380e3f4deed332b7c5f02721db2376a9a185e4723d93837bf3897e3bb80d5c1d69f00e579ef13533f8e0d0521941edcd67db3eb265becfb7e90453beb6532a28cbc90d7fbb9fb4c6017df58e2039192068e9a15ccfdbff8676d032226693a474192f2c0272edaa4c6b9a9c0d7376dd686a525476fd7061ef683ef093747dc6a2ec4c7a3dc975adb8d0755cedf15d364003a7e9bebeec6b45e50852d0dcd9bf5efc5e7636d75df2dbe60fda0f43902d7f0fa41598cd0f4050d00294cc42f1ceed68faebccc6cd22781496c6d351d1c89170f85e0f47da52e11cb04519058de4bb627da06bef1e563947fd6b241036ed994d1bcd84288063df4109192694a8c2c5933167715b116ac84098c06956e166188b4210b33948af63c233493b54617fe9182fed2ed695584f925dc0bdd5f3264f3817422cbc8bb2cf17cde1587b31e14b3749289c45a397ecd282df00e79fba28e1b78b88c37f168644e4037d53b1374c9a79c3f4c420e2d11f533048af673d0dc9492c5ee19ca93fed1b0215fd5b29d8134bb18d94f40a0ae645facff92d6ccd63764da6166777fe77107d7aee5793b6b31ee783e16f015d47c23c5875f27898fdd63de2efe18c95cd890fac1bd4e9632c5dc2b360f06205ecc3e9c34be8e33d0eb45955d7e10409c7388730fb76d2b421b0c78287e7e95b3aef3e4c7c2c14c1b8e613dcebc079eb3274cbdafddbf2d6de244f73cae7134957f4b2d553dcfdf8ab2cb734fa6e75f69a13993bd7276881eec41d6ddfb4d0c87dc7178fb8d5be5b28bdf263de5f84e99a699376ba2b5cfb51faba830e9b68411c6527728a514a9636a1031f03b4ee951e263d24cb40aefbc638e2b5388130e5cd50ca750bf7e2e9664ab42a2531713555724105d75a79c082260089c714351b6b96bfaa912c258d2710d7ab5e90cb96aa20d48b03814b98715e65f00030a01543eb8d1f1c4fc5c4e13251740df1c586ae92dfdb6a3cf5342b9ae5fc487ce6eca5b469fc64127b421f4c21fa85a683b0d14f4dcc56b1976c8c0eebf880fff05df67aaa8962ee1a328634455b92fcea80257c0301d0d5466b0e5bc0f3be0c1e2b29fa8901217e6624d2b5a623faa5d95fd0dab95b383cad613bef4bcfb4888d19f2d7a0780eb23c21b1256ef3827ccf921b90aa7437c7ee01fdc2442b4c86736d68c8cfaa9fa2e306fae0ea574fcf8d3e8ce8d75885509e987a74c883e98576019fc2e732ec3f579b7a1c223ee8c1eda28e5033396c34b298a74ce25d52e0a149e3a4bc03f75a754349cc2a290a3978481da47f2c96343455397781bb368c22ba4d6d5c75a291fb0ee29793eba0307a94e9dfa0d5549ae909542fc401c2bf712dcc9fb60cc3b4267d81a404dd6a0fc89d960a71af27f21e52ce2f5c8448777f550e992c92ef0dbf0d92113963d4215b67c8e971f0a2af64877d34109638605fcf2d1f5a11ac9c80dad73912b44c066f3851739aaf3abe36e9d818b92d131cc8c2918650a0074ce2534f8895c74fdc8267e3448643ad64644505c38e11d0eae0c8bd143599c58b5be27d78668e425332428ef2eb82e3842c233a466a787eeba4f3c7c7368425d3fcde0546c3dfe7ec273e102b8baa7cbd2c6df3c6ee9d9ad938e1db522952d0165fa2e247d9b29156f7125f520423a98481ecdb4ebc533dcf5d7dd919fee54774682aabaacecdcbdcebc0148580d297aec1270b82433cdc911b346514cfb8fc7556f08c528f4a36da381139e86822d0af35148300566095f32e871f41baf3ae89a2f6d278594d1298f675b806cf10b83a047176680680d8189a69513ad5d2eb341c5f8660a541707773915179bf0edf232f39e1c71f9d4a51cf6e1d67a47e890d1adb4255477ef0e756c37f38861011d0e29eaa45a7dbb5233252f9f0e10f610de74ddae29848b09683010d2944723146fe09d586ba9c65cc46db3a60df3cda529389558fcf755e30640fe13d45a6e94d7948f3303fe37f332666ad6e2472a38987596c503604201b51454ee48c104f9fb4a1d0a9b547876d5670bdfcf477f48ea4acd42c6feb1d11ce6017293f4ff70995bcd629ef3c20ce6995beb45e4515d7d190e7feab3f85a8abea917c8bf6c09c7bb03e819798d98e3d9c5ddc9387a3f51dfef42ac03c1e292305d06d22109cfc5c9df47d862e2271d6cc4779477726e6ab2b539e4248749280103de685ac83ba1e46692e32a510a6d1087df013172efb541a7a2eb1ab3c332749506138be33e1c3af4ff1b4fa7ff3238632534c5b6385bacac79f40ec9b3e409c57760436b66ee0aa0230f2ce10a57ddc1a25fddda0830f823e7a78d18a3cef613cbfe45cebf71cce611756a1bba4fe408268667a12940bf428988af8ae01b9176de4648001e029f84bea984671e55d3fb40be8413e2901b650a53ec4972c968eb49b96519e92027710aed30ec36ea71d46686b1059b5c551f9b9019d454ad20f7ffc43673af8ee9bc202550b0e9d5303144acce65cee51c1eca9cb4975cf1b6b332d5884e77b4f94fd74264e45d38c9b29984e901ca60497b43e0927408e1c1ce82adcb7e3508765e81a366534f077c5a44baa2322f3a8e01ed6b6161f8a8029f87eff34202604ddf46656e5ceb953791850294f14205d4f36f2a9b92ef006439b8e38411511450353c59331cf130e958aea259175362289c96af98f82361589ca273c8aa453cd1a6a4989201c138c951287f0668264fc06ac2802e25320f9cbd83c45a0c6e495afd15e2b49659c1fa532538baa38635ac64afaba06f5a13b47e6f3839b7903292eac889214982c47812329d721163f11c2a2e6c7e1a0043e5ac5ee400c0103389d5bec9bc204613075ebcf070d0a0347fe01c63d156a62f63ceaaf899e35fbea19628be0bc7c1c99be79a5e30e739698c9a4a0b4b53344558cb0e779b818b90dfd9d7f5ea9ed9f9e93aa8e1841c61178904e27da3bfd94176b6234ec0ec5b439becfac7645ba5b25c43e25bf1f3bafa6792bb033b7ffe1a998729f727cd4efa86d0fde8d9e99d5e07fa6286a9d51f7b89f73e4006bbc7a7f925eaa1dc4629fd3643443397db645313eac74ebbc85412be094cbdabb274cd53ff2391b1b3ef621c205483479c9035ccde588f58224d22bdb514bb09dc3bc30b6ec17f8c3912d480493220b01697291eed70c83bf255b6d0596f077772107d17fd0193d605842b6a6eb8332dead2099220118d47f3189063cb8929dc3278367a83d44eac2d879ba3c6219a50659c61bf73837c0a307e047e004ae4bbb8b89d72cb690454a26572cf0f8f557294454c614d26965450aa13c7a71c972b0a835afe34b0c0a626309a21345ecf5924779085f299e95f180d9262c8760d579d079962503210faf911f4aa992b362eccbfd4a1b139f9ca2c5d16886b5480db53e3da583d56d3059a430d7beaacd37759e16818bc3f0a062ded6baa5751ec9e065b6917684961d63113cfa917bda41eaa0c39afe55ba1b8294bc36eb4cc79e8a96ead10a6f85054dca62b770cbcbbc5e010a4b24350d00f667c2f11085ecd783c6ef00b1a7e7bc247b5603f9744ccdba542c0430ae25fe3c7d7b0a6b1480a645659ea95b26b36f63049c38d483ecd2e2c5b142f32673be4e97188c36b3f9189206453a930602ee03350931d5e23933f2b793859dfd23e56f7126bf96072f77340d0375411a55deb54b656cacc978043fbb2b88a8507dbbe1944d8dae6179e5b224a2ad32d511ed20a85ff8eae1273faa0b86f24451ff96fc6ee5292ce98012f556cfc672c23d3903af173a29598d9db5c5fd37f3ae618cda0ff3fd4be59ca97715742e0e3c7777fc131e7fad3e8578f8893fe92ffd438060dd11eb0abe3e3ed72e9f983d8152d8efb4eaf7951ae50752aed88ed2a097e1fead2a2bbca94b3547cc957c6eab02449cdcde51f5db5a9da4cf3e6bbef723beace97c338da944ab4470e1a3723c15fcadbb71ff7819e64d51dc1566d81549fb513731daa24b9dc8f36b6e2b6b84e3bcbeecc4308d11d5a2dfd63478c1ad3f525c78b088c97a5e6ab537f596a75ddc082c91ff829dd1f6fab861be3e69f6dafe92035cd44703f557039b62992fe7465386818baa392d759d535bbf89b265f5de85f9ceb5abe2f04e973f3c5bc54e6378d03d06c06946cd9f9e05d8b0beb1f5abce2014ab765d89d7ffb5cc2b58ee90b7f0005d1d940a60795bcaf60ca16bb2ba823c9b2032473baf47422033b51b59e1bb596b45c2f699a6fee604961994eb9eea531eb0a11676251cfd3675847385f8ddd44507a9ba8a9f99662229ec89cb9b693b59a22a9a3d19395eb685e66e9cf5dd083febedfbc88bf02e7734aa568b8c49aaa06ed08dadb22317014c923f0d6041c5adc0095005c7433a207afb1eedcf050959313f0d022b382b123bd8fa223cef427e54f76756828be0481a1a7ff8070f43f1fad2c661c3ecee2ebfd7f0d095f431aaafe17b01876a8085d3a48bc3763979e13b80a88dcf2423883289bdca0fb126a5cdb3c2d27c5e74fe6c6e6c3c83189aabfd50bb122cffeb48a8c500d244fcf4344ed8d6434ab02fa4f4915b248882638ac4408cb96b98ec426f269429b1a8ac85189f67938d17650f9aee215ac1e30a85715543998fe443c24ca92ed426926d2f90c6ba6319ee5349ad9872e012e6460bda02f6f322b25dd63d2361bcda1d2d94e704d3a00beb8ebb365762dbb07ac8ba51ec208151816349f94ad1bf06b44fe21d7f01c1e45b398e26b148694e491db4c32f62de4ecc91f53d3880a23fc7a08ca98395593744dbdb930dfe9ba249666a1113abb711bd46a4e180582c1f861a66a4ec734ed9e728ca1fb3a88380f02bcc69df3b550c6fe67bd8d2807d7093a9d7b9a10c4671c19b61d8ed593872719c246f25cf3ca8d76b8528d479c962080ae4cba5467f167ab09f494b6dc32e4fda31a5c8b8733f71c799a65ab9efa3f120ba8889777fcb1f160e76aa3ab0638c66fcdbe0baac09b195dfa37cc6e78a6ef0303bf107b3a0759b63ed9201225754ac71116321083a1909a781aecebfb758b219d696ac40b71c6dfe57f5b54896f95816fb6643c265f1ffeb26510291a171f19451c82d090a50b04a3ab151f0d08da3e5e2e960ada0e4efa99070f1d546209413586d870700504692b26c626ec1c5b0ca8fd2ea9ce2b0de72d95583dc24829b7c6becd5050b2b59f570a0675d4f6639a3b12a8d73216adb4a11f154e6f9b90cf9d8e409cc3ded1abf0f58a863149bae2acebfc9c8b3ff48ef632e00de5c574365011f8a1e0d28689b62b60b53880fb9f0c2a9e31d74ec405cc105f7aada17bac8aaf242e203806b90a2712c088c083d2c28c71e748885c45f7ec508c798cf5a6a0021fd0470c7e5d0a16ea782c8d6d3b5d0ba107c9d0c06dc191d47f7f94c4cc4583aae7e1d59e38854ead3792801e7cbeab50fe44928971b1aca0f3a8cfbfbfd09951abf22e1ee1b1547f705951cbb777d874c0f434247707b22b8c245b36ee8087a756767695774510d93f9574e33dd69b6f5011ae2c503bbb8a1f6694a599e98f3ce041a6bf1db78fc4f583c02f1ee270df7a833e8eddd35ecfdb975d1dab2a6859e7a9bc2a7a2ca76aea9bb7d198c316a89b44b73f9d21f10b471d25e3ee6284dfcb761134cc956133e1a71f22310dfefdffc7f99a26cdb7f4b76cc7d11e46abe6dffe7a2de3d84b3aeef8e40284d67fa22a6c29695e64e6a8cf8c12f7bf46147d6236c122ba1c470f0cb9b866d8a18127cb3c63b3db649c02b47075ddbb4b24570fa58fd3e0b94e8bb24182520ded128634c03cf88d99ed246bf0eca4180a11856ab9985af4c1b0da7325ef9a847b876458595b91e31529bf4f43ccd41f8b5c9f027f2976a9c6da167966657232479aca06a6f0fcce2f8ff6422f681b4dc507a89a0aa09d571bb93d534bdc146595174245154ccf2ec3b216aed9ff613baca93b4de6bfed76076dc9cf55d5b1a448f6549948c831a9a37f1bdb796784bdd79ea427b3a0e165041de1518068f8babb1a1e856fef70778d505069053dd4a669f66bca50b42286adce63c2bf02048da5093bd3833cb95f633b7a125f97b2e504652ad1da89b3c6dd6c9f9f5c0c8675e8818d9f4ad26233b4a969f4ef884ec1b28b596ca53360b1c9d393d3c22fffd8cf6d9f115c3fa3b132ad034ba8d012e21b094052d5c1ae31889a3e2995000c28c57acd5e1ffd73723cf630f3cafcfd36de1fee46f0b928a0359dc514f1e5aad2ea6e88302a465c315ae8d74131e9077fdc369bc2ad8fe460b2a8ae30e44b0571ee10b27499c9d186f73525983773d364e907a1a3166e806474056ae5a6bbef2045e9fc812af9c6c1e5b1457d61473a25f27132eddd865848b9846c2c1ce78267ec552bc7e3f599830604b7731495217d8eac0b927928bf5c8f572c59f9716e8037b0069c1bc21e8d08aa68f3467028e58c2337557e82bdc4dfd71649b051136ec6781095e53a43ee81a17659acd1aaa906445255f55b53c4a5a46b784ee358c70a1bec7ec8387df82d142468c12a6d469094a03ebc95c16d4b83ba040a7e4195fdf4b3acbd3f4c054339fada85a792030cf47cc8f6e5f22e5bcaa62be3e2d7431fcfe6fb6694a5b9a46a9e40fa8ff640062de99abe677abf59c4233e89b238dc9eaa5fd3ec78d260e61558fa6958ede4f2e38dfa27722ed1ef31913a24248126c0a7f36fc8ae4c1ba1cd39f44257708e1fa29e5975c13226e4db3c1bbe5e6271b390c5775557f6bc3eb0ecc89d5c72078cd553e4ebb2f7c76d57a52e9a1866737f8f42fa72371f2d4a6fcae6a63b987035580562e57f4edb068937fcf87a9ab1906bbf8a2730f351151870e2c2a4202118505a37db120995e9f0b0d389cda9902088b83d4587fde7bb2fd58caf32019c6feaf61a8b4d3079c127d08f10bd6d6590aff62982a0a0877fb46a27be354907c5833e00775a7405ae4fdbfd1fea10dff7ee5d9c69617517eaf7cb7866d7a3204f18afc",
        nh = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
    !function (t) {
        function i(t, i) {
            for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
            var s = Math.floor(n.length / 5),
                r = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
                h = Math.round(i.length / 2), a = Math.pow(2, 31) - 1,
                o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), n += o; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
            n = (r * n + h) % a;
            for (var f = "", u = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)), u += String.fromCharCode(f), n = (r * n + h) % a;
            return u
        }

        t = i(t, "QUNEE"), nh = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    }(ih);
    var eh = nh[0] + nh[1] + nh[2], sh = nh[3], rh = nh[4], hh = nh[5], ah = nh[6], oh = nh[7], fh = nh[8], uh = nh[9],
        ch = nh[10], _h = nh[11], dh = nh[12] + nh[13] + nh[14], lh = nh[15], vh = nh[16], bh = nh[17], yh = nh[18],
        gh = nh[19] + nh[20], xh = nh[19], mh = nh[21] + nh[22] + nh[23], ph = nh[24], Eh = nh[25] + nh[26] + nh[27],
        wh = nh[28] + nh[26] + nh[27], Th = nh[29], kh = nh[30], Oh = nh[28] + nh[31] + nh[32], Sh = nh[33],
        Ah = nh[34] + nh[35] + nh[36] + nh[37] + nh[38], Mh = nh[39] + nh[40] + nh[41], Ih = nh[39] + nh[42] + nh[43],
        Lh = nh[44] + nh[35] + nh[45], Ph = nh[39], Ch = nh[46], jh = nh[47], Rh = nh[48], Dh = nh[49], Nh = nh[50],
        Bh = nh[51], $h = nh[52] + nh[53] + nh[54], Fh = nh[55] + nh[56] + nh[57], Gh = nh[58],
        zh = nh[59] + nh[22] + nh[60], Hh = nh[61] + nh[62] + nh[63], Yh = nh[64], Uh = nh[65], Wh = nh[66] + nh[67],
        qh = nh[68], Vh = nh[69] + nh[37] + nh[70], Xh = nh[71], Kh = nh[72], Jh = nh[73], Zh = nh[74], Qh = nh[20],
        ta = nh[75], ia = nh[76], na = nh[77], ea = nh[78], sa = nh[20] + nh[79] + nh[80] + nh[81],
        ra = nh[20] + nh[82], ha = nh[83], aa = nh[84], oa = nh[85], fa = nh[86], ua = nh[87],
        ca = nh[88] + nh[31] + nh[89], _a = nh[90] + nh[22] + nh[91], da = nh[92] + nh[22] + nh[93],
        la = nh[28] + nh[1] + nh[94] + nh[35] + nh[95], va = nh[28] + nh[1] + nh[94] + nh[96] + nh[97], ba = nh[98],
        ya = nh[99] + nh[100], ga = nh[100], xa = nh[69] + nh[42] + nh[101] + nh[1] + nh[102],
        ma = nh[100] + nh[99] + nh[100], pa = nh[103], Ea = nh[104], wa = nh[105], Ta = nh[106],
        ka = nh[107] + nh[96] + nh[108], Oa = nh[109], Sa = nh[110], Aa = nh[111] + nh[96] + nh[108],
        Ma = nh[112] + nh[113] + nh[114], Ia = nh[44] + nh[62] + nh[115] + nh[1] + nh[116] + nh[96] + nh[117],
        La = nh[118], Pa = nh[119] + nh[120] + nh[121], Ca = nh[112] + nh[122], ja = nh[112] + nh[123],
        Ra = nh[124] + nh[125] + nh[126], Da = nh[124] + nh[127] + nh[126], Na = nh[124] + nh[123],
        Ba = nh[128] + nh[31] + nh[129], $a = nh[20] + nh[130], Fa = nh[20] + nh[131], Ga = nh[132] + nh[133] + nh[134],
        za = nh[135] + nh[133] + nh[134], Ha = nh[136] + nh[137], Ya = nh[138],
        Ua = nh[139] + nh[137] + nh[47] + nh[140] + nh[47] + nh[141] + nh[75], Wa = nh[136] + nh[120] + nh[142],
        qa = nh[139] + nh[143] + nh[47] + nh[140] + nh[47] + nh[141] + nh[75], Va = nh[144], Xa = nh[145],
        Ka = nh[146] + nh[128] + nh[147], Ja = nh[148], Za = nh[149], Qa = nh[150], to = nh[151] + nh[31] + nh[152],
        io = nh[153], no = nh[139] + nh[154] + nh[47] + nh[141], eo = nh[155], so = nh[156],
        ro = nh[111] + nh[22] + nh[157], ho = nh[158],
        ao = nh[159] + nh[62] + nh[160] + nh[31] + nh[161] + nh[22] + nh[162] + nh[96] + nh[163],
        oo = nh[164] + nh[62] + nh[160] + nh[31] + nh[161] + nh[22] + nh[162] + nh[96] + nh[163],
        fo = nh[99] + nh[62] + nh[160] + nh[31] + nh[161] + nh[22] + nh[162] + nh[96] + nh[163],
        uo = nh[165] + nh[62] + nh[160] + nh[31] + nh[161] + nh[22] + nh[162] + nh[96] + nh[163], co = nh[166],
        _o = nh[167] + nh[168], lo = nh[169], vo = nh[170] + nh[20] + nh[171], bo = nh[158] + nh[47],
        yo = nh[170] + nh[20] + nh[172], go = nh[173], xo = nh[174], mo = nh[175], po = nh[176] + nh[20] + nh[177],
        Eo = nh[170] + nh[20] + nh[178], wo = nh[179], To = nh[180] + nh[35] + nh[181], ko = nh[182], Oo = nh[183],
        So = nh[184] + nh[120] + nh[142], Ao = nh[185], Mo = nh[186] + nh[120] + nh[142],
        Io = nh[44] + nh[187] + nh[188] + nh[53] + nh[189], Lo = nh[190], Po = nh[191] + nh[167],
        Co = nh[20] + nh[192] + nh[96], jo = nh[20] + nh[193] + nh[194] + nh[1] + nh[195],
        Ro = nh[20] + nh[196] + nh[22] + nh[157], Do = nh[197], No = nh[198], Bo = nh[44] + nh[62] + nh[199],
        $o = nh[200] + nh[22] + nh[157], Fo = nh[201],
        Go = nh[202] + nh[22] + nh[157] + nh[187] + nh[79] + nh[31] + nh[203], zo = nh[204], Ho = nh[184], Yo = nh[205],
        Uo = nh[206] + nh[113] + nh[114], Wo = nh[202] + nh[22] + nh[157] + nh[187] + nh[79] + nh[22] + nh[207],
        qo = nh[208] + nh[22] + nh[157], Vo = nh[209], Xo = nh[210], Ko = nh[20] + nh[211] + nh[167] + nh[85],
        Jo = nh[20] + nh[211] + nh[167] + nh[86], Zo = nh[20] + nh[212], Qo = nh[20] + nh[211] + nh[213] + nh[85],
        tf = nh[20] + nh[211] + nh[213] + nh[86], nf = nh[20] + nh[214] + nh[213],
        ef = nh[24] + nh[215] + nh[22] + nh[157], sf = nh[216], rf = nh[204] + nh[31] + nh[217], hf = nh[72] + nh[218],
        af = nh[204] + nh[96] + nh[117], of = nh[184] + nh[31] + nh[217], ff = nh[184] + nh[96] + nh[117],
        uf = nh[219] + nh[22] + nh[207], cf = nh[72] + nh[14] + nh[220] + nh[14] + nh[213] + nh[14] + nh[167],
        _f = nh[221] + nh[35] + nh[222], df = nh[223] + nh[120] + nh[165], lf = nh[206] + nh[120] + nh[165],
        vf = nh[72] + nh[224], bf = nh[72] + nh[225], yf = nh[20] + nh[226], gf = nh[227] + nh[20] + nh[228],
        xf = nh[227] + nh[20] + nh[177], mf = nh[44] + nh[1] + nh[229], pf = nh[175] + nh[230] + nh[231],
        Ef = nh[232] + nh[75] + nh[233], wf = nh[234], Tf = nh[235], kf = nh[236], Of = nh[20] + nh[237], Sf = nh[238],
        Af = nh[141], Mf = nh[236] + nh[47] + nh[239] + nh[47] + nh[141] + nh[240], If = nh[44] + nh[42] + nh[241],
        Lf = nh[12], Pf = nh[242] + nh[20] + nh[243] + nh[20] + nh[244], Cf = nh[206], jf = nh[245] + nh[120] + nh[246],
        Rf = nh[247], Df = nh[67], Nf = nh[248], Bf = nh[249] + nh[20] + nh[250],
        $f = nh[249] + nh[20] + nh[250] + nh[20] + nh[251],
        Ff = nh[249] + nh[20] + nh[250] + nh[20] + nh[252] + nh[20] + nh[253],
        Gf = nh[249] + nh[20] + nh[250] + nh[20] + nh[254] + nh[20] + nh[253],
        zf = nh[249] + nh[20] + nh[250] + nh[20] + nh[255], Hf = nh[249] + nh[20] + nh[250] + nh[20] + nh[256],
        Yf = nh[249] + nh[20] + nh[250] + nh[20] + nh[257], Uf = nh[258] + nh[187] + nh[188] + nh[53] + nh[189],
        Wf = nh[259] + nh[120] + nh[260], qf = nh[261], Vf = nh[156] + nh[96] + nh[117],
        Xf = nh[20] + nh[262] + nh[263], Kf = nh[264] + nh[22] + nh[207], Jf = nh[20] + nh[265],
        Zf = nh[24] + nh[266] + nh[62] + nh[86] + nh[35] + nh[267] + nh[22] + nh[157], Qf = nh[20] + nh[268],
        tu = nh[24] + nh[210], iu = nh[24] + nh[269], nu = nh[270] + nh[271] + nh[96] + nh[272],
        eu = nh[24] + nh[273] + nh[122], su = nh[24] + nh[274] + nh[31] + nh[275],
        ru = nh[24] + nh[274] + nh[35] + nh[267] + nh[22] + nh[157], hu = nh[259] + nh[62] + nh[86] + nh[96] + nh[117],
        au = nh[24] + nh[234], ou = nh[24] + nh[276], fu = nh[277], uu = nh[278] + nh[22] + nh[279],
        cu = nh[24] + nh[280] + nh[22] + nh[91],
        _u = nh[20] + nh[79] + nh[281] + nh[282] + nh[283] + nh[284] + nh[187] + nh[285] + nh[37] + nh[286],
        du = nh[287] + nh[283] + nh[284], lu = nh[20] + nh[288] + nh[31] + nh[289], vu = nh[290] + nh[283] + nh[284],
        bu = nh[291], yu = nh[146] + nh[292] + nh[220] + nh[22] + nh[279], gu = nh[24] + nh[276] + nh[96] + nh[293],
        xu = nh[20] + nh[294] + nh[123], mu = nh[24] + nh[294] + nh[123], pu = nh[24] + nh[294] + nh[113] + nh[114],
        Eu = nh[20] + nh[294] + nh[122], wu = nh[44] + nh[96] + nh[117], Tu = nh[295],
        ku = nh[266] + nh[62] + nh[86] + nh[22] + nh[207], Ou = nh[24] + nh[205], Su = nh[20] + nh[296],
        Au = nh[20] + nh[271] + nh[96] + nh[272], Mu = nh[24] + nh[274] + nh[96] + nh[272],
        Iu = nh[206] + nh[53] + nh[297], Lu = nh[259] + nh[42] + nh[298] + nh[53] + nh[297],
        Pu = nh[164] + nh[53] + nh[297], Cu = nh[159] + nh[42] + nh[298] + nh[53] + nh[297],
        ju = nh[206] + nh[53] + nh[297] + nh[13] + nh[126], Ru = nh[164] + nh[53] + nh[297] + nh[13] + nh[126],
        Du = nh[159] + nh[42] + nh[298] + nh[53] + nh[297] + nh[13] + nh[126], Nu = nh[299] + nh[283] + nh[300],
        Bu = nh[301] + nh[230] + nh[302], $u = nh[303] + nh[37] + nh[286], Fu = nh[235] + nh[22] + nh[81],
        Gu = nh[304] + nh[22] + nh[81], zu = nh[305], Hu = nh[306] + nh[26] + nh[307],
        Yu = nh[308] + nh[230] + nh[309] + nh[120] + nh[310], Uu = nh[311], Wu = nh[312],
        qu = nh[313] + nh[1] + nh[231] + nh[35] + nh[247], Vu = nh[313] + nh[35] + nh[247],
        Xu = nh[88] + nh[1] + nh[314] + nh[1] + nh[231], Ku = nh[315] + nh[316], Ju = nh[317], Zu = nh[318],
        Qu = nh[319], tc = nh[320], ic = nh[321], nc = nh[220] + nh[75] + nh[220] + nh[75] + nh[213],
        ec = nh[20] + nh[79] + nh[281] + nh[102] + nh[1] + nh[322], sc = nh[323], rc = nh[324], hc = nh[325],
        ac = nh[69] + nh[35] + nh[326], oc = nh[44] + nh[26] + nh[327] + nh[62] + nh[328],
        fc = nh[20] + nh[329] + nh[40] + nh[330], uc = nh[20] + nh[79] + nh[80] + nh[331],
        cc = nh[88] + nh[35] + nh[326], _c = nh[20] + nh[332], dc = nh[202] + nh[187] + nh[333],
        lc = nh[202] + nh[42] + nh[334], vc = nh[202] + nh[53] + nh[335] + nh[13] + nh[14],
        bc = nh[0] + nh[37] + nh[336], yc = nh[259] + nh[1] + nh[94] + nh[187] + nh[337], gc = nh[5] + nh[1] + nh[338],
        xc = nh[339], mc = nh[259] + nh[187] + nh[337], pc = nh[306] + nh[26] + nh[307] + nh[26] + nh[327],
        Ec = nh[24] + nh[88], wc = nh[340] + nh[120] + nh[165], Tc = nh[341] + nh[120] + nh[165],
        kc = nh[342] + nh[20] + nh[343], Oc = nh[344], Sc = nh[342] + nh[20] + nh[345], Ac = nh[342] + nh[20] + nh[346],
        Mc = nh[342] + nh[20] + nh[347], Ic = nh[342] + nh[20] + nh[348], Lc = nh[342] + nh[20] + nh[349],
        Pc = nh[342] + nh[20] + nh[350], Cc = nh[342] + nh[20] + nh[351], jc = nh[342] + nh[20] + nh[352],
        Rc = nh[342] + nh[20] + nh[353], Dc = nh[342] + nh[20] + nh[354] + nh[20] + nh[167],
        Nc = nh[342] + nh[20] + nh[354] + nh[20] + nh[355], Bc = nh[342] + nh[20] + nh[354] + nh[20] + nh[356],
        $c = nh[342] + nh[20] + nh[354] + nh[20] + nh[357], Fc = nh[342] + nh[20] + nh[354] + nh[20] + nh[358],
        Gc = nh[342] + nh[20] + nh[354] + nh[20] + nh[80], zc = nh[359] + nh[42] + nh[360],
        Hc = nh[306] + nh[26] + nh[307] + nh[1] + nh[94], Yc = nh[361], Uc = nh[24] + nh[239], Wc = nh[20] + nh[362],
        qc = nh[197] + nh[37] + nh[363], Vc = nh[24] + nh[274], Xc = nh[202] + nh[35] + nh[364], Kc = nh[365],
        Jc = nh[44] + nh[22] + nh[23], Zc = nh[366] + nh[22] + nh[23], Qc = nh[367],
        t_ = nh[368] + nh[20] + nh[244] + nh[20] + nh[369], i_ = nh[368] + nh[20] + nh[244] + nh[20] + nh[370],
        n_ = nh[368] + nh[20] + nh[244] + nh[20] + nh[171], e_ = nh[259] + nh[31] + nh[217],
        s_ = nh[371] + nh[20] + nh[372], r_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[373] + nh[20] + nh[374],
        h_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[375] + nh[20] + nh[374],
        a_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[374] + nh[20] + nh[376],
        o_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[372] + nh[20] + nh[377],
        f_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[372] + nh[20] + nh[378],
        u_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[373] + nh[20] + nh[376],
        c_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[372] + nh[20] + nh[379], __ = nh[44] + nh[31] + nh[217],
        d_ = nh[371] + nh[20] + nh[380] + nh[20] + nh[381] + nh[20] + nh[382],
        l_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[372] + nh[20] + nh[383],
        v_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[373],
        b_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[376] + nh[20] + nh[374],
        y_ = nh[371] + nh[20] + nh[380] + nh[20] + nh[382], g_ = nh[371] + nh[20] + nh[380] + nh[20] + nh[384],
        x_ = nh[385] + nh[20] + nh[386], m_ = nh[371] + nh[20] + nh[387],
        p_ = nh[371] + nh[20] + nh[387] + nh[20] + nh[388], E_ = nh[371] + nh[20] + nh[387] + nh[20] + nh[389],
        w_ = nh[390], T_ = nh[371] + nh[20] + nh[244] + nh[20] + nh[375] + nh[20] + nh[376],
        k_ = nh[354] + nh[20] + nh[178], O_ = nh[44] + nh[31] + nh[289],
        S_ = nh[371] + nh[20] + nh[391] + nh[20] + nh[244] + nh[20] + nh[392],
        A_ = nh[44] + nh[22] + nh[393] + nh[22] + nh[157], M_ = nh[371] + nh[20] + nh[394] + nh[20] + nh[395],
        I_ = nh[371] + nh[20] + nh[394] + nh[20] + nh[396], L_ = nh[371] + nh[20] + nh[397] + nh[20] + nh[395],
        P_ = nh[371] + nh[20] + nh[397] + nh[20] + nh[396], C_ = nh[398], j_ = nh[44] + nh[399],
        R_ = nh[361] + nh[120] + nh[310], D_ = nh[44] + nh[26] + nh[400] + nh[22] + nh[157] + nh[62] + nh[199],
        N_ = nh[0] + nh[22] + nh[207] + nh[31] + nh[401], B_ = nh[236] + nh[42] + nh[334] + nh[26] + nh[327],
        $_ = nh[88] + nh[35] + nh[247] + nh[26] + nh[327], F_ = nh[69] + nh[35] + nh[247] + nh[26] + nh[327],
        G_ = nh[402] + nh[22] + nh[157], z_ = nh[403], H_ = nh[24] + nh[404] + nh[26] + nh[405],
        Y_ = nh[371] + nh[20] + nh[406] + nh[20] + nh[407], U_ = nh[408] + nh[123], W_ = nh[409] + nh[120] + nh[410],
        q_ = nh[411] + nh[31] + nh[412] + nh[40] + nh[413], V_ = nh[414] + nh[26] + nh[415], X_ = nh[416],
        K_ = nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[40] + nh[419] + nh[100] + nh[62] + nh[420],
        J_ = nh[421], Z_ = nh[422], Q_ = nh[423], td = nh[424], id = nh[210] + nh[67] + nh[425] + nh[426] + nh[71],
        nd = nh[20] + nh[421], ed = nh[427] + nh[1] + nh[94], sd = nh[20] + nh[428] + nh[22] + nh[429],
        rd = nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[40] + nh[419],
        hd = nh[66] + nh[67] + nh[220] + nh[430] + nh[220] + nh[430] + nh[220] + nh[430] + nh[220] + nh[71],
        ad = nh[431], od = nh[432], fd = nh[433], ud = nh[434] + nh[435],
        cd = nh[436] + nh[20] + nh[227] + nh[20] + nh[379], _d = nh[304], dd = nh[20] + nh[235],
        ld = nh[436] + nh[20] + nh[227] + nh[20] + nh[377], vd = nh[20] + nh[84], bd = nh[220] + nh[158],
        yd = nh[20] + nh[79] + nh[281] + nh[437], gd = nh[206] + nh[1] + nh[438], xd = nh[439] + nh[1] + nh[440],
        md = nh[72] + nh[441], pd = nh[236] + nh[187] + nh[188], Ed = nh[69] + nh[53] + nh[189] + nh[442], wd = nh[443],
        Td = nh[112] + nh[444] + nh[445], kd = nh[446], Od = nh[447] + nh[230] + nh[448],
        Sd = nh[202] + nh[56] + nh[449], Ad = nh[239] + nh[450] + nh[451], Md = nh[304] + nh[1] + nh[322], Id = nh[452],
        Ld = nh[306] + nh[26] + nh[307] + nh[96] + nh[453] + nh[56] + nh[449] + nh[399], Pd = nh[40] + nh[231],
        Cd = nh[454] + nh[62] + nh[199], jd = nh[455] + nh[20] + nh[456], Rd = nh[273] + nh[444] + nh[445],
        Dd = nh[179] + nh[31] + nh[217], Nd = nh[179] + nh[31] + nh[275], Bd = nh[179] + nh[37] + nh[457],
        $d = nh[447] + nh[31] + nh[458], Fd = nh[447] + nh[26] + nh[400], Gd = nh[459], zd = nh[447],
        Hd = nh[414] + nh[96] + nh[460], Yd = nh[461], Ud = nh[462] + nh[122], Wd = nh[462] + nh[123], qd = nh[463],
        Vd = nh[462] + nh[120] + nh[165], Xd = nh[130] + nh[31] + nh[275], Kd = nh[464] + nh[100] + nh[465],
        Jd = nh[466] + nh[26] + nh[415], Zd = nh[273] + nh[113] + nh[114], Qd = nh[20] + nh[467], tl = nh[468],
        il = nh[20] + nh[202] + nh[37] + nh[38] + nh[120] + nh[469], nl = nh[470], el = nh[471],
        sl = nh[472] + nh[230] + nh[231], rl = nh[202] + nh[42] + nh[473],
        hl = nh[427] + nh[40] + nh[231] + nh[187] + nh[474], al = nh[88],
        ol = nh[427] + nh[26] + nh[327] + nh[187] + nh[474], fl = nh[475] + nh[26] + nh[476] + nh[37] + nh[477],
        ul = nh[472] + nh[230] + nh[478] + nh[40] + nh[330], cl = nh[196] + nh[40] + nh[231], _l = nh[20] + nh[479],
        dl = nh[306] + nh[26] + nh[307] + nh[13] + nh[480] + nh[26] + nh[327], ll = nh[481],
        vl = nh[482] + nh[35] + nh[326], bl = nh[483],
        yl = nh[159] + nh[96] + nh[484] + nh[35] + nh[36] + nh[37] + nh[38],
        gl = nh[99] + nh[96] + nh[484] + nh[35] + nh[36] + nh[37] + nh[38], xl = nh[259] + nh[120] + nh[485],
        ml = nh[61] + nh[35] + nh[36] + nh[37] + nh[38],
        pl = nh[165] + nh[1] + nh[486] + nh[35] + nh[36] + nh[37] + nh[38], El = nh[156] + nh[120] + nh[485],
        wl = nh[72] + nh[487], Tl = nh[20] + nh[179] + nh[31] + nh[217], kl = nh[488],
        Ol = nh[20] + nh[179] + nh[31] + nh[275], Sl = nh[20] + nh[179] + nh[37] + nh[457],
        Al = nh[20] + nh[179] + nh[1] + nh[489], Ml = nh[20] + nh[179],
        Il = nh[403] + nh[62] + nh[86] + nh[187] + nh[168], Ll = nh[139] + nh[490] + nh[47] + nh[491],
        Pl = nh[44] + nh[62] + nh[86] + nh[187] + nh[168], Cl = nh[20] + nh[492], jl = nh[202] + nh[26] + nh[493],
        Rl = nh[69] + nh[53] + nh[494], Dl = nh[402] + nh[1] + nh[94], Nl = nh[402] + nh[26] + nh[415] + nh[1] + nh[94],
        Bl = nh[495] + nh[40] + nh[41], $l = nh[69] + nh[316] + nh[496] + nh[1] + nh[102],
        Fl = nh[497] + nh[26] + nh[415] + nh[31] + nh[498], Gl = nh[22] + nh[157] + nh[67], zl = nh[430], Hl = nh[499],
        Yl = nh[31] + nh[275] + nh[67], Ul = nh[500] + nh[47] + nh[141], Wl = nh[200] + nh[96] + nh[117],
        ql = nh[501] + nh[20] + nh[384], Vl = nh[502], Xl = nh[503] + nh[22] + nh[91], Kl = nh[504] + nh[40] + nh[41],
        Jl = nh[505], Zl = nh[506], Ql = nh[507], tv = nh[292], iv = nh[508], nv = nh[377] + nh[20] + nh[509],
        ev = nh[377] + nh[20] + nh[383], sv = nh[510] + nh[20] + nh[379], rv = nh[510] + nh[20] + nh[509],
        hv = nh[510] + nh[20] + nh[383], av = nh[378] + nh[20] + nh[509], ov = nh[378] + nh[20] + nh[383],
        fv = nh[378] + nh[20] + nh[379], uv = nh[511], cv = nh[512], _v = nh[238] + nh[513],
        dv = nh[430] + nh[209] + nh[513], lv = nh[430] + nh[471] + nh[513], vv = nh[514] + nh[75] + nh[515],
        bv = nh[430] + nh[514] + nh[40] + nh[41] + nh[513], yv = nh[430] + nh[516] + nh[56] + nh[57] + nh[513],
        gv = nh[516] + nh[56] + nh[57], xv = nh[430] + nh[30] + nh[513], mv = nh[514] + nh[40] + nh[41],
        pv = nh[517] + nh[187] + nh[337], Ev = nh[516] + nh[187] + nh[337], wv = nh[518] + nh[75] + nh[111],
        Tv = nh[518] + nh[75] + nh[48], kv = nh[518] + nh[75] + nh[12], Ov = nh[519], Sv = nh[520], Av = nh[521],
        Mv = nh[111] + nh[42] + nh[522], Iv = nh[523], Lv = nh[430] + nh[205] + nh[513],
        Pv = nh[430] + nh[12] + nh[513], Cv = nh[430] + nh[516] + nh[187] + nh[337] + nh[513],
        jv = nh[524] + nh[20] + nh[242], Rv = nh[111], Dv = nh[524] + nh[20] + nh[525], Nv = nh[12] + nh[75] + nh[515],
        Bv = nh[20] + nh[79] + nh[526], $v = nh[69] + nh[1] + nh[2], Fv = nh[28] + nh[1] + nh[2] + nh[1] + nh[527],
        Gv = nh[44] + nh[187] + nh[168], zv = nh[528], Hv = nh[20] + nh[529], Yv = nh[524] + nh[20] + nh[530],
        Uv = nh[20] + nh[14] + nh[281], Wv = nh[531], qv = nh[523] + nh[1] + nh[532] + nh[53] + nh[533],
        Vv = nh[447] + nh[1] + nh[532] + nh[53] + nh[533], Xv = nh[20] + nh[447] + nh[230] + nh[448],
        Kv = nh[205] + nh[1] + nh[532] + nh[53] + nh[533],
        Jv = nh[28] + nh[53] + nh[189] + nh[22] + nh[23] + nh[1] + nh[489],
        Zv = nh[325] + nh[1] + nh[532] + nh[53] + nh[533],
        Qv = nh[518] + nh[187] + nh[337] + nh[1] + nh[532] + nh[53] + nh[533], tb = nh[24] + nh[339],
        ib = nh[20] + nh[79] + nh[281] + nh[331] + nh[187] + nh[337] + nh[37] + nh[286], nb = nh[534],
        eb = nh[44] + nh[26] + nh[535], sb = nh[48] + nh[1] + nh[94], rb = nh[205] + nh[536],
        hb = nh[44] + nh[62] + nh[86] + nh[187] + nh[337], ab = nh[537],
        ob = nh[20] + nh[79] + nh[281] + nh[538] + nh[1] + nh[532] + nh[42] + nh[522], fb = nh[539],
        ub = nh[120] + nh[260], cb = nh[414] + nh[22] + nh[540], _b = nh[414] + nh[120] + nh[142] + nh[40] + nh[231],
        db = nh[180] + nh[450] + nh[541], lb = nh[318] + nh[100] + nh[542], vb = nh[543], bb = nh[544],
        yb = nh[111] + nh[26] + nh[27] + nh[42] + nh[522], gb = nh[48] + nh[26] + nh[27] + nh[42] + nh[522],
        xb = nh[545] + nh[20] + nh[546] + nh[20] + nh[547] + nh[20] + nh[548],
        mb = nh[549] + nh[20] + nh[550] + nh[20] + nh[547], pb = nh[551] + nh[20] + nh[546],
        Eb = nh[552] + nh[68] + nh[553] + nh[68] + nh[554] + nh[68] + nh[555], wb = nh[556],
        Tb = nh[557] + nh[558] + nh[31] + nh[559],
        kb = nh[560] + nh[68] + nh[561] + nh[68] + nh[562] + nh[68] + nh[563] + nh[68] + nh[564] + nh[68] + nh[565] + nh[68] + nh[566] + nh[68] + nh[567] + nh[68],
        Ob = nh[68] + nh[552] + nh[68] + nh[553] + nh[68] + nh[554] + nh[68] + nh[555],
        Sb = nh[120] + nh[568] + nh[26] + nh[27], Ab = nh[452] + nh[22] + nh[569],
        Mb = nh[20] + nh[79] + nh[80] + nh[570] + nh[187] + nh[571],
        Ib = nh[20] + nh[28] + nh[113] + nh[572] + nh[230] + nh[558] + nh[230] + nh[573],
        Lb = nh[20] + nh[28] + nh[113] + nh[572] + nh[230] + nh[558] + nh[316] + nh[211], Pb = nh[146] + nh[574],
        Cb = nh[565], jb = nh[562], Rb = nh[146] + nh[467], Db = nh[20] + nh[69] + nh[575] + nh[27],
        Nb = nh[20] + nh[576] + nh[26] + nh[27], Bb = nh[20] + nh[28] + nh[26] + nh[27], $b = nh[28],
        Fb = nh[146] + nh[577] + nh[22] + nh[578] + nh[120] + nh[469],
        Gb = nh[146] + nh[28] + nh[42] + nh[579] + nh[22] + nh[578] + nh[37] + nh[477],
        zb = nh[20] + nh[580] + nh[26] + nh[27], Hb = nh[146] + nh[79] + nh[80] + nh[486] + nh[1] + nh[581],
        Yb = nh[582] + nh[167], Ub = nh[582],
        Wb = nh[20] + nh[79] + nh[80] + nh[486] + nh[42] + nh[579] + nh[22] + nh[578] + nh[120] + nh[469],
        qb = nh[146] + nh[583] + nh[1] + nh[338] + nh[1] + nh[532],
        Vb = nh[146] + nh[580] + nh[42] + nh[579] + nh[22] + nh[578],
        Xb = nh[146] + nh[580] + nh[230] + nh[584] + nh[120] + nh[568] + nh[26] + nh[27],
        Kb = nh[146] + nh[585] + nh[120] + nh[568] + nh[26] + nh[27], Jb = nh[20] + nh[175],
        Zb = nh[168] + nh[31] + nh[586], Qb = nh[587] + nh[31] + nh[586], ty = nh[146] + nh[588], iy = nh[589],
        ny = nh[20] + nh[590], ey = nh[591], sy = nh[592], ry = nh[146] + nh[423],
        hy = nh[20] + nh[576] + nh[120] + nh[568] + nh[26] + nh[27], ay = nh[561], oy = nh[20] + nh[593],
        fy = nh[20] + nh[594], uy = nh[563], cy = nh[20] + nh[202] + nh[53] + nh[595] + nh[1] + nh[581], _y = nh[564],
        dy = nh[560], ly = nh[596], vy = nh[597], by = nh[598], yy = nh[20] + nh[521], gy = nh[20] + nh[599],
        xy = nh[600], my = nh[601] + nh[122], py = nh[601] + nh[123],
        Ey = nh[20] + nh[580] + nh[53] + nh[602] + nh[53] + nh[603], wy = nh[20] + nh[604],
        Ty = nh[146] + nh[79] + nh[80] + nh[581] + nh[120] + nh[469], ky = nh[605], Oy = nh[146] + nh[606],
        Sy = nh[593] + nh[167], Ay = nh[593], My = nh[607], Iy = nh[594] + nh[167], Ly = nh[594],
        Py = nh[20] + nh[608] + nh[22] + nh[609], Cy = nh[610] + nh[167], jy = nh[610],
        Ry = nh[20] + nh[611] + nh[53] + nh[602] + nh[187] + nh[474], Dy = nh[590] + nh[167], Ny = nh[590],
        By = nh[599] + nh[167], $y = nh[599], Fy = nh[20] + nh[505] + nh[356] + nh[31] + nh[612],
        Gy = nh[44] + nh[26] + nh[415] + nh[62] + nh[86] + nh[230] + nh[558] + nh[26] + nh[27],
        zy = nh[44] + nh[613] + nh[86] + nh[230] + nh[558] + nh[26] + nh[27], Hy = nh[44] + nh[53] + nh[189],
        Yy = nh[20] + nh[614] + nh[42] + nh[615], Uy = nh[28] + nh[26] + nh[415] + nh[96] + nh[616],
        Wy = nh[28] + nh[1] + nh[527], qy = nh[20] + nh[617] + nh[187] + nh[618], Vy = nh[20] + nh[213] + nh[619],
        Xy = nh[20] + nh[79] + nh[80] + nh[620] + nh[187] + nh[621] + nh[42] + nh[615],
        Ky = nh[146] + nh[28] + nh[26] + nh[27], Jy = nh[146] + nh[576] + nh[26] + nh[27], Zy = nh[622],
        Qy = nh[20] + nh[617] + nh[187] + nh[621], tg = nh[20] + nh[580] + nh[122], ig = nh[20] + nh[580] + nh[123],
        ng = nh[623] + nh[122], eg = nh[623] + nh[123], sg = nh[624] + nh[53] + nh[625] + nh[122],
        rg = nh[624] + nh[53] + nh[625] + nh[123], hg = nh[626] + nh[1] + nh[338],
        ag = nh[100] + nh[159] + nh[100] + nh[627] + nh[100] + nh[628],
        og = nh[100] + nh[159] + nh[100] + nh[627] + nh[100] + nh[629], fg = nh[100] + nh[159] + nh[100] + nh[630],
        ug = nh[100] + nh[159] + nh[100] + nh[631], cg = nh[100] + nh[164] + nh[100] + nh[627] + nh[100] + nh[628],
        _g = nh[100] + nh[164] + nh[100] + nh[627] + nh[100] + nh[629], dg = nh[100] + nh[164] + nh[100] + nh[630],
        lg = nh[100] + nh[164] + nh[100] + nh[631], vg = nh[632], bg = nh[223],
        yg = nh[633] + nh[67] + nh[205] + nh[104] + nh[239] + nh[450] + nh[634] + nh[105] + nh[635] + nh[636] + nh[68] + nh[637] + nh[638] + nh[639] + nh[220] + nh[640] + nh[641] + nh[642] + nh[643] + nh[644] + nh[645] + nh[646] + nh[14] + nh[80] + nh[450] + nh[281] + nh[643] + nh[647] + nh[508] + nh[167] + nh[648] + nh[220] + nh[168] + nh[167] + nh[37] + nh[86] + nh[649] + nh[281] + nh[637] + nh[650] + nh[508] + nh[651] + nh[79] + nh[652] + nh[505] + nh[653] + nh[356] + nh[654] + nh[655] + nh[656] + nh[40] + nh[657] + nh[450] + nh[22] + nh[658] + nh[22] + nh[639] + nh[230] + nh[659] + nh[660] + nh[14] + nh[661] + nh[86] + nh[662] + nh[79] + nh[450] + nh[663] + nh[664] + nh[665] + nh[666] + nh[656] + nh[35] + nh[667] + nh[283] + nh[645] + nh[122] + nh[355] + nh[668] + nh[331] + nh[669] + nh[292] + nh[670] + nh[639] + nh[213] + nh[1] + nh[671] + nh[672] + nh[505] + nh[35] + nh[213] + nh[86] + nh[35] + nh[355] + nh[673] + nh[133] + nh[643] + nh[123] + nh[639] + nh[62] + nh[674] + nh[675] + nh[676] + nh[677] + nh[678] + nh[679] + nh[645] + nh[680] + nh[645] + nh[681] + nh[80] + nh[643] + nh[450] + nh[355] + nh[682] + nh[683] + nh[684] + nh[685] + nh[356] + nh[686] + nh[687] + nh[80] + nh[47] + nh[80] + nh[68] + nh[632],
        gg = nh[688] + nh[13] + nh[480], xg = nh[20] + nh[79] + nh[80] + nh[689], mg = nh[20] + nh[34] + nh[690],
        pg = nh[20] + nh[28] + nh[31] + nh[691], Eg = nh[20] + nh[79] + nh[80] + nh[85], wg = nh[20] + nh[692],
        Tg = nh[220] + nh[75] + nh[220], kg = nh[202] + nh[693], Og = nh[403] + nh[96] + nh[117], Sg = nh[96] + nh[117],
        Ag = nh[31] + nh[275], Mg = nh[22] + nh[157], Ig = nh[26] + nh[27], Lg = nh[444] + nh[694],
        Pg = nh[53] + nh[533], Cg = nh[22] + nh[91], jg = nh[53] + nh[189], Rg = nh[31] + nh[695] + nh[230] + nh[448],
        Dg = nh[53] + nh[189] + nh[230] + nh[448], Ng = nh[696] + nh[522], Bg = nh[154] + nh[442],
        $g = nh[154] + nh[137], Fg = nh[154] + nh[143], Gg = nh[202] + nh[230] + nh[697] + nh[133] + nh[134],
        zg = nh[698] + nh[53] + nh[603], Hg = nh[444] + nh[297] + nh[42] + nh[43],
        Yg = nh[53] + nh[602] + nh[31] + nh[699], Ug = nh[700], Wg = nh[701], qg = nh[111] + nh[702] + nh[108],
        Vg = nh[703], Xg = nh[704], Kg = nh[276] + nh[75] + nh[324], Jg = nh[276], Zg = nh[439], Qg = nh[705],
        tx = nh[705] + nh[75] + nh[444], ix = nh[705] + nh[75] + nh[56], nx = nh[706], ex = nh[706] + nh[75] + nh[444],
        sx = nh[706] + nh[75] + nh[56], rx = nh[706] + nh[75] + nh[444] + nh[75] + nh[56],
        hx = nh[706] + nh[75] + nh[56] + nh[75] + nh[444], ax = nh[707] + nh[75] + nh[304],
        ox = nh[707] + nh[75] + nh[235], fx = nh[707] + nh[75] + nh[83], ux = nh[707] + nh[75] + nh[84], cx = nh[708],
        _x = nh[709], dx = nh[710], lx = nh[711], vx = nh[712], bx = nh[713], yx = nh[714], gx = nh[715], xx = nh[716],
        mx = nh[717], px = nh[718], Ex = nh[719], wx = nh[720], Tx = nh[721], kx = nh[722], Ox = nh[723],
        Sx = nh[724] + nh[75] + nh[725], Ax = nh[724] + nh[75] + nh[213], Mx = nh[724] + nh[75] + nh[167],
        Ix = nh[724] + nh[75] + nh[194], Lx = nh[724] + nh[75] + nh[355], Px = nh[724] + nh[75] + nh[356],
        Cx = nh[724] + nh[75] + nh[357], jx = nh[724] + nh[75] + nh[358], Rx = nh[724] + nh[75] + nh[80],
        Dx = nh[724] + nh[75] + nh[148], Nx = nh[726],
        Bx = nh[176] + nh[20] + nh[727] + nh[20] + nh[244] + nh[20] + nh[389],
        $x = nh[176] + nh[20] + nh[727] + nh[20] + nh[244] + nh[20] + nh[728], Fx = nh[192],
        Gx = nh[176] + nh[20] + nh[729] + nh[20] + nh[244] + nh[20] + nh[389],
        zx = nh[176] + nh[20] + nh[729] + nh[20] + nh[244] + nh[20] + nh[730], Hx = nh[731], Yx = nh[341], Ux = nh[732],
        Wx = nh[455] + nh[20] + nh[244], qx = nh[455] + nh[20] + nh[244] + nh[20] + nh[733],
        Vx = nh[455] + nh[20] + nh[734], Xx = nh[455] + nh[20] + nh[733] + nh[20] + nh[735],
        Kx = nh[455] + nh[20] + nh[252], Jx = nh[734] + nh[20] + nh[388], Zx = nh[736] + nh[20] + nh[228],
        Qx = nh[227] + nh[20] + nh[501] + nh[20] + nh[178], tm = nh[414] + nh[1] + nh[322], im = nh[273],
        nm = nh[737] + nh[120] + nh[165], em = nh[738] + nh[1] + nh[739] + nh[120] + nh[165],
        sm = nh[24] + nh[215] + nh[22] + nh[157] + nh[213], rm = nh[24] + nh[215] + nh[22] + nh[157] + nh[167],
        hm = nh[227] + nh[20] + nh[740], am = nh[741] + nh[1] + nh[440], om = nh[227] + nh[20] + nh[742],
        fm = nh[501] + nh[20] + nh[743] + nh[20] + nh[744], um = nh[20] + nh[745], cm = nh[325] + nh[40] + nh[231],
        _m = nh[187] + nh[188] + nh[47] + nh[154] + nh[47] + nh[141] + nh[240], dm = nh[20] + nh[305],
        lm = nh[723] + nh[13] + nh[746], vm = nh[35] + nh[747], bm = nh[748], ym = nh[749], gm = nh[750], xm = nh[751],
        mm = nh[20] + nh[118], pm = nh[439] + nh[62] + nh[752], Em = nh[439] + nh[13] + nh[126] + nh[122],
        wm = nh[439] + nh[13] + nh[126] + nh[123],
        Tm = nh[741] + nh[1] + nh[440] + nh[62] + nh[753] + nh[230] + nh[231], km = nh[20] + nh[452] + nh[1] + nh[754],
        Om = nh[755] + nh[31] + nh[586], Sm = nh[239], Am = nh[154], Mm = nh[48] + nh[42] + nh[522],
        Im = nh[344] + nh[187] + nh[188], Lm = nh[0] + nh[187] + nh[188], Pm = nh[756], Cm = nh[757], jm = nh[758],
        Rm = nh[759] + nh[20] + nh[244] + nh[20] + nh[760], Dm = nh[759] + nh[20] + nh[244] + nh[20] + nh[254],
        Nm = nh[414] + nh[42] + nh[761] + nh[283] + nh[284], Bm = nh[414] + nh[96] + nh[762] + nh[283] + nh[284],
        $m = nh[254] + nh[20] + nh[759] + nh[20] + nh[376], Fm = nh[760] + nh[20] + nh[759],
        Gm = nh[763] + nh[20] + nh[254] + nh[20] + nh[759],
        zm = nh[763] + nh[20] + nh[254] + nh[20] + nh[759] + nh[20] + nh[376], Hm = nh[671], Ym = nh[764], Um = nh[331],
        Wm = nh[243] + nh[20] + nh[765] + nh[20] + nh[397], qm = nh[243] + nh[20] + nh[176] + nh[20] + nh[397],
        Vm = nh[243] + nh[20] + nh[766] + nh[20] + nh[397], Xm = nh[202] + nh[40] + nh[767],
        Km = nh[22] + nh[207] + nh[31] + nh[768], Jm = nh[447] + nh[1] + nh[440],
        Zm = nh[447] + nh[31] + nh[769] + nh[13] + nh[126] + nh[122],
        Qm = nh[447] + nh[31] + nh[769] + nh[13] + nh[126] + nh[123],
        tp = nh[455] + nh[20] + nh[244] + nh[20] + nh[734], ip = nh[447] + nh[120] + nh[310],
        np = nh[770] + nh[31] + nh[217], ep = nh[770],
        sp = nh[66] + nh[67] + nh[220] + nh[68] + nh[220] + nh[68] + nh[220] + nh[68] + nh[220] + nh[71],
        rp = nh[184] + nh[283] + nh[284], hp = nh[20] + nh[184] + nh[283] + nh[284],
        ap = nh[206] + nh[37] + nh[771] + nh[1] + nh[440], op = nh[206] + nh[53] + nh[297] + nh[1] + nh[438],
        fp = nh[206] + nh[772] + nh[773], up = nh[206] + nh[53] + nh[297] + nh[772] + nh[773], cp = nh[20] + nh[87],
        _p = nh[20] + nh[774] + nh[31] + nh[275], dp = nh[20] + nh[775] + nh[22] + nh[776] + nh[113] + nh[114],
        lp = nh[20] + nh[775] + nh[22] + nh[776], vp = nh[777], bp = nh[249] + nh[20] + nh[250] + nh[20] + nh[778],
        yp = nh[779], gp = nh[780] + nh[75] + nh[781], xp = nh[782] + nh[75] + nh[781], mp = nh[783], pp = nh[601],
        Ep = nh[784], wp = nh[731] + nh[42] + nh[785], Tp = nh[111] + nh[1] + nh[440] + nh[31] + nh[304],
        kp = nh[72] + nh[213] + nh[1] + nh[357] + nh[62] + nh[281] + nh[53], Op = nh[72] + nh[786],
        Sp = nh[72] + nh[787] + nh[26] + nh[80] + nh[62], Ap = nh[72] + nh[788] + nh[62] + nh[789],
        Mp = nh[72] + nh[788] + nh[35] + nh[790], Ip = nh[72] + nh[791] + nh[1] + nh[792], Lp = nh[72] + nh[793],
        Pp = nh[72] + nh[213] + nh[53] + nh[357] + nh[1] + nh[281] + nh[37], Cp = nh[72] + nh[794] + nh[62] + nh[220],
        jp = nh[72] + nh[795] + nh[796], Rp = nh[72] + nh[213] + nh[37] + nh[357] + nh[797] + nh[167],
        Dp = nh[72] + nh[788] + nh[35] + nh[798], Np = nh[72] + nh[799],
        Bp = nh[72] + nh[167] + nh[656] + nh[80] + nh[800], $p = nh[72] + nh[801], Fp = nh[802],
        Gp = nh[72] + nh[803] + nh[53] + nh[792], zp = nh[72] + nh[804],
        Hp = nh[72] + nh[213] + nh[37] + nh[805] + nh[35] + nh[355], Yp = nh[72] + nh[806] + nh[807] + nh[167],
        Up = nh[72] + nh[808] + nh[809], Wp = nh[72] + nh[213] + nh[26] + nh[357] + nh[810] + nh[220],
        qp = nh[72] + nh[811], Vp = nh[72] + nh[14] + nh[358] + nh[14] + nh[80] + nh[14] + nh[80],
        Xp = nh[72] + nh[357] + nh[35] + nh[812], Kp = nh[72] + nh[355] + nh[37] + nh[355] + nh[1] + nh[355] + nh[62],
        Jp = nh[72] + nh[813], Zp = nh[72] + nh[814],
        Qp = nh[72] + nh[357] + nh[37] + nh[357] + nh[26] + nh[357] + nh[37], tE = nh[72] + nh[355] + nh[1] + nh[815],
        iE = nh[72] + nh[816], nE = nh[72] + nh[358] + nh[53] + nh[358] + nh[53] + nh[358] + nh[53],
        eE = nh[72] + nh[817], sE = nh[72] + nh[818], rE = nh[72] + nh[819],
        hE = nh[72] + nh[281] + nh[26] + nh[281] + nh[53] + nh[281] + nh[53],
        aE = nh[72] + nh[35] + nh[358] + nh[35] + nh[356] + nh[35] + nh[355],
        oE = nh[72] + nh[35] + nh[281] + nh[35] + nh[357] + nh[35] + nh[356],
        fE = nh[72] + nh[35] + nh[358] + nh[35] + nh[355] + nh[35] + nh[194], uE = nh[72] + nh[820],
        cE = nh[72] + nh[26] + nh[281] + nh[821], _E = nh[72] + nh[281] + nh[822] + nh[220] + nh[764] + nh[220],
        dE = nh[823] + nh[1] + nh[739] + nh[120] + nh[165], lE = nh[72] + nh[506] + nh[281] + nh[824],
        vE = nh[72] + nh[194] + nh[656] + nh[194] + nh[764] + nh[825], bE = nh[72] + nh[62] + nh[167] + nh[826],
        yE = nh[72] + nh[167] + nh[26] + nh[80] + nh[827], gE = nh[72] + nh[828],
        xE = nh[72] + nh[508] + nh[356] + nh[508] + nh[356] + nh[508] + nh[357], mE = nh[417] + nh[100], pE = nh[829],
        EE = nh[20] + nh[79] + nh[80] + nh[754], wE = nh[20] + nh[79] + nh[281] + nh[830] + nh[187] + nh[188],
        TE = nh[831], kE = nh[832] + nh[62] + nh[833], OE = nh[832], SE = nh[832] + nh[316] + nh[834],
        AE = nh[832] + nh[62] + nh[835], ME = nh[187] + nh[333] + nh[47] + nh[836] + nh[47] + nh[837] + nh[75],
        IE = nh[838], LE = nh[40] + nh[839] + nh[47] + nh[764] + nh[47] + nh[838] + nh[47] + nh[840] + nh[75],
        PE = nh[841] + nh[37] + nh[286], CE = nh[780] + nh[96] + nh[842], jE = nh[843], RE = nh[844],
        DE = nh[841] + nh[31] + nh[275], NE = nh[774] + nh[35] + nh[845] + nh[96] + nh[163], BE = nh[846],
        $E = nh[482] + nh[187] + nh[847], FE = nh[299] + nh[187] + nh[337], GE = nh[848],
        zE = nh[849] + nh[444] + nh[850], HE = nh[849] + nh[53] + nh[189], YE = nh[851],
        UE = nh[852] + nh[53] + nh[189], WE = nh[853], qE = nh[854] + nh[1] + nh[231], VE = nh[855], XE = nh[856],
        KE = nh[142] + nh[120] + nh[310], JE = nh[857], ZE = nh[852], QE = nh[303] + nh[31] + nh[275],
        tw = nh[858] + nh[230] + nh[628] + nh[1] + nh[231] + nh[31] + nh[275], iw = nh[859], nw = nh[860], ew = nh[142],
        sw = nh[861], rw = nh[316] + nh[862] + nh[47] + nh[863] + nh[513] + nh[220] + nh[85], hw = nh[566],
        aw = nh[844] + nh[133] + nh[134], ow = nh[864] + nh[133] + nh[134], fw = nh[865] + nh[1] + nh[231],
        uw = nh[183] + nh[56] + nh[866] + nh[240],
        cw = nh[183] + nh[22] + nh[867] + nh[47] + nh[53] + nh[868] + nh[240], _w = nh[869] + nh[53] + nh[868],
        dw = nh[870], lw = nh[871],
        vw = nh[14] + nh[872] + nh[508] + nh[355] + nh[656] + nh[873] + nh[874] + nh[358] + nh[764] + nh[875] + nh[656] + nh[876] + nh[506] + nh[194] + nh[877] + nh[281] + nh[878] + nh[879] + nh[880] + nh[881] + nh[882] + nh[220] + nh[508] + nh[356] + nh[14] + nh[883] + nh[764] + nh[884] + nh[885] + nh[886] + nh[506] + nh[887] + nh[888] + nh[194] + nh[889] + nh[220] + nh[890] + nh[891] + nh[508] + nh[892] + nh[893] + nh[894] + nh[895] + nh[194] + nh[656] + nh[896] + nh[14] + nh[897] + nh[898] + nh[357] + nh[508] + nh[899] + nh[14] + nh[900] + nh[901] + nh[281] + nh[902] + nh[903] + nh[14] + nh[281] + nh[506] + nh[356] + nh[168] + nh[213] + nh[656] + nh[355] + nh[656] + nh[904] + nh[508] + nh[167] + nh[168] + nh[886] + nh[905] + nh[80] + nh[168] + nh[194] + nh[656] + nh[68] + nh[906] + nh[213] + nh[764] + nh[907] + nh[168] + nh[908] + nh[764] + nh[909] + nh[14] + nh[910] + nh[885] + nh[911] + nh[912] + nh[913] + nh[914] + nh[355] + nh[915] + nh[916] + nh[917] + nh[918] + nh[764] + nh[358] + nh[919] + nh[194] + nh[506] + nh[220] + nh[920] + nh[921] + nh[922] + nh[923] + nh[656] + nh[924] + nh[925] + nh[220] + nh[506] + nh[926] + nh[927] + nh[928] + nh[906] + nh[929] + nh[930] + nh[931] + nh[506] + nh[220] + nh[932] + nh[933] + nh[934] + nh[935] + nh[506] + nh[936] + nh[937] + nh[281] + nh[508] + nh[938] + nh[506] + nh[939] + nh[940] + nh[357] + nh[941] + nh[942] + nh[764] + nh[943] + nh[656] + nh[213] + nh[944] + nh[945] + nh[946] + nh[80] + nh[506] + nh[947] + nh[656] + nh[948] + nh[940] + nh[68] + nh[80] + nh[949] + nh[281] + nh[14] + nh[167] + nh[14] + nh[950] + nh[656] + nh[951] + nh[895] + nh[952] + nh[893] + nh[213] + nh[506] + nh[953] + nh[656] + nh[355] + nh[954] + nh[955] + nh[168] + nh[956] + nh[957] + nh[526] + nh[958] + nh[959] + nh[960] + nh[961] + nh[508] + nh[281] + nh[905] + nh[825] + nh[506] + nh[962] + nh[14] + nh[963] + nh[508] + nh[356] + nh[95] + nh[964] + nh[656] + nh[965] + nh[14] + nh[966] + nh[764] + nh[194] + nh[506] + nh[281] + nh[764] + nh[967] + nh[968] + nh[969] + nh[764] + nh[970] + nh[764] + nh[971] + nh[972] + nh[973] + nh[974] + nh[975] + nh[506] + nh[976] + nh[506] + nh[977] + nh[508] + nh[80] + nh[508] + nh[978] + nh[888] + nh[979] + nh[506] + nh[194] + nh[168] + nh[980] + nh[902] + nh[945] + nh[14],
        bw = nh[183] + nh[42] + nh[981] + nh[47] + nh[69] + nh[513],
        yw = nh[435] + nh[982] + nh[983] + nh[435] + nh[194] + nh[35] + nh[435] + nh[982] + nh[984] + nh[75] + nh[318] + nh[75] + nh[856] + nh[435] + nh[167] + nh[1] + nh[985] + nh[75] + nh[318] + nh[75] + nh[856] + nh[435] + nh[167] + nh[1] + nh[986] + nh[75] + nh[318] + nh[75] + nh[856],
        gw = nh[987], xw = nh[988], mw = nh[989], pw = nh[259] + nh[120], Ew = nh[990], ww = nh[358] + nh[75],
        Tw = nh[946], kw = nh[81], Ow = nh[991], Sw = nh[1] + nh[322], Aw = nh[96] + nh[992], Mw = nh[1] + nh[993],
        Iw = nh[994], Lw = nh[995], Pw = nh[414], Cw = nh[996], jw = nh[997], Rw = nh[998], Dw = nh[999], Nw = nh[1e3],
        Bw = nh[1001], $w = nh[485], Fw = nh[1002], Gw = nh[1003], zw = nh[417] + nh[1004],
        Hw = nh[47] + nh[306] + nh[47] + nh[1005] + nh[356], Yw = nh[1006], Uw = nh[1007],
        Ww = nh[1008] + nh[113] + nh[572], qw = nh[1009], Vw = nh[1010] + nh[75] + nh[886] + nh[75] + nh[213],
        Xw = nh[31] + nh[89], Kw = nh[26] + nh[415], Jw = nh[41], Zw = nh[1011], Qw = nh[1012] + nh[113] + nh[572],
        tT = nh[53] + nh[868], iT = nh[1013], nT = nh[142] + nh[167] + nh[53], eT = nh[505] + nh[120] + nh[142],
        sT = nh[1014], rT = nh[220] + nh[47] + nh[220], hT = nh[417] + nh[100] + nh[1] + nh[322],
        aT = nh[417] + nh[100] + nh[1] + nh[322] + nh[22] + nh[1015], oT = nh[417] + nh[100] + nh[283] + nh[418],
        fT = nh[20] + nh[79] + nh[281] + nh[14], uT = nh[20] + nh[1016] + nh[42] + nh[43], cT = nh[20] + nh[1017],
        _T = nh[20] + nh[79] + nh[281] + nh[85], dT = nh[259] + nh[22] + nh[1018], lT = nh[20] + nh[357] + nh[842],
        vT = nh[274], bT = nh[20] + nh[79] + nh[80] + nh[211], yT = nh[20] + nh[79] + nh[281] + nh[331], gT = nh[1019],
        xT = nh[1017], mT = nh[20] + nh[1020] + nh[690], pT = nh[20] + nh[79] + nh[281] + nh[86],
        ET = nh[20] + nh[79] + nh[892], wT = nh[232] + nh[96] + nh[1021], TT = nh[20] + nh[79] + nh[1022],
        kT = nh[20] + nh[1023], OT = nh[200], ST = nh[20] + nh[79] + nh[281] + nh[764], AT = nh[504],
        MT = nh[331] + nh[187] + nh[337], IT = nh[1024] + nh[62] + nh[538], LT = nh[741],
        PT = nh[20] + nh[79] + nh[80] + nh[1025], CT = nh[20] + nh[79] + nh[281] + nh[1026],
        jT = nh[20] + nh[79] + nh[281] + nh[331] + nh[1] + nh[322] + nh[31] + nh[275] + nh[37] + nh[286],
        RT = nh[259] + nh[31] + nh[275], DT = nh[69] + nh[143],
        NT = nh[20] + nh[79] + nh[80] + nh[570] + nh[230] + nh[1027], BT = nh[1028] + nh[230] + nh[1027], $T = nh[1029],
        FT = nh[1030], GT = nh[146] + nh[79] + nh[80] + nh[1031] + nh[230] + nh[1027], zT = nh[1030] + nh[67],
        HT = nh[146] + nh[1032], YT = nh[44] + nh[26] + nh[415] + nh[62] + nh[86] + nh[187] + nh[168],
        UT = nh[20] + nh[1033], WT = nh[1034] + nh[187] + nh[337], qT = nh[454] + nh[187] + nh[168],
        VT = nh[146] + nh[1035], XT = nh[1036],
        KT = nh[20] + nh[79] + nh[281] + nh[331] + nh[62] + nh[199] + nh[37] + nh[286],
        JT = nh[20] + nh[79] + nh[80] + nh[656], ZT = nh[306] + nh[26] + nh[307] + nh[96] + nh[453],
        QT = nh[174] + nh[120] + nh[165], tk = nh[21] + nh[22] + nh[1037],
        ik = nh[44] + nh[283] + nh[1038] + nh[62] + nh[199], nk = nh[20] + nh[1017] + nh[1] + nh[1039],
        ek = nh[166] + nh[62] + nh[199], sk = nh[20] + nh[69] + nh[187] + nh[1040] + nh[96] + nh[117],
        rk = nh[20] + nh[79] + nh[80] + nh[639], hk = nh[1041] + nh[75] + nh[607], ak = nh[436] + nh[20] + nh[1042],
        ok = nh[1041] + nh[75] + nh[1043], fk = nh[20] + nh[1044], uk = nh[20] + nh[304] + nh[1] + nh[322],
        ck = nh[20] + nh[79] + nh[281] + nh[505], _k = nh[20] + nh[1045], dk = nh[20] + nh[1032] + nh[37] + nh[1046],
        lk = nh[69] + nh[42] + nh[1047], vk = nh[20] + nh[358] + nh[506], bk = nh[20] + nh[194] + nh[656],
        yk = nh[20] + nh[1017] + nh[1] + nh[489], gk = nh[20] + nh[1048] + nh[35] + nh[1049],
        xk = nh[1048] + nh[35] + nh[247] + nh[1] + nh[1050], mk = nh[274] + nh[56] + nh[1051],
        pk = nh[20] + nh[14] + nh[355], Ek = nh[20] + nh[80] + nh[764] + nh[1] + nh[489],
        wk = nh[1052] + nh[75] + nh[291], Tk = nh[146] + nh[355] + nh[165], kk = nh[146] + nh[357] + nh[656],
        Ok = nh[111] + nh[96] + nh[117], Sk = nh[1053], Ak = nh[274] + nh[96] + nh[1054],
        Mk = nh[454] + nh[1] + nh[1055], Ik = nh[1056], Lk = nh[28] + nh[22] + nh[23] + nh[1] + nh[532],
        Pk = nh[274] + nh[53] + nh[189], Ck = nh[20] + nh[79] + nh[80] + nh[764],
        jk = nh[20] + nh[361] + nh[62] + nh[328] + nh[187] + nh[285] + nh[37] + nh[286],
        Rk = nh[197] + nh[26] + nh[327] + nh[62] + nh[328], Dk = nh[20] + nh[1057], Nk = nh[398] + nh[230] + nh[448],
        Bk = nh[306] + nh[26] + nh[307] + nh[62] + nh[86] + nh[53] + nh[1058] + nh[37] + nh[1059],
        $k = nh[146] + nh[1060], Fk = nh[0] + nh[26] + nh[327],
        Gk = nh[44] + nh[187] + nh[337] + nh[62] + nh[86] + nh[187] + nh[168], zk = nh[399] + nh[536],
        Hk = nh[139] + nh[490] + nh[47] + nh[1061], Yk = nh[259] + nh[187] + nh[337] + nh[35] + nh[1062],
        Uk = nh[436] + nh[20] + nh[1063], Wk = nh[1017] + nh[62] + nh[199], qk = nh[20] + nh[1064] + nh[230] + nh[448],
        Vk = nh[20] + nh[79] + nh[281] + nh[1065] + nh[230], Xk = nh[20] + nh[221] + nh[62] + nh[199],
        Kk = nh[514] + nh[120] + nh[310], Jk = nh[20] + nh[1066], Zk = nh[454], Qk = nh[20] + nh[79] + nh[1067],
        tO = nh[366] + nh[399] + nh[1068], iO = nh[48] + nh[399], nO = nh[24] + nh[29],
        eO = nh[417] + nh[75] + nh[26] + nh[415], sO = nh[1069], rO = nh[417] + nh[75] + nh[26] + nh[327],
        hO = nh[1070], aO = nh[404] + nh[26] + nh[405], oO = nh[1071] + nh[75] + nh[1072],
        fO = nh[1073] + nh[22] + nh[207] + nh[1] + nh[532], uO = nh[111] + nh[22] + nh[207] + nh[31] + nh[768],
        cO = nh[1074], _O = nh[69], dO = nh[417] + nh[100] + nh[1075], lO = nh[24] + nh[1076],
        vO = nh[0] + nh[42] + nh[1077], bO = nh[28] + nh[22] + nh[1018] + nh[1] + nh[489], yO = nh[1076], gO = nh[271],
        xO = nh[69] + nh[37] + nh[336], mO = nh[417] + nh[75] + nh[40] + nh[231], pO = nh[20] + nh[271],
        EO = nh[1078] + nh[75] + nh[111], wO = nh[1078] + nh[75] + nh[48], TO = nh[280] + nh[22] + nh[91],
        kO = nh[1079] + nh[20] + nh[1080], OO = nh[354] + nh[20] + nh[397], SO = nh[258] + nh[31] + nh[1081],
        AO = nh[417] + nh[75] + nh[31] + nh[289] + nh[40] + nh[231], MO = nh[1071],
        IO = nh[48] + nh[22] + nh[207] + nh[31] + nh[768], LO = nh[1082], PO = nh[31] + nh[289] + nh[40] + nh[231],
        CO = nh[290], jO = nh[417] + nh[75] + nh[62] + nh[1083], RO = nh[472] + nh[31] + nh[412] + nh[40] + nh[413],
        DO = nh[1084] + nh[20] + nh[244], NO = nh[1084] + nh[20] + nh[244] + nh[20] + nh[345],
        BO = nh[1084] + nh[20] + nh[1085], $O = nh[1084] + nh[20] + nh[1086],
        FO = nh[1084] + nh[20] + nh[1087] + nh[20] + nh[178], GO = nh[274] + nh[37] + nh[286],
        zO = nh[24] + nh[1088] + nh[120] + nh[310], HO = nh[1088], YO = nh[417] + nh[75] + nh[283] + nh[1089],
        UO = nh[475] + nh[31] + nh[275], WO = nh[1088] + nh[120] + nh[310], qO = nh[1088] + nh[187] + nh[188],
        VO = nh[283] + nh[1089], XO = nh[417] + nh[75] + nh[120] + nh[142], KO = nh[120] + nh[142],
        JO = nh[72] + nh[1090], ZO = nh[24] + nh[280] + nh[22] + nh[157],
        QO = nh[447] + nh[31] + nh[769] + nh[62] + nh[752], tS = nh[447] + nh[62] + nh[1091],
        iS = nh[447] + nh[62] + nh[282] + nh[1] + nh[440], nS = nh[1092] + nh[31] + nh[695] + nh[31] + nh[1081],
        eS = nh[24] + nh[1093], sS = nh[273] + nh[122], rS = nh[273] + nh[123],
        hS = nh[455] + nh[20] + nh[244] + nh[20] + nh[734] + nh[20] + nh[345], aS = nh[20] + nh[1094],
        oS = nh[276] + nh[1] + nh[440], fS = nh[276] + nh[42] + nh[298] + nh[53] + nh[297],
        uS = nh[24] + nh[287] + nh[1] + nh[440], cS = nh[20] + nh[79] + nh[281] + nh[282] + nh[283] + nh[284],
        _S = nh[24] + nh[274] + nh[53] + nh[189], dS = nh[24] + nh[287] + nh[283] + nh[284], lS = nh[186],
        vS = nh[197] + nh[31] + nh[275], bS = nh[28] + nh[62] + nh[199] + nh[1] + nh[489],
        yS = nh[24] + nh[274] + nh[42] + nh[241], gS = nh[24] + nh[274] + nh[56] + nh[1051], xS = nh[24] + nh[1036],
        mS = nh[1095], pS = nh[1096] + nh[56] + nh[1097], ES = nh[1096] + nh[444] + nh[1098] + nh[120] + nh[410],
        wS = nh[20] + nh[1099], TS = nh[20] + nh[79] + nh[1100], kS = nh[56] + nh[1051], OS = nh[42] + nh[241],
        SS = nh[35] + nh[267] + nh[22] + nh[157], AS = nh[62] + nh[282] + nh[283] + nh[284], MS = nh[96] + nh[272],
        IS = nh[514], LS = nh[447] + nh[75] + nh[780], PS = nh[447] + nh[75] + nh[276],
        CS = nh[455] + nh[20] + nh[733] + nh[20] + nh[396] + nh[20] + nh[122], jS = nh[447] + nh[75] + nh[209],
        RS = nh[1101] + nh[20] + nh[252], DS = nh[741] + nh[75] + nh[780],
        NS = nh[1101] + nh[20] + nh[252] + nh[20] + nh[249] + nh[20] + nh[250], BS = nh[1093],
        $S = nh[733] + nh[20] + nh[735], FS = nh[439] + nh[75] + nh[1102], GS = nh[439] + nh[75] + nh[780],
        zS = nh[733] + nh[20] + nh[396] + nh[20] + nh[122], HS = nh[439] + nh[75] + nh[273] + nh[75] + nh[85],
        YS = nh[439] + nh[75] + nh[273] + nh[75] + nh[86], US = nh[342] + nh[20] + nh[1103],
        WS = nh[1104] + nh[75] + nh[204], qS = nh[342] + nh[20] + nh[1103] + nh[20] + nh[171],
        VS = nh[1104] + nh[75] + nh[204] + nh[75] + nh[103], XS = nh[342] + nh[20] + nh[176] + nh[20] + nh[1105],
        KS = nh[1104] + nh[75] + nh[206] + nh[75] + nh[1106],
        JS = nh[342] + nh[20] + nh[176] + nh[20] + nh[1105] + nh[20] + nh[396],
        ZS = nh[1104] + nh[75] + nh[184] + nh[75] + nh[780], QS = nh[342] + nh[20] + nh[1107] + nh[20] + nh[759],
        tA = nh[1104] + nh[75] + nh[184] + nh[75] + nh[1108], iA = nh[342] + nh[20] + nh[1109],
        nA = nh[1104] + nh[75] + nh[770], eA = nh[342] + nh[20] + nh[1109] + nh[20] + nh[171],
        sA = nh[1104] + nh[75] + nh[770] + nh[75] + nh[103], rA = nh[1110] + nh[20] + nh[381] + nh[20] + nh[1111],
        hA = nh[266] + nh[75] + nh[92] + nh[75] + nh[1071], aA = nh[1112] + nh[20] + nh[252],
        oA = nh[287] + nh[75] + nh[780], fA = nh[1112] + nh[20] + nh[759], uA = nh[287] + nh[75] + nh[1108],
        cA = nh[734], _A = nh[276] + nh[75] + nh[118], dA = nh[276] + nh[75] + nh[780],
        lA = nh[734] + nh[20] + nh[176] + nh[20] + nh[1105], vA = nh[276] + nh[75] + nh[206] + nh[75] + nh[1106],
        bA = nh[734] + nh[20] + nh[176] + nh[20] + nh[1105] + nh[20] + nh[396], yA = nh[276] + nh[75] + nh[512],
        gA = nh[176] + nh[20] + nh[727], xA = nh[206] + nh[75] + nh[1113], mA = nh[176] + nh[20] + nh[729],
        pA = nh[206] + nh[75] + nh[1114], EA = nh[176] + nh[20] + nh[1105] + nh[20] + nh[727],
        wA = nh[206] + nh[75] + nh[1106] + nh[75] + nh[1113], TA = nh[176] + nh[20] + nh[1105] + nh[20] + nh[729],
        kA = nh[206] + nh[75] + nh[1106] + nh[75] + nh[1114], OA = nh[227] + nh[20] + nh[1112] + nh[20] + nh[252],
        SA = nh[227] + nh[20] + nh[1112] + nh[20] + nh[759], AA = nh[227] + nh[20] + nh[734],
        MA = nh[239] + nh[75] + nh[276] + nh[75] + nh[118], IA = nh[227] + nh[20] + nh[734] + nh[20] + nh[171],
        LA = nh[227] + nh[20] + nh[734] + nh[20] + nh[252], PA = nh[239] + nh[75] + nh[276] + nh[75] + nh[103],
        CA = nh[227] + nh[20] + nh[734] + nh[20] + nh[176] + nh[20] + nh[1105],
        jA = nh[227] + nh[20] + nh[734] + nh[20] + nh[176] + nh[20] + nh[1105] + nh[20] + nh[396],
        RA = nh[227] + nh[20] + nh[388], DA = nh[227] + nh[20] + nh[734] + nh[20] + nh[388],
        NA = nh[239] + nh[75] + nh[512], BA = nh[227] + nh[20] + nh[1085], $A = nh[239] + nh[75] + nh[234],
        FA = nh[227] + nh[20] + nh[648] + nh[20] + nh[1115], GA = nh[239] + nh[75] + nh[331] + nh[75] + nh[12],
        zA = nh[227] + nh[20] + nh[1116], HA = nh[239] + nh[75] + nh[1117], YA = nh[227] + nh[20] + nh[1118],
        UA = nh[239] + nh[75] + nh[1093], WA = nh[1119] + nh[75] + nh[210], qA = nh[1120] + nh[20] + nh[1121],
        VA = nh[1119] + nh[75] + nh[295], XA = nh[1120] + nh[20] + nh[1122], KA = nh[1119] + nh[75] + nh[1036],
        JA = nh[1120] + nh[20] + nh[1123] + nh[20] + nh[1121], ZA = nh[1120] + nh[20] + nh[252],
        QA = nh[1119] + nh[75] + nh[780], tM = nh[1120] + nh[20] + nh[170] + nh[20] + nh[178],
        iM = nh[1119] + nh[75] + nh[179] + nh[75] + nh[1019], nM = nh[1120] + nh[20] + nh[170] + nh[20] + nh[172],
        eM = nh[1119] + nh[75] + nh[179] + nh[75] + nh[1124], sM = nh[1120] + nh[20] + nh[170] + nh[20] + nh[171],
        rM = nh[1119] + nh[75] + nh[179] + nh[75] + nh[103], hM = nh[1120] + nh[20] + nh[1085],
        aM = nh[1119] + nh[75] + nh[234], oM = nh[1119] + nh[75] + nh[294] + nh[75] + nh[118],
        fM = nh[1119] + nh[75] + nh[294], uM = nh[1119] + nh[75] + nh[512],
        cM = nh[1120] + nh[20] + nh[396] + nh[20] + nh[122], _M = nh[1119] + nh[75] + nh[273] + nh[75] + nh[85],
        dM = nh[1120] + nh[20] + nh[396] + nh[20] + nh[123], lM = nh[1119] + nh[75] + nh[273] + nh[75] + nh[86],
        vM = nh[1120] + nh[20] + nh[178], bM = nh[1119] + nh[75] + nh[1019],
        yM = nh[1120] + nh[20] + nh[1125] + nh[20] + nh[1121], gM = nh[1119] + nh[75] + nh[1126] + nh[75] + nh[295],
        xM = nh[1119] + nh[75] + nh[276], mM = nh[1120] + nh[20] + nh[734] + nh[20] + nh[171],
        pM = nh[1119] + nh[75] + nh[276] + nh[75] + nh[103], EM = nh[1120] + nh[20] + nh[1112] + nh[20] + nh[252],
        wM = nh[1120] + nh[20] + nh[1127], TM = nh[1119] + nh[75] + nh[269],
        kM = nh[1119] + nh[75] + nh[439] + nh[75] + nh[1102], OM = nh[1120] + nh[20] + nh[733] + nh[20] + nh[252],
        SM = nh[1119] + nh[75] + nh[439] + nh[75] + nh[780],
        AM = nh[1120] + nh[20] + nh[733] + nh[20] + nh[396] + nh[20] + nh[122],
        MM = nh[1119] + nh[75] + nh[331] + nh[75] + nh[12], IM = nh[1120] + nh[20] + nh[1128] + nh[20] + nh[379],
        LM = nh[1119] + nh[75] + nh[28] + nh[75] + nh[304], PM = nh[1084] + nh[20] + nh[1112] + nh[20] + nh[759],
        CM = nh[1084] + nh[20] + nh[1103], jM = nh[1088] + nh[75] + nh[204],
        RM = nh[1088] + nh[75] + nh[204] + nh[75] + nh[780],
        DM = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[1129],
        NM = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[170] + nh[20] + nh[178],
        BM = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[170] + nh[20] + nh[172],
        $M = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[396] + nh[20] + nh[122],
        FM = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[396] + nh[20] + nh[123],
        GM = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[734],
        zM = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[734] + nh[20] + nh[171],
        HM = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[1112] + nh[20] + nh[252],
        YM = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[1127], UM = nh[371] + nh[20] + nh[228],
        WM = nh[361] + nh[75] + nh[118], qM = nh[371] + nh[20] + nh[252], VM = nh[361] + nh[75] + nh[780],
        XM = nh[371] + nh[20] + nh[1109], KM = nh[361] + nh[75] + nh[770],
        JM = nh[371] + nh[20] + nh[1109] + nh[20] + nh[171], ZM = nh[361] + nh[75] + nh[770] + nh[75] + nh[103],
        QM = nh[371] + nh[20] + nh[176] + nh[20] + nh[1105], tI = nh[361] + nh[75] + nh[206] + nh[75] + nh[1106],
        iI = nh[371] + nh[20] + nh[176] + nh[20] + nh[1105] + nh[20] + nh[396],
        nI = nh[361] + nh[75] + nh[88] + nh[75] + nh[273], eI = nh[361] + nh[75] + nh[69] + nh[75] + nh[273],
        sI = nh[361] + nh[75] + nh[184] + nh[75] + nh[780], rI = nh[371] + nh[20] + nh[391] + nh[20] + nh[244],
        hI = nh[361] + nh[75] + nh[404] + nh[75] + nh[209], aI = nh[361] + nh[75] + nh[404] + nh[75] + nh[1130],
        oI = nh[361] + nh[75] + nh[1131] + nh[75] + nh[1132], fI = nh[361] + nh[75] + nh[707],
        uI = nh[371] + nh[20] + nh[1133] + nh[20] + nh[1134], cI = nh[361] + nh[75] + nh[1135] + nh[75] + nh[1136],
        _I = nh[361] + nh[75] + nh[46] + nh[75] + nh[1137], dI = nh[361] + nh[75] + nh[46] + nh[75] + nh[30],
        lI = nh[361] + nh[75] + nh[1138], vI = nh[361] + nh[75] + nh[1138] + nh[75] + nh[512],
        bI = nh[371] + nh[20] + nh[394] + nh[20] + nh[1139] + nh[20] + nh[371],
        yI = nh[361] + nh[75] + nh[88] + nh[75] + nh[1140] + nh[75] + nh[361],
        gI = nh[361] + nh[75] + nh[69] + nh[75] + nh[1140] + nh[75] + nh[361],
        xI = nh[361] + nh[75] + nh[88] + nh[75] + nh[1141], mI = nh[361] + nh[75] + nh[69] + nh[75] + nh[1141],
        pI = nh[354] + nh[20] + nh[394], EI = nh[724] + nh[75] + nh[88],
        wI = nh[354] + nh[20] + nh[394] + nh[20] + nh[178], TI = nh[724] + nh[75] + nh[88] + nh[75] + nh[1019],
        kI = nh[354] + nh[20] + nh[394] + nh[20] + nh[396], OI = nh[724] + nh[75] + nh[88] + nh[75] + nh[273],
        SI = nh[354] + nh[20] + nh[394] + nh[20] + nh[1103], AI = nh[724] + nh[75] + nh[88] + nh[75] + nh[204],
        MI = nh[724] + nh[75] + nh[88] + nh[75] + nh[770],
        II = nh[354] + nh[20] + nh[394] + nh[20] + nh[1109] + nh[20] + nh[171],
        LI = nh[724] + nh[75] + nh[88] + nh[75] + nh[206] + nh[75] + nh[1106],
        PI = nh[354] + nh[20] + nh[394] + nh[20] + nh[1107] + nh[20] + nh[759],
        CI = nh[354] + nh[20] + nh[394] + nh[20] + nh[176] + nh[20] + nh[727],
        jI = nh[724] + nh[75] + nh[88] + nh[75] + nh[206] + nh[75] + nh[1113],
        RI = nh[354] + nh[20] + nh[394] + nh[20] + nh[176] + nh[20] + nh[729],
        DI = nh[724] + nh[75] + nh[88] + nh[75] + nh[206] + nh[75] + nh[1114], NI = nh[724] + nh[75] + nh[69],
        BI = nh[354] + nh[20] + nh[397] + nh[20] + nh[178], $I = nh[724] + nh[75] + nh[69] + nh[75] + nh[1019],
        FI = nh[354] + nh[20] + nh[397] + nh[20] + nh[396], GI = nh[724] + nh[75] + nh[69] + nh[75] + nh[273],
        zI = nh[354] + nh[20] + nh[397] + nh[20] + nh[1103], HI = nh[724] + nh[75] + nh[69] + nh[75] + nh[204],
        YI = nh[354] + nh[20] + nh[397] + nh[20] + nh[1103] + nh[20] + nh[171],
        UI = nh[724] + nh[75] + nh[69] + nh[75] + nh[770],
        WI = nh[354] + nh[20] + nh[397] + nh[20] + nh[176] + nh[20] + nh[1105],
        qI = nh[724] + nh[75] + nh[69] + nh[75] + nh[206] + nh[75] + nh[1106],
        VI = nh[354] + nh[20] + nh[397] + nh[20] + nh[1107] + nh[20] + nh[252],
        XI = nh[724] + nh[75] + nh[69] + nh[75] + nh[184] + nh[75] + nh[780],
        KI = nh[354] + nh[20] + nh[397] + nh[20] + nh[176] + nh[20] + nh[727],
        JI = nh[724] + nh[75] + nh[69] + nh[75] + nh[206] + nh[75] + nh[1113],
        ZI = nh[724] + nh[75] + nh[69] + nh[75] + nh[206] + nh[75] + nh[1114],
        QI = nh[455] + nh[20] + nh[733] + nh[20] + nh[396] + nh[20] + nh[123], tL = nh[1119], iL = nh[780],
        nL = nh[287] + nh[1] + nh[440], eL = nh[278] + nh[13] + nh[79] + nh[120] + nh[1142],
        sL = nh[733] + nh[20] + nh[396] + nh[20] + nh[123], rL = nh[1126] + nh[22] + nh[91],
        hL = nh[1120] + nh[20] + nh[736] + nh[20] + nh[228], aL = nh[294] + nh[113] + nh[114],
        oL = nh[1120] + nh[20] + nh[736], fL = nh[1120] + nh[20] + nh[388], uL = nh[276] + nh[96] + nh[293],
        cL = nh[269], _L = nh[1120] + nh[20] + nh[1112] + nh[20] + nh[759],
        dL = nh[1120] + nh[20] + nh[733] + nh[20] + nh[735], lL = nh[1120] + nh[20] + nh[648] + nh[20] + nh[1115],
        vL = nh[1118], bL = nh[20] + nh[167] + nh[193], yL = nh[1085], gL = nh[734] + nh[20] + nh[252],
        xL = nh[276] + nh[42] + nh[298] + nh[53] + nh[297] + nh[13] + nh[126], mL = nh[20] + nh[79] + nh[80] + nh[168],
        pL = nh[342] + nh[20] + nh[1107] + nh[20] + nh[252], EL = nh[184] + nh[1] + nh[440],
        wL = nh[1117] + nh[120] + nh[310], TL = nh[1143] + nh[62] + nh[1144], kL = nh[20] + nh[1145], OL = nh[1104],
        SL = nh[1084] + nh[20] + nh[1103] + nh[20] + nh[171],
        AL = nh[1084] + nh[20] + nh[1103] + nh[20] + nh[176] + nh[20] + nh[1105],
        ML = nh[1084] + nh[20] + nh[1103] + nh[20] + nh[176] + nh[20] + nh[1105] + nh[20] + nh[396],
        IL = nh[20] + nh[355] + nh[165], LL = nh[88] + nh[35] + nh[1146], PL = nh[69] + nh[35] + nh[1146],
        CL = nh[371] + nh[20] + nh[1107] + nh[20] + nh[252],
        jL = nh[371] + nh[20] + nh[397] + nh[20] + nh[1139] + nh[20] + nh[371],
        RL = nh[88] + nh[35] + nh[1146] + nh[31] + nh[275], DL = nh[88] + nh[35] + nh[1146] + nh[13] + nh[126],
        NL = nh[88] + nh[35] + nh[1146] + nh[31] + nh[203],
        BL = nh[88] + nh[35] + nh[1146] + nh[31] + nh[203] + nh[31] + nh[217],
        $L = nh[354] + nh[20] + nh[394] + nh[20] + nh[1109], FL = nh[88] + nh[35] + nh[1146] + nh[13] + nh[1147],
        GL = nh[354] + nh[20] + nh[394] + nh[20] + nh[1107] + nh[20] + nh[252],
        zL = nh[88] + nh[35] + nh[1146] + nh[37] + nh[771] + nh[1] + nh[440],
        HL = nh[354] + nh[20] + nh[394] + nh[20] + nh[176] + nh[20] + nh[1105],
        YL = nh[88] + nh[35] + nh[1146] + nh[42] + nh[298] + nh[53] + nh[297],
        UL = nh[88] + nh[35] + nh[1146] + nh[42] + nh[298] + nh[772] + nh[773],
        WL = nh[88] + nh[35] + nh[1146] + nh[42] + nh[298] + nh[1] + nh[438],
        qL = nh[69] + nh[35] + nh[1146] + nh[31] + nh[275], VL = nh[69] + nh[35] + nh[1146] + nh[13] + nh[126],
        XL = nh[69] + nh[35] + nh[1146] + nh[31] + nh[203],
        KL = nh[69] + nh[35] + nh[1146] + nh[31] + nh[203] + nh[31] + nh[217],
        JL = nh[354] + nh[20] + nh[397] + nh[20] + nh[1109], ZL = nh[69] + nh[35] + nh[1146] + nh[13] + nh[1147],
        QL = nh[354] + nh[20] + nh[397] + nh[20] + nh[1109] + nh[20] + nh[171],
        tP = nh[69] + nh[35] + nh[1146] + nh[13] + nh[1147] + nh[31] + nh[217],
        iP = nh[69] + nh[35] + nh[1146] + nh[37] + nh[771] + nh[1] + nh[440],
        nP = nh[354] + nh[20] + nh[397] + nh[20] + nh[1107] + nh[20] + nh[759],
        eP = nh[69] + nh[35] + nh[1146] + nh[37] + nh[771] + nh[283] + nh[284],
        sP = nh[69] + nh[35] + nh[1146] + nh[42] + nh[298] + nh[53] + nh[297],
        rP = nh[354] + nh[20] + nh[397] + nh[20] + nh[176] + nh[20] + nh[1105] + nh[20] + nh[396],
        hP = nh[69] + nh[35] + nh[1146] + nh[42] + nh[298] + nh[772] + nh[773],
        aP = nh[69] + nh[35] + nh[1146] + nh[42] + nh[298] + nh[1] + nh[438], oP = nh[404] + nh[42] + nh[1148],
        fP = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[1121],
        uP = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[1123] + nh[20] + nh[1121],
        cP = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[170] + nh[20] + nh[171],
        _P = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[1085],
        dP = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[736] + nh[20] + nh[228],
        lP = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[736],
        vP = nh[371] + nh[20] + nh[391] + nh[20] + nh[1120] + nh[20] + nh[388], bP = nh[274] + nh[31] + nh[289],
        yP = nh[342] + nh[20] + nh[176] + nh[20] + nh[1107] + nh[20] + nh[252],
        gP = nh[354] + nh[20] + nh[394] + nh[20] + nh[1103] + nh[20] + nh[171],
        xP = nh[354] + nh[20] + nh[394] + nh[20] + nh[176] + nh[20] + nh[1105] + nh[20] + nh[396],
        mP = nh[274] + nh[1] + nh[2] + nh[187] + nh[337], pP = nh[24] + nh[274] + nh[1] + nh[94],
        EP = nh[20] + nh[79] + nh[281] + nh[1149], wP = nh[48] + nh[62] + nh[1150], TP = nh[274] + nh[31] + nh[275],
        kP = nh[28] + nh[62] + nh[1150] + nh[22] + nh[23] + nh[1] + nh[532], OP = nh[111] + nh[1] + nh[94],
        SP = nh[446] + nh[42] + nh[1148], AP = nh[446] + nh[62] + nh[1150] + nh[22] + nh[1037],
        MP = nh[366] + nh[22] + nh[1037], IP = nh[111] + nh[62] + nh[1150], LP = nh[197] + nh[1] + nh[2],
        PP = nh[24] + nh[447] + nh[62] + nh[1091], CP = nh[24] + nh[439] + nh[13] + nh[126] + nh[122],
        jP = nh[24] + nh[439] + nh[13] + nh[126] + nh[123],
        RP = nh[24] + nh[447] + nh[31] + nh[769] + nh[13] + nh[126] + nh[123], DP = nh[24] + nh[439] + nh[62] + nh[752],
        NP = nh[399] + nh[20] + nh[1151] + nh[20] + nh[1152], BP = nh[24] + nh[741] + nh[1] + nh[440],
        $P = nh[24] + nh[741] + nh[1] + nh[440] + nh[62] + nh[753] + nh[230] + nh[231],
        FP = nh[24] + nh[439] + nh[1] + nh[440], GP = nh[749] + nh[1] + nh[489],
        zP = nh[409] + nh[120] + nh[410] + nh[1] + nh[2], HP = nh[775], YP = nh[20] + nh[79] + nh[80] + nh[79],
        UP = nh[20] + nh[79] + nh[281] + nh[1144], WP = nh[72] + nh[1153],
        qP = nh[28] + nh[53] + nh[189] + nh[1] + nh[489], VP = nh[24] + nh[274] + nh[31] + nh[586],
        XP = nh[259] + nh[230] + nh[1154] + nh[62] + nh[199], KP = nh[20] + nh[775] + nh[62] + nh[199],
        JP = nh[24] + nh[184] + nh[283] + nh[284], ZP = nh[24] + nh[1117] + nh[120] + nh[310],
        QP = nh[24] + nh[184] + nh[1] + nh[440], tC = nh[31] + nh[586], iC = nh[37] + nh[771] + nh[283] + nh[284],
        nC = nh[24] + nh[179], eC = nh[24] + nh[1019], sC = nh[24] + nh[179] + nh[31] + nh[275],
        rC = nh[1125] + nh[20] + nh[1121], hC = nh[1155], aC = nh[24] + nh[179] + nh[37] + nh[457],
        oC = nh[24] + nh[179] + nh[31] + nh[217], fC = nh[37] + nh[993], uC = nh[24] + nh[274] + nh[37] + nh[993],
        cC = nh[1071] + nh[62] + nh[199], _C = nh[24] + nh[274] + nh[37] + nh[1156] + nh[35] + nh[1146],
        dC = nh[24] + nh[274] + nh[120] + nh[165] + nh[35] + nh[1146], lC = nh[24] + nh[206] + nh[113] + nh[114],
        vC = nh[197] + nh[120] + nh[165] + nh[35] + nh[1146],
        bC = nh[24] + nh[88] + nh[35] + nh[1146] + nh[31] + nh[289],
        yC = nh[24] + nh[88] + nh[35] + nh[1146] + nh[13] + nh[126], gC = nh[88] + nh[35] + nh[1146] + nh[42] + nh[241],
        xC = nh[24] + nh[88] + nh[35] + nh[1146], mC = nh[88] + nh[35] + nh[1146] + nh[31] + nh[1081],
        pC = nh[88] + nh[35] + nh[1146] + nh[37] + nh[771] + nh[283] + nh[284],
        EC = nh[24] + nh[69] + nh[35] + nh[1146] + nh[31] + nh[289],
        wC = nh[24] + nh[69] + nh[35] + nh[1146] + nh[13] + nh[126], TC = nh[24] + nh[69] + nh[35] + nh[1146],
        kC = nh[24] + nh[69] + nh[35] + nh[1146] + nh[31] + nh[275],
        OC = nh[69] + nh[35] + nh[1146] + nh[31] + nh[1081], SC = nh[283] + nh[284],
        AC = nh[69] + nh[35] + nh[1146] + nh[42] + nh[241], MC = nh[35] + nh[1146] + nh[31] + nh[203],
        IC = nh[35] + nh[1146] + nh[31] + nh[203] + nh[31] + nh[217], LC = nh[35] + nh[1146] + nh[31] + nh[1081],
        PC = nh[35] + nh[1146] + nh[42] + nh[298] + nh[53] + nh[297],
        CC = nh[35] + nh[1146] + nh[42] + nh[298] + nh[53] + nh[297] + nh[13] + nh[126],
        jC = nh[35] + nh[1146] + nh[37] + nh[771] + nh[1] + nh[440],
        RC = nh[35] + nh[1146] + nh[37] + nh[771] + nh[283] + nh[284],
        DC = nh[35] + nh[1146] + nh[42] + nh[298] + nh[1] + nh[438],
        NC = nh[35] + nh[1146] + nh[42] + nh[298] + nh[772] + nh[773], BC = nh[35] + nh[1146] + nh[13] + nh[1147],
        $C = nh[35] + nh[1146] + nh[13] + nh[1147] + nh[31] + nh[217],
        FC = nh[24] + nh[274] + nh[37] + nh[771] + nh[283] + nh[284], GC = nh[37] + nh[1156] + nh[35] + nh[1146],
        zC = nh[120] + nh[165] + nh[35] + nh[1146], HC = nh[236] + nh[26] + nh[327],
        YC = nh[371] + nh[20] + nh[244] + nh[20] + nh[1157], UC = nh[202] + nh[62] + nh[328] + nh[26] + nh[405],
        WC = nh[1158] + nh[62] + nh[1159], qC = nh[202] + nh[22] + nh[1160] + nh[13] + nh[1161], VC = nh[1162],
        XC = nh[44] + nh[62] + nh[328] + nh[42] + nh[1148], KC = nh[1143] + nh[62] + nh[328] + nh[42] + nh[1148],
        JC = nh[236] + nh[96] + nh[1163] + nh[42] + nh[298], ZC = nh[371] + nh[20] + nh[244] + nh[20] + nh[375],
        QC = nh[707] + nh[75], tj = nh[1071] + nh[31] + nh[401], ij = nh[20] + nh[79] + nh[281] + nh[643],
        nj = nh[24] + nh[274] + nh[62] + nh[199], ej = nh[749] + nh[62] + nh[199],
        sj = nh[44] + nh[42] + nh[1164] + nh[62] + nh[199],
        rj = nh[44] + nh[53] + nh[54] + nh[22] + nh[393] + nh[22] + nh[157], hj = nh[210] + nh[123], aj = nh[1141],
        oj = nh[44] + nh[42] + nh[1164] + nh[22] + nh[1165], fj = nh[1120] + nh[20] + nh[734], uj = nh[72] + nh[1166],
        cj = nh[1084] + nh[20] + nh[1112] + nh[20] + nh[252], _j = nh[371] + nh[20] + nh[391] + nh[20] + nh[1167],
        dj = nh[72] + nh[1168] + nh[1169] + nh[356], lj = nh[72] + nh[1170] + nh[26] + nh[220],
        vj = nh[1171] + nh[20] + nh[371] + nh[20] + nh[1172] + nh[20] + nh[456], bj = nh[20] + nh[1173], yj = nh[465],
        gj = nh[1174] + nh[56] + nh[1175], xj = nh[1176], mj = nh[1177], pj = nh[180],
        Ej = nh[44] + nh[53] + nh[1178] + nh[187] + nh[474], wj = nh[1179] + nh[35] + nh[1180],
        Tj = nh[59] + nh[26] + nh[27], kj = nh[414] + nh[283] + nh[1089], Oj = nh[414] + nh[40] + nh[231],
        Sj = nh[1181], Aj = nh[112] + nh[22] + nh[1037], Mj = nh[542],
        Ij = nh[28] + nh[26] + nh[415] + nh[1] + nh[1182], Lj = nh[1183] + nh[20] + nh[1184],
        Pj = nh[28] + nh[187] + nh[621] + nh[26] + nh[27], Cj = nh[1143] + nh[42] + nh[1185] + nh[62] + nh[199],
        jj = nh[1186], Rj = nh[1187], Dj = nh[1188], Nj = nh[1158] + nh[42] + nh[1189] + nh[37] + nh[1156],
        Bj = nh[1190] + nh[62] + nh[199], $j = nh[20] + nh[79] + nh[80] + nh[1191] + nh[62] + nh[199],
        Fj = nh[4] + nh[42] + nh[1192], Gj = nh[627] + nh[187] + nh[79], zj = nh[20] + nh[79] + nh[1193],
        Hj = nh[223] + nh[120] + nh[165] + nh[1] + nh[1050], Yj = nh[202] + nh[187] + nh[285],
        Uj = nh[1155] + nh[120] + nh[165], Wj = nh[627] + nh[120] + nh[165] + nh[13] + nh[1194],
        qj = nh[1195] + nh[20] + nh[1196], Vj = nh[627] + nh[35] + nh[36], Xj = nh[627] + nh[35] + nh[247],
        Kj = nh[175] + nh[31] + nh[691], Jj = nh[20] + nh[1197] + nh[35] + nh[36], Zj = nh[166] + nh[22] + nh[1015],
        Qj = nh[1198], tR = nh[1199], iR = nh[1200] + nh[31] + nh[1201],
        nR = nh[1202] + nh[31] + nh[1201] + nh[35] + nh[1203], eR = nh[259] + nh[42] + nh[241],
        sR = nh[202] + nh[230] + nh[1204], rR = nh[1200] + nh[26] + nh[1205],
        hR = nh[111] + nh[1] + nh[620] + nh[187] + nh[621], aR = nh[1206], oR = nh[1207] + nh[1005], fR = nh[1208],
        uR = nh[53] + nh[1209] + nh[47] + nh[26] + nh[1210] + nh[240], cR = nh[48] + nh[31] + nh[695],
        _R = nh[1183] + nh[20] + nh[1211], dR = nh[414] + nh[31] + nh[289] + nh[40] + nh[231], lR = nh[31] + nh[289],
        vR = nh[42] + nh[298], bR = nh[31] + nh[1081], yR = nh[26] + nh[327], gR = nh[361] + nh[1212] + nh[1055],
        xR = nh[470] + nh[22] + nh[1037],
        mR = nh[42] + nh[1148] + nh[47] + nh[1] + nh[1213] + nh[138] + nh[247] + nh[47] + nh[26] + nh[493],
        pR = nh[274] + nh[26] + nh[415], ER = nh[1214], wR = nh[1215] + nh[26] + nh[535],
        TR = nh[1216] + nh[96] + nh[1217], kR = nh[1188] + nh[22] + nh[609], OR = nh[1218],
        SR = nh[452] + nh[1] + nh[1219], AR = nh[20] + nh[79] + nh[80] + nh[570] + nh[230] + nh[231],
        MR = nh[470] + nh[230] + nh[231], IR = nh[514] + nh[1] + nh[532] + nh[53] + nh[533],
        LR = nh[20] + nh[1190] + nh[62] + nh[199], PR = nh[1220] + nh[20] + nh[1221], CR = nh[1222] + nh[96] + nh[1217],
        jR = nh[1084] + nh[20] + nh[1087] + nh[20] + nh[177], RR = nh[20] + nh[79] + nh[281] + nh[663],
        DR = nh[1084] + nh[20] + nh[244] + nh[20] + nh[343], NR = nh[1084] + nh[20] + nh[244] + nh[20] + nh[711],
        BR = nh[1223] + nh[507], $R = nh[283] + nh[1089] + nh[399], FR = nh[1224] + nh[158],
        GR = nh[1225] + nh[47] + nh[220] + nh[75] + nh[167] + nh[1068] + nh[47] + nh[1226] + nh[100] + nh[628],
        zR = nh[863],
        HR = nh[75] + nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[40] + nh[419] + nh[47] + nh[421],
        YR = nh[1225] + nh[104] + nh[213] + nh[105] + nh[287] + nh[100] + nh[780] + nh[513] + nh[66] + nh[67] + nh[220] + nh[430] + nh[220] + nh[430] + nh[220] + nh[430] + nh[220] + nh[75] + nh[356] + nh[71],
        UR = nh[75] + nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[40] + nh[419],
        WR = nh[1225] + nh[104] + nh[220] + nh[105], qR = nh[1227],
        VR = nh[104] + nh[1225] + nh[47] + nh[194] + nh[1068] + nh[47] + nh[1228] + nh[100] + nh[738] + nh[67] + nh[220] + nh[75] + nh[80] + nh[430] + nh[220] + nh[430] + nh[220] + nh[75] + nh[80] + nh[430] + nh[213] + nh[71],
        XR = nh[75] + nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[40] + nh[419] + nh[104] + nh[443],
        KR = nh[1225] + nh[104] + nh[213] + nh[105],
        JR = nh[104] + nh[1225] + nh[47] + nh[220] + nh[75] + nh[194] + nh[1068] + nh[47] + nh[782],
        ZR = nh[20] + nh[79] + nh[939], QR = nh[20] + nh[304], tD = nh[20] + nh[1229],
        iD = nh[75] + nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[31] + nh[559] + nh[62] + nh[1230],
        nD = nh[1231] + nh[513] + nh[167] + nh[158] + nh[1232] + nh[295] + nh[513] + nh[1014] + nh[105] + nh[1233] + nh[100] + nh[1234] + nh[513] + nh[276] + nh[100] + nh[1233] + nh[105] + nh[1233] + nh[100] + nh[439] + nh[1235] + nh[225] + nh[47] + nh[220] + nh[158] + nh[47] + nh[220] + nh[158] + nh[47] + nh[213] + nh[158] + nh[1232] + nh[287] + nh[100] + nh[780] + nh[513] + nh[66] + nh[67] + nh[1236] + nh[68] + nh[1236] + nh[68] + nh[1236] + nh[68] + nh[220] + nh[75] + nh[194] + nh[1237] + nh[276] + nh[100] + nh[512] + nh[513] + nh[355] + nh[158] + nh[105] + nh[1231] + nh[513] + nh[213] + nh[158] + nh[105],
        eD = nh[75] + nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[31] + nh[559] + nh[62] + nh[1230] + nh[75] + nh[443] + nh[1238] + nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[31] + nh[559] + nh[62] + nh[1230] + nh[104] + nh[443],
        sD = nh[1231] + nh[100] + nh[83] + nh[513] + nh[80] + nh[158] + nh[105],
        rD = nh[1231] + nh[100] + nh[84] + nh[513] + nh[80] + nh[158] + nh[105],
        hD = nh[75] + nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[31] + nh[559] + nh[22] + nh[429],
        aD = nh[104] + nh[1225] + nh[47] + nh[194] + nh[1068] + nh[47] + nh[1228] + nh[100] + nh[738] + nh[67] + nh[220] + nh[75] + nh[80] + nh[430] + nh[220] + nh[430] + nh[220] + nh[75] + nh[80] + nh[430] + nh[213] + nh[1237],
        oD = nh[20] + nh[90] + nh[53] + nh[602] + nh[31] + nh[699],
        fD = nh[417] + nh[100] + nh[283] + nh[418] + nh[100] + nh[31] + nh[559] + nh[22] + nh[429],
        uD = nh[20] + nh[79] + nh[281] + nh[1068], cD = nh[411] + nh[187] + nh[1239], _D = nh[62] + nh[1240],
        dD = nh[1188] + nh[22] + nh[1165], lD = nh[210] + nh[122], vD = nh[1114],
        bD = nh[48] + nh[62] + nh[86] + nh[187] + nh[168], yD = nh[1241], gD = nh[1242] + nh[20] + nh[1243],
        xD = nh[1242] + nh[20] + nh[244], mD = nh[1226] + nh[13] + nh[480],
        pD = nh[28] + nh[35] + nh[36] + nh[31] + nh[458], ED = nh[146] + nh[829] + nh[96] + nh[1054],
        wD = nh[28] + nh[35] + nh[36] + nh[26] + nh[400], TD = nh[20] + nh[88] + nh[1244],
        kD = nh[20] + nh[69] + nh[1245], OD = nh[20] + nh[69] + nh[31] + nh[586],
        SD = nh[20] + nh[88] + nh[31] + nh[586], AD = nh[69] + nh[187] + nh[1040], MD = nh[1246],
        ID = nh[755] + nh[120] + nh[309], LD = nh[1247] + nh[120] + nh[310], PD = nh[20] + nh[88] + nh[1245],
        CD = nh[20] + nh[69] + nh[1244], jD = nh[1248] + nh[20] + nh[1249] + nh[20] + nh[178] + nh[20] + nh[1250],
        RD = nh[1248] + nh[20] + nh[1249] + nh[20] + nh[178] + nh[20] + nh[1251],
        DD = nh[1248] + nh[20] + nh[1129] + nh[20] + nh[1249] + nh[20] + nh[178] + nh[20] + nh[1250],
        ND = nh[1248] + nh[20] + nh[1129] + nh[20] + nh[1249] + nh[20] + nh[178] + nh[20] + nh[1251], BD = nh[1052],
        $D = nh[111] + nh[53] + nh[189] + nh[22] + nh[23] + nh[1] + nh[532] + nh[42] + nh[522],
        FD = nh[205] + nh[22] + nh[23] + nh[1] + nh[532] + nh[53] + nh[533],
        GD = nh[28] + nh[53] + nh[189] + nh[22] + nh[23] + nh[1] + nh[532],
        zD = nh[48] + nh[53] + nh[189] + nh[22] + nh[23] + nh[1] + nh[532] + nh[42] + nh[522],
        HD = nh[48] + nh[53] + nh[1252], YD = nh[20] + nh[1253] + nh[187] + nh[168], UD = nh[111] + nh[53] + nh[1252],
        WD = nh[1241] + nh[42] + nh[43], qD = nh[53] + nh[1252] + nh[187] + nh[621], VD = nh[1254], XD = nh[131],
        KD = nh[202] + nh[1] + nh[1255] + nh[22] + nh[207], JD = nh[103] + nh[53] + nh[1256],
        ZD = nh[44] + nh[53] + nh[54] + nh[53] + nh[1256] + nh[31] + nh[1081], QD = nh[472] + nh[22] + nh[157],
        tN = nh[53] + nh[1256] + nh[22] + nh[207] + nh[187] + nh[621], iN = nh[623],
        nN = nh[20] + nh[79] + nh[80] + nh[570] + nh[22] + nh[393], eN = nh[1257] + nh[22] + nh[157],
        sN = nh[69] + nh[42] + nh[1047] + nh[22] + nh[157], rN = nh[623] + nh[22] + nh[393],
        hN = nh[20] + nh[79] + nh[281] + nh[211], aN = nh[414] + nh[26] + nh[327] + nh[62] + nh[86] + nh[187] + nh[621],
        oN = nh[1258], fN = nh[1259], uN = nh[20] + nh[79] + nh[281] + nh[507], cN = nh[20] + nh[214] + nh[220],
        _N = nh[1260], dN = nh[20] + nh[79] + nh[798], lN = nh[44] + nh[53] + nh[54] + nh[31] + nh[217],
        vN = nh[236] + nh[96] + nh[117], bN = nh[236] + nh[22] + nh[157], yN = nh[1261],
        gN = nh[72] + nh[213] + nh[53] + nh[1262], xN = nh[72] + nh[26] + nh[1263], mN = nh[452] + nh[22] + nh[157],
        pN = nh[243] + nh[20] + nh[1264] + nh[20] + nh[397],
        EN = nh[1] + nh[1265] + nh[31] + nh[289] + nh[187] + nh[621],
        wN = nh[1] + nh[1265] + nh[42] + nh[298] + nh[187] + nh[621], TN = nh[26] + nh[327] + nh[399],
        kN = nh[1158] + nh[42] + nh[1189] + nh[120] + nh[165],
        ON = nh[1] + nh[1265] + nh[31] + nh[1266] + nh[26] + nh[327] + nh[187] + nh[621], SN = nh[1267],
        AN = nh[417] + nh[100] + nh[42] + nh[1148] + nh[26] + nh[1268],
        MN = nh[1269] + nh[1270] + nh[1271] + nh[26] + nh[47] + nh[213] + nh[158], IN = nh[356] + nh[158],
        LN = nh[1233] + nh[31] + nh[769], PN = nh[1272], CN = nh[28] + nh[56] + nh[57] + nh[1] + nh[532], jN = nh[1273],
        RN = nh[59] + nh[26] + nh[1274], DN = nh[28] + nh[31] + nh[275] + nh[1] + nh[532],
        NN = nh[1120] + nh[20] + nh[1275] + nh[20] + nh[1276] + nh[20] + nh[1277] + nh[20] + nh[1278] + nh[20] + nh[1279],
        BN = nh[61] + nh[26] + nh[1274],
        $N = nh[59] + nh[26] + nh[1274] + nh[113] + nh[1280] + nh[1] + nh[581] + nh[13] + nh[79] + nh[113] + nh[572],
        FN = nh[28] + nh[1] + nh[581] + nh[13] + nh[79] + nh[113] + nh[572], GN = nh[202] + nh[26] + nh[1281],
        zN = nh[42] + nh[1148] + nh[26] + nh[1268], HN = nh[1119] + nh[26] + nh[1268], YN = nh[1282],
        UN = nh[202] + nh[26] + nh[1283], WN = nh[69] + nh[1] + nh[322],
        qN = nh[0] + nh[26] + nh[327] + nh[62] + nh[328], VN = nh[1284] + nh[31] + nh[412] + nh[40] + nh[413],
        XN = nh[411] + nh[53] + nh[1285] + nh[1] + nh[581] + nh[120] + nh[165] + nh[13] + nh[1194],
        KN = nh[26] + nh[1274] + nh[187] + nh[621], JN = nh[1286] + nh[187] + nh[188], ZN = nh[466], QN = nh[1287],
        tB = nh[1286] + nh[47] + nh[239] + nh[240], iB = nh[47] + nh[85] + nh[47], nB = nh[574] + nh[26] + nh[1210],
        eB = nh[472] + nh[53] + nh[1288] + nh[26] + nh[415], sB = nh[202] + nh[31] + nh[1289],
        rB = nh[1183] + nh[20] + nh[1290], hB = nh[223] + nh[26] + nh[1210], aB = nh[329] + nh[113] + nh[1291],
        oB = nh[1183] + nh[20] + nh[765] + nh[20] + nh[1292], fB = nh[1293], uB = nh[1294] + nh[20] + nh[1295],
        cB = nh[1294] + nh[20] + nh[1292], _B = nh[221] + nh[120] + nh[165] + nh[42] + nh[1296],
        dB = nh[20] + nh[79] + nh[80] + nh[1213] + nh[26] + nh[1274],
        lB = nh[202] + nh[26] + nh[400] + nh[22] + nh[157] + nh[26] + nh[1283],
        vB = nh[202] + nh[26] + nh[400] + nh[22] + nh[157], bB = nh[202] + nh[1] + nh[1297] + nh[22] + nh[157],
        yB = nh[202] + nh[37] + nh[1156], gB = nh[72] + nh[1298], xB = nh[259] + nh[1] + nh[570] + nh[26] + nh[415],
        mB = nh[20] + nh[1299], pB = nh[202] + nh[31] + nh[1300], EB = nh[202] + nh[22] + nh[157] + nh[96] + nh[1301],
        wB = nh[48] + nh[22] + nh[207] + nh[31] + nh[768] + nh[62] + nh[86] + nh[187] + nh[337],
        TB = nh[1134] + nh[20] + nh[530], kB = nh[1136], OB = nh[202] + nh[22] + nh[157] + nh[35] + nh[1302],
        SB = nh[1134] + nh[20] + nh[242], AB = nh[20] + nh[1303] + nh[22] + nh[1304], MB = nh[202] + nh[96] + nh[1305],
        IB = nh[516] + nh[22] + nh[609], LB = nh[497] + nh[31] + nh[768],
        PB = nh[1134] + nh[20] + nh[765] + nh[20] + nh[1295], CB = nh[1306], jB = nh[20] + nh[79] + nh[80] + nh[506],
        RB = nh[1072], DB = nh[1134] + nh[20] + nh[1290], NB = nh[1136] + nh[187] + nh[337],
        BB = nh[1134] + nh[20] + nh[765] + nh[20] + nh[1292], $B = nh[455] + nh[20] + nh[1307] + nh[20] + nh[1103],
        FB = nh[455] + nh[20] + nh[1307] + nh[20] + nh[1103] + nh[20] + nh[252],
        GB = nh[455] + nh[20] + nh[1307] + nh[20] + nh[1107] + nh[20] + nh[252],
        zB = nh[1307] + nh[20] + nh[455] + nh[20] + nh[250] + nh[20] + nh[1308], HB = nh[1309], YB = nh[1310],
        UB = nh[1307] + nh[20] + nh[455] + nh[20] + nh[250], WB = nh[20] + nh[1311] + nh[187] + nh[168],
        qB = nh[20] + nh[992], VB = nh[20] + nh[14] + nh[355] + nh[120] + nh[469], XB = nh[1312] + nh[20] + nh[1292],
        KB = nh[202] + nh[31] + nh[1313], JB = nh[628] + nh[96] + nh[1314], ZB = nh[1312] + nh[20] + nh[1315],
        QB = nh[1307] + nh[20] + nh[455] + nh[20] + nh[250] + nh[20] + nh[1316],
        t$ = nh[411] + nh[96] + nh[1314] + nh[31] + nh[695] + nh[62] + nh[86] + nh[96] + nh[1317] + nh[62] + nh[420],
        i$ = nh[1318], n$ = nh[1319], e$ = nh[20] + nh[1320], s$ = nh[1321] + nh[100] + nh[465],
        r$ = nh[1322] + nh[100] + nh[465], h$ = nh[1323] + nh[100] + nh[465],
        a$ = nh[66] + nh[67] + nh[220] + nh[430] + nh[1324] + nh[430] + nh[220] + nh[430] + nh[213] + nh[71],
        o$ = nh[72] + nh[1325] + nh[220], f$ = nh[20] + nh[210] + nh[22] + nh[157], u$ = nh[202] + nh[96] + nh[1326],
        c$ = nh[20] + nh[79] + nh[281] + nh[508], _$ = nh[20] + nh[210] + nh[444] + nh[1327] + nh[42] + nh[1328],
        d$ = nh[775] + nh[62] + nh[199], l$ = nh[1329], v$ = nh[1330], b$ = nh[1331] + nh[20] + nh[1292],
        y$ = nh[259] + nh[31] + nh[695], g$ = nh[155] + nh[120] + nh[165] + nh[120] + nh[1142], x$ = nh[1312],
        m$ = nh[1332] + nh[20] + nh[1333], p$ = nh[1332] + nh[20] + nh[551],
        E$ = nh[417] + nh[100] + nh[120] + nh[1334], w$ = nh[1335] + nh[20] + nh[396] + nh[20] + nh[122],
        T$ = nh[1336] + nh[20] + nh[1337], k$ = nh[72] + nh[1338],
        O$ = nh[213] + nh[158] + nh[47] + nh[1269] + nh[1270] + nh[53] + nh[281] + nh[53] + nh[281] + nh[53] + nh[281],
        S$ = nh[167] + nh[158] + nh[47] + nh[355] + nh[158], A$ = nh[44] + nh[187] + nh[1339], M$ = nh[1340],
        I$ = nh[278], L$ = nh[1341] + nh[1342] + nh[1343], P$ = nh[44] + nh[120] + nh[1334] + nh[26] + nh[415],
        C$ = nh[20] + nh[1344], j$ = nh[1335] + nh[20] + nh[396] + nh[20] + nh[123], R$ = nh[20] + nh[214] + nh[80],
        D$ = nh[1008], N$ = nh[623] + nh[120] + nh[469], B$ = nh[259] + nh[120] + nh[1334],
        $$ = nh[59] + nh[120] + nh[469], F$ = nh[411] + nh[120] + nh[1334], G$ = nh[44] + nh[120] + nh[1334],
        z$ = nh[124] + nh[122], H$ = nh[1069] + nh[53] + nh[595], Y$ = nh[1069] + nh[53] + nh[1345],
        U$ = nh[829] + nh[35] + nh[1180], W$ = nh[411] + nh[113] + nh[1346] + nh[648] + nh[1347],
        q$ = nh[627] + nh[62] + nh[86] + nh[230] + nh[558] + nh[26] + nh[27],
        V$ = nh[1183] + nh[20] + nh[765] + nh[20] + nh[1295], X$ = nh[1052] + nh[75] + nh[223] + nh[75] + nh[623],
        K$ = nh[1052] + nh[75] + nh[1348], J$ = nh[1052] + nh[75] + nh[223] + nh[75] + nh[992],
        Z$ = nh[1052] + nh[75] + nh[1349], Q$ = nh[1052] + nh[75] + nh[1350],
        tF = nh[1136] + nh[75] + nh[223] + nh[75] + nh[623], iF = nh[1136] + nh[75] + nh[1348],
        nF = nh[1136] + nh[75] + nh[223] + nh[75] + nh[992], eF = nh[1136] + nh[75] + nh[111],
        sF = nh[1136] + nh[75] + nh[48], rF = nh[1331] + nh[20] + nh[1295], hF = nh[465] + nh[75] + nh[623],
        aF = nh[1351], oF = nh[465] + nh[75] + nh[992], fF = nh[1352], uF = nh[210] + nh[75] + nh[992],
        cF = nh[1197] + nh[75] + nh[623], _F = nh[1197] + nh[75] + nh[992], dF = nh[1088] + nh[75] + nh[1056],
        lF = nh[371] + nh[20] + nh[391], vF = nh[361] + nh[75] + nh[404], bF = nh[463] + nh[75] + nh[623],
        yF = nh[463] + nh[75] + nh[1353], gF = nh[463] + nh[75] + nh[992], xF = nh[577] + nh[75] + nh[563],
        mF = nh[20] + nh[470] + nh[31] + nh[699], pF = nh[20] + nh[28] + nh[26] + nh[415] + nh[96] + nh[616],
        EF = nh[20] + nh[28] + nh[26] + nh[415] + nh[1] + nh[527], wF = nh[20] + nh[79] + nh[220] + nh[187] + nh[621],
        TF = nh[472] + nh[187] + nh[621] + nh[230] + nh[231], kF = nh[44] + nh[187] + nh[621] + nh[187] + nh[1354],
        OF = nh[344] + nh[187] + nh[618], SF = nh[1248] + nh[20] + nh[250] + nh[20] + nh[1355], AF = nh[1356],
        MF = nh[1248] + nh[20] + nh[250] + nh[20] + nh[740], IF = nh[1248] + nh[20] + nh[250] + nh[20] + nh[455],
        LF = nh[1248] + nh[20] + nh[250] + nh[20] + nh[1357], PF = nh[1358],
        CF = nh[1248] + nh[20] + nh[250] + nh[20] + nh[1359], jF = nh[1360],
        RF = nh[1248] + nh[20] + nh[250] + nh[20] + nh[1361] + nh[20] + nh[1362] + nh[20] + nh[371],
        DF = nh[414] + nh[75] + nh[1363] + nh[75] + nh[361],
        NF = nh[1248] + nh[20] + nh[250] + nh[20] + nh[1361] + nh[20] + nh[371], BF = nh[414] + nh[75] + nh[361],
        $F = nh[1248] + nh[20] + nh[250] + nh[20] + nh[1361] + nh[20] + nh[342], FF = nh[414] + nh[75] + nh[1104],
        GF = nh[1248] + nh[20] + nh[250] + nh[20] + nh[1361] + nh[20] + nh[176], zF = nh[414] + nh[75] + nh[206],
        HF = nh[22] + nh[1213] + nh[187] + nh[621], YF = nh[230] + nh[573] + nh[187] + nh[621],
        UF = nh[53] + nh[1285] + nh[1] + nh[581] + nh[187] + nh[621], WF = nh[26] + nh[1364] + nh[187] + nh[621],
        qF = nh[120] + nh[1334] + nh[187] + nh[621], VF = nh[96] + nh[1314] + nh[31] + nh[695] + nh[187] + nh[621],
        XF = nh[42] + nh[1365], KF = nh[1366], JF = nh[1367], ZF = nh[1075],
        QF = nh[44] + nh[42] + nh[360] + nh[96] + nh[1368], tG = nh[1369] + nh[20] + nh[378],
        iG = nh[1369] + nh[20] + nh[377], nG = nh[1369] + nh[20] + nh[510], eG = nh[1369] + nh[20] + nh[383],
        sG = nh[1369] + nh[20] + nh[379], rG = nh[1369] + nh[20] + nh[509],
        hG = nh[1369] + nh[20] + nh[378] + nh[20] + nh[383], aG = nh[1369] + nh[20] + nh[377] + nh[20] + nh[379],
        oG = nh[1369] + nh[20] + nh[377] + nh[20] + nh[383], fG = nh[1369] + nh[20] + nh[383] + nh[20] + nh[377],
        uG = nh[1369] + nh[20] + nh[379] + nh[20] + nh[377], cG = nh[1369] + nh[20] + nh[379] + nh[20] + nh[378],
        _G = nh[1370], dG = nh[1371] + nh[75] + nh[1372], lG = nh[1370] + nh[75] + nh[643],
        vG = nh[1370] + nh[75] + nh[1149], bG = nh[1110] + nh[20] + nh[244] + nh[20] + nh[1373] + nh[20] + nh[374],
        yG = nh[1110] + nh[20] + nh[244] + nh[20] + nh[1374] + nh[20] + nh[1375],
        gG = nh[202] + nh[444] + nh[1376] + nh[53] + nh[1377], xG = nh[452] + nh[31] + nh[275],
        mG = nh[44] + nh[40] + nh[231] + nh[31] + nh[275], pG = nh[325] + nh[1] + nh[2] + nh[53] + nh[1377],
        EG = nh[20] + nh[79] + nh[281] + nh[656], wG = nh[44] + nh[1378] + nh[438],
        TG = nh[44] + nh[42] + nh[360] + nh[120] + nh[310], kG = nh[643] + nh[283] + nh[438],
        OG = nh[1149] + nh[283] + nh[438], SG = nh[266] + nh[120] + nh[310], AG = nh[1379], MG = nh[1380],
        IG = nh[1096] + nh[42] + nh[360], LG = nh[20] + nh[79] + nh[281] + nh[639], PG = nh[20] + nh[893],
        CG = nh[271] + nh[1381], jG = nh[271] + nh[1382],
        RG = nh[20] + nh[1383] + nh[22] + nh[1018] + nh[1] + nh[2] + nh[53] + nh[1377], DG = nh[1075] + nh[123],
        NG = nh[1075] + nh[122], BG = nh[20] + nh[79] + nh[281] + nh[165], $G = nh[20] + nh[79] + nh[281] + nh[79],
        FG = nh[325] + nh[62] + nh[199], GG = nh[266] + nh[96] + nh[453], zG = nh[20] + nh[79] + nh[792],
        HG = nh[266] + nh[53] + nh[494], YG = nh[274] + nh[42] + nh[360] + nh[53] + nh[494], UG = nh[1384], WG = nh[59],
        qG = nh[1385] + nh[42] + nh[360] + nh[53] + nh[494], VG = nh[44] + nh[230] + nh[1386] + nh[187] + nh[1387],
        XG = nh[1075] + nh[1] + nh[338], KG = nh[361] + nh[1] + nh[338], JG = nh[1388], ZG = nh[1389],
        QG = nh[128] + nh[31] + nh[691], tz = nh[202] + nh[96] + nh[1390], iz = nh[20] + nh[663] + nh[281] + nh[507],
        nz = nh[62] + nh[1391] + nh[42] + nh[1365], ez = nh[1392], sz = nh[1393], rz = nh[233], hz = nh[1394],
        az = nh[1395] + nh[20] + nh[1396] + nh[20] + nh[1397], oz = nh[1395] + nh[20] + nh[1396] + nh[20] + nh[1398],
        fz = nh[388] + nh[20] + nh[250] + nh[20] + nh[1399], uz = nh[388] + nh[20] + nh[250] + nh[20] + nh[1400],
        cz = nh[20] + nh[79] + nh[80] + nh[505], _z = nh[1401], dz = nh[758] + nh[31] + nh[1402],
        lz = nh[44] + nh[96] + nh[293], vz = nh[20] + nh[79] + nh[80] + nh[1068], bz = nh[1075] + nh[213],
        yz = nh[1075] + nh[167], gz = nh[371] + nh[20] + nh[391] + nh[20] + nh[1086],
        xz = nh[20] + nh[79] + nh[281] + nh[331] + nh[62] + nh[1403] + nh[37] + nh[286], mz = nh[20] + nh[1404],
        pz = nh[1405] + nh[26] + nh[327], Ez = nh[20] + nh[1032] + nh[187] + nh[79] + nh[62] + nh[328],
        wz = nh[20] + nh[214] + nh[356], Tz = nh[1406] + nh[187] + nh[1407], kz = nh[1408], Oz = nh[1409],
        Sz = nh[202] + nh[187] + nh[1410], Az = nh[1411], Mz = nh[1411] + nh[122], Iz = nh[1411] + nh[123],
        Lz = nh[1087] + nh[20] + nh[384], Pz = nh[1412], Cz = nh[20] + nh[79] + nh[281] + nh[1004], jz = nh[1413],
        Rz = nh[266] + nh[230] + nh[1414], Dz = nh[1415], Nz = nh[20] + nh[1416] + nh[37] + nh[1417],
        Bz = nh[1388] + nh[35] + nh[364], $z = nh[1174], Fz = nh[472] + nh[26] + nh[476],
        Gz = nh[31] + nh[1418] + nh[42] + nh[1365], zz = nh[1419], Hz = nh[1226] + nh[13] + nh[480] + nh[31] + nh[1420],
        Yz = nh[516] + nh[42] + nh[1421], Uz = nh[20] + nh[1422], Wz = nh[20] + nh[1323] + nh[120] + nh[310],
        qz = nh[20] + nh[1423], Vz = nh[306] + nh[26] + nh[307] + nh[187] + nh[79] + nh[26] + nh[327],
        Xz = nh[339] + nh[47] + nh[141],
        Kz = nh[306] + nh[26] + nh[307] + nh[62] + nh[86] + nh[120] + nh[1424] + nh[53] + nh[1058] + nh[37] + nh[1059] + nh[31] + nh[1425],
        Jz = nh[20] + nh[88], Zz = nh[69] + nh[1] + nh[440], Qz = nh[202] + nh[13] + nh[1426],
        tH = nh[202] + nh[113] + nh[1427], iH = nh[202] + nh[37] + nh[1428], nH = nh[202] + nh[31] + nh[1429],
        eH = nh[53] + nh[54] + nh[31] + nh[1081], sH = nh[53] + nh[1430], rH = nh[1] + nh[1431], hH = nh[283] + nh[418],
        aH = nh[40] + nh[231] + nh[399], oH = nh[187] + nh[188] + nh[399], fH = nh[31] + nh[1432],
        uH = nh[22] + nh[207], cH = nh[283] + nh[418] + nh[230] + nh[448],
        _H = nh[417] + nh[1433] + nh[47] + nh[306] + nh[47] + nh[1005] + nh[356], dH = nh[167] + nh[75] + nh[220],
        lH = nh[1434], vH = nh[167] + nh[75] + nh[358] + nh[75] + nh[357] + nh[47] + nh[1093] + nh[167],
        bH = nh[417] + nh[1433] + nh[240] + nh[53] + nh[1435] + nh[47] + nh[1] + nh[1436] + nh[47] + nh[306] + nh[47] + nh[1005] + nh[356] + nh[450] + nh[1] + nh[322],
        yH = nh[356] + nh[450] + nh[357] + nh[450] + nh[1437], gH = 0;
    if (t[ll]) {
        var xH = navigator[vl], mH = /opera/i[sf](xH), pH = !mH && /msie/i[sf](xH), EH = /rv:11.0/i[sf](xH),
            wH = /MSIE 10./i.test(xH);
        if (/Edge/i[sf](xH), EH && (pH = !0), /msie\s[6,7,8]/i[sf](xH)) throw new Error("your browser is not supported");
        var TH = /webkit|khtml/i.test(xH), kH = !TH && /gecko/i[sf](xH), OH = /firefox\//i.test(xH),
            SH = /Chrome\//i[sf](xH), AH = !SH && /Safari\//i[sf](xH), MH = /Macintosh;/i[sf](xH),
            IH = /(iPad|iPhone|iPod)/g[sf](xH), LH = /Android/g.test(xH), PH = /Windows Phone/g[sf](xH),
            CH = (IH || LH || PH) && Z_ in t, jH = xH[bl](/AppleWebKit\/([0-9\.]*)/);
        if (jH && jH[sh] > 1) {
            parseFloat(jH[1])
        }
        LH && parseFloat(xH.match(/Android\s([0-9\.]*)/)[1])
    }
    t[Ah] || (t.requestAnimationFrame = t[yl] || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t[gl] || function (i) {
        return t[xl](function () {
            i()
        }, 1e3 / 60)
    }), t[ml] || (t[ml] = t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t[pl] || t.msCancelAnimationFrame || function (i) {
        return t[El](i)
    });
    var RH = {SELECTION_TOLERANCE: CH ? 7 : 4, LABEL_COLOR: wl};
    J(RH, {
        FONT_STYLE: {
            get: function () {
                return this._fontStyle || (this[Tl] = kl)
            }, set: function (t) {
                this._fontStyle != t && (this[Tl] = t, this._fontChanged = !0)
            }
        }, FONT_SIZE: {
            get: function () {
                return this[Ol] || (this[Ol] = 12)
            }, set: function (t) {
                this[Ol] != t && (this._fontSize = t, this._fontChanged = !0)
            }
        }, FONT_FAMILY: {
            get: function () {
                return this[Sl] || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
            }, set: function (t) {
                this[Sl] != t && (this[Sl] = t, this[Al] = !0)
            }
        }, FONT: {
            get: function () {
                return (this[Al] || this._fontChanged === n) && (this._fontChanged = !1, this._font = this[vo] + jh + this[Eo] + bo + this[yo]), this[Ml]
            }
        }
    });
    var DH = function (t) {
        this._jd = [], this._lk = {}, t && this.add(t)
    };
    DH[vh] = {
        _jd: null, _lk: null, get: function (t) {
            return this.getByIndex(t)
        }, getById: function (t) {
            return this._lk[t]
        }, getByIndex: function (t) {
            return this._jd[t]
        }, forEach: function (t, i, n) {
            return l(this._jd, t, i, n)
        }, forEachReverse: function (t, i, n) {
            return b(this._jd, t, i, n)
        }, size: function () {
            return this._jd[sh]
        }, contains: function (t) {
            return this[Il](t.id)
        }, containsById: function (t) {
            return this._lk.hasOwnProperty(t)
        }, setIndex: function (t, i) {
            var n = this._jd.indexOf(t);
            if (0 > n) throw new Error(Ya + t.id + Ll);
            return n == i ? !1 : (this._jd[oh](n, 1), this._jd[oh](i, 0, t), !0)
        }, setIndexAfter: function (t, i) {
            var n = this._jd.indexOf(t);
            if (0 > n) throw new Error(Ya + t.id + Ll);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._jd.splice(n, 1), this._jd.splice(i, 0, t), i)
        }, setIndexBefore: function (t, i) {
            var n = this._jd[dh](t);
            if (0 > n) throw new Error(Ya + t.id + Ll);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._jd.splice(n, 1), this._jd[oh](i, 0, t), i)
        }, indexOf: function (t) {
            return this._jd.indexOf(t)
        }, getIndexById: function (t) {
            var i = this[Pl](t);
            return i ? this._jd[dh](i) : -1
        }, add: function (t, i) {
            return $(t) ? this._f8(t, i) : this._kg(t, i)
        }, addFirst: function (t) {
            return this.add(t, 0)
        }, _f8: function (t, i) {
            if (0 == t[sh]) return !1;
            var e = !1, s = i >= 0;
            t = t._jd || t;
            for (var r = 0, h = t[sh]; h > r; r++) {
                var a = t[r];
                null !== a && a !== n && this._kg(a, i, !0) && (e = !0, s && i++)
            }
            return e
        }, _kg: function (t, i) {
            var e = t.id;
            return e === n || this.containsById(e) ? !1 : (g(this._jd, t, i), this._lk[e] = t, t)
        }, remove: function (t) {
            return $(t) ? this[Cl](t) : t.id ? this._f9(t.id, t) : this.removeById(t)
        }, _nbj: function (t) {
            if (0 == t.length) return !1;
            var i = !1;
            t = t._jd || t;
            for (var e = 0, s = t[sh]; s > e; e++) {
                var r = t[e];
                if (null !== r && r !== n) {
                    r.id === n && (r = this._lk[r]);
                    var h = r.id;
                    this._f9(h, r, !0) && (i = !0)
                }
            }
            return i
        }, _f9: function (t, i) {
            return t !== n && this[Il](t) ? ((null === i || i === n) && (i = this.getById(t)), delete this._lk[t], x(this._jd, i), !0) : !1
        }, removeById: function (t) {
            var i = this._lk[t];
            return i ? this._f9(t, i) : !1
        }, set: function (t) {
            if (!t || 0 == t) return this[so]();
            if (this[jl]() || !$(t)) return this[so](), this.add(t);
            var i = [], n = {}, e = 0;
            if (l(t, function (t) {
                    this._lk[t.id] ? (n[t.id] = t, e++) : i[_h](t)
                }, this), e != this[sh]) {
                var s = [];
                this[Hu](function (t) {
                    n[t.id] || s.push(t)
                }, this), s[sh] && this._nbj(s)
            }
            return i.length && this._f8(i), !0
        }, clear: function () {
            return this[jl]() ? !1 : (this._jd.length = 0, this._lk = {}, !0)
        }, toDatas: function () {
            return this._jd[ah](0)
        }, isEmpty: function () {
            return 0 == this._jd[sh]
        }, valueOf: function () {
            return this._jd.length
        }, clone: function (t) {
            var i = new DH;
            return i.add(t ? y(this._jd) : this[Rl]()), i
        }
    }, J(DH[vh], {
        datas: {
            get: function () {
                return this._jd
            }
        }, random: {
            get: function () {
                return this._jd && this._jd[sh] ? this._jd[H(this._jd[sh])] : null
            }
        }, length: {
            get: function () {
                return this._jd ? this._jd.length : 0
            }
        }
    });
    var NH = (2 * Math.PI, .5 * Math.PI), BH = function (t, i) {
        i = i.toUpperCase();
        for (var n = pH ? t[Dl] : t[Nl]; n && (1 != n.nodeType || n[Bl] && n[Bl][$l]() != i);) n = pH ? n.nextSibling : n[Fl];
        return n && 1 == n.nodeType && n.tagName && n[Bl][$l]() == i ? n : null
    }, $H = function (t, i, n) {
        t instanceof $H && (i = t.y, t = t.x, n = t[Xo]), this.set(t, i, n)
    }, FH = function (t, i, n, e) {
        var s = t - n, r = i - e;
        return Math[Lo](s * s + r * r)
    };
    $H.prototype = {
        x: 0, y: 0, rotate: n, set: function (t, i, n) {
            this.x = t || 0, this.y = i || 0, this.rotate = n || 0
        }, negate: function () {
            this.x = -this.x, this.y = -this.y
        }, offset: function (t, i) {
            this.x += t, this.y += i
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y
        }, distanceTo: function (t) {
            return FH(this.x, this.y, t.x, t.y)
        }, toString: function () {
            return Gl + this.x + zl + this.y + Xh
        }, clone: function () {
            return new $H(this.x, this.y)
        }
    }, Object[mh]($H.prototype, Hl, {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
    });
    var GH = function (t, i, e, s) {
        t !== n && this._n0(t, i, e, s)
    };
    GH.prototype = {
        _n7: null,
        _n3: null,
        _n5: null,
        _n4: null,
        _nb: null,
        _n9: null,
        _n8: 1,
        _n0: function (t, i, n, e) {
            this._n7 = t, this._n3 = i, this._n5 = n, this._n4 = e, t == n ? (this._nb = -1, this._n8 = 0, this._n9 = t) : (this._nb = (i - e) / (t - n), this._n9 = i - this._nb * t, this._n8 = 1), this._l3 = Math.atan2(this._n4 - this._n3, this._n5 - this._n7), this[sa] = Math.cos(this._l3), this[ra] = Math.sin(this._l3)
        },
        _d5: function (t) {
            return 0 == this._n8 ? Number.NaN : this._nb * t + this._n9
        },
        _d6: function (t) {
            return 0 == this._nb ? Number.NaN : (t - this._n9) / this._nb
        },
        _$c: function (t) {
            var i, n, e, s, r, h = t[0], a = t[2], o = t[4], f = t[1], u = t[3], c = t[5], _ = this._nb, d = this._n9,
                l = this._n8;
            if (0 == l ? (e = Math[Lo]((-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -_ * a + _ * h, r = _ * o - 2 * _ * a + _ * h) : (e = Math[Lo]((-f + _ * h + d) * c + u * u + (-2 * _ * a - 2 * d) * u + (_ * o + d) * f + (-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -u + f + _ * a - _ * h, r = c - 2 * u + f - _ * o + 2 * _ * a - _ * h), 0 != r) {
                i = (e + s) / r, n = (-e + s) / r;
                var v, b;
                return i >= 0 && 1 >= i && (v = Yi(i, t)), n >= 0 && 1 >= n && (b = Yi(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0
            }
        },
        _3u: function (t, i, n) {
            if (this._nb == t._nb || 0 == this._n8 && 0 == t._n8) return null;
            var e, s;
            if (e = 0 == this._n8 ? this._n9 : 0 == t._n8 ? t._n9 : (t._n9 - this._n9) / (this._nb - t._nb), s = 0 == this._nb ? this._n9 : 0 == t._nb ? t._n9 : this._n8 ? this._nb * e + this._n9 : t._nb * e + t._n9, !i) return {
                x: e,
                y: s
            };
            var r, h, a;
            if (n) r = -i / 2, h = -r; else {
                r = -FH(this._n7, this._n3, e, s), h = FH(this._n5, this._n4, e, s);
                var o = -r + h;
                if (o > i) {
                    var f = i / o;
                    r *= f, h *= f
                } else a = (i - o) / 2
            }
            var u = this._7f(e, s, r), c = this._7f(e, s, h);
            return a && (u[Jf] = a, c[Jf] = a), [u, c]
        },
        _7f: function (t, i, n) {
            return 0 == this._n8 ? {x: t, y: i + n} : {x: t + n * this[sa], y: i + n * this[ra]}
        }
    };
    var zH = function (t, i) {
        this[La] = t, this[ua] = i
    };
    zH[vh] = {
        width: 0, height: 0, isEmpty: function () {
            return this[La] <= 0 || this.height <= 0
        }, clone: function () {
            return new zH(this.width, this[ua])
        }, toString: function () {
            return Yl + this[La] + zl + this[ua] + Xh
        }
    };
    var HH = function (t, i, e, s) {
        t instanceof Object && !D(t) && (i = t.y, e = t[La], s = t[ua], t = t.x), e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[La] = e, this[ua] = s
    };
    HH[vh] = {
        x: 0, y: 0, width: -1, height: -1, setByRect: function (t) {
            this.x = t.x || 0, this.y = t.y || 0, this[La] = t.width || 0, this[ua] = t[ua] || 0
        }, set: function (t, i, n, e) {
            this.x = t || 0, this.y = i || 0, this[La] = n || 0, this[ua] = e || 0
        }, offset: function (t, i) {
            return this.x += t, this.y += i, this
        }, contains: function (t, i, n, e) {
            if (1 == arguments[sh]) {
                if (lh == typeof t && fi(t)) return this[z_](t.x, t.y, t.width, t.height);
                throw{message: Ul}
            }
            return 2 == arguments[sh] ? t >= this.x && t <= this.x + this[La] && i >= this.y && i <= this.y + this[ua] : ai(this.x, this.y, this[La], this[ua], t, i, n || 0, e || 0)
        }, intersectsPoint: function (t, i, n) {
            return this.width <= 0 && this[ua] <= 0 ? !1 : n ? this[Wl](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this[ua]
        }, intersectsRect: function (t, i, n, e) {
            return ri(this.x, this.y, this[La], this.height, t, i, n, e)
        }, intersects: function (t, i) {
            return D(t[La]) ? this.intersectsRect(t.x, t.y, t[La], t[ua]) : this.intersectsPoint(t, i)
        }, intersection: function (t, i, n, e) {
            var s = this.x, r = this.y, h = s;
            h += this[La];
            var a = r;
            a += this[ua];
            var o = t;
            o += n;
            var f = i;
            return f += e, t > s && (s = t), i > r && (r = i), h > o && (h = o), a > f && (a = f), h -= s, a -= r, 0 > h || 0 > a ? null : new HH(s, r, h, a)
        }, addPoint: function (t) {
            this.add(t.x, t.y)
        }, add: function (t, i) {
            if (D(t.width)) return this.addRect(t.x, t.y, t.width, t[ua]);
            if (D(t.x) && (i = t.y, t = t.x), this[La] < 0 || this.height < 0) return this.x = t, this.y = i, void(this.width = this[ua] = 0);
            var n = this.x, e = this.y, s = this[La], r = this[ua];
            s += n, r += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > r && (r = i), s -= n, r -= e, s > Number[ql] && (s = Number[ql]), r > Number.MAX_VALUE && (r = Number.MAX_VALUE), this.set(n, e, s, r)
        }, addRect: function (t, i, n, e) {
            var s = this.width, r = this.height;
            (0 > s || 0 > r) && this.set(t, i, n, e);
            var h = n, a = e;
            if (!(0 > h || 0 > a)) {
                var o = this.x, f = this.y;
                s += o, r += f;
                var u = t, c = i;
                h += u, a += c, o > u && (o = u), f > c && (f = c), h > s && (s = h), a > r && (r = a), s -= o, r -= f, s > Number.MAX_VALUE && (s = Number.MAX_VALUE), r > Number[ql] && (r = Number.MAX_VALUE), this.set(o, f, s, r)
            }
        }, shrink: function (t, i, n, e) {
            return D(t) ? 1 == arguments[sh] ? e = i = n = t || 0 : 2 == arguments[sh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[Tf] || 0, n = t[ha] || 0, e = t[aa] || 0, t = t.top || 0), this.x += i, this.y += t, this[La] -= i + e, this.height -= t + n, this
        }, grow: function (t, i, n, e) {
            return D(t) ? 1 == arguments[sh] ? e = i = n = t || 0 : 2 == arguments[sh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[Tf] || 0, n = t.bottom || 0, e = t.right || 0, t = t.top || 0), this.x -= i, this.y -= t, this.width += i + e, this[ua] += t + n, this
        }, scale: function (t) {
            return this.x *= t, this.y *= t, this[La] *= t, this[ua] *= t, this
        }, isEmpty: function () {
            return this.width <= 0 && this.height <= 0
        }, toString: function () {
            return this.x + Vl + this.y + Vl + this[La] + Vl + this[ua]
        }, union: function (t) {
            var i = this.width, n = this[ua];
            if (0 > i || 0 > n) return new HH(t.x, t.y, t[La], t[ua]);
            var e = t.width, s = t.height;
            if (0 > e || 0 > s) return new HH(this.x, this.y, this[La], this[ua]);
            var r = this.x, h = this.y;
            i += r, n += h;
            var a = t.x, o = t.y;
            return e += a, s += o, r > a && (r = a), h > o && (h = o), e > i && (i = e), s > n && (n = s), i -= r, n -= h, i > Number[ql] && (i = Number.MAX_VALUE), n > Number[ql] && (n = Number[ql]), new HH(r, h, i, n)
        }, clear: function () {
            this.set(0, 0, -1, -1)
        }, equals: function (t) {
            return t && this.x == t.x && this.y == t.y && this.width == t[La] && this[ua] == t[ua]
        }, clone: function (t, i) {
            return new HH(this.x + (t || 0), this.y + (i || 0), this[La], this[ua])
        }, toArray: function () {
            return [this.x, this.y, this[La], this[ua]]
        }, getIntersectionPoint: function (t, i, n, e) {
            return si(this, t, i, n, e)
        }
    }, E(HH, zH), HH[sc] = function (t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t.width == i[La] && t[ua] == i[ua]
    }, J(HH[vh], {
        left: {
            get: function () {
                return this.x
            }
        }, top: {
            get: function () {
                return this.y
            }
        }, bottom: {
            get: function () {
                return this.y + this[ua]
            }
        }, right: {
            get: function () {
                return this.x + this[La]
            }
        }, cx: {
            get: function () {
                return this.x + this[La] / 2
            }
        }, cy: {
            get: function () {
                return this.y + this[ua] / 2
            }
        }, center: {
            get: function () {
                return new $H(this.cx, this.cy)
            }
        }
    }), HH.intersects = ri, HH[qf] = oi, HH[$o] = hi;
    var YH = function (t, i, n, e) {
        1 == arguments.length ? i = n = e = t : 2 == arguments[sh] && (n = t, e = i), this.set(t, i, n, e)
    };
    YH.prototype = {
        top: 0, bottom: 0, left: 0, right: 0, set: function (t, i, n, e) {
            this.top = t || 0, this[Tf] = i || 0, this.bottom = n || 0, this[aa] = e || 0
        }, clone: function () {
            return new YH(this.top, this.left, this[ha], this.right)
        }, equals: function (t) {
            return t && this.top == t.top && this[ha] == t.bottom && this[Tf] == t[Tf] && this[aa] == t[aa]
        }
    };
    var UH = function (t, i) {
        this[Xl] = t, this.verticalPosition = i
    };
    UH[vh] = {
        verticalPosition: !1, horizontalPosition: !1, toString: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "")
        }
    }, K(UH[vh], Kl, {
        get: function () {
            return (this[Xl] || "") + (this.verticalPosition || "")
        }
    });
    var WH = Jl, qH = Zl, VH = Ql, XH = Rf, KH = tv, JH = iv;
    UH.LEFT_TOP = new UH(WH, XH), UH[nv] = new UH(WH, KH), UH[ev] = new UH(WH, JH), UH[sv] = new UH(qH, XH), UH[rv] = new UH(qH, KH), UH[hv] = new UH(qH, JH), UH.RIGHT_TOP = new UH(VH, XH), UH[av] = new UH(VH, KH), UH[ov] = new UH(VH, JH);
    var ZH = [UH.LEFT_TOP, UH[nv], UH[ev], UH[sv], UH[rv], UH.CENTER_BOTTOM, UH[fv], UH[av], UH[ov]];
    K(UH, Uh, {
        get: function () {
            return ZH[H(ZH[sh])]
        }
    }), UH[ca] = function (t) {
        for (var i in UH) {
            var n = UH[i];
            if (n && Uh != i && n instanceof UH && n.toString() == t) return n
        }
        throw new Error("Position not be supported - " + t)
    };
    var QH = function (t, i, n, e, s) {
        this.set(t, i, n, e), this.radius = s
    };
    QH.prototype = {
        radius: 0, classify: function (t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        }, intersectsRect: function (t, i, n, e) {
            if (T(this, QH, Wl, arguments) === !1) return !1;
            var s = this.x, r = this.y, h = s + this[La], a = r + this[ua], o = 2 * radius, f = 2 * radius,
                u = Math.min(this.width, Math.abs(o)) / 2, c = Math.min(this.height, Math.abs(f)) / 2,
                _ = this[uv](t, s, h, u), d = this[uv](t + n, s, h, u), l = this[uv](i, r, a, c),
                v = this.classify(i + e, r, a, c);
            return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + u) : t -= h - u, i = 1 == v ? i = i + e - (r + c) : i -= a - c, t /= u, i /= c, 1 >= t * t + i * i)
        }, intersectsPoint: function (t, i) {
            if (T(this, QH, $o, arguments) === !1) return !1;
            var n = this.x, e = this.y, s = n + this[La], r = e + this[ua];
            if (n > t || e > i || t >= s || i >= r) return !1;
            var h = 2 * radius, a = 2 * radius, o = Math.min(this[La], Math.abs(h)) / 2,
                f = Math.min(this[ua], Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = r - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
        }, clone: function () {
            return new QH(this.x, this.y, this[La], this[ua], this[cv])
        }
    }, E(QH, HH);
    var tY = function (t, i, n, e) {
        this[Sf] = t, this.type = i, this.kind = n, this[kh] = e
    };
    tY[vh] = {
        source: null, type: null, kind: null, value: null, toString: function () {
            return _v + this.source + dv + this[Vo] + lv + this.kind
        }
    };
    var iY = function (t, i, n, e, s) {
        this.source = t, this[el] = i, this.oldValue = e, this[kh] = n, this.propertyType = s
    };
    iY[vh] = {
        type: vv, propertyType: null, toString: function () {
            return _v + this[Sf] + dv + this[Vo] + bv + this.kind + yv + this[gv] + xv + this[kh]
        }
    }, E(iY, tY), K(iY.prototype, mv, {
        get: function () {
            return this.kind
        }, set: function (t) {
            this.kind = t
        }
    });
    var nY = function (t, i, n) {
        this[Sf] = t, this[gv] = t.parent, this.value = i, this[pv] = n, this.oldValue && (this[Ev] = this[gv].getChildIndex(t))
    };
    nY[vh] = {kind: hc}, E(nY, iY);
    var eY = function (t, i) {
        this[Sf] = t, this[kh] = i
    };
    eY.prototype[el] = wv, E(eY, iY);
    var sY = function (t, i) {
        this[Sf] = t, this[kh] = i
    };
    sY[vh][el] = Tv, E(sY, iY);
    var rY = function (t, i, n, e) {
        this[Sf] = i, this[gv] = n, this[kh] = e, this.parent = t, this.child = i, this[Ev] = n, this.newIndex = e
    };
    rY.prototype.kind = kv, E(rY, iY);
    var hY = function () {
    };
    hY[vh] = {
        listener: null, beforeEvent: function (t) {
            return null != this.listener && this.listener.beforeEvent ? this.listener[Eh](t) : !0
        }, onEvent: function (t) {
            null != this.listener && this[Ov][wh] && this[Ov].onEvent(t)
        }
    };
    var aY = function () {
        w(this, aY, arguments), this.events = {}, this[Sv] = []
    }, oY = function (t, i) {
        this[Ov] = t, this[Av] = i, t instanceof Function ? this[wh] = t : (this.onEvent = t.onEvent, this[Eh] = t.beforeEvent), this[sc] = function (t) {
            return t && this[Ov] == t[Ov] && this[Av] == t[Av]
        }
    };
    oY[vh] = {
        equals: function (t) {
            return t && this[Ov] == t.listener && this[Av] == t[Av]
        }, destroy: function () {
            delete this.scope, delete this[Ov]
        }
    }, aY[vh] = {
        listeners: null, _nbc: function () {
            return this[Sv] && this[Sv][sh] > 0
        }, _7i: function (t, i) {
            return t instanceof aY ? t : new oY(t, i)
        }, _9w: function (t, i) {
            if (t instanceof aY) return this[Sv][dh](t);
            for (var n = this[Sv], e = 0, s = n[sh]; s > e; e++) {
                var r = n[e];
                if (r[Ov] == t && r[Av] == i) return e
            }
            return -1
        }, contains: function (t, i) {
            return this._9w(t, i) >= 0
        }, addListener: function (t, i) {
            return this[z_](t, i) ? !1 : void this[Sv][_h](this._7i(t, i))
        }, removeListener: function (t, i) {
            var n = this._9w(t, i);
            n >= 0 && this[Sv].splice(n, 1)
        }, on: function (t, i) {
            this[Mv](t, i)
        }, un: function (t, i, n) {
            this.removeListener(t, i, n)
        }, onEvent: function (t) {
            return this[Sv] ? void l(this[Sv], function (i) {
                i[wh] && (i.scope ? i[wh].call(i.scope, t) : i[wh](t))
            }, this) : !1
        }, beforeEvent: function (t) {
            return this[Sv] ? l(this[Sv], function (i) {
                return i[Eh] ? i[Av] ? i[Eh][rh](i[Av], t) : i[Eh](t) : !0
            }, this) : !0
        }, _dr: function (t) {
            return this[Eh](t) === !1 ? !1 : (this[wh](t), !0)
        }, clear: function () {
            this[Sv] = []
        }, destroy: function () {
            this.clear()
        }
    }, E(aY, hY);
    var fY = {
        onEvent: function () {
        }, beforeEvent: function () {
        }
    }, uY = function (t, i, n, e, s) {
        this[Sf] = t, this.type = Iv, this[el] = i, this.data = n, this[Lf] = e, this[Ev] = s
    };
    uY[vh] = {
        index: -1, oldIndex: -1, toString: function () {
            return _v + this[Sf] + dv + this[Vo] + lv + this.kind + Lv + this[Yo] + Pv + this[Lf] + Cv + this[Ev]
        }
    }, E(uY, tY), uY[jv] = Rv, uY.KIND_REMOVE = Rh, uY[Dv] = so, uY.KIND_INDEX_CHANGE = Nv;
    var cY = function () {
        this.id = ++gH, this._n88 = {}
    };
    cY[vh] = {
        _n88: null, id: null, get: function (t) {
            return this[Bv][t]
        }, set: function (t, i) {
            var n = this.get(t);
            if (n === i) return !1;
            var e = new iY(this, t, i, n);
            return e.propertyType = KY[i_], this._nbe(t, i, e, this[Bv])
        }, _nbe: function (t, i, e, s) {
            return this[Eh](e) === !1 ? !1 : (s || (s = this[Bv]), i === n ? delete s[t] : s[t] = i, this.onEvent(e), !0)
        }, remove: function (t) {
            this.set(t, null)
        }, valueOf: function () {
            return this.id
        }, toString: function () {
            return this.id
        }, _di: function (t, i) {
            if (i === n && (i = -1), this == t || t == this._jy) return !1;
            if (t && this == t._jy && !t._di(null)) return !1;
            var e = new nY(this, t, i);
            if (!this.beforeEvent(e)) return !1;
            var s, r, h = this._jy;
            return t && (s = new eY(t, this), !t[Eh](s)) ? !1 : null == h || (r = new sY(h, this), h[Eh](r)) ? (this._jy = t, null != t && _i(t, this, i), null != h && di(h, this), this[wh](e), null != t && t[wh](s), null != h && h[wh](r), this.onParentChanged(h, t), !0) : !1
        }, addChild: function (t, i) {
            var n = t._di(this, i);
            return n && this.onChildAdd(t, i), n
        }, removeChild: function (t) {
            if (!this._ff || !this._ff[z_](t)) return !1;
            var i = t._di(null);
            return this[va](t), i
        }, toChildren: function () {
            return this._ff ? this._ff[Rl]() : null
        }, clearChildren: function () {
            if (this._ff && this._ff[sh]) {
                var t = this[$v]();
                l(t, function (t) {
                    t._di(null)
                }, this), this[Fv](t)
            }
        }, forEachChild: function (t, i) {
            return this[eh]() ? this._ff[Hu](t, i) : !1
        }, onChildAdd: function () {
        }, onChildRemove: function () {
        }, onChildrenClear: function () {
        }, onParentChanged: function () {
        }, getChildIndex: function (t) {
            return this._ff && this._ff[sh] ? this._ff[dh](t) : -1
        }, setChildIndex: function (t, i) {
            if (!this._ff || !this._ff.length) return !1;
            var n = this._ff[dh](t);
            if (0 > n || n == i) return !1;
            var e = new rY(this, t, n, i);
            return this[Eh](e) === !1 ? !1 : (this._ff.remove(t) && this._ff.add(t, i), this[wh](e), !0)
        }, hasChildren: function () {
            return this._ff && this._ff[sh] > 0
        }, getChildAt: function (t) {
            return null == this._ff ? null : this._ff._jd[t]
        }, isDescendantOf: function (t) {
            if (!t.hasChildren()) return !1;
            for (var i = this[hc]; null != i;) {
                if (t == i) return !0;
                i = i[hc]
            }
            return !1
        }, firePropertyChangeEvent: function (t, i, n, e) {
            this.onEvent(new iY(this, t, i, n, e))
        }
    }, E(cY, hY), J(cY[vh], {
        childrenCount: {
            get: function () {
                return this._ff ? this._ff[sh] : 0
            }
        }, children: {
            get: function () {
                return this._ff || (this._ff = new DH), this._ff
            }
        }, parent: {
            get: function () {
                return this._jy
            }, set: function (t) {
                this._di(t, -1)
            }
        }, properties: {
            get: function () {
                return this[Bv]
            }, set: function (t) {
                this[Bv] != t && (this[Bv] = t)
            }
        }
    });
    var _Y = function () {
        this._jd = [], this._lk = {}, this._1f = new aY
    };
    _Y[vh] = {
        beforeEvent: function (t) {
            return null != this._1f && this._1f[Eh] ? this._1f.beforeEvent(t) : !0
        }, onEvent: function (t) {
            return this._1f instanceof Function ? void this._1f(t) : void(null != this._1f && this._1f[wh] && this._1f[wh](t))
        }, _1f: null, setIndex: function (t, i) {
            if (!this[z_](t)) throw new Error(Ya + t[Gv]() + Ll);
            var n = this[dh](t);
            if (n == i) return !1;
            var e = new uY(this, uY.KIND_INDEX_CHANGE, t, i, n);
            return this[Eh](e) === !1 ? !1 : (this._jd[Rh](t) >= 0 && this._jd.add(i, t), this[wh](e), !0)
        }, _f8: function (t, i) {
            if (0 == t[sh]) return !1;
            var e = !1, s = i >= 0, r = new uY(this, uY.KIND_ADD, t, i);
            if (this[Eh](r) === !1) return !1;
            var h = [];
            t = t._jd || t;
            for (var a = 0, o = t[sh]; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._kg(f, i, !0) && (h[_h](f), e = !0, s && i++)
            }
            return r.data = h, this[wh](r), e
        }, _kg: function (t, i, n) {
            if (this[zv](t) === !1) return !1;
            if (n) return T(this, _Y, Hv, arguments);
            var e = new uY(this, uY.KIND_ADD, t, i);
            return this[Eh](e) === !1 ? !1 : T(this, _Y, Hv, arguments) ? (this._lb(t, e), t) : !1
        }, _lb: function (t, i) {
            this.onEvent(i)
        }, _nbj: function (t) {
            if (0 == t[sh]) return !1;
            var i = new uY(this, uY[Yv], t);
            if (this.beforeEvent(i) === !1) return !1;
            var e = [], s = !1;
            t = t._jd || t;
            for (var r = 0, h = t.length; h > r; r++) {
                var a = t[r];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null), this._f9(o, a, !0) && (e[_h](a), s = !0)
                }
            }
            return i.data = e, this.onEvent(i), s
        }, _f9: function (t, i, n) {
            if (n) return T(this, _Y, Uv, arguments);
            var e = new uY(this, uY[Yv], i);
            return this.beforeEvent(e) === !1 ? !1 : T(this, _Y, Uv, arguments) ? (this[wh](e), !0) : !1
        }, clear: function () {
            if (this.isEmpty()) return !1;
            var t = new uY(this, uY[Dv], this[Rl]());
            return this[Eh](t) === !1 ? !1 : T(this, _Y, so) ? (this[wh](t), !0) : !1
        }, accept: function (t) {
            return this[Wv] && this[Wv](t) === !1 ? !1 : !0
        }
    }, E(_Y, DH), K(_Y[vh], qv, {
        get: function () {
            return this._1f
        }
    });
    var dY = function () {
        w(this, dY, arguments), this[Vv] = new aY, this[Xv] = new lY(this), this._selectionModel._1f = this.selectionChangeDispatcher, this.dataChangeDispatcher = new aY, this[Kv].addListener({
            beforeEvent: this.beforeDataPropertyChange,
            onEvent: this[Jv]
        }, this), this[Zv] = new aY, this[Qv] = new aY, this[tb] = new DH;
        var t = this;
        this[tb].setIndex = function (i, n) {
            if (!t.$roots[z_](i)) throw new Error(Ya + i.id + Ll);
            var e = t.$roots._jd.indexOf(i);
            if (e == n) return !1;
            t[tb]._jd[oh](e, 1), t.$roots._jd[oh](n, 0, i), t[ib] = !0;
            var s = new rY(t, i, e, n);
            return t._28(s), !0
        }
    };
    dY[vh] = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _lb: function (t, i) {
            t[Ov] = this[Kv], t[hc] || this[tb].add(t), this[wh](i)
        },
        _f9: function (t, i) {
            if (T(this, dY, Uv, arguments)) {
                if (i instanceof iq) i[nb](); else if (i instanceof nq) {
                    var n = i[eb]();
                    this[Rh](n)
                }
                var e = i[hc];
                return null == e ? this[tb].remove(i) : (e[sb](i), e.__6e = !0), i.hasChildren() && this[Rh](i[$v]()), i[Ov] = null, !0
            }
            return !1
        },
        _5s: function (t) {
            var i = t[Sf];
            this[z_](i) && (null == i[hc] ? this[tb].add(i) : null == t[gv] && this.$roots[Rh](i), this.parentChangeDispatcher[wh](t))
        },
        _28: function (t) {
            this.childIndexChangeDispatcher[wh](t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof nY ? this[Zv][Eh](t) : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof nY ? (this[ib] = !0, t[Sf]._n9zIndexFlag = !0, void this._5s(t)) : void(t instanceof rY && (this._n9zIndexFlag = !0, t[Sf][ib] = !0, this._28(t)))
        },
        toRoots: function () {
            return this.$roots[Rl]()
        },
        _fc: function (t) {
            var i, n = t._jy;
            i = n ? n._ff : this[tb];
            var e = i.indexOf(t);
            if (0 > e) throw new Error(rb + t + "' not exist in the box");
            return 0 == e ? n : i[hb](e - 1)
        },
        _fd: function (t) {
            var i, n = t._jy;
            i = n ? n._ff : this[tb];
            var e = i[dh](t);
            if (0 > e) throw new Error(rb + t + "' not exist in the box");
            return e == i.length - 1 ? n ? this._fd(n) : null : i[hb](e + 1)
        },
        forEachByDepthFirst: function (t, i, n) {
            return this[tb][sh] ? r(this[tb], t, i, n) : !1
        },
        forEachByDepthFirstReverse: function (t, i, n) {
            return this.$roots.length ? o(this.$roots, t, i, n) : !1
        },
        forEachByBreadthFirst: function (t, i) {
            return this[tb].length ? c(this[tb], t, i) : !1
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this[tb][sh] ? _(this[tb], t, i) : !1
        },
        clear: function () {
            return T(this, dY, so) ? (this[tb].clear(), this[Od][so](), !0) : !1
        }
    }, E(dY, _Y), J(dY[vh], {
        selectionModel: {
            get: function () {
                return this._selectionModel
            }
        }, roots: {
            get: function () {
                return this[tb]
            }
        }
    });
    var lY = function (t) {
        w(this, lY), this.box = t, this._n9oxChangeListener = {
            onEvent: function (t) {
                uY[Yv] == t[el] ? null != t.data ? this[Rh](t[Yo]) : null != t[ab] && this[Rh](t[ab]) : uY.KIND_CLEAR == t[el] && this[so]()
            }
        }, this.box[qv][Mv](this[ob], this)
    };
    lY.prototype = {
        box: null, isSelected: function (t) {
            return this.containsById(t.id || t)
        }, select: function (t) {
            return this.add(t)
        }, unselect: function (t) {
            return this.remove(t)
        }, reverseSelect: function (t) {
            return this[z_](t) ? this[Rh](t) : this.add(t)
        }, accept: function (t) {
            return this.box.contains(t)
        }
    }, E(lY, _Y);
    var vY = null, bY = null, yY = function () {
        if (!i[V_]) return function (t) {
            return t
        };
        var t = i.createElement(X_), e = t[pa], s = {};
        return function (t) {
            if (s[t]) return s[t];
            var i = li(t);
            return e[i] !== n || bY && e[i = li(bY + i)] !== n ? (s[t] = i, i) : t
        }
    }(), gY = {};
    !function () {
        if (!i[fb]) return !1;
        for (var e = i.head, s = "Webkit Moz O ms Khtml"[Ch](jh), r = 0; r < s[sh]; r++) if (e[pa][s[r] + ub] !== n) {
            bY = ga + s[r][xa]() + ga;
            break
        }
        var h = i[V_](pa);
        t[cb] || h.appendChild(i[_b]("")), h[Vo] = db, h.id = lb, e[ed](h), vY = h[vb];
        var a, o;
        for (var f in gY) {
            var u = gY[f];
            a = f, o = "";
            for (var c in u) o += yY(c) + Ea + u[c] + bb;
            xi(a, o)
        }
    }();
    var xY = function (t, i, n, e, s) {
        if (s) {
            var r = function (t) {
                r.handle[rh](r[Av], t)
            };
            return r[Av] = s, r.handle = n, t.addEventListener(i, r, e), r
        }
        return t[yb](i, n, e), n
    }, mY = function (t, i, n) {
        t[gb](i, n)
    };
    if (RH[xb] = 200, RH[mb] = 800, RH[pb] = !0, t.navigator && navigator[vl]) {
        var pY, EY = /mobile|tablet|ip(ad|hone|od)|android/i, wY = Z_ in t, TY = wY && EY.test(navigator[vl]);
        if (TY) pY = Eb; else {
            var kY = wb in t ? "mousewheel" : Tb;
            pY = kb + kY, wY && (pY += Ob)
        }
        pY = pY[Ch](/[\s,]+/);
        var OY = function (i) {
            return t.TouchEvent && i instanceof t[Sb]
        }, SY = function () {
            return RH[xb]
        }, AY = function () {
            return RH[mb]
        }, F = function (t) {
            t[$h] ? t[$h]() : t.returnValue = !1
        }, G = function (t) {
            t.stopPropagation && t[zh](), t[Hh] = !0
        }, z = function (t) {
            F(t), G(t)
        }, MY = function (t) {
            return t[Ab] || t[Fh] === !1
        }, IY = function (t) {
            RY[Mb] && RY[Mb][Ib](t)
        }, LY = function (t) {
            if (RY._n8urrentItem) {
                var i = RY._n8urrentItem;
                i[Lb](t), PY(null)
            }
        }, PY = function (t) {
            RY[Mb] != t && (RY[Mb] && (RY[Mb][Pb] = !1), RY._n8urrentItem = t)
        }, CY = function (i, n) {
            pY.forEach(function (t) {
                i[yb](t, n, !1)
            }), CH || RY._nbq || (RY[Wc] = !0, t[yb](Cb, IY, !0), t[yb](jb, LY, !0))
        }, jY = function (t, i) {
            pY[Hu](function (n) {
                t[gb](n, i, !1)
            })
        };
        wi[vh] = {
            _install: function () {
                this[Rb] || (this[Rb] = function (t) {
                    this[Qd](t)
                }.bind(this), CY(this._lz, this.__nbction))
            }, _uninstall: function () {
                this[Rb] && jY(this._lz, this[Rb])
            }, _nbction: function (t) {
                t = this[Db](t);
                var i = t[Vo];
                this[Nb](t, i) === !1 && this[Bb](t, $b + i)
            }, _n8ancelLongPressTimer: function () {
                this[Fb] && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
            }, __kmLongPress: function (t) {
                this[Gb] || (this[Gb] = function () {
                    this[zb] && (this[Hb] = !0, this[zb].button ? this[Bb](this[zb], Yb) : this[Bb](this._kmEvent, Ub))
                }[Sh](this)), this[Wb](), this[Fb] = setTimeout(this.__onLongPressFunction, AY(t))
            }, __fixTouchEvent: function (t) {
                for (var i, n, e = 0, s = 0, r = t[ia][sh], h = 0; r > h;) {
                    var a = t.touches[h++], o = a.clientX, f = a[ja];
                    if (2 == h) {
                        var u = n[0] - o, c = n[1] - f;
                        i = Math[Lo](u * u + c * c)
                    }
                    n = [o, f], e += o, s += f
                }
                t.cx = e / r, t.cy = s / r, t.center = {x: t.cx, y: t.cy, clientX: t.cx, clientY: t.cy}, t.distance = i
            }, __touchCountChange: function (t) {
                this._dragPoints.clear(), this._9i = Ei(t, this._lz)
            }, _handleTouchEvent: function (t, i) {
                switch (i) {
                    case"touchstart":
                        G(t), this.__fixTouchEvent(t), this[qb](t);
                        var n = t.touches.length;
                        this[zb] || (this._kmEvent = t, this._onstart(t), this[Hb] = !1, this[Vb](t)), 1 == n && (this[Xb] = null), n >= 2 && !this.__kmMulTouchEvent && (this[Xb] = {
                            cx: t.cx,
                            cy: t.cy,
                            distance: t[Hl]
                        });
                        break;
                    case"touchmove":
                        z(t), this[Kb](t);
                        var n = t[ia][sh];
                        if (n >= 2 && this[Xb]) {
                            var e = this[Xb].distance;
                            t[Jb] = t[Hl] / e, t[Zb] = this[Xb][Qb] ? t[Jb] / this[Xb][Qb] : t[Jb], this[Xb].prevScale = t._scale, this[ty] || (this[ty] = !0, this._onEvent(t, iy))
                        }
                        this[Pb] || (this[Pb] = !0, this._kmdrag(t)), this[ny](t), this.__pinching && this._onEvent(t, ey);
                        break;
                    case"touchend":
                        z(t);
                        var n = t.touches[sh];
                        n && (this[Kb](t), this[qb](t)), 1 >= n && (this[ty] && (this[ty] = !1, this[Bb](t, sy)), this[Xb] = null), 0 == n && (this.__dragging ? (this._enddrag(t), this[Pb] = !1) : t[Ba] - this[zb][Ba] < .8 * SY(t) && this[ry](this[zb]), this._onrelease(t));
                        break;
                    case"touchcancel":
                        this[Pb] = !1, this[ty] = !1, this[Xb] = null
                }
                return !1
            }, _handleEvent: function (t, i) {
                if (OY(t)) return this[hy](t, i);
                if (ay == i) G(t), PY(this), this._9i = Ei(t, this._lz), this[zb] || (this._kmEvent = t, this[oy](t)), this[Hb] = !1, this[Vb](t); else if (jb == i) PY(), this[fy](t); else if (uy == i) {
                    if (this[Hb]) return !0;
                    if (this[cy]()) return this[ry](t), !0
                } else if (_y == i) {
                    if (this[cy]()) return !0
                } else {
                    if (dy == i) return this._onEvent(t, ly), this[zb] && MY(t) && PY(this), !0;
                    if (i == kY) {
                        var e = t.wheelDelta;
                        if (e !== n ? e /= 120 : e = -t.detail, !e) return;
                        return t[vy] = e, this._onEvent(t, wb)
                    }
                }
                return !1
            }, _onEvent: function (t, i) {
                if (this._handler) {
                    var n = this[$a];
                    if (i = i || t[Vo], n instanceof Function) return n(t, i);
                    if (!(n[zv] instanceof Function && n.accept(i, t) === !1)) return n[by] instanceof Function && n[by](i, t, this[yy] || this._lz), n[i] instanceof Function ? n[i].call(n, t, this[yy] || this._lz) : void 0
                }
            }, _toQEvent: function (t) {
                return t
            }, _onWindowMouseUp: function (t) {
                this[Pb] && (z(t), this.__dragging = !1, t = this[Db](t), this[gy](t), this[fy](t), this[Bb](t, xy))
            }, _kmDragDistance: 4, _onWindowMouseMove: function (t) {
                if (this[zb]) {
                    if (z(t), !this[Pb]) {
                        var i = this[zb][my] - t.screenX, n = this._kmEvent[py] - t[py], e = i * i + n * n;
                        if (e < this[Ey]) return;
                        this.__dragging = !0, this[wy](t)
                    }
                    this._ondrag(this[Db](t))
                }
            }, _isDelayClick: function () {
                return RH.DELAY_CLICK
            }, __onclick: function (t) {
                if (!this.__n8ancelClick) {
                    var i = SY(t);
                    this[Ty] ? this.__dblclicked || (clearTimeout(this[Ty]), this[Ty] = null, this[Bb](t, ky), this[Oy] = !0) : (this[Oy] = !1, this.__n8lickTimer = setTimeout(function (t) {
                        this.__n8lickTimer = null, this[Oy] || this._onEvent(t, Q_)
                    }[Sh](this, t, i), i))
                }
            }, _onstart: function (t) {
                t.button ? this[Bb](t, Sy) : this[Bb](t, Ay)
            }, _onrelease: function (t) {
                this[zb] && (this._n8ancelLongPressTimer(), t[My] ? this[Bb](t, Iy) : this[Bb](t, Ly), this[zb] = null, this._9i = null)
            }, _nbppendDragInfo: function (t) {
                var i = this._9i;
                this._9i = Ei(t, this._lz), this[Py].add(i, this._9i, t)
            }, _kmdrag: function () {
                this[Hb] = !0, this[Wb](), this._kmEvent[My] ? this._onEvent(this[zb], Cy) : this._onEvent(this._kmEvent, jy)
            }, _ondrag: function (t) {
                this[Ry](t), this[zb][My] ? this._onEvent(t, Dy) : this[Bb](t, Ny)
            }, _enddrag: function (t) {
                if (t.timeStamp - this._9i[Ba] < 100) {
                    var i = this[Py].getCurrentSpeed();
                    i && (t.vx = i.x, t.vy = i.y)
                }
                this._kmEvent[My] ? this[Bb](t, By) : this._onEvent(t, $y), this[Py].clear()
            }, _ie: function () {
                this[Fy]()
            }, _l5Status: function () {
                RY[Mb] == this && delete RY[Mb], this[Wb](), delete this._9i, this._kmEvent && (delete this._kmEvent.getData, delete this[zb][j_], delete this[zb])
            }
        };
        var RY = A(function (t) {
            this._ko = t, wi[yh](this, [t.canvasPanel, null, t])
        }, {
            "super": wi, _myData: function (t) {
                return this._ko[Gy](t)
            }, _la: function (t) {
                return this._ko[zy](t)
            }, _toQEvent: function (i) {
                return (i instanceof MouseEvent || t[Sb] && i instanceof t.TouchEvent) && (i[Hy] = this._myData[Sh](this, i), i[j_] = this._la.bind(this, i)), i
            }, _onElementRemoved: function (t) {
                this[Yy](function (i) {
                    i.onElementRemoved instanceof Function && i[Uy](t, this._ko)
                })
            }, _onElementClear: function () {
                this[Yy](function (t) {
                    t[Wy] instanceof Function && t[Wy](this._ko)
                })
            }, _ie: function (t) {
                this._1ys && this[qy](this[Vy], t), this._n8ustomInteractionListeners && this._ieInteractions(this[Xy], t), this[Fy]()
            }, _ko: null, _1ys: null, _n8ustomInteractionListeners: null, _n0Interaction: function (t) {
                return this[Vy] == t ? !1 : (this[Vy] && this[Vy].length && this._ieInteractions(this._1ys), void(this[Vy] = t))
            }, _n2CustomInteractionListener: function (t) {
                this[Xy] || (this._n8ustomInteractionListeners = []), this[Xy][_h](t)
            }, _jrCustomInteractionListener: function (t) {
                this[Xy] && 0 != this[Xy].length && x(this[Xy], t)
            }, _onEvent: function (t, i, n) {
                this._ko[i] instanceof Function && this._ko[i][rh](this._ko, t, n), this[Vy] && this[Ky](t, i, this[Vy], n), this[Xy] && this[Ky](t, i, this._n8ustomInteractionListeners, n)
            }, _irListeners: function (t) {
                this[Vy] && l(this[Vy], t, this), this[Xy] && l(this[Xy], t, this)
            }, __onEvent: function (t, i, n, e) {
                if (!$(n)) return void this[Jy](t, i, n, e);
                for (var s = 0; s < n[sh]; s++) {
                    var r = n[s];
                    this[Jy](t, i, r, e)
                }
            }, __handleEvent: function (t, i, n, e) {
                if (!(n[zv] instanceof Function && n[zv](i, t, this._ko, e) === !1)) {
                    n[by] instanceof Function && n[by](i, t, this._ko, e);
                    var s = n[i];
                    s instanceof Function && s[rh](n, t, this._ko, e)
                }
            }, _ieInteraction: function (t) {
                t[Zy] instanceof Function && t[Zy].call(t, this._ko)
            }, _ieInteractions: function (t, i) {
                if (!$(t)) return void this._ieInteraction(t, i);
                for (var n = 0; n < t[sh]; n++) {
                    var e = t[n];
                    e && this[Qy](e, i)
                }
            }
        })
    }
    ki[vh] = {
        limitCount: 10, points: null, add: function (t, i, n) {
            0 == this.points[sh] && (this[tg] = t.x, this[ig] = t.y);
            var e = i[Ba] - t.timeStamp || 1;
            n.interval = e;
            var s = i.x - t.x, r = i.y - t.y;
            n.dx = s, n.dy = r, n[ng] = this[tg], n[eg] = this[ig], n[sg] = i.x - this._kmX, n[rg] = i.y - this[ig], this[No][oh](0, 0, {
                interval: e,
                dx: s,
                dy: r
            }), this.points[sh] > this[hg] && this[No].pop()
        }, getCurrentSpeed: function () {
            if (!this.points[sh]) return null;
            for (var t = 0, i = 0, n = 0, e = 0, s = this[No][sh]; s > e; e++) {
                var r = this[No][e], h = r.interval;
                if (h > 150) {
                    t = 0;
                    break
                }
                if (t += h, i += r.dx, n += r.dy, t > 300) break
            }
            return 0 == t || 0 == i && 0 == n ? null : {x: i / t, y: n / t}
        }, clear: function () {
            this[No] = []
        }
    };
    var DY, NY, BY, $Y;
    TH ? (DY = ag, NY = og, BY = fg, $Y = ug) : kH ? (DY = cg, NY = _g, BY = dg, $Y = lg) : (DY = vg, NY = vg, BY = Id, $Y = bg);
    var FY = yg, GY = Math.PI, zY = Math.pow, HY = Math.sin, YY = 1.70158, UY = {
        swing: function (t) {
            return -Math.cos(t * GY) / 2 + .5
        }, easeNone: function (t) {
            return t
        }, easeIn: function (t) {
            return t * t
        }, easeOut: function (t) {
            return (2 - t) * t
        }, easeBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
        }, easeInStrong: function (t) {
            return t * t * t * t
        }, easeOutStrong: function (t) {
            return 1 - --t * t * t * t
        }, easeBothStrong: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
        }, elasticIn: function (t) {
            var i = .3, n = i / 4;
            return 0 === t || 1 === t ? t : -(zY(2, 10 * (t -= 1)) * HY(2 * (t - n) * GY / i))
        }, elasticOut: function (t) {
            var i = .3, n = i / 4;
            return 0 === t || 1 === t ? t : zY(2, -10 * t) * HY(2 * (t - n) * GY / i) + 1
        }, elasticBoth: function (t) {
            var i = .45, n = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * zY(2, 10 * (t -= 1)) * HY(2 * (t - n) * GY / i) : zY(2, -10 * (t -= 1)) * HY(2 * (t - n) * GY / i) * .5 + 1
        }, backIn: function (t) {
            return 1 === t && (t -= .001), t * t * ((YY + 1) * t - YY)
        }, backOut: function (t) {
            return (t -= 1) * t * ((YY + 1) * t + YY) + 1
        }, backBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * (((YY *= 1.525) + 1) * t - YY) : .5 * ((t -= 2) * t * (((YY *= 1.525) + 1) * t + YY) + 2)
        }, bounceIn: function (t) {
            return 1 - UY[gg](1 - t)
        }, bounceOut: function (t) {
            var i, n = 7.5625;
            return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
        }, bounceBoth: function (t) {
            return .5 > t ? .5 * UY.bounceIn(2 * t) : .5 * UY.bounceOut(2 * t - 1) + .5
        }
    }, WY = function (t) {
        this._j9 = t
    };
    WY[vh] = {
        _j9: null, _88: function () {
            this[xg] instanceof Function && (this._n8allback(), this._n8allback = null)
        }, _km: function (t) {
            var i = Date.now();
            this._li(), this[xg] = t, this[mg] = requestAnimationFrame(function n() {
                var t = Date.now(), e = t - i;
                return !e || this._j9 && this._j9(e) !== !1 ? (i = t, void(this[mg] = requestAnimationFrame(n.bind(this)))) : void this._li()
            }[Sh](this))
        }, _6s: function () {
        }, _li: function () {
            return this[mg] ? (this._6s(), this._88(), t.cancelAnimationFrame(this[mg]), void delete this._requestID) : !1
        }, _ep: function () {
            return null != this._requestID
        }
    };
    var qY = function (t, i, n, e) {
        this[pg] = t, this[yy] = i || this, this._32 = e, n && n > 0 && (this._is = n)
    };
    qY.prototype = {
        _is: 1e3, _32: null, _er: 0, _li: function () {
            return this._er = 0, this[Eg] = 0, T(this, qY, wg)
        }, _n8x: 0, _j9: function (t) {
            if (this._er += t, this._er >= this._is) return this._onStep[rh](this._scope, 1, (1 - this._n8x) * this._is, t, this._is), !1;
            var i = this._er / this._is;
            return this._32 && (i = this._32(i)), this[pg][rh](this[yy], i, (i - this[Eg]) * this._is, t, this._is) === !1 ? !1 : void(this[Eg] = i)
        }
    }, E(qY, WY);
    var VY = function (t) {
        ni(t)
    }, XY = {
        version: Tg,
        extend: E,
        doSuperConstructor: w,
        doSuper: T,
        createFunction: function (t, i) {
            return i[Sh](t)
        },
        setClass: C,
        appendClass: j,
        removeClass: R,
        forEach: l,
        forEachReverse: b,
        isNumber: D,
        isString: N,
        isBoolean: B,
        isArray: $,
        eventPreventDefault: F,
        eventStopPropagation: G,
        stopEvent: z,
        callLater: L,
        nextFrame: P,
        forEachChild: e,
        forEachByDepthFirst: r,
        forEachByDepthFirstReverse: o,
        forEachByBreadthFirst: c,
        randomInt: H,
        randomBool: Y,
        randomColor: W,
        addEventListener: xY,
        getFirstElementChildByTagName: BH
    };
    XY.isTouchSupport = CH, XY[kg] = IH, XY.intersectsPoint = hi, XY[Og] = ai, XY[Sg] = HH, XY[Ag] = zH, XY[Mg] = $H, XY.Insets = YH, XY[Ig] = tY, XY.PropertyChangeEvent = iY, XY.ListEvent = uY, XY[Lg] = hY, XY[Pg] = aY, XY[Cg] = UH, XY[jg] = cY, XY[Rg] = lY, XY[Dg] = dY, XY[Ng] = fY, XY[Bg] = Ai, XY[$g] = Oi, XY[Fg] = Si, XY[Gg] = Ti, XY[zg] = FH, XY[Hg] = DH, XY[Yg] = wi, XY[Ug] = function (t) {
        alert(t)
    }, XY[Wg] = function (t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n[rh](e, s) : s
    }, XY.confirm = function (t, i, n) {
        var e = confirm(t);
        return e && i ? i.call(n) : e
    }, XY[qg] = xi;
    var KY = {
        IMAGE_ADJUST_FLIP: Vg,
        IMAGE_ADJUST_MIRROR: Xg,
        SELECTION_TYPE_BORDER_RECT: Kg,
        SELECTION_TYPE_BORDER: Jg,
        SELECTION_TYPE_SHADOW: Zg,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: Qg,
        EDGE_TYPE_ELBOW_HORIZONTAL: tx,
        EDGE_TYPE_ELBOW_VERTICAL: ix,
        EDGE_TYPE_ORTHOGONAL: nx,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: ex,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: sx,
        EDGE_TYPE_HORIZONTAL_VERTICAL: rx,
        EDGE_TYPE_VERTICAL_HORIZONTAL: hx,
        EDGE_TYPE_EXTEND_TOP: ax,
        EDGE_TYPE_EXTEND_LEFT: ox,
        EDGE_TYPE_EXTEND_BOTTOM: fx,
        EDGE_TYPE_EXTEND_RIGHT: ux,
        EDGE_TYPE_ZIGZAG: cx,
        EDGE_CORNER_NONE: od,
        EDGE_CORNER_ROUND: Fo,
        EDGE_CORNER_BEVEL: _x,
        GROUP_TYPE_RECT: rc,
        GROUP_TYPE_CIRCLE: dx,
        GROUP_TYPE_ELLIPSE: lx,
        SHAPE_CIRCLE: vx,
        SHAPE_RECT: rc,
        SHAPE_ROUNDRECT: bx,
        SHAPE_STAR: yx,
        SHAPE_TRIANGLE: gx,
        SHAPE_HEXAGON: xx,
        SHAPE_PENTAGON: mx,
        SHAPE_TRAPEZIUM: px,
        SHAPE_RHOMBUS: Ex,
        SHAPE_PARALLELOGRAM: wx,
        SHAPE_HEART: Tx,
        SHAPE_DIAMOND: kx,
        SHAPE_CROSS: Ox,
        SHAPE_ARROW_STANDARD: Sx,
        SHAPE_ARROW_1: Ax,
        SHAPE_ARROW_2: Mx,
        SHAPE_ARROW_3: Ix,
        SHAPE_ARROW_4: Lx,
        SHAPE_ARROW_5: Px,
        SHAPE_ARROW_6: Cx,
        SHAPE_ARROW_7: jx,
        SHAPE_ARROW_8: Rx,
        SHAPE_ARROW_OPEN: Dx
    };
    KY.LINE_CAP_TYPE_BUTT = Nx, KY[Bx] = Fo, KY[$x] = Fx, KY.LINE_JOIN_TYPE_BEVEL = _x, KY[Gx] = Fo, KY[zx] = Hx, KY.EDGE_BUNDLE_TYPE_CURVE = Yx, KY[S_] = Ux, RH[Wx] = KY[qx], RH[jd] = TY ? 8 : 3, RH[Vx] = 2, RH[Xx] = 7, RH[Kx] = X(3422561023), RH[Wx] = KY[qx], RH[Jx] = 10, RH[Zx] = 10, RH[k_] = 10, RH[Qx] = 200, RH[po] = 1.2;
    var JY = t.devicePixelRatio || 1;
    1 > JY && (JY = 1);
    var ZY;
    XY[tm] = Di;
    var QY = SH && !CH, tU = 9, iU = function (t, i, n, e) {
        var s = t - n, r = i - e;
        return s * s + r * r
    };
    rn.prototype = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, rn[jo] = function (t, i, n) {
        if (!n) return en(t, i);
        var e = iU(t.x, t.y, i.x, i.y), s = iU(t.x, t.y, n.x, n.y), r = iU(n.x, n.y, i.x, i.y);
        if (e + nU >= s + r) return en(t, i, 0, n);
        if (s + nU >= e + r) return en(t, n, 0, i);
        if (r + nU >= e + s) return en(i, n, 0, t);
        var h;
        Math.abs(n.y - i.y) < 1e-4 && (h = t, t = i, i = h), h = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * h),
            o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new rn(a, o, FH(a, o, t.x, t.y), t, i, n)
    };
    var nU = .01, eU = {
        _nbx: function (t, i, e, s, r) {
            if (N(t) && (t = UH.fromString(t)), !t) return {x: 0, y: 0};
            var h = 0, a = 0, o = i._iy;
            if (e = e || 0, t.x === n) {
                var f = t[Xl], u = t.verticalPosition, c = !0;
                switch (f) {
                    case VH:
                        c = !1;
                        break;
                    case qH:
                        h += o / 2
                }
                switch (u) {
                    case XH:
                        a -= e / 2;
                        break;
                    case JH:
                        a += e / 2
                }
            } else h = t.x, a = t.y, Math.abs(h) > 0 && Math.abs(h) < 1 && (h *= o);
            r && null != s && (a += s.y, h += Math.abs(s.x) < 1 ? s.x * o : s.x);
            var _ = dn[rh](i, h, a, c);
            return _ ? (r || null == s || _[im](s), _) : {x: 0, y: 0}
        }, _lg: function (t, i) {
            var n = i[Vo], e = i[No];
            switch (n) {
                case MU:
                    t[nm](e[0], e[1], e[2], e[3], i._r);
                    break;
                case kU:
                    t[df](e[0], e[1]);
                    break;
                case OU:
                    t[lf](e[0], e[1]);
                    break;
                case SU:
                    t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                    break;
                case AU:
                    t[em](e[0], e[1], e[2], e[3], e[4], e[5]);
                    break;
                case IU:
                    t.closePath()
            }
        }, _5m: function (t, i, n, e) {
            var s = i[Vo];
            if (s != kU && s != IU) {
                var r = n[qo], h = i[No];
                switch (n.type == kU && t.add(r.x, r.y), s) {
                    case MU:
                        bn(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]), t.add(h[0], h[1]), t.add(i[Qo], i._p1y), t.add(i[Ko], i._p2y), i[sm] && t.add(i[sm].x, i[sm].y), i.$boundaryPoint2 && t.add(i[rm].x, i.$boundaryPoint2.y);
                        break;
                    case OU:
                        t.add(h[0], h[1]);
                        break;
                    case SU:
                        Wi([r.x, r.y][fh](h), t);
                        break;
                    case AU:
                        Zi([r.x, r.y][fh](h), t);
                        break;
                    case IU:
                        e && t.add(e[No][0], e[No][1])
                }
            }
        }, _5o: function (t, i, n) {
            var e = t.type;
            if (e == kU) return 0;
            var s = i.lastPoint, r = t[No];
            switch (e == AU && 4 == r[sh] && (e = SU), e) {
                case OU:
                    return FH(r[0], r[1], s.x, s.y);
                case MU:
                    return t._iy;
                case SU:
                    var h = Xi([s.x, s.y].concat(r));
                    return t._lf = h, h(1);
                case AU:
                    var h = tn([s.x, s.y][fh](r));
                    return t._lf = h, h(1) || Qi([s.x, s.y][fh](r));
                case IU:
                    if (s && n) return t[No] = n[No], FH(n.points[0], n.points[1], s.x, s.y)
            }
            return 0
        }
    }, sU = /^data:image\/(\w+);base64,/i, rU = /^gif/i, hU = /^svg/i, aU = 10, oU = 11, fU = 12, uU = 20, cU = 30;
    RH.IMAGE_WIDTH = 50, RH[xf] = 30, RH[hm] = {
        draw: function (t, i) {
            pn(t, i[La], i[ua], i[am])
        }
    }, RH[om] = {
        draw: function (t, i) {
            pn(t, i.width, i.height, i[am], !0)
        }
    }, RH[fm] = 1e6;
    var _U = 1, dU = 2, lU = 3;
    Tn[vh] = {
        _j4: 0, _6e: !0, _kh: null, _je: null, _ln: null, _lm: null, _nbh: n, _92: n, _6k: function () {
            return this._j4 == _U
        }, getBounds: function (t) {
            return this._lm == cU ? this._ln.getBounds(t) : (this._6e && this._f4(), this)
        }, validate: function () {
            this._6e && this._f4()
        }, _f4: function () {
            if (this._6e = !1, this._lm == cU) return this._ln[Do](), void this[hu](this._ln[bu]);
            if (this._lm == uU) return void this._9b();
            if (this._j4 != _U) try {
                this._dn()
            } catch (t) {
                this._j4 = lU, XY.error(t)
            }
        }, _5g: function () {
            this._dr(), this[um][so](), delete this[um]
        }, _hs: function (t) {
            this._kh[cm] && this._kh[cm].removeChild(this._kh), this._j4 = lU, XY.error(_m + this._ln), this[dm] = null, this._je = null, this._kh = null, t !== !1 && this._5g()
        }, _dn: function () {
            var t = this._ln;
            if (this._j4 = _U, this[um] = new aY, this._lm == fU) {
                for (var n in FU) this[n] = FU[n];
                return void se(this._ln, this, this._d3, this._hs, this._ez)
            }
            this._kh || (this._kh = i[V_](J_), this._kh[lm] = vm, pH && (this._kh.style[bm] = ad, i[ym][ed](this._kh))), pH ? (this._kh[Uu] = function () {
                setTimeout(this._81.bind(this), 100)
            }[Sh](this), this._kh[gm] = this._hs.bind(this)) : (this._kh[Uu] = this._81[Sh](this), this._kh[gm] = this._81[Sh](this)), this._kh.src = t
        }, _hw: !0, _81: function () {
            var t = this._kh[La], i = this._kh[ua];
            if (!t || !i) return void this._hs();
            if (this._kh[cm] && this._kh[cm][sb](this._kh), this._j4 = dU, this[La] = t, this[ua] = i, pH && this._lm == oU) this[dm] = null, this._hw = !1; else if (this._lm == oU || mn(this._kh.src)) {
                var n = Di();
                n[La] = t, n[ua] = i, n.g[pd](this._kh, 0, 0, t, i), xn(n.g, n) && (this._je = n, this[dm] = Cn(n))
            }
            this._5g()
        }, _9b: function () {
            var t = this._ln;
            if (!(t[kf] instanceof Function)) return void this._hs(!1);
            if (t[xm] === !1 && t[La] && t[ua]) return this.width = t[La], void(this[ua] = t[ua]);
            var i = t[La] || RH[Qx], n = t[ua] || RH[Qx], e = this._dd();
            e[La] = i, e[ua] = n;
            var s = e.g;
            t.draw(s);
            var r = Gi(s, 0, 0, i, n);
            if (r) {
                var h = Rn(r.data, i, n);
                this.x = h._x, this.y = h._y, this.width = h[mm], this.height = h._height, e[La] = this[La], e[ua] = this[ua], s[Uf](r, -this.x, -this.y), this[dm] = h
            }
        }, _dd: function () {
            return this._je || (this._je = Di())
        }, draw: function (t, i, n, e, s, r) {
            if (this[La] && this[ua]) {
                i = i || 1, e = e || 1, s = s || 1;
                var h = this.width * e, a = this.height * s;
                if (r && n[xd] && (t[xd] = n[xd], t[pm] = (n[pm] || 0) * i, t.shadowOffsetX = (n[Em] || 0) * i, t[wm] = (n[wm] || 0) * i), this._j4 == _U) return void(RH.IMAGE_DEFAULT && RH.IMAGE_DEFAULT.draw(t, {
                    src: this._ln,
                    width: h,
                    height: a,
                    renderColor: n[am]
                }));
                if (this._j4 == lU) return void(RH[om] && RH.IMAGE_INVALID[kf](t, {
                    src: this._ln,
                    width: h,
                    height: a,
                    renderColor: n[am]
                }));
                if (this._lm == cU) return t[mo](e, s), void this._ln.draw(t, i, n);
                var o = this._fp(i, e, s);
                return o ? ((this.x || this.y) && t[xo](this.x * e, this.y * s), t.scale(e / o[mo], s / o[mo]), void o._lg(t, n.renderColor, n[Tm])) : void this._j0(t, i, e, s, this.width * e, this[ua] * s, n)
            }
        }, _j0: function (t, i, n, e, s, r, h) {
            if (this._lm == uU) return 1 != n && 1 != e && t[mo](n, e), void this._ln[kf](t, h);
            if (this._kh) {
                if (!OH) return void t[pd](this._kh, 0, 0, s, r);
                var n = i * s / this[La], e = i * r / this.height;
                t[mo](1 / n, 1 / e), t[pd](this._kh, 0, 0, s * n, r * e)
            }
        }, _ja: null, _fp: function (t, i, n) {
            if (this._lm == uU && this._ln.cacheable === !1) return null;
            if (this._lm == aU || (t *= Math.max(i, n)) <= 1) return this[km] || (this[km] = this._fs(this._je || this._kh, 1, this._hw)), this[km];
            var e = this._ja[Om] || 0;
            if (t = Math.ceil(t), e >= t) {
                for (var s = t, r = this._ja[s]; !r && ++s <= e;) r = this._ja[s];
                if (r) return r
            }
            t % 2 && t++;
            var h = this.width * t, a = this[ua] * t;
            if (h * a > RH[fm]) return null;
            var o = Di(h, a);
            return (this.x || this.y) && o.g[xo](-this.x * t, -this.y * t), this._j0(o.g, 1, t, t, h, a), this._fs(o, t)
        }, _fs: function (t, i) {
            var n = new jU(t, i);
            return this._ja[i] = n, this._ja[Om] = i, n
        }, hitTest: function (t, i, n) {
            if (this._lm == cU) return this._ln[W_][yh](this._ln, arguments);
            if (!(this[dm] || this._kh && this._kh[dm])) return !0;
            var e = this[dm] || this._kh[dm];
            return e._it(t, i, n)
        }, _dr: function () {
            this[um] && this[um][wh](new tY(this, Sm, Am, this._kh))
        }, _nbo: function (t, i) {
            this[um] && this[um][Mv](t, i)
        }, _6x: function (t, i) {
            this._dispatcher && this[um][Mm](t, i)
        }, _n82: function (t) {
            this._ja = {}, (t || this[La] * this[ua] > 1e5) && (this._kh = null, this._je = null)
        }
    }, E(Tn, HH);
    var vU = {};
    XY[pd] = Mn, XY[Im] = kn, XY[Lm] = Sn, XY.getAllImages = function () {
        var t = [];
        for (var i in vU) t.push(i);
        return t
    };
    var bU = function (t, i, n, e, s, r) {
        this[Vo] = t, this[Pm] = i, this[Cm] = n, this[jm] = e || 0, this.tx = s || 0, this.ty = r || 0
    };
    KY[Rm] = Ql, KY[Dm] = Jl, bU[vh] = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: UH[rv],
        isEmpty: function () {
            return null == this.colors || 0 == this[Pm][sh]
        },
        _6m: function () {
            var t = this[Pm][sh];
            if (1 == t) return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i.push(n * e);
            return this[Cm] || (this[Cm] = i), i
        },
        generatorGradient: function (t) {
            if (null == this[Pm] || 0 == this[Pm][sh]) return null;
            var i, n = Ni();
            if (this[Vo] == KY[Dm]) {
                var e = this.angle;
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var r = Math[Po](t[ua], t[La]), h = Math.sqrt(t[La] * t[La] + t[ua] * t[ua]), a = r - e;
                    s = Math.cos(a) * h
                } else {
                    var r = Math[Po](t.width, t[ua]), h = Math[Lo](t.width * t[La] + t[ua] * t.height),
                        a = r - (e - Math.PI / 2);
                    s = Math.cos(a) * h
                }
                var o = s / 2, f = o * Math.cos(e), u = o * Math.sin(e), c = t.x + t.width / 2 - f,
                    _ = t.y + t.height / 2 - u, d = t.x + t[La] / 2 + f, l = t.y + t.height / 2 + u;
                i = n[Nm](c, _, d, l)
            } else {
                if (!(this.type = KY[Rm])) return null;
                var v = ci(this.position, t[La], t.height);
                v.x += t.x, v.y += t.y, this.tx && (v.x += Math.abs(this.tx) < 1 ? t.width * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[ua] * this.ty : this.ty);
                var b = FH(v.x, v.y, t.x, t.y);
                b = Math.max(b, FH(v.x, v.y, t.x, t.y + t[ua])), b = Math.max(b, FH(v.x, v.y, t.x + t.width, t.y + t[ua])), b = Math.max(b, FH(v.x, v.y, t.x + t[La], t.y)), i = n[Bm](v.x, v.y, 0, v.x, v.y, b)
            }
            var y = this.colors, g = this[Cm];
            g && g[sh] == y[sh] || (g = this._6m());
            for (var x = 0, m = y.length; m > x; x++) i.addColorStop(g[x], y[x]);
            return i
        }
    };
    var yU = new bU(KY.GRADIENT_TYPE_LINEAR, [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        gU = new bU(KY.GRADIENT_TYPE_LINEAR, [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], 0),
        xU = (new bU(KY[Dm], [X(1154272460), X(1442840575)], [.1, .9], 0), new bU(KY[Rm], [X(2298478591), X(1156509422), X(1720223880), X(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        mU = [X(0), X(4294901760), X(4294967040), X(4278255360), X(4278250239), X(4278190992), X(4294901958), X(0)],
        pU = [0, .12, .28, .45, .6, .75, .8, 1], EU = new bU(KY[Dm], mU, pU),
        wU = new bU(KY.GRADIENT_TYPE_LINEAR, mU, pU, Math.PI / 2), TU = new bU(KY.GRADIENT_TYPE_RADIAL, mU, pU);
    bU[$m] = yU, bU.LINEAR_GRADIENT_HORIZONTAL = gU, bU[Fm] = xU, bU[Gm] = EU, bU[zm] = wU, bU.RAINBOW_RADIAL_GRADIENT = TU;
    var kU = tv, OU = Jl, SU = Hm, AU = Zl, MU = Ym, IU = Um;
    KY[Wm] = kU, KY[qm] = OU, KY.SEGMENT_QUAD_TO = SU, KY[Vm] = AU, KY.SEGMENT_ARC_TO = MU, KY.SEGMENT_CLOSE = IU;
    var LU = function (t, i) {
        this.id = ++gH, $(t) ? this[No] = t : (this[Vo] = t, this.points = i)
    };
    LU.prototype = {
        toJSON: function () {
            var t = {type: this.type, points: this[No]};
            return this.invalidTerminal && (t[jf] = !0), t
        }, parseJSON: function (t) {
            this.type = t.type, this.points = t[No], this[jf] = t[jf]
        }, points: null, type: OU, clone: function () {
            return new LU(this.type, this[No] ? y(this[No]) : null)
        }, move: function (t, i) {
            if (this.points) for (var n = 0, e = this[No][sh]; e > n; n++) {
                var s = this.points[n];
                XY[Xm](s) && (this[No][n] += n % 2 == 0 ? t : i)
            }
        }
    }, J(LU.prototype, {
        lastPoint: {
            get: function () {
                return this[Vo] == MU ? {x: this[Ko], y: this[Jo]} : {
                    x: this[No][this[No][sh] - 2],
                    y: this[No][this.points[sh] - 1]
                }
            }
        }, firstPoint: {
            get: function () {
                return {x: this[No][0], y: this.points[1]}
            }
        }
    }), XY[Km] = LU;
    var PU = 0;
    RH[Pf] = Yx;
    var CU = function (t) {
        this[bu] = new HH, this._f6 = t || []
    };
    CU[vh] = {
        toJSON: function () {
            var t = [];
            return this._f6[Hu](function (i) {
                t[_h](i.toJSON())
            }), t
        }, parseJSON: function (t) {
            var i = this._f6;
            t[Hu](function (t) {
                i[_h](new LU(t[Vo], t[No]))
            })
        }, clear: function () {
            this._f6[sh] = 0, this.bounds.clear(), this._iy = 0, this._6e = !0
        }, _da: !0, _6h: function (t, i) {
            this._da && 0 === this._f6[sh] && t != kU && this._f6[_h](new LU(kU, [0, 0])), this._f6[_h](new LU(t, i)), this._6e = !0
        }, add: function (t, i) {
            g(this._f6, t, i), this._6e = !0
        }, removePathSegment: function (t) {
            return t >= this._f6[sh] ? !1 : (this._f6.splice(t, 1), void(this._6e = !0))
        }, moveTo: function (t, i) {
            this._6h(kU, [t, i])
        }, lineTo: function (t, i) {
            this._6h(OU, [t, i])
        }, quadTo: function (t, i, n, e) {
            this._6h(SU, [t, i, n, e])
        }, curveTo: function (t, i, n, e, s, r) {
            this._6h(AU, [t, i, n, e, s, r])
        }, arcTo: function (t, i, n, e, s) {
            this._6h(MU, [t, i, n, e, s])
        }, closePath: function () {
            this._6h(IU)
        }, _87: function (t, i, n, e, s) {
            if (e[Jm]) {
                if (n == KY[qx]) {
                    if (!e.selectionShadowBlur) return;
                    return t[xd] = e.selectionColor, t[pm] = e.selectionShadowBlur * i, t[Em] = (e[Zm] || 0) * i, void(t.shadowOffsetY = (e[Qm] || 0) * i)
                }
                if (n == KY[tp]) {
                    if (!e.selectionBorder) return;
                    t[rf] = e.selectionColor;
                    var r = s[Uo] || 0;
                    s.outline && (r += 2 * s.outline), t.lineWidth = e.selectionBorder + r, this._lg(t), t[zo]()
                }
            }
        }, _6e: !0, _f6: null, _iy: 0, lineCap: Nx, lineJoin: Fo, draw: function (t, i, n, e, s) {
            t[gd] = n[gd] || this[gd], t.lineJoin = n.lineJoin || this.lineJoin, e && (s || (s = n), this._87(t, i, s.selectionType, s, n));
            var r = e && s[ip] == KY[qx];
            n[np] && (this._lg(t), t[Uo] = n[Uo] + 2 * (n[ep] || 0), t.strokeStyle = n[np], t.stroke(), r && (r = !1, t[xd] = sp)), t[Uo] = 0, this._lg(t), n.fillColor && (t[of] = n.renderColor || n.fillColor, t.fill()), n[rp] && (t[of] = n[hp] || n[rp], t.fill()), n[Uo] && (t[Uo] = n.lineWidth, n[Iu] && (n[ap] && (t[rf] = n[ap], t[zo](), r && (t.shadowColor = sp)), t.lineCap = n[op] || t[gd], t[fp] = n[up] || t.lineJoin, t[Iu] = n[Iu], t[ju] = n[ju]), t.strokeStyle = n[am] || n.strokeStyle, t[zo](), t[Iu] = [])
        }, _lg: function (t) {
            t.beginPath();
            for (var i, n, e = 0, s = this._f6[sh]; s > e; e++) i = this._f6[e], eU._lg(t, i, n), n = i
        }, invalidate: function () {
            this._6e = !0
        }, validate: function () {
            if (this._6e = !1, this[bu][so](), this._iy = 0, 0 != this._f6[sh]) for (var t, i, n = this._f6, e = 1, s = n[0], r = s, h = n.length; h > e; e++) t = n[e], t.type == kU ? r = t : (eU._5m(this[bu], t, s, r), i = eU._5o(t, s, r), t._iy = i, this._iy += i), s = t
        }, getBounds: function (t, i) {
            if (this._6e && this[Do](), i = i || new HH, t) {
                var n = t / 2;
                i.set(this.bounds.x - n, this.bounds.y - n, this[bu][La] + t, this.bounds[ua] + t)
            } else i.set(this[bu].x, this[bu].y, this[bu].width, this[bu].height);
            return i
        }, hitTest: function (t, i, n, e, s, r) {
            return _n[rh](this, t, i, n, e, s, r)
        }, toSegments: function () {
            return [][fh](this._f6)
        }, generator: function (t, i, n, e, s) {
            return cn[rh](this, t, i, n, e, s)
        }, getLocation: function (t, i) {
            return dn[rh](this, t, i || 0)
        }
    }, J(CU[vh], {
        segments: {
            get: function () {
                return this._f6
            }, set: function (t) {
                this[so](), this._f6 = t
            }
        }, length: {
            get: function () {
                return this._6e && this[Do](), this._iy
            }
        }, _empty: {
            get: function () {
                return 0 == this._f6.length
            }
        }
    }), jn.prototype = {
        _$y: function (t, i) {
            var n, e, s, r, h, a = t[sh], o = 0, f = 0;
            for (h = 0; a > h; h += 4) if (t[h + 3] > 0) {
                n = (h + 4) / i / 4 | 0;
                break
            }
            for (h = a - 4; h >= 0; h -= 4) if (t[h + 3] > 0) {
                e = (h + 4) / i / 4 | 0;
                break
            }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    s = o;
                    break
                }
                if (s >= 0) break
            }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    r = o;
                    break
                }
                if (r >= 0) break
            }
            this._x = s, this._y = n, this._width = r - s + 1, this._height = e - n + 1, this._jj = new HH(s, n, this._width, this[cp]), this[_p] = this[mm] * this[cp], this[dp] = i, this[lp] = t
        }, _e5: function (t, i) {
            return this[lp][4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        }, _it: function (t, i, n) {
            (!n || 1 >= n) && (n = 1), n = 0 | n, t = Math[Fo](t - this._x) - n, i = Math[Fo](i - this._y) - n, n += n;
            for (var e = t, s = i; i + n > s;) {
                for (var e = t; t + n > e;) {
                    if (this._e5(e, s)) return !0;
                    ++e
                }
                ++s
            }
            return !1
        }
    }, KY[$f] = vp, KY[bp] = yp, KY[Ff] = gp, KY.BLEND_MODE_LINEAR_BURN = xp, KY.BLEND_MODE_LIGHTEN = mp, KY[Hf] = pp, KY[Yf] = Ep, RH[Bf] = KY.BLEND_MODE_LINEAR_BURN;
    var jU = function (t, i, n) {
        this._je = t, this[mo] = i || 1, this._hw = n
    };
    jU[vh] = {
        scale: 1, _je: null, _ja: null, _hw: !0, _lg: function (t, i, n) {
            if (i && (i = Dn(i)), !i || this._hw === !1) return void t.drawImage(this._je, 0, 0);
            if (this._je instanceof Image) {
                var e = Di();
                e[La] = this._je.width, e.height = this._je[ua], e.g[pd](this._je, 0, 0, this._je[La], this._je[ua]), this._je = e
            }
            this._ja || (this._ja = {});
            var s = i + n, e = this._ja[s];
            if (e || (e = Bn(this._je, i, n), e || (this._hw = !1), this._ja[s] = e || this._je), e) if (pH) try {
                t[pd](e, 0, 0)
            } catch (r) {
            } else t[pd](e, 0, 0)
        }
    };
    var RU = function (t, i, n, e, s, r, h, a, o) {
        this._lx = zn(t, i, n, e, s, r, h, a, o)
    }, DU = {
        server: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t[df](0, 0), t[lf](40, 0), t[lf](40, 40), t[lf](0, 40), t.closePath(), t.clip(), t[xo](0, 0), t[xo](0, 0), t.scale(1, 1), t[xo](0, 0), t[rf] = sp, t.lineCap = Nx, t.lineJoin = Hx, t[wp] = 4, t.save(), t[go](), t[Ao](), t[go](), t[Ao](), t[go](), t[Ao](), t[go](), t[Ao](), t[go](), t[Ao](), t.save(), t[Ao](), t.save(), t.restore(), t.save(), t.restore(), t[go](), t.restore(), t.save(), t[Ao](), t[go](), t.restore(), t[go](), t.restore(), t[go](), t[Ao](), t[Ao](), t[go]();
                var i = t[Nm](6.75, 3.9033, 30.5914, 27.7447);
                i[Tp](.0493, kp), i.addColorStop(.0689, Op), i[Tp](.0939, Sp), i[Tp](.129, Ap), i[Tp](.2266, Mp), i[Tp](.2556, Ip), i[Tp](.2869, Lp), i.addColorStop(.3194, Pp), i[Tp](.3525, Cp), i.addColorStop(.3695, jp), i[Tp](.5025, Rp), i[Tp](.9212, Dp), i[Tp](1, Np), t[of] = i, t[uf](), t[df](25.677, 4.113), t[em](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[em](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t[em](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t[em](9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t.bezierCurveTo(8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[em](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t[em](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[em](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t[em](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[em](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t.bezierCurveTo(25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t.fill(), t.stroke(), t[Ao](), t[go](), t[go](), t[of] = Bp, t.beginPath(), t[df](19.763, 6.645), t[em](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[em](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t[em](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[em](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t.lineTo(21.398, 36.253), t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t[em](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t[em](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t[lf](4.675, 37.877), t[em](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t[em](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t[em](3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t.lineTo(2.924, 8.431), t[em](2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t[em](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t[em](4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[lf](19.763, 6.645), t[Kf](), t[Ho](), t[zo](), t[Ao](), t.restore(), t[go](), t[of] = $p, t[uf](), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t[Kf](), t.fill(), t.stroke(), t.restore(), t[go](), t.fillStyle = Bp, t.beginPath(), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t.closePath(), t[Ho](), t.stroke(), t.restore(), t[go](), t[of] = $p, t[uf](), t[df](19.377, 17.247), t[em](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t.lineTo(5.882, 18.108999999999998), t[em](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[lf](5.02, 11.144), t[em](5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t[em](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t[lf](19.377, 17.247), t[Kf](), t[Ho](), t.stroke(), t[Ao](), t.save(), t.save(), t[of] = Bp, t.beginPath(), t.moveTo(18.536, 13.176),t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),t[lf](6.479, 13.794),t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),t.lineTo(5.861, 11.84),t[em](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),t[lf](17.918, 11.221),t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),t[lf](18.535, 13.176),t.closePath(),t[Ho](),t[zo](),t[Ao](),t.save(),t.fillStyle = Bp,t.beginPath(),t[df](18.536, 16.551),t[em](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),t.lineTo(6.479, 17.168999999999997),t[em](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),t[lf](5.861, 15.215999999999998),t[em](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),t[lf](17.918, 14.596999999999998),t[em](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),t[lf](18.535, 16.551),t[Kf](),t[Ho](),t.stroke(),t[Ao](),t[Ao](),t[Ao]()
            }
        }, exchanger2: {
            draw: function (t) {
                t[go](), t[xo](0, 0), t[uf](), t[df](0, 0), t[lf](40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t[Kf](), t[Fp](), t[xo](0, 0), t[xo](0, 0), t[mo](1, 1), t.translate(0, 0), t[rf] = sp, t[gd] = Nx, t.lineJoin = Hx, t.miterLimit = 4, t[go](), t[go](), t[Ao](), t[go](), t[Ao](), t[go](), t.restore(), t[go](), t.restore(), t[go](), t[Ao](), t[go](), t[Ao](), t.save(), t[Ao](), t[go](), t[Ao](), t[go](), t.restore(), t[go](), t[Ao](), t[Ao](), t[go]();
                var i = t[Nm](.4102, 24.3613, 39.5898, 24.3613);
                i[Tp](0, kp), i[Tp](.0788, Mp), i.addColorStop(.2046, Gp), i.addColorStop(.3649, zp), i[Tp](.5432, Hp), i[Tp](.6798, Yp), i[Tp](.7462, Up), i.addColorStop(.8508, Wp), i[Tp](.98, Ip), i[Tp](1, qp), t[of] = i, t.beginPath(), t.moveTo(.41, 16.649), t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t.bezierCurveTo(1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t.bezierCurveTo(10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t[em](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[em](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t[em](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t[Kf](), t[Ho](), t[zo](), t[Ao](), t.save(), t[go](), t.fillStyle = Bp, t[uf](), t[df](16.4, 25.185), t[em](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t[em](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t[em](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t[em](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[em](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t[em](23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t[em](13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t[Kf](), t[Ho](), t.stroke(), t[Ao](), t[Ao](), t[go](), t[go](), t.save(), t.save(), t[go](), t[of] = Vp, t[uf](), t[df](5.21, 21.754), t[lf](8.188, 17.922), t.lineTo(9.53, 18.75), t.lineTo(15.956, 16.004), t.lineTo(18.547, 17.523), t[lf](12.074, 20.334), t[lf](13.464, 21.204), t.lineTo(5.21, 21.754), t[Kf](), t[Ho](), t[zo](), t[Ao](), t[Ao](), t[Ao](), t[go](), t[go](), t[go](), t[of] = Vp, t[uf](), t[df](17.88, 14.61), t.lineTo(9.85, 13.522), t.lineTo(11.703, 12.757), t[lf](7.436, 10.285), t.lineTo(10.783, 8.942), t.lineTo(15.091, 11.357), t.lineTo(16.88, 10.614), t[lf](17.88, 14.61), t[Kf](), t.fill(), t[zo](), t[Ao](), t.restore(), t[go](), t[go](), t[of] = Vp, t.beginPath(), t.moveTo(17.88, 14.61), t[lf](9.85, 13.522), t[lf](11.703, 12.757), t.lineTo(7.436, 10.285), t[lf](10.783, 8.942), t[lf](15.091, 11.357), t[lf](16.88, 10.614), t[lf](17.88, 14.61), t[Kf](), t.fill(), t[zo](), t.restore(), t[Ao](), t.restore(),t.save(),t[go](),t[go](),t[of] = Vp,t[uf](),t[df](23.556, 15.339),t.lineTo(20.93, 13.879),t[lf](26.953, 11.304),t[lf](25.559, 10.567),t[lf](33.251, 9.909),t.lineTo(31.087, 13.467),t[lf](29.619, 12.703),t[lf](23.556, 15.339),t[Kf](),t[Ho](),t[zo](),t[Ao](),t[Ao](),t[Ao](),t[go](),t.save(),t[go](),t[of] = Vp,t.beginPath(),t[df](30.028, 23.383),t.lineTo(24.821, 20.366),t[lf](22.915, 21.227),t[lf](21.669, 16.762),t[lf](30.189, 17.942),t[lf](28.33, 18.782),t[lf](33.579, 21.725),t.lineTo(30.028, 23.383),t[Kf](),t[Ho](),t[zo](),t.restore(),t.restore(),t[go](),t[go](),t.fillStyle = Vp,t[uf](),t[df](30.028, 23.383),t[lf](24.821, 20.366),t[lf](22.915, 21.227),t[lf](21.669, 16.762),t[lf](30.189, 17.942),t[lf](28.33, 18.782),t.lineTo(33.579, 21.725),t[lf](30.028, 23.383),t[Kf](),t[Ho](),t[zo](),t[Ao](),t[Ao](),t[Ao](),t.restore(),t[Ao](),t[Ao]()
            }
        }, exchanger: {
            draw: function (t) {
                t[go](), t[xo](0, 0), t[uf](), t.moveTo(0, 0), t[lf](40, 0), t[lf](40, 40), t.lineTo(0, 40), t.closePath(), t[Fp](), t[xo](0, 0), t[xo](0, 0), t[mo](1, 1), t[xo](0, 0), t[rf] = sp, t[gd] = Nx, t.lineJoin = Hx, t[wp] = 4, t[go](), t.save(), t.restore(), t[go](), t.restore(), t[go](), t.restore(), t.save(), t[Ao](), t[go](), t.restore(), t[go](), t[Ao](), t[go](), t[Ao](), t[Ao](), t[go]();
                var i = t[Nm](.2095, 20.7588, 39.4941, 20.7588);
                i.addColorStop(0, Xp), i.addColorStop(.0788, Kp), i[Tp](.352, Jp), i.addColorStop(.6967, Zp), i[Tp](.8916, Qp), i[Tp](.9557, tE), i[Tp](1, iE), t[of] = i, t.beginPath(), t[df](39.449, 12.417), t.lineTo(39.384, 9.424), t[em](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[em](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t.bezierCurveTo(8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[em](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t[lf](37.711, 30.316999999999997), t[lf](39.281, 16.498999999999995), t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t[Kf](), t[Ho](), t.stroke(), t[Ao](), t[go](), t[go](), t[go](), t[go](), t.restore(), t[go](), t[Ao](), t[go](), t[Ao](), t.save(), t[Ao](), t[go](), t[Ao](), t.save(), t.restore(), t.save(), t.restore(), t[go](), t.restore(), t[go](), t[Ao](), t[Ao](), t.save();
                var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                i.addColorStop(0, nE), i.addColorStop(.1455, eE), i[Tp](.2975, sE), i.addColorStop(.4527, rE), i[Tp](.6099, hE), i[Tp](.7687, aE), i[Tp](.9268, oE), i[Tp](.9754, fE), i.addColorStop(1, uE), t[of] = i, t[uf](), t[df](33.591, 24.763), t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t[em](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[em](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t[em](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t[em](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t.bezierCurveTo(37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t[em](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t[em](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[em](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t[Kf](), t[Ho](), t[zo](), t.restore(), t[Ao](), t.restore(), t[go](), t[go](), t[go](), t[of] = Vp, t.beginPath(), t[df](10.427, 19.292), t[lf](5.735, 16.452), t[lf](12.58, 13.8), t.lineTo(12.045, 15.07), t[lf](20.482, 15.072), t[lf](19.667, 17.887), t[lf](11.029, 17.851), t[lf](10.427, 19.292), t.closePath(), t[Ho](), t.stroke(), t[Ao](), t[Ao](), t.save(), t.save(), t[of] = Vp, t[uf](), t[df](13.041, 13.042), t.lineTo(8.641, 10.73), t.lineTo(14.82, 8.474), t.lineTo(14.373, 9.537), t[lf](22.102, 9.479), t[lf](21.425, 11.816), t[lf](13.54, 11.85), t[lf](13.041, 13.042), t[Kf](), t[Ho](), t.stroke(), t[Ao](), t.restore(), t[go](), t[go](), t.fillStyle = Vp, t[uf](), t[df](29.787, 16.049), t[lf](29.979, 14.704), t[lf](21.51, 14.706), t[lf](22.214, 12.147), t[lf](30.486, 12.116), t[lf](30.653, 10.926), t[lf](36.141, 13.4), t.lineTo(29.787, 16.049), t[Kf](), t.fill(), t.stroke(), t[Ao](), t[Ao](), t[go](), t[go](), t.fillStyle = Vp, t[uf](), t.moveTo(28.775, 23.14), t[lf](29.011, 21.49), t[lf](19.668, 21.405), t[lf](20.523, 18.295), t[lf](29.613, 18.338), t[lf](29.815, 16.898), t.lineTo(35.832, 19.964), t.lineTo(28.775, 23.14), t[Kf](), t[Ho](), t[zo](), t.restore(), t[Ao](), t.restore(),t.restore()
            }
        }, cloud: {
            draw: function (t) {
                t[go](), t.beginPath(), t[df](0, 0), t[lf](90.75, 0), t.lineTo(90.75, 62.125), t.lineTo(0, 62.125), t[Kf](), t[Fp](), t[rf] = sp, t[gd] = Nx, t[fp] = Hx, t[wp] = 4, t[go]();
                var i = t[Nm](44.0054, 6.4116, 44.0054, 51.3674);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i[Tp](.9726, cE), t[of] = i, t.beginPath(), t.moveTo(57.07, 20.354), t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[em](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t[em](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t[em](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[em](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t[em](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t[em](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t[em](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[em](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[em](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[Kf](), t.fill(), t.stroke(), t[Ao](), t[Ao]()
            }
        }, node: {
            width: 60, height: 100, draw: function (t) {
                t[go](), t[xo](0, 0), t[uf](), t[df](0, 0), t[lf](40, 0), t[lf](40, 40), t[lf](0, 40), t[Kf](), t[Fp](), t[xo](0, 0), t[xo](0, 0), t[mo](1, 1), t[xo](0, 0), t.strokeStyle = sp, t[gd] = Nx, t.lineJoin = Hx, t[wp] = 4, t[go](), t.fillStyle = _E, t.beginPath(), t[df](13.948, 31.075), t[lf](25.914, 31.075), t[dE](25.914, 31.075, 25.914, 31.075), t.lineTo(25.914, 34.862), t[dE](25.914, 34.862, 25.914, 34.862), t[lf](13.948, 34.862), t[dE](13.948, 34.862, 13.948, 34.862), t[lf](13.948, 31.075), t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075), t.closePath(), t[Ho](), t.stroke(), t[Ao](), t.save(), t[of] = lE, t.beginPath(), t.moveTo(29.679, 35.972), t[em](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t.lineTo(11.456, 37.244), t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t.lineTo(10.183, 36.136), t[em](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t[lf](28.407, 34.863), t[em](29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t[lf](29.678, 35.972), t[Kf](), t[Ho](), t[zo](), t.restore(), t.save(), t[of] = lE, t.beginPath(), t[df](.196, 29.346), t[em](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t.lineTo(37.936, 31.075), t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t.lineTo(39.665, 27.174), t.lineTo(.196, 27.174), t[lf](.196, 29.346), t[Kf](), t[Ho](), t.stroke(), t[Ao](), t[go](), t.fillStyle = vE, t[uf](), t[df](37.937, 3.884), t[lf](1.926, 3.884), t[em](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t[lf](.19699999999999984, 27.12), t.lineTo(39.666000000000004, 27.12), t[lf](39.666000000000004, 5.615), t[em](39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[Kf](), t[Ho](), t[zo](), t[Ao](), t.save(), t[go](), t[Ao](), t[go](), t[Ao](), t[Ao](), t[go]();
                var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
                i[Tp](0, bE), i.addColorStop(1, yE), t[of] = i, t.beginPath(), t.moveTo(35.788, 6.39), t[lf](4.074, 6.39), t[em](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t.lineTo(2.702, 24.616), t[lf](37.159, 24.616), t[lf](37.159, 7.763), t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[Kf](), t[Ho](), t[zo](), t[Ao](), t.restore()
            }
        }, group: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t[df](0, 0), t.lineTo(47.75, 0), t.lineTo(47.75, 40), t[lf](0, 40), t[Kf](), t[Fp](), t[xo](0, 0), t[xo](0, 0), t.scale(1, 1), t[xo](0, 0), t[rf] = sp, t.lineCap = Nx, t[fp] = Hx, t[wp] = 4, t[go](), t[go](), t.fillStyle = _E, t.beginPath(), t.moveTo(10.447, 26.005), t[lf](18.847, 26.005), t[dE](18.847, 26.005, 18.847, 26.005), t[lf](18.847, 28.663), t.quadraticCurveTo(18.847, 28.663, 18.847, 28.663), t[lf](10.447, 28.663), t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663), t[lf](10.447, 26.005), t[dE](10.447, 26.005, 10.447, 26.005), t[Kf](), t[Ho](), t[zo](), t[Ao](), t[go](), t.fillStyle = lE, t.beginPath(), t[df](21.491, 29.443), t[em](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[lf](8.698, 30.338), t[em](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t[lf](7.8020000000000005, 29.557000000000002), t.bezierCurveTo(7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t[lf](20.597, 28.662000000000003), t[em](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[lf](21.491, 29.443), t[Kf](), t[Ho](), t.stroke(), t[Ao](), t[go](), t[of] = lE, t.beginPath(), t.moveTo(.789, 24.79), t[em](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t.lineTo(27.289, 26.005), t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[lf](28.504, 23.267), t.lineTo(.789, 23.267), t[lf](.789, 24.79), t[Kf](), t[Ho](), t[zo](), t[Ao](), t[go](), t.fillStyle = vE, t[uf](), t[df](27.289, 6.912), t[lf](2.006, 6.912), t[em](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t[lf](.7889999999999997, 23.227), t[lf](28.503999999999998, 23.227), t[lf](28.503999999999998, 8.126), t.bezierCurveTo(28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t.closePath(), t[Ho](), t.stroke(), t[Ao](), t[go](), t.save(), t[Ao](), t[go](), t[Ao](), t[Ao](), t[go]();
                var i = t[Nm](5.54, 6.2451, 23.7529, 24.458);
                i[Tp](0, bE), i[Tp](1, yE), t.fillStyle = i, t[uf](), t[df](25.78, 8.671), t.lineTo(3.514, 8.671), t[em](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t[lf](2.549, 21.466), t.lineTo(26.743, 21.466), t[lf](26.743, 9.636), t[em](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t.closePath(), t[Ho](), t[zo](), t.restore(), t[Ao](), t[go](), t[go](), t[of] = _E, t[uf](), t.moveTo(27.053, 33.602), t[lf](36.22, 33.602), t[dE](36.22, 33.602, 36.22, 33.602), t.lineTo(36.22, 36.501), t.quadraticCurveTo(36.22, 36.501, 36.22, 36.501), t[lf](27.053, 36.501), t[dE](27.053, 36.501, 27.053, 36.501), t[lf](27.053, 33.602), t[dE](27.053, 33.602, 27.053, 33.602), t[Kf](), t[Ho](), t.stroke(), t.restore(), t[go](), t[of] = lE, t[uf](), t[df](39.104, 37.352), t[em](39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[lf](25.143, 38.327), t[em](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t.lineTo(24.166, 37.477999999999994), t[em](24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t[lf](38.131, 36.501), t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t[lf](39.105, 37.352), t[Kf](), t.fill(), t.stroke(), t[Ao](), t[go](), t[of] = lE, t[uf](), t.moveTo(16.514, 32.275), t.bezierCurveTo(16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[lf](45.433, 33.601), t[em](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[lf](46.758, 30.607999999999997), t.lineTo(16.514, 30.607999999999997), t[lf](16.514, 32.275), t.closePath(), t[Ho](), t.stroke(), t[Ao](), t.save(), t[of] = vE, t[uf](), t[df](45.433, 12.763), t[lf](17.839, 12.763), t.bezierCurveTo(17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[lf](16.514, 30.57), t.lineTo(46.757999999999996, 30.57), t[lf](46.757999999999996, 14.088), t[em](46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t.closePath(), t[Ho](), t.stroke(), t.restore(), t[go](), t.save(), t.restore(), t[go](), t.restore(), t[Ao](), t.save(), i = t[Nm](21.6973, 12.0352, 41.5743, 31.9122), i.addColorStop(0, bE), i[Tp](1, yE), t[of] = i, t[uf](), t[df](43.785, 14.683), t.lineTo(19.486, 14.683), t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t[lf](44.837, 28.649), t.lineTo(44.837, 15.734), t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[Kf](), t[Ho](), t[zo](), t.restore(), t[Ao](),t[go](),t[_f] = .5,t[uf](),t[df](23.709, 36.33),t.lineTo(4.232, 36.33),t[lf](4.232, 27.199),t[lf](5.304, 27.199),t.lineTo(5.304, 35.259),t.lineTo(23.709, 35.259),t[lf](23.709, 36.33),t.closePath(),t[Ho](),t[zo](),t[Ao](),t[Ao]()
            }
        }, subnetwork: {
            draw: function (t) {
                t[go](), t[xo](0, 0), t.beginPath(), t[df](0, 0), t[lf](60.75, 0), t[lf](60.75, 42.125), t[lf](0, 42.125), t[Kf](), t[Fp](), t[xo](0, .26859504132231393), t.scale(.6694214876033058, .6694214876033058), t.translate(0, 0), t.strokeStyle = sp, t[gd] = Nx, t[fp] = Hx, t[wp] = 4, t[go](), t[go](), t[Ao](), t[go](), t[Ao](), t[Ao](), t[go]();
                var i = t[Nm](43.6724, -2.7627, 43.6724, 59.3806);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, cE), t[of] = i, t[uf](), t.moveTo(61.732, 16.509), t[em](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t[em](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t[em](9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[em](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t[em](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t[em](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t[em](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t[em](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t[em](85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t.closePath(), t[Ho](), t.stroke(), t.restore(), t[go](), t[go](), t[of] = _E, t.beginPath(), t[df](34.966, 44.287), t[lf](45.112, 44.287), t[dE](45.112, 44.287, 45.112, 44.287), t[lf](45.112, 47.497), t[dE](45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t.quadraticCurveTo(34.966, 47.497, 34.966, 47.497), t[lf](34.966, 44.287), t[dE](34.966, 44.287, 34.966, 44.287), t[Kf](), t[Ho](), t[zo](), t[Ao](), t[go](), t[of] = gE, t[uf](), t[df](48.306, 48.439), t[em](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t[lf](32.854, 49.52), t[em](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t[lf](31.771, 48.578), t[em](31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t[lf](47.226, 47.497), t[em](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t.lineTo(48.306, 48.439), t[Kf](), t[Ho](), t[zo](), t[Ao](), t.save(), t[of] = xE, t[uf](), t[df](23.302, 42.82), t[em](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t[lf](55.308, 44.287), t[em](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t.lineTo(56.775, 40.98), t.lineTo(23.302, 40.98), t[lf](23.302, 42.82), t[Kf](), t.fill(), t[zo](), t[Ao](), t[go](), t[of] = vE, t[uf](), t[df](55.307, 21.229), t.lineTo(24.771, 21.229), t[em](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t[lf](23.301000000000002, 40.933), t.lineTo(56.774, 40.933), t.lineTo(56.774, 22.695), t[em](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[Kf](), t[Ho](), t[zo](), t[Ao](), t[go](), t[go](), t[Ao](), t.save(), t[Ao](), t.restore(), t[go](), i = t[Nm](29.04, 20.4219, 51.0363, 42.4181), i.addColorStop(0, bE), i[Tp](1, yE), t[of] = i, t[uf](), t[df](53.485, 23.353), t[lf](26.592, 23.353), t[em](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t[lf](25.427, 38.807), t[lf](54.647, 38.807), t[lf](54.647, 24.517000000000003), t[em](54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t.closePath(),t[Ho](),t[zo](),t[Ao](),t[Ao](),t[Ao]()
            }
        }
    };
    for (var NU in DU) kn(mE + NU, DU[NU]);
    var BU = function () {
        this[Mu] = !1;
        var t = this._fg;
        t[so]();
        var i = this.$border || 0, n = this._8c.x + i / 2, e = this._8c.y + i / 2, s = this._8c[La] - i,
            r = this._8c.height - i, h = Kn[rh](this, {x: n, y: e});
        te(t, h.x, h.y, !0), h = Kn.call(this, {x: n + s, y: e}), te(t, h.x, h.y), h = Kn[rh](this, {
            x: n + s,
            y: e + r
        }), te(t, h.x, h.y), h = Kn[rh](this, {
            x: n,
            y: e + r
        }), te(t, h.x, h.y), this[yu] && (h = Kn.call(this, {
            x: this._pointerX,
            y: this[xu]
        }), te(t, h.x, h.y)), i && t.grow(i / 2)
    }, $U = 20, FU = {
        _hc: !1, _iw: null, _d4: 0, _ki: -1, _kk: null, _ez: function (t) {
            this._iw || (this._iw = [], this._j4 = dU), this._iw.push(t), this._dq(), this._km()
        }, _km: function () {
            if (!this._kk) {
                var t = this;
                this._kk = setTimeout(function i() {
                    return t._dq() !== !1 ? void(t._kk = setTimeout(i, t._ha())) : void delete t._kk
                }, this._ha())
            }
        }, _ha: function () {
            return Math.max($U, this._iw[this._ki][pE])
        }, _dq: function () {
            return this._h8(this._ki + 1)
        }, _h8: function (t) {
            if (this._hc) t %= this._d4; else if (t >= this._iw[sh]) return !1;
            if (this._ki == t) return !1;
            this._ki = t;
            var i = this._iw[this._ki], n = i[EE];
            return n || (i._n8ache = n = Di(this.width, this.height), n.g.putImageData(i[Yo], 0, 0), n[dm] = i[dm]), this._kh = n, this.$invalidateSize = !0, this._dr()
        }, _d3: function () {
            return this._iw ? (this._hc = !0, this._d4 = this._iw[sh], 1 == this._d4 ? this._dr() : void this._km()) : void this._hs()
        }, _li: function () {
            this._kk && (clearTimeout(this._kk), delete this._kk)
        }, _dr: function () {
            var t = this[um][Sv];
            if (!t || !t.length) return !1;
            for (var i = new tY(this, Sm, Am, this._kh), n = 0, e = t.length; e > n; n++) {
                var s = t[n];
                s[Av]._jy && s[Av]._jy._ieed ? (t.splice(n, 1), n--, e--) : s.onEvent.call(s[Av], i)
            }
            return t[sh] > 0
        }, _nbo: function (t, i) {
            this[um][Mv](t, i), this._hc && !this._kk && this._km()
        }, _6x: function (t, i) {
            this._dispatcher[Mm](t, i), this[um]._nbc() || this._li()
        }, _ie: function () {
            this._li(), this[um][so]()
        }, _fp: function () {
            var t = this._kh._n9ufferedImage;
            return t || (this._kh[wE] = t = new jU(this._kh, 1)), t
        }
    }, GU = function (t) {
        return t[TE](function (t, i) {
            return 2 * t + i
        }, 0)
    }, zU = function (t) {
        for (var i = [], n = 7; n >= 0; n--) i[_h](!!(t & 1 << n));
        return i
    }, HU = function (t) {
        this.data = t, this.len = this[Yo].length, this.pos = 0, this[kE] = function () {
            if (this.pos >= this[Yo][sh]) throw new Error("Attempted to read past end of stream.");
            return 255 & t.charCodeAt(this.pos++)
        }, this.readBytes = function (t) {
            for (var i = [], n = 0; t > n; n++) i.push(this[kE]());
            return i
        }, this[OE] = function (t) {
            for (var i = "", n = 0; t > n; n++) i += String[Xu](this[kE]());
            return i
        }, this[SE] = function () {
            var t = this[AE](2);
            return (t[1] << 8) + t[0]
        }
    }, YU = function (t, i, n) {
        for (var e, s, r = 0, h = function (t) {
            for (var n = 0, e = 0; t > e; e++) i.charCodeAt(r >> 3) & 1 << (7 & r) && (n |= 1 << e), r++;
            return n
        }, a = [], o = 1 << t, f = o + 1, u = t + 1, c = [], _ = function () {
            c = [], u = t + 1;
            for (var i = 0; o > i; i++) c[i] = [i];
            c[o] = [], c[f] = null
        }, d = 0; s = e, e = h(u), !(d++ > n);) if (e !== o) {
            if (e === f) break;
            if (e < c[sh]) s !== o && c.push(c[s][fh](c[e][0])); else {
                if (e !== c.length) throw new Error(ME);
                c.push(c[s][fh](c[s][0]))
            }
            a[_h].apply(a, c[e]), c[sh] === 1 << u && 12 > u && u++
        } else _();
        return a
    }, UU = function (t, i) {
        i || (i = {});
        var n = function (i) {
            for (var n = [], e = 0; i > e; e++) n.push(t.readBytes(3));
            return n
        }, e = function () {
            var i, n;
            n = "";
            do i = t[kE](), n += t.read(i); while (0 !== i);
            return n
        }, s = function () {
            var e = {};
            if (e.sig = t[OE](3), e.ver = t[OE](3), IE !== e.sig) throw new Error(LE);
            e[La] = t[SE](), e.height = t[SE]();
            var s = zU(t[kE]());
            e[PE] = s.shift(), e[CE] = GU(s.splice(0, 3)), e[jE] = s[RE](), e[DE] = GU(s[oh](0, 3)), e.bgColor = t.readByte(), e[NE] = t.readByte(), e.gctFlag && (e.gct = n(1 << e[DE] + 1)), i.hdr && i.hdr(e)
        }, r = function (n) {
            var s = function (n) {
                var e = (t[kE](), zU(t[kE]()));
                n[BE] = e[oh](0, 3), n.disposalMethod = GU(e[oh](0, 3)), n[$E] = e[RE](), n.transparencyGiven = e[RE](), n.delayTime = t[SE](), n[FE] = t[kE](), n[GE] = t[kE](), i.gce && i.gce(n)
            }, r = function (t) {
                t.comment = e(), i.com && i.com(t)
            }, h = function (n) {
                t[kE](), n[zE] = t[AE](12), n[HE] = e(), i.pte && i.pte(n)
            }, a = function (n) {
                var s = function (n) {
                    t[kE](), n[YE] = t[kE](), n.iterations = t[SE](), n[GE] = t[kE](), i.app && i.app.NETSCAPE && i.app.NETSCAPE(n)
                }, r = function (t) {
                    t[UE] = e(), i.app && i.app[t[WE]] && i.app[t[WE]](t)
                };
                switch (t[kE](), n[WE] = t[OE](8), n[qE] = t[OE](3), n[WE]) {
                    case"NETSCAPE":
                        s(n);
                        break;
                    default:
                        r(n)
                }
            }, o = function (t) {
                t[Yo] = e(), i[YE] && i[YE](t)
            };
            switch (n.label = t[kE](), n.label) {
                case 249:
                    n.extType = VE, s(n);
                    break;
                case 254:
                    n.extType = XE, r(n);
                    break;
                case 1:
                    n[KE] = JE, h(n);
                    break;
                case 255:
                    n[KE] = ZE, a(n);
                    break;
                default:
                    n[KE] = YE, o(n)
            }
        }, h = function (s) {
            var r = function (t, i) {
                for (var n = new Array(t[sh]), e = t[sh] / i, s = function (e, s) {
                    var r = t[ah](s * i, (s + 1) * i);
                    n[oh][yh](n, [e * i, i][fh](r))
                }, r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++) for (var f = r[o]; e > f; f += h[o]) s(f, a), a++;
                return n
            };
            s[Fu] = t[SE](), s[Gu] = t[SE](), s[La] = t[SE](), s.height = t[SE]();
            var h = s[La] * s[ua], a = zU(t.readByte());
            s[$u] = a[RE](), s.interlaced = a[RE](), s[jE] = a.shift(), s.reserved = a[oh](0, 2), s[QE] = GU(a[oh](0, 3)), s[$u] && (s.lct = n(1 << s.lctSize + 1)), s[tw] = t.readByte();
            var o = e();
            s[zu] = YU(s[tw], o, h), s[iw] && (s[zu] = r(s.pixels, s[La])), i.img && i.img(s)
        }, a = function () {
            var n = {};
            switch (n[nw] = t[kE](), String[Xu](n[nw])) {
                case"!":
                    n[Vo] = ew, r(n);
                    break;
                case",":
                    n.type = J_, h(n);
                    break;
                case";":
                    n[Vo] = sw, i.eof && i.eof(n);
                    break;
                default:
                    throw new Error(rw + n[nw].toString(16))
            }
            sw !== n[Vo] && setTimeout(a, 0)
        }, o = function () {
            s(), setTimeout(a, 0)
        };
        o()
    }, WU = "";
    i[yb] && i[yb](hw, function (t) {
        if (t[za] && t[aw] && t[ow] && 73 == t[fw]) {
            var i = XY.name + uw + XY.version + cw + XY[_w] + Oo + XY[dw] + Oo + XY[lw] + WU;
            XY.alert(i)
        }
    }, !1);
    var qU = vw;
    WU = bw + decodeURIComponent(yw);
    var VU, XU, KU, JU = t, ZU = gw, QU = xw, tW = mw, iW = pw, nW = Ew, eW = ww, sW = Tw, rW = kw, hW = Ow, aW = Sw,
        oW = Aw, fW = Mw, uW = Iw, cW = Lw, _W = Pw, dW = Cw, lW = jw, vW = Rw, bW = Dw, yW = Nw, gW = Bw,
        xW = JU[iW + $w];
    xW && (XU = JU[cW + Fw][nW + Gw], xW[rh](JU, ae, dW), xW[rh](JU, oe, bW), xW[rh](JU, function () {
        pW && pW == qU && (IW = !1)
    }, lW));
    var mW, pW, EW, wW = 111, TW = function (t, i) {
        i || (i = zw + QU + Hw);
        try {
            KU[rh](t, i, 6 * wW, 1 * wW)
        } catch (n) {
        }
    }, kW = !0, OW = !0, SW = !0, AW = !0, MW = !0, IW = !0, LW = 2048, PW = function (t, i) {
        return he ? he(t, i) || "" : void 0
    };
    if (i[V_]) {
        var CW = i[V_](Yw);
        CW[pa][Uw] = od, CW[Uu] = function (t) {
            var i = t[Kc][Ww], n = XU;
            if ("" === n || qw == n || Vw == n) return void this.parentNode.parentNode.removeChild(this[cm]);
            var e = i[Xw][Xu];
            i[iW + $w](function () {
                re(e) != mW && (hq[vh]._jl = null)
            }, bW), this[cm].parentNode[sb](this.parentNode)
        };
        var jW = i[V_](X_);
        jW[pa][La] = bd, jW[pa][ua] = bd, jW[pa].overflow = ad, jW[ed](CW), i[Jd][ed](jW)
    }
    if (i[_W + Kw]) {
        var RW = i[_W + Kw](hW + Jw);
        RW[pa][Uw] = od, RW[Uu] = function (t) {
            var i = Zw, n = t.target[i + Qw];
            VU = n[tT].now();
            var e = n[aW + oW + iT + fW + nT][uW + Vo];
            KU = e[ZU + eT], SH && (n = JU);
            var s = n[iW + $w];
            s[rh](JU, _e, bW), s[rh](JU, de, yW), s[rh](JU, ve, lW), s[rh](JU, fe, vW), s[rh](JU, ce, gW), s[rh](JU, le, bW), s[rh](JU, ue, bW), this.parentNode.parentNode[sb](this.parentNode)
        };
        var jW = i[V_](X_);
        jW.style.width = bd, jW[pa][ua] = bd, jW.style.overflow = ad, jW[ed](RW), i.documentElement.appendChild(jW)
    }
    var DW = {position: sT, userSelect: od, outline: od, transformOrigin: rT, "-webkit-tap-highlight-color": sp},
        NW = hT;
    xi(ta + NW, DW);
    var BW = {
        width: ud,
        height: ud,
        position: fd,
        overflow: ad,
        textAlign: Tf,
        outline: od,
        tapHighlightColor: sp,
        userSelect: od
    }, $W = aT;
    xi(ta + $W, BW);
    var FW = oT, GW = {overflow: ad, "text-align": Tf, "-webkit-tap-highlight-color": sp, outline: od};
    xi(ta + FW, GW);
    var zW = A(function (t) {
        this[fT] = new YW, this._mu = new DH, this._7z = [], this._n8p = [], this[uT] = [], this._7y = {}, this.bounds = new HH, this._ji = new KW, this[cT] = new JW, this._ji.listener = function (t) {
            this._72(t)
        }[Sh](this), this[_T](), this[dT](t)
    }, {
        _nbw: null, _je: null, _mu: null, _n8p: null, _ji: null, _n9z: function (t) {
            return t ? (this._6es || (this._6es = {}), this[lT][t] ? !1 : (this[lT][t] = !0, void this[vT]())) : this[vT]()
        }, _nb4: function (t) {
            return this[lT] && this._6es[t]
        }, isInvalidate: function () {
            return this._6e
        }, clear: function () {
            this._mu[so](), this[bT][sh] = 0, this._7y = {}, this[Wc] = !1, this[vT]()
        }, _6i: function () {
            this[yT](gT), this._2d()
        }, _2d: function () {
            this[yT](xT)
        }, invalidate: function (t) {
            (t || !this._6e) && (this._6e = !0, this._li || (this[mT] = requestAnimationFrame(this._f4[Sh](this))))
        }, _6q: function (t) {
            return this._li = t, t ? void(this[mT] && (cancelAnimationFrame(this[mT]), this[mT] = null)) : void(this._6e && this[vT](!0))
        }, _f4: function () {
            this[mT] = null, this._6e = !1;
            var t = this[Wc];
            this._nbq || (this._n8h(), this[Wc] = !0), this[pT](!t), this._35(), this._jl(), this._20()
        }, _n9y: function (t) {
            this[ET] = t || this[wT], (t || this[lT][gT]) && this._90(), (t || this._6es.matrix) && this._7k(), this[TT](t), this._45(t), this[lT] = {}
        }, _35: function () {
            this[bT][sh] = 0;
            var t = this[cT];
            if (this._mu.forEach(function (i) {
                    if (i.__hd !== !1) {
                        var n = this[kT](i);
                        t[OT](n.x, n.y, n.width, n[ua]) && this[bT].push(i)
                    }
                }, this), this[bT] = this._id(this[bT]), !this[ET]) {
                var i = this[fT];
                this[uT].length = 0, i[ST](this[cT]), i._i3() || this[bT][Hu](function (t) {
                    var n = this[kT](t);
                    i._e7(n.x, n.y, n.width, n[ua]) && this[uT].push(t)
                }, this)
            }
        }, _id: function (t) {
            return SH ? t = d(t, this._9n) : t[AT](this._9n), t
        }, _9n: function (t, i) {
            return t = t[MT] || 0, i = i.zIndex || 0, t - i
        }, _nby: function (t) {
            return t[IT]
        }, _jl: function () {
            if (this._n95) return this._de(), this._7c(!0), void this[LT](this[PT], this[bT]);
            this._7c(this[CT]);
            var t = this._n9f, i = this[PT];
            i.save(), this._n9uffer && (ge(i), i.drawImage(this[CT][co], this._n9uffer.x, this[CT].y)), t._jn(i, this._dl[Sh](this)), this._de(), this[LT](i, this[uT]), i[Ao]()
        }, _7c: function (t) {
            this[jT] ? (this._n9zCanvasSizeFlag = !1, this._je[RT](this._width, this[cp])) : t && ye(this._je)
        }, _90: function () {
            var t = this[La], i = this.height;
            return this[mm] == t && this[cp] == i ? !1 : (this._width = t, this[cp] = i, void(this._n9zCanvasSizeFlag = !0))
        }, _45: function (t) {
            if (!t && !this[lT][xT]) return !1;
            var i = this._ji.reverseTransform([0, 0]), n = this.scale, e = this[mm] / n, s = this._height / n,
                r = this[Xo], h = this[cT];
            if (h.x == i[0] && h.y == i[1] && h.width == e && h[ua] == s && h[Xo] == r) return !1;
            var a = h[DT]();
            return this[cT].set(i[0], i[1], e, s, r, n), this._3e(this[cT], a, t), !0
        }, _3e: function (t, i, n) {
            this[ET] || n || (this._n9uffer = this._g2(i, t))
        }, _72: function () {
            if (this[Wc]) {
                if (this._li) {
                    var t;
                    this._n8urrentMatrix ? this[NT][BT] = t = qW.mul([], this._ji.m, qW[$T]([], this[NT].m)) : t = this._ji.m, this._54(t)
                }
                this[yT](FT), this._2d()
            }
        }, _54: function (t) {
            this[GT] = t, ZW.setStyle(this._je, td, t ? zT + t.join(qh) + ")" : "")
        }, _7k: function () {
            var t = this[NT];
            if (this[NT] = {
                    tx: this._ji.m[4],
                    ty: this._ji.m[5],
                    m: this._ji.m[ah](),
                    scale: this._ji._fz(),
                    rotate: this._ji._et()
                }, this[GT] && this._54(null), !this[ET]) {
                if (this._2g(this[NT], t), !t || t.scale != this[NT][mo]) return this._7n(this[NT][mo], t ? t[mo] : null), void(this[ET] = !0);
                if (!t || t[Xo] != this[NT][Xo]) return this._56(this._n8urrentMatrix[Xo], t ? t.rotate : null), void(this._n95 = !0);
                var i = t.m[4] - this[NT].m[4], n = t.m[5] - this[NT].m[5], e = this.ratio;
                i *= e, n *= e;
                var s = 1e-4;
                (Math.abs(i - Math[Fo](i)) > s || Math.abs(n - Math[Fo](n)) > s) && (this[ET] = !0)
            }
        }, _7m: function () {
            var t = this[bu], i = t[ch]();
            t[so](), this._mu[Hu](function (i) {
                i[HT] !== !1 && t.add(this[kT](i))
            }, this), t.equals(i) || this._3g(t, i)
        }, _3g: function () {
        }, _nbq: !1, _n8h: function () {
        }, _9u: function (t) {
            var i = t.ratio;
            t[mo](i, i), t[td].apply(t, this._ji.m)
        }, render: function (t, i) {
            i && i[sh] && (t[go](), this._9u(t), i.forEach(function (i) {
                if (t[go](), i.visible !== !1) try {
                    i.render(t)
                } catch (n) {
                    console.error(n)
                }
                t[Ao]()
            }, this), t.restore())
        }, setParent: function (t) {
            N(t) && (t = i[YT](t)), this._n1 != t && (this._n1 && this[UT] && (R(this._n1, FW), this._n1[sb](this[UT])), this._n1 = t, this._n1 && (j(this._n1, FW), this._n1.appendChild(this._6o()), this._6i()))
        }, _6o: function () {
            return this._nbw || this[_T](), this._nbw
        }, _n9x: function () {
            var t = Di(!0);
            ee(t.g), t[Mh] = NW;
            var n = i[V_](X_);
            return n[yb](ay, function (t) {
                return i.activeElement == this ? (t.preventDefault && t[$h](), !1) : void 0
            }.bind(n), !1), n[Mh] = $W, n[ed](t), n[WT] = 0, this._je = t, this[UT] = n, this[PT] = this._je.getContext(_o), t
        }, toLogical: function (t, i) {
            return t instanceof Object && (Q(t) && (t = this._7w(t)), Array[Xc](t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._ji.reverseTransform([t, i])
        }, toCanvas: function (t, i) {
            return this._ji[td]([t, i])
        }, _7w: function (t) {
            return pi(t, this[UT])
        }, _ed: function (t, i, n) {
            if (t.hitTest instanceof Function) return t.hitTest(i, n);
            var e = this[kT](t);
            return e ? n ? HH[OT](e.x, e.y, e[La], e[ua], i[0] - n, i[1] - n, n + n, n + n) : HH[OT](e.x, e.y, e[La], e[ua], i[0], i[1]) : t
        }, hitTest: function (t, i) {
            return this._8f(t, i)
        }, _8f: function (t, i) {
            i = this._9r(i), t = this.toLogical(t);
            for (var n, e = this[bT][sh]; --e >= 0;) if (n = this[bT][e], this._ed(n, t, i)) return n
        }, _9r: function (t) {
            return (t === n || null === t) && (t = RH[jd]), t ? t / this.scale : 0
        }, getUIByMouseEvent: function (t, i) {
            if (t[qT]) return this._mu.getById(t[qT]);
            var n = this._8f(t, i);
            return t[qT] = n ? n.id : -1, n
        }, _7y: null, invalidateUI: function (t) {
            this._7y[t.id] = t, this[vT]()
        }, _9f: function (t) {
            t[Do] instanceof Function && t.validate(this)
        }, _n8e: function (t, i) {
            t[VT] && this._g1(t.__jj);
            var n = t[HT];
            if (t[HT] = this._eb(t, i), !t[HT]) return n;
            var e = t[VT];
            this._9f(t);
            var s = this[kT](t);
            t[VT] = {x: s.x, y: s.y, width: s[La], height: s[ua]};
            var r = t[HT] !== n || !HH.equals(e, s);
            return r && t[VT] && this._g1(t[VT]), r
        }, _eb: function (t) {
            return t[XT] !== !1
        }, _$q: function (t) {
            this._mu[Hu](function (i) {
                this._n8e(i, t)
            }, this), this._7y = {}, this._7m()
        }, _n90: function (t) {
            var i = this[mo];
            if (t) return this._$q(i);
            var n = this[KT];
            this._n9zBoundsFlag = !1;
            for (var e in this._7y) {
                var s = this._7y[e];
                n ? this[JT](s, i) : n = this._n8e(s, i)
            }
            this._7y = {}, n && this._7m()
        }, _7z: null, _20: function () {
            if (!this._7z[sh]) return !1;
            var t = this._7z;
            this._7z = [], t[Hu](function (t) {
                try {
                    var i = t.call, n = t[Av], e = t[pE];
                    n instanceof Object ? i = i[Sh](n) : n && !e && (e = parseInt(n)), e ? setTimeout(i, e) : i()
                } catch (s) {
                }
            }, this), this._6e && this._f4()
        }, _ds: function (t, i, n) {
            this._7z.push({call: t, scope: i, delay: n}), this._6e || this._20()
        }, _3x: function (t, i) {
            for (var n = this[bT], e = 0, s = n[sh]; s > e; e++) if (t[rh](i, n[e]) === !1) return !1
        }, _em: function (t, i) {
            this._mu[Hu](t, i)
        }, _$s: function (t, i) {
            for (var n = this[bT], e = n[sh] - 1; e >= 0; e--) if (t[rh](i, n[e]) === !1) return !1
        }, _3z: function (t, i) {
            this._mu[ZT](t, i)
        }, _41: function () {
            return this[bu]
        }, _f3: function (t, i, n) {
            t /= this.scale || 1, this._j2(t, i, n)
        }, _j2: function (t, i, e) {
            if (this[Wc] && (i === n || null === i)) {
                var s = this.toLogical(this[La] / 2, this.height / 2);
                i = s[0] || 0, e = s[1] || 0
            }
            return this._ji.scale(t, [i || 0, e || 0])
        }, _eg: function (t, i) {
            this._ji[xo]([t, i], !0)
        }, _n93: function (t, i, n, e) {
            if (n == this[mo] && e !== !1) {
                var s = this.ratio;
                s != (0 | s) && (t = Math[Fo](t * s) / s, i = Math[Fo](i * s) / s)
            }
            this._ji[QT]([t, i], n)
        }, _j7: function (t, i) {
            return this._j2(this._ek, t, i)
        }, _ib: function (t, i) {
            return this._j2(1 / this._ek, t, i)
        }, _1i: function () {
            var t = this._41();
            if (!t[jl]()) {
                var i = this[La] / t.width, n = this[ua] / t[ua], e = Math.min(i, n);
                return e = Math.max(this._g3, Math.min(this._g4, e)), {scale: e, cx: t.cx, cy: t.cy}
            }
        }, _ek: 1.3, _g4: 10, _g3: .1, _n95: !1, _7n: function () {
        }, _56: function () {
        }, _2g: function () {
        }, _de: function () {
            this[CT] = null, this[fT]._l5()
        }, _dl: function (t) {
            var i = this._ji, n = this._je[lo], e = this[mo], s = i._et();
            if (!s) {
                var r = i[td]([t[0], t[1]]);
                return r[0] *= n, r[1] *= n, n *= e, r[2] = t[2] * n, r[3] = t[3] * n, r
            }
            var h = new HH, a = i.transform([t[0], t[1]]);
            return h.add(a[0], a[1]), a = i.transform([t[0] + t[2], t[1]]), h.add(a[0], a[1]), a = i[td]([t[0], t[1] + t[3]]), h.add(a[0], a[1]), a = i[td]([t[0] + t[2], t[1] + t[3]]), h.add(a[0], a[1]), [h.x * n, h.y * n, h.width * n, h.height * n]
        }, _g2: function (t, n) {
            var e = this._je;
            if (e[La] && e.height) {
                var s = n._39(t.x, t.y, t.width, t[ua]);
                if (s && s.width && s.width) {
                    var r = this[mo] * this[lo], h = this[fT], a = {}, o = 1e-6;
                    s.x > o && (a[Tf] = n._49(0, 0, s.x, n[ua], r)), n[La] - s.right > o && (a[aa] = n._49(s[aa], 0, n[La] - s[aa], n[ua], r)), s.y > o && (a.top = n._49(s.x, 0, s.width, s.y, r)), n[ua] - s[ha] > o && (a[ha] = n._49(s.x, s.bottom, s[La], n[ua] - s[ha], r)), U(a) || h._4w(a);
                    var f = n._hm(t.x, t.y), u = (f[0] - s.x) * r, c = (f[1] - s.y) * r, _ = s[La] * r, d = s[ua] * r;
                    u = Math[Fo](u), c = Math.round(c), _ = Math[Fo](_), d = Math.round(d);
                    var l = this._n9ackCanvas;
                    return l || (l = this._n9ackCanvas = i.createElement(co), l.g = l[mf](_o)), l[La] = _, l[ua] = d, ge(l.g), l.g[pd](e, u, c), u = f[0] * r - u, c = f[1] * r - c, {
                        x: u,
                        y: c,
                        canvas: l
                    }
                }
            }
        }, _lt: function (t, i, n, e) {
            this[fT]._n2(t, i, n, e)
        }, _g1: function (t) {
            this._n9f._hy(t)
        }
    });
    Object[tk](zW[vh], {
        width: {
            get: function () {
                return this[UT][Ma]
            }
        }, height: {
            get: function () {
                return this._nbw[Td]
            }
        }, rotate: {
            get: function () {
                return this._ji._et()
            }
        }, tx: {
            get: function () {
                return this._ji._82()[0]
            }
        }, ty: {
            get: function () {
                return this._ji._82()[1]
            }
        }, ratio: {
            get: function () {
                return this._je ? this._je[lo] : void 0
            }
        }, scale: {
            get: function () {
                return this._ji._fz()
            }, set: function (t) {
                this._f3(t)
            }
        }, renderScale: {
            get: function () {
                return this.scale * this[lo]
            }
        }, uis: {
            get: function () {
                return this._mu
            }
        }, length: {
            get: function () {
                return this._mu[sh]
            }
        }, viewportBounds: {
            get: function () {
                return this[cT].getGlobalBounds()
            }
        }
    });
    var HW, YW = A({
        constructor: function () {
            this._gs = [], this._jj = new HH, this._gt = pH ? 20 : 50
        }, _gt: 20, _gs: null, _m2: !1, _jj: null, _l5: function () {
            this._m2 = !1, this._gs[sh] = 0, this._viewportClips = null, this._jj[so]()
        }, _i3: function () {
            return 0 == this._gs[sh] && !this._viewportClips
        }, _n2: function (t, i, n, e) {
            0 >= n || 0 >= e || this._gs.push([t, i, n, e])
        }, _hy: function (t) {
            this._n2(t.x, t.y, t.width, t[ua])
        }, _4w: function (t) {
            var i = this._jj;
            for (var n in t) {
                var e = t[n], s = e[ik]();
                i.add(s)
            }
            this[nk] = t
        }, _n9a: function (t, i) {
            for (var n = [], e = this._gs, s = 0, r = e[sh]; r > s; s++) {
                var h = e[s];
                t[OT](h[0], h[1], h[2], h[3]) && (n[_h](h), this._jj.addRect(h[0], h[1], h[2], h[3]))
            }
            this._gs = n, this._m2 = i || n.length >= this._gt
        }, _e7: function (t, i, n, e) {
            if (!this._jj[Wl](t, i, n, e)) return !1;
            if (this._m2) return !0;
            if (this[nk]) {
                var s = this[nk];
                for (var r in s) if (s[r].intersects(t, i, n, e)) return !0
            }
            for (var h, a = 0, o = this._gs[sh]; o > a; a++) if (h = this._gs[a], HH[OT](t, i, n, e, h[0], h[1], h[2], h[3])) return !0;
            return !1
        }, _jn: function (t, i) {
            if (this._i3()) return !1;
            if (t[uf](), this._m2) {
                var n = i([this._jj.x, this._jj.y, this._jj.width, this._jj[ua]]);
                return xe(t, n[0], n[1], n[2], n[3]), void t[Fp]()
            }
            if (this._viewportClips) for (var e in this[nk]) {
                var n = this[nk][e][ek];
                xe(t, n[0], n[1], n[2], n[3])
            }
            for (var s = this._gs, r = 0, h = s[sh]; h > r; r++) {
                var n = i(s[r]);
                xe(t, n[0], n[1], n[2], n[3])
            }
            t[Fp]()
        }
    });
    YW[sk] = function (t, i, n, e) {
        return t instanceof Object && (i = t.y, n = t[La], e = t[ua], t = t.x), n = V(t + n) - (t = q(t)), e = V(i + e) - (i = q(i)), [t, i, n, e]
    }, YW[rk] = q, YW._fm = V, KY.NAVIGATION_BUTTON = hk, KY[ak] = ok, RH.NAVIGATION_TYPE = KY[ak];
    var UW = A({
        _jl: function () {
            k(this, UW, fk, arguments), this._topCanvas._jl()
        },
        _9n: function (t, i) {
            return t = t[Ou][MT] || 0, i = i[Ou].zIndex || 0, t - i
        },
        "super": zW,
        constructor: function (t, n) {
            this._ko = t, N(n) && (n = i[YT](n)), n && n[Bl] || (n = i[V_](X_)), O(this, UW, [n]), this[uk] = new mr(this, this[UT]), this._gl = [], this._ko._5[Mv](this._1c, this), this._ko._1f.addListener(this._98, this), this._ko._10.addListener(this._7r, this), this._ko._$g.addListener(this._2x, this), this._ko._$l[Mv](this._3r, this), this[ck] = {}, this._3l(RH.NAVIGATION_TYPE, !0)
        },
        _54: function (t) {
            k(this, UW, _k, arguments), this._topCanvas._54(t)
        },
        _gp: function (t) {
            return t.id || (t = this._mu[Pl](t)), t ? (this._mu[Rh](t), t[Zy](), t[VT] && this._g1(t[VT]), void(this[KT] = !0)) : !1
        },
        _go: function () {
            this._mu[Hu](function (t) {
                t[Zy]()
            }), this._mu[so]()
        },
        _eb: function (t, i) {
            var n = t[Yo] || t;
            return n._$p && (n._$p = !1, n._hd = this._58(n, i)), n._hd !== !1
        },
        _58: function (t, i) {
            return this._3j(t, i) ? !this._ko[dk] || this._ko[dk](t, i) !== !1 : !1
        },
        _9k: function (t) {
            return this._ko._3o == dr(t)
        },
        _3j: function (t, i) {
            if (t.visible === !1) return !1;
            if (!(t instanceof iq)) return this._ko._3o != dr(t) ? !1 : !t._dk;
            var n = t[cc], e = t[ac];
            if (!n || !e) return !1;
            if (n == e && !t[lc]()) return !1;
            if (t.isBundleEnabled()) {
                var s = t.getEdgeBundle(!0);
                if (s && !s._eb(t, i)) return !1
            }
            return this._eb(n, i) && this._eb(e, i) ? !0 : !1
        },
        _nby: function (t) {
            return t[Wc] ? {x: t.$x + t[Cd].x, y: t.$y + t[Cd].y, width: t[Cd][La], height: t.uiBounds[ua]} : void 0
        },
        _30: function (t) {
            var i = this._la(t);
            if (i) {
                var n = this[kT](i);
                if (n) return new HH(n)
            }
        },
        _ed: function (t, i, n) {
            return t[W_](i[0], i[1], n)
        },
        hitTest: function (t, i) {
            var n = k(this, UW, W_, arguments);
            if (n) {
                t = this[lk](t), i = this._9r(i);
                var e = n.hitTest(t[0], t[1], i, !0);
                if (e instanceof hq) return e
            }
            return n
        },
        _3t: function (t) {
            return this.getUIByMouseEvent(t)
        },
        _7c: function () {
            k(this, UW, vk, arguments), this[uk]._hu(this[La], this.height)
        },
        _l7: 1,
        _n8p: null,
        _8b: null,
        _8a: null,
        _mu: null,
        _n1: null,
        _je: null,
        _n9f: null,
        _6e: !1,
        _nbq: !1,
        _ji: null,
        _3x: function (t, i) {
            for (var n = this[bT], e = 0, s = n.length; s > e; e++) if (t.call(i, n[e]) === !1) return !1
        },
        _em: function (t, i) {
            this._mu[Hu](t, i)
        },
        _$s: function (t, i) {
            for (var n = this[bT], e = n[sh] - 1; e >= 0; e--) if (t[rh](i, n[e]) === !1) return !1
        },
        _3z: function (t, i) {
            this._mu.forEachReverse(t, i)
        },
        _3e: function (t) {
            k(this, UW, bk, arguments), this[yk] = {value: t}
        },
        _n8h: function () {
            this._45(!0), this._originAdjusted || (this[gk] = !0, this._ko && this._ko[xk] && this._ji[QT]([this.width / 2, this[ua] / 2]))
        },
        _f4: function () {
            if (!this._ieed && this._6e) {
                if (this[mT] = null, this._6e = !1, this._nbq && this._ko && this._ko._$p && (this._ko._$p = !1, this._ko[Hu](function (t) {
                        t[mk](!0)
                    })), k(this, UW, pk, arguments), this[Ek]) {
                    this._77 && this._77._k2();
                    var t = this[Ek].value, i = this._8aChanged.old;
                    this._8aChanged = null, this._ko._4k(new iY(this._ko, wk, t, i))
                }
                this._viewportChanged && (this._viewportChanged = !1, this._77 && this._77._3e && this._77._3e(this[cT][La] * this[cT][mo], this[cT][ua] * this[cT].scale), this._ko._4k(new iY(this._ko, xT, this[cT])))
            }
        },
        _gl: null,
        _n8e: function (t) {
            var i = t[Ou];
            if (!t._1a && !i._6e && !i._$p) return !1;
            var n = t[su];
            return n = k(this, UW, JT, arguments) || n
        },
        _9f: function (t) {
            var i = t.$data;
            i[Tk] && (i[Tk] = !1, t._4o()), i.__6e && i._he() && (t._59(), i[kk] = !1), (t._1a || i._6e) && (i._6e = !1, t[Do]())
        },
        _gj: function (t, i) {
            var n = t.ratio;
            t[mo](n, n), t.transform[yh](t, this._ji.m);
            for (var e = this.renderScale, s = [], r = 0, h = i[sh]; h > r; r++) {
                var a = i[r];
                a._jl(t, e), a._k6 && a._k6[sh] && s[_h](a)
            }
            if (s[sh]) for (r = 0, h = s[sh]; h > r; r++) s[r]._97(t, e)
        },
        render: function (t, i) {
            if (i[sh]) {
                if (t[go](), pH) try {
                    this._gj(t, i)
                } catch (n) {
                } else this._gj(t, i);
                t[Ao]()
            }
        },
        _gh: function (t, i, n) {
            t.save(), t.translate(-n.x * i, -n.y * i), t[mo](i, i);
            var e, s, r = this._mu._jd[ah]();
            r = this._id(r);
            for (var h = [], a = 0, o = r.length; o > a; a++) e = r[a], e[HT] && (s = this[kT](e), n.intersectsRect(s.x, s.y, s.width, s[ua]) && (e._jl(t, i), e._k6 && e._k6[sh] && h[_h](e)));
            if (h[sh]) for (a = 0, o = h[sh]; o > a; a++) h[a]._97(t, i);
            t[Ao]()
        },
        _$u: function () {
        },
        _1h: function () {
            for (var t, i, n = this._mu._jd, e = new HH, s = n[sh] - 1; s >= 0; s--) t = n[s], t._hd && (i = t[Cd], e[Ok](t.$x + i.x, t.$y + i.y, i.width, i.height));
            var r = this._8a;
            this._8a = e, e[sc](r) || this._$u(r, e)
        },
        _68: function () {
            this[bT][sh] = 0, this._8b = {}
        },
        _l8: function () {
            this._l5()
        },
        _ie: function () {
            this._l5(), this._ieed = !0, this._6e = !1, this[uk][so](), this._7z[sh] = 0, this._77 && (this._77._ie(), delete this._77)
        },
        _la: function (t) {
            return this._mu[Pl](t.id || t)
        },
        _$b: function (t) {
            return this._db(t)
        },
        _gb: function (t, i) {
            var n = this.toCanvas(t, i);
            return {x: n[0], y: n[1]}
        },
        _db: function (t, i) {
            var n = this[lk](t, i);
            return {x: n[0], y: n[1]}
        },
        _$a: null,
        _3r: function (t) {
            var i = t[Sf], n = t.data;
            if (n) if (this[Wc]) {
                var e, s;
                if ($(n)) for (var r = 0, h = n[sh]; h > r; r++) s = n[r].id, e = this._mu[Pl](s), e && (e[Sk] = i[Il](s), e[Ak]()); else {
                    if (s = n.id, e = this._mu.getById(s), !e) return;
                    e[Sk] = i[Il](s), e.invalidateRender()
                }
                this[yT]()
            } else {
                this._$a || (this._$a = {});
                var e, s;
                if ($(n)) for (var r = 0, h = n[sh]; h > r; r++) s = n[r].id, this._$a[s] = !0; else s = n.id, this._$a[s] = !0
            }
        },
        _ko: null,
        _n8a: function (t) {
            var i = t[Mk];
            return i ? new i(t, this._ko) : void 0
        },
        _1c: function (t) {
            if (!this[Wc]) return !1;
            var i = t.source, n = t[el];
            q_ == n && this._ko.invalidateVisibility(), Mk == n ? (this._gp(i.id), this._lb(i)) : Ik == n && i._he() && t[kh] && this._5q(i);
            var e = this._mu.getById(i.id);
            e && e._nbq && e[Lk](t) && this[yT]()
        },
        _3p: function (t) {
            var i = this._la(t);
            i && (i[Pk](), this[yT]())
        },
        _98: function (t) {
            if (!this[Wc]) return !1;
            switch (t[el]) {
                case uY.KIND_ADD:
                    this._lb(t[Yo]);
                    break;
                case uY[Yv]:
                    this._g9(t.data);
                    break;
                case uY[Dv]:
                    this._ih(t[Yo])
            }
        },
        _l5: function () {
            this[ck] = {}, this._go(), this.clear()
        },
        _n9l: null,
        _lb: function (t) {
            var i = this[Ck](t);
            i && (this._mu.add(i), this[Wc] && (this._n9l[t.id] = t), this[yT]())
        },
        _g9: function (t) {
            if (Array.isArray(t)) {
                for (var i, n = [], e = 0, s = t[sh]; s > e; e++) i = t[e].id, n[_h](i), delete this._n9l[i];
                t = n
            } else t = t.id, delete this[ck][t], t = [t];
            t.forEach(function (t) {
                this._gp(t)
            }, this), this[yT]()
        },
        _ih: function () {
            this._l5()
        },
        _7r: function (t) {
            return this._nbq ? void(t[Sf] instanceof nq && !this[ck][t[Sf].id] && (t[gv] && (this._3p(t[gv]), t[gv][kk] = !0), t[kh] && (this._3p(t[kh]), t[kh][kk] = !0), this._5q(t.source))) : !1
        },
        _2x: function (t) {
            return this[Wc] ? void(t[Sf] instanceof nq && !this[ck][t[Sf].id] && this._5q(t[Sf])) : !1
        },
        _2v: function (t) {
            if (t[jk]) {
                var i = t[oc](!0);
                if (!i) return t[jk] = !1, void t[Rk]();
                i[Do](this._ko), i[Dk](function (t) {
                    t[Rk]()
                })
            }
        },
        _$q: function (t) {
            var i, n = (this._ko, this._ko[Nk]), e = this._mu, s = [], r = 1;
            if (n[Bk](function (t) {
                    return t instanceof iq ? (this._2v(t), void s.push(t)) : (i = this[Ck](t), void(i && (e.add(i), t[$k] = r++)))
                }, this), e[sh]) for (var h = e._jd, r = h[sh] - 1; r >= 0; r--) i = h[r], this._3k(i, i[Ou], t);
            for (var a, r = 0, o = s[sh]; o > r; r++) if (a = s[r], i = this._n8a(a)) {
                this._3k(i, a, t), e.add(i);
                var f = a.fromAgent, u = a[ac], c = f.__ki || 0;
                f != u && (c = Math.max(c, u[$k] || 0)), a[$k] = c
            }
            if (s[sh] && e._jd[AT](function (t, i) {
                    return t.$data[$k] - i[Ou][$k]
                }), this._$a) {
                var _ = n[Od];
                for (var d in this._$a) if (_.containsById(d)) {
                    var i = e[Pl](d);
                    i && (i.selected = !0)
                }
                this._$a = null
            }
            this._7m()
        },
        _n90: function (t, i) {
            if (t) return this._$q();
            var n = this._n9zBoundsFlag;
            this[KT] = !1;
            for (var e in this._n9l) {
                var s = this[ck][e];
                s instanceof nq ? this._5q(s) : this._5p(s)
            }
            this[ck] = {};
            for (var r, h, a = this._mu._jd, o = [], f = a.length - 1; f >= 0; f--) r = a[f], h = r.$data, h instanceof iq ? (this._2v(h), o[_h](r)) : this._3k(r, h, i) && !n && (n = !0);
            if (o.length) for (var f = 0, u = o[sh]; u > f; f++) r = o[f], this._3k(r, r[Ou], i) && !n && (n = !0);
            n && this._7m()
        },
        _3k: function (t, i, n) {
            if (i instanceof iq) return i[Tk] && (i[Tk] = !1, t._4o()), this[JT](t, n);
            if (i.__6e && i._he() && (t._59(), i.__6e = !1), this[JT](t, n)) {
                var e = this._50(i);
                return e && (e[kk] = !0), i[Fk]() && i.forEachEdge(function (t) {
                    t.__4o = !0
                }, this), !0
            }
        },
        _2q: function (t, i) {
            var n = t[cc], e = t[ac], s = i.getIndexById(n.id);
            if (n == e) return s;
            var r = i[Gk](e.id);
            return Math.max(s, r)
        },
        _2o: function (t, i) {
            var n = this.graphModel._h6(t);
            return n ? i.getIndexById(n.id) : 0
        },
        _5q: function (t) {
            var i = this._mu, n = i[Pl](t.id);
            if (!n) throw new Error(zk + t.name + Hk);
            var s = this._2o(t, i), r = [n];
            t.hasChildren() && e(t, function (t) {
                t instanceof nq && (n = i[Pl](t.id), n && r[_h](n))
            }, this), this._4y(i, s, r)
        },
        _5p: function (t) {
            var i = this._mu[Pl](t.id);
            if (i) {
                var n = this._2q(t, this._mu);
                this._mu.setIndexBefore(i, n)
            }
        },
        _4y: function (t, i, n) {
            function e(t) {
                s.add(t)
            }

            var s = new DH;
            l(n, function (n) {
                i = t[Yk](n, i), n[Ou][pc](e)
            }, this), 0 != s[sh] && s[Hu](this._5p, this)
        },
        _50: function (t) {
            var i = Pe(t);
            return i && i.expanded ? i : null
        },
        _6y: null,
        _77: null,
        _3l: function (t, i) {
            return i || t != this._6y ? (this._6y = t, this._77 && (this._77._ie(), delete this._77), t == KY.NAVIGATION_SCROLLBAR ? void(this._77 = new gr(this, this[UT])) : t == KY[Uk] ? void(this._77 = new yr(this, this[UT])) : void 0) : !1
        },
        _2g: function (t, i) {
            this._77 && this._77._k2(), this._ko._4k(new iY(this._ko, td, t, i))
        },
        _7n: function (t, i) {
            this._ko._4k(new iY(this._ko, mo, t, i))
        },
        _3g: function (t, i) {
            this._8aChanged = {value: t, old: i}
        },
        _7p: function () {
            this._6i()
        }
    });
    Object[tk](UW[vh], {
        _viewportBounds: {
            get: function () {
                return this[Wk]
            }
        }, _scale: {
            get: function () {
                return this.scale
            }, set: function (t) {
                this._f3(t)
            }
        }, _tx: {
            get: function () {
                return this.tx
            }
        }, _ty: {
            get: function () {
                return this.ty
            }
        }, graphModel: {
            get: function () {
                return this._ko[qk]
            }
        }
    });
    var WW = zW, qW = {};
    qW[Pw] = function () {
        return [1, 0, 0, 1, 0, 0]
    }, qW[$T] = function (t, i) {
        var n = i[0], e = i[1], s = i[2], r = i[3], h = i[4], a = i[5], o = n * r - e * s;
        return o ? (o = 1 / o, t[0] = r * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - r * h) * o, t[5] = (e * h - n * a) * o, t) : null
    }, qW[yp] = function (t, i, n) {
        var e = i[0], s = i[1], r = i[2], h = i[3], a = i[4], o = i[5], f = n[0], u = n[1], c = n[2], _ = n[3],
            d = n[4], l = n[5];
        return t[0] = e * f + r * u, t[1] = s * f + h * u, t[2] = e * c + r * _, t[3] = s * c + h * _, t[4] = e * d + r * l + a, t[5] = s * d + h * l + o, t
    }, qW.mul = qW[yp], qW[Xo] = function (t, i, n) {
        var e = i[0], s = i[1], r = i[2], h = i[3], a = i[4], o = i[5], f = Math.sin(n), u = Math.cos(n);
        return t[0] = e * u + r * f, t[1] = s * u + h * f, t[2] = e * -f + r * u, t[3] = s * -f + h * u, t[4] = a, t[5] = o, t
    }, qW[mo] = function (t, i, n) {
        var e = i[0], s = i[1], r = i[2], h = i[3], a = i[4], o = i[5], f = n[0], u = n[1];
        return t[0] = e * f, t[1] = s * f, t[2] = r * u, t[3] = h * u, t[4] = a, t[5] = o, t
    }, qW[xo] = function (t, i, n) {
        var e = i[0], s = i[1], r = i[2], h = i[3], a = i[4], o = i[5], f = n[0], u = n[1];
        return t[0] = e, t[1] = s, t[2] = r, t[3] = h, t[4] = e * f + r * u + a, t[5] = s * f + h * u + o, t
    }, qW[td] = function (t, i) {
        var n = i[0], e = i[1];
        return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
    }, qW.reverseTransform = function (t, i) {
        return qW[td](qW[$T]([], t), i)
    };
    var VW = Math.PI + Math.PI, XW = D, KW = A({
        equals: function (t) {
            if (!t || !Array[Xc](t)) return !1;
            for (var i = this.m, n = 0; n < i[sh];) {
                if (i[n] != t[n]) return !1;
                ++n
            }
            return !0
        }, constructor: function (t) {
            this.m = t || qW[Pw](), this.im = []
        }, listener: null, _6e: !0, invalidate: function () {
            return this._6e = !0, this[Vk] && this[sc](this[Vk]) ? !1 : (this[Ov] && this.listener({
                target: this,
                kind: vT
            }), this[Vk] = this.m[ah](), this)
        }, validate: function () {
            return this._6e = !1, qW.invert(this.im, this.m), this
        }, translate: function (t, i) {
            return XW(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this[vT]()) : (qW[xo](this.m, this.m, t), this[vT]())
        }, translateTo: function (t, i) {
            return XW(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._fz(), qW[mo](this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this[vT]()
        }, scale: function (t, i) {
            return Dh == typeof t && (t = [t, t]), i ? (qW[xo](this.m, this.m, i), qW.scale(this.m, this.m, t), qW[xo](this.m, this.m, me(i))) : qW[mo](this.m, this.m, t), this.invalidate()
        }, rotate: function (t, i) {
            return i ? (qW.translate(this.m, this.m, i), qW.rotate(this.m, this.m, t), qW[xo](this.m, this.m, me(i))) : qW[Xo](this.m, this.m, t), this[vT]()
        }, transform: function (t) {
            return qW[td](this.m, t)
        }, reverseTransform: function (t) {
            return qW.transform(this._47(), t)
        }, toString: function () {
            return zT + this.m.join(qh) + Xh
        }, _47: function () {
            return this._6e && this.validate(), this.im
        }, _eq: function () {
            var t = this.m[0], i = this.m[1], n = this.m[2], e = this.m[3];
            return [Math.sqrt(t * t + n * n), Math.sqrt(i * i + e * e)]
        }, _fz: function () {
            var t = this.m[0], i = this.m[2];
            return Math[Lo](t * t + i * i)
        }, _82: function () {
            return [this.m[4], this.m[5]]
        }, _n81: function () {
            var t = this.m[0], i = this.m[1], n = this.m[2], e = this.m[3];
            return [pe(Math[Po](i, e)), pe(Math[Po](-n, t))]
        }, _et: function () {
            return pe(Math[Po](this.m[1], this.m[3]))
        }
    }), JW = A({
        constructor: function () {
        }, x: 0, y: 0, width: 0, height: 0, rotate: 0, set: function (t, i, n, e, s, r) {
            return this.x = t, this.y = i, this[La] = n, this[ua] = e, this[Xo] = s, this[sa] = Math.cos(s), this[ra] = Math.sin(s), this[mo] = r, this[Xk] = null, this
        }, _hm: function (t, i) {
            return t -= this.x, i -= this.y, this[Xo] ? Te(t, i, this._sin, this[sa]) : [t, i]
        }, _83: function (t) {
            var i = new HH;
            return i.add(this._hm(t.x, t.y)), i.add(this._hm(t.x + t[La], t.y)), i.add(this._hm(t.x, t.y + t[ua])), i.add(this._hm(t.x + t[La], t.y + t.height)), i
        }, _fx: function (t, i) {
            if (this[Xo]) {
                var n = Te(t, i, Math.sin(-this[Xo]), Math.cos(-this[Xo]));
                t = n[0], i = n[1]
            }
            return [this.x + t, this.y + i]
        }, _6a: function (t, i) {
            var n = this._hm(t, i);
            return t = n[0], i = n[1], t >= 0 && i >= 0 && t <= this[La] && i <= this[ua]
        }, intersects: function (t, i, n, e) {
            if (!this[Xo]) return HH.intersects(this.x, this.y, this.width, this[ua], t, i, n, e);
            if (!n || !e) return this._6a(t, i);
            var s = this[ik]();
            if (!s.intersects(t, i, n, e)) return !1;
            for (var r = s[No], h = 0; h < r[sh];) {
                var a = r[h];
                if (HH[$o](t, i, n, e, a[0], a[1])) return !0;
                h++
            }
            var o = [[t, i], [t + n, i], [t, i + e], [t + n, i + e]];
            for (h = 0; h < o.length;) {
                var a = o[h];
                if (this._6a(a[0], a[1])) return !0;
                h++
            }
            return we(r, o)
        }, getGlobalBounds: function () {
            return this._globalBounds || (this[Xk] = this._7s(0, 0, this[La], this.height)), this[Xk]
        }, _7s: function (t, i, n, e) {
            if (!this[Xo]) return new HH(this.x + t, this.y + i, n, e);
            var s = [], r = new HH, h = this._fx(t, i);
            return s.push(h), r.add(h[0], h[1]), h = this._fx(t + n, i), s[_h](h), r.add(h[0], h[1]), h = this._fx(t, i + e), s[_h](h), r.add(h[0], h[1]), h = this._fx(t + n, i + e), s[_h](h), r.add(h[0], h[1]), r[No] = s, r
        }, _49: function (t, i, n, e, s) {
            var r;
            if (this[Xo]) {
                var h = this._fx(t, i);
                r = (new JW).set(h[0], h[1], n, e, this.rotate, this.scale)
            } else r = (new JW).set(this.x + t, this.y + i, n, e, 0, this[mo]);
            return r[ek] = [Math[Fo](s * t), Math[Fo](s * i), Math[Fo](s * n), Math[Fo](s * e)], r
        }, _39: function (t, i, n, e) {
            if (!this[Xo]) {
                var s = HH[qf](this.x, this.y, this.width, this[ua], t, i, n, e);
                return s && s.offset(-this.x, -this.y), s
            }
            var r = this._hm(t, i);
            return t = r[0], i = r[1], HH[qf](0, 0, this[La], this[ua], r[0], r[1], n, e)
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y && this.width == t[La] && this[ua] == t[ua] && this.rotate == t[Xo]
        }, toString: function () {
            return this.x + qh + this.y + qh + this.width + qh + this.height + qh + this.rotate
        }, toJSON: function () {
            return {x: this.x, y: this.y, width: this[La], height: this[ua], rotate: this[Xo], scale: this[mo]}
        }
    }), ZW = {setStyle: gi, setStyles: bi, addRule: xi, pre: yY}, QW = function (t, i, n, e) {
        this.source = t, this.kind = i, this[gv] = e, this[kh] = n, this[Kk] = KY[n_]
    };
    E(QW, iY);
    var tq = function (t) {
        this.id = ++gH, this._n88 = {}, this._jc = {}, t && (this.$name = t)
    };
    tq.prototype = {
        _jc: null, getStyle: function (t) {
            return this._jc[t]
        }, setStyle: function (t, i) {
            var n = this._jc[t];
            return n === i || n && i && n.equals && n.equals(i) ? !1 : this[Jk](t, i, new QW(this, t, i, n), this._jc)
        }, putStyles: function (t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._jc[n] = e : this[e_](n, e)
            }
        }, _$p: !0, invalidateVisibility: function (t) {
            this._$p = !0, t || (this instanceof nq && this[Fk]() && this.forEachEdge(function (t) {
                t._$p = !0
            }), this._he() && this.hasChildren() && this[Hc](function (t) {
                t[mk]()
            }))
        }, onParentChanged: function () {
            this[mk]()
        }, _he: function () {
            return !this._4f && this instanceof rq
        }, invalidate: function () {
            this[wh](new tY(this, Zk, vT))
        }, _n84: null, addUI: function (t, i) {
            if (this[Qk] || (this[Qk] = new DH), t.id || (t.id = ++gH), this._n84[Il](t.id)) return !1;
            var n = {id: t.id, ui: t, bindingProperties: i};
            this[Qk].add(n);
            var e = new tY(this, Zk, Rv, n);
            return this[wh](e)
        }, removeUI: function (t) {
            if (!this[Qk]) return !1;
            var i = this[Qk][Pl](t.id || t);
            return i ? (this[Qk][Rh](i), void this[wh](new tY(this, Zk, Rh, i))) : !1
        }, clearUIs: function () {
            this[tO] && this.bindingUIs.toDatas()[Hu](function (t) {
                this[iO](t.ui)
            }.bind(this))
        }, toString: function () {
            return this[nO] || this.id
        }, type: eO, _4f: !1, _hd: !0, inGroup: function (t) {
            var i = Pe(this);
            return i == t || i && t instanceof rq && i[vc](t)
        }
    }, E(tq, cY), I(tq.prototype, [Mk, Th, MT, sO]), J(tq[vh], {
        enableSubNetwork: {
            get: function () {
                return this._4f
            }, set: function (t) {
                if (this._4f != t) {
                    var i = this._4f;
                    this._4f = t, this instanceof nq && this._$w(), this.onEvent(new iY(this, q_, t, i))
                }
            }
        }, bindingUIs: {
            get: function () {
                return this[Qk]
            }
        }, styles: {
            get: function () {
                return this._jc
            }, set: function (t) {
                if (this._jc != t) {
                    for (var i in this._jc) i in t || (t[i] = n);
                    this.putStyles(t), this._jc = t
                }
            }
        }
    }), XY.findGroup = Pe;
    var iq = function (t, i, n) {
        this.id = ++gH, this[Bv] = {}, this._jc = {}, n && (this.$name = n), this.$from = t, this.$to = i, this.connect()
    };
    iq[vh] = {
        $uiClass: Ts, _j3: null, _hi: null, _j6: null, _hg: null, _f1: !1, type: rO, otherNode: function (t) {
            return t == this.from ? this.to : t == this.to ? this[al] : void 0
        }, connect: function () {
            if (this._f1) return !1;
            if (!this[Ec] || !this.$to) return !1;
            if (this._f1 = !0, this.$from == this.$to) return void this[Ec]._hr(this);
            ze(this.$to, this), Fe(this[Ec], this), Oe(this.$from, this, this.$to);
            var t = this.fromAgent, i = this[ac];
            if (t != i) {
                var n;
                this.$from._dk && (Ae(t, this, i), n = !0), this.$to._dk && (Ie(i, this, t), n = !0), n && Oe(t, this, i)
            }
        }, disconnect: function () {
            if (!this._f1) return !1;
            if (this._f1 = !1, this.$from == this.$to) return void this[Ec]._n8g(this);
            Ge(this[Ec], this), He(this.$to, this), Se(this[Ec], this, this.$to);
            var t = this[cc], i = this.toAgent;
            if (t != i) {
                var n;
                this.$from._dk && (Me(t, this, i), n = !0), this.$to._dk && (Le(i, this, t), n = !0), n && Se(t, this, i)
            }
        }, isConnected: function () {
            return this._f1
        }, isInvalid: function () {
            return !this[Ec] || !this.$to
        }, isLooped: function () {
            return this[Ec] == this.$to
        }, getEdgeBundle: function (t) {
            return t ? this._2b() : this[lc]() ? this[Ec]._3w : this[Ec].getEdgeBundle(this.$to)
        }, hasEdgeBundle: function () {
            var t = this[oc](!0);
            return t && t[hO].length > 1
        }, _2b: function () {
            var t = this.fromAgent, i = this[ac];
            return t == i ? this[Ec]._dk || this.$to._dk ? null : this[Ec]._3w : this[cc][oc](this[ac])
        }, _91: null, hasPathSegments: function () {
            return this._91 && !this._91[jl]()
        }, isBundleEnabled: function () {
            return this[aO] && !this[N_]() && !this[R_]
        }, firePathChange: function (t) {
            this.onEvent(new iY(this, oO, t))
        }, addPathSegment: function (t, i, n) {
            var e = new LU(i || OU, t);
            this._91 || (this._91 = new DH), this._91.add(e, n), this[fO](e)
        }, addPathSegement: function () {
            return XY.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this[uO].apply(this, arguments)
        }, removePathSegmentByIndex: function (t) {
            if (!this._91) return !1;
            var i = this._91[hb](t);
            i && (this._91[Rh](i), this[fO](i))
        }, removePathSegment: function (t) {
            return this._91 ? (this._91.remove(t), void this[fO](t)) : !1
        }, movePathSegment: function (t, i, n) {
            if (!this._91) return !1;
            if (t = t || 0, i = i || 0, XY[Xm](n)) {
                var e = this._91[hb](n);
                return e ? (e.move(t, i), void this.firePathChange()) : !1
            }
            l(function (n) {
                n.move(t, i)
            }), this[fO]()
        }, move: function (t, i) {
            return this._91 ? (this._91[Hu](function (n) {
                n[bg](t, i)
            }, this), void this[fO]()) : !1
        }, validateEdgeBundle: function () {
        }
    }, E(iq, tq), J(iq[vh], {
        pathSegments: {
            get: function () {
                return this._91
            }, set: function (t) {
                XY[Xc](t) && (t = new DH(t)), this._91 = t, this[fO]()
            }
        }, from: {
            get: function () {
                return this[Ec]
            }, set: function (t) {
                if (this[Ec] != t) {
                    var i = new iY(this, al, t, this[Ec]);
                    this[Eh](i) !== !1 && (this[nb](), this[Ec] = t, this[cO](), this.onEvent(i))
                }
            }
        }, to: {
            get: function () {
                return this.$to
            }, set: function (t) {
                if (this.$to != t) {
                    var i = new iY(this, _O, t, this.$to);
                    this[Eh](i) !== !1 && (this[nb](), this.$to = t, this[cO](), this[wh](i))
                }
            }
        }, fromAgent: {
            get: function () {
                return this[Ec] ? this[Ec]._dk || this.$from : null
            }
        }, toAgent: {
            get: function () {
                return this.$to ? this.$to._dk || this.$to : null
            }
        }
    }), I(iq[vh], [R_, {name: aO, value: !0}, jm]);
    var nq = function (t, i, n) {
        2 == arguments[sh] && D(t) && (n = i, i = t, t = null), this.id = ++gH, this[Bv] = {}, this._jc = {}, t && (this[nO] = t), this[Uc] = dO, this[cu] = UH[rv], this[lO] = {
            x: i || 0,
            y: n || 0
        }, this[fc] = {}
    };
    nq.prototype = {
        $uiClass: ks, _dk: null, forEachEdge: function (t, i, n) {
            return !n && this._kf && this._kf[Hu](t, i) === !1 ? !1 : Ue(this, t, i)
        }, forEachOutEdge: function (t, i) {
            return We(this, t, i)
        }, forEachInEdge: function (t, i) {
            return qe(this, t, i)
        }, getEdges: function () {
            var t = [];
            return this.forEachEdge(function (i) {
                t.push(i)
            }), t
        }, _i7: null, _fb: null, _jg: null, _hp: null, _nbg: 0, _9j: 0, hasInEdge: function () {
            return null != this._i7
        }, hasOutEdge: function () {
            return null != this._fb
        }, hasEdge: function () {
            return null != this._i7 || null != this._fb || this[vO]()
        }, linkedWith: function (t) {
            return t[al] == this || t.to == this || t.fromAgent == this || t[ac] == this
        }, hasEdgeWith: function (t) {
            var i = this[oc](t);
            return i && i[hO][sh] > 0
        }, _kf: null, _3w: null, hasLoops: function () {
            return this._kf && this._kf[sh] > 0
        }, _hr: function (t) {
            return this._kf || (this._kf = new DH, this._3w = new pV(this, this, this._kf)), this._3w._im(t)
        }, _n8g: function (t) {
            return this._3w ? this._3w[uc](t) : void 0
        }, getEdgeBundle: function (t) {
            return t == this ? this._3w : this[fc][t.id] || t[fc][this.id]
        }, _6r: function () {
            return this._9e && this._9e[sh]
        }, _5c: function () {
            return this._85 && this._85[sh]
        }, _9h: function () {
            return this._6r() || this._5c()
        }, _85: null, _9e: null, _n8j: function () {
            var t = this._dk, i = ke(this);
            if (t != i) {
                var n = Ye(this);
                this._9a(i), n[Hu](function (t) {
                    var i = t.fromAgent, n = t[ac], t = t[Yc], e = t[Ec]._dk, s = t.$to._dk;
                    i != n && (i && Me(i, t, n || t.$to), n && Le(n, t, i || t[Ec])), e != s && (e && Ae(e, t, s || t.$to), s && Ie(s, t, e || t[Ec]), Oe(e || t.$from, t, s || t.$to))
                }, this)
            }
        }, onParentChanged: function () {
            XY.doSuper(this, nq, bO, arguments), this._n8j()
        }, _86: null, _$w: function () {
            var t;
            if (this._4f ? t = null : (t = this._dk, t || this._h4 !== !1 || (t = this)), this._86 == t) return !1;
            if (this._86 = t, this._ff && this._ff._jd[sh]) for (var i, n = this._ff._jd, e = 0, s = n[sh]; s > e; e++) i = n[e], i instanceof nq && i._9a(t)
        }, setLocation: function (t, i) {
            if (this[lO] && this[lO].x == t && this[lO].y == i) return !1;
            var n;
            n = this.$location ? {x: this[lO].x, y: this[lO].y} : this[lO];
            var e = new iY(this, yO, n, {x: t, y: i});
            return this[Eh](e) === !1 ? !1 : (this.$location ? (this.$location.x = t, this[lO].y = i) : this[lO] = new $H(t, i), this[wh](e), !0)
        }, _dw: null, addFollower: function (t) {
            return null == t ? !1 : t[gO] = this
        }, removeFollower: function (t) {
            return this._dw && this._dw[z_](t) ? t[gO] = null : !1
        }, hasFollowers: function () {
            return this._dw && !this._dw[jl]()
        }, toFollowers: function () {
            return this.hasFollowers() ? this._dw[Rl]() : null
        }, clearFollowers: function () {
            this[bc]() && (this[xO](), l(this[xO](), function (t) {
                t[gO] = null
            }))
        }, getFollowerIndex: function (t) {
            return this._dw && this._dw[z_](t) ? this._dw[dh](t) : -1
        }, setFollowerIndex: function (t, i) {
            return this._dw && this._dw[z_](t) ? void this._dw.setIndex(t, i) : -1
        }, getFollowerCount: function () {
            return this._dw ? this._dw[sh] : 0
        }, _9d: function () {
            return this._dw ? this._dw : (this._dw = new DH, this._dw)
        }, isFollow: function (t) {
            if (!t || !this._host) return !1;
            for (var i = this._host; i;) {
                if (i == t) return !0;
                i = i._host
            }
            return !1
        }, _9a: function (t) {
            return t == this._dk ? !1 : (this._dk = t, this.invalidateVisibility(), void this._$w())
        }, type: mO
    }, E(nq, tq), J(nq[vh], {
        loops: {
            get: function () {
                return this._kf
            }
        }, edgeCount: {
            get: function () {
                return this._nbg + this._9j
            }
        }, agentNode: {
            get: function () {
                return this._dk || this
            }
        }, host: {
            set: function (t) {
                if (this == t || t == this[pO]) return !1;
                var i = new iY(this, gO, this[pO], t);
                if (!1 === this[Eh](i)) return !1;
                var n = null, e = null, s = this[pO];
                if (null != t && (n = new iY(t, EO, null, this), !1 === t[Eh](n))) return !1;
                if (null != s && (e = new iY(s, wO, null, this), !1 === s[Eh](e))) return !1;
                if (this[pO] = t, null != t) {
                    var r = t._9d();
                    r.add(this)
                }
                if (null != s) {
                    var r = s._9d();
                    r[Rh](this)
                }
                return this[wh](i), null != t && t[wh](n), null != s && s[wh](e), !0
            }, get: function () {
                return this._host
            }
        }
    }), I(nq[vh], [yO, gT, Sm, Xo, TO]), J(nq.prototype, {
        x: {
            get: function () {
                return this[yO].x
            }, set: function (t) {
                t != this[yO].x && (this[yO] = new $H(t, this.location.y))
            }
        }, y: {
            get: function () {
                return this.location.y
            }, set: function (t) {
                t != this[yO].y && (this[yO] = new $H(this.location.x, t))
            }
        }
    });
    var eq = function (t, i) {
        t instanceof CU && (i = t, t = n), w(this, eq, [t]), this.path = i || new CU, this[TO] = null, this[Mk] = xr, RH[kO] || (RH[kO] = {}, RH.SHAPENODE_STYLES[oq[OO]] = !1), this[SO](RH[kO])
    };
    eq[vh] = {
        $uiClass: xr, type: AO, moveTo: function (t, i) {
            this[MO][df](t, i), this[fO]()
        }, lineTo: function (t, i) {
            this[MO][lf](t, i), this[fO]()
        }, quadTo: function (t, i, n, e) {
            this[MO][wc](t, i, n, e), this[fO]()
        }, curveTo: function (t, i, n, e, s, r) {
            this.path.curveTo(t, i, n, e, s, r), this[fO]()
        }, arcTo: function (t, i, n, e, s) {
            this[MO][nm](t, i, n, e, s), this.firePathChange()
        }, closePath: function () {
            this[MO][Kf](), this[fO]()
        }, clear: function () {
            this.path.clear(), this[fO]()
        }, removePathSegmentByIndex: function (t) {
            this[MO][IO](t) !== !1 && this[fO]()
        }, firePathChange: function () {
            this[MO]._6e = !0, this.onEvent(new iY(this, oO))
        }, addPathSegment: function (t, i, n) {
            this.path.add(new LU(i || OU, t), n), this[fO]()
        }
    }, E(eq, nq), J(eq[vh], {
        path: {
            get: function () {
                return this.image
            }, set: function (t) {
                this.image = t
            }
        }, pathSegments: {
            get: function () {
                return this.path[LO]
            }, set: function (t) {
                this[MO][LO] = t || [], this[fO]()
            }
        }, length: {
            get: function () {
                return this[MO][sh]
            }
        }
    }), XY[PO] = eq;
    var sq = {
        _jt: {}, register: function (t, i) {
            sq._jt[t] = i
        }, getShape: function (t, i, e, s, r, h) {
            s === n && (s = i, r = e, i = 0, e = 0), s || (s = 50), r || (r = 50);
            var a = sq._jt[t];
            return a ? a[CO] instanceof Function ? a[CO](i, e, s, r, h) : a : void 0
        }, getRect: function (t, i, n, e, s, r, h) {
            return t instanceof Object && La in t && (i = t.y, n = t[La], e = t[ua], s = t.rx, r = t.ry, h = t[MO], t = t.x), Ve(h || new CU, t, i, n, e, s, r)
        }, getAllShapes: function (t, i, n, e, s) {
            var r = {};
            for (var h in sq._jt) {
                var a = sq[O_](h, t, i, n, e, s);
                a && (r[h] = a)
            }
            return r
        }, createRegularShape: function (t, i, n, e, s) {
            return is(t, i, n, e, s)
        }
    };
    ls(), vs[vh] = {type: jO}, E(vs, eq), XY.Bus = vs, bs.prototype = {
        _h6: function (t) {
            var i, n = t._jy;
            i = n ? n._ff : this[tb];
            var e = i[dh](t);
            if (0 > e) throw new Error(rb + t + "' not exist in the box");
            for (; e >= 0;) {
                if (0 == e) return n instanceof nq ? n : null;
                e -= 1;
                var r = i[hb](e);
                if (r = s(r)) return r
            }
            return null
        }, forEachNode: function (t, i) {
            this[Hu](function (n) {
                return n instanceof nq && t[rh](i, n) === !1 ? !1 : void 0
            })
        }, _3o: null
    }, E(bs, dY), J(bs[vh], {
        propertyChangeDispatcher: {
            get: function () {
                return this._$o
            }
        }, currentSubNetwork: {
            get: function () {
                return this._3o
            }, set: function (t) {
                if (t && !t[q_] && (t = null), this._3o != t) {
                    var i = this._3o;
                    this._3o = t, this._$o.onEvent(new iY(this, RO, t, i))
                }
            }
        }
    }), RH[DO] = KY[NO], RH[BO] = 5, RH[$O] = !0, RH[FO] = {width: 60, height: 60};
    var rq = function (t, i, e) {
        w(this, rq, arguments), (i === n || e === n) && (this[lO][GO] = !0), this[zO] = RH[DO], this.$padding = RH.GROUP_PADDING, this[Uc] = DU[HO], this.$minSize = RH.GROUP_MIN_SIZE, this[Ik] = RH[$O]
    };
    rq[vh] = {
        type: YO, $uiClass: lr, _9q: function () {
            return !this._h4 && !this._dk
        }, forEachOutEdge: function (t, i, n) {
            return We(this, t, i) === !1 ? !1 : !n && this._9q() && this._85 ? this._85[Hu](t, i) : void 0
        }, forEachInEdge: function (t, i, n) {
            return qe(this, t, i) === !1 ? !1 : !n && this._9q() && this._9e ? this._9e.forEach(t, i) : void 0
        }, forEachEdge: function (t, i, n) {
            return T(this, rq, pc, arguments) === !1 ? !1 : n || n || !this._9q() ? void 0 : this._9e && this._9e[Hu](t, i) === !1 ? !1 : this._85 ? this._85[Hu](t, i) : void 0
        }, hasInEdge: function (t) {
            return t ? null != this._i7 : null != this._i7 || this._6r()
        }, hasOutEdge: function (t) {
            return t ? null != this._fb : null != this._fb || this._5c()
        }, hasEdge: function (t) {
            return t ? null != this._i7 || null != this._fb : null != this._i7 || null != this._fb || this._9h()
        }
    }, E(rq, nq), J(rq[vh], {
        expanded: {
            get: function () {
                return this._h4
            }, set: function (t) {
                if (this._h4 != t) {
                    var i = new iY(this, Ik, t, this._h4);
                    this[Eh](i) !== !1 && (this._h4 = t, this._$w(), this[wh](i), this._dk || ys[rh](this))
                }
            }
        }
    }), I(rq[vh], [UO, WO, wf, qO]), XY[VO] = rq, gs[vh][Vo] = XO, E(gs, nq), XY[KO] = gs;
    var hq = function (t) {
        this._jj = new HH, this._8c = new HH, this._fg = new HH, this.id = ++gH, t && (this.data = t)
    };
    hq[vh] = {
        invalidate: function () {
            this[Pk]()
        },
        _1a: !0,
        _jj: null,
        _8c: null,
        _fg: null,
        _nbq: !1,
        _jv: 1,
        _jx: 1,
        _hd: !0,
        _8d: 0,
        _6g: 0,
        _jy: null,
        _nbm: null,
        borderColor: JO,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _18: function () {
            this[ZO] = ci(this.anchorPosition, this._8d, this._6g)
        },
        setMeasuredBounds: function (t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t.height, t = t.width), this._jj[La] == t && this._jj[ua] == i && this._jj.x == n && this._jj.y == e ? !1 : void this._jj.set(n || 0, e || 0, t || 0, i || 0)
        },
        initialize: function () {
        },
        measure: function () {
        },
        draw: function () {
        },
        _87: function (t, i, n) {
            n.selectionType == KY[qx] ? (t[xd] = n[Jm], t.shadowBlur = n[QO] * i, t.shadowOffsetX = (n.selectionShadowOffsetX || 0) * i, t[wm] = (n.selectionShadowOffsetY || 0) * i) : this._1p(t, i, n)
        },
        _1p: function (t, i, n) {
            var e = n[tS] || 0;
            n.selectionBackgroundColor && (t[of] = n[iS], t[ff](this._8c.x - e / 2, this._8c.y - e / 2, this._8c[La] + e, this._8c[ua] + e)), t.strokeStyle = n[Jm], t[Uo] = e, t.strokeRect(this._8c.x - e / 2, this._8c.y - e / 2, this._8c[La] + e, this._8c.height + e)
        },
        _jl: function (t, i, n, e) {
            if (!this._hd) return !1;
            if (this.syncSelection || (n = this.selected), (n && !this[nS] || !e) && (e = this), t.save(), 1 != this[eS] && (t[_f] = this[eS]), t.translate(this.$x, this.$y), this[iu] && this.$_hostRotate && t.rotate(this[nu]), (this[sS] || this[rS]) && t.translate(this[sS], this[rS]), this.$rotate && t[Xo](this[tu]), this[Zf] && this[Qf] && t.translate(-this._nbm.x, -this[Qf].y), this.shadowColor && (t.shadowColor = this[xd], t[pm] = this[pm] * i, t[Em] = this[Em] * i, t.shadowOffsetY = this[wm] * i), n && e.selectionType == KY[hS] && (this._1p(t, i, e), n = !1), this._$m() && this[lu] && !this._ltShape[aS]) {
                this[lu][Do]();
                var s = {
                    lineWidth: this.$border,
                    strokeStyle: this[oS],
                    lineDash: this[fS],
                    lineDashOffset: this.borderLineDashOffset,
                    fillColor: this[uS],
                    fillGradient: this[cS],
                    lineCap: Nx,
                    lineJoin: Fo
                };
                this[lu][kf](t, i, s, n, e), n = !1, t.shadowColor = sp
            }
            t[uf](), this[kf](t, i, n, e), t[Ao]()
        },
        invalidateData: function () {
            this[_S] = !0, this.$invalidateSize = !0, this._1a = !0
        },
        invalidateSize: function () {
            this[su] = !0, this._1a = !0
        },
        invalidateRender: function () {
            this._1a = !0
        },
        _58: function () {
        },
        _$m: function () {
            return this[uS] || this[dS] || this.$border
        },
        _4m: function () {
            return this.$backgroundColor || this.$backgroundGradient
        },
        doValidate: function () {
            return this.$invalidateData && (this[_S] = !1, this[lS]() !== !1 && (this[su] = !0)), this[su] && this[vS] && this[vS](), Zn[rh](this) ? (this[Mu] = !0, this[bS] && this[bS](), !0) : this[yS] ? (this.$invalidateRotate = !0, this.$invalidateLocation = !1, !0) : void 0
        },
        validate: function () {
            var t = this._hd;
            return this.$invalidateVisibility && (this[gS] = !1, this._hd = this[xS], !this._hd || (this[Ou] || this.$showEmpty) && this._58() !== !1 || (this._hd = !1)), this._hd ? (this._1a = !1, this._nbq || (this[mS](), this[Wc] = !0), this[pS]()) : t != this._hd
        },
        _hm: function (t, i) {
            return t -= this.$x, i -= this.$y, Jn[rh](this, {x: t, y: i})
        },
        hitTest: function (t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._fg[$o](t, i, n)) return !1;
            var s = Jn[rh](this, {x: t, y: i});
            return t = s.x, i = s.y, !e && this._$m() && this[lu] && this._ltShape[W_](t, i, n, !1, this.$border, this[uS] || this.$backgroundGradient) ? !0 : this[ES](t, i, n)
        },
        doHitTest: function (t, i, n) {
            return this._jj[$o](t, i, n)
        },
        hitTestByBounds: function (t, i, n, e) {
            var s = this._hm(t, i);
            return !e && this._$m() && this._ltShape && this._ltShape.hitTest(t, i, n, !1, this.$border, this.$backgroundColor || this[dS]) ? !0 : this._jj.intersectsPoint(s.x, s.y, n)
        },
        onDataChanged: function () {
            this[_S] = !0, this._1a = !0, this[gS] = !0
        },
        getBounds: function () {
            var t = this._fg[ch]();
            return t[im](this.x, this.y), this[hc] && (this.parent.rotate && Pi(t, this[hc].rotate, t), t.offset(this[hc].x || 0, this[hc].y || 0)), t
        },
        destroy: function () {
            this[wS] = !0
        },
        _dp: !1
    }, J(hq.prototype, {
        originalBounds: {
            get: function () {
                return this._jj
            }
        }, data: {
            get: function () {
                return this.$data
            }, set: function (t) {
                if (this[Ou] != t) {
                    var i = this[Ou];
                    this[Ou] = t, this.onDataChanged(t, i)
                }
            }
        }, parent: {
            get: function () {
                return this._jy
            }
        }, showOnTop: {
            get: function () {
                return this._dp
            }, set: function (t) {
                t != this._dp && (this._dp = t, this._1a = !0, this._jy && this._jy[TS] && this._jy[TS](this))
            }
        }
    }), ms(hq[vh], {
        visible: {value: !0, validateFlags: [kS, OS]},
        showEmpty: {validateFlags: [kS]},
        anchorPosition: {value: UH[rv], validateFlags: [SS, OS]},
        position: {value: UH.CENTER_MIDDLE, validateFlags: [OS]},
        offsetX: {value: 0, validateFlags: [OS]},
        offsetY: {value: 0, validateFlags: [OS]},
        layoutByAnchorPoint: {value: !0, validateFlags: [Ag, SS, OS]},
        padding: {value: 0, validateFlags: [Ag]},
        border: {value: 0, validateFlags: [Ag]},
        borderRadius: {value: RH[Jx]},
        showPointer: {value: !1, validateFlags: [Ag]},
        pointerX: {value: 0, validateFlags: [Ag]},
        pointerY: {value: 0, validateFlags: [Ag]},
        pointerWidth: {value: RH[Zx]},
        backgroundColor: {validateFlags: [Ag]},
        backgroundGradient: {validateFlags: [Ag, AS]},
        selected: {value: !1, validateFlags: [Ag]},
        selectionBorder: {value: RH.SELECTION_BORDER, validateFlags: [Ag]},
        selectionShadowBlur: {value: RH.SELECTION_SHADOW_BLUR, validateFlags: [Ag]},
        selectionColor: {value: RH[Kx], validateFlags: [Ag]},
        selectionType: {value: RH[Wx], validateFlags: [Ag]},
        selectionShadowOffsetX: {value: 0, validateFlags: [Ag]},
        selectionShadowOffsetY: {value: 0, validateFlags: [Ag]},
        shadowBlur: {value: 0, validateFlags: [Ag]},
        shadowColor: {validateFlags: [Ag]},
        shadowOffsetX: {value: 0, validateFlags: [Ag]},
        shadowOffsetY: {value: 0, validateFlags: [Ag]},
        renderColorBlendMode: {},
        renderColor: {},
        x: {value: 0, validateFlags: [OS]},
        y: {value: 0, validateFlags: [OS]},
        rotatable: {value: !0, validateFlags: [MS, Ag]},
        rotate: {value: 0, validateFlags: [MS, Ag]},
        _hostRotate: {validateFlags: [MS]},
        lineWidth: {value: 0, validateFlags: [jg]},
        alpha: {value: 1}
    });
    var aq = [KY[t_], KY[n_], KY[i_]];
    Es[vh] = {
        removeBinding: function (t) {
            for (var i = aq[sh]; --i >= 0;) {
                var n = aq[i], e = this[n];
                for (var s in e) {
                    var r = e[s];
                    Array[Xc](r) ? (v(r, function (i) {
                        return i[Kc] == t
                    }, this), r[sh] || delete e[s]) : r[Kc] == t && delete e[s]
                }
            }
        }, _1q: function (t, i, n) {
            if (!n && (n = this[i.propertyType || KY.PROPERTY_TYPE_ACCESSOR], !n)) return !1;
            var e = n[t];
            e ? (Array[Xc](e) || (n[t] = e = [e]), e[_h](i)) : n[t] = i
        }, _2a: function (t, i, n, e, s, r) {
            t = t || KY.PROPERTY_TYPE_ACCESSOR;
            var h = this[t];
            if (!h) return !1;
            var a = {property: i, propertyType: t, bindingProperty: e, target: n, callback: s, invalidateSize: r};
            this._1q(i, a, h)
        }, onBindingPropertyChange: function (t, i, n, e) {
            var s = this[n || KY[t_]];
            if (!s) return !1;
            var r = s[i];
            return r ? (t._1a = !0, ps(t, r, n, e), !0) : !1
        }, initBindingProperties: function (t, i) {
            for (var e = aq[sh]; --e >= 0;) {
                var s = aq[e], r = this[s];
                for (var h in r) {
                    var a = r[h];
                    if (a[Zc]) {
                        var o = a[Kc];
                        if (o) {
                            if (!(o instanceof hq || (o = t[o]))) continue
                        } else o = t;
                        var f;
                        f = i === !1 ? t.getProperty(a[IS], s) : s == KY[n_] ? t[C_][__](t.$data, a[IS]) : t.$data[a.property], f !== n && (o[a[Zc]] = f)
                    }
                }
            }
        }
    };
    var oq = {};
    oq[Kx] = LS, oq[Vx] = PS, oq[Xx] = "selection.shadow.blur", oq[CS] = "selection.shadow.offset.x", oq.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y", oq[Wx] = jS, oq[RS] = DS, oq[NS] = "render.color.blend.mode", oq.ALPHA = BS, oq[$S] = FS, oq.SHADOW_COLOR = GS, oq[zS] = HS, oq.SHADOW_OFFSET_Y = YS, oq[US] = WS, oq[qS] = VS, oq.SHAPE_LINE_FILL_COLOR = "shape.stroke.fill.color", oq[XS] = KS, oq[JS] = "shape.line.dash.offset", oq.SHAPE_FILL_COLOR = ZS, oq[QS] = tA, oq[iA] = nA, oq[eA] = sA, oq[rA] = hA, oq[aA] = oA, oq[fA] = uA, oq[cA] = _A, oq.BORDER_COLOR = dA, oq[lA] = vA, oq[bA] = "border.line.dash.offset", oq[Jx] = yA, oq.PADDING = wf, oq[gA] = xA, oq[mA] = pA, oq[EA] = wA, oq[TA] = kA, oq[OA] = "image.background.color", oq[SA] = "image.background.gradient", oq[AA] = MA, oq[IA] = oq[LA] = PA, oq[CA] = "image.border.line.dash", oq[jA] = "image.border.line.dash.offset", oq[RA] = oq[DA] = NA, oq[BA] = $A, oq[FA] = GA, oq[zA] = HA, oq[YA] = UA, oq.LABEL_ROTATE = WA, oq[qA] = VA, oq[XA] = KA, oq[JA] = "label.anchor.position", oq[ZA] = QA, oq[tM] = iM, oq[nM] = eM, oq[sM] = rM, oq[hM] = aM, oq.LABEL_POINTER_WIDTH = oM, oq.LABEL_POINTER = fM, oq.LABEL_RADIUS = uM, oq[cM] = _M, oq[dM] = lM, oq[vM] = bM, oq[yM] = gM, oq.LABEL_BORDER = xM, oq[mM] = pM, oq[EM] = "label.background.color", oq.LABEL_BACKGROUND_GRADIENT = "label.background.gradient", oq[wM] = TM, oq.LABEL_SHADOW_BLUR = kM, oq[OM] = SM, oq[AM] = "label.shadow.offset.x", oq.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y", oq.LABEL_Z_INDEX = MM, oq[IM] = LM, oq.GROUP_BACKGROUND_COLOR = "group.background.color", oq[PM] = "group.background.gradient", oq[CM] = jM, oq.GROUP_STROKE_STYLE = RM, oq.GROUP_STROKE_LINE_DASH = "group.stroke.line.dash", oq.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset", oq[DM] = "edge.bundle.label.rotate", oq.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position", oq.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position", oq.EDGE_BUNDLE_LABEL_COLOR = "edge.bundle.label.color", oq[NM] = "edge.bundle.label.font.size", oq[BM] = "edge.bundle.label.font.family", oq.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style", oq.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding", oq.EDGE_BUNDLE_LABEL_POINTER_WIDTH = "edge.bundle.label.pointer.width", oq.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer", oq.EDGE_BUNDLE_LABEL_RADIUS = "edge.bundle.label.radius", oq[$M] = "edge.bundle.label.offset.x", oq[FM] = "edge.bundle.label.offset.y", oq[GM] = "edge.bundle.label.border", oq[zM] = "edge.bundle.label.border.color", oq[HM] = "edge.bundle.label.background.color", oq.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", oq[YM] = "edge.bundle.label.rotatable", oq[UM] = WM, oq[qM] = VM, oq[XM] = KM, oq[JM] = ZM,oq[QM] = tI,oq[iI] = "edge.line.dash.offset",oq[I_] = nI,oq[P_] = eI,oq.EDGE_FILL_COLOR = sI,oq[rI] = hI,oq.EDGE_BUNDLE_GAP = aI,oq[Y_] = oI,oq.EDGE_EXTEND = fI,oq[uI] = cI,oq[d_] = "edge.split.by.percent",oq[y_] = _I,oq.EDGE_SPLIT_VALUE = dI,oq[m_] = lI,oq[p_] = vI,oq[bI] = yI,oq.EDGE_TO_AT_EDGE = gI,oq[M_] = xI,oq[L_] = mI,oq[pI] = EI,oq[wI] = TI,oq[kI] = OI,oq[SI] = AI,oq.ARROW_FROM_STROKE_STYLE = "arrow.from.stroke.style",oq.ARROW_FROM_OUTLINE = MI,oq[II] = "arrow.from.outline.style",oq.ARROW_FROM_LINE_DASH = LI,oq.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset",oq.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color",oq[PI] = "arrow.from.fill.gradient",oq[CI] = jI,oq[RI] = DI,oq.ARROW_TO = NI,oq[BI] = $I,oq[FI] = GI,oq[zI] = HI,oq[YI] = "arrow.to.stroke.style",oq.ARROW_TO_OUTLINE = UI,oq.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style",oq[WI] = qI,oq.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset",oq[VI] = XI,oq.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient",oq[KI] = JI,oq.ARROW_TO_LINE_JOIN = ZI;
    var fq = new Es, uq = KY[t_], cq = KY.PROPERTY_TYPE_STYLE, _q = !1;
    fq._2a(cq, oq[Wx], null, ip), fq._2a(cq, oq[Vx], null, tS), fq._2a(cq, oq.SELECTION_SHADOW_BLUR, null, QO), fq._2a(cq, oq.SELECTION_COLOR, null, Jm), fq._2a(cq, oq.SELECTION_SHADOW_OFFSET_X, null, "selectionShadowOffsetX"), fq._2a(cq, oq[QI], null, "selectionShadowOffsetY"), fq._2a(uq, Th, tL, Yo), fq._2a(cq, oq[XA], tL, XT), fq._2a(cq, oq.LABEL_POSITION, tL, Tu), fq._2a(cq, oq.LABEL_ANCHOR_POSITION, tL, TO), fq._2a(cq, oq[ZA], tL, iL), fq._2a(cq, oq.LABEL_FONT_SIZE, tL, Nd), fq._2a(cq, oq.LABEL_BORDER, tL, Jg), fq._2a(cq, oq[mM], tL, oS), fq._2a(cq, oq[EM], tL, nL), fq._2a(cq, oq.LABEL_ON_TOP, tL, eL), _q || (fq._2a(cq, oq.SHADOW_BLUR, null, pm), fq._2a(cq, oq.SHADOW_COLOR, null, xd), fq._2a(cq, oq[zS], null, Em), fq._2a(cq, oq[sL], null, wm), fq._2a(cq, oq.LABEL_FONT_FAMILY, tL, Bd), fq._2a(cq, oq[sM], tL, Dd), fq._2a(cq, oq.LABEL_ALIGN_POSITION, tL, rL), fq._2a(cq, oq.LABEL_ROTATE, tL, Xo), fq._2a(cq, oq[hM], tL, wf), fq._2a(cq, oq[hL], tL, aL), fq._2a(cq, oq[oL], tL, uu), fq._2a(cq, oq[fL], tL, uL), fq._2a(cq, oq.LABEL_OFFSET_X, tL, sS), fq._2a(cq, oq.LABEL_OFFSET_Y, tL, rS), fq._2a(cq, oq.LABEL_ROTATABLE, tL, cL), fq._2a(cq, oq[_L], tL, du), fq._2a(cq, oq[vM], tL, gT), fq._2a(cq, oq[dL], tL, pm), fq._2a(cq, oq[OM], tL, xd), fq._2a(cq, oq.LABEL_SHADOW_OFFSET_X, tL, Em), fq._2a(cq, oq.LABEL_SHADOW_OFFSET_Y, tL, wm), fq._2a(cq, oq[lL], tL, MT), fq._2a(cq, oq.RENDER_COLOR, null, am), fq._2a(cq, oq.RENDER_COLOR_BLEND_MODE, null, Tm), fq._2a(cq, oq[vL], null, BS));
    var dq = new Es;
    dq._2a(uq, yO), dq._2a(uq, TO, null, bL), dq._2a(uq, Xo, null, Xo), _q || (dq._2a(cq, oq.BACKGROUND_COLOR, null, nL), dq._2a(cq, oq.BACKGROUND_GRADIENT, null, du), dq._2a(cq, oq[yL], null, wf), dq._2a(cq, oq[cA], null, Jg), dq._2a(cq, oq[Jx], null, uL), dq._2a(cq, oq[gL], null, oS), dq._2a(cq, oq[lA], null, fS), dq._2a(cq, oq[bA], null, xL)), dq._2a(uq, Sm, Sm, Yo, mL), dq._2a(uq, gT, Sm, gT), dq._2a(cq, oq[US], Sm, Uo), dq._2a(cq, oq.SHAPE_STROKE_STYLE, Sm, rf), dq._2a(cq, oq[pL], Sm, EL), dq._2a(cq, oq[rA], Sm, ku), _q || (dq._2a(cq, oq[zA], Sm, wL), dq._2a(cq, oq[iA], Sm, ep), dq._2a(cq, oq[eA], Sm, np), dq._2a(cq, oq.SHAPE_FILL_GRADIENT, Sm, rp), dq._2a(cq, oq.SHAPE_LINE_DASH, Sm, Iu), dq._2a(cq, oq[JS], Sm, ju), dq._2a(cq, oq[gA], Sm, gd), dq._2a(cq, oq[mA], Sm, fp), dq._2a(cq, oq[OA], Sm, nL), dq._2a(cq, oq.IMAGE_BACKGROUND_GRADIENT, Sm, du), dq._2a(cq, oq.IMAGE_PADDING, Sm, wf), dq._2a(cq, oq[AA], Sm, Jg), dq._2a(cq, oq[DA], Sm, uL), dq._2a(cq, oq.IMAGE_BORDER_COLOR, Sm, oS), dq._2a(cq, oq[CA], Sm, fS), dq._2a(cq, oq.IMAGE_BORDER_LINE_DASH_OFFSET, Sm, xL), dq._2a(cq, oq[FA], Sm, MT), dq._2a(cq, oq[YA], Sm, BS)), dq._2a(uq, Ik, null, null, TL), dq._2a(uq, q_, null, null, TL);
    var lq = new Es;
    lq._2a(uq, WO, null, null, kL), lq._2a(uq, qO, null, null, kL), lq._2a(uq, UO, null, null, kL), lq._2a(uq, wf, null, null, kL), lq._2a(cq, oq.GROUP_BACKGROUND_COLOR, OL, EL), lq._2a(cq, oq[PM], OL, rp), lq._2a(cq, oq[CM], OL, Uo), lq._2a(cq, oq[SL], OL, rf), lq._2a(cq, oq[AL], OL, Iu), lq._2a(cq, oq[ML], OL, ju);
    var vq = new Es;
    vq._2a(uq, al, OL, null, IL), vq._2a(uq, _O, OL, null, IL), vq._2a(uq, R_, OL, null, IL), vq._2a(cq, oq.EDGE_EXTEND, OL, null, IL), vq._2a(cq, oq[rI], OL, null, IL), vq._2a(cq, oq.EDGE_WIDTH, OL, Uo), vq._2a(cq, oq.EDGE_COLOR, OL, rf), vq._2a(cq, oq[pI], OL, LL), vq._2a(cq, oq.ARROW_TO, OL, PL), _q || (vq._2a(cq, oq[EA], OL, op), vq._2a(cq, oq.LINE_DASH_JOIN, OL, up), vq._2a(cq, oq[CL], OL, ap), vq._2a(cq, oq.EDGE_FROM_AT_EDGE, null, $_, IL), vq._2a(cq, oq[jL], null, F_, IL), vq._2a(cq, oq[XM], OL, ep), vq._2a(cq, oq[JM], OL, np), vq._2a(cq, oq[QM], OL, Iu), vq._2a(cq, oq[iI], OL, ju), vq._2a(cq, oq[uI], OL, null, IL), vq._2a(cq, oq[I_], OL, null, IL), vq._2a(cq, oq.EDGE_TO_OFFSET, OL, null, IL), vq._2a(cq, oq[M_], OL, null, IL), vq._2a(cq, oq.EDGE_TO_PORT, OL, null, IL), vq._2a(cq, oq[gA], OL, gd), vq._2a(cq, oq[mA], OL, fp), vq._2a(uq, oO, null, null, IL, !0), vq._2a(uq, jm, null, null, IL, !0), vq._2a(cq, oq[wI], OL, RL), vq._2a(cq, oq.ARROW_FROM_OFFSET, OL, DL), vq._2a(cq, oq[SI], OL, NL), vq._2a(cq, oq.ARROW_FROM_STROKE_STYLE, OL, BL), vq._2a(cq, oq[$L], OL, FL), vq._2a(cq, oq[II], OL, "fromArrowOutlineStyle"), vq._2a(cq, oq[GL], OL, zL), vq._2a(cq, oq[PI], OL, "fromArrowFillGradient"), vq._2a(cq, oq[HL], OL, YL), vq._2a(cq, oq.ARROW_FROM_LINE_DASH_OFFSET, OL, "fromArrowLineDashOffset"), vq._2a(cq, oq[RI], OL, UL), vq._2a(cq, oq[CI], OL, WL), vq._2a(cq, oq[BI], OL, qL), vq._2a(cq, oq[FI], OL, VL), vq._2a(cq, oq[zI], OL, XL), vq._2a(cq, oq[YI], OL, KL), vq._2a(cq, oq[JL], OL, ZL), vq._2a(cq, oq[QL], OL, tP), vq._2a(cq, oq[VI], OL, iP), vq._2a(cq, oq[nP], OL, eP), vq._2a(cq, oq[WI], OL, sP), vq._2a(cq, oq[rP], OL, "toArrowLineDashOffset"), vq._2a(cq, oq.ARROW_TO_LINE_JOIN, OL, hP), vq._2a(cq, oq[KI], OL, aP));
    var bq = new Es;
    bq._2a(cq, oq.EDGE_BUNDLE_LABEL_COLOR, oP, iL), bq._2a(cq, oq[fP], oP, Tu), bq._2a(cq, oq[uP], oP, TO), bq._2a(cq, oq[NM], oP, Nd), bq._2a(cq, oq[YM], oP, cL), _q || (bq._2a(cq, oq[DM], oP, Xo), bq._2a(cq, oq[BM], oP, Bd), bq._2a(cq, oq[cP], oP, Dd), bq._2a(cq, oq[_P], oP, wf), bq._2a(cq, oq[dP], oP, aL), bq._2a(cq, oq[lP], oP, uu), bq._2a(cq, oq[vP], oP, uL), bq._2a(cq, oq.EDGE_BUNDLE_LABEL_OFFSET_X, oP, sS), bq._2a(cq, oq[FM], oP, rS), bq._2a(cq, oq[GM], oP, Jg), bq._2a(cq, oq[zM], oP, oS), bq._2a(cq, oq[HM], oP, nL), bq._2a(cq, oq.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, oP, du));
    var yq = new Es;
    yq._2a(uq, yO), yq._2a(cq, oq[aA], null, nL), yq._2a(cq, oq[fA], null, du), yq._2a(cq, oq.PADDING, null, wf), yq._2a(cq, oq[cA], null, Jg), yq._2a(cq, oq.BORDER_RADIUS, null, uL), yq._2a(cq, oq[gL], null, oS), yq._2a(cq, oq[lA], null, fS), yq._2a(cq, oq[bA], null, xL), yq._2a(uq, Xo, null, Xo), yq._2a(uq, oO, null, null, bP), yq._2a(uq, MO, Sm, Yo), yq._2a(uq, gT, Sm, gT), yq._2a(cq, oq[US], Sm, Uo), yq._2a(cq, oq[qS], Sm, rf), yq._2a(cq, oq[pL], Sm, EL), yq._2a(cq, oq.SHAPE_FILL_GRADIENT, Sm, rp), _q || (yq._2a(cq, oq[EA], Sm, op), yq._2a(cq, oq[TA], Sm, up), yq._2a(cq, oq[yP], Sm, ap), yq._2a(cq, oq[iA], Sm, ep), yq._2a(cq, oq[eA], Sm, np), yq._2a(cq, oq[XS], Sm, Iu), yq._2a(cq, oq.SHAPE_LINE_DASH_OFFSET, Sm, ju), yq._2a(cq, oq.LINE_CAP, Sm, gd), yq._2a(cq, oq[mA], Sm, fp), yq._2a(cq, oq[rA], Sm, ku), yq._2a(cq, oq[OA], Sm, nL), yq._2a(cq, oq[SA], Sm, du), yq._2a(cq, oq[BA], Sm, wf), yq._2a(cq, oq[AA], Sm, Jg), yq._2a(cq, oq.IMAGE_BORDER_RADIUS, Sm, uL), yq._2a(cq, oq.IMAGE_BORDER_COLOR, Sm, oS), yq._2a(cq, oq[CA], Sm, fS), yq._2a(cq, oq.IMAGE_BORDER_LINE_DASH_OFFSET, Sm, xL), yq._2a(cq, oq[pI], Sm, LL), yq._2a(cq, oq.ARROW_FROM_SIZE, Sm, RL), yq._2a(cq, oq[kI], Sm, DL), yq._2a(cq, oq.ARROW_FROM_STROKE, Sm, NL), yq._2a(cq, oq[gP], Sm, BL), yq._2a(cq, oq[GL], Sm, zL), yq._2a(cq, oq[PI], Sm, "fromArrowFillGradient"), yq._2a(cq, oq[HL], Sm, YL), yq._2a(cq, oq[xP], Sm, "fromArrowLineDashOffset"), yq._2a(cq, oq[RI], Sm, UL), yq._2a(cq, oq[CI], Sm, WL), yq._2a(cq, oq.ARROW_TO_SIZE, Sm, qL), yq._2a(cq, oq[FI], Sm, VL), yq._2a(cq, oq[OO], Sm, PL), yq._2a(cq, oq[zI], Sm, XL), yq._2a(cq, oq.ARROW_TO_STROKE_STYLE, Sm, KL), yq._2a(cq, oq.ARROW_TO_FILL_COLOR, Sm, iP), yq._2a(cq, oq.ARROW_TO_FILL_GRADIENT, Sm, eP), yq._2a(cq, oq.ARROW_TO_LINE_DASH, Sm, sP), yq._2a(cq, oq.ARROW_TO_LINE_DASH_OFFSET, Sm, "toArrowLineDashOffset"), yq._2a(cq, oq.ARROW_TO_LINE_JOIN, Sm, hP), yq._2a(cq, oq.ARROW_TO_LINE_CAP, Sm, aP));
    var gq = function (t, i) {
        return t = t[MT], i = i[MT], t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    }, xq = function (t, i) {
        this[Cd] = new HH, w(this, xq, arguments), this.id = this.$data.id, this.graph = i, this._ff = [], this._n9v = new Es
    };
    xq[vh] = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _n9v: null,
        _ff: null,
        addChild: function (t, i) {
            t._jy = this, i !== n ? g(this._ff, t, i) : this._ff[_h](t), t._dp && this[TS](t), this[mP](), this.invalidateSize(), this[pP] = !0
        },
        removeChild: function (t) {
            this[EP][wP](t), t._jy = null, x(this._ff, t), this._k6 && this._k6.remove(t), this[TP](), this[pP] = !0
        },
        getProperty: function (t, i) {
            return i == KY[n_] ? this[C_][__](this.$data, t) : i == KY[i_] ? this[Ou].get(t) : this[Ou][t]
        },
        getStyle: function (t) {
            return this[C_].getStyle(this[Ou], t)
        },
        _$r: function (t, i, n) {
            var e = this._n9v.onBindingPropertyChange(this, t, i, n);
            return fq[kP](this, t, i, n) || e
        },
        onPropertyChange: function (t) {
            if (MT == t[el]) return this.invalidateRender(), !0;
            if (Zk == t[Vo]) {
                if (vT == t[el]) return this[vT](), !0;
                var i = t.value;
                return i && i.ui ? (Rv == t.kind ? this._9o(i) : Rh == t[el] && this[sb](i.ui), !0) : !1
            }
            return this._$r(t.kind, t[Kk] || uq, t.value)
        },
        label: null,
        initLabel: function () {
            var t = new pq;
            t[Th] = tL, this[OP](t), this.label = t
        },
        initialize: function () {
            this[SP](), this.$data[Qk] && this[Ou][Qk][Hu](this._9o, this), fq[AP](this), this._n9v.initBindingProperties(this, !1)
        },
        addBinding: function (t, i) {
            return i.property ? (i.target = t, void this[EP]._1q(i[IS], i)) : !1
        },
        _g6: function (t, i) {
            var n = this.$data;
            if (!n[Qk]) return !1;
            var e = n._n84[Pl](t.id);
            if (!e || !e[MP]) return !1;
            var s = e.bindingProperties;
            if ($(s)) {
                var r = !1;
                return l(s, function (t) {
                    return Yo == t[Zc] ? (r = ws(n, i, t[IS], t.propertyType), !1) : void 0
                }, this), r
            }
            return Yo == s.bindingProperty ? ws(n, i, s[IS], s[Kk]) : !1
        },
        _9o: function (t) {
            var i = t.ui;
            if (i) {
                var n = t[MP];
                n && (Array.isArray(n) ? n[Hu](function (t) {
                    this[IP](i, t)
                }, this) : this.addBinding(i, n)), this[OP](i)
            }
        },
        validate: function () {
            return this._nbq || (this[mS](), this[Wc] = !0), this.doValidate()
        },
        _8: !0,
        invalidateChildrenIndex: function () {
            this._8 = !0
        },
        doValidate: function () {
            if (this._1a && (this._1a = !1, this[LP]() && (this[lS](), this[su] = !0), this._8 && (this._8 = !1, SH ? this._ff = d(this._ff, gq) : this._ff.sort(gq))), Zn.call(this) && (this[Mu] = !0), this[Mu]) {
                BU.call(this), this.uiBounds[hu](this._fg);
                var t = this[PP] || 0, i = Math.max(this[PP] || 0, this[CP] || 0, this.$selectionShadowOffsetX || 0),
                    n = Math.max(this[jP] || 0, this[RP] || 0),
                    e = Math.max(2 * t, this[DP], this.$selectionShadowBlur);
                e += RH[NP] || 0;
                var s = e - i, r = e + i, h = e - n, a = e + n;
                return 0 > s && (s = 0), 0 > r && (r = 0), 0 > h && (h = 0), 0 > a && (a = 0), this.uiBounds[fu](h, s, a, r), this[bS] && this.onBoundsChanged(), this.$invalidateBounds = !0, !0
            }
        },
        validateChildren: function () {
            var t = this[pP];
            this.$invalidateChild = !1;
            var i = this._n9ody, n = this.bodyChanged;
            i && (i[BP] = this[BP], i[$P] = this[$P], i[FP] = this[FP], i[DP] = this.$shadowBlur, i[CP] = this.$shadowOffsetX, i[jP] = this.$shadowOffsetY), this[GP] = !1, i && i._1a && (n = i[Do]() || n, i.$x = 0, i.$y = 0, i.$invalidateRotate && BU.call(i), t = !0);
            for (var e = 0, s = this._ff[sh]; s > e; e++) {
                var r = this._ff[e];
                if (r != i) {
                    var h = r._1a && r.validate();
                    (h || n) && r._hd && ne(r, i, this), !t && h && (t = !0)
                }
            }
            return t
        },
        measure: function () {
            this._jj[so]();
            for (var t, i, n = 0, e = this._ff[sh]; e > n; n++) t = this._ff[n], t._hd && (i = t._fg, i[La] <= 0 || i.height <= 0 || this._jj[Ok](t.$x + i.x, t.$y + i.y, i[La], i[ua]))
        },
        _k6: null,
        _n99: function (t) {
            if (!this._k6) {
                if (!t[eL]) return;
                return this._k6 = new DH, this._k6.add(t)
            }
            return t[eL] ? this._k6.add(t) : this._k6[Rh](t)
        },
        draw: function (t, i, n) {
            for (var e, s = 0, r = this._ff[sh]; r > s; s++) e = this._ff[s], e._hd && !e[eL] && e._jl(t, i, n, this)
        },
        _97: function (t, i) {
            if (!this._hd || !this._k6 || !this._k6.length) return !1;
            t[go](), t[xo](this.$x, this.$y), this[iu] && this[nu] && t.rotate(this[nu]), (this[sS] || this[rS]) && t[xo](this[sS], this.offsetY), this[tu] && t.rotate(this.$rotate), this[Zf] && this[Qf] && t[xo](-this._nbm.x, -this._nbm.y), this[xd] && (t[xd] = this[xd], t[pm] = this[pm] * i, t[Em] = this.shadowOffsetX * i, t.shadowOffsetY = this[wm] * i), t[uf]();
            for (var n, e = 0, s = this._ff[sh]; s > e; e++) n = this._ff[e], n._hd && n.showOnTop && n._jl(t, i, this[Sk], this);
            t[Ao]()
        },
        doHitTest: function (t, i, n) {
            if (n) {
                if (!this._jj[Wl](t - n, i - n, 2 * n, 2 * n)) return !1
            } else if (!this._jj.intersectsPoint(t, i)) return !1;
            return this[zP](t, i, n)
        },
        hitTestChildren: function (t, i, n) {
            for (var e, s = this._ff[sh] - 1; s >= 0; s--) if (e = this._ff[s], e._hd && e[W_](t, i, n)) return e;
            return !1
        },
        destroy: function () {
            this[wS] = !0;
            for (var t, i = this._ff[sh] - 1; i >= 0; i--) t = this._ff[i], t.destroy()
        }
    }, E(xq, hq), J(xq[vh], {
        renderColorBlendMode: {
            get: function () {
                return this[$P]
            }, set: function (t) {
                this.$renderColorBlendMode = t, this._1a = !0, this[ym] && (this[ym][Tm] = this[$P])
            }
        }, renderColor: {
            get: function () {
                return this[BP]
            }, set: function (t) {
                this[BP] = t, this._1a = !0, this[ym] && (this[ym][am] = this[BP])
            }
        }, bodyBounds: {
            get: function () {
                if (this.$invalidateBounds) {
                    this.$invalidateBounds = !1;
                    var t, i = this[ym];
                    t = i && i._hd && !this._$m() ? i._fg[ch]() : this._8c[ch](), this.rotate && (t[HP] = t[ch](), t[Xo] = this[Xo], t.tx = this.x, t.ty = this.y, Pi(t, this[Xo], t)), t.x += this.$x, t.y += this.$y, this[YP] = t
                }
                return this[YP]
            }
        }, bounds: {
            get: function () {
                return new HH((this.$x || 0) + this.uiBounds.x, (this.$y || 0) + this[Cd].y, this[Cd][La], this[Cd][ua])
            }
        }, body: {
            get: function () {
                return this._n9ody
            }, set: function (t) {
                t && this[UP] != t && (this._n9ody = t, this.bodyChanged = !0, this[TP]())
            }
        }
    }), RH[NP] = 1;
    var mq = function () {
        w(this, mq, arguments)
    };
    mq.prototype = {
        strokeStyle: WP,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _jv: 1,
        _jx: 1,
        outline: 0,
        onDataChanged: function (t) {
            T(this, mq, qP, arguments), this._kh && this._81 && this._kh._6x(this._81, this), t && this[mL](t)
        },
        _n8d: function (t) {
            this._kh = On(t), this._kh[Do](), (this._kh._lm == fU || this._kh._6k()) && (this._81 || (this._81 = function () {
                this.invalidateData(), this._jy && this._jy.graph && (this._jy[TP](), this._jy.graph[vT]())
            }), this._kh[Of](this._81, this))
        },
        _kh: null,
        initialize: function () {
            this[mL](this.$data)
        },
        _58: function () {
            return this._kh && this._kh[kf]
        },
        _90: function (t) {
            if (!t || t[La] <= 0 || t[ua] <= 0 || !this.$size || !(this[gT] instanceof Object)) return this._jv = 1, void(this._jx = 1);
            var i = this[gT].width, e = this[gT][ua];
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._jv = 1, void(this._jx = 1);
            var s, r, h = t[La], a = t.height;
            i >= 0 && (s = i / h), e >= 0 && (r = e / a), 0 > i ? s = r : 0 > e && (r = s), this._jv = s, this._jx = r
        },
        validateSize: function () {
            if (this[VP]) {
                this[VP] = !1;
                var t = this._originalBounds;
                this._jv, this._jx, this._90(t), this[XP](t[La] * this._jv, t.height * this._jx, t.x * this._jv, t.y * this._jx)
            }
        },
        measure: function () {
            var t = this._kh[Bo](this[Uo] + this[ep]);
            return t ? (this.$invalidateScale = !0, void(this[KP] = t[ch]())) : void this._jj.set(0, 0, 0, 0)
        },
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _1o: function () {
            this.$invalidateFillGradient = !1, this._fillGradient = this[rp] ? bU.prototype[vu][rh](this[JP], this._8c) : null
        },
        _ka: function (t) {
            var i, n;
            if (Vg == this[ZP]) i = 1, n = -1; else {
                if (Xg != this[ZP]) return;
                i = -1, n = 1
            }
            var e = this._jj.cx, s = this._jj.cy;
            t[xo](e, s), t.scale(i, n), t.translate(-e, -s)
        },
        draw: function (t, i, n, e) {
            if (this._jv && this._jx) {
                if (this.$invalidateFillGradient && this._1o(), t[go](), this[ZP] && this._ka(t), this._kh._lm == cU) return t[mo](this._jv, this._jx), this._kh._ln[kf](t, i, this, n, e || this), void t[Ao]();
                n && this._87(t, i, e), this._kh.draw(t, i, this, this._jv, this._jx), t[Ao]()
            }
        },
        doHitTest: function (t, i, n) {
            if (this._kh[W_]) {
                if (Vg == this[ZP]) {
                    var e = this._jj.cy;
                    i = 2 * e - i
                } else if (Xg == this.$adjustType) {
                    var s = this._jj.cx;
                    t = 2 * s - t
                }
                t /= this._jv, i /= this._jx;
                var r = (this._jv + this._jx) / 2;
                return r > 1 && (n /= r, n = 0 | n), this._kh._ln instanceof CU ? this._kh._ln[W_](t, i, n, !0, this.$lineWidth, this[QP] || this[JP]) : this._kh[W_](t, i, n)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, E(mq, hq), ms(mq.prototype, {
        adjustType: {},
        fillColor: {},
        size: {validateFlags: [Ag, tC]},
        fillGradient: {validateFlags: [iC]}
    }), J(mq[vh], {
        originalBounds: {
            get: function () {
                return this[KP]
            }
        }
    }), RH.ALIGN_POSITION = UH[rv];
    var pq = function () {
        w(this, pq, arguments), this[iL] = RH[ZA]
    };
    pq[vh] = {
        color: RH.LABEL_COLOR,
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _gy: null,
        alignPosition: null,
        measure: function () {
            this.font;
            var t = Fi(this[Ou], this.$fontSize, this.$fontFamily, this.$fontStyle, RH.LINE_HEIGHT, this[nC]);
            if (this._gy = t, this[eC]) {
                var i = this.$size[La] || 0, n = this.$size.height || 0;
                return this.setMeasuredBounds(i > t[La] ? i : t[La], n > t[ua] ? n : t[ua])
            }
            return this[XP](t.width, t[ua])
        },
        doHitTest: function (t, i, n) {
            return this[Ou] ? $n(t, i, n, this) : !1
        },
        draw: function (t, i, n, e) {
            if (n && this._87(t, i, e), this[sC] || RH[Eo], this.$rotatable && this[nu]) {
                var s = vn(this.$_hostRotate);
                s > NH && 3 * NH > s && (t[xo](this._jj[La] / 2, this._jj.height / 2), t[Xo](Math.PI), t[xo](-this._jj[La] / 2, -this._jj[ua] / 2))
            }
            var r = this[rL] || RH[rC], h = r.horizontalPosition, a = r[_a], o = 0;
            h == qH ? (h = hC, o += this._jj[La] / 2) : h == VH ? (h = aa, o += this._jj[La]) : h = Tf;
            var f = 0;
            a == KH ? f = (this._jj[ua] - this._gy[ua]) / 2 : a == JH && (f = this._jj[ua] - this._gy[ua]), t.fillStyle = this[iL], $i(t, this.$data, o, f, h, this[aC], this.$fontSize, this[oC], RH[po], this[nC])
        },
        _58: function () {
            return null != this[Ou] || this[eC]
        },
        $invalidateFont: !0
    }, E(pq, hq), ms(pq[vh], {
        size: {validateFlags: [jg]},
        fontStyle: {validateFlags: [jg, fC]},
        fontSize: {validateFlags: [jg, fC]},
        fontFamily: {validateFlags: [jg, fC]}
    }), J(pq[vh], {
        font: {
            get: function () {
                return this[uC] && (this[uC] = !1, this[nC] = (this[oC] || RH[vo]) + jh + (this[sC] || RH[Eo]) + bo + (this[aC] || RH[yo])), this[nC]
            }
        }
    });
    var Eq = function (t) {
        t = t || new CU, this[cC] = new HH, w(this, Eq, [t])
    };
    Eq[vh] = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this[_C] = !0, this[dC] = !0, this[Ou].getBounds(this[lC] + this.$outline, this[cC]), this[XP](this[cC])
        },
        validateSize: function () {
            if (this.$invalidateFromArrow || this[dC]) {
                var t = this[cC][ch]();
                if (this.$invalidateFromArrow) {
                    this[_C] = !1;
                    var i = this.validateFromArrow();
                    i && t.add(i)
                }
                if (this[dC]) {
                    this[dC] = !1;
                    var i = this[vC]();
                    i && t.add(i)
                }
                this[XP](t)
            }
        },
        validateFromArrow: function () {
            if (!this.$data._iy || !this.$fromArrow) return void(this[bC] = null);
            var t = this[Ou], i = 0, n = 0, e = this[yC];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._iy)), this[gC] = t[If](i, n), this.fromArrowLocation[Xo] = Math.PI + this[gC][Xo] || 0, this.$fromArrowShape = Xs(this[xC], this.$fromArrowSize);
            var s = this[bC][Bo](this[mC][Uo] + this.fromArrowStyles[ep]);
            return this.fromArrowFillGradient instanceof XY.Gradient ? this[mC][hp] = bU[vh][vu][rh](this[pC], s) : this.fromArrowStyles && (this[mC][hp] = null), s[im](this[gC].x, this[gC].y), Ci(s, this[gC].rotate, s, this.fromArrowLocation.x, this[gC].y), s
        },
        validateToArrow: function () {
            if (!this[Ou]._iy || !this.$toArrow) return void(this[EC] = null);
            var t = this[Ou], i = 0, n = 0, e = this[wC];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._iy), i += t._iy, this.toArrowLocation = t.getLocation(i, n), this.$toArrowShape = Xs(this[TC], this[kC]);
            var s = this[EC].getBounds(this[OC][Uo] + this[OC][ep]);
            return this.toArrowFillGradient instanceof XY[SC] ? this[OC][hp] = bU[vh].generatorGradient.call(this[eP], s) : this[OC] && (this[OC][hp] = null), s[im](this[AC].x, this.toArrowLocation.y), Ci(s, this[AC][Xo], s, this[AC].x, this[AC].y), s
        },
        _22: function (t) {
            var i = t ? "from" : _O, e = this[i + MC];
            e === n && (e = this.$lineWidth);
            var s = this[i + IC];
            s === n && (s = this.strokeStyle);
            var r = this[i + LC];
            r || (this[i + LC] = r = {}), r.lineWidth = e, r.strokeStyle = s, r.lineDash = this[i + PC], r[ju] = this[i + CC], r[EL] = this[i + jC], r[rp] = this[i + RC], r[gd] = this[i + DC], r[fp] = this[i + NC], r[ep] = this[i + BC] || 0, r[np] = this[i + $C]
        },
        doValidate: function () {
            return this.$fromArrow && this._22(!0), this[TC] && this._22(!1), T(this, Eq, pS)
        },
        drawArrow: function (t, i, n, e) {
            if (this[xC] && this.$fromArrowShape) {
                t.save();
                var s = this[gC], r = s.x, h = s.y, a = s[Xo];
                t.translate(r, h), a && t[Xo](a), this[bC][kf](t, i, this.fromArrowStyles, n, e), t.restore()
            }
            if (this[TC] && this.$toArrowShape) {
                t.save();
                var s = this.toArrowLocation, r = s.x, h = s.y, a = s[Xo];
                t.translate(r, h), a && t[Xo](a), this.$toArrowShape.draw(t, i, this.toArrowStyles, n, e), t[Ao]()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this[FC] = !0
        },
        _1o: function () {
            this[FC] = !1, this._fillGradient = this[JP] ? bU.prototype.generatorGradient[rh](this.$fillGradient, this._8c) : null
        },
        draw: function (t, i, n, e) {
            this[FC] && this._1o(), this[Ou].draw(t, i, this, n, e), this.drawArrow(t, i, n, e)
        },
        doHitTest: function (t, i, n) {
            if (this[Ou].hitTest(t, i, n, !0, this.$lineWidth + this.$outline, this[QP] || this[JP])) return !0;
            if (this.$toArrow && this.$toArrowShape) {
                var e = t - this[AC].x, s = i - this[AC].y;
                if (this[AC].rotate) {
                    var r = Mi(e, s, -this[AC].rotate);
                    e = r.x, s = r.y
                }
                var h = this[OC][EL] || this[OC][rp];
                if (this.$toArrowShape[W_](e, s, n, !0, this[OC].lineWidth, h)) return !0
            }
            if (this.$fromArrow && this[bC]) {
                var e = t - this[gC].x, s = i - this[gC].y;
                if (this.fromArrowLocation[Xo]) {
                    var r = Mi(e, s, -this[gC].rotate);
                    e = r.x, s = r.y
                }
                var h = this[mC][EL] || this[mC].fillGradient;
                if (this.$fromArrowShape[W_](e, s, n, !0, this.fromArrowStyles.lineWidth, h)) return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, E(Eq, hq), ms(Eq[vh], {
        strokeStyle: {validateFlags: [GC, zC]},
        fillColor: {},
        fillGradient: {validateFlags: [iC]},
        fromArrowOffset: {validateFlags: [GC, Ag]},
        fromArrowSize: {validateFlags: [GC, Ag]},
        fromArrow: {validateFlags: [GC, Ag]},
        fromArrowOutline: {validateFlags: [GC, Ag]},
        fromArrowStroke: {validateFlags: [GC, Ag]},
        fromArrowStrokeStyle: {validateFlags: [GC]},
        toArrowOffset: {validateFlags: [zC, Ag]},
        toArrowSize: {validateFlags: [zC, Ag]},
        toArrow: {validateFlags: [zC, Ag]},
        toArrowOutline: {validateFlags: [zC, Ag]},
        toArrowStroke: {validateFlags: [zC, Ag]},
        toArrowStrokeStyle: {validateFlags: [zC]},
        outline: {value: 0, validateFlags: [jg]}
    }), J(Eq[vh], {
        length: {
            get: function () {
                return this[Yo][sh]
            }
        }
    }), Ts[vh] = {
        shape: null, path: null, initialize: function () {
            T(this, Ts, mS), this[MO] = new CU, this[MO]._da = !1, this[OL] = new Eq(this.path), this[OP](this[OL], 0), this[UP] = this[OL], vq[AP](this)
        }, _1l: !0, _5i: null, _$m: function () {
            return !1
        }, _4m: function () {
            return !1
        }, validatePoints: function () {
            this.shape[Pk]();
            var t = this[Ou], i = this[MO];
            i[so]();
            var n = t[cc], e = t[ac];
            n && e && nr(this, t, i, n, e)
        }, getEndPointBounds: function (t) {
            return t.getLinkableBounds()
        }, _3i: function (t, i, n, e, s, r, h, a, o) {
            return t[N_]() ? void(i.segments = t.pathSegments.toDatas()) : n == e ? void this[B_](i, n, s, r, a, o) : void this[HC](i, n, e, s, r, h, a, o)
        }, drawLoopedEdge: function (t, i, n, e) {
            hr(this, e, t)
        }, drawEdge: function (t, i, n, e, s, r, h, a) {
            if (e == KY[YC]) {
                var o = (h.x + a.x) / 2, f = (h.y + a.y) / 2, u = h.x - a.x, c = h.y - a.y,
                    _ = Math.sqrt(u * u + c * c), d = Math.atan2(c, u);
                d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
                var l = Math.cos(d) * _, v = Math.sin(d) * _;
                return t[lf](o - v, f + l), void t[lf](o + v, f - l)
            }
            var b = rr(this, this.data, s, r, i, n, h, a);
            b && (t._f6 = b)
        }, _1v: function () {
            if (!this[Yo][UC]()) return null;
            var t = this.data.getEdgeBundle(!0);
            if (!t || !t[WC](this[C_]) || !t._h4) return null;
            var i = t.getYOffset(this);
            return t[qC](this[Ou]) || (i = -i), i
        }, checkBundleLabel: function () {
            var t = this.getBundleLabel();
            return t ? (this[oP] || this.createBundleLabel(), this.bundleLabel._hd = !0, void(this[oP][Yo] = t)) : void(this[oP] && (this[oP]._hd = !1, this.bundleLabel.data = null))
        }, createBundleLabel: function () {
            var t = new pq;
            t[VC] = !1, this[oP] = t, this.addChild(this[oP]), bq[AP](this)
        }, getBundleLabel: function () {
            return this[C_][XC](this.data)
        }, doValidate: function () {
            return this._1l && (this._1l = !1, this.validatePoints()), this[KC](), T(this, Ts, pS)
        }, _4o: function () {
            this._1l = !0, this[TP]()
        }, _$r: function (t, i, n) {
            var e = this._n9v[kP](this, t, i, n);
            return e = fq.onBindingPropertyChange(this, t, i, n) || e, this[oP] && this[oP][Ou] && (e = bq.onBindingPropertyChange(this, t, i, n) || e), vq.onBindingPropertyChange(this, t, i, n) || e
        }
    }, E(Ts, xq), Ts[JC] = function (t, i, n, e) {
        if (t.moveTo(i.x, i.y), !e || e == KY.EDGE_TYPE_DEFAULT) return void t[lf](n.x, n.y);
        if (e == KY.EDGE_TYPE_VERTICAL_HORIZONTAL) t[lf](i.x, n.y); else if (e == KY.EDGE_TYPE_HORIZONTAL_VERTICAL) t[lf](n.x, i.y); else if (0 == e.indexOf(KY[ZC])) {
            var s;
            s = e == KY[h_] ? !0 : e == KY.EDGE_TYPE_ORTHOGONAL_VERTICAL ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
            var r = (i.x + n.x) / 2, h = (i.y + n.y) / 2;
            s ? (t[lf](r, i.y), t[lf](r, n.y)) : (t[lf](i.x, h), t[lf](n.x, h))
        } else if (0 == e[dh](KY[v_])) {
            var s, a = wq[oq.EDGE_EXTEND] || 0;
            s = e == KY[r_] ? !0 : e == KY.EDGE_TYPE_ELBOW_VERTICAL ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y), s ? (t[lf](i.x + a, i.y), t[lf](n.x - a, n.y)) : (t[lf](i.x, i.y + a), t[lf](n.x, n.y - a))
        } else if (0 == e[dh](QC)) {
            var a = wq[oq[s_]] || 0;
            if (e == KY.EDGE_TYPE_EXTEND_TOP) {
                var o = Math.min(i.y, n.y) - a;
                t[lf](i.x, o), t[lf](n.x, o)
            } else if (e == KY.EDGE_TYPE_EXTEND_BOTTOM) {
                var o = Math.max(i.y, n.y) + a;
                t.lineTo(i.x, o), t.lineTo(n.x, o)
            } else if (e == KY[o_]) {
                var f = Math.min(i.x, n.x) - a;
                t[lf](f, i.y), t[lf](f, n.y)
            } else if (e == KY[f_]) {
                var f = Math.max(i.x, n.x) + a;
                t[lf](f, i.y), t.lineTo(f, n.y)
            }
        } else if (e == KY[YC]) {
            var r = (i.x + n.x) / 2, h = (i.y + n.y) / 2, u = i.x - n.x, c = i.y - n.y, _ = Math.sqrt(u * u + c * c),
                d = Math[Po](c, u);
            d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
            var l = Math.cos(d) * _, v = Math.sin(d) * _;
            t[lf](r - v, h + l), t.lineTo(r + v, h - l)
        }
        t[lf](n.x, n.y)
    }, J(Ts[vh], {
        length: {
            get: function () {
                return this.path ? this[MO].length : 0
            }
        }
    }), Ts[vh][ro] = function (t, i, n) {
        var e = Pn(this[MO], t, i, this[Yo].addSegmentType, n);
        if (!e) return !1;
        var s = e.segments;
        if (s[sh] > 2) {
            var r = this[Yo], h = s[s.length - 1];
            h[Vo] == OU ? r.pathSegments = s.splice(1, s[sh] - 2) : (e.atEnd && (h[jf] = !0), r[tj] = s[oh](1, s[sh] - 1))
        }
    }, ks.prototype = {
        _2k: null, image: null, initialize: function () {
            T(this, ks, mS), this[ij](), dq.initBindingProperties(this)
        }, _n8d: function () {
            this[Yo].image ? this[Sm] && (this[ym] = this[Sm]) : this[tL] && (this.body = this.label)
        }, _n9h: function () {
            this.image = new mq, this[OP](this.image, 0), this._n8d()
        }, doValidate: function () {
            this[ym] && (this instanceof lr && !this.$data[qO] && this._5b() ? this.body[Zf] = !1 : (this[ym][Zf] = null != this._2k, this[ym][TO] = this._2k));
            var t = this.$data.$location, i = 0, n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[nj] = !0), this.$x = i, this.$y = n, xq.prototype[pS].call(this) || e
        }, _$r: function (t, i, n) {
            var e = this._n9v[kP](this, t, i, n);
            return e = fq.onBindingPropertyChange(this, t, i, n) || e, dq[kP](this, t, i, n) || e
        }, getLinkablePorts: function () {
            return this[Yo].linkablePorts
        }, getLinkableBounds: function () {
            return this[ej]
        }, getDefaultPortPoint: function (t) {
            return ui(UH[rv], t || this[sj]())
        }, getPortPoint: function (t, i) {
            if (!t) return this[rj](i);
            i = i || this.getLinkableBounds();
            var n;
            return i[HP] ? (n = ui(t, i[HP]), i[Xo] && (n = Ii(n.x, n.y, i[Xo], i.rotateX || 0, i[hj] || 0)), n.x += i.tx || 0, n.y += i.ty || 0) : n = ui(t, i), n[aj] = t, n
        }, getPortPoints: function () {
            var t = this[oj]();
            if (t && Array[Xc](t)) {
                var i = [], n = this[sj]();
                return t[Hu](function (t) {
                    i.push(this[A_](t, n))
                }[Sh](this)), i
            }
        }
    }, E(ks, xq);
    var wq = {};
    wq[oq[Kx]] = RH[Kx], wq[oq[Vx]] = RH[Vx], wq[oq[Xx]] = RH[Xx], wq[oq.SELECTION_TYPE] = KY.SELECTION_TYPE_SHADOW, wq[oq[CS]] = 2, wq[oq[QI]] = 2, wq[oq[ZA]] = RH[ZA], wq[oq[qA]] = UH[hv], wq[oq[JA]] = UH[sv], wq[oq[hM]] = new YH(0, 2), wq[oq.LABEL_POINTER_WIDTH] = 8, wq[oq[fL]] = 8, wq[oq[oL]] = !0, wq[oq[fj]] = 0, wq[oq[mM]] = WP, wq[oq[wM]] = !0, wq[oq.LABEL_BACKGROUND_COLOR] = null, wq[oq.LABEL_BACKGROUND_GRADIENT] = null, wq[oq[qM]] = uj, wq[oq[UM]] = 1.5, wq[oq[bI]] = !0, wq[oq[jL]] = !0, wq[oq[cj]] = X(3438210798), wq[oq[CM]] = 1, wq[oq[SL]] = WP, wq[oq[OO]] = !0, wq[oq[wI]] = RH[k_], wq[oq[BI]] = RH.ARROW_SIZE, wq[oq[Y_]] = 10, wq[oq.EDGE_CORNER_RADIUS] = 8, wq[oq.EDGE_CORNER] = KY.EDGE_CORNER_ROUND, wq[oq[d_]] = !0, wq[oq[s_]] = 20, wq[oq[y_]] = .5, wq[oq.EDGE_SPLIT_VALUE] = 20, wq[oq[_j]] = 20, wq[oq[uP]] = UH[hv], wq[oq[fP]] = UH.CENTER_TOP, wq[oq.EDGE_BUNDLE_LABEL_COLOR] = dj, wq[oq[US]] = 1, wq[oq[qS]] = lj, wq[oq[NS]] = RH.BLEND_MODE, wq[oq[vL]] = 1, RH[vj] = 2;
    var Tq = function (i, n) {
        this._$o = new aY, this._$o.on(function (t) {
            RO == t.kind && this.invalidateVisibility()
        }, this), this._1f = new aY, this._1f[Mv](function (t) {
            !this[RO] || t[el] != uY[Dv] && t.kind != uY[Yv] || this[Nk][z_](this.currentSubNetwork) || (this[RO] = null)
        }, this), this._5 = new aY, this._10 = new aY, this._$g = new aY, this._$l = new aY, this.graphModel = n || new bs, this._8m = new UW(this, i), this._31 = new Vr(this), this._17 = new aY, this[bj] = xY(t, yj, function () {
            this[gj]()
        }, !1, this), this._8m[UT][xj] = function (t) {
            this[xj](t)
        }.bind(this), this._8m[UT][mj] = function (t) {
            this[mj](t)
        }[Sh](this)
    };
    Tq.prototype = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            XY.stopEvent(t)
        },
        getDropInfo: function (t, i) {
            var n = null;
            if (i) try {
                n = JSON.parse(i)
            } catch (e) {
            }
            return n
        },
        ondrop: function (t) {
            var i = t.dataTransfer;
            if (i) {
                var n = i[Hy](pj), e = this[Ej](t, n);
                e || (e = {}, e[Sm] = i[Hy](Sm), e[Vo] = i[Hy](Vo), e[tL] = i.getData(tL), e.groupImage = i.getData(qO));
                var s = this.globalToLocal(t);
                if (s = this[lk](s.x, s.y), !(this[wj] instanceof Function && this.dropAction[rh](this, t, s, e) === !1) && (e.image || e.label || e[Vo])) {
                    var r = e.image, h = e[Vo], a = e[tL], o = e.groupImage;
                    XY[Tj](t);
                    var f;
                    if (h && Pd != h ? KO == h ? f = this.createText(a, s.x, s.y) : PO == h ? f = this.createShapeNode(a, s.x, s.y) : VO == h ? (f = this[kj](a, s.x, s.y), o && (o = _r(o), o && (f.groupImage = o))) : (h = Z(h), h instanceof Function && h[vh] instanceof nq && (f = new h, f.name = a, f.location = new $H(s.x, s.y), this[qk].add(f))) : f = this[Oj](a, s.x, s.y), f) {
                        if (r && (r = _r(r), r && (f[Sm] = r)), t.shiftKey) {
                            var u = this[Gy](t);
                            u && this._nbf(u) && (f[hc] = u)
                        }
                        if (e[Sj]) for (var c in e[Sj]) f[c] = e[Sj][c];
                        if (e[Aj]) for (var c in e.clientProperties) f.set(c, e[Aj][c]);
                        if (e[Mj] && f[SO](e[Mj]), this[Ij](f, t, e) === !1) return !1;
                        var _ = new qr(this, qr[Lj], t, f);
                        return this[Pj](_), f
                    }
                }
            }
        },
        _nbf: function (t) {
            return t.enableSubNetwork || t instanceof rq || t.droppable
        },
        enableDoubleClickToOverview: !0,
        _8m: null,
        _$o: null,
        _1f: null,
        _5: null,
        _$l: null,
        _10: null,
        _$g: null,
        _1k: function (t) {
            return this._$o[Eh](t)
        },
        _4k: function (t) {
            this._$o[wh](t), xT == t[el] && this[Cj]()
        },
        isVisible: function (t) {
            return this._8m._eb(t)
        },
        isMovable: function (t) {
            return (t instanceof nq || t instanceof iq && t.hasPathSegments()) && t[jj] !== !1
        },
        isSelectable: function (t) {
            return t[Rj] !== !1
        },
        isEditable: function (t) {
            return t[VC] !== !1
        },
        isRotatable: function (t) {
            return t[cL] !== !1
        },
        isResizable: function (t) {
            return t.resizable !== !1
        },
        canLinkFrom: function (t) {
            return t[Dj] !== !1 && t[Nj] !== !1
        },
        canLinkTo: function (t, i) {
            return t[Dj] === !1 || t.canLinkTo === !1 ? !1 : i instanceof XY[VO] && t[vc](i) ? !1 : t instanceof XY[VO] && i[vc](t) ? !1 : !0
        },
        isEndPointEditable: function (t) {
            return t.endPointEditable !== !1
        },
        createNode: function (t, i, n) {
            var e = new nq(t, i, n);
            return this._koModel.add(e), e
        },
        createText: function (t, i, n) {
            var e = new gs(t, i, n);
            return this[qk].add(e), e
        },
        createShapeNode: function (t, i, n, e) {
            D(i) && (e = n, n = i, i = null);
            var s = new eq(t, i);
            return s[lO] = new $H(n, e), this._koModel.add(s), s
        },
        createGroup: function (t, i, n) {
            var e = new rq(t, i, n);
            return this[qk].add(e), e
        },
        createEdge: function (t, i, n) {
            if (t instanceof nq) {
                var e = n;
                n = i, i = t, t = e
            }
            var s = new iq(i, n);
            return t && (s[nO] = t), this[qk].add(s), s
        },
        addElement: function (t, i) {
            this[qk].add(t), i && t[eh]() && t.forEachChild(function (t) {
                this.addElement(t, i)
            }, this)
        },
        removeElement: function (t) {
            this._koModel[Rh](t)
        },
        clear: function () {
            this[qk][so]()
        },
        getStyle: function (t, i) {
            var e = t._jc[i];
            return e !== n ? e : this.getDefaultStyle(i)
        },
        getDefaultStyle: function (t) {
            if (this._jc) {
                var i = this._jc[t];
                if (i !== n) return i
            }
            return wq[t]
        },
        _2y: function (t, i) {
            if (!this[Bj] || this.limitedBounds[z_](this.viewportBounds)) return i && i(), !1;
            t = this._1s(), this.stopAnimation();
            var n, e, s, r = this[Wk], h = this[Bj], a = r[La] / this.limitedBounds.width, o = r[ua] / this[Bj][ua];
            if (1 >= a && 1 >= o) return n = h[Tf] > r[Tf] ? h[Tf] : h.right < r[aa] ? r.left - (r[aa] - h[aa]) : r.left, e = h.top > r.top ? h.top : h[ha] < r.bottom ? r.top - (r[ha] - h[ha]) : r.top, void this[QT](-n * this.scale, -e * this[mo], this[mo], !1, i);
            var f = a > o;
            s = Math.max(a, o), f ? (n = h.x, e = h.y + (r.top - h.top) * (1 - s) / s, e >= h.y ? e = h.y : e < h[ha] - r.height / s && (e = h.bottom - r.height / s)) : (e = h.y, n = h.x + (r[Tf] - h.left) * (1 - s) / s, n >= h.x ? n = h.x : n < h.right - r[La] / s && (n = h.right - r.width / s)), s *= this[mo], n *= s, e *= s, this.translateTo(-n, -e, s, t, i)
        },
        checkLimitedBounds: function (t) {
            return this._n8heckingBounds || !this[Bj] || this[Bj][z_](this.viewportBounds) ? !1 : (this[$j] = !0, void this[Fj](function () {
                this._2y(t, function () {
                    this[$j] = !1
                }.bind(this))
            }, this))
        },
        zoomByMouseEvent: function (t, i, n, e) {
            var s = this.globalToLocal(t);
            return Dh == typeof i ? this.zoomAt(Math.pow(1.1, i), s.x, s.y, n, e) : i ? this[Gj](s.x, s.y, n, e) : this.zoomOut(s.x, s.y, n, e)
        },
        resetScale: 1,
        translate: function (t, i, n) {
            return this[QT](this.tx + t, this.ty + i, this[mo], n)
        },
        translateTo: function (t, i, n, e, s) {
            if (n && (n = Math.min(this.maxScale, Math.max(this.minScale, n))), e) {
                var r = this._6c();
                return void r._l6(t, i, n, e, s)
            }
            var h = this._8m[zj](t, i, n);
            return s && s(), h
        },
        centerTo: function (t, i, e, s, r) {
            return (!e || 0 >= e) && (e = this[mo]), s === n && (s = this._1s()), this.translateTo(this.width / 2 - t * e, this[ua] / 2 - i * e, e, s, r)
        },
        moveToCenter: function (t, i) {
            if (arguments[2] === !1 || !this._8m.isInvalidate()) {
                var n = this[bu];
                return void this.centerTo(n.cx, n.cy, t, i)
            }
            return this._8m[Wc] || (i = !1), this.callLater(this[Hj][Sh](this, t, i, !1))
        },
        zoomToOverview: function (t, i) {
            if (arguments[2] === !1 || !this._8m[Yj]()) {
                var n = this._8m._1i();
                return void(n && (i && (n[mo] = Math.min(n[mo], i)), this[Uj](n.cx, n.cy, n[mo], t)))
            }
            return this._8m[Wc] || (t = !1), this[Fj](this[Wj][Sh](this, t, i, !1))
        },
        _1s: function () {
            return this._8m[Wc] ? this.zoomAnimation === n || null === this.zoomAnimation ? RH[qj] : this[Vj] : !1
        },
        zoomAt: function (t, i, e, s, r) {
            s === n && (s = this._1s()), i === n && (i = this[La] / 2), i = i || 0, e === n && (e = this[ua] / 2), e = e || 0;
            var h = this[mo];
            return t = Math.min(this[Om], Math.max(this.minScale, h * t)), i = t * (this.tx - i) / h + i, e = t * (this.ty - e) / h + e, this[QT](i, e, t, s, r)
        },
        zoomOut: function (t, i, n, e) {
            return this[Xj](1 / this[Kj], t, i, n, e)
        },
        zoomIn: function (t, i, n, e) {
            return this[Xj](this[Kj], t, i, n, e)
        },
        _6c: function () {
            return this[Jj] || (this[Jj] = new Iq(this)), this[Jj]
        },
        onAnimationStart: function () {
        },
        onAnimationEnd: function () {
        },
        isAnimating: function () {
            return this._panAnimation && this._panAnimation._ep()
        },
        enableInertia: !0,
        _94: function (t, i) {
            var n = this._6c();
            return n._fe(t || 0, i || 0)
        },
        stopAnimation: function () {
            this[Jj] && this._panAnimation._li()
        },
        getUI: function (t) {
            return Q(t) ? this._8m._3t(t) : this._8m._la(t)
        },
        getUIByMouseEvent: function (t) {
            return this._8m._3t(t)
        },
        hitTest: function (t) {
            return this._8m[W_](t)
        },
        globalToLocal: function (t) {
            return this._8m._7w(t)
        },
        toCanvas: function (t, i) {
            return this._8m._gb(t, i)
        },
        toLogical: function (t, i) {
            return Q(t) ? this._8m._$b(t) : this._8m._db(t, i)
        },
        getElementByMouseEvent: function (t) {
            var i = this._8m._3t(t);
            return i ? i[Ou] : void 0
        },
        getElement: function (t) {
            return Q(t) ? this[Gy](t) : this[qk][Pl](t)
        },
        invalidate: function () {
            this._8m[yT]()
        },
        invalidateUI: function (t) {
            t[vT](), this[vT]()
        },
        invalidateElement: function (t) {
            this._8m._3p(t)
        },
        getUIBounds: function (t) {
            return this._8m._30(t)
        },
        forEachVisibleUI: function (t, i) {
            return this._8m._3x(t, i)
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._8m._$s(t, i)
        },
        forEachUI: function (t, i) {
            return this._8m._em(t, i)
        },
        forEachReverseUI: function (t, i) {
            return this._8m._3z(t, i)
        },
        forEach: function (t, i) {
            return this[qk][Hu](t, i)
        },
        getElementByName: function (t) {
            var i;
            return this.forEach(function (n) {
                return n.name == t ? (i = n, !1) : void 0
            }), i
        },
        focus: function (i) {
            if (i) {
                var n = t[Ud] || t[Ra], e = t.scrollY || t.pageYOffset;
                return this[Zj].focus(), void t[Vd](n, e)
            }
            this[Zj][Qj]()
        },
        callLater: function (t, i, n) {
            this._8m._ds(t, i, n)
        },
        exportImage: function (t, i, n) {
            return Er(this, t, i, n)
        },
        setSelection: function (t) {
            return this._koModel[Xv].set(t)
        },
        select: function (t) {
            return this[qk]._selectionModel[qd](t)
        },
        unselect: function (t) {
            return this[qk]._selectionModel[tR](t)
        },
        reverseSelect: function (t) {
            return this[qk][Xv][iR](t)
        },
        selectAll: function () {
            pr(this)
        },
        unSelectAll: function () {
            this[Od][so]()
        },
        unselectAll: function () {
            this[nR]()
        },
        isSelected: function (t) {
            return this[qk][Xv][z_](t)
        },
        sendToTop: function (t) {
            De(this[qk], t)
        },
        sendToBottom: function (t) {
            Ne(this._koModel, t)
        },
        moveElements: function (t, i, n) {
            var e = [], s = new DH;
            return l(t, function (t) {
                t instanceof nq ? e.push(t) : t instanceof iq && s.add(t)
            }), this._eu(e, i, n, s)
        },
        _eu: function (t, i, n, e) {
            if (0 == i && 0 == n || 0 == t[sh] && 0 == e.length) return !1;
            if (0 != t.length) {
                var s = this._43(t);
                e = this._52(s, e), l(s, function (t) {
                    var e = t[lO];
                    e ? t[eR](e.x + i, e.y + n) : t[eR](i, n)
                })
            }
            return e && e[sh] && this._e3(e, i, n), !0
        },
        _e3: function (t, i, n) {
            t[Hu](function (t) {
                t[bg](i, n)
            })
        },
        _52: function (t, i) {
            return this[Nk].forEach(function (n) {
                n instanceof iq && this[sR](n) && t[z_](n[cc]) && t[z_](n[ac]) && i.add(n)
            }, this), i
        },
        _43: function (t) {
            var i = new DH;
            return l(t, function (t) {
                !this.isMovable(t), i.add(t), Ce(t, i, this._movableFilter)
            }, this), i
        },
        reverseExpanded: function (t) {
            if (!t[UC]()) return !1;
            var i = t[oc](!0);
            return i ? i[rR]() !== !1 ? (this.invalidate(), !0) : void 0 : !1
        },
        _31: null,
        _17: null,
        beforeInteractionEvent: function (t) {
            return this._17[Eh](t)
        },
        onInteractionEvent: function (t) {
            this._17[wh](t)
        },
        addCustomInteraction: function (t) {
            this._31[hR](t)
        },
        removeCustomInteraction: function (t) {
            this._31.removeCustomInteraction(t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t[sO] || t.name
        },
        updateViewport: function () {
            this._8m._7p()
        },
        destroy: function () {
            this._4k(new iY(this, Zy, !0, this._ieed)), this[wS] = !0, mY(t, yj, this[bj]), this._31[Zy](), this[Nk] = new bs;
            var i = this[aR];
            this._8m._ie(), i && (i[oR] = "")
        },
        onPropertyChange: function (t, i, n) {
            this._$o[Mv](function (e) {
                e.kind == t && i[rh](n, e)
            })
        },
        removeSelection: function () {
            var t = this[Od]._jd;
            return t && 0 != t[sh] ? (t = t[ah](), this._koModel[Rh](t), t) : !1
        },
        removeSelectionByInteraction: function (t) {
            var i = this[Od].datas;
            return i && 0 != i[sh] ? void XY[fR](uR + i[sh], function () {
                var i = this[cR]();
                if (i) {
                    var n = new qr(this, qr[_R], t, i);
                    this.onInteractionEvent(n)
                }
            }, this) : !1
        },
        createShapeByInteraction: function (t, i, n, e) {
            var s = new CU(i);
            i[sh] > 2 && s.closePath();
            var r = this[dR](lR, s, n, e);
            this[Ij](r, t);
            var h = new qr(this, qr[Lj], t, r);
            return this.onInteractionEvent(h), r
        },
        createLineByInteraction: function (t, i, n, e) {
            var s = new CU(i), r = this.createShapeNode(vR, s, n, e);
            r[e_](XY[bR][pL], null), r.setStyle(XY[bR][QS], null), r[e_](XY[bR].LAYOUT_BY_PATH, !0), this[Ij](r, t);
            var h = new qr(this, qr[Lj], t, r);
            return this[Pj](h), r
        },
        createEdgeByInteraction: function (t, i, n, e, s, r) {
            var h = this.createEdge(yR, t, i);
            if (s && h[e_](XY[bR][M_], s), r && h[e_](XY.Styles[L_], r), e) h._91 = e; else {
                var a = this[gR], o = this.edgeType;
                this[xR] && (a = this[xR][Mk] || a, o = this[xR].edgeType || o), a && (h.uiClass = a), o && (h[R_] = o)
            }
            this.onElementCreated(h, n);
            var f = new qr(this, qr[Lj], n, h);
            return this.onInteractionEvent(f), h
        },
        onElementCreated: function (t) {
            !t[hc] && this[RO] && (t[hc] = this.currentSubNetwork)
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, i, n, e) {
            var s = this;
            n.startEdit(e.x, e.y, i.data, this.getStyle(t, oq[tM]), function (n) {
                return s.onLabelEdit(t, i, n, i[hc])
            })
        },
        onLabelEdit: function (t, i, n, e) {
            if (!n && !this.allowEmptyLabel) return XY.alert(mR), !1;
            if (tL == i[Th]) {
                if (t.name == n) return !1;
                t.name = n
            } else e._g6(i, n) === !1 && (i.data = n, this[pR](t))
        },
        setInteractionMode: function (t, i) {
            this.interactionMode = t, this.interactionProperties = i
        },
        upSubNetwork: function () {
            return this._3o ? this[RO] = dr(this._3o) : !1
        },
        _$p: !1,
        invalidateVisibility: function () {
            this._$p = !0, this[vT]()
        },
        getBundleLabel: function (t) {
            var i = t[oc](!0);
            return i && i.agentEdge == t ? ER + i[wR][sh] : null
        },
        zoomAnimation: null,
        pauseRendering: function (t, i) {
            (this[TR] || i) && this._8m._6q(t)
        },
        _4e: n,
        enableRectangleSelectionByRightButton: !0,
        getLinkablePoints: function (t) {
            return t[kR]
        }
    }, J(Tq.prototype, {
        center: {
            get: function () {
                return this[lk](this.html[Ma] / 2, this[aR].clientHeight / 2)
            }
        }, visibleFilter: {
            get: function () {
                return this[dk]
            }, set: function (t) {
                this[dk] = t, this[mk]()
            }
        }, topCanvas: {
            get: function () {
                return this._8m._topCanvas
            }
        }, propertyChangeDispatcher: {
            get: function () {
                return this._$o
            }
        }, listChangeDispatcher: {
            get: function () {
                return this._1f
            }
        }, dataPropertyChangeDispatcher: {
            get: function () {
                return this._5
            }
        }, selectionChangeDispatcher: {
            get: function () {
                return this._$l
            }
        }, parentChangeDispatcher: {
            get: function () {
                return this._10
            }
        }, childIndexChangeDispatcher: {
            get: function () {
                return this._$g
            }
        }, interactionDispatcher: {
            get: function () {
                return this._17
            }
        }, cursor: {
            set: function (t) {
                this[Zj][pa][OR] = t || this._31[SR]
            }, get: function () {
                return this[Zj][pa].cursor
            }
        }, interactionMode: {
            get: function () {
                return this._31[AR]
            }, set: function (t) {
                var i = this.interactionMode;
                i != t && (this._31[sl] = t, this._4k(new iY(this, MR, t, i)))
            }
        }, scaleStep: {
            get: function () {
                return this._8m._ek
            }, set: function (t) {
                this._8m._ek = t
            }
        }, maxScale: {
            get: function () {
                return this._8m._g4
            }, set: function (t) {
                this._8m._g4 = t
            }
        }, minScale: {
            get: function () {
                return this._8m._g3
            }, set: function (t) {
                this._8m._g3 = t
            }
        }, scale: {
            get: function () {
                return this._8m[Jb]
            }, set: function (t) {
                return this._8m._scale = t
            }
        }, tx: {
            get: function () {
                return this._8m._tx
            }
        }, ty: {
            get: function () {
                return this._8m._ty
            }
        }, styles: {
            get: function () {
                return this._jc
            }, set: function (t) {
                this._jc = t
            }
        }, selectionModel: {
            get: function () {
                return this[qk][Xv]
            }
        }, graphModel: {
            get: function () {
                return this[qk]
            }, set: function (t) {
                if (this[qk] == t) return !1;
                var i = this._koModel, n = new iY(this, Nk, i, t);
                return this._1k(n) === !1 ? !1 : (null != i && (i[IR].removeListener(this._$o, this), i[qv][Mm](this._1f, this), i[Kv].removeListener(this._5, this), i[Zv][Mm](this._10, this), i.childIndexChangeDispatcher[Mm](this._$g, this), i.selectionChangeDispatcher[Mm](this._$l, this)), this._koModel = t, this[qk] && (this[qk].propertyChangeDispatcher[Mv](this._$o, this), this[qk][qv].addListener(this._1f, this), this[qk][Kv][Mv](this._5, this), this[qk][Zv][Mv](this._10, this), this[qk][Qv][Mv](this._$g, this), this[qk][Vv].addListener(this._$l, this)), this._8m && this._8m._l8(), void this._4k(n))
            }
        }, count: {
            get: function () {
                return this[qk][sh]
            }
        }, width: {
            get: function () {
                return this[aR][Ma]
            }
        }, height: {
            get: function () {
                return this[aR][Td]
            }
        }, viewportBounds: {
            get: function () {
                return this._8m._viewportBounds
            }
        }, bounds: {
            get: function () {
                return this._8m._41()
            }
        }, canvasPanel: {
            get: function () {
                return this._8m[UT]
            }
        }, html: {
            get: function () {
                return this._8m._nbw[cm]
            }
        }, navigationType: {
            get: function () {
                return this._8m._6y
            }, set: function (t) {
                this._8m._3l(t)
            }
        }, _3o: {
            get: function () {
                return this[qk]._3o
            }
        }, currentSubNetwork: {
            get: function () {
                return this._koModel[RO]
            }, set: function (t) {
                this[qk][RO] = t
            }
        }, limitedBounds: {
            get: function () {
                return this._limitedBounds
            }, set: function (t) {
                return HH.equals(t, this[LR]) ? !1 : t ? void(this._limitedBounds = new HH(t)) : void(this[LR] = null)
            }
        }, ratio: {
            get: function () {
                return this._8m[lo]
            }
        }, delayedRendering: {
            get: function () {
                return this._4e === n ? RH[PR] : this._4e
            }, set: function (t) {
                t != this[TR] && (this._4e = t, this[CR](!1, !0))
            }
        }, fullRefresh: {
            get: function () {
                return this._8m[wT]
            }, set: function (t) {
                this._8m[wT] = t
            }
        }
    }), RH[PR] = !0, RH.GROUP_MIN_WIDTH = 60, RH[jR] = 60, lr[vh] = {
        _n8d: function () {
            return this._5b() ? void 0 : T(this, lr, mL, arguments)
        }, initialize: function () {
            T(this, lr, mS), this[TL]()
        }, _n9j: function () {
            this._lx = new CU, this[OL] = new mq(this._lx), this[OL][ku] = !1, this[OP](this[OL], 0), this.body = this[OL]
        }, checkBody: function () {
            return this._5b() ? (this._1r = !0, this[OL] ? (this.shape.visible = !0, this[ym] = this[OL]) : (this[RR](), lq.initBindingProperties(this)), void(this[Sm] && (this[Sm][XT] = !1))) : (this[Sm] ? (this[Sm][XT] = !0, this[ym] = this[Sm]) : this._n9h(), void(this[OL] && (this[OL][XT] = !1)))
        }, _5b: function () {
            return this[Ou]._he() && this[Ou].expanded
        }, _lx: null, _1r: !0, _59: function () {
            this._1a = !0, this._1r = !0
        }, doValidate: function () {
            if (this._1r && this._5b()) {
                if (this._1r = !1, this[OL].invalidateData(), this.$data[qO]) {
                    this.shape[Yo] = this.$data[qO];
                    var t = this._1t();
                    return this[OL][sS] = t.x + t[La] / 2, this[OL][rS] = t.y + t[ua] / 2, this.shape.size = {
                        width: t[La],
                        height: t[ua]
                    }, ks[vh][pS][rh](this)
                }
                this[OL][sS] = 0, this.shape[rS] = 0;
                var i = this._8k(this[Ou][WO]);
                this._lx[so](), i instanceof HH ? Ve(this._lx, i.x, i.y, i[La], i[ua], i.rx, i.ry) : i instanceof rn ? Xe(this._lx, i) : i instanceof hn && Ke(this._lx, i), this._lx._6e = !0, this[OL].invalidateData()
            }
            return ks[vh][pS][rh](this)
        }, _71: function (t, i, n, e, s) {
            switch (Dh != typeof e && (e = -i / 2), Dh != typeof s && (s = -n / 2), t) {
                case KY[DR]:
                    var r = Math.max(i, n) / 2;
                    return new rn(e + i / 2, s + n / 2, r);
                case KY[NR]:
                    return new hn(e + i / 2, s + n / 2, i, n);
                default:
                    return new HH(e, s, i, n)
            }
        }, _1t: function () {
            return this._8k(null)
        }, _8k: function (t) {
            var i, e, s = this[Yo], r = s.padding, h = s[UO], a = RH.GROUP_MIN_WIDTH, o = RH.GROUP_MIN_HEIGHT;
            if (h && (Dh == typeof h.width && (a = h[La]), Dh == typeof h[ua] && (o = h.height), i = h.x, e = h.y), !s.hasChildren()) return this._71(t, a, o, i, e);
            var f, u = this[Ou]._ff._jd;
            (t == KY.GROUP_TYPE_CIRCLE || t == KY[NR]) && (f = []);
            for (var c, _, d, l, v = new HH, b = 0, y = u.length; y > b; b++) {
                var g = u[b];
                if (this[C_][Sd](g) && !(g instanceof iq)) {
                    var x = this[C_][j_](g);
                    x && (c = x.$x + x._fg.x, _ = x.$y + x._fg.y, d = x._fg.width, l = x._fg[ua], v.addRect(c, _, d, l), f && (f[_h]({
                        x: c,
                        y: _
                    }), f[_h]({x: c + d, y: _}), f[_h]({x: c + d, y: _ + l}), f[_h]({x: c, y: _ + l})))
                }
            }
            if (v[jl]()) return this._71(t, a, o, i, e);
            var m = this[Ou][lO];
            m ? m[GO] && (m[GO] = !1, i === n && (m.x = v.cx), e === n && (m.y = v.cy)) : m = this.$data.$location = {
                x: v.cx,
                y: v.cy
            }, r && v[fu](r), Dh == typeof i && i + m.x < v.x && (v[La] += v.x - (i + m.x), v.x = i + m.x, f && f.push({
                x: v.x,
                y: v.cy
            })), Dh == typeof e && e + m.y < v.y && (v[ua] += v.y - (v.y, e + m.y), v.y = e + m.y, f && f[_h]({
                x: v.cx,
                y: v.y
            }));
            var p, i = m.x, e = m.y;
            if (t == KY[DR]) {
                p = an(f), p.cx -= i, p.cy -= e;
                var E = Math.max(a, o) / 2;
                return p.r < E && (p.cx += E - p.r, p.cy += E - p.r, p.r = E), p
            }
            return t == KY[NR] ? (p = on(f, v), p.cx -= i, p.cy -= e, p[La] < a && (p.cx += (a - p.width) / 2, p[La] = a), p[ua] < o && (p.cy += (o - p[ua]) / 2, p[ua] = o), p) : (p = v, v[La] < a && (v.width = a), v[ua] < o && (v[ua] = o), v.offset(-i, -e), p)
        }, _$r: function (t, i, n) {
            if (!this._5b()) return T(this, lr, BR, arguments);
            var e = this._n9v[kP](this, t, i, n);
            return e = fq[kP](this, t, i, n) || e, e = dq[kP](this, t, i, n) || e, lq[kP](this, t, i, n) || e
        }
    }, E(lr, ks), XY[$R] = lr;
    var kq = {
        draw: function () {
        }
    };
    RH.NAVIGATION_IMAGE_LEFT = null, RH[cd] = null;
    var Oq = {position: sT, "text-align": hC}, Sq = {padding: FR, transition: GR}, Aq = {position: fd, display: zR};
    xi(HR, "opacity:0.7;vertical-align:middle;"), xi(".Q-Graph-Nav img:hover,img.hover", YR), CH || (xi(UR, WR + yY(qR) + VR), xi(XR, KR + yY(qR) + JR)), yr[vh] = {
        _n83: function (t, i) {
            return t._hd == i ? !1 : (t._hd = i, void(t[pa].visibility = i ? "visible" : ad))
        }, _3e: function (t, i) {
            var n = i / 2 - this._left[nd][Td] / 2 + ho;
            this[dd]._img.style.top = n, this._right._img[pa].top = n, this._navPane.style.width = t + ho, this[sd][pa].height = i + ho
        }, _nbb: function (t, i, n, e) {
            this[ZR](this[QR], t), this._n83(this[dd], i), this._n83(this[yd], n), this[ZR](this._right, e)
        }, _ie: function () {
            var t = this[sd][cm];
            t && t[sb](this[sd])
        }, _k2: function () {
            var t = this[ec]._ko;
            if (t) {
                var i = t[bu];
                if (i[jl]()) return void this[tD](!1, !1, !1, !1);
                var n = t[Wk], e = n.y > i.y + 1, s = n.x > i.x + 1, r = n[ha] < i[ha] - 1, h = n.right < i[aa] - 1;
                this._nbb(e, s, r, h)
            }
        }
    };
    var Mq = 10;
    xi(iD, nD), xi(eD, "background-color: #7E7E7E;" + yY(qR) + ": background-color 0.2s linear;"), xi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), xi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), xi(".Q-Graph-ScrollBar--V.Both", sD), xi(".Q-Graph-ScrollBar--H.Both", rD), CH || (xi(hD, WR + yY(qR) + aD), xi(".Q-Graph:hover .Q-Graph-ScrollPane", KR + yY(qR) + ":opacity 0.3s linear;")), gr[vh] = {
        _ie: function () {
            this[oD]._ie(), this._horizontalDragSupport._ie(), delete this[oD], delete this._horizontalDragSupport, this._lz[cm] && this._lz[cm][sb](this._lz)
        }, _lz: null, _n9s: null, _8j: null, init: function (t) {
            var n = i[V_](X_);
            n[Mh] = fD, bi(n, {width: ud, height: ud, position: fd});
            var e = i.createElement(X_);
            e[Mh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i.createElement(X_);
            s[Mh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n.appendChild(e), n[ed](s), t[ed](n), this._lz = n, this._8j = s, this[uD] = e, s.isH = !0;
            var r = this, h = {
                onstart: function (t, i) {
                    i[Ih].add(wd)
                }, onrelease: function (t, i) {
                    i[Ih].remove(wd)
                }, ondrag: function (t, i) {
                    var n = r._n9aseCanvas._ko;
                    if (n) {
                        var e = i.isH, s = e ? t.dx : t.dy;
                        if (s && i[mo]) {
                            var h = n[mo] / i[mo];
                            e ? n.translate(-h * s, 0) : n[xo](0, -h * s), XY[Tj](t)
                        }
                    }
                }, enddrag: function (t, i) {
                    var n = r[ec]._ko;
                    if (n && n[cD]) {
                        var e = i.isH, s = e ? t.vx : t.vy;
                        if (Math.abs(s) > .1) {
                            var h = n[mo] / i[mo];
                            s *= h, e ? n._94(-s, 0) : n._94(0, -s)
                        }
                    }
                }
            };
            this[oD] = new wi(e, h), this._horizontalDragSupport = new wi(s, h)
        }, _3e: function () {
            var t = this._n9aseCanvas._ko;
            t && t.callLater(this._k2[Sh](this))
        }, _k2: function () {
            var t = this[ec]._ko;
            if (t) {
                var i = t[bu];
                if (i[jl]()) return this._4c(!1), void this._4g(!1);
                var n = t.viewportBounds, e = t[La], s = t[ua], r = t[mo], h = 1 / r,
                    a = n.x > i.x + h || n[aa] < i[aa] - h, o = n.y > i.y + h || n.bottom < i[ha] - h, f = a && o;
                f ? (j(this[uD], _D), j(this._8j, _D)) : (R(this._n9s, _D), R(this._8j, _D)), this._4c(a, n, i, f ? e - Mq : e), this._4g(o, n, i, f ? s - Mq : s)
            }
        }, _4c: function (t, i, n, e) {
            if (!t) return this._8j[pa][Uw] = od, void(this._8j[mo] = 0);
            var s = Math.min(i.x, n.x), r = Math.max(i[aa], n.right), h = r - s, a = e / h;
            this._8j.scale = a, this._8j[pa][Tf] = parseInt((i.x - s) * a) + ho, this._8j[pa][aa] = parseInt((r - i.right) * a) + ho, this._8j[pa][Uw] = ""
        }, _4g: function (t, i, n, e) {
            if (!t) return this[uD].style[Uw] = od, void(this[uD][mo] = 0);
            var s = Math.min(i.y, n.y), r = Math.max(i[ha], n[ha]), h = r - s, a = e / h;
            this[uD].scale = a, this[uD][pa].top = parseInt((i.y - s) * a) + ho, this[uD][pa][ha] = parseInt((r - i[ha]) * a) + ho, this[uD][pa][Uw] = ""
        }
    }, xr[vh] = {
        shape: null, initialize: function () {
            T(this, xr, mS), this[ij](), yq[AP](this)
        }, _n9h: function () {
            this[Sm] = new Eq(this.$data.path), this[OP](this[Sm], 0), this.body = this.image
        }, invalidateShape: function () {
            this[Sm].invalidateData(), this[Ak]()
        }, _$r: function (t, i, n) {
            var e = this[EP][kP](this, t, i, n);
            return e = fq[kP](this, t, i, n) || e, yq[kP](this, t, i, n) || e
        }, doValidate: function () {
            this[ym] && (this[Sm][Yo] = this[Yo].path, this[ym][Zf] = null != this._2k, this[ym][TO] = this._2k);
            var t = this.$data[lO], i = 0, n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[nj] = !0), this.$x = i, this.$y = n, xq.prototype.doValidate[rh](this) || e
        }, getLinkablePorts: function () {
            return this[Yo][dD]
        }, getLinkableBounds: function () {
            return this[ej]
        }, getDefaultPortPoint: function (t) {
            return ui(UH[rv], t || this[sj]())
        }, getPortPoint: function (t, i) {
            if (!t) return this[rj](i);
            i = i || this[sj]();
            var n;
            return i[HP] ? (n = ui(t, i[HP]), i[Xo] && (n = Ii(n.x, n.y, i.rotate, i[lD] || 0, i[hj] || 0)), n.x += i.tx || 0, n.y += i.ty || 0) : n = ui(t, i), n[aj] = t, n
        }, getPortPoints: function () {
            var t = this[oj]();
            if (t && Array[Xc](t)) {
                var i = [], n = this[sj]();
                return t[Hu](function (t) {
                    i[_h](this.getPortPoint(t, n))
                }.bind(this)), i
            }
        }
    }, E(xr, xq), J(xr[vh], {
        path: {
            get: function () {
                return this[Yo][MO]
            }
        }, length: {
            get: function () {
                return this.data[sh]
            }
        }
    }), xr[vh][ro] = function (t, i, n) {
        var e = this._hm(t, i), s = this[Yo], r = Pn(this[MO], e.x, e.y, this[Yo].addSegmentType, n);
        return r ? void(s.pathSegments = r.segments) : !1
    }, mr[vh] = {
        _m0: function () {
            this._je.style[bm] = XT
        }, _k4: function () {
            this._je.style[bm] = ad
        }, clear: function () {
            this._9l[so](), this[yT]()
        }, contains: function (t) {
            return t instanceof Object && t.id && (t = t.id), this._9l[Il](t)
        }, _54: function (t) {
            ZW[e_](this._je, td, t ? zT + t[vD](qh) + ")" : "")
        }, addDrawable: function (t, i) {
            if (i) {
                var n = {id: ++gH, drawable: t, scope: i};
                return this._9l.add(n), n
            }
            return t.id || (t.id = ++gH), this._9l.add(t), t
        }, removeDrawable: function (t) {
            return t.id ? void this._9l[Rh](t) : this._9l[bD](t)
        }, _9l: null, invalidate: function () {
            this[yT]()
        }, _n9z: function () {
            this._n9aseCanvas._6e || this._jl()
        }, _hu: function (t, i) {
            this._je[RT](t, i)
        }, _jl: function () {
            var t = this[ec]._scale, i = this.g;
            i._l5(), i[go](), this[ec]._9u(i);
            for (var n = this._9l._jd, e = 0, s = n.length; s > e; e++) i[go](), i[uf](), this._fy(i, n[e], t), i.restore();
            i[Ao]()
        }, _fy: function (t, i, n) {
            return i instanceof Function ? void i(t, n) : void(i[yD] instanceof Function && i[Av] && i[yD][rh](i[Av], t, n))
        }
    }, RH[qj] = !0;
    var Iq = function (t) {
        this._ko = t
    };
    RH[gD] = 600, RH[xD] = UY[mD], Iq[vh] = {
        _ko: null, _ew: null, _fe: function (t, i, n) {
            this._li();
            var e = Math.abs(t / 2), s = Math.abs(i / 2), r = Math.min(RH[gD], .6 * Math.max(e, s) * 1e3);
            if (10 > r) return !1;
            var h = function (t) {
                return -(2 * Math.pow(t, 1.5) - 3 * t)
            }, a = t * r / 3, o = i * r / 3;
            this._l6(this._ko.tx + a, this._ko.ty + o, 0, {duration: r, animationType: h}, n)
        }, _73: function (t, i, n, e, s) {
            this._ew && this._ew._li(), s && (this.__delayRender = !0, this._ko[CR](!0)), this._4p(), this._ew = new qY(t, this, i, n), this._ew._6s = this._6s[Sh](this), this._ew._km(e)
        }, _4p: function () {
            this._ko[pD]()
        }, _6s: function () {
            this.__delayRender && (this._ko[CR](!1), delete this[ED]), this._ko[wD]()
        }, _ep: function () {
            return this._ew && this._ew._ep()
        }, _li: function () {
            this._ew && this._ew._li()
        }, _i2: function (t) {
            var i = this._fromTX + (this._toTX - this[TD]) * t, n = this._fromTY + (this[kD] - this._fromTY) * t,
                e = this._fromScale + (this[OD] - this[SD]) * t;
            this._ko.translateTo(i, n, e, this[AD])
        }, _l6: function (t, i, n, e, s) {
            this._li();
            var r = this._ko, h = r.scale;
            if (0 >= n && (n = h), t != r.tx || i != r.ty || n != h) {
                var a, o, f;
                e instanceof Object && (a = e[MD], o = e[ID], f = e[LD]);
                var u = r.tx, c = r.ty;
                if (!a) if (n != h) {
                    var _ = n > h ? n / h : h / n;
                    _ = Math.log(_) / Math.log(1.3), a = 60 * _
                } else {
                    var d = FH(t, i, u, c);
                    a = d / 2
                }
                o = o || RH[gD], f = f || RH.ANIMATION_TYPE, a = Math.min(o, a), this[TD] = u, this[PD] = c, this[SD] = h, this[CD] = t, this._toTY = i, this._toScale = n, this._73(this._i2, a, f, s, n != h)
            }
        }
    }, RH[jD] = 8, RH[RD] = 4, RH[DD] = 30, RH[ND] = 20;
    var Lq = Math.PI / 4;
    wr.prototype = {
        element: null, _$j: !1, setCurrentElement: function (t, i) {
            this[BD] = t, i && this[$D]()
        }, onDataPropertyChange: function () {
        }, addDataPropertyChangeListener: function () {
            this._$j || (this._$j = !0, this.graph[FD][Mv](this._1c, this))
        }, removeDataPropertyChangeListener: function () {
            this._$j && (this._$j = !1, this[C_][FD][Mm](this._1c, this))
        }, _1c: function (t) {
            this[BD] && t.source == this[BD] && this[GD](t)
        }, onElementRemoved: function (t, i) {
            this.element && (t == this[BD] || $(t) && m(t, this[BD])) && this.destroy(i)
        }, onClear: function (t) {
            this[BD] && this[Zy](t)
        }, destroy: function () {
            delete this[BD], this[zD](), this[HD](), this.drawableList = null
        }, invalidate: function () {
            this[Md][vT]()
        }, removeDrawable: function () {
            this[YD] && (this[Md][HD](this._lgableId), delete this[YD], this[vT]())
        }, drawableList: null, addDrawable: function () {
            this._lgableId || (this[YD] = this[Md][UD](this.draw, this).id, this[vT]())
        }, isShowing: function () {
            return this[YD]
        }, draw: function (t, i) {
            this[WD] && this[WD][Hu](function (n) {
                n[kf](t, i)
            }), this.doDraw(t, i)
        }, doDraw: function () {
        }, escapable: !0, onkeydown: function (t, i) {
            this.escapable && 27 == t[fw] && (z(t), this.destroy(i))
        }
    }, XY[qD] = wr, Tr[vh] = {
        defaultCursor: Id, getInteractionInstances: function (t) {
            if (!this[VD]) return null;
            for (var i = [], n = 0, e = this.interactions.length; e > n; n++) {
                var s = this[VD][n];
                s instanceof Function && (s = new s(t)), s[XD] instanceof Function && s.install(t), i.push(s)
            }
            return i
        }
    }, kr.prototype = {
        _dc: null, _k1: null, destroy: function () {
            T(this, kr, Zy, arguments), delete this._k1, delete this._9i, delete this._dc
        }, doDraw: function (t) {
            var i = this[No];
            i && (t[uf](), i[Hu](function (i) {
                this.drawPoint(t, i)
            }, this), this[KD] && t[Kf](), this[JD](t))
        }, styleDraw: function (t) {
            var i = Or(this.graph[xR], this[ZD](this[C_]));
            i[Uo] && (t[Uo] = i.lineWidth, i[gd] && (t[gd] = i[gd]), i[fp] && (t[fp] = i[fp]), i[Iu] && (t[Iu] = i[Iu], t[ju] = i[ju] || 0), t[rf] = i[rf], t[zo]()), i[of] && (t.fillStyle = i[of], t[Ho]())
        }, drawPoint: function (t, i, n) {
            if (n) return void t[df](i.x, i.y);
            if (XY[Xc](i)) {
                var e = i[0], s = i[1];
                t[dE](e.x, e.y, s.x, s.y)
            } else t[lf](i.x, i.y)
        }, setCurrentPoint: function (t) {
            this[QD] = t
        }, addPoint: function (t) {
            this._k1 || (this._k1 = [], this[UD]()), this._k1.push(t), this.invalidate()
        }
    }, E(kr, wr), J(kr[vh], {
        currentPoint: {
            get: function () {
                return this._9i
            }, set: function (t) {
                this._9i = t, this[vT]()
            }
        }, prevPoint: {
            get: function () {
                return this._k1 && this._k1[sh] ? this._k1[this._k1[sh] - 1] : null
            }
        }, points: {
            get: function () {
                return this._9i && this._k1 && this._k1[sh] ? this._k1[fh](this._9i) : void 0
            }
        }
    }), XY[tN] = kr, Sr[vh] = {
        _ho: function (t, i) {
            return this.start && t != this[iN] ? this._ey(t, i) : this._n9r(t, i)
        }, _n9r: function (t, i) {
            return t instanceof nq && i.canLinkFrom(t)
        }, _ey: function (t, i) {
            return t instanceof nq && i.canLinkTo(t, this[iN])
        }, _nb0: function (t, i, n, e) {
            if (this[nN]) return this[nN][eN](n, e);
            var s = i[j_](t);
            return s && s.bodyBounds ? s[ej][hC] : t.location
        }, _n86: function (t) {
            this._kk && (clearTimeout(this._kk), delete this._kk), this._kk = setTimeout(function (t) {
                if (delete this._kk, this[iN] && this[QD]) {
                    var i = t.x - this.currentPoint.x, n = t.y - this[QD].y;
                    Math[Lo](i * i + n * n) * this[C_].scale <= 2 && this[ro](this.currentPoint)
                }
            }.bind(this, this[sN](t)), RH[mb])
        }, destroy: function () {
            T(this, Sr, Zy, arguments), this[iN] = null, this[rN] = null, this._kk && (clearTimeout(this._kk), delete this._kk), this[hN] = null, this._n8urrentPort = null
        }, ondblclick: function (t, i) {
            this[Zy](i)
        }, finish: function (t, i, n, e) {
            var s;
            this._k1 && this._k1[sh] >= 2 && (this._k1[RE](), s = new DH, l(this._k1, function (t) {
                if (XY[Xc](t)) {
                    var i = t[0], n = t[1];
                    s.add(new LU(KY.SEGMENT_QUAD_TO, [i.x, i.y, n.x, n.y]))
                } else s.add(new LU(KY[qm], [t.x, t.y]))
            }, this)), i[aN](this.start, n, t, s, this[rN], e), this.destroy(i)
        }, onstart: function (t, i) {
            if (this.start) {
                var n = t[Hy](), e = i[lk](t);
                return this._ey(n, i) ? void this[oN](t, i, n, new Mr(i[j_](n))[eN](e.x, e.y)[aj]) : void this.addPoint(e)
            }
        }, startdrag: function (t, i) {
            if (!this[iN] && !t[fN]) {
                var n = t[Hy]();
                if (n && this[uN](n, i)) {
                    t[fN] = !0, this[iN] = n;
                    var e = i[lk](t), s = this[cN](n, i, e.x, e.y);
                    this[rN] = s[aj], this[ro](s)
                }
            }
        }, ondrag: function (t, i) {
            this[_N](t, i)
        }, enddrag: function (t, i) {
            if (this[iN]) {
                var n = t.getData();
                if (this._ey(n, i)) {
                    var e = i.toLogical(t);
                    this.finish(t, i, n, new Mr(i[j_](n)).nearestPoint(e.x, e.y)[aj])
                }
            }
        }, onrelease: function (t, i) {
            OY(t) && this.destroy(i)
        }, _n9p: null, onmousemove: function (t, i) {
            var n = i[lk](t), e = Ar(i, n.x, n.y, function (t) {
                return this._ho(t, i)
            }[Sh](this));
            e != this[hN] && (this[hN] = e, this[nN] = e ? new Mr(i[j_](e)) : null, e ? (this[UD](), this.drawableList = [this[nN]]) : this[WD] = null, this.invalidate());
            var s;
            this[nN] && (s = this._n8urrentPort[eN](n.x, n.y), this[vT]()), this.start && (this[QD] = s || n, OY(t) && this[dN](t, i))
        }, toLogicalPoint: function (t) {
            return this[C_][lk](t)
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph[lN](oq[UM]),
                strokeStyle: this[C_][lN](oq.EDGE_COLOR),
                lineDash: this.graph[lN](oq.EDGE_LINE_DASH),
                lineDashOffset: this.graph[lN](oq.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph[lN](oq[gA]),
                lineJoin: this[C_].getDefaultStyle(oq[mA])
            }
        }
    }, E(Sr, kr), XY.CreateEdgeInteraction = Sr, Mr[vh][vN] = function (t, i, n) {
        var e = 0;
        t[uf](), t[rc](n.x - e, n.y - e, n.width + 2 * e, n.height + 2 * e), t[Uo] = 2 / i, t.strokeStyle = lj, t[zo]()
    }, Mr[vh][bN] = function (t, i, n) {
        var e = 4;
        t[uf]();
        var s = e / i;
        t.moveTo(n.x + s, n.y), t.arc(n.x, n.y, s, 0, 2 * Math.PI, !1), t.lineWidth = 1 / i, n[yN] ? (t.strokeStyle = gN, t.fillStyle = xN) : (t[rf] = lj, t[of] = "rgba(255, 255, 255, 0.8)"), t[Ho](), t.stroke()
    }, Mr[vh][kf] = function (t, i) {
        var n = this[rc];
        this.drawRect(t, i, n), this[No] && this[No][Hu](function (n) {
            this[bN](t, i, n)
        }.bind(this))
    }, Mr.prototype[eN] = function (t, i, n) {
        if (this[No]) {
            n = n || 20, n *= n;
            var e, s = n;
            return this[No][Hu](function (r) {
                r.marked && (r.marked = !1);
                var h = r.x - t, a = r.y - i, o = h * h + a * a;
                n > o && s > o && (s = o, e = r)
            }), e && (e[yN] = !0), e || this[mN]
        }
        return this[mN]
    }, Ir[vh] = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph[lN](oq.SHAPE_STROKE),
                strokeStyle: this.graph[lN](oq[qS]),
                fillStyle: this.graph.getDefaultStyle(oq.SHAPE_FILL_COLOR)
            }
        }, finish: function (t, i) {
            if (this._k1 && this._k1[sh]) {
                var n = this._k1, e = 0, s = 0, r = 0;
                n.forEach(function (t) {
                    return XY[Xc](t) ? void t[Hu](function () {
                        e += t.x, s += t.y, r++
                    }) : (e += t.x, s += t.y, void r++)
                }), e /= r, s /= r;
                var h = [];
                n[Hu](function (t, i) {
                    if (0 == i) return void h[_h](new LU(KY[Wm], [t.x - e, t.y - s]));
                    if (XY[Xc](t)) {
                        var n = t[0], r = t[1];
                        h[_h](new LU(KY[pN], [n.x - e, n.y - s, r.x - e, r.y - s]))
                    } else h.push(new LU(KY[qm], [t.x - e, t.y - s]))
                }), this.createElement(t, h, e, s), this[Zy](i)
            }
        }, startdrag: function (t) {
            t[fN] = !0
        }, createElement: function (t, i, n, e) {
            return this[C_].createShapeByInteraction(t, i, n, e)
        }, onstart: function (t, i) {
            var n = i.toLogical(t);
            this._dc = n, this[ro](n)
        }, onmousemove: function (t, i) {
            this._dc && (this[QD] = i[lk](t))
        }, ondblclick: function (t, i) {
            if (this._dc) {
                if (this._k1[sh] < 3) return void this[Zy](i);
                delete this._k1[this._k1[sh] - 1], this.finish(t, i)
            }
        }, isClosePath: !0
    }, E(Ir, kr), XY[EN] = Ir, Lr[vh] = {
        isClosePath: !1, createElement: function (t, i, n, e) {
            return this[C_].createLineByInteraction(t, i, n, e)
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: wq[oq[US]],
                strokeStyle: wq[oq[qS]],
                lineDash: this[C_][lN](oq.SHAPE_LINE_DASH),
                lineDashOffset: this.graph[lN](oq[JS]),
                lineCap: this[C_][lN](oq[gA]),
                lineJoin: this[C_][lN](oq[mA])
            }
        }
    }, E(Lr, Ir), XY[wN] = Lr, Pr[vh] = {
        destroy: function (t) {
            T(this, Pr, Zy, arguments), t.cursor = "", this.start = null
        }, doDraw: function (t) {
            if (this.start && this.currentPoint) {
                var i, n;
                this[C_][xR] && (i = this[C_][xR][Mk], n = this[C_][xR][R_]), i = i || this.graph[gR] || XY.EdgeUI, n = n || this[C_][R_];
                var e = i[JC] || XY[TN][JC], s = this[C_][j_](this[iN]);
                s && s[ej] && (s = s.bodyBounds.center, t[uf](), e(t, s, this[QD], n), this.styleDraw(t))
            }
        }, canLinkFrom: function (t, i) {
            return t instanceof nq && i[Nj](t)
        }, canLinkTo: function (t, i) {
            return t instanceof nq && i[kN](t, this[iN])
        }, startdrag: function (t, i) {
            var n = t.getData();
            this[Nj](n, i) && (t[fN] = !0, this[iN] = n, i.cursor = vg, this.addDrawable())
        }, ondrag: function (t, i) {
            this[iN] && (XY.stopEvent(t), this.currentPoint = i[lk](t), this[vT]())
        }, enddrag: function (t, i) {
            if (this[iN]) {
                this[vT]();
                var n = t[Hy]();
                this.canLinkTo(n, i) && i[aN](this.start, n, t), this[Zy](i)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph[lN](oq[UM]),
                strokeStyle: this[C_][lN](oq.EDGE_COLOR),
                lineDash: this[C_][lN](oq[QM]),
                lineDashOffset: this[C_][lN](oq[iI]),
                lineCap: this.graph[lN](oq[gA]),
                lineJoin: this.graph.getDefaultStyle(oq.LINE_JOIN)
            }
        }
    }, E(Pr, kr), XY[ON] = Pr, RH.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1, Br[vh] = {
        html: null,
        createHTML: function () {
            var t = i[V_](SN);
            t[Mh] = AN, t[pa][Tu] = sT, t[pa][To] = hC, t.style[Jg] = MN, t[pa][wf] = IN, t[pa][LN] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t.style.display = od, t[pa][PN] = ad;
            var n = this;
            return t.oninput = function (t) {
                n[CN](t)
            }, t.onkeydown = function (t) {
                return 27 == t[fw] ? void n.cancelEdit() : void 0
            }, t[jN] = function (i) {
                if (13 == i[fw] || 10 == i.keyCode) {
                    if (i.preventDefault(), i[ow] || i[za] || i[aw]) return Dr(t, Oo), void n.onValueChange(i);
                    n[RN]()
                }
            }, i[ym].appendChild(t), t
        },
        setText: function (t, i) {
            this.html.value = t || "", i && (this[aR][pa].fontSize = i), Nr(this[aR]), this[DN](this.html)
        },
        onSizeChange: function (t) {
            var i = (t[Zd], t.offsetHeight, Rr(t));
            return t.style.width = i[La] + 30 + ho, t[pa][ua] = i.height + 10 + ho, i
        },
        onValueChange: function (t) {
            var i = t.target;
            this[DN](i), i[pa][Tf] = i.x - i.offsetWidth / 2 + ho
        },
        onClickOnWindow: function (t) {
            t[Kc] != this[aR] && (RH[NN] ? this[RN]() : this[BN]())
        },
        startEdit: function (i, n, e, s, r) {
            this[aR] || (this[aR] = this.createHTML()), this[$N] || (this.stopEditWhenClickOnWindow = function (t) {
                this[FN](t)
            }[Sh](this)), t[yb](ay, this[$N], !0), this.callback = r, this.html.x = i, this.html.y = n, this[aR][pa][Uw] = zR, jr(this.html, i, n), this.setText(e, s || 10), jr(this[aR], i, n)
        },
        isEditing: function () {
            return od != this[aR].style[Uw]
        },
        cancelEdit: function () {
            this.stopEdit(!0)
        },
        stopEdit: function (i) {
            if (this[GN]()) {
                t[gb](ay, this.stopEditWhenClickOnWindow);
                var n = this[aR][kh];
                !i && this.callback && this[Qc](n), this[aR].style[Uw] = od, this[aR].value = null, this[Qc] = null
            }
        },
        destroy: function () {
            this[aR] && i.body[sb](this[aR])
        }
    }, XY[zN] = Br;
    var Pq = function (t) {
        this[C_] = t
    };
    Pq.prototype = {
        destroy: function (t) {
            t[HN] && (t[HN][Zy](), delete t.labelEditor)
        }, ondblclick: function (t, i) {
            var n = t[Hy]();
            if (n) {
                if (n[YN] !== !1) {
                    if (i[VC] && i[UN](n)) {
                        var e = i.hitTest(t);
                        if (e instanceof pq && e[VC] !== !1) {
                            var s = i[HN];
                            s || (i[HN] = s = new Br);
                            var r = e[Bo]();
                            return r = i[WN](r.x + r[La] / 2, r.y + r[ua] / 2), r = Cr(r.x, r.y, i.html), void i.startLabelEdit(n, e, s, r)
                        }
                    }
                    var h = n instanceof rq, a = n instanceof iq && n[qN]();
                    return n._4f && (Ti(t) || !h && !a) ? void(i[RO] = n) : h ? (n[Ik] = !n[Ik], void this.graph[Pj](new qr(this.graph, qr[$O], t, n))) : void(a && this.graph[rR](n) && this[C_].onInteractionEvent(new qr(this[C_], qr.EDGE_BUNDLE, t, n)))
                }
            } else {
                if (i[RO]) return void i[VN]();
                if (i[XN]) {
                    var o = i.resetScale || 1;
                    Math.abs(i.scale - o) < 1e-4 ? i[Wj]() : i[Hj](o)
                }
            }
        }
    };
    var Cq = function (t) {
        this[C_] = t
    };
    Cq[vh] = {
        onkeydown: function (t, i) {
            if (i[VC]) {
                var n = t[fw];
                if (8 == n || 46 == n || 127 == n) return i.removeSelectionByInteraction(t), void F(t);
                if (Ti(t)) {
                    if (67 == n) ; else if (86 == n) ; else if (90 == n) ; else if (89 != n) return;
                    F(t)
                }
            }
        }
    }, XY[KN] = Cq;
    var jq = function (t) {
        this[C_] = t
    };
    jq[vh] = {
        onkeydown: function (i, n) {
            if (i[Ga] && 83 == i[fw]) {
                var e = n[JN](n[mo], n.viewportBounds), s = t[Ja](), r = s[ZN];
                r[QN] = tB + e[La] + iB + e[ua];
                var h = r[V_](J_);
                h.src = e[Yo], r[ym][ed](h), F(i)
            }
        }
    };
    var Rq = function (t) {
        this[C_] = t
    };
    Rq.prototype = {
        destroy: function () {
            delete this[nB], delete this[eB]
        }, _23: function (t) {
            var i = new DH;
            return t[Od].forEach(function (n) {
                t[sR](n) && t[Sd](n) && i.add(n)
            }, this), i
        }, onstart: function (t, i) {
            this[eB] && this.destroy(i)
        }, startdrag: function (t, i) {
            if (!(t[fN] || t.touches && 1 != t.touches[sh])) {
                var n = t.getData();
                if (!n || !i[sB](n) || !i[sR](n)) return void this[Zy](i);
                t[fN] = !0, this.currentDraggingElement = n, this.draggingElements = this._23(i);
                var e = new qr(i, qr.ELEMENT_MOVE_START, t, this.currentDraggingElement, this.draggingElements[ab]);
                return i.beforeInteractionEvent(e) === !1 ? void this[Zy](i) : void i.onInteractionEvent(e)
            }
        }, ondrag: function (t, i) {
            if (this[eB]) {
                if (t[ia] && 1 != t[ia][sh]) return void this[$y](t, i);
                z(t);
                var n = t.dx, e = t.dy, s = i[mo];
                n /= s, e /= s;
                var r = new qr(i, qr[rB], t, this.currentDraggingElement, this[nB].datas);
                i[hB](this[nB].datas, n, e), i.onInteractionEvent(r)
            }
        }, enddrag: function (t, i) {
            if (this.currentDraggingElement) {
                if (this[nB] && this[nB].length) {
                    if (t[aw]) {
                        var n, e = i[lk](t), s = e.x, r = e.y;
                        i.forEachReverseVisibleUI(function (t) {
                            var i = t[Yo];
                            if (!this[nB][z_](i) && t[Cd].intersectsPoint(s - t.x, r - t.y) && t.hitTest(s, r, 1)) {
                                if (i instanceof XY[yR]) {
                                    if (!i.enableSubNetwork) return;
                                    for (var e = this[nB][sh]; e-- > 0;) {
                                        var h = this[nB].get(e);
                                        if (h instanceof XY.Node && h[aB](i)) return
                                    }
                                    return n = i, !1
                                }
                                return (i[q_] || i._he() && i.expanded) && (n = i), !1
                            }
                        }, this), n && this.draggingElements[Hu](function (t) {
                            for (var i = t[hc]; i;) {
                                if (this[nB].contains(i)) return;
                                i = i[hc]
                            }
                            t.parent = n
                        }, this)
                    }
                    var h = new qr(i, qr[oB], t, this[eB], this.draggingElements[ab]);
                    i[Pj](h)
                }
                this[Zy](i)
            }
        }, onpinch: function (t, i) {
            this[eB] && this[$y](t, i)
        }, step: 1, onkeydown: function (t, i) {
            if (Ti(t)) {
                var n, e;
                if (37 == t[fw] ? n = -1 : 39 == t[fw] ? n = 1 : 38 == t[fw] ? e = -1 : 40 == t[fw] && (e = 1), n || e) {
                    var s = this._23(i)[ab];
                    if (0 != s.length) {
                        F(t), n = n || 0, e = e || 0;
                        var r = this[fB] / i[mo], h = new qr(i, qr[oB], t, null, s);
                        i[hB](s, n * r, e * r), i[Pj](h)
                    }
                }
            }
        }
    };
    var Dq = function (t) {
        this.graph = t
    };
    Dq[vh] = {
        onkeydown: function (t, i) {
            Ti(t) || (37 == t[fw] ? (this._5e(i, 1, 0), F(t)) : 39 == t[fw] ? (this._5e(i, -1, 0), F(t)) : 38 == t[fw] ? (this._5e(i, 0, 1), F(t)) : 40 == t.keyCode && (this._5e(i, 0, -1), F(t)))
        }, _5e: function (t, i, n) {
            t._94(i, n)
        }, onstart: function (t, i) {
            this._km && this[Zy](i)
        }, _km: !1, startdrag: function (t, i) {
            if (!t[fN]) {
                t[fN] = !0, this._km = !0, i.cursor = $Y;
                var n = new qr(i, qr[uB], t);
                i[Pj](n)
            }
        }, ondrag: function (t, i) {
            this._km && i[xo](t.dx || 0, t.dy || 0)
        }, enddrag: function (t, i) {
            if (this._km) {
                if (i[cD] !== !1) {
                    var n = t.vx, e = t.vy;
                    (Math.abs(n) > .1 || Math.abs(e) > .1) && i._94(n, e)
                }
                this[Zy](i);
                var s = new qr(i, qr[cB], t);
                i.onInteractionEvent(s)
            }
        }, startpinch: function (t, i) {
            i[CR](!0)
        }, onpinch: function (t, i) {
            this._km = !0;
            var n = t[Zb];
            if (n) {
                var e = i[_B](t.center);
                i.zoomAt(n, e.x, e.y, !1)
            }
        }, endpinch: function (t, i) {
            i.pauseRendering(!1)
        }, destroy: function (t) {
            this._km = !1, t[OR] = null
        }
    }, $r[vh] = {
        onDataPropertyChange: function () {
            this[C_][Fj](function () {
                this._k2()
            }, this)
        }, destroy: function () {
            this.graph[OR] = null, this[BD] && delete this[BD]._editting, this._mousePressed = !1, delete this._91, delete this._9i, delete this[dB], T(this, $r, Zy, arguments)
        }, _91: null, _5y: function (t) {
            this._91 = t, this[vT]()
        }, isEndPointEditable: function (t, i) {
            return this[C_][lB](t, i)
        }, drawPoint: function (t, i, n) {
            (!i[vB] || this[lB](this[BD], i.isFrom)) && (t[uf](), i[bB] ? t[rc](i.x - this[Xd] / n, i.y - this[Xd] / n, this.handlerSize / n * 2, this.handlerSize / n * 2) : t.arc(i.x, i.y, this[Xd] / n, 0, 2 * Math.PI, !1), t[Uo] = 1 / n, t.lineDash = [], t[rf] = md, t[of] = "rgba(255, 255, 0, 0.8)", t[zo](), t[Ho]())
        }, _fv: function (t, i, n, e) {
            e ? t[df](i, n) : t[lf](i, n)
        }, doDraw: function (t, i) {
            this.drawLine(t, i)
        }, drawLine: function (t, i) {
            if (this._91 && this._91.length) {
                var n = this._91;
                t[go]();
                var e = this[BD] instanceof eq;
                e && (t[xo](this.element.x, this.element.y), this[BD][Xo] && t[Xo](this.element[Xo]));
                var s, r = [];
                t[uf]();
                var h = n[sh];
                n.forEach(function (i, n) {
                    if (i[Vo] != KY.SEGMENT_CLOSE) for (var e = !n || n == h - 1, a = 0, o = i.points; a + 1 < o.length;) {
                        var f = o[a], u = o[a + 1], c = {x: f, y: u, isControlPoint: this._6v(i, a)};
                        e && (c[vB] = !0, c[yB] = 0 == n), r[_h](c), this._fv(t, c.x, c.y, null == s), s = c, a += 2
                    }
                }, this), t.lineWidth = 1 / i, t[Iu] = [2 / i, 3 / i], t[rf] = gB, t[zo](), r[Hu](function (n, e) {
                    this[bN](t, n, i, e)
                }, this), t[Ao]()
            }
        }, invalidate: function () {
            this[Md][vT]()
        }, _34: function (t) {
            if (this.element != t && (this.element && this.destroy(), t && this[UN](t))) {
                var i = this._5v(t, this[C_]);
                i && (this[xB](t, !0), t[mB] = !0, this[dB] = !0, this._5y(i), this[UD]())
            }
        }, _k2: function () {
            if (this[pB]() && this[BD]) {
                var t = this._5v(this[BD], this.graph);
                return t ? void this._5y(t) : void this[Zy](this.graph)
            }
        }, _5v: function (t, i) {
            if (i[UN](t)) {
                var n = t[tj] || [];
                n instanceof DH && (n = n[Rl]());
                var e = i[j_](t);
                if (e instanceof XY[TN]) {
                    var s = e[D_](i[j_](t[cc])), r = e.getEndPointBounds(i[j_](t.toAgent)), h = s.center, a = r[hC],
                        o = e[__](oq[I_]), f = e.getStyle(oq[P_]);
                    o && (h.x += o.x || 0, h.y += o.y || 0), f && (a.x += f.x || 0, a.y += f.y || 0), n.splice(0, 0, new XY.PathSegment(KY.SEGMENT_MOVE_TO, [h.x, h.y])), n[_h](new XY.PathSegment(KY[Wm], [a.x, a.y]))
                }
                return n
            }
        }, _hm: function (t, i) {
            t -= this[BD].x, i -= this[BD].y;
            var n = {x: t, y: i};
            return this[BD][Xo] && Ks(n, -this[BD][Xo]), n
        }, isPointAddable: function () {
            return !0
        }, isPointRemovable: function () {
            return !0
        }, onclick: function (t, i) {
            if (i[VC] && t[ow] && this[BD]) {
                var n = this._fu(t, i);
                if (n && n[bB] && this[EB](this[BD], n, i) !== !1) {
                    if (n[Lf] >= 0) {
                        this[BD][wB](n[Lf]);
                        var e = new qr(i, qr[TB], t, this[BD]);
                        e[kB] = n, i[Pj](e)
                    }
                } else if (this[BD] == t.getData() && this[OB](this[BD], i) !== !1) {
                    var s = i[lk](t), r = i[j_](this[BD]);
                    if (r.addPoint(s.x, s.y, this[Xd] || 2) !== !1) {
                        var e = new qr(i, qr[SB], t, this.element);
                        e[kB] = s, i.onInteractionEvent(e)
                    }
                }
            }
        }, isEditable: function (t) {
            return this[C_].isEditable(t) && (t instanceof eq || t instanceof iq && (!t[lc]() || t[N_]()))
        }, ondblclick: function (t, i) {
            if (!i[VC]) return void(this[BD] && this.destroy(i));
            var n = t[Hy]();
            return !n || n == this.element || n[mB] ? void this.destroy(i) : void this._34(n)
        }, onstart: function (t, i) {
            if (this[AB] = !0, !i.editable) return void(this[BD] && this[Zy](i));
            if (!t[fN]) {
                if (this.element && this._fu(t, i)) return void(t[fN] = !0);
                var n = t.getData();
                return n && i[MB](n) && n instanceof eq ? void(this[BD] && n != this[BD] && this[Zy]()) : void this._34(n)
            }
        }, onrelease: function () {
            this[AB] = !1, this[BD] && (this._n8anEdit = !0)
        }, _9i: null, _fu: function (t, i) {
            var n = i[lk](t);
            this[BD] instanceof eq && (n = this._hm(n.x, n.y));
            var e, s = i[mo], r = this.handlerSize / s, h = this._91, a = h[sh], o = this[BD] instanceof XY[yR];
            return h[Hu](function (t, s) {
                for (var f = 0, u = t[No]; f + 1 < u.length;) {
                    var c = u[f], _ = u[f + 1], d = FH(n.x, n.y, c, _);
                    if (r > d) {
                        if (e = {
                                oldPoints: u.slice(0),
                                segment: t,
                                index: s,
                                pointIndex: f
                            }, o && (e[Lf] -= 1), o && !Fr(t) && (0 == s || s == h.length - 1)) {
                            e[vB] = !0;
                            var l = 0 == s;
                            e.isFrom = l;
                            var v = l ? XY.Styles[I_] : XY[bR][P_], b = i.getStyle(this[BD], v) || {};
                            e[IB] = [b.x || 0, b.y || 0]
                        }
                        return this._6v(t, f) && (e[bB] = !0, s > 0 && (e.prevSegment = h instanceof DH ? h[hb](s - 1) : h[s - 1]), a > s + 1 && (e[LB] = h instanceof DH ? h[hb](s + 1) : h[s + 1], e[LB][No] && (e.oldNextPoints = e[LB].points.slice(0)))), !1
                    }
                    f += 2
                }
            }, this), e && e[vB] && !this[lB](this[BD], e[yB]) ? void 0 : e
        }, _6v: function (t, i) {
            return i == t[No].length - 2
        }, startdrag: function (t, i) {
            if (this.element && this[dB] && (this._9i = this._fu(t, i), this._9i)) {
                this[HD](), t[fN] = !0;
                var n = new qr(i, qr[PB], t, this[BD]);
                n[kB] = this._9i, i[Pj](n)
            }
        }, onkeyup: function (t, i) {
            this._mousePressed && 16 != !t[fw] && this[BD] && this._9i && this._9i[vy] && this._n8c(this._9i.delta.x, this._9i.delta.y, i, t, !1)
        }, onkeydown: function (t, i) {
            T(this, $r, CB, arguments), this._mousePressed && this[BD] && this._9i && t[aw] && this._9i[vy] && this[jB](this._9i[vy].x, this._9i[vy].y, i, t, !0)
        }, _n8c: function (t, i, n, e, s) {
            var r = this._9i, h = this[BD], a = r[IB], o = r[RB];
            if (r[vB]) {
                var f = r[yB] ? XY.Styles.EDGE_FROM_OFFSET : XY[bR][P_], u = {x: a[0] + t, y: a[1] + i};
                h[e_](f, u);
                var c = new qr(n, qr[DB], e, h);
                return c[kB] = r, void n[Pj](c)
            }
            if (s && r[bB]) {
                var _ = {x: a[a[sh] - 2] + t, y: a[a[sh] - 1] + i}, d = r.prevSegment, l = r.nextSegment,
                    v = 20 / n[mo], b = Number.MAX_VALUE, y = b, g = b, x = b;
                d && (d = d.lastPoint, b = Math.abs(_.x - d.x), g = Math.abs(_.y - d.y)), l && (l = l[qo], y = Math.abs(_.x - l.x), x = Math.abs(_.y - l.y)), v > b && y > b ? t += d.x - _.x : v > y && b > y && (t += l.x - _.x), v > g && x > g ? i += d.y - _.y : v > x && g > x && (i += l.y - _.y)
            }
            if (r[bB] && Fr(o)) {
                for (var m = o[No][sh] - 4; m < o[No].length;) {
                    var p = a[m] + t, E = a[m + 1] + i;
                    o[No][m] = p, o[No][m + 1] = E, m += 2
                }
                if (r.nextSegment && Fr(r.nextSegment)) {
                    var w = r.oldNextPoints, p = w[0] + t, E = w[1] + i;
                    r[LB][No][0] = p, r[LB][No][1] = E
                }
            } else {
                var m = r[NB], p = a[m] + t, E = a[m + 1] + i;
                o[No][m] = p, o[No][m + 1] = E
            }
            h[fO]();
            var c = new qr(n, qr.POINT_MOVING, e, h);
            c.point = r, n[Pj](c)
        }, ondrag: function (t, i) {
            if (this[BD] && this._9i) {
                var n = this._9i, e = this[BD], s = t[sg], r = t[rg], h = i[mo];
                if (s /= h, r /= h, e[Xo]) {
                    var a = {x: s, y: r};
                    Ks(a, -e.rotate), s = a.x, r = a.y
                }
                n[vy] = {x: s, y: r}, this[jB](s, r, i, t, t[aw])
            }
        }, enddrag: function (t, i) {
            if (this[BD] && this._9i) {
                this.addDrawable(), this._k2();
                var n = new qr(i, qr[BB], t, this[BD]);
                n[kB] = this._9i, i[Pj](n)
            }
        }, onmousemove: function (t, i) {
            this[BD] && (i.cursor = t[ow] && (this._fu(t, i) || this[BD] == t.getData()) ? "crosshair" : null)
        }
    }, E($r, wr), RH[$B] = 1, RH[FB] = X(3724541951), RH[GB] = X(1430753245), KY[zB] = HB, KY.RECTANGLE_SELECTION_MODE_CONTAIN = YB, RH[UB] = KY[zB];
    var Nq = function (t) {
        this[C_] = t, this[Md] = t[Md]
    };
    Nq.prototype = {
        onstart: function (t, i) {
            this._km && this.destroy(i)
        }, startdrag: function (t, i) {
            t[fN] || (t[fN] = !0, this._km = i.toLogical(t), i[OR] = vg, this[WB] = this[Md].addDrawable(this._11, this).id)
        }, ondrag: function (t, i) {
            if (this._km) {
                z(t), this[qB] = i[lk](t), this.invalidate();
                var n = new qr(i, qr.SELECT_START, t, i[Od]);
                i[Pj](n)
            }
        }, enddrag: function (t, i) {
            if (this._km) {
                this[VB] && (clearTimeout(this[VB]), this._f4Timer = null), this._f4(!0), this.destroy(i);
                var n = new qr(i, qr[XB], t, i[Od]);
                i[Pj](n)
            }
        }, onpinch: function (t, i) {
            this._km && this.enddrag(t, i)
        }, _11: function (t, i) {
            t[rf] = RH.SELECTION_RECTANGLE_STROKE_COLOR, t[of] = RH[GB], t[Uo] = RH[$B] / i;
            var n = this._km.x, e = this._km.y;
            t[rc](n, e, this._end.x - n, this[qB].y - e), t.fill(), t[zo]()
        }, invalidate: function () {
            return this.invalidateFlag ? void this.topCanvas[vT]() : (this[GO] = !0, void(this._f4Timer = setTimeout(this._f4.bind(this), 100)))
        }, _f4: function (t) {
            if (this[GO] = !1, this[VB] = null, !this._km || wH && !t) return void this.topCanvas.invalidate();
            var i = Math.min(this._km.x, this[qB].x), n = Math.min(this._km.y, this._end.y),
                e = Math.abs(this._km.x - this._end.x), s = Math.abs(this._km.y - this._end.y);
            if (!e || !s) return void this[C_][Od][so]();
            var r = [], h = this[C_][mo], a = this[C_].rectangleSelectionMode;
            if (this.graph.forEachVisibleUI(function (t) {
                    t._hd && this.graph[KB](t[Ou]) && this[JB](i, n, e, s, t, h, a) && r[_h](t[Yo])
                }[Sh](this)), this[C_].selectionModel.set(r), this[Md][vT](), !t) {
                var o = new qr(this[C_], qr[ZB], null, this[C_].selectionModel);
                this[C_].onInteractionEvent(o)
            }
        }, inRectangle: function (t, i, n, e, s, r, h) {
            var a = s[Bo]();
            return ai(t, i, n, e, a.x, a.y, a.width, a[ua]) ? !0 : (h = h || RH.RECTANGLE_SELECTION_MODE, h == KY[QB] ? !1 : Gn(t, i, n, e, s, r))
        }, destroy: function (t) {
            this._km = null, t[OR] = null, this._11Id && (this[Md][HD](this[WB]), delete this[WB], this[Md][vT]())
        }
    };
    var Bq = A({
        "super": Nq, onstart: null, startdrag: null, ondrag: null, enddrag: null, accept: function (t, i, n) {
            return n[t$] !== !1
        }, oncontextmenu: function (t, i) {
            i.popupmenu || z(t)
        }, onstart2: function () {
            Nq[vh].onstart.apply(this, arguments)
        }, startdrag2: function (t, i) {
            t[fN] || (i.popupmenu && i[i$][n$] instanceof Function && i[i$][n$](), Nq[vh][jy][yh](this, arguments))
        }, ondrag2: function () {
            Nq[vh][Ny][yh](this, arguments)
        }, enddrag2: function () {
            Nq[vh][$y][yh](this, arguments)
        }
    }), Lq = Math.PI / 4;
    Gr[vh] = {
        _dx: !1, _dz: !1, onDataPropertyChange: function () {
            this.graph.callLater(function () {
                this._9v()
            }, this)
        }, ondblclick: function (t, i) {
            this.element && this[Zy](i)
        }, destroy: function (t) {
            t[OR] = null, delete this[YP], delete this[UP], delete this._9i, delete this._n8anEdit, delete this._k1, delete this._rotatePoint, delete this._dz, delete this._dx, delete this[e$], T(this, Gr, Zy, arguments)
        }, _n8n: null, _k1: null, _8h: function (t) {
            this[YP] = t;
            var i = this[YP].x, n = this[YP].y, e = this._n8n[La], s = this[YP][ua];
            if (this[BD] instanceof rq && this[BD][Ik], this._dz) {
                var r = [];
                r.push({x: i, y: n, p: UH.LEFT_TOP, cursor: s$, rotate: 5 * Lq}), r.push({
                    x: i + e / 2,
                    y: n,
                    p: UH[sv],
                    cursor: r$,
                    rotate: 6 * Lq
                }), r[_h]({x: i + e, y: n, p: UH.RIGHT_TOP, cursor: Kd, rotate: 7 * Lq}), r[_h]({
                    x: i,
                    y: n + s / 2,
                    p: UH.LEFT_MIDDLE,
                    cursor: h$,
                    rotate: 4 * Lq
                }), r[_h]({x: i, y: n + s, p: UH[ev], cursor: Kd, rotate: 3 * Lq}), r[_h]({
                    x: i + e,
                    y: n + s / 2,
                    p: UH[av],
                    cursor: h$,
                    rotate: 0
                }), r[_h]({x: i + e / 2, y: n + s, p: UH[hv], cursor: r$, rotate: 2 * Lq}), r[_h]({
                    x: i + e,
                    y: n + s,
                    p: UH.RIGHT_BOTTOM,
                    cursor: s$,
                    rotate: Lq
                }), this._k1 = r
            }
            this._rotatePoint = this._dx ? {x: i + e / 2, y: n, cursor: FY} : null, this.invalidate()
        }, _e4: function (t, i, n, e) {
            t.beginPath();
            var s = (this[Xd] - 1) / e;
            t[rc](i - s, n - s, 2 * s, 2 * s), t[Uo] = 1 / e, t[Iu] = [], t.strokeStyle = md, t.fillStyle = "rgba(255, 255, 255, 0.8)", t[zo](), t.fill()
        }, _5k: function (t, i, n, e, s, r) {
            s = s || this[Xd], r = r || a$, t[uf](), s /= e, t.arc(i, n, s, 0, 2 * Math.PI, !1), t.lineWidth = 1 / e, t[Iu] = [], t[rf] = md, t.fillStyle = r, t[zo](), t[Ho]()
        }, _hm: function (t, i) {
            t -= this[BD].x, i -= this[BD].y;
            var n = {x: t, y: i};
            return this[BD].rotate && Ks(n, -this[BD][Xo]), n
        }, doDraw: function (t, i) {
            if (this[YP]) {
                if (t[go](), t.translate(this[BD].x, this.element.y), this[BD][Xo] && t[Xo](this[BD][Xo]), this._rotatePoint) {
                    this._5k(t, 0, 0, i, 3, o$);
                    var n = this[f$].x, e = this._rotatePoint.y - this._rotateHandleLength / i;
                    t[uf](), t.moveTo(n, this._rotatePoint.y), t.lineTo(n, e), t[Uo] = 1 / i, t.strokeStyle = gB, t[zo](), this._5k(t, n, e, i)
                }
                if (this._k1) {
                    var s = this[YP].x, r = this._n8n.y, h = this._n8n[La], a = this._n8n.height;
                    t[uf](), t[rc](s, r, h, a), t.lineWidth = 1 / i, t[Iu] = [2 / i, 3 / i], t[rf] = gB, t[zo](), l(this._k1, function (n) {
                        this._e4(t, n.x, n.y, i)
                    }, this)
                }
                t[Ao]()
            }
        }, _9v: function () {
            if (this[pB]() && this.element) {
                var t = this.graph.getUI(this[BD]);
                this[UP] = t[ym];
                var i = zr(this[UP], this[UP]._jj), n = zr(this._n9ody, this[UP]._8c);
                this._insets = new YH(i.y - n.y, i.x - n.x, n.bottom - i[ha], n.right - i[aa]), this._8h(n)
            }
        }, _n9b: function (t, i) {
            return i.isResizable(t)
        }, _n98: function (t, i) {
            return !(t instanceof rq && t.expanded || !i[u$](t))
        }, _n8r: function (t, i) {
            return t instanceof nq && i[UN](t)
        }, onstart: function (t, i) {
            if (!i[VC]) return void(this.element && this.destroy(i));
            if (!t.responded) {
                var n = i[j_](t), e = t[Hy]();
                if (e != this.element) {
                    if (this[BD]) {
                        if (this._fu(t, i)) return void(t[fN] = !0);
                        this[Zy](i)
                    }
                    if (e && !e[mB] && this._n8r(e, i)) {
                        var s = this[c$](e, i, n), r = this._n98(e, i, n);
                        (s || r) && (this.setCurrentElement(e, !0), this[UD](), this._dz = s, this._dx = r, this._9v())
                    }
                }
            }
        }, onrelease: function (t, i) {
            this[BD] && (this._n8anEdit = !0, this[UD](), i[Fj](function () {
                this._9v()
            }, this))
        }, _9i: null, _fu: function (t, i) {
            var n = i[lk](t);
            n = this._hm(n.x, n.y);
            var e = i.scale, s = this[Xd] / e;
            if (this[f$]) {
                var r = this._rotatePoint.x, h = this[f$].y - this[_$] / e;
                if (FH(n.x, n.y, r, h) < s) return this._rotatePoint
            }
            if (this._k1 && this._k1[sh]) {
                var a;
                return l(this._k1, function (t) {
                    return FH(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
                }, this), a
            }
        }, onmousemove: function (t, i) {
            if (this[BD]) {
                var n = this._fu(t, i);
                if (!n) return void(i[OR] = null);
                if (n != this[f$] && this.element.rotate) {
                    var e = n.rotate + this.element[Xo];
                    return void(i[OR] = Hr(e))
                }
                i[OR] = n.cursor
            }
        }, startdrag: function (t, i) {
            if (this[BD] && (this[HD](), this._n8anEdit && (this._9i = this._fu(t, i), this._9i))) {
                if (t[fN] = !0, this._9i == this[f$]) return this._9i.start = i[lk](t), void(this._9i[Xo] = this[BD].rotate || 0);
                var n = new qr(i, qr.RESIZE_START, t, this[BD]);
                n[kB] = this._9i, i[Pj](n)
            }
        }, _75: function (t, i, n, e, s, r) {
            var h = this[YP], a = h.x, o = h.y, f = h.width, u = h[ua];
            if (r) {
                var c = e != f;
                c ? s = e * u / f : e = s * f / u
            }
            var _ = t.path[LO], d = e / f, l = s / u, v = -a * d + i, b = -o * l + n;
            _[Hu](function (t) {
                if (t[Vo] != KY.SEGMENT_CLOSE) {
                    var e = t.points;
                    if (e && e[sh]) for (var s = 0, r = e[sh]; r > s; s += 2) {
                        var h = e[s], f = e[s + 1];
                        e[s] = (h - a) * d + i - v, e[s + 1] = (f - o) * l + n - b
                    }
                }
            }), this[YP].set(i - v, n - b, e, s), t[eR](t.x + v, t.y + b), t[fO]()
        }, _nb2: function (t, i, n, e, s) {
            this._n8n.set(i, n, e, s), t.minSize = {x: i, y: n, width: e, height: s}
        }, _4q: function (t, i, n, e, s) {
            if (this.element instanceof rq && this[BD].expanded) return this._nb2(this[BD], t, i, n, e, s);
            if (this.element instanceof eq) return this._75(this[BD], t, i, n, e, s);
            var r = this[UP] instanceof pq;
            if (!r && s) {
                var h = this._n8n, a = this._n9ody[d$], o = n != h[La];
                o ? e = n * a[ua] / a.width : n = e * a.width / a.height
            }
            var f = this[BD][TO],
                u = new zH(n - this[e$][Tf] - this._insets[aa], e - this[e$].top - this._insets.bottom);
            if (u[La] < 1 && (n = this._insets[Tf] + this[e$][aa] + 1, u.width = 1), u[ua] < 1 && (e = this._insets.top + this._insets[ha] + 1, u[ua] = 1), r ? this[BD].setStyle(oq[vM], u) : this[BD].size = u, f) {
                var c = ci(f, n, e), _ = c.x + t - (this._n9ody[sS] || 0), d = c.y + i - (this[UP].offsetY || 0);
                if (this[YP].set(t - _, i - d, n, e), this.element.rotate) {
                    var c = Ks({x: _, y: d}, this[BD].rotate);
                    _ = c.x, d = c.y
                }
                this.element.x += _, this.element.y += d
            } else {
                var _ = this[YP].x * n / this[YP].width - t, d = this[YP].y * e / this[YP].height - i;
                if (this[YP].set(t + _, i + d, n, e), this[BD][Xo]) {
                    var c = Ks({x: _, y: d}, this[BD][Xo]);
                    _ = c.x, d = c.y
                }
                this[BD].x -= _, this[BD].y -= d
            }
        }, ondrag: function (t, i) {
            if (this[BD] && this._9i) {
                if (this._9i == this._rotatePoint) {
                    var n = i[lk](t), e = yn(n.x, n.y, this.element.x, this[BD].y, this._9i[iN].x, this._9i[iN].y, !0);
                    e += this._9i[Xo] || 0, t[aw] && (e = Math[Fo](e / Math.PI * 4) * Math.PI / 4);
                    var s = this.element[Xo];
                    this.element.rotate = e % (2 * Math.PI);
                    var r = new qr(i, qr[l$], t, this[BD]);
                    return r[gv] = s, r.value = this[BD].rotate, void i.onInteractionEvent(r)
                }
                var h = t.dx, a = t.dy, o = i[mo];
                if (h /= o, a /= o, this[BD][Xo]) {
                    var n = {x: h, y: a};
                    Ks(n, -this[BD][Xo]), h = n.x, a = n.y
                }
                var f = this._9i.p, u = this._n8n, c = u.x, _ = u.y, d = u.width, l = u[ua];
                f[Xl] == WH ? h >= d ? (c += d, d = h - d || 1) : (c += h, d -= h) : f[Xl] == VH && (-h >= d ? (d = -h - d || 1, c -= d) : d += h), f.verticalPosition == XH ? a >= l ? (_ += l, l = a - l || 1) : (_ += a, l -= a) : f[_a] == JH && (-a >= l ? (l = -a - l || 1, _ -= l) : l += a), this._4q(c, _, d, l, t[aw]);
                var r = new qr(i, qr[v$], t, this.element);
                r[kB] = this._9i, i[Pj](r)
            }
        }, enddrag: function (t, i) {
            if (this.element && this._9i && this._9i != this[f$]) {
                var n = new qr(i, qr[b$], t, this.element);
                n.point = this._9i, i.onInteractionEvent(n)
            }
        }
    }, E(Gr, wr), XY.ResizeInteraction = Gr;
    var $q = function (t) {
        this.graph = t
    };
    $q.prototype = {
        onstart2: function (t, i) {
            this[Ay](t, i)
        }, onclick: function (t, i) {
            if (!Ti(t)) {
                var n = t[Hy]();
                if (n && i[KB](n) && (!i[sB](n) || 1 != i[Od][sh])) {
                    i.setSelection(n);
                    var e = new qr(i, qr.SELECT, t, i.selectionModel);
                    i[Pj](e)
                }
            }
        }, onstart: function (t, i) {
            if (!t.responded) {
                var n = t[Hy]();
                if (n && !i.isSelectable(n) && (n = null), n && Ti(t)) {
                    i[iR](n);
                    var e = new qr(i, qr.SELECT, t, i[Od]);
                    return void i[Pj](e)
                }
                if (!n || !i[Od][sB](n)) {
                    n ? (i[y$](n), i[g$](n)) : i[y$](null);
                    var e = new qr(i, qr[x$], t, i.selectionModel);
                    i.onInteractionEvent(e)
                }
            }
        }, onkeydown: function (t, i) {
            return 27 == t[fw] ? void i.unSelectAll() : void(Ti(t) && 65 == t[fw] && (i.selectAll(), F(t)))
        }
    }, RH[m$] = 3e3, RH[p$] = 1e3, Yr.CLASS_NAME = E$, Yr[w$] = 0, Yr.CURSOR_OFFSET_Y = 15, xi(ta + Yr[T$], {
        "user-select": od,
        "background-color": k$,
        overflow: ad,
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: WP,
        "pointer-events": od,
        border: O$,
        padding: S$,
        display: zR,
        position: sT
    }), Yr[A$] = function () {
        var t = Yr[M$];
        return t || (t = Yr[M$] = new Yr), t
    }, Yr[I$] = function (t, i, n) {
        Yr[A$]()[I$](t, i, n)
    }, Yr[n$] = function () {
        Yr.getInstance()[n$]()
    }, Yr.prototype = {
        getTooltipElement: function () {
            var t = this._lz;
            return t || (t = i[V_](X_), t.className = Yr[T$], this._lz = t, i[ym][ed](t)), t
        }, update: function (t, i) {
            if (this[pB]()) {
                var n = pj == i;
                t && !n && (t = t[ba](/\n/g, L$));
                var e = this[P$]();
                n ? e.textContent = t || "" : e[oR] = t || "", Ur(e, this[C$].x + Yr[w$], this._info.y + Yr[j$])
            }
        }, setTooltip: function (t, i) {
            if (!t || !t.content) return this[C$] = null, this._lz && (this._lz[pa][Uw] = od), void(this[R$] = Date.now());
            this._nb8 = null, this._info = t;
            var n = this[P$]();
            n.style[Uw] = "", this.update(this._info[D$], this[C$][Vo]), isNaN(i) && (i = RH[m$]), i && this[N$](this[B$].bind(this, !1), i)
        }, _nb8: null, _kk: null, stopTimer: function () {
            this._kk && (clearTimeout(this._kk), this._kk = null)
        }, startTimer: function (t, i) {
            this[$$](), this._kk = setTimeout(function (t) {
                this._kk = null, t()
            }.bind(this, t), i)
        }, show: function (t, i, n) {
            return this[pB]() || this[R$] && Date.now() - this._nb8 < 1e3 ? void this[B$](t, n) : (isNaN(i) && (i = RH[p$]), void(i ? this.startTimer(this.setTooltip[Sh](this, t, n), i) : this.setTooltip(t, n)))
        }, isShowing: function () {
            return this._lz && od !== this._lz[pa][Uw]
        }, hide: function () {
            this.stopTimer(), this[pB]() && this[B$](!1)
        }
    };
    var Fq = function (t) {
        this[C_] = t
    };
    Fq[vh] = {
        onstart: function (t, i) {
            this[Zy](i)
        }, _i0: null, onmousemove: function (t, i) {
            if (i[F$]) {
                var n = t[Hy](), e = n ? i[G$](n, t) : null;
                return e ? void Yr[I$]({
                    target: n,
                    content: e,
                    type: n.tooltipType,
                    x: t[z$],
                    y: t.pageY
                }, i[H$], i[Y$]) : void Yr.hide()
            }
        }, destroy: function () {
            Yr.hide()
        }
    };
    var Gq = function (t) {
        this[C_] = t
    };
    Gq[vh] = {
        destroy: function () {
            this[U$] && (this.delayAction = null)
        }, onmousewheel: function (t, i) {
            if (i[W$] !== !1 && t[vy]) {
                if (XY[Tj](t), i[TR]) {
                    var n = this[U$];
                    n || (n = this[U$] = new Wr(function () {
                        i[CR](!1)
                    })), i.pauseRendering(!0), n[tl](100)
                }
                i[q$](t, t[vy], !1)
            }
        }
    };
    var zq = function (t) {
        this[C_] = t
    };
    zq.prototype = {
        onclick: function (t, i) {
            i[q$](t, !Ti(t))
        }
    };
    var Hq = function (t) {
        this[C_] = t
    };
    Hq[vh] = {
        onclick: function (t, i) {
            i[q$](t, Ti(t))
        }
    }, E(qr, tY), qr[V$] = X$, qr[rB] = K$, qr.ELEMENT_MOVE_END = J$, qr[Lj] = Z$, qr.ELEMENT_REMOVED = Q$, qr[PB] = tF, qr.POINT_MOVING = iF, qr[BB] = nF, qr.POINT_ADD = eF, qr[TB] = sF, qr[rF] = hF, qr[v$] = aF, qr[b$] = oF, qr.ROTATING = fF, qr.ROTATE_END = uF, qr[uB] = cF, qr.PAN_END = _F, qr[$O] = dF, qr[lF] = vF, qr.SELECT = qd, qr.SELECT_START = bF, qr[ZB] = yF, qr[XB] = gF, qr.LONG_CLICK = xF, Vr.prototype = {
        _98: function (t) {
            if (this[mF]) switch (t[el]) {
                case uY.KIND_REMOVE:
                    this[mF][pF](t.data);
                    break;
                case uY.KIND_CLEAR:
                    this[mF][EF](t[Yo])
            }
        }, destroy: function () {
            delete this._ko, delete this._4s, this[mF] && (this[mF]._ie(), delete this[mF])
        }, _ko: null, _4s: null, defaultMode: null, _fr: function (t, i, n) {
            this._4s[t] = new Tr(i, n), t == this[sl] && this[mF][wF](i)
        }, addCustomInteraction: function (t) {
            this._interactionSupport._n2CustomInteractionListener(t)
        }, removeCustomInteraction: function (t) {
            this[mF]._jrCustomInteractionListener(t)
        }, _my: function (t) {
            var i = this._4s[t];
            return i ? i : Yq[t]
        }
    }, J(Vr[vh], {
        defaultCursor: {
            get: function () {
                return this[TF] ? this[TF][SR] : void 0
            }
        }, currentMode: {
            get: function () {
                return this._n8urrentMode
            }, set: function (t) {
                this[AR] != t && (this._n8urrentMode, this._interactionSupport || (this[mF] = new RY(this._ko)), this[AR] = t, this[TF] = this._my(this._n8urrentMode), this._ko.cursor = this[SR], this[mF][wF](this[TF] ? this[TF][kF](this._ko) : []))
            }
        }
    });
    var Yq = {};
    RH[OF] = function (t, i, n) {
        var e = new Tr(i, n);
        Yq[t] = e
    }, KY[SF] = AF, KY[MF] = Id, KY[IF] = zd, KY[LF] = PF, KY[CF] = jF, KY[RF] = DF, KY[NF] = BF, KY[$F] = FF, KY[GF] = zF, RH.registerInteractions(KY[SF], [$q, Dq, Gq, jq, Pq, Fq, Bq]), RH[OF](KY[RF], [Cq, Pr, $q, Dq, Gq, jq, Fq]), RH[OF](KY.INTERACTION_MODE_CREATE_EDGE, [Cq, $r, $q, Sr, Dq, Gq, jq, Fq]), RH[OF](KY[$F], [Cq, Ir, $q, Dq, Gq, jq, Fq]), RH.registerInteractions(KY[GF], [Lr, $q, Dq, Gq, jq, Fq]), RH.registerInteractions(KY[MF], [Cq, Gr, $r, $q, Rq, Dq, Gq, jq, Pq, Fq, Bq]), RH.registerInteractions(KY[IF], [Cq, Gr, $r, $q, Rq, Nq, Dq, Gq, jq, Pq, Fq]), RH[OF](KY.INTERACTION_MODE_ZOOMIN, [Gq, jq, zq], DY), RH[OF](KY[CF], [Gq, jq, Hq], NY), XY[HF] = Dq, XY.SelectionInteraction = $q, XY[YF] = Rq, XY.WheelZoomInteraction = Gq, XY[UF] = Pq, XY[WF] = jq, XY[qF] = Fq, XY[VF] = Nq, XY.RectangleSelectionInteractionByRightButton = Bq, XY.PointsInteraction = $r;
    var Uq = function (t) {
        this[C_] = t
    };
    XY[XF] = Uq, Uq.prototype = {
        getNodeBounds: function (t) {
            return this[C_].getUIBounds(t)
        }, isLayoutable: function (t) {
            return this[C_][Sd](t) && t[KF] !== !1
        }, getLayoutResult: function () {
        }, updateLocations: function (t, i, n, e, s) {
            if (i === !0) {
                if (this[JF] || (this.animate = new kV), n && (this.animate[MD] = n), e && (this[JF][LD] = e), this[JF].locations = t, s) {
                    var r = s, h = this;
                    s = function () {
                        r[rh](h, t)
                    }
                }
                return void this.animate[iN](s)
            }
            for (var a in t) {
                var o = t[a], f = o[ZF];
                f[eR](o.x, o.y)
            }
            s && s[rh](this, t)
        }, _fi: function (t) {
            var i, n, e, s = null;
            t && (i = t.byAnimate, s = t[Qc], n = t[MD], e = t[LD]);
            var r = this[QF](t);
            return r ? (this.updateLocations(r, i, n, e, s), r) : !1
        }, doLayout: function (t, i) {
            return this[C_] && i !== !0 ? void this[C_][Fj](function () {
                this._fi(t)
            }, this) : this._fi(t)
        }
    };
    var Wq = 110, qq = 120, Vq = 130, Xq = 210, Kq = 220, Jq = 230, Zq = 111, Qq = 112, tV = 121, iV = 122, nV = 211,
        eV = 212, sV = 221, rV = 222;
    KY[tG] = Wq, KY[iG] = qq, KY[nG] = Vq, KY[eG] = Xq, KY[sG] = Kq, KY[rG] = Jq, KY.DIRECTION_RIGHT_TOP = Zq, KY[hG] = Qq, KY[aG] = tV, KY[oG] = iV, KY[fG] = nV, KY.DIRECTION_BOTTOM_RIGHT = eV, KY[uG] = sV, KY[cG] = rV;
    var hV = _G, aV = dG, oV = lG, fV = vG;
    KY.LAYOUT_TYPE_EVEN = hV, KY[bG] = oV, KY.LAYOUT_TYPE_EVEN_VERTICAL = fV, KY[yG] = aV, XY[gG] = Xr;
    var uV = function (t) {
        this[C_] = t
    };
    uV.prototype = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: Xq,
        layoutType: hV,
        defaultSize: {width: 50, height: 60},
        getNodeSize: function (t) {
            if (this.graph._8m[Wc]) {
                var i = this[C_][j_](t);
                if (i) return i._fg
            }
            return t[Sm] && t[Sm].bounds ? {width: t[Sm][bu][La], height: t[Sm][bu].height} : this[xG]
        },
        _n8l: function (t, i) {
            var n = t.id;
            if (!(n in this._9t) && this.isLayoutable(t)) {
                var e, s = this[mG](t);
                e = s instanceof HH ? [-s.x, -s.y] : [s.width / 2, s.height / 2];
                var r = (t[pG], i ? this._9t[i.id] : this[EG]);
                this._9t[n] = new cV(this[wG](t), this.getVGap(t), this[TG](t), t[pG], r, t, s[La], s.height, e)
            }
        },
        getHGap: function (t) {
            return t && D(t[kG]) ? t[kG] : this[kG]
        },
        getVGap: function (t) {
            return t && D(t[OG]) ? t[OG] : this[OG]
        },
        getLayoutType: function (t) {
            return t && t[SG] ? t[SG] : this[SG]
        },
        _9t: null,
        _n9e: null,
        _l5: function () {
            this._9t = null, this[EG] = null
        },
        getLayoutResult: function (t) {
            var i, n, e, s, r = this[C_];
            t instanceof Object && (i = t.x, n = t.y, r = t[AG] || this[C_], e = t[bu], s = t[MG]), this._9t = {}, this[EG] = new cV, this[EG]._n0(this[kG], this[OG], this.parentChildrenDirection, this[SG]);
            var h = {}, a = AV(r, this._n8l, this, !1, s);
            return a && (this[EG]._fi(i || 0, n || 0, h), e && e.set(this._n9e.x, this[EG].y, this[EG][La], this[EG].height)), this._l5(), h
        },
        doLayout: function (t, i) {
            if (D(t)) {
                var n = t, e = 0;
                D(i) && (e = i), t = {x: n, y: e}, i = !0
            }
            return T(this, uV, IG, [t, i])
        }
    }, E(uV, Uq);
    var cV = function (t, i, n, e, s, r, h, a, o) {
        this._lp = t || 0, this._lr = i || 0, this[SG] = n, this[pG] = e, this.parentBounds = s, s && s._g7(this), this[ZF] = r, this._ee = h, this[LG] = a, this._nbnchorLocation = o
    };
    cV.prototype = {
        _n0: function (t, i, n, e) {
            this._lp = t, this._lr = i, this[pG] = n, this.layoutType = e
        },
        _8s: function () {
            this._ff = []
        },
        _lp: 0,
        _lr: 0,
        _ff: null,
        _ee: 0,
        _n9w: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _g7: function (t) {
            this._ff || (this._ff = []), this._ff[_h](t)
        },
        _n89: function (t, i, n, e) {
            var s = new HH;
            return n(this._ff, function (n) {
                n._3h(t, i), s.add(n), e ? t += n[La] + this._lp : i += n[ua] + this._lr
            }, this), s
        },
        _8t: function (t, i, n, e, s) {
            var r, h = e ? this._lp : this._lr, a = e ? this._lr : this._lp, o = e ? "width" : ua,
                f = e ? "height" : La, u = e ? "_ee" : LG, c = e ? "_n9w" : PG, _ = e ? "hostDX" : CG,
                d = e ? "hostDY" : jG, v = new HH, b = 0, y = 0, g = [], x = 0, m = 0;
            n(this._ff, function (n) {
                var s = m >= y;
                n[RG] = s ? e ? qq : Kq : e ? Wq : Xq, n._3h(t, i), s ? (g[_h](n), b = Math.max(b, n[o]), y += n[f] + a) : (r || (r = []), r[_h](n), x = Math.max(x, n[o]), m += n[f] + a)
            }, this), y -= a, m -= a;
            var p = Math.max(y, m), E = h, w = 0;
            this[ZF] && (s && (E += this[u] + h, p > this[c] ? this[d] = (p - this[c]) / 2 : w = (this[c] - p) / 2), this[_] = b + E / 2 - this[u] / 2);
            var T = 0, k = w;
            return l(g, function (t) {
                e ? t[im](b - t[o], k) : t.offset(k, b - t[o]), k += a + t[f], v.add(t)
            }, this), r ? (k = w, T = b + E, l(r, function (t) {
                e ? t[im](T, k) : t.offset(k, T), k += a + t[f], v.add(t)
            }, this), v) : v
        },
        offset: function (t, i) {
            this.x += t, this.y += i, this.nodeX += t, this[DG] += i, this._70(t, i)
        },
        _n9o: function (t, i) {
            return 2 * this.cx - t - i - t
        },
        _n9n: function (t, i) {
            return 2 * this.cy - t - i - t
        },
        _lv: function (t) {
            if (this._ff && 0 != this._ff[sh]) {
                if (t) return this.node && (this[NG] += this[BG](this.nodeX, this._ee)), void l(this._ff, function (t) {
                    t[im](this[BG](t.x, t.width), 0)
                }, this);
                this[ZF] && (this.nodeY += this[$G](this.nodeY, this._n9w)), l(this._ff, function (t) {
                    t.offset(0, this[$G](t.y, t.height))
                }, this)
            }
        },
        _70: function (t, i) {
            this._ff && l(this._ff, function (n) {
                n[im](t, i)
            }, this)
        },
        _3h: function (t, i) {
            return this.x = t || 0, this.y = i || 0, this._ff && 0 != this._ff.length ? void this._1d(this.x, this.y, this[SG]) : void(this.node && (this[La] = this._ee, this[ua] = this[LG], this[NG] = this.x, this[DG] = this.y))
        },
        _7v: function (t) {
            if (this.node) {
                var i = this._nbnchorLocation, n = i[0], e = i[1];
                t[this[ZF].id] = {
                    node: this.node,
                    x: this[NG] + n,
                    y: this[DG] + e,
                    left: this.nodeX,
                    top: this.nodeY,
                    width: this._ee,
                    height: this[LG]
                }
            }
            this._ff && l(this._ff, function (i) {
                i._7v(t)
            }, this)
        },
        _fi: function (t, i, n) {
            this._3h(t, i), this._7v(n)
        },
        _1d: function (t, i, e) {
            var s, r = t, h = i;
            !this[pG] && this.parentBounds && (this[pG] = this[RG] || this[FG][pG]);
            var a = this.parentChildrenDirection, o = Xr(a);
            if (this.node) {
                s = a == Vq || a == Jq;
                var f = Kr(a);
                s || (o ? t += this._ee + this._lp : i += this[LG] + this._lr)
            }
            var u, c = this.node && this.node[GG] ? b : l;
            if (e == aV) u = this._8t(t, i, c, !o, s); else {
                var _;
                _ = e == hV ? !o : e == oV, u = this[zG](t, i, c, _, s)
            }
            var d = 0, v = 0;
            if (u && !u.isEmpty() && (d = u[La], v = u[ua], this.add(u)), this.node) {
                if (this.nodeX = r, this[DG] = h, this[jG] !== n || this.hostDY !== n) this[NG] += this[jG] || 0, this[DG] += this[CG] || 0; else {
                    var y;
                    y = a == Xq || a == Kq || a == qq || a == Wq ? 1 : a == eV || a == rV || a == iV || a == Qq ? 0 : 2, o ? (1 == y ? this.nodeY += v / 2 - this._n9w / 2 : 2 == y && (this.nodeY += v - this[LG]), h > this[DG] && this.offset(0, h - this[DG])) : (1 == y ? this.nodeX += d / 2 - this._ee / 2 : 2 == y && (this[NG] += d - this._ee), r > this[NG] && this[im](r - this.nodeX, 0))
                }
                this[Ok](this.nodeX, this[DG], this._ee, this[LG]), f && this._lv(o)
            }
        },
        node: null,
        uiBounds: null
    }, E(cV, HH), Zr.prototype = {
        layoutDatas: null, isMovable: function (t) {
            return !this[ul][t.id]
        }, _7e: !1, _3d: function () {
            this._7e = !0, this.graph._1f[Mv](this._95, this), this[C_]._17[Mv](this._1y, this)
        }, _1n: function () {
            this._7e = !1, this.graph._1f.removeListener(this._95, this), this[C_]._17[Mm](this._1y, this)
        }, invalidateFlag: !0, invalidateLayoutDatas: function () {
            this[GO] = !0
        }, resetLayoutDatas: function () {
            return this[GO] = !1, this[HG] = Jr[rh](this)
        }, _1y: function (t) {
            qr.ELEMENT_MOVE_START == t[el] ? (this[ul] = {}, t.datas[Hu](function (t) {
                this[ul][t.id] = t
            }, this)) : qr[oB] == t[el] && (this[ul] = {})
        }, _95: function () {
            this[YG]()
        }, isRunning: function () {
            return this[UG] && this[UG]._ep()
        }, getLayoutResult: function () {
            this[WG](), this[qG]();
            for (var t = this[VG](this[HG][XG] || 0, this.layoutDatas[KG] || 0), i = 0; t > i && this.step(!1) !== !1; i++) ;
            var n = this[HG][JG];
            return this[ZG](), n
        }, _me: function () {
            return !1
        }, step: function (t) {
            if (t === !1) return this._me(this[QG]);
            (this[GO] || !this[HG]) && this[qG]();
            var i = this._me(t), n = this[HG][JG];
            for (var e in n) {
                var s = n[e], r = s[ZF];
                this[sR](r) ? r[eR](s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
            }
            return i
        }, onstop: function () {
            delete this[HG]
        }, start: function (t) {
            if (this[tz]()) return !1;
            this._7e || this._3d(), this[iz] || (this[iz] = function (t) {
                return this[fB](t)
            }[Sh](this)), this[YG](), this[UG] = new WY(this[iz]);
            var i = this;
            return this[UG]._km(function () {
                i.onstop(), t && t()
            }), !0
        }, stop: function () {
            this.timer && (this[UG]._li(), this.onstop())
        }, getMaxIterations: function (t) {
            return Math.min(1e3, 3 * t + 10)
        }, minEnergyFunction: function (t, i) {
            return 10 + Math.pow(t + i, 1.4)
        }, resetGraph: function () {
            this._7e || this._3d(), this[qG]()
        }, destroy: function () {
            this[WG](), this._1n()
        }
    }, E(Zr, Uq);
    var _V = function (t, i, n, e) {
        this.graph = t, D(i) && (this.radius = i), D(n) && (this.gap = n), D(e) && (this.startAngle = e)
    };
    XY[nz] = _V;
    var dV = ez, lV = sz, vV = rz, bV = hz;
    KY[az] = dV, KY[oz] = lV, KY[fz] = vV, KY[uz] = bV, _V[vh] = {
        angleSpacing: dV,
        radiusMode: bV,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _9t: null,
        _n9e: null,
        _l5: function () {
            this._9t = null, this[EG] = null
        },
        getLayoutResult: function (t) {
            var i, n = 0, e = 0, s = this[C_];
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[AG] || this[C_], i = t.bounds), this._9t = {}, this._n9e = new xV(this);
            var r = {}, h = MV(s, this[cz], this);
            return h && (this[EG]._ff && 1 == this[EG]._ff[sh] && (this[EG] = this[EG]._ff[0]), this._n9e._e9(!0), this[EG]._61(n, e, this.startAngle, r, i)), this._l5(), r
        },
        _n8l: function (t, i) {
            if (this[rl](t)) {
                var n = i ? this._9t[i.id] : this._n9e;
                this._9t[t.id] = new xV(this, t, n)
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this[cv]
        },
        getNodeSize: function (t) {
            if (this[C_]._8m._nbq) {
                var i = this[C_][j_](t);
                if (i) return (i._fg[La] + i._fg.height) / 2
            }
            return this[xG]
        },
        getGap: function () {
            return this.gap
        },
        _2i: function (t, i, n) {
            return this[mG](t, i, n) + this.getGap(t, i, n)
        }
    };
    var yV = function (t) {
        var i, n = this._ff[sh], e = 0, s = 0;
        if (l(this._ff, function (t) {
                var n = t._e9();
                1 > n && (n = 1), s += n, n > e && (e = n, i = t)
            }, this), n > 1) {
            var r = 0, h = {}, a = s / n / 3;
            s = 0, l(this._ff, function (t) {
                var i = t._m8;
                a > i && (i = a), h[t.id] = i, s += i
            }, this);
            var o = VW / s;
            l(this._ff, function (i, n) {
                var e = h[i.id], s = e * o;
                0 === n && (r = t ? -s / 2 : -s), i._l3 = r + s / 2, i._l4 = s, r += s
            }, this)
        }
        return [e, i._l4]
    }, gV = function (t) {
        var i = this._8w, n = 2 * Math.PI / i, e = 0, s = t ? 0 : i > 1 ? -n / 2 : 0;
        return l(this._ff, function (t) {
            t._l3 = s % VW, s += n, t._l4 = n;
            var i = t._e9();
            i > e && (e = i)
        }, this), [e, n]
    }, xV = function (t, i, n) {
        this[_z] = t, i && (this._ma = i, this.id = i.id), n && (n._g7(this), n._m6 = !1, this._l2 = n._l2 + 1)
    }, VW = 2 * Math.PI;
    xV[vh] = {
        _l4: 0,
        _l3: 0,
        _kc: 0,
        _ei: 0,
        _n8s: 0,
        _l2: 0,
        _m6: !0,
        _m8: 0,
        _gw: 0,
        _ff: null,
        _ma: null,
        _g7: function (t) {
            this._ff || (this._ff = []), this._ff[_h](t), t[hc] = this
        },
        _h0: function (t) {
            if (this._l3 = (this._l3 + t) % VW, this._ff) {
                var i = this._ff.length;
                if (1 == i) return void this._ff[0]._h0(this._l3);
                t = this._l3 + Math.PI, l(this._ff, function (i) {
                    i._h0(t)
                }, this)
            }
        },
        _8w: 0,
        _7a: function (t) {
            return this._ma && (this._gw = this.layouter._2i(this._ma, this._l2, this._m6) / 2), this._ff ? (this._gw, this._8w = this._ff[sh], this._8w <= 2 || this[_z][dz] == lV ? gV[rh](this, t) : yV[rh](this, t)) : null
        },
        _e9: function (t) {
            var i = this._7a(t);
            if (!i) return this._m8 = this._gw;
            var n = i[0], e = i[1], s = this[_z][lz](this._ma, this._l2);
            if (s < this._gw && (s = this._gw), this._ei = s, this._gw + n > s && (s = this._gw + n), n && this._8w > 1 && e < Math.PI) {
                var r = n / Math.sin(e / 2);
                r > s && (s = r)
            }
            return this._kc = s, this._m8 = s + n, this._ma && this._ff && this[_z].radiusMode == bV && l(this._ff, function (t) {
                var i = t._m8;
                1 == t._8w && (i /= 2);
                var n = this._gw + i, e = t._l4;
                if (e && e < Math.PI) {
                    var s = Math.sin(e / 2), r = i / s;
                    r > i && (i = r)
                }
                n > i && (i = n), t[vz] = i
            }, this), (!this._ma || t) && this._h0(0), this._m8
        },
        _61: function (t, i, n, e, s) {
            if (this._ma && (e[this._ma.id] = {
                    x: t,
                    y: i,
                    node: this._ma
                }, s && s.addRect(t - this._gw / 2, i - this._gw / 2, this._gw, this._gw)), this._ff) {
                if (!this._ma && 1 == this._ff[sh]) return void this._ff[0]._61(t, i, n, e, s);
                n = n || 0;
                var r = this._kc, h = this._ei;
                l(this._ff, function (a) {
                    var o = r;
                    a[vz] && (o = Math.max(h, a[vz]));
                    var f = a._l3 + n, u = t + o * Math.cos(f), c = i + o * Math.sin(f);
                    a._61(u, c, n, e, s)
                }, this)
            }
        }
    }, E(_V, Uq);
    var mV = function () {
        w(this, mV, arguments)
    };
    E(mV, Qr);
    var pV = function (t, i) {
        this[bz] = t, this[yz] = i, t == i ? (this[lc] = !0, this._kt = t._kf) : this._kt = new DH, this._8y = [], this._h4 = RH[gz]
    };
    RH[gz] = !0, pV[vh] = {
        node1: null,
        node2: null,
        _kt: null,
        _h4: RH.EDGE_BUNDLE_EXPANDED,
        _8y: null,
        _h7: null,
        agentEdge: null,
        _nbs: function (t, i, n) {
            this._kt[Hu](function (e) {
                return n && e[Ec] != n && e[cc] != n ? void 0 : t[rh](i, e)
            })
        },
        _63: 0,
        _65: 0,
        _im: function (t, i) {
            return this._kt.add(t) === !1 ? !1 : (i == this.node1 ? this._63++ : this._65++, this[Wc] ? void this._13(t) : void(this[Wc] = !0))
        },
        _n8z: function (t, i) {
            return this._kt.remove(t) === !1 ? !1 : (i == this[bz] ? this._63-- : this._65--, this._13(t), void this._kt[Hu](function (t) {
                t[jk] = !0, t[Tk] = !0
            }, this))
        },
        _13: function (t) {
            this[xz] = !0, this._6e = !0, t[jk] = !0, t[Tk] = !0
        },
        _n9z: function () {
            this._6e || (this._6e = !0, this._kt.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !0
            }))
        },
        isEmpty: function () {
            return this._kt[jl]()
        },
        isPositiveOrder: function (t) {
            return this[bz] == t.$from || this[bz] == t[cc]
        },
        canBind: function (t) {
            return t && this._6e && this.validate(t), this._kt[sh] > 1 && this._8y[sh] > 1
        },
        _io: function (t) {
            return this._8y.indexOf(t)
        },
        getYOffset: function (t) {
            return this._h7[t.id]
        },
        _4b: function (t) {
            if (!this[WC]()) return void(this._h7 = {});
            var i = {}, n = this._8y[sh];
            if (!(2 > n)) {
                var e = 0, s = this._8y[0];
                i[s.id] = 0;
                for (var r = 1; n > r; r++) {
                    s = this._8y[r];
                    var h = t[__](s, oq.EDGE_BUNDLE_GAP) || wq[oq[_j]];
                    e += h, i[s.id] = e
                }
                if (!this.isLooped && e) for (var a = e / 2, r = 0; n > r; r++) s = this._8y[r], i[s.id] -= a;
                this._h7 = i
            }
        },
        _nbr: function (t) {
            return this._h4 == t ? !1 : (this._h4 = t, this[yT](), !0)
        },
        reverseExpanded: function () {
            return this[mz](!this._h4)
        },
        _15: function () {
            this[xz] = !1, this._8y[sh] = 0;
            var t;
            this._kt.forEach(function (i) {
                if (i[UC]()) {
                    if (!this.isPositiveOrder(i)) return t || (t = []), void t[_h](i);
                    this._8y[_h](i)
                }
            }, this), t && (this._8y = t.concat(this._8y))
        },
        _eb: function (t) {
            return t == this[pz] || !this[WC]() || this._h4
        },
        validate: function (t) {
            this._6e = !1, this._kt[Hu](function (t) {
                t[jk] = !1
            }), this[xz] && this._15();
            var i = this._h4, n = this[WC](), e = !n || i;
            l(this._8y, function (t) {
                t._$p = !0, t[Ez] = e, e && (t[Tk] = !0)
            }, this), e ? this[wz](null, t) : (this._nb5(this._8y[0], t), this.agentEdge._hdInBundle = !0, this.agentEdge[Tk] = !0), e && this._4b(t)
        },
        _nb5: function (t, i) {
            if (t != this.agentEdge) {
                var n = this[pz];
                return this.agentEdge = t, i && i._4k(new iY(this, pz, t, n)), !0
            }
        }
    }, J(pV[vh], {
        bindableEdges: {
            get: function () {
                return this._8y
            }
        }, edges: {
            get: function () {
                return this._kt._jd
            }
        }, length: {
            get: function () {
                return this._kt ? this._kt[sh] : 1
            }
        }, expanded: {
            get: function () {
                return this._h4
            }, set: function (t) {
                return this._h4 == t ? !1 : (this._h4 = t, void this[yT]())
            }
        }
    });
    var EV = function () {
        function t(t, i) {
            this[ZF] = t, this.body = i
        }

        function i() {
            this.stack = [], this[Tz] = 0
        }

        var n = -1e6, e = .8;
        i.prototype = {
            isEmpty: function () {
                return 0 === this.popIdx
            }, push: function (i, n) {
                var e = this[kz][this[Tz]];
                e ? (e[ZF] = i, e[ym] = n) : this.stack[this.popIdx] = new t(i, n), ++this.popIdx
            }, pop: function () {
                return this[Tz] > 0 ? this.stack[--this.popIdx] : void 0
            }, reset: function () {
                this[Tz] = 0
            }
        };
        var s = [], r = new i, h = function () {
            this[ym] = null, this[Oz] = [], this.mass = 0, this.massX = 0, this.massY = 0, this.left = 0, this.top = 0, this[ha] = 0, this[aa] = 0, this[Sz] = !1
        }, a = [], o = 0, f = function () {
            var t;
            return a[o] ? (t = a[o], t.quads[0] = null, t[Oz][1] = null, t[Oz][2] = null, t[Oz][3] = null, t[ym] = null, t[Az] = t[Mz] = t[Iz] = 0, t[Tf] = t[aa] = t.top = t[ha] = 0, t[Sz] = !1) : (t = new h, a[o] = t), ++o, t
        }, u = f(), c = function (t, i) {
            var n = Math.abs(t.x - i.x), e = Math.abs(t.y - i.y);
            return 1e-8 > n && 1e-8 > e
        }, _ = function (t) {
            for (r.reset(), r[_h](u, t); !r.isEmpty();) {
                var i = r.pop(), n = i.node, e = i[ym];
                if (n[Sz]) {
                    var s = e.x, h = e.y;
                    n[Az] = n.mass + e[Az], n.massX = n[Mz] + e.mass * s, n[Iz] = n[Iz] + e[Az] * h;
                    var a = 0, o = n.left, _ = (n[aa] + o) / 2, d = n.top, l = (n[ha] + d) / 2;
                    if (s > _) {
                        a += 1;
                        var v = o;
                        o = _, _ += _ - v
                    }
                    if (h > l) {
                        a += 2;
                        var b = d;
                        d = l, l += l - b
                    }
                    var y = n[Oz][a];
                    y || (y = f(), y[Tf] = o, y.top = d, y[aa] = _, y[ha] = l, n[Oz][a] = y), r[_h](y, e)
                } else if (n[ym]) {
                    var g = n[ym];
                    if (n[ym] = null, n[Sz] = !0, c(g, e)) {
                        if (n[aa] - n[Tf] < 1e-8) return;
                        do {
                            var x = Math[Uh](), m = (n[aa] - n.left) * x, p = (n[ha] - n.top) * x;
                            g.x = n[Tf] + m, g.y = n.top + p
                        } while (c(g, e))
                    }
                    r[_h](n, g), r[_h](n, e)
                } else n[ym] = e
            }
        }, d = function (t) {
            var i, r, h, a, o = s, f = 1, c = 0, _ = 1;
            for (o[0] = u; f;) {
                var d = o[c], l = d[ym];
                f -= 1, c += 1, l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math[Lo](r * r + h * h), 0 === a && (r = (Math.random() - .5) / 50, h = (Math[Uh]() - .5) / 50, a = Math[Lo](r * r + h * h)), i = n * l.mass * t[Az] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (r = d[Mz] / d[Az] - t.x, h = d[Iz] / d[Az] - t.y, a = Math[Lo](r * r + h * h), 0 === a && (r = (Math[Uh]() - .5) / 50, h = (Math[Uh]() - .5) / 50, a = Math.sqrt(r * r + h * h)), (d[aa] - d[Tf]) / a < e ? (i = n * d[Az] * t[Az] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (d[Oz][0] && (o[_] = d[Oz][0], f += 1, _ += 1), d.quads[1] && (o[_] = d[Oz][1], f += 1, _ += 1), d[Oz][2] && (o[_] = d.quads[2], f += 1, _ += 1), d.quads[3] && (o[_] = d[Oz][3], f += 1, _ += 1)))
            }
        }, l = function (t, i) {
            n = i;
            var e, s = Number.MAX_VALUE, r = Number[ql], h = Number[Lz], a = Number[Lz], c = t, d = c[sh];
            for (e = d; e--;) {
                var l = c[e].x, v = c[e].y;
                s > l && (s = l), l > h && (h = l), r > v && (r = v), v > a && (a = v)
            }
            var b = h - s, y = a - r;
            for (b > y ? a = r + b : h = s + y, o = 0, u = f(), u[Tf] = s, u[aa] = h, u.top = r, u[ha] = a, e = d; e--;) _(c[e], u)
        };
        return {init: l, update: d}
    }, wV = function (t) {
        t.fx -= t.x * this[Pz], t.fy -= t.y * this[Pz]
    }, TV = function (t) {
        if (0 != t.k) {
            var i = this[Cz], n = t.from, e = t.to, s = e.x - n.x, r = e.y - n.y, h = s * s + r * r,
                a = Math[Lo](h) || .1, o = (a - i) * t.k * this[jz];
            o /= a;
            var f = o * s, u = o * r;
            e.fx -= f, e.fy -= u, n.fx += f, n.fy += u
        }
    };
    Qr.prototype = {
        appendNodeInfo: function (t, i) {
            i[Az] = t[Rz] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        }, appendEdgeInfo: function (t, i) {
            i.k = t.layoutElasticity || 1
        }, setMass: function (t, i) {
            t[Rz] = i, this[HG] && this[HG][JG] && (t = this.layoutDatas.nodes[t.id], t && (t.mass = i))
        }, setElasticity: function (t, i) {
            t.layoutElasticity = i, this[HG] && this[HG][hO] && (t = this[HG][hO][t.id], t && (t.k = i))
        }, _n9u: 50, _hk: .5, timeStep: .05, repulsion: 50, attractive: .1, elastic: 3, _mi: 1e3, _k0: function (t) {
            return this._mi + .3 * (t - this._mi)
        }, _me: function (t, i) {
            var n = (Date.now(), this[HG][JG]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[Uh]() - .5, s.y += Math[Uh]() - .5), wV[rh](this, s)
            }
            var r = this.layoutDatas[Dz];
            if (r) for (var e in r) {
                var h = r[e], a = h[hh], o = 0, f = 0;
                a[Hu](function (t) {
                    o += t.x, f += t.y
                }), o /= a.length, f /= a[sh];
                var u = 10 * this.attractive;
                a.forEach(function (t) {
                    t.fx -= (t.x - o) * u, t.fy -= (t.y - f) * u
                })
            }
            var c = this._nbodyForce;
            c || (c = this[Nz] = EV()), c[kd](this[HG][Bz], -this.repulsion * this.repulsion * this.repulsion);
            for (var e in n) c[$z](n[e]);
            if (this[jz]) {
                var _ = this[HG][hO];
                for (var e in _) TV[rh](this, _[e])
            }
            return this._mj(t)
        }, _mj: function (t) {
            var i = this.layoutDatas.minEnergy, n = (this[HG][Fz], this[HG].nodes), t = this[QG], e = 0, s = this._hk;
            for (var r in n) {
                var h = n[r], a = h.fx / h[Az], o = h.fy / h[Az], f = h.vx += a * t, u = h.vy += o * t;
                h.x += f * t, h.y += u * t, i > e && (e += 2 * (f * f + u * u)), h.fx = 0, h.fy = 0, h.vx *= s, h.vy *= s
            }
            return this[HG][Fz] = e, e >= i
        }
    }, E(Qr, Zr), XY[Gz] = Qr;
    var kV = function (t) {
        this[zz] = t
    };
    kV[vh] = {
        oldLocations: null, _en: null, duration: 700, animationType: UY[Hz], _7t: function (t) {
            if (this._en = t, this[Yz] = {}, t) for (var i in t) {
                var n = t[i], e = n[ZF];
                this[Yz][i] = {x: e.x, y: e.y}
            }
        }, setLocation: function (t, i, n) {
            t[eR](i, n)
        }, forEach: function (t, i) {
            for (var n in this.locations) {
                var e = this.oldLocations[n], s = this[zz][n];
                t.call(i, e, s)
            }
        }, _k8: function (t) {
            this.forEach(function (i, n) {
                var e = n[ZF], s = i.x + (n.x - i.x) * t, r = i.y + (n.y - i.y) * t;
                this.setLocation(e, s, r)
            }, this)
        }, stop: function () {
            this[Uz] && this[Uz]._li()
        }, start: function (t) {
            this._nbnimate ? (this[Uz]._li(), this._nbnimate._is = this[MD], this[Uz][Wz] = this[LD], this._nbnimate[qz] = this._onfinish) : this[Uz] = new qY(this._k8, this, this[MD], this[LD]), this[Uz]._km(t)
        }
    }, J(kV[vh], {
        locations: {
            get: function () {
                return this._en
            }, set: function (t) {
                this._en != t && this._7t(t)
            }
        }
    });
    var OV = function (t) {
        function i(i) {
            var n = !1;
            return i[Vz](function (i) {
                return t[z_](i) && !i.isLooped() ? (n = !0, !1) : void 0
            }), n
        }

        function n(i) {
            var n = !1;
            return i[dl](function (i) {
                return t[z_](i) && !i[lc]() ? (n = !0, !1) : void 0
            }), n
        }

        var e, s = new DH;
        return t[Hu](function (t) {
            t instanceof nq && (i(t) ? !e && n(t) && (e = t) : s.add(t))
        }), s.isEmpty() && e && s.add(e), s
    }, SV = function (t, i, n, e, s, r) {
        if (i instanceof cY) return t(i, n, e, s, r), i;
        if (i instanceof Tq) {
            var h = new DH;
            i[qk][Hu](function (t) {
                return i[Sd](t) ? t._he() && t._h4 && t[eh]() ? void(t[lO] && (t[lO][GO] = !1)) : void h.add(t) : void 0
            }), i = h
        } else if (Array[Xc](i)) i = new DH(i); else if (!(i instanceof DH)) throw new Error(Xz);
        return i = OV(i, e), i[Hu](function (i) {
            t(i, n, e, s, r)
        }), i
    }, AV = function (t, i, n, e, s) {
        return SV(IV, t, i, n, e, s)
    }, MV = function (t, i, n, e, s) {
        return SV(LV, t, i, n, e, s)
    };
    bs.prototype[Kz] = function (t, i, n, e) {
        AV(this, t, i, n, e)
    }, bs[vh].forEachByTopoBreadthFirstSearch = function (t, i, n, e) {
        t instanceof Object && 1 == arguments[sh] && (i = t.scope), MV(this, t, i, n, e)
    }, XY[Kz] = AV, XY.forEachByTopoBreadthFirstSearch = MV;
    var IV = function (t, i, n, e, s) {
        function r(t, i, n, e, s, h, a, o) {
            t[_l] = h, e || i[rh](n, t, o, a), th(t, function (o) {
                r(o, i, n, e, s, h, a + 1, t)
            }, o, s, h, n), e && i.call(n, t, o, a)
        }

        r(t, i, n, e, s, {}, 0)
    }, LV = function (t, i, n, e, s) {
        function r(t, i, n, e, s, h, a) {
            var o, f = t[sh];
            t.forEach(function (t, r) {
                var u = t.v;
                u[_l] = h, e || i.call(n, u, t[Jz], a, r, f), th(u, function (t) {
                    o || (o = []), t[_l] = h, o[_h]({v: t, _from: u})
                }, u, s, h, n)
            }), o && r(o, i, n, e, s, h, a + 1), e && t[Hu](function (t, e) {
                i[rh](n, t.v, t[Jz], a, e, f)
            })
        }

        r([{v: t}], i, n, e, s, {}, 0)
    };
    XY[Zz] = X, XY.log = ti, XY[Af] = ni, XY.trace = ii, XY.isIE = pH, XY[Qz] = mH, XY[tH] = TH, XY.isGecko = kH, XY[iH] = OH, XY[nH] = AH, XY.isChrome = SH, XY.isMac = MH, XY[eH] = wq, XY[sH] = RH, XY.Styles = oq, XY[rH] = KY, XY.Graphs = DU, XY[hH] = Tq, XY.BaseUI = hq, XY.ElementUI = xq, XY[aH] = ks, XY[TN] = Ts, XY.LabelUI = pq, XY[oH] = mq, XY[fH] = sq, XY[uH] = CU, XY[SC] = bU, XY.InteractionEvent = qr, XY[Kw] = tq, XY.Node = nq, XY[yR] = iq, XY[cH] = bs, XY.EdgeBundle = pV, XY.TreeLayouter = uV, XY[Th] = _H;
    var PV = dH;
    return XY[lH] = vH, XY[dw] = bH, XY[lw] = "Copyright © 2019 Qunee.com", XY.css = bi, XY.IDrawable = kq, ti = function () {
    }, XY[_w] = yH, XY
}(window, document);