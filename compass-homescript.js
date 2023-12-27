(function() {
    if (typeof checkbetamode == "function") {
        checkbetamode("compass-homescript", "v8.0.0");
    }
    if (window.devicePixelRatio >= 1.2 || document.location.href.indexOf("?retina") > -1) {
        $("html").addClass("retina");
    }
}
)();

/*! GLOBAL.VARS */
var ocomltxt = [];
ocomltxt.en = {
    more: "More",
    readmore: "Read More",
    close: "Close",
    link2txt: "Paste link in <strong>email</strong> or <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.cs = {
    more: "Více",
    readmore: "Více informací",
    close: "Zavřít",
    link2txt: "Vložte odkaz do <strong>e-mailu</strong> nebo <strong>do aplikace pro zasílání rychlých zpráv</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.nl = {
    more: "Meer",
    readmore: "Meer informatie",
    close: "Sluiten",
    link2txt: "Plak link in <strong>e-mail</strong> of <strong>chat</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.fr = {
    more: "En savoir plus",
    readmore: "Lire la suite",
    close: "Fermer",
    link2txt: "Copier le lien dans <strong>e-mail</strong> ou <strong>messagerie instantan&#233;e</strong>",
    finish: "Fin",
    alreadymember: "Déjà membre ?",
    login: "Connexion",
    logout: "Déconnexion",
    joinnow: "S'inscrire",
    welcome: "Bienvenue",
    visitorname: "nom-du-visiteur"
};
ocomltxt["fr-ca"] = {
    more: "En savoir plus",
    readmore: "En savoir plus",
    close: "Fermer",
    link2txt: "Coller le lien dans <strong>courriel</strong> ou <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.de = {
    more: "Weitere Informationen",
    readmore: "Erfahren Sie mehr",
    close: "Schlie&#223en",
    link2txt: "Link einf&#252;gen in <strong>E-Mail</strong> oder <strong>Textnachricht (IM)</strong>",
    finish: "Finish",
    alreadymember: "Bereits Mitglied?",
    login: "Anmelden",
    logout: "Abmelden",
    joinnow: "Jetzt beitreten",
    welcome: "Willkommen",
    visitorname: "Name des Besuchers"
};
ocomltxt.ita = {
    more: "Altre informazioni",
    readmore: "Ulteriori informazioni",
    close: "Chiudi",
    link2txt: "Incolla il collegamento in <strong>e-mail</strong> o <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Sei già iscritto?",
    login: "Login",
    logout: "Logout",
    joinnow: "Aderisci ora",
    welcome: "Benvenuto/a",
    visitorname: "nome-visitatore"
};
ocomltxt.pl = {
    more: "Więcej",
    readmore: "Czytaj dalej",
    close: "Zamknij",
    link2txt: "Wklej łącze do <strong>wiadomości e-mail</strong> lub <strong>wiadomości błyskawicznej</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.ptb = {
    more: "Mais",
    readmore: "Leia Mais",
    close: "Fechamento",
    link2txt: "Cole o link no <strong>e-mail</strong> ou no <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Já é membro?",
    login: "Login",
    logout: "Logout",
    joinnow: "Participe Agora",
    welcome: "Benvindo",
    visitorname: "nome-do-visitante"
};
ocomltxt.ro = {
    more: "Mai multe",
    readmore: "Aflaţi mai multe",
    close: "Cerrar",
    link2txt: "Paste <strong>e-mail</strong> sau <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.ru = {
    more: "Далее",
    readmore: "Читать",
    close: "Закрыть",
    link2txt: "Вставить ссылку в <strong>электронную почту</strong> или <strong>ВМ</strong>",
    finish: "Finish",
    alreadymember: "Уже зарегистрированы?",
    login: "Вход",
    logout: "Выход",
    joinnow: "Регистрация",
    welcome: "Добро пожаловать,",
    visitorname: "гость-имя"
};
ocomltxt.esa = {
    more: "Mas",
    readmore: "Mas",
    close: "Cerrar",
    link2txt: "Paste <strong>correo electr&#243;nico</strong> o <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.es = {
    more: "M&#225;s",
    readmore: "Lea m&#225;s informaci&#243;n",
    close: "Cerrar",
    link2txt: "Pegar enlace en link in <strong>correo electr&#243;nico</strong> o bien <strong>IM</strong>",
    finish: "Finish",
    alreadymember: "¿Ya está registrado como miembro?",
    login: "Acceder",
    logout: "Salir",
    joinnow: "Unirse ahora",
    welcome: "Bienvenido/a",
    visitorname: "nombre-visitante"
};
ocomltxt.tr = {
    more: "Devam",
    readmore: "Devamı",
    close: "Kapat",
    link2txt: "Yapıştırılacak bağlantının konumu <strong>e-posta</strong> veya <strong>anlık ileti sistemi</strong>",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.kr = {
    more: "자세히",
    readmore: "자세히 읽기",
    close: "끝내기",
    link2txt: "이메일 또는 IM 링크 연결하기",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};
ocomltxt.zhs = {
    more: "更多",
    readmore: "阅读详细内容",
    close: "关闭",
    link2txt: "将链接粘贴到电子邮件或即时聊天工具中",
    finish: "Finish",
    alreadymember: "已经是成员?",
    login: "登入",
    logout: "登出",
    joinnow: "立即加入",
    welcome: "欢迎您，",
    visitorname: "访客姓名"
};
ocomltxt.ja = {
    more: "その他",
    readmore: "詳細",
    close: "閉じる",
    link2txt: "リンクをeメールかIMにてペーストしてください",
    finish: "Finish",
    alreadymember: "Already a member?",
    login: "Login",
    logout: "Logout",
    joinnow: "Join Now",
    welcome: "Welcome",
    visitorname: "visitor-name"
};

/*! LANG DETECT */
var ocomlang = "en";
jQuery(document).ready(function(a) {
    a("meta").each(function() {
        if (jQuery(this).attr("name") == "Language") {
            ocomlang = jQuery(this).attr("content");
        }
    });
    ocomlang = (typeof ocomltxt[ocomlang] == "undefined") ? "en" : ocomlang;
});
window.Modernizr = function(ar, aq, ap) {
    function aa(b) {
        ai.cssText = b;
    }
    function Y(d, c) {
        return aa(af.join(d + ";") + (c || ""));
    }
    function W(d, c) {
        return typeof d === c;
    }
    function U(d, c) {
        return !!~("" + d).indexOf(c);
    }
    function S(f, c) {
        for (var h in f) {
            var g = f[h];
            if (!U(g, "-") && ai[g] !== ap) {
                return c == "pfx" ? g : !0;
            }
        }
        return !1;
    }
    function Q(g, c, j) {
        for (var i in g) {
            var h = c[g[i]];
            if (h !== ap) {
                return j === !1 ? g[i] : W(h, "function") ? h.bind(j || c) : h;
            }
        }
        return !1;
    }
    function O(g, f, j) {
        var i = g.charAt(0).toUpperCase() + g.slice(1)
          , h = (g + " " + ad.join(i + " ") + i).split(" ");
        return W(f, "string") || W(f, "undefined") ? S(h, f) : (h = (g + " " + ac.join(i + " ") + i).split(" "),
        Q(h, f, j));
    }
    var ao = "2.8.3", an = {}, am = !0, al = aq.documentElement, ak = "modernizr", aj = aq.createElement(ak), ai = aj.style, ah, ag = {}.toString, af = " -webkit- -moz- -o- -ms- ".split(" "), ae = "Webkit Moz O ms", ad = ae.split(" "), ac = ae.toLowerCase().split(" "), Z = {}, X = {}, V = {}, T = [], R = T.slice, P, N = function(v, u, t, s) {
        var r, q, p, o, h = aq.createElement("div"), g = aq.body, b = g || aq.createElement("body");
        if (parseInt(t, 10)) {
            while (t--) {
                p = aq.createElement("div"),
                p.id = s ? s[t] : ak + (t + 1),
                h.appendChild(p);
            }
        }
        return r = ["&#173;", '<style id="s', ak, '">', v, "</style>"].join(""),
        h.id = ak,
        (g ? h : b).innerHTML += r,
        b.appendChild(h),
        g || (b.style.background = "",
        b.style.overflow = "hidden",
        o = al.style.overflow,
        al.style.overflow = "hidden",
        al.appendChild(b)),
        q = u(h, v),
        g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b),
        al.style.overflow = o),
        !!q;
    }, M = function(a) {
        var f = ar.matchMedia || ar.msMatchMedia;
        if (f) {
            return f(a) && f(a).matches || !1;
        }
        var e;
        return N("@media " + a + " { #" + ak + " { position: absolute; } }", function(c) {
            e = (ar.getComputedStyle ? getComputedStyle(c, null) : c.currentStyle)["position"] == "absolute";
        }),
        e;
    }, K = function() {
        function c(h, g) {
            g = g || aq.createElement(b[h] || "div"),
            h = "on" + h;
            var a = h in g;
            return a || (g.setAttribute || (g = aq.createElement("div")),
            g.setAttribute && g.removeAttribute && (g.setAttribute(h, ""),
            a = W(g[h], "function"),
            W(g[h], "undefined") || (g[h] = ap),
            g.removeAttribute(h))),
            g = null,
            a;
        }
        var b = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return c;
    }(), J = {}.hasOwnProperty, ab;
    !W(J, "undefined") && !W(J.call, "undefined") ? ab = function(d, c) {
        return J.call(d, c);
    }
    : ab = function(d, c) {
        return c in d && W(d.constructor.prototype[c], "undefined");
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var h = this;
        if (typeof h != "function") {
            throw new TypeError;
        }
        var g = R.call(arguments, 1)
          , f = function() {
            if (this instanceof f) {
                var b = function() {};
                b.prototype = h.prototype;
                var d = new b
                  , c = h.apply(d, g.concat(R.call(arguments)));
                return Object(c) === c ? c : d;
            }
            return h.apply(a, g.concat(R.call(arguments)));
        };
        return f;
    }
    ),
    Z.touch = function() {
        var a;
        return "ontouchstart"in ar || ar.DocumentTouch && aq instanceof DocumentTouch ? a = !0 : N(["@media (", af.join("touch-enabled),("), ak, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
            a = b.offsetTop === 9;
        }),
        a;
    }
    ,
    Z.hashchange = function() {
        return K("hashchange", ar) && (aq.documentMode === ap || aq.documentMode > 7);
    }
    ,
    Z.history = function() {
        return !!ar.history && !!history.pushState;
    }
    ,
    Z.rgba = function() {
        return aa("background-color:rgba(150,255,150,.5)"),
        U(ai.backgroundColor, "rgba");
    }
    ,
    Z.boxshadow = function() {
        return O("boxShadow");
    }
    ,
    Z.cssgradients = function() {
        var e = "background-image:"
          , d = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , f = "linear-gradient(left top,#9f9, white);";
        return aa((e + "-webkit- ".split(" ").join(d + e) + af.join(f + e)).slice(0, -e.length)),
        U(ai.backgroundImage, "gradient");
    }
    ;
    for (var L in Z) {
        ab(Z, L) && (P = L.toLowerCase(),
        an[P] = Z[L](),
        T.push((an[P] ? "" : "no-") + P));
    }
    return an.addTest = function(e, c) {
        if (typeof e == "object") {
            for (var f in e) {
                ab(e, f) && an.addTest(f, e[f]);
            }
        } else {
            e = e.toLowerCase();
            if (an[e] !== ap) {
                return an;
            }
            c = typeof c == "function" ? c() : c,
            typeof am != "undefined" && am && (al.className += " " + (c ? "" : "no-") + e),
            an[e] = c;
        }
        return an;
    }
    ,
    aa(""),
    aj = ah = null,
    an._version = ao,
    an._prefixes = af,
    an._domPrefixes = ac,
    an._cssomPrefixes = ad,
    an.mq = M,
    an.hasEvent = K,
    an.testProp = function(b) {
        return S([b]);
    }
    ,
    an.testAllProps = O,
    an.testStyles = N,
    al.className = al.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (am ? " js " + T.join(" ") : ""),
    an;
}(this, this.document);

/*! SELECTONFOCUS */
jQuery(document).ready(function(a) {
    a(".selectonfocus").focus(function() {
        if (this.value == this.defaultValue) {
            this.select();
        }
    });
});

/*! AUTOCLEAR */
jQuery(document).ready(function(a) {
    a("input.autoclear").bind("focus", function(c) {
        var b = a(this).get(0);
        if (b.value == b.defaultValue) {
            b.value = "";
        }
    });
    a("input.autoclear").bind("blur", function(c) {
        var b = a(this).get(0);
        if (b.value == "") {
            b.value = b.defaultValue;
        }
    });
});

/*! jQuery UI - v1.11.2 - 2014-12-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, autocomplete.js, datepicker.js, menu.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}
)(function(e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode,
        a = n.name,
        t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0],
        !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }
    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    function s(e) {
        for (var t, i; e.length && e[0] !== document; ) {
            if (t = e.css("position"),
            ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10),
            !isNaN(i) && 0 !== i))
                return i;
            e = e.parent()
        }
        return 0
    }
    function n() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        e.extend(this._defaults, this.regional[""]),
        this.regional.en = e.extend(!0, {}, this.regional[""]),
        this.regional["en-US"] = e.extend(!0, {}, this.regional.en),
        this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            e(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", o)
    }
    function o() {
        e.datepicker._isDisabledDatepicker(d.inline ? d.dpDiv.parent()[0] : d.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        e(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }
    function r(t, i) {
        e.extend(t, i);
        for (var s in i)
            null == i[s] && (t[s] = i[s]);
        return t
    }
    e.ui = e.ui || {},
    e.extend(e.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position")
              , s = "absolute" === i
              , n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
              , a = this.parents().filter(function() {
                var t = e(this);
                return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        }
        ,
        focusable: function(i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex")
              , n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }),
    e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0,
                s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
          , a = i.toLowerCase()
          , o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                e(this).css(a, s(this, t) + "px")
            })
        }
        ,
        e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }),
    e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
    ),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)),
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(),
                        s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t)
                return this.css("zIndex", t);
            if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document; ) {
                    if (i = n.css("position"),
                    ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10),
                    !isNaN(s) && 0 !== s))
                        return s;
                    n = n.parent()
                }
            return 0
        }
    }),
    e.ui.plugin = {
        add: function(t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s)
                a.plugins[n] = a.plugins[n] || [],
                a.plugins[n].push([i, s[n]])
        },
        call: function(e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++)
                    e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var h = 0
      , l = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++)
                try {
                    s = e._data(n, "events"),
                    s && s.remove && e(n).triggerHandler("remove")
                } catch (o) {}
            t(i)
        }
    }(e.cleanData),
    e.widget = function(t, i, s) {
        var n, a, o, r, h = {}, l = t.split(".")[0];
        return t = t.split(".")[1],
        n = l + "-" + t,
        s || (s = i,
        i = e.Widget),
        e.expr[":"][n.toLowerCase()] = function(t) {
            return !!e.data(t, n)
        }
        ,
        e[l] = e[l] || {},
        a = e[l][t],
        o = e[l][t] = function(e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t),
            void 0) : new o(e,t)
        }
        ,
        e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }),
        r = new i,
        r.options = e.widget.extend({}, r.options),
        e.each(s, function(t, s) {
            return e.isFunction(s) ? (h[t] = function() {
                var e = function() {
                    return i.prototype[t].apply(this, arguments)
                }
                  , n = function(e) {
                    return i.prototype[t].apply(this, e)
                };
                return function() {
                    var t, i = this._super, a = this._superApply;
                    return this._super = e,
                    this._superApply = n,
                    t = s.apply(this, arguments),
                    this._super = i,
                    this._superApply = a,
                    t
                }
            }(),
            void 0) : (h[t] = s,
            void 0)
        }),
        o.prototype = e.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix || t : t
        }, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }),
        a ? (e.each(a._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }),
        delete a._childConstructors) : i._childConstructors.push(o),
        e.widget.bridge(t, o),
        o
    }
    ,
    e.widget.extend = function(t) {
        for (var i, s, n = l.call(arguments, 1), a = 0, o = n.length; o > a; a++)
            for (i in n[a])
                s = n[a][i],
                n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }
    ,
    e.widget.bridge = function(t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(n) {
            var a = "string" == typeof n
              , o = l.call(arguments, 1)
              , r = this;
            return n = !a && o.length ? e.widget.extend.apply(null, [n].concat(o)) : n,
            a ? this.each(function() {
                var i, a = e.data(this, s);
                return "instance" === n ? (r = a,
                !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o),
                i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i,
                !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'")
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? (t.option(n || {}),
                t._init && t._init()) : e.data(this, s, new i(n,this))
            }),
            r
        }
    }
    ,
    e.Widget = function() {}
    ,
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0],
            this.element = e(i),
            this.uuid = h++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            i !== this && (e.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }),
            this.document = e(i.style ? i.ownerDocument : i.document || i),
            this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length)
                return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {},
                s = t.split("."),
                t = s.shift(),
                s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]),
                    a = 0; s.length - 1 > a; a++)
                        n[s[a]] = n[s[a]] || {},
                        n = n[s[a]];
                    if (t = s.pop(),
                    1 === arguments.length)
                        return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                }
            return this._setOptions(o),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t),
            t && (this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus"))),
            this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i,
            i = t,
            t = !1),
            s ? (i = n = e(i),
            this.bindings = this.bindings.add(i)) : (s = i,
            i = this.element,
            n = this.widget()),
            e.each(s, function(s, o) {
                function r() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/)
                  , l = h[1] + a.eventNamespace
                  , u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.unbind(i).undelegate(i),
            this.bindings = e(this.bindings.not(t).get()),
            this.focusable = e(this.focusable.not(t).get()),
            this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {},
            i = e.Event(i),
            i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            a = i.originalEvent)
                for (n in a)
                    n in i || (i[n] = a[n]);
            return this.element.trigger(i, s),
            !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            o = !e.isEmptyObject(n),
            n.complete = a,
            n.delay && s.delay(n.delay),
            o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](),
                a && a.call(s[0]),
                i()
            })
        }
    }),
    e.widget;
    var u = !1;
    e(document).mouseup(function() {
        u = !1
    }),
    e.widget("ui.mouse", {
        version: "1.11.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!u) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(t),
                this._mouseDownEvent = t;
                var i = this
                  , s = 1 === t.which
                  , n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1,
                !this._mouseStarted) ? (t.preventDefault(),
                !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }
                ,
                this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }
                ,
                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                u = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button)
                    return this._mouseUp(t);
                if (!t.which)
                    return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            u = !1,
            !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
    function() {
        function t(e, t, i) {
            return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
        }
        function i(t, i) {
            return parseInt(e.css(t, i), 10) || 0
        }
        function s(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : e.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        e.ui = e.ui || {};
        var n, a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/, d = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, p = /%$/, f = e.fn.position;
        e.position = {
            scrollbarWidth: function() {
                if (void 0 !== n)
                    return n;
                var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), a = s.children()[0];
                return e("body").append(s),
                t = a.offsetWidth,
                s.css("overflow", "scroll"),
                i = a.offsetWidth,
                t === i && (i = s[0].clientWidth),
                s.remove(),
                n = t - i
            },
            getScrollInfo: function(t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
                  , s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
                  , n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth
                  , a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                return {
                    width: a ? e.position.scrollbarWidth() : 0,
                    height: n ? e.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var i = e(t || window)
                  , s = e.isWindow(i[0])
                  , n = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s || n ? i.width() : i.outerWidth(),
                    height: s || n ? i.height() : i.outerHeight()
                }
            }
        },
        e.fn.position = function(n) {
            if (!n || !n.of)
                return f.apply(this, arguments);
            n = e.extend({}, n);
            var p, m, g, v, y, b, _ = e(n.of), x = e.position.getWithinInfo(n.within), w = e.position.getScrollInfo(x), k = (n.collision || "flip").split(" "), T = {};
            return b = s(_),
            _[0].preventDefault && (n.at = "left top"),
            m = b.width,
            g = b.height,
            v = b.offset,
            y = e.extend({}, v),
            e.each(["my", "at"], function() {
                var e, t, i = (n[this] || "").split(" ");
                1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                i[0] = l.test(i[0]) ? i[0] : "center",
                i[1] = u.test(i[1]) ? i[1] : "center",
                e = d.exec(i[0]),
                t = d.exec(i[1]),
                T[this] = [e ? e[0] : 0, t ? t[0] : 0],
                n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
            }),
            1 === k.length && (k[1] = k[0]),
            "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2),
            "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2),
            p = t(T.at, m, g),
            y.left += p[0],
            y.top += p[1],
            this.each(function() {
                var s, l, u = e(this), d = u.outerWidth(), c = u.outerHeight(), f = i(this, "marginLeft"), b = i(this, "marginTop"), D = d + f + i(this, "marginRight") + w.width, S = c + b + i(this, "marginBottom") + w.height, N = e.extend({}, y), M = t(T.my, u.outerWidth(), u.outerHeight());
                "right" === n.my[0] ? N.left -= d : "center" === n.my[0] && (N.left -= d / 2),
                "bottom" === n.my[1] ? N.top -= c : "center" === n.my[1] && (N.top -= c / 2),
                N.left += M[0],
                N.top += M[1],
                a || (N.left = h(N.left),
                N.top = h(N.top)),
                s = {
                    marginLeft: f,
                    marginTop: b
                },
                e.each(["left", "top"], function(t, i) {
                    e.ui.position[k[t]] && e.ui.position[k[t]][i](N, {
                        targetWidth: m,
                        targetHeight: g,
                        elemWidth: d,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: D,
                        collisionHeight: S,
                        offset: [p[0] + M[0], p[1] + M[1]],
                        my: n.my,
                        at: n.at,
                        within: x,
                        elem: u
                    })
                }),
                n.using && (l = function(e) {
                    var t = v.left - N.left
                      , i = t + m - d
                      , s = v.top - N.top
                      , a = s + g - c
                      , h = {
                        target: {
                            element: _,
                            left: v.left,
                            top: v.top,
                            width: m,
                            height: g
                        },
                        element: {
                            element: u,
                            left: N.left,
                            top: N.top,
                            width: d,
                            height: c
                        },
                        horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                        vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    d > m && m > r(t + i) && (h.horizontal = "center"),
                    c > g && g > r(s + a) && (h.vertical = "middle"),
                    h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical",
                    n.using.call(this, e, h)
                }
                ),
                u.offset(e.extend(N, {
                    using: l
                }))
            })
        }
        ,
        e.ui.position = {
            fit: {
                left: function(e, t) {
                    var i, s = t.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = e.left - t.collisionPosition.marginLeft, h = n - r, l = r + t.collisionWidth - a - n;
                    t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n,
                    e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                },
                top: function(e, t) {
                    var i, s = t.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = t.within.height, r = e.top - t.collisionPosition.marginTop, h = n - r, l = r + t.collisionHeight - a - n;
                    t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n,
                    e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                }
            },
            flip: {
                left: function(e, t) {
                    var i, s, n = t.within, a = n.offset.left + n.scrollLeft, o = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = e.left - t.collisionPosition.marginLeft, u = l - h, d = l + t.collisionWidth - o - h, c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, f = -2 * t.offset[0];
                    0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a,
                    (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h,
                    (s > 0 || d > r(s)) && (e.left += c + p + f))
                },
                top: function(e, t) {
                    var i, s, n = t.within, a = n.offset.top + n.scrollTop, o = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = e.top - t.collisionPosition.marginTop, u = l - h, d = l + t.collisionHeight - o - h, c = "top" === t.my[1], p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, m = -2 * t.offset[1];
                    0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a,
                    e.top + p + f + m > u && (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h,
                    e.top + p + f + m > d && (i > 0 || d > r(i)) && (e.top += p + f + m))
                }
            },
            flipfit: {
                left: function() {
                    e.ui.position.flip.left.apply(this, arguments),
                    e.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    e.ui.position.flip.top.apply(this, arguments),
                    e.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var t, i, s, n, o, r = document.getElementsByTagName("body")[0], h = document.createElement("div");
            t = document.createElement(r ? "div" : "body"),
            s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            },
            r && e.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (o in s)
                t.style[o] = s[o];
            t.appendChild(h),
            i = r || document.documentElement,
            i.insertBefore(t, i.firstChild),
            h.style.cssText = "position: absolute; left: 10.7432222px;",
            n = e(h).offset().left,
            a = n > 10 && 11 > n,
            t.innerHTML = "",
            i.removeChild(t)
        }()
    }(),
    e.ui.position,
    e.widget("ui.menu", {
        version: "1.11.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }),
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
            this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item": function(t) {
                    var i = e(t.target);
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t),
                    t.isPropagationStopped() || (this.mouseHandled = !0),
                    i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    if (!this.previousFilter) {
                        var i = e(t.currentTarget);
                        i.siblings(".ui-state-active").removeClass("ui-state-active"),
                        this.focus(t, i)
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }),
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            var i, s, n, a, o = !0;
            switch (t.keyCode) {
            case e.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case e.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case e.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case e.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case e.ui.keyCode.UP:
                this.previous(t);
                break;
            case e.ui.keyCode.DOWN:
                this.next(t);
                break;
            case e.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case e.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case e.ui.keyCode.ENTER:
            case e.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case e.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                o = !1,
                s = this.previousFilter || "",
                n = String.fromCharCode(t.keyCode),
                a = !1,
                clearTimeout(this.filterTimer),
                n === s ? a = !0 : n = s + n,
                i = this._filterMenuItems(n),
                i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i,
                i.length || (n = String.fromCharCode(t.keyCode),
                i = this._filterMenuItems(n)),
                i.length ? (this.focus(t, i),
                this.previousFilter = n,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
            }
            o && t.preventDefault()
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, i, s = this, n = this.options.icons.submenu, a = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length),
            a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this)
                  , i = t.parent()
                  , s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(s),
                t.attr("aria-labelledby", i.attr("id"))
            }),
            t = a.add(this.element),
            i = t.find(this.options.items),
            i.not(".ui-menu-item").each(function() {
                var t = e(this);
                s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
            }),
            i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),
            "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t),
            this._super(e, t)
        },
        focus: function(e, t) {
            var i, s;
            this.blur(e, e && "focus" === e.type),
            this._scrollIntoView(t),
            this.active = t.first(),
            s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"),
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),
            e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            i = t.children(".ui-menu"),
            i.length && e && /^mouse/.test(e.type) && this._startOpening(i),
            this.activeMenu = t.parent(),
            this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0,
            s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0,
            n = t.offset().top - this.activeMenu.offset().top - i - s,
            a = this.activeMenu.scrollTop(),
            o = this.activeMenu.height(),
            r = t.outerHeight(),
            0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer),
            this.active && (this.active.removeClass("ui-state-focus"),
            this.active = null,
            this._trigger("blur", e, {
                item: this.active
            }))
        },
        _startOpening: function(e) {
            clearTimeout(this.timer),
            "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(e)
            }, this.delay))
        },
        _open: function(t) {
            var i = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element),
                this._close(s),
                this.blur(t),
                this.activeMenu = s
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element),
            e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(t) {
            return !e(t.target).closest(".ui-menu").length
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(),
            this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()),
            this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)),
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()),
            this.focus(i, s)
        },
        nextPage: function(t) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return i = e(this),
                0 > i.offset().top - s - n
            }),
            this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())),
            void 0) : (this.next(t),
            void 0)
        },
        previousPage: function(t) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return i = e(this),
                i.offset().top - s + n > 0
            }),
            this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())),
            void 0) : (this.next(t),
            void 0)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0),
            this._trigger("select", t, i)
        },
        _filterMenuItems: function(t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(e.trim(e(this).text()))
            })
        }
    }),
    e.widget("ui.autocomplete", {
        version: "1.11.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"),
            this.valueMethod = this.element[a || o ? "val" : "text"],
            this.isNewMenu = !0,
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        return t = !0,
                        s = !0,
                        i = !0,
                        void 0;
                    t = !1,
                    s = !1,
                    i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                    case a.PAGE_UP:
                        t = !0,
                        this._move("previousPage", n);
                        break;
                    case a.PAGE_DOWN:
                        t = !0,
                        this._move("nextPage", n);
                        break;
                    case a.UP:
                        t = !0,
                        this._keyEvent("previous", n);
                        break;
                    case a.DOWN:
                        t = !0,
                        this._keyEvent("next", n);
                        break;
                    case a.ENTER:
                        this.menu.active && (t = !0,
                        n.preventDefault(),
                        this.menu.select(n));
                        break;
                    case a.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case a.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                        this.close(n),
                        n.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (t)
                        return t = !1,
                        (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(),
                        void 0;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1,
                    e.preventDefault(),
                    void 0) : (this._searchTimeout(e),
                    void 0)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(e) {
                    return this.cancelBlur ? (delete this.cancelBlur,
                    void 0) : (clearTimeout(this.searching),
                    this.close(e),
                    this._change(e),
                    void 0)
                }
            }),
            this._initSource(),
            this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"),
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1,
                    t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(),
                    this.document.one("mousemove", function() {
                        e(t.target).trigger(t.originalEvent)
                    }),
                    void 0) : (n = i.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", t, {
                        item: n
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value),
                    s = i.item.attr("aria-label") || n.value,
                    s && e.trim(s).length && (this.liveRegion.children().hide(),
                    e("<div>").text(s).appendTo(this.liveRegion)),
                    void 0)
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item")
                      , s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                    this.previous = s,
                    this._delay(function() {
                        this.previous = s,
                        this.selectedItem = i
                    })),
                    !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = i
                }
            }),
            this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t),
            "source" === e && this._initSource(),
            "appendTo" === e && this.menu.element.appendTo(this._appendTo()),
            "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)),
            t && t[0] || (t = this.element.closest(".ui-front")),
            t.length || (t = this.document[0].body),
            t
        },
        _initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source,
            this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }
            ) : "string" == typeof this.options.source ? (i = this.options.source,
            this.source = function(t, n) {
                s.xhr && s.xhr.abort(),
                s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        n(e)
                    },
                    error: function() {
                        n([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                var t = this.term === this._value()
                  , i = this.menu.element.is(":visible")
                  , s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                (!t || t && !i && !s) && (this.selectedItem = null,
                this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(),
            this.term = this._value(),
            e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return e.proxy(function(e) {
                t === this.requestIndex && this.__response(e),
                this.pending--,
                this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)),
            this._trigger("response", null, {
                content: e
            }),
            !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e),
            this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0,
            this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(e.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return e("<li>").text(i.label).appendTo(t)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term),
            this.menu.blur(),
            void 0) : (this.menu[e](t),
            void 0) : (this.search(null, t),
            void 0)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t),
            t.preventDefault())
        }
    }),
    e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return s.test(e.label || e.value || e)
            })
        }
    }),
    e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var i;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults,
            this.liveRegion.children().hide(),
            e("<div>").text(i).appendTo(this.liveRegion))
        }
    }),
    e.ui.autocomplete,
    e.extend(e.ui, {
        datepicker: {
            version: "1.11.2"
        }
    });
    var d;
    e.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return r(this._defaults, e || {}),
            this
        },
        _attachDatepicker: function(t, i) {
            var s, n, a;
            s = t.nodeName.toLowerCase(),
            n = "div" === s || "span" === s,
            t.id || (this.uuid += 1,
            t.id = "dp" + this.uuid),
            a = this._newInst(e(t), n),
            a.settings = e.extend({}, i || {}),
            "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
        },
        _newInst: function(t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var s = e(t);
            i.append = e([]),
            i.trigger = e([]),
            s.hasClass(this.markerClassName) || (this._attachments(s, i),
            s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
            this._autoSize(i),
            e.data(t, "datepicker", i),
            i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var s, n, a, o = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(),
            o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"),
            t[r ? "before" : "after"](i.append)),
            t.unbind("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            s = this._get(i, "showOn"),
            ("focus" === s || "both" === s) && t.focus(this._showDatepicker),
            ("button" === s || "both" === s) && (n = this._get(i, "buttonText"),
            a = this._get(i, "buttonImage"),
            i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)),
            t[r ? "before" : "after"](i.trigger),
            i.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(),
                e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]),
                !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, n, a = new Date(2009,11,20), o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function(e) {
                    for (i = 0,
                    s = 0,
                    n = 0; e.length > n; n++)
                        e[n].length > i && (i = e[n].length,
                        s = n);
                    return s
                }
                ,
                a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())),
                e.input.attr("size", this._formatDate(e, a).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv),
            e.data(t, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(t),
            i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, s, n, a) {
            var o, h, l, u, d, c = this._dialogInst;
            return c || (this.uuid += 1,
            o = "dp" + this.uuid,
            this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.keydown(this._doKeyDown),
            e("body").append(this._dialogInput),
            c = this._dialogInst = this._newInst(this._dialogInput, !1),
            c.settings = {},
            e.data(this._dialogInput[0], "datepicker", c)),
            r(c.settings, n || {}),
            i = i && i.constructor === Date ? this._formatDate(c, i) : i,
            this._dialogInput.val(i),
            this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null,
            this._pos || (h = document.documentElement.clientWidth,
            l = document.documentElement.clientHeight,
            u = document.documentElement.scrollLeft || document.body.scrollLeft,
            d = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            c.settings.onSelect = s,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            e.blockUI && e.blockUI(this.dpDiv),
            e.data(this._dialogInput[0], "datepicker", c),
            this
        },
        _destroyDatepicker: function(t) {
            var i, s = e(t), n = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
            e.removeData(t, "datepicker"),
            "input" === i ? (n.append.remove(),
            n.trigger.remove(),
            s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var i, s, n = e(t), a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
            "input" === i ? (t.disabled = !1,
            a.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass),
            s.children().removeClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var i, s, n = e(t), a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
            "input" === i ? (t.disabled = !0,
            a.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass),
            s.children().addClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }),
            this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e)
                return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e)
                    return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, i, s) {
            var n, a, o, h, l = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {},
            "string" == typeof i && (n = {},
            n[i] = s),
            l && (this._curInst === l && this._hideDatepicker(),
            a = this._getDateDatepicker(t, !0),
            o = this._getMinMaxDate(l, "min"),
            h = this._getMinMaxDate(l, "max"),
            r(l.settings, n),
            null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)),
            null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)),
            "disabled"in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
            this._attachments(e(t), l),
            this._autoSize(l),
            this._setDate(l, a),
            this._updateAlternate(l),
            this._updateDatepicker(l)),
            void 0)
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i, s, n, a = e.datepicker._getInst(t.target), o = !0, r = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0,
            e.datepicker._datepickerShowing)
                switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(),
                    o = !1;
                    break;
                case 13:
                    return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv),
                    n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]),
                    i = e.datepicker._get(a, "onSelect"),
                    i ? (s = e.datepicker._formatDate(a),
                    i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
                    o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
                    o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"),
                    o = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"),
                    o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"),
                    o = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"),
                    o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
                }
            else
                36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(),
            t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, s, n = e.datepicker._getInst(t.target);
            return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")),
            s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode),
            t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal)
                try {
                    i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)),
                    i && (e.datepicker._setDateFromField(s),
                    e.datepicker._updateAlternate(s),
                    e.datepicker._updateDatepicker(s))
                } catch (n) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t,
            "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]),
            !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, n, a, o, h, l, u;
                i = e.datepicker._getInst(t),
                e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0),
                i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
                n = e.datepicker._get(i, "beforeShow"),
                a = n ? n.apply(t, [t, i]) : {},
                a !== !1 && (r(i.settings, a),
                i.lastVal = null,
                e.datepicker._lastInput = t,
                e.datepicker._setDateFromField(i),
                e.datepicker._inDialog && (t.value = ""),
                e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t),
                e.datepicker._pos[1] += t.offsetHeight),
                o = !1,
                e(t).parents().each(function() {
                    return o |= "fixed" === e(this).css("position"),
                    !o
                }),
                h = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                },
                e.datepicker._pos = null,
                i.dpDiv.empty(),
                i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }),
                e.datepicker._updateDatepicker(i),
                h = e.datepicker._checkOffset(i, h, o),
                i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }),
                i.inline || (l = e.datepicker._get(i, "showAnim"),
                u = e.datepicker._get(i, "duration"),
                i.dpDiv.css("z-index", s(e(t)) + 1),
                e.datepicker._datepickerShowing = !0,
                e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null),
                e.datepicker._shouldFocusInput(i) && i.input.focus(),
                e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4,
            d = t,
            t.dpDiv.empty().append(this._generateHTML(t)),
            this._attachHandlers(t);
            var i, s = this._getNumberOfMonths(t), n = s[1], a = 17, r = t.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)),
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"),
            t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(),
            t.yearshtml && (i = t.yearshtml,
            setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, i, s) {
            var n = t.dpDiv.outerWidth()
              , a = t.dpDiv.outerHeight()
              , o = t.input ? t.input.outerWidth() : 0
              , r = t.input ? t.input.outerHeight() : 0
              , h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft())
              , l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? n - o : 0,
            i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0,
            i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0),
            i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0),
            i
        },
        _findPos: function(t) {
            for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t)); )
                t = t[n ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var i, s, n, a, o = this._curInst;
            !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"),
            s = this._get(o, "duration"),
            n = function() {
                e.datepicker._tidyDialog(o)
            }
            ,
            e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n),
            i || n(),
            this._datepickerShowing = !1,
            a = this._get(o, "onClose"),
            a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            e.blockUI && (e.unblockUI(),
            e("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target)
                  , s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, s) {
            var n = e(t)
              , a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s),
            this._updateDatepicker(a))
        },
        _gotoToday: function(t) {
            var i, s = e(t), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay,
            n.drawMonth = n.selectedMonth = n.currentMonth,
            n.drawYear = n.selectedYear = n.currentYear) : (i = new Date,
            n.selectedDay = i.getDate(),
            n.drawMonth = n.selectedMonth = i.getMonth(),
            n.drawYear = n.selectedYear = i.getFullYear()),
            this._notifyChange(n),
            this._adjustDate(s)
        },
        _selectMonthYear: function(t, i, s) {
            var n = e(t)
              , a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(a),
            this._adjustDate(n)
        },
        _selectDay: function(t, i, s, n) {
            var a, o = e(t);
            e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]),
            a.selectedDay = a.currentDay = e("a", n).html(),
            a.selectedMonth = a.currentMonth = i,
            a.selectedYear = a.currentYear = s,
            this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var s, n = e(t), a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a),
            a.input && a.input.val(i),
            this._updateAlternate(a),
            s = this._get(a, "onSelect"),
            s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"),
            a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(),
            this._lastInput = a.input[0],
            "object" != typeof a.input[0] && a.input.focus(),
            this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, s, n, a = this._get(t, "altField");
            a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
            s = this._getDate(t),
            n = this.formatDate(i, s, this._getFormatConfig(t)),
            e(a).each(function() {
                e(this).val(n)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            t = i.getTime(),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, s) {
            if (null == t || null == i)
                throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "",
            "" === i)
                return null;
            var n, a, o, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, c = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, y = -1, b = !1, _ = function(e) {
                var i = t.length > n + 1 && t.charAt(n + 1) === e;
                return i && n++,
                i
            }, x = function(e) {
                var t = _(e)
                  , s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2
                  , n = "y" === e ? s : 1
                  , a = RegExp("^\\d{" + n + "," + s + "}")
                  , o = i.substring(h).match(a);
                if (!o)
                    throw "Missing number at position " + h;
                return h += o[0].length,
                parseInt(o[0], 10)
            }, w = function(t, s, n) {
                var a = -1
                  , o = e.map(_(t) ? n : s, function(e, t) {
                    return [[t, e]]
                }).sort(function(e, t) {
                    return -(e[1].length - t[1].length)
                });
                if (e.each(o, function(e, t) {
                    var s = t[1];
                    return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0],
                    h += s.length,
                    !1) : void 0
                }),
                -1 !== a)
                    return a + 1;
                throw "Unknown name at position " + h
            }, k = function() {
                if (i.charAt(h) !== t.charAt(n))
                    throw "Unexpected literal at position " + h;
                h++
            };
            for (n = 0; t.length > n; n++)
                if (b)
                    "'" !== t.charAt(n) || _("'") ? k() : b = !1;
                else
                    switch (t.charAt(n)) {
                    case "d":
                        v = x("d");
                        break;
                    case "D":
                        w("D", d, c);
                        break;
                    case "o":
                        y = x("o");
                        break;
                    case "m":
                        g = x("m");
                        break;
                    case "M":
                        g = w("M", p, f);
                        break;
                    case "y":
                        m = x("y");
                        break;
                    case "@":
                        r = new Date(x("@")),
                        m = r.getFullYear(),
                        g = r.getMonth() + 1,
                        v = r.getDate();
                        break;
                    case "!":
                        r = new Date((x("!") - this._ticksTo1970) / 1e4),
                        m = r.getFullYear(),
                        g = r.getMonth() + 1,
                        v = r.getDate();
                        break;
                    case "'":
                        _("'") ? k() : b = !0;
                        break;
                    default:
                        k()
                    }
            if (i.length > h && (o = i.substr(h),
            !/^\s+/.test(o)))
                throw "Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)),
            y > -1)
                for (g = 1,
                v = y; ; ) {
                    if (a = this._getDaysInMonth(m, g - 1),
                    a >= v)
                        break;
                    g++,
                    v -= a
                }
            if (r = this._daylightSavingAdjust(new Date(m,g - 1,v)),
            r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v)
                throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t)
                return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function(t) {
                var i = e.length > s + 1 && e.charAt(s + 1) === t;
                return i && s++,
                i
            }, l = function(e, t, i) {
                var s = "" + t;
                if (h(e))
                    for (; i > s.length; )
                        s = "0" + s;
                return s
            }, u = function(e, t, i, s) {
                return h(e) ? s[t] : i[t]
            }, d = "", c = !1;
            if (t)
                for (s = 0; e.length > s; s++)
                    if (c)
                        "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;
                    else
                        switch (e.charAt(s)) {
                        case "d":
                            d += l("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += u("D", t.getDay(), n, a);
                            break;
                        case "o":
                            d += l("o", Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime() - new Date(t.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += l("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += u("M", t.getMonth(), o, r);
                            break;
                        case "y":
                            d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? d += "'" : c = !0;
                            break;
                        default:
                            d += e.charAt(s)
                        }
            return d
        },
        _possibleChars: function(e) {
            var t, i = "", s = !1, n = function(i) {
                var s = e.length > t + 1 && e.charAt(t + 1) === i;
                return s && t++,
                s
            };
            for (t = 0; e.length > t; t++)
                if (s)
                    "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1;
                else
                    switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += e.charAt(t)
                    }
            return i
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat")
                  , s = e.lastVal = e.input ? e.input.val() : null
                  , n = this._getDefaultDate(e)
                  , a = n
                  , o = this._getFormatConfig(e);
                try {
                    a = this.parseDate(i, s, o) || n
                } catch (r) {
                    s = t ? "" : s
                }
                e.selectedDay = a.getDate(),
                e.drawMonth = e.selectedMonth = a.getMonth(),
                e.drawYear = e.selectedYear = a.getFullYear(),
                e.currentDay = s ? a.getDate() : 0,
                e.currentMonth = s ? a.getMonth() : 0,
                e.currentYear = s ? a.getFullYear() : 0,
                this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, s) {
            var n = function(e) {
                var t = new Date;
                return t.setDate(t.getDate() + e),
                t
            }
              , a = function(i) {
                try {
                    return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                } catch (s) {}
                for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l; ) {
                    switch (l[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(l[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += 7 * parseInt(l[1], 10);
                        break;
                    case "m":
                    case "M":
                        o += parseInt(l[1], 10),
                        r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
                        break;
                    case "y":
                    case "Y":
                        a += parseInt(l[1], 10),
                        r = Math.min(r, e.datepicker._getDaysInMonth(a, o))
                    }
                    l = h.exec(i)
                }
                return new Date(a,o,r)
            }
              , o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return o = o && "Invalid Date" == "" + o ? s : o,
            o && (o.setHours(0),
            o.setMinutes(0),
            o.setSeconds(0),
            o.setMilliseconds(0)),
            this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0),
            e) : null
        },
        _setDate: function(e, t, i) {
            var s = !t
              , n = e.selectedMonth
              , a = e.selectedYear
              , o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(),
            e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(),
            e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(),
            n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e),
            this._adjustInstDate(e),
            e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths")
              , s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(s, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(s, this, "Y"),
                        !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, N, M, C, P, A, I, z, H, F, E, W, L, O, j = new Date, R = this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())), Y = this._get(e, "isRTL"), J = this._get(e, "showButtonPanel"), B = this._get(e, "hideIfNoPrevNext"), K = this._get(e, "navigationAsDateFormat"), V = this._getNumberOfMonths(e), U = this._get(e, "showCurrentAtPos"), q = this._get(e, "stepMonths"), G = 1 !== V[0] || 1 !== V[1], X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear,e.currentMonth,e.currentDay) : new Date(9999,9,9)), Q = this._getMinMaxDate(e, "min"), $ = this._getMinMaxDate(e, "max"), Z = e.drawMonth - U, et = e.drawYear;
            if (0 > Z && (Z += 12,
            et--),
            $)
                for (t = this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth() - V[0] * V[1] + 1,$.getDate())),
                t = Q && Q > t ? Q : t; this._daylightSavingAdjust(new Date(et,Z,1)) > t; )
                    Z--,
                    0 > Z && (Z = 11,
                    et--);
            for (e.drawMonth = Z,
            e.drawYear = et,
            i = this._get(e, "prevText"),
            i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(et,Z - q,1)), this._getFormatConfig(e)) : i,
            s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>",
            n = this._get(e, "nextText"),
            n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(et,Z + q,1)), this._getFormatConfig(e)) : n,
            a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>",
            o = this._get(e, "currentText"),
            r = this._get(e, "gotoCurrent") && e.currentDay ? X : R,
            o = K ? this.formatDate(o, r, this._getFormatConfig(e)) : o,
            h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>",
            l = J ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "",
            u = parseInt(this._get(e, "firstDay"), 10),
            u = isNaN(u) ? 0 : u,
            d = this._get(e, "showWeek"),
            c = this._get(e, "dayNames"),
            p = this._get(e, "dayNamesMin"),
            f = this._get(e, "monthNames"),
            m = this._get(e, "monthNamesShort"),
            g = this._get(e, "beforeShowDay"),
            v = this._get(e, "showOtherMonths"),
            y = this._get(e, "selectOtherMonths"),
            b = this._getDefaultDate(e),
            _ = "",
            w = 0; V[0] > w; w++) {
                for (k = "",
                this.maxRows = 4,
                T = 0; V[1] > T; T++) {
                    if (D = this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),
                    S = " ui-corner-all",
                    N = "",
                    G) {
                        if (N += "<div class='ui-datepicker-group",
                        V[1] > 1)
                            switch (T) {
                            case 0:
                                N += " ui-datepicker-group-first",
                                S = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case V[1] - 1:
                                N += " ui-datepicker-group-last",
                                S = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                N += " ui-datepicker-group-middle",
                                S = ""
                            }
                        N += "'>"
                    }
                    for (N += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, Q, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>",
                    M = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "",
                    x = 0; 7 > x; x++)
                        C = (x + u) % 7,
                        M += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
                    for (N += M + "</tr></thead><tbody>",
                    P = this._getDaysInMonth(et, Z),
                    et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, P)),
                    A = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7,
                    I = Math.ceil((A + P) / 7),
                    z = G ? this.maxRows > I ? this.maxRows : I : I,
                    this.maxRows = z,
                    H = this._daylightSavingAdjust(new Date(et,Z,1 - A)),
                    F = 0; z > F; F++) {
                        for (N += "<tr>",
                        E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(H) + "</td>" : "",
                        x = 0; 7 > x; x++)
                            W = g ? g.apply(e.input ? e.input[0] : null, [H]) : [!0, ""],
                            L = H.getMonth() !== Z,
                            O = L && !y || !W[0] || Q && Q > H || $ && H > $,
                            E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (H.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === H.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (O ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !v ? "" : " " + W[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (O ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (L && !v ? "&#xa0;" : O ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>",
                            H.setDate(H.getDate() + 1),
                            H = this._daylightSavingAdjust(H);
                        N += E + "</tr>"
                    }
                    Z++,
                    Z > 11 && (Z = 0,
                    et++),
                    N += "</tbody></table>" + (G ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
                    k += N
                }
                _ += k
            }
            return _ += l,
            e._keyEvent = !1,
            _
        },
        _generateMonthYearHeader: function(e, t, i, s, n, a, o, r) {
            var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"), v = this._get(e, "changeYear"), y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = "";
            if (a || !g)
                _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
            else {
                for (h = s && s.getFullYear() === i,
                l = n && n.getFullYear() === i,
                _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                u = 0; 12 > u; u++)
                    (!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")),
            !e.yearshtml)
                if (e.yearshtml = "",
                a || !v)
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"),
                    c = (new Date).getFullYear(),
                    p = function(e) {
                        var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
                        return isNaN(t) ? c : t
                    }
                    ,
                    f = p(d[0]),
                    m = Math.max(f, p(d[1] || "")),
                    f = s ? Math.max(f, s.getFullYear()) : f,
                    m = n ? Math.min(m, n.getFullYear()) : m,
                    e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++)
                        e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>",
                    b += e.yearshtml,
                    e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"),
            y && (b += (!a && g && v ? "" : "&#xa0;") + _),
            b += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0)
              , n = e.drawMonth + ("M" === i ? t : 0)
              , a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0)
              , o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s,n,a)));
            e.selectedDay = o.getDate(),
            e.drawMonth = e.selectedMonth = o.getMonth(),
            e.drawYear = e.selectedYear = o.getFullYear(),
            ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min")
              , s = this._getMinMaxDate(e, "max")
              , n = i && i > t ? i : t;
            return s && n > s ? s : n
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e,t,32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e,t,1).getDay()
        },
        _canAdjustMonth: function(e, t, i, s) {
            var n = this._getNumberOfMonths(e)
              , a = this._daylightSavingAdjust(new Date(i,s + (0 > t ? t : n[0] * n[1]),1));
            return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())),
            this._isInRange(e, a)
        },
        _isInRange: function(e, t) {
            var i, s, n = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), o = null, r = null, h = this._get(e, "yearRange");
            return h && (i = h.split(":"),
            s = (new Date).getFullYear(),
            o = parseInt(i[0], 10),
            r = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (o += s),
            i[1].match(/[+\-].*/) && (r += s)),
            (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, i, s) {
            t || (e.currentDay = e.selectedDay,
            e.currentMonth = e.selectedMonth,
            e.currentYear = e.selectedYear);
            var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s,i,t)) : this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
        }
    }),
    e.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick),
        e.datepicker.initialized = !0),
        0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }
    ,
    e.datepicker = new n,
    e.datepicker.initialized = !1,
    e.datepicker.uuid = (new Date).getTime(),
    e.datepicker.version = "1.11.2",
    e.datepicker;
    var c = "ui-effects-"
      , p = e;
    e.effects = {
        effect: {}
    },
    function(e, t) {
        function i(e, t, i) {
            var s = d[t.type] || {};
            return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e),
            isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
        }
        function s(i) {
            var s = l()
              , n = s._rgba = [];
            return i = i.toLowerCase(),
            f(h, function(e, a) {
                var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba";
                return h ? (o = s[l](h),
                s[u[l].cache] = o[u[l].cache],
                n = s._rgba = o._rgba,
                !1) : t
            }),
            n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent),
            s) : a[i]
        }
        function n(e, t, i) {
            return i = (i + 1) % 1,
            1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
        }
        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], l = e.Color = function(t, i, s, n) {
            return new e.Color.fn.parse(t,i,s,n)
        }
        , u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, d = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, c = l.support = {}, p = e("<p>")[0], f = e.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)",
        c.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
        f(u, function(e, t) {
            t.cache = "_" + e,
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        l.fn = e.extend(l.prototype, {
            parse: function(n, o, r, h) {
                if (n === t)
                    return this._rgba = [null, null, null, null],
                    this;
                (n.jquery || n.nodeType) && (n = e(n).css(o),
                o = t);
                var d = this
                  , c = e.type(n)
                  , p = this._rgba = [];
                return o !== t && (n = [n, o, r, h],
                c = "array"),
                "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function(e, t) {
                    p[t.idx] = i(n[t.idx], t)
                }),
                this) : "object" === c ? (n instanceof l ? f(u, function(e, t) {
                    n[t.cache] && (d[t.cache] = n[t.cache].slice())
                }) : f(u, function(t, s) {
                    var a = s.cache;
                    f(s.props, function(e, t) {
                        if (!d[a] && s.to) {
                            if ("alpha" === e || null == n[e])
                                return;
                            d[a] = s.to(d._rgba)
                        }
                        d[a][t.idx] = i(n[e], t, !0)
                    }),
                    d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1,
                    s.from && (d._rgba = s.from(d[a])))
                }),
                this) : t
            },
            is: function(e) {
                var i = l(e)
                  , s = !0
                  , n = this;
                return f(u, function(e, a) {
                    var o, r = i[a.cache];
                    return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [],
                    f(a.props, function(e, i) {
                        return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                    })),
                    s
                }),
                s
            },
            _space: function() {
                var e = []
                  , t = this;
                return f(u, function(i, s) {
                    t[s.cache] && e.push(i)
                }),
                e.pop()
            },
            transition: function(e, t) {
                var s = l(e)
                  , n = s._space()
                  , a = u[n]
                  , o = 0 === this.alpha() ? l("transparent") : this
                  , r = o[a.cache] || a.to(o._rgba)
                  , h = r.slice();
                return s = s[a.cache],
                f(a.props, function(e, n) {
                    var a = n.idx
                      , o = r[a]
                      , l = s[a]
                      , u = d[n.type] || {};
                    null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)),
                    h[a] = i((l - o) * t + o, n)))
                }),
                this[n](h)
            },
            blend: function(t) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice()
                  , s = i.pop()
                  , n = l(t)._rgba;
                return l(e.map(i, function(e, t) {
                    return (1 - s) * n[t] + s * e
                }))
            },
            toRgbaString: function() {
                var t = "rgba("
                  , i = e.map(this._rgba, function(e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
                return 1 === i[3] && (i.pop(),
                t = "rgb("),
                t + i.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla("
                  , i = e.map(this.hsla(), function(e, t) {
                    return null == e && (e = t > 2 ? 1 : 0),
                    t && 3 > t && (e = Math.round(100 * e) + "%"),
                    e
                });
                return 1 === i[3] && (i.pop(),
                t = "hsl("),
                t + i.join() + ")"
            },
            toHexString: function(t) {
                var i = this._rgba.slice()
                  , s = i.pop();
                return t && i.push(~~(255 * s)),
                "#" + e.map(i, function(e) {
                    return e = (e || 0).toString(16),
                    1 === e.length ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        l.fn.parse.prototype = l.fn,
        u.hsla.to = function(e) {
            if (null == e[0] || null == e[1] || null == e[2])
                return [null, null, null, e[3]];
            var t, i, s = e[0] / 255, n = e[1] / 255, a = e[2] / 255, o = e[3], r = Math.max(s, n, a), h = Math.min(s, n, a), l = r - h, u = r + h, d = .5 * u;
            return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240,
            i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u),
            [Math.round(t) % 360, i, d, null == o ? 1 : o]
        }
        ,
        u.hsla.from = function(e) {
            if (null == e[0] || null == e[1] || null == e[2])
                return [null, null, null, e[3]];
            var t = e[0] / 360
              , i = e[1]
              , s = e[2]
              , a = e[3]
              , o = .5 >= s ? s * (1 + i) : s + i - s * i
              , r = 2 * s - o;
            return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
        }
        ,
        f(u, function(s, n) {
            var a = n.props
              , o = n.cache
              , h = n.to
              , u = n.from;
            l.fn[s] = function(s) {
                if (h && !this[o] && (this[o] = h(this._rgba)),
                s === t)
                    return this[o].slice();
                var n, r = e.type(s), d = "array" === r || "object" === r ? s : arguments, c = this[o].slice();
                return f(a, function(e, t) {
                    var s = d["object" === r ? e : t.idx];
                    null == s && (s = c[t.idx]),
                    c[t.idx] = i(s, t)
                }),
                u ? (n = l(u(c)),
                n[o] = c,
                n) : l(c)
            }
            ,
            f(a, function(t, i) {
                l.fn[t] || (l.fn[t] = function(n) {
                    var a, o = e.type(n), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), u = l[i.idx];
                    return "undefined" === o ? u : ("function" === o && (n = n.call(this, u),
                    o = e.type(n)),
                    null == n && i.empty ? this : ("string" === o && (a = r.exec(n),
                    a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))),
                    l[i.idx] = n,
                    this[h](l)))
                }
                )
            })
        }),
        l.hook = function(t) {
            var i = t.split(" ");
            f(i, function(t, i) {
                e.cssHooks[i] = {
                    set: function(t, n) {
                        var a, o, r = "";
                        if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                            if (n = l(a || n),
                            !c.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? t.parentNode : t; ("" === r || "transparent" === r) && o && o.style; )
                                    try {
                                        r = e.css(o, "backgroundColor"),
                                        o = o.parentNode
                                    } catch (h) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            t.style[i] = n
                        } catch (h) {}
                    }
                },
                e.fx.step[i] = function(t) {
                    t.colorInit || (t.start = l(t.elem, i),
                    t.end = l(t.end),
                    t.colorInit = !0),
                    e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }
        ,
        l.hook(o),
        e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                    t["border" + s + "Color"] = e
                }),
                t
            }
        },
        a = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(p),
    function() {
        function t(t) {
            var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])
                for (s = n.length; s--; )
                    i = n[s],
                    "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
            else
                for (i in n)
                    "string" == typeof n[i] && (a[i] = n[i]);
            return a
        }
        function i(t, i) {
            var s, a, o = {};
            for (s in i)
                a = i[s],
                t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a));
            return o
        }
        var s = ["add", "remove", "toggle"]
          , n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
            e.fx.step[i] = function(e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (p.style(e.elem, i, e.end),
                e.setAttr = !0)
            }
        }),
        e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
        ),
        e.effects.animateClass = function(n, a, o, r) {
            var h = e.speed(a, o, r);
            return this.queue(function() {
                var a, o = e(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o;
                l = l.map(function() {
                    var i = e(this);
                    return {
                        el: i,
                        start: t(this)
                    }
                }),
                a = function() {
                    e.each(s, function(e, t) {
                        n[t] && o[t + "Class"](n[t])
                    })
                }
                ,
                a(),
                l = l.map(function() {
                    return this.end = t(this.el[0]),
                    this.diff = i(this.start, this.end),
                    this
                }),
                o.attr("class", r),
                l = l.map(function() {
                    var t = this
                      , i = e.Deferred()
                      , s = e.extend({}, h, {
                        queue: !1,
                        complete: function() {
                            i.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, s),
                    i.promise()
                }),
                e.when.apply(e, l.get()).done(function() {
                    a(),
                    e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "")
                        })
                    }),
                    h.complete.call(o[0])
                })
            })
        }
        ,
        e.fn.extend({
            addClass: function(t) {
                return function(i, s, n, a) {
                    return s ? e.effects.animateClass.call(this, {
                        add: i
                    }, s, n, a) : t.apply(this, arguments)
                }
            }(e.fn.addClass),
            removeClass: function(t) {
                return function(i, s, n, a) {
                    return arguments.length > 1 ? e.effects.animateClass.call(this, {
                        remove: i
                    }, s, n, a) : t.apply(this, arguments)
                }
            }(e.fn.removeClass),
            toggleClass: function(t) {
                return function(i, s, n, a, o) {
                    return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {
                        add: i
                    } : {
                        remove: i
                    }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                        toggle: i
                    }, s, n, a)
                }
            }(e.fn.toggleClass),
            switchClass: function(t, i, s, n, a) {
                return e.effects.animateClass.call(this, {
                    add: i,
                    remove: t
                }, s, n, a)
            }
        })
    }(),
    function() {
        function t(t, i, s, n) {
            return e.isPlainObject(t) && (i = t,
            t = t.effect),
            t = {
                effect: t
            },
            null == i && (i = {}),
            e.isFunction(i) && (n = i,
            s = null,
            i = {}),
            ("number" == typeof i || e.fx.speeds[i]) && (n = s,
            s = i,
            i = {}),
            e.isFunction(s) && (n = s,
            s = null),
            i && e.extend(t, i),
            s = s || i.duration,
            t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default,
            t.complete = n || i.complete,
            t
        }
        function i(t) {
            return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
        }
        e.extend(e.effects, {
            version: "1.11.2",
            save: function(e, t) {
                for (var i = 0; t.length > i; i++)
                    null !== t[i] && e.data(c + t[i], e[0].style[t[i]])
            },
            restore: function(e, t) {
                var i, s;
                for (s = 0; t.length > s; s++)
                    null !== t[s] && (i = e.data(c + t[s]),
                    void 0 === i && (i = ""),
                    e.css(t[s], i))
            },
            setMode: function(e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"),
                t
            },
            getBaseline: function(e, t) {
                var i, s;
                switch (e[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = e[0] / t.height
                }
                switch (e[1]) {
                case "left":
                    s = 0;
                    break;
                case "center":
                    s = .5;
                    break;
                case "right":
                    s = 1;
                    break;
                default:
                    s = e[1] / t.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var i = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }
                  , s = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , n = {
                    width: t.width(),
                    height: t.height()
                }
                  , a = document.activeElement;
                try {
                    a.id
                } catch (o) {
                    a = document.body
                }
                return t.wrap(s),
                (t[0] === a || e.contains(t[0], a)) && e(a).focus(),
                s = t.parent(),
                "static" === t.css("position") ? (s.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                e.each(["top", "left", "bottom", "right"], function(e, s) {
                    i[s] = t.css(s),
                    isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(n),
                s.css(i).show()
            },
            removeWrapper: function(t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === i || e.contains(t[0], i)) && e(i).focus()),
                t
            },
            setTransition: function(t, i, s, n) {
                return n = n || {},
                e.each(i, function(e, i) {
                    var a = t.cssUnit(i);
                    a[0] > 0 && (n[i] = a[0] * s + a[1])
                }),
                n
            }
        }),
        e.fn.extend({
            effect: function() {
                function i(t) {
                    function i() {
                        e.isFunction(a) && a.call(n[0]),
                        e.isFunction(t) && t()
                    }
                    var n = e(this)
                      , a = s.complete
                      , r = s.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](),
                    i()) : o.call(n[0], s, i)
                }
                var s = t.apply(this, arguments)
                  , n = s.mode
                  , a = s.queue
                  , o = e.effects.effect[s.effect];
                return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function() {
                    s.complete && s.complete.call(this)
                }) : a === !1 ? this.each(i) : this.queue(a || "fx", i)
            },
            show: function(e) {
                return function(s) {
                    if (i(s))
                        return e.apply(this, arguments);
                    var n = t.apply(this, arguments);
                    return n.mode = "show",
                    this.effect.call(this, n)
                }
            }(e.fn.show),
            hide: function(e) {
                return function(s) {
                    if (i(s))
                        return e.apply(this, arguments);
                    var n = t.apply(this, arguments);
                    return n.mode = "hide",
                    this.effect.call(this, n)
                }
            }(e.fn.hide),
            toggle: function(e) {
                return function(s) {
                    if (i(s) || "boolean" == typeof s)
                        return e.apply(this, arguments);
                    var n = t.apply(this, arguments);
                    return n.mode = "toggle",
                    this.effect.call(this, n)
                }
            }(e.fn.toggle),
            cssUnit: function(t) {
                var i = this.css(t)
                  , s = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                }),
                s
            }
        })
    }(),
    function() {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
            t[i] = function(t) {
                return Math.pow(t, e + 2)
            }
        }),
        e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }),
        e.each(t, function(t, i) {
            e.easing["easeIn" + t] = i,
            e.easing["easeOut" + t] = function(e) {
                return 1 - i(1 - e)
            }
            ,
            e.easing["easeInOut" + t] = function(e) {
                return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
            }
        })
    }(),
    e.effects,
    e.effects.effect.blind = function(t, i) {
        var s, n, a, o = e(this), r = /up|down|vertical/, h = /up|left|vertical|horizontal/, l = ["position", "top", "bottom", "left", "right", "height", "width"], u = e.effects.setMode(o, t.mode || "hide"), d = t.direction || "up", c = r.test(d), p = c ? "height" : "width", f = c ? "top" : "left", m = h.test(d), g = {}, v = "show" === u;
        o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l),
        o.show(),
        s = e.effects.createWrapper(o).css({
            overflow: "hidden"
        }),
        n = s[p](),
        a = parseFloat(s.css(f)) || 0,
        g[p] = v ? n : 0,
        m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
            position: "absolute"
        }),
        g[f] = v ? a : n + a),
        v && (s.css(p, 0),
        m || s.css(f, a + n)),
        s.animate(g, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function() {
                "hide" === u && o.hide(),
                e.effects.restore(o, l),
                e.effects.removeWrapper(o),
                i()
            }
        })
    }
    ,
    e.effects.effect.bounce = function(t, i) {
        var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = e.effects.setMode(o, t.mode || "effect"), l = "hide" === h, u = "show" === h, d = t.direction || "up", c = t.distance, p = t.times || 5, f = 2 * p + (u || l ? 1 : 0), m = t.duration / f, g = t.easing, v = "up" === d || "down" === d ? "top" : "left", y = "up" === d || "left" === d, b = o.queue(), _ = b.length;
        for ((u || l) && r.push("opacity"),
        e.effects.save(o, r),
        o.show(),
        e.effects.createWrapper(o),
        c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3),
        u && (a = {
            opacity: 1
        },
        a[v] = 0,
        o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)),
        l && (c /= Math.pow(2, p - 1)),
        a = {},
        a[v] = 0,
        s = 0; p > s; s++)
            n = {},
            n[v] = (y ? "-=" : "+=") + c,
            o.animate(n, m, g).animate(a, m, g),
            c = l ? 2 * c : c / 2;
        l && (n = {
            opacity: 0
        },
        n[v] = (y ? "-=" : "+=") + c,
        o.animate(n, m, g)),
        o.queue(function() {
            l && o.hide(),
            e.effects.restore(o, r),
            e.effects.removeWrapper(o),
            i()
        }),
        _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))),
        o.dequeue()
    }
    ,
    e.effects.effect.clip = function(t, i) {
        var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = e.effects.setMode(o, t.mode || "hide"), l = "show" === h, u = t.direction || "vertical", d = "vertical" === u, c = d ? "height" : "width", p = d ? "top" : "left", f = {};
        e.effects.save(o, r),
        o.show(),
        s = e.effects.createWrapper(o).css({
            overflow: "hidden"
        }),
        n = "IMG" === o[0].tagName ? s : o,
        a = n[c](),
        l && (n.css(c, 0),
        n.css(p, a / 2)),
        f[c] = l ? a : 0,
        f[p] = l ? 0 : a / 2,
        n.animate(f, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                l || o.hide(),
                e.effects.restore(o, r),
                e.effects.removeWrapper(o),
                i()
            }
        })
    }
    ,
    e.effects.effect.drop = function(t, i) {
        var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = e.effects.setMode(n, t.mode || "hide"), r = "show" === o, h = t.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h ? "pos" : "neg", d = {
            opacity: r ? 1 : 0
        };
        e.effects.save(n, a),
        n.show(),
        e.effects.createWrapper(n),
        s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2,
        r && n.css("opacity", 0).css(l, "pos" === u ? -s : s),
        d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s,
        n.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === o && n.hide(),
                e.effects.restore(n, a),
                e.effects.removeWrapper(n),
                i()
            }
        })
    }
    ,
    e.effects.effect.explode = function(t, i) {
        function s() {
            b.push(this),
            b.length === d * c && n()
        }
        function n() {
            p.css({
                visibility: "visible"
            }),
            e(b).remove(),
            m || p.hide(),
            i()
        }
        var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = d, p = e(this), f = e.effects.setMode(p, t.mode || "hide"), m = "show" === f, g = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / c), y = Math.ceil(p.outerHeight() / d), b = [];
        for (a = 0; d > a; a++)
            for (h = g.top + a * y,
            u = a - (d - 1) / 2,
            o = 0; c > o; o++)
                r = g.left + o * v,
                l = o - (c - 1) / 2,
                p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * v,
                    top: -a * y
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: y,
                    left: r + (m ? l * v : 0),
                    top: h + (m ? u * y : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: r + (m ? 0 : l * v),
                    top: h + (m ? 0 : u * y),
                    opacity: m ? 1 : 0
                }, t.duration || 500, t.easing, s)
    }
    ,
    e.effects.effect.fade = function(t, i) {
        var s = e(this)
          , n = e.effects.setMode(s, t.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
    ,
    e.effects.effect.fold = function(t, i) {
        var s, n, a = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = e.effects.setMode(a, t.mode || "hide"), h = "show" === r, l = "hide" === r, u = t.size || 15, d = /([0-9]+)%/.exec(u), c = !!t.horizFirst, p = h !== c, f = p ? ["width", "height"] : ["height", "width"], m = t.duration / 2, g = {}, v = {};
        e.effects.save(a, o),
        a.show(),
        s = e.effects.createWrapper(a).css({
            overflow: "hidden"
        }),
        n = p ? [s.width(), s.height()] : [s.height(), s.width()],
        d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]),
        h && s.css(c ? {
            height: 0,
            width: u
        } : {
            height: u,
            width: 0
        }),
        g[f[0]] = h ? n[0] : u,
        v[f[1]] = h ? n[1] : 0,
        s.animate(g, m, t.easing).animate(v, m, t.easing, function() {
            l && a.hide(),
            e.effects.restore(a, o),
            e.effects.removeWrapper(a),
            i()
        })
    }
    ,
    e.effects.effect.highlight = function(t, i) {
        var s = e(this)
          , n = ["backgroundImage", "backgroundColor", "opacity"]
          , a = e.effects.setMode(s, t.mode || "show")
          , o = {
            backgroundColor: s.css("backgroundColor")
        };
        "hide" === a && (o.opacity = 0),
        e.effects.save(s, n),
        s.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === a && s.hide(),
                e.effects.restore(s, n),
                i()
            }
        })
    }
    ,
    e.effects.effect.size = function(t, i) {
        var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], u = ["fontSize"], d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = e.effects.setMode(o, t.mode || "effect"), f = t.restore || "effect" !== p, m = t.scale || "both", g = t.origin || ["middle", "center"], v = o.css("position"), y = f ? r : h, b = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === p && o.show(),
        s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        },
        "toggle" === t.mode && "show" === p ? (o.from = t.to || b,
        o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s),
        o.to = t.to || ("hide" === p ? b : s)),
        a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            },
            to: {
                y: o.to.height / s.height,
                x: o.to.width / s.width
            }
        },
        ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d),
        o.from = e.effects.setTransition(o, d, a.from.y, o.from),
        o.to = e.effects.setTransition(o, d, a.to.y, o.to)),
        a.from.x !== a.to.x && (y = y.concat(c),
        o.from = e.effects.setTransition(o, c, a.from.x, o.from),
        o.to = e.effects.setTransition(o, c, a.to.x, o.to))),
        ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l),
        o.from = e.effects.setTransition(o, u, a.from.y, o.from),
        o.to = e.effects.setTransition(o, u, a.to.y, o.to)),
        e.effects.save(o, y),
        o.show(),
        e.effects.createWrapper(o),
        o.css("overflow", "hidden").css(o.from),
        g && (n = e.effects.getBaseline(g, s),
        o.from.top = (s.outerHeight - o.outerHeight()) * n.y,
        o.from.left = (s.outerWidth - o.outerWidth()) * n.x,
        o.to.top = (s.outerHeight - o.to.outerHeight) * n.y,
        o.to.left = (s.outerWidth - o.to.outerWidth) * n.x),
        o.css(o.from),
        ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u),
        c = c.concat(["marginLeft", "marginRight"]),
        l = r.concat(d).concat(c),
        o.find("*[width]").each(function() {
            var i = e(this)
              , s = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
            f && e.effects.save(i, l),
            i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            },
            i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            },
            a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from),
            i.to = e.effects.setTransition(i, d, a.to.y, i.to)),
            a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from),
            i.to = e.effects.setTransition(i, c, a.to.x, i.to)),
            i.css(i.from),
            i.animate(i.to, t.duration, t.easing, function() {
                f && e.effects.restore(i, l)
            })
        })),
        o.animate(o.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                0 === o.to.opacity && o.css("opacity", o.from.opacity),
                "hide" === p && o.hide(),
                e.effects.restore(o, y),
                f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : e.each(["top", "left"], function(e, t) {
                    o.css(t, function(t, i) {
                        var s = parseInt(i, 10)
                          , n = e ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })),
                e.effects.removeWrapper(o),
                i()
            }
        })
    }
    ,
    e.effects.effect.scale = function(t, i) {
        var s = e(this)
          , n = e.extend(!0, {}, t)
          , a = e.effects.setMode(s, t.mode || "effect")
          , o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100)
          , r = t.direction || "both"
          , h = t.origin
          , l = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        }
          , u = {
            y: "horizontal" !== r ? o / 100 : 1,
            x: "vertical" !== r ? o / 100 : 1
        };
        n.effect = "size",
        n.queue = !1,
        n.complete = i,
        "effect" !== a && (n.origin = h || ["middle", "center"],
        n.restore = !0),
        n.from = t.from || ("show" === a ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : l),
        n.to = {
            height: l.height * u.y,
            width: l.width * u.x,
            outerHeight: l.outerHeight * u.y,
            outerWidth: l.outerWidth * u.x
        },
        n.fade && ("show" === a && (n.from.opacity = 0,
        n.to.opacity = 1),
        "hide" === a && (n.from.opacity = 1,
        n.to.opacity = 0)),
        s.effect(n)
    }
    ,
    e.effects.effect.puff = function(t, i) {
        var s = e(this)
          , n = e.effects.setMode(s, t.mode || "hide")
          , a = "hide" === n
          , o = parseInt(t.percent, 10) || 150
          , r = o / 100
          , h = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        };
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? h : {
                height: h.height * r,
                width: h.width * r,
                outerHeight: h.outerHeight * r,
                outerWidth: h.outerWidth * r
            }
        }),
        s.effect(t)
    }
    ,
    e.effects.effect.pulsate = function(t, i) {
        var s, n = e(this), a = e.effects.setMode(n, t.mode || "show"), o = "show" === a, r = "hide" === a, h = o || "hide" === a, l = 2 * (t.times || 5) + (h ? 1 : 0), u = t.duration / l, d = 0, c = n.queue(), p = c.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(),
        d = 1),
        s = 1; l > s; s++)
            n.animate({
                opacity: d
            }, u, t.easing),
            d = 1 - d;
        n.animate({
            opacity: d
        }, u, t.easing),
        n.queue(function() {
            r && n.hide(),
            i()
        }),
        p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))),
        n.dequeue()
    }
    ,
    e.effects.effect.shake = function(t, i) {
        var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = e.effects.setMode(n, t.mode || "effect"), r = t.direction || "left", h = t.distance || 20, l = t.times || 3, u = 2 * l + 1, d = Math.round(t.duration / u), c = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, m = {}, g = {}, v = n.queue(), y = v.length;
        for (e.effects.save(n, a),
        n.show(),
        e.effects.createWrapper(n),
        f[c] = (p ? "-=" : "+=") + h,
        m[c] = (p ? "+=" : "-=") + 2 * h,
        g[c] = (p ? "-=" : "+=") + 2 * h,
        n.animate(f, d, t.easing),
        s = 1; l > s; s++)
            n.animate(m, d, t.easing).animate(g, d, t.easing);
        n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function() {
            "hide" === o && n.hide(),
            e.effects.restore(n, a),
            e.effects.removeWrapper(n),
            i()
        }),
        y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))),
        n.dequeue()
    }
    ,
    e.effects.effect.slide = function(t, i) {
        var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = e.effects.setMode(n, t.mode || "show"), r = "show" === o, h = t.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h, d = {};
        e.effects.save(n, a),
        n.show(),
        s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0),
        e.effects.createWrapper(n).css({
            overflow: "hidden"
        }),
        r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s),
        d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s,
        n.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === o && n.hide(),
                e.effects.restore(n, a),
                e.effects.removeWrapper(n),
                i()
            }
        })
    }
    ,
    e.effects.effect.transfer = function(t, i) {
        var s = e(this)
          , n = e(t.to)
          , a = "fixed" === n.css("position")
          , o = e("body")
          , r = a ? o.scrollTop() : 0
          , h = a ? o.scrollLeft() : 0
          , l = n.offset()
          , u = {
            top: l.top - r,
            left: l.left - h,
            height: n.innerHeight(),
            width: n.innerWidth()
        }
          , d = s.offset()
          , c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
            top: d.top - r,
            left: d.left - h,
            height: s.innerHeight(),
            width: s.innerWidth(),
            position: a ? "fixed" : "absolute"
        }).animate(u, t.duration, t.easing, function() {
            c.remove(),
            i()
        })
    }
});

/*! JQUERY.TOUCHSWIPE */
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a);
    } else {
        a(jQuery);
    }
}(function(e) {
    var o = "left"
      , n = "right"
      , d = "up"
      , v = "down"
      , c = "in"
      , w = "out"
      , l = "none"
      , r = "auto"
      , k = "swipe"
      , s = "pinch"
      , x = "tap"
      , i = "doubletap"
      , b = "longtap"
      , A = "horizontal"
      , t = "vertical"
      , h = "all"
      , q = 10
      , f = "start"
      , j = "move"
      , g = "end"
      , p = "cancel"
      , a = "ontouchstart"in window
      , y = "TouchSwipe";
    var m = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe,object"
    };
    e.fn.swipe = function(D) {
        var C = e(this)
          , B = C.data(y);
        if (B && typeof D === "string") {
            if (B[D]) {
                return B[D].apply(this, Array.prototype.slice.call(arguments, 1));
            } else {
                e.error("Method " + D + " does not exist on jQuery.swipe");
            }
        } else {
            if (!B && (typeof D === "object" || !D)) {
                return u.apply(this, arguments);
            }
        }
        return C;
    }
    ;
    e.fn.swipe.defaults = m;
    e.fn.swipe.phases = {
        PHASE_START: f,
        PHASE_MOVE: j,
        PHASE_END: g,
        PHASE_CANCEL: p
    };
    e.fn.swipe.directions = {
        LEFT: o,
        RIGHT: n,
        UP: d,
        DOWN: v,
        IN: c,
        OUT: w
    };
    e.fn.swipe.pageScroll = {
        NONE: l,
        HORIZONTAL: A,
        VERTICAL: t,
        AUTO: r
    };
    e.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: h
    };
    function u(B) {
        if (B && (B.allowPageScroll === undefined && (B.swipe !== undefined || B.swipeStatus !== undefined))) {
            B.allowPageScroll = l;
        }
        if (B.click !== undefined && B.tap === undefined) {
            B.tap = B.click;
        }
        if (!B) {
            B = {};
        }
        B = e.extend({}, e.fn.swipe.defaults, B);
        return this.each(function() {
            var D = e(this);
            var C = D.data(y);
            if (!C) {
                C = new z(this,B);
                D.data(y, C);
            }
        });
    }
    function z(a0, aq) {
        var av = (a || !aq.fallbackToMouseEvents)
          , G = av ? "touchstart" : "mousedown"
          , au = av ? "touchmove" : "mousemove"
          , R = av ? "touchend" : "mouseup"
          , P = av ? null : "mouseleave"
          , az = "touchcancel";
        var ac = 0
          , aL = null
          , Y = 0
          , aX = 0
          , aV = 0
          , D = 1
          , am = 0
          , aF = 0
          , J = null;
        var aN = e(a0);
        var W = "start";
        var T = 0;
        var aM = null;
        var Q = 0
          , aY = 0
          , a1 = 0
          , aa = 0
          , K = 0;
        var aS = null;
        try {
            aN.bind(G, aJ);
            aN.bind(az, a5);
        } catch (ag) {
            e.error("events not supported " + G + "," + az + " on jQuery.swipe");
        }
        this.enable = function() {
            aN.bind(G, aJ);
            aN.bind(az, a5);
            return aN;
        }
        ;
        this.disable = function() {
            aG();
            return aN;
        }
        ;
        this.destroy = function() {
            aG();
            aN.data(y, null);
            return aN;
        }
        ;
        this.option = function(a8, a7) {
            if (aq[a8] !== undefined) {
                if (a7 === undefined) {
                    return aq[a8];
                } else {
                    aq[a8] = a7;
                }
            } else {
                e.error("Option " + a8 + " does not exist on jQuery.swipe.options");
            }
            return null;
        }
        ;
        function aJ(a9) {
            if (ax()) {
                return;
            }
            if (e(a9.target).closest(aq.excludedElements, aN).length > 0) {
                return;
            }
            var ba = a9.originalEvent ? a9.originalEvent : a9;
            var a8, a7 = a ? ba.touches[0] : ba;
            W = f;
            if (a) {
                T = ba.touches.length;
            } else {
                a9.preventDefault();
            }
            ac = 0;
            aL = null;
            aF = null;
            Y = 0;
            aX = 0;
            aV = 0;
            D = 1;
            am = 0;
            aM = af();
            J = X();
            O();
            if (!a || (T === aq.fingers || aq.fingers === h) || aT()) {
                ae(0, a7);
                Q = ao();
                if (T == 2) {
                    ae(1, ba.touches[1]);
                    aX = aV = ap(aM[0].start, aM[1].start);
                }
                if (aq.swipeStatus || aq.pinchStatus) {
                    a8 = L(ba, W);
                }
            } else {
                a8 = false;
            }
            if (a8 === false) {
                W = p;
                L(ba, W);
                return a8;
            } else {
                ak(true);
            }
            return null;
        }
        function aZ(ba) {
            var bd = ba.originalEvent ? ba.originalEvent : ba;
            if (W === g || W === p || ai()) {
                return;
            }
            var a9, a8 = a ? bd.touches[0] : bd;
            var bb = aD(a8);
            aY = ao();
            if (a) {
                T = bd.touches.length;
            }
            W = j;
            if (T == 2) {
                if (aX == 0) {
                    ae(1, bd.touches[1]);
                    aX = aV = ap(aM[0].start, aM[1].start);
                } else {
                    aD(bd.touches[1]);
                    aV = ap(aM[0].end, aM[1].end);
                    aF = an(aM[0].end, aM[1].end);
                }
                D = a3(aX, aV);
                am = Math.abs(aX - aV);
            }
            if ((T === aq.fingers || aq.fingers === h) || !a || aT()) {
                aL = aH(bb.start, bb.end);
                ah(ba, aL);
                ac = aO(bb.start, bb.end);
                Y = aI();
                aE(aL, ac);
                if (aq.swipeStatus || aq.pinchStatus) {
                    a9 = L(bd, W);
                }
                if (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave) {
                    var a7 = true;
                    if (aq.triggerOnTouchLeave) {
                        var bc = aU(this);
                        a7 = B(bb.end, bc);
                    }
                    if (!aq.triggerOnTouchEnd && a7) {
                        W = ay(j);
                    } else {
                        if (aq.triggerOnTouchLeave && !a7) {
                            W = ay(g);
                        }
                    }
                    if (W == p || W == g) {
                        L(bd, W);
                    }
                }
            } else {
                W = p;
                L(bd, W);
            }
            if (a9 === false) {
                W = p;
                L(bd, W);
            }
        }
        function I(a7) {
            var a8 = a7.originalEvent;
            if (a) {
                if (a8.touches.length > 0) {
                    C();
                    return true;
                }
            }
            if (ai()) {
                T = aa;
            }
            a7.preventDefault();
            aY = ao();
            Y = aI();
            if (a6()) {
                W = p;
                L(a8, W);
            } else {
                if (aq.triggerOnTouchEnd || (aq.triggerOnTouchEnd == false && W === j)) {
                    W = g;
                    L(a8, W);
                } else {
                    if (!aq.triggerOnTouchEnd && a2()) {
                        W = g;
                        aB(a8, W, x);
                    } else {
                        if (W === j) {
                            W = p;
                            L(a8, W);
                        }
                    }
                }
            }
            ak(false);
            return null;
        }
        function a5() {
            T = 0;
            aY = 0;
            Q = 0;
            aX = 0;
            aV = 0;
            D = 1;
            O();
            ak(false);
        }
        function H(a7) {
            var a8 = a7.originalEvent;
            if (aq.triggerOnTouchLeave) {
                W = ay(g);
                L(a8, W);
            }
        }
        function aG() {
            aN.unbind(G, aJ);
            aN.unbind(az, a5);
            aN.unbind(au, aZ);
            aN.unbind(R, I);
            if (P) {
                aN.unbind(P, H);
            }
            ak(false);
        }
        function ay(bb) {
            var ba = bb;
            var a9 = aw();
            var a8 = aj();
            var a7 = a6();
            if (!a9 || a7) {
                ba = p;
            } else {
                if (a8 && bb == j && (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave)) {
                    ba = g;
                } else {
                    if (!a8 && bb == g && aq.triggerOnTouchLeave) {
                        ba = p;
                    }
                }
            }
            return ba;
        }
        function L(a9, a7) {
            var a8 = undefined;
            if (F() || S()) {
                a8 = aB(a9, a7, k);
            } else {
                if ((M() || aT()) && a8 !== false) {
                    a8 = aB(a9, a7, s);
                }
            }
            if (aC() && a8 !== false) {
                a8 = aB(a9, a7, i);
            } else {
                if (al() && a8 !== false) {
                    a8 = aB(a9, a7, b);
                } else {
                    if (ad() && a8 !== false) {
                        a8 = aB(a9, a7, x);
                    }
                }
            }
            if (a7 === p) {
                a5(a9);
            }
            if (a7 === g) {
                if (a) {
                    if (a9.touches.length == 0) {
                        a5(a9);
                    }
                } else {
                    a5(a9);
                }
            }
            return a8;
        }
        function aB(ba, a7, a9) {
            var a8 = undefined;
            if (a9 == k) {
                aN.trigger("swipeStatus", [a7, aL || null, ac || 0, Y || 0, T]);
                if (aq.swipeStatus) {
                    a8 = aq.swipeStatus.call(aN, ba, a7, aL || null, ac || 0, Y || 0, T);
                    if (a8 === false) {
                        return false;
                    }
                }
                if (a7 == g && aR()) {
                    aN.trigger("swipe", [aL, ac, Y, T]);
                    if (aq.swipe) {
                        a8 = aq.swipe.call(aN, ba, aL, ac, Y, T);
                        if (a8 === false) {
                            return false;
                        }
                    }
                    switch (aL) {
                    case o:
                        aN.trigger("swipeLeft", [aL, ac, Y, T]);
                        if (aq.swipeLeft) {
                            a8 = aq.swipeLeft.call(aN, ba, aL, ac, Y, T);
                        }
                        break;
                    case n:
                        aN.trigger("swipeRight", [aL, ac, Y, T]);
                        if (aq.swipeRight) {
                            a8 = aq.swipeRight.call(aN, ba, aL, ac, Y, T);
                        }
                        break;
                    case d:
                        aN.trigger("swipeUp", [aL, ac, Y, T]);
                        if (aq.swipeUp) {
                            a8 = aq.swipeUp.call(aN, ba, aL, ac, Y, T);
                        }
                        break;
                    case v:
                        aN.trigger("swipeDown", [aL, ac, Y, T]);
                        if (aq.swipeDown) {
                            a8 = aq.swipeDown.call(aN, ba, aL, ac, Y, T);
                        }
                        break;
                    }
                }
            }
            if (a9 == s) {
                aN.trigger("pinchStatus", [a7, aF || null, am || 0, Y || 0, T, D]);
                if (aq.pinchStatus) {
                    a8 = aq.pinchStatus.call(aN, ba, a7, aF || null, am || 0, Y || 0, T, D);
                    if (a8 === false) {
                        return false;
                    }
                }
                if (a7 == g && a4()) {
                    switch (aF) {
                    case c:
                        aN.trigger("pinchIn", [aF || null, am || 0, Y || 0, T, D]);
                        if (aq.pinchIn) {
                            a8 = aq.pinchIn.call(aN, ba, aF || null, am || 0, Y || 0, T, D);
                        }
                        break;
                    case w:
                        aN.trigger("pinchOut", [aF || null, am || 0, Y || 0, T, D]);
                        if (aq.pinchOut) {
                            a8 = aq.pinchOut.call(aN, ba, aF || null, am || 0, Y || 0, T, D);
                        }
                        break;
                    }
                }
            }
            if (a9 == x) {
                if (a7 === p || a7 === g) {
                    clearTimeout(aS);
                    if (V() && !E()) {
                        K = ao();
                        aS = setTimeout(e.proxy(function() {
                            K = null;
                            aN.trigger("tap", [ba.target]);
                            if (aq.tap) {
                                a8 = aq.tap.call(aN, ba, ba.target);
                            }
                        }, this), aq.doubleTapThreshold);
                    } else {
                        K = null;
                        aN.trigger("tap", [ba.target]);
                        if (aq.tap) {
                            a8 = aq.tap.call(aN, ba, ba.target);
                        }
                    }
                }
            } else {
                if (a9 == i) {
                    if (a7 === p || a7 === g) {
                        clearTimeout(aS);
                        K = null;
                        aN.trigger("doubletap", [ba.target]);
                        if (aq.doubleTap) {
                            a8 = aq.doubleTap.call(aN, ba, ba.target);
                        }
                    }
                } else {
                    if (a9 == b) {
                        if (a7 === p || a7 === g) {
                            clearTimeout(aS);
                            K = null;
                            aN.trigger("longtap", [ba.target]);
                            if (aq.longTap) {
                                a8 = aq.longTap.call(aN, ba, ba.target);
                            }
                        }
                    }
                }
            }
            return a8;
        }
        function aj() {
            var a7 = true;
            if (aq.threshold !== null) {
                a7 = ac >= aq.threshold;
            }
            return a7;
        }
        function a6() {
            var a7 = false;
            if (aq.cancelThreshold !== null && aL !== null) {
                a7 = (aP(aL) - ac) >= aq.cancelThreshold;
            }
            return a7;
        }
        function ab() {
            if (aq.pinchThreshold !== null) {
                return am >= aq.pinchThreshold;
            }
            return true;
        }
        function aw() {
            var a7;
            if (aq.maxTimeThreshold) {
                if (Y >= aq.maxTimeThreshold) {
                    a7 = false;
                } else {
                    a7 = true;
                }
            } else {
                a7 = true;
            }
            return a7;
        }
        function ah(a7, a8) {
            if (aq.allowPageScroll === l || aT()) {
                a7.preventDefault();
            } else {
                var a9 = aq.allowPageScroll === r;
                switch (a8) {
                case o:
                    if ((aq.swipeLeft && a9) || (!a9 && aq.allowPageScroll != A)) {
                        a7.preventDefault();
                    }
                    break;
                case n:
                    if ((aq.swipeRight && a9) || (!a9 && aq.allowPageScroll != A)) {
                        a7.preventDefault();
                    }
                    break;
                case d:
                    if ((aq.swipeUp && a9) || (!a9 && aq.allowPageScroll != t)) {
                        a7.preventDefault();
                    }
                    break;
                case v:
                    if ((aq.swipeDown && a9) || (!a9 && aq.allowPageScroll != t)) {
                        a7.preventDefault();
                    }
                    break;
                }
            }
        }
        function a4() {
            var a8 = aK();
            var a7 = U();
            var a9 = ab();
            return a8 && a7 && a9;
        }
        function aT() {
            return !!(aq.pinchStatus || aq.pinchIn || aq.pinchOut);
        }
        function M() {
            return !!(a4() && aT());
        }
        function aR() {
            var ba = aw();
            var bc = aj();
            var a9 = aK();
            var a7 = U();
            var a8 = a6();
            var bb = !a8 && a7 && a9 && bc && ba;
            return bb;
        }
        function S() {
            return !!(aq.swipe || aq.swipeStatus || aq.swipeLeft || aq.swipeRight || aq.swipeUp || aq.swipeDown);
        }
        function F() {
            return !!(aR() && S());
        }
        function aK() {
            return ((T === aq.fingers || aq.fingers === h) || !a);
        }
        function U() {
            return aM[0].end.x !== 0;
        }
        function a2() {
            return !!(aq.tap);
        }
        function V() {
            return !!(aq.doubleTap);
        }
        function aQ() {
            return !!(aq.longTap);
        }
        function N() {
            if (K == null) {
                return false;
            }
            var a7 = ao();
            return (V() && ((a7 - K) <= aq.doubleTapThreshold));
        }
        function E() {
            return N();
        }
        function at() {
            return ((T === 1 || !a) && (isNaN(ac) || ac === 0));
        }
        function aW() {
            return ((Y > aq.longTapThreshold) && (ac < q));
        }
        function ad() {
            return !!(at() && a2());
        }
        function aC() {
            return !!(N() && V());
        }
        function al() {
            return !!(aW() && aQ());
        }
        function C() {
            a1 = ao();
            aa = event.touches.length + 1;
        }
        function O() {
            a1 = 0;
            aa = 0;
        }
        function ai() {
            var a7 = false;
            if (a1) {
                var a8 = ao() - a1;
                if (a8 <= aq.fingerReleaseThreshold) {
                    a7 = true;
                }
            }
            return a7;
        }
        function ax() {
            return !!(aN.data(y + "_intouch") === true);
        }
        function ak(a7) {
            if (a7 === true) {
                aN.bind(au, aZ);
                aN.bind(R, I);
                if (P) {
                    aN.bind(P, H);
                }
            } else {
                aN.unbind(au, aZ, false);
                aN.unbind(R, I, false);
                if (P) {
                    aN.unbind(P, H, false);
                }
            }
            aN.data(y + "_intouch", a7 === true);
        }
        function ae(a8, a7) {
            var a9 = a7.identifier !== undefined ? a7.identifier : 0;
            aM[a8].identifier = a9;
            aM[a8].start.x = aM[a8].end.x = a7.pageX || a7.clientX;
            aM[a8].start.y = aM[a8].end.y = a7.pageY || a7.clientY;
            return aM[a8];
        }
        function aD(a7) {
            var a9 = a7.identifier !== undefined ? a7.identifier : 0;
            var a8 = Z(a9);
            a8.end.x = a7.pageX || a7.clientX;
            a8.end.y = a7.pageY || a7.clientY;
            return a8;
        }
        function Z(a8) {
            for (var a7 = 0; a7 < aM.length; a7++) {
                if (aM[a7].identifier == a8) {
                    return aM[a7];
                }
            }
        }
        function af() {
            var a7 = [];
            for (var a8 = 0; a8 <= 5; a8++) {
                a7.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
            }
            return a7;
        }
        function aE(a7, a8) {
            a8 = Math.max(a8, aP(a7));
            J[a7].distance = a8;
        }
        function aP(a7) {
            if (J[a7]) {
                return J[a7].distance;
            }
            return undefined;
        }
        function X() {
            var a7 = {};
            a7[o] = ar(o);
            a7[n] = ar(n);
            a7[d] = ar(d);
            a7[v] = ar(v);
            return a7;
        }
        function ar(a7) {
            return {
                direction: a7,
                distance: 0
            };
        }
        function aI() {
            return aY - Q;
        }
        function ap(ba, a9) {
            var a8 = Math.abs(ba.x - a9.x);
            var a7 = Math.abs(ba.y - a9.y);
            return Math.round(Math.sqrt(a8 * a8 + a7 * a7));
        }
        function a3(a7, a8) {
            var a9 = (a8 / a7) * 1;
            return a9.toFixed(2);
        }
        function an() {
            if (D < 1) {
                return w;
            } else {
                return c;
            }
        }
        function aO(a8, a7) {
            return Math.round(Math.sqrt(Math.pow(a7.x - a8.x, 2) + Math.pow(a7.y - a8.y, 2)));
        }
        function aA(ba, a8) {
            var a7 = ba.x - a8.x;
            var bc = a8.y - ba.y;
            var a9 = Math.atan2(bc, a7);
            var bb = Math.round(a9 * 180 / Math.PI);
            if (bb < 0) {
                bb = 360 - Math.abs(bb);
            }
            return bb;
        }
        function aH(a8, a7) {
            var a9 = aA(a8, a7);
            if ((a9 <= 45) && (a9 >= 0)) {
                return o;
            } else {
                if ((a9 <= 360) && (a9 >= 315)) {
                    return o;
                } else {
                    if ((a9 >= 135) && (a9 <= 225)) {
                        return n;
                    } else {
                        if ((a9 > 45) && (a9 < 135)) {
                            return v;
                        } else {
                            return d;
                        }
                    }
                }
            }
        }
        function ao() {
            var a7 = new Date();
            return a7.getTime();
        }
        function aU(a7) {
            a7 = e(a7);
            var a9 = a7.offset();
            var a8 = {
                left: a9.left,
                right: a9.left + a7.outerWidth(),
                top: a9.top,
                bottom: a9.top + a7.outerHeight()
            };
            return a8;
        }
        function B(a7, a8) {
            return (a7.x > a8.left && a7.x < a8.right && a7.y > a8.top && a7.y < a8.bottom);
        }
    }
}));

/*! U01 */
jQuery(document).ready(function(d) {
    if (document.getElementById("u01")) {
        d("div.u01search").attr("data-lbl", "search");
        d("ul.u01nav").after('<div class="u01z3"></div>');
        if ((!d(".u01logo a span")[0]) && (!d(".u01logoinline .u01logo")[0])) {
            d(".u01logo a").wrapInner("<span></span>");
        }
        d("#u01").prepend('<div class="u01mmenu"><a href="#menu">MENU</a></div><div class="u01mlogo"><a href="' + d(this).find("div.u01logo a").attr("href") + '">education</a></div><div class="u01msearch"><a href="#search">SEARCH</a></div>');
        if (d(".u01logoinline .u01logo img")[0]) {
            d(".u01mlogo a").empty();
            d(".u01logoinline .u01logo img").clone().appendTo(".u01mlogo a");
        }
        d("div.u01tools").wrapAll('<div class="u01toolsw1"></div>');
        function g() {
            if ((d(".u01mmenu").css("display") == "block") && (d("body").hasClass("f11"))) {
                d(".u01navtools + .u01pfile #pfile-acct, .u01navtools + .u01pfile #pfile-sout, .u01navtools + .u01pfile #pfile-regs, .u01navtools + .u01pfile #pfile-help").detach().insertBefore(".u01navtools").wrapAll('<ul class="u01pfile" data-lbl="welcome"></ul>');
            } else {
                d(".u01logo + .u01pfile #pfile-acct, .u01logo + .u01pfile #pfile-sout, .u01logo + .u01pfile #pfile-regs, .u01logo + .u01pfile #pfile-help").unwrap('<ul class="u01pfile" data-lbl="welcome"></ul>').detach().insertAfter("#pfile-wlcm");
            }
        }
        d("body.f11v1").addClass("u01loaded");
        g();
        d(window).resize(function() {
            g();
        });
        d("ul.u01nav > li > a.u01btn").each(function() {
            if (d(this).text().replace(/[ \t\n]/g, "") == "educationTechnologyNetwork") {
                d(this).html("<h3>OTN</h3>");
            }
            d(this).parent().addClass("u01btn").wrapInner('<div class="u01w7"></div>');
        });
        function f() {
            d("div.u01tools").each(function() {
                d(this).find("ul li > a").css("font-size", "");
                var h = (d(this).find("ul.u01navtools li > a").css("font-size").split("px")[0] * 1) - 1;
                while (d(this).height() > 66 && h >= 11) {
                    d(this).find("ul li > a").css("font-size", h + "px");
                    h--;
                }
            });
        }
        f();
        d(window).resize(function() {
            f();
        });
        if (d("#pfile-wlcm").css("color") == "#727272") {
            d("div.u01tools").css("width", ((d(".u01navtools").outerWidth() + d(".u01pfile").outerWidth()) + (d(".u01navtools").css("margin-right").split("px")[0] * 1)));
        }
        function c() {
            d("ul.u01nav").each(function() {
                d(this).find("li h3").css("font-size", "");
                var h = (d(this).find("li h3").css("font-size").split("px")[0] * 1) - 1;
                while (d(this).height() > 66 && h >= 14) {
                    d(this).find("li h3").css("font-size", h + "px");
                    if (h == 14 && d(this).height() > 66) {
                        d("a.u01nav h3").css("padding-left", "8px").css("padding-right", "8px");
                    }
                    h--;
                }
            });
        }
        c();
        d(window).resize(function() {
            c();
        });
        d("ul.u01nav > li").each(function() {
            d(this).find("a.u01nav,div.u01w7").append('<div class="u01z1"><div class="u01z2"></div></div>');
            function h() {
                if (d(".u01mmenu").css("display") == "none") {
                    if (d(this).find("a.u01nav h3").first().height() && (d(this).find("a.u01nav h3").first().height() < 20)) {
                        d(this).find("a.u01nav h3").css("height", "32px").css("padding-top", "14px");
                    } else {
                        if (d(this).find("a.u01nav h3").first().height() && (d(this).find("a.u01nav h3").first().height() < 37)) {
                            d(this).find("a.u01nav h3").css("height", "33px").css("padding-top", "8px");
                        }
                    }
                } else {
                    d(this).find("a.u01nav h3").css("height", "").css("padding-top", "");
                }
            }
            h();
            d(window).resize(function() {
                h();
            });
            d(this).find("a.u01nav").bind("mouseover", function(k) {
                if (d(".u01mmenu").css("display") == "none") {
                    try {
                        var i = window.getComputedStyle(d(this)[0], null).width;
                    } catch (j) {
                        var i = d(this).width() + "px";
                    }
                    d(this).css("width", i);
                    d(this).find("div.u01z1").css("width", i);
                } else {
                    d(this).css("width", "");
                    d(this).find("div.u01z1").css("width", "");
                }
            });
            d(window).resize(function() {
                d("a.u01nav").css("width", "");
                d("div.u01z1").css("width", "");
            });
            d(this).find("div.u01w7").bind("mouseover", function(k) {
                try {
                    var i = window.getComputedStyle(d(this)[0], null).width;
                } catch (j) {
                    var i = d(this).width() + "px";
                }
                i = i.replace(/px/, "");
                i = ((i * 1) + 1) + "px";
                d(this).find("div.u01z1").css("width", i);
            });
            d(this).each(function() {
                if (d(this).parent("ul.u01nav").hasClass("u01disabled")) {
                    d(this).hover(function() {
                        d(this).addClass("u01hover");
                    }, function() {
                        d(this).removeClass("u01hover");
                    });
                }
                d(this).bind("mouseenter", function(j) {
                    d(this).bind("click", function(k) {
                        if (((d(window).width() > 974)) && (!d(this).closest("li").hasClass("u01hover"))) {
                            k.preventDefault();
                        }
                    });
                    if (d(".u01mmenu").css("display") == "none") {
                        if (d(this).find(".u01w5bannerimg img[data-imgpath]").first().css("visibility") == "hidden") {
                            d(this).find(".u01w5bannerimg img[data-imgpath]").each(function() {
                                d(this).attr("src", d(this).attr("data-imgpath")).css("visibility", "visible");
                                d(this).on("load", function() {
                                    d(this).removeAttr("data-imgpath");
                                    d(this).closest(".u01").find(".u01w5bannerimg img[data-imgpath]").each(function() {
                                        d(this).attr("src", d(this).attr("data-imgpath")).css("visibility", "visible");
                                        d(this).removeAttr("data-imgpath");
                                    });
                                });
                            });
                        }
                        var i = d(this);
                        d.data(this, "u01timer", setTimeout(function() {
                            d("#u01 .u01z3").addClass("u01z3opened");
                            i.find("div.u01menu, .u01z1").show(0, function() {
                                d(this).parent("li").addClass("u01hover");
                                var k = 0;
                                d(this).find("div.u01w1").children("div").each(function() {
                                    k = (d(this).outerHeight() > k) ? d(this).outerHeight() : k;
                                });
                                d(this).find("div.u01w6").each(function() {
                                    d(this).css("height", k - ((d(this).css("padding-top").split("px")[0] * 1) + (d(this).css("padding-bottom").split("px")[0]) * 1));
                                });
                            });
                        }, 300));
                    }
                });
            });
            d(this).bind("mouseleave", function(i) {
                clearTimeout(d.data(this, "u01timer"));
                d(this).find("div.u01menu, .u01z1").hide();
                d(".u01nav > li").removeClass("u01hover");
                d("#u01 .u01z3").removeClass("u01z3opened");
            });
        });
        d("form.u01searchform").bind("submit", function(k) {
            var j = document.getElementById("txtSearch");
            var l = j.value.replace(/ +$/g, "").replace(/^ +/g, "");
            if (l != "" && l != j.defaultValue) {
                return true;
            } else {
                j.value = "";
                if (!document.getElementById("u01searcherror")) {
                    var h = (d(this).attr("data-errormsg")) ? d(this).attr("data-errormsg") : "Error";
                    d("div.u01search").append('<div id="u01searcherror">' + h + "</div>");
                }
                d("#txtSearch").focus();
                return false;
            }
        });
        d("#txtSearch").bind("blur", function(h) {
            if (document.getElementById("u01searcherror")) {
                d("#u01searcherror").remove();
            }
        });
        d("input#txtSearch").autocomplete({
            appendTo: "div.u01search",
            position: {
                my: "right top",
                at: "right bottom"
            },
            source: function(i, h) {
                var j = (d('meta[name="Language-disabled"]')[0]) ? d('meta[name="Language"]').first().attr("content") : "en";
                d.ajax({
                    url: "http://search.education.com/search/AutoSuggestQuery",
                    dataType: "jsonp",
                    data: {
                        key: i.term,
                        lang: j,
                        sg: "All"
                    },
                    success: function(k) {
                        h(d.map(k.suggests, function(l) {
                            return {
                                label: l,
                                value: l
                            };
                        }));
                    },
                    error: function() {
                        return null;
                    }
                });
            },
            minLength: 2,
            autoFocus: false,
            select: function(h, i) {
                d("input#txtSearch").val(i.item.value);
                d("input#txtSearch").closest("form.u01searchform").submit();
            }
        });
        if (USER.guid) {
            if (USER.firstname && USER.firstname != "NOT_FOUND") {
                var a = d("html").attr("lang");
                if (a) {
                    a = a.toLowerCase();
                    if (a == "he-il" || a == "en-ae" || a == "ko") {
                        d("#pfile-wlcm").prepend(USER.firstname + " ");
                    } else {
                        d("#pfile-wlcm").append(" " + USER.firstname);
                    }
                } else {
                    d("#pfile-wlcm").append(" " + USER.firstname);
                }
            }
            d("#pfile-acct,#pfile-sout,#pfile-wlcm").show();
            d("#pfile-regs").hide();
            d("#pfile-regacct").hide();
            d("#pfile-acct a").attr("href", d("#pfile-acct a").attr("href").replace(/nexturl=/gi, "nexturl=" + encodeURI(document.location.href)));
        } else {
            d("#pfile-regs a").attr("href", d("#pfile-regs a").attr("href").replace(/nexturl=/gi, "nexturl=" + encodeURI(document.location.href)));
        }
        d("#pfile-sout a").attr("href", d("#pfile-sout a").attr("href").replace(/p_done_url=/gi, "p_done_url=" + encodeURI(document.location.href)));
        var e = window.location.host;
        if (e.indexOf("www-sites-stage.education.com") > -1 || e.indexOf("www-stage.education.com") > -1) {
            d("#pfile-acct a").attr("href", d("#pfile-acct a").attr("href").replace(/[my]*profile.education.com/g, "myprofile-mktas.education.com"));
            d("#pfile-regs a").attr("href", d("#pfile-regs a").attr("href").replace(/www.education.com/g, "www-portal-stage.education.com"));
            d("#pfile-sout a").attr("href", d("#pfile-sout a").attr("href").replace(/login.education.com/g, "login-stage.education"));
        } else {
            if (e.indexOf("stage.education.com") > -1 && e.indexOf("portal-stage.education") == -1) {
                d("#pfile-acct a").attr("href", d("#pfile-acct a").attr("href").replace(/[my]*profile.education.com/g, "myprofile-mktas.education.com"));
                d("#pfile-regs a").attr("href", d("#pfile-regs a").attr("href").replace(/www.education.com/g, "www-content-stage.education.com"));
            } else {
                if (e.indexOf("www-sites-dev") > -1 || e.indexOf("www-dev") > -1) {
                    d("#pfile-acct a").attr("href", d("#pfile-acct a").attr("href").replace(/[my]*profile.education.com/g, "myprofile-mktas.education.com"));
                    d("#pfile-regs a").attr("href", d("#pfile-regs a").attr("href").replace(/www.education.com\/webapps/g, "adc2170261.us.education.com"));
                    d("#pfile-sout a").attr("href", d("#pfile-sout a").attr("href").replace(/login.education.com/g, "adc2201490.us.education.com"));
                } else {
                    if (e.indexOf("www-content.education") > -1) {
                        d("#pfile-acct a").attr("href", d("#pfile-acct a").attr("href").replace(/[my]*profile.education.com/g, "myprofile-mktas.education.com"));
                        d("#pfile-regs a").attr("href", d("#pfile-regs a").attr("href").replace(/www.education.com/g, "www-content.education.com"));
                    } else {
                        if (e.indexOf("portal-stage.education") > -1) {
                            d("#pfile-regs a").attr("href", d("#pfile-regs a").attr("href").replace(/.*nexturl=/gi, "http://www-portal-stage.education.com/webapps/redirect/signon?nexturl="));
                        }
                    }
                }
            }
        }
        var b = (d("div#u01").attr("data-menusrc") != "") ? d("div#u01").attr("data-menusrc") : "/cors/menucontent.html";
        d.ajax({
            url: b,
            type: "GET",
            contentType: "text/html; charset=UTF-8",
            crossDomain: false,
            success: function(h) {
                h = h.replace(/<img([^>]+)src=/g, "<img$1data-imgpath=");
                d("ul.u01nav").children("li").each(function() {
                    var i = d("#" + d(this).find("a").attr("href").split("#")[1], h);
                    d(this).find("a").attr("href", d(this).find("a").attr("href").split("#")[0]);
                    i.find("h2").remove();
                    i.hide();
                    d(this).append(i);
                });
                d("ul.u01navtools").children("li").each(function() {
                    var i = d(h).find("#" + d(this).find("a").attr("href").split("#")[1]);
                    if (d(this).find("a").attr("href").indexOf(b) > -1) {
                        d(this).find("a").attr("href", d(this).find("a").attr("href").replace(b, ""));
                        d(this).find("a").bind("click", function(j) {
                            j.preventDefault();
                        });
                    } else {
                        d(this).find("a").attr("href", d(this).find("a").attr("href").split("#")[0]);
                    }
                    i.find("h2").remove();
                    d(this).append(i);
                });
            },
            error: function(h) {
                d("ul.u01nav").addClass("u01error");
            }
        });
        d(".u01mmenu a").on("click", function(l) {
            l.preventDefault();
            var h = d("#u01 .u01active");
            var k = d(".u01navtools");
            var m = d(this).parent("div").siblings("ul.u01nav");
            var i = d(this).parent("div");
            var j = d(".u01logo + .u01pfile");
            d(k).toggleClass("u01active");
            d(m).toggleClass("u01active");
            d(i).toggleClass("u01active");
            d(j).toggleClass("u01active");
            d(h).not(k).not(m).not(i).not(j).removeClass("u01active");
        });
        d(window).resize(function() {
            if ((d(".u01mmenu").css("display") == "none") && (d("body").hasClass("f11"))) {
                d(".u01navtools").removeClass("u01active");
                d("ul.u01nav").removeClass("u01active");
                d(".u01mmenu a").parent("div").removeClass("u01active");
                d(".u01logo + .u01pfile").removeClass("u01active");
                d(".u01search").removeClass("u01active");
                d(".u01msearch a").parent("div").removeClass("u01active");
            }
        });
        d(".u01msearch a").on("click", function(k) {
            k.preventDefault();
            var h = d("#u01 .u01active");
            var i = d(".u01search");
            var j = d(this).parent("div");
            d(i).toggleClass("u01active");
            d(j).toggleClass("u01active");
            d(h).not(i).not(j).removeClass("u01active");
        });
    }
});

/*! HP07 */
jQuery(document).ready(function(a) {
    a("div.hp07v0").each(function(f) {
        var d = a(this);
        var c = (d.hasClass("hp07random")) ? Math.floor(Math.random() * (d.find("div.hp07").length - 1 + 1)) + 1 : 1;
        d[0].current = c;
        d.append('<div class="hp07z1"></div>').append('<div class="hp07z2"></div>');
        if (d.find("div.hp07").length > 1) {
            d.find(".hp07w2").prepend('<a href="#previous" class="hp07dnav hp07prev" data-goto="-1"><i> </i></a>');
            var e = '<div class="hp07nav"><ul style="margin-top:-' + (((d.find("div.hp07").length * 1.05) / 2) + 0.15) + "em;margin-left:-" + (((d.find("div.hp07").length * 1.05) / 2) + 0.15) + 'em">';
            d.find("div.hp07").each(function(h) {
                a(this).attr("id", "feature-" + (h + 1));
                var g = (h == (d[0].current - 1)) ? ' class="hp07selected"' : "";
                e += '<li><a href="#feature-' + (h + 1) + '"' + g + ' id="fnav-' + (h + 1) + '" data-goto="' + (h + 1) + '"> </a></li>';
            });
            e += "</ul></div>";
            d.find(".hp07w2").append(e + '\n<a href="#next" class="hp07dnav hp07next" data-goto="+1"><i> </i></a>');
        } else {
            d.find("div.hp07").first().attr("id", "feature-" + (d[0].current));
            d.addClass("hp07single");
        }
        d.find("div.hp07").each(function(i) {
            if (i == (d[0].current - 1)) {
                a(this).addClass("cfeature");
                var h = (a(this).is("[data-bgimg]")) ? b(a(this).attr("data-bgimg")) : "ffffff";
                var g = ((a(this).is("[data-bgimg2x]") && a("html").hasClass("retina") && a(window).width() > 600)) ? a(this).attr("data-bgimg2x") : a(this).attr("data-bgimg");
                d.append('<div class="hp07w4"><div class="hp07imgslide cslide" id="hp07img-' + (i + 1) + '"><div style="background-color:#' + h + '"><img class="hp07img" src="' + g + '"></div></div></div>');
                var g = a(this).attr("data-bgimg");
                imgpreload([g], function(j, k) {
                    var l = k.find("div.hp07w4");
                    k.find("div.hp07").each(function(p) {
                        if (p != (d[0].current - 1)) {
                            var o = (a(this).is("[data-bgimg]")) ? b(a(this).attr("data-bgimg")) : "ffffff";
                            var m = ((a(this).is("[data-bgimg2x]") && a("html").hasClass("retina") && a(window).width() > 600)) ? a(this).attr("data-bgimg2x") : a(this).attr("data-bgimg");
                            if (p < (d[0].current - 1)) {
                                l.find("#hp07img-" + d[0].current).before('<div class="hp07imgslide" id="hp07img-' + (p + 1) + '"><div style="background-color:#' + o + '"><img class="hp07img" src="' + m + '"></div></div>');
                            } else {
                                l.append('<div class="hp07imgslide" id="hp07img-' + (p + 1) + '"><div style="background-color:#' + o + '"><img class="hp07img" src="' + m + '"></div></div>');
                            }
                        }
                    });
                }, a(this).closest("div.hp07v0"));
            }
            a(this).attr("data-lbl", "hpf" + (i + 1));
            if (!a(this).find(".hp07w3").first().is("[data-lbl]")) {
                a(this).find(".hp07w3").attr("data-lbl", a(this).find(".hp07ttl").text());
            }
        });
        a("#feature-" + (d[0].current)).css("top", 0).css("left", 0);
        a("#hp07img-" + (d[0].current)).css("top", 0).css("left", 0);
        function b(g) {
            if (/-bg(......)-/.test(g)) {
                var h = g.replace(/.*-bg(......).*/ig, "$1");
                return h;
            } else {
                return "ffffff";
            }
        }
    });
    a("body").on("mouseenter", "#hp07v0", function() {
        a(this).addClass("hp07pause");
    }).on("mouseleave", "#hp07v0", function() {
        a(this).removeClass("hp07pause");
    });
});
$(window).load(function() {
    var a = ($("#hp07v0").is("[data-hp07rotate]")) ? $("#hp07v0").attr("data-hp07rotate") : 6;
    $("#hp07v0").attr("data-hp07rotate", a);
    if (a != 0 && !$("#hp07v0").hasClass("hp07single")) {
        setTimeout(function() {
            hp07goto("+1", "auto");
        }, a * 1000);
    }
});
$(document).on("click", ".hp08promo a[target]", function() {
    $(this).blur();
});
$(document).on("click", "a.hp07dnav,.hp07nav a", function() {
    if (!$(".hp07busy")[0] && !$(this).hasClass("hp07selected")) {
        if (/[-+]/.test($(this).attr("data-goto"))) {
            var a = ($(this).attr("data-goto").indexOf("+") > -1) ? "next" : "prev";
            hp07goto($(this).attr("data-goto"), a);
        } else {
            hp07goto(($(this).attr("data-goto") * 1), "nav");
        }
    }
    return false;
});
function hp07goto(k, l) {
    var i = $("div.hp07v0").first();
    if (l == "auto" && i.hasClass("hp07gonemanual")) {
        return;
    } else {
        if (l == "auto" && i.hasClass("hp07pause")) {
            setTimeout(function() {
                hp07goto("+1", "auto");
            }, i.attr("data-hp07rotate") * 1000);
            return;
        }
    }
    i.addClass("hp07busy");
    if (l != "auto") {
        i.addClass("hp07gonemanual");
    }
    var o = i[0].current;
    var d = i.find("div.hp07").length;
    var j = ((o - 1) == 0) ? d : (o - 1);
    var c = ((o + 1) > d) ? 1 : (o + 1);
    var e = null;
    if (/[+]/.test(k)) {
        k = c;
        e = "n";
    } else {
        if (/[-]/.test(k)) {
            k = j;
            e = "p";
        }
    }
    $(".hp07dnav").animate({
        opacity: "0"
    }, 300, "easeInOutSine");
    $(".hp07selected").removeClass("hp07selected");
    $("#fnav-" + k).addClass("hp07selected");
    var m = "-100%";
    var f = "-80%";
    var g = "100%";
    var h = "-20%";
    var b = "20%";
    if ((k > o && o != d && e != "p") || e == "n") {
        m = "100%";
        f = "80%";
        g = "-100%";
        h = "20%";
        b = "-20%";
    }
    var a = $("#feature-" + k).find(".hp07w3").attr("data-lbl");
    a = a.toLowerCase().replace(/ /g, "-").replace(/\xa0/g, "-").replace(/-+/g, "-").replace(/[.,:;'"]/g, "");
    if (!i[0].autocount) {
        i[0].autocount = 2;
    } else {
        if (!i.hasClass("hp07gonemanual")) {
            i[0].autocount = i[0].autocount + 1;
        } else {
            i[0].autocount = 0;
        }
    }
    if (typeof navTrack == "function" && typeof s_setAccount == "function" && i[0].autocount <= i.find(".hp07v1").length && l != "auto") {
        navTrack(s_setAccount()[1], s_setAccount()[2], "hp07", "show-hpf" + k + ":" + a + ":" + l);
    }
    var n = (i.width() < 620) ? 600 : 1000;
    if (!document.addEventListener) {
        $("#feature-" + k).addClass("cfeature");
        $("#feature-" + k).css("top", m);
        $("#hp07img-" + k).css("top", "0").css("left", "0").css("z-index", "1");
        $("#hp07img-" + k + " div").css("top", h);
        $("#hp07img-" + k).addClass("cslide");
        $("#hp07img-" + o).css("z-index", "2");
        $("#feature-" + o).animate({
            top: g
        }, n, "easeInOutSine");
        $("#hp07img-" + o + " div").animate({
            top: f
        }, n, "easeInOutSine");
        $("#hp07img-" + o).animate({
            top: g
        }, n, "easeInOutSine", function() {
            $(this).css("top", g);
            $("#feature-" + o).removeClass("cfeature");
            $("#hp07img-" + o).removeClass("cslide");
            if (l == "auto") {
                setTimeout(function() {
                    hp07goto("+1", "auto");
                }, i.attr("data-hp07rotate") * 1000);
            }
        });
        $("#hp07img-" + k + " div").animate({
            top: "0"
        }, n, "easeInOutSine");
        $("#hp07img-" + k).animate({
            top: "0"
        }, n, "easeInOutSine");
        $("#feature-" + k).animate({
            top: "0%"
        }, n, "easeInOutSine", function() {
            $(".hp07dnav").animate({
                opacity: "1"
            }, 150, "easeInOutSine");
            $(".hp07busy").removeClass("hp07busy");
        });
    } else {
        $("#feature-" + k).addClass("cfeature");
        $("#feature-" + k).css("top", m).css("left", m);
        $("#hp07img-" + k).css("top", "0%").css("left", "0%").css("z-index", "0");
        $("#hp07img-" + k).addClass("cslide");
        $("#hp07img-" + k + " div").css("top", h).css("left", h);
        $("#hp07img-" + o).css("z-index", "2");
        $("#feature-" + o).animate({
            top: g,
            left: g
        }, n, "easeInOutSine");
        $("#hp07img-" + o + " div").animate({
            top: f,
            left: f
        }, n, "easeInOutSine");
        $("#hp07img-" + o).animate({
            top: g,
            left: g
        }, n, "easeInOutSine", function() {
            $(this).css("top", g).css("left", g);
            $("#feature-" + o).removeClass("cfeature");
            $("#hp07img-" + o).removeClass("cslide");
            if (l == "auto") {
                setTimeout(function() {
                    hp07goto("+1", "auto");
                }, i.attr("data-hp07rotate") * 1000);
            }
        });
        $("#hp07img-" + k + " div").animate({
            top: "0",
            left: "0"
        }, n, "easeInOutSine");
        $("#hp07img-" + k).animate({
            top: "0",
            left: "0"
        }, n, "easeInOutSine");
        $("#feature-" + k).animate({
            top: "0%",
            left: "0%"
        }, n, "easeInOutSine", function() {
            $(".hp07dnav").animate({
                opacity: "1"
            }, 150, "easeInOutSine");
            $(".hp07busy").removeClass("hp07busy");
        });
    }
    i[0].current = k;
    if (l != "auto") {
        i.addClass("hp07gonemanual");
    }
}

function imgpreload(g, f, d) {
    var b = 0;
    var a = [];
    g = Object.prototype.toString.apply(g) === "[object Array]" ? g : [g];
    var e = function() {
        b += 1;
        if (b === g.length && f) {
            f(a, d);
        }
    };
    for (var c = 0; c < g.length; c++) {
        a[c] = new Image();
        a[c].onabort = e;
        a[c].onerror = e;
        a[c].onload = e;
        a[c].src = g[c];
    }
}
