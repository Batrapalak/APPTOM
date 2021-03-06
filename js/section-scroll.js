! function(e, t, r) {
    "use strict";

    function n(r) {
        if (a = t.documentElement, o = t.body, K(), le = this, r = r || {}, de = r.constants || {}, r.easing)
            for (var n in r.easing) U[n] = r.easing[n];
        be = r.edgeStrategy || "set", fe = { beforerender: r.beforerender, render: r.render, keyframe: r.keyframe }, ue = r.forceHeight !== !1, ue && (Pe = r.scale || 1), me = r.mobileDeceleration || x, ge = r.smoothScrolling !== !1, ve = r.smoothScrollingDuration || E, he = { targetTop: le.getScrollTop() }, Ge = (r.mobileCheck || function() { return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera) })(), Ge ? (ce = t.getElementById(r.skrollrBody || A), ce && ie(), X(), Ce(a, [y, w], [b])) : Ce(a, [y, T], [b]), le.refresh(), Se(e, "resize orientationchange", function() {
            var e = a.clientWidth,
                t = a.clientHeight;
            t === ze && e === $e || (ze = t, $e = e, Be = !0)
        });
        var i = Y();
        return function l() { Z(), we = i(l) }(), le
    }
    var a, o, i = { get: function() { return le }, init: function(e) { return le || new n(e) }, VERSION: "0.6.29" },
        l = Object.prototype.hasOwnProperty,
        s = e.Math,
        c = e.getComputedStyle,
        f = "touchstart",
        u = "touchmove",
        d = "touchcancel",
        m = "touchend",
        p = "skrollable",
        g = p + "-before",
        v = p + "-between",
        h = p + "-after",
        y = "skrollr",
        b = "no-" + y,
        T = y + "-desktop",
        w = y + "-mobile",
        S = "linear",
        k = 1e3,
        x = .004,
        A = "skrollr-body",
        E = 200,
        _ = "start",
        N = "end",
        F = "center",
        C = "bottom",
        L = "___skrollable_id",
        H = /^(?:input|textarea|button|select)$/i,
        D = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        O = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        P = /^(@?[a-z\-]+)\[(\w+)\]$/,
        V = /-([a-z0-9_])/g,
        q = function(e, t) { return t.toUpperCase() },
        M = /[\-+]?[\d]*\.?[\d]+/g,
        $ = /\{\?\}/g,
        z = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        B = /[a-z\-]+-gradient/g,
        j = "",
        G = "",
        K = function() {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (c) {
                var t = c(o, null);
                for (var r in t)
                    if (j = r.match(e) || +r === r && t[r].match(e)) break;
                if (!j) return void(j = G = "");
                j = j[0], "-" === j.slice(0, 1) ? (G = j, j = { "-webkit-": "webkit", "-moz-": "Moz", "-ms-": "ms", "-o-": "O" }[j]) : G = "-" + j.toLowerCase() + "-"
            }
        },
        Y = function() {
            var t = e.requestAnimationFrame || e[j.toLowerCase() + "RequestAnimationFrame"],
                r = De();
            return !Ge && t || (t = function(t) {
                var n = De() - r,
                    a = s.max(0, 1e3 / 60 - n);
                return e.setTimeout(function() { r = De(), t() }, a)
            }), t
        },
        R = function() { var t = e.cancelAnimationFrame || e[j.toLowerCase() + "CancelAnimationFrame"]; return !Ge && t || (t = function(t) { return e.clearTimeout(t) }), t },
        U = {
            begin: function() { return 0 },
            end: function() { return 1 },
            linear: function(e) { return e },
            quadratic: function(e) { return e * e },
            cubic: function(e) { return e * e * e },
            swing: function(e) { return -s.cos(e * s.PI) / 2 + .5 },
            sqrt: function(e) { return s.sqrt(e) },
            outCubic: function(e) { return s.pow(e - 1, 3) + 1 },
            bounce: function(e) {
                var t;
                if (e <= .5083) t = 3;
                else if (e <= .8489) t = 9;
                else if (e <= .96208) t = 27;
                else {
                    if (!(e <= .99981)) return 1;
                    t = 91
                }
                return 1 - s.abs(3 * s.cos(e * t * 1.028) / t)
            }
        };
    n.prototype.refresh = function(e) {
        var n, a, o = !1;
        for (e === r ? (o = !0, se = [], je = 0, e = t.getElementsByTagName("*")) : e.length === r && (e = [e]), n = 0, a = e.length; n < a; n++) {
            var i = e[n],
                l = i,
                s = [],
                c = ge,
                f = be,
                u = !1;
            if (o && L in i && delete i[L], i.attributes) {
                for (var d = 0, m = i.attributes.length; d < m; d++) {
                    var g = i.attributes[d];
                    if ("data-anchor-target" !== g.name)
                        if ("data-smooth-scrolling" !== g.name)
                            if ("data-edge-strategy" !== g.name)
                                if ("data-emit-events" !== g.name) {
                                    var v = g.name.match(I);
                                    if (null !== v) {
                                        var h = { props: g.value, element: i, eventType: g.name.replace(V, q) };
                                        s.push(h);
                                        var y = v[1];
                                        y && (h.constant = y.substr(1));
                                        var b = v[2];
                                        /p$/.test(b) ? (h.isPercentage = !0, h.offset = (0 | b.slice(0, -1)) / 100) : h.offset = 0 | b;
                                        var T = v[3],
                                            w = v[4] || T;
                                        T && T !== _ && T !== N ? (h.mode = "relative", h.anchors = [T, w]) : (h.mode = "absolute", T === N ? h.isEnd = !0 : h.isPercentage || (h.offset = h.offset * Pe))
                                    }
                                } else u = !0;
                    else f = g.value;
                    else c = "off" !== g.value;
                    else if (l = t.querySelector(g.value), null === l) throw 'Unable to find anchor target "' + g.value + '"'
                }
                if (s.length) { var S, k, x;!o && L in i ? (x = i[L], S = se[x].styleAttr, k = se[x].classAttr) : (x = i[L] = je++, S = i.style.cssText, k = Fe(i)), se[x] = { element: i, styleAttr: S, classAttr: k, anchorTarget: l, keyFrames: s, smoothScrolling: c, edgeStrategy: f, emitEvents: u, lastFrameIndex: -1 }, Ce(i, [p], []) }
            }
        }
        for (Ee(), n = 0, a = e.length; n < a; n++) {
            var A = se[e[n][L]];
            A !== r && (J(A), te(A))
        }
        return le
    }, n.prototype.relativeToAbsolute = function(e, t, r) {
        var n = a.clientHeight,
            o = e.getBoundingClientRect(),
            i = o.top,
            l = o.bottom - o.top;
        return t === C ? i -= n : t === F && (i -= n / 2), r === C ? i += l : r === F && (i += l / 2), i += le.getScrollTop(), i + .5 | 0
    }, n.prototype.animateTo = function(e, t) {
        t = t || {};
        var n = De(),
            a = le.getScrollTop(),
            o = t.duration === r ? k : t.duration;
        return pe = { startTop: a, topDiff: e - a, targetTop: e, duration: o, startTime: n, endTime: n + o, easing: U[t.easing || S], done: t.done }, pe.topDiff || (pe.done && pe.done.call(le, !1), pe = r), le
    }, n.prototype.stopAnimateTo = function() { pe && pe.done && pe.done.call(le, !0), pe = r }, n.prototype.isAnimatingTo = function() { return !!pe }, n.prototype.isMobile = function() { return Ge }, n.prototype.setScrollTop = function(t, r) { return ye = r === !0, Ge ? Ke = s.min(s.max(t, 0), Oe) : e.scrollTo(0, t), le }, n.prototype.getScrollTop = function() { return Ge ? Ke : e.pageYOffset || a.scrollTop || o.scrollTop || 0 }, n.prototype.getMaxScrollTop = function() { return Oe }, n.prototype.on = function(e, t) { return fe[e] = t, le }, n.prototype.off = function(e) { return delete fe[e], le }, n.prototype.destroy = function() {
        var e = R();
        e(we), xe(), Ce(a, [b], [y, T, w]);
        for (var t = 0, n = se.length; t < n; t++) oe(se[t].element);
        a.style.overflow = o.style.overflow = "", a.style.height = o.style.height = "", ce && i.setStyle(ce, "transform", "none"), le = r, ce = r, fe = r, ue = r, Oe = 0, Pe = 1, de = r, me = r, Ve = "down", qe = -1, $e = 0, ze = 0, Be = !1, pe = r, ge = r, ve = r, he = r, ye = r, je = 0, be = r, Ge = !1, Ke = 0, Te = r
    };
    var X = function() {
            var n, i, l, c, p, g, v, h, y, b, T, w;
            Se(a, [f, u, d, m].join(" "), function(e) {
                var a = e.changedTouches[0];
                for (c = e.target; 3 === c.nodeType;) c = c.parentNode;
                switch (p = a.clientY, g = a.clientX, b = e.timeStamp, H.test(c.tagName) || e.preventDefault(), e.type) {
                    case f:
                        n && n.blur(), le.stopAnimateTo(), n = c, i = v = p, l = g, y = b;
                        break;
                    case u:
                        H.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = p - v, w = b - T, le.setScrollTop(Ke - h, !0), v = p, T = b;
                        break;
                    default:
                    case d:
                    case m:
                        var o = i - p,
                            S = l - g,
                            k = S * S + o * o;
                        if (k < 49) {
                            if (!H.test(n.tagName)) {
                                n.focus();
                                var x = t.createEvent("MouseEvents");
                                x.initMouseEvent("click", !0, !0, e.view, 1, a.screenX, a.screenY, a.clientX, a.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(x)
                            }
                            return
                        }
                        n = r;
                        var A = h / w;
                        A = s.max(s.min(A, 3), -3);
                        var E = s.abs(A / me),
                            _ = A * E + .5 * me * E * E,
                            N = le.getScrollTop() - _,
                            F = 0;
                        N > Oe ? (F = (Oe - N) / _, N = Oe) : N < 0 && (F = -N / _, N = 0), E *= 1 - F, le.animateTo(N + .5 | 0, { easing: "outCubic", duration: E })
                }
            }), e.scrollTo(0, 0), a.style.overflow = o.style.overflow = "hidden"
        },
        Q = function() {
            var e, t, r, n, o, i, l, c, f, u, d, m = a.clientHeight,
                p = _e();
            for (c = 0, f = se.length; c < f; c++)
                for (e = se[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, o = 0, i = n.length; o < i; o++) l = n[o], u = l.offset, d = p[l.constant] || 0, l.frame = u, l.isPercentage && (u *= m, l.frame = u), "relative" === l.mode && (oe(t), l.frame = le.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, oe(t, !0)), l.frame += d, ue && !l.isEnd && l.frame > Oe && (Oe = l.frame);
            for (Oe = s.max(Oe, Ne()), c = 0, f = se.length; c < f; c++) {
                for (e = se[c], n = e.keyFrames, o = 0, i = n.length; o < i; o++) l = n[o], d = p[l.constant] || 0, l.isEnd && (l.frame = Oe - l.offset + d);
                e.keyFrames.sort(Ie)
            }
        },
        W = function(e, t) {
            for (var r = 0, n = se.length; r < n; r++) {
                var a, o, s = se[r],
                    c = s.element,
                    f = s.smoothScrolling ? e : t,
                    u = s.keyFrames,
                    d = u.length,
                    m = u[0],
                    y = u[u.length - 1],
                    b = f < m.frame,
                    T = f > y.frame,
                    w = b ? m : y,
                    S = s.emitEvents,
                    k = s.lastFrameIndex;
                if (b || T) {
                    if (b && s.edge === -1 || T && 1 === s.edge) continue;
                    switch (b ? (Ce(c, [g], [h, v]), S && k > -1 && (Ae(c, m.eventType, Ve), s.lastFrameIndex = -1)) : (Ce(c, [h], [g, v]), S && k < d && (Ae(c, y.eventType, Ve), s.lastFrameIndex = d)), s.edge = b ? -1 : 1, s.edgeStrategy) {
                        case "reset":
                            oe(c);
                            continue;
                        case "ease":
                            f = w.frame;
                            break;
                        default:
                        case "set":
                            var x = w.props;
                            for (a in x) l.call(x, a) && (o = ae(x[a].value), 0 === a.indexOf("@") ? c.setAttribute(a.substr(1), o) : i.setStyle(c, a, o));
                            continue
                    }
                } else 0 !== s.edge && (Ce(c, [p, v], [g, h]), s.edge = 0);
                for (var A = 0; A < d - 1; A++)
                    if (f >= u[A].frame && f <= u[A + 1].frame) {
                        var E = u[A],
                            _ = u[A + 1];
                        for (a in E.props)
                            if (l.call(E.props, a)) {
                                var N = (f - E.frame) / (_.frame - E.frame);
                                N = E.props[a].easing(N), o = ne(E.props[a].value, _.props[a].value, N), o = ae(o), 0 === a.indexOf("@") ? c.setAttribute(a.substr(1), o) : i.setStyle(c, a, o)
                            }
                        S && k !== A && ("down" === Ve ? Ae(c, E.eventType, Ve) : Ae(c, _.eventType, Ve), s.lastFrameIndex = A);
                        break
                    }
            }
        },
        Z = function() {
            Be && (Be = !1, Ee());
            var e, t, n = le.getScrollTop(),
                a = De();
            if (pe) a >= pe.endTime ? (n = pe.targetTop, e = pe.done, pe = r) : (t = pe.easing((a - pe.startTime) / pe.duration), n = pe.startTop + t * pe.topDiff | 0), le.setScrollTop(n, !0);
            else if (!ye) {
                var o = he.targetTop - n;
                o && (he = { startTop: qe, topDiff: n - qe, targetTop: n, startTime: Me, endTime: Me + ve }), a <= he.endTime && (t = U.sqrt((a - he.startTime) / ve), n = he.startTop + t * he.topDiff | 0)
            }
            if (ye || qe !== n) {
                Ve = n > qe ? "down" : n < qe ? "up" : Ve, ye = !1;
                var l = { curTop: n, lastTop: qe, maxTop: Oe, direction: Ve },
                    s = fe.beforerender && fe.beforerender.call(le, l);
                s !== !1 && (W(n, le.getScrollTop()), Ge && ce && i.setStyle(ce, "transform", "translate(0, " + -Ke + "px) " + Te), qe = n, fe.render && fe.render.call(le, l)), e && e.call(le, !1)
            }
            Me = a
        },
        J = function(e) {
            for (var t = 0, r = e.keyFrames.length; t < r; t++) {
                for (var n, a, o, i, l = e.keyFrames[t], s = {}; null !== (i = O.exec(l.props));) o = i[1], a = i[2], n = o.match(P), null !== n ? (o = n[1], n = n[2]) : n = S, a = a.indexOf("!") ? ee(a) : [a.slice(1)], s[o] = { value: a, easing: U[n] };
                l.props = s
            }
        },
        ee = function(e) { var t = []; return z.lastIndex = 0, e = e.replace(z, function(e) { return e.replace(M, function(e) { return e / 255 * 100 + "%" }) }), G && (B.lastIndex = 0, e = e.replace(B, function(e) { return G + e })), e = e.replace(M, function(e) { return t.push(+e), "{?}" }), t.unshift(e), t },
        te = function(e) { var t, r, n = {}; for (t = 0, r = e.keyFrames.length; t < r; t++) re(e.keyFrames[t], n); for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) re(e.keyFrames[t], n) },
        re = function(e, t) { var r; for (r in t) l.call(e.props, r) || (e.props[r] = t[r]); for (r in e.props) t[r] = e.props[r] },
        ne = function(e, t, r) { var n, a = e.length; if (a !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"'; var o = [e[0]]; for (n = 1; n < a; n++) o[n] = e[n] + (t[n] - e[n]) * r; return o },
        ae = function(e) { var t = 1; return $.lastIndex = 0, e[0].replace($, function() { return e[t++] }) },
        oe = function(e, t) { e = [].concat(e); for (var r, n, a = 0, o = e.length; a < o; a++) n = e[a], r = se[n[L]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Ce(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Fe(n), n.style.cssText = r.styleAttr, Ce(n, r.classAttr))) },
        ie = function() {
            Te = "translateZ(0)", i.setStyle(ce, "transform", Te);
            var e = c(ce),
                t = e.getPropertyValue("transform"),
                r = e.getPropertyValue(G + "transform"),
                n = t && "none" !== t || r && "none" !== r;
            n || (Te = "")
        };
    i.setStyle = function(e, t, r) {
        var n = e.style;
        if (t = t.replace(V, q).replace("-", ""), "zIndex" === t) isNaN(r) ? n[t] = r : n[t] = "" + (0 | r);
        else if ("float" === t) n.styleFloat = n.cssFloat = r;
        else try { j && (n[j + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r } catch (a) {}
    };
    var le, se, ce, fe, ue, de, me, pe, ge, ve, he, ye, be, Te, we, Se = i.addEvent = function(t, r, n) {
            var a = function(t) { return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() { t.returnValue = !1, t.defaultPrevented = !0 }), n.call(this, t) };
            r = r.split(" ");
            for (var o, i = 0, l = r.length; i < l; i++) o = r[i], t.addEventListener ? t.addEventListener(o, n, !1) : t.attachEvent("on" + o, a), Ye.push({ element: t, name: o, listener: n })
        },
        ke = i.removeEvent = function(e, t, r) { t = t.split(" "); for (var n = 0, a = t.length; n < a; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r) },
        xe = function() {
            for (var e, t = 0, r = Ye.length; t < r; t++) e = Ye[t], ke(e.element, e.name, e.listener);
            Ye = []
        },
        Ae = function(e, t, r) { fe.keyframe && fe.keyframe.call(le, e, t, r) },
        Ee = function() {
            var e = le.getScrollTop();
            Oe = 0, ue && !Ge && (o.style.height = ""), Q(), ue && !Ge && (o.style.height = Oe + a.clientHeight + "px"), Ge ? le.setScrollTop(s.min(le.getScrollTop(), Oe)) : le.setScrollTop(e, !0), ye = !0
        },
        _e = function() {
            var e, t, r = a.clientHeight,
                n = {};
            for (e in de) t = de[e], "function" == typeof t ? t = t.call(le) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t;
            return n
        },
        Ne = function() { var e, t = 0; return ce && (t = s.max(ce.offsetHeight, ce.scrollHeight)), e = s.max(t, o.scrollHeight, o.offsetHeight, a.scrollHeight, a.offsetHeight, a.clientHeight), e - a.clientHeight },
        Fe = function(t) { var r = "className"; return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r] },
        Ce = function(t, n, a) {
            var o = "className";
            if (e.SVGElement && t instanceof e.SVGElement && (t = t[o], o = "baseVal"), a === r) return void(t[o] = n);
            for (var i = t[o], l = 0, s = a.length; l < s; l++) i = He(i).replace(He(a[l]), " ");
            i = Le(i);
            for (var c = 0, f = n.length; c < f; c++) He(i).indexOf(He(n[c])) === -1 && (i += " " + n[c]);
            t[o] = Le(i)
        },
        Le = function(e) { return e.replace(D, "") },
        He = function(e) { return " " + e + " " },
        De = Date.now || function() { return +new Date },
        Ie = function(e, t) { return e.frame - t.frame },
        Oe = 0,
        Pe = 1,
        Ve = "down",
        qe = -1,
        Me = De(),
        $e = 0,
        ze = 0,
        Be = !1,
        je = 0,
        Ge = !1,
        Ke = 0,
        Ye = [];
    "function" == typeof define && define.amd ? define([], function() { return i }) : "undefined" != typeof module && module.exports ? module.exports = i : e.grsa_skrollr = i
}(window, document), document.addEventListener("DOMContentLoaded", function() {
    var e = !1,
        t = document.querySelectorAll(".gambit_row_scroll");
    Array.prototype.forEach.call(t, function(t) {
        if (navigator.userAgent.match(/(Mobi|Android)/)) return void t.parentNode.removeChild(t);
        e = !0;
        for (var r = t.parentNode; !r.classList.contains("vc_row") && !r.classList.contains("wpb_row");) {
            if ("HTML" === r.tagName) { r = !1; break }
            r = r.parentNode
        }
        if (r === !1) { r = t.parentNode; for (var n = !1; !n && (Array.prototype.forEach.call(r.classList, function(e, t) { if (!n) return e.match(/row/g) ? void(n = !0) : void 0 }), !n && "HTML" !== r.tagName);) r = r.parentNode }
        r === !1 && (r = t.parentNode), r.parentNode && r.parentNode.classList && r.parentNode.classList.contains("x-content-band") && (r = r.parentNode), r.classList.add("gambit_row_scroll_parent"), "true" === t.getAttribute("data-body-overflow") && document.querySelector("body").classList.add("gambit_row_scroll_overflow");
        var a = r,
            o = null;
        if (t.getAttribute("data-row-exit") && (rowScrollParams.content_manipulators.indexOf(t.getAttribute("data-row-exit")) !== -1 ? (o = document.createElement("DIV"), [].forEach.call(t.attributes, function(e) { if (e.name.match(/^data-/) && e.name.match(/-exit$/)) { var t = e.name; "data-row-exit" !== t && (t = t.replace("-exit", "")), o.setAttribute(t, e.value) } })) : [].forEach.call(t.attributes, function(e) { if (e.name.match(/^data-/) && e.name.match(/-exit$/)) { var t = e.name; "data-row-exit" !== t && (t = t.replace("-exit", "")), a.setAttribute(t, e.value) } })), t.getAttribute("data-row-entrance") && (rowScrollParams.content_manipulators.indexOf(t.getAttribute("data-row-entrance")) !== -1 ? (null === o && (o = document.createElement("DIV")), [].forEach.call(t.attributes, function(e) { if (e.name.match(/^data-/) && e.name.match(/-entrance$/)) { var t = e.name; "data-row-entrance" !== t && (t = t.replace("-entrance", "")), o.setAttribute(t, e.value) } })) : [].forEach.call(t.attributes, function(e) { if (e.name.match(/^data-/) && e.name.match(/-entrance$/)) { var t = e.name; "data-row-entrance" !== t && (t = t.replace("-entrance", "")), a.setAttribute(t, e.value) } })), null !== o) {
            for (o.classList.add("gambit_row_scroll_wrapper"), o.classList.add("gambit_row_scroll_parent"); r.firstChild;) o.appendChild(r.firstChild);
            r.appendChild(o)
        }
        t.parentNode.removeChild(t)
    }), e && setTimeout(function() { grsa_skrollr.init({ forceHeight: !1 }) }, 1e3), window.refreshSkrollables = function() { if (document.querySelectorAll(".skrollable")) { var e = grsa_skrollr.get(); "undefined" != typeof e && e.refresh(document.querySelectorAll(".skrollable")) } }, window.addEventListener("resize", function() { setTimeout(window.refreshSkrollables, 1) })
}), "undefined" != typeof jQuery && jQuery(document).ready(function(e) { e(window).on("grid:items:added", function() { window.refreshSkrollables() }) });