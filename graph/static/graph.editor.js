function getI18NString(t) {
    if (!i18n[lang]) return t;
    var e = i18n[lang][t];
    return void 0 === e ? t : e
}

function override(t, e, n) {
    var i = t.prototype[e];
    t.prototype[e] = function () {
        return i.apply(this, arguments), n.apply(this, arguments)
    }
}

function GridBackground(t) {
    this.graph = t, t.onPropertyChange("viewport", this.update.bind(this)), t.onPropertyChange("transform", this.update.bind(this)), this.canvas = Q.createCanvas(t.width, t.height, !0), this.canvas.style.position = "absolute", this.canvas.style.top = "0px", this.canvas.style["-webkit-user-select"] = "none", this.canvas.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)", this.scaleCanvas = Q.createCanvas(t.width, t.height, !0), this.scaleCanvas.style.position = "absolute", this.scaleCanvas.style.top = "0px", this.scaleCanvas.style["-webkit-user-select"] = "none", this.scaleCanvas.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)", t.canvasPanel.insertBefore(this.canvas, t.canvasPanel.firstChild), t.canvasPanel.appendChild(this.scaleCanvas), this.update()
}

var i18n = {
    "zh-cn": {
        Name: "名称",
        "Render Color": "渲染色",
        Border: "边框",
        "Border Color": "边框颜色",
        Location: "坐标",
        Size: "尺寸",
        Rotate: "旋转",
        "Label Color": "文本颜色",
        "Background Color": "背景色",
        "Font Size": "字体大小",
        "json file is empty": "JSON文件为空",
        "Save Error": "保存错误",
        "Save Success": "保存成功",
        Update: "更新",
        Submit: "提交",
        "Export JSON": "导出JSON",
        "Load File ...": "加载文件 ...",
        "Download File": "下载文件",
        Save: "保存",
        Rename: "重命名",
        "Input Element Name": "输入图元名称",
        "Solid Line": "实线样式",
        "Dashed Line": "虚线样式",
        "Line Width": "连线宽度",
        "Input Line Width": "输入连线宽度",
        "Line Color": "连线颜色",
        "Input Line Color": "输入连线颜色",
        "Out of Group": "脱离分组",
        "Send to Top": "置顶显示",
        "Send to Bottom": "置底显示",
        "Reset Layer": "恢复默认层",
        "Clear Graph": "清空画布",
        "Zoom In": "放大",
        "Zoom Out": "缩小",
        "1:1": "1:1",
        "Pan Mode": "平移模式",
        "Rectangle Select": "框选模式",
        Text: "文字",
        "Basic Nodes": "基本节点",
        "Register Images": "注册图片",
        "Default Shapes": "默认形状"
    }
}, lang = navigator.language || navigator.browserLanguage;
lang = lang.toLowerCase(), Q.Graph.prototype.copy = function () {
    var t = this.selectionModel.toDatas();
    this._copyElements = t
}, Q.Graph.prototype.paste = function (t, e) {
    function n(t) {
        i[t.id] || (i[t.id] = t, t.hasChildren() && t.forEachChild(n), t instanceof Q.Edge && (n(t.from), n(t.to)))
    }

    if (this._copyElements) {
        t = t || 0, e = e || 0;
        var i = {};
        graph.selectionModel.forEach(n);
        for (var o in i) {
            var r = i[o];
            r instanceof Q.Node && r.hasEdge() && r.forEachEdge(function (t) {
                var e = t.otherNode(r);
                e && i[e.id] && (i[t.id] = t)
            })
        }
        var a = this.exportJSON(!0, {
            filter: function (t) {
                return t.id in i
            }.bind(this)
        }), s = this.parseJSON(a);
        s.forEach(function (n) {
            n instanceof Q.Node && (n.x = n.x + t, n.y = n.y + e)
        }), graph.setSelection(s)
    }
}, override(Q.EditInteraction, "onkeydown", function (t, e) {
    var n = t.keyCode;
    if (Q.isMetaKey(t)) {
        if (67 == n) e.copy(); else if (86 == n) e.paste(20, 20); else if (90 == n) ; else if (89 != n) return;
        Q.stopEvent(t)
    }
}), !function (t, e) {
    var n = function (t) {
        t = t || {};
        var n = document.createElement(t.tagName || "div");
        return t["class"] && e(n).addClass(t["class"]), t.parent && t.parent.appendChild(n), t.style && n.setAttribute("style", t.style), t.css && e(n).css(t.css), t.html && e(n).html(t.html), n
    };
    t.createElement = n
}(Q, jQuery), !function (t) {
    function e(t) {
        t = t || window.event;
        var e = t.dataTransfer, n = t.target;
        e.setData("text", n.getAttribute(o))
    }

    function n(t, e, n, o) {
        var r = document.createElement("img");
        return r.src = e, r.setAttribute("title", n), o = o || {}, o.label = o.label || n, o.title = n, o.image || o.type && "Node" != o.type || (o.image = e), i(r, o), t.appendChild(r), r
    }

    function i(n, i) {
        return n.setAttribute("draggable", "true"), n.setAttribute(o, t.exportJSON ? t.exportJSON(i, !0) : JSON.stringify(i)), n.ondragstart = e, n
    }

    var o = "draginfo", r = /MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent), a = !r;
    if (!a) {
        var s = {}, l = function (t) {
            return {x: t.pageX, y: t.pageY}
        }, h = document.documentElement, u = function () {
            h.addEventListener("mousemove", function (e) {
                if (s.target) {
                    t.stopEvent(e);
                    var n = l(e);
                    if (!s.dragElement) {
                        var i = s.target;
                        if (Math.abs(n.x - s.dragPoint.x) <= 5 || Math.abs(n.y - s.dragPoint.y) <= 5) return;
                        var o = document.createElement("div");
                        o.style.position = "absolute", o.style.zIndex = 1e4;
                        var r = i.cloneNode(!0);
                        /canvas/i.test(r.tagName) ? r.getContext("2d").drawImage(i, 0, 0) : (o.style.maxWidth = "30px", o.style.maxWidth = "30px", o.style.cursor = "move"), r.id = null, o.appendChild(r), h.appendChild(o), s.dragElement = o;
                        var a = {target: i};
                        i.ondragstart instanceof Function && (s.dataTransfer = a.dataTransfer = {
                            datas: {},
                            setData: function (t, e) {
                                this.datas[t] = e
                            },
                            getData: function (t) {
                                return this.datas[t]
                            }
                        }, i.ondragstart(a))
                    }
                    s.dragElement.style.left = n.x - s.dragElement.clientWidth / 2 + "px", s.dragElement.style.top = n.y - s.dragElement.clientHeight / 2 + "px"
                }
            }, !1), h.addEventListener("mouseup", function (t) {
                if (s.target) {
                    delete s.dragPoint, delete s.target, s.dragElement && (h.removeChild(s.dragElement), delete s.dragElement);
                    for (var e = l(t), n = document.getElementsByClassName("Q-CanvasPanel"), i = 0; i < n.length;) {
                        var o = n[i];
                        ++i;
                        var r = d(o);
                        if (p(r, e)) {
                            o.ondrop instanceof Function && (t.dataTransfer = s.dataTransfer, o.ondrop(t));
                            break
                        }
                    }
                    delete s.dataTransfer
                }
            }, !1)
        }, p = function (t, e) {
            return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height
        }, c = function (t) {
            for (var e = 0, n = 0; t.offsetParent;) e += t.clientLeft + t.offsetLeft - t.scrollLeft, n += t.clientTop + t.offsetTop - t.scrollTop, t = t.offsetParent;
            return {x: e, y: n}
        }, d = function (t) {
            var e = c(t), n = e.x + t.scrollLeft, i = e.y + t.scrollTop, o = t.clientWidth, r = t.clientHeight;
            return {x: n, y: i, left: n, top: i, right: n + o, bottom: i + r, width: o, height: r}
        }, f = function (e) {
            return e.onmousedown = function (n) {
                s.dragPoint = l(n), s.target = e, t.stopEvent(n)
            }, e
        };
        i = function (t, n) {
            return t.setAttribute("draggable", "true"), t.setAttribute(o, JSON.stringify(n)), t.ondragstart = e, f(t), t
        }, u()
    }
    t.createDNDImage = n, t.appendDNDInfo = i
}(Q), !function (t) {
    var e = e || "undefined" != typeof navigator && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function (t) {
        "use strict";
        if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
            var e = t.document, n = function () {
                return t.URL || t.webkitURL || t
            }, i = e.createElementNS("http://www.w3.org/1999/xhtml", "a"), o = "download" in i, r = function (n) {
                var i = e.createEvent("MouseEvents");
                i.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(i)
            }, a = t.webkitRequestFileSystem, s = t.requestFileSystem || a || t.mozRequestFileSystem, l = function (e) {
                (t.setImmediate || t.setTimeout)(function () {
                    throw e
                }, 0)
            }, h = "application/octet-stream", u = 0, p = 500, c = function (e) {
                var i = function () {
                    "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                };
                t.chrome ? i() : setTimeout(i, p)
            }, d = function (t, e, n) {
                e = [].concat(e);
                for (var i = e.length; i--;) {
                    var o = t["on" + e[i]];
                    if ("function" == typeof o) try {
                        o.call(t, n || t)
                    } catch (r) {
                        l(r)
                    }
                }
            }, f = function (e, l) {
                var p, f, g, m = this, v = e.type, y = !1, _ = function () {
                    d(m, "writestart progress write writeend".split(" "))
                }, b = function () {
                    if ((y || !p) && (p = n().createObjectURL(e)), f) f.location.href = p; else {
                        var i = t.open(p, "_blank");
                        void 0 == i && "undefined" != typeof safari && (t.location.href = p)
                    }
                    m.readyState = m.DONE, _(), c(p)
                }, S = function (t) {
                    return function () {
                        return m.readyState !== m.DONE ? t.apply(this, arguments) : void 0
                    }
                }, E = {create: !0, exclusive: !1};
                return m.readyState = m.INIT, l || (l = "download"), o ? (p = n().createObjectURL(e), i.href = p, i.download = l, r(i), m.readyState = m.DONE, _(), void c(p)) : (t.chrome && v && v !== h && (g = e.slice || e.webkitSlice, e = g.call(e, 0, e.size, h), y = !0), a && "download" !== l && (l += ".download"), (v === h || a) && (f = t), s ? (u += e.size, void s(t.TEMPORARY, u, S(function (t) {
                    t.root.getDirectory("saved", E, S(function (t) {
                        var n = function () {
                            t.getFile(l, E, S(function (t) {
                                t.createWriter(S(function (n) {
                                    n.onwriteend = function (e) {
                                        f.location.href = t.toURL(), m.readyState = m.DONE, d(m, "writeend", e), c(t)
                                    }, n.onerror = function () {
                                        var t = n.error;
                                        t.code !== t.ABORT_ERR && b()
                                    }, "writestart progress write abort".split(" ").forEach(function (t) {
                                        n["on" + t] = m["on" + t]
                                    }), n.write(e), m.abort = function () {
                                        n.abort(), m.readyState = m.DONE
                                    }, m.readyState = m.WRITING
                                }), b)
                            }), b)
                        };
                        t.getFile(l, {create: !1}, S(function (t) {
                            t.remove(), n()
                        }), S(function (t) {
                            t.code === t.NOT_FOUND_ERR ? n() : b()
                        }))
                    }), b)
                }), b)) : void b())
            }, g = f.prototype, m = function (t, e) {
                return new f(t, e)
            };
            return g.abort = function () {
                var t = this;
                t.readyState = t.DONE, d(t, "abort")
            }, g.readyState = g.INIT = 0, g.WRITING = 1, g.DONE = 2, g.error = g.onwritestart = g.onprogress = g.onwrite = g.onabort = g.onerror = g.onwriteend = null, m
        }
    }("undefined" != typeof self && self || "undefined" != typeof t && t || this.content);
    "undefined" != typeof module && null !== module ? module.exports = e : "undefined" != typeof define && null !== define && null != define.amd && define([], function () {
        return e
    }), t.saveAs = e
}(window, document), !function (t) {
    function e(e, n, i) {
        var o = e.name;
        if (t.isString(n)) {
            var r = new RegExp("." + n + "$", "gi");
            if (!r.test(o)) return void alert("Please selects ." + n + " file")
        } else n instanceof Function && (i = n);
        var a = new FileReader;
        a.onload = function () {
            i(a.result)
        }, a.readAsText(e, "utf-8")
    }

    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, t.isFileSupported = null != window.requestFileSystem, t.isFileSupported && (t.readerSingleFile = e)
}(Q), !function (t, e) {
    function n(t) {
        if (!(t instanceof Object)) return !t;
        if (Array.isArray(t)) return 0 == t.length;
        for (var e in t) return !1;
        return !0
    }

    function i(t, n) {
        var i = t.split(".");
        n = n || e;
        for (var o = -1; n && ++o < i.length;) {
            var r = i[o];
            n = n[r]
        }
        return n
    }

    function o(t, e, n) {
        if (t._classPath = e, t instanceof Function && (t.prototype._className = t._classPath, t.prototype._class = t), n !== !1) for (var i in t) if (!("_" == i[0] || "$" == i[0] || "superclass" == i || "constructor" == i || "prototype" == i || i.indexOf(".") >= 0)) {
            var r = t[i];
            r && r instanceof Object && !r._classPath && o(r, e + "." + i)
        }
    }

    function r(t) {
        var e = t._className;
        if (!e) return null;
        var n = p[e];
        if (!n) {
            var i = t._class;
            n = p[e] = new i
        }
        return n
    }

    function a(t, e) {
        return t == e || t && e && t.equals && t.equals(e)
    }

    function s(t, e, n, i) {
        var o = r(i);
        e.forEach(function (e) {
            var r = i[e];
            if (!a(r, o[e])) {
                var s = t.toJSON(r);
                (s || !r) && (n[e] = s)
            }
        }, i)
    }

    function l(t, e) {
        var n;
        for (var i in e) n || (n = {}), n[i] = t.toJSON(e[i]);
        return n
    }

    function h(t) {
        t && (this.withGlobalRefs = t.withGlobalRefs !== !1), this.reset()
    }

    function u(t, e) {
        var i = new h, o = {version: "2.0", refs: {}}, r = [], a = {};
        if (t.currentSubNetwork) {
            var s = i.elementToJSON(t.currentSubNetwork);
            s && (o.currentSubNetwork = {_ref: s._refId = t.currentSubNetwork.id})
        }
        if (t.forEach(function (t) {
                if (!e || e(t) !== !1) {
                    var n = i.elementToJSON(t);
                    n && (r.push(n), a[t.id] = n)
                }
            }), i._elementRefs) for (var l in i._elementRefs) a[l]._refId = l;
        i._globalRefs && (o.refs = i._globalRefs), i.clearRef(), o.datas = r;
        for (var u in o) n(o[u]) && delete o[u];
        return o
    }

    if (!t.Graph.prototype.parseJSON) {
        var p = {};
        t.HashList.prototype.toJSON = function (t) {
            var e = [];
            return this.forEach(function (n) {
                e.push(t.toJSON(n))
            }), e
        }, t.HashList.prototype.parseJSON = function (t, e) {
            var n = [];
            return t.forEach(function (t) {
                var i = e.parseJSON(t);
                this.add(i), n.push(i)
            }, this), n
        };
        var c = {
            "class": !1,
            id: !1,
            fillGradient: !1,
            syncSelectionStyles: !1,
            originalBounds: !1,
            parent: !1,
            font: !1,
            $data: !1,
            $x: !1,
            $y: !1
        };
        t.BaseUI.prototype.toJSON = function (t) {
            var e = {};
            for (var n in this) if ("_" != n[0] && ("$" != n[0] || "_" != n[1]) && 0 != n.indexOf("$invalidate") && c[n] !== !1) {
                var i = this[n];
                if (!(i instanceof Function || i == this["class"].prototype[n])) try {
                    e[n] = t.toJSON(i)
                } catch (o) {
                }
            }
            return e
        }, t.BaseUI.prototype.parseJSON = function (t, e) {
            for (var n in t) {
                var i = e.parseJSON(t[n]);
                this[n] = i
            }
        };
        var d = ["retatable", "editable", "layoutable", "visible", "busLayout", "enableSubNetwork", "zIndex", "tooltipType", "tooltip", "movable", "selectable", "resizable", "uiClass", "name", "parent", "host"];
        t.Element.prototype.addOutProperty = function (t) {
            this.outputProperties || (this.outputProperties = []), this.outputProperties.push(t)
        }, t.Element.prototype.removeOutProperty = function (t) {
            if (this.outputProperties) {
                var e = this.outputProperties.indexOf(t);
                e >= 0 && this.outputProperties.splice(e, 1)
            }
        }, t.Element.prototype.toJSON = function (t) {
            var e = {}, n = d;
            if (this.outputProperties && (n = n.concat(this.outputProperties)), s(t, n, e, this), this.styles) {
                var i = l(t, this.styles);
                i && (e.styles = i)
            }
            if (this.properties) {
                var o = l(t, this.properties);
                o && (e.properties = o)
            }
            var r = this.bindingUIs;
            if (r) {
                var a = [];
                r.forEach(function (e) {
                    var n = t.toJSON(e.ui);
                    a.push({ui: n, bindingProperties: e.bindingProperties})
                }), e.bindingUIs = a
            }
            return e
        }, t.Element.prototype.parseJSON = function (t, e) {
            if (t.styles) {
                var n = {};
                for (var i in t.styles) n[i] = e.parseJSON(t.styles[i]);
                this.putStyles(n, !0)
            }
            if (t.properties) {
                var o = {};
                for (var i in t.properties) o[i] = e.parseJSON(t.properties[i]);
                this.properties = o
            }
            t.bindingUIs && t.bindingUIs.forEach(function (t) {
                var n = e.parseJSON(t.ui);
                n && this.addUI(n, t.bindingProperties)
            }, this);
            for (var i in t) if ("id" != i && "styles" != i && "properties" != i && "bindingUIs" != i) {
                var r = e.parseJSON(t[i]);
                this[i] = r
            }
        }, t.Node.prototype.toJSON = function (e) {
            var n = t.doSuper(this, t.Node, "toJSON", arguments);
            return s(e, ["location", "size", "image", "rotate", "anchorPosition", "parentChildrenDirection", "layoutType", "hGap", "vGap"], n, this), n
        }, t.Group.prototype.toJSON = function (e) {
            var n = t.doSuper(this, t.Group, "toJSON", arguments);
            return s(e, ["minSize", "groupType", "padding", "groupImage", "expanded"], n, this), n
        }, t.ShapeNode.prototype.toJSON = function (e) {
            var n = t.doSuper(this, t.Node, "toJSON", arguments);
            return s(e, ["location", "rotate", "anchorPosition", "path"], n, this), n
        }, t.Edge.prototype.toJSON = function (e) {
            var n = t.doSuper(this, t.Edge, "toJSON", arguments);
            return s(e, ["angle", "from", "to", "edgeType", "angle", "bundleEnabled", "pathSegments"], n, this), n
        }, h.prototype = {
            _refs: null, _refValues: null, _index: 1, root: null, reset: function () {
                this._globalRefs = {}, this._elementRefs = {}, this._refs = {}, this._refValues = {}, this._index = 1
            }, getREF: function (t) {
                return this._refs[t]
            }, clearRef: function () {
                for (var t in this._globalRefs) delete this._globalRefs[t]._value;
                for (var t in this._refValues) delete this._refValues[t]._refId;
                this.reset()
            }, elementToJSON: function (t) {
                return this._toJSON(t)
            }, _elementRefs: null, _globalRefs: null, withGlobalRefs: !0, toJSON: function (e) {
                if (!(e instanceof Object)) return e;
                if (e instanceof Function && !e._classPath) return null;
                if (!this.withGlobalRefs) return this._toJSON(e);
                if (e instanceof t.Element) return this._elementRefs[e.id] = !0, {_ref: e.id};
                if (void 0 === e._refId) {
                    var n = this._toJSON(e);
                    if (!n) return n;
                    var i = e._refId = this._index++;
                    return this._refValues[i] = e, this._refs[i] = n, n
                }
                var i = e._refId;
                if (!this._globalRefs[i]) {
                    var n = this._refs[i];
                    if (!n) return n;
                    var o = {};
                    for (var r in n) o[r] = n[r], delete n[r];
                    n.$ref = i, this._globalRefs[i] = o
                }
                return {$ref: i}
            }, _toJSON: function (e) {
                if (e._classPath) return {_classPath: e._classPath};
                if (!e._className) {
                    if (t.isArray(e)) {
                        var n = [];
                        return e.forEach(function (t) {
                            n.push(this.toJSON(t))
                        }, this), n
                    }
                    n = {};
                    var i;
                    e["class"] && (i = e["class"].prototype);
                    for (var o in e) {
                        var r = e[o];
                        r instanceof Function || i && r == i[o] || (n[o] = this.toJSON(e[o]))
                    }
                    return n
                }
                var a = {_className: e._className};
                return a.json = e.toJSON ? e.toJSON(this) : e, a
            }, jsonToElement: function (t) {
                return void 0 !== t._refId && t._refId in this._refs ? this._refs[t._refId] : this._parseJSON(t)
            }, parseJSON: function (t) {
                if (!(t instanceof Object)) return t;
                if (!this.withGlobalRefs) return this._parseJSON(t);
                if (void 0 !== t.$ref) {
                    var e = this._globalRefs[t.$ref];
                    if (!e) return;
                    return void 0 === e._value && (e._value = this.parseJSON(e)), e._value
                }
                if (void 0 !== t._ref) {
                    var n = this._elementRefs[t._ref];
                    if (!n) return;
                    return this.jsonToElement(n)
                }
                return this._parseJSON(t)
            }, _parseJSON: function (e) {
                if (!(e instanceof Object)) return e;
                if (e._classPath) return i(e._classPath);
                if (e._className) {
                    var n = i(e._className), o = new n;
                    if (this.withGlobalRefs && void 0 !== e._refId && (this._refs[e._refId] = o), o && e.json) if (e = e.json, o.parseJSON) o.parseJSON(e, this); else for (var r in e) o[r] = e[r];
                    return o
                }
                if (t.isArray(e)) {
                    var a = [];
                    return e.forEach(function (t) {
                        a.push(this.parseJSON(t))
                    }, this), a
                }
                var a = {};
                for (var s in e) a[s] = this.parseJSON(e[s]);
                return a
            }
        }, t.GraphModel.prototype.toJSON = function (t) {
            return u(this, t)
        }, t.GraphModel.prototype.parseJSON = function (e, n) {
            n = n || {};
            var i = e.datas;
            if (i && i.length > 0) {
                var o = [], r = new h(n, e.g), a = {};
                if (i.forEach(function (t) {
                        t._refId && (a[t._refId] = t)
                    }), r._globalRefs = e.refs || {}, r._elementRefs = a, i.forEach(function (e) {
                        var n = r.jsonToElement(e);
                        n instanceof t.Element && (o.push(n), this.add(n))
                    }, this), this.currentSubNetwork) {
                    var s = this.currentSubNetwork;
                    o.forEach(function (t) {
                        t.parent || (t.parent = s)
                    })
                }
                if (e.currentSubNetwork) {
                    var s = r.getREF(e.currentSubNetwork._ref);
                    s && (this.currentSubNetwork = s)
                }
                return r.clearRef(), o
            }
        }, t.Graph.prototype.toJSON = t.Graph.prototype.exportJSON = function (t, e) {
            e = e || {};
            var n = this.graphModel.toJSON(e.filter);
            return n.scale = this.scale, n.tx = this.tx, n.ty = this.ty, t && (n = JSON.stringify(n, e.replacer, e.space || "	")), n
        }, t.Graph.prototype.parseJSON = function (e, n) {
            t.isString(e) && (e = JSON.parse(e)), n = n || {};
            var i = this.graphModel.parseJSON(e, n), o = e.scale;
            return o && n.transform !== !1 && (this.originAtCenter = !1, this.translateTo(e.tx || 0, e.ty || 0, o)), i
        }, o(t, "Q"), t.loadClassPath = o, t.exportJSON = function (t, e) {
            try {
                var n = new h({withGlobalRefs: !1}).toJSON(t);
                return e ? JSON.stringify(n) : n
            } catch (i) {
            }
        }, t.parseJSON = function (e) {
            try {
                return t.isString(e) && (e = JSON.parse(e)), new h({withGlobalRefs: !1}).parseJSON(e)
            } catch (n) {
            }
        }
    }
}(Q, window, document), function (t, e) {
    function n(e, n) {
        this.onBoundsChange = n, this.parent = e, this.handleSize = t.isTouchSupport ? 20 : 8, this.boundsDiv = this._createDiv(this.parent), this.boundsDiv.type = "border", this.boundsDiv.style.position = "absolute", this.boundsDiv.style.border = "dashed 1px #888";
        var i = "lt,t,rt,l,r,lb,b,rb";
        i = i.split(",");
        for (var o = 0, r = i.length; r > o; o++) {
            var a = i[o], s = this._createDiv(this.parent);
            s.type = "handle", s.name = a, s.style.position = "absolute", s.style.backgroundColor = "#FFF", s.style.border = "solid 1px #555", s.style.width = s.style.height = this.handleSize + "px";
            var l;
            l = "lt" == a || "rb" == a ? "nwse-resize" : "rt" == a || "lb" == a ? "nesw-resize" : "t" == a || "b" == a ? "ns-resize" : "ew-resize", s.style.cursor = l, this[i[o]] = s
        }
        this.interaction = new t.DragSupport(this.parent, this)
    }

    function i() {
        var t = e("<div/>").html(r).contents();
        this.html = t = t[0], document.body.appendChild(this.html), t.addEventListener("mousedown", function (e) {
            e.target == t && this.destroy()
        }.bind(this), !1);
        var n = this._getChild(".graph-export-panel__export_scale"),
            i = this._getChild(".graph-export-panel__export_scale_label");
        n.onchange = function () {
            i.textContent = this.scale = n.value, this.updateOutputSize()
        }.bind(this), this.export_scale = n;
        var o = function (t) {
            var e = this.exportImageInfo();
            if (e) {
                var n = e.canvas, i = this.graph.name || "graph";
                n.toBlob(function (e) {
                    t(e, i + ".png")
                }, "image/png")
            }
        }, a = function (t) {
            var e = this.exportImageInfo();
            if (e) {
                var n = window.open(), i = n.document;
                i.title = this.graph.name || "";
                var o = i.createElement("img");
                if (o.src = e.data, i.body.style.textAlign = "center", i.body.style.margin = "0px", i.body.appendChild(o), t === !0) {
                    var r = i.createElement("style");
                    r.setAttribute("type", "text/css"), r.setAttribute("media", "print");
                    var a = "img {max-width: 100%; max-height: 100%;}";
                    this.clipBounds.width / this.clipBounds.height > 1.2 && (a += "\n @page { size: landscape; }"), r.appendChild(document.createTextNode(a)), i.head.appendChild(r), o.style.maxWidth = "100%", o.style.maxHeight = "100%", setTimeout(function () {
                        n.print(), n.onfocus = function () {
                            n.close()
                        }
                    }, 100)
                }
            }
        }, s = this._getChild(".graph-export-panel__export_submit");
        s.onclick = window.saveAs && HTMLCanvasElement.prototype.toBlob ? o.bind(this, window.saveAs) : a.bind(this);
        var l = this._getChild(".graph-export-panel__print_submit");
        l.onclick = a.bind(this, !0)
    }

    function o(t) {
        a || (a = new i), a.show(t)
    }

    var r = '<div class="graph-export-panel modal fade">  <div class="modal-dialog">  <div class="modal-content">  <div class="modal-body">  <h3 style="text-align: center;">图片导出预览</h3>  <div>  <label>画布大小</label>  <span class ="graph-export-panel__canvas_size"></span>  </div>  <div style="text-align: center;" title="双击选择全画布范围">  <div class ="graph-export-panel__export_canvas" style="position: relative; display: inline-block;">  </div>  </div>  <div>  <label>导出范围</label>  <span class ="graph-export-panel__export_bounds"></span>  </div>  <div>  <label>缩放比例: <input class ="graph-export-panel__export_scale" type="range" value="1" step="0.2" min="0.2" max="3"><span class ="graph-export-panel__export_scale_label">1</span></label>  </div>  <div>  <label>输出大小: </label><span class ="graph-export-panel__export_size"></span>  </div>  <div style="text-align: right">  <button type="submit" class="btn btn-primary graph-export-panel__export_submit">导出</button>  <button type="submit" class="btn btn-primary graph-export-panel__print_submit">打印</button>  </div>  </div>  </div>  </div>  </div>';
    n.prototype = {
        destroy: function () {
            this.interaction.destroy()
        }, update: function (e, n) {
            this.wholeBounds = new t.Rect(0, 0, e, n), this._setBounds(this.wholeBounds.clone())
        }, ondblclick: function () {
            return this._bounds.equals(this.wholeBounds) ? (this.oldBounds || (this.oldBounds = this.wholeBounds.clone().grow(-this.wholeBounds.height / 5, -this.wholeBounds.width / 5)), void this._setBounds(this.oldBounds, !0)) : void this._setBounds(this.wholeBounds.clone(), !0)
        }, startdrag: function (t) {
            t.target.type && (this.dragItem = t.target)
        }, ondrag: function (e) {
            if (this.dragItem) {
                t.stopEvent(e);
                var n = e.dx, i = e.dy;
                if ("border" == this.dragItem.type) this._bounds.offset(n, i), this._setBounds(this._bounds, !0); else if ("handle" == this.dragItem.type) {
                    var o = this.dragItem.name;
                    "l" == o[0] ? (this._bounds.x += n, this._bounds.width -= n) : "r" == o[0] && (this._bounds.width += n), "t" == o[o.length - 1] ? (this._bounds.y += i, this._bounds.height -= i) : "b" == o[o.length - 1] && (this._bounds.height += i), this._setBounds(this._bounds, !0)
                }
            }
        }, enddrag: function () {
            this.dragItem && (this.dragItem = !1, this._bounds.width < 0 ? (this._bounds.x += this._bounds.width, this._bounds.width = -this._bounds.width) : 0 == this._bounds.width && (this._bounds.width = 1), this._bounds.height < 0 ? (this._bounds.y += this._bounds.height, this._bounds.height = -this._bounds.height) : 0 == this._bounds.height && (this._bounds.height = 1), this._bounds.width > this.wholeBounds.width && (this._bounds.width = this.wholeBounds.width), this._bounds.height > this.wholeBounds.height && (this._bounds.height = this.wholeBounds.height), this._bounds.x < 0 && (this._bounds.x = 0), this._bounds.y < 0 && (this._bounds.y = 0), this._bounds.right > this.wholeBounds.width && (this._bounds.x -= this._bounds.right - this.wholeBounds.width), this._bounds.bottom > this.wholeBounds.height && (this._bounds.y -= this._bounds.bottom - this.wholeBounds.height), this._setBounds(this._bounds, !0))
        }, _createDiv: function (t) {
            var e = document.createElement("div");
            return t.appendChild(e), e
        }, _setHandleLocation: function (t, e, n) {
            t.style.left = e - this.handleSize / 2 + "px", t.style.top = n - this.handleSize / 2 + "px"
        }, _setBounds: function (t) {
            t.equals(this.wholeBounds) || (this.oldBounds = t), this._bounds = t, t = t.clone(), t.width += 1, t.height += 1, this.boundsDiv.style.left = t.x + "px", this.boundsDiv.style.top = t.y + "px", this.boundsDiv.style.width = t.width + "px", this.boundsDiv.style.height = t.height + "px", this._setHandleLocation(this.lt, t.x, t.y), this._setHandleLocation(this.t, t.cx, t.y), this._setHandleLocation(this.rt, t.right, t.y), this._setHandleLocation(this.l, t.x, t.cy), this._setHandleLocation(this.r, t.right, t.cy), this._setHandleLocation(this.lb, t.x, t.bottom), this._setHandleLocation(this.b, t.cx, t.bottom), this._setHandleLocation(this.rb, t.right, t.bottom), this.onBoundsChange && this.onBoundsChange(this._bounds)
        }
    }, Object.defineProperties(n.prototype, {
        bounds: {
            get: function () {
                return this._bounds
            }, set: function (t) {
                this._setBounds(t)
            }
        }
    }), i.prototype = {
        canvas: null, html: null, exportImageInfo: function (e) {
            var e = this.graph;
            if (e) {
                var n = this.export_scale.value, i = this.imageInfo.scale,
                    o = new t.Rect(this.clipBounds.x / i, this.clipBounds.y / i, this.clipBounds.width / i, this.clipBounds.height / i);
                o.offset(this.bounds.x, this.bounds.y);
                var r = e.exportImage(n, o);
                if (r && r.data) return r
            }
        }, _getChild: function (t) {
            return e(this.html).find(t)[0]
        }, initCanvas: function () {
            var e = this._getChild(".graph-export-panel__export_canvas");
            e.innerHTML = "";
            var i = t.createCanvas(!0);
            e.appendChild(i), this.canvas = i;
            var o, r = this._getChild(".graph-export-panel__export_bounds"),
                a = this._getChild(".graph-export-panel__export_size"), s = function () {
                    var t = this.canvas, e = t.g, n = t.ratio || 1;
                    e.save(), e.clearRect(0, 0, t.width, t.height), e.drawImage(this.imageInfo.canvas, 0, 0), e.beginPath(), e.moveTo(0, 0), e.lineTo(t.width, 0), e.lineTo(t.width, t.height), e.lineTo(0, t.height), e.lineTo(0, 0);
                    var i = o.x * n, r = o.y * n, a = o.width * n, s = o.height * n;
                    e.moveTo(i, r), e.lineTo(i, r + s), e.lineTo(i + a, r + s), e.lineTo(i + a, r), e.closePath(), e.fillStyle = "rgba(0, 0, 0, 0.3)", e.fill(), e.restore()
                }, l = function (t) {
                    o = t, this.clipBounds = o, s.call(this);
                    var e = o.width / this.imageInfo.scale | 0, n = o.height / this.imageInfo.scale | 0;
                    r.textContent = (o.x / this.imageInfo.scale | 0) + ", " + (o.y / this.imageInfo.scale | 0) + ", " + e + ", " + n, this.updateOutputSize()
                };
            this.updateOutputSize = function () {
                var t = this._getChild(".graph-export-panel__export_scale"), e = t.value,
                    n = o.width / this.imageInfo.scale * e | 0, i = o.height / this.imageInfo.scale * e | 0,
                    r = n + " X " + i;
                n * i > 12e6 && (r += "<span style='color: #F66;'>图幅太大，导出时可能出现内存不足</span>"), a.innerHTML = r
            };
            var h = new n(i.parentNode, l.bind(this));
            this.update = function () {
                var t = this.canvas.ratio || 1, e = this.imageInfo.width / t, n = this.imageInfo.height / t;
                this.canvas.setSize(e, n), h.update(e, n)
            }
        }, destroy: function () {
            this.graph = null, this.imageInfo = null, this.clipBounds = null, this.bounds = null
        }, show: function (t) {
            e(this.html).modal("show"), this.graph = t;
            var n = t.bounds;
            this.bounds = n;
            var i = this._getChild(".graph-export-panel__canvas_size");
            i.textContent = (0 | n.width) + " X " + (0 | n.height);
            var o, r = Math.min(500, screen.width / 1.3);
            o = n.width > n.height ? Math.min(1, r / n.width) : Math.min(1, r / n.height), this.canvas || this.initCanvas(), this.imageInfo = t.exportImage(o * this.canvas.ratio), this.imageInfo.scale = o, this.update()
        }
    };
    var a;
    t.showExportPanel = o
}(Q, jQuery), function (t, e) {
    function n(t, e, n, o, r) {
        var a = document.createElement("div");
        a.className = o ? "btn-group-vertical" : "btn-group", r && a.setAttribute("data-toggle", "buttons");
        for (var s = 0, l = t.length; l > s; s++) !t[s].type && r && (t[s].type = "radio"), a.appendChild(i(t[s], n)).info = t[s];
        e.appendChild(a)
    }

    function i(n, i) {
        if ("search" == n.type) {
            var o = document.createElement("div");
            o.style.display = "inline-block", o.style.verticalAlign = "middle", o.style.width = "170px", o.innerHTML = '<div class="input-group input-group-sm" >            <input type="text" class="form-control" placeholder="' + (n.placeholder || "") + '">                <span class="input-group-btn">                    <div class="btn btn-default" type="button"></div>                </span>            </div>';
            var r = o.getElementsByTagName("input")[0];
            n.id && (r.id = n.id);
            var a = e(o).find(".btn")[0];
            if (n.iconClass) {
                var s = document.createElement("div");
                e(s).addClass(n.iconClass), a.appendChild(s)
            } else n.name && a.appendChild(document.createTextNode(" " + n.name));
            if (n.input = r, n.search) {
                var l = function () {
                    n.searchInfo = null
                }, h = function (t) {
                    var e = r.value;
                    if (!e) return void l();
                    if (!n.searchInfo || n.searchInfo.value != e) {
                        var i = n.search(e, n);
                        if (!i || !i.length) return void l();
                        n.searchInfo = {value: e, result: i}
                    }
                    u(t)
                }, u = function (t) {
                    if (n.select instanceof Function && n.searchInfo && n.searchInfo.result && n.searchInfo.result.length) {
                        var e = n.searchInfo, i = n.searchInfo.result;
                        if (1 == i.length) return void n.select(i[0], 0);
                        void 0 === e.index ? e.index = 0 : (e.index += t ? -1 : 1, e.index < 0 && (e.index += i.length), e.index %= i.length), n.select(i[e.index], e.index) === !1 && (n.searchInfo = null, h())
                    }
                };
                r.onkeydown = function (e) {
                    return 27 == e.keyCode ? (l(), r.value = "", void t.stopEvent(e)) : void(13 == e.keyCode && h(e.shiftKey))
                }, a.onclick = function () {
                    h()
                }
            }
            return o
        }
        if ("file" == n.type) {
            var p = document.createElement("span"), r = document.createElement("input");
            if (p.className = "file-input btn btn-default btn-sm btn-file", r.setAttribute("type", "file"), r.className = "btn-file", n.action && (r.onchange = function (t) {
                    var o = e(this), r = o.get(0).files;
                    p = o.val().replace(/\\/g, "/").replace(/.*\//, ""), r.length && n.action.call(i, r, p, t)
                }), p.appendChild(r), n.icon) {
                var s = document.createElement("img");
                s.src = n.icon, p.appendChild(s)
            } else if (n.iconClass) {
                var s = document.createElement("div");
                e(s).addClass(n.iconClass), p.appendChild(s)
            } else n.name && p.appendChild(document.createTextNode(" " + n.name));
            return n.name && p.setAttribute("title", n.name), p
        }
        if ("input" == n.type) {
            var o = document.createElement("div");
            o.style.display = "inline-block", o.style.verticalAlign = "middle", o.innerHTML = '<div class="input-group input-group-sm" style="width: 150px;">            <input type="text" class="form-control">                <span class="input-group-btn">                    <button class="btn btn-default" type="button"></button>                </span>            </div>';
            var r = o.getElementsByTagName("input")[0], a = o.getElementsByTagName("button")[0];
            return a.innerHTML = n.name, n.input = r, n.action && (a.onclick = function (t) {
                n.action.call(i || window.graph, t, n)
            }), o
        }
        if ("select" == n.type) {
            var o = document.createElement("select");
            o.className = "form-control";
            var c = n.options;
            return c.forEach(function (t) {
                var e = document.createElement("option");
                e.innerHTML = t, e.value = t, o.appendChild(e)
            }), o.value = n.value, n.action && (o.onValueChange = function (t) {
                n.action.call(i || window.graph, t, n)
            }), o
        }
        if (n.type) {
            var p = document.createElement("label"), a = document.createElement("input");
            n.input = a, a.setAttribute("type", n.type), p.appendChild(a), n.selected && (a.setAttribute("checked", "checked"), "radio" == n.type && (p.className += "active"))
        } else var p = document.createElement("div");
        if (p.className += "btn btn-default btn-sm", n.icon) {
            var s = document.createElement("img");
            s.src = n.icon, p.appendChild(s)
        } else if (n.iconClass) {
            var s = document.createElement("div");
            e(s).addClass(n.iconClass), p.appendChild(s)
        } else n.name && p.appendChild(document.createTextNode(" " + n.name));
        return n.name && p.setAttribute("title", n.name), n.action && ((a || p).onclick = function (t) {
            n.action.call(i || window.graph, t, n)
        }), p
    }

    function o(o, r, a) {
        function s() {
            return r.graph
        }

        function l(t, e) {
            if (t == e) return !0;
            if (!t || !e) return !1;
            for (var n in t) if (t[n] != e[n]) return !1;
            return !0
        }

        function h() {
            var n = s(), i = n ? n.interactionMode : null, o = n ? n.interactionProperties : null;
            e(r).find(".btn").each(function (e, n) {
                return n.info && n.info.interactionMode ? n.info.interactionMode != i || o && !l(o, n.info) ? void t.removeClass(n, "active") : void t.appendClass(n, "active") : void 0
            })
        }

        function u(t) {
            "interactionMode" == t.kind && h()
        }

        function p(t, e, n) {
            var i = s();
            i && (i.interactionMode = e.value, i.interactionProperties = n || e)
        }

        function c(e, o, r, a, s) {
            for (var l in e) {
                var h = e[l];
                t.isArray(h) ? (h.forEach(function (t) {
                    t.interactionMode && (t.value = t.interactionMode, t.action = p)
                }), n(h, o, r, a, s)) : (h.interactionMode && (h.value = h.interactionMode, h.action = p), o.appendChild(i(h, r)).info = h)
            }
        }

        r.addEventListener("click", function () {
            h()
        }, !1), r.setGraph = function (t) {
            var e = this.graph;
            e && e.propertyChangeDispatcher.removeListener(u, this), this.graph = t, h(), t && t.propertyChangeDispatcher.addListener(u, this)
        };
        var d = {
            interactionModes: [{
                name: "默认模式",
                interactionMode: t.Consts.INTERACTION_MODE_DEFAULT,
                selected: !0,
                iconClass: "q-icon toolbar-default"
            }, {
                name: "框选模式",
                interactionMode: t.Consts.INTERACTION_MODE_SELECTION,
                iconClass: "q-icon toolbar-rectangle_selection"
            }, {name: "浏览模式", interactionMode: t.Consts.INTERACTION_MODE_VIEW, iconClass: "q-icon toolbar-pan"}],
            zoom: [{
                name: "放大", iconClass: "q-icon toolbar-zoomin", action: function () {
                    s().zoomIn()
                }
            }, {
                name: "缩小", iconClass: "q-icon toolbar-zoomout", action: function () {
                    s().zoomOut()
                }
            }, {
                name: "1:1", iconClass: "q-icon toolbar-zoomreset", action: function () {
                    s().scale = 1
                }
            }, {
                name: "纵览", iconClass: "q-icon toolbar-overview", action: function () {
                    s().zoomToOverview()
                }
            }],
            editor: [{
                name: "创建连线",
                interactionMode: t.Consts.INTERACTION_MODE_CREATE_EDGE,
                iconClass: "q-icon toolbar-edge"
            }, {
                name: "创建L型连线",
                interactionMode: t.Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE,
                iconClass: "q-icon toolbar-edge_VH",
                edgeType: t.Consts.EDGE_TYPE_VERTICAL_HORIZONTAL
            }, {
                name: "创建多边形",
                interactionMode: t.Consts.INTERACTION_MODE_CREATE_SHAPE,
                iconClass: "q-icon toolbar-polygon"
            }, {
                name: "创建线条",
                interactionMode: t.Consts.INTERACTION_MODE_CREATE_LINE,
                iconClass: "q-icon toolbar-line"
            }],
            search: {
                name: "Find",
                placeholder: "Name",
                iconClass: "q-icon toolbar-search",
                type: "search",
                id: "search_input",
                search: function (t) {
                    var e = [], n = new RegExp(t, "i");
                    return s().forEach(function (t) {
                        t.name && n.test(t.name) && e.push(t.id)
                    }), e
                },
                select: function (t) {
                    if (t = s().graphModel.getById(t), !t) return !1;
                    s().setSelection(t), s().sendToTop(t);
                    var e = s().getUIBounds(t);
                    e && s().centerTo(e.cx, e.cy, Math.max(2, s().scale), !0)
                }
            },
            exportImage: {
                name: "导出图片", iconClass: "q-icon toolbar-print", action: function () {
                    t.showExportPanel(s())
                }
            }
        };
        if (a) for (var f in a) d[f] = a[f];
        return c(d, r, this, !1, !1), r.setGraph(o), r
    }

    t.createToolbar = o, t.createButtonGroup = n, t.createButton = i
}(Q, jQuery), !function (t, e) {
    function n(t) {
        if (!t) return s;
        var e = {};
        for (var n in s) e[n] = s[n];
        for (var n in t) {
            var i = l[n];
            i && (e[i] = t[n])
        }
        return e
    }

    function i(t, n) {
        t && (void 0 === n && (n = e(t).hasClass("group--closed")), n ? e(t).removeClass("group--closed") : e(t).addClass("group--closed"))
    }

    function o(e) {
        return t.isString(e) || e.draw instanceof Function
    }

    var r = function (t, n, i, o) {
        var r = document.createElement(i || "div");
        return r.className = t, e(r).html(o), n && n.appendChild(r), r
    }, a = function (t, e, n) {
        if (Array.isArray(t)) return t.forEach(function (t) {
            e.call(this, t)
        }, n);
        for (var i in t) e.call(n, t[i], i)
    }, s = {
        fillColor: "#EEE",
        lineWidth: 1,
        strokeStyle: "#2898E0",
        padding: {left: 1, top: 1, right: 5, bottom: 5},
        shadowColor: "#888",
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowBlur: 3
    }, l = {};
    l[t.Styles.RENDER_COLOR] = "renderColor", l[t.Styles.RENDER_COLOR_BLEND_MODE] = "renderColorBlendMode", l[t.Styles.SHAPE_FILL_COLOR] = "fillColor", l[t.Styles.SHAPE_STROKE_STYLE] = "strokeStyle", l[t.Styles.SHAPE_LINE_DASH] = "borderLineDash", l[t.Styles.SHAPE_LINE_DASH_OFFSET] = "borderLineDashOffset", l[t.Styles.SHAPE_OUTLINE] = "outline", l[t.Styles.SHAPE_OUTLINE_STYLE] = "outlineStyle", l[t.Styles.LINE_CAP] = "lineGap", l[t.Styles.LINE_JOIN] = "lineJoin", l[t.Styles.BACKGROUND_COLOR] = "backgroundColor", l[t.Styles.BACKGROUND_GRADIENT] = "backgroundGradient", l[t.Styles.BORDER] = "border", l[t.Styles.BORDER_COLOR] = "borderColor", l[t.Styles.BORDER_LINE_DASH] = "borderLineDash", l[t.Styles.BORDER_LINE_DASH_OFFSET] = "borderLineDashOffset";
    var h = function (t) {
        for (var n = t.target.parentNode; n && !e(n).hasClass("group");) n = n.parentNode;
        i(n)
    }, u = function (t, e, n) {
        this.graph = t, this.html = e, this.init(n)
    };
    u.prototype = {
        loadButton: null, imageWidth: 40, imageHeight: 40, loadImageBoxes: function (e) {
            return t.isArray(e) ? void a(e, function (t) {
                this.loadImageBox(t)
            }, this) : void this.loadImageBox(e)
        }, loadImageBox: function (e, n) {
            if (t.isString(e) && (e = JSON.parse(e)), n) {
                var i = this.html.getElementsByClassName("group").item(0);
                if (i) return void this.html.insertBefore(this._createGroup(e, e.prefix), i)
            }
            return this.html.appendChild(this._createGroup(e, e.prefix))
        }, loadImageBoxFile: function (e) {
            e[0] && t.readerSingleFile(e[0], "json", function (t) {
                t && this.loadImageBox(t, !0)
            }.bind(this))
        }, hideButtonBar: function (t) {
            this.buttonBar.style.display = t ? "" : "none"
        }, init: function (e) {
            {
                var n = this.html;
                this.graph
            }
            t.appendClass(n, "graph-editor__toolbox");
            var i = this.buttonBar = r("graph-editor__toolbox-buttonBar", n), o = this.loadButton = t.createButton({
                type: "file",
                name: getI18NString("Load Images..."),
                iconClass: "q-icon toolbar-add",
                action: this.loadImageBoxFile.bind(this)
            }, this);
            i.appendChild(o), this.hideButtonBar();
            var a = [{label: "Node", image: "Q-node"}, {
                type: "Text",
                label: "Text",
                html: '<span style="background-color: #2898E0; color:#FFF; padding: 3px 5px;">' + getI18NString("Text") + "</span>",
                styles: {
                    "label.background.color": "#2898E0",
                    "label.color": "#FFF",
                    "label.padding": new t.Insets(3, 5)
                }
            }, {type: "Group", label: "Group", image: "Q-group"}, {
                label: "SubNetwork",
                image: "Q-subnetwork",
                properties: {enableSubNetwork: !0}
            }], s = [{
                prefix: "Q-",
                name: "register.images",
                displayName: getI18NString("Register Images"),
                images: t.getAllImages(),
                close: !0
            }, {
                name: "default.shapes",
                displayName: getI18NString("Default Shapes"),
                prefix: "Q-",
                images: t.Shapes.getAllShapes(this.imageWidth, this.imageHeight),
                close: !0
            }];
            this.loadImageBoxes(s), e && this.loadImageBoxes(e), t.Shapes.getShape(t.Consts.SHAPE_CIRCLE, 100, 100)
        }, _index: 0, _getGroup: function (t) {
            return this._groups[t]
        }, hideDefaultGroups: function () {
            this.hideGroup("basic.nodes"), this.hideGroup("register.images"), this.hideGroup("default.shapes")
        }, hideGroup: function (t) {
            var e = this._getGroup(t);
            e && (e.style.display = "none")
        }, showGroup: function (t) {
            var e = this._getGroup(t);
            e && (e.style.display = "")
        }, _groups: {}, _createGroup: function (e) {
            function s(e, n, i) {
                if (!e) return e;
                if (t.isString(e)) return u + e;
                if (e.draw instanceof Function) {
                    if (i) return e;
                    var o = e.imageName || e.name || n || "drawable-" + this._index++;
                    return t.hasImage(o) || t.registerImage(o, e), o
                }
                throw new Error("image format error")
            }

            var l = e.name, u = e.root || "", p = e.images, c = e.close, d = e.displayName || l, f = r("group");
            f.id = l, this._groups[l] = f;
            var g = r("group__title", f);
            g.onclick = h, r(null, g, "span", d), r("q-icon group-expand toolbar-expand", g, "span");
            var m = r("group__items", f), v = document.createElement("div");
            if (v.style.clear = "both", f.appendChild(v), c && i(f), !p) return f;
            var y = e.imageWidth || this.imageWidth, _ = e.imageHeight || this.imageHeight, b = e.showLabel;
            return a(p, function (i, a) {
                if ("_classPath" != a && "_className" != a) {
                    var l, h;
                    o(i) ? (h = l = s(i, a), i = {image: l}) : (l = i.image = s(i.image, a), h = i.icon ? s(i.icon, a, !0) : l);
                    var u, p;
                    if (i.html) {
                        var u = document.createElement("div");
                        u.style.width = y + "px", u.style.height = _ + "px", u.style.lineHeight = _ + "px", u.style.overflow = "hidden", u.innerHTML = i.html
                    } else {
                        if (!h) return;
                        u = t.createCanvas(y, _, !0), t.drawImage(h, u, n(i.styles)), e.size && (i.properties || (i.properties = {}), i.properties.size || (i.properties.size = e.size)), p = l
                    }
                    p = i.tooltip || i.label || p || a, u.setAttribute("title", p);
                    var c = r("group__item", m);
                    if (t.appendDNDInfo(u, i), c.appendChild(u), i.br) {
                        var d = document.createElement("br");
                        m.appendChild(d)
                    }
                    if (p && (b || i.showLabel)) {
                        var f = p, g = 10;
                        f.length > g && (f = "..." + f.substring(f.length - g + 2));
                        var v = document.createElement("div");
                        v.style.lineHeight = "1em", v.style.overFlow = "hide", v.style.marginTop = "0px", v.textContent = f, c.appendChild(v)
                    }
                }
            }, this), f
        }
    }, t.ToolBox = u
}(Q, jQuery), function (t) {
    function e(e, n, i) {
        var o = document.documentElement,
            r = new t.Rect(window.pageXOffset, window.pageYOffset, o.clientWidth - 2, o.clientHeight - 2),
            a = e.offsetWidth, s = e.offsetHeight;
        n + a > r.x + r.width && (n = r.x + r.width - a), i + s > r.y + r.height && (i = r.y + r.height - s), n < r.x && (n = r.x), i < r.y && (i = r.y), e.style.left = n + "px", e.style.top = i + "px"
    }

    function n(t, e) {
        for (var n = e.parentNode; null != n;) {
            if (n == t) return !0;
            n = n.parentNode
        }
        return !1
    }

    function i(t) {
        return t.touches && t.touches.length && (t = t.touches[0]), {x: t.pageX, y: t.pageY}
    }

    function o(e, n) {
        var o = n.popupmenu, r = i(e), a = r.x, s = r.y, l = o.getMenuItems(n, n.getElement(e), e);
        l && (o.items = l, o.showAt(a, s), t.stopEvent(e))
    }

    var r = function (t) {
        this.items = t || []
    }, a = "dropdown-menu";
    r.Separator = "divider", r.prototype = {
        dom: null, _invalidateFlag: !0, add: function (t) {
            this.items.push(t), this._invalidateFlag = !0
        }, addSeparator: function () {
            this.add(r.Separator)
        }, showAt: function (t, n) {
            return this.items && this.items.length ? (this._invalidateFlag && this.render(), this.dom.style.display = "block", document.body.appendChild(this.dom), void e(this.dom, t, n)) : !1
        }, hide: function () {
            this.dom && this.dom.parentNode && this.dom.parentNode.removeChild(this.dom)
        }, isShowing: function () {
            return null !== this.dom.parentNode
        }, render: function () {
            if (this._invalidateFlag = !1, this.dom) this.dom.innerHTML = ""; else {
                this.dom = document.createElement("ul"), this.dom.setAttribute("role", "menu"), this.dom.className = a;
                var e = t.isTouchSupport ? "touchstart" : "mousedown";
                this.stopEditWhenClickOnWindow || (this.stopEditWhenClickOnWindow = function (t) {
                    this.isShowing() && !n(this.dom, t.target) && this.hide()
                }.bind(this)), window.addEventListener("mousedown", this.stopEditWhenClickOnWindow, !0), this.dom.addEventListener(e, function (e) {
                    t.stopEvent(e)
                }, !1)
            }
            for (var i = 0, o = this.items.length; o > i; i++) {
                var r = this.renderItem(this.items[i]);
                this.dom.appendChild(r)
            }
        }, html2Escape: function (t) {
            return t.replace(/[<>&"]/g, function (t) {
                return {"<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;"}[t]
            })
        }, renderItem: function (e) {
            var n = document.createElement("li");
            if (n.setAttribute("role", "presentation"), e == r.Separator) return n.className = r.Separator, n.innerHTML = " ", n;
            if (t.isString(e)) return n.innerHTML = '<a role="menuitem" tabindex="-1" href="#">' + this.html2Escape(e) + "</a>", n;
            e.selected && (n.style.backgroundPosition = "3px 5px", n.style.backgroundRepeat = "no-repeat", n.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPklEQVQ4y2P4//8/AyWYYdQA7AYAAZuamlo7ED+H4naQGNEGQDX/R8PtpBjwHIsBz+lqAGVeoDgQR1MiaRgAnxW7Q0QEK0cAAAAASUVORK5CYII=')");
            var i = document.createElement("a");
            if (i.setAttribute("role", "menuitem"), i.setAttribute("tabindex", "-1"), i.setAttribute("href", "javascript:void(0)"), n.appendChild(i), e.html) i.innerHTML = e.html; else {
                var o = e.text || e.name;
                o && (i.innerHTML = this.html2Escape(o))
            }
            var a = e.className;
            a && (n.className = a);
            var s = e.action, l = this, h = function (n) {
                s && s.call(e.scope, n, e), t.isIOS || n.target.focus(), setTimeout(function () {
                    l.hide()
                }, 100)
            };
            return t.isTouchSupport ? i.ontouchstart = h : n.onclick = h, n
        }, getMenuItems: function (e, n) {
            var i = [];
            if (n) {
                var o = n instanceof t.ShapeNode,
                    r = (n instanceof t.Group, !o && n instanceof t.Node, n instanceof t.Edge);
                if (i.push({
                        text: getI18NString("Rename"), action: function () {
                            t.prompt(getI18NString("Input Element Name"), n.name || "", function (t) {
                                null !== t && (n.name = t)
                            })
                        }
                    }), r) {
                    var a = n.getStyle(t.Styles.EDGE_LINE_DASH) || t.DefaultStyles[t.Styles.EDGE_LINE_DASH];
                    i.push({
                        text: getI18NString(a ? "Solid Line" : "Dashed Line"), action: function () {
                            n.setStyle(t.Styles.EDGE_LINE_DASH, a ? null : [5, 3])
                        }
                    }), i.push({
                        text: getI18NString("Line Width"), action: function () {
                            t.prompt(getI18NString("Input Line Width"), n.getStyle(t.Styles.EDGE_WIDTH) || t.DefaultStyles[t.Styles.EDGE_WIDTH], function (e) {
                                null !== e && (e = parseFloat(e), n.setStyle(t.Styles.EDGE_WIDTH, e))
                            })
                        }
                    }), i.push({
                        text: getI18NString("Line Color"), action: function () {
                            t.prompt(getI18NString("Input Line Color"), n.getStyle(t.Styles.EDGE_COLOR) || t.DefaultStyles[t.Styles.EDGE_COLOR], function (e) {
                                null !== e && n.setStyle(t.Styles.EDGE_COLOR, e)
                            })
                        }
                    })
                } else n.parent instanceof t.Group && i.push({
                    text: getI18NString("Out of Group"), action: function () {
                        n.parent = null
                    }
                });
                i.push(t.PopupMenu.Separator), i.push({
                    text: getI18NString("Send to Top"), action: function () {
                        n.zIndex = 1, e.sendToTop(n), e.invalidate()
                    }
                }), i.push({
                    text: getI18NString("Send to Bottom"), action: function () {
                        n.zIndex = -1, e.sendToBottom(n), e.invalidate()
                    }
                }), i.push({
                    text: getI18NString("Reset Layer"), action: function () {
                        n.zIndex = 0, e.invalidate()
                    }
                }), i.push(t.PopupMenu.Separator)
            }
            i.push({
                text: getI18NString("Clear Graph"), action: function () {
                    e.clear()
                }
            }), i.push(t.PopupMenu.Separator), i.push({
                text: getI18NString("Zoom In"), action: function (t) {
                    var n = e.globalToLocal(t);
                    e.zoomIn(n.x, n.y, !0)
                }
            }), i.push({
                text: getI18NString("Zoom Out"), action: function (t) {
                    var n = e.globalToLocal(t);
                    e.zoomOut(n.x, n.y, !0)
                }
            }), i.push({
                text: getI18NString("1:1"), action: function (t) {
                    e.globalToLocal(t);
                    e.scale = 1
                }
            }), i.push(t.PopupMenu.Separator);
            for (var s = e.interactionMode, l = [{
                text: getI18NString("Pan Mode"),
                value: t.Consts.INTERACTION_MODE_DEFAULT
            }, {
                text: getI18NString("Rectangle Select"),
                value: t.Consts.INTERACTION_MODE_SELECTION
            }], h = 0, u = l.length; u > h; h++) {
                var p = l[h];
                p.value == s && (p.selected = !0), p.action = function (t, n) {
                    e.interactionMode = n.value
                }, i.push(p)
            }
            return i.push(t.PopupMenu.Separator), i.push({html: '<a href="http://qunee.com" target="_blank">Qunee - ' + t.version + "</a>"}), i
        }
    }, Object.defineProperties(r.prototype, {
        items: {
            get: function () {
                return this._items
            }, set: function (t) {
                this._items = t, this._invalidateFlag = !0
            }
        }
    });
    var s = {
        onstart: function (t, e) {
            e._popupmenu.hide()
        }
    };
    t.isTouchSupport && (s.onlongpress = function (t, e) {
        o(t, e)
    }), Object.defineProperties(t.Graph.prototype, {
        popupmenu: {
            get: function () {
                return this._popupmenu
            }, set: function (t) {
                this._popupmenu != t && (this._popupmenu = t, this._contextmenuListener || (this._contextmenuListener = s, this.addCustomInteraction(this._contextmenuListener), this.html.oncontextmenu = function (t) {
                    this.popupmenu && o(t, this)
                }.bind(this)))
            }
        }
    }), t.PopupMenu = r
}(Q, jQuery), !function (t) {
    function e(t, e, n, i, o) {
        this.getter = n, this.setter = i, this.scope = o, this.property = t, this.createHtml(e)
    }

    function n() {
        t.doSuperConstructor(this, n, arguments)
    }

    function i() {
        t.doSuperConstructor(this, i, arguments)
    }

    function o(t) {
        var e = t._classPath || t._tempName;
        return e || (e = t._tempName = "class-" + O++), e
    }

    function r(t, e, n) {
        var i = o(t);
        return e ? n[i] = {"class": t, properties: {}} : n[i]
    }

    function a(e, n) {
        return n == t.Consts.PROPERTY_TYPE_STYLE ? "S:" + e : n == t.Consts.PROPERTY_TYPE_CLIENT ? "C:" + e : e
    }

    function s(t) {
        l(x, t)
    }

    function l(t, e) {
        var n = e["class"];
        if (!n) throw new Error("class property can not be null");
        var i = e.properties, a = o(n);
        if (!i) return void delete t[a];
        var s = r(n, !0, t);
        s = a in t ? t[a] : t[a] = {"class": n, properties: {}}, h(e, s.properties)
    }

    function h(e, n) {
        n = n || {};
        var i = e.properties, o = e.group || "Element";
        return i.forEach(function (e) {
            var i;
            if (e.style) e.propertyType = t.Consts.PROPERTY_TYPE_STYLE, e.name = e.style; else if (e.client) e.propertyType = t.Consts.PROPERTY_TYPE_CLIENT, e.name = e.client; else {
                if (!e.name) return;
                e.propertyType = t.Consts.PROPERTY_TYPE_ACCESSOR
            }
            var i = e.key = a(e.name, e.propertyType);
            e.groupName || (e.groupName = o), n[i] = e
        }), n
    }

    function u(t, e, n) {
        n || (n = x), e = e || {};
        for (var i in n) if (t instanceof n[i]["class"]) {
            var o = n[i].properties;
            for (var r in o) {
                var a = o[r];
                "none" == a.display ? delete e[r] : e[r] = a
            }
        }
        return e
    }

    function p(t) {
        this.properties = t;
        var e = {}, n = 0;
        for (var i in t) {
            n++;
            var o = t[i].groupName, r = e[o];
            r || (r = e[o] = {}), r[i] = t[i]
        }
        this.group = e, this.length = n
    }

    function c(e, n, i, o) {
        return o && o != t.Consts.PROPERTY_TYPE_ACCESSOR ? o == t.Consts.PROPERTY_TYPE_STYLE ? e.getStyle(n, i) : o == t.Consts.PROPERTY_TYPE_CLIENT ? n.get(i) : void 0 : n[i]
    }

    function d(e, n, i, o) {
        return o && o != t.Consts.PROPERTY_TYPE_ACCESSOR ? o == t.Consts.PROPERTY_TYPE_STYLE ? n.setStyle(i, e) : o == t.Consts.PROPERTY_TYPE_CLIENT ? n.set(i, e) : void 0 : n[i] = e
    }

    function f(e, n) {
        this._propertyMap = {}, this._formItems = [], this.container = n, this.dom = this.html = t.createElement({
            "class": "form-horizontal",
            parent: n,
            tagName: "form"
        }), this.graph = e, e.dataPropertyChangeDispatcher.addListener(function (t) {
            this.onDataPropertyChange(t)
        }.bind(this)), e.selectionChangeDispatcher.addListener(function () {
            this.datas = this.graph.selectionModel.toDatas()
        }.bind(this))
    }

    function g(t) {
        return 0 | t
    }

    function m(t, e) {
        return t ? "point" == e ? g(t.x) + "," + g(t.y) : "size" == e ? g(t.width) + "," + g(t.height) : "degree" == e ? "" + 180 * t / Math.PI | 0 : t.toString() : t
    }

    function v(t, e) {
        if ("position" == e) return w[t];
        if ("number" == e) return parseFloat(t) || 0;
        if ("boolean" == e) return t ? !0 : !1;
        if ("point" != e) {
            if ("size" != e) return "degree" == e ? parseInt(t) * Math.PI / 180 : t;
            var n = t.split(",");
            if (2 == n.length) {
                var i = parseFloat(n[0]) || 0, o = parseFloat(n[1]) || 0;
                if (i && o) return {width: i, height: o}
            }
        } else {
            var n = t.split(",");
            if (2 == n.length) return {x: parseFloat(n[0] || 0), y: parseFloat(n[1]) || 0}
        }
    }

    var y = function (t) {
        t = t || {};
        var e = document.createElement(t.tagName || "div");
        return t["class"] && $(e).addClass(t["class"]), t.parent && t.parent.appendChild(e), t.style && e.setAttribute("style", t.style), t.css && $(e).css(t.css), t.html && $(e).html(t.html), e
    };
    t.createElement = y, e.prototype = {
        _getValue: function () {
            return this.getter.call(this.scope)
        }, update: function () {
            this.value = this._getValue()
        }, setValue: function (t) {
            this.input.value = m(t, this.property.type)
        }, getValue: function () {
            return v(this.input.value, this.property.type)
        }, createHtml: function (e) {
            var n = this.property, i = t.createElement({tagName: "input", "class": "form-control", parent: e});
            this.input = i, n.readonly && i.setAttribute("readonly", "readonly"), this.update(), $(i).on("input", function () {
                this.ajdusting || this.setter.call(this.scope, this)
            }.bind(this))
        }
    }, Object.defineProperties(e.prototype, {
        value: {
            get: function () {
                return this.getValue()
            }, set: function (t) {
                this.ajdusting = !0, this.setValue(t), this.ajdusting = !1
            }
        }
    }), n.prototype = {
        setValue: function (t) {
            t ? this.input.setAttribute("checked", "checked") : this.input.removeAttribute("checked")
        }, getValue: function () {
            return v(this.input.checked, this.property.type)
        }, createHtml: function (e) {
            var n = this.property, i = t.createElement({tagName: "input", parent: e});
            i.setAttribute("type", "checkbox"), this.input = i, n.readonly && i.setAttribute("readonly", "readonly"), this.update(), $(i).on("click", function () {
                this.ajdusting || this.setter.call(this.scope, this)
            }.bind(this))
        }
    }, t.extend(n, e), i.prototype = {
        createHtml: function (e) {
            var n = t.createElement({tagName: "input", "class": "form-control", parent: e});
            t.createElement({
                tagName: "span",
                parent: e,
                "class": "input-group-addon",
                html: "<i></i>"
            }), this.input = n, this.update(), $(e).colorpicker({container: !0}).on("changeColor", function () {
                this.ajdusting || this.setter.call(this.scope, this)
            }.bind(this))
        }
    }, t.extend(i, e);
    var _ = [{name: "name", displayName: "Name"}, {
        style: t.Styles.LABEL_FONT_SIZE,
        type: "number",
        displayName: "Font Size"
    }, {style: t.Styles.LABEL_COLOR, type: "color", displayName: "Label Color"}, {
        style: t.Styles.RENDER_COLOR,
        type: "color",
        displayName: "Render Color"
    }, {style: t.Styles.LABEL_POSITION, displayName: "Label Position"}, {
        style: t.Styles.LABEL_ANCHOR_POSITION,
        displayName: "Label Anchor Position"
    }], b = [{name: "size", type: "size", displayName: "Size"}, {
        name: "location",
        type: "point",
        displayName: "Location"
    }, {name: "rotate", type: "number", displayName: "Rotate"}, {
        style: t.Styles.BORDER,
        type: "number",
        displayName: "Border"
    }, {style: t.Styles.BORDER_COLOR, type: "color", displayName: "Border Color"}], S = [{
        style: t.Styles.SHAPE_FILL_COLOR,
        type: "color",
        displayName: "Fill Color"
    }, {style: t.Styles.SHAPE_STROKE_STYLE, type: "color", displayName: "Stroke Color"}, {
        style: t.Styles.SHAPE_STROKE,
        type: "number",
        displayName: "Stroke"
    }], E = [{name: "angle", type: "degree", displayName: "angle 0-360°"}, {
        style: t.Styles.BORDER,
        display: "none"
    }, {style: t.Styles.EDGE_WIDTH, type: "number", displayName: "Edge Width"}, {
        style: t.Styles.EDGE_COLOR,
        type: "color",
        displayName: "Edge Color"
    }, {style: t.Styles.ARROW_TO, type: "boolean", displayName: "Arrow To"}], N = [{name: "size", display: "none"}, {
        style: t.Styles.LABEL_SIZE,
        type: "size",
        displayName: "Size"
    }, {style: t.Styles.RENDER_COLOR, display: "none"}, {
        style: t.Styles.LABEL_BACKGROUND_COLOR,
        type: "color",
        displayName: "Background Color"
    }], x = {}, O = 0;
    s({"class": t.Element, properties: _, group: "Element"}), s({
        "class": t.Node,
        properties: b,
        group: "Node"
    }), s({"class": t.Edge, properties: E, group: "Edge"}), s({
        "class": t.Text,
        properties: N,
        group: "Text"
    }), s({"class": t.ShapeNode, properties: S, group: "Shape"}), p.prototype = {
        contains: function (t, e) {
            var n = a(t, e);
            return this.properties[n]
        }, isEmpty: function () {
            return 0 == this.length
        }
    };
    var C = function (t, o, r, a, s) {
        var l = t.type;
        return "color" == l ? new i(t, o, r, a, s) : "boolean" == l ? new n(t, o, r, a, s) : new e(t, o, r, a, s)
    }, w = {};
    for (var I in t.Position) {
        var T = t.Position[I];
        "random" != I && T instanceof t.Position && (w[T.toString()] = T)
    }
    f.prototype = {
        _formItems: null, onValueChange: function (t, e) {
            this.setValue(t, e)
        }, adjusting: !1, _containsElement: function (t) {
            for (var e in this.datas) if (e == t) return !0
        }, _containsProperty: function (t, e) {
            return this.propertyGroup && this.propertyGroup.contains(t, e)
        }, _cellEditors: null, _getCellEditors: function (t, e) {
            if (this._cellEditors) {
                var n = a(t, e);
                return this._cellEditors[n]
            }
        }, onDataPropertyChange: function (e) {
            if (!this.adjusting) {
                if (!this.datas || !this.datas.length) return null;
                var n = e.source;
                if (!this._containsElement(n)) {
                    var i = this._getCellEditors(e.kind, e.propertyType);
                    if (!i) return;
                    t.isArray(i) || (i = [i]), i.forEach(function (t) {
                        t.update()
                    })
                }
            }
        }, clear: function () {
            $(".colorpicker-element").colorpicker("hide"), this.dom.innerHTML = "", this._formItems = [], this._cellEditors = null, this._setVisible(!1)
        }, _setVisible: function (t) {
            var e = t ? "block" : "none";
            this.container ? this.container.style.display = e : this.dom.style.display = e
        }, createItem: function (e, n) {
            var i = t.createElement({"class": "form-group", parent: e}), o = (t.createElement({
                parent: i,
                tagName: "label",
                "class": "col-sm-6 control-label font-small",
                html: getI18NString(n.displayName || n.name)
            }), t.createElement({parent: i, "class": "input-group input-group-sm col-sm-6"})), r = C(n, o, function () {
                return this.getValue(n)
            }.bind(this), function (t) {
                this.onValueChange(t.value, n)
            }.bind(this)), s = a(n.name, n.propertyType);
            this._cellEditors || (this._cellEditors = {});
            var l = this._cellEditors[s];
            return l ? l.push(r) : this._cellEditors[s] = [r], i
        }, setValue: function (e, n) {
            return this.datas && this.datas.length ? (this.adjusting = !0, n.type && "string" != n.type && t.isString(e) && (e = v(e, n.type)), this.datas.forEach(function (t) {
                var i = c(this.graph, t, n.name, n.propertyType);
                i !== e && d(e, t, n.name, n.propertyType)
            }, this), void(this.adjusting = !1)) : null
        }, getValue: function (t) {
            return this.datas && this.datas.length ? 1 == this.datas.length ? c(this.graph, this.datas[0], t.name, t.propertyType) || "" : void 0 : null
        }, createItemGroup: function (e, n) {
            var i = t.createElement({"class": "class-group", parent: this.dom});
            t.createElement({tagName: "h4", parent: i, html: e});
            for (var e in n) this.createItem(i, n[e])
        }, register: function (t) {
            l(this._propertyMap, t)
        }, showDefaultProperties: !0, _getProperties: function (t) {
            var e = {};
            if (this.showDefaultProperties && u(t, e), this._propertyMap && u(t, e, this._propertyMap), t.propertyDefinitions) {
                var n = h(t.propertyDefinitions);
                for (var i in n) e[i] = n[i]
            }
            return new p(e)
        }
    }, Object.defineProperties(f.prototype, {
        datas: {
            get: function () {
                return this._datas
            }, set: function (e) {
                if (this._datas != e && (e && !t.isArray(e) && (e = [e]), this._datas = e, this.clear(), e.length && 1 == e.length)) {
                    this._setVisible(!0), this.propertyGroup = this._getProperties(e[0]);
                    var n = this.propertyGroup.group;
                    for (var i in n) this.createItemGroup(i, n[i])
                }
            }
        }
    }), t.PropertyPane = f, t.PropertyPane.register = s
}(Q), GridBackground.prototype = {
    update: function () {
        var t = this.graph, e = this.canvas, n = this.scaleCanvas;
        t.callLater(function () {
            e.setSize(t.width, t.height), e.width = e.width, n.setSize(t.width, t.height), n.width = e.width;
            var i = t.scale, o = 50 / i, r = this.currentCell = 10 * (Math.round(o / 10) || 1);
            i = t.scale * e.ratio;
            var a = t.viewportBounds, s = e.g;
            s.save(), this._doTransform(s, i, a), s.beginPath();
            var l = a.x, h = a.y, u = a.right, p = a.bottom;
            for (l % r !== 0 && (l -= l % r), h % r !== 0 && (h -= h % r); u > l;) s.moveTo(l, a.y), s.lineTo(l, p), l += r;
            for (; p > h;) s.moveTo(a.x, h), s.lineTo(u, h), h += r;
            s.lineWidth = 1 / i, s.strokeStyle = "#CCC", s.stroke(), n.g.save(), this._doTransform(n.g, i, a), this.drawScales(n.g, a, i, n.ratio), n.g.restore(), s.restore()
        }, this)
    }, _doTransform: function (t, e, n) {
        t.translate(-e * n.x, -e * n.y), t.scale(e, e)
    }, drawText: function (t, e, n, i, o, r, a, s) {
        o = o || 7, t.save();
        var l = 3;
        o *= l, t.font = "normal " + o + "px helvetica arial", t.fillStyle = "#555", t.textAlign = r || "center", t.textBaseline = a || "top", t.translate(n, i), s && t.rotate(s), t.scale(1 / l, 1 / l), t.fillText(e, 0, 0), t.restore()
    }, drawScales: function (t, e, n, i) {
        t.beginPath();
        var o = 5 * i / n, r = 12 * i / n;
        t.beginPath();
        var a = e.x;
        for (a = this.currentCell * Math.ceil(a / this.currentCell); a < e.right;) t.moveTo(a, e.y), t.lineTo(a, e.y + o + o), this.drawText(t, "" + a | 0, a, e.y + o + o, r), a += this.currentCell;
        var s = e.y;
        for (s = this.currentCell * Math.ceil(s / this.currentCell); s < e.bottom;) t.moveTo(e.x, s), t.lineTo(e.x + o + o, s), this.drawText(t, "" + s | 0, e.x + o + o, s, r, "center", "top", -Math.PI / 6), s += this.currentCell;
        t.lineWidth = 1 / n, t.strokeStyle = "#000", t.stroke()
    }
}, function (t, e) {
    "use strict";

    function n(t, e) {
        this._initEditor(t, e), this.loadDatas(this.options.data, this.options.callback || function () {
            this.graph.moveToCenter()
        })
    }

    var i = function (e, n, i, o) {
        return t.createElement({"class": e, parent: n, tagName: i, html: o})
    }, o = function (t, e) {
        var n = t.find(e);
        return n.length ? n[0] : void 0
    };
    e.fn.graphEditor = function (t) {
        return this.each(function () {
            var e = this.graphEditor;
            return e || (this.graphEditor = e = new n(this, t)), e
        })
    };
    var r = {};
    r[t.Styles.SHAPE_FILL_COLOR] = t.toColor(3435973836), r[t.Styles.SELECTION_COLOR] = "#888", r[t.Styles.SELECTION_SHADOW_BLUR] = 5, r[t.Styles.SELECTION_SHADOW_OFFSET_X] = 2, r[t.Styles.SELECTION_SHADOW_OFFSET_Y] = 2, n.prototype = {
        _initEditor: function (t, n) {
            this.options = n = n || {}, this.dom = t, e(t).addClass("layout graph-editor"), this.createGraph(this.options.styles || r), this.createToolbar(n), this.createToolbox(this.options.images), this.createPropertyPane(n), this.createJSONPane(), e(t).borderLayout(), this.toolbar && this.initToolbar(this.toolbar, this.graph), this.initContextMenu(this.graph), window.addEventListener("beforeunload", this.onbeforeunload.bind(this))
        }, onbeforeunload: function () {
        }, _getFirst: function (t) {
            return o(e(this.dom), "." + t)
        }, toolbar: null, toolbox: null, propertyPane: null, graph: null, createGraph: function (n) {
            function o(e, n, i) {
                var o;
                return e.forEachReverseVisibleUI(function (e) {
                    var r = e.data;
                    return r instanceof t.Node && e.uiBounds.intersectsPoint(n - e.x, i - e.y) && e.hitTest(n, i, 1) ? (o = r, !1) : void 0
                }), o
            }

            var r = this._getFirst("graph-editor__canvas");
            r || (r = i("graph-editor__canvas", this.dom), r.setAttribute("data-options", 'region:"center"')), this.html = r;
            var a = this.graph = new t.Graph(r);
            return a.allowEmptyLabel = !0, a.originAtCenter = !1, a.editable = !0, a.styles = n, a.getDropInfo = function (e, n) {
                return n ? t.parseJSON(n) : void 0
            }, a.dropAction = function () {
                return this.dropAction.apply(this, arguments)
            }.bind(this), e(r).bind("size.change", function () {
                a.updateViewport()
            }), a.interactionDispatcher.on(function (e) {
                if (e.kind == t.InteractionEvent.POINT_MOVE_END && e.data instanceof t.Edge && e.point && e.point.isEndPoint) {
                    var n = e.data, i = e.point, r = i.isFrom, s = r ? n.from : n.to, l = a.toLogical(e.event), h = l.x,
                        u = l.y, p = o(this, h, u);
                    if (p && s != p) {
                        if (p instanceof t.Group && n.inGroup && n.inGroup(p)) return;
                        var c = a.getUI(p).bodyBounds, d = {x: h - c.cx, y: u - c.cy};
                        n.setStyle(r ? t.Styles.EDGE_FROM_OFFSET : t.Styles.EDGE_TO_OFFSET, d), r ? n.from = p : n.to = p
                    }
                }
            }.bind(a)), a
        }, dropAction: function (e, n, i) {
            if (i.ondrop) {
                var o = window[i.ondrop];
                if (o instanceof Function) return o.call(this, e, this.graph, n, i), t.stopEvent(e), !1
            }
        }, createToolbar: function () {
            var t = this._getFirst("graph-editor__toolbar");
            return t ? this.toolbar = t : (this.toolbar = t = i("graph-editor__toolbar", this.dom), t.setAttribute("data-options", 'region:"north", height: 40'), t)
        }, createToolbox: function (e) {
            var n = this._getFirst("graph-editor__toolbox");
            n || (n = document.createElement("div"), this.dom.appendChild(n), n.setAttribute("data-options", "region:'west', width:'18%', left:0, min-width:220, max-width:400")), this.toolbox = new t.ToolBox(this.graph, n, e), this.graph.toolbox = this.toolbox
        }, createPropertyPane: function (e) {
            if (t.PropertyPane) {
                var n = this._getFirst("graph-editor__property");
                return n || (n = i("graph-editor__property", this.dom)), this.propertyPane = new t.PropertyPane(this.graph, n, e)
            }
        }, getJSONTextArea: function () {
            return o(e(this.jsonPane), "textarea")
        }, loadJSONFile: function (e) {
            e[0] && t.readerSingleFile(e[0], "json", function (t) {
                return t ? (this.graph.clear(), void this.graph.parseJSON(t)) : void alert(getI18NString("json file is empty"))
            }.bind(this))
        }, exportJSONFile: function (t) {
            if (t) {
                var e = this.graph.name || "graph", n = this.graph.exportJSON(!0),
                    i = new Blob([n], {type: "text/plain;charset=utf-8"});
                t(i, e + ".json")
            }
        }, exportJSON: function (t) {
            if (t && this.jsonPane) {
                var e = this.graph.exportJSON(!0, {space: "  "});
                return this.getJSONTextArea().value = e
            }
            return this.graph.exportJSON.apply(this.graph, arguments)
        }, submitJSON: function () {
            var t = this.getJSONTextArea().value;
            this.graph.clear(), this.graph.parseJSON(t)
        }, loadDatas: function (e, n) {
            if (e) {
                if (t.isString(e)) return void t.loadJSON(e, function (t) {
                    this.graph.parseJSON(t.json || t), n instanceof Function && n.call(this, this)
                }.bind(this), function () {
                    n instanceof Function && n.call(this, this)
                }.bind(this));
                this.graph.parseJSON(e)
            }
            n instanceof Function && n.call(this, this)
        }, onsave: function (t) {
            return t ? alert(getI18NString("Save Error")) : void alert(getI18NString("Save Success"))
        }, save: function () {
            if (this.options.saveService) {
                var t = this.options.saveService, e = this.graph.exportJSON(!0), n = new XMLHttpRequest;
                n.open("post", t, !0), n.onerror = function (t) {
                    this.onsave(t)
                }.bind(this), n.onload = function (t) {
                    200 == t.target.status ? this.onsave(null, t) : this.onsave(t)
                }.bind(this), n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify({
                    name: this.name,
                    json: e
                }))
            }
        }, createJSONPane: function () {
            var e = this._getFirst("graph-editor__json");
            if (e) return this.jsonPane = e;
            this.jsonPane = e = i("graph-editor__json", this.dom);
            var n = document.createElement("textarea");
            e.appendChild(n), n.spellcheck = !1;
            var o = i("graph-editor__json__buttons", e), r = [{
                name: getI18NString("Update"),
                action: this.exportJSON.bind(this, !0)
            }, {name: getI18NString("Submit"), action: this.submitJSON.bind(this)}];
            return t.createButtonGroup(r, o), e.style.display = "none", e
        }, initToolbar: function (e, n) {
            var i = [{
                name: getI18NString("Export JSON"),
                iconClass: "q-icon toolbar-json",
                action: this.showJSONPanel.bind(this)
            }];
            t.isFileSupported && i.push({
                iconClass: "q-icon toolbar-upload",
                name: getI18NString("Load File ..."),
                action: this.loadJSONFile.bind(this),
                type: "file"
            }), window.saveAs && i.push({
                iconClass: "q-icon toolbar-download",
                name: getI18NString("Download File"),
                action: this.exportJSONFile.bind(this, window.saveAs)
            }), this.options.saveService && i.push({
                iconClass: "q-icon toolbar-save",
                name: getI18NString("Save"),
                action: this.save.bind(this)
            }), t.createToolbar(n, e, {"export": i})
        }, showExportPanel: function () {
            t.showExportPanel(this.graph)
        }, showJSONPanel: function (t) {
            var n = t.target;
            e(n).hasClass("btn") || (n = n.parentNode);
            var i = e(n).hasClass("active");
            i ? e(n).removeClass("active") : e(n).addClass("active"), i = !i;
            var o = this.jsonPane;
            o.style.display = i ? "" : "none", i && this.exportJSON(!0)
        }, initContextMenu: function (e) {
            e.popupmenu = new t.PopupMenu
        }
    }, window.localStorage && (n.prototype.loadLocal = function () {
        return localStorage.graph ? (this.graph.clear(), this.graph.parseJSON(localStorage.graph), !0) : void 0
    }, n.prototype.saveLocal = function () {
        localStorage.graph = this.graph.exportJSON(!0)
    }), t.Editor = n
}(Q, jQuery);