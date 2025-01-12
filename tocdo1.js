"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[62], {
    75717: function(t, e, i) {
        let r, n, o, s, a, h, u, l, c, p;
        i.d(e, {
            Aj: function() {
                return tB
            },
            Nm: function() {
                return tE
            },
            X$: function() {
                return iQ
            }
        });
        var f = Object.create
          , d = Object.defineProperty
          , y = Object.defineProperties
          , g = Object.getOwnPropertyDescriptor
          , v = Object.getOwnPropertyDescriptors
          , m = Object.getOwnPropertyNames
          , w = Object.getOwnPropertySymbols
          , b = Object.getPrototypeOf
          , T = Object.prototype.hasOwnProperty
          , _ = Object.prototype.propertyIsEnumerable
          , S = (t,e,i)=>e in t ? d(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : t[e] = i
          , P = (t,e)=>{
            for (var i in e || (e = {}))
                T.call(e, i) && S(t, i, e[i]);
            if (w)
                for (var i of w(e))
                    _.call(e, i) && S(t, i, e[i]);
            return t
        }
          , x = (t,e)=>y(t, v(e))
          , C = (t,e)=>()=>(e || t((e = {
            exports: {}
        }).exports, e),
        e.exports)
          , k = (t,e,i,r)=>{
            if (e && "object" == typeof e || "function" == typeof e)
                for (let n of m(e))
                    T.call(t, n) || n === i || d(t, n, {
                        get: ()=>e[n],
                        enumerable: !(r = g(e, n)) || r.enumerable
                    });
            return t
        }
          , A = (t,e,i)=>(i = null != t ? f(b(t)) : {},
        k(!e && t && t.__esModule ? i : d(i, "default", {
            value: t,
            enumerable: !0
        }), t))
          , E = C(t=>{
            t.DEFAULT_COMPARATOR = function(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }
            ,
            t.DEFAULT_REVERSE_COMPARATOR = function(t, e) {
                return t < e ? 1 : t > e ? -1 : 0
            }
            ,
            t.reverseComparator = function(t) {
                return function(e, i) {
                    return t(i, e)
                }
            }
            ,
            t.createTupleComparator = function(t) {
                return 2 === t ? function(t, e) {
                    return t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : t[1] < e[1] ? -1 : t[1] > e[1] ? 1 : 0
                }
                : function(e, i) {
                    for (var r = 0; r < t; ) {
                        if (e[r] < i[r])
                            return -1;
                        if (e[r] > i[r])
                            return 1;
                        r++
                    }
                    return 0
                }
            }
        }
        )
          , O = C(t=>{
            t.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer,
            t.SYMBOL_SUPPORT = "undefined" != typeof Symbol
        }
        )
          , z = C((t,e)=>{
            var i = O()
              , r = i.ARRAY_BUFFER_SUPPORT
              , n = i.SYMBOL_SUPPORT;
            e.exports = function(t, e) {
                var i, o, s, a, h;
                if (!t)
                    throw Error("obliterator/forEach: invalid iterable.");
                if ("function" != typeof e)
                    throw Error("obliterator/forEach: expecting a callback.");
                if (Array.isArray(t) || r && ArrayBuffer.isView(t) || "string" == typeof t || "[object Arguments]" === t.toString()) {
                    for (s = 0,
                    a = t.length; s < a; s++)
                        e(t[s], s);
                    return
                }
                if ("function" == typeof t.forEach) {
                    t.forEach(e);
                    return
                }
                if (n && Symbol.iterator in t && "function" != typeof t.next && (t = t[Symbol.iterator]()),
                "function" == typeof t.next) {
                    for (i = t,
                    s = 0; !0 !== (h = i.next()).done; )
                        e(h.value, s),
                        s++;
                    return
                }
                for (o in t)
                    t.hasOwnProperty(o) && e(t[o], o)
            }
        }
        )
          , M = C((t,e)=>{
            var i = E()
              , r = z()
              , n = i.DEFAULT_COMPARATOR
              , o = i.reverseComparator;
            function s(t) {
                if (this.clear(),
                this.comparator = t || n,
                "function" != typeof this.comparator)
                    throw Error("mnemonist/FibonacciHeap.constructor: given comparator should be a function.")
            }
            function a(t, e) {
                t.root ? (e.right = t.root.right,
                e.left = t.root,
                t.root.right.left = e,
                t.root.right = e) : t.root = e
            }
            function h(t) {
                for (var e = [], i = t, r = !1; !(i === t && r); )
                    i === t && (r = !0),
                    e.push(i),
                    i = i.right;
                return e
            }
            function u(t, e) {
                t.root === e && (t.root = e.right),
                e.left.right = e.right,
                e.right.left = e.left
            }
            function l(t) {
                if (this.clear(),
                this.comparator = t || n,
                "function" != typeof this.comparator)
                    throw Error("mnemonist/FibonacciHeap.constructor: given comparator should be a function.");
                this.comparator = o(this.comparator)
            }
            s.prototype.clear = function() {
                this.root = null,
                this.min = null,
                this.size = 0
            }
            ,
            s.prototype.push = function(t) {
                var e = {
                    item: t,
                    degree: 0
                };
                return e.left = e,
                e.right = e,
                a(this, e),
                (!this.min || 0 >= this.comparator(e.item, this.min.item)) && (this.min = e),
                ++this.size
            }
            ,
            s.prototype.peek = function() {
                return this.min ? this.min.item : void 0
            }
            ,
            s.prototype.pop = function() {
                if (this.size) {
                    var t = this.min;
                    if (t.child) {
                        var e, i, r, n = h(t.child);
                        for (i = 0,
                        r = n.length; i < r; i++)
                            a(this, e = n[i]),
                            delete e.parent
                    }
                    return u(this, t),
                    t === t.right ? (this.min = null,
                    this.root = null) : (this.min = t.right,
                    function(t) {
                        var e, i, r, n, o, s, a, l, c, p = Array(t.size), f = h(t.root);
                        for (n = 0,
                        o = f.length; n < o; n++) {
                            for (l = (s = f[n]).degree; p[l]; ) {
                                a = p[l],
                                t.comparator(s.item, a.item) > 0 && (c = s,
                                s = a,
                                a = c),
                                e = t,
                                i = a,
                                r = s,
                                u(e, i),
                                i.left = i,
                                i.right = i,
                                r.child ? (i.right = r.child.right,
                                i.left = r.child,
                                r.child.right.left = i,
                                r.child.right = i) : r.child = i,
                                r.degree++,
                                i.parent = r,
                                p[l] = null,
                                l++
                            }
                            p[l] = s
                        }
                        for (n = 0; n < t.size; n++)
                            p[n] && 0 >= t.comparator(p[n].item, t.min.item) && (t.min = p[n])
                    }(this)),
                    this.size--,
                    t.item
                }
            }
            ,
            s.prototype.inspect = function() {
                var t = {
                    size: this.size
                };
                return this.min && "item"in this.min && (t.top = this.min.item),
                Object.defineProperty(t, "constructor", {
                    value: s,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (s.prototype[Symbol.for("nodejs.util.inspect.custom")] = s.prototype.inspect),
            l.prototype = s.prototype,
            s.from = function(t, e) {
                var i = new s(e);
                return r(t, function(t) {
                    i.push(t)
                }),
                i
            }
            ,
            l.from = function(t, e) {
                var i = new l(e);
                return r(t, function(t) {
                    i.push(t)
                }),
                i
            }
            ,
            s.MinFibonacciHeap = s,
            s.MaxFibonacciHeap = l,
            e.exports = s
        }
        )
          , I = C(t=>{
            t.getPointerArray = function(t) {
                var e = t - 1;
                if (e <= 255)
                    return Uint8Array;
                if (e <= 65535)
                    return Uint16Array;
                if (e <= 4294967295)
                    return Uint32Array;
                throw Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")
            }
            ,
            t.getSignedPointerArray = function(t) {
                var e = t - 1;
                return e <= 127 ? Int8Array : e <= 32767 ? Int16Array : e <= 2147483647 ? Int32Array : Float64Array
            }
            ,
            t.getNumberType = function(t) {
                return t === (0 | t) ? -1 === Math.sign(t) ? t <= 127 && t >= -128 ? Int8Array : t <= 32767 && t >= -32768 ? Int16Array : Int32Array : t <= 255 ? Uint8Array : t <= 65535 ? Uint16Array : Uint32Array : Float64Array
            }
            ;
            var e = {
                Uint8Array: 1,
                Int8Array: 2,
                Uint16Array: 3,
                Int16Array: 4,
                Uint32Array: 5,
                Int32Array: 6,
                Float32Array: 7,
                Float64Array: 8
            };
            t.getMinimalRepresentation = function(i, r) {
                var n, o, s, a, h, u = null, l = 0;
                for (a = 0,
                h = i.length; a < h; a++)
                    s = r ? r(i[a]) : i[a],
                    (n = e[(o = t.getNumberType(s)).name]) > l && (l = n,
                    u = o);
                return u
            }
            ,
            t.isTypedArray = function(t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView(t)
            }
            ,
            t.concat = function() {
                var t, e, i, r = 0;
                for (t = 0,
                i = arguments.length; t < i; t++)
                    r += arguments[t].length;
                var n = new arguments[0].constructor(r);
                for (t = 0,
                e = 0; t < i; t++)
                    n.set(arguments[t], e),
                    e += arguments[t].length;
                return n
            }
            ,
            t.indices = function(e) {
                for (var i = t.getPointerArray(e), r = new i(e), n = 0; n < e; n++)
                    r[n] = n;
                return r
            }
        }
        )
          , L = C(t=>{
            var e = z()
              , i = I();
            function r(t) {
                return "number" == typeof t.length ? t.length : "number" == typeof t.size ? t.size : void 0
            }
            t.isArrayLike = function(t) {
                return Array.isArray(t) || i.isTypedArray(t)
            }
            ,
            t.guessLength = r,
            t.toArray = function(t) {
                var i = r(t)
                  , n = "number" == typeof i ? Array(i) : []
                  , o = 0;
                return e(t, function(t) {
                    n[o++] = t
                }),
                n
            }
            ,
            t.toArrayWithIndices = function(t) {
                var n = r(t)
                  , o = "number" == typeof n ? i.getPointerArray(n) : Array
                  , s = "number" == typeof n ? Array(n) : []
                  , a = "number" == typeof n ? new o(n) : []
                  , h = 0;
                return e(t, function(t) {
                    s[h] = t,
                    a[h] = h++
                }),
                [s, a]
            }
        }
        )
          , D = C((t,e)=>{
            var i = z()
              , r = E()
              , n = L()
              , o = r.DEFAULT_COMPARATOR
              , s = r.reverseComparator;
            function a(t, e, i, r) {
                for (var n, o, s = e[r]; r > i; ) {
                    if (0 > t(s, o = e[n = r - 1 >> 1])) {
                        e[r] = o,
                        r = n;
                        continue
                    }
                    break
                }
                e[r] = s
            }
            function h(t, e, i) {
                for (var r, n = e.length, o = i, s = e[i], h = 2 * i + 1; h < n; )
                    (r = h + 1) < n && t(e[h], e[r]) >= 0 && (h = r),
                    e[i] = e[h],
                    h = 2 * (i = h) + 1;
                e[i] = s,
                a(t, e, o, i)
            }
            function u(t, e, i) {
                e.push(i),
                a(t, e, 0, e.length - 1)
            }
            function l(t, e) {
                var i = e.pop();
                if (0 !== e.length) {
                    var r = e[0];
                    return e[0] = i,
                    h(t, e, 0),
                    r
                }
                return i
            }
            function c(t, e, i) {
                if (0 === e.length)
                    throw Error("mnemonist/heap.replace: cannot pop an empty heap.");
                var r = e[0];
                return e[0] = i,
                h(t, e, 0),
                r
            }
            function p(t, e, i) {
                var r;
                return 0 !== e.length && 0 > t(e[0], i) && (r = e[0],
                e[0] = i,
                i = r,
                h(t, e, 0)),
                i
            }
            function f(t, e) {
                for (var i = e.length, r = i >> 1, n = r; --n >= 0; )
                    h(t, e, n)
            }
            function d(t, e) {
                for (var i = e.length, r = 0, n = Array(i); r < i; )
                    n[r++] = l(t, e);
                return n
            }
            function y(t) {
                if (this.clear(),
                this.comparator = t || o,
                "function" != typeof this.comparator)
                    throw Error("mnemonist/Heap.constructor: given comparator should be a function.")
            }
            function g(t) {
                if (this.clear(),
                this.comparator = t || o,
                "function" != typeof this.comparator)
                    throw Error("mnemonist/MaxHeap.constructor: given comparator should be a function.");
                this.comparator = s(this.comparator)
            }
            y.prototype.clear = function() {
                this.items = [],
                this.size = 0
            }
            ,
            y.prototype.push = function(t) {
                return u(this.comparator, this.items, t),
                ++this.size
            }
            ,
            y.prototype.peek = function() {
                return this.items[0]
            }
            ,
            y.prototype.pop = function() {
                return 0 !== this.size && this.size--,
                l(this.comparator, this.items)
            }
            ,
            y.prototype.replace = function(t) {
                return c(this.comparator, this.items, t)
            }
            ,
            y.prototype.pushpop = function(t) {
                return p(this.comparator, this.items, t)
            }
            ,
            y.prototype.consume = function() {
                return this.size = 0,
                d(this.comparator, this.items)
            }
            ,
            y.prototype.toArray = function() {
                return d(this.comparator, this.items.slice())
            }
            ,
            y.prototype.inspect = function() {
                var t = this.toArray();
                return Object.defineProperty(t, "constructor", {
                    value: y,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (y.prototype[Symbol.for("nodejs.util.inspect.custom")] = y.prototype.inspect),
            g.prototype = y.prototype,
            y.from = function(t, e) {
                var i, r = new y(e);
                return i = n.isArrayLike(t) ? t.slice() : n.toArray(t),
                f(r.comparator, i),
                r.items = i,
                r.size = i.length,
                r
            }
            ,
            g.from = function(t, e) {
                var i, r = new g(e);
                return i = n.isArrayLike(t) ? t.slice() : n.toArray(t),
                f(r.comparator, i),
                r.items = i,
                r.size = i.length,
                r
            }
            ,
            y.siftUp = h,
            y.siftDown = a,
            y.push = u,
            y.pop = l,
            y.replace = c,
            y.pushpop = p,
            y.heapify = f,
            y.consume = d,
            y.nsmallest = function(t, e, r) {
                2 == arguments.length && (r = e,
                e = t,
                t = o);
                var a, h, u, l, p = s(t), d = 1 / 0;
                if (1 === e) {
                    if (n.isArrayLike(r)) {
                        for (a = 0,
                        h = r.length; a < h; a++)
                            u = r[a],
                            (d === 1 / 0 || 0 > t(u, d)) && (d = u);
                        return (l = new r.constructor(1))[0] = d,
                        l
                    }
                    return i(r, function(e) {
                        (d === 1 / 0 || 0 > t(e, d)) && (d = e)
                    }),
                    [d]
                }
                if (n.isArrayLike(r)) {
                    if (e >= r.length)
                        return r.slice().sort(t);
                    for (f(p, l = r.slice(0, e)),
                    a = e,
                    h = r.length; a < h; a++)
                        p(r[a], l[0]) > 0 && c(p, l, r[a]);
                    return l.sort(t)
                }
                var y = n.guessLength(r);
                return null !== y && y < e && (e = y),
                l = Array(e),
                a = 0,
                i(r, function(t) {
                    a < e ? l[a] = t : (a === e && f(p, l),
                    p(t, l[0]) > 0 && c(p, l, t)),
                    a++
                }),
                l.length > a && (l.length = a),
                l.sort(t)
            }
            ,
            y.nlargest = function(t, e, r) {
                2 == arguments.length && (r = e,
                e = t,
                t = o);
                var a, h, u, l, p = s(t), d = -1 / 0;
                if (1 === e) {
                    if (n.isArrayLike(r)) {
                        for (a = 0,
                        h = r.length; a < h; a++)
                            u = r[a],
                            (d === -1 / 0 || t(u, d) > 0) && (d = u);
                        return (l = new r.constructor(1))[0] = d,
                        l
                    }
                    return i(r, function(e) {
                        (d === -1 / 0 || t(e, d) > 0) && (d = e)
                    }),
                    [d]
                }
                if (n.isArrayLike(r)) {
                    if (e >= r.length)
                        return r.slice().sort(p);
                    for (l = r.slice(0, e),
                    f(t, l),
                    a = e,
                    h = r.length; a < h; a++)
                        t(r[a], l[0]) > 0 && c(t, l, r[a]);
                    return l.sort(p)
                }
                var y = n.guessLength(r);
                return null !== y && y < e && (e = y),
                l = Array(e),
                a = 0,
                i(r, function(i) {
                    a < e ? l[a] = i : (a === e && f(t, l),
                    t(i, l[0]) > 0 && c(t, l, i)),
                    a++
                }),
                l.length > a && (l.length = a),
                l.sort(p)
            }
            ,
            y.MinHeap = y,
            y.MaxHeap = g,
            e.exports = y
        }
        )
          , R = C((t,e)=>{
            function i(t, e, i) {
                for (var r, n, o = e.length, s = [], a = o, h = -1, u = 0; a--; )
                    h = Math.max(t[e[a] + i], h);
                for (n = h >> 24 && 32 || h >> 16 && 24 || h >> 8 && 16 || 8; u < n; u += 4) {
                    for (a = 16; a--; )
                        s[a] = [];
                    for (a = o; a--; )
                        s[t[e[a] + i] >> u & 15].push(e[a]);
                    for (r = 0; r < 16; r++)
                        for (h = s[r].length; h--; )
                            e[++a] = s[r][h]
                }
            }
            function r(t, e) {
                var n, o, s, a = [], h = [], u = 2 * e / 3 | 0, l = e - u, c = u + 1 >> 1, p = u, f = 0, d = [], y = [];
                if (1 === e)
                    return [0];
                for (; p--; )
                    a[p] = (3 * p >> 1) + 1;
                for (p = 3; p--; )
                    i(t, a, p);
                for (f = h[(a[0] / 3 | 0) + (a[0] % 3 == 1 ? 0 : c)] = 1,
                p = 1; p < u; p++)
                    (t[a[p]] !== t[a[p - 1]] || t[a[p] + 1] !== t[a[p - 1] + 1] || t[a[p] + 2] !== t[a[p - 1] + 2]) && f++,
                    h[(a[p] / 3 | 0) + (a[p] % 3 == 1 ? 0 : c)] = f;
                if (f < u)
                    for (h = r(h, u),
                    p = u; p--; )
                        a[p] = h[p] < c ? 3 * h[p] + 1 : (h[p] - c) * 3 + 2;
                for (p = u; p--; )
                    d[a[p]] = p;
                for (d[e] = -1,
                d[e + 1] = -2,
                h = e % 3 == 1 ? [e - 1] : [],
                p = 0; p < u; p++)
                    a[p] % 3 == 1 && h.push(a[p] - 1);
                for (i(t, h, 0),
                p = 0,
                f = 0,
                s = 0; p < u && f < l; )
                    y[s++] = 0 > (n = a[p],
                    o = h[f],
                    t[n] - t[o] || (n % 3 == 2 ? t[n + 1] - t[o + 1] || d[n + 2] - d[o + 2] : d[n + 1] - d[o + 1])) ? a[p++] : h[f++];
                for (; p < u; )
                    y[s++] = a[p++];
                for (; f < l; )
                    y[s++] = h[f++];
                return y
            }
            function n(t) {
                var e, i, r = t.length, n = r % 3, o = Array(r + n);
                if ("string" != typeof t) {
                    var s = Object.create(null);
                    for (i = 0; i < r; i++)
                        s[t[i]] || (s[t[i]] = !0);
                    var a = Object.create(null)
                      , h = Object.keys(s).sort();
                    for (i = 0,
                    e = h.length; i < e; i++)
                        a[h[i]] = i + 1;
                    for (i = 0; i < r; i++)
                        o[i] = a[t[i]]
                } else
                    for (i = 0; i < r; i++)
                        o[i] = t.charCodeAt(i);
                for (i = r; i < r + n; i++)
                    o[i] = 0;
                return o
            }
            function o(t) {
                this.hasArbitrarySequence = "string" != typeof t,
                this.string = t,
                this.length = t.length,
                this.array = r(n(t), this.length)
            }
            function s(t) {
                if (this.hasArbitrarySequence = "string" != typeof t[0],
                this.size = t.length,
                this.hasArbitrarySequence) {
                    this.text = [];
                    for (var e = 0, i = this.size; e < i; e++)
                        this.text.push.apply(this.text, t[e]),
                        e < i - 1 && this.text.push("\x01")
                } else
                    this.text = t.join("\x01");
                this.firstLength = t[0].length,
                this.length = this.text.length,
                this.array = r(n(this.text), this.length)
            }
            o.prototype.toString = function() {
                return this.array.join(",")
            }
            ,
            o.prototype.toJSON = function() {
                return this.array
            }
            ,
            o.prototype.inspect = function() {
                for (var t = Array(this.length), e = 0; e < this.length; e++)
                    t[e] = this.string.slice(this.array[e]);
                return Object.defineProperty(t, "constructor", {
                    value: o,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (o.prototype[Symbol.for("nodejs.util.inspect.custom")] = o.prototype.inspect),
            s.prototype.longestCommonSubsequence = function() {
                var t, e, i, r, n, o = this.hasArbitrarySequence ? [] : "";
                for (e = 1; e < this.length; e++)
                    if (r = this.array[e],
                    n = this.array[e - 1],
                    !(r < this.firstLength && n < this.firstLength) && !(r > this.firstLength && n > this.firstLength)) {
                        for (t = Math.min(this.length - r, this.length - n),
                        i = 0; i < t; i++)
                            if (this.text[r + i] !== this.text[n + i]) {
                                t = i;
                                break
                            }
                        t > o.length && (o = this.text.slice(r, r + t))
                    }
                return o
            }
            ,
            s.prototype.toString = function() {
                return this.array.join(",")
            }
            ,
            s.prototype.toJSON = function() {
                return this.array
            }
            ,
            s.prototype.inspect = function() {
                for (var t = Array(this.length), e = 0; e < this.length; e++)
                    t[e] = this.text.slice(this.array[e]);
                return Object.defineProperty(t, "constructor", {
                    value: s,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (s.prototype[Symbol.for("nodejs.util.inspect.custom")] = s.prototype.inspect),
            o.GeneralizedSuffixArray = s,
            e.exports = o
        }
        )
          , F = C((t,e)=>{
            var i = z();
            function r(t) {
                this.size = 0,
                this.items = new Map,
                this.inverse = t
            }
            function n() {
                this.size = 0,
                this.items = new Map,
                this.inverse = new r(this)
            }
            function o() {
                this.size = 0,
                this.items.clear(),
                this.inverse.items.clear()
            }
            function s(t, e) {
                if (this.items.has(t)) {
                    var i = this.items.get(t);
                    if (i === e)
                        return this;
                    this.inverse.items.delete(i)
                }
                if (this.inverse.items.has(e)) {
                    var r = this.inverse.items.get(e);
                    if (r === t)
                        return this;
                    this.items.delete(r)
                }
                return this.items.set(t, e),
                this.inverse.items.set(e, t),
                this.size = this.items.size,
                this.inverse.size = this.inverse.items.size,
                this
            }
            function a(t) {
                if (this.items.has(t)) {
                    var e = this.items.get(t);
                    return this.items.delete(t),
                    this.inverse.items.delete(e),
                    this.size = this.items.size,
                    this.inverse.size = this.inverse.items.size,
                    !0
                }
                return !1
            }
            n.prototype.clear = o,
            r.prototype.clear = o,
            n.prototype.set = s,
            r.prototype.set = s,
            n.prototype.delete = a,
            r.prototype.delete = a,
            ["has", "get", "forEach", "keys", "values", "entries"].forEach(function(t) {
                n.prototype[t] = r.prototype[t] = function() {
                    return Map.prototype[t].apply(this.items, arguments)
                }
            }),
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.entries,
            r.prototype[Symbol.iterator] = r.prototype.entries),
            n.prototype.inspect = function() {
                var t = {
                    left: this.items,
                    right: this.inverse.items
                };
                return Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            r.prototype.inspect = function() {
                var t = {
                    left: this.inverse.items,
                    right: this.items
                };
                return Object.defineProperty(t, "constructor", {
                    value: r,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (r.prototype[Symbol.for("nodejs.util.inspect.custom")] = r.prototype.inspect),
            n.from = function(t) {
                var e = new n;
                return i(t, function(t, i) {
                    e.set(i, t)
                }),
                e
            }
            ,
            e.exports = n
        }
        )
          , B = C((t,e)=>{
            function i(t) {
                if ("function" != typeof t)
                    throw Error("obliterator/iterator: expecting a function!");
                this.next = t
            }
            "undefined" != typeof Symbol && (i.prototype[Symbol.iterator] = function() {
                return this
            }
            ),
            i.of = function() {
                var t = arguments
                  , e = t.length
                  , r = 0;
                return new i(function() {
                    return r >= e ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[r++]
                    }
                }
                )
            }
            ,
            i.empty = function() {
                return new i(function() {
                    return {
                        done: !0
                    }
                }
                )
            }
            ,
            i.fromSequence = function(t) {
                var e = 0
                  , r = t.length;
                return new i(function() {
                    return e >= r ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[e++]
                    }
                }
                )
            }
            ,
            i.is = function(t) {
                return t instanceof i || "object" == typeof t && null !== t && "function" == typeof t.next
            }
            ,
            e.exports = i
        }
        )
          , N = C(t=>{
            function e(t) {
                return t |= t >> 1,
                t |= t >> 2,
                t |= t >> 4,
                t |= t >> 8,
                (t |= t >> 16) & ~(t >> 1)
            }
            function i(t) {
                return t |= t >> 1,
                t |= t >> 2,
                (t |= t >> 4) & ~(t >> 1)
            }
            t.msb32 = e,
            t.msb8 = i,
            t.test = function(t, e) {
                return t >> e & 1
            }
            ,
            t.criticalBit8 = function(t, e) {
                return i(t ^ e)
            }
            ,
            t.criticalBit8Mask = function(t, e) {
                return ~i(t ^ e) >>> 0 & 255
            }
            ,
            t.testCriticalBit8 = function(t, e) {
                return 1 + (t | e) >> 8
            }
            ,
            t.criticalBit32Mask = function(t, i) {
                return ~e(t ^ i) >>> 0 & 4294967295
            }
            ,
            t.popcount = function(t) {
                return t -= t >> 1 & 1431655765,
                t = (t = (858993459 & t) + (t >> 2 & 858993459)) + (t >> 4) & 252645135,
                t += t >> 8,
                127 & (t += t >> 16)
            }
            ;
            var r, n, o = new Uint8Array(256);
            for (r = 0,
            n = o.length; r < n; r++)
                o[r] = t.popcount(r);
            t.table8Popcount = function(t) {
                return o[255 & t] + o[t >> 8 & 255] + o[t >> 16 & 255] + o[t >> 24 & 255]
            }
        }
        )
          , j = C((t,e)=>{
            var i = B()
              , r = N();
            function n(t) {
                this.length = t,
                this.clear()
            }
            n.prototype.clear = function() {
                this.size = 0,
                this.array = new Uint32Array(Math.ceil(this.length / 32))
            }
            ,
            n.prototype.set = function(t, e) {
                var i, r = t >> 5, n = 31 & t, o = this.array[r];
                return (i = (0 === e || !1 === e ? this.array[r] &= ~(1 << n) : this.array[r] |= 1 << n) >>> 0) > o ? this.size++ : i < o && this.size--,
                this
            }
            ,
            n.prototype.reset = function(t) {
                var e = t >> 5
                  , i = this.array[e];
                return (this.array[e] &= ~(1 << (31 & t))) < i && this.size--,
                this
            }
            ,
            n.prototype.flip = function(t) {
                var e = t >> 5
                  , i = this.array[e]
                  , r = this.array[e] ^= 1 << (31 & t);
                return (r >>>= 0) > i ? this.size++ : r < i && this.size--,
                this
            }
            ,
            n.prototype.get = function(t) {
                return this.array[t >> 5] >> (31 & t) & 1
            }
            ,
            n.prototype.test = function(t) {
                return !!this.get(t)
            }
            ,
            n.prototype.rank = function(t) {
                if (0 === this.size)
                    return 0;
                for (var e = t >> 5, i = 0, n = 0; n < e; n++)
                    i += r.table8Popcount(this.array[n]);
                var o = this.array[e] & (1 << (31 & t)) - 1;
                return i + r.table8Popcount(o)
            }
            ,
            n.prototype.select = function(t) {
                if (0 === this.size || t >= this.length)
                    return -1;
                for (var e, i = 32, r = 0, n = 0, o = 0, s = this.array.length; o < s; o++)
                    if (0 !== (e = this.array[o])) {
                        o === s - 1 && (i = this.length % 32 || 32);
                        for (var a = 0; a < i; a++,
                        r++)
                            if ((n += e >> a & 1) === t)
                                return r
                    }
            }
            ,
            n.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i, r, n = this.length, o = 32, s = 0, a = this.array.length; s < a; s++) {
                    i = this.array[s],
                    s === a - 1 && (o = n % 32 || 32);
                    for (var h = 0; h < o; h++)
                        r = i >> h & 1,
                        t.call(e, r, 32 * s + h)
                }
            }
            ,
            n.prototype.values = function() {
                var t, e = this.length, r = !1, n = this.array, o = n.length, s = 0, a = -1, h = 32;
                return new i(function i() {
                    if (!r) {
                        if (s >= o)
                            return {
                                done: !0
                            };
                        s === o - 1 && (h = e % 32 || 32),
                        t = n[s++],
                        r = !0,
                        a = -1
                    }
                    return ++a >= h ? (r = !1,
                    i()) : {
                        value: t >> a & 1
                    }
                }
                )
            }
            ,
            n.prototype.entries = function() {
                var t, e, r = this.length, n = !1, o = this.array, s = o.length, a = 0, h = -1, u = 32;
                return new i(function i() {
                    if (!n) {
                        if (a >= s)
                            return {
                                done: !0
                            };
                        a === s - 1 && (u = r % 32 || 32),
                        t = o[a++],
                        n = !0,
                        h = -1
                    }
                    return h++,
                    e = 32 * ~-a + h,
                    h >= u ? (n = !1,
                    i()) : {
                        value: [e, t >> h & 1]
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.values),
            n.prototype.inspect = function() {
                var t = new Uint8Array(this.length);
                return this.forEach(function(e, i) {
                    t[i] = e
                }),
                Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            n.prototype.toJSON = function() {
                return Array.from(this.array)
            }
            ,
            e.exports = n
        }
        )
          , H = C((t,e)=>{
            var i = B()
              , r = N()
              , n = function(t) {
                return Math.max(1, Math.ceil(1.5 * t))
            };
            function o(t) {
                var e = t || 0
                  , i = n;
                "object" == typeof t && (e = t.initialLength || t.initialCapacity || 0,
                i = t.policy || i),
                this.size = 0,
                this.length = e,
                this.capacity = 32 * Math.ceil(this.length / 32),
                this.policy = i,
                this.array = new Uint32Array(Math.ceil(this.capacity / 32))
            }
            o.prototype.set = function(t, e) {
                if (this.length < t)
                    throw Error("BitVector.set: index out of bounds.");
                var i, r = t >> 5, n = 31 & t, o = this.array[r];
                return (i = (0 === e || !1 === e ? this.array[r] &= ~(1 << n) : this.array[r] |= 1 << n) >>> 0) > o ? this.size++ : i < o && this.size--,
                this
            }
            ,
            o.prototype.reset = function(t) {
                var e = t >> 5
                  , i = this.array[e];
                return (this.array[e] &= ~(1 << (31 & t))) < i && this.size--,
                this
            }
            ,
            o.prototype.flip = function(t) {
                var e = t >> 5
                  , i = this.array[e]
                  , r = this.array[e] ^= 1 << (31 & t);
                return (r >>>= 0) > i ? this.size++ : r < i && this.size--,
                this
            }
            ,
            o.prototype.applyPolicy = function(t) {
                var e = this.policy(t || this.capacity);
                if ("number" != typeof e || e < 0)
                    throw Error("mnemonist/bit-vector.applyPolicy: policy returned an invalid value (expecting a positive integer).");
                if (e <= this.capacity)
                    throw Error("mnemonist/bit-vector.applyPolicy: policy returned a less or equal capacity to allocate.");
                return 32 * Math.ceil(e / 32)
            }
            ,
            o.prototype.reallocate = function(t) {
                var e = t;
                if (t = 32 * Math.ceil(t / 32),
                e < this.length && (this.length = e),
                t === this.capacity)
                    return this;
                var i = this.array
                  , r = t / 32;
                return r === this.array.length || (r > this.array.length ? (this.array = new Uint32Array(r),
                this.array.set(i, 0)) : this.array = i.slice(0, r),
                this.capacity = t),
                this
            }
            ,
            o.prototype.grow = function(t) {
                var e;
                if ("number" == typeof t) {
                    if (this.capacity >= t)
                        return this;
                    for (e = this.capacity; e < t; )
                        e = this.applyPolicy(e);
                    return this.reallocate(e),
                    this
                }
                return e = this.applyPolicy(),
                this.reallocate(e),
                this
            }
            ,
            o.prototype.resize = function(t) {
                return t === this.length || (t < this.length ? this.length = t : (this.length = t,
                this.reallocate(t))),
                this
            }
            ,
            o.prototype.push = function(t) {
                if (this.capacity === this.length && this.grow(),
                0 === t || !1 === t)
                    return ++this.length;
                this.size++;
                var e = this.length++;
                return this.array[e >> 5] |= 1 << (31 & e),
                this.length
            }
            ,
            o.prototype.pop = function() {
                if (0 !== this.length) {
                    var t = --this.length;
                    return this.array[t >> 5] >> (31 & t) & 1
                }
            }
            ,
            o.prototype.get = function(t) {
                if (!(this.length < t))
                    return this.array[t >> 5] >> (31 & t) & 1
            }
            ,
            o.prototype.test = function(t) {
                return !(this.length < t) && !!this.get(t)
            }
            ,
            o.prototype.rank = function(t) {
                if (0 === this.size)
                    return 0;
                for (var e = t >> 5, i = 0, n = 0; n < e; n++)
                    i += r.table8Popcount(this.array[n]);
                var o = this.array[e] & (1 << (31 & t)) - 1;
                return i + r.table8Popcount(o)
            }
            ,
            o.prototype.select = function(t) {
                if (0 === this.size || t >= this.length)
                    return -1;
                for (var e, i = 32, r = 0, n = 0, o = 0, s = this.array.length; o < s; o++)
                    if (0 !== (e = this.array[o])) {
                        o === s - 1 && (i = this.length % 32 || 32);
                        for (var a = 0; a < i; a++,
                        r++)
                            if ((n += e >> a & 1) === t)
                                return r
                    }
            }
            ,
            o.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i, r, n = this.length, o = 32, s = 0, a = this.array.length; s < a; s++) {
                    i = this.array[s],
                    s === a - 1 && (o = n % 32 || 32);
                    for (var h = 0; h < o; h++)
                        r = i >> h & 1,
                        t.call(e, r, 32 * s + h)
                }
            }
            ,
            o.prototype.values = function() {
                var t, e = this.length, r = !1, n = this.array, o = n.length, s = 0, a = -1, h = 32;
                return new i(function i() {
                    if (!r) {
                        if (s >= o)
                            return {
                                done: !0
                            };
                        s === o - 1 && (h = e % 32 || 32),
                        t = n[s++],
                        r = !0,
                        a = -1
                    }
                    return ++a >= h ? (r = !1,
                    i()) : {
                        value: t >> a & 1
                    }
                }
                )
            }
            ,
            o.prototype.entries = function() {
                var t, e, r = this.length, n = !1, o = this.array, s = o.length, a = 0, h = -1, u = 32;
                return new i(function i() {
                    if (!n) {
                        if (a >= s)
                            return {
                                done: !0
                            };
                        a === s - 1 && (u = r % 32 || 32),
                        t = o[a++],
                        n = !0,
                        h = -1
                    }
                    return h++,
                    e = 32 * ~-a + h,
                    h >= u ? (n = !1,
                    i()) : {
                        value: [e, t >> h & 1]
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (o.prototype[Symbol.iterator] = o.prototype.values),
            o.prototype.inspect = function() {
                var t = new Uint8Array(this.length);
                return this.forEach(function(e, i) {
                    t[i] = e
                }),
                Object.defineProperty(t, "constructor", {
                    value: o,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (o.prototype[Symbol.for("nodejs.util.inspect.custom")] = o.prototype.inspect),
            o.prototype.toJSON = function() {
                return Array.from(this.array.slice(0, (this.length >> 5) + 1))
            }
            ,
            e.exports = o
        }
        )
          , U = C((t,e)=>{
            function i(t, e) {
                return (65535 & t) * e + (((t >>> 16) * e & 65535) << 16) & 4294967295
            }
            function r(t, e) {
                return t << e | t >>> 32 - e
            }
            e.exports = function(t, e) {
                var n, o, s, a, h = t;
                for (s = 0,
                a = e.length - 4; s <= a; s += 4)
                    o = r(o = i(o = e[s] | e[s + 1] << 8 | e[s + 2] << 16 | e[s + 3] << 24, 3432918353), 15),
                    h ^= o = i(o, 461845907),
                    h = (65535 & (n = h = i(h = r(h, 13), 5))) + 27492 + (((n >>> 16) + 1801774676 & 65535) << 16) & 4294967295;
                switch (o = 0,
                3 & e.length) {
                case 3:
                    o ^= e[s + 2] << 16;
                case 2:
                    o ^= e[s + 1] << 8;
                case 1:
                    o ^= e[s],
                    o = r(o = i(o, 3432918353), 15),
                    h ^= o = i(o, 461845907)
                }
                return h ^= e.length,
                h ^= h >>> 16,
                h = i(h, 2246822507),
                h ^= h >>> 13,
                h = i(h, 3266489909),
                (h ^= h >>> 16) >>> 0
            }
        }
        )
          , W = C((t,e)=>{
            var i = U()
              , r = z()
              , n = Math.LN2 * Math.LN2
              , o = {
                errorRate: .005
            };
            function s(t) {
                var e, i, r = new Uint16Array(t.length);
                for (e = 0,
                i = t.length; e < i; e++)
                    r[e] = t.charCodeAt(e);
                return r
            }
            function a(t, e, r) {
                return i(4221880213 * e & 4294967295, r) % (8 * t)
            }
            function h(t) {
                var e = {};
                if (!t)
                    throw Error("mnemonist/BloomFilter.constructor: a BloomFilter must be created with a capacity.");
                if ("object" == typeof t ? e = t : e.capacity = t,
                "number" != typeof e.capacity || e.capacity <= 0)
                    throw Error("mnemonist/BloomFilter.constructor: `capacity` option should be a positive integer.");
                if (this.capacity = e.capacity,
                this.errorRate = e.errorRate || o.errorRate,
                "number" != typeof this.errorRate || e.errorRate <= 0)
                    throw Error("mnemonist/BloomFilter.constructor: `errorRate` option should be a positive float.");
                this.clear()
            }
            h.prototype.clear = function() {
                var t = -1 / n * this.capacity * Math.log(this.errorRate) / 8 | 0;
                this.hashFunctions = 8 * t / this.capacity * Math.LN2 | 0,
                this.data = new Uint8Array(t)
            }
            ,
            h.prototype.add = function(t) {
                for (var e = s(t), i = 0, r = this.hashFunctions; i < r; i++) {
                    var n = a(this.data.length, i, e)
                      , o = 1 << (7 & n);
                    this.data[n >> 3] |= o
                }
                return this
            }
            ,
            h.prototype.test = function(t) {
                for (var e = s(t), i = 0, r = this.hashFunctions; i < r; i++) {
                    var n = a(this.data.length, i, e);
                    if (!(this.data[n >> 3] & 1 << (7 & n)))
                        return !1
                }
                return !0
            }
            ,
            h.prototype.toJSON = function() {
                return this.data
            }
            ,
            h.from = function(t, e) {
                if (!e && "number" != typeof (e = t.length || t.size))
                    throw Error("BloomFilter.from: could not infer the filter's capacity. Try passing it as second argument.");
                var i = new h(e);
                return r(t, function(t) {
                    i.add(t)
                }),
                i
            }
            ,
            e.exports = h
        }
        )
          , G = C((t,e)=>{
            var i = z();
            function r(t) {
                if ("function" != typeof t)
                    throw Error("mnemonist/BKTree.constructor: given `distance` should be a function.");
                this.distance = t,
                this.clear()
            }
            r.prototype.add = function(t) {
                if (!this.root)
                    return this.root = {
                        item: t,
                        children: {}
                    },
                    this.size++,
                    this;
                for (var e, i = this.root; e = this.distance(t, i.item),
                i.children[e]; )
                    i = i.children[e];
                return i.children[e] = {
                    item: t,
                    children: {}
                },
                this.size++,
                this
            }
            ,
            r.prototype.search = function(t, e) {
                if (!this.root)
                    return [];
                for (var i, r, n, o, s, a = [], h = [this.root]; h.length; )
                    for (i = h.pop(),
                    (n = this.distance(e, i.item)) <= t && a.push({
                        item: i.item,
                        distance: n
                    }),
                    o = n - t,
                    s = n + t + 1; o < s; o++)
                        (r = i.children[o]) && h.push(r);
                return a
            }
            ,
            r.prototype.clear = function() {
                this.size = 0,
                this.root = null
            }
            ,
            r.prototype.toJSON = function() {
                return this.root
            }
            ,
            r.prototype.inspect = function() {
                for (var t, e, i = [], n = [this.root]; n.length; )
                    if (t = n.pop())
                        for (e in i.push(t.item),
                        t.children)
                            n.push(t.children[e]);
                return Object.defineProperty(i, "constructor", {
                    value: r,
                    enumerable: !1
                }),
                i
            }
            ,
            "undefined" != typeof Symbol && (r.prototype[Symbol.for("nodejs.util.inspect.custom")] = r.prototype.inspect),
            r.from = function(t, e) {
                var n = new r(e);
                return i(t, function(t) {
                    n.add(t)
                }),
                n
            }
            ,
            e.exports = r
        }
        )
          , $ = C((t,e)=>{
            var i = L()
              , r = B();
            function n(t, e) {
                if (arguments.length < 2)
                    throw Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");
                if ("number" != typeof e || e <= 0)
                    throw Error("mnemonist/fixed-deque: `capacity` should be a positive number.");
                this.ArrayClass = t,
                this.capacity = e,
                this.items = new t(this.capacity),
                this.clear()
            }
            n.prototype.clear = function() {
                this.start = 0,
                this.size = 0
            }
            ,
            n.prototype.push = function(t) {
                if (this.size === this.capacity)
                    throw Error("mnemonist/fixed-deque.push: deque capacity (" + this.capacity + ") exceeded!");
                var e = this.start + this.size;
                return e >= this.capacity && (e -= this.capacity),
                this.items[e] = t,
                ++this.size
            }
            ,
            n.prototype.unshift = function(t) {
                if (this.size === this.capacity)
                    throw Error("mnemonist/fixed-deque.unshift: deque capacity (" + this.capacity + ") exceeded!");
                var e = this.start - 1;
                return 0 === this.start && (e = this.capacity - 1),
                this.items[e] = t,
                this.start = e,
                ++this.size
            }
            ,
            n.prototype.pop = function() {
                if (0 !== this.size) {
                    this.size--;
                    var t = this.start + this.size;
                    return t >= this.capacity && (t -= this.capacity),
                    this.items[t]
                }
            }
            ,
            n.prototype.shift = function() {
                if (0 !== this.size) {
                    var t = this.start;
                    return this.size--,
                    this.start++,
                    this.start === this.capacity && (this.start = 0),
                    this.items[t]
                }
            }
            ,
            n.prototype.peekFirst = function() {
                if (0 !== this.size)
                    return this.items[this.start]
            }
            ,
            n.prototype.peekLast = function() {
                if (0 !== this.size) {
                    var t = this.start + this.size - 1;
                    return t >= this.capacity && (t -= this.capacity),
                    this.items[t]
                }
            }
            ,
            n.prototype.get = function(t) {
                if (!(0 === this.size || t >= this.capacity))
                    return (t = this.start + t) >= this.capacity && (t -= this.capacity),
                    this.items[t]
            }
            ,
            n.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i = this.capacity, r = this.size, n = this.start, o = 0; o < r; )
                    t.call(e, this.items[n], o, this),
                    n++,
                    o++,
                    n === i && (n = 0)
            }
            ,
            n.prototype.toArray = function() {
                var t = this.start + this.size;
                if (t < this.capacity)
                    return this.items.slice(this.start, t);
                for (var e = new this.ArrayClass(this.size), i = this.capacity, r = this.size, n = this.start, o = 0; o < r; )
                    e[o] = this.items[n],
                    n++,
                    o++,
                    n === i && (n = 0);
                return e
            }
            ,
            n.prototype.values = function() {
                var t = this.items
                  , e = this.capacity
                  , i = this.size
                  , n = this.start
                  , o = 0;
                return new r(function() {
                    if (o >= i)
                        return {
                            done: !0
                        };
                    var r = t[n];
                    return n++,
                    o++,
                    n === e && (n = 0),
                    {
                        value: r,
                        done: !1
                    }
                }
                )
            }
            ,
            n.prototype.entries = function() {
                var t = this.items
                  , e = this.capacity
                  , i = this.size
                  , n = this.start
                  , o = 0;
                return new r(function() {
                    if (o >= i)
                        return {
                            done: !0
                        };
                    var r = t[n];
                    return ++n === e && (n = 0),
                    {
                        value: [o++, r],
                        done: !1
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.values),
            n.prototype.inspect = function() {
                var t = this.toArray();
                return t.type = this.ArrayClass.name,
                t.capacity = this.capacity,
                Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            n.from = function(t, e, r) {
                if (arguments.length < 3 && "number" != typeof (r = i.guessLength(t)))
                    throw Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");
                var o, s, a = new n(e,r);
                if (i.isArrayLike(t)) {
                    for (o = 0,
                    s = t.length; o < s; o++)
                        a.items[o] = t[o];
                    return a.size = s,
                    a
                }
                return i.forEach(t, function(t) {
                    a.push(t)
                }),
                a
            }
            ,
            e.exports = n
        }
        )
          , q = C((t,e)=>{
            var i = L()
              , r = $();
            function n(t, e) {
                if (arguments.length < 2)
                    throw Error("mnemonist/circular-buffer: expecting an Array class and a capacity.");
                if ("number" != typeof e || e <= 0)
                    throw Error("mnemonist/circular-buffer: `capacity` should be a positive number.");
                this.ArrayClass = t,
                this.capacity = e,
                this.items = new t(this.capacity),
                this.clear()
            }
            function o(t) {
                n.prototype[t] = r.prototype[t]
            }
            Object.keys(r.prototype).forEach(o),
            "undefined" != typeof Symbol && Object.getOwnPropertySymbols(r.prototype).forEach(o),
            n.prototype.push = function(t) {
                var e = this.start + this.size;
                return e >= this.capacity && (e -= this.capacity),
                this.items[e] = t,
                this.size === this.capacity ? (++e >= this.capacity ? this.start = 0 : this.start = e,
                this.size) : ++this.size
            }
            ,
            n.prototype.unshift = function(t) {
                var e = this.start - 1;
                return 0 === this.start && (e = this.capacity - 1),
                this.items[e] = t,
                this.size === this.capacity ? (this.start = e,
                this.size) : (this.start = e,
                ++this.size)
            }
            ,
            n.from = function(t, e, r) {
                if (arguments.length < 3 && "number" != typeof (r = i.guessLength(t)))
                    throw Error("mnemonist/circular-buffer.from: could not guess iterable length. Please provide desired capacity as last argument.");
                var o, s, a = new n(e,r);
                if (i.isArrayLike(t)) {
                    for (o = 0,
                    s = t.length; o < s; o++)
                        a.items[o] = t[o];
                    return a.size = s,
                    a
                }
                return i.forEach(t, function(t) {
                    a.push(t)
                }),
                a
            }
            ,
            e.exports = n
        }
        )
          , V = C((t,e)=>{
            function i(t) {
                if ("function" != typeof t)
                    throw Error("mnemonist/DefaultMap.constructor: expecting a function.");
                this.items = new Map,
                this.factory = t,
                this.size = 0
            }
            i.prototype.clear = function() {
                this.items.clear(),
                this.size = 0
            }
            ,
            i.prototype.get = function(t) {
                var e = this.items.get(t);
                return void 0 === e && (e = this.factory(t, this.size),
                this.items.set(t, e),
                this.size++),
                e
            }
            ,
            i.prototype.peek = function(t) {
                return this.items.get(t)
            }
            ,
            i.prototype.set = function(t, e) {
                return this.items.set(t, e),
                this.size = this.items.size,
                this
            }
            ,
            i.prototype.has = function(t) {
                return this.items.has(t)
            }
            ,
            i.prototype.delete = function(t) {
                var e = this.items.delete(t);
                return this.size = this.items.size,
                e
            }
            ,
            i.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this,
                this.items.forEach(t, e)
            }
            ,
            i.prototype.entries = function() {
                return this.items.entries()
            }
            ,
            i.prototype.keys = function() {
                return this.items.keys()
            }
            ,
            i.prototype.values = function() {
                return this.items.values()
            }
            ,
            "undefined" != typeof Symbol && (i.prototype[Symbol.iterator] = i.prototype.entries),
            i.prototype.inspect = function() {
                return this.items
            }
            ,
            "undefined" != typeof Symbol && (i.prototype[Symbol.for("nodejs.util.inspect.custom")] = i.prototype.inspect),
            i.autoIncrement = function() {
                var t = 0;
                return function() {
                    return t++
                }
            }
            ,
            e.exports = i
        }
        )
          , K = C((t,e)=>{
            function i(t) {
                if ("function" != typeof t)
                    throw Error("mnemonist/DefaultWeakMap.constructor: expecting a function.");
                this.items = new WeakMap,
                this.factory = t
            }
            i.prototype.clear = function() {
                this.items = new WeakMap
            }
            ,
            i.prototype.get = function(t) {
                var e = this.items.get(t);
                return void 0 === e && (e = this.factory(t),
                this.items.set(t, e)),
                e
            }
            ,
            i.prototype.peek = function(t) {
                return this.items.get(t)
            }
            ,
            i.prototype.set = function(t, e) {
                return this.items.set(t, e),
                this
            }
            ,
            i.prototype.has = function(t) {
                return this.items.has(t)
            }
            ,
            i.prototype.delete = function(t) {
                return this.items.delete(t)
            }
            ,
            i.prototype.inspect = function() {
                return this.items
            }
            ,
            "undefined" != typeof Symbol && (i.prototype[Symbol.for("nodejs.util.inspect.custom")] = i.prototype.inspect),
            e.exports = i
        }
        )
          , X = C((t,e)=>{
            var i = I();
            function r(t) {
                var e = i.getPointerArray(t)
                  , r = i.getPointerArray(Math.log2(t));
                this.size = t,
                this.dimension = t,
                this.parents = new e(t),
                this.ranks = new r(t);
                for (var n = 0; n < t; n++)
                    this.parents[n] = n
            }
            r.prototype.find = function(t) {
                for (var e, i, r = t; e = this.parents[r],
                r !== e; )
                    r = e;
                for (; (i = this.parents[t]) !== r; )
                    this.parents[t] = r,
                    t = i;
                return r
            }
            ,
            r.prototype.union = function(t, e) {
                var i = this.find(t)
                  , r = this.find(e);
                if (i === r)
                    return this;
                this.dimension--;
                var n = this.ranks[t]
                  , o = this.ranks[e];
                return n < o ? this.parents[i] = r : n > o ? this.parents[r] = i : (this.parents[r] = i,
                this.ranks[i]++),
                this
            }
            ,
            r.prototype.connected = function(t, e) {
                return this.find(t) === this.find(e)
            }
            ,
            r.prototype.mapping = function() {
                for (var t, e = i.getPointerArray(this.dimension), r = {}, n = new e(this.size), o = 0, s = 0, a = this.parents.length; s < a; s++)
                    void 0 === r[t = this.find(s)] ? (n[s] = o,
                    r[t] = o++) : n[s] = r[t];
                return n
            }
            ,
            r.prototype.compile = function() {
                for (var t, e = {}, i = Array(this.dimension), r = 0, n = 0, o = this.parents.length; n < o; n++)
                    void 0 === e[t = this.find(n)] ? (i[r] = [n],
                    e[t] = r++) : i[e[t]].push(n);
                return i
            }
            ,
            r.prototype.inspect = function() {
                var t = this.compile();
                return Object.defineProperty(t, "constructor", {
                    value: r,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (r.prototype[Symbol.for("nodejs.util.inspect.custom")] = r.prototype.inspect),
            e.exports = r
        }
        )
          , Y = C((t,e)=>{
            var i = E()
              , r = D()
              , n = i.DEFAULT_COMPARATOR
              , o = i.reverseComparator;
            function s(t, e, i, n) {
                for (var o, s, a = n, h = a, u = new t(n); h > 0; )
                    o = i[--h],
                    0 !== h && (s = i[0],
                    i[0] = o,
                    function(t, e, i, n) {
                        for (var o, s = n, a = e[n], h = 2 * n + 1; h < i; )
                            (o = h + 1) < i && t(e[h], e[o]) >= 0 && (h = o),
                            e[n] = e[h],
                            h = 2 * (n = h) + 1;
                        e[n] = a,
                        r.siftDown(t, e, s, n)
                    }(e, i, --n, 0),
                    o = s),
                    u[h] = o;
                return u
            }
            function a(t, e, i) {
                if (2 == arguments.length && (i = e,
                e = null),
                this.ArrayClass = t,
                this.capacity = i,
                this.items = new t(i),
                this.clear(),
                this.comparator = e || n,
                "number" != typeof i && i <= 0)
                    throw Error("mnemonist/FixedReverseHeap.constructor: capacity should be a number > 0.");
                if ("function" != typeof this.comparator)
                    throw Error("mnemonist/FixedReverseHeap.constructor: given comparator should be a function.");
                this.comparator = o(this.comparator)
            }
            a.prototype.clear = function() {
                this.size = 0
            }
            ,
            a.prototype.push = function(t) {
                return this.size < this.capacity ? (this.items[this.size] = t,
                r.siftDown(this.comparator, this.items, 0, this.size),
                this.size++) : this.comparator(t, this.items[0]) > 0 && r.replace(this.comparator, this.items, t),
                this.size
            }
            ,
            a.prototype.peek = function() {
                return this.items[0]
            }
            ,
            a.prototype.consume = function() {
                var t = s(this.ArrayClass, this.comparator, this.items, this.size);
                return this.size = 0,
                t
            }
            ,
            a.prototype.toArray = function() {
                return s(this.ArrayClass, this.comparator, this.items.slice(0, this.size), this.size)
            }
            ,
            a.prototype.inspect = function() {
                var t = this.toArray();
                return Object.defineProperty(t, "constructor", {
                    value: a,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (a.prototype[Symbol.for("nodejs.util.inspect.custom")] = a.prototype.inspect),
            e.exports = a
        }
        )
          , J = C((t,e)=>{
            var i = z()
              , r = function(t) {
                return t
            };
            function n(t) {
                if (this.items = new Map,
                this.clear(),
                Array.isArray(t) ? (this.writeHashFunction = t[0],
                this.readHashFunction = t[1]) : (this.writeHashFunction = t,
                this.readHashFunction = t),
                this.writeHashFunction || (this.writeHashFunction = r),
                this.readHashFunction || (this.readHashFunction = r),
                "function" != typeof this.writeHashFunction || "function" != typeof this.readHashFunction)
                    throw Error("mnemonist/FuzzyMap.constructor: invalid hash function given.")
            }
            n.prototype.clear = function() {
                this.items.clear(),
                this.size = 0
            }
            ,
            n.prototype.add = function(t) {
                var e = this.writeHashFunction(t);
                return this.items.set(e, t),
                this.size = this.items.size,
                this
            }
            ,
            n.prototype.set = function(t, e) {
                return t = this.writeHashFunction(t),
                this.items.set(t, e),
                this.size = this.items.size,
                this
            }
            ,
            n.prototype.get = function(t) {
                return t = this.readHashFunction(t),
                this.items.get(t)
            }
            ,
            n.prototype.has = function(t) {
                return t = this.readHashFunction(t),
                this.items.has(t)
            }
            ,
            n.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this,
                this.items.forEach(function(i) {
                    t.call(e, i, i)
                })
            }
            ,
            n.prototype.values = function() {
                return this.items.values()
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.values),
            n.prototype.inspect = function() {
                var t = Array.from(this.items.values());
                return Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            n.from = function(t, e, r) {
                var o = new n(e);
                return i(t, function(t, e) {
                    r ? o.set(e, t) : o.add(t)
                }),
                o
            }
            ,
            e.exports = n
        }
        )
          , Z = C((t,e)=>{
            var i = B()
              , r = z();
            function n(t) {
                this.Container = t || Array,
                this.items = new Map,
                this.clear(),
                Object.defineProperty(this.items, "constructor", {
                    value: n,
                    enumerable: !1
                })
            }
            n.prototype.clear = function() {
                this.size = 0,
                this.dimension = 0,
                this.items.clear()
            }
            ,
            n.prototype.set = function(t, e) {
                var i, r = this.items.get(t);
                return r || (this.dimension++,
                r = new this.Container,
                this.items.set(t, r)),
                this.Container === Set ? (i = r.size,
                r.add(e),
                i < r.size && this.size++) : (r.push(e),
                this.size++),
                this
            }
            ,
            n.prototype.delete = function(t) {
                var e = this.items.get(t);
                return !!e && (this.size -= this.Container === Set ? e.size : e.length,
                this.dimension--,
                this.items.delete(t),
                !0)
            }
            ,
            n.prototype.remove = function(t, e) {
                var i, r, n = this.items.get(t);
                return !!n && (this.Container === Set ? ((i = n.delete(e)) && this.size--,
                0 === n.size && (this.items.delete(t),
                this.dimension--),
                i) : -1 !== (r = n.indexOf(e)) && (this.size--,
                1 === n.length ? (this.items.delete(t),
                this.dimension--) : n.splice(r, 1),
                !0))
            }
            ,
            n.prototype.has = function(t) {
                return this.items.has(t)
            }
            ,
            n.prototype.get = function(t) {
                return this.items.get(t)
            }
            ,
            n.prototype.multiplicity = function(t) {
                var e = this.items.get(t);
                return void 0 === e ? 0 : this.Container === Set ? e.size : e.length
            }
            ,
            n.prototype.count = n.prototype.multiplicity,
            n.prototype.forEach = function(t, e) {
                var i;
                function r(r) {
                    t.call(e, r, i)
                }
                e = arguments.length > 1 ? e : this,
                this.items.forEach(function(t, e) {
                    i = e,
                    t.forEach(r)
                })
            }
            ,
            n.prototype.forEachAssociation = function(t, e) {
                e = arguments.length > 1 ? e : this,
                this.items.forEach(t, e)
            }
            ,
            n.prototype.keys = function() {
                return this.items.keys()
            }
            ,
            n.prototype.values = function() {
                var t, e, r, n, o = this.items.values(), s = !1;
                return new i(this.Container === Set ? function i() {
                    if (!s) {
                        if ((e = o.next()).done)
                            return {
                                done: !0
                            };
                        s = !0,
                        t = e.value.values()
                    }
                    return (e = t.next()).done ? (s = !1,
                    i()) : {
                        done: !1,
                        value: e.value
                    }
                }
                : function i() {
                    if (!s) {
                        if ((e = o.next()).done)
                            return {
                                done: !0
                            };
                        s = !0,
                        t = e.value,
                        r = 0,
                        n = t.length
                    }
                    return r >= n ? (s = !1,
                    i()) : {
                        done: !1,
                        value: t[r++]
                    }
                }
                )
            }
            ,
            n.prototype.entries = function() {
                var t, e, r, n, o, s = this.items.entries(), a = !1;
                return new i(this.Container === Set ? function i() {
                    if (!a) {
                        if ((e = s.next()).done)
                            return {
                                done: !0
                            };
                        a = !0,
                        r = e.value[0],
                        t = e.value[1].values()
                    }
                    return (e = t.next()).done ? (a = !1,
                    i()) : {
                        done: !1,
                        value: [r, e.value]
                    }
                }
                : function i() {
                    if (!a) {
                        if ((e = s.next()).done)
                            return {
                                done: !0
                            };
                        a = !0,
                        r = e.value[0],
                        t = e.value[1],
                        n = 0,
                        o = t.length
                    }
                    return n >= o ? (a = !1,
                    i()) : {
                        done: !1,
                        value: [r, t[n++]]
                    }
                }
                )
            }
            ,
            n.prototype.containers = function() {
                return this.items.values()
            }
            ,
            n.prototype.associations = function() {
                return this.items.entries()
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.entries),
            n.prototype.inspect = function() {
                return this.items
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            n.prototype.toJSON = function() {
                return this.items
            }
            ,
            n.from = function(t, e) {
                var i = new n(e);
                return r(t, function(t, e) {
                    i.set(e, t)
                }),
                i
            }
            ,
            e.exports = n
        }
        )
          , Q = C((t,e)=>{
            var i = Z()
              , r = z()
              , n = function(t) {
                return t
            };
            function o(t, e) {
                if (this.items = new i(e),
                this.clear(),
                Array.isArray(t) ? (this.writeHashFunction = t[0],
                this.readHashFunction = t[1]) : (this.writeHashFunction = t,
                this.readHashFunction = t),
                this.writeHashFunction || (this.writeHashFunction = n),
                this.readHashFunction || (this.readHashFunction = n),
                "function" != typeof this.writeHashFunction || "function" != typeof this.readHashFunction)
                    throw Error("mnemonist/FuzzyMultiMap.constructor: invalid hash function given.")
            }
            o.prototype.clear = function() {
                this.items.clear(),
                this.size = 0,
                this.dimension = 0
            }
            ,
            o.prototype.add = function(t) {
                var e = this.writeHashFunction(t);
                return this.items.set(e, t),
                this.size = this.items.size,
                this.dimension = this.items.dimension,
                this
            }
            ,
            o.prototype.set = function(t, e) {
                return t = this.writeHashFunction(t),
                this.items.set(t, e),
                this.size = this.items.size,
                this.dimension = this.items.dimension,
                this
            }
            ,
            o.prototype.get = function(t) {
                return t = this.readHashFunction(t),
                this.items.get(t)
            }
            ,
            o.prototype.has = function(t) {
                return t = this.readHashFunction(t),
                this.items.has(t)
            }
            ,
            o.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this,
                this.items.forEach(function(i) {
                    t.call(e, i, i)
                })
            }
            ,
            o.prototype.values = function() {
                return this.items.values()
            }
            ,
            "undefined" != typeof Symbol && (o.prototype[Symbol.iterator] = o.prototype.values),
            o.prototype.inspect = function() {
                var t = Array.from(this);
                return Object.defineProperty(t, "constructor", {
                    value: o,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (o.prototype[Symbol.for("nodejs.util.inspect.custom")] = o.prototype.inspect),
            o.from = function(t, e, i, n) {
                3 == arguments.length && "boolean" == typeof i && (n = i,
                i = Array);
                var s = new o(e,i);
                return r(t, function(t, e) {
                    n ? s.set(e, t) : s.add(t)
                }),
                s
            }
            ,
            e.exports = o
        }
        )
          , tt = C((t,e)=>{
            function i(t, e) {
                if (arguments.length < 1)
                    throw Error("mnemonist/hashed-array-tree: expecting at least a byte array constructor.");
                var i, r = e || 0, n = 1024, o = 0;
                if ("object" == typeof e && (r = e.initialCapacity || 0,
                o = e.initialLength || 0,
                n = e.blockSize || 1024),
                !n || ((i = n) & i - 1) != 0)
                    throw Error("mnemonist/hashed-array-tree: block size should be a power of two.");
                var s = Math.ceil(Math.max(o, r) / n);
                this.ArrayClass = t,
                this.length = o,
                this.capacity = s * n,
                this.blockSize = n,
                this.offsetMask = n - 1,
                this.blockMask = Math.log2(n),
                this.blocks = Array(s);
                for (var a = 0; a < s; a++)
                    this.blocks[a] = new this.ArrayClass(this.blockSize)
            }
            i.prototype.set = function(t, e) {
                if (this.length < t)
                    throw Error("HashedArrayTree(" + this.ArrayClass.name + ").set: index out of bounds.");
                var i = t >> this.blockMask
                  , r = t & this.offsetMask;
                return this.blocks[i][r] = e,
                this
            }
            ,
            i.prototype.get = function(t) {
                if (!(this.length < t)) {
                    var e = t >> this.blockMask
                      , i = t & this.offsetMask;
                    return this.blocks[e][i]
                }
            }
            ,
            i.prototype.grow = function(t) {
                if ("number" != typeof t && (t = this.capacity + this.blockSize),
                this.capacity >= t)
                    return this;
                for (; this.capacity < t; )
                    this.blocks.push(new this.ArrayClass(this.blockSize)),
                    this.capacity += this.blockSize;
                return this
            }
            ,
            i.prototype.resize = function(t) {
                return t === this.length || (t < this.length ? this.length = t : (this.length = t,
                this.grow(t))),
                this
            }
            ,
            i.prototype.push = function(t) {
                this.capacity === this.length && this.grow();
                var e = this.length
                  , i = e >> this.blockMask
                  , r = e & this.offsetMask;
                return this.blocks[i][r] = t,
                ++this.length
            }
            ,
            i.prototype.pop = function() {
                if (0 !== this.length)
                    return this.blocks[this.blocks.length - 1][--this.length & this.offsetMask]
            }
            ,
            i.prototype.inspect = function() {
                for (var t, e = new this.ArrayClass(this.length), r = 0, n = this.length; r < n; r++)
                    t = r >> this.blockMask,
                    e[r] = this.blocks[t][r & this.offsetMask];
                return e.type = this.ArrayClass.name,
                e.items = this.length,
                e.capacity = this.capacity,
                e.blockSize = this.blockSize,
                Object.defineProperty(e, "constructor", {
                    value: i,
                    enumerable: !1
                }),
                e
            }
            ,
            "undefined" != typeof Symbol && (i.prototype[Symbol.for("nodejs.util.inspect.custom")] = i.prototype.inspect),
            e.exports = i
        }
        )
          , te = C((t,e)=>{
            var i = B()
              , r = L();
            function n(t, e) {
                if (arguments.length < 2)
                    throw Error("mnemonist/fixed-stack: expecting an Array class and a capacity.");
                if ("number" != typeof e || e <= 0)
                    throw Error("mnemonist/fixed-stack: `capacity` should be a positive number.");
                this.capacity = e,
                this.ArrayClass = t,
                this.items = new this.ArrayClass(this.capacity),
                this.clear()
            }
            n.prototype.clear = function() {
                this.size = 0
            }
            ,
            n.prototype.push = function(t) {
                if (this.size === this.capacity)
                    throw Error("mnemonist/fixed-stack.push: stack capacity (" + this.capacity + ") exceeded!");
                return this.items[this.size++] = t,
                this.size
            }
            ,
            n.prototype.pop = function() {
                if (0 !== this.size)
                    return this.items[--this.size]
            }
            ,
            n.prototype.peek = function() {
                return this.items[this.size - 1]
            }
            ,
            n.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i = 0, r = this.items.length; i < r; i++)
                    t.call(e, this.items[r - i - 1], i, this)
            }
            ,
            n.prototype.toArray = function() {
                for (var t = new this.ArrayClass(this.size), e = this.size - 1, i = this.size; i--; )
                    t[i] = this.items[e - i];
                return t
            }
            ,
            n.prototype.values = function() {
                var t = this.items
                  , e = this.size
                  , r = 0;
                return new i(function() {
                    if (r >= e)
                        return {
                            done: !0
                        };
                    var i = t[e - r - 1];
                    return r++,
                    {
                        value: i,
                        done: !1
                    }
                }
                )
            }
            ,
            n.prototype.entries = function() {
                var t = this.items
                  , e = this.size
                  , r = 0;
                return new i(function() {
                    if (r >= e)
                        return {
                            done: !0
                        };
                    var i = t[e - r - 1];
                    return {
                        value: [r++, i],
                        done: !1
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.values),
            n.prototype.toString = function() {
                return this.toArray().join(",")
            }
            ,
            n.prototype.toJSON = function() {
                return this.toArray()
            }
            ,
            n.prototype.inspect = function() {
                var t = this.toArray();
                return t.type = this.ArrayClass.name,
                t.capacity = this.capacity,
                Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            n.from = function(t, e, i) {
                if (arguments.length < 3 && "number" != typeof (i = r.guessLength(t)))
                    throw Error("mnemonist/fixed-stack.from: could not guess iterable length. Please provide desired capacity as last argument.");
                var o, s, a = new n(e,i);
                if (r.isArrayLike(t)) {
                    for (o = 0,
                    s = t.length; o < s; o++)
                        a.items[o] = t[o];
                    return a.size = s,
                    a
                }
                return r.forEach(t, function(t) {
                    a.push(t)
                }),
                a
            }
            ,
            e.exports = n
        }
        )
          , ti = C((t,e)=>{
            var i = L()
              , r = I()
              , n = te();
            function o(t, e) {
                this.size = t.length,
                this.intervals = t;
                var i = null
                  , o = null;
                Array.isArray(e) && (i = e[0],
                o = e[1]);
                var s, a = t.length, h = r.getPointerArray(a + 1), u = new h(a);
                for (s = 1; s < a; s++)
                    u[s] = s;
                u.sort(function(e, r) {
                    return e = t[e],
                    r = t[r],
                    i ? (e = i(e),
                    r = i(r)) : (e = e[0],
                    r = r[0]),
                    e < r ? -1 : e > r ? 1 : 0
                });
                var l = Math.ceil(Math.log2(a + 1))
                  , c = new h(Math.pow(2, l) - 1)
                  , p = new h(a);
                (function t(e, i, r, n, o, s, a, h) {
                    var u = a + (h - a) / 2 | 0
                      , l = ~-u
                      , c = -~u
                      , p = r[u];
                    n[s] = p + 1;
                    var f = i ? i(e[p]) : e[p][1]
                      , d = 2 * s + 1
                      , y = 2 * s + 2
                      , g = -1 / 0
                      , v = -1 / 0;
                    a <= l && (g = t(e, i, r, n, o, d, a, l)),
                    c <= h && (v = t(e, i, r, n, o, y, c, h));
                    var m = Math.max(f, g, v)
                      , w = p;
                    return m === g ? w = o[n[d] - 1] : m === v && (w = o[n[y] - 1]),
                    o[p] = w,
                    m
                }
                )(t, o, u, c, p, 0, 0, a - 1),
                u = null,
                this.height = l,
                this.tree = c,
                this.augmentations = p,
                this.startGetter = i,
                this.endGetter = o,
                this.stack = new n(h,this.height)
            }
            o.prototype.intervalsContainingPoint = function(t) {
                var e = []
                  , i = this.stack;
                i.clear(),
                i.push(0);
                for (var r, n, o, s, a, h, u, l, c = this.tree.length; i.size; )
                    r = i.pop(),
                    n = this.tree[r] - 1,
                    o = this.intervals[n],
                    s = this.intervals[this.augmentations[n]],
                    t > (this.endGetter ? this.endGetter(s) : s[1]) || ((u = 2 * r + 1) < c && 0 !== this.tree[u] && i.push(u),
                    a = this.startGetter ? this.startGetter(o) : o[0],
                    h = this.endGetter ? this.endGetter(o) : o[1],
                    t >= a && t <= h && e.push(o),
                    !(t < a) && (l = 2 * r + 2) < c && 0 !== this.tree[l] && i.push(l));
                return e
            }
            ,
            o.prototype.intervalsOverlappingInterval = function(t) {
                var e = this.startGetter ? this.startGetter(t) : t[0]
                  , i = this.endGetter ? this.endGetter(t) : t[1]
                  , r = []
                  , n = this.stack;
                n.clear(),
                n.push(0);
                for (var o, s, a, h, u, l, c, p, f = this.tree.length; n.size; )
                    o = n.pop(),
                    s = this.tree[o] - 1,
                    a = this.intervals[s],
                    h = this.intervals[this.augmentations[s]],
                    e > (this.endGetter ? this.endGetter(h) : h[1]) || ((c = 2 * o + 1) < f && 0 !== this.tree[c] && n.push(c),
                    u = this.startGetter ? this.startGetter(a) : a[0],
                    l = this.endGetter ? this.endGetter(a) : a[1],
                    i >= u && e <= l && r.push(a),
                    !(i < u) && (p = 2 * o + 2) < f && 0 !== this.tree[p] && n.push(p));
                return r
            }
            ,
            o.prototype.inspect = function() {
                var t = this.intervals.slice();
                return Object.defineProperty(t, "constructor", {
                    value: o,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (o.prototype[Symbol.for("nodejs.util.inspect.custom")] = o.prototype.inspect),
            o.from = function(t, e) {
                return i.isArrayLike(t) ? new o(t,e) : new o(Array.from(t),e)
            }
            ,
            e.exports = o
        }
        )
          , tr = C(t=>{
            t.search = function(t, e, i, r) {
                var n, o = 0;
                for (i = void 0 !== i ? i : 0,
                r = void 0 !== r ? r : t.length,
                r--; i <= r; )
                    if ((n = t[o = i + r >>> 1]) > e)
                        r = ~-o;
                    else {
                        if (!(n < e))
                            return o;
                        i = -~o
                    }
                return -1
            }
            ,
            t.searchWithComparator = function(t, e, i) {
                for (var r, n = 0, o = 0, s = ~-e.length; o <= s; )
                    if ((r = t(e[n = o + s >>> 1], i)) > 0)
                        s = ~-n;
                    else {
                        if (!(r < 0))
                            return n;
                        o = -~n
                    }
                return -1
            }
            ,
            t.lowerBound = function(t, e, i, r) {
                var n = 0;
                for (i = void 0 !== i ? i : 0,
                r = void 0 !== r ? r : t.length; i < r; )
                    e <= t[n = i + r >>> 1] ? r = n : i = -~n;
                return i
            }
            ,
            t.lowerBoundWithComparator = function(t, e, i) {
                for (var r = 0, n = 0, o = e.length; n < o; )
                    0 >= t(i, e[r = n + o >>> 1]) ? o = r : n = -~r;
                return n
            }
            ,
            t.lowerBoundIndices = function(t, e, i, r, n) {
                var o = 0;
                for (r = void 0 !== r ? r : 0,
                n = void 0 !== n ? n : t.length; r < n; )
                    i <= t[e[o = r + n >>> 1]] ? n = o : r = -~o;
                return r
            }
            ,
            t.upperBound = function(t, e, i, r) {
                var n = 0;
                for (i = void 0 !== i ? i : 0,
                r = void 0 !== r ? r : t.length; i < r; )
                    e >= t[n = i + r >>> 1] ? i = -~n : r = n;
                return i
            }
            ,
            t.upperBoundWithComparator = function(t, e, i) {
                for (var r = 0, n = 0, o = e.length; n < o; )
                    t(i, e[r = n + o >>> 1]) >= 0 ? n = -~r : o = r;
                return n
            }
        }
        )
          , tn = C(t=>{
            var e = I()
              , i = L().isArrayLike
              , r = tr()
              , n = M();
            function o(t, i) {
                if (0 === t.length)
                    return i.slice();
                if (0 === i.length)
                    return t.slice();
                t[0] > i[0] && (o = t,
                t = i,
                i = o);
                var r = t[t.length - 1]
                  , n = i[0];
                if (r <= n)
                    return e.isTypedArray(t) ? e.concat(t, i) : t.concat(i);
                var o, s, a, h, u = new t.constructor(t.length + i.length);
                for (s = 0,
                a = t.length; s < a && (h = t[s]) <= n; s++)
                    u[s] = h;
                for (var l, c, p = s, f = t.length, d = 0, y = i.length; p < f && d < y; )
                    (l = t[p]) <= (c = i[d]) ? (u[s++] = l,
                    p++) : (u[s++] = c,
                    d++);
                for (; p < f; )
                    u[s++] = t[p++];
                for (; d < y; )
                    u[s++] = i[d++];
                return u
            }
            function s(t, i) {
                if (0 === t.length)
                    return i.slice();
                if (0 === i.length)
                    return t.slice();
                t[0] > i[0] && (o = t,
                t = i,
                i = o);
                var r = t[t.length - 1]
                  , n = i[0];
                if (r < n)
                    return e.isTypedArray(t) ? e.concat(t, i) : t.concat(i);
                var o, s, a, h, u = new t.constructor;
                for (s = 0,
                a = t.length; s < a && (h = t[s]) < n; s++)
                    u.push(h);
                for (var l, c, p = s, f = t.length, d = 0, y = i.length; p < f && d < y; )
                    (l = t[p]) <= (c = i[d]) ? ((0 === u.length || u[u.length - 1] !== l) && u.push(l),
                    p++) : ((0 === u.length || u[u.length - 1] !== c) && u.push(c),
                    d++);
                for (; p < f; )
                    l = t[p++],
                    (0 === u.length || u[u.length - 1] !== l) && u.push(l);
                for (; d < y; )
                    c = i[d++],
                    (0 === u.length || u[u.length - 1] !== c) && u.push(c);
                return u
            }
            t.intersectionUniqueArrays = function(t, e) {
                if (0 === t.length || 0 === e.length)
                    return new t.constructor(0);
                t[0] > e[0] && (o = t,
                t = e,
                e = o);
                var i = t[t.length - 1]
                  , n = e[0];
                if (i < n)
                    return new t.constructor(0);
                for (var o, s, a, h = new t.constructor, u = r.lowerBound(t, n), l = t.length, c = 0, p = r.upperBound(e, i); u < l && c < p; )
                    (s = t[u]) < (a = e[c]) ? u = r.lowerBound(t, a, u + 1) : s > a ? c = r.lowerBound(e, s, c + 1) : (h.push(s),
                    u++,
                    c++);
                return h
            }
            ,
            t.kWayIntersectionUniqueArrays = function(t) {
                var e, i, n, o, s, a = -1 / 0, h = -1 / 0, u = 1 / 0;
                for (o = 0,
                s = t.length; o < s; o++) {
                    if (0 === (n = t[o].length))
                        return [];
                    n > a && (a = n),
                    e = t[o][0],
                    i = t[o][n - 1],
                    e > h && (h = e),
                    i < u && (u = i)
                }
                if (h > u)
                    return [];
                if (h === u)
                    return [h];
                var l, c, p, f, d, y, g, v, m = t[0], w = h;
                for (o = 1; o < s; o++) {
                    for (l = m,
                    c = t[o],
                    m = [],
                    p = 0,
                    f = r.lowerBound(c, w),
                    d = l.length,
                    y = c.length; p < d && f < y; )
                        (g = l[p]) < (v = c[f]) ? p = r.lowerBound(l, v, p + 1) : g > v ? f = r.lowerBound(c, g, f + 1) : (m.push(g),
                        p++,
                        f++);
                    if (0 === m.length)
                        break;
                    w = m[0]
                }
                return m
            }
            ,
            t.merge = function() {
                if (2 == arguments.length) {
                    if (i(arguments[0]))
                        return o(arguments[0], arguments[1])
                } else if (i(arguments[0]))
                    return function(t) {
                        var i, r, s, a, h, u = 0, l = -1 / 0, c = [];
                        for (a = 0,
                        h = t.length; a < h; a++)
                            0 !== (s = t[a].length) && (c.push(t[a]),
                            u += s,
                            s > l && (l = s));
                        if (0 === c.length)
                            return new t[0].constructor(0);
                        if (1 === c.length)
                            return c[0].slice();
                        if (2 === c.length)
                            return o(c[0], c[1]);
                        var p = new (t = c)[0].constructor(u)
                          , f = new (e.getPointerArray(l))(t.length)
                          , d = new n(function(e, i) {
                            return (e = t[e][f[e]]) < (i = t[i][f[i]]) ? -1 : e > i ? 1 : 0
                        }
                        );
                        for (a = 0; a < h; a++)
                            d.push(a);
                        for (a = 0; d.size; )
                            r = t[i = d.pop()][f[i]++],
                            p[a++] = r,
                            f[i] < t[i].length && d.push(i);
                        return p
                    }(arguments);
                return null
            }
            ,
            t.unionUnique = function() {
                if (2 == arguments.length) {
                    if (i(arguments[0]))
                        return s(arguments[0], arguments[1])
                } else if (i(arguments[0]))
                    return function(t) {
                        var i, r, o, a, h, u = -1 / 0, l = [];
                        for (a = 0,
                        h = t.length; a < h; a++)
                            0 !== (o = t[a].length) && (l.push(t[a]),
                            o > u && (u = o));
                        if (0 === l.length)
                            return new t[0].constructor(0);
                        if (1 === l.length)
                            return l[0].slice();
                        if (2 === l.length)
                            return s(l[0], l[1]);
                        var c = new (t = l)[0].constructor
                          , p = new (e.getPointerArray(u))(t.length)
                          , f = new n(function(e, i) {
                            return (e = t[e][p[e]]) < (i = t[i][p[i]]) ? -1 : e > i ? 1 : 0
                        }
                        );
                        for (a = 0; a < h; a++)
                            f.push(a);
                        for (; f.size; )
                            r = t[i = f.pop()][p[i]++],
                            (0 === c.length || c[c.length - 1] !== r) && c.push(r),
                            p[i] < t[i].length && f.push(i);
                        return c
                    }(arguments);
                return null
            }
            ,
            t.intersectionUnique = function() {
                if (2 == arguments.length) {
                    if (i(arguments[0]))
                        return t.intersectionUniqueArrays(arguments[0], arguments[1])
                } else if (i(arguments[0]))
                    return t.kWayIntersectionUniqueArrays(arguments);
                return null
            }
        }
        )
          , to = C((t,e)=>{
            var i = B()
              , r = z()
              , n = tn();
            function o(t) {
                return t
            }
            function s(t) {
                if (this.clear(),
                Array.isArray(t) ? (this.documentTokenizer = t[0],
                this.queryTokenizer = t[1]) : (this.documentTokenizer = t,
                this.queryTokenizer = t),
                this.documentTokenizer || (this.documentTokenizer = o),
                this.queryTokenizer || (this.queryTokenizer = o),
                "function" != typeof this.documentTokenizer)
                    throw Error("mnemonist/InvertedIndex.constructor: document tokenizer is not a function.");
                if ("function" != typeof this.queryTokenizer)
                    throw Error("mnemonist/InvertedIndex.constructor: query tokenizer is not a function.")
            }
            s.prototype.clear = function() {
                this.items = [],
                this.mapping = new Map,
                this.size = 0,
                this.dimension = 0
            }
            ,
            s.prototype.add = function(t) {
                this.size++;
                var e = this.items.length;
                this.items.push(t);
                var i = this.documentTokenizer(t);
                if (!Array.isArray(i))
                    throw Error("mnemonist/InvertedIndex.add: tokenizer function should return an array of tokens.");
                for (var r, n, o = new Set, s = 0, a = i.length; s < a; s++)
                    r = i[s],
                    o.has(r) || (o.add(r),
                    (n = this.mapping.get(r)) || (n = [],
                    this.mapping.set(r, n)),
                    n.push(e));
                return this.dimension = this.mapping.size,
                this
            }
            ,
            s.prototype.get = function(t) {
                if (!this.size)
                    return [];
                var e = this.queryTokenizer(t);
                if (!Array.isArray(e))
                    throw Error("mnemonist/InvertedIndex.query: tokenizer function should return an array of tokens.");
                if (!e.length)
                    return [];
                var i, r, o, s = this.mapping.get(e[0]);
                if (void 0 === s || 0 === s.length)
                    return [];
                if (e.length > 1)
                    for (r = 1,
                    o = e.length; r < o; r++) {
                        if (void 0 === (i = this.mapping.get(e[r])) || 0 === i.length)
                            return [];
                        s = n.intersectionUniqueArrays(s, i)
                    }
                var a = Array(s.length);
                for (r = 0,
                o = a.length; r < o; r++)
                    a[r] = this.items[s[r]];
                return a
            }
            ,
            s.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i = 0, r = this.documents.length; i < r; i++)
                    t.call(e, this.documents[i], i, this)
            }
            ,
            s.prototype.documents = function() {
                var t = this.items
                  , e = t.length
                  , r = 0;
                return new i(function() {
                    return r >= e ? {
                        done: !0
                    } : {
                        value: t[r++],
                        done: !1
                    }
                }
                )
            }
            ,
            s.prototype.tokens = function() {
                return this.mapping.keys()
            }
            ,
            "undefined" != typeof Symbol && (s.prototype[Symbol.iterator] = s.prototype.documents),
            s.prototype.inspect = function() {
                var t = this.items.slice();
                return Object.defineProperty(t, "constructor", {
                    value: s,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (s.prototype[Symbol.for("nodejs.util.inspect.custom")] = s.prototype.inspect),
            s.from = function(t, e) {
                var i = new s(e);
                return r(t, function(t) {
                    i.add(t)
                }),
                i
            }
            ,
            e.exports = s
        }
        )
          , ts = C(t=>{
            var e = new Float64Array(64)
              , i = new Float64Array(64);
            t.inplaceQuickSort = function(t, r, n) {
                var o, s, a, h, u;
                for (e[0] = r,
                i[0] = n,
                s = 0; s >= 0; )
                    if ((a = e[s]) < (h = i[s] - 1)) {
                        for (o = t[a]; a < h; ) {
                            for (; t[h] >= o && a < h; )
                                h--;
                            for (a < h && (t[a++] = t[h]); t[a] <= o && a < h; )
                                a++;
                            a < h && (t[h--] = t[a])
                        }
                        t[a] = o,
                        e[s + 1] = a + 1,
                        i[s + 1] = i[s],
                        i[s++] = a,
                        i[s] - e[s] > i[s - 1] - e[s - 1] && (u = e[s],
                        e[s] = e[s - 1],
                        e[s - 1] = u,
                        u = i[s],
                        i[s] = i[s - 1],
                        i[s - 1] = u)
                    } else
                        s--;
                return t
            }
            ,
            t.inplaceQuickSortIndices = function(t, r, n, o) {
                var s, a, h, u, l, c;
                for (e[0] = n,
                i[0] = o,
                a = 0; a >= 0; )
                    if ((h = e[a]) < (u = i[a] - 1)) {
                        for (s = t[l = r[h]]; h < u; ) {
                            for (; t[r[u]] >= s && h < u; )
                                u--;
                            for (h < u && (r[h++] = r[u]); t[r[h]] <= s && h < u; )
                                h++;
                            h < u && (r[u--] = r[h])
                        }
                        r[h] = l,
                        e[a + 1] = h + 1,
                        i[a + 1] = i[a],
                        i[a++] = h,
                        i[a] - e[a] > i[a - 1] - e[a - 1] && (c = e[a],
                        e[a] = e[a - 1],
                        e[a - 1] = c,
                        c = i[a],
                        i[a] = i[a - 1],
                        i[a - 1] = c)
                    } else
                        a--;
                return r
            }
        }
        )
          , ta = C((t,e)=>{
            var i = L()
              , r = I()
              , n = E().createTupleComparator
              , o = Y()
              , s = ts().inplaceQuickSortIndices;
            function a(t, e, i, r) {
                var n, o, s = 0;
                for (n = 0; n < t; n++)
                    s += (o = e[n][i] - r[n]) * o;
                return s
            }
            function h(t, e, i, n) {
                for (var o, a, h, u, l, c, p, f, d = n.length, y = r.getPointerArray(d + 1), g = new y(d), v = new y(d), m = new y(d), w = [[0, 0, i.length, -1, 0]], b = 0; 0 !== w.length; )
                    f = (o = w.pop())[0],
                    c = o[1],
                    p = o[2],
                    a = o[3],
                    h = o[4],
                    s(e[f], i, c, p),
                    d = p - c,
                    l = i[u = c + (d >>> 1)],
                    g[b] = l,
                    a > -1 && (0 === h ? v[a] = b + 1 : m[a] = b + 1),
                    f = (f + 1) % t,
                    u !== c && u !== p - 1 && w.push([f, u + 1, p, b, 1]),
                    u !== c && w.push([f, c, u, b, 0]),
                    b++;
                return {
                    axes: e,
                    labels: n,
                    pivots: g,
                    lefts: v,
                    rights: m
                }
            }
            function u(t, e) {
                this.dimensions = t,
                this.visited = 0,
                this.axes = e.axes,
                this.labels = e.labels,
                this.pivots = e.pivots,
                this.lefts = e.lefts,
                this.rights = e.rights,
                this.size = this.labels.length
            }
            u.prototype.nearestNeighbor = function(t) {
                var e = 1 / 0
                  , i = null
                  , r = this.dimensions
                  , n = this.axes
                  , o = this.pivots
                  , s = this.lefts
                  , h = this.rights
                  , u = 0;
                return function l(c, p) {
                    u++;
                    var f = s[p]
                      , d = h[p]
                      , y = o[p]
                      , g = a(r, n, y, t);
                    if (!(g < e && (i = y,
                    e = g,
                    0 === g))) {
                        var v = n[c][y] - t[c];
                        c = (c + 1) % r,
                        v > 0 ? 0 !== f && l(c, f - 1) : 0 !== d && l(c, d - 1),
                        v * v < e && (v > 0 ? 0 !== d && l(c, d - 1) : 0 !== f && l(c, f - 1))
                    }
                }(0, 0),
                this.visited = u,
                this.labels[i]
            }
            ;
            var l = n(3)
              , c = n(2);
            u.prototype.kNearestNeighbors = function(t, e) {
                if (t <= 0)
                    throw Error("mnemonist/kd-tree.kNearestNeighbors: k should be a positive number.");
                if (1 === (t = Math.min(t, this.size)))
                    return [this.nearestNeighbor(e)];
                var i = new o(Array,l,t)
                  , r = this.dimensions
                  , n = this.axes
                  , s = this.pivots
                  , h = this.lefts
                  , u = this.rights
                  , c = 0;
                (function o(l, p) {
                    var f = h[p]
                      , d = u[p]
                      , y = s[p]
                      , g = a(r, n, y, e);
                    i.push([g, c++, y]);
                    var v = e[l]
                      , m = n[l][y]
                      , w = v - m;
                    l = (l + 1) % r,
                    v < m ? 0 !== f && o(l, f - 1) : 0 !== d && o(l, d - 1),
                    (w * w < i.peek()[0] || i.size < t) && (v < m ? 0 !== d && o(l, d - 1) : 0 !== f && o(l, f - 1))
                }
                )(0, 0),
                this.visited = c;
                for (var p = i.consume(), f = 0; f < p.length; f++)
                    p[f] = this.labels[p[f][2]];
                return p
            }
            ,
            u.prototype.linearKNearestNeighbors = function(t, e) {
                if (t <= 0)
                    throw Error("mnemonist/kd-tree.kNearestNeighbors: k should be a positive number.");
                var i, r, n, s = new o(Array,c,t = Math.min(t, this.size));
                for (i = 0,
                r = this.size; i < r; i++)
                    n = a(this.dimensions, this.axes, this.pivots[i], e),
                    s.push([n, i]);
                var h = s.consume();
                for (i = 0; i < h.length; i++)
                    h[i] = this.labels[this.pivots[h[i][1]]];
                return h
            }
            ,
            u.prototype.inspect = function() {
                var t, e, i, r = new Map;
                for (r.dimensions = this.dimensions,
                Object.defineProperty(r, "constructor", {
                    value: u,
                    enumerable: !1
                }),
                t = 0; t < this.size; t++) {
                    for (i = Array(this.dimensions),
                    e = 0; e < this.dimensions; e++)
                        i[e] = this.axes[e][t];
                    r.set(this.labels[t], i)
                }
                return r
            }
            ,
            "undefined" != typeof Symbol && (u.prototype[Symbol.for("nodejs.util.inspect.custom")] = u.prototype.inspect),
            u.from = function(t, e) {
                var n = function(t, e) {
                    var i, n, o, s, a = e.length, h = Array(t), u = Array(a), l = new (r.getPointerArray(a))(a), c = !0;
                    for (n = 0; n < t; n++) {
                        for (i = new Float64Array(a),
                        o = 0; o < a; o++)
                            s = e[o],
                            i[o] = s[1][n],
                            c && (u[o] = s[0],
                            l[o] = o);
                        c = !1,
                        h[n] = i
                    }
                    return {
                        axes: h,
                        ids: l,
                        labels: u
                    }
                }(e, i.toArray(t))
                  , o = h(e, n.axes, n.ids, n.labels);
                return new u(e,o)
            }
            ,
            u.fromAxes = function(t, e) {
                return e || (e = r.indices(t[0].length)),
                new u(t.length,h(t.length, t, r.indices(e.length), e))
            }
            ,
            e.exports = u
        }
        )
          , th = C((t,e)=>{
            var i = B()
              , r = z();
            function n() {
                this.clear()
            }
            n.prototype.clear = function() {
                this.head = null,
                this.tail = null,
                this.size = 0
            }
            ,
            n.prototype.first = function() {
                return this.head ? this.head.item : void 0
            }
            ,
            n.prototype.peek = n.prototype.first,
            n.prototype.last = function() {
                return this.tail ? this.tail.item : void 0
            }
            ,
            n.prototype.push = function(t) {
                var e = {
                    item: t,
                    next: null
                };
                return this.head ? this.tail.next = e : this.head = e,
                this.tail = e,
                this.size++,
                this.size
            }
            ,
            n.prototype.unshift = function(t) {
                var e = {
                    item: t,
                    next: null
                };
                return this.head ? (this.head.next || (this.tail = this.head),
                e.next = this.head,
                this.head = e) : (this.head = e,
                this.tail = e),
                this.size++,
                this.size
            }
            ,
            n.prototype.shift = function() {
                if (this.size) {
                    var t = this.head;
                    return this.head = t.next,
                    this.size--,
                    t.item
                }
            }
            ,
            n.prototype.forEach = function(t, e) {
                if (this.size) {
                    e = arguments.length > 1 ? e : this;
                    for (var i = this.head, r = 0; i; )
                        t.call(e, i.item, r, this),
                        i = i.next,
                        r++
                }
            }
            ,
            n.prototype.toArray = function() {
                if (!this.size)
                    return [];
                for (var t = Array(this.size), e = 0, i = this.size, r = this.head; e < i; e++)
                    t[e] = r.item,
                    r = r.next;
                return t
            }
            ,
            n.prototype.values = function() {
                var t = this.head;
                return new i(function() {
                    if (!t)
                        return {
                            done: !0
                        };
                    var e = t.item;
                    return t = t.next,
                    {
                        value: e,
                        done: !1
                    }
                }
                )
            }
            ,
            n.prototype.entries = function() {
                var t = this.head
                  , e = 0;
                return new i(function() {
                    if (!t)
                        return {
                            done: !0
                        };
                    var i = t.item;
                    return t = t.next,
                    {
                        value: [++e - 1, i],
                        done: !1
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.values),
            n.prototype.toString = function() {
                return this.toArray().join(",")
            }
            ,
            n.prototype.toJSON = function() {
                return this.toArray()
            }
            ,
            n.prototype.inspect = function() {
                var t = this.toArray();
                return Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            n.from = function(t) {
                var e = new n;
                return r(t, function(t) {
                    e.push(t)
                }),
                e
            }
            ,
            e.exports = n
        }
        )
          , tu = C((t,e)=>{
            var i = B()
              , r = z()
              , n = I()
              , o = L();
            function s(t, e, i) {
                if (arguments.length < 2 && (i = t,
                t = null,
                e = null),
                this.capacity = i,
                "number" != typeof this.capacity || this.capacity <= 0)
                    throw Error("mnemonist/lru-cache: capacity should be positive number.");
                if (!isFinite(this.capacity) || Math.floor(this.capacity) !== this.capacity)
                    throw Error("mnemonist/lru-cache: capacity should be a finite positive integer.");
                var r = n.getPointerArray(i);
                this.forward = new r(i),
                this.backward = new r(i),
                this.K = "function" == typeof t ? new t(i) : Array(i),
                this.V = "function" == typeof e ? new e(i) : Array(i),
                this.size = 0,
                this.head = 0,
                this.tail = 0,
                this.items = {}
            }
            s.prototype.clear = function() {
                this.size = 0,
                this.head = 0,
                this.tail = 0,
                this.items = {}
            }
            ,
            s.prototype.splayOnTop = function(t) {
                var e = this.head;
                if (this.head === t)
                    return this;
                var i = this.backward[t]
                  , r = this.forward[t];
                return this.tail === t ? this.tail = i : this.backward[r] = i,
                this.forward[i] = r,
                this.backward[e] = t,
                this.head = t,
                this.forward[t] = e,
                this
            }
            ,
            s.prototype.set = function(t, e) {
                var i = this.items[t];
                if (void 0 !== i) {
                    this.splayOnTop(i),
                    this.V[i] = e;
                    return
                }
                this.size < this.capacity ? i = this.size++ : (i = this.tail,
                this.tail = this.backward[i],
                delete this.items[this.K[i]]),
                this.items[t] = i,
                this.K[i] = t,
                this.V[i] = e,
                this.forward[i] = this.head,
                this.backward[this.head] = i,
                this.head = i
            }
            ,
            s.prototype.setpop = function(t, e) {
                var i = null
                  , r = null
                  , n = this.items[t];
                return void 0 !== n ? (this.splayOnTop(n),
                i = this.V[n],
                this.V[n] = e,
                {
                    evicted: !1,
                    key: t,
                    value: i
                }) : (this.size < this.capacity ? n = this.size++ : (n = this.tail,
                this.tail = this.backward[n],
                i = this.V[n],
                r = this.K[n],
                delete this.items[r]),
                this.items[t] = n,
                this.K[n] = t,
                this.V[n] = e,
                this.forward[n] = this.head,
                this.backward[this.head] = n,
                this.head = n,
                r ? {
                    evicted: !0,
                    key: r,
                    value: i
                } : null)
            }
            ,
            s.prototype.has = function(t) {
                return t in this.items
            }
            ,
            s.prototype.get = function(t) {
                var e = this.items[t];
                if (void 0 !== e)
                    return this.splayOnTop(e),
                    this.V[e]
            }
            ,
            s.prototype.peek = function(t) {
                var e = this.items[t];
                if (void 0 !== e)
                    return this.V[e]
            }
            ,
            s.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i = 0, r = this.size, n = this.head, o = this.K, s = this.V, a = this.forward; i < r; )
                    t.call(e, s[n], o[n], this),
                    n = a[n],
                    i++
            }
            ,
            s.prototype.keys = function() {
                var t = 0
                  , e = this.size
                  , r = this.head
                  , n = this.K
                  , o = this.forward;
                return new i(function() {
                    if (t >= e)
                        return {
                            done: !0
                        };
                    var i = n[r];
                    return ++t < e && (r = o[r]),
                    {
                        done: !1,
                        value: i
                    }
                }
                )
            }
            ,
            s.prototype.values = function() {
                var t = 0
                  , e = this.size
                  , r = this.head
                  , n = this.V
                  , o = this.forward;
                return new i(function() {
                    if (t >= e)
                        return {
                            done: !0
                        };
                    var i = n[r];
                    return ++t < e && (r = o[r]),
                    {
                        done: !1,
                        value: i
                    }
                }
                )
            }
            ,
            s.prototype.entries = function() {
                var t = 0
                  , e = this.size
                  , r = this.head
                  , n = this.K
                  , o = this.V
                  , s = this.forward;
                return new i(function() {
                    if (t >= e)
                        return {
                            done: !0
                        };
                    var i = n[r]
                      , a = o[r];
                    return ++t < e && (r = s[r]),
                    {
                        done: !1,
                        value: [i, a]
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (s.prototype[Symbol.iterator] = s.prototype.entries),
            s.prototype.inspect = function() {
                for (var t, e = new Map, i = this.entries(); !(t = i.next()).done; )
                    e.set(t.value[0], t.value[1]);
                return Object.defineProperty(e, "constructor", {
                    value: s,
                    enumerable: !1
                }),
                e
            }
            ,
            "undefined" != typeof Symbol && (s.prototype[Symbol.for("nodejs.util.inspect.custom")] = s.prototype.inspect),
            s.from = function(t, e, i, n) {
                if (arguments.length < 2) {
                    if ("number" != typeof (n = o.guessLength(t)))
                        throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")
                } else
                    2 == arguments.length && (n = e,
                    e = null,
                    i = null);
                var a = new s(e,i,n);
                return r(t, function(t, e) {
                    a.set(e, t)
                }),
                a
            }
            ,
            e.exports = s
        }
        )
          , tl = C((t,e)=>{
            var i, r = tu(), n = z(), o = I(), s = L();
            function a(t, e, i) {
                arguments.length < 2 ? r.call(this, t) : r.call(this, t, e, i);
                var n = o.getPointerArray(this.capacity);
                this.deleted = new n(this.capacity),
                this.deletedSize = 0
            }
            for (i in r.prototype)
                a.prototype[i] = r.prototype[i];
            "undefined" != typeof Symbol && (a.prototype[Symbol.iterator] = r.prototype[Symbol.iterator]),
            a.prototype.clear = function() {
                r.prototype.clear.call(this),
                this.deletedSize = 0
            }
            ,
            a.prototype.set = function(t, e) {
                var i = this.items[t];
                if (void 0 !== i) {
                    this.splayOnTop(i),
                    this.V[i] = e;
                    return
                }
                this.size < this.capacity ? (i = this.deletedSize > 0 ? this.deleted[--this.deletedSize] : this.size,
                this.size++) : (i = this.tail,
                this.tail = this.backward[i],
                delete this.items[this.K[i]]),
                this.items[t] = i,
                this.K[i] = t,
                this.V[i] = e,
                this.forward[i] = this.head,
                this.backward[this.head] = i,
                this.head = i
            }
            ,
            a.prototype.setpop = function(t, e) {
                var i = null
                  , r = null
                  , n = this.items[t];
                return void 0 !== n ? (this.splayOnTop(n),
                i = this.V[n],
                this.V[n] = e,
                {
                    evicted: !1,
                    key: t,
                    value: i
                }) : (this.size < this.capacity ? (n = this.deletedSize > 0 ? this.deleted[--this.deletedSize] : this.size,
                this.size++) : (n = this.tail,
                this.tail = this.backward[n],
                i = this.V[n],
                r = this.K[n],
                delete this.items[r]),
                this.items[t] = n,
                this.K[n] = t,
                this.V[n] = e,
                this.forward[n] = this.head,
                this.backward[this.head] = n,
                this.head = n,
                r ? {
                    evicted: !0,
                    key: r,
                    value: i
                } : null)
            }
            ,
            a.prototype.delete = function(t) {
                var e = this.items[t];
                if (void 0 === e)
                    return !1;
                if (delete this.items[t],
                1 === this.size)
                    return this.size = 0,
                    this.head = 0,
                    this.tail = 0,
                    this.deletedSize = 0,
                    !0;
                var i = this.backward[e]
                  , r = this.forward[e];
                return this.head === e && (this.head = r),
                this.tail === e && (this.tail = i),
                this.forward[i] = r,
                this.backward[r] = i,
                this.size--,
                this.deleted[this.deletedSize++] = e,
                !0
            }
            ,
            a.prototype.remove = function(t, e) {
                var i = this.items[t];
                if (void 0 === i)
                    return e;
                var r = this.V[i];
                if (delete this.items[t],
                1 === this.size)
                    return this.size = 0,
                    this.head = 0,
                    this.tail = 0,
                    this.deletedSize = 0,
                    r;
                var n = this.backward[i]
                  , o = this.forward[i];
                return this.head === i && (this.head = o),
                this.tail === i && (this.tail = n),
                this.forward[n] = o,
                this.backward[o] = n,
                this.size--,
                this.deleted[this.deletedSize++] = i,
                r
            }
            ,
            a.from = function(t, e, i, r) {
                if (arguments.length < 2) {
                    if ("number" != typeof (r = s.guessLength(t)))
                        throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")
                } else
                    2 == arguments.length && (r = e,
                    e = null,
                    i = null);
                var o = new a(e,i,r);
                return n(t, function(t, e) {
                    o.set(e, t)
                }),
                o
            }
            ,
            e.exports = a
        }
        )
          , tc = C((t,e)=>{
            var i = tu()
              , r = z()
              , n = I()
              , o = L();
            function s(t, e, i) {
                if (arguments.length < 2 && (i = t,
                t = null,
                e = null),
                this.capacity = i,
                "number" != typeof this.capacity || this.capacity <= 0)
                    throw Error("mnemonist/lru-map: capacity should be positive number.");
                if (!isFinite(this.capacity) || Math.floor(this.capacity) !== this.capacity)
                    throw Error("mnemonist/lru-map: capacity should be a finite positive integer.");
                var r = n.getPointerArray(i);
                this.forward = new r(i),
                this.backward = new r(i),
                this.K = "function" == typeof t ? new t(i) : Array(i),
                this.V = "function" == typeof e ? new e(i) : Array(i),
                this.size = 0,
                this.head = 0,
                this.tail = 0,
                this.items = new Map
            }
            s.prototype.clear = function() {
                this.size = 0,
                this.head = 0,
                this.tail = 0,
                this.items.clear()
            }
            ,
            s.prototype.set = function(t, e) {
                var i = this.items.get(t);
                if (void 0 !== i) {
                    this.splayOnTop(i),
                    this.V[i] = e;
                    return
                }
                this.size < this.capacity ? i = this.size++ : (i = this.tail,
                this.tail = this.backward[i],
                this.items.delete(this.K[i])),
                this.items.set(t, i),
                this.K[i] = t,
                this.V[i] = e,
                this.forward[i] = this.head,
                this.backward[this.head] = i,
                this.head = i
            }
            ,
            s.prototype.setpop = function(t, e) {
                var i = null
                  , r = null
                  , n = this.items.get(t);
                return void 0 !== n ? (this.splayOnTop(n),
                i = this.V[n],
                this.V[n] = e,
                {
                    evicted: !1,
                    key: t,
                    value: i
                }) : (this.size < this.capacity ? n = this.size++ : (n = this.tail,
                this.tail = this.backward[n],
                i = this.V[n],
                r = this.K[n],
                this.items.delete(r)),
                this.items.set(t, n),
                this.K[n] = t,
                this.V[n] = e,
                this.forward[n] = this.head,
                this.backward[this.head] = n,
                this.head = n,
                r ? {
                    evicted: !0,
                    key: r,
                    value: i
                } : null)
            }
            ,
            s.prototype.has = function(t) {
                return this.items.has(t)
            }
            ,
            s.prototype.get = function(t) {
                var e = this.items.get(t);
                if (void 0 !== e)
                    return this.splayOnTop(e),
                    this.V[e]
            }
            ,
            s.prototype.peek = function(t) {
                var e = this.items.get(t);
                if (void 0 !== e)
                    return this.V[e]
            }
            ,
            s.prototype.splayOnTop = i.prototype.splayOnTop,
            s.prototype.forEach = i.prototype.forEach,
            s.prototype.keys = i.prototype.keys,
            s.prototype.values = i.prototype.values,
            s.prototype.entries = i.prototype.entries,
            "undefined" != typeof Symbol && (s.prototype[Symbol.iterator] = s.prototype.entries),
            s.prototype.inspect = i.prototype.inspect,
            s.from = function(t, e, i, n) {
                if (arguments.length < 2) {
                    if ("number" != typeof (n = o.guessLength(t)))
                        throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")
                } else
                    2 == arguments.length && (n = e,
                    e = null,
                    i = null);
                var a = new s(e,i,n);
                return r(t, function(t, e) {
                    a.set(e, t)
                }),
                a
            }
            ,
            e.exports = s
        }
        )
          , tp = C((t,e)=>{
            var i, r = tc(), n = z(), o = I(), s = L();
            function a(t, e, i) {
                arguments.length < 2 ? r.call(this, t) : r.call(this, t, e, i);
                var n = o.getPointerArray(this.capacity);
                this.deleted = new n(this.capacity),
                this.deletedSize = 0
            }
            for (i in r.prototype)
                a.prototype[i] = r.prototype[i];
            "undefined" != typeof Symbol && (a.prototype[Symbol.iterator] = r.prototype[Symbol.iterator]),
            a.prototype.clear = function() {
                r.prototype.clear.call(this),
                this.deletedSize = 0
            }
            ,
            a.prototype.set = function(t, e) {
                var i = this.items.get(t);
                if (void 0 !== i) {
                    this.splayOnTop(i),
                    this.V[i] = e;
                    return
                }
                this.size < this.capacity ? (i = this.deletedSize > 0 ? this.deleted[--this.deletedSize] : this.size,
                this.size++) : (i = this.tail,
                this.tail = this.backward[i],
                this.items.delete(this.K[i])),
                this.items.set(t, i),
                this.K[i] = t,
                this.V[i] = e,
                this.forward[i] = this.head,
                this.backward[this.head] = i,
                this.head = i
            }
            ,
            a.prototype.setpop = function(t, e) {
                var i = null
                  , r = null
                  , n = this.items.get(t);
                return void 0 !== n ? (this.splayOnTop(n),
                i = this.V[n],
                this.V[n] = e,
                {
                    evicted: !1,
                    key: t,
                    value: i
                }) : (this.size < this.capacity ? (n = this.deletedSize > 0 ? this.deleted[--this.deletedSize] : this.size,
                this.size++) : (n = this.tail,
                this.tail = this.backward[n],
                i = this.V[n],
                r = this.K[n],
                this.items.delete(r)),
                this.items.set(t, n),
                this.K[n] = t,
                this.V[n] = e,
                this.forward[n] = this.head,
                this.backward[this.head] = n,
                this.head = n,
                r ? {
                    evicted: !0,
                    key: r,
                    value: i
                } : null)
            }
            ,
            a.prototype.delete = function(t) {
                var e = this.items.get(t);
                if (void 0 === e)
                    return !1;
                if (this.items.delete(t),
                1 === this.size)
                    return this.size = 0,
                    this.head = 0,
                    this.tail = 0,
                    this.deletedSize = 0,
                    !0;
                var i = this.backward[e]
                  , r = this.forward[e];
                return this.head === e && (this.head = r),
                this.tail === e && (this.tail = i),
                this.forward[i] = r,
                this.backward[r] = i,
                this.size--,
                this.deleted[this.deletedSize++] = e,
                !0
            }
            ,
            a.prototype.remove = function(t, e) {
                var i = this.items.get(t);
                if (void 0 === i)
                    return e;
                var r = this.V[i];
                if (this.items.delete(t),
                1 === this.size)
                    return this.size = 0,
                    this.head = 0,
                    this.tail = 0,
                    this.deletedSize = 0,
                    r;
                var n = this.backward[i]
                  , o = this.forward[i];
                return this.head === i && (this.head = o),
                this.tail === i && (this.tail = n),
                this.forward[n] = o,
                this.backward[o] = n,
                this.size--,
                this.deleted[this.deletedSize++] = i,
                r
            }
            ,
            a.from = function(t, e, i, r) {
                if (arguments.length < 2) {
                    if ("number" != typeof (r = s.guessLength(t)))
                        throw Error("mnemonist/lru-map.from: could not guess iterable length. Please provide desired capacity as last argument.")
                } else
                    2 == arguments.length && (r = e,
                    e = null,
                    i = null);
                var o = new a(e,i,r);
                return n(t, function(t, e) {
                    o.set(e, t)
                }),
                o
            }
            ,
            e.exports = a
        }
        )
          , tf = C((t,e)=>{
            var i = B()
              , r = z()
              , n = Y()
              , o = function(t, e) {
                return t[1] > e[1] ? -1 : t[1] < e[1] ? 1 : 0
            };
            function s() {
                this.items = new Map,
                Object.defineProperty(this.items, "constructor", {
                    value: s,
                    enumerable: !1
                }),
                this.clear()
            }
            s.prototype.clear = function() {
                this.size = 0,
                this.dimension = 0,
                this.items.clear()
            }
            ,
            s.prototype.add = function(t, e) {
                if (0 === e)
                    return this;
                if (e < 0)
                    return this.remove(t, -e);
                if ("number" != typeof (e = e || 1))
                    throw Error("mnemonist/multi-set.add: given count should be a number.");
                this.size += e;
                let i = this.items.get(t);
                return void 0 === i ? this.dimension++ : e += i,
                this.items.set(t, e),
                this
            }
            ,
            s.prototype.set = function(t, e) {
                var i;
                if ("number" != typeof e)
                    throw Error("mnemonist/multi-set.set: given count should be a number.");
                return e <= 0 ? (void 0 !== (i = this.items.get(t)) && (this.size -= i,
                this.dimension--),
                this.items.delete(t)) : (e = e || 1,
                "number" == typeof (i = this.items.get(t)) ? this.items.set(t, i + e) : (this.dimension++,
                this.items.set(t, e)),
                this.size += e),
                this
            }
            ,
            s.prototype.has = function(t) {
                return this.items.has(t)
            }
            ,
            s.prototype.delete = function(t) {
                var e = this.items.get(t);
                return 0 !== e && (this.size -= e,
                this.dimension--,
                this.items.delete(t),
                !0)
            }
            ,
            s.prototype.remove = function(t, e) {
                if (0 !== e) {
                    if (e < 0)
                        return this.add(t, -e);
                    if ("number" != typeof (e = e || 1))
                        throw Error("mnemonist/multi-set.remove: given count should be a number.");
                    var i = this.items.get(t);
                    if (void 0 !== i) {
                        var r = Math.max(0, i - e);
                        0 === r ? (this.items.delete(t),
                        this.size -= i,
                        this.dimension--) : (this.items.set(t, r),
                        this.size -= e)
                    }
                }
            }
            ,
            s.prototype.edit = function(t, e) {
                var i = this.multiplicity(t);
                if (0 !== i) {
                    var r = this.multiplicity(e);
                    return this.items.set(e, i + r),
                    this.items.delete(t),
                    this
                }
            }
            ,
            s.prototype.multiplicity = function(t) {
                var e = this.items.get(t);
                return void 0 === e ? 0 : e
            }
            ,
            s.prototype.get = s.prototype.multiplicity,
            s.prototype.count = s.prototype.multiplicity,
            s.prototype.frequency = function(t) {
                return 0 === this.size ? 0 : this.multiplicity(t) / this.size
            }
            ,
            s.prototype.top = function(t) {
                if ("number" != typeof t || t <= 0)
                    throw Error("mnemonist/multi-set.top: n must be a number > 0.");
                for (var e, i = new n(Array,o,t), r = this.items.entries(); !(e = r.next()).done; )
                    i.push(e.value);
                return i.consume()
            }
            ,
            s.prototype.forEach = function(t, e) {
                var i;
                e = arguments.length > 1 ? e : this,
                this.items.forEach(function(r, n) {
                    for (i = 0; i < r; i++)
                        t.call(e, n, n)
                })
            }
            ,
            s.prototype.forEachMultiplicity = function(t, e) {
                e = arguments.length > 1 ? e : this,
                this.items.forEach(t, e)
            }
            ,
            s.prototype.keys = function() {
                return this.items.keys()
            }
            ,
            s.prototype.values = function() {
                var t, e, r, n, o = this.items.entries(), s = !1;
                return new i(function i() {
                    if (!s) {
                        if ((t = o.next()).done)
                            return {
                                done: !0
                            };
                        s = !0,
                        e = t.value[0],
                        r = t.value[1],
                        n = 0
                    }
                    return n >= r ? (s = !1,
                    i()) : (n++,
                    {
                        done: !1,
                        value: e
                    })
                }
                )
            }
            ,
            s.prototype.multiplicities = function() {
                return this.items.entries()
            }
            ,
            "undefined" != typeof Symbol && (s.prototype[Symbol.iterator] = s.prototype.values),
            s.prototype.inspect = function() {
                return this.items
            }
            ,
            "undefined" != typeof Symbol && (s.prototype[Symbol.for("nodejs.util.inspect.custom")] = s.prototype.inspect),
            s.prototype.toJSON = function() {
                return this.items
            }
            ,
            s.from = function(t) {
                var e = new s;
                return r(t, function(t) {
                    e.add(t)
                }),
                e
            }
            ,
            s.isSubset = function(t, e) {
                var i, r, n, o = t.multiplicities();
                if (t === e)
                    return !0;
                if (t.dimension > e.dimension)
                    return !1;
                for (; !(i = o.next()).done; )
                    if (r = i.value[0],
                    n = i.value[1],
                    e.multiplicity(r) < n)
                        return !1;
                return !0
            }
            ,
            s.isSuperset = function(t, e) {
                return s.isSubset(e, t)
            }
            ,
            e.exports = s
        }
        )
          , td = C((t,e)=>{
            var i = B()
              , r = z();
            function n(t, e) {
                var i, r, n = t + 1, o = e / n | 0, s = o + 1, a = e - o * n, h = n - a, u = Array(t + 1);
                for (i = 0; i < h; i++)
                    u[i] = [i * o, o];
                var l = (i - 1) * o + o;
                for (r = 0; r < a; r++)
                    u[i + r] = [l + r * s, s];
                return u
            }
            function o(t, e) {
                var i, r, n, o = e.length, s = t + 1, a = o / s | 0, h = a + 1, u = o - a * s, l = s - u, c = Array(t + 1);
                for (r = 0; r < l; r++)
                    i = r * a,
                    c[r] = e.slice(i, i + a);
                var p = (r - 1) * a + a;
                for (n = 0; n < u; n++)
                    i = p + n * h,
                    c[r + n] = e.slice(i, i + h);
                return c
            }
            function s(t, e, i, r, n, o) {
                var s = t - i;
                return [Math.max(0, n - i, n + e - s), Math.min(n + i, n + e + s, r - o)]
            }
            function a(t, e, i, r, n, o) {
                var a, h, u, l = e.length, c = s(t, l - i, r, l, n, o), p = c[0], f = c[1], d = "", y = [];
                for (h = p,
                u = f + 1; h < u; h++)
                    (a = e.slice(h, h + o)) !== d && (y.push(a),
                    d = a);
                return y
            }
            function h(t, e) {
                if ("function" != typeof t)
                    throw Error("mnemonist/passjoin-index: `levenshtein` should be a function returning edit distance between two strings.");
                if ("number" != typeof e || e < 1)
                    throw Error("mnemonist/passjoin-index: `k` should be a number > 0");
                this.levenshtein = t,
                this.k = e,
                this.clear()
            }
            h.prototype.clear = function() {
                this.size = 0,
                this.strings = [],
                this.invertedIndices = {}
            }
            ,
            h.prototype.add = function(t) {
                var e, i, r, n, s = t.length, a = this.size;
                this.strings.push(t),
                this.size++;
                var h = o(this.k, t)
                  , u = this.invertedIndices[s];
                for (void 0 === u && (u = {},
                this.invertedIndices[s] = u),
                r = 0,
                n = h.length; r < n; r++)
                    void 0 === (e = u[i = h[r] + r]) ? (e = [a],
                    u[i] = e) : e.push(a);
                return this
            }
            ,
            h.prototype.search = function(t) {
                var e, i, r, o, s, h, u, l, c, p, f, d, y, g, v = t.length, m = this.k, w = new Set;
                for (u = Math.max(0, v - m),
                l = v + m + 1; u < l; u++) {
                    var b = this.invertedIndices[u];
                    if (void 0 !== b) {
                        for (h = n(m, u),
                        c = 0,
                        p = h.length; c < p; c++)
                            for (r = h[c][0],
                            o = h[c][1],
                            (s = a(m, t, u, c, r, o)).length || (s = [""]),
                            f = 0,
                            d = s.length; f < d; f++)
                                if (void 0 !== (e = b[s[f] + c]))
                                    for (y = 0,
                                    g = e.length; y < g; y++)
                                        i = this.strings[e[y]],
                                        (v <= m && u <= m || !w.has(i) && this.levenshtein(t, i) <= m) && w.add(i)
                    }
                }
                return w
            }
            ,
            h.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i = 0, r = this.strings.length; i < r; i++)
                    t.call(e, this.strings[i], i, this)
            }
            ,
            h.prototype.values = function() {
                var t = this.strings
                  , e = t.length
                  , r = 0;
                return new i(function() {
                    if (r >= e)
                        return {
                            done: !0
                        };
                    var i = t[r];
                    return r++,
                    {
                        value: i,
                        done: !1
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (h.prototype[Symbol.iterator] = h.prototype.values),
            h.prototype.inspect = function() {
                var t = this.strings.slice();
                return Object.defineProperty(t, "constructor", {
                    value: h,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (h.prototype[Symbol.for("nodejs.util.inspect.custom")] = h.prototype.inspect),
            h.from = function(t, e, i) {
                var n = new h(e,i);
                return r(t, function(t) {
                    n.add(t)
                }),
                n
            }
            ,
            h.countKeys = function(t, e) {
                for (var i = 0, r = 0, n = e + 1; r < n; r++)
                    i += ((Math.pow(t, 2) - Math.pow(Math.abs(e - r), 2)) / 2 | 0) + t + 1;
                return i
            }
            ,
            h.comparator = function(t, e) {
                return t.length > e.length ? -1 : t.length < e.length ? 1 : t < e ? -1 : t > e ? 1 : 0
            }
            ,
            h.partition = n,
            h.segments = o,
            h.segmentPos = function(t, e, i) {
                if (0 === e)
                    return 0;
                var r = i.length
                  , n = t + 1
                  , o = r / n | 0
                  , s = n - (r - o * n);
                return e <= s - 1 ? e * o : s * o + (e - s) * (o + 1)
            }
            ,
            h.multiMatchAwareInterval = s,
            h.multiMatchAwareSubstrings = a,
            e.exports = h
        }
        )
          , ty = C((t,e)=>{
            var i = B()
              , r = z();
            function n() {
                this.clear()
            }
            n.prototype.clear = function() {
                this.items = [],
                this.offset = 0,
                this.size = 0
            }
            ,
            n.prototype.enqueue = function(t) {
                return this.items.push(t),
                ++this.size
            }
            ,
            n.prototype.dequeue = function() {
                if (this.size) {
                    var t = this.items[this.offset];
                    return 2 * ++this.offset >= this.items.length && (this.items = this.items.slice(this.offset),
                    this.offset = 0),
                    this.size--,
                    t
                }
            }
            ,
            n.prototype.peek = function() {
                if (this.size)
                    return this.items[this.offset]
            }
            ,
            n.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i = this.offset, r = 0, n = this.items.length; i < n; i++,
                r++)
                    t.call(e, this.items[i], r, this)
            }
            ,
            n.prototype.toArray = function() {
                return this.items.slice(this.offset)
            }
            ,
            n.prototype.values = function() {
                var t = this.items
                  , e = this.offset;
                return new i(function() {
                    if (e >= t.length)
                        return {
                            done: !0
                        };
                    var i = t[e];
                    return e++,
                    {
                        value: i,
                        done: !1
                    }
                }
                )
            }
            ,
            n.prototype.entries = function() {
                var t = this.items
                  , e = this.offset
                  , r = 0;
                return new i(function() {
                    if (e >= t.length)
                        return {
                            done: !0
                        };
                    var i = t[e];
                    return e++,
                    {
                        value: [r++, i],
                        done: !1
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.values),
            n.prototype.toString = function() {
                return this.toArray().join(",")
            }
            ,
            n.prototype.toJSON = function() {
                return this.toArray()
            }
            ,
            n.prototype.inspect = function() {
                var t = this.toArray();
                return Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            n.from = function(t) {
                var e = new n;
                return r(t, function(t) {
                    e.enqueue(t)
                }),
                e
            }
            ,
            n.of = function() {
                return n.from(arguments)
            }
            ,
            e.exports = n
        }
        )
          , tg = C((t,e)=>{
            var i = B()
              , r = z();
            function n() {
                this.clear()
            }
            n.prototype.clear = function() {
                this.items = [],
                this.size = 0
            }
            ,
            n.prototype.push = function(t) {
                return this.items.push(t),
                ++this.size
            }
            ,
            n.prototype.pop = function() {
                if (0 !== this.size)
                    return this.size--,
                    this.items.pop()
            }
            ,
            n.prototype.peek = function() {
                return this.items[this.size - 1]
            }
            ,
            n.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i = 0, r = this.items.length; i < r; i++)
                    t.call(e, this.items[r - i - 1], i, this)
            }
            ,
            n.prototype.toArray = function() {
                for (var t = Array(this.size), e = this.size - 1, i = this.size; i--; )
                    t[i] = this.items[e - i];
                return t
            }
            ,
            n.prototype.values = function() {
                var t = this.items
                  , e = t.length
                  , r = 0;
                return new i(function() {
                    if (r >= e)
                        return {
                            done: !0
                        };
                    var i = t[e - r - 1];
                    return r++,
                    {
                        value: i,
                        done: !1
                    }
                }
                )
            }
            ,
            n.prototype.entries = function() {
                var t = this.items
                  , e = t.length
                  , r = 0;
                return new i(function() {
                    if (r >= e)
                        return {
                            done: !0
                        };
                    var i = t[e - r - 1];
                    return {
                        value: [r++, i],
                        done: !1
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.values),
            n.prototype.toString = function() {
                return this.toArray().join(",")
            }
            ,
            n.prototype.toJSON = function() {
                return this.toArray()
            }
            ,
            n.prototype.inspect = function() {
                var t = this.toArray();
                return Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            n.from = function(t) {
                var e = new n;
                return r(t, function(t) {
                    e.push(t)
                }),
                e
            }
            ,
            n.of = function() {
                return n.from(arguments)
            }
            ,
            e.exports = n
        }
        )
          , tv = C(t=>{
            t.intersection = function() {
                if (arguments.length < 2)
                    throw Error("mnemonist/Set.intersection: needs at least two arguments.");
                var t, e, i = new Set, r = 1 / 0, n = null, o = arguments.length;
                for (e = 0; e < o; e++) {
                    if (t = arguments[e],
                    0 === t.size)
                        return i;
                    t.size < r && (r = t.size,
                    n = t)
                }
                for (var s, a, h, u, l = n.values(); !(s = l.next()).done; ) {
                    for (a = s.value,
                    h = !0,
                    e = 0; e < o; e++)
                        if (u = arguments[e],
                        u !== n && !u.has(a)) {
                            h = !1;
                            break
                        }
                    h && i.add(a)
                }
                return i
            }
            ,
            t.union = function() {
                if (arguments.length < 2)
                    throw Error("mnemonist/Set.union: needs at least two arguments.");
                var t, e, i, r = new Set, n = arguments.length;
                for (t = 0; t < n; t++)
                    for (e = arguments[t].values(); !(i = e.next()).done; )
                        r.add(i.value);
                return r
            }
            ,
            t.difference = function(t, e) {
                if (!t.size)
                    return new Set;
                if (!e.size)
                    return new Set(t);
                for (var i, r = new Set, n = t.values(); !(i = n.next()).done; )
                    e.has(i.value) || r.add(i.value);
                return r
            }
            ,
            t.symmetricDifference = function(t, e) {
                for (var i, r = new Set, n = t.values(); !(i = n.next()).done; )
                    e.has(i.value) || r.add(i.value);
                for (n = e.values(); !(i = n.next()).done; )
                    t.has(i.value) || r.add(i.value);
                return r
            }
            ,
            t.isSubset = function(t, e) {
                var i, r = t.values();
                if (t === e)
                    return !0;
                if (t.size > e.size)
                    return !1;
                for (; !(i = r.next()).done; )
                    if (!e.has(i.value))
                        return !1;
                return !0
            }
            ,
            t.isSuperset = function(e, i) {
                return t.isSubset(i, e)
            }
            ,
            t.add = function(t, e) {
                for (var i, r = e.values(); !(i = r.next()).done; )
                    t.add(i.value)
            }
            ,
            t.subtract = function(t, e) {
                for (var i, r = e.values(); !(i = r.next()).done; )
                    t.delete(i.value)
            }
            ,
            t.intersect = function(t, e) {
                for (var i, r = t.values(); !(i = r.next()).done; )
                    e.has(i.value) || t.delete(i.value)
            }
            ,
            t.disjunct = function(t, e) {
                for (var i, r = t.values(), n = []; !(i = r.next()).done; )
                    e.has(i.value) && n.push(i.value);
                for (r = e.values(); !(i = r.next()).done; )
                    t.has(i.value) || t.add(i.value);
                for (var o = 0, s = n.length; o < s; o++)
                    t.delete(n[o])
            }
            ,
            t.intersectionSize = function(t, e) {
                if (t.size > e.size && (i = t,
                t = e,
                e = i),
                0 === t.size)
                    return 0;
                if (t === e)
                    return t.size;
                for (var i, r, n = t.values(), o = 0; !(r = n.next()).done; )
                    e.has(r.value) && o++;
                return o
            }
            ,
            t.unionSize = function(e, i) {
                var r = t.intersectionSize(e, i);
                return e.size + i.size - r
            }
            ,
            t.jaccard = function(e, i) {
                var r = t.intersectionSize(e, i);
                if (0 === r)
                    return 0;
                var n = e.size + i.size - r;
                return r / n
            }
            ,
            t.overlap = function(e, i) {
                var r = t.intersectionSize(e, i);
                return 0 === r ? 0 : r / Math.min(e.size, i.size)
            }
        }
        )
          , tm = C((t,e)=>{
            var i = B()
              , r = I().getPointerArray;
            function n(t) {
                var e = r(t);
                this.start = 0,
                this.size = 0,
                this.capacity = t,
                this.dense = new e(t),
                this.sparse = new e(t)
            }
            n.prototype.clear = function() {
                this.start = 0,
                this.size = 0
            }
            ,
            n.prototype.has = function(t) {
                if (0 === this.size)
                    return !1;
                var e = this.sparse[t];
                return (e < this.capacity && e >= this.start && e < this.start + this.size || e < (this.start + this.size) % this.capacity) && this.dense[e] === t
            }
            ,
            n.prototype.enqueue = function(t) {
                var e = this.sparse[t];
                return 0 !== this.size && (e < this.capacity && e >= this.start && e < this.start + this.size || e < (this.start + this.size) % this.capacity) && this.dense[e] === t || (e = (this.start + this.size) % this.capacity,
                this.dense[e] = t,
                this.sparse[t] = e,
                this.size++),
                this
            }
            ,
            n.prototype.dequeue = function() {
                if (0 !== this.size) {
                    var t = this.start;
                    this.size--,
                    this.start++,
                    this.start === this.capacity && (this.start = 0);
                    var e = this.dense[t];
                    return this.sparse[e] = this.capacity,
                    e
                }
            }
            ,
            n.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i = this.capacity, r = this.size, n = this.start, o = 0; o < r; )
                    t.call(e, this.dense[n], o, this),
                    n++,
                    o++,
                    n === i && (n = 0)
            }
            ,
            n.prototype.values = function() {
                var t = this.dense
                  , e = this.capacity
                  , r = this.size
                  , n = this.start
                  , o = 0;
                return new i(function() {
                    if (o >= r)
                        return {
                            done: !0
                        };
                    var i = t[n];
                    return n++,
                    o++,
                    n === e && (n = 0),
                    {
                        value: i,
                        done: !1
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.values),
            n.prototype.inspect = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }),
                Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t.capacity = this.capacity,
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            e.exports = n
        }
        )
          , tw = C((t,e)=>{
            var i = B()
              , r = I().getPointerArray;
            function n(t, e) {
                arguments.length < 2 && (e = t,
                t = Array);
                var i = r(e);
                this.size = 0,
                this.length = e,
                this.dense = new i(e),
                this.sparse = new i(e),
                this.vals = new t(e)
            }
            n.prototype.clear = function() {
                this.size = 0
            }
            ,
            n.prototype.has = function(t) {
                var e = this.sparse[t];
                return e < this.size && this.dense[e] === t
            }
            ,
            n.prototype.get = function(t) {
                var e = this.sparse[t];
                if (e < this.size && this.dense[e] === t)
                    return this.vals[e]
            }
            ,
            n.prototype.set = function(t, e) {
                var i = this.sparse[t];
                return i < this.size && this.dense[i] === t ? this.vals[i] = e : (this.dense[this.size] = t,
                this.sparse[t] = this.size,
                this.vals[this.size] = e,
                this.size++),
                this
            }
            ,
            n.prototype.delete = function(t) {
                var e = this.sparse[t];
                return !(e >= this.size) && this.dense[e] === t && (e = this.dense[this.size - 1],
                this.dense[this.sparse[t]] = e,
                this.sparse[e] = this.sparse[t],
                this.size--,
                !0)
            }
            ,
            n.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i = 0; i < this.size; i++)
                    t.call(e, this.vals[i], this.dense[i])
            }
            ,
            n.prototype.keys = function() {
                var t = this.size
                  , e = this.dense
                  , r = 0;
                return new i(function() {
                    if (r < t) {
                        var i = e[r];
                        return r++,
                        {
                            value: i
                        }
                    }
                    return {
                        done: !0
                    }
                }
                )
            }
            ,
            n.prototype.values = function() {
                var t = this.size
                  , e = this.vals
                  , r = 0;
                return new i(function() {
                    if (r < t) {
                        var i = e[r];
                        return r++,
                        {
                            value: i
                        }
                    }
                    return {
                        done: !0
                    }
                }
                )
            }
            ,
            n.prototype.entries = function() {
                var t = this.size
                  , e = this.dense
                  , r = this.vals
                  , n = 0;
                return new i(function() {
                    if (n < t) {
                        var i = [e[n], r[n]];
                        return n++,
                        {
                            value: i
                        }
                    }
                    return {
                        done: !0
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.entries),
            n.prototype.inspect = function() {
                for (var t = new Map, e = 0; e < this.size; e++)
                    t.set(this.dense[e], this.vals[e]);
                return Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t.length = this.length,
                this.vals.constructor !== Array && (t.type = this.vals.constructor.name),
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            e.exports = n
        }
        )
          , tb = C((t,e)=>{
            var i = B()
              , r = I().getPointerArray;
            function n(t) {
                var e = r(t);
                this.size = 0,
                this.length = t,
                this.dense = new e(t),
                this.sparse = new e(t)
            }
            n.prototype.clear = function() {
                this.size = 0
            }
            ,
            n.prototype.has = function(t) {
                var e = this.sparse[t];
                return e < this.size && this.dense[e] === t
            }
            ,
            n.prototype.add = function(t) {
                var e = this.sparse[t];
                return e < this.size && this.dense[e] === t || (this.dense[this.size] = t,
                this.sparse[t] = this.size,
                this.size++),
                this
            }
            ,
            n.prototype.delete = function(t) {
                var e = this.sparse[t];
                return !(e >= this.size) && this.dense[e] === t && (e = this.dense[this.size - 1],
                this.dense[this.sparse[t]] = e,
                this.sparse[e] = this.sparse[t],
                this.size--,
                !0)
            }
            ,
            n.prototype.forEach = function(t, e) {
                e = arguments.length > 1 ? e : this;
                for (var i, r = 0; r < this.size; r++)
                    i = this.dense[r],
                    t.call(e, i, i)
            }
            ,
            n.prototype.values = function() {
                var t = this.size
                  , e = this.dense
                  , r = 0;
                return new i(function() {
                    if (r < t) {
                        var i = e[r];
                        return r++,
                        {
                            value: i
                        }
                    }
                    return {
                        done: !0
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.values),
            n.prototype.inspect = function() {
                for (var t = new Set, e = 0; e < this.size; e++)
                    t.add(this.dense[e]);
                return Object.defineProperty(t, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                t.length = this.length,
                t
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            e.exports = n
        }
        )
          , tT = C((t,e)=>{
            var i = z()
              , r = new Set([0, 1, 2])
              , n = {
                0: "Returns only the top suggestion",
                1: "Returns suggestions with the smallest edit distance",
                2: "Returns every suggestion (no early termination)"
            };
            function o(t) {
                var e = new Set;
                return "number" == typeof t && e.add(t),
                {
                    suggestions: e,
                    count: 0
                }
            }
            function s(t, e, i) {
                return {
                    term: t || "",
                    distance: e || 0,
                    count: i || 0
                }
            }
            function a(t, e) {
                var i, r, n, o = t.length, s = e.length, a = [[]], h = o + s, u = new Map;
                for (a[0][0] = h,
                i = 0; i <= o; i++)
                    a[i + 1] || (a[i + 1] = []),
                    a[i + 1][1] = i,
                    a[i + 1][0] = h;
                for (n = 0; n <= s; n++)
                    a[1][n + 1] = n,
                    a[0][n + 1] = h;
                var l, c = t + e;
                for (i = 0,
                r = c.length; i < r; i++)
                    l = c[i],
                    u.has(l) || u.set(l, 0);
                for (i = 1; i <= o; i++) {
                    var p = 0;
                    for (n = 1; n <= s; n++) {
                        var f = u.get(e[n - 1])
                          , d = p;
                        t[i - 1] === e[n - 1] ? (a[i + 1][n + 1] = a[i][n],
                        p = n) : a[i + 1][n + 1] = Math.min(a[i][n], a[i + 1][n], a[i][n + 1]) + 1,
                        a[i + 1][n + 1] = Math.min(a[i + 1][n + 1], a[f][d] + (i - f - 1) + 1 + (n - d - 1))
                    }
                    u.set(t[i - 1], i)
                }
                return a[o + 1][s + 1]
            }
            function h(t) {
                if (t = t || {},
                this.clear(),
                this.maxDistance = "number" == typeof t.maxDistance ? t.maxDistance : 2,
                this.verbosity = "number" == typeof t.verbosity ? t.verbosity : 2,
                "number" != typeof this.maxDistance || this.maxDistance <= 0)
                    throw Error("mnemonist/SymSpell.constructor: invalid `maxDistance` option. Should be a integer greater than 0.");
                if (!r.has(this.verbosity))
                    throw Error("mnemonist/SymSpell.constructor: invalid `verbosity` option. Should be either 0, 1 or 2.")
            }
            h.prototype.clear = function() {
                this.size = 0,
                this.dictionary = Object.create(null),
                this.maxLength = 0,
                this.words = []
            }
            ,
            h.prototype.add = function(t) {
                var e = this.dictionary[t];
                if (void 0 !== e ? ("number" == typeof e && (e = o(e),
                this.dictionary[t] = e),
                e.count++) : (e = o(),
                e.count++,
                this.dictionary[t] = e,
                t.length > this.maxLength && (this.maxLength = t.length)),
                1 === e.count) {
                    var i = this.words.length;
                    this.words.push(t),
                    (function t(e, i, r, n) {
                        n = n || new Set,
                        i++;
                        var o, s, a = e.length;
                        if (a > 1)
                            for (s = 0; s < a; s++)
                                o = e.substring(0, s) + e.substring(s + 1),
                                n.has(o) || (n.add(o),
                                i < r && t(o, i, r, n));
                        return n
                    }
                    )(t, 0, this.maxDistance).forEach(e=>{
                        var r, n, s, a, h = this.dictionary[e];
                        void 0 !== h ? ("number" == typeof h && (h = o(h),
                        this.dictionary[e] = h),
                        h.suggestions.has(i) || (r = this.words,
                        n = this.verbosity,
                        a = (s = h).suggestions.values().next().value,
                        n < 2 && s.suggestions.size > 0 && r[a].length - e.length > t.length - e.length && (s.suggestions = new Set,
                        s.count = 0),
                        (2 === n || !s.suggestions.size || r[a].length - e.length >= t.length - e.length) && s.suggestions.add(i))) : this.dictionary[e] = i
                    }
                    )
                }
                return this.size++,
                this
            }
            ,
            h.prototype.search = function(t) {
                return function(t, e, i, r, n, h) {
                    var u = h.length;
                    if (u - r > n)
                        return [];
                    for (var l, c, p = [h], f = new Set, d = new Set, y = []; p.length > 0 && (l = p.shift(),
                    !(i < 2 && y.length > 0 && u - l.length > y[0].distance)); ) {
                        if (void 0 !== (c = t[l])) {
                            if ("number" == typeof c && (c = o(c)),
                            c.count > 0 && !d.has(l)) {
                                d.add(l);
                                var g = s(l, u - l.length, c.count);
                                if (y.push(g),
                                i < 2 && u - l.length == 0)
                                    break
                            }
                            c.suggestions.forEach(n=>{
                                var o = e[n];
                                if (!d.has(o)) {
                                    d.add(o);
                                    var c = 0;
                                    if (h !== o) {
                                        if (o.length === l.length)
                                            c = u - l.length;
                                        else if (u === l.length)
                                            c = o.length - l.length;
                                        else {
                                            for (var p = 0, f = 0, g = o.length; p < g && p < u && o[p] === h[p]; )
                                                p++;
                                            for (; f < g - p && f < u && o[g - f - 1] === h[u - f - 1]; )
                                                f++;
                                            c = p > 0 || f > 0 ? a(o.substr(p, g - p - f), h.substr(p, u - p - f)) : a(o, h)
                                        }
                                    }
                                    if (i < 2 && y.length > 0 && y[0].distance > c && (y = []),
                                    !(i < 2 && y.length > 0 && c > y[0].distance) && c <= r) {
                                        var v = t[o];
                                        void 0 !== v && y.push(s(o, c, v.count))
                                    }
                                }
                            }
                            )
                        }
                        if (u - l.length < r) {
                            if (i < 2 && y.length > 0 && u - l.length >= y[0].distance)
                                continue;
                            for (var v = 0, m = l.length; v < m; v++) {
                                var w = l.substring(0, v) + l.substring(v + 1);
                                f.has(w) || (f.add(w),
                                p.push(w))
                            }
                        }
                    }
                    return 0 === i ? y.slice(0, 1) : y
                }(this.dictionary, this.words, this.verbosity, this.maxDistance, this.maxLength, t)
            }
            ,
            h.prototype.inspect = function() {
                var t = [];
                for (var e in t.size = this.size,
                t.maxDistance = this.maxDistance,
                t.verbosity = this.verbosity,
                t.behavior = n[this.verbosity],
                this.dictionary)
                    "object" == typeof this.dictionary[e] && this.dictionary[e].count && t.push([e, this.dictionary[e].count]);
                return Object.defineProperty(t, "constructor", {
                    value: h,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (h.prototype[Symbol.for("nodejs.util.inspect.custom")] = h.prototype.inspect),
            h.from = function(t, e) {
                var r = new h(e);
                return i(t, function(t) {
                    r.add(t)
                }),
                r
            }
            ,
            e.exports = h
        }
        )
          , t_ = C((t,e)=>{
            var i = z()
              , r = B();
            function n(t) {
                this.mode = t === Array ? "array" : "string",
                this.clear()
            }
            n.prototype.clear = function() {
                this.root = {},
                this.size = 0
            }
            ,
            n.prototype.set = function(t, e) {
                for (var i, r = this.root, n = 0, o = t.length; n < o; n++)
                    r = r[i = t[n]] || (r[i] = {});
                return "\0"in r || this.size++,
                r["\0"] = e,
                this
            }
            ,
            n.prototype.update = function(t, e) {
                for (var i, r = this.root, n = 0, o = t.length; n < o; n++)
                    r = r[i = t[n]] || (r[i] = {});
                return "\0"in r || this.size++,
                r["\0"] = e(r["\0"]),
                this
            }
            ,
            n.prototype.get = function(t) {
                var e, i, r = this.root;
                for (e = 0,
                i = t.length; e < i; e++)
                    if (void 0 === (r = r[t[e]]))
                        return;
                if ("\0"in r)
                    return r["\0"]
            }
            ,
            n.prototype.delete = function(t) {
                var e, i, r, n, o = this.root, s = null, a = null;
                for (r = 0,
                n = t.length; r < n; r++) {
                    if (i = t[r],
                    e = o,
                    void 0 === (o = o[i]))
                        return !1;
                    null !== s ? Object.keys(o).length > 1 && (s = null,
                    a = null) : Object.keys(o).length < 2 && (s = e,
                    a = i)
                }
                return "\0"in o && (this.size--,
                s ? delete s[a] : delete o["\0"],
                !0)
            }
            ,
            n.prototype.has = function(t) {
                for (var e = this.root, i = 0, r = t.length; i < r; i++)
                    if (void 0 === (e = e[t[i]]))
                        return !1;
                return "\0"in e
            }
            ,
            n.prototype.find = function(t) {
                var e, i, r = "string" == typeof t, n = this.root, o = [];
                for (e = 0,
                i = t.length; e < i; e++)
                    if (void 0 === (n = n[t[e]]))
                        return o;
                for (var s, a = [n], h = [t]; a.length; )
                    for (s in t = h.pop(),
                    n = a.pop()) {
                        if ("\0" === s) {
                            o.push([t, n["\0"]]);
                            continue
                        }
                        a.push(n[s]),
                        h.push(r ? t + s : t.concat(s))
                    }
                return o
            }
            ,
            n.prototype.values = function(t) {
                var e, i, n = this.root, o = [];
                if (t) {
                    for (e = 0,
                    i = t.length; e < i; e++)
                        if (void 0 === (n = n[t[e]]))
                            return r.empty()
                }
                return o.push(n),
                new r(function() {
                    for (var t, e, i = !1; o.length; ) {
                        for (e in t = o.pop()) {
                            if ("\0" === e) {
                                i = !0;
                                continue
                            }
                            o.push(t[e])
                        }
                        if (i)
                            return {
                                done: !1,
                                value: t["\0"]
                            }
                    }
                    return {
                        done: !0
                    }
                }
                )
            }
            ,
            n.prototype.prefixes = function(t) {
                var e, i, n = this.root, o = [], s = [], a = "string" === this.mode;
                if (t) {
                    for (e = 0,
                    i = t.length; e < i; e++)
                        if (void 0 === (n = n[t[e]]))
                            return r.empty()
                } else
                    t = a ? "" : [];
                return o.push(n),
                s.push(t),
                new r(function() {
                    for (var t, e, i, r = !1; o.length; ) {
                        for (i in t = o.pop(),
                        e = s.pop(),
                        t) {
                            if ("\0" === i) {
                                r = !0;
                                continue
                            }
                            o.push(t[i]),
                            s.push(a ? e + i : e.concat(i))
                        }
                        if (r)
                            return {
                                done: !1,
                                value: e
                            }
                    }
                    return {
                        done: !0
                    }
                }
                )
            }
            ,
            n.prototype.keys = n.prototype.prefixes,
            n.prototype.entries = function(t) {
                var e, i, n = this.root, o = [], s = [], a = "string" === this.mode;
                if (t) {
                    for (e = 0,
                    i = t.length; e < i; e++)
                        if (void 0 === (n = n[t[e]]))
                            return r.empty()
                } else
                    t = a ? "" : [];
                return o.push(n),
                s.push(t),
                new r(function() {
                    for (var t, e, i, r = !1; o.length; ) {
                        for (i in t = o.pop(),
                        e = s.pop(),
                        t) {
                            if ("\0" === i) {
                                r = !0;
                                continue
                            }
                            o.push(t[i]),
                            s.push(a ? e + i : e.concat(i))
                        }
                        if (r)
                            return {
                                done: !1,
                                value: [e, t["\0"]]
                            }
                    }
                    return {
                        done: !0
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.iterator] = n.prototype.entries),
            n.prototype.inspect = function() {
                for (var t, e = Array(this.size), i = this.entries(), r = 0; !(t = i.next()).done; )
                    e[r++] = t.value;
                return Object.defineProperty(e, "constructor", {
                    value: n,
                    enumerable: !1
                }),
                e
            }
            ,
            "undefined" != typeof Symbol && (n.prototype[Symbol.for("nodejs.util.inspect.custom")] = n.prototype.inspect),
            n.prototype.toJSON = function() {
                return this.root
            }
            ,
            n.from = function(t) {
                var e = new n;
                return i(t, function(t, i) {
                    e.set(i, t)
                }),
                e
            }
            ,
            n.SENTINEL = "\0",
            e.exports = n
        }
        )
          , tS = C((t,e)=>{
            var i, r = z(), n = t_();
            function o(t) {
                this.mode = t === Array ? "array" : "string",
                this.clear()
            }
            for (i in n.prototype)
                o.prototype[i] = n.prototype[i];
            delete o.prototype.set,
            delete o.prototype.get,
            delete o.prototype.values,
            delete o.prototype.entries,
            o.prototype.add = function(t) {
                for (var e, i = this.root, r = 0, n = t.length; r < n; r++)
                    i = i[e = t[r]] || (i[e] = {});
                return "\0"in i || this.size++,
                i["\0"] = !0,
                this
            }
            ,
            o.prototype.find = function(t) {
                var e, i, r = "string" == typeof t, n = this.root, o = [];
                for (e = 0,
                i = t.length; e < i; e++)
                    if (void 0 === (n = n[t[e]]))
                        return o;
                for (var s, a = [n], h = [t]; a.length; )
                    for (s in t = h.pop(),
                    n = a.pop()) {
                        if ("\0" === s) {
                            o.push(t);
                            continue
                        }
                        a.push(n[s]),
                        h.push(r ? t + s : t.concat(s))
                    }
                return o
            }
            ,
            "undefined" != typeof Symbol && (o.prototype[Symbol.iterator] = o.prototype.keys),
            o.prototype.inspect = function() {
                for (var t, e = new Set, i = this.keys(); !(t = i.next()).done; )
                    e.add(t.value);
                return Object.defineProperty(e, "constructor", {
                    value: o,
                    enumerable: !1
                }),
                e
            }
            ,
            "undefined" != typeof Symbol && (o.prototype[Symbol.for("nodejs.util.inspect.custom")] = o.prototype.inspect),
            o.prototype.toJSON = function() {
                return this.root
            }
            ,
            o.from = function(t) {
                var e = new o;
                return r(t, function(t) {
                    e.add(t)
                }),
                e
            }
            ,
            o.SENTINEL = "\0",
            e.exports = o
        }
        )
          , tP = C((t,e)=>{
            var i = B()
              , r = z()
              , n = L()
              , o = I()
              , s = function(t) {
                return Math.max(1, Math.ceil(1.5 * t))
            };
            function a(t, e) {
                if (arguments.length < 1)
                    throw Error("mnemonist/vector: expecting at least a byte array constructor.");
                var i = e || 0
                  , r = s
                  , n = 0
                  , o = !1;
                "object" == typeof e && (i = e.initialCapacity || 0,
                n = e.initialLength || 0,
                r = e.policy || r,
                o = !0 === e.factory),
                this.factory = o ? t : null,
                this.ArrayClass = t,
                this.length = n,
                this.capacity = Math.max(n, i),
                this.policy = r,
                this.array = new t(this.capacity)
            }
            function h(t) {
                var e = function(e) {
                    a.call(this, t, e)
                };
                for (var i in a.prototype)
                    a.prototype.hasOwnProperty(i) && (e.prototype[i] = a.prototype[i]);
                return e.from = function(e, i) {
                    return a.from(e, t, i)
                }
                ,
                "undefined" != typeof Symbol && (e.prototype[Symbol.iterator] = e.prototype.values),
                e
            }
            a.prototype.set = function(t, e) {
                if (this.length < t)
                    throw Error("Vector(" + this.ArrayClass.name + ").set: index out of bounds.");
                return this.array[t] = e,
                this
            }
            ,
            a.prototype.get = function(t) {
                if (!(this.length < t))
                    return this.array[t]
            }
            ,
            a.prototype.applyPolicy = function(t) {
                var e = this.policy(t || this.capacity);
                if ("number" != typeof e || e < 0)
                    throw Error("mnemonist/vector.applyPolicy: policy returned an invalid value (expecting a positive integer).");
                if (e <= this.capacity)
                    throw Error("mnemonist/vector.applyPolicy: policy returned a less or equal capacity to allocate.");
                return e
            }
            ,
            a.prototype.reallocate = function(t) {
                if (t === this.capacity)
                    return this;
                var e = this.array;
                if (t < this.length && (this.length = t),
                t > this.capacity) {
                    if (null === this.factory ? this.array = new this.ArrayClass(t) : this.array = this.factory(t),
                    o.isTypedArray(this.array))
                        this.array.set(e, 0);
                    else
                        for (var i = 0, r = this.length; i < r; i++)
                            this.array[i] = e[i]
                } else
                    this.array = e.slice(0, t);
                return this.capacity = t,
                this
            }
            ,
            a.prototype.grow = function(t) {
                var e;
                if ("number" == typeof t) {
                    if (this.capacity >= t)
                        return this;
                    for (e = this.capacity; e < t; )
                        e = this.applyPolicy(e);
                    return this.reallocate(e),
                    this
                }
                return e = this.applyPolicy(),
                this.reallocate(e),
                this
            }
            ,
            a.prototype.resize = function(t) {
                return t === this.length || (t < this.length ? this.length = t : (this.length = t,
                this.reallocate(t))),
                this
            }
            ,
            a.prototype.push = function(t) {
                return this.capacity === this.length && this.grow(),
                this.array[this.length++] = t,
                this.length
            }
            ,
            a.prototype.pop = function() {
                if (0 !== this.length)
                    return this.array[--this.length]
            }
            ,
            a.prototype.values = function() {
                var t = this.array
                  , e = this.length
                  , r = 0;
                return new i(function() {
                    if (r >= e)
                        return {
                            done: !0
                        };
                    var i = t[r];
                    return r++,
                    {
                        value: i,
                        done: !1
                    }
                }
                )
            }
            ,
            a.prototype.entries = function() {
                var t = this.array
                  , e = this.length
                  , r = 0;
                return new i(function() {
                    if (r >= e)
                        return {
                            done: !0
                        };
                    var i = t[r];
                    return {
                        value: [r++, i],
                        done: !1
                    }
                }
                )
            }
            ,
            "undefined" != typeof Symbol && (a.prototype[Symbol.iterator] = a.prototype.values),
            a.prototype.inspect = function() {
                var t = this.array.slice(0, this.length);
                return t.type = this.array.constructor.name,
                t.items = this.length,
                t.capacity = this.capacity,
                Object.defineProperty(t, "constructor", {
                    value: a,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (a.prototype[Symbol.for("nodejs.util.inspect.custom")] = a.prototype.inspect),
            a.from = function(t, e, i) {
                if (arguments.length < 3 && "number" != typeof (i = n.guessLength(t)))
                    throw Error("mnemonist/vector.from: could not guess iterable length. Please provide desired capacity as last argument.");
                var o = new a(e,i);
                return r(t, function(t) {
                    o.push(t)
                }),
                o
            }
            ,
            a.Int8Vector = h(Int8Array),
            a.Uint8Vector = h(Uint8Array),
            a.Uint8ClampedVector = h(Uint8ClampedArray),
            a.Int16Vector = h(Int16Array),
            a.Uint16Vector = h(Uint16Array),
            a.Int32Vector = h(Int32Array),
            a.Uint32Vector = h(Uint32Array),
            a.Float32Vector = h(Float32Array),
            a.Float64Vector = h(Float64Array),
            a.PointerVector = h(function(t) {
                return new (o.getPointerArray(t))(t)
            }),
            e.exports = a
        }
        )
          , tx = C((t,e)=>{
            var i = L()
              , r = I()
              , n = ts().inplaceQuickSortIndices
              , o = tr().lowerBoundIndices
              , s = D()
              , a = r.getPointerArray;
            function h(t, e) {
                return t.distance < e.distance ? 1 : t.distance > e.distance ? -1 : 0
            }
            function u(t, e) {
                if ("function" != typeof t)
                    throw Error("mnemonist/VPTree.constructor: given `distance` must be a function.");
                if (!e)
                    throw Error("mnemonist/VPTree.constructor: you must provide items to the tree. A VPTree cannot be updated after its creation.");
                this.distance = t,
                this.heap = new s(h),
                this.D = 0;
                var r = i.toArrayWithIndices(e);
                this.items = r[0];
                var u = r[1];
                this.size = u.length;
                var l = function(t, e, i) {
                    for (var r, s, h, u, l, c, p, f, d, y = i.length, g = a(y), v = 0, m = new g(y), w = new g(y), b = new g(y), T = new Float64Array(y), _ = [0, 0, y], S = new Float64Array(y); _.length; )
                        if (l = _.pop(),
                        u = _.pop(),
                        r = _.pop(),
                        s = i[l - 1],
                        d = --l - u,
                        m[r] = s,
                        0 !== d) {
                            if (1 === d) {
                                p = t(e[s], e[i[u]]),
                                T[r] = p,
                                v++,
                                b[r] = v,
                                m[v] = i[u];
                                continue
                            }
                            for (f = u; f < l; f++)
                                S[i[f]] = t(e[s], e[i[f]]);
                            n(S, i, u, l),
                            p = (h = u + d / 2 - 1) == (0 | h) ? (S[i[h]] + S[i[h + 1]]) / 2 : S[i[Math.ceil(h)]],
                            T[r] = p,
                            c = o(S, i, p, u, l),
                            l - c > 0 && (v++,
                            b[r] = v,
                            _.push(v, c, l)),
                            c - u > 0 && (v++,
                            w[r] = v,
                            _.push(v, u, c))
                        }
                    return {
                        nodes: m,
                        lefts: w,
                        rights: b,
                        mus: T
                    }
                }(t, this.items, u);
                this.nodes = l.nodes,
                this.lefts = l.lefts,
                this.rights = l.rights,
                this.mus = l.mus
            }
            u.prototype.nearestNeighbors = function(t, e) {
                var i, r, n, o, s, a, h, u = this.heap, l = [0], c = 1 / 0;
                for (this.D = 0; l.length; )
                    i = l.pop(),
                    r = this.nodes[i],
                    n = this.items[r],
                    h = this.distance(n, e),
                    this.D++,
                    h < c && (u.push({
                        distance: h,
                        item: n
                    }),
                    u.size > t && u.pop(),
                    u.size >= t && (c = u.peek().distance)),
                    o = this.lefts[i],
                    s = this.rights[i],
                    !(!o && !s) && (h < (a = this.mus[i]) ? (o && h < a + c && l.push(o),
                    s && h >= a - c && l.push(s)) : (s && h >= a - c && l.push(s),
                    o && h < a + c && l.push(o)));
                for (var p = Array(u.size), f = u.size - 1; f >= 0; f--)
                    p[f] = u.pop();
                return p
            }
            ,
            u.prototype.neighbors = function(t, e) {
                var i, r, n, o, s, a, h, u = [], l = [0];
                for (this.D = 0; l.length; )
                    i = l.pop(),
                    r = this.nodes[i],
                    n = this.items[r],
                    h = this.distance(n, e),
                    this.D++,
                    h <= t && u.push({
                        distance: h,
                        item: n
                    }),
                    o = this.lefts[i],
                    s = this.rights[i],
                    !(!o && !s) && (h < (a = this.mus[i]) ? (o && h < a + t && l.push(o),
                    s && h >= a - t && l.push(s)) : (s && h >= a - t && l.push(s),
                    o && h < a + t && l.push(o)));
                return u
            }
            ,
            u.prototype.inspect = function() {
                var t = this.items.slice();
                return Object.defineProperty(t, "constructor", {
                    value: u,
                    enumerable: !1
                }),
                t
            }
            ,
            "undefined" != typeof Symbol && (u.prototype[Symbol.for("nodejs.util.inspect.custom")] = u.prototype.inspect),
            u.from = function(t, e) {
                return new u(e,t)
            }
            ,
            e.exports = u
        }
        )
          , tC = C((t,e)=>{
            var i = D()
              , r = M()
              , n = R();
            e.exports = {
                BiMap: F(),
                BitSet: j(),
                BitVector: H(),
                BloomFilter: W(),
                BKTree: G(),
                CircularBuffer: q(),
                DefaultMap: V(),
                DefaultWeakMap: K(),
                FixedDeque: $(),
                StaticDisjointSet: X(),
                FibonacciHeap: r,
                MinFibonacciHeap: r.MinFibonacciHeap,
                MaxFibonacciHeap: r.MaxFibonacciHeap,
                FixedReverseHeap: Y(),
                FuzzyMap: J(),
                FuzzyMultiMap: Q(),
                HashedArrayTree: tt(),
                Heap: i,
                MinHeap: i.MinHeap,
                MaxHeap: i.MaxHeap,
                StaticIntervalTree: ti(),
                InvertedIndex: to(),
                KDTree: ta(),
                LinkedList: th(),
                LRUCache: tu(),
                LRUCacheWithDelete: tl(),
                LRUMap: tc(),
                LRUMapWithDelete: tp(),
                MultiMap: Z(),
                MultiSet: tf(),
                PassjoinIndex: td(),
                Queue: ty(),
                FixedStack: te(),
                Stack: tg(),
                SuffixArray: n,
                GeneralizedSuffixArray: n.GeneralizedSuffixArray,
                Set: tv(),
                SparseQueueSet: tm(),
                SparseMap: tw(),
                SparseSet: tb(),
                SymSpell: tT(),
                Trie: tS(),
                TrieMap: t_(),
                Vector: tP(),
                VPTree: tx()
            }
        }
        )
          , tk = class t {
            static get ZERO() {
                return new t(0,0)
            }
            static get ONE() {
                return new t(1,1)
            }
            static get UP() {
                return new t(0,-1)
            }
            static get DOWN() {
                return new t(0,1)
            }
            static get LEFT() {
                return new t(-1,0)
            }
            static get RIGHT() {
                return new t(1,0)
            }
            static get UP_LEFT() {
                return new t(-1,-1)
            }
            static get UP_RIGHT() {
                return new t(1,-1)
            }
            static get DOWN_RIGHT() {
                return new t(1,1)
            }
            static get DOWN_LEFT() {
                return new t(-1,1)
            }
            constructor(t, e) {
                "number" == typeof t ? (this.x = t,
                this.y = e || 0) : (this.x = t.x,
                this.y = t.y)
            }
            clone() {
                return new t(this.x,this.y)
            }
            add(e) {
                return new t(this.x + e.x,this.y + e.y)
            }
            multiply(e) {
                return new t(this.x * e.x,this.y * e.y)
            }
            divide(e) {
                return new t(this.x / e.x,this.y / e.y)
            }
            subtract(e) {
                return new t(this.x - e.x,this.y - e.y)
            }
            equals(t) {
                return this.x === t.x && this.y === t.y
            }
            abs() {
                return new t(Math.abs(this.x),Math.abs(this.y))
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            modulo(e) {
                return new t(this.x % e.x,this.y % e.y)
            }
            scalarModulo(e) {
                return new t(this.x % e,this.y % e)
            }
            scalarMult(e) {
                return new t(this.x * e,this.y * e)
            }
            toPosition() {
                return {
                    x: this.x,
                    y: this.y
                }
            }
            toString() {
                return `${this.x}#${this.y}`
            }
        }
          , tA = class {
            static equal(t, e) {
                return t.position.x === e.position.x && t.position.y === e.position.y && t.layer === e.layer
            }
            static copyOver(t, e) {
                e.position.x = t.position.x,
                e.position.y = t.position.y,
                e.layer = t.layer
            }
            static clone(t) {
                return {
                    position: t.position.clone(),
                    layer: t.layer
                }
            }
            static toString(t) {
                return `${t.position.toString()}#${t.layer}`
            }
            static toInternal(t) {
                return {
                    position: new tk(t.position.x,t.position.y),
                    layer: t.charLayer
                }
            }
            static fromInternal(t) {
                return {
                    position: t.position.toPosition(),
                    charLayer: t.layer
                }
            }
        }
          , tE = ((r = tE || {}).NONE = "none",
        r.LEFT = "left",
        r.UP_LEFT = "up-left",
        r.UP = "up",
        r.UP_RIGHT = "up-right",
        r.RIGHT = "right",
        r.DOWN_RIGHT = "down-right",
        r.DOWN = "down",
        r.DOWN_LEFT = "down-left",
        r)
          , tO = {
            up: "down",
            down: "up",
            left: "right",
            right: "left",
            none: "none",
            "up-left": "down-right",
            "up-right": "down-left",
            "down-right": "up-left",
            "down-left": "up-right"
        }
          , tz = {
            up: tk.UP,
            down: tk.DOWN,
            left: tk.LEFT,
            right: tk.RIGHT,
            none: tk.ZERO,
            "up-left": tk.UP_LEFT,
            "up-right": tk.UP_RIGHT,
            "down-right": tk.DOWN_RIGHT,
            "down-left": tk.DOWN_LEFT
        }
          , tM = {
            up: 0,
            "up-right": 1,
            right: 2,
            "down-right": 3,
            down: 4,
            "down-left": 5,
            left: 6,
            "up-left": 7,
            none: NaN
        }
          , tI = ["up", "up-right", "right", "down-right", "down", "down-left", "left", "up-left"]
          , tL = ["down-left", "down-right", "up-right", "up-left"];
        function tD() {
            return ["up", "down", "left", "right", "none", "up-left", "up-right", "down-right", "down-left"]
        }
        function tR(t) {
            return tL.includes(t)
        }
        function tF(t, e=1) {
            return "none" === t ? "none" : tI[(tM[t] + e) % 8]
        }
        function tB(t, e) {
            if (t.x === e.x) {
                if (t.y > e.y)
                    return "up";
                if (t.y < e.y)
                    return "down"
            } else if (t.y === e.y) {
                if (t.x > e.x)
                    return "left";
                if (t.x < e.x)
                    return "right"
            } else if (t.x > e.x) {
                if (t.y < e.y)
                    return "down-left";
                if (t.y > e.y)
                    return "up-left"
            } else if (t.x < e.x) {
                if (t.y < e.y)
                    return "down-right";
                if (t.y > e.y)
                    return "up-right"
            }
            return "none"
        }
        var tN = ((n = tN || {})[n.FOUR = 4] = "FOUR",
        n[n.EIGHT = 8] = "EIGHT",
        n);
        function tj(t) {
            return "string" == typeof t && tD().includes(t)
        }
        var tH = function(t, e) {
            return (tH = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        };
        function tU(t, e) {
            if ("function" != typeof e && null !== e)
                throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function i() {
                this.constructor = t
            }
            tH(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        function tW(t, e) {
            var i, r, n, o, s = {
                label: 0,
                sent: function() {
                    if (1 & n[0])
                        throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function a(a) {
                return function(h) {
                    return function(a) {
                        if (i)
                            throw TypeError("Generator is already executing.");
                        for (; o && (o = 0,
                        a[0] && (s = 0)),
                        s; )
                            try {
                                if (i = 1,
                                r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r),
                                0) : r.next) && !(n = n.call(r, a[1])).done)
                                    return n;
                                switch (r = 0,
                                n && (a = [2 & a[0], n.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    n = a;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                        s.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && s.label < n[1]) {
                                        s.label = n[1],
                                        n = a;
                                        break
                                    }
                                    if (n && s.label < n[2]) {
                                        s.label = n[2],
                                        s.ops.push(a);
                                        break
                                    }
                                    n[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                a = e.call(t, s)
                            } catch (t) {
                                a = [6, t],
                                r = 0
                            } finally {
                                i = n = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, h])
                }
            }
        }
        function tG(t) {
            var e = "function" == typeof Symbol && Symbol.iterator
              , i = e && t[e]
              , r = 0;
            if (i)
                return i.call(t);
            if (t && "number" == typeof t.length)
                return {
                    next: function() {
                        return t && r >= t.length && (t = void 0),
                        {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
            throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function t$(t, e) {
            var i = "function" == typeof Symbol && t[Symbol.iterator];
            if (!i)
                return t;
            var r, n, o = i.call(t), s = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
                    s.push(r.value)
            } catch (t) {
                n = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (i = o.return) && i.call(o)
                } finally {
                    if (n)
                        throw n.error
                }
            }
            return s
        }
        function tq(t, e, i) {
            if (i || 2 == arguments.length)
                for (var r, n = 0, o = e.length; n < o; n++)
                    !r && n in e || (r || (r = Array.prototype.slice.call(e, 0, n)),
                    r[n] = e[n]);
            return t.concat(r || Array.prototype.slice.call(e))
        }
        function tV(t) {
            return this instanceof tV ? (this.v = t,
            this) : new tV(t)
        }
        function tK(t) {
            return "function" == typeof t
        }
        function tX(t) {
            var e = t(function(t) {
                Error.call(t),
                t.stack = Error().stack
            });
            return e.prototype = Object.create(Error.prototype),
            e.prototype.constructor = e,
            e
        }
        var tY = tX(function(t) {
            return function(e) {
                t(this),
                this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(t, e) {
                    return e + 1 + ") " + t.toString()
                }).join(`
  `) : "",
                this.name = "UnsubscriptionError",
                this.errors = e
            }
        });
        function tJ(t, e) {
            if (t) {
                var i = t.indexOf(e);
                0 <= i && t.splice(i, 1)
            }
        }
        var tZ = function() {
            var t;
            function e(t) {
                this.initialTeardown = t,
                this.closed = !1,
                this._parentage = null,
                this._finalizers = null
            }
            return e.prototype.unsubscribe = function() {
                var t, e, i, r, n;
                if (!this.closed) {
                    this.closed = !0;
                    var o = this._parentage;
                    if (o) {
                        if (this._parentage = null,
                        Array.isArray(o))
                            try {
                                for (var s = tG(o), a = s.next(); !a.done; a = s.next())
                                    a.value.remove(this)
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    a && !a.done && (e = s.return) && e.call(s)
                                } finally {
                                    if (t)
                                        throw t.error
                                }
                            }
                        else
                            o.remove(this)
                    }
                    var h = this.initialTeardown;
                    if (tK(h))
                        try {
                            h()
                        } catch (t) {
                            n = t instanceof tY ? t.errors : [t]
                        }
                    var u = this._finalizers;
                    if (u) {
                        this._finalizers = null;
                        try {
                            for (var l = tG(u), c = l.next(); !c.done; c = l.next()) {
                                var p = c.value;
                                try {
                                    t1(p)
                                } catch (t) {
                                    n = null != n ? n : [],
                                    t instanceof tY ? n = tq(tq([], t$(n)), t$(t.errors)) : n.push(t)
                                }
                            }
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                c && !c.done && (r = l.return) && r.call(l)
                            } finally {
                                if (i)
                                    throw i.error
                            }
                        }
                    }
                    if (n)
                        throw new tY(n)
                }
            }
            ,
            e.prototype.add = function(t) {
                var i;
                if (t && t !== this) {
                    if (this.closed)
                        t1(t);
                    else {
                        if (t instanceof e) {
                            if (t.closed || t._hasParent(this))
                                return;
                            t._addParent(this)
                        }
                        (this._finalizers = null !== (i = this._finalizers) && void 0 !== i ? i : []).push(t)
                    }
                }
            }
            ,
            e.prototype._hasParent = function(t) {
                var e = this._parentage;
                return e === t || Array.isArray(e) && e.includes(t)
            }
            ,
            e.prototype._addParent = function(t) {
                var e = this._parentage;
                this._parentage = Array.isArray(e) ? (e.push(t),
                e) : e ? [e, t] : t
            }
            ,
            e.prototype._removeParent = function(t) {
                var e = this._parentage;
                e === t ? this._parentage = null : Array.isArray(e) && tJ(e, t)
            }
            ,
            e.prototype.remove = function(t) {
                var i = this._finalizers;
                i && tJ(i, t),
                t instanceof e && t._removeParent(this)
            }
            ,
            e.EMPTY = ((t = new e).closed = !0,
            t),
            e
        }()
          , tQ = tZ.EMPTY;
        function t0(t) {
            return t instanceof tZ || t && "closed"in t && tK(t.remove) && tK(t.add) && tK(t.unsubscribe)
        }
        function t1(t) {
            tK(t) ? t() : t.unsubscribe()
        }
        var t2 = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1
        }
          , t3 = {
            setTimeout: function(t, e) {
                for (var i = [], r = 2; r < arguments.length; r++)
                    i[r - 2] = arguments[r];
                var n = t3.delegate;
                return null != n && n.setTimeout ? n.setTimeout.apply(n, tq([t, e], t$(i))) : setTimeout.apply(void 0, tq([t, e], t$(i)))
            },
            clearTimeout: function(t) {
                var e = t3.delegate;
                return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(t)
            },
            delegate: void 0
        };
        function t4(t) {
            t3.setTimeout(function() {
                var e = t2.onUnhandledError;
                if (e)
                    e(t);
                else
                    throw t
            })
        }
        function t9() {}
        var t5 = t6("C", void 0, void 0);
        function t6(t, e, i) {
            return {
                kind: t,
                value: e,
                error: i
            }
        }
        var t8 = null;
        function t7(t) {
            if (t2.useDeprecatedSynchronousErrorHandling) {
                var e = !t8;
                if (e && (t8 = {
                    errorThrown: !1,
                    error: null
                }),
                t(),
                e) {
                    var i = t8
                      , r = i.errorThrown
                      , n = i.error;
                    if (t8 = null,
                    r)
                        throw n
                }
            } else
                t()
        }
        var et = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.isStopped = !1,
                e ? (i.destination = e,
                t0(e) && e.add(i)) : i.destination = ea,
                i
            }
            return tU(e, t),
            e.create = function(t, e, i) {
                return new en(t,e,i)
            }
            ,
            e.prototype.next = function(t) {
                this.isStopped ? es(t6("N", t, void 0), this) : this._next(t)
            }
            ,
            e.prototype.error = function(t) {
                this.isStopped ? es(t6("E", void 0, t), this) : (this.isStopped = !0,
                this._error(t))
            }
            ,
            e.prototype.complete = function() {
                this.isStopped ? es(t5, this) : (this.isStopped = !0,
                this._complete())
            }
            ,
            e.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0,
                t.prototype.unsubscribe.call(this),
                this.destination = null)
            }
            ,
            e.prototype._next = function(t) {
                this.destination.next(t)
            }
            ,
            e.prototype._error = function(t) {
                try {
                    this.destination.error(t)
                } finally {
                    this.unsubscribe()
                }
            }
            ,
            e.prototype._complete = function() {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }
            ,
            e
        }(tZ)
          , ee = Function.prototype.bind;
        function ei(t, e) {
            return ee.call(t, e)
        }
        var er = function() {
            function t(t) {
                this.partialObserver = t
            }
            return t.prototype.next = function(t) {
                var e = this.partialObserver;
                if (e.next)
                    try {
                        e.next(t)
                    } catch (t) {
                        eo(t)
                    }
            }
            ,
            t.prototype.error = function(t) {
                var e = this.partialObserver;
                if (e.error)
                    try {
                        e.error(t)
                    } catch (t) {
                        eo(t)
                    }
                else
                    eo(t)
            }
            ,
            t.prototype.complete = function() {
                var t = this.partialObserver;
                if (t.complete)
                    try {
                        t.complete()
                    } catch (t) {
                        eo(t)
                    }
            }
            ,
            t
        }()
          , en = function(t) {
            function e(e, i, r) {
                var n, o, s = t.call(this) || this;
                return tK(e) || !e ? o = {
                    next: null != e ? e : void 0,
                    error: null != i ? i : void 0,
                    complete: null != r ? r : void 0
                } : s && t2.useDeprecatedNextContext ? ((n = Object.create(e)).unsubscribe = function() {
                    return s.unsubscribe()
                }
                ,
                o = {
                    next: e.next && ei(e.next, n),
                    error: e.error && ei(e.error, n),
                    complete: e.complete && ei(e.complete, n)
                }) : o = e,
                s.destination = new er(o),
                s
            }
            return tU(e, t),
            e
        }(et);
        function eo(t) {
            t2.useDeprecatedSynchronousErrorHandling ? t2.useDeprecatedSynchronousErrorHandling && t8 && (t8.errorThrown = !0,
            t8.error = t) : t4(t)
        }
        function es(t, e) {
            var i = t2.onStoppedNotification;
            i && t3.setTimeout(function() {
                return i(t, e)
            })
        }
        var ea = {
            closed: !0,
            next: t9,
            error: function(t) {
                throw t
            },
            complete: t9
        }
          , eh = "function" == typeof Symbol && Symbol.observable || "@@observable";
        function eu(t) {
            return t
        }
        function el(t) {
            return 0 === t.length ? eu : 1 === t.length ? t[0] : function(e) {
                return t.reduce(function(t, e) {
                    return e(t)
                }, e)
            }
        }
        var ec = function() {
            function t(t) {
                t && (this._subscribe = t)
            }
            return t.prototype.lift = function(e) {
                var i = new t;
                return i.source = this,
                i.operator = e,
                i
            }
            ,
            t.prototype.subscribe = function(t, e, i) {
                var r, n = this, o = (r = t) && r instanceof et || r && tK(r.next) && tK(r.error) && tK(r.complete) && t0(r) ? t : new en(t,e,i);
                return t7(function() {
                    var t = n.operator
                      , e = n.source;
                    o.add(t ? t.call(o, e) : e ? n._subscribe(o) : n._trySubscribe(o))
                }),
                o
            }
            ,
            t.prototype._trySubscribe = function(t) {
                try {
                    return this._subscribe(t)
                } catch (e) {
                    t.error(e)
                }
            }
            ,
            t.prototype.forEach = function(t, e) {
                var i = this;
                return new (e = ep(e))(function(e, r) {
                    var n = new en({
                        next: function(e) {
                            try {
                                t(e)
                            } catch (t) {
                                r(t),
                                n.unsubscribe()
                            }
                        },
                        error: r,
                        complete: e
                    });
                    i.subscribe(n)
                }
                )
            }
            ,
            t.prototype._subscribe = function(t) {
                var e;
                return null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(t)
            }
            ,
            t.prototype[eh] = function() {
                return this
            }
            ,
            t.prototype.pipe = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return el(t)(this)
            }
            ,
            t.prototype.toPromise = function(t) {
                var e = this;
                return new (t = ep(t))(function(t, i) {
                    var r;
                    e.subscribe(function(t) {
                        return r = t
                    }, function(t) {
                        return i(t)
                    }, function() {
                        return t(r)
                    })
                }
                )
            }
            ,
            t.create = function(e) {
                return new t(e)
            }
            ,
            t
        }();
        function ep(t) {
            var e;
            return null !== (e = null != t ? t : t2.Promise) && void 0 !== e ? e : Promise
        }
        function ef(t) {
            return function(e) {
                if (tK(null == e ? void 0 : e.lift))
                    return e.lift(function(e) {
                        try {
                            return t(e, this)
                        } catch (t) {
                            this.error(t)
                        }
                    });
                throw TypeError("Unable to lift unknown Observable type")
            }
        }
        function ed(t, e, i, r, n) {
            return new ey(t,e,i,r,n)
        }
        var ey = function(t) {
            function e(e, i, r, n, o, s) {
                var a = t.call(this, e) || this;
                return a.onFinalize = o,
                a.shouldUnsubscribe = s,
                a._next = i ? function(t) {
                    try {
                        i(t)
                    } catch (t) {
                        e.error(t)
                    }
                }
                : t.prototype._next,
                a._error = n ? function(t) {
                    try {
                        n(t)
                    } catch (t) {
                        e.error(t)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : t.prototype._error,
                a._complete = r ? function() {
                    try {
                        r()
                    } catch (t) {
                        e.error(t)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : t.prototype._complete,
                a
            }
            return tU(e, t),
            e.prototype.unsubscribe = function() {
                var e;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                    var i = this.closed;
                    t.prototype.unsubscribe.call(this),
                    i || null === (e = this.onFinalize) || void 0 === e || e.call(this)
                }
            }
            ,
            e
        }(et)
          , eg = tX(function(t) {
            return function() {
                t(this),
                this.name = "ObjectUnsubscribedError",
                this.message = "object unsubscribed"
            }
        })
          , ev = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.closed = !1,
                e.currentObservers = null,
                e.observers = [],
                e.isStopped = !1,
                e.hasError = !1,
                e.thrownError = null,
                e
            }
            return tU(e, t),
            e.prototype.lift = function(t) {
                var e = new em(this,this);
                return e.operator = t,
                e
            }
            ,
            e.prototype._throwIfClosed = function() {
                if (this.closed)
                    throw new eg
            }
            ,
            e.prototype.next = function(t) {
                var e = this;
                t7(function() {
                    var i, r;
                    if (e._throwIfClosed(),
                    !e.isStopped) {
                        e.currentObservers || (e.currentObservers = Array.from(e.observers));
                        try {
                            for (var n = tG(e.currentObservers), o = n.next(); !o.done; o = n.next())
                                o.value.next(t)
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (r = n.return) && r.call(n)
                            } finally {
                                if (i)
                                    throw i.error
                            }
                        }
                    }
                })
            }
            ,
            e.prototype.error = function(t) {
                var e = this;
                t7(function() {
                    if (e._throwIfClosed(),
                    !e.isStopped) {
                        e.hasError = e.isStopped = !0,
                        e.thrownError = t;
                        for (var i = e.observers; i.length; )
                            i.shift().error(t)
                    }
                })
            }
            ,
            e.prototype.complete = function() {
                var t = this;
                t7(function() {
                    if (t._throwIfClosed(),
                    !t.isStopped) {
                        t.isStopped = !0;
                        for (var e = t.observers; e.length; )
                            e.shift().complete()
                    }
                })
            }
            ,
            e.prototype.unsubscribe = function() {
                this.isStopped = this.closed = !0,
                this.observers = this.currentObservers = null
            }
            ,
            Object.defineProperty(e.prototype, "observed", {
                get: function() {
                    var t;
                    return (null === (t = this.observers) || void 0 === t ? void 0 : t.length) > 0
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype._trySubscribe = function(e) {
                return this._throwIfClosed(),
                t.prototype._trySubscribe.call(this, e)
            }
            ,
            e.prototype._subscribe = function(t) {
                return this._throwIfClosed(),
                this._checkFinalizedStatuses(t),
                this._innerSubscribe(t)
            }
            ,
            e.prototype._innerSubscribe = function(t) {
                var e = this
                  , i = this.hasError
                  , r = this.isStopped
                  , n = this.observers;
                return i || r ? tQ : (this.currentObservers = null,
                n.push(t),
                new tZ(function() {
                    e.currentObservers = null,
                    tJ(n, t)
                }
                ))
            }
            ,
            e.prototype._checkFinalizedStatuses = function(t) {
                var e = this.hasError
                  , i = this.thrownError
                  , r = this.isStopped;
                e ? t.error(i) : r && t.complete()
            }
            ,
            e.prototype.asObservable = function() {
                var t = new ec;
                return t.source = this,
                t
            }
            ,
            e.create = function(t, e) {
                return new em(t,e)
            }
            ,
            e
        }(ec)
          , em = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.destination = e,
                r.source = i,
                r
            }
            return tU(e, t),
            e.prototype.next = function(t) {
                var e, i;
                null === (i = null === (e = this.destination) || void 0 === e ? void 0 : e.next) || void 0 === i || i.call(e, t)
            }
            ,
            e.prototype.error = function(t) {
                var e, i;
                null === (i = null === (e = this.destination) || void 0 === e ? void 0 : e.error) || void 0 === i || i.call(e, t)
            }
            ,
            e.prototype.complete = function() {
                var t, e;
                null === (e = null === (t = this.destination) || void 0 === t ? void 0 : t.complete) || void 0 === e || e.call(t)
            }
            ,
            e.prototype._subscribe = function(t) {
                var e, i;
                return null !== (i = null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(t)) && void 0 !== i ? i : tQ
            }
            ,
            e
        }(ev)
          , ew = new ec(function(t) {
            return t.complete()
        }
        );
        function eb(t) {
            return t[t.length - 1]
        }
        function eT(t) {
            var e;
            return (e = eb(t)) && tK(e.schedule) ? t.pop() : void 0
        }
        function e_(t, e) {
            return "number" == typeof eb(t) ? t.pop() : e
        }
        var eS = function(t) {
            return t && "number" == typeof t.length && "function" != typeof t
        };
        function eP(t) {
            return tK(null == t ? void 0 : t.then)
        }
        function ex(t) {
            return Symbol.asyncIterator && tK(null == t ? void 0 : t[Symbol.asyncIterator])
        }
        function eC(t) {
            return TypeError("You provided " + (null !== t && "object" == typeof t ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
        }
        var ek = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
        function eA(t) {
            return tK(null == t ? void 0 : t[ek])
        }
        function eE(t) {
            return function(t, e, i) {
                if (!Symbol.asyncIterator)
                    throw TypeError("Symbol.asyncIterator is not defined.");
                var r, n = i.apply(t, e || []), o = [];
                return r = {},
                s("next"),
                s("throw"),
                s("return"),
                r[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                r;
                function s(t) {
                    n[t] && (r[t] = function(e) {
                        return new Promise(function(i, r) {
                            o.push([t, e, i, r]) > 1 || a(t, e)
                        }
                        )
                    }
                    )
                }
                function a(t, e) {
                    try {
                        var i;
                        (i = n[t](e)).value instanceof tV ? Promise.resolve(i.value.v).then(h, u) : l(o[0][2], i)
                    } catch (t) {
                        l(o[0][3], t)
                    }
                }
                function h(t) {
                    a("next", t)
                }
                function u(t) {
                    a("throw", t)
                }
                function l(t, e) {
                    t(e),
                    o.shift(),
                    o.length && a(o[0][0], o[0][1])
                }
            }(this, arguments, function() {
                var e, i, r;
                return tW(this, function(n) {
                    switch (n.label) {
                    case 0:
                        e = t.getReader(),
                        n.label = 1;
                    case 1:
                        n.trys.push([1, , 9, 10]),
                        n.label = 2;
                    case 2:
                        return [4, tV(e.read())];
                    case 3:
                        return r = (i = n.sent()).value,
                        i.done ? [4, tV(void 0)] : [3, 5];
                    case 4:
                        return [2, n.sent()];
                    case 5:
                        return [4, tV(r)];
                    case 6:
                        return [4, n.sent()];
                    case 7:
                        return n.sent(),
                        [3, 2];
                    case 8:
                        return [3, 10];
                    case 9:
                        return e.releaseLock(),
                        [7];
                    case 10:
                        return [2]
                    }
                })
            })
        }
        function eO(t) {
            return tK(null == t ? void 0 : t.getReader)
        }
        function ez(t) {
            if (t instanceof ec)
                return t;
            if (null != t) {
                if (tK(t[eh]))
                    return new ec(function(e) {
                        var i = t[eh]();
                        if (tK(i.subscribe))
                            return i.subscribe(e);
                        throw TypeError("Provided object does not correctly implement Symbol.observable")
                    }
                    );
                if (eS(t))
                    return new ec(function(e) {
                        for (var i = 0; i < t.length && !e.closed; i++)
                            e.next(t[i]);
                        e.complete()
                    }
                    );
                if (eP(t))
                    return new ec(function(e) {
                        t.then(function(t) {
                            e.closed || (e.next(t),
                            e.complete())
                        }, function(t) {
                            return e.error(t)
                        }).then(null, t4)
                    }
                    );
                if (ex(t))
                    return eM(t);
                if (eA(t))
                    return new ec(function(e) {
                        var i, r;
                        try {
                            for (var n = tG(t), o = n.next(); !o.done; o = n.next()) {
                                var s = o.value;
                                if (e.next(s),
                                e.closed)
                                    return
                            }
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (r = n.return) && r.call(n)
                            } finally {
                                if (i)
                                    throw i.error
                            }
                        }
                        e.complete()
                    }
                    );
                if (eO(t))
                    return eM(eE(t))
            }
            throw eC(t)
        }
        function eM(t) {
            return new ec(function(e) {
                (function(t, e) {
                    var i, r, n, o, s, a, h, u;
                    return s = this,
                    a = void 0,
                    h = void 0,
                    u = function() {
                        var s;
                        return tW(this, function(a) {
                            switch (a.label) {
                            case 0:
                                a.trys.push([0, 5, 6, 11]),
                                i = function(t) {
                                    if (!Symbol.asyncIterator)
                                        throw TypeError("Symbol.asyncIterator is not defined.");
                                    var e, i = t[Symbol.asyncIterator];
                                    return i ? i.call(t) : (t = tG(t),
                                    e = {},
                                    r("next"),
                                    r("throw"),
                                    r("return"),
                                    e[Symbol.asyncIterator] = function() {
                                        return this
                                    }
                                    ,
                                    e);
                                    function r(i) {
                                        e[i] = t[i] && function(e) {
                                            return new Promise(function(r, n) {
                                                (function(t, e, i, r) {
                                                    Promise.resolve(r).then(function(e) {
                                                        t({
                                                            value: e,
                                                            done: i
                                                        })
                                                    }, e)
                                                }
                                                )(r, n, (e = t[i](e)).done, e.value)
                                            }
                                            )
                                        }
                                    }
                                }(t),
                                a.label = 1;
                            case 1:
                                return [4, i.next()];
                            case 2:
                                if ((r = a.sent()).done)
                                    return [3, 4];
                                if (s = r.value,
                                e.next(s),
                                e.closed)
                                    return [2];
                                a.label = 3;
                            case 3:
                                return [3, 1];
                            case 4:
                                return [3, 11];
                            case 5:
                                return n = {
                                    error: a.sent()
                                },
                                [3, 11];
                            case 6:
                                return a.trys.push([6, , 9, 10]),
                                r && !r.done && (o = i.return) ? [4, o.call(i)] : [3, 8];
                            case 7:
                                a.sent(),
                                a.label = 8;
                            case 8:
                                return [3, 10];
                            case 9:
                                if (n)
                                    throw n.error;
                                return [7];
                            case 10:
                                return [7];
                            case 11:
                                return e.complete(),
                                [2]
                            }
                        })
                    }
                    ,
                    new (h || (h = Promise))(function(t, e) {
                        function i(t) {
                            try {
                                n(u.next(t))
                            } catch (t) {
                                e(t)
                            }
                        }
                        function r(t) {
                            try {
                                n(u.throw(t))
                            } catch (t) {
                                e(t)
                            }
                        }
                        function n(e) {
                            var n;
                            e.done ? t(e.value) : ((n = e.value)instanceof h ? n : new h(function(t) {
                                t(n)
                            }
                            )).then(i, r)
                        }
                        n((u = u.apply(s, a || [])).next())
                    }
                    )
                }
                )(t, e).catch(function(t) {
                    return e.error(t)
                })
            }
            )
        }
        function eI(t, e, i, r, n) {
            void 0 === r && (r = 0),
            void 0 === n && (n = !1);
            var o = e.schedule(function() {
                i(),
                n ? t.add(this.schedule(null, r)) : this.unsubscribe()
            }, r);
            if (t.add(o),
            !n)
                return o
        }
        function eL(t, e) {
            return void 0 === e && (e = 0),
            ef(function(i, r) {
                i.subscribe(ed(r, function(i) {
                    return eI(r, t, function() {
                        return r.next(i)
                    }, e)
                }, function() {
                    return eI(r, t, function() {
                        return r.complete()
                    }, e)
                }, function(i) {
                    return eI(r, t, function() {
                        return r.error(i)
                    }, e)
                }))
            })
        }
        function eD(t, e) {
            return void 0 === e && (e = 0),
            ef(function(i, r) {
                r.add(t.schedule(function() {
                    return i.subscribe(r)
                }, e))
            })
        }
        function eR(t, e) {
            if (!t)
                throw Error("Iterable cannot be null");
            return new ec(function(i) {
                eI(i, e, function() {
                    var r = t[Symbol.asyncIterator]();
                    eI(i, e, function() {
                        r.next().then(function(t) {
                            t.done ? i.complete() : i.next(t.value)
                        })
                    }, 0, !0)
                })
            }
            )
        }
        function eF(t, e) {
            return e ? function(t, e) {
                if (null != t) {
                    if (tK(t[eh]))
                        return ez(t).pipe(eD(e), eL(e));
                    if (eS(t))
                        return new ec(function(i) {
                            var r = 0;
                            return e.schedule(function() {
                                r === t.length ? i.complete() : (i.next(t[r++]),
                                i.closed || this.schedule())
                            })
                        }
                        );
                    if (eP(t))
                        return ez(t).pipe(eD(e), eL(e));
                    if (ex(t))
                        return eR(t, e);
                    if (eA(t))
                        return new ec(function(i) {
                            var r;
                            return eI(i, e, function() {
                                r = t[ek](),
                                eI(i, e, function() {
                                    var t, e, n;
                                    try {
                                        e = (t = r.next()).value,
                                        n = t.done
                                    } catch (t) {
                                        i.error(t);
                                        return
                                    }
                                    n ? i.complete() : i.next(e)
                                }, 0, !0)
                            }),
                            function() {
                                return tK(null == r ? void 0 : r.return) && r.return()
                            }
                        }
                        );
                    if (eO(t))
                        return eR(eE(t), e)
                }
                throw eC(t)
            }(t, e) : ez(t)
        }
        function eB(t, e) {
            return ef(function(i, r) {
                var n = 0;
                i.subscribe(ed(r, function(i) {
                    r.next(t.call(e, i, n++))
                }))
            })
        }
        function eN(t) {
            return void 0 === t && (t = 1 / 0),
            function t(e, i, r) {
                return void 0 === r && (r = 1 / 0),
                tK(i) ? t(function(t, r) {
                    return eB(function(e, n) {
                        return i(t, e, r, n)
                    })(ez(e(t, r)))
                }, r) : ("number" == typeof i && (r = i),
                ef(function(t, i) {
                    var n, o, s, a, h, u, l, c, p;
                    return n = r,
                    s = [],
                    a = 0,
                    h = 0,
                    u = !1,
                    l = function() {
                        !u || s.length || a || i.complete()
                    }
                    ,
                    c = function(t) {
                        return a < n ? p(t) : s.push(t)
                    }
                    ,
                    p = function(t) {
                        a++;
                        var r = !1;
                        ez(e(t, h++)).subscribe(ed(i, function(t) {
                            o ? c(t) : i.next(t)
                        }, function() {
                            r = !0
                        }, void 0, function() {
                            if (r)
                                try {
                                    for (a--; s.length && a < n; )
                                        !function() {
                                            var t = s.shift();
                                            p(t)
                                        }();
                                    l()
                                } catch (t) {
                                    i.error(t)
                                }
                        }))
                    }
                    ,
                    t.subscribe(ed(i, c, function() {
                        u = !0,
                        l()
                    })),
                    function() {}
                }))
            }(eu, t)
        }
        var ej = Array.isArray;
        function eH(t, e) {
            return ef(function(i, r) {
                var n = 0;
                i.subscribe(ed(r, function(i) {
                    return t.call(e, i, n++) && r.next(i)
                }))
            })
        }
        function eU(t) {
            return t <= 0 ? function() {
                return ew
            }
            : ef(function(e, i) {
                var r = 0;
                e.subscribe(ed(i, function(e) {
                    ++r <= t && (i.next(e),
                    t <= r && i.complete())
                }))
            })
        }
        function eW() {
            for (var t, e = [], i = 0; i < arguments.length; i++)
                e[i] = arguments[i];
            var r = eT(e)
              , n = e_(e, 1 / 0);
            return e = 1 === (t = e).length && ej(t[0]) ? t[0] : t,
            ef(function(t, i) {
                eN(n)(eF(tq([t], t$(e)), r)).subscribe(i)
            })
        }
        function eG(t) {
            return ef(function(e, i) {
                ez(t).subscribe(ed(i, function() {
                    return i.complete()
                }, t9)),
                i.closed || e.subscribe(i)
            })
        }
        var e$ = class {
            constructor(t, e) {
                var i, r, n;
                this.id = t,
                this.movementDirection = "none",
                this._tilePos = {
                    position: new tk(0,0),
                    layer: void 0
                },
                this.movementStarted$ = new ev,
                this.movementStopped$ = new ev,
                this.directionChanged$ = new ev,
                this.positionChangeStarted$ = new ev,
                this.positionChangeFinished$ = new ev,
                this.tilePositionSet$ = new ev,
                this.autoMovementSet$ = new ev,
                this.lastMovementImpulse = "none",
                this.facingDirection = "down",
                this.depthChanged$ = new ev,
                this.movementProgress = 0,
                this.tilemap = e.tilemap,
                this.speed = e.speed,
                this.collidesWithTilesInternal = e.collidesWithTiles,
                this._tilePos.layer = e.charLayer,
                this.ignoreMissingTiles = null != (i = e.ignoreMissingTiles) && i,
                this.collisionGroups = new Set(e.collisionGroups || []),
                this.ignoreCollisionGroups = new Set(e.ignoreCollisionGroups || []),
                this.labels = new Set(e.labels || []),
                this.numberOfDirections = e.numberOfDirections,
                e.facingDirection && this.turnTowards(e.facingDirection),
                this.tileWidth = null != (r = e.tileWidth) ? r : 1,
                this.tileHeight = null != (n = e.tileHeight) ? n : 1
            }
            getId() {
                return this.id
            }
            getSpeed() {
                return this.speed
            }
            setSpeed(t) {
                this.speed = 6;
            }
            setMovement(t) {
                this.autoMovementSet$.next(t),
                this.movement = t
            }
            getMovement() {
                return this.movement
            }
            collidesWithTiles() {
                return this.collidesWithTilesInternal
            }
            setCollidesWithTiles(t) {
                this.collidesWithTilesInternal = t
            }
            getIgnoreMissingTiles() {
                return this.ignoreMissingTiles
            }
            setIgnoreMissingTiles(t) {
                this.ignoreMissingTiles = t
            }
            setTilePosition(t) {
                this.isMoving() && this.movementStopped$.next(this.movementDirection),
                this.tilePositionSet$.next(P({}, t)),
                this.fire(this.positionChangeStarted$, this.tilePos, t),
                this.fire(this.positionChangeFinished$, this.tilePos, t),
                this.movementDirection = "none",
                this.lastMovementImpulse = "none",
                this.tilePos = t,
                this.movementProgress = 0
            }
            getTilePos() {
                return this.tilePos
            }
            getNextTilePos() {
                if (!this.isMoving())
                    return this.tilePos;
                let t = this.tilePos.layer
                  , e = this.tilePosInDirection(this.tilePos.position, this.movementDirection)
                  , i = this.tilemap.getTransition(e, this.tilePos.layer);
                return i && (t = i),
                {
                    position: this.tilePosInDirection(this.tilePos.position, this.movementDirection),
                    layer: t
                }
            }
            getTileWidth() {
                return this.tileWidth
            }
            getTileHeight() {
                return this.tileHeight
            }
            move(t) {
                this.lastMovementImpulse = t,
                "none" != t && (this.isMoving() || (this.isBlockingDirection(t) ? this.changeFacingDirection(t) : this.startMoving(t)))
            }
            update(t) {
                var e;
                null == (e = this.movement) || e.update(t),
                this.isMoving() && this.updateCharacterPosition(t),
                this.lastMovementImpulse = "none"
            }
            getMovementDirection() {
                return this.movementDirection
            }
            isBlockingDirection(t) {
                if ("none" == t)
                    return !1;
                let e = this.tilePosInDirection(this.getNextTilePos().position, t)
                  , i = this.tilemap.getTransition(e, this.getNextTilePos().layer) || this.getNextTilePos().layer;
                return !!(this.collidesWithTilesInternal && this.isTileBlocking(t, i)) || this.isCharBlocking(t, i)
            }
            isTileBlocking(t, e) {
                return this.someCharTile((i,r)=>{
                    let n = this.tilePosInDirection(new tk(i,r), t);
                    return this.tilemap.hasBlockingTile(n, e, tO[t], this.ignoreMissingTiles)
                }
                )
            }
            isCharBlocking(t, e) {
                return this.someCharTile((i,r)=>{
                    let n = this.tilePosInDirection(new tk(i,r), t);
                    return this.tilemap.hasBlockingChar(n, e, this.getCollisionGroups(), new Set([this.getId()]), this.ignoreCollisionGroups)
                }
                )
            }
            isMoving() {
                return "none" != this.movementDirection
            }
            turnTowards(t) {
                this.isMoving() || "none" != t && this.changeFacingDirection(t)
            }
            changeFacingDirection(t) {
                this.facingDirection !== t && (this.facingDirection = t,
                this.directionChanged$.next(t))
            }
            getFacingDirection() {
                return this.facingDirection
            }
            getFacingPosition() {
                return this._tilePos.position.add(tz[this.facingDirection])
            }
            addCollisionGroup(t) {
                this.collisionGroups.add(t)
            }
            setCollisionGroups(t) {
                this.collisionGroups = new Set(t)
            }
            setIgnoreCollisionGroups(t) {
                this.ignoreCollisionGroups = new Set(t)
            }
            getCollisionGroups() {
                return Array.from(this.collisionGroups)
            }
            getIgnoreCollisionGroups() {
                return Array.from(this.ignoreCollisionGroups)
            }
            hasCollisionGroup(t) {
                return this.collisionGroups.has(t)
            }
            removeCollisionGroup(t) {
                this.collisionGroups.delete(t)
            }
            removeAllCollisionGroups() {
                this.collisionGroups.clear()
            }
            addLabels(t) {
                for (let e of t)
                    this.labels.add(e)
            }
            getLabels() {
                return [...this.labels.values()]
            }
            hasLabel(t) {
                return this.labels.has(t)
            }
            clearLabels() {
                this.labels.clear()
            }
            removeLabels(t) {
                for (let e of t)
                    this.labels.delete(e)
            }
            getNumberOfDirections() {
                return this.numberOfDirections
            }
            movementStarted() {
                return this.movementStarted$
            }
            movementStopped() {
                return this.movementStopped$
            }
            directionChanged() {
                return this.directionChanged$
            }
            tilePositionSet() {
                return this.tilePositionSet$
            }
            positionChangeStarted() {
                return this.positionChangeStarted$
            }
            positionChangeFinished() {
                return this.positionChangeFinished$
            }
            autoMovementSet() {
                return this.autoMovementSet$
            }
            depthChanged() {
                return this.depthChanged$
            }
            getMovementProgress() {
                return this.movementProgress
            }
            setMovementProgress(t) {
                this.movementProgress = Math.max(0, Math.min(1e3, t))
            }
            hasWalkedHalfATile() {
                return this.movementProgress > 500
            }
            willCrossTileBorderThisUpdate(t) {
                return this.movementProgress + this.maxProgressForDelta(t) >= 1e3
            }
            updateCharacterPosition(t) {
                let e = this.willCrossTileBorderThisUpdate(t)
                  , i = 1 - (e ? 1e3 - this.movementProgress : this.maxProgressForDelta(t)) / this.maxProgressForDelta(t);
                this.movementProgress = Math.min(this.movementProgress + this.maxProgressForDelta(t), 1e3),
                e && (this.movementProgress = 0,
                this.shouldContinueMoving() ? (this.fire(this.positionChangeFinished$, this.tilePos, this.getNextTilePos()),
                this.tilePos = this.getNextTilePos(),
                this.startMoving(this.lastMovementImpulse),
                i > 0 && this.updateCharacterPosition(t * i)) : this.stopMoving())
            }
            maxProgressForDelta(t) {
                return Math.floor(t / 1e3 * this.speed * 1e3)
            }
            get tilePos() {
                return tA.clone(this._tilePos)
            }
            set tilePos(t) {
                tA.copyOver(t, this._tilePos)
            }
            startMoving(t) {
                "none" !== t && (t != this.movementDirection && this.movementStarted$.next(t),
                this.movementDirection = t,
                this.facingDirection = t,
                this.fire(this.positionChangeStarted$, this.tilePos, this.getNextTilePos()))
            }
            tilePosInDirection(t, e) {
                return t.add(tz[this.tilemap.toMapDirection(e)])
            }
            shouldContinueMoving() {
                return "none" !== this.lastMovementImpulse && !this.isBlockingDirection(this.lastMovementImpulse)
            }
            stopMoving() {
                if ("none" === this.movementDirection)
                    return;
                let t = this.tilePos
                  , e = this.getNextTilePos()
                  , i = this.movementDirection;
                this.tilePos = this.getNextTilePos(),
                this.movementDirection = "none",
                this.movementStopped$.next(i),
                this.fire(this.positionChangeFinished$, t, e)
            }
            fire(t, {position: e, layer: i}, {position: r, layer: n}) {
                t.next({
                    exitTile: e,
                    enterTile: r,
                    exitLayer: i,
                    enterLayer: n
                })
            }
            someCharTile(t) {
                let e = this.getNextTilePos().position;
                for (let i = e.x; i < e.x + this.getTileWidth(); i++)
                    for (let r = e.y; r < e.y + this.getTileHeight(); r++)
                        if (t(i, r))
                            return !0;
                return !1
            }
        }
          , eq = class t {
            constructor(t, e) {
                this.walkingAnimationMapping = t,
                this.charsInRow = e,
                this.lastFootLeft = !1,
                this.directionToFrameRow = {
                    down: 0,
                    "down-left": 1,
                    "down-right": 2,
                    left: 1,
                    right: 2,
                    up: 3,
                    "up-left": 1,
                    "up-right": 2
                },
                this._isEnabled = !0,
                this.frameChange$ = new ev,
                this.setWalkingAnimationMapping(t)
            }
            frameChange() {
                return this.frameChange$
            }
            setIsEnabled(t) {
                this._isEnabled = t
            }
            isEnabled() {
                return this._isEnabled
            }
            updateCharacterFrame(t, e, i) {
                this._isEnabled && (e ? this.setStandingFrameDuringWalk(t, i) : this.setWalkingFrame(t))
            }
            setStandingFrame(t) {
                this._isEnabled && this._setStandingFrame(t)
            }
            setWalkingAnimationMapping(t) {
                this.walkingAnimationMapping = t,
                this._isEnabled = void 0 !== this.walkingAnimationMapping
            }
            getWalkingAnimationMapping() {
                return this.walkingAnimationMapping
            }
            getCharsInRow() {
                return this.charsInRow
            }
            setStandingFrameDuringWalk(t, e) {
                this.isCurrentFrameStanding(t, e) || (this.lastFootLeft = !this.lastFootLeft),
                this._setStandingFrame(t)
            }
            setWalkingFrame(t) {
                let e = this.framesOfDirection(t);
                e && this.frameChange$.next(this.lastFootLeft ? e.rightFoot : e.leftFoot)
            }
            _setStandingFrame(t) {
                let e = this.framesOfDirection(t);
                e && this.frameChange$.next(e.standing)
            }
            isCurrentFrameStanding(t, e) {
                var i;
                return e === (null == (i = this.framesOfDirection(t)) ? void 0 : i.standing)
            }
            framesOfDirection(t) {
                return "number" == typeof this.walkingAnimationMapping ? this.getFramesForCharIndex(t, this.walkingAnimationMapping) : this.getFramesForAnimationMapping(t)
            }
            getFramesForAnimationMapping(t) {
                if (this.walkingAnimationMapping)
                    return this.walkingAnimationMapping[t] || this.walkingAnimationMapping[this.fallbackDirection(t)]
            }
            fallbackDirection(t) {
                switch (t) {
                case "down-left":
                case "up-left":
                    return "left";
                case "down-right":
                case "up-right":
                    return "right"
                }
                return t
            }
            getFramesForCharIndex(e, i) {
                var r;
                let n = Math.floor(i / this.charsInRow)
                  , o = i % this.charsInRow
                  , s = this.charsInRow * t.FRAMES_CHAR_ROW
                  , a = t.FRAMES_CHAR_ROW * o + ((null != (r = this.directionToFrameRow[e]) ? r : 0) + n * t.FRAMES_CHAR_COL) * s;
                return {
                    rightFoot: a,
                    standing: a + 1,
                    leftFoot: a + 2
                }
            }
        }
        ;
        eq.FRAMES_CHAR_ROW = 3,
        eq.FRAMES_CHAR_COL = 4;
        var eV = class {
            static shiftPad(t, e) {
                let i = Math.floor(t)
                  , r = `${i}`.padStart(e, "0").length;
                return i / Math.pow(10, r)
            }
        }
          , eK = class t {
            static vec2str(t) {
                return `${t.x}#${t.y}`
            }
            static equal(e, i) {
                return t.vec2str(e) == t.vec2str(i)
            }
            static manhattanDistance(t, e) {
                return Math.abs(t.x - e.x) + Math.abs(t.y - e.y)
            }
            static chebyshevDistance(t, e) {
                return Math.max(Math.abs(t.x - e.x), Math.abs(t.y - e.y))
            }
            static scalarMult(t, e) {
                return t.clone().multiply(new tk(e,e))
            }
        }
          , eX = class t {
            constructor(t) {
                this.tilemap = t,
                this.charLayerDepths = new Map,
                this.setLayerDepths()
            }
            getTileWidth() {
                var t, e;
                let i = null != (e = null == (t = this.tilemap.layers[0]) ? void 0 : t.tilemapLayer.scale) ? e : 1;
                return this.tilemap.tileWidth * i
            }
            getTileHeight() {
                var t, e;
                let i = null != (e = null == (t = this.tilemap.layers[0]) ? void 0 : t.tilemapLayer.scale) ? e : 1;
                return this.tilemap.tileHeight * i
            }
            getDepthOfCharLayer(t) {
                var e;
                return null != (e = this.charLayerDepths.get(t)) ? e : 0
            }
            tilePosToPixelPos(t) {
                return this.isIsometric() ? eK.scalarMult(this.getTileSize(), .5).multiply(new tk(t.x - t.y,t.x + t.y)) : t.clone().multiply(this.getTileSize())
            }
            getTileDistance(t) {
                if (this.isIsometric())
                    switch (t) {
                    case "down-left":
                    case "down-right":
                    case "up-left":
                    case "up-right":
                        return eK.scalarMult(this.getTileSize(), .5)
                    }
                return this.getTileSize()
            }
            getTileSize() {
                return new tk(this.getTileWidth(),this.getTileHeight())
            }
            isIsometric() {
                return this.tilemap.orientation == Phaser.Tilemaps.Orientation.ISOMETRIC.toString()
            }
            isLayerAlwaysOnTop(e) {
                return this.hasLayerProp(e, t.ALWAYS_TOP_PROP_NAME)
            }
            isCharLayer(e) {
                return this.hasLayerProp(e, t.CHAR_LAYER_PROP_NAME)
            }
            setLayerDepths() {
                let e = []
                  , i = -1
                  , r = this.tilemap.layers.filter(t=>this.isLayerAlwaysOnTop(t));
                this.tilemap.layers.filter(t=>!this.isLayerAlwaysOnTop(t)).forEach(r=>{
                    this.hasLayerProp(r, t.HEIGHT_SHIFT_PROP_NAME) ? (this.createHeightShiftLayers(r, i),
                    e.push(r.tilemapLayer)) : this.setDepth(r, ++i)
                }
                ),
                this.charLayerDepths.set(void 0, i),
                r.forEach((t,e)=>{
                    t.tilemapLayer.setDepth(e + 1 + i)
                }
                ),
                e.forEach(t=>t.destroy())
            }
            setDepth(e, i) {
                e.tilemapLayer.setDepth(i),
                this.isCharLayer(e) && this.charLayerDepths.set(this.getLayerProp(e, t.CHAR_LAYER_PROP_NAME), i)
            }
            createHeightShiftLayers(e, i) {
                let r = this.getLayerProp(e, t.HEIGHT_SHIFT_PROP_NAME);
                isNaN(r) && (r = 0);
                for (let n = 0; n < e.height; n++) {
                    let o = this.copyLayer(e, n);
                    if (o) {
                        o.scale = e.tilemapLayer.scale;
                        let s = this.isIsometric() ? this.getTileHeight() / 2 : this.getTileHeight();
                        o.setDepth(i + eV.shiftPad((n + r) * s + 1, t.Z_INDEX_PADDING))
                    }
                }
            }
            getLayerProp(t, e) {
                let i = t.properties.find(t=>t.name == e);
                return null == i ? void 0 : i.value
            }
            hasLayerProp(t, e) {
                return null != this.getLayerProp(t, e)
            }
            copyLayer(t, e) {
                let i = `${t.name}#${e}`
                  , r = this.tilemap.createBlankLayer(i, t.tilemapLayer.tileset);
                if (r) {
                    if (r.name = i,
                    this.isIsometric())
                        for (let i = e; i >= 0; i--) {
                            let n = e - i;
                            r.putTileAt(t.data[i][n], n, i)
                        }
                    else
                        for (let i = 0; i < t.width; i++)
                            r.putTileAt(t.data[e][i], i, e);
                    return r
                }
            }
        }
        ;
        eX.ALWAYS_TOP_PROP_NAME = "ge_alwaysTop",
        eX.CHAR_LAYER_PROP_NAME = "ge_charLayer",
        eX.HEIGHT_SHIFT_PROP_NAME = "ge_heightShift",
        eX.Z_INDEX_PADDING = 7;
        var eY = class {
            constructor(t, e, i, r, n) {
                var o, s;
                this.charData = t,
                this.scene = e,
                this.tilemap = i,
                this.geHeadless = n,
                this.customOffset = new tk(0,0),
                this.cachedContainerHeight = 0,
                this.newSpriteSet$ = new ev,
                this.destroy$ = new ev,
                this.layerOverlaySprite = r && t.sprite ? this.scene.add.sprite(0, 0, t.sprite.texture) : void 0,
                this.walkingAnimationMapping = t.walkingAnimationMapping,
                this.customOffset = new tk(t.offsetX || 0,t.offsetY || 0),
                this.sprite = t.sprite,
                this.container = t.container,
                this.cachedContainerHeight = null != (s = null == (o = t.container) ? void 0 : o.getBounds().height) ? s : 0,
                this.geHeadless.directionChanged().pipe(eH(({charId: t})=>t === this.charData.id)).subscribe(({direction: t})=>{
                    var e;
                    null == (e = this.animation) || e.setStandingFrame(t)
                }
                ),
                this.sprite && (this.sprite.setOrigin(0, 0),
                this.resetAnimation(this.sprite),
                this.updateOverlaySprite(),
                this.updateGridChar())
            }
            destroy() {
                this.destroy$.next(),
                this.destroy$.complete(),
                this.newSpriteSet$.complete()
            }
            setSprite(t) {
                t ? (this.sprite && (t.x = this.sprite.x,
                t.y = this.sprite.y),
                this.sprite = t,
                this.newSpriteSet$.next(),
                this.layerOverlaySprite = this.layerOverlaySprite ? this.scene.add.sprite(0, 0, this.sprite.texture) : void 0,
                this.updateOverlaySprite(),
                this.resetAnimation(this.sprite),
                this.updateDepth()) : (this.layerOverlaySprite = void 0,
                this.sprite = void 0)
            }
            getSprite() {
                return this.sprite
            }
            getLayerOverlaySprite() {
                return this.layerOverlaySprite
            }
            setContainer(t) {
                var e;
                this.container = t,
                this.cachedContainerHeight = null != (e = null == t ? void 0 : t.getBounds().height) ? e : 0
            }
            getContainer() {
                return this.container
            }
            getOffsetX() {
                return this.customOffset.x
            }
            setOffsetX(t) {
                this.customOffset.x = t
            }
            getOffsetY() {
                return this.customOffset.y
            }
            setOffsetY(t) {
                this.customOffset.y = t
            }
            getWalkingAnimationMapping() {
                return this.walkingAnimationMapping
            }
            turnTowards(t) {
                var e;
                this.geHeadless.isMoving(this.charData.id) || "none" != t && (this.geHeadless.turnTowards(this.charData.id, t),
                null == (e = this.animation) || e.setStandingFrame(t))
            }
            getAnimation() {
                return this.animation
            }
            setAnimation(t) {
                this.animation = t
            }
            update(t) {
                this.updateGridChar()
            }
            getEngineOffset() {
                var t, e, i, r;
                return this.sprite ? new tk(this.tilemap.getTileWidth() / 2 - Math.floor((null != (e = null == (t = this.sprite) ? void 0 : t.displayWidth) ? e : 0) / 2),-(null != (r = null == (i = this.sprite) ? void 0 : i.displayHeight) ? r : 0) + this.tilemap.getTileHeight()) : tk.ZERO
            }
            updatePixelPos() {
                let t = new tk(this.geHeadless.getPosition(this.charData.id))
                  , e = this.geHeadless.getMovementProgress(this.charData.id) / 1e3
                  , i = this.tilemap.tilePosToPixelPos(t).add(this.getEngineOffset()).add(this.customOffset).add(tz[this.geHeadless.getFacingDirection(this.charData.id)].multiply(this.tilemap.getTileDistance(this.geHeadless.getFacingDirection(this.charData.id)).scalarMult(e)))
                  , r = this.getGameObj();
                r && (r.x = Math.floor(i.x),
                r.y = Math.floor(i.y))
            }
            getGameObj() {
                return this.container || this.sprite
            }
            updateGridChar() {
                var t;
                if (this.updatePixelPos(),
                this.sprite && this.geHeadless.isMoving(this.charData.id)) {
                    let e = this.geHeadless.getMovementProgress(this.charData.id) > 500;
                    null == (t = this.getAnimation()) || t.updateCharacterFrame(this.geHeadless.getFacingDirection(this.charData.id), e, Number(this.sprite.frame.name))
                }
                this.updateDepth()
            }
            resetAnimation(t) {
                let e = new eq(this.walkingAnimationMapping,t.texture.source[0].width / t.width / eq.FRAMES_CHAR_ROW);
                this.setAnimation(e),
                e.frameChange().pipe(eG(this.newSpriteSet$)).subscribe(e=>{
                    null == t || t.setFrame(e)
                }
                ),
                e.setIsEnabled(void 0 !== this.walkingAnimationMapping),
                e.setStandingFrame(this.geHeadless.getFacingDirection(this.charData.id))
            }
            updateOverlaySprite() {
                if (!this.layerOverlaySprite || !this.sprite)
                    return;
                this.layerOverlaySprite.scale = this.sprite.scale;
                let t = this.tilemap.getTileHeight() / this.layerOverlaySprite.scale;
                this.layerOverlaySprite.setCrop(0, 0, this.layerOverlaySprite.displayWidth, this.sprite.height - t),
                this.layerOverlaySprite.setOrigin(0, 0)
            }
            updateDepth() {
                if (!this.getGameObj())
                    return;
                let t = new tk(this.geHeadless.getPosition(this.charData.id))
                  , e = this.geHeadless.getCharLayer(this.charData.id);
                this.container ? this.setContainerDepth(this.container, {
                    position: t,
                    layer: e
                }) : this.sprite && this.setSpriteDepth(this.sprite, {
                    position: t,
                    layer: e
                });
                let i = this.getLayerOverlaySprite();
                if (i) {
                    let r = new tk(x(P({}, t), {
                        y: t.y - 1
                    }));
                    this.setSpriteDepth(i, {
                        position: r,
                        layer: e
                    })
                }
            }
            setSpriteDepth(t, e) {
                t.setDepth(this.tilemap.getDepthOfCharLayer(this.getTransitionLayer(e)) + this.getPaddedPixelDepthSprite(t))
            }
            setContainerDepth(t, e) {
                t.setDepth(this.tilemap.getDepthOfCharLayer(this.getTransitionLayer(e)) + this.getPaddedPixelDepthContainer(t))
            }
            getPaddedPixelDepthContainer(t) {
                return eV.shiftPad(t.y + this.cachedContainerHeight, eX.Z_INDEX_PADDING)
            }
            getPaddedPixelDepthSprite(t) {
                return eV.shiftPad(t.y + t.displayHeight, eX.Z_INDEX_PADDING)
            }
            getTransitionLayer(t) {
                if (t.layer)
                    return this.geHeadless.getTransition(t.position, t.layer) || t.layer
            }
        }
          , eJ = ((o = eJ || {}).DONT_BLOCK = "DONT_BLOCK",
        o.BLOCK_TWO_TILES = "BLOCK_TWO_TILES",
        o.BLOCK_ONE_TILE_AHEAD = "BLOCK_ONE_TILE_AHEAD",
        o.BLOCK_ONE_TILE_BEHIND = "BLOCK_ONE_TILE_BEHIND",
        o)
          , eZ = ((s = eZ || {}).STOP = "STOP",
        s.CLOSEST_REACHABLE = "CLOSEST_REACHABLE",
        s.RETRY = "RETRY",
        s.ALTERNATIVE_TARGETS = "ALTERNATIVE_TARGETS",
        s)
          , eQ = class {
            distance(t, e) {
                return eK.manhattanDistance(t, e)
            }
            direction(t, e) {
                if (eK.equal(t, e))
                    return "none";
                let i = t.clone().subtract(e);
                return Math.abs(i.x) > Math.abs(i.y) ? i.x > 0 ? "left" : "right" : i.y > 0 ? "up" : "down"
            }
            neighbors(t) {
                return [new tk(t.x,t.y + 1), new tk(t.x + 1,t.y), new tk(t.x - 1,t.y), new tk(t.x,t.y - 1)]
            }
            getDirections() {
                return ["up", "right", "down", "left"]
            }
        }
          , e0 = class {
            distance(t, e) {
                return eK.chebyshevDistance(t, e)
            }
            neighbors(t) {
                return [new tk(t.x,t.y + 1), new tk(t.x + 1,t.y), new tk(t.x - 1,t.y), new tk(t.x,t.y - 1), new tk(t.x + 1,t.y + 1), new tk(t.x + 1,t.y - 1), new tk(t.x - 1,t.y + 1), new tk(t.x - 1,t.y - 1)]
            }
            direction(t, e) {
                return e.x > t.x ? e.y > t.y ? "down-right" : e.y < t.y ? "up-right" : "right" : e.x < t.x ? e.y > t.y ? "down-left" : e.y < t.y ? "up-left" : "left" : e.y < t.y ? "up" : e.y > t.y ? "down" : "none"
            }
            getDirections() {
                return ["up", "right", "down", "left", "down-left", "down-right", "up-right", "up-left"]
            }
        }
          , e1 = class {
            static create(t) {
                switch (t) {
                case 4:
                    return new eQ;
                case 8:
                    return new e0
                }
            }
        }
          , e2 = class {
            constructor(t, e, i) {
                this.backoffMs = t,
                this.maxRetries = e,
                this.onFinished = i,
                this.retries = 0,
                this.elapsed = 0
            }
            retry(t, e) {
                this.shouldRetry() ? (this.elapsed += t,
                this.elapsed >= this.backoffMs && (this.elapsed = 0,
                this.retries++,
                e())) : this.onFinished()
            }
            reset() {
                this.retries = 0,
                this.elapsed = 0
            }
            getMaxRetries() {
                return this.maxRetries
            }
            getBackoffMs() {
                return this.backoffMs
            }
            shouldRetry() {
                return -1 === this.maxRetries || this.retries < this.maxRetries
            }
        }
          , e3 = ((a = e3 || {}).WAIT = "WAIT",
        a.RETRY = "RETRY",
        a.STOP = "STOP",
        a)
          , e4 = class {
            constructor(t, {shortestPathAlgorithm: e="BFS", pathWidth: i=1, pathHeight: r=1, numberOfDirections: n=4, isPositionAllowed: o=(t,e)=>!0, collisionGroups: s=[], ignoredChars: a=[], ignoreTiles: h=!1, ignoreMapBounds: u=!1, ignoreBlockedTarget: l=!1, maxPathLength: c=1 / 0, ignoreLayers: p=!1, considerCosts: f=!1, calculateClosestToTarget: d=!0}={}) {
                this.gridTilemap = t,
                this.options = {
                    shortestPathAlgorithm: e,
                    pathWidth: i,
                    pathHeight: r,
                    numberOfDirections: n,
                    isPositionAllowed: o,
                    collisionGroups: s,
                    ignoredChars: a,
                    ignoreTiles: h,
                    ignoreMapBounds: u,
                    ignoreBlockedTarget: l,
                    maxPathLength: c,
                    ignoreLayers: p,
                    considerCosts: f,
                    calculateClosestToTarget: d
                },
                this.ignoredCharsSet = new Set(a)
            }
            findShortestPath(t, e) {
                this.options.ignoreLayers && (this.gridTilemap.fixCacheLayer(t.layer),
                e.layer = t.layer);
                let i = this.findShortestPathImpl(t, e);
                return this.gridTilemap.unfixCacheLayers(),
                i
            }
            getNeighbors(t, e) {
                var i;
                return e1.create(null != (i = this.options.numberOfDirections) ? i : 4).neighbors(t.position).map(e=>{
                    let i = t.layer;
                    return this.options.ignoreLayers || (i = this.gridTilemap.getTransition(e, t.layer)),
                    {
                        position: e,
                        layer: i || t.layer
                    }
                }
                ).filter(i=>!this.isBlocking(t, i) || this.options.ignoreBlockedTarget && tA.equal(i, e))
            }
            getTransition(t, e) {
                if (!this.options.ignoreLayers)
                    return this.gridTilemap.getTransition(t, e)
            }
            getCosts(t, e) {
                if (!this.options.considerCosts)
                    return 1;
                let i = tB(e.position, t);
                return this.gridTilemap.getTileCosts(e, i)
            }
            isBlocking(t, e) {
                return !!(!(this.options.ignoreMapBounds || this.gridTilemap.isInRange(e.position)) || !this.options.isPositionAllowed(e.position, e.layer) || !this.options.ignoreTiles && this.hasBlockingTileFrom(t, e, this.options.pathWidth, this.options.pathHeight, this.options.ignoreMapBounds, this.gridTilemap)) || this.hasBlockingCharFrom(t, e, this.options.pathWidth, this.options.pathHeight, this.options.collisionGroups, this.ignoredCharsSet, this.gridTilemap)
            }
            distance(t, e) {
                return (4 === this.options.numberOfDirections ? eK.manhattanDistance : eK.chebyshevDistance)(t, e)
            }
            getTilePosInDir(t, e) {
                return this.options.ignoreLayers ? {
                    position: t.position.add(tz[this.gridTilemap.toMapDirection(e)]),
                    layer: t.layer
                } : this.gridTilemap.getTilePosInDirection(t, e)
            }
            getReverseNeighbors(t, e) {
                var i;
                let r = e1.create(null != (i = this.options.numberOfDirections) ? i : 4).neighbors(t.position), n;
                if (!this.options.ignoreLayers) {
                    let e = this.gridTilemap.getReverseTransitions(t.position, t.layer);
                    n = e ? [...e] : void 0
                }
                return r.map(e=>n ? n.map(i=>({
                    position: e,
                    layer: i || t.layer
                })) : [{
                    position: e,
                    layer: t.layer
                }]).flat().filter(i=>!this.isBlocking(i, t) || this.options.ignoreBlockedTarget && tA.equal(t, e))
            }
            hasBlockingCharFrom(t, e, i, r, n, o, s) {
                if (1 === i && 1 === r)
                    return s.hasBlockingChar(e.position, e.layer, n, o);
                let a = tB(t.position, e.position);
                return this.isBlockingMultiTile(t, a, i, r, t=>s.hasBlockingChar(t, e.layer, n, o))
            }
            hasBlockingTileFrom(t, e, i, r, n, o) {
                if (1 === i && 1 === r)
                    return o.hasBlockingTile(e.position, e.layer, tB(e.position, t.position), n);
                let s = tB(t.position, e.position);
                return this.isBlockingMultiTile(t, s, i, r, t=>o.hasBlockingTile(t, e.layer, s, n))
            }
            isBlockingMultiTile(t, e, i, r, n) {
                let o = {
                    src: new tk(t.position.x + i,t.position.y),
                    dest: new tk(t.position.x + i,t.position.y + r - 1)
                }
                  , s = {
                    src: new tk(t.position.x - 1,t.position.y),
                    dest: new tk(t.position.x - 1,t.position.y + r - 1)
                }
                  , a = {
                    src: new tk(t.position.x,t.position.y - 1),
                    dest: new tk(t.position.x + i - 1,t.position.y - 1)
                }
                  , h = {
                    src: new tk(t.position.x,t.position.y + r),
                    dest: new tk(t.position.x + i - 1,t.position.y + r)
                };
                switch (e) {
                case "right":
                    return this.checkLine(o, n);
                case "left":
                    return this.checkLine(s, n);
                case "up":
                    return this.checkLine(a, n);
                case "down":
                    return this.checkLine(h, n);
                case "up-left":
                    return this.checkLine({
                        src: a.src,
                        dest: new tk(a.dest.x - 1,a.dest.y)
                    }, n) || this.checkLine({
                        src: new tk(s.src.x,s.src.y - 1),
                        dest: new tk(s.dest.x,s.dest.y - 1)
                    }, n);
                case "up-right":
                    return this.checkLine({
                        src: new tk(a.src.x + 1,a.src.y),
                        dest: a.dest
                    }, n) || this.checkLine({
                        src: new tk(o.src.x,o.src.y - 1),
                        dest: new tk(o.dest.x,o.dest.y - 1)
                    }, n);
                case "down-left":
                    return this.checkLine({
                        src: new tk(s.src.x,s.src.y + 1),
                        dest: new tk(s.dest.x,s.dest.y + 1)
                    }, n) || this.checkLine({
                        src: h.src,
                        dest: new tk(h.dest.x - 1,h.dest.y)
                    }, n);
                case "down-right":
                    return this.checkLine({
                        src: new tk(h.src.x + 1,h.src.y),
                        dest: h.dest
                    }, n) || this.checkLine({
                        src: new tk(o.src.x,o.src.y + 1),
                        dest: new tk(o.dest.x,o.dest.y + 1)
                    }, n)
                }
                return !1
            }
            checkLine(t, e) {
                for (let i = t.src.x; i <= t.dest.x; i++)
                    for (let r = t.src.y; r <= t.dest.y; r++)
                        if (e(new tk(i,r)))
                            return !0;
                return !1
            }
        }
          , e9 = A(M(), 1)
          , e5 = class extends e4 {
            findShortestPathImpl(t, e) {
                let i = this.shortestPathBfs(t, e);
                return {
                    path: this.returnPath(i.previous, t, e),
                    closestToTarget: i.closestToTarget,
                    steps: i.steps,
                    maxPathLengthReached: i.maxPathLengthReached,
                    algorithmUsed: "A_STAR"
                }
            }
            shortestPathBfs(t, e) {
                let i = new Map
                  , r = new Map
                  , n = new Map
                  , o = new e9.MinFibonacciHeap((t,e)=>e6(n, t) - e6(n, e))
                  , s = t
                  , a = this.distance(t.position, e.position)
                  , h = 0;
                for (o.push(t),
                r.set(tA.toString(t), 0),
                n.set(tA.toString(t), this.distance(t.position, e.position)); o.size > 0; ) {
                    let t = o.pop();
                    if (!t)
                        break;
                    h++;
                    let u = this.distance(t.position, e.position);
                    if (u < a && (a = u,
                    s = t),
                    e8(t, e))
                        break;
                    if (e6(r, t) + 1 > this.options.maxPathLength)
                        return {
                            previous: new Map,
                            closestToTarget: s,
                            steps: h,
                            maxPathLengthReached: !0
                        };
                    for (let s of this.getNeighbors(t, e)) {
                        let a = e6(r, t) + this.getCosts(t.position, s)
                          , h = tA.toString(s);
                        (!r.has(h) || a < e6(r, s)) && (i.set(h, t),
                        r.set(h, a),
                        n.set(h, a + this.distance(s.position, e.position)),
                        o.push(s))
                    }
                }
                return {
                    previous: i,
                    closestToTarget: s,
                    steps: h,
                    maxPathLengthReached: !1
                }
            }
            returnPath(t, e, i) {
                let r = []
                  , n = i;
                for (r.push(n); !e8(n, e); ) {
                    if (!(n = t.get(tA.toString(n))))
                        return [];
                    r.push(n)
                }
                return r.reverse()
            }
        }
        ;
        function e6(t, e) {
            var i;
            return null != (i = t.get(tA.toString(e))) ? i : Number.MAX_VALUE
        }
        function e8(t, e) {
            return !!eK.equal(t.position, e.position) && t.layer === e.layer
        }
        var e7 = class {
            constructor(t) {
                this.data = t
            }
        }
          , it = class {
            constructor() {
                this.sizeInternal = 0
            }
            dequeue() {
                if (void 0 === this.tail)
                    return;
                this.sizeInternal--;
                let t = this.tail.data;
                return void 0 === this.tail.prev ? (this.tail = void 0,
                this.head = void 0) : (this.tail.prev.next = void 0,
                this.tail = this.tail.prev),
                t
            }
            enqueue(t) {
                if (this.sizeInternal++,
                void 0 === this.head) {
                    this.head = new e7(t),
                    this.tail = this.head;
                    return
                }
                let e = new e7(t);
                e.next = this.head,
                this.head.prev = e,
                this.head = e
            }
            peek() {
                return this.tail ? this.tail.data : void 0
            }
            peekAll() {
                let t = []
                  , e = this.tail;
                for (; e; )
                    t.push(e.data),
                    e = e.prev;
                return t
            }
            clear() {
                this.head = void 0,
                this.tail = void 0,
                this.sizeInternal = 0
            }
            peekEnd() {
                var t;
                return null == (t = this.head) ? void 0 : t.data
            }
            size() {
                return this.sizeInternal
            }
        }
          , ie = class extends e4 {
            findShortestPathImpl(t, e) {
                let i = this.shortestPathBfs(t, e);
                return {
                    path: this.returnPath(i.previous, t, e),
                    closestToTarget: i.closestToTarget,
                    steps: i.steps,
                    maxPathLengthReached: i.maxPathLengthReached,
                    algorithmUsed: "BFS"
                }
            }
            equal(t, e) {
                return !!eK.equal(t.position, e.position) && t.layer === e.layer
            }
            shortestPathBfs(t, e) {
                let i = new Map
                  , r = new Set
                  , n = new it
                  , o = t
                  , s = this.distance(t.position, e.position)
                  , a = 0;
                for (n.enqueue({
                    node: t,
                    dist: 0
                }),
                r.add(tA.toString(t)); n.size() > 0; ) {
                    let t = n.dequeue();
                    if (a++,
                    !t)
                        break;
                    let {node: h, dist: u} = t;
                    if (u > this.options.maxPathLength)
                        return {
                            previous: new Map,
                            closestToTarget: o,
                            steps: a,
                            maxPathLengthReached: !0
                        };
                    let l = this.distance(h.position, e.position);
                    if (l < s && (s = l,
                    o = h),
                    this.equal(h, e))
                        break;
                    for (let t of this.getNeighbors(h, e))
                        r.has(tA.toString(t)) || (i.set(tA.toString(t), h),
                        n.enqueue({
                            node: t,
                            dist: u + 1
                        }),
                        r.add(tA.toString(t)))
                }
                return {
                    previous: i,
                    closestToTarget: o,
                    steps: a,
                    maxPathLengthReached: !1
                }
            }
            returnPath(t, e, i) {
                let r = []
                  , n = i;
                for (r.push(n); !this.equal(n, e); ) {
                    if (!(n = t.get(tA.toString(n))))
                        return [];
                    r.push(n)
                }
                return r.reverse()
            }
        }
          , ii = class {
            constructor() {
                this.previous = new Map,
                this.visited = new Map,
                this.queue = new it,
                this.minMatching = 1 / 0,
                this.lastDist = 0
            }
            isNewFrontier() {
                let t = this.queue.peek();
                return !!(t && t.dist > this.lastDist)
            }
            step(t, e, i) {
                var r;
                for (let n of (this.lastDist = i,
                t)) {
                    let t = tA.toString(n);
                    if (!this.visited.has(t)) {
                        this.previous.set(t, e),
                        this.queue.enqueue({
                            node: n,
                            dist: i + 1
                        }),
                        this.visited.set(t, i + 1);
                        let o = null == (r = this.otherBfs) ? void 0 : r.visited.get(t);
                        void 0 !== o && o < this.minMatching && (this.minMatching = o,
                        this.minMatchingNode = n)
                    }
                }
            }
        }
          , ir = class extends e4 {
            findShortestPathImpl(t, e) {
                let i = this.shortestPathBfs(t, e);
                return {
                    path: this.returnPath(i.previous, i.previous2, i.matchingPos, t, e),
                    closestToTarget: i.closestToTarget,
                    steps: i.steps,
                    maxPathLengthReached: i.maxPathLengthReached,
                    algorithmUsed: "BIDIRECTIONAL_SEARCH"
                }
            }
            equal(t, e) {
                return !!eK.equal(t.position, e.position) && t.layer === e.layer
            }
            shortestPathBfs(t, e) {
                var i;
                if (tA.equal(t, e))
                    return {
                        previous: new Map,
                        previous2: new Map,
                        closestToTarget: t,
                        steps: 0,
                        maxPathLengthReached: !1
                    };
                let r = new ii
                  , n = new ii
                  , o = 0;
                r.otherBfs = n,
                n.otherBfs = r;
                let s = t
                  , a = this.distance(t.position, e.position);
                for (r.queue.enqueue({
                    node: t,
                    dist: 0
                }),
                n.queue.enqueue({
                    node: e,
                    dist: 0
                }),
                r.visited.set(tA.toString(t), 0),
                n.visited.set(tA.toString(e), 0); this.shouldStop(r.queue.size() > 0, n.queue.size() > 0); ) {
                    let t = r.queue.dequeue();
                    if (!t)
                        break;
                    let {node: h, dist: u} = t;
                    if (u + 1 + ((null == (i = n.queue.peek()) ? void 0 : i.dist) || 0) > this.options.maxPathLength)
                        return {
                            previous: r.previous,
                            previous2: n.previous,
                            closestToTarget: this.maybeClosestToTarget(s),
                            steps: o,
                            maxPathLengthReached: !0
                        };
                    let l = this.distance(h.position, e.position);
                    if (l < a && (a = l,
                    s = h),
                    o++,
                    r.step(this.getNeighbors(h, e), h, u),
                    r.isNewFrontier() && r.minMatchingNode)
                        return {
                            previous: r.previous,
                            previous2: n.previous,
                            closestToTarget: this.maybeClosestToTarget(e),
                            matchingPos: r.minMatchingNode,
                            steps: o,
                            maxPathLengthReached: !1
                        };
                    let c = n.queue.dequeue();
                    if (!c)
                        continue;
                    let {node: p, dist: f} = c;
                    if (o++,
                    n.step(this.getReverseNeighbors(p, e), p, f),
                    n.isNewFrontier() && n.minMatchingNode)
                        return {
                            previous: r.previous,
                            previous2: n.previous,
                            closestToTarget: this.maybeClosestToTarget(e),
                            matchingPos: n.minMatchingNode,
                            steps: o,
                            maxPathLengthReached: !1
                        }
                }
                return {
                    previous: r.previous,
                    previous2: n.previous,
                    closestToTarget: this.maybeClosestToTarget(s),
                    steps: o,
                    maxPathLengthReached: !1
                }
            }
            shouldStop(t, e) {
                return this.options.calculateClosestToTarget ? t || e : t && e
            }
            maybeClosestToTarget(t) {
                return this.options.calculateClosestToTarget ? t : void 0
            }
            returnPath(t, e, i, r, n) {
                if (!i)
                    return this.getPathFromPrev(t, r, n).reverse();
                {
                    let o = this.getPathFromPrev(t, r, i).reverse()
                      , s = this.getPathFromPrev(e, n, i);
                    return o.pop(),
                    [...o, ...s]
                }
            }
            getPathFromPrev(t, e, i) {
                let r = []
                  , n = i;
                for (r.push(n); !this.equal(n, e); ) {
                    if (!(n = t.get(tA.toString(n))))
                        return [];
                    r.push(n)
                }
                return r
            }
        }
          , io = A(tC(), 1)
          , is = class extends e4 {
            constructor(t, e={}) {
                super(t, e),
                this.openSet = new io.MinFibonacciHeap,
                this.g = new Map,
                this.f = new Map,
                this.closestToTarget = {
                    position: new tk(0,0),
                    layer: void 0
                },
                this.smallestDistToTarget = 0,
                this.steps = 0,
                this.visits = [],
                this.maxFrontierSize = 0,
                this.maxJumpSize = 0
            }
            findShortestPathImpl(t, e) {
                this.maxJumpSize = this.distance(t.position, e.position);
                let i = this.shortestPath(t, e);
                return {
                    path: this.returnPath(i.previous, t, e),
                    closestToTarget: i.closestToTarget,
                    steps: i.steps,
                    maxPathLengthReached: i.maxPathLengthReached,
                    algorithmUsed: "JPS"
                }
            }
            shortestPath(t, e) {
                this.steps = 0;
                let i = new Map;
                this.g = new Map,
                this.f = new Map,
                this.closestToTarget = t,
                this.smallestDistToTarget = this.distance(t.position, e.position),
                this.openSet = new io.MinFibonacciHeap((t,e)=>ia(this.f, t) - ia(this.f, e)),
                this.openSet.push(t);
                let r = tA.toString(t);
                for (this.g.set(r, 0),
                this.f.set(r, this.distance(t.position, e.position)),
                this.maxFrontierSize = Math.max(this.maxFrontierSize, this.openSet.size); this.openSet.size > 0; ) {
                    let t = this.openSet.pop();
                    if (!t)
                        break;
                    if (this.steps++,
                    tA.equal(t, e))
                        return {
                            previous: i,
                            closestToTarget: e,
                            steps: this.steps,
                            maxPathLengthReached: !1
                        };
                    if (ia(this.g, t) + 1 > this.options.maxPathLength)
                        return {
                            previous: new Map,
                            closestToTarget: this.closestToTarget,
                            steps: this.steps,
                            maxPathLengthReached: !0
                        };
                    for (let r of (this.updateClosestToTarget(t, e),
                    this.getNeighborsInternal(t, i.get(tA.toString(t)), e))) {
                        let n = tA.toString(r.p)
                          , o = ia(this.g, t) + r.dist;
                        (!this.g.has(n) || o < ia(this.g, r.p)) && (i.set(n, t),
                        this.g.set(n, o),
                        this.f.set(n, o + this.distance(r.p.position, e.position)),
                        this.openSet.push(r.p))
                    }
                }
                return {
                    previous: i,
                    closestToTarget: this.closestToTarget,
                    steps: this.steps,
                    maxPathLengthReached: !1
                }
            }
            updateClosestToTarget(t, e) {
                let i = this.distance(t.position, e.position);
                i < this.smallestDistToTarget && (this.smallestDistToTarget = i,
                this.closestToTarget = t)
            }
            addIfNotBlocked(t, e, i) {
                this.blockOrTrans(e, i) || t.push(i)
            }
            blockOrTrans(t, e) {
                return this.isBlocking(t, e) || void 0 !== this.getTransition(e.position, e.layer)
            }
            getNeighborsInternal(t, e, i) {
                if (!e || t.layer !== e.layer)
                    return this.getNeighbors(t, i).map(t=>({
                        p: t,
                        dist: 1
                    }));
                let r = this.prune(e, t).filter(e=>!this.isBlockingIgnoreTarget(t, e, i)).map(e=>{
                    let i = this.getTransition(e.position, t.layer);
                    return {
                        position: e.position,
                        layer: i || t.layer
                    }
                }
                )
                  , n = [];
                for (let e of r)
                    if (this.isHorizontal(t.position, e.position))
                        n.push({
                            p: e,
                            dist: 1
                        });
                    else {
                        let r = this.jump(t, e, i, 1, tB(t.position, e.position));
                        r && n.push(r)
                    }
                return n
            }
            isBlockingIgnoreTarget(t, e, i) {
                return this.isBlocking(t, e) && !(this.options.ignoreBlockedTarget && tA.equal(e, i))
            }
            jump(t, e, i, r, n) {
                if (!this.isBlockingIgnoreTarget(t, e, i))
                    return tA.equal(e, i) ? {
                        p: e,
                        dist: r
                    } : r >= this.maxJumpSize ? {
                        p: e,
                        dist: r
                    } : void 0 !== this.getTransition(e.position, t.layer) ? {
                        p: e,
                        dist: r
                    } : this.hasForced(t, e) ? {
                        p: e,
                        dist: r
                    } : (this.updateClosestToTarget(e, i),
                    this.jump(e, this.getTilePosInDir(e, n), i, r + 1, n))
            }
            isHorizontal(t, e) {
                return t.y === e.y
            }
            getForced(t, e, i, r, n, o) {
                let s = [];
                return (this.blockOrTrans(t, i) || this.blockOrTrans(i, r)) && this.addIfNotBlocked(s, e, r),
                (this.blockOrTrans(t, n) || this.blockOrTrans(n, o)) && this.addIfNotBlocked(s, e, o),
                s
            }
            hasForced(t, e) {
                let {topLeft: i, downLeft: r, top: n, bottom: o} = this.normalizedPositions(t, e);
                return !!((this.blockOrTrans(t, r) || this.blockOrTrans(r, o)) && !this.blockOrTrans(e, o) || (this.blockOrTrans(t, i) || this.blockOrTrans(i, n)) && !this.blockOrTrans(e, n))
            }
            prune(t, e) {
                let {right: i, top: r, bottom: n, downLeft: o, topLeft: s} = this.normalizedPositions(t, e);
                return this.isHorizontal(t.position, e.position) ? [i, r, n] : [i, ...this.getForced(t, e, o, n, s, r)]
            }
            normalizedPositions(t, e) {
                return t.position.x < e.position.x ? {
                    topLeft: {
                        position: new tk(e.position.x - 1,e.position.y - 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x - 1,e.position.y + 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    }
                } : t.position.x > e.position.x ? {
                    topLeft: {
                        position: new tk(e.position.x + 1,e.position.y + 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x + 1,e.position.y - 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    }
                } : t.position.y < e.position.y ? {
                    topLeft: {
                        position: new tk(e.position.x + 1,e.position.y - 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x - 1,e.position.y - 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    }
                } : {
                    topLeft: {
                        position: new tk(e.position.x - 1,e.position.y + 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x + 1,e.position.y + 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    }
                }
            }
            posInDir(t, e) {
                return {
                    position: t.position.add(tz[e]),
                    layer: t.layer
                }
            }
            returnPath(t, e, i) {
                let r = []
                  , n = i;
                for (r.push(n); !tA.equal(n, e); ) {
                    let e = t.get(tA.toString(n));
                    if (!e)
                        return [];
                    this.distance(e.position, n.position) > 1 ? this.fillPath(n, e, r) : r.push(e),
                    n = e
                }
                return r.reverse()
            }
            fillPath(t, e, i) {
                let r = t;
                do {
                    let t = tB(r.position, e.position);
                    r = this.getTilePosInDir(r, t),
                    i.push(r)
                } while (!eK.equal(r.position, e.position))
            }
        }
        ;
        function ia(t, e) {
            var i;
            return null != (i = t.get(tA.toString(e))) ? i : Number.MAX_VALUE
        }
        var ih = class {
            constructor(t, e, i, r={}) {
                this.character = t,
                this.gridTilemap = e,
                this.charToFollow = i;
                let n = {
                    distance: 0,
                    noPathFoundStrategy: "STOP",
                    maxPathLength: 1 / 0,
                    shortestPathAlgorithm: "BIDIRECTIONAL_SEARCH",
                    ignoreLayers: !1,
                    considerCosts: r.considerCosts || !1,
                    facingDirection: "none",
                    isPositionAllowedFn: ()=>!0,
                    ignoredChars: []
                };
                this.options = P(P({}, n), r),
                this.options.considerCosts && "A_STAR" !== this.options.shortestPathAlgorithm && console.warn(`GridEngine: Pathfinding option 'considerCosts' cannot be used with algorithm '${this.options.shortestPathAlgorithm}'. It can only be used with A* algorithm.`),
                "JPS" === this.options.shortestPathAlgorithm && (this.character.getTileWidth() > 1 || this.character.getTileHeight() > 1) && console.warn("GridEngine: Pathfinding algorithm 'JPS' can only be used for characters with 'tileWidth' and 'tileHeight' of 1"),
                this.character = t,
                this.updateTarget(this.charToFollow.getTilePos().position, this.charToFollow.getTilePos().layer),
                this.charToFollow.positionChangeStarted().pipe(eG(this.character.autoMovementSet().pipe(eH(t=>t !== this), eU(1)))).subscribe(({enterTile: t, enterLayer: e})=>{
                    this.updateTarget(t, e)
                }
                )
            }
            update(t) {
                var e;
                null == (e = this.targetMovement) || e.update(t)
            }
            getInfo() {
                return {
                    type: "Follow",
                    config: {
                        charToFollow: this.charToFollow.getId(),
                        distance: this.options.distance,
                        noPathFoundStrategy: this.options.noPathFoundStrategy,
                        maxPathLength: this.options.maxPathLength,
                        ignoreLayers: this.options.ignoreLayers,
                        facingDirection: this.options.facingDirection,
                        shortestPathAlgorithm: this.options.shortestPathAlgorithm,
                        considerCosts: this.options.considerCosts,
                        isPositionAllowedFn: this.options.isPositionAllowedFn,
                        ignoredChars: this.options.ignoredChars
                    }
                }
            }
            getFacingPos() {
                let t = tF("up", tM[this.options.facingDirection] + tM[this.charToFollow.getFacingDirection()])
                  , e = {
                    x: this.charToFollow.getTilePos().position.x,
                    y: this.charToFollow.getTilePos().position.y
                };
                return "right" === t ? e.x += this.charToFollow.getTileWidth() - 1 : "down" === t ? e.y += this.charToFollow.getTileWidth() - 1 : "down-left" === t ? e.y += this.charToFollow.getTileWidth() - 1 : "down-right" === t ? (e.y += this.charToFollow.getTileWidth() - 1,
                e.x += this.charToFollow.getTileWidth() - 1) : "up-right" === t && (e.x += this.charToFollow.getTileWidth() - 1),
                this.gridTilemap.getTilePosInDirection({
                    position: new tk(e),
                    layer: this.charToFollow.getTilePos().layer
                }, t).position
            }
            updateTarget(t, e) {
                let i = "none" !== this.options.facingDirection && 0 === this.options.distance;
                i && (t = this.getFacingPos()),
                this.targetMovement = new iO(this.character,this.gridTilemap,{
                    position: new tk(t),
                    layer: e
                },{
                    distance: i ? 0 : this.options.distance + 1,
                    config: {
                        algorithm: this.options.shortestPathAlgorithm,
                        noPathFoundStrategy: this.options.noPathFoundStrategy,
                        maxPathLength: this.options.maxPathLength,
                        ignoreLayers: this.options.ignoreLayers,
                        considerCosts: this.options.considerCosts,
                        ignoredChars: [this.charToFollow.getId(), ...this.options.ignoredChars],
                        isPositionAllowedFn: this.options.isPositionAllowedFn
                    }
                })
            }
        }
          , iu = class {
            static getRandomInt(t) {
                return Math.floor(Math.random() * Math.floor(t))
            }
        }
          , il = class {
            constructor(t, e=0, i=-1) {
                this.character = t,
                this.delay = e,
                this.radius = i,
                this.stepSize = 0,
                this.delayLeft = this.delay,
                this.initialRow = t.getNextTilePos().position.y,
                this.initialCol = t.getNextTilePos().position.x,
                this.randomizeStepSize(),
                this.stepsWalked = 0,
                this.currentMovementDirection = "none",
                this.character.positionChangeStarted().pipe(eG(this.character.autoMovementSet().pipe(eH(t=>t !== this), eU(1)))).subscribe(()=>{
                    this.stepsWalked++
                }
                ),
                this.distanceUtils = e1.create(t.getNumberOfDirections())
            }
            update(t) {
                if (this.shouldContinueWalkingCurrentDirection())
                    this.character.move(this.currentMovementDirection);
                else if (this.delayLeft -= t,
                this.delayLeft <= 0) {
                    this.delayLeft = this.delay;
                    let t = this.getFreeRandomDirection();
                    this.stepsWalked = 0,
                    this.character.move(t),
                    this.currentMovementDirection = t,
                    this.randomizeStepSize()
                }
            }
            getInfo() {
                return {
                    type: "Random",
                    config: {
                        delay: this.delay,
                        radius: this.radius
                    }
                }
            }
            shouldContinueWalkingCurrentDirection() {
                return this.stepsWalked < this.stepSize && "none" !== this.currentMovementDirection && !this.character.isBlockingDirection(this.currentMovementDirection) && this.isWithinRadius(this.currentMovementDirection)
            }
            getFreeDirections() {
                return this.distanceUtils.getDirections().filter(t=>!this.character.isBlockingDirection(t)).filter(t=>this.isWithinRadius(t))
            }
            isWithinRadius(t) {
                return -1 == this.radius || this.getDist(t) <= this.radius
            }
            getDist(t) {
                return this.distanceUtils.distance(this.character.getNextTilePos().position.add(tz[t]), new tk(this.initialCol,this.initialRow))
            }
            getFreeRandomDirection() {
                let t = this.getFreeDirections();
                return 0 == t.length ? "none" : t[iu.getRandomInt(t.length)]
            }
            randomizeStepSize() {
                this.stepSize = iu.getRandomInt(this.radius) + 1
            }
        }
          , ic = "2.45.0"
          , ip = class {
            constructor(t, e) {
                this.collistionStrategy = t,
                this.collisionGroupRelation = e,
                this.tilePosToCharacters = new id,
                this.charRemoved$ = new ev
            }
            isCharBlockingAt(t, e, i, r=new Set, n=new Set) {
                if (0 === i.length)
                    return !1;
                let o = this.tilePosToCharacters.get(t, e);
                return !!(o && o.size > 0 && [...o].filter(t=>!r.has(t.getId())).filter(t=>!this.doIntersect(t.getCollisionGroups(), n)).some(t=>i.some(e=>t.getCollisionGroups().some(t=>this.collidesWith(e, t)))))
            }
            doIntersect(t, e) {
                for (let i of t)
                    if (e.has(i))
                        return !0;
                return !1
            }
            collidesWith(t, e) {
                return this.collisionGroupRelation ? (this.collisionGroupRelation.get(t) || new Set).has(e) : t === e
            }
            getCharactersAt(t, e) {
                return this.tilePosToCharacters.get(t, e) || new Set
            }
            addCharacter(t) {
                this.addTilePositions(t.getTilePos(), t),
                this.addTilePositions(t.getNextTilePos(), t),
                this.addPositionChangeSub(t),
                this.addPositionChangeFinishedSub(t),
                this.addTilePosSetSub(t)
            }
            removeCharacter(t) {
                let e = t.getId();
                this.charRemoved$.next(e),
                this.deleteTilePositions(t.getTilePos(), t),
                this.deleteTilePositions(t.getNextTilePos(), t)
            }
            add(t, e, i) {
                let r = this.tilePosToCharacters.get(t, e);
                r || this.tilePosToCharacters.set(t, e, new Set([i])),
                null == r || r.add(i)
            }
            addTilePosSetSub(t) {
                t.tilePositionSet().pipe(eG(this.charRemoved(t.getId()))).subscribe(e=>{
                    this.deleteTilePositions(t.getNextTilePos(), t),
                    this.addTilePositions(e, t)
                }
                )
            }
            charRemoved(t) {
                var e;
                return null == (e = this.charRemoved$) ? void 0 : e.pipe(eU(1), eH(e=>e == t))
            }
            addPositionChangeSub(t) {
                t.positionChangeStarted().pipe(eG(this.charRemoved(t.getId())), this.posChangeToLayerPos()).subscribe(e=>{
                    "BLOCK_ONE_TILE_AHEAD" === this.collistionStrategy && this.deleteTilePositions(e.exit, t),
                    this.addTilePositions(e.enter, t)
                }
                )
            }
            addPositionChangeFinishedSub(t) {
                t.positionChangeFinished().pipe(eG(this.charRemoved(t.getId())), this.posChangeToLayerPos()).subscribe(e=>{
                    this.deleteTilePositions(e.exit, t),
                    this.addTilePositions(e.enter, t)
                }
                )
            }
            addTilePositions(t, e) {
                this.forEachCharTile(t, e, (i,r)=>{
                    this.add(new tk(i,r), t.layer, e)
                }
                )
            }
            deleteTilePositions(t, e) {
                this.forEachCharTile(t, e, (i,r)=>{
                    var n;
                    null == (n = this.tilePosToCharacters.get(new tk(i,r), t.layer)) || n.delete(e)
                }
                )
            }
            forEachCharTile(t, e, i) {
                let r = t.position;
                for (let t = r.x; t < r.x + e.getTileWidth(); t++)
                    for (let n = r.y; n < r.y + e.getTileHeight(); n++)
                        i(t, n)
            }
            posChangeToLayerPos() {
                return function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return el(t)
                }(eB(t=>({
                    enter: {
                        position: new tk(t.enterTile),
                        layer: t.enterLayer
                    },
                    exit: {
                        position: new tk(t.exitTile),
                        layer: t.exitLayer
                    }
                })))
            }
            posToString(t, e) {
                return `${t.x}#${t.y}#${e}`
            }
        }
          , id = class {
            constructor() {
                this.memo = new Map
            }
            set(t, e, i) {
                let r = this.memo.get(t.x);
                r || (r = new Map,
                this.memo.set(t.x, r));
                let n = r.get(t.y);
                n || (n = new Map,
                r.set(t.y, n)),
                n.set(e, i)
            }
            get(t, e) {
                let i = this.memo.get(t.x);
                if (!i)
                    return;
                let r = i.get(t.y);
                if (r)
                    return r.get(e)
            }
        }
          , iy = class {
            constructor(t, e, i, r) {
                this.x = t,
                this.y = e,
                this.width = i,
                this.height = r
            }
            getX() {
                return this.x
            }
            getY() {
                return this.y
            }
            getWidth() {
                return this.width
            }
            getHeight() {
                return this.height
            }
            isInRange(t) {
                return t.x >= this.x && t.x < this.x + this.width && t.y >= this.y && t.y < this.y + this.height
            }
        }
          , ig = "ge_charLayer"
          , iv = {
            none: 1,
            left: 2,
            "up-left": 3,
            up: 4,
            "up-right": 5,
            right: 6,
            "down-right": 7,
            down: 8,
            "down-left": 9
        }
          , im = class {
            constructor(t, e) {
                this.tilemap = t,
                this.gridTilemap = e,
                this.tileCollisionCache = new Map
            }
            fixLayer(t) {
                this.fixedLayer = this.tileCollisionCache.get(t)
            }
            unfixLayers() {
                this.fixedLayer = void 0
            }
            rebuild(t) {
                for (let e of (t || (t = new iy(0,0,this.tilemap.getWidth(),this.tilemap.getHeight())),
                [...this.tilemap.getLayers().filter(t=>t.isCharLayer()), void 0])) {
                    let i = this.tileCollisionCache.get(null == e ? void 0 : e.getName());
                    if (void 0 === i) {
                        i = Array(this.tilemap.getWidth());
                        for (let t = 0; t < this.tilemap.getWidth(); t++)
                            i[t] = Array(this.tilemap.getHeight());
                        this.tileCollisionCache.set(null == e ? void 0 : e.getName(), i)
                    }
                    for (let r = t.getY(); r < t.getY() + t.getHeight(); r++)
                        for (let n = t.getX(); n < t.getX() + t.getWidth(); n++) {
                            let t = 0;
                            for (let i of (this.gridTilemap.hasNoTileUncached(new tk(n,r), null == e ? void 0 : e.getName()) || (t |= 1),
                            tD()))
                                this.gridTilemap.hasBlockingTileUncached(new tk(n,r), null == e ? void 0 : e.getName(), i, !0) && (t |= 1 << iv[i]);
                            this.gridTilemap.hasBlockingTileUncached(new tk(n,r), null == e ? void 0 : e.getName(), void 0, !0) && (t |= 1 << iv[1]),
                            i[n][r] = t
                        }
                }
            }
            hasTileAt(t, e, i) {
                var r;
                let n = this.fixedLayer || this.tileCollisionCache.get(i)
                  , o = null == (r = null == n ? void 0 : n[t]) ? void 0 : r[e];
                if (void 0 !== o)
                    return (o >> 0 & 1) == 1
            }
            isBlockingFrom(t, e, i, r, n) {
                var o;
                let s = this.fixedLayer || this.tileCollisionCache.get(i)
                  , a = null == (o = null == s ? void 0 : s[t]) ? void 0 : o[e];
                if (void 0 !== a)
                    return !(n || (a >> 0 & 1) == 1) || (void 0 === r ? (a >> 1 & 1) == 1 : (a >> iv[r] & 1) == 1)
            }
        }
          , iw = "ge_cost"
          , ib = class t {
            constructor(e, i, r, n, o=!1) {
                for (let s of (this.tilemap = e,
                this.collisionTilePropertyName = i,
                this.useTileCollisionCache = o,
                this.characters = new Map,
                this.transitions = new Map,
                this.reverseTransitions = new Map,
                this.collidesPropNames = new Map,
                this.tileCostPropNames = new Map,
                this.collisionRelevantLayersFrameCache = new Map,
                this.charBlockCache = new ip(r,n),
                tD()))
                    this.collidesPropNames.set(s, t.ONE_WAY_COLLIDE_PROP_PREFIX + s),
                    this.tileCostPropNames.set(s, `${iw}_${s}`);
                this.useTileCollisionCache && (this.tileCollisionCache = new im(e,this),
                this.tileCollisionCache.rebuild())
            }
            fixCacheLayer(t) {
                var e;
                null == (e = this.tileCollisionCache) || e.fixLayer(t)
            }
            unfixCacheLayers() {
                var t;
                null == (t = this.tileCollisionCache) || t.unfixLayers()
            }
            addCharacter(t) {
                this.characters.set(t.getId(), t);
                let e = t.getNextTilePos().layer;
                void 0 === e ? t.setTilePosition(x(P({}, t.getNextTilePos()), {
                    layer: this.getLowestCharLayer()
                })) : this.getCharLayerNames().includes(e) || console.warn(`Char layer '${e}' of character '${t.getId()}' is unknown.`),
                this.charBlockCache.addCharacter(t)
            }
            removeCharacter(t) {
                let e = this.characters.get(t);
                e && (this.charBlockCache.removeCharacter(e),
                this.characters.delete(t))
            }
            getCharacters() {
                return [...this.characters.values()]
            }
            getCharactersAt(t, e) {
                return this.charBlockCache.getCharactersAt(t, e)
            }
            rebuildTileCollisionCache(t) {
                var e;
                null == (e = this.tileCollisionCache) || e.rebuild(t)
            }
            hasBlockingTileUncached(t, e, i, r) {
                if (!r && this.hasNoTileUncached(t, e))
                    return !0;
                for (let r of this.getCollisionRelevantLayers(e))
                    if (this.isLayerBlockingAt(r.getName(), t, i))
                        return !0;
                return !1
            }
            hasBlockingTile(t, e, i, r) {
                var n;
                let o = null == (n = this.tileCollisionCache) ? void 0 : n.isBlockingFrom(t.x, t.y, e, i, r);
                return void 0 !== o ? o : this.hasBlockingTileUncached(t, e, i, r)
            }
            getTransition(t, e) {
                let i = this.transitions.get(t.toString());
                if (i)
                    return i.get(e)
            }
            getReverseTransitions(t, e) {
                let i = this.reverseTransitions.get(t.toString());
                if (i)
                    return i.get(e)
            }
            setTransition(t, e, i) {
                var r, n, o, s, a;
                this.transitions.has(t.toString()) || this.transitions.set(t.toString(), new Map),
                this.reverseTransitions.has(t.toString()) || this.reverseTransitions.set(t.toString(), new Map),
                null == (r = this.transitions.get(t.toString())) || r.set(e, i),
                null != (n = this.reverseTransitions.get(t.toString())) && n.has(i) || null == (o = this.reverseTransitions.get(t.toString())) || o.set(i, new Set),
                null == (a = null == (s = this.reverseTransitions.get(t.toString())) ? void 0 : s.get(i)) || a.add(e)
            }
            getTransitions() {
                return new Map([...this.transitions].map(([t,e])=>[t, new Map(e)]))
            }
            getTileCosts(t, e) {
                let i = this.getCollisionRelevantLayers(t.layer)
                  , r = 1;
                for (let n of i)
                    r = Math.max(r, this.getTileCostsForLayer(x(P({}, t), {
                        layer: n.getName()
                    }), e));
                return r
            }
            getTileCostsForLayer(t, e) {
                let i = this.tilemap.getTileAt(t.position.x, t.position.y, t.layer);
                return e && (null == i ? void 0 : i.getProperty(this.tileCostPropNames.get(e) || "")) || (null == i ? void 0 : i.getProperty(iw)) || 1
            }
            hasNoTileUncached(t, e) {
                return !this.getCollisionRelevantLayers(e).some(e=>this.tilemap.hasTileAt(t.x, t.y, e.getName()))
            }
            hasNoTile(t, e) {
                var i;
                let r = null == (i = this.tileCollisionCache) ? void 0 : i.hasTileAt(t.x, t.y, e);
                return void 0 !== r ? r : this.hasNoTileUncached(t, e)
            }
            hasBlockingChar(t, e, i, r=new Set, n=new Set) {
                return this.charBlockCache.isCharBlockingAt(t, e, i, r, n)
            }
            isInRange(t) {
                return new iy(0,0,this.tilemap.getWidth(),this.tilemap.getHeight()).isInRange(t)
            }
            toMapDirection(t) {
                return this.isIsometric() ? function(t, e=1) {
                    return "none" === t ? "none" : tI[(tM[t] + 8 - Math.abs(e) % 8) % 8]
                }(t) : t
            }
            fromMapDirection(t) {
                return this.isIsometric() ? tF(t) : t
            }
            isIsometric() {
                return "isometric" === this.tilemap.getOrientation()
            }
            getTilePosInDirection(t, e) {
                let i = t.position.add(tz[this.toMapDirection(e)])
                  , r = this.getTransition(i, t.layer) || t.layer;
                return {
                    position: i,
                    layer: r
                }
            }
            invalidateFrameCache() {
                this.collisionRelevantLayersFrameCache.clear()
            }
            isLayerBlockingAt(t, e, i) {
                let r = this.tilemap.getTileAt(e.x, e.y, t);
                return !!r && !!(r.getProperty(this.collisionTilePropertyName) || i && r.getProperty(this.collidesPropNames.get(i) || ""))
            }
            getCharLayerIndexes() {
                return this.tilemap.getLayers().map((t,e)=>({
                    layer: t,
                    index: e
                })).filter(({layer: t})=>t.isCharLayer()).map(({index: t})=>t)
            }
            findPrevAndCharLayer(t) {
                let e = this.getCharLayerIndexes()
                  , i = this.tilemap.getLayers()
                  , r = e.findIndex(e=>i[e].getProperty(ig) == t);
                return 0 == r ? {
                    prevIndex: -1,
                    charLayerIndex: e[r]
                } : {
                    prevIndex: e[r - 1],
                    charLayerIndex: e[r]
                }
            }
            getCollisionRelevantLayers(t) {
                if (!t)
                    return this.tilemap.getLayers();
                let e = this.collisionRelevantLayersFrameCache.get(t);
                if (e)
                    return e;
                let {prevIndex: i, charLayerIndex: r} = this.findPrevAndCharLayer(t)
                  , n = this.tilemap.getLayers().slice(i + 1, r + 1);
                return this.collisionRelevantLayersFrameCache.set(t, n),
                n
            }
            getLowestCharLayer() {
                for (let t of this.tilemap.getLayers())
                    if (t.isCharLayer())
                        return t.getProperty(ig)
            }
            getCharLayerNames() {
                return this.tilemap.getLayers().filter(t=>t.isCharLayer()).map(t=>t.getProperty(ig)).filter(iT)
            }
        }
        ;
        function iT(t) {
            return null != t
        }
        ib.ONE_WAY_COLLIDE_PROP_PREFIX = "ge_collide_";
        var i_ = ((h = i_ || {}).REMOVED = "REMOVED",
        h.ADDED = "ADDED",
        h)
          , iS = ((u = iS || {}).WAIT = "WAIT",
        u.SKIP = "SKIP",
        u.STOP = "STOP",
        u)
          , iP = class {
            constructor(t, e) {
                this.character = t,
                this.tilemap = e,
                this.queue = new it,
                this.finished$ = new ev,
                this.pathBlockedWaitElapsed = 0,
                this.distanceUtils = e1.create(t.getNumberOfDirections()),
                this.character.autoMovementSet().pipe(eH(t=>t !== this), eU(1)).subscribe(()=>{
                    this.queue.size() > 0 && this.finishMovementTerminated(),
                    this.finished$.complete()
                }
                )
            }
            update(t) {
                (!this.character.isMoving() || this.character.willCrossTileBorderThisUpdate(t)) && this.queue.size() > 0 && this.moveCharOnPath(t)
            }
            getInfo() {
                return {
                    type: "Queue"
                }
            }
            enqueue(t, e={}) {
                var i, r, n;
                let o = {
                    pathBlockedStrategy: null != (i = e.pathBlockedStrategy) ? i : "STOP",
                    pathBlockedWaitTimeoutMs: (null == e ? void 0 : e.pathBlockedWaitTimeoutMs) || -1,
                    ignoreInvalidPositions: null != (r = e.ignoreInvalidPositions) && r,
                    skipInvalidPositions: null != (n = e.skipInvalidPositions) && n
                };
                for (let i of t) {
                    let t = {
                        command: i,
                        config: o
                    };
                    if (tj(i)) {
                        this.queue.enqueue(t);
                        continue
                    }
                    let r = this.queue.peekEnd()
                      , n = null == r ? void 0 : r.command;
                    if (n || (n = this.character.getNextTilePos()),
                    tj(n)) {
                        this.queue.enqueue(t);
                        continue
                    }
                    let s = 1 === this.distanceUtils.distance(n.position, i.position);
                    (!e.ignoreInvalidPositions || s) && this.queue.enqueue(t)
                }
            }
            peekAll() {
                return this.queue.peekAll()
            }
            size() {
                return this.queue.size()
            }
            finished() {
                return this.finished$
            }
            clear() {
                this.queue.clear()
            }
            moveCharOnPath(t) {
                let e = this.queue.peek();
                if (!e)
                    return;
                let i = e.command
                  , r = e.config;
                if (tj(i) && (i = this.tilemap.getTilePosInDirection(this.character.getNextTilePos(), i)),
                r.skipInvalidPositions) {
                    if (!(i = this.getNextValidPosition())) {
                        this.finishInvalidNextPos(i);
                        return
                    }
                } else if (!this.isNeighborPos(i)) {
                    this.finishInvalidNextPos(i);
                    return
                }
                if (this.character.isBlockingDirection(tB(this.character.getNextTilePos().position, i.position))) {
                    "STOP" === r.pathBlockedStrategy ? this.finishPathBlocked(i) : "SKIP" === r.pathBlockedStrategy ? (this.queue.dequeue(),
                    this.moveCharOnPath(t)) : "WAIT" === r.pathBlockedStrategy && r.pathBlockedWaitTimeoutMs > -1 && (this.pathBlockedWaitElapsed += t,
                    this.pathBlockedWaitElapsed >= r.pathBlockedWaitTimeoutMs && this.finishBlockedWaitTimeout(i, r.pathBlockedWaitTimeoutMs));
                    return
                }
                this.pathBlockedWaitElapsed = 0,
                this.queue.dequeue(),
                this.character.move(this.getDir(this.character.getNextTilePos().position, i.position)),
                this.isLastMovement() && this.finish("SUCCESS", "", i)
            }
            getNextValidPosition() {
                for (var t; this.queue.size() > 0; ) {
                    let e = null == (t = this.queue.peek()) ? void 0 : t.command;
                    if (tj(e) && (e = this.tilemap.getTilePosInDirection(this.character.getNextTilePos(), e)),
                    e && this.isNeighborPos(e))
                        return e;
                    this.queue.dequeue()
                }
            }
            isLastMovement() {
                return 0 === this.queue.size()
            }
            isNeighborPos(t) {
                let e = 1 === this.distanceUtils.distance(this.character.getNextTilePos().position, t.position)
                  , i = this.tilemap.getTransition(t.position, this.character.getNextTilePos().layer);
                if (this.character.getNextTilePos().layer !== t.layer)
                    return e && i === t.layer;
                let r = void 0 !== i && i !== t.layer;
                return e && !r
            }
            finishMovementTerminated() {
                this.finish("MOVEMENT_TERMINATED", "New automatic movement has been set to character.")
            }
            finishInvalidNextPos(t) {
                t ? this.finish("INVALID_NEXT_POS", `Position ${this.posToStr(t)} is not reachable from ${this.posToStr(this.character.getNextTilePos())}.`) : this.finish("INVALID_NEXT_POS", `No enqueued position is reachable from ${this.posToStr(this.character.getNextTilePos())}.`)
            }
            finishPathBlocked(t) {
                this.finish("PATH_BLOCKED", `Position ${this.posToStr(t)} is blocked.`)
            }
            finishBlockedWaitTimeout(t, e) {
                this.finish("PATH_BLOCKED_WAIT_TIMEOUT", `Position ${this.posToStr(t)} is blocked and the wait timeout of ${e} ms has been exceeded.`)
            }
            finish(t, e="", i=this.character.getNextTilePos()) {
                this.queue = new it,
                this.finished$.next({
                    position: i.position,
                    result: t,
                    description: e,
                    layer: i.layer
                })
            }
            getDir(t, e) {
                return this.tilemap.fromMapDirection(tB(t, e))
            }
            posToStr(t) {
                return `(${t.position.x}, ${t.position.y}, ${t.layer})`
            }
        }
          , ix = class {
            constructor(t=!0) {
                this.isCreatedInternal = !1,
                t && console.log(`Using GridEngine v${ic}`)
            }
            getCharLayer(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getTilePos().layer
            }
            getTransition(t, e) {
                var i;
                return this.initGuard(),
                null == (i = this.gridTilemap) ? void 0 : i.getTransition(new tk(t), e)
            }
            setTransition(t, e, i) {
                var r;
                return this.initGuard(),
                null == (r = this.gridTilemap) ? void 0 : r.setTransition(new tk(t), e, i)
            }
            create(t, e) {
                this.isCreatedInternal = !0,
                this.gridCharacters = new Map;
                let i = this.setConfigDefaults(e);
                this.config = i,
                this.movementStopped$ = new ev,
                this.movementStarted$ = new ev,
                this.directionChanged$ = new ev,
                this.positionChangeStarted$ = new ev,
                this.positionChangeFinished$ = new ev,
                this.queueMovementFinished$ = new ev,
                this.charRemoved$ = new ev,
                this.charAdded$ = new ev,
                this.gridTilemap = new ib(t,this.config.collisionTilePropertyName,this.config.characterCollisionStrategy,this.recordToMap(this.config.collisionGroupRelation),this.config.cacheTileCollisions),
                this.addCharacters()
            }
            recordToMap(t) {
                return t ? new Map(Object.entries(t).map(([t,e])=>[t, new Set(e)])) : void 0
            }
            getPosition(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getTilePos().position
            }
            move(t, e) {
                this.moveChar(t, e)
            }
            moveRandomly(t, e=0, i=-1) {
                var r;
                this.initGuard();
                let n = null == (r = this.gridCharacters) ? void 0 : r.get(t);
                if (!n)
                    throw this.createCharUnknownErr(t);
                let o = new il(n,e,i);
                n.setMovement(o)
            }
            getMovement(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                let r = i.getMovement();
                return r ? r.getInfo() : {
                    type: "None"
                }
            }
            moveTo(t, e, i) {
                var r;
                let n = this.assembleMoveToConfig(i);
                this.initGuard();
                let o = null == (r = this.gridCharacters) ? void 0 : r.get(t);
                if (!o)
                    throw this.createCharUnknownErr(t);
                if (!this.gridTilemap)
                    throw this.createUninitializedErr();
                let s = new iO(o,this.gridTilemap,{
                    position: new tk(e),
                    layer: (null == i ? void 0 : i.targetLayer) || o.getNextTilePos().layer
                },{
                    distance: 0,
                    config: n
                });
                return o.setMovement(s),
                s.finishedObs().pipe(eB(e=>({
                    charId: t,
                    position: e.position,
                    result: e.result,
                    description: e.description,
                    layer: e.layer
                })))
            }
            stopMovement(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                i.setMovement(void 0)
            }
            setSpeed(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.setSpeed(e)
            }
            getSpeed(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getSpeed()
            }
            collidesWithTiles(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.collidesWithTiles()
            }
            update(t, e) {
                var i;
                if (this.isCreatedInternal && this.gridCharacters)
                    for (let[t,i] of this.gridCharacters)
                        i.update(e);
                null == (i = this.gridTilemap) || i.invalidateFrameCache()
            }
            addCharacter(t) {
                var e, i, r, n, o;
                if (!this.gridTilemap || !this.config)
                    throw this.createUninitializedErr();
                let s = {
                    speed: t.speed || 4,
                    tilemap: this.gridTilemap,
                    collidesWithTiles: !0,
                    collisionGroups: ["geDefault"],
                    ignoreCollisionGroups: [],
                    charLayer: t.charLayer,
                    facingDirection: t.facingDirection,
                    labels: t.labels,
                    numberOfDirections: null != (e = t.numberOfDirections) ? e : this.config.numberOfDirections,
                    tileWidth: t.tileWidth,
                    tileHeight: t.tileHeight
                };
                "boolean" == typeof t.collides ? !1 === t.collides && (s.collidesWithTiles = !1,
                s.collisionGroups = []) : void 0 !== t.collides && (!1 === t.collides.collidesWithTiles && (s.collidesWithTiles = !1),
                t.collides.collisionGroups && (s.collisionGroups = t.collides.collisionGroups),
                t.collides.ignoreCollisionGroups && (s.ignoreCollisionGroups = t.collides.ignoreCollisionGroups),
                s.ignoreMissingTiles = null != (r = null == (i = t.collides) ? void 0 : i.ignoreMissingTiles) && r);
                let a = new e$(t.id,s);
                t.startPosition && a.setTilePosition({
                    position: new tk(t.startPosition),
                    layer: a.getTilePos().layer
                }),
                null == (n = this.gridCharacters) || n.set(t.id, a),
                this.gridTilemap.addCharacter(a);
                let h = a.getId();
                a.movementStopped().pipe(eG(this.charRemoved(h))).subscribe(t=>{
                    var e;
                    null == (e = this.movementStopped$) || e.next({
                        charId: h,
                        direction: t
                    })
                }
                ),
                a.movementStarted().pipe(eG(this.charRemoved(h))).subscribe(t=>{
                    var e;
                    null == (e = this.movementStarted$) || e.next({
                        charId: h,
                        direction: t
                    })
                }
                ),
                a.directionChanged().pipe(eG(this.charRemoved(h))).subscribe(t=>{
                    var e;
                    null == (e = this.directionChanged$) || e.next({
                        charId: h,
                        direction: t
                    })
                }
                ),
                a.positionChangeStarted().pipe(eG(this.charRemoved(h))).subscribe(t=>{
                    var e;
                    null == (e = this.positionChangeStarted$) || e.next(P({
                        charId: h
                    }, t))
                }
                ),
                a.positionChangeFinished().pipe(eG(this.charRemoved(h))).subscribe(t=>{
                    var e;
                    null == (e = this.positionChangeFinished$) || e.next(P({
                        charId: h
                    }, t))
                }
                ),
                null == (o = this.charAdded$) || o.next(h)
            }
            hasCharacter(t) {
                var e;
                return this.initGuard(),
                !!(null != (e = this.gridCharacters) && e.has(t))
            }
            removeCharacter(t) {
                var e, i, r, n;
                if (this.initGuard(),
                !(null == (e = this.gridCharacters) ? void 0 : e.get(t)))
                    throw this.createCharUnknownErr(t);
                null == (i = this.gridTilemap) || i.removeCharacter(t),
                null == (r = this.gridCharacters) || r.delete(t),
                null == (n = this.charRemoved$) || n.next(t)
            }
            removeAllCharacters() {
                if (this.initGuard(),
                this.gridCharacters)
                    for (let t of this.gridCharacters.keys())
                        this.removeCharacter(t)
            }
            getAllCharacters(t) {
                if (this.initGuard(),
                !this.gridCharacters)
                    return [];
                let e = [...this.gridCharacters.values()];
                return (t ? e.filter(e=>{
                    var i, r, n, o, s, a;
                    return null != (i = t.labels) && i.withAllLabels ? null == (r = t.labels) ? void 0 : r.withAllLabels.every(t=>e.hasLabel(t)) : null != (n = t.labels) && n.withOneOfLabels ? null == (o = t.labels) ? void 0 : o.withOneOfLabels.some(t=>e.hasLabel(t)) : null == (s = t.labels) || !s.withNoneLabels || !(null != (a = t.labels) && a.withNoneLabels.some(t=>e.hasLabel(t)))
                }
                ) : e).map(t=>t.getId())
            }
            getLabels(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getLabels()
            }
            addLabels(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.addLabels(e)
            }
            removeLabels(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.removeLabels(e)
            }
            clearLabels(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                i.clearLabels()
            }
            follow(t, e, i, r) {
                var n, o, s, a, h, u, l, c, p;
                let f;
                void 0 === i ? f = {
                    distance: 0,
                    closestPointIfBlocked: !1
                } : "number" == typeof i ? (f = {
                    distance: i,
                    closestPointIfBlocked: !1
                },
                r && (f.closestPointIfBlocked = !0)) : f = i,
                this.initGuard();
                let d = null == (n = this.gridCharacters) ? void 0 : n.get(t)
                  , y = null == (o = this.gridCharacters) ? void 0 : o.get(e);
                if (!d)
                    throw this.createCharUnknownErr(t);
                if (!y)
                    throw this.createCharUnknownErr(e);
                if (!this.gridTilemap)
                    throw this.createUninitializedErr();
                let g = new ih(d,this.gridTilemap,y,{
                    distance: null != (s = f.distance) ? s : 0,
                    noPathFoundStrategy: f.closestPointIfBlocked ? "CLOSEST_REACHABLE" : "STOP",
                    maxPathLength: null != (a = f.maxPathLength) ? a : 1 / 0,
                    shortestPathAlgorithm: null != (h = f.algorithm) ? h : "BIDIRECTIONAL_SEARCH",
                    ignoreLayers: !!f.ignoreLayers,
                    facingDirection: null != (u = f.facingDirection) ? u : "none",
                    considerCosts: null != (l = f.considerCosts) && l,
                    isPositionAllowedFn: null != (c = f.isPositionAllowedFn) ? c : ()=>!0,
                    ignoredChars: null != (p = f.ignoredChars) ? p : []
                });
                d.setMovement(g)
            }
            isMoving(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.isMoving()
            }
            getFacingDirection(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getFacingDirection()
            }
            getFacingPosition(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                let r = i.getFacingPosition();
                return {
                    x: r.x,
                    y: r.y
                }
            }
            turnTowards(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                return r.turnTowards(e)
            }
            getCharactersAt(t, e) {
                return (this.initGuard(),
                this.gridTilemap) ? Array.from(this.gridTilemap.getCharactersAt(new tk(t), e)).map(t=>t.getId()) : []
            }
            setPosition(t, e, i) {
                var r;
                this.initGuard();
                let n = null == (r = this.gridCharacters) ? void 0 : r.get(t);
                if (!n)
                    throw this.createCharUnknownErr(t);
                i || n.setTilePosition({
                    position: new tk(e),
                    layer: n.getTilePos().layer
                }),
                n.setTilePosition({
                    position: new tk(e),
                    layer: i
                })
            }
            isBlocked(t, e, i=["geDefault"]) {
                var r, n;
                this.initGuard();
                let o = new tk(t);
                return !!(null != (r = this.gridTilemap) && r.hasBlockingTile(o, e) || null != (n = this.gridTilemap) && n.hasBlockingChar(o, e, i))
            }
            isTileBlocked(t, e) {
                var i;
                return this.initGuard(),
                !!(null != (i = this.gridTilemap) && i.hasBlockingTile(new tk(t), e))
            }
            getCollisionGroups(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getCollisionGroups() || []
            }
            setCollisionGroups(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.setCollisionGroups(e)
            }
            getIgnoreCollisionGroups(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getIgnoreCollisionGroups() || []
            }
            setIgnoreCollisionGroups(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.setIgnoreCollisionGroups(e)
            }
            getTilePosInDirection(t, e, i) {
                if (!this.gridTilemap)
                    throw this.createUninitializedErr();
                let r = this.gridTilemap.getTilePosInDirection({
                    position: new tk(t),
                    layer: e
                }, i);
                return {
                    position: r.position.toPosition(),
                    charLayer: r.layer
                }
            }
            findShortestPath(t, e, i={}) {
                if (!this.gridTilemap)
                    throw this.createUninitializedErr();
                let r = i.shortestPathAlgorithm || "BFS";
                i.considerCosts && "A_STAR" !== r && console.warn(`GridEngine: Pathfinding option 'considerCosts' cannot be used with algorithm '${r}'. It can only be used with A* algorithm.`);
                let n = void 0 !== i.pathWidth && 1 !== i.pathWidth
                  , o = void 0 !== i.pathHeight && 1 !== i.pathHeight;
                (n || o) && "JPS" === r && console.warn("GridEngine: Pathfinding options 'pathWidth' and 'pathHeight' > 1 cannot be used with algorithm 'JPS'.");
                let s = new iA(this.gridTilemap).findShortestPath(tA.toInternal(t), tA.toInternal(e), x(P({}, i), {
                    shortestPathAlgorithm: r
                }));
                return {
                    path: s.path.map(tA.fromInternal),
                    closestToTarget: s.closestToTarget ? tA.fromInternal(s.closestToTarget) : void 0,
                    reachedMaxPathLength: !1,
                    steps: s.steps
                }
            }
            steppedOn(t, e, i) {
                return this.positionChangeFinished().pipe(eH(r=>t.includes(r.charId) && e.some(t=>t.x === r.enterTile.x && t.y === r.enterTile.y) && (void 0 === i || i.includes(r.enterLayer))))
            }
            characterShifted() {
                if (!this.charAdded$ || !this.charRemoved$)
                    throw this.createUninitializedErr();
                return this.charAdded$.pipe(eB(t=>({
                    charId: t,
                    action: "ADDED"
                })), function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return eW.apply(void 0, tq([], t$(t)))
                }(this.charRemoved$.pipe(eB(t=>({
                    charId: t,
                    action: "REMOVED"
                })))))
            }
            movementStarted() {
                if (!this.movementStarted$)
                    throw this.createUninitializedErr();
                return this.movementStarted$
            }
            movementStopped() {
                if (!this.movementStopped$)
                    throw this.createUninitializedErr();
                return this.movementStopped$
            }
            directionChanged() {
                if (!this.directionChanged$)
                    throw this.createUninitializedErr();
                return this.directionChanged$
            }
            positionChangeStarted() {
                if (!this.positionChangeStarted$)
                    throw this.createUninitializedErr();
                return this.positionChangeStarted$
            }
            positionChangeFinished() {
                if (!this.positionChangeFinished$)
                    throw this.createUninitializedErr();
                return this.positionChangeFinished$
            }
            getMovementProgress(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getMovementProgress()
            }
            rebuildTileCollisionCache(t, e, i, r) {
                var n;
                null == (n = this.gridTilemap) || n.rebuildTileCollisionCache(new iy(t,e,i,r))
            }
            addQueueMovements(t, e, i) {
                var r, n;
                let o;
                this.initGuard();
                let s = null == (r = this.gridCharacters) ? void 0 : r.get(t);
                if (!s)
                    throw this.createCharUnknownErr(t);
                if (!this.gridTilemap)
                    throw this.createUninitializedErr();
                (null == (n = null == s ? void 0 : s.getMovement()) ? void 0 : n.getInfo().type) === "Queue" ? o = s.getMovement() : (o = new iP(s,this.gridTilemap),
                s.setMovement(o),
                o.finished().pipe(eG(function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    var i = eT(t)
                      , r = e_(t, 1 / 0);
                    return t.length ? 1 === t.length ? ez(t[0]) : eN(r)(eF(t, i)) : ew
                }(this.charRemoved(t), s.autoMovementSet()))).subscribe(e=>{
                    var i;
                    null == (i = this.queueMovementFinished$) || i.next(P({
                        charId: t
                    }, e))
                }
                )),
                o.enqueue(e.map(t=>tj(t) ? t : {
                    position: new tk(t.position),
                    layer: t.charLayer
                }), i)
            }
            queueMovementFinished() {
                if (!this.queueMovementFinished$)
                    throw this.createUninitializedErr();
                return this.queueMovementFinished$
            }
            getEnqueuedMovements(t) {
                var e, i;
                this.initGuard();
                let r = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                return (null == (i = r.getMovement()) ? void 0 : i.getInfo().type) === "Queue" ? r.getMovement().peekAll().map(t=>({
                    command: tj(t.command) ? t.command : tA.fromInternal(t.command),
                    config: t.config
                })) : []
            }
            clearEnqueuedMovements(t) {
                var e, i;
                this.initGuard();
                let r = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                (null == (i = r.getMovement()) ? void 0 : i.getInfo().type) === "Queue" && r.getMovement().clear()
            }
            getTileCost(t, e, i) {
                var r, n;
                return this.initGuard(),
                null != (n = null == (r = this.gridTilemap) ? void 0 : r.getTileCosts({
                    position: new tk(t),
                    layer: e
                }, i)) ? n : 1
            }
            getState() {
                let t = [];
                if (this.gridCharacters)
                    for (let[e,i] of this.gridCharacters.entries())
                        t.push({
                            id: e,
                            position: tA.fromInternal(i.getTilePos()),
                            facingDirection: i.getFacingDirection(),
                            speed: i.getSpeed(),
                            labels: i.getLabels(),
                            movementProgress: i.getMovementProgress(),
                            collisionConfig: {
                                collisionGroups: i.getCollisionGroups(),
                                ignoreCollisionGroups: i.getIgnoreCollisionGroups(),
                                collidesWithTiles: i.collidesWithTiles(),
                                ignoreMissingTiles: i.getIgnoreMissingTiles()
                            }
                        });
                return {
                    characters: t
                }
            }
            setState(t) {
                if (this.gridCharacters)
                    for (let e of t.characters) {
                        let t = this.gridCharacters.get(e.id);
                        if (t) {
                            let i = t.getTilePos();
                            tA.equal(i, tA.toInternal(e.position)) || t.setTilePosition(tA.toInternal(e.position)),
                            t.setSpeed(e.speed),
                            t.turnTowards(e.facingDirection),
                            e.collisionConfig.collisionGroups && t.setCollisionGroups(e.collisionConfig.collisionGroups),
                            void 0 !== e.collisionConfig.collidesWithTiles && t.setCollidesWithTiles(e.collisionConfig.collidesWithTiles),
                            void 0 !== e.collisionConfig.ignoreMissingTiles && t.setIgnoreMissingTiles(e.collisionConfig.ignoreMissingTiles),
                            t.setMovementProgress(e.movementProgress),
                            t.clearLabels(),
                            t.addLabels(e.labels)
                        }
                    }
            }
            charRemoved(t) {
                var e;
                if (!this.charRemoved$)
                    throw this.createUninitializedErr();
                return null == (e = this.charRemoved$) ? void 0 : e.pipe(eU(1), eH(e=>e == t))
            }
            initGuard() {
                if (!this.isCreatedInternal)
                    throw this.createUninitializedErr()
            }
            createUninitializedErr() {
                throw Error("GridEngine not initialized. You need to call create() first.")
            }
            addCharacters() {
                var t;
                null == (t = this.config) || t.characters.forEach(t=>this.addCharacter(t))
            }
            moveChar(t, e) {
                var i, r, n;
                this.initGuard();
                let o = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!o)
                    throw this.createCharUnknownErr(t);
                if (4 === o.getNumberOfDirections()) {
                    if (!(null != (r = this.gridTilemap) && r.isIsometric()) && tR(e)) {
                        console.warn(`GridEngine: Character '${t}' can't be moved '${e}' in 4 direction mode.`);
                        return
                    }
                    if (null != (n = this.gridTilemap) && n.isIsometric() && !tR(e)) {
                        console.warn(`GridEngine: Character '${t}' can't be moved '${e}' in 4 direction isometric mode.`);
                        return
                    }
                }
                o.move(e)
            }
            createCharUnknownErr(t) {
                return Error(`Character unknown: ${t}`)
            }
            assembleMoveToConfig(t={}) {
                let e = x(P({}, t), {
                    noPathFoundStrategy: "STOP",
                    pathBlockedStrategy: "WAIT"
                });
                return null != t && t.noPathFoundStrategy && (Object.values(eZ).includes(t.noPathFoundStrategy) ? e.noPathFoundStrategy = t.noPathFoundStrategy : console.warn(`GridEngine: Unknown NoPathFoundStrategy '${t.noPathFoundStrategy}'. Falling back to 'STOP'`)),
                null != t && t.pathBlockedStrategy && (Object.values(e3).includes(t.pathBlockedStrategy) ? e.pathBlockedStrategy = t.pathBlockedStrategy : console.warn(`GridEngine: Unknown PathBlockedStrategy '${t.pathBlockedStrategy}'. Falling back to 'WAIT'`)),
                e
            }
            setConfigDefaults(t) {
                return P({
                    collisionTilePropertyName: "ge_collide",
                    numberOfDirections: 4,
                    characterCollisionStrategy: "BLOCK_TWO_TILES",
                    cacheTileCollisions: !1
                }, t)
            }
        }
          , iC = class extends is {
            constructor(t, e={}) {
                super(t, e),
                this.jumpCache = new ik
            }
            findShortestPathImpl(t, e) {
                return this.jumpCache = new ik,
                super.findShortestPathImpl(t, e)
            }
            getNeighborsInternal(t, e, i) {
                if (!e || t.layer !== e.layer)
                    return this.getNeighbors(t, i).map(t=>({
                        p: t,
                        dist: 1
                    }));
                let r = this.prune(e, t).map(e=>{
                    let i = this.getTransition(e.position, t.layer);
                    return {
                        position: e.position,
                        layer: i || t.layer
                    }
                }
                )
                  , n = [];
                for (let e of r) {
                    let r = this.jump(t, e, i, 1, tB(t.position, e.position));
                    r && (r.dist = this.distance(t.position, r.p.position),
                    n.push(r))
                }
                return n
            }
            getForced(t, e) {
                let i = []
                  , {topLeft: r, downLeft: n, top: o, bottom: s, topRight: a, downRight: h} = this.normalizedPositions(t, e);
                return tR(tB(t.position, e.position)) ? (this.blockOrTrans(t, r) && (this.addIfNotBlocked(i, e, o),
                this.addIfNotBlocked(i, e, a),
                this.blockOrTrans(n, r) && this.addIfNotBlocked(i, e, r)),
                this.blockOrTrans(t, n) && (this.addIfNotBlocked(i, e, s),
                this.addIfNotBlocked(i, e, h),
                this.blockOrTrans(r, n) && this.addIfNotBlocked(i, e, n)),
                this.blockOrTrans(r, o) && this.addIfNotBlocked(i, e, o),
                this.blockOrTrans(n, s) && this.addIfNotBlocked(i, e, s),
                this.blockOrTrans(r, a) && this.addIfNotBlocked(i, e, a),
                this.blockOrTrans(n, h) && this.addIfNotBlocked(i, e, h)) : ((this.blockOrTrans(t, o) || this.blockOrTrans(o, a)) && this.addIfNotBlocked(i, e, a),
                (this.blockOrTrans(t, s) || this.blockOrTrans(s, h)) && this.addIfNotBlocked(i, e, h),
                this.blockOrTrans(t, r) && this.blockOrTrans(t, o) && (this.addIfNotBlocked(i, e, o),
                this.addIfNotBlocked(i, e, r)),
                this.blockOrTrans(t, n) && this.blockOrTrans(t, s) && (this.addIfNotBlocked(i, e, s),
                this.addIfNotBlocked(i, e, n)),
                this.blockOrTrans(r, o) && this.blockOrTrans(t, o) && this.addIfNotBlocked(i, e, o),
                this.blockOrTrans(n, s) && this.blockOrTrans(t, s) && this.addIfNotBlocked(i, e, s)),
                i
            }
            hasForced(t, e) {
                let {topLeft: i, downLeft: r, top: n, bottom: o, topRight: s, downRight: a} = this.normalizedPositions(t, e);
                if (tR(tB(t.position, e.position))) {
                    if (this.blockOrTrans(t, i) && (!this.blockOrTrans(e, n) || !this.blockOrTrans(e, s) || this.blockOrTrans(r, i) && !this.blockOrTrans(e, i)) || this.blockOrTrans(t, r) && (!this.blockOrTrans(e, o) || !this.blockOrTrans(e, a) || this.blockOrTrans(i, r) && !this.blockOrTrans(e, r)) || this.blockOrTrans(i, n) && !this.blockOrTrans(e, n) || this.blockOrTrans(r, o) && !this.blockOrTrans(e, o) || this.blockOrTrans(i, s) && !this.blockOrTrans(e, s) || this.blockOrTrans(r, a) && !this.blockOrTrans(e, a))
                        return !0
                } else if ((this.blockOrTrans(t, n) || this.blockOrTrans(n, s)) && !this.blockOrTrans(e, s) || (this.blockOrTrans(t, o) || this.blockOrTrans(o, a)) && !this.blockOrTrans(e, a) || this.blockOrTrans(t, i) && this.blockOrTrans(t, n) && (!this.blockOrTrans(e, n) || !this.blockOrTrans(e, i)) || this.blockOrTrans(t, r) && this.blockOrTrans(t, o) && (!this.blockOrTrans(e, o) || !this.blockOrTrans(e, r)) || this.blockOrTrans(i, n) && this.blockOrTrans(t, n) && !this.blockOrTrans(e, n) || this.blockOrTrans(r, o) && this.blockOrTrans(t, o) && !this.blockOrTrans(e, o))
                    return !0;
                return !1
            }
            prune(t, e) {
                let {top: i, right: r, topRight: n, downRight: o, bottom: s} = this.normalizedPositions(t, e)
                  , a = this.getForced(t, e);
                return tR(tB(t.position, e.position)) ? [i, r, n, o, s, ...a] : [r, ...a]
            }
            jump(t, e, i, r, n) {
                let o = this.jumpCache.get(t, e);
                if (null !== o)
                    return o;
                if (this.isBlocking(t, e) && !(tA.equal(e, i) && this.options.ignoreBlockedTarget)) {
                    this.jumpCache.set(t, e, void 0);
                    return
                }
                if (tA.equal(e, i) || r >= this.maxJumpSize || void 0 !== this.getTransition(e.position, t.layer) || this.hasForced(t, e))
                    return this.jumpCache.set(t, e, {
                        p: e,
                        dist: 0
                    }),
                    {
                        p: e,
                        dist: 0
                    };
                if (this.updateClosestToTarget(e, i),
                "up-left" === n) {
                    if (void 0 !== this.jump(e, this.getTilePosInDir(e, "up"), i, r + 1, "up") || void 0 !== this.jump(e, this.getTilePosInDir(e, "left"), i, r + 1, "left"))
                        return this.jumpCache.set(t, e, {
                            p: e,
                            dist: 0
                        }),
                        {
                            p: e,
                            dist: 0
                        }
                } else if ("down-left" === n) {
                    if (void 0 !== this.jump(e, this.getTilePosInDir(e, "down"), i, r + 1, "down") || void 0 !== this.jump(e, this.getTilePosInDir(e, "left"), i, r + 1, "left"))
                        return this.jumpCache.set(t, e, {
                            p: e,
                            dist: 0
                        }),
                        {
                            p: e,
                            dist: 0
                        }
                } else if ("up-right" === n) {
                    if (void 0 !== this.jump(e, this.getTilePosInDir(e, "up"), i, r + 1, "up") || void 0 !== this.jump(e, this.getTilePosInDir(e, "right"), i, r + 1, "right"))
                        return this.jumpCache.set(t, e, {
                            p: e,
                            dist: 0
                        }),
                        {
                            p: e,
                            dist: 0
                        }
                } else if ("down-right" === n && (void 0 !== this.jump(e, this.getTilePosInDir(e, "down"), i, r + 1, "down") || void 0 !== this.jump(e, this.getTilePosInDir(e, "right"), i, r + 1, "right")))
                    return this.jumpCache.set(t, e, {
                        p: e,
                        dist: 0
                    }),
                    {
                        p: e,
                        dist: 0
                    };
                let s = this.jump(e, this.getTilePosInDir(e, n), i, r + 1, n);
                return this.jumpCache.set(t, e, s),
                s
            }
            normalizedPositions(t, e) {
                return t.position.x < e.position.x && t.position.y === e.position.y ? {
                    topLeft: {
                        position: new tk(e.position.x - 1,e.position.y - 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x - 1,e.position.y + 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    },
                    topRight: {
                        position: new tk(e.position.x + 1,e.position.y - 1),
                        layer: e.layer
                    },
                    downRight: {
                        position: new tk(e.position.x + 1,e.position.y + 1),
                        layer: e.layer
                    }
                } : t.position.x > e.position.x && t.position.y === e.position.y ? {
                    topLeft: {
                        position: new tk(e.position.x + 1,e.position.y + 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x + 1,e.position.y - 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    },
                    topRight: {
                        position: new tk(e.position.x - 1,e.position.y + 1),
                        layer: e.layer
                    },
                    downRight: {
                        position: new tk(e.position.x - 1,e.position.y - 1),
                        layer: e.layer
                    }
                } : t.position.y < e.position.y && t.position.x === e.position.x ? {
                    topLeft: {
                        position: new tk(e.position.x + 1,e.position.y - 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x - 1,e.position.y - 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    },
                    topRight: {
                        position: new tk(e.position.x + 1,e.position.y + 1),
                        layer: e.layer
                    },
                    downRight: {
                        position: new tk(e.position.x - 1,e.position.y + 1),
                        layer: e.layer
                    }
                } : t.position.y > e.position.y && t.position.x === e.position.x ? {
                    topLeft: {
                        position: new tk(e.position.x - 1,e.position.y + 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x + 1,e.position.y + 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    },
                    topRight: {
                        position: new tk(e.position.x - 1,e.position.y - 1),
                        layer: e.layer
                    },
                    downRight: {
                        position: new tk(e.position.x + 1,e.position.y - 1),
                        layer: e.layer
                    }
                } : t.position.y < e.position.y && t.position.x < e.position.x ? {
                    topLeft: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x + 1,e.position.y - 1),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x - 1,e.position.y + 1),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x + 1,e.position.y + 1),
                        layer: e.layer
                    },
                    topRight: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    },
                    downRight: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    }
                } : t.position.y < e.position.y && t.position.x > e.position.x ? {
                    topLeft: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x + 1,e.position.y + 1),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x - 1,e.position.y - 1),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x - 1,e.position.y + 1),
                        layer: e.layer
                    },
                    topRight: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    },
                    downRight: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    }
                } : t.position.y > e.position.y && t.position.x < e.position.x ? {
                    topLeft: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x - 1,e.position.y - 1),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x + 1,e.position.y + 1),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x + 1,e.position.y - 1),
                        layer: e.layer
                    },
                    topRight: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    },
                    downRight: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    }
                } : {
                    topLeft: {
                        position: new tk(e.position.x,e.position.y + 1),
                        layer: e.layer
                    },
                    downLeft: {
                        position: new tk(e.position.x + 1,e.position.y),
                        layer: e.layer
                    },
                    top: {
                        position: new tk(e.position.x - 1,e.position.y + 1),
                        layer: e.layer
                    },
                    bottom: {
                        position: new tk(e.position.x + 1,e.position.y - 1),
                        layer: e.layer
                    },
                    right: {
                        position: new tk(e.position.x - 1,e.position.y - 1),
                        layer: e.layer
                    },
                    topRight: {
                        position: new tk(e.position.x - 1,e.position.y),
                        layer: e.layer
                    },
                    downRight: {
                        position: new tk(e.position.x,e.position.y - 1),
                        layer: e.layer
                    }
                }
            }
        }
          , ik = class {
            constructor() {
                this.memo = new Map
            }
            set(t, e, i) {
                let r = this.memo.get(t.position.x);
                r || (r = new Map,
                this.memo.set(t.position.x, r));
                let n = r.get(t.position.y);
                n || (n = new Map,
                r.set(t.position.y, n));
                let o = n.get(t.layer);
                o || (o = new Map,
                n.set(t.layer, o));
                let s = o.get(e.position.x);
                s || (s = new Map,
                o.set(e.position.x, s));
                let a = s.get(e.position.y);
                a || (a = new Map,
                s.set(e.position.y, a)),
                a.get(e.layer) || (void 0 === i ? a.set(e.layer, null) : a.set(e.layer, i))
            }
            get(t, e) {
                let i = this.memo.get(t.position.x);
                if (!i)
                    return null;
                let r = i.get(t.position.y);
                if (!r)
                    return null;
                let n = r.get(t.layer);
                if (!n)
                    return null;
                let o = n.get(e.position.x);
                if (!o)
                    return null;
                let s = o.get(e.position.y);
                if (!s)
                    return null;
                let a = s.get(e.layer);
                return void 0 === a ? null : null === a ? void 0 : a
            }
        }
          , iA = class {
            constructor(t) {
                this.gridTilemap = t
            }
            findShortestPath(t, e, i={}) {
                return (function(t, e, i) {
                    switch (t) {
                    case "BIDIRECTIONAL_SEARCH":
                        return new ir(e,i);
                    case "A_STAR":
                        return new e5(e,i);
                    case "JPS":
                        return 8 === i.numberOfDirections ? new iC(e,i) : new is(e,i)
                    }
                    return new ie(e,i)
                }
                )(i.shortestPathAlgorithm || "BIDIRECTIONAL_SEARCH", this.gridTilemap, i).findShortestPath(t, e)
            }
        }
          , iE = ((l = iE || {}).SUCCESS = "SUCCESS",
        l.NO_PATH_FOUND_MAX_RETRIES_EXCEEDED = "NO_PATH_FOUND_MAX_RETRIES_EXCEEDED",
        l.PATH_BLOCKED_MAX_RETRIES_EXCEEDED = "PATH_BLOCKED_MAX_RETRIES_EXCEEDED",
        l.PATH_BLOCKED = "PATH_BLOCKED",
        l.NO_PATH_FOUND = "NO_PATH_FOUND",
        l.PATH_BLOCKED_WAIT_TIMEOUT = "PATH_BLOCKED_WAIT_TIMEOUT",
        l.MOVEMENT_TERMINATED = "MOVEMENT_TERMINATED",
        l.MAX_PATH_LENGTH_REACHED = "MAX_PATH_LENGTH_REACHED",
        l)
          , iO = class {
            constructor(t, e, i, {config: r, ignoreBlockedTarget: n=!1, distance: o=0}={}) {
                var s, a;
                this.character = t,
                this.tilemap = e,
                this.targetPos = i,
                this.shortestPath = [],
                this.distOffset = 0,
                this.posOnPath = 0,
                this.stopped = !1,
                this.pathBlockedWaitElapsed = 0,
                this.isPositionAllowed = ()=>!0,
                this.shortestPathAlgorithm = "BIDIRECTIONAL_SEARCH",
                this.maxPathLength = 1 / 0,
                this.considerCosts = !1,
                this.ignoredChars = [],
                this.isBlocking = (t,e)=>!t || new ie(this.tilemap,this.getPathfindingOptions()).isBlocking(this.character.getTilePos(), {
                    position: t,
                    layer: e
                }),
                this.shortestPathAlgorithm = null != (s = null == r ? void 0 : r.algorithm) ? s : this.shortestPathAlgorithm,
                this.ignoreBlockedTarget = n,
                this.distance = o,
                this.noPathFoundStrategy = (null == r ? void 0 : r.noPathFoundStrategy) || "STOP",
                this.pathBlockedStrategy = (null == r ? void 0 : r.pathBlockedStrategy) || "WAIT",
                this.noPathFoundRetryable = new e2((null == r ? void 0 : r.noPathFoundRetryBackoffMs) || 200,(null == r ? void 0 : r.noPathFoundMaxRetries) || -1,()=>{
                    this.stop("NO_PATH_FOUND_MAX_RETRIES_EXCEEDED")
                }
                ),
                this.pathBlockedRetryable = new e2((null == r ? void 0 : r.pathBlockedRetryBackoffMs) || 200,(null == r ? void 0 : r.pathBlockedMaxRetries) || -1,()=>{
                    this.stop("PATH_BLOCKED_MAX_RETRIES_EXCEEDED")
                }
                ),
                null != r && r.isPositionAllowedFn && (this.isPositionAllowed = r.isPositionAllowedFn),
                null != r && r.maxPathLength && (this.maxPathLength = r.maxPathLength),
                this.alternativeTargets = null == r ? void 0 : r.alternativeTargets,
                this.noPathFoundAlternativeTargetsFallbackStrategy = null == r ? void 0 : r.noPathFoundAlternativeTargetsFallbackStrategy,
                null != r && r.considerCosts && "A_STAR" !== this.shortestPathAlgorithm && console.warn(`GridEngine: Pathfinding option 'considerCosts' cannot be used with algorithm '${this.shortestPathAlgorithm}'. It can only be used with A* algorithm.`),
                "JPS" === this.shortestPathAlgorithm && (this.character.getTileWidth() > 1 || this.character.getTileHeight() > 1) && console.warn("GridEngine: Pathfinding algorithm 'JPS' can only be used for characters with 'tileWidth' and 'tileHeight' of 1"),
                this.considerCosts = (null == r ? void 0 : r.considerCosts) || !1,
                this.ignoreLayers = !!(null != r && r.ignoreLayers),
                this.distanceUtils = e1.create(t.getNumberOfDirections()),
                this.pathBlockedWaitTimeoutMs = (null == r ? void 0 : r.pathBlockedWaitTimeoutMs) || -1,
                this.ignoredChars = null != (a = null == r ? void 0 : r.ignoredChars) ? a : [],
                this.finished$ = new ev,
                this.setCharacter(t)
            }
            setPathBlockedStrategy(t) {
                this.pathBlockedStrategy = t
            }
            getPathBlockedStrategy() {
                return this.pathBlockedStrategy
            }
            setCharacter(t) {
                this.character = t,
                this.noPathFoundRetryable.reset(),
                this.pathBlockedRetryable.reset(),
                this.pathBlockedWaitElapsed = 0,
                this.calcShortestPath(),
                this.character.autoMovementSet().pipe(eH(t=>t !== this), eU(1)).subscribe(()=>{
                    this.stop("MOVEMENT_TERMINATED")
                }
                )
            }
            getPathfindingOptions() {
                return {
                    shortestPathAlgorithm: this.shortestPathAlgorithm,
                    pathWidth: this.character.getTileWidth(),
                    pathHeight: this.character.getTileHeight(),
                    numberOfDirections: this.character.getNumberOfDirections(),
                    isPositionAllowed: this.isPositionAllowed,
                    collisionGroups: this.character.getCollisionGroups(),
                    ignoredChars: [this.character.getId(), ...this.ignoredChars],
                    ignoreTiles: !this.character.collidesWithTiles(),
                    ignoreMapBounds: this.character.getIgnoreMissingTiles(),
                    ignoreBlockedTarget: this.ignoreBlockedTarget,
                    maxPathLength: this.maxPathLength,
                    ignoreLayers: this.ignoreLayers,
                    considerCosts: this.considerCosts,
                    calculateClosestToTarget: !0
                }
            }
            update(t) {
                var e, i, r, n;
                this.stopped || (this.noPathFound() && ("RETRY" === this.noPathFoundStrategy ? this.noPathFoundRetryable.retry(t, ()=>this.calcShortestPath()) : "STOP" === this.noPathFoundStrategy && this.stop("NO_PATH_FOUND")),
                this.updatePosOnPath(),
                this.isBlocking(null == (e = this.nextTileOnPath()) ? void 0 : e.position, null == (i = this.character) ? void 0 : i.getNextTilePos().layer) ? this.applyPathBlockedStrategy(t) : this.pathBlockedWaitElapsed = 0,
                this.hasArrived() ? (this.stop("SUCCESS"),
                this.existsDistToTarget() && this.turnTowardsTarget()) : this.isBlocking(null == (r = this.nextTileOnPath()) ? void 0 : r.position, null == (n = this.character) ? void 0 : n.getNextTilePos().layer) || this.moveCharOnPath())
            }
            finishedObs() {
                return this.finished$
            }
            getInfo() {
                return {
                    type: "Target",
                    state: {
                        pathAhead: this.shortestPath.slice(this.posOnPath).map(t=>tA.fromInternal(t))
                    },
                    config: {
                        algorithm: this.shortestPathAlgorithm,
                        ignoreBlockedTarget: this.ignoreBlockedTarget,
                        distance: this.distance,
                        targetPos: tA.fromInternal(this.targetPos),
                        noPathFoundStrategy: this.noPathFoundStrategy,
                        pathBlockedStrategy: this.pathBlockedStrategy,
                        noPathFoundRetryBackoffMs: this.noPathFoundRetryable.getBackoffMs(),
                        noPathFoundMaxRetries: this.noPathFoundRetryable.getMaxRetries()
                    }
                }
            }
            resultToReason(t) {
                switch (t) {
                case "SUCCESS":
                    return "Successfully arrived.";
                case "MOVEMENT_TERMINATED":
                    return "Movement of character has been replaced before destination was reached.";
                case "PATH_BLOCKED":
                    return "PathBlockedStrategy STOP: Path blocked.";
                case "NO_PATH_FOUND_MAX_RETRIES_EXCEEDED":
                    return `NoPathFoundStrategy RETRY: Maximum retries of ${this.noPathFoundRetryable.getMaxRetries()} exceeded.`;
                case "NO_PATH_FOUND":
                    return "NoPathFoundStrategy STOP: No path found.";
                case "PATH_BLOCKED_MAX_RETRIES_EXCEEDED":
                    return `PathBlockedStrategy RETRY: Maximum retries of ${this.pathBlockedRetryable.getMaxRetries()} exceeded.`;
                case "PATH_BLOCKED_WAIT_TIMEOUT":
                    return `PathBlockedStrategy WAIT: Wait timeout of ${this.pathBlockedWaitTimeoutMs}ms exceeded.`
                }
            }
            applyPathBlockedStrategy(t) {
                "RETRY" === this.pathBlockedStrategy ? this.pathBlockedRetryable.retry(t, ()=>{
                    let t = this.getShortestPath();
                    t.path.length > 0 && this.calcShortestPath(t)
                }
                ) : "STOP" === this.pathBlockedStrategy ? this.stop("PATH_BLOCKED") : "WAIT" === this.pathBlockedStrategy && this.pathBlockedWaitTimeoutMs > -1 && (this.pathBlockedWaitElapsed += t,
                this.pathBlockedWaitElapsed >= this.pathBlockedWaitTimeoutMs && this.stop("PATH_BLOCKED_WAIT_TIMEOUT"))
            }
            moveCharOnPath() {
                let t = this.nextTileOnPath();
                if (!t)
                    return;
                let e = this.getDir(this.character.getNextTilePos().position, t.position);
                this.character.move(e)
            }
            nextTileOnPath() {
                return this.shortestPath[this.posOnPath + 1]
            }
            stop(t) {
                this.finished$.next({
                    position: this.character.getTilePos().position,
                    result: t,
                    description: this.resultToReason(t),
                    layer: this.character.getTilePos().layer
                }),
                this.finished$.complete(),
                this.stopped = !0
            }
            turnTowardsTarget() {
                let t = this.shortestPath[this.posOnPath + 1]
                  , e = this.getDir(this.character.getNextTilePos().position, t.position);
                this.character.turnTowards(e)
            }
            existsDistToTarget() {
                return this.posOnPath < this.shortestPath.length - 1
            }
            hasArrived() {
                return !this.noPathFound() && this.posOnPath + Math.max(0, this.distance - this.distOffset) >= this.shortestPath.length - 1
            }
            updatePosOnPath() {
                let t = this.shortestPath[this.posOnPath];
                for (; this.posOnPath < this.shortestPath.length - 1 && (this.character.getNextTilePos().position.x != t.position.x || this.character.getNextTilePos().position.y != t.position.y); )
                    this.posOnPath++,
                    t = this.shortestPath[this.posOnPath]
            }
            noPathFound() {
                return 0 === this.shortestPath.length
            }
            calcShortestPath(t) {
                t = null != t ? t : this.getShortestPath(),
                this.posOnPath = 0,
                this.shortestPath = t.path,
                this.distOffset = t.distOffset
            }
            getShortestPath() {
                var t;
                let e = new iA(this.tilemap)
                  , {path: i, closestToTarget: r} = e.findShortestPath(this.character.getNextTilePos(), this.targetPos, this.getPathfindingOptions());
                if (0 == i.length) {
                    if ("CLOSEST_REACHABLE" === this.noPathFoundStrategy) {
                        if (!r)
                            throw Error("ClosestToTarget should never be undefined in TargetMovement.");
                        return this.pathToAlternativeTarget(r, e)
                    }
                    if ("ALTERNATIVE_TARGETS" === this.noPathFoundStrategy) {
                        for (let i of null != (t = this.alternativeTargets) ? t : []) {
                            let {path: t, distOffset: r} = this.pathToAlternativeTarget(tA.toInternal(i), e);
                            if (t.length > 0)
                                return {
                                    path: t,
                                    distOffset: r
                                }
                        }
                        return this.noPathFoundStrategy = this.noPathFoundAlternativeTargetsFallbackStrategy || "STOP",
                        this.getShortestPath()
                    }
                }
                return {
                    path: i,
                    distOffset: 0
                }
            }
            pathToAlternativeTarget(t, e) {
                return {
                    path: e.findShortestPath(this.character.getNextTilePos(), t, this.getPathfindingOptions()).path,
                    distOffset: this.distanceUtils.distance(t.position, this.targetPos.position)
                }
            }
            getDir(t, e) {
                return this.tilemap.fromMapDirection(this.distanceUtils.direction(t, e))
            }
        }
          , iz = Object.create
          , iM = Object.defineProperty
          , iI = Object.getOwnPropertyDescriptor
          , iL = Object.getOwnPropertyNames
          , iD = Object.getPrototypeOf
          , iR = Object.prototype.hasOwnProperty
          , iF = (t,e,i,r)=>{
            if (e && "object" == typeof e || "function" == typeof e)
                for (let n of iL(e))
                    iR.call(t, n) || n === i || iM(t, n, {
                        get: ()=>e[n],
                        enumerable: !(r = iI(e, n)) || r.enumerable
                    });
            return t
        }
          , iB = (t,e,i)=>(i = null != t ? iz(iD(t)) : {},
        iF(!e && t && t.__esModule ? i : iM(i, "default", {
            value: t,
            enumerable: !0
        }), t))
          , iN = (c = (t,e)=>{
            (function() {
                var i, r = "Expected a function", n = "__lodash_hash_undefined__", o = "__lodash_placeholder__", s = 1 / 0, a = NaN, h = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], u = "[object Arguments]", l = "[object Array]", c = "[object Boolean]", p = "[object Date]", f = "[object Error]", d = "[object Function]", y = "[object GeneratorFunction]", g = "[object Map]", v = "[object Number]", m = "[object Object]", w = "[object Promise]", b = "[object RegExp]", T = "[object Set]", _ = "[object String]", S = "[object Symbol]", P = "[object WeakMap]", x = "[object ArrayBuffer]", C = "[object DataView]", k = "[object Float32Array]", A = "[object Float64Array]", E = "[object Int8Array]", O = "[object Int16Array]", z = "[object Int32Array]", M = "[object Uint8Array]", I = "[object Uint8ClampedArray]", L = "[object Uint16Array]", D = "[object Uint32Array]", R = /\b__p \+= '';/g, F = /\b(__p \+=) '' \+/g, B = /(__e\(.*?\)|\b__t\)) \+\n'';/g, N = /&(?:amp|lt|gt|quot|#39);/g, j = /[&<>"']/g, H = RegExp(N.source), U = RegExp(j.source), W = /<%-([\s\S]+?)%>/g, G = /<%([\s\S]+?)%>/g, $ = /<%=([\s\S]+?)%>/g, q = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, V = /^\w*$/, K = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, X = /[\\^$.*+?()[\]{}|]/g, Y = RegExp(X.source), J = /^\s+/, Z = /\s/, Q = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, tt = /\{\n\/\* \[wrapped with (.+)\] \*/, te = /,? & /, ti = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, tr = /[()=,{}\[\]\/\s]/, tn = /\\(\\)?/g, to = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ts = /\w*$/, ta = /^[-+]0x[0-9a-f]+$/i, th = /^0b[01]+$/i, tu = /^\[object .+?Constructor\]$/, tl = /^0o[0-7]+$/i, tc = /^(?:0|[1-9]\d*)$/, tp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, tf = /($^)/, td = /['\n\r\u2028\u2029\\]/g, ty = "\ud800-\udfff", tg = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", tv = "\\u2700-\\u27bf", tm = "a-z\\xdf-\\xf6\\xf8-\\xff", tw = "A-Z\\xc0-\\xd6\\xd8-\\xde", tb = "\\ufe0e\\ufe0f", tT = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", t_ = "['’]", tS = "[" + tT + "]", tP = "[" + tg + "]", tx = "[" + tm + "]", tC = "[^" + ty + tT + "\\d+" + tv + tm + tw + "]", tk = "\ud83c[\udffb-\udfff]", tA = "[^" + ty + "]", tE = "(?:\ud83c[\udde6-\uddff]){2}", tO = "[\ud800-\udbff][\udc00-\udfff]", tz = "[" + tw + "]", tM = "\\u200d", tI = "(?:" + tx + "|" + tC + ")", tL = "(?:" + t_ + "(?:d|ll|m|re|s|t|ve))?", tD = "(?:" + t_ + "(?:D|LL|M|RE|S|T|VE))?", tR = "(?:" + tP + "|" + tk + ")?", tF = "[" + tb + "]?", tB = "(?:" + tM + "(?:" + [tA, tE, tO].join("|") + ")" + tF + tR + ")*", tN = tF + tR + tB, tj = "(?:" + ["[" + tv + "]", tE, tO].join("|") + ")" + tN, tH = "(?:" + [tA + tP + "?", tP, tE, tO, "[" + ty + "]"].join("|") + ")", tU = RegExp(t_, "g"), tW = RegExp(tP, "g"), tG = RegExp(tk + "(?=" + tk + ")|" + tH + tN, "g"), t$ = RegExp([tz + "?" + tx + "+" + tL + "(?=" + [tS, tz, "$"].join("|") + ")", "(?:" + tz + "|" + tC + ")+" + tD + "(?=" + [tS, tz + tI, "$"].join("|") + ")", tz + "?" + tI + "+" + tL, tz + "+" + tD, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", tj].join("|"), "g"), tq = RegExp("[" + tM + ty + tg + tb + "]"), tV = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, tK = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], tX = -1, tY = {};
                tY[k] = tY[A] = tY[E] = tY[O] = tY[z] = tY[M] = tY[I] = tY[L] = tY[D] = !0,
                tY[u] = tY[l] = tY[x] = tY[c] = tY[C] = tY[p] = tY[f] = tY[d] = tY[g] = tY[v] = tY[m] = tY[b] = tY[T] = tY[_] = tY[P] = !1;
                var tJ = {};
                tJ[u] = tJ[l] = tJ[x] = tJ[C] = tJ[c] = tJ[p] = tJ[k] = tJ[A] = tJ[E] = tJ[O] = tJ[z] = tJ[g] = tJ[v] = tJ[m] = tJ[b] = tJ[T] = tJ[_] = tJ[S] = tJ[M] = tJ[I] = tJ[L] = tJ[D] = !0,
                tJ[f] = tJ[d] = tJ[P] = !1;
                var tZ = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , tQ = parseFloat
                  , t0 = parseInt
                  , t1 = "object" == typeof global && global && global.Object === Object && global
                  , t2 = "object" == typeof self && self && self.Object === Object && self
                  , t3 = t1 || t2 || Function("return this")()
                  , t4 = "object" == typeof t && t && !t.nodeType && t
                  , t9 = t4 && "object" == typeof e && e && !e.nodeType && e
                  , t5 = t9 && t9.exports === t4
                  , t6 = t5 && t1.process
                  , t8 = function() {
                    try {
                        return t9 && t9.require && t9.require("util").types || t6 && t6.binding && t6.binding("util")
                    } catch (t) {}
                }()
                  , t7 = t8 && t8.isArrayBuffer
                  , et = t8 && t8.isDate
                  , ee = t8 && t8.isMap
                  , ei = t8 && t8.isRegExp
                  , er = t8 && t8.isSet
                  , en = t8 && t8.isTypedArray;
                function eo(t, e, i) {
                    switch (i.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, i[0]);
                    case 2:
                        return t.call(e, i[0], i[1]);
                    case 3:
                        return t.call(e, i[0], i[1], i[2])
                    }
                    return t.apply(e, i)
                }
                function es(t, e, i, r) {
                    for (var n = -1, o = null == t ? 0 : t.length; ++n < o; ) {
                        var s = t[n];
                        e(r, s, i(s), t)
                    }
                    return r
                }
                function ea(t, e) {
                    for (var i = -1, r = null == t ? 0 : t.length; ++i < r && !1 !== e(t[i], i, t); )
                        ;
                    return t
                }
                function eh(t, e) {
                    for (var i = -1, r = null == t ? 0 : t.length; ++i < r; )
                        if (!e(t[i], i, t))
                            return !1;
                    return !0
                }
                function eu(t, e) {
                    for (var i = -1, r = null == t ? 0 : t.length, n = 0, o = []; ++i < r; ) {
                        var s = t[i];
                        e(s, i, t) && (o[n++] = s)
                    }
                    return o
                }
                function el(t, e) {
                    return !!(null == t ? 0 : t.length) && eb(t, e, 0) > -1
                }
                function ec(t, e, i) {
                    for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
                        if (i(e, t[r]))
                            return !0;
                    return !1
                }
                function ep(t, e) {
                    for (var i = -1, r = null == t ? 0 : t.length, n = Array(r); ++i < r; )
                        n[i] = e(t[i], i, t);
                    return n
                }
                function ef(t, e) {
                    for (var i = -1, r = e.length, n = t.length; ++i < r; )
                        t[n + i] = e[i];
                    return t
                }
                function ed(t, e, i, r) {
                    var n = -1
                      , o = null == t ? 0 : t.length;
                    for (r && o && (i = t[++n]); ++n < o; )
                        i = e(i, t[n], n, t);
                    return i
                }
                function ey(t, e, i, r) {
                    var n = null == t ? 0 : t.length;
                    for (r && n && (i = t[--n]); n--; )
                        i = e(i, t[n], n, t);
                    return i
                }
                function eg(t, e) {
                    for (var i = -1, r = null == t ? 0 : t.length; ++i < r; )
                        if (e(t[i], i, t))
                            return !0;
                    return !1
                }
                var ev = eP("length");
                function em(t, e, i) {
                    var r;
                    return i(t, function(t, i, n) {
                        if (e(t, i, n))
                            return r = i,
                            !1
                    }),
                    r
                }
                function ew(t, e, i, r) {
                    for (var n = t.length, o = i + (r ? 1 : -1); r ? o-- : ++o < n; )
                        if (e(t[o], o, t))
                            return o;
                    return -1
                }
                function eb(t, e, i) {
                    return e == e ? function(t, e, i) {
                        for (var r = i - 1, n = t.length; ++r < n; )
                            if (t[r] === e)
                                return r;
                        return -1
                    }(t, e, i) : ew(t, e_, i)
                }
                function eT(t, e, i, r) {
                    for (var n = i - 1, o = t.length; ++n < o; )
                        if (r(t[n], e))
                            return n;
                    return -1
                }
                function e_(t) {
                    return t != t
                }
                function eS(t, e) {
                    var i = null == t ? 0 : t.length;
                    return i ? ek(t, e) / i : a
                }
                function eP(t) {
                    return function(e) {
                        return null == e ? i : e[t]
                    }
                }
                function ex(t) {
                    return function(e) {
                        return null == t ? i : t[e]
                    }
                }
                function eC(t, e, i, r, n) {
                    return n(t, function(t, n, o) {
                        i = r ? (r = !1,
                        t) : e(i, t, n, o)
                    }),
                    i
                }
                function ek(t, e) {
                    for (var r, n = -1, o = t.length; ++n < o; ) {
                        var s = e(t[n]);
                        s !== i && (r = r === i ? s : r + s)
                    }
                    return r
                }
                function eA(t, e) {
                    for (var i = -1, r = Array(t); ++i < t; )
                        r[i] = e(i);
                    return r
                }
                function eE(t) {
                    return t && t.slice(0, e$(t) + 1).replace(J, "")
                }
                function eO(t) {
                    return function(e) {
                        return t(e)
                    }
                }
                function ez(t, e) {
                    return ep(e, function(e) {
                        return t[e]
                    })
                }
                function eM(t, e) {
                    return t.has(e)
                }
                function eI(t, e) {
                    for (var i = -1, r = t.length; ++i < r && eb(e, t[i], 0) > -1; )
                        ;
                    return i
                }
                function eL(t, e) {
                    for (var i = t.length; i-- && eb(e, t[i], 0) > -1; )
                        ;
                    return i
                }
                var eD = ex({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                })
                  , eR = ex({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });
                function eF(t) {
                    return "\\" + tZ[t]
                }
                function eB(t) {
                    return tq.test(t)
                }
                function eN(t) {
                    var e = -1
                      , i = Array(t.size);
                    return t.forEach(function(t, r) {
                        i[++e] = [r, t]
                    }),
                    i
                }
                function ej(t, e) {
                    return function(i) {
                        return t(e(i))
                    }
                }
                function eH(t, e) {
                    for (var i = -1, r = t.length, n = 0, s = []; ++i < r; ) {
                        var a = t[i];
                        (a === e || a === o) && (t[i] = o,
                        s[n++] = i)
                    }
                    return s
                }
                function eU(t) {
                    var e = -1
                      , i = Array(t.size);
                    return t.forEach(function(t) {
                        i[++e] = t
                    }),
                    i
                }
                function eW(t) {
                    return eB(t) ? function(t) {
                        for (var e = tG.lastIndex = 0; tG.test(t); )
                            ++e;
                        return e
                    }(t) : ev(t)
                }
                function eG(t) {
                    return eB(t) ? t.match(tG) || [] : t.split("")
                }
                function e$(t) {
                    for (var e = t.length; e-- && Z.test(t.charAt(e)); )
                        ;
                    return e
                }
                var eq = ex({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                })
                  , eV = function t(e) {
                    var Z, ty, tg, tv, tm = (e = null == e ? t3 : eV.defaults(t3.Object(), e, eV.pick(t3, tK))).Array, tw = e.Date, tb = e.Error, tT = e.Function, t_ = e.Math, tS = e.Object, tP = e.RegExp, tx = e.String, tC = e.TypeError, tk = tm.prototype, tA = tT.prototype, tE = tS.prototype, tO = e["__core-js_shared__"], tz = tA.toString, tM = tE.hasOwnProperty, tI = 0, tL = (Z = /[^.]+$/.exec(tO && tO.keys && tO.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Z : "", tD = tE.toString, tR = tz.call(tS), tF = t3._, tB = tP("^" + tz.call(tM).replace(X, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), tN = t5 ? e.Buffer : i, tj = e.Symbol, tH = e.Uint8Array, tG = tN ? tN.allocUnsafe : i, tq = ej(tS.getPrototypeOf, tS), tZ = tS.create, t1 = tE.propertyIsEnumerable, t2 = tk.splice, t4 = tj ? tj.isConcatSpreadable : i, t9 = tj ? tj.iterator : i, t6 = tj ? tj.toStringTag : i, t8 = function() {
                        try {
                            var t = nd(tS, "defineProperty");
                            return t({}, "", {}),
                            t
                        } catch (t) {}
                    }(), ev = e.clearTimeout !== t3.clearTimeout && e.clearTimeout, ex = tw && tw.now !== t3.Date.now && tw.now, eK = e.setTimeout !== t3.setTimeout && e.setTimeout, eX = t_.ceil, eY = t_.floor, eJ = tS.getOwnPropertySymbols, eZ = tN ? tN.isBuffer : i, eQ = e.isFinite, e0 = tk.join, e1 = ej(tS.keys, tS), e2 = t_.max, e3 = t_.min, e4 = tw.now, e9 = e.parseInt, e5 = t_.random, e6 = tk.reverse, e8 = nd(e, "DataView"), e7 = nd(e, "Map"), it = nd(e, "Promise"), ie = nd(e, "Set"), ii = nd(e, "WeakMap"), ir = nd(tS, "create"), io = ii && new ii, is = {}, ia = nN(e8), ih = nN(e7), iu = nN(it), il = nN(ie), ic = nN(ii), ip = tj ? tj.prototype : i, id = ip ? ip.valueOf : i, iy = ip ? ip.toString : i;
                    function ig(t) {
                        if (oq(t) && !oD(t) && !(t instanceof ib)) {
                            if (t instanceof iw)
                                return t;
                            if (tM.call(t, "__wrapped__"))
                                return nj(t)
                        }
                        return new iw(t)
                    }
                    var iv = function() {
                        function t() {}
                        return function(e) {
                            if (!o$(e))
                                return {};
                            if (tZ)
                                return tZ(e);
                            t.prototype = e;
                            var r = new t;
                            return t.prototype = i,
                            r
                        }
                    }();
                    function im() {}
                    function iw(t, e) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__chain__ = !!e,
                        this.__index__ = 0,
                        this.__values__ = i
                    }
                    function ib(t) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = 4294967295,
                        this.__views__ = []
                    }
                    function iT(t) {
                        var e = -1
                          , i = null == t ? 0 : t.length;
                        for (this.clear(); ++e < i; ) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }
                    function i_(t) {
                        var e = -1
                          , i = null == t ? 0 : t.length;
                        for (this.clear(); ++e < i; ) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }
                    function iS(t) {
                        var e = -1
                          , i = null == t ? 0 : t.length;
                        for (this.clear(); ++e < i; ) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }
                    function iP(t) {
                        var e = -1
                          , i = null == t ? 0 : t.length;
                        for (this.__data__ = new iS; ++e < i; )
                            this.add(t[e])
                    }
                    function ix(t) {
                        var e = this.__data__ = new i_(t);
                        this.size = e.size
                    }
                    function iC(t, e) {
                        var i = oD(t)
                          , r = !i && oL(t)
                          , n = !i && !r && oN(t)
                          , o = !i && !r && !n && o0(t)
                          , s = i || r || n || o
                          , a = s ? eA(t.length, tx) : []
                          , h = a.length;
                        for (var u in t)
                            (e || tM.call(t, u)) && !(s && ("length" == u || n && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || nT(u, h))) && a.push(u);
                        return a
                    }
                    function ik(t) {
                        var e = t.length;
                        return e ? t[rc(0, e - 1)] : i
                    }
                    function iA(t, e, r) {
                        (r === i || oz(t[e], r)) && (r !== i || e in t) || iI(t, e, r)
                    }
                    function iE(t, e, r) {
                        var n = t[e];
                        tM.call(t, e) && oz(n, r) && (r !== i || e in t) || iI(t, e, r)
                    }
                    function iO(t, e) {
                        for (var i = t.length; i--; )
                            if (oz(t[i][0], e))
                                return i;
                        return -1
                    }
                    function iz(t, e, i, r) {
                        return ij(t, function(t, n, o) {
                            e(r, t, i(t), o)
                        }),
                        r
                    }
                    function iM(t, e) {
                        return t && rW(e, sp(e), t)
                    }
                    function iI(t, e, i) {
                        "__proto__" == e && t8 ? t8(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: i,
                            writable: !0
                        }) : t[e] = i
                    }
                    function iL(t, e) {
                        for (var r = -1, n = e.length, o = tm(n), s = null == t; ++r < n; )
                            o[r] = s ? i : sa(t, e[r]);
                        return o
                    }
                    function iD(t, e, r) {
                        return t == t && (r !== i && (t = t <= r ? t : r),
                        e !== i && (t = t >= e ? t : e)),
                        t
                    }
                    function iR(t, e, r, n, o, s) {
                        var a, h = 1 & e, l = 2 & e, f = 4 & e;
                        if (r && (a = o ? r(t, n, o, s) : r(t)),
                        a !== i)
                            return a;
                        if (!o$(t))
                            return t;
                        var w = oD(t);
                        if (w) {
                            if (P = t.length,
                            R = new t.constructor(P),
                            P && "string" == typeof t[0] && tM.call(t, "index") && (R.index = t.index,
                            R.input = t.input),
                            a = R,
                            !h)
                                return rU(t, a)
                        } else {
                            var P, R, F, B, N, j = nv(t), H = j == d || j == y;
                            if (oN(t))
                                return rR(t, h);
                            if (j == m || j == u || H && !o) {
                                if (a = l || H ? {} : nw(t),
                                !h)
                                    return l ? (B = (F = a) && rW(t, sf(t), F),
                                    rW(t, ng(t), B)) : (N = iM(a, t),
                                    rW(t, ny(t), N))
                            } else {
                                if (!tJ[j])
                                    return o ? t : {};
                                a = function(t, e, i) {
                                    var r, n, o = t.constructor;
                                    switch (e) {
                                    case x:
                                        return rF(t);
                                    case c:
                                    case p:
                                        return new o(+t);
                                    case C:
                                        return r = i ? rF(t.buffer) : t.buffer,
                                        new t.constructor(r,t.byteOffset,t.byteLength);
                                    case k:
                                    case A:
                                    case E:
                                    case O:
                                    case z:
                                    case M:
                                    case I:
                                    case L:
                                    case D:
                                        return rB(t, i);
                                    case g:
                                        return new o;
                                    case v:
                                    case _:
                                        return new o(t);
                                    case b:
                                        return (n = new t.constructor(t.source,ts.exec(t))).lastIndex = t.lastIndex,
                                        n;
                                    case T:
                                        return new o;
                                    case S:
                                        return id ? tS(id.call(t)) : {}
                                    }
                                }(t, j, h)
                            }
                        }
                        s || (s = new ix);
                        var U = s.get(t);
                        if (U)
                            return U;
                        s.set(t, a),
                        oJ(t) ? t.forEach(function(i) {
                            a.add(iR(i, e, r, i, t, s))
                        }) : oV(t) && t.forEach(function(i, n) {
                            a.set(n, iR(i, e, r, n, t, s))
                        });
                        var W = f ? l ? na : ns : l ? sf : sp
                          , G = w ? i : W(t);
                        return ea(G || t, function(i, n) {
                            G && (i = t[n = i]),
                            iE(a, n, iR(i, e, r, n, t, s))
                        }),
                        a
                    }
                    function iF(t, e, r) {
                        var n = r.length;
                        if (null == t)
                            return !n;
                        for (t = tS(t); n--; ) {
                            var o = r[n]
                              , s = e[o]
                              , a = t[o];
                            if (a === i && !(o in t) || !s(a))
                                return !1
                        }
                        return !0
                    }
                    function iB(t, e, n) {
                        if ("function" != typeof t)
                            throw new tC(r);
                        return nM(function() {
                            t.apply(i, n)
                        }, e)
                    }
                    function iN(t, e, i, r) {
                        var n = -1
                          , o = el
                          , s = !0
                          , a = t.length
                          , h = []
                          , u = e.length;
                        if (!a)
                            return h;
                        i && (e = ep(e, eO(i))),
                        r ? (o = ec,
                        s = !1) : e.length >= 200 && (o = eM,
                        s = !1,
                        e = new iP(e));
                        t: for (; ++n < a; ) {
                            var l = t[n]
                              , c = null == i ? l : i(l);
                            if (l = r || 0 !== l ? l : 0,
                            s && c == c) {
                                for (var p = u; p--; )
                                    if (e[p] === c)
                                        continue t;
                                h.push(l)
                            } else
                                o(e, c, r) || h.push(l)
                        }
                        return h
                    }
                    ig.templateSettings = {
                        escape: W,
                        evaluate: G,
                        interpolate: $,
                        variable: "",
                        imports: {
                            _: ig
                        }
                    },
                    ig.prototype = im.prototype,
                    ig.prototype.constructor = ig,
                    iw.prototype = iv(im.prototype),
                    iw.prototype.constructor = iw,
                    ib.prototype = iv(im.prototype),
                    ib.prototype.constructor = ib,
                    iT.prototype.clear = function() {
                        this.__data__ = ir ? ir(null) : {},
                        this.size = 0
                    }
                    ,
                    iT.prototype.delete = function(t) {
                        var e = this.has(t) && delete this.__data__[t];
                        return this.size -= e ? 1 : 0,
                        e
                    }
                    ,
                    iT.prototype.get = function(t) {
                        var e = this.__data__;
                        if (ir) {
                            var r = e[t];
                            return r === n ? i : r
                        }
                        return tM.call(e, t) ? e[t] : i
                    }
                    ,
                    iT.prototype.has = function(t) {
                        var e = this.__data__;
                        return ir ? e[t] !== i : tM.call(e, t)
                    }
                    ,
                    iT.prototype.set = function(t, e) {
                        var r = this.__data__;
                        return this.size += this.has(t) ? 0 : 1,
                        r[t] = ir && e === i ? n : e,
                        this
                    }
                    ,
                    i_.prototype.clear = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    ,
                    i_.prototype.delete = function(t) {
                        var e = this.__data__
                          , i = iO(e, t);
                        return !(i < 0) && (i == e.length - 1 ? e.pop() : t2.call(e, i, 1),
                        --this.size,
                        !0)
                    }
                    ,
                    i_.prototype.get = function(t) {
                        var e = this.__data__
                          , r = iO(e, t);
                        return r < 0 ? i : e[r][1]
                    }
                    ,
                    i_.prototype.has = function(t) {
                        return iO(this.__data__, t) > -1
                    }
                    ,
                    i_.prototype.set = function(t, e) {
                        var i = this.__data__
                          , r = iO(i, t);
                        return r < 0 ? (++this.size,
                        i.push([t, e])) : i[r][1] = e,
                        this
                    }
                    ,
                    iS.prototype.clear = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new iT,
                            map: new (e7 || i_),
                            string: new iT
                        }
                    }
                    ,
                    iS.prototype.delete = function(t) {
                        var e = np(this, t).delete(t);
                        return this.size -= e ? 1 : 0,
                        e
                    }
                    ,
                    iS.prototype.get = function(t) {
                        return np(this, t).get(t)
                    }
                    ,
                    iS.prototype.has = function(t) {
                        return np(this, t).has(t)
                    }
                    ,
                    iS.prototype.set = function(t, e) {
                        var i = np(this, t)
                          , r = i.size;
                        return i.set(t, e),
                        this.size += i.size == r ? 0 : 1,
                        this
                    }
                    ,
                    iP.prototype.add = iP.prototype.push = function(t) {
                        return this.__data__.set(t, n),
                        this
                    }
                    ,
                    iP.prototype.has = function(t) {
                        return this.__data__.has(t)
                    }
                    ,
                    ix.prototype.clear = function() {
                        this.__data__ = new i_,
                        this.size = 0
                    }
                    ,
                    ix.prototype.delete = function(t) {
                        var e = this.__data__
                          , i = e.delete(t);
                        return this.size = e.size,
                        i
                    }
                    ,
                    ix.prototype.get = function(t) {
                        return this.__data__.get(t)
                    }
                    ,
                    ix.prototype.has = function(t) {
                        return this.__data__.has(t)
                    }
                    ,
                    ix.prototype.set = function(t, e) {
                        var i = this.__data__;
                        if (i instanceof i_) {
                            var r = i.__data__;
                            if (!e7 || r.length < 199)
                                return r.push([t, e]),
                                this.size = ++i.size,
                                this;
                            i = this.__data__ = new iS(r)
                        }
                        return i.set(t, e),
                        this.size = i.size,
                        this
                    }
                    ;
                    var ij = rq(iK)
                      , iH = rq(iX, !0);
                    function iU(t, e) {
                        var i = !0;
                        return ij(t, function(t, r, n) {
                            return i = !!e(t, r, n)
                        }),
                        i
                    }
                    function iW(t, e, r) {
                        for (var n = -1, o = t.length; ++n < o; ) {
                            var s = t[n]
                              , a = e(s);
                            if (null != a && (h === i ? a == a && !oQ(a) : r(a, h)))
                                var h = a
                                  , u = s
                        }
                        return u
                    }
                    function iG(t, e) {
                        var i = [];
                        return ij(t, function(t, r, n) {
                            e(t, r, n) && i.push(t)
                        }),
                        i
                    }
                    function i$(t, e, i, r, n) {
                        var o = -1
                          , s = t.length;
                        for (i || (i = nb),
                        n || (n = []); ++o < s; ) {
                            var a = t[o];
                            e > 0 && i(a) ? e > 1 ? i$(a, e - 1, i, r, n) : ef(n, a) : r || (n[n.length] = a)
                        }
                        return n
                    }
                    var iq = rV()
                      , iV = rV(!0);
                    function iK(t, e) {
                        return t && iq(t, e, sp)
                    }
                    function iX(t, e) {
                        return t && iV(t, e, sp)
                    }
                    function iY(t, e) {
                        return eu(e, function(e) {
                            return oU(t[e])
                        })
                    }
                    function iJ(t, e) {
                        e = rI(e, t);
                        for (var r = 0, n = e.length; null != t && r < n; )
                            t = t[nB(e[r++])];
                        return r && r == n ? t : i
                    }
                    function iZ(t, e, i) {
                        var r = e(t);
                        return oD(t) ? r : ef(r, i(t))
                    }
                    function iQ(t) {
                        return null == t ? t === i ? "[object Undefined]" : "[object Null]" : t6 && t6 in tS(t) ? function(t) {
                            var e = tM.call(t, t6)
                              , r = t[t6];
                            try {
                                t[t6] = i;
                                var n = !0
                            } catch (t) {}
                            var o = tD.call(t);
                            return n && (e ? t[t6] = r : delete t[t6]),
                            o
                        }(t) : tD.call(t)
                    }
                    function i0(t, e) {
                        return t > e
                    }
                    function i1(t, e) {
                        return null != t && tM.call(t, e)
                    }
                    function i2(t, e) {
                        return null != t && e in tS(t)
                    }
                    function i3(t, e, r) {
                        for (var n = r ? ec : el, o = t[0].length, s = t.length, a = s, h = tm(s), u = 1 / 0, l = []; a--; ) {
                            var c = t[a];
                            a && e && (c = ep(c, eO(e))),
                            u = e3(c.length, u),
                            h[a] = !r && (e || o >= 120 && c.length >= 120) ? new iP(a && c) : i
                        }
                        c = t[0];
                        var p = -1
                          , f = h[0];
                        t: for (; ++p < o && l.length < u; ) {
                            var d = c[p]
                              , y = e ? e(d) : d;
                            if (d = r || 0 !== d ? d : 0,
                            !(f ? eM(f, y) : n(l, y, r))) {
                                for (a = s; --a; ) {
                                    var g = h[a];
                                    if (!(g ? eM(g, y) : n(t[a], y, r)))
                                        continue t
                                }
                                f && f.push(y),
                                l.push(d)
                            }
                        }
                        return l
                    }
                    function i4(t, e, r) {
                        e = rI(e, t);
                        var n = null == (t = nE(t, e)) ? t : t[nB(nJ(e))];
                        return null == n ? i : eo(n, t, r)
                    }
                    function i9(t) {
                        return oq(t) && iQ(t) == u
                    }
                    function i5(t, e, r, n, o) {
                        return t === e || (null != t && null != e && (oq(t) || oq(e)) ? function(t, e, r, n, o, s) {
                            var a = oD(t)
                              , h = oD(e)
                              , d = a ? l : nv(t)
                              , y = h ? l : nv(e);
                            d = d == u ? m : d,
                            y = y == u ? m : y;
                            var w = d == m
                              , P = y == m
                              , k = d == y;
                            if (k && oN(t)) {
                                if (!oN(e))
                                    return !1;
                                a = !0,
                                w = !1
                            }
                            if (k && !w)
                                return s || (s = new ix),
                                a || o0(t) ? nn(t, e, r, n, o, s) : function(t, e, i, r, n, o, s) {
                                    switch (i) {
                                    case C:
                                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                                            break;
                                        t = t.buffer,
                                        e = e.buffer;
                                    case x:
                                        return !(t.byteLength != e.byteLength || !o(new tH(t), new tH(e)));
                                    case c:
                                    case p:
                                    case v:
                                        return oz(+t, +e);
                                    case f:
                                        return t.name == e.name && t.message == e.message;
                                    case b:
                                    case _:
                                        return t == e + "";
                                    case g:
                                        var a = eN;
                                    case T:
                                        var h = 1 & r;
                                        if (a || (a = eU),
                                        t.size != e.size && !h)
                                            break;
                                        var u = s.get(t);
                                        if (u)
                                            return u == e;
                                        r |= 2,
                                        s.set(t, e);
                                        var l = nn(a(t), a(e), r, n, o, s);
                                        return s.delete(t),
                                        l;
                                    case S:
                                        if (id)
                                            return id.call(t) == id.call(e)
                                    }
                                    return !1
                                }(t, e, d, r, n, o, s);
                            if (!(1 & r)) {
                                var A = w && tM.call(t, "__wrapped__")
                                  , E = P && tM.call(e, "__wrapped__");
                                if (A || E) {
                                    var O = A ? t.value() : t
                                      , z = E ? e.value() : e;
                                    return s || (s = new ix),
                                    o(O, z, r, n, s)
                                }
                            }
                            return !!k && (s || (s = new ix),
                            function(t, e, r, n, o, s) {
                                var a = 1 & r
                                  , h = ns(t)
                                  , u = h.length;
                                if (u != ns(e).length && !a)
                                    return !1;
                                for (var l = u; l--; ) {
                                    var c = h[l];
                                    if (!(a ? c in e : tM.call(e, c)))
                                        return !1
                                }
                                var p = s.get(t)
                                  , f = s.get(e);
                                if (p && f)
                                    return p == e && f == t;
                                var d = !0;
                                s.set(t, e),
                                s.set(e, t);
                                for (var y = a; ++l < u; ) {
                                    var g = t[c = h[l]]
                                      , v = e[c];
                                    if (n)
                                        var m = a ? n(v, g, c, e, t, s) : n(g, v, c, t, e, s);
                                    if (!(m === i ? g === v || o(g, v, r, n, s) : m)) {
                                        d = !1;
                                        break
                                    }
                                    y || (y = "constructor" == c)
                                }
                                if (d && !y) {
                                    var w = t.constructor
                                      , b = e.constructor;
                                    w != b && "constructor"in t && "constructor"in e && !("function" == typeof w && w instanceof w && "function" == typeof b && b instanceof b) && (d = !1)
                                }
                                return s.delete(t),
                                s.delete(e),
                                d
                            }(t, e, r, n, o, s))
                        }(t, e, r, n, i5, o) : t != t && e != e)
                    }
                    function i6(t, e, r, n) {
                        var o = r.length
                          , s = o
                          , a = !n;
                        if (null == t)
                            return !s;
                        for (t = tS(t); o--; ) {
                            var h = r[o];
                            if (a && h[2] ? h[1] !== t[h[0]] : !(h[0]in t))
                                return !1
                        }
                        for (; ++o < s; ) {
                            var u = (h = r[o])[0]
                              , l = t[u]
                              , c = h[1];
                            if (a && h[2]) {
                                if (l === i && !(u in t))
                                    return !1
                            } else {
                                var p = new ix;
                                if (n)
                                    var f = n(l, c, u, t, e, p);
                                if (!(f === i ? i5(c, l, 3, n, p) : f))
                                    return !1
                            }
                        }
                        return !0
                    }
                    function i8(t) {
                        return !!o$(t) && (!tL || !(tL in t)) && (oU(t) ? tB : tu).test(nN(t))
                    }
                    function i7(t) {
                        return "function" == typeof t ? t : null == t ? sB : "object" == typeof t ? oD(t) ? rn(t[0], t[1]) : rr(t) : sV(t)
                    }
                    function rt(t) {
                        if (!nC(t))
                            return e1(t);
                        var e = [];
                        for (var i in tS(t))
                            tM.call(t, i) && "constructor" != i && e.push(i);
                        return e
                    }
                    function re(t, e) {
                        return t < e
                    }
                    function ri(t, e) {
                        var i = -1
                          , r = oF(t) ? tm(t.length) : [];
                        return ij(t, function(t, n, o) {
                            r[++i] = e(t, n, o)
                        }),
                        r
                    }
                    function rr(t) {
                        var e = nf(t);
                        return 1 == e.length && e[0][2] ? nk(e[0][0], e[0][1]) : function(i) {
                            return i === t || i6(i, t, e)
                        }
                    }
                    function rn(t, e) {
                        return nS(t) && e == e && !o$(e) ? nk(nB(t), e) : function(r) {
                            var n = sa(r, t);
                            return n === i && n === e ? sh(r, t) : i5(e, n, 3)
                        }
                    }
                    function ro(t, e, r, n, o) {
                        t !== e && iq(e, function(s, a) {
                            if (o || (o = new ix),
                            o$(s))
                                (function(t, e, r, n, o, s, a) {
                                    var h = nO(t, r)
                                      , u = nO(e, r)
                                      , l = a.get(u);
                                    if (l) {
                                        iA(t, r, l);
                                        return
                                    }
                                    var c = s ? s(h, u, r + "", t, e, a) : i
                                      , p = c === i;
                                    if (p) {
                                        var f = oD(u)
                                          , d = !f && oN(u)
                                          , y = !f && !d && o0(u);
                                        c = u,
                                        f || d || y ? oD(h) ? c = h : oB(h) ? c = rU(h) : d ? (p = !1,
                                        c = rR(u, !0)) : y ? (p = !1,
                                        c = rB(u, !0)) : c = [] : oX(u) || oL(u) ? (c = h,
                                        oL(h) ? c = o8(h) : (!o$(h) || oU(h)) && (c = nw(u))) : p = !1
                                    }
                                    p && (a.set(u, c),
                                    o(c, u, n, s, a),
                                    a.delete(u)),
                                    iA(t, r, c)
                                }
                                )(t, e, a, r, ro, n, o);
                            else {
                                var h = n ? n(nO(t, a), s, a + "", t, e, o) : i;
                                h === i && (h = s),
                                iA(t, a, h)
                            }
                        }, sf)
                    }
                    function rs(t, e) {
                        var r = t.length;
                        if (r)
                            return nT(e += e < 0 ? r : 0, r) ? t[e] : i
                    }
                    function ra(t, e, i) {
                        e = e.length ? ep(e, function(t) {
                            return oD(t) ? function(e) {
                                return iJ(e, 1 === t.length ? t[0] : t)
                            }
                            : t
                        }) : [sB];
                        var r = -1;
                        return e = ep(e, eO(nc())),
                        function(t, e) {
                            var i = t.length;
                            for (t.sort(e); i--; )
                                t[i] = t[i].value;
                            return t
                        }(ri(t, function(t, i, n) {
                            return {
                                criteria: ep(e, function(e) {
                                    return e(t)
                                }),
                                index: ++r,
                                value: t
                            }
                        }), function(t, e) {
                            return function(t, e, i) {
                                for (var r = -1, n = t.criteria, o = e.criteria, s = n.length, a = i.length; ++r < s; ) {
                                    var h = rN(n[r], o[r]);
                                    if (h) {
                                        if (r >= a)
                                            return h;
                                        return h * ("desc" == i[r] ? -1 : 1)
                                    }
                                }
                                return t.index - e.index
                            }(t, e, i)
                        })
                    }
                    function rh(t, e, i) {
                        for (var r = -1, n = e.length, o = {}; ++r < n; ) {
                            var s = e[r]
                              , a = iJ(t, s);
                            i(a, s) && rd(o, rI(s, t), a)
                        }
                        return o
                    }
                    function ru(t, e, i, r) {
                        var n = r ? eT : eb
                          , o = -1
                          , s = e.length
                          , a = t;
                        for (t === e && (e = rU(e)),
                        i && (a = ep(t, eO(i))); ++o < s; )
                            for (var h = 0, u = e[o], l = i ? i(u) : u; (h = n(a, l, h, r)) > -1; )
                                a !== t && t2.call(a, h, 1),
                                t2.call(t, h, 1);
                        return t
                    }
                    function rl(t, e) {
                        for (var i = t ? e.length : 0, r = i - 1; i--; ) {
                            var n = e[i];
                            if (i == r || n !== o) {
                                var o = n;
                                nT(n) ? t2.call(t, n, 1) : rx(t, n)
                            }
                        }
                        return t
                    }
                    function rc(t, e) {
                        return t + eY(e5() * (e - t + 1))
                    }
                    function rp(t, e) {
                        var i = "";
                        if (!t || e < 1 || e > 9007199254740991)
                            return i;
                        do
                            e % 2 && (i += t),
                            (e = eY(e / 2)) && (t += t);
                        while (e);
                        return i
                    }
                    function rf(t, e) {
                        return nI(nA(t, e, sB), t + "")
                    }
                    function rd(t, e, r, n) {
                        if (!o$(t))
                            return t;
                        e = rI(e, t);
                        for (var o = -1, s = e.length, a = s - 1, h = t; null != h && ++o < s; ) {
                            var u = nB(e[o])
                              , l = r;
                            if ("__proto__" === u || "constructor" === u || "prototype" === u)
                                break;
                            if (o != a) {
                                var c = h[u];
                                (l = n ? n(c, u, h) : i) === i && (l = o$(c) ? c : nT(e[o + 1]) ? [] : {})
                            }
                            iE(h, u, l),
                            h = h[u]
                        }
                        return t
                    }
                    var ry = io ? function(t, e) {
                        return io.set(t, e),
                        t
                    }
                    : sB
                      , rg = t8 ? function(t, e) {
                        return t8(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: sD(e),
                            writable: !0
                        })
                    }
                    : sB;
                    function rv(t, e, i) {
                        var r = -1
                          , n = t.length;
                        e < 0 && (e = -e > n ? 0 : n + e),
                        (i = i > n ? n : i) < 0 && (i += n),
                        n = e > i ? 0 : i - e >>> 0,
                        e >>>= 0;
                        for (var o = tm(n); ++r < n; )
                            o[r] = t[r + e];
                        return o
                    }
                    function rm(t, e) {
                        var i;
                        return ij(t, function(t, r, n) {
                            return !(i = e(t, r, n))
                        }),
                        !!i
                    }
                    function rw(t, e, i) {
                        var r = 0
                          , n = null == t ? r : t.length;
                        if ("number" == typeof e && e == e && n <= 2147483647) {
                            for (; r < n; ) {
                                var o = r + n >>> 1
                                  , s = t[o];
                                null !== s && !oQ(s) && (i ? s <= e : s < e) ? r = o + 1 : n = o
                            }
                            return n
                        }
                        return rb(t, e, sB, i)
                    }
                    function rb(t, e, r, n) {
                        var o = 0
                          , s = null == t ? 0 : t.length;
                        if (0 === s)
                            return 0;
                        e = r(e);
                        for (var a = e != e, h = null === e, u = oQ(e), l = e === i; o < s; ) {
                            var c = eY((o + s) / 2)
                              , p = r(t[c])
                              , f = p !== i
                              , d = null === p
                              , y = p == p
                              , g = oQ(p);
                            if (a)
                                var v = n || y;
                            else
                                v = l ? y && (n || f) : h ? y && f && (n || !d) : u ? y && f && !d && (n || !g) : !d && !g && (n ? p <= e : p < e);
                            v ? o = c + 1 : s = c
                        }
                        return e3(s, 4294967294)
                    }
                    function rT(t, e) {
                        for (var i = -1, r = t.length, n = 0, o = []; ++i < r; ) {
                            var s = t[i]
                              , a = e ? e(s) : s;
                            if (!i || !oz(a, h)) {
                                var h = a;
                                o[n++] = 0 === s ? 0 : s
                            }
                        }
                        return o
                    }
                    function r_(t) {
                        return "number" == typeof t ? t : oQ(t) ? a : +t
                    }
                    function rS(t) {
                        if ("string" == typeof t)
                            return t;
                        if (oD(t))
                            return ep(t, rS) + "";
                        if (oQ(t))
                            return iy ? iy.call(t) : "";
                        var e = t + "";
                        return "0" == e && 1 / t == -s ? "-0" : e
                    }
                    function rP(t, e, i) {
                        var r = -1
                          , n = el
                          , o = t.length
                          , s = !0
                          , a = []
                          , h = a;
                        if (i)
                            s = !1,
                            n = ec;
                        else if (o >= 200) {
                            var u = e ? null : r8(t);
                            if (u)
                                return eU(u);
                            s = !1,
                            n = eM,
                            h = new iP
                        } else
                            h = e ? [] : a;
                        t: for (; ++r < o; ) {
                            var l = t[r]
                              , c = e ? e(l) : l;
                            if (l = i || 0 !== l ? l : 0,
                            s && c == c) {
                                for (var p = h.length; p--; )
                                    if (h[p] === c)
                                        continue t;
                                e && h.push(c),
                                a.push(l)
                            } else
                                n(h, c, i) || (h !== a && h.push(c),
                                a.push(l))
                        }
                        return a
                    }
                    function rx(t, e) {
                        return e = rI(e, t),
                        null == (t = nE(t, e)) || delete t[nB(nJ(e))]
                    }
                    function rC(t, e, i, r) {
                        return rd(t, e, i(iJ(t, e)), r)
                    }
                    function rk(t, e, i, r) {
                        for (var n = t.length, o = r ? n : -1; (r ? o-- : ++o < n) && e(t[o], o, t); )
                            ;
                        return i ? rv(t, r ? 0 : o, r ? o + 1 : n) : rv(t, r ? o + 1 : 0, r ? n : o)
                    }
                    function rA(t, e) {
                        var i = t;
                        return i instanceof ib && (i = i.value()),
                        ed(e, function(t, e) {
                            return e.func.apply(e.thisArg, ef([t], e.args))
                        }, i)
                    }
                    function rE(t, e, i) {
                        var r = t.length;
                        if (r < 2)
                            return r ? rP(t[0]) : [];
                        for (var n = -1, o = tm(r); ++n < r; )
                            for (var s = t[n], a = -1; ++a < r; )
                                a != n && (o[n] = iN(o[n] || s, t[a], e, i));
                        return rP(i$(o, 1), e, i)
                    }
                    function rO(t, e, r) {
                        for (var n = -1, o = t.length, s = e.length, a = {}; ++n < o; ) {
                            var h = n < s ? e[n] : i;
                            r(a, t[n], h)
                        }
                        return a
                    }
                    function rz(t) {
                        return oB(t) ? t : []
                    }
                    function rM(t) {
                        return "function" == typeof t ? t : sB
                    }
                    function rI(t, e) {
                        return oD(t) ? t : nS(t, e) ? [t] : nF(o7(t))
                    }
                    function rL(t, e, r) {
                        var n = t.length;
                        return r = r === i ? n : r,
                        !e && r >= n ? t : rv(t, e, r)
                    }
                    var rD = ev || function(t) {
                        return t3.clearTimeout(t)
                    }
                    ;
                    function rR(t, e) {
                        if (e)
                            return t.slice();
                        var i = t.length
                          , r = tG ? tG(i) : new t.constructor(i);
                        return t.copy(r),
                        r
                    }
                    function rF(t) {
                        var e = new t.constructor(t.byteLength);
                        return new tH(e).set(new tH(t)),
                        e
                    }
                    function rB(t, e) {
                        var i = e ? rF(t.buffer) : t.buffer;
                        return new t.constructor(i,t.byteOffset,t.length)
                    }
                    function rN(t, e) {
                        if (t !== e) {
                            var r = t !== i
                              , n = null === t
                              , o = t == t
                              , s = oQ(t)
                              , a = e !== i
                              , h = null === e
                              , u = e == e
                              , l = oQ(e);
                            if (!h && !l && !s && t > e || s && a && u && !h && !l || n && a && u || !r && u || !o)
                                return 1;
                            if (!n && !s && !l && t < e || l && r && o && !n && !s || h && r && o || !a && o || !u)
                                return -1
                        }
                        return 0
                    }
                    function rj(t, e, i, r) {
                        for (var n = -1, o = t.length, s = i.length, a = -1, h = e.length, u = e2(o - s, 0), l = tm(h + u), c = !r; ++a < h; )
                            l[a] = e[a];
                        for (; ++n < s; )
                            (c || n < o) && (l[i[n]] = t[n]);
                        for (; u--; )
                            l[a++] = t[n++];
                        return l
                    }
                    function rH(t, e, i, r) {
                        for (var n = -1, o = t.length, s = -1, a = i.length, h = -1, u = e.length, l = e2(o - a, 0), c = tm(l + u), p = !r; ++n < l; )
                            c[n] = t[n];
                        for (var f = n; ++h < u; )
                            c[f + h] = e[h];
                        for (; ++s < a; )
                            (p || n < o) && (c[f + i[s]] = t[n++]);
                        return c
                    }
                    function rU(t, e) {
                        var i = -1
                          , r = t.length;
                        for (e || (e = tm(r)); ++i < r; )
                            e[i] = t[i];
                        return e
                    }
                    function rW(t, e, r, n) {
                        var o = !r;
                        r || (r = {});
                        for (var s = -1, a = e.length; ++s < a; ) {
                            var h = e[s]
                              , u = n ? n(r[h], t[h], h, r, t) : i;
                            u === i && (u = t[h]),
                            o ? iI(r, h, u) : iE(r, h, u)
                        }
                        return r
                    }
                    function rG(t, e) {
                        return function(i, r) {
                            var n = oD(i) ? es : iz
                              , o = e ? e() : {};
                            return n(i, t, nc(r, 2), o)
                        }
                    }
                    function r$(t) {
                        return rf(function(e, r) {
                            var n = -1
                              , o = r.length
                              , s = o > 1 ? r[o - 1] : i
                              , a = o > 2 ? r[2] : i;
                            for (s = t.length > 3 && "function" == typeof s ? (o--,
                            s) : i,
                            a && n_(r[0], r[1], a) && (s = o < 3 ? i : s,
                            o = 1),
                            e = tS(e); ++n < o; ) {
                                var h = r[n];
                                h && t(e, h, n, s)
                            }
                            return e
                        })
                    }
                    function rq(t, e) {
                        return function(i, r) {
                            if (null == i)
                                return i;
                            if (!oF(i))
                                return t(i, r);
                            for (var n = i.length, o = e ? n : -1, s = tS(i); (e ? o-- : ++o < n) && !1 !== r(s[o], o, s); )
                                ;
                            return i
                        }
                    }
                    function rV(t) {
                        return function(e, i, r) {
                            for (var n = -1, o = tS(e), s = r(e), a = s.length; a--; ) {
                                var h = s[t ? a : ++n];
                                if (!1 === i(o[h], h, o))
                                    break
                            }
                            return e
                        }
                    }
                    function rK(t) {
                        return function(e) {
                            var r = eB(e = o7(e)) ? eG(e) : i
                              , n = r ? r[0] : e.charAt(0)
                              , o = r ? rL(r, 1).join("") : e.slice(1);
                            return n[t]() + o
                        }
                    }
                    function rX(t) {
                        return function(e) {
                            return ed(sM(sP(e).replace(tU, "")), t, "")
                        }
                    }
                    function rY(t) {
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0],e[1]);
                            case 3:
                                return new t(e[0],e[1],e[2]);
                            case 4:
                                return new t(e[0],e[1],e[2],e[3]);
                            case 5:
                                return new t(e[0],e[1],e[2],e[3],e[4]);
                            case 6:
                                return new t(e[0],e[1],e[2],e[3],e[4],e[5]);
                            case 7:
                                return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])
                            }
                            var i = iv(t.prototype)
                              , r = t.apply(i, e);
                            return o$(r) ? r : i
                        }
                    }
                    function rJ(t) {
                        return function(e, r, n) {
                            var o = tS(e);
                            if (!oF(e)) {
                                var s = nc(r, 3);
                                e = sp(e),
                                r = function(t) {
                                    return s(o[t], t, o)
                                }
                            }
                            var a = t(e, r, n);
                            return a > -1 ? o[s ? e[a] : a] : i
                        }
                    }
                    function rZ(t) {
                        return no(function(e) {
                            var n = e.length
                              , o = n
                              , s = iw.prototype.thru;
                            for (t && e.reverse(); o--; ) {
                                var a = e[o];
                                if ("function" != typeof a)
                                    throw new tC(r);
                                if (s && !h && "wrapper" == nu(a))
                                    var h = new iw([],!0)
                            }
                            for (o = h ? o : n; ++o < n; ) {
                                var u = nu(a = e[o])
                                  , l = "wrapper" == u ? nh(a) : i;
                                h = l && nP(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? h[nu(l[0])].apply(h, l[3]) : 1 == a.length && nP(a) ? h[u]() : h.thru(a)
                            }
                            return function() {
                                var t = arguments
                                  , i = t[0];
                                if (h && 1 == t.length && oD(i))
                                    return h.plant(i).value();
                                for (var r = 0, o = n ? e[r].apply(this, t) : i; ++r < n; )
                                    o = e[r].call(this, o);
                                return o
                            }
                        })
                    }
                    function rQ(t, e, r, n, o, s, a, h, u, l) {
                        var c = 128 & e
                          , p = 1 & e
                          , f = 2 & e
                          , d = 24 & e
                          , y = 512 & e
                          , g = f ? i : rY(t);
                        return function v() {
                            for (var m = arguments.length, w = tm(m), b = m; b--; )
                                w[b] = arguments[b];
                            if (d)
                                var T = nl(v)
                                  , _ = function(t, e) {
                                    for (var i = t.length, r = 0; i--; )
                                        t[i] === e && ++r;
                                    return r
                                }(w, T);
                            if (n && (w = rj(w, n, o, d)),
                            s && (w = rH(w, s, a, d)),
                            m -= _,
                            d && m < l) {
                                var S = eH(w, T);
                                return r5(t, e, rQ, v.placeholder, r, w, S, h, u, l - m)
                            }
                            var P = p ? r : this
                              , x = f ? P[t] : t;
                            return m = w.length,
                            h ? w = function(t, e) {
                                for (var r = t.length, n = e3(e.length, r), o = rU(t); n--; ) {
                                    var s = e[n];
                                    t[n] = nT(s, r) ? o[s] : i
                                }
                                return t
                            }(w, h) : y && m > 1 && w.reverse(),
                            c && u < m && (w.length = u),
                            this && this !== t3 && this instanceof v && (x = g || rY(x)),
                            x.apply(P, w)
                        }
                    }
                    function r0(t, e) {
                        return function(i, r) {
                            var n, o;
                            return n = e(r),
                            o = {},
                            iK(i, function(e, i, r) {
                                t(o, n(e), i, r)
                            }),
                            o
                        }
                    }
                    function r1(t, e) {
                        return function(r, n) {
                            var o;
                            if (r === i && n === i)
                                return e;
                            if (r !== i && (o = r),
                            n !== i) {
                                if (o === i)
                                    return n;
                                "string" == typeof r || "string" == typeof n ? (r = rS(r),
                                n = rS(n)) : (r = r_(r),
                                n = r_(n)),
                                o = t(r, n)
                            }
                            return o
                        }
                    }
                    function r2(t) {
                        return no(function(e) {
                            return e = ep(e, eO(nc())),
                            rf(function(i) {
                                var r = this;
                                return t(e, function(t) {
                                    return eo(t, r, i)
                                })
                            })
                        })
                    }
                    function r3(t, e) {
                        var r = (e = e === i ? " " : rS(e)).length;
                        if (r < 2)
                            return r ? rp(e, t) : e;
                        var n = rp(e, eX(t / eW(e)));
                        return eB(e) ? rL(eG(n), 0, t).join("") : n.slice(0, t)
                    }
                    function r4(t) {
                        return function(e, r, n) {
                            return n && "number" != typeof n && n_(e, r, n) && (r = n = i),
                            e = o4(e),
                            r === i ? (r = e,
                            e = 0) : r = o4(r),
                            n = n === i ? e < r ? 1 : -1 : o4(n),
                            function(t, e, i, r) {
                                for (var n = -1, o = e2(eX((e - t) / (i || 1)), 0), s = tm(o); o--; )
                                    s[r ? o : ++n] = t,
                                    t += i;
                                return s
                            }(e, r, n, t)
                        }
                    }
                    function r9(t) {
                        return function(e, i) {
                            return "string" == typeof e && "string" == typeof i || (e = o6(e),
                            i = o6(i)),
                            t(e, i)
                        }
                    }
                    function r5(t, e, r, n, o, s, a, h, u, l) {
                        var c = 8 & e
                          , p = c ? a : i
                          , f = c ? i : a
                          , d = c ? s : i
                          , y = c ? i : s;
                        e |= c ? 32 : 64,
                        4 & (e &= ~(c ? 64 : 32)) || (e &= -4);
                        var g = [t, e, o, d, p, y, f, h, u, l]
                          , v = r.apply(i, g);
                        return nP(t) && nz(v, g),
                        v.placeholder = n,
                        nL(v, t, e)
                    }
                    function r6(t) {
                        var e = t_[t];
                        return function(t, i) {
                            if (t = o6(t),
                            (i = null == i ? 0 : e3(o9(i), 292)) && eQ(t)) {
                                var r = (o7(t) + "e").split("e");
                                return +((r = (o7(e(r[0] + "e" + (+r[1] + i))) + "e").split("e"))[0] + "e" + (+r[1] - i))
                            }
                            return e(t)
                        }
                    }
                    var r8 = ie && 1 / eU(new ie([, -0]))[1] == s ? function(t) {
                        return new ie(t)
                    }
                    : sW;
                    function r7(t) {
                        return function(e) {
                            var i, r, n = nv(e);
                            return n == g ? eN(e) : n == T ? (i = -1,
                            r = Array(e.size),
                            e.forEach(function(t) {
                                r[++i] = [t, t]
                            }),
                            r) : ep(t(e), function(t) {
                                return [t, e[t]]
                            })
                        }
                    }
                    function nt(t, e, n, s, a, h, u, l) {
                        var c = 2 & e;
                        if (!c && "function" != typeof t)
                            throw new tC(r);
                        var p = s ? s.length : 0;
                        if (p || (e &= -97,
                        s = a = i),
                        u = u === i ? u : e2(o9(u), 0),
                        l = l === i ? l : o9(l),
                        p -= a ? a.length : 0,
                        64 & e) {
                            var f = s
                              , d = a;
                            s = a = i
                        }
                        var y = c ? i : nh(t)
                          , g = [t, e, n, s, a, f, d, h, u, l];
                        if (y && function(t, e) {
                            var i = t[1]
                              , r = e[1]
                              , n = i | r
                              , s = n < 131
                              , a = 128 == r && 8 == i || 128 == r && 256 == i && t[7].length <= e[8] || 384 == r && e[7].length <= e[8] && 8 == i;
                            if (s || a) {
                                1 & r && (t[2] = e[2],
                                n |= 1 & i ? 0 : 4);
                                var h = e[3];
                                if (h) {
                                    var u = t[3];
                                    t[3] = u ? rj(u, h, e[4]) : h,
                                    t[4] = u ? eH(t[3], o) : e[4]
                                }
                                (h = e[5]) && (u = t[5],
                                t[5] = u ? rH(u, h, e[6]) : h,
                                t[6] = u ? eH(t[5], o) : e[6]),
                                (h = e[7]) && (t[7] = h),
                                128 & r && (t[8] = null == t[8] ? e[8] : e3(t[8], e[8])),
                                null == t[9] && (t[9] = e[9]),
                                t[0] = e[0],
                                t[1] = n
                            }
                        }(g, y),
                        t = g[0],
                        e = g[1],
                        n = g[2],
                        s = g[3],
                        a = g[4],
                        (l = g[9] = g[9] === i ? c ? 0 : t.length : e2(g[9] - p, 0)) || !(24 & e) || (e &= -25),
                        e && 1 != e)
                            8 == e || 16 == e ? (v = t,
                            m = e,
                            w = l,
                            b = rY(v),
                            M = function t() {
                                for (var e = arguments.length, r = tm(e), n = e, o = nl(t); n--; )
                                    r[n] = arguments[n];
                                var s = e < 3 && r[0] !== o && r[e - 1] !== o ? [] : eH(r, o);
                                return (e -= s.length) < w ? r5(v, m, rQ, t.placeholder, i, r, s, i, i, w - e) : eo(this && this !== t3 && this instanceof t ? b : v, this, r)
                            }
                            ) : 32 != e && 33 != e || a.length ? M = rQ.apply(i, g) : (T = t,
                            _ = e,
                            S = n,
                            P = s,
                            x = 1 & _,
                            C = rY(T),
                            M = function t() {
                                for (var e = -1, i = arguments.length, r = -1, n = P.length, o = tm(n + i), s = this && this !== t3 && this instanceof t ? C : T; ++r < n; )
                                    o[r] = P[r];
                                for (; i--; )
                                    o[r++] = arguments[++e];
                                return eo(s, x ? S : this, o)
                            }
                            );
                        else
                            var v, m, w, b, T, _, S, P, x, C, k, A, E, O, z, M = (k = t,
                            A = e,
                            E = n,
                            O = 1 & A,
                            z = rY(k),
                            function t() {
                                return (this && this !== t3 && this instanceof t ? z : k).apply(O ? E : this, arguments)
                            }
                            );
                        return nL((y ? ry : nz)(M, g), t, e)
                    }
                    function ne(t, e, r, n) {
                        return t === i || oz(t, tE[r]) && !tM.call(n, r) ? e : t
                    }
                    function ni(t, e, r, n, o, s) {
                        return o$(t) && o$(e) && (s.set(e, t),
                        ro(t, e, i, ni, s),
                        s.delete(e)),
                        t
                    }
                    function nr(t) {
                        return oX(t) ? i : t
                    }
                    function nn(t, e, r, n, o, s) {
                        var a = 1 & r
                          , h = t.length
                          , u = e.length;
                        if (h != u && !(a && u > h))
                            return !1;
                        var l = s.get(t)
                          , c = s.get(e);
                        if (l && c)
                            return l == e && c == t;
                        var p = -1
                          , f = !0
                          , d = 2 & r ? new iP : i;
                        for (s.set(t, e),
                        s.set(e, t); ++p < h; ) {
                            var y = t[p]
                              , g = e[p];
                            if (n)
                                var v = a ? n(g, y, p, e, t, s) : n(y, g, p, t, e, s);
                            if (v !== i) {
                                if (v)
                                    continue;
                                f = !1;
                                break
                            }
                            if (d) {
                                if (!eg(e, function(t, e) {
                                    if (!eM(d, e) && (y === t || o(y, t, r, n, s)))
                                        return d.push(e)
                                })) {
                                    f = !1;
                                    break
                                }
                            } else if (!(y === g || o(y, g, r, n, s))) {
                                f = !1;
                                break
                            }
                        }
                        return s.delete(t),
                        s.delete(e),
                        f
                    }
                    function no(t) {
                        return nI(nA(t, i, nq), t + "")
                    }
                    function ns(t) {
                        return iZ(t, sp, ny)
                    }
                    function na(t) {
                        return iZ(t, sf, ng)
                    }
                    var nh = io ? function(t) {
                        return io.get(t)
                    }
                    : sW;
                    function nu(t) {
                        for (var e = t.name + "", i = is[e], r = tM.call(is, e) ? i.length : 0; r--; ) {
                            var n = i[r]
                              , o = n.func;
                            if (null == o || o == t)
                                return n.name
                        }
                        return e
                    }
                    function nl(t) {
                        return (tM.call(ig, "placeholder") ? ig : t).placeholder
                    }
                    function nc() {
                        var t = ig.iteratee || sN;
                        return t = t === sN ? i7 : t,
                        arguments.length ? t(arguments[0], arguments[1]) : t
                    }
                    function np(t, e) {
                        var i, r = t.__data__;
                        return ("string" == (i = typeof e) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== e : null === e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                    }
                    function nf(t) {
                        for (var e = sp(t), i = e.length; i--; ) {
                            var r = e[i]
                              , n = t[r];
                            e[i] = [r, n, n == n && !o$(n)]
                        }
                        return e
                    }
                    function nd(t, e) {
                        var r = null == t ? i : t[e];
                        return i8(r) ? r : i
                    }
                    var ny = eJ ? function(t) {
                        return null == t ? [] : eu(eJ(t = tS(t)), function(e) {
                            return t1.call(t, e)
                        })
                    }
                    : sY
                      , ng = eJ ? function(t) {
                        for (var e = []; t; )
                            ef(e, ny(t)),
                            t = tq(t);
                        return e
                    }
                    : sY
                      , nv = iQ;
                    function nm(t, e, i) {
                        e = rI(e, t);
                        for (var r = -1, n = e.length, o = !1; ++r < n; ) {
                            var s = nB(e[r]);
                            if (!(o = null != t && i(t, s)))
                                break;
                            t = t[s]
                        }
                        return o || ++r != n ? o : !!(n = null == t ? 0 : t.length) && oG(n) && nT(s, n) && (oD(t) || oL(t))
                    }
                    function nw(t) {
                        return "function" != typeof t.constructor || nC(t) ? {} : iv(tq(t))
                    }
                    function nb(t) {
                        return oD(t) || oL(t) || !!(t4 && t && t[t4])
                    }
                    function nT(t, e) {
                        var i = typeof t;
                        return !!(e = null != e ? e : 9007199254740991) && ("number" == i || "symbol" != i && tc.test(t)) && t > -1 && t % 1 == 0 && t < e
                    }
                    function n_(t, e, i) {
                        if (!o$(i))
                            return !1;
                        var r = typeof e;
                        return ("number" == r ? !!(oF(i) && nT(e, i.length)) : "string" == r && e in i) && oz(i[e], t)
                    }
                    function nS(t, e) {
                        if (oD(t))
                            return !1;
                        var i = typeof t;
                        return !!("number" == i || "symbol" == i || "boolean" == i || null == t || oQ(t)) || V.test(t) || !q.test(t) || null != e && t in tS(e)
                    }
                    function nP(t) {
                        var e = nu(t)
                          , i = ig[e];
                        if ("function" != typeof i || !(e in ib.prototype))
                            return !1;
                        if (t === i)
                            return !0;
                        var r = nh(i);
                        return !!r && t === r[0]
                    }
                    (e8 && nv(new e8(new ArrayBuffer(1))) != C || e7 && nv(new e7) != g || it && nv(it.resolve()) != w || ie && nv(new ie) != T || ii && nv(new ii) != P) && (nv = function(t) {
                        var e = iQ(t)
                          , r = e == m ? t.constructor : i
                          , n = r ? nN(r) : "";
                        if (n)
                            switch (n) {
                            case ia:
                                return C;
                            case ih:
                                return g;
                            case iu:
                                return w;
                            case il:
                                return T;
                            case ic:
                                return P
                            }
                        return e
                    }
                    );
                    var nx = tO ? oU : sJ;
                    function nC(t) {
                        var e = t && t.constructor;
                        return t === ("function" == typeof e && e.prototype || tE)
                    }
                    function nk(t, e) {
                        return function(r) {
                            return null != r && r[t] === e && (e !== i || t in tS(r))
                        }
                    }
                    function nA(t, e, r) {
                        return e = e2(e === i ? t.length - 1 : e, 0),
                        function() {
                            for (var i = arguments, n = -1, o = e2(i.length - e, 0), s = tm(o); ++n < o; )
                                s[n] = i[e + n];
                            n = -1;
                            for (var a = tm(e + 1); ++n < e; )
                                a[n] = i[n];
                            return a[e] = r(s),
                            eo(t, this, a)
                        }
                    }
                    function nE(t, e) {
                        return e.length < 2 ? t : iJ(t, rv(e, 0, -1))
                    }
                    function nO(t, e) {
                        if (!("constructor" === e && "function" == typeof t[e]) && "__proto__" != e)
                            return t[e]
                    }
                    var nz = nD(ry)
                      , nM = eK || function(t, e) {
                        return t3.setTimeout(t, e)
                    }
                      , nI = nD(rg);
                    function nL(t, e, i) {
                        var r, n, o = e + "";
                        return nI(t, function(t, e) {
                            var i = e.length;
                            if (!i)
                                return t;
                            var r = i - 1;
                            return e[r] = (i > 1 ? "& " : "") + e[r],
                            e = e.join(i > 2 ? ", " : " "),
                            t.replace(Q, `{
/* [wrapped with ` + e + `] */
`)
                        }(o, (n = (r = o.match(tt)) ? r[1].split(te) : [],
                        ea(h, function(t) {
                            var e = "_." + t[0];
                            i & t[1] && !el(n, e) && n.push(e)
                        }),
                        n.sort())))
                    }
                    function nD(t) {
                        var e = 0
                          , r = 0;
                        return function() {
                            var n = e4()
                              , o = 16 - (n - r);
                            if (r = n,
                            o > 0) {
                                if (++e >= 800)
                                    return arguments[0]
                            } else
                                e = 0;
                            return t.apply(i, arguments)
                        }
                    }
                    function nR(t, e) {
                        var r = -1
                          , n = t.length
                          , o = n - 1;
                        for (e = e === i ? n : e; ++r < e; ) {
                            var s = rc(r, o)
                              , a = t[s];
                            t[s] = t[r],
                            t[r] = a
                        }
                        return t.length = e,
                        t
                    }
                    var nF = (tg = (ty = ox(function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""),
                        t.replace(K, function(t, i, r, n) {
                            e.push(r ? n.replace(tn, "$1") : i || t)
                        }),
                        e
                    }, function(t) {
                        return 500 === tg.size && tg.clear(),
                        t
                    })).cache,
                    ty);
                    function nB(t) {
                        if ("string" == typeof t || oQ(t))
                            return t;
                        var e = t + "";
                        return "0" == e && 1 / t == -s ? "-0" : e
                    }
                    function nN(t) {
                        if (null != t) {
                            try {
                                return tz.call(t)
                            } catch (t) {}
                            try {
                                return t + ""
                            } catch (t) {}
                        }
                        return ""
                    }
                    function nj(t) {
                        if (t instanceof ib)
                            return t.clone();
                        var e = new iw(t.__wrapped__,t.__chain__);
                        return e.__actions__ = rU(t.__actions__),
                        e.__index__ = t.__index__,
                        e.__values__ = t.__values__,
                        e
                    }
                    var nH = rf(function(t, e) {
                        return oB(t) ? iN(t, i$(e, 1, oB, !0)) : []
                    })
                      , nU = rf(function(t, e) {
                        var r = nJ(e);
                        return oB(r) && (r = i),
                        oB(t) ? iN(t, i$(e, 1, oB, !0), nc(r, 2)) : []
                    })
                      , nW = rf(function(t, e) {
                        var r = nJ(e);
                        return oB(r) && (r = i),
                        oB(t) ? iN(t, i$(e, 1, oB, !0), i, r) : []
                    });
                    function nG(t, e, i) {
                        var r = null == t ? 0 : t.length;
                        if (!r)
                            return -1;
                        var n = null == i ? 0 : o9(i);
                        return n < 0 && (n = e2(r + n, 0)),
                        ew(t, nc(e, 3), n)
                    }
                    function n$(t, e, r) {
                        var n = null == t ? 0 : t.length;
                        if (!n)
                            return -1;
                        var o = n - 1;
                        return r !== i && (o = o9(r),
                        o = r < 0 ? e2(n + o, 0) : e3(o, n - 1)),
                        ew(t, nc(e, 3), o, !0)
                    }
                    function nq(t) {
                        return (null == t ? 0 : t.length) ? i$(t, 1) : []
                    }
                    function nV(t) {
                        return t && t.length ? t[0] : i
                    }
                    var nK = rf(function(t) {
                        var e = ep(t, rz);
                        return e.length && e[0] === t[0] ? i3(e) : []
                    })
                      , nX = rf(function(t) {
                        var e = nJ(t)
                          , r = ep(t, rz);
                        return e === nJ(r) ? e = i : r.pop(),
                        r.length && r[0] === t[0] ? i3(r, nc(e, 2)) : []
                    })
                      , nY = rf(function(t) {
                        var e = nJ(t)
                          , r = ep(t, rz);
                        return (e = "function" == typeof e ? e : i) && r.pop(),
                        r.length && r[0] === t[0] ? i3(r, i, e) : []
                    });
                    function nJ(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? t[e - 1] : i
                    }
                    var nZ = rf(nQ);
                    function nQ(t, e) {
                        return t && t.length && e && e.length ? ru(t, e) : t
                    }
                    var n0 = no(function(t, e) {
                        var i = null == t ? 0 : t.length
                          , r = iL(t, e);
                        return rl(t, ep(e, function(t) {
                            return nT(t, i) ? +t : t
                        }).sort(rN)),
                        r
                    });
                    function n1(t) {
                        return null == t ? t : e6.call(t)
                    }
                    var n2 = rf(function(t) {
                        return rP(i$(t, 1, oB, !0))
                    })
                      , n3 = rf(function(t) {
                        var e = nJ(t);
                        return oB(e) && (e = i),
                        rP(i$(t, 1, oB, !0), nc(e, 2))
                    })
                      , n4 = rf(function(t) {
                        var e = nJ(t);
                        return e = "function" == typeof e ? e : i,
                        rP(i$(t, 1, oB, !0), i, e)
                    });
                    function n9(t) {
                        if (!(t && t.length))
                            return [];
                        var e = 0;
                        return t = eu(t, function(t) {
                            if (oB(t))
                                return e = e2(t.length, e),
                                !0
                        }),
                        eA(e, function(e) {
                            return ep(t, eP(e))
                        })
                    }
                    function n5(t, e) {
                        if (!(t && t.length))
                            return [];
                        var r = n9(t);
                        return null == e ? r : ep(r, function(t) {
                            return eo(e, i, t)
                        })
                    }
                    var n6 = rf(function(t, e) {
                        return oB(t) ? iN(t, e) : []
                    })
                      , n8 = rf(function(t) {
                        return rE(eu(t, oB))
                    })
                      , n7 = rf(function(t) {
                        var e = nJ(t);
                        return oB(e) && (e = i),
                        rE(eu(t, oB), nc(e, 2))
                    })
                      , ot = rf(function(t) {
                        var e = nJ(t);
                        return e = "function" == typeof e ? e : i,
                        rE(eu(t, oB), i, e)
                    })
                      , oe = rf(n9)
                      , oi = rf(function(t) {
                        var e = t.length
                          , r = e > 1 ? t[e - 1] : i;
                        return r = "function" == typeof r ? (t.pop(),
                        r) : i,
                        n5(t, r)
                    });
                    function or(t) {
                        var e = ig(t);
                        return e.__chain__ = !0,
                        e
                    }
                    function on(t, e) {
                        return e(t)
                    }
                    var oo = no(function(t) {
                        var e = t.length
                          , r = e ? t[0] : 0
                          , n = this.__wrapped__
                          , o = function(e) {
                            return iL(e, t)
                        };
                        return !(e > 1) && !this.__actions__.length && n instanceof ib && nT(r) ? ((n = n.slice(r, +r + (e ? 1 : 0))).__actions__.push({
                            func: on,
                            args: [o],
                            thisArg: i
                        }),
                        new iw(n,this.__chain__).thru(function(t) {
                            return e && !t.length && t.push(i),
                            t
                        })) : this.thru(o)
                    })
                      , os = rG(function(t, e, i) {
                        tM.call(t, i) ? ++t[i] : iI(t, i, 1)
                    })
                      , oa = rJ(nG)
                      , oh = rJ(n$);
                    function ou(t, e) {
                        return (oD(t) ? ea : ij)(t, nc(e, 3))
                    }
                    function ol(t, e) {
                        return (oD(t) ? function(t, e) {
                            for (var i = null == t ? 0 : t.length; i-- && !1 !== e(t[i], i, t); )
                                ;
                            return t
                        }
                        : iH)(t, nc(e, 3))
                    }
                    var oc = rG(function(t, e, i) {
                        tM.call(t, i) ? t[i].push(e) : iI(t, i, [e])
                    })
                      , op = rf(function(t, e, i) {
                        var r = -1
                          , n = "function" == typeof e
                          , o = oF(t) ? tm(t.length) : [];
                        return ij(t, function(t) {
                            o[++r] = n ? eo(e, t, i) : i4(t, e, i)
                        }),
                        o
                    })
                      , of = rG(function(t, e, i) {
                        iI(t, i, e)
                    });
                    function od(t, e) {
                        return (oD(t) ? ep : ri)(t, nc(e, 3))
                    }
                    var oy = rG(function(t, e, i) {
                        t[i ? 0 : 1].push(e)
                    }, function() {
                        return [[], []]
                    })
                      , og = rf(function(t, e) {
                        if (null == t)
                            return [];
                        var i = e.length;
                        return i > 1 && n_(t, e[0], e[1]) ? e = [] : i > 2 && n_(e[0], e[1], e[2]) && (e = [e[0]]),
                        ra(t, i$(e, 1), [])
                    })
                      , ov = ex || function() {
                        return t3.Date.now()
                    }
                    ;
                    function om(t, e, r) {
                        return e = r ? i : e,
                        e = t && null == e ? t.length : e,
                        nt(t, 128, i, i, i, i, e)
                    }
                    function ow(t, e) {
                        var n;
                        if ("function" != typeof e)
                            throw new tC(r);
                        return t = o9(t),
                        function() {
                            return --t > 0 && (n = e.apply(this, arguments)),
                            t <= 1 && (e = i),
                            n
                        }
                    }
                    var ob = rf(function(t, e, i) {
                        var r = 1;
                        if (i.length) {
                            var n = eH(i, nl(ob));
                            r |= 32
                        }
                        return nt(t, r, e, i, n)
                    })
                      , oT = rf(function(t, e, i) {
                        var r = 3;
                        if (i.length) {
                            var n = eH(i, nl(oT));
                            r |= 32
                        }
                        return nt(e, r, t, i, n)
                    });
                    function o_(t, e, n) {
                        var o, s, a, h, u, l, c = 0, p = !1, f = !1, d = !0;
                        if ("function" != typeof t)
                            throw new tC(r);
                        function y(e) {
                            var r = o
                              , n = s;
                            return o = s = i,
                            c = e,
                            h = t.apply(n, r)
                        }
                        function g(t) {
                            var r = t - l
                              , n = t - c;
                            return l === i || r >= e || r < 0 || f && n >= a
                        }
                        function v() {
                            var t, i, r, n = ov();
                            if (g(n))
                                return m(n);
                            u = nM(v, (t = n - l,
                            i = n - c,
                            r = e - t,
                            f ? e3(r, a - i) : r))
                        }
                        function m(t) {
                            return u = i,
                            d && o ? y(t) : (o = s = i,
                            h)
                        }
                        function w() {
                            var t, r = ov(), n = g(r);
                            if (o = arguments,
                            s = this,
                            l = r,
                            n) {
                                if (u === i)
                                    return c = t = l,
                                    u = nM(v, e),
                                    p ? y(t) : h;
                                if (f)
                                    return rD(u),
                                    u = nM(v, e),
                                    y(l)
                            }
                            return u === i && (u = nM(v, e)),
                            h
                        }
                        return e = o6(e) || 0,
                        o$(n) && (p = !!n.leading,
                        a = (f = "maxWait"in n) ? e2(o6(n.maxWait) || 0, e) : a,
                        d = "trailing"in n ? !!n.trailing : d),
                        w.cancel = function() {
                            u !== i && rD(u),
                            c = 0,
                            o = l = s = u = i
                        }
                        ,
                        w.flush = function() {
                            return u === i ? h : m(ov())
                        }
                        ,
                        w
                    }
                    var oS = rf(function(t, e) {
                        return iB(t, 1, e)
                    })
                      , oP = rf(function(t, e, i) {
                        return iB(t, o6(e) || 0, i)
                    });
                    function ox(t, e) {
                        if ("function" != typeof t || null != e && "function" != typeof e)
                            throw new tC(r);
                        var i = function() {
                            var r = arguments
                              , n = e ? e.apply(this, r) : r[0]
                              , o = i.cache;
                            if (o.has(n))
                                return o.get(n);
                            var s = t.apply(this, r);
                            return i.cache = o.set(n, s) || o,
                            s
                        };
                        return i.cache = new (ox.Cache || iS),
                        i
                    }
                    function oC(t) {
                        if ("function" != typeof t)
                            throw new tC(r);
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                            case 0:
                                return !t.call(this);
                            case 1:
                                return !t.call(this, e[0]);
                            case 2:
                                return !t.call(this, e[0], e[1]);
                            case 3:
                                return !t.call(this, e[0], e[1], e[2])
                            }
                            return !t.apply(this, e)
                        }
                    }
                    ox.Cache = iS;
                    var ok = rf(function(t, e) {
                        var i = (e = 1 == e.length && oD(e[0]) ? ep(e[0], eO(nc())) : ep(i$(e, 1), eO(nc()))).length;
                        return rf(function(r) {
                            for (var n = -1, o = e3(r.length, i); ++n < o; )
                                r[n] = e[n].call(this, r[n]);
                            return eo(t, this, r)
                        })
                    })
                      , oA = rf(function(t, e) {
                        var r = eH(e, nl(oA));
                        return nt(t, 32, i, e, r)
                    })
                      , oE = rf(function(t, e) {
                        var r = eH(e, nl(oE));
                        return nt(t, 64, i, e, r)
                    })
                      , oO = no(function(t, e) {
                        return nt(t, 256, i, i, i, e)
                    });
                    function oz(t, e) {
                        return t === e || t != t && e != e
                    }
                    var oM = r9(i0)
                      , oI = r9(function(t, e) {
                        return t >= e
                    })
                      , oL = i9(function() {
                        return arguments
                    }()) ? i9 : function(t) {
                        return oq(t) && tM.call(t, "callee") && !t1.call(t, "callee")
                    }
                      , oD = tm.isArray
                      , oR = t7 ? eO(t7) : function(t) {
                        return oq(t) && iQ(t) == x
                    }
                    ;
                    function oF(t) {
                        return null != t && oG(t.length) && !oU(t)
                    }
                    function oB(t) {
                        return oq(t) && oF(t)
                    }
                    var oN = eZ || sJ
                      , oj = et ? eO(et) : function(t) {
                        return oq(t) && iQ(t) == p
                    }
                    ;
                    function oH(t) {
                        if (!oq(t))
                            return !1;
                        var e = iQ(t);
                        return e == f || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !oX(t)
                    }
                    function oU(t) {
                        if (!o$(t))
                            return !1;
                        var e = iQ(t);
                        return e == d || e == y || "[object AsyncFunction]" == e || "[object Proxy]" == e
                    }
                    function oW(t) {
                        return "number" == typeof t && t == o9(t)
                    }
                    function oG(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                    }
                    function o$(t) {
                        var e = typeof t;
                        return null != t && ("object" == e || "function" == e)
                    }
                    function oq(t) {
                        return null != t && "object" == typeof t
                    }
                    var oV = ee ? eO(ee) : function(t) {
                        return oq(t) && nv(t) == g
                    }
                    ;
                    function oK(t) {
                        return "number" == typeof t || oq(t) && iQ(t) == v
                    }
                    function oX(t) {
                        if (!oq(t) || iQ(t) != m)
                            return !1;
                        var e = tq(t);
                        if (null === e)
                            return !0;
                        var i = tM.call(e, "constructor") && e.constructor;
                        return "function" == typeof i && i instanceof i && tz.call(i) == tR
                    }
                    var oY = ei ? eO(ei) : function(t) {
                        return oq(t) && iQ(t) == b
                    }
                      , oJ = er ? eO(er) : function(t) {
                        return oq(t) && nv(t) == T
                    }
                    ;
                    function oZ(t) {
                        return "string" == typeof t || !oD(t) && oq(t) && iQ(t) == _
                    }
                    function oQ(t) {
                        return "symbol" == typeof t || oq(t) && iQ(t) == S
                    }
                    var o0 = en ? eO(en) : function(t) {
                        return oq(t) && oG(t.length) && !!tY[iQ(t)]
                    }
                      , o1 = r9(re)
                      , o2 = r9(function(t, e) {
                        return t <= e
                    });
                    function o3(t) {
                        if (!t)
                            return [];
                        if (oF(t))
                            return oZ(t) ? eG(t) : rU(t);
                        if (t9 && t[t9])
                            return function(t) {
                                for (var e, i = []; !(e = t.next()).done; )
                                    i.push(e.value);
                                return i
                            }(t[t9]());
                        var e = nv(t);
                        return (e == g ? eN : e == T ? eU : sT)(t)
                    }
                    function o4(t) {
                        return t ? (t = o6(t)) === s || t === -s ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0
                    }
                    function o9(t) {
                        var e = o4(t)
                          , i = e % 1;
                        return e == e ? i ? e - i : e : 0
                    }
                    function o5(t) {
                        return t ? iD(o9(t), 0, 4294967295) : 0
                    }
                    function o6(t) {
                        if ("number" == typeof t)
                            return t;
                        if (oQ(t))
                            return a;
                        if (o$(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = o$(e) ? e + "" : e
                        }
                        if ("string" != typeof t)
                            return 0 === t ? t : +t;
                        t = eE(t);
                        var i = th.test(t);
                        return i || tl.test(t) ? t0(t.slice(2), i ? 2 : 8) : ta.test(t) ? a : +t
                    }
                    function o8(t) {
                        return rW(t, sf(t))
                    }
                    function o7(t) {
                        return null == t ? "" : rS(t)
                    }
                    var st = r$(function(t, e) {
                        if (nC(e) || oF(e)) {
                            rW(e, sp(e), t);
                            return
                        }
                        for (var i in e)
                            tM.call(e, i) && iE(t, i, e[i])
                    })
                      , se = r$(function(t, e) {
                        rW(e, sf(e), t)
                    })
                      , si = r$(function(t, e, i, r) {
                        rW(e, sf(e), t, r)
                    })
                      , sr = r$(function(t, e, i, r) {
                        rW(e, sp(e), t, r)
                    })
                      , sn = no(iL)
                      , so = rf(function(t, e) {
                        t = tS(t);
                        var r = -1
                          , n = e.length
                          , o = n > 2 ? e[2] : i;
                        for (o && n_(e[0], e[1], o) && (n = 1); ++r < n; )
                            for (var s = e[r], a = sf(s), h = -1, u = a.length; ++h < u; ) {
                                var l = a[h]
                                  , c = t[l];
                                (c === i || oz(c, tE[l]) && !tM.call(t, l)) && (t[l] = s[l])
                            }
                        return t
                    })
                      , ss = rf(function(t) {
                        return t.push(i, ni),
                        eo(sy, i, t)
                    });
                    function sa(t, e, r) {
                        var n = null == t ? i : iJ(t, e);
                        return n === i ? r : n
                    }
                    function sh(t, e) {
                        return null != t && nm(t, e, i2)
                    }
                    var su = r0(function(t, e, i) {
                        null != e && "function" != typeof e.toString && (e = tD.call(e)),
                        t[e] = i
                    }, sD(sB))
                      , sl = r0(function(t, e, i) {
                        null != e && "function" != typeof e.toString && (e = tD.call(e)),
                        tM.call(t, e) ? t[e].push(i) : t[e] = [i]
                    }, nc)
                      , sc = rf(i4);
                    function sp(t) {
                        return oF(t) ? iC(t) : rt(t)
                    }
                    function sf(t) {
                        return oF(t) ? iC(t, !0) : function(t) {
                            if (!o$(t))
                                return function(t) {
                                    var e = [];
                                    if (null != t)
                                        for (var i in tS(t))
                                            e.push(i);
                                    return e
                                }(t);
                            var e = nC(t)
                              , i = [];
                            for (var r in t)
                                "constructor" == r && (e || !tM.call(t, r)) || i.push(r);
                            return i
                        }(t)
                    }
                    var sd = r$(function(t, e, i) {
                        ro(t, e, i)
                    })
                      , sy = r$(function(t, e, i, r) {
                        ro(t, e, i, r)
                    })
                      , sg = no(function(t, e) {
                        var i = {};
                        if (null == t)
                            return i;
                        var r = !1;
                        e = ep(e, function(e) {
                            return e = rI(e, t),
                            r || (r = e.length > 1),
                            e
                        }),
                        rW(t, na(t), i),
                        r && (i = iR(i, 7, nr));
                        for (var n = e.length; n--; )
                            rx(i, e[n]);
                        return i
                    })
                      , sv = no(function(t, e) {
                        return null == t ? {} : rh(t, e, function(e, i) {
                            return sh(t, i)
                        })
                    });
                    function sm(t, e) {
                        if (null == t)
                            return {};
                        var i = ep(na(t), function(t) {
                            return [t]
                        });
                        return e = nc(e),
                        rh(t, i, function(t, i) {
                            return e(t, i[0])
                        })
                    }
                    var sw = r7(sp)
                      , sb = r7(sf);
                    function sT(t) {
                        return null == t ? [] : ez(t, sp(t))
                    }
                    var s_ = rX(function(t, e, i) {
                        return e = e.toLowerCase(),
                        t + (i ? sS(e) : e)
                    });
                    function sS(t) {
                        return sz(o7(t).toLowerCase())
                    }
                    function sP(t) {
                        return (t = o7(t)) && t.replace(tp, eD).replace(tW, "")
                    }
                    var sx = rX(function(t, e, i) {
                        return t + (i ? "-" : "") + e.toLowerCase()
                    })
                      , sC = rX(function(t, e, i) {
                        return t + (i ? " " : "") + e.toLowerCase()
                    })
                      , sk = rK("toLowerCase")
                      , sA = rX(function(t, e, i) {
                        return t + (i ? "_" : "") + e.toLowerCase()
                    })
                      , sE = rX(function(t, e, i) {
                        return t + (i ? " " : "") + sz(e)
                    })
                      , sO = rX(function(t, e, i) {
                        return t + (i ? " " : "") + e.toUpperCase()
                    })
                      , sz = rK("toUpperCase");
                    function sM(t, e, r) {
                        var n;
                        return t = o7(t),
                        (e = r ? i : e) === i ? (n = t,
                        tV.test(n)) ? t.match(t$) || [] : t.match(ti) || [] : t.match(e) || []
                    }
                    var sI = rf(function(t, e) {
                        try {
                            return eo(t, i, e)
                        } catch (t) {
                            return oH(t) ? t : new tb(t)
                        }
                    })
                      , sL = no(function(t, e) {
                        return ea(e, function(e) {
                            iI(t, e = nB(e), ob(t[e], t))
                        }),
                        t
                    });
                    function sD(t) {
                        return function() {
                            return t
                        }
                    }
                    var sR = rZ()
                      , sF = rZ(!0);
                    function sB(t) {
                        return t
                    }
                    function sN(t) {
                        return i7("function" == typeof t ? t : iR(t, 1))
                    }
                    var sj = rf(function(t, e) {
                        return function(i) {
                            return i4(i, t, e)
                        }
                    })
                      , sH = rf(function(t, e) {
                        return function(i) {
                            return i4(t, i, e)
                        }
                    });
                    function sU(t, e, i) {
                        var r = sp(e)
                          , n = iY(e, r);
                        null != i || o$(e) && (n.length || !r.length) || (i = e,
                        e = t,
                        t = this,
                        n = iY(e, sp(e)));
                        var o = !(o$(i) && "chain"in i) || !!i.chain
                          , s = oU(t);
                        return ea(n, function(i) {
                            var r = e[i];
                            t[i] = r,
                            s && (t.prototype[i] = function() {
                                var e = this.__chain__;
                                if (o || e) {
                                    var i = t(this.__wrapped__);
                                    return (i.__actions__ = rU(this.__actions__)).push({
                                        func: r,
                                        args: arguments,
                                        thisArg: t
                                    }),
                                    i.__chain__ = e,
                                    i
                                }
                                return r.apply(t, ef([this.value()], arguments))
                            }
                            )
                        }),
                        t
                    }
                    function sW() {}
                    var sG = r2(ep)
                      , s$ = r2(eh)
                      , sq = r2(eg);
                    function sV(t) {
                        return nS(t) ? eP(nB(t)) : function(e) {
                            return iJ(e, t)
                        }
                    }
                    var sK = r4()
                      , sX = r4(!0);
                    function sY() {
                        return []
                    }
                    function sJ() {
                        return !1
                    }
                    var sZ = r1(function(t, e) {
                        return t + e
                    }, 0)
                      , sQ = r6("ceil")
                      , s0 = r1(function(t, e) {
                        return t / e
                    }, 1)
                      , s1 = r6("floor")
                      , s2 = r1(function(t, e) {
                        return t * e
                    }, 1)
                      , s3 = r6("round")
                      , s4 = r1(function(t, e) {
                        return t - e
                    }, 0);
                    return ig.after = function(t, e) {
                        if ("function" != typeof e)
                            throw new tC(r);
                        return t = o9(t),
                        function() {
                            if (--t < 1)
                                return e.apply(this, arguments)
                        }
                    }
                    ,
                    ig.ary = om,
                    ig.assign = st,
                    ig.assignIn = se,
                    ig.assignInWith = si,
                    ig.assignWith = sr,
                    ig.at = sn,
                    ig.before = ow,
                    ig.bind = ob,
                    ig.bindAll = sL,
                    ig.bindKey = oT,
                    ig.castArray = function() {
                        if (!arguments.length)
                            return [];
                        var t = arguments[0];
                        return oD(t) ? t : [t]
                    }
                    ,
                    ig.chain = or,
                    ig.chunk = function(t, e, r) {
                        e = (r ? n_(t, e, r) : e === i) ? 1 : e2(o9(e), 0);
                        var n = null == t ? 0 : t.length;
                        if (!n || e < 1)
                            return [];
                        for (var o = 0, s = 0, a = tm(eX(n / e)); o < n; )
                            a[s++] = rv(t, o, o += e);
                        return a
                    }
                    ,
                    ig.compact = function(t) {
                        for (var e = -1, i = null == t ? 0 : t.length, r = 0, n = []; ++e < i; ) {
                            var o = t[e];
                            o && (n[r++] = o)
                        }
                        return n
                    }
                    ,
                    ig.concat = function() {
                        var t = arguments.length;
                        if (!t)
                            return [];
                        for (var e = tm(t - 1), i = arguments[0], r = t; r--; )
                            e[r - 1] = arguments[r];
                        return ef(oD(i) ? rU(i) : [i], i$(e, 1))
                    }
                    ,
                    ig.cond = function(t) {
                        var e = null == t ? 0 : t.length
                          , i = nc();
                        return t = e ? ep(t, function(t) {
                            if ("function" != typeof t[1])
                                throw new tC(r);
                            return [i(t[0]), t[1]]
                        }) : [],
                        rf(function(i) {
                            for (var r = -1; ++r < e; ) {
                                var n = t[r];
                                if (eo(n[0], this, i))
                                    return eo(n[1], this, i)
                            }
                        })
                    }
                    ,
                    ig.conforms = function(t) {
                        var e, i;
                        return i = sp(e = iR(t, 1)),
                        function(t) {
                            return iF(t, e, i)
                        }
                    }
                    ,
                    ig.constant = sD,
                    ig.countBy = os,
                    ig.create = function(t, e) {
                        var i = iv(t);
                        return null == e ? i : iM(i, e)
                    }
                    ,
                    ig.curry = function t(e, r, n) {
                        r = n ? i : r;
                        var o = nt(e, 8, i, i, i, i, i, r);
                        return o.placeholder = t.placeholder,
                        o
                    }
                    ,
                    ig.curryRight = function t(e, r, n) {
                        r = n ? i : r;
                        var o = nt(e, 16, i, i, i, i, i, r);
                        return o.placeholder = t.placeholder,
                        o
                    }
                    ,
                    ig.debounce = o_,
                    ig.defaults = so,
                    ig.defaultsDeep = ss,
                    ig.defer = oS,
                    ig.delay = oP,
                    ig.difference = nH,
                    ig.differenceBy = nU,
                    ig.differenceWith = nW,
                    ig.drop = function(t, e, r) {
                        var n = null == t ? 0 : t.length;
                        return n ? rv(t, (e = r || e === i ? 1 : o9(e)) < 0 ? 0 : e, n) : []
                    }
                    ,
                    ig.dropRight = function(t, e, r) {
                        var n = null == t ? 0 : t.length;
                        return n ? rv(t, 0, (e = n - (e = r || e === i ? 1 : o9(e))) < 0 ? 0 : e) : []
                    }
                    ,
                    ig.dropRightWhile = function(t, e) {
                        return t && t.length ? rk(t, nc(e, 3), !0, !0) : []
                    }
                    ,
                    ig.dropWhile = function(t, e) {
                        return t && t.length ? rk(t, nc(e, 3), !0) : []
                    }
                    ,
                    ig.fill = function(t, e, r, n) {
                        var o = null == t ? 0 : t.length;
                        return o ? (r && "number" != typeof r && n_(t, e, r) && (r = 0,
                        n = o),
                        function(t, e, r, n) {
                            var o = t.length;
                            for ((r = o9(r)) < 0 && (r = -r > o ? 0 : o + r),
                            (n = n === i || n > o ? o : o9(n)) < 0 && (n += o),
                            n = r > n ? 0 : o5(n); r < n; )
                                t[r++] = e;
                            return t
                        }(t, e, r, n)) : []
                    }
                    ,
                    ig.filter = function(t, e) {
                        return (oD(t) ? eu : iG)(t, nc(e, 3))
                    }
                    ,
                    ig.flatMap = function(t, e) {
                        return i$(od(t, e), 1)
                    }
                    ,
                    ig.flatMapDeep = function(t, e) {
                        return i$(od(t, e), s)
                    }
                    ,
                    ig.flatMapDepth = function(t, e, r) {
                        return r = r === i ? 1 : o9(r),
                        i$(od(t, e), r)
                    }
                    ,
                    ig.flatten = nq,
                    ig.flattenDeep = function(t) {
                        return (null == t ? 0 : t.length) ? i$(t, s) : []
                    }
                    ,
                    ig.flattenDepth = function(t, e) {
                        return (null == t ? 0 : t.length) ? i$(t, e = e === i ? 1 : o9(e)) : []
                    }
                    ,
                    ig.flip = function(t) {
                        return nt(t, 512)
                    }
                    ,
                    ig.flow = sR,
                    ig.flowRight = sF,
                    ig.fromPairs = function(t) {
                        for (var e = -1, i = null == t ? 0 : t.length, r = {}; ++e < i; ) {
                            var n = t[e];
                            r[n[0]] = n[1]
                        }
                        return r
                    }
                    ,
                    ig.functions = function(t) {
                        return null == t ? [] : iY(t, sp(t))
                    }
                    ,
                    ig.functionsIn = function(t) {
                        return null == t ? [] : iY(t, sf(t))
                    }
                    ,
                    ig.groupBy = oc,
                    ig.initial = function(t) {
                        return (null == t ? 0 : t.length) ? rv(t, 0, -1) : []
                    }
                    ,
                    ig.intersection = nK,
                    ig.intersectionBy = nX,
                    ig.intersectionWith = nY,
                    ig.invert = su,
                    ig.invertBy = sl,
                    ig.invokeMap = op,
                    ig.iteratee = sN,
                    ig.keyBy = of,
                    ig.keys = sp,
                    ig.keysIn = sf,
                    ig.map = od,
                    ig.mapKeys = function(t, e) {
                        var i = {};
                        return e = nc(e, 3),
                        iK(t, function(t, r, n) {
                            iI(i, e(t, r, n), t)
                        }),
                        i
                    }
                    ,
                    ig.mapValues = function(t, e) {
                        var i = {};
                        return e = nc(e, 3),
                        iK(t, function(t, r, n) {
                            iI(i, r, e(t, r, n))
                        }),
                        i
                    }
                    ,
                    ig.matches = function(t) {
                        return rr(iR(t, 1))
                    }
                    ,
                    ig.matchesProperty = function(t, e) {
                        return rn(t, iR(e, 1))
                    }
                    ,
                    ig.memoize = ox,
                    ig.merge = sd,
                    ig.mergeWith = sy,
                    ig.method = sj,
                    ig.methodOf = sH,
                    ig.mixin = sU,
                    ig.negate = oC,
                    ig.nthArg = function(t) {
                        return t = o9(t),
                        rf(function(e) {
                            return rs(e, t)
                        })
                    }
                    ,
                    ig.omit = sg,
                    ig.omitBy = function(t, e) {
                        return sm(t, oC(nc(e)))
                    }
                    ,
                    ig.once = function(t) {
                        return ow(2, t)
                    }
                    ,
                    ig.orderBy = function(t, e, r, n) {
                        return null == t ? [] : (oD(e) || (e = null == e ? [] : [e]),
                        oD(r = n ? i : r) || (r = null == r ? [] : [r]),
                        ra(t, e, r))
                    }
                    ,
                    ig.over = sG,
                    ig.overArgs = ok,
                    ig.overEvery = s$,
                    ig.overSome = sq,
                    ig.partial = oA,
                    ig.partialRight = oE,
                    ig.partition = oy,
                    ig.pick = sv,
                    ig.pickBy = sm,
                    ig.property = sV,
                    ig.propertyOf = function(t) {
                        return function(e) {
                            return null == t ? i : iJ(t, e)
                        }
                    }
                    ,
                    ig.pull = nZ,
                    ig.pullAll = nQ,
                    ig.pullAllBy = function(t, e, i) {
                        return t && t.length && e && e.length ? ru(t, e, nc(i, 2)) : t
                    }
                    ,
                    ig.pullAllWith = function(t, e, r) {
                        return t && t.length && e && e.length ? ru(t, e, i, r) : t
                    }
                    ,
                    ig.pullAt = n0,
                    ig.range = sK,
                    ig.rangeRight = sX,
                    ig.rearg = oO,
                    ig.reject = function(t, e) {
                        return (oD(t) ? eu : iG)(t, oC(nc(e, 3)))
                    }
                    ,
                    ig.remove = function(t, e) {
                        var i = [];
                        if (!(t && t.length))
                            return i;
                        var r = -1
                          , n = []
                          , o = t.length;
                        for (e = nc(e, 3); ++r < o; ) {
                            var s = t[r];
                            e(s, r, t) && (i.push(s),
                            n.push(r))
                        }
                        return rl(t, n),
                        i
                    }
                    ,
                    ig.rest = function(t, e) {
                        if ("function" != typeof t)
                            throw new tC(r);
                        return rf(t, e = e === i ? e : o9(e))
                    }
                    ,
                    ig.reverse = n1,
                    ig.sampleSize = function(t, e, r) {
                        return e = (r ? n_(t, e, r) : e === i) ? 1 : o9(e),
                        (oD(t) ? function(t, e) {
                            return nR(rU(t), iD(e, 0, t.length))
                        }
                        : function(t, e) {
                            var i = sT(t);
                            return nR(i, iD(e, 0, i.length))
                        }
                        )(t, e)
                    }
                    ,
                    ig.set = function(t, e, i) {
                        return null == t ? t : rd(t, e, i)
                    }
                    ,
                    ig.setWith = function(t, e, r, n) {
                        return n = "function" == typeof n ? n : i,
                        null == t ? t : rd(t, e, r, n)
                    }
                    ,
                    ig.shuffle = function(t) {
                        return (oD(t) ? function(t) {
                            return nR(rU(t))
                        }
                        : function(t) {
                            return nR(sT(t))
                        }
                        )(t)
                    }
                    ,
                    ig.slice = function(t, e, r) {
                        var n = null == t ? 0 : t.length;
                        return n ? (r && "number" != typeof r && n_(t, e, r) ? (e = 0,
                        r = n) : (e = null == e ? 0 : o9(e),
                        r = r === i ? n : o9(r)),
                        rv(t, e, r)) : []
                    }
                    ,
                    ig.sortBy = og,
                    ig.sortedUniq = function(t) {
                        return t && t.length ? rT(t) : []
                    }
                    ,
                    ig.sortedUniqBy = function(t, e) {
                        return t && t.length ? rT(t, nc(e, 2)) : []
                    }
                    ,
                    ig.split = function(t, e, r) {
                        return r && "number" != typeof r && n_(t, e, r) && (e = r = i),
                        (r = r === i ? 4294967295 : r >>> 0) ? (t = o7(t)) && ("string" == typeof e || null != e && !oY(e)) && !(e = rS(e)) && eB(t) ? rL(eG(t), 0, r) : t.split(e, r) : []
                    }
                    ,
                    ig.spread = function(t, e) {
                        if ("function" != typeof t)
                            throw new tC(r);
                        return e = null == e ? 0 : e2(o9(e), 0),
                        rf(function(i) {
                            var r = i[e]
                              , n = rL(i, 0, e);
                            return r && ef(n, r),
                            eo(t, this, n)
                        })
                    }
                    ,
                    ig.tail = function(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? rv(t, 1, e) : []
                    }
                    ,
                    ig.take = function(t, e, r) {
                        return t && t.length ? rv(t, 0, (e = r || e === i ? 1 : o9(e)) < 0 ? 0 : e) : []
                    }
                    ,
                    ig.takeRight = function(t, e, r) {
                        var n = null == t ? 0 : t.length;
                        return n ? rv(t, (e = n - (e = r || e === i ? 1 : o9(e))) < 0 ? 0 : e, n) : []
                    }
                    ,
                    ig.takeRightWhile = function(t, e) {
                        return t && t.length ? rk(t, nc(e, 3), !1, !0) : []
                    }
                    ,
                    ig.takeWhile = function(t, e) {
                        return t && t.length ? rk(t, nc(e, 3)) : []
                    }
                    ,
                    ig.tap = function(t, e) {
                        return e(t),
                        t
                    }
                    ,
                    ig.throttle = function(t, e, i) {
                        var n = !0
                          , o = !0;
                        if ("function" != typeof t)
                            throw new tC(r);
                        return o$(i) && (n = "leading"in i ? !!i.leading : n,
                        o = "trailing"in i ? !!i.trailing : o),
                        o_(t, e, {
                            leading: n,
                            maxWait: e,
                            trailing: o
                        })
                    }
                    ,
                    ig.thru = on,
                    ig.toArray = o3,
                    ig.toPairs = sw,
                    ig.toPairsIn = sb,
                    ig.toPath = function(t) {
                        return oD(t) ? ep(t, nB) : oQ(t) ? [t] : rU(nF(o7(t)))
                    }
                    ,
                    ig.toPlainObject = o8,
                    ig.transform = function(t, e, i) {
                        var r = oD(t)
                          , n = r || oN(t) || o0(t);
                        if (e = nc(e, 4),
                        null == i) {
                            var o = t && t.constructor;
                            i = n ? r ? new o : [] : o$(t) && oU(o) ? iv(tq(t)) : {}
                        }
                        return (n ? ea : iK)(t, function(t, r, n) {
                            return e(i, t, r, n)
                        }),
                        i
                    }
                    ,
                    ig.unary = function(t) {
                        return om(t, 1)
                    }
                    ,
                    ig.union = n2,
                    ig.unionBy = n3,
                    ig.unionWith = n4,
                    ig.uniq = function(t) {
                        return t && t.length ? rP(t) : []
                    }
                    ,
                    ig.uniqBy = function(t, e) {
                        return t && t.length ? rP(t, nc(e, 2)) : []
                    }
                    ,
                    ig.uniqWith = function(t, e) {
                        return e = "function" == typeof e ? e : i,
                        t && t.length ? rP(t, i, e) : []
                    }
                    ,
                    ig.unset = function(t, e) {
                        return null == t || rx(t, e)
                    }
                    ,
                    ig.unzip = n9,
                    ig.unzipWith = n5,
                    ig.update = function(t, e, i) {
                        return null == t ? t : rC(t, e, rM(i))
                    }
                    ,
                    ig.updateWith = function(t, e, r, n) {
                        return n = "function" == typeof n ? n : i,
                        null == t ? t : rC(t, e, rM(r), n)
                    }
                    ,
                    ig.values = sT,
                    ig.valuesIn = function(t) {
                        return null == t ? [] : ez(t, sf(t))
                    }
                    ,
                    ig.without = n6,
                    ig.words = sM,
                    ig.wrap = function(t, e) {
                        return oA(rM(e), t)
                    }
                    ,
                    ig.xor = n8,
                    ig.xorBy = n7,
                    ig.xorWith = ot,
                    ig.zip = oe,
                    ig.zipObject = function(t, e) {
                        return rO(t || [], e || [], iE)
                    }
                    ,
                    ig.zipObjectDeep = function(t, e) {
                        return rO(t || [], e || [], rd)
                    }
                    ,
                    ig.zipWith = oi,
                    ig.entries = sw,
                    ig.entriesIn = sb,
                    ig.extend = se,
                    ig.extendWith = si,
                    sU(ig, ig),
                    ig.add = sZ,
                    ig.attempt = sI,
                    ig.camelCase = s_,
                    ig.capitalize = sS,
                    ig.ceil = sQ,
                    ig.clamp = function(t, e, r) {
                        return r === i && (r = e,
                        e = i),
                        r !== i && (r = (r = o6(r)) == r ? r : 0),
                        e !== i && (e = (e = o6(e)) == e ? e : 0),
                        iD(o6(t), e, r)
                    }
                    ,
                    ig.clone = function(t) {
                        return iR(t, 4)
                    }
                    ,
                    ig.cloneDeep = function(t) {
                        return iR(t, 5)
                    }
                    ,
                    ig.cloneDeepWith = function(t, e) {
                        return iR(t, 5, e = "function" == typeof e ? e : i)
                    }
                    ,
                    ig.cloneWith = function(t, e) {
                        return iR(t, 4, e = "function" == typeof e ? e : i)
                    }
                    ,
                    ig.conformsTo = function(t, e) {
                        return null == e || iF(t, e, sp(e))
                    }
                    ,
                    ig.deburr = sP,
                    ig.defaultTo = function(t, e) {
                        return null == t || t != t ? e : t
                    }
                    ,
                    ig.divide = s0,
                    ig.endsWith = function(t, e, r) {
                        t = o7(t),
                        e = rS(e);
                        var n = t.length
                          , o = r = r === i ? n : iD(o9(r), 0, n);
                        return (r -= e.length) >= 0 && t.slice(r, o) == e
                    }
                    ,
                    ig.eq = oz,
                    ig.escape = function(t) {
                        return (t = o7(t)) && U.test(t) ? t.replace(j, eR) : t
                    }
                    ,
                    ig.escapeRegExp = function(t) {
                        return (t = o7(t)) && Y.test(t) ? t.replace(X, "\\$&") : t
                    }
                    ,
                    ig.every = function(t, e, r) {
                        var n = oD(t) ? eh : iU;
                        return r && n_(t, e, r) && (e = i),
                        n(t, nc(e, 3))
                    }
                    ,
                    ig.find = oa,
                    ig.findIndex = nG,
                    ig.findKey = function(t, e) {
                        return em(t, nc(e, 3), iK)
                    }
                    ,
                    ig.findLast = oh,
                    ig.findLastIndex = n$,
                    ig.findLastKey = function(t, e) {
                        return em(t, nc(e, 3), iX)
                    }
                    ,
                    ig.floor = s1,
                    ig.forEach = ou,
                    ig.forEachRight = ol,
                    ig.forIn = function(t, e) {
                        return null == t ? t : iq(t, nc(e, 3), sf)
                    }
                    ,
                    ig.forInRight = function(t, e) {
                        return null == t ? t : iV(t, nc(e, 3), sf)
                    }
                    ,
                    ig.forOwn = function(t, e) {
                        return t && iK(t, nc(e, 3))
                    }
                    ,
                    ig.forOwnRight = function(t, e) {
                        return t && iX(t, nc(e, 3))
                    }
                    ,
                    ig.get = sa,
                    ig.gt = oM,
                    ig.gte = oI,
                    ig.has = function(t, e) {
                        return null != t && nm(t, e, i1)
                    }
                    ,
                    ig.hasIn = sh,
                    ig.head = nV,
                    ig.identity = sB,
                    ig.includes = function(t, e, i, r) {
                        t = oF(t) ? t : sT(t),
                        i = i && !r ? o9(i) : 0;
                        var n = t.length;
                        return i < 0 && (i = e2(n + i, 0)),
                        oZ(t) ? i <= n && t.indexOf(e, i) > -1 : !!n && eb(t, e, i) > -1
                    }
                    ,
                    ig.indexOf = function(t, e, i) {
                        var r = null == t ? 0 : t.length;
                        if (!r)
                            return -1;
                        var n = null == i ? 0 : o9(i);
                        return n < 0 && (n = e2(r + n, 0)),
                        eb(t, e, n)
                    }
                    ,
                    ig.inRange = function(t, e, r) {
                        var n, o, s;
                        return e = o4(e),
                        r === i ? (r = e,
                        e = 0) : r = o4(r),
                        (n = t = o6(t)) >= e3(o = e, s = r) && n < e2(o, s)
                    }
                    ,
                    ig.invoke = sc,
                    ig.isArguments = oL,
                    ig.isArray = oD,
                    ig.isArrayBuffer = oR,
                    ig.isArrayLike = oF,
                    ig.isArrayLikeObject = oB,
                    ig.isBoolean = function(t) {
                        return !0 === t || !1 === t || oq(t) && iQ(t) == c
                    }
                    ,
                    ig.isBuffer = oN,
                    ig.isDate = oj,
                    ig.isElement = function(t) {
                        return oq(t) && 1 === t.nodeType && !oX(t)
                    }
                    ,
                    ig.isEmpty = function(t) {
                        if (null == t)
                            return !0;
                        if (oF(t) && (oD(t) || "string" == typeof t || "function" == typeof t.splice || oN(t) || o0(t) || oL(t)))
                            return !t.length;
                        var e = nv(t);
                        if (e == g || e == T)
                            return !t.size;
                        if (nC(t))
                            return !rt(t).length;
                        for (var i in t)
                            if (tM.call(t, i))
                                return !1;
                        return !0
                    }
                    ,
                    ig.isEqual = function(t, e) {
                        return i5(t, e)
                    }
                    ,
                    ig.isEqualWith = function(t, e, r) {
                        var n = (r = "function" == typeof r ? r : i) ? r(t, e) : i;
                        return n === i ? i5(t, e, i, r) : !!n
                    }
                    ,
                    ig.isError = oH,
                    ig.isFinite = function(t) {
                        return "number" == typeof t && eQ(t)
                    }
                    ,
                    ig.isFunction = oU,
                    ig.isInteger = oW,
                    ig.isLength = oG,
                    ig.isMap = oV,
                    ig.isMatch = function(t, e) {
                        return t === e || i6(t, e, nf(e))
                    }
                    ,
                    ig.isMatchWith = function(t, e, r) {
                        return r = "function" == typeof r ? r : i,
                        i6(t, e, nf(e), r)
                    }
                    ,
                    ig.isNaN = function(t) {
                        return oK(t) && t != +t
                    }
                    ,
                    ig.isNative = function(t) {
                        if (nx(t))
                            throw new tb("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                        return i8(t)
                    }
                    ,
                    ig.isNil = function(t) {
                        return null == t
                    }
                    ,
                    ig.isNull = function(t) {
                        return null === t
                    }
                    ,
                    ig.isNumber = oK,
                    ig.isObject = o$,
                    ig.isObjectLike = oq,
                    ig.isPlainObject = oX,
                    ig.isRegExp = oY,
                    ig.isSafeInteger = function(t) {
                        return oW(t) && t >= -9007199254740991 && t <= 9007199254740991
                    }
                    ,
                    ig.isSet = oJ,
                    ig.isString = oZ,
                    ig.isSymbol = oQ,
                    ig.isTypedArray = o0,
                    ig.isUndefined = function(t) {
                        return t === i
                    }
                    ,
                    ig.isWeakMap = function(t) {
                        return oq(t) && nv(t) == P
                    }
                    ,
                    ig.isWeakSet = function(t) {
                        return oq(t) && "[object WeakSet]" == iQ(t)
                    }
                    ,
                    ig.join = function(t, e) {
                        return null == t ? "" : e0.call(t, e)
                    }
                    ,
                    ig.kebabCase = sx,
                    ig.last = nJ,
                    ig.lastIndexOf = function(t, e, r) {
                        var n = null == t ? 0 : t.length;
                        if (!n)
                            return -1;
                        var o = n;
                        return r !== i && (o = (o = o9(r)) < 0 ? e2(n + o, 0) : e3(o, n - 1)),
                        e == e ? function(t, e, i) {
                            for (var r = i + 1; r-- && t[r] !== e; )
                                ;
                            return r
                        }(t, e, o) : ew(t, e_, o, !0)
                    }
                    ,
                    ig.lowerCase = sC,
                    ig.lowerFirst = sk,
                    ig.lt = o1,
                    ig.lte = o2,
                    ig.max = function(t) {
                        return t && t.length ? iW(t, sB, i0) : i
                    }
                    ,
                    ig.maxBy = function(t, e) {
                        return t && t.length ? iW(t, nc(e, 2), i0) : i
                    }
                    ,
                    ig.mean = function(t) {
                        return eS(t, sB)
                    }
                    ,
                    ig.meanBy = function(t, e) {
                        return eS(t, nc(e, 2))
                    }
                    ,
                    ig.min = function(t) {
                        return t && t.length ? iW(t, sB, re) : i
                    }
                    ,
                    ig.minBy = function(t, e) {
                        return t && t.length ? iW(t, nc(e, 2), re) : i
                    }
                    ,
                    ig.stubArray = sY,
                    ig.stubFalse = sJ,
                    ig.stubObject = function() {
                        return {}
                    }
                    ,
                    ig.stubString = function() {
                        return ""
                    }
                    ,
                    ig.stubTrue = function() {
                        return !0
                    }
                    ,
                    ig.multiply = s2,
                    ig.nth = function(t, e) {
                        return t && t.length ? rs(t, o9(e)) : i
                    }
                    ,
                    ig.noConflict = function() {
                        return t3._ === this && (t3._ = tF),
                        this
                    }
                    ,
                    ig.noop = sW,
                    ig.now = ov,
                    ig.pad = function(t, e, i) {
                        t = o7(t);
                        var r = (e = o9(e)) ? eW(t) : 0;
                        if (!e || r >= e)
                            return t;
                        var n = (e - r) / 2;
                        return r3(eY(n), i) + t + r3(eX(n), i)
                    }
                    ,
                    ig.padEnd = function(t, e, i) {
                        t = o7(t);
                        var r = (e = o9(e)) ? eW(t) : 0;
                        return e && r < e ? t + r3(e - r, i) : t
                    }
                    ,
                    ig.padStart = function(t, e, i) {
                        t = o7(t);
                        var r = (e = o9(e)) ? eW(t) : 0;
                        return e && r < e ? r3(e - r, i) + t : t
                    }
                    ,
                    ig.parseInt = function(t, e, i) {
                        return i || null == e ? e = 0 : e && (e = +e),
                        e9(o7(t).replace(J, ""), e || 0)
                    }
                    ,
                    ig.random = function(t, e, r) {
                        if (r && "boolean" != typeof r && n_(t, e, r) && (e = r = i),
                        r === i && ("boolean" == typeof e ? (r = e,
                        e = i) : "boolean" == typeof t && (r = t,
                        t = i)),
                        t === i && e === i ? (t = 0,
                        e = 1) : (t = o4(t),
                        e === i ? (e = t,
                        t = 0) : e = o4(e)),
                        t > e) {
                            var n = t;
                            t = e,
                            e = n
                        }
                        if (r || t % 1 || e % 1) {
                            var o = e5();
                            return e3(t + o * (e - t + tQ("1e-" + ((o + "").length - 1))), e)
                        }
                        return rc(t, e)
                    }
                    ,
                    ig.reduce = function(t, e, i) {
                        var r = oD(t) ? ed : eC
                          , n = arguments.length < 3;
                        return r(t, nc(e, 4), i, n, ij)
                    }
                    ,
                    ig.reduceRight = function(t, e, i) {
                        var r = oD(t) ? ey : eC
                          , n = arguments.length < 3;
                        return r(t, nc(e, 4), i, n, iH)
                    }
                    ,
                    ig.repeat = function(t, e, r) {
                        return e = (r ? n_(t, e, r) : e === i) ? 1 : o9(e),
                        rp(o7(t), e)
                    }
                    ,
                    ig.replace = function() {
                        var t = arguments
                          , e = o7(t[0]);
                        return t.length < 3 ? e : e.replace(t[1], t[2])
                    }
                    ,
                    ig.result = function(t, e, r) {
                        e = rI(e, t);
                        var n = -1
                          , o = e.length;
                        for (o || (o = 1,
                        t = i); ++n < o; ) {
                            var s = null == t ? i : t[nB(e[n])];
                            s === i && (n = o,
                            s = r),
                            t = oU(s) ? s.call(t) : s
                        }
                        return t
                    }
                    ,
                    ig.round = s3,
                    ig.runInContext = t,
                    ig.sample = function(t) {
                        return (oD(t) ? ik : function(t) {
                            return ik(sT(t))
                        }
                        )(t)
                    }
                    ,
                    ig.size = function(t) {
                        if (null == t)
                            return 0;
                        if (oF(t))
                            return oZ(t) ? eW(t) : t.length;
                        var e = nv(t);
                        return e == g || e == T ? t.size : rt(t).length
                    }
                    ,
                    ig.snakeCase = sA,
                    ig.some = function(t, e, r) {
                        var n = oD(t) ? eg : rm;
                        return r && n_(t, e, r) && (e = i),
                        n(t, nc(e, 3))
                    }
                    ,
                    ig.sortedIndex = function(t, e) {
                        return rw(t, e)
                    }
                    ,
                    ig.sortedIndexBy = function(t, e, i) {
                        return rb(t, e, nc(i, 2))
                    }
                    ,
                    ig.sortedIndexOf = function(t, e) {
                        var i = null == t ? 0 : t.length;
                        if (i) {
                            var r = rw(t, e);
                            if (r < i && oz(t[r], e))
                                return r
                        }
                        return -1
                    }
                    ,
                    ig.sortedLastIndex = function(t, e) {
                        return rw(t, e, !0)
                    }
                    ,
                    ig.sortedLastIndexBy = function(t, e, i) {
                        return rb(t, e, nc(i, 2), !0)
                    }
                    ,
                    ig.sortedLastIndexOf = function(t, e) {
                        if (null == t ? 0 : t.length) {
                            var i = rw(t, e, !0) - 1;
                            if (oz(t[i], e))
                                return i
                        }
                        return -1
                    }
                    ,
                    ig.startCase = sE,
                    ig.startsWith = function(t, e, i) {
                        return t = o7(t),
                        i = null == i ? 0 : iD(o9(i), 0, t.length),
                        e = rS(e),
                        t.slice(i, i + e.length) == e
                    }
                    ,
                    ig.subtract = s4,
                    ig.sum = function(t) {
                        return t && t.length ? ek(t, sB) : 0
                    }
                    ,
                    ig.sumBy = function(t, e) {
                        return t && t.length ? ek(t, nc(e, 2)) : 0
                    }
                    ,
                    ig.template = function(t, e, r) {
                        var n = ig.templateSettings;
                        r && n_(t, e, r) && (e = i),
                        t = o7(t),
                        e = si({}, e, n, ne);
                        var o, s, a = si({}, e.imports, n.imports, ne), h = sp(a), u = ez(a, h), l = 0, c = e.interpolate || tf, p = "__p += '", f = tP((e.escape || tf).source + "|" + c.source + "|" + (c === $ ? to : tf).source + "|" + (e.evaluate || tf).source + "|$", "g"), d = "//# sourceURL=" + (tM.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++tX + "]") + `
`;
                        t.replace(f, function(e, i, r, n, a, h) {
                            return r || (r = n),
                            p += t.slice(l, h).replace(td, eF),
                            i && (o = !0,
                            p += `' +
__e(` + i + `) +
'`),
                            a && (s = !0,
                            p += `';
` + a + `;
__p += '`),
                            r && (p += `' +
((__t = (` + r + `)) == null ? '' : __t) +
'`),
                            l = h + e.length,
                            e
                        }),
                        p += `';
`;
                        var y = tM.call(e, "variable") && e.variable;
                        if (y) {
                            if (tr.test(y))
                                throw new tb("Invalid `variable` option passed into `_.template`")
                        } else
                            p = `with (obj) {
` + p + `
}
`;
                        p = (s ? p.replace(R, "") : p).replace(F, "$1").replace(B, "$1;"),
                        p = "function(" + (y || "obj") + `) {
` + (y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (s ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
                        var g = sI(function() {
                            return tT(h, d + "return " + p).apply(i, u)
                        });
                        if (g.source = p,
                        oH(g))
                            throw g;
                        return g
                    }
                    ,
                    ig.times = function(t, e) {
                        if ((t = o9(t)) < 1 || t > 9007199254740991)
                            return [];
                        var i = 4294967295
                          , r = e3(t, 4294967295);
                        e = nc(e),
                        t -= 4294967295;
                        for (var n = eA(r, e); ++i < t; )
                            e(i);
                        return n
                    }
                    ,
                    ig.toFinite = o4,
                    ig.toInteger = o9,
                    ig.toLength = o5,
                    ig.toLower = function(t) {
                        return o7(t).toLowerCase()
                    }
                    ,
                    ig.toNumber = o6,
                    ig.toSafeInteger = function(t) {
                        return t ? iD(o9(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0
                    }
                    ,
                    ig.toString = o7,
                    ig.toUpper = function(t) {
                        return o7(t).toUpperCase()
                    }
                    ,
                    ig.trim = function(t, e, r) {
                        if ((t = o7(t)) && (r || e === i))
                            return eE(t);
                        if (!t || !(e = rS(e)))
                            return t;
                        var n = eG(t)
                          , o = eG(e)
                          , s = eI(n, o)
                          , a = eL(n, o) + 1;
                        return rL(n, s, a).join("")
                    }
                    ,
                    ig.trimEnd = function(t, e, r) {
                        if ((t = o7(t)) && (r || e === i))
                            return t.slice(0, e$(t) + 1);
                        if (!t || !(e = rS(e)))
                            return t;
                        var n = eG(t)
                          , o = eL(n, eG(e)) + 1;
                        return rL(n, 0, o).join("")
                    }
                    ,
                    ig.trimStart = function(t, e, r) {
                        if ((t = o7(t)) && (r || e === i))
                            return t.replace(J, "");
                        if (!t || !(e = rS(e)))
                            return t;
                        var n = eG(t)
                          , o = eI(n, eG(e));
                        return rL(n, o).join("")
                    }
                    ,
                    ig.truncate = function(t, e) {
                        var r = 30
                          , n = "...";
                        if (o$(e)) {
                            var o = "separator"in e ? e.separator : o;
                            r = "length"in e ? o9(e.length) : r,
                            n = "omission"in e ? rS(e.omission) : n
                        }
                        var s = (t = o7(t)).length;
                        if (eB(t)) {
                            var a = eG(t);
                            s = a.length
                        }
                        if (r >= s)
                            return t;
                        var h = r - eW(n);
                        if (h < 1)
                            return n;
                        var u = a ? rL(a, 0, h).join("") : t.slice(0, h);
                        if (o === i)
                            return u + n;
                        if (a && (h += u.length - h),
                        oY(o)) {
                            if (t.slice(h).search(o)) {
                                var l, c = u;
                                for (o.global || (o = tP(o.source, o7(ts.exec(o)) + "g")),
                                o.lastIndex = 0; l = o.exec(c); )
                                    var p = l.index;
                                u = u.slice(0, p === i ? h : p)
                            }
                        } else if (t.indexOf(rS(o), h) != h) {
                            var f = u.lastIndexOf(o);
                            f > -1 && (u = u.slice(0, f))
                        }
                        return u + n
                    }
                    ,
                    ig.unescape = function(t) {
                        return (t = o7(t)) && H.test(t) ? t.replace(N, eq) : t
                    }
                    ,
                    ig.uniqueId = function(t) {
                        var e = ++tI;
                        return o7(t) + e
                    }
                    ,
                    ig.upperCase = sO,
                    ig.upperFirst = sz,
                    ig.each = ou,
                    ig.eachRight = ol,
                    ig.first = nV,
                    sU(ig, (tv = {},
                    iK(ig, function(t, e) {
                        tM.call(ig.prototype, e) || (tv[e] = t)
                    }),
                    tv), {
                        chain: !1
                    }),
                    ig.VERSION = "4.17.21",
                    ea(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
                        ig[t].placeholder = ig
                    }),
                    ea(["drop", "take"], function(t, e) {
                        ib.prototype[t] = function(r) {
                            r = r === i ? 1 : e2(o9(r), 0);
                            var n = this.__filtered__ && !e ? new ib(this) : this.clone();
                            return n.__filtered__ ? n.__takeCount__ = e3(r, n.__takeCount__) : n.__views__.push({
                                size: e3(r, 4294967295),
                                type: t + (n.__dir__ < 0 ? "Right" : "")
                            }),
                            n
                        }
                        ,
                        ib.prototype[t + "Right"] = function(e) {
                            return this.reverse()[t](e).reverse()
                        }
                    }),
                    ea(["filter", "map", "takeWhile"], function(t, e) {
                        var i = e + 1
                          , r = 1 == i || 3 == i;
                        ib.prototype[t] = function(t) {
                            var e = this.clone();
                            return e.__iteratees__.push({
                                iteratee: nc(t, 3),
                                type: i
                            }),
                            e.__filtered__ = e.__filtered__ || r,
                            e
                        }
                    }),
                    ea(["head", "last"], function(t, e) {
                        var i = "take" + (e ? "Right" : "");
                        ib.prototype[t] = function() {
                            return this[i](1).value()[0]
                        }
                    }),
                    ea(["initial", "tail"], function(t, e) {
                        var i = "drop" + (e ? "" : "Right");
                        ib.prototype[t] = function() {
                            return this.__filtered__ ? new ib(this) : this[i](1)
                        }
                    }),
                    ib.prototype.compact = function() {
                        return this.filter(sB)
                    }
                    ,
                    ib.prototype.find = function(t) {
                        return this.filter(t).head()
                    }
                    ,
                    ib.prototype.findLast = function(t) {
                        return this.reverse().find(t)
                    }
                    ,
                    ib.prototype.invokeMap = rf(function(t, e) {
                        return "function" == typeof t ? new ib(this) : this.map(function(i) {
                            return i4(i, t, e)
                        })
                    }),
                    ib.prototype.reject = function(t) {
                        return this.filter(oC(nc(t)))
                    }
                    ,
                    ib.prototype.slice = function(t, e) {
                        t = o9(t);
                        var r = this;
                        return r.__filtered__ && (t > 0 || e < 0) ? new ib(r) : (t < 0 ? r = r.takeRight(-t) : t && (r = r.drop(t)),
                        e !== i && (r = (e = o9(e)) < 0 ? r.dropRight(-e) : r.take(e - t)),
                        r)
                    }
                    ,
                    ib.prototype.takeRightWhile = function(t) {
                        return this.reverse().takeWhile(t).reverse()
                    }
                    ,
                    ib.prototype.toArray = function() {
                        return this.take(4294967295)
                    }
                    ,
                    iK(ib.prototype, function(t, e) {
                        var r = /^(?:filter|find|map|reject)|While$/.test(e)
                          , n = /^(?:head|last)$/.test(e)
                          , o = ig[n ? "take" + ("last" == e ? "Right" : "") : e]
                          , s = n || /^find/.test(e);
                        o && (ig.prototype[e] = function() {
                            var e = this.__wrapped__
                              , a = n ? [1] : arguments
                              , h = e instanceof ib
                              , u = a[0]
                              , l = h || oD(e)
                              , c = function(t) {
                                var e = o.apply(ig, ef([t], a));
                                return n && p ? e[0] : e
                            };
                            l && r && "function" == typeof u && 1 != u.length && (h = l = !1);
                            var p = this.__chain__
                              , f = !!this.__actions__.length
                              , d = s && !p
                              , y = h && !f;
                            if (!s && l) {
                                e = y ? e : new ib(this);
                                var g = t.apply(e, a);
                                return g.__actions__.push({
                                    func: on,
                                    args: [c],
                                    thisArg: i
                                }),
                                new iw(g,p)
                            }
                            return d && y ? t.apply(this, a) : (g = this.thru(c),
                            d ? n ? g.value()[0] : g.value() : g)
                        }
                        )
                    }),
                    ea(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
                        var e = tk[t]
                          , i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru"
                          , r = /^(?:pop|shift)$/.test(t);
                        ig.prototype[t] = function() {
                            var t = arguments;
                            if (r && !this.__chain__) {
                                var n = this.value();
                                return e.apply(oD(n) ? n : [], t)
                            }
                            return this[i](function(i) {
                                return e.apply(oD(i) ? i : [], t)
                            })
                        }
                    }),
                    iK(ib.prototype, function(t, e) {
                        var i = ig[e];
                        if (i) {
                            var r = i.name + "";
                            tM.call(is, r) || (is[r] = []),
                            is[r].push({
                                name: e,
                                func: i
                            })
                        }
                    }),
                    is[rQ(i, 2).name] = [{
                        name: "wrapper",
                        func: i
                    }],
                    ib.prototype.clone = function() {
                        var t = new ib(this.__wrapped__);
                        return t.__actions__ = rU(this.__actions__),
                        t.__dir__ = this.__dir__,
                        t.__filtered__ = this.__filtered__,
                        t.__iteratees__ = rU(this.__iteratees__),
                        t.__takeCount__ = this.__takeCount__,
                        t.__views__ = rU(this.__views__),
                        t
                    }
                    ,
                    ib.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var t = new ib(this);
                            t.__dir__ = -1,
                            t.__filtered__ = !0
                        } else
                            t = this.clone(),
                            t.__dir__ *= -1;
                        return t
                    }
                    ,
                    ib.prototype.value = function() {
                        var t = this.__wrapped__.value()
                          , e = this.__dir__
                          , i = oD(t)
                          , r = e < 0
                          , n = i ? t.length : 0
                          , o = function(t, e, i) {
                            for (var r = -1, n = i.length; ++r < n; ) {
                                var o = i[r]
                                  , s = o.size;
                                switch (o.type) {
                                case "drop":
                                    t += s;
                                    break;
                                case "dropRight":
                                    e -= s;
                                    break;
                                case "take":
                                    e = e3(e, t + s);
                                    break;
                                case "takeRight":
                                    t = e2(t, e - s)
                                }
                            }
                            return {
                                start: t,
                                end: e
                            }
                        }(0, n, this.__views__)
                          , s = o.start
                          , a = o.end
                          , h = a - s
                          , u = r ? a : s - 1
                          , l = this.__iteratees__
                          , c = l.length
                          , p = 0
                          , f = e3(h, this.__takeCount__);
                        if (!i || !r && n == h && f == h)
                            return rA(t, this.__actions__);
                        var d = [];
                        t: for (; h-- && p < f; ) {
                            u += e;
                            for (var y = -1, g = t[u]; ++y < c; ) {
                                var v = l[y]
                                  , m = v.iteratee
                                  , w = v.type
                                  , b = m(g);
                                if (2 == w)
                                    g = b;
                                else if (!b) {
                                    if (1 == w)
                                        continue t;
                                    break t
                                }
                            }
                            d[p++] = g
                        }
                        return d
                    }
                    ,
                    ig.prototype.at = oo,
                    ig.prototype.chain = function() {
                        return or(this)
                    }
                    ,
                    ig.prototype.commit = function() {
                        return new iw(this.value(),this.__chain__)
                    }
                    ,
                    ig.prototype.next = function() {
                        this.__values__ === i && (this.__values__ = o3(this.value()));
                        var t = this.__index__ >= this.__values__.length
                          , e = t ? i : this.__values__[this.__index__++];
                        return {
                            done: t,
                            value: e
                        }
                    }
                    ,
                    ig.prototype.plant = function(t) {
                        for (var e, r = this; r instanceof im; ) {
                            var n = nj(r);
                            n.__index__ = 0,
                            n.__values__ = i,
                            e ? o.__wrapped__ = n : e = n;
                            var o = n;
                            r = r.__wrapped__
                        }
                        return o.__wrapped__ = t,
                        e
                    }
                    ,
                    ig.prototype.reverse = function() {
                        var t = this.__wrapped__;
                        if (t instanceof ib) {
                            var e = t;
                            return this.__actions__.length && (e = new ib(this)),
                            (e = e.reverse()).__actions__.push({
                                func: on,
                                args: [n1],
                                thisArg: i
                            }),
                            new iw(e,this.__chain__)
                        }
                        return this.thru(n1)
                    }
                    ,
                    ig.prototype.toJSON = ig.prototype.valueOf = ig.prototype.value = function() {
                        return rA(this.__wrapped__, this.__actions__)
                    }
                    ,
                    ig.prototype.first = ig.prototype.head,
                    t9 && (ig.prototype[t9] = function() {
                        return this
                    }
                    ),
                    ig
                }();
                "function" == typeof define && "object" == typeof define.amd && define.amd ? (t3._ = eV,
                define(function() {
                    return eV
                })) : t9 ? ((t9.exports = eV)._ = eV,
                t4._ = eV) : t3._ = eV
            }
            ).call(t)
        }
        ,
        ()=>(p || c((p = {
            exports: {}
        }).exports, p),
        p.exports))
          , ij = class extends Set {
            constructor(t, e=!1) {
                super(t),
                this.valuesAsFlags = e
            }
        }
        ;
        function iH(t) {
            if (t instanceof Map)
                return Object.fromEntries([...t.entries()].map(([t,e])=>[t, iH(e)]));
            if (t instanceof Set)
                return Array.from(t.values()).map(iH);
            if (t instanceof ij)
                return {
                    values: [...t.values()],
                    valuesAsFlags: t.valuesAsFlags
                };
            if ("object" != typeof t)
                return t;
            {
                let e = {};
                return Object.entries(t).forEach(([t,i])=>{
                    e[t] = iH(i)
                }
                ),
                e
            }
        }
        iB(iN(), 1);
        var iU = iB(iN(), 1);
        function iW(t, e) {
            if ("object" != typeof t)
                throw Error(`Cannot merge into non-object objectToMergeWith. Received: ${JSON.stringify(t)}`);
            if ("object" != typeof e)
                throw Error(`Cannot merge using non-object objectToMergeWith. Received: ${JSON.stringify(e)}`);
            let i = (0,
            iU.cloneDeep)(t);
            for (let[t,r] of Object.entries(e))
                "object" != typeof r || r instanceof Set || void 0 === i[t] ? i[t] = r : i[t] = iW(i[t], r);
            return i
        }
        var iG = "@composite:"
          , i$ = class {
            constructor(t, e, i) {
                this.tiledClassToMembersMap = t,
                this.enumNameToValuesMap = e,
                this.parserOptions = i,
                this.memoiser = new Map
            }
            flattenMembers(t, e) {
                return this.memoiser.has(t) || this.memoiser.set(t, e.reduce((t,e)=>P(P({}, t), this.flattenMemberProperty(e)), {})),
                {
                    [t]: this.memoiser.get(t)
                }
            }
            flattenMemberProperty(t) {
                var e;
                let i = null != (e = t.propertyType) ? e : t.propertytype;
                if ("class" !== t.type)
                    return this.enumNameToValuesMap.has(i) && this.enumNameToValuesMap.get(i).valuesAsFlags ? {
                        [t.name]: new Set(t.value.split(",").filter(t=>"" !== t))
                    } : {
                        [t.name]: t.value
                    };
                {
                    if (!this.memoiser.has(i)) {
                        let t = this.tiledClassToMembersMap.get(i).reduce((t,e)=>iW(this.flattenMemberProperty(e), t), {});
                        this.memoiser.set(i, t)
                    }
                    let e = this.memoiser.get(i)
                      , r = iW(e, this.flattenValue(t.value, e));
                    return this.checkIfShouldFlatten(t.name) ? r : {
                        [t.name.replace(iG, "")]: r
                    }
                }
            }
            get memoisedFlattenedProperties() {
                return this.memoiser
            }
            flattenValue(t, e) {
                return Object.entries(t).reduce((t,[i,r])=>"object" != typeof r ? function t(e, i) {
                    if (!(void 0 === e || "object" != typeof e))
                        for (let r of Object.keys(e)) {
                            if (r === i)
                                return e[r];
                            let n = e[r];
                            if ("object" == typeof n) {
                                let e = t(n, i);
                                if (void 0 !== e)
                                    return e
                            }
                        }
                }(e, i)instanceof Set ? iW({
                    [i]: new Set(r.split(",").filter(t=>"" !== t))
                }, t) : iW({
                    [i]: r
                }, t) : this.checkIfShouldFlatten(i) ? iW(this.flattenValue(r, e), t) : iW({
                    [i.replace(iG, "")]: this.flattenValue(r, e)
                }, t), {})
            }
            checkIfShouldFlatten(t) {
                var e;
                return (null == (e = this.parserOptions) ? void 0 : e.defaultComposite) === !0 ? t.startsWith("@inherit:") : !t.startsWith(iG)
            }
        }
          , iq = iB(iN(), 1)
          , iV = class {
            constructor(t) {
                this.flattener = t
            }
            flattenPropertiesOnObject(t) {
                var e, i, r, n;
                return x(P(P({}, this.flattener.memoisedFlattenedProperties.get(null != (e = t.class) ? e : t.type)), null == (i = t.properties) ? void 0 : i.reduce((t,e)=>P(P({}, t), this.flattener.flattenMemberProperty(e)), {})), {
                    name: t.name,
                    id: t.id,
                    class: null != (n = null != (r = t.class) ? r : t.type) ? n : null,
                    x: t.x,
                    y: t.y
                })
            }
            flattenPropertiesOnTile(t) {
                var e, i, r, n;
                return x(P(P({}, this.flattener.memoisedFlattenedProperties.get(null != (e = t.class) ? e : t.type)), null == (i = t.properties) ? void 0 : i.reduce((t,e)=>P(P({}, t), this.flattener.flattenMemberProperty(e)), {})), {
                    id: t.id,
                    class: null != (n = null != (r = t.class) ? r : t.type) ? n : null
                })
            }
            getCustomTypesMap() {
                return new Map([...this.flattener.memoisedFlattenedProperties.entries()].map(([t,e])=>[t, (0,
                iq.cloneDeep)(e)]))
            }
            getEnumsMap() {
                return new Map([...this.flattener.enumNameToValuesMap.entries()].map(([t,e])=>[t, (0,
                iq.cloneDeep)(e)]))
            }
            toJSON() {
                return JSON.stringify({
                    customTypes: iH(this.getCustomTypesMap()),
                    enums: iH(this.getEnumsMap())
                }, null, 4)
            }
        }
          , iK = {
            parse: function(t, e) {
                let i = new Map(t.propertyTypes.filter(t=>"enum" === t.type).map(t=>[t.name, new ij(t.values,t.valuesAsFlags)]))
                  , r = new Map(t.propertyTypes.filter(t=>"class" === t.type).map(t=>[t.name, t.members]))
                  , n = new i$(r,i,e);
                return r.forEach((t,e)=>{
                    n.flattenMembers(e, t)
                }
                ),
                new iV(n)
            }
        }
          , iX = class {
            constructor(t, e) {
                this.phaserTile = t,
                this.tiledProject = e
            }
            getProperty(t) {
                var e, i;
                let r = {};
                if (this.tiledProject) {
                    let t = iK.parse(this.tiledProject)
                      , i = this.getType();
                    if (i) {
                        let n = null == (e = t.getCustomTypesMap()) ? void 0 : e.get(i);
                        if (n)
                            for (let[t,e] of Object.entries(n))
                                r[t] = e
                    }
                }
                return null != (i = this.phaserTile.properties[t]) ? i : r[t]
            }
            hasProperty(t) {
                return null != this.getProperty(t)
            }
            getType() {
                var t, e;
                return null == (e = null == (t = this.phaserTile.tileset) ? void 0 : t.tileData[this.phaserTile.index - 1]) ? void 0 : e.type
            }
        }
          , iY = class {
            constructor(t, e) {
                this.phaserTilemapLayer = t,
                this.tiledProject = e
            }
            getName() {
                return this.phaserTilemapLayer.layer.name
            }
            getProperty(t) {
                let e = this.phaserTilemapLayer.layer.properties
                  , i = null == e ? void 0 : e.find(e=>e.name == t);
                return null == i ? void 0 : i.value
            }
            hasProperty(t) {
                return null != this.getProperty(t)
            }
            isCharLayer() {
                return this.hasProperty(ig)
            }
            getData() {
                return this.phaserTilemapLayer.layer.data.map(t=>t.map(t=>new iX(t,this.tiledProject)))
            }
        }
          , iJ = class {
            constructor(t, e) {
                for (let i of (this.phaserTilemap = t,
                this.tiledProject = e,
                this.phaserTilemap.layers))
                    if (null == i.tilemapLayer)
                        throw Error(`Error initializing tilemap. Layer '${i.name}' has no 'tilemapLayer'. This can happen if you call 'createLayer' with the wrong layer ID.`)
            }
            getTileWidth() {
                return this.phaserTilemap.tileWidth
            }
            getTileHeight() {
                return this.phaserTilemap.tileHeight
            }
            getWidth() {
                return this.phaserTilemap.width
            }
            getHeight() {
                return this.phaserTilemap.height
            }
            getOrientation() {
                return this.phaserTilemap.orientation == Phaser.Tilemaps.Orientation.ISOMETRIC.toString() ? "isometric" : "orthogonal"
            }
            getLayers() {
                return this.phaserTilemap.layers.map(t=>new iY(t.tilemapLayer,this.tiledProject))
            }
            hasTileAt(t, e, i) {
                return !!this.phaserTilemap.hasTileAt(t, e, i)
            }
            getTileAt(t, e, i) {
                let r = this.phaserTilemap.getTileAt(t, e, !1, i);
                if (r)
                    return new iX(r,this.tiledProject)
            }
        }
          , iZ = class t {
            constructor(e) {
                this.scene = e,
                this.geHeadless = new ix(!1),
                this.isCreatedInternal = !1,
                t.welcomeMessagePrinted || (console.log(`Using GridEngine Phaser Plugin v${ic}`),
                t.welcomeMessagePrinted = !0),
                this.scene.sys.events.once("boot", this.boot, this)
            }
            boot() {
                this.scene.sys.events.on("update", this.update, this)
            }
            getCharLayer(t) {
                return this.geHeadless.getCharLayer(t)
            }
            getTransition(t, e) {
                return this.geHeadless.getTransition(t, e)
            }
            setTransition(t, e, i) {
                this.geHeadless.setTransition(t, e, i)
            }
            create(t, e) {
                this.geHeadless.create(new iJ(t,e.tiledProject), e),
                this.isCreatedInternal = !0,
                this.gridCharacters = new Map;
                let i = this.setConfigDefaults(e);
                this.config = i,
                this.gridTilemap = new eX(t),
                this.addCharacters()
            }
            getPosition(t) {
                return this.geHeadless.getPosition(t)
            }
            move(t, e) {
                this.geHeadless.move(t, e)
            }
            moveRandomly(t, e=0, i=-1) {
                this.geHeadless.moveRandomly(t, e, i)
            }
            getMovement(t) {
                return this.geHeadless.getMovement(t)
            }
            moveTo(t, e, i) {
                return this.geHeadless.moveTo(t, e, i)
            }
            stopMovement(t) {
                this.geHeadless.stopMovement(t)
            }
            setSpeed(t, e) {
                this.geHeadless.setSpeed(t, e)
            }
            getSpeed(t) {
                return this.geHeadless.getSpeed(t)
            }
            setContainer(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.setContainer(e)
            }
            getContainer(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getContainer()
            }
            getOffsetX(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getOffsetX()
            }
            setOffsetX(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.setOffsetX(e)
            }
            getOffsetY(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getOffsetY()
            }
            setOffsetY(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.setOffsetY(e)
            }
            collidesWithTiles(t) {
                return this.geHeadless.collidesWithTiles(t)
            }
            getWalkingAnimationMapping(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                let r = i.getAnimation();
                return null == r ? void 0 : r.getWalkingAnimationMapping()
            }
            hasLayerOverlay() {
                var t;
                return this.initGuard(),
                !!(null != (t = this.config) && t.layerOverlay)
            }
            setWalkingAnimationMapping(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                let n = r.getAnimation();
                null == n || n.setWalkingAnimationMapping(e)
            }
            update(t, e) {
                if (this.isCreatedInternal && this.gridCharacters)
                    for (let[t,i] of this.gridCharacters)
                        i.update(e);
                this.geHeadless.update(t, e)
            }
            addCharacter(t) {
                this.geHeadless.addCharacter(t),
                this.addCharacterInternal(t)
            }
            hasCharacter(t) {
                return this.geHeadless.hasCharacter(t)
            }
            removeCharacter(t) {
                var e, i;
                this.initGuard();
                let r = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.destroy(),
                null == (i = this.gridCharacters) || i.delete(t),
                this.geHeadless.removeCharacter(t)
            }
            removeAllCharacters() {
                if (this.initGuard(),
                this.gridCharacters) {
                    for (let t of this.gridCharacters.keys())
                        this.removeCharacter(t);
                    this.geHeadless.removeAllCharacters()
                }
            }
            getAllCharacters(t) {
                return this.geHeadless.getAllCharacters(t)
            }
            getLabels(t) {
                return this.geHeadless.getLabels(t)
            }
            addLabels(t, e) {
                this.geHeadless.addLabels(t, e)
            }
            removeLabels(t, e) {
                this.geHeadless.removeLabels(t, e)
            }
            clearLabels(t) {
                this.geHeadless.clearLabels(t)
            }
            follow(t, e, i, r) {
                let n;
                void 0 === i ? n = {
                    distance: 0,
                    closestPointIfBlocked: !1
                } : "number" == typeof i ? (n = {
                    distance: i,
                    closestPointIfBlocked: !1
                },
                r && (n.closestPointIfBlocked = !0)) : n = i,
                this.geHeadless.follow(t, e, n)
            }
            isMoving(t) {
                return this.geHeadless.isMoving(t)
            }
            getFacingDirection(t) {
                return this.geHeadless.getFacingDirection(t)
            }
            getFacingPosition(t) {
                return this.geHeadless.getFacingPosition(t)
            }
            turnTowards(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                r.turnTowards(e),
                this.geHeadless.turnTowards(t, e)
            }
            getCharactersAt(t, e) {
                return this.geHeadless.getCharactersAt(t, e)
            }
            setPosition(t, e, i) {
                this.geHeadless.setPosition(t, e, i)
            }
            getSprite(t) {
                var e;
                this.initGuard();
                let i = null == (e = this.gridCharacters) ? void 0 : e.get(t);
                if (!i)
                    throw this.createCharUnknownErr(t);
                return i.getSprite()
            }
            setSprite(t, e) {
                var i;
                this.initGuard();
                let r = null == (i = this.gridCharacters) ? void 0 : i.get(t);
                if (!r)
                    throw this.createCharUnknownErr(t);
                e.setOrigin(0, 0),
                r.setSprite(e)
            }
            isBlocked(t, e, i=["geDefault"]) {
                return this.geHeadless.isBlocked(t, e, i)
            }
            isTileBlocked(t, e) {
                return this.geHeadless.isTileBlocked(t, e)
            }
            getCollisionGroups(t) {
                return this.geHeadless.getCollisionGroups(t)
            }
            setCollisionGroups(t, e) {
                this.geHeadless.setCollisionGroups(t, e)
            }
            getIgnoreCollisionGroups(t) {
                return this.geHeadless.getIgnoreCollisionGroups(t)
            }
            setIgnoreCollisionGroups(t, e) {
                this.geHeadless.setIgnoreCollisionGroups(t, e)
            }
            getTilePosInDirection(t, e, i) {
                return this.geHeadless.getTilePosInDirection(t, e, i)
            }
            findShortestPath(t, e, i={}) {
                return this.geHeadless.findShortestPath(t, e, i)
            }
            steppedOn(t, e, i) {
                return this.geHeadless.steppedOn(t, e, i)
            }
            characterShifted() {
                return this.geHeadless.characterShifted()
            }
            movementStarted() {
                return this.geHeadless.movementStarted()
            }
            movementStopped() {
                return this.geHeadless.movementStopped()
            }
            directionChanged() {
                return this.geHeadless.directionChanged()
            }
            positionChangeStarted() {
                return this.geHeadless.positionChangeStarted()
            }
            positionChangeFinished() {
                return this.geHeadless.positionChangeFinished()
            }
            getMovementProgress(t) {
                return this.geHeadless.getMovementProgress(t)
            }
            rebuildTileCollisionCache(t, e, i, r) {
                this.geHeadless.rebuildTileCollisionCache(t, e, i, r)
            }
            addQueueMovements(t, e, i) {
                this.geHeadless.addQueueMovements(t, e, i)
            }
            getEnqueuedMovements(t) {
                return this.geHeadless.getEnqueuedMovements(t)
            }
            queueMovementFinished() {
                return this.geHeadless.queueMovementFinished()
            }
            clearEnqueuedMovements(t) {
                return this.geHeadless.clearEnqueuedMovements(t)
            }
            getState() {
                return {
                    characters: this.geHeadless.getState().characters.map(t=>x(P({}, t), {
                        offsetX: this.getOffsetX(t.id),
                        offsetY: this.getOffsetY(t.id)
                    }))
                }
            }
            setState(t) {
                if (this.geHeadless.setState(t),
                this.gridCharacters)
                    for (let e of t.characters) {
                        let t = this.gridCharacters.get(e.id);
                        t && (t.setOffsetX(e.offsetX),
                        t.setOffsetY(e.offsetY))
                    }
            }
            getTileCost(t, e, i) {
                return this.initGuard(),
                this.geHeadless.getTileCost(t, e, i)
            }
            setConfigDefaults(t) {
                return P({
                    collisionTilePropertyName: "ge_collide",
                    numberOfDirections: 4,
                    characterCollisionStrategy: "BLOCK_TWO_TILES",
                    layerOverlay: !1,
                    cacheTileCollisions: !1
                }, t)
            }
            initGuard() {
                if (!this.isCreatedInternal)
                    throw this.createUninitializedErr()
            }
            createUninitializedErr() {
                throw Error("GridEngine not initialized. You need to call create() first.")
            }
            addCharacters() {
                var t;
                null == (t = this.config) || t.characters.forEach(t=>this.addCharacterInternal(t))
            }
            createCharUnknownErr(t) {
                return Error(`Character unknown: ${t}`)
            }
            addCharacterInternal(t) {
                var e;
                if (this.initGuard(),
                !this.gridTilemap || !this.config)
                    throw this.createUninitializedErr();
                let i = new eY(t,this.scene,this.gridTilemap,this.config.layerOverlay,this.geHeadless);
                null == (e = this.gridCharacters) || e.set(t.id, i)
            }
        }
        ;
        iZ.welcomeMessagePrinted = !1;
        var iQ = iZ
    }
}]);
