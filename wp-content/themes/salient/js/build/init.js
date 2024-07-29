! function(t, e, a) {
    "use strict";
    var n, i, s = t(e),
        r = t("body"),
        o = t("#slide-out-widget-area"),
        l = t("#slide-out-widget-area-bg"),
        d = t("#header-outer"),
        c = t("#header-secondary-outer"),
        h = t("#header-outer #search-btn a"),
        u = t("#wpadminbar"),
        p = t("#ajax-loading-screen"),
        f = t(".body-border-top"),
        g = t("#page-header-bg"),
        m = t("#footer-outer"),
        v = !(!e.nectarOptions || !e.nectarOptions.delay_js || "1" !== e.nectarOptions.delay_js),
        b = t(".body-border-right").length > 0 ? t(".body-border-right").width() : 0,
        w = d.is("[data-logo-height]") ? parseInt(d.attr("data-logo-height")) : 30,
        y = d.is("[data-padding]") ? parseInt(d.attr("data-padding")) : 28,
        _ = d.is("[data-shrink-num]") ? d.attr("data-shrink-num") : 6,
        C = !!d.is('[data-condense="true"]'),
        x = !!d.is('[data-using-logo="1"]'),
        k = !!d.is('[data-header-resize="1"]'),
        $ = !!d.is('[data-transparent-header="true"]'),
        T = (d.is('[data-mobile-fixed="1"]'), r.is("[data-header-format]") ? r.attr("data-header-format") : "default"),
        I = r.is("[data-hhun]") ? r.attr("data-hhun") : "",
        E = !!r.is('[data-contained-header="true"]'),
        O = r.is("[data-cae]") && "swing" !== r.attr("data-cae") ? r.attr("data-cae") : "easeOutCubic",
        z = r.is("[data-cad]") ? r.attr("data-cad") : "650",
        H = t('body[data-animated-anchors="true"]').length > 0,
        S = !(r.is('[data-m-animate="1"]') || !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)),
        A = e.nectarOptions && e.nectarOptions.ocm_btn_position && "left" === e.nectarOptions.ocm_btn_position ? "left" : "default",
        M = [],
        W = [],
        B = [],
        F = [],
        L = [],
        q = [],
        j = [],
        P = [],
        Y = [],
        R = [],
        V = [],
        X = [],
        N = [],
        D = [],
        Q = [],
        Z = [],
        G = [],
        U = [],
        J = [],
        K = [],
        tt = [],
        et = [],
        at = [],
        nt = [],
        it = [],
        st = [],
        rt = [],
        ot = "",
        lt = !1,
        dt = !1,
        ct = {},
        ht = {
            animating: "false",
            perspect: "not-rolled",
            inUse: !1
        },
        ut = {
            $usingFullScreenRows: !1
        };
    f.length > 0 && ("#ffffff" == f.css("background-color") && "light" == r.attr("data-header-color") || "rgb(255, 255, 255)" == f.css("background-color") && "light" == r.attr("data-header-color") || f.css("background-color") == d.attr("data-user-set-bg")) && (dt = !0);
    var pt = {
        usingMobileBrowser: !!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/),
        usingIOS: !!(navigator.userAgent.match(/(iPod|iPhone|iPad)/) || navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2),
        usingFrontEndEditor: void 0 !== e.vc_iframe,
        getWindowSize: function() {
            pt.winH = e.innerHeight, pt.winW = e.innerWidth, pt.adminBarHeight = u.length > 0 ? u.height() : 0, pt.secondaryHeaderHeight = c.length > 0 && "none" != c.css("display") ? c.outerHeight() : 0, pt.footerOuterHeight = m.length > 0 ? m.outerHeight() : 0
        },
        scrollTop: 0,
        clientX: 0,
        clientY: 0,
        scrollPosMouse: function() {
            return e.scrollY || s.scrollTop()
        },
        scrollPosRAF: function() {
            pt.scrollTop = e.scrollY || s.scrollTop(), requestAnimationFrame(pt.scrollPosRAF)
        },
        bindEvents: function() {
            pt.usingMobileBrowser || (s.on("scroll", function() {
                pt.scrollTop = pt.scrollPosMouse()
            }), a.addEventListener("mousemove", function(t) {
                pt.clientX = t.clientX, pt.clientY = t.clientY
            })), s.on("resize", pt.getWindowSize), e.addEventListener("orientationchange", pt.getWindowSize)
        },
        init: function() {
            u = t("#wpadminbar"), this.getWindowSize(), this.usingPhoneBrowser = !!(pt.usingMobileBrowser && pt.winW < 690), this.scrollTop = this.scrollPosMouse(), this.bindEvents(), this.usingFrontEndEditor = void 0 !== e.vc_iframe
        }
    };
    e.nectarDOMInfo = pt, pt.init();
    var ft, gt = {
        materialOffCanvasOpen: !1,
        materialSearchOpen: !1,
        permanentTransHeader: !!d.is('[data-permanent-transparent="1"]'),
        animatedScrolling: !1,
        preventScroll: !1,
        ocmOpen: !1,
        ocmAnimating: !1,
        ocmInit: !1,
        mobileHeader: ""
    };

    function mt() {
        qe(), pt.usingMobileBrowser || Fe(), Cn(), Ma(), t("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(function() {
            t(this).removeClass("on-left-side"), t(this).offset().left + t(this).outerWidth() > s.width() ? (t(this).addClass("on-left-side"), t(this).find("ul").addClass("on-left-side")) : (t(this).removeClass("on-left-side"), t(this).find("ul").removeClass("on-left-side"))
        }), Et()
    }

    function vt() {
        setTimeout(function() {
            Fe()
        }, 100)
    }

    function bt() {
        Ee(), qe(), zt(), xa(), pt.usingMobileBrowser || Fe()
    }

    function wt() {
        t(".flex-gallery").each(function() {
            if (t().flexslider) {
                var a = t(this);
                imagesLoaded(t(this), function() {
                    var n = !a.find("ul").is('[data-d-autorotate="true"]');
                    a.flexslider({
                        animation: "fade",
                        smoothHeight: !1,
                        animationSpeed: 500,
                        useCSS: !1,
                        touch: !0,
                        slideshow: n
                    }), t(".flex-gallery .flex-direction-nav li a.flex-next").html('<i class="fa fa-angle-right"></i>'), t(".flex-gallery .flex-direction-nav li a.flex-prev").html('<i class="fa fa-angle-left"></i>'), t(e).trigger("salient-parallax-bg-recalculate"), Se()
                })
            }
        })
    }

    function yt(t, e) {
        this.lastX = pt.clientX, this.lastY = pt.clientY, this.$el = t, this.iconType = e, this.timeout = !1, this.overEl = !1, this.initialCalc = !1, this.styleType = "default", this.bgElSelector = "", this.$dragEl = "", this.$innerParallaxEl = "", this.parallaxLastX = 0, this.parallaxLastY = 0, this.$viewEl = "", this.$closeEl = "", this.lerpDamp = .18, this.parallaxLerp = !0, this.arrowMarkup = '<i class="fa fa-angle-left"></i><i class="fa fa-angle-right"></i>', this.createMarkup(), this.setup(), this.mouseBind()
    }

    function _t() {
        t('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').each(function() {
            t(this).css({
                height: "",
                width: ""
            });
            var e = parseInt(t(this).find("img").attr("height")),
                a = Rt(parseInt(t(this).find("img").attr("width")), e, 2e3, parseInt(t(this).find("img").height())),
                n = t(this).find(".item-meta").length > 0 ? t(this).find(".item-meta").outerHeight() : 0;
            t(this).css({
                height: a.height + n + "px",
                width: a.width + "px"
            })
        })
    }

    function Ct() {
        t('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').length > 0 && (_t(), s.on("smartresize", _t))
    }

    function xt() {
        if (0 == t(".nectar-flickity:not(.masonry)").length) return !1;
        F = [], L = [], t(".nectar-flickity:not(.masonry)").each(function(e) {
            F.push(new kt(t(this), e))
        }), t(".nectar-carousel.nectar-flickity:not(.masonry)").length > 0 && (pt.usingMobileBrowser ? e.addEventListener("orientationchange", $t) : s.on("resize", $t))
    }

    function kt(t, e) {
        this.$el = t, this.index = e, this.instance = {}, this.$freeScrollBool = !(!this.$el.is("[data-free-scroll]") || "true" != this.$el.attr("data-free-scroll")), this.$groupCellsBool = !0, this.$flickContainBool = !0, this.$flcikAttr = .025, this.$paginationBool = !1, this.$nextPrevArrowBool = !0, this.$setGallerySizeBool = !0, this.$imagesLoaded = !0, this.$flickCellAlign = "center", this.fadeBool = !1, this.setup()
    }

    function $t() {
        var e = pt.usingMobileBrowser ? 200 : 0;
        setTimeout(function() {
            t('.nectar-carousel.nectar-flickity:not(.masonry):not([data-adaptive-height="true"])').each(function() {
                Tt(t(this));
                var e = Flickity.data(t(this)[0]);
                e && e.resize()
            })
        }, e)
    }

    function Tt(e) {
        var a = 0;
        e.find(".flickity-slider > .cell").css("height", "auto"), e.find(".flickity-slider > .cell").each(function() {
            t(this).height() > a && (a = t(this).height())
        }), a < 10 && (a = "auto"), e.find(".flickity-slider > .cell").css("height", a + "px")
    }

    function It() {
        t(".twentytwenty-container").each(function() {
            var e = t(this);
            0 == e.find(".twentytwenty-handle").length && t(this).imagesLoaded(function() {
                e.twentytwenty()
            })
        })
    }

    function Et() {
        t("nav:not(.left-side):not(.right-side) .sf-menu > .nectar-megamenu-menu-item.align-left:not(.width-100)").each(function() {
            var e = t(this),
                a = t("header#top > .container > .row"),
                n = t(this).find("> ul.sub-menu");
            if (e) {
                if (n.width() + e.offset().left > pt.winW) return t(this).addClass("align-middle"), !0;
                t(this).find("> ul.sub-menu").css({
                    right: a.width() - (e.offset().left + e.width() - a.offset().left) - t(this).find("> ul.sub-menu").width() + e.width(),
                    left: "auto"
                }), t(this).removeClass("align-middle")
            }
        }), t("nav:not(.left-side):not(.right-side) .sf-menu > .nectar-megamenu-menu-item.align-right:not(.width-100)").each(function() {
            var e = t(this),
                a = t("header#top > .container > .row"),
                n = t(this).find("> ul.sub-menu");
            if (e) {
                if (e.offset().left + e.width() - n.width() < 0) return t(this).addClass("align-middle"), !0;
                t(this).find("> ul.sub-menu").css({
                    right: a.width() - (e.offset().left + e.width() - a.offset().left),
                    left: "auto"
                }), t(this).removeClass("align-middle")
            }
        }), t("nav:not(.left-side):not(.right-side) .sf-menu > .nectar-megamenu-menu-item.align-middle:not(.width-100)").each(function() {
            var e = t(this),
                a = t("header#top > .container > .row"),
                n = t(this).find("> ul.sub-menu");
            if (e && n.length > 0) {
                var i = a.width(),
                    s = a.offset().left,
                    r = e.offset().left,
                    o = e.width(),
                    l = n.width();
                n.css({
                    right: i - (r + o - s) - l / 2 + o / 2,
                    left: "auto"
                });
                var d = n.offset();
                d.left < 0 ? n.css({
                    right: "auto",
                    left: "0px"
                }) : d.left + l > pt.winW && n.css({
                    right: "0px",
                    left: "auto"
                })
            }
        })
    }

    function Ot() {
        var e = s.width(),
            a = t("header#top > .container").width();
        t("header#top nav:not(.left-side):not(.right-side) > ul > li.megamenu:not(.width-50):not(.width-75) > .sub-menu").css({
            "padding-left": (e - a) / 2 + "px",
            "padding-right": (e + 2 - a) / 2 + "px",
            width: a,
            left: "-" + (e - a) / 2 + "px"
        })
    }

    function zt() {
        pt.winW < 1e3 && "1" == r.attr("data-responsive") ? (r.addClass("mobile"), t("header#top nav").css("display", "none")) : (r.removeClass("mobile"), t("header#top nav").css("display", ""), t(".slide-out-widget-area-toggle #toggle-nav .lines-button").removeClass("close"))
    }

    function Ht() {
        0 != t(".carousel").length && ("undefined" != typeof SalientRecentProjectsCarousel && t("ul.carousel.portfolio-items").each(function(e) {
            at[e] = new SalientRecentProjectsCarousel(t(this))
        }), t('ul.carousel:not(".clients"):not(.portfolio-items)').each(function() {
            var a, n, i = t(this),
                s = "true" == t(this).parents(".carousel-wrap").attr("data-full-width") ? "auto" : 3,
                o = "true" == t(this).parents(".carousel-wrap").attr("data-full-width") ? "auto" : "",
                l = "true" == t(this).parents(".carousel-wrap").attr("data-full-width") ? 500 : 453,
                d = "true" == t(this).attr("data-autorotate"),
                c = !0,
                h = !0;
            t("body.ascend").length > 0 && "true" != t(this).parents(".carousel-wrap").attr("data-full-width") || t("body.material").length > 0 && "true" != t(this).parents(".carousel-wrap").attr("data-full-width") ? t(this).find("li").length % 3 == 0 ? (c = !0, h = !0) : (c = !1, h = !0) : (c = !0, h = !0), a = parseInt(t(this).attr("data-scroll-speed")) ? parseInt(t(this).attr("data-scroll-speed")) : 700, n = t(this).is("[data-easing]") ? t(this).attr("data-easing") : "linear";
            var u = i;
            0 == i.find("img").length && (u = r), imagesLoaded(u, function() {
                i.carouFredSel({
                    circular: c,
                    infinite: h,
                    height: "auto",
                    responsive: !0,
                    items: {
                        width: l,
                        visible: {
                            min: 1,
                            max: s
                        }
                    },
                    swipe: {
                        onTouch: !0,
                        onMouse: !0,
                        options: {
                            excludedElements: "button, input, select, textarea, .noSwipe",
                            tap: function(a, n) {
                                !t(n).attr("href") || t(n).is('[target="_blank"]') || t(n).is('[rel^="prettyPhoto"]') || t(n).is(".magnific-popup") || t(n).is(".magnific") || e.open(t(n).attr("href"), "_self")
                            }
                        },
                        onBefore: function() {
                            i.find(".work-item").trigger("mouseleave"), i.find(".work-item .work-info a").trigger("mouseup")
                        }
                    },
                    scroll: {
                        items: o,
                        easing: n,
                        duration: a,
                        onBefore: function() {
                            (t("body.ascend").length > 0 && "true" != i.parents(".carousel-wrap").attr("data-full-width") || t("body.material").length > 0 && "true" != i.parents(".carousel-wrap").attr("data-full-width")) && i.parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(i.find("> li").length / i.triggerHandler("currentVisible").length))
                        },
                        onAfter: function() {
                            (t("body.ascend").length > 0 && "true" != i.parents(".carousel-wrap").attr("data-full-width") || t("body.material").length > 0 && "true" != i.parents(".carousel-wrap").attr("data-full-width")) && (i.parents(".carousel-wrap").find(".item-count .current").html(i.triggerHandler("currentPage") + 1), i.parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(i.find("> li").length / i.triggerHandler("currentVisible").length)))
                        }
                    },
                    prev: {
                        button: function() {
                            return i.parents(".carousel-wrap").find(".carousel-prev")
                        }
                    },
                    next: {
                        button: function() {
                            return i.parents(".carousel-wrap").find(".carousel-next")
                        }
                    },
                    auto: {
                        play: d
                    }
                }, {
                    transition: !0
                }).animate({
                    opacity: 1
                }, 1300), i.parents(".carousel-wrap").wrap('<div class="carousel-outer">'), "true" == i.parents(".carousel-wrap").attr("data-full-width") && i.parents(".carousel-outer").css("overflow", "visible"), (t("body.ascend").length > 0 && "true" != i.parents(".carousel-wrap").attr("data-full-width") || t("body.material").length > 0 && "true" != i.parents(".carousel-wrap").attr("data-full-width")) && t('<div class="item-count"><span class="current">1</span>/<span class="total">' + i.find("> li").length / i.triggerHandler("currentVisible").length + "</span></div>").insertAfter(i.parents(".carousel-wrap").find(".carousel-prev")), i.addClass("finished-loading"), Bt()
            })
        }), s.off("smartresize.carouselHeightCalcs"), s.on("smartresize.carouselHeightCalcs", Bt))
    }

    function St() {
        0 !== t(".owl-carousel[data-desktop-cols]").length && t(".owl-carousel[data-desktop-cols]").each(function() {
            t(this).addClass("owl-theme");
            var e = t(this),
                a = e.attr("data-autorotate"),
                n = e.attr("data-autorotation-speed"),
                i = !!e.is('[data-loop="true"]'),
                s = !!r.hasClass("rtl");
            t(this).owlCarousel({
                responsive: {
                    0: {
                        items: t(this).attr("data-mobile-cols")
                    },
                    690: {
                        items: t(this).attr("data-tablet-cols")
                    },
                    1000: {
                        items: t(this).attr("data-desktop-small-cols")
                    },
                    1300: {
                        items: t(this).attr("data-desktop-cols")
                    }
                },
                autoplay: a,
                autoplayTimeout: n,
                loop: i,
                rtl: s,
                smartSpeed: 350,
                onTranslate: function() {
                    e.addClass("moving")
                },
                onTranslated: function() {
                    e.removeClass("moving")
                }
            }), t(this).on("changed.owl.carousel", function(e) {
                e.item.count - e.page.size == e.item.index && t(e.target).find(".owl-dots div:last").addClass("active").siblings().removeClass("active")
            })
        })
    }

    function At(t) {
        var e = t.data.wooFlickity.selectedIndex + 1;
        t.data.wooFlickityCount.text(e + "/" + t.data.wooFlickity.slides.length)
    }

    function Mt(t, e, a) {
        this.$el = t, this.index = a, this.type = e, this.instance = {}, this.setup()
    }

    function Wt() {
        0 === t(".products-carousel").length && 0 === t(".nectar-woo-flickity").length || (t(".products-carousel").each(function(e) {
            new Mt(t(this), "legacy", e)
        }), Q = [], t(".nectar-woo-flickity").each(function(e) {
            Q.push(new Mt(t(this), "flickity", e))
        }))
    }

    function Bt() {
        t('.carousel.finished-loading:not(".portfolio-items, .clients"), .caroufredsel_wrapper .products.finished-loading').each(function() {
            var e = 0;
            t(this).find("> li").each(function() {
                t(this).height() > e && (e = t(this).height())
            }), t(this).css("height", e + 5), t(this).parents(".caroufredsel_wrapper").css("height", e + 5), (t("body.ascend").length > 0 && "true" != t(this).parents(".carousel-wrap").attr("data-full-width") || t("body.material").length > 0 && "true" != t(this).parents(".carousel-wrap").attr("data-full-width")) && (t(this).parents(".carousel-wrap").find(".item-count .current").html(Math.ceil((t(this).triggerHandler("currentPosition") + 1) / t(this).triggerHandler("currentVisible").length)), t(this).parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(t(this).find("> li").length / t(this).triggerHandler("currentVisible").length)))
        })
    }

    function Ft() {
        0 !== t(".carousel.clients").length && (t(".carousel.clients").each(function() {
            var e, a = t(this),
                n = !t(this).hasClass("disable-autorotate");
            e = parseInt(t(this).attr("data-max")) ? parseInt(t(this).attr("data-max")) : 5, s.width() < 690 && "1" == r.attr("data-responsive") && (e = 2, t(this).addClass("phone"));
            var i = a;
            0 == a.find("img").length && (i = r), imagesLoaded(i, function() {
                a.carouFredSel({
                    circular: !0,
                    responsive: !0,
                    items: {
                        height: a.find("> div:first").height(),
                        width: a.find("> div:first").width(),
                        visible: {
                            min: 1,
                            max: e
                        }
                    },
                    swipe: {
                        onTouch: !0,
                        onMouse: !0
                    },
                    scroll: {
                        items: 1,
                        easing: "easeInOutCubic",
                        duration: "800",
                        pauseOnHover: !0
                    },
                    auto: {
                        play: n,
                        timeoutDuration: 2700
                    }
                }).animate({
                    opacity: 1
                }, 1300), a.addClass("finished-loading"), a.parents(".carousel-wrap").wrap('<div class="carousel-outer">'), s.trigger("resize")
            })
        }), s.off("smartresize.clientsCarouselHeight", Lt), s.on("smartresize.clientsCarouselHeight", Lt))
    }

    function Lt() {
        var e = 0;
        t(".carousel.clients.finished-loading").each(function() {
            t(this).find("> div").each(function() {
                t(this).height() > e && (e = t(this).height())
            }), t(this).css("height", e), t(this).parent().css("height", e)
        })
    }

    function qt() {
        r.on("mousedown", '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a', function() {
            t(this).addClass("active")
        }), r.on("mouseup", '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a', function() {
            t(this).removeClass("active")
        }), t("body.ascend, body.material").on("mouseover", ".carousel-next", function() {
            t(this).parent().find(".carousel-prev, .item-count").addClass("next-hovered")
        }), t("body.ascend, body.material").on("mouseleave", ".carousel-next", function() {
            t(this).parent().find(".carousel-prev, .item-count").removeClass("next-hovered")
        })
    }

    function jt() {
        return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
    }

    function Pt(t, e, a) {
        return Math.max(Math.min(t, e), a)
    }

    function Yt(t, e, a) {
        return (1 - a) * t + a * e
    }

    function Rt(t, e, a, n) {
        var i = Math.min(a / t, n / e);
        return {
            width: t * i,
            height: e * i
        }
    }

    function Vt(e) {
        if (e) {
            var a = t(e.bold());
            return a.find("script").remove(), a.html()
        }
        return ""
    }

    function Xt() {
        var e;
        if (r.is('[data-header-format="left-header"]') && pt.winW >= 1e3 || r.is('[data-hhun="1"]') || t(".page-template-template-no-header-footer").length > 0 || t(".page-template-template-no-header").length > 0) e = 0;
        else if (!0 === E) e = t("#header-outer").outerHeight() + parseInt(t("#header-outer").css("margin-top"));
        else {
            var a = y - y / 1.8,
                n = d.outerHeight();
            (c.length > 0 && r.is(".material") || c.length > 0 && !r.is(".material") && pt.winW < 1e3) && (n -= pt.secondaryHeaderHeight), e = d.is('[data-header-resize="1"]') && !d.is(".small-nav") && pt.winW >= 1e3 ? n - (parseInt(_) + 2 * a) : n
        }
        if (pt.winW >= 1e3 && t('#header-outer[data-condense="true"]').length > 0) {
            var i = t('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
            e = d.height() - (parseInt(i.position().top) - parseInt(d.find("#logo").css("margin-top"))) - parseInt(pt.secondaryHeaderHeight)
        }
        return e
    }

    function Nt(t, e, n) {
        var i = a.querySelector(t);
        i && (i.onload = function() {
            e > 0 ? setTimeout(n, e) : n()
        })
    }

    function Dt() {
        pt.usingMobileBrowser || (this.state = {
            ocmFocus: !1
        }, this.init(), this.events())
    }

    function Qt(t) {
        return ("0" + parseInt(t).toString(16)).slice(-2)
    }

    function Zt() {
        return Math.floor(1e4 * Math.random())
    }

    function Gt(t, n, i) {
        var s = e.scrollY || a.documentElement.scrollTop,
            r = (t = t || 0, n = n || 2e3, i = i || "easeOutSine", 0),
            o = Math.max(.1, Math.min(Math.abs(s - t) / n, .8)),
            l = {
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
                }
            };
        ! function a() {
            var n = (r += 1 / 60) / o,
                d = l[i](n);
            n < 1 ? (requestAnimationFrame(a), e.scrollTo(0, s + (t - s) * d)) : e.scrollTo(0, t)
        }()
    }

    function Ut() {
        var e = t("body[data-header-breakpoint]").length > 0 && "1000" != r.attr("data-header-breakpoint") ? parseInt(r.attr("data-header-breakpoint")) : 1e3,
            a = !1;
        return 1e3 != e && pt.winW > 1e3 && pt.winW <= e && (a = !0), a
    }

    function Jt(t) {
        return t.replace(/"/g, "").replace(/url\(|\)$/gi, "")
    }
    e.nectarState = gt, yt.prototype.setup = function() {
            "post-grid-images" !== this.iconType && "horizontal-movement" !== this.iconType && "link-indicator" !== this.iconType && "view-indicator" !== this.iconType || this.viewportTracking()
        }, yt.prototype.viewportTracking = function() {
            var a = this;
            if ("IntersectionObserver" in e) {
                this.observer = new IntersectionObserver(function(e) {
                    e.forEach(function(e) {
                        e.isIntersecting ? (a.$el.addClass("active").addClass("el-in-view"), a.$el.find(a.bgElSelector).css("visibility", "visible"), a.activeViewRAF = !0) : (a.$el.find(a.bgElSelector).css("visibility", "hidden"), a.activeViewRAF = !1, a.$el.removeClass("el-in-view"), 0 == t(".el-in-view").length && (a.$dragEl.length > 0 ? a.$dragEl.removeClass("visible") : a.$viewEl.length > 0 && a.$viewEl.removeClass("visible")))
                    })
                }, {
                    rootMargin: "0px",
                    threshold: 0
                }), this.observer.observe(this.$el[0])
            }
        }, yt.prototype.createMarkup = function() {
            var e = this;
            if ("view-indicator" !== this.iconType && "horizontal-movement" !== this.iconType || (this.$el.is("[data-indicator-bg]") && (this.styleType = "solid"), this.$el.is("[data-indicator-style]") && "solid_bg" !== this.$el.attr("data-indicator-style") && (this.styleType = this.$el.attr("data-indicator-style"))), ("tooltip_text" === this.styleType || t('[data-indicator-style="tooltip_text"]').length > 0) && (this.parallaxLerp = !1, this.lerpDamp = .24), "horizontal-movement" === this.iconType) {
                if (0 == t(".nectar-drag-indicator").length) {
                    var a = t("body > #boxed").length > 0 ? " in-boxed" : "";
                    t("body").append('<div class="nectar-drag-indicator' + a + '" data-type="' + this.styleType + '"><div class="color-circle"></div><span class="inner-layer">' + this.arrowMarkup + "</span></div>"), this.$dragEl = t(".nectar-drag-indicator"), this.dragRAF()
                } else this.$dragEl = t(".nectar-drag-indicator");
                "default" != this.styleType && (this.$innerParallaxEl = t(".nectar-drag-indicator .inner-layer"))
            }
            if ("view-indicator" === this.iconType || "link-indicator" === this.iconType) {
                if (this.activeViewRAF = !0, 0 == t(".nectar-view-indicator").length) {
                    a = t("body > #boxed").length > 0 ? " in-boxed" : "";
                    t("body").append('<div class="nectar-view-indicator' + a + '"><div class="color-circle"></div><span class="inner-layer"></span></div>'), "gallery-zoom-indicator" !== this.iconType && t(".nectar-view-indicator span").text(t(".nectar-post-grid[data-indicator-text]").attr("data-indicator-text")), this.$viewEl = t(".nectar-view-indicator"), setTimeout(function() {
                        e.lastY = pt.clientY, e.lastX = pt.clientX, e.viewRAF()
                    }, 100)
                } else this.$viewEl = t(".nectar-view-indicator");
                this.$innerParallaxEl = t(".nectar-view-indicator .inner-layer")
            }
            if ("close-indicator" === this.iconType) {
                if (0 == t(".nectar-view-indicator").length) {
                    a = t("body > #boxed").length > 0 ? " in-boxed" : "";
                    t("body").append('<div class="nectar-close-indicator' + a + '"><div class="inner"><div class="inner-layer"><i class="icon-salient-m-close"></i></div></div></div>'), this.$closeEl = t(".nectar-close-indicator"), this.closeRAF()
                } else this.$closeEl = t(".nectar-close-indicator");
                this.$innerParallaxEl = t(".nectar-close-indicator .inner-layer")
            }
            "post-grid-images" === this.iconType && (this.activeViewRAF = !0, this.bgElSelector = this.$el.hasClass("nectar-category-grid") ? ".nectar-category-grid-item-bg" : ".nectar-post-grid-item-bg-wrap", this.$el.hasClass("mouse-move-bound") ? (this.$viewEl = this.$el.find(this.bgElSelector), this.viewRAF()) : (this.$viewEl = this.$el.find(this.bgElSelector), this.$el.addClass("mouse-move-bound"), this.viewRAF()))
        }, yt.prototype.mouseBind = function() {
            var e = this;
            if ("horizontal-movement" === this.iconType) e.$el.is('[data-indicator-blur="true"]') && e.$dragEl.addClass("blurred-bg"), e.$el.find(".flickity-viewport").on("mouseenter", function() {
                e.$dragEl.attr("data-type", e.styleType), e.$dragEl.addClass("visible"), "tooltip_text" === e.styleType && e.$el.is("[data-indicator-text]") ? e.$dragEl.find("span").text(e.$el.attr("data-indicator-text")) : e.$dragEl.find("span").html(e.arrowMarkup);
                var t = e.$el.is("[data-touch-icon-color]") ? "color-" + e.$el.attr("data-touch-icon-color") : "";
                if (e.$dragEl.removeClass("color-dark").removeClass("color-light").removeClass("color-default"), "default" == e.styleType) e.$dragEl.addClass(t), e.$dragEl.find("> span, i").css("color", ""), e.$dragEl.find(".color-circle").css("background-color", "");
                else if ("solid" == e.styleType) {
                    var a = e.$el.attr("data-indicator-bg");
                    e.$dragEl.find(".color-circle").css("background-color", a), e.$dragEl.find("> span").css("color", a);
                    var n = e.$el.attr("data-indicator-icon");
                    e.$dragEl.find("i").css("color", n)
                } else if ("tooltip_text" == e.styleType) {
                    a = e.$el.attr("data-indicator-bg");
                    e.$dragEl.find(".color-circle").css("background-color", a);
                    n = e.$el.attr("data-indicator-icon");
                    e.$dragEl.find("span").css("color", n)
                }
            }), e.$el.find(".flickity-viewport").on("mouseleave", function() {
                e.$dragEl.removeClass("visible")
            }), e.$el.find(".product-add-to-cart a, .hide-nectar-indicator, .hide-nectar-indicator a").on("mouseenter", function() {
                e.$dragEl.removeClass("visible")
            }), e.$el.find(".product-add-to-cart a, .hide-nectar-indicator, .hide-nectar-indicator a").on("mouseleave", function() {
                e.$dragEl.addClass("visible")
            }), e.$el.find(".nectar-post-grid-item .meta-category a, .nectar-post-grid-item .meta-author a").on("mouseenter", function() {
                e.$dragEl.removeClass("visible")
            }), e.$el.find(".nectar-post-grid-item .meta-category a, .nectar-post-grid-item .meta-author a").on("mouseleave", function() {
                e.$dragEl.addClass("visible")
            });
            else if ("close-indicator" === this.iconType) t("body").on("click", '.team-member[data-style*="bio_fullscreen"]', function() {
                t(".nectar_team_member_overlay:not(.open)").length > 0 || (e.$closeEl.addClass("visible"), e.$closeEl.find(".inner").addClass("visible"))
            }), t("body").on("click", '.nectar_team_member_overlay:not(.animating) a[target="_blank"]', function(t) {
                t.stopPropagation()
            }), t("body").on("click", ".nectar_team_member_overlay:not(.animating)", function() {
                e.$closeEl.removeClass("visible"), e.$closeEl.find(".inner").removeClass("visible")
            }), t("body").on("mouseenter", ".nectar_team_member_overlay .bio-inner a", function() {
                e.$closeEl.removeClass("visible")
            }), t("body").on("mouseleave", ".nectar_team_member_overlay .bio-inner a", function() {
                e.$closeEl.addClass("visible")
            });
            else if ("link-indicator" === this.iconType) e.$el.off(), e.$el.on("mouseenter", function() {
                e.$viewEl.addClass("visible"), e.$viewEl.attr("class", function(t, e) {
                    return e.replace(/(^|\s)style-\S+/g, "")
                });
                var t = e.$el.attr("data-indicator-bg"),
                    a = e.$el.attr("data-indicator-icon");
                e.$viewEl.find(".color-circle").css("background-color", t);
                var n = '<div class="nectar-cta loaded" data-style="arrow-animation"><span class="link_wrap" style="color: ' + a + '"><svg class="next-arrow" width="20px" height="25px" viewBox="0 0 50 80"><polyline stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round" points="0, 0 45, 40 0, 80"></polyline></svg><span class="line" style="background-color: ' + a + '"></span></span></div>';
                e.$viewEl.find("span").html(n), e.$el.is('[data-indicator-blur="true"]') && e.$viewEl.addClass("blurred-bg")
            }), e.$el.on("mouseleave", function() {
                e.$viewEl.removeClass("visible").removeClass("blurred-bg")
            });
            else if ("view-indicator" === this.iconType) {
                var a = e.$el.is("[data-indicator-text-color]") ? e.$el.attr("data-indicator-text-color") : "#fff",
                    n = e.$el.attr("data-indicator-color"),
                    i = e.$el.attr("data-indicator-style"),
                    s = e.$el.attr("data-indicator-text");
                e.$el.find(".nectar-post-grid-item").off(), e.$el.find(".nectar-post-grid-item").on("mouseenter", function() {
                    e.activeViewRAF = !0, e.$viewEl.addClass("visible"), e.$viewEl.find("span").text(s), e.$viewEl.attr("class", function(t, e) {
                        return e.replace(/(^|\s)style-\S+/g, "")
                    }), e.$viewEl.addClass("style-" + i), "see-through" !== i && (e.$viewEl.find(".color-circle").css("background-color", n), e.$viewEl.find(".inner-layer").css("color", a)), e.$el.is('[data-indicator-blur="true"]') && e.$viewEl.addClass("blurred-bg"), clearTimeout(e.timeout)
                }), e.$el.find(".nectar-post-grid-item").on("mouseleave", function() {
                    e.timeout = setTimeout(function() {
                        e.$viewEl.removeClass("visible"), e.$viewEl.removeClass("blurred-bg")
                    }, 100)
                }), e.$el.find(".nectar-post-grid-item .meta-category a, .nectar-post-grid-item .meta-author a").on("mouseenter", function() {
                    e.$viewEl.removeClass("visible")
                }), e.$el.find(".nectar-post-grid-item .meta-category a, .nectar-post-grid-item .meta-author a").on("mouseleave", function() {
                    e.$viewEl.addClass("visible")
                })
            } else "post-grid-images" === this.iconType && (e.$el.on("mouseenter", function() {
                t(this).addClass("mouse-over"), e.activeViewRAF = !0
            }), e.$el.on("mouseleave", function() {
                t(this).removeClass("mouse-over")
            }))
        }, yt.prototype.updatePos = function() {
            this.lastY = Yt(this.lastY, pt.clientY, this.lerpDamp), this.lastX = Yt(this.lastX, pt.clientX, this.lerpDamp)
        }, yt.prototype.parallaxIcon = function() {
            this.parallaxLastX = Yt(this.parallaxLastX, parseInt(pt.clientX) - parseInt(this.lastX), this.lerpDamp) / 1.65, this.parallaxLastY = Yt(this.parallaxLastY, parseInt(pt.clientY) - parseInt(this.lastY), this.lerpDamp) / 1.65, this.$innerParallaxEl.length > 0 && (this.$innerParallaxEl[0].style.transform = "translateX(" + Pt(this.parallaxLastX, 12, -12) + "px) translateY(" + Pt(this.parallaxLastY, 12, -12) + "px)")
        }, yt.prototype.dragRAF = function() {
            this.updatePos(), this.$dragEl[0].style.transform = "translateX(" + this.lastX + "px) translateY(" + this.lastY + "px)", this.parallaxLerp && this.parallaxIcon(), requestAnimationFrame(this.dragRAF.bind(this))
        }, yt.prototype.viewRAF = function() {
            if (this.updatePos(), this.activeViewRAF || "view-indicator" === this.iconType || "link-indicator" === this.iconType) {
                for (var t = 0; t < this.$viewEl.length; t++) this.$viewEl[t].style.transform = "translateX(" + this.lastX + "px) translateY(" + this.lastY + "px)";
                this.parallaxLerp && this.parallaxIcon()
            }
            requestAnimationFrame(this.viewRAF.bind(this))
        }, yt.prototype.closeRAF = function() {
            this.updatePos(), this.$closeEl.css({
                transform: "translateX(" + this.lastX + "px) translateY(" + this.lastY + "px)"
            }), this.parallaxIcon(), requestAnimationFrame(this.closeRAF.bind(this))
        }, kt.prototype.setup = function() {
            this.$el.removeClass(function(t, e) {
                return (e.match(/(^|\s)instance-\S+/g) || []).join(" ")
            }), this.$el.addClass("instance-" + this.index);
            var a = this.$el.attr("data-controls").length > 0 ? this.$el.attr("data-controls") : "";
            if (this.fullWidthOverlow(), this.$el.is('[data-format="fixed_text_content_fullwidth"]') && (this.$flickCellAlign = "left", this.$groupCellsBool = !1, this.$flickContainBool = !1, this.$flcikAttr = .02, this.$el.parent().is('[data-alignment="right"]') && (this.$flickCellAlign = "right")), 1 == this.$freeScrollBool && (this.$groupCellsBool = !1), this.$el.find(".nectar-el-parallax-scroll").length > 0 && this.$el.parents('[class*="wpb_gallery_slidesflickity_"]').length > 0 && (this.$groupCellsBool = !1), "next_prev_arrows" == a || "next_prev_arrows_overlaid" == a ? (this.$paginationBool = !1, this.$nextPrevArrowBool = !0) : (this.$paginationBool = !0, this.$nextPrevArrowBool = !1), "none" == a && (this.$paginationBool = !1, this.$nextPrevArrowBool = !1), this.$wrapAround = !this.$el.is("[data-wrap]") || "no-wrap" != this.$el.attr("data-wrap"), this.ticker = !!this.$el.is(".ticker-rotate"), this.tickerPaused = !1, this.ticker) {
                var n = this.$el.is("[data-ticker-speed]") ? this.$el.attr("data-ticker-speed") : "slow";
                this.tickerSpeed = "slow" === n ? .4 : "medium" === n ? 1.2 : 2, this.$wrapAround = !0, this.$paginationBool = !1
            }
            this.$flickity_autoplay = !1, this.$flickity_stored_autoplay = !1, this.inView = !1, this.$el.is("[data-autoplay]") && "true" == this.$el.attr("data-autoplay") && !this.ticker && (this.$flickity_autoplay = !0, this.$flickity_stored_autoplay = 5e3, this.$el.is("[data-autoplay-dur]") && this.$el.attr("data-autoplay-dur").length > 0 && parseInt(this.$el.attr("data-autoplay-dur")) > 100 && parseInt(this.$el.attr("data-autoplay-dur")) < 3e4 && (this.$flickity_autoplay = parseInt(this.$el.attr("data-autoplay-dur")), this.$flickity_stored_autoplay = this.$flickity_autoplay)), this.$frontEndEditorDrag = !(t("body.vc_editor").length > 0), this.$frontEndEditorPause = t("body.vc_editor").length > 0, this.$arrowShape = "", this.$el.is('[data-pause-on-hover="true"]') && (this.$frontEndEditorPause = !0), this.$el.is('[data-centered-cells="true"]') && (this.$groupCellsBool = !1), this.$flickity_adaptive_height = !1, this.$el.is('[data-adaptive-height="true"]') && (this.$flickity_adaptive_height = !0), this.$lazyload = this.$el.find("img[data-flickity-lazyload]").length > 0 && 1, this.$el.find("img[data-flickity-lazyload]").length > 0 && this.$el.is('[data-overflow="visible"]') && this.$el.is('[data-wrap="no-wrap"]') && (this.$lazyload = 2), this.$flickity_rtl = !!r.hasClass("rtl"), "next_prev_arrows_overlaid" == a || "touch_total" == a || this.$el.hasClass("nectar-simple-slider") ? this.$arrowShape = {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            } : this.$arrowShape = {
                x0: 20,
                x1: 70,
                y1: 30,
                x2: 70,
                y2: 25,
                x3: 70
            }, this.$el.is('[data-format="fixed_text_content_fullwidth"]') && this.$el.parents(".full-width-content.wpb_row").length > 0 && this.$el.parents(".full-width-content.wpb_row").removeClass("full-width-content").addClass("full-width-section"), this.$el.hasClass("nectar-simple-slider") && (this.$flickity_adaptive_height = !1, this.$paginationBool = !1, this.$nextPrevArrowBool = !1, this.$setGallerySizeBool = !1, this.$wrapAround = !1, this.$imagesLoaded = !1, this.$flcikAttr = .022, "true" == this.$el.attr("data-pagination") && (this.$paginationBool = !0), "true" == this.$el.attr("data-wrap") && (this.$wrapAround = !0), this.$el.is('[data-simple-slider-transition="fade"]') && (this.fadeBool = !0));
            var i = this.$el.parents(".toggle").length > 0;
            !pt.usingFrontEndEditor && ! function() {
                if (-1 != navigator.userAgent.indexOf("Instagram")) return !0;
                return !1
            }() && "IntersectionObserver" in e && !i && !1 === ut.$usingFullScreenRows ? this.lazyInit() : this.init()
        }, kt.prototype.lazyInit = function() {
            var t = this;
            this.observer = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    e.isIntersecting && (t.init(), t.observer.unobserve(e.target))
                })
            }, {
                root: jt() ? null : a,
                rootMargin: "350px 0px 350px 0px",
                threshold: 0
            }), this.observer.observe(this.$el[0])
        }, kt.prototype.init = function() {
            this.instance = new Flickity(".nectar-flickity.instance-" + this.index, {
                setGallerySize: this.$setGallerySizeBool,
                contain: this.$flickContainBool,
                draggable: this.$frontEndEditorDrag,
                lazyLoad: this.$lazyload,
                imagesLoaded: this.$imagesLoaded,
                percentPosition: !0,
                adaptiveHeight: this.$flickity_adaptive_height,
                cellAlign: this.$flickCellAlign,
                groupCells: this.$groupCellsBool,
                prevNextButtons: this.$nextPrevArrowBool,
                freeScroll: this.$freeScrollBool,
                pageDots: this.$paginationBool,
                resize: !0,
                selectedAttraction: this.$flcikAttr,
                autoPlay: this.$flickity_autoplay,
                rightToLeft: this.$flickity_rtl,
                pauseAutoPlayOnHover: this.$frontEndEditorPause,
                wrapAround: this.$wrapAround,
                accessibility: !1,
                fade: this.fadeBool,
                dragThreshold: pt.usingMobileBrowser ? 25 : 3,
                arrowShape: this.$arrowShape
            }), this.events()
        }, kt.prototype.trackView = function() {
            var t = this;
            new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    e.isIntersecting ? t.inView = !0 : t.inView = !1
                })
            }, {
                root: jt() ? null : a,
                rootMargin: "200px 0px 200px 0px",
                threshold: 0
            }).observe(this.$el[0])
        }, kt.prototype.fullWidthOverlow = function() {
            this.$el.is('[data-overflow="visible"]') && 0 == this.$el.parents(".wpb_column:not(.vc_col-sm-12)").length && (this.$el.parents(".wpb_row:not(.nectar-overflow-hidden):not(.full-width-content):not(.inner_row):not(.has-global-section)").length > 0 ? this.$el.wrap('<div class="wpb_row vc_row-fluid vc_row full-width-content nectar-overflow-hidden carousel-dynamic-wrapper"><div class="normal-container container"></div></div>') : this.$el.parents(".wpb_row.full-width-content:not(.nectar-overflow-hidden)").length > 0 && this.$el.parents(".wpb_row.full-width-content:not(.nectar-overflow-hidden)").addClass("nectar-overflow-hidden"))
        }, kt.prototype.events = function() {
            this.$el.hasClass("nectar-simple-slider") ? this.simpleSliderStyle() : (this.$el.is('.nectar-carousel[data-wrap="no-wrap"]') && this.$el.find('.nectar-fancy-box[data-n-parallax-bg="true"]').length > 0 && !0 !== this.$groupCellsBool || this.$el.parents('[class*="wpb_gallery_slidesflickity_"]').length > 0 && this.$el.find(".nectar-el-parallax-scroll").length > 0) && this.galleryParallax(), (this.$el.is('[data-controls="touch_total"]') || this.$el.is('[data-touch-indicator="true"]')) && this.visualizedTotalControls(), this.$el.is('[data-format="fixed_text_content_fullwidth"]') && !pt.usingFrontEndEditor && this.fixedContentStyle(), this.$el.parents(".wpb_gallery_slidesflickity_static_height_style").length > 0 && this.$el.find(".item-meta").length > 0 && (this.imageCaptionWidth(), s.on("resize", this.imageCaptionWidth.bind(this))), this.ticker && ("IntersectionObserver" in e && this.trackView(), this.tickerRotate(), this.instance.on("dragStart", function() {
                this.tickerPaused = !0
            }.bind(this)), this.$el[0].addEventListener("mouseleave", function() {
                this.tickerPaused = !1
            }.bind(this)), (this.$el.is('[data-pause-on-hover="true"]') || this.$nextPrevArrowBool || pt.usingFrontEndEditor) && this.$el[0].addEventListener("mouseenter", function() {
                this.tickerPaused = !0
            }.bind(this))), this.sharedEvents()
        }, kt.prototype.sharedEvents = function() {
            var e, a, n = this,
                i = this.$el,
                s = this.instance;
            this.instance.on("dragStart", function() {
                clearTimeout(e), clearTimeout(a), i.addClass("is-dragging"), i.addClass("is-moving"), i.find(".flickity-prev-next-button").addClass("hidden")
            }), this.instance.on("dragEnd", function() {
                i.removeClass("is-dragging"), e = setTimeout(function() {
                    i.removeClass("is-moving"), i.find(".flickity-prev-next-button").removeClass("hidden")
                }, 600), a = setTimeout(function() {
                    i.removeClass("is-moving")
                }, 300)
            }), t(".flickity-prev-next-button").on("click", function() {
                clearTimeout(e), t(this).parents(".nectar-flickity").find(".flickity-prev-next-button").addClass("hidden"), e = setTimeout(function() {
                    i.find(".flickity-prev-next-button").removeClass("hidden")
                }, 600)
            }), this.instance.$element.find(".flickity-prev-next-button").on("click", function() {
                if (!0 !== n.$groupCellsBool) {
                    var e = s.selectedSlide.outerWidth,
                        a = s.size.innerWidth,
                        i = Math.floor(a / e);
                    t(this).hasClass("next") && 1 === s.selectedIndex && i > 1 && (2 === i || 3 === i ? s.select(2) : i > 3 && s.select(3))
                }
            }), setTimeout(function() {
                t('.nectar-post-grid.nectar-flickity[data-wrap="no-wrap"], .nectar-flickity.nectar-carousel[data-format="default"][data-wrap="no-wrap"]').addClass("transition-enabled")
            }, 200), i.hasClass("nectar-carousel") && !i.is('[data-adaptive-height="true"]') && imagesLoaded(i, function() {
                Tt(i)
            })
        }, kt.prototype.tickerRotate = function() {
            this.tickerPaused || 1 != this.inView || this.instance.slides && (this.instance.x = (this.instance.x - this.tickerSpeed) % this.instance.slideableWidth, this.instance.selectedIndex = this.instance.dragEndRestingSelect(), this.instance.settle(this.instance.x)), e.requestAnimationFrame(this.tickerRotate.bind(this))
        }, kt.prototype.imageCaptionWidth = function() {
            this.$el.find(".item-meta").each(function() {
                t(this).css({
                    width: t(this).parent().find("img").width()
                })
            })
        }, kt.prototype.simpleSlideBGConnection = function() {
            var e = t("body.vc_editor").length > 0 ? $that.find(".is-selected > .cell") : $that.find(".is-selected");
            this.$rowBG && e && this.$rowBG.css({
                transition: "background-color 0.5s ease-out",
                "background-color": e.is(".has-bg-color") ? e.find(".bg-layer-wrap").css("background-color") : this.$rowBGStored
            })
        }, kt.prototype.simpleSliderStyle = function() {
            var e = this.$el,
                a = this;
            if ("true" == this.$el.attr("data-arrows") && 0 == this.$el.find(".flickity-prev-next-button").length && (this.$el.append('<button class="flickity-button flickity-prev-next-button previous" aria-label="' + nectar_front_i18n.previous + '" type="button"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg></button>'), this.$el.append('<button class="flickity-button flickity-prev-next-button next" aria-label="' + nectar_front_i18n.next + '" type="button"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>'), this.$el.find(".flickity-prev-next-button.previous").on("click", function() {
                    if (!1 === a.$wrapAround && 0 == a.instance.selectedIndex && (0 == a.instance.isAnimating || void 0 === a.instance.isAnimating)) {
                        var t = a.instance.x;
                        anime({
                            targets: a.instance,
                            x: t + 100,
                            duration: 350,
                            easing: "easeOutCubic"
                        }), a.instance.startAnimation()
                    }
                    a.instance.previous()
                }), this.$el.find(".flickity-prev-next-button.next").on("click", function() {
                    if (!1 === a.$wrapAround && a.instance.selectedIndex == a.instance.slides.length - 1 && 0 == a.instance.isAnimating) {
                        var t = a.instance.x;
                        anime({
                            targets: a.instance,
                            x: t - 100,
                            duration: 350,
                            easing: "easeOutCubic"
                        }), a.instance.startAnimation()
                    }
                    a.instance.next()
                })), this.$rowBG = "", this.$rowBGStored = "", t(this).is('.nectar-simple-slider[data-row-bg-connection="true"]') && (this.$rowBG = this.$el.parents(".wpb_row"), this.$rowBG = this.$rowBG.find("> .row-bg-wrap .row-bg"), this.$rowBGStored = this.$rowBG.length > 0 ? this.$rowBG.css("background-color") : "", this.instance.on("change", simpleSlideBGConnection.bind(this)), this.simpleSlideBGConnection()), this.$el.find(".bg-layer[data-nectar-img-src]").length > 0) var n = new Waypoint({
                element: this.$el[0],
                handler: function() {
                    e.find(".bg-layer[data-nectar-img-src]").each(function() {
                        var e = t(this)[0],
                            a = e.getAttribute("data-nectar-img-src");
                        e.style.backgroundImage = "url('" + a + "')", e.classList.add("loaded")
                    }), n.destroy()
                },
                offset: "95%"
            });
            if (this.$el.is('[data-parallax="true"]')) {
                var i = this.$el.find(".cell");
                !0 === this.$wrapAround && this.$el.find(".flickity-prev-next-button").on("click", function() {
                    e.addClass("disabled-nav"), setTimeout(function() {
                        e.removeClass("disabled-nav")
                    }, 500)
                });
                var s = this.$flickity_rtl ? 1 : -1;
                this.instance.on("scroll", function() {
                    t.each(a.instance.slides, function(t, e) {
                        var n = i[t].querySelector(".bg-layer"),
                            r = i[t].querySelector(".inner"),
                            o = a.instance,
                            l = 0;
                        l = 0 === t && o.slides.length > 2 ? Math.abs(o.x) > o.slidesWidth ? o.slidesWidth + o.x + o.slides[o.slides.length - 1].outerWidth + e.target : e.target + o.x : t === o.slides.length - 1 && Math.abs(o.x) + o.slides[t].outerWidth < o.slidesWidth ? e.target - o.slidesWidth + o.x - o.slides[t].outerWidth : e.target + o.x, n.style.transform = "translate3d(" + l * (s / 2) + "px,0,0)", r.style.transform = "translate3d(" + l * (s / 4) + "px,0,0)"
                    })
                })
            }
            this.$el.hasClass("nectar-simple-slider") && 1 == this.$paginationBool && (this.$el.find(".flickity-page-dots li").append('<svg width="65px" height="65px" viewBox="0 0 72 72" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle class="time" stroke-width="5" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>'), this.$flickity_stored_autoplay && (this.$el.find(".flickity-page-dots li circle.time").css("transition", "stroke-dashoffset " + (parseInt(this.$flickity_stored_autoplay) + 100) + "ms linear, stroke 0.2s ease"), this.$el.find(".flickity-page-dots li:first").addClass("no-trans"), setTimeout(function() {
                e.find(".flickity-page-dots li:first").removeClass("no-trans")
            }, 60), this.instance.on("select", function(t) {
                a.instance.playPlayer()
            }), this.instance.on("dragEnd", function(t) {
                a.instance.playPlayer(), e.find(".flickity-page-dots .is-selected").removeClass("no-trans")
            }), this.instance.on("dragStart", function(t) {
                e.find(".flickity-page-dots .is-selected").addClass("no-trans")
            })))
        }, kt.prototype.galleryParallax = function() {
            var e = this.$el.find(".cell"),
                a = this,
                n = this.$el.find(".nectar-fancy-box").length > 0 ? ".parallax-layer .box-bg" : ".nectar-el-parallax-scroll .img-wrap",
                i = !!this.$el.is('[data-wrap="wrap"]'),
                s = this.$flickity_rtl ? 1 : -1;
            this.instance.on("scroll", function() {
                t.each(a.instance.slides, function(t, r) {
                    var o = e[t].querySelector(n),
                        l = a.instance,
                        d = 0;
                    d = 0 === t && i ? Math.abs(l.x) > l.slidesWidth ? l.slidesWidth + l.x + l.slides[l.slides.length - 1].outerWidth + r.target : r.target + l.x : 1 === t && i ? Math.abs(l.x) > l.slidesWidth ? l.slidesWidth + l.x + l.slides[l.slides.length - 2].outerWidth + r.target : r.target + l.x : t === l.slides.length - 1 && i ? Math.abs(l.x) + l.slides[t].outerWidth < l.slidesWidth ? r.target - l.slidesWidth + l.x - l.slides[t].outerWidth : r.target + l.x : t === l.slides.length - 2 && i && Math.abs(l.x) + l.slides[t].outerWidth + l.slides[t + 1].outerWidth < l.slidesWidth ? r.target - l.slidesWidth + l.x - l.slides[t].outerWidth : r.target + l.x, o && (o.style.transform = "translate3d(" + d * (s / 11) + "px,0,0)", o.style.willChange = "transform")
                })
            }), this.instance.reposition()
        }, kt.prototype.visualizedTotalControls = function() {
            var e = this.$el,
                a = !!(this.$el.hasClass("drag-indicator-only") || this.$el.is('[data-r-bottom-total="true"]') || this.ticker);
            0 != this.$el.find(".visualized-total").length || a || (this.$el.parents(".full-width-content").length > 0 && this.$el.parents(".vc_col-sm-12").length > 0 ? this.$el.append('<div class="container normal-container"><div class="visualized-total"><span></span></div></div>') : this.$el.append('<div class="visualized-total"><span></span></div>')), pt.usingMobileBrowser || (L[this.index] = new yt(this.$el, "horizontal-movement"), this.instance.on("dragMove", function(t, e) {
                pt.clientY = e.clientY, pt.clientX = e.clientX
            }), this.instance.on("pointerDown", function(e, a) {
                t(".nectar-drag-indicator").addClass("pointer-down")
            }), this.instance.on("pointerUp", function(e, a) {
                t(".nectar-drag-indicator").removeClass("pointer-down")
            }));
            var n = this.$el.find(".flickity-page-dots li").length,
                i = this.$el.find(".visualized-total span"),
                r = 1,
                o = this.$el.find(".visualized-total").width();
            a || (s.on("smartresize", function() {
                setTimeout(function() {
                    n = e.find(".flickity-page-dots li").length, o = e.find(".visualized-total").width(), r = o / n * e.find(".flickity-page-dots .is-selected").index(), i.css("width", 100 / n + "%"), i.css({
                        x: r + "px"
                    })
                }, 200)
            }), setTimeout(function() {
                n = e.find(".flickity-page-dots li").length, o = e.find(".visualized-total").width(), i.css("width", 100 / n + "%")
            }, 200), this.instance.on("change", function(t, a) {
                r = o / n * e.find(".flickity-page-dots .is-selected").index(), i.css({
                    x: r + "px"
                })
            }))
        }, kt.prototype.fixedContentStyle = function() {
            var a = pt.usingMobileBrowser,
                n = this.$el,
                i = this;
            this.$flickity_stored_autoplay && (t(e).on("nectar-material-ocm-open", function() {
                i.instance.stopPlayer()
            }), t(e).on("nectar-material-ocm-close", function() {
                i.instance.playPlayer()
            })), this.instance.on("scroll", function() {
                if (!a)
                    if (1 != gt.materialOffCanvasOpen) {
                        var e = n.find(".cell").outerWidth() + 25,
                            r = t('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 275 : 0,
                            o = (s.width() + r - n.parents(".main-content").width()) / 2;
                        o += parseInt(n.css("margin-left")) + 2, i.instance.slides.forEach(function(a, n) {
                            var s = 1,
                                r = 0,
                                l = 0,
                                d = 10,
                                c = 1,
                                h = t(a.cells[0].element).offset().left,
                                u = t(".nectar-flickity.instance-" + i.index + " .cell:nth-child(" + (n + 1) + ")");
                            h - o < 0 && h - o > -1 * e ? (s = 1 + (h - o) / 1500, c = 1 + (h - o + 70) / 550, r = -1 * (h - o), l = (h - o) / 25 * -1) : (s = 1, c = 1, r = 0, l = 0), d = h + 5 - o < 0 && h - o > -1 * e ? 5 : 10, u.css({
                                "z-index": d
                            }), u.find(".inner-wrap-outer").css({
                                transform: "perspective(800px) translateX(" + r + "px) rotateY(" + l + "deg) translateZ(0)",
                                opacity: c
                            }), u.find(".inner-wrap").css({
                                transform: "scale(" + s + ") translateZ(0)"
                            })
                        })
                    } else i.instance.slides.forEach(function(t, e) {
                        var a = n.find(".cell:nth-child(" + (e + 1) + ")");
                        a.find(".inner-wrap-outer").css({
                            transform: "perspective(800px) translateX(0) rotateY(0) translateZ(0)",
                            opacity: "1"
                        }), a.find(".inner-wrap").css({
                            transform: "scale(1) translateZ(0)"
                        })
                    })
            })
        }, Mt.prototype.setup = function() {
            !pt.usingFrontEndEditor && "IntersectionObserver" in e ? this.lazyInit() : this.init()
        }, Mt.prototype.init = function() {
            "legacy" === this.type ? this.legacyCarousel() : this.flickityCarousel()
        }, Mt.prototype.lazyInit = function() {
            var t = this;
            this.observer = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    e.isIntersecting && (t.init(), t.observer.unobserve(e.target))
                })
            }, {
                root: jt() ? null : a,
                rootMargin: "400px 0px 400px 0px",
                threshold: 0
            }), this.observer.observe(this.$el[0])
        }, Mt.prototype.legacyCarousel = function() {
            var a = this.$el.find("ul.products"),
                n = this.$el.parents(".full-width-content ").length > 0 ? 400 : 353,
                i = a;
            0 == a.find("img").length && (i = r), this.$el.append('<a class="carousel-prev" href="#"><i class="icon-salient-left-arrow"></i></a> <a class="carousel-next" href="#"><i class="icon-salient-right-arrow"></i></a>'), imagesLoaded(i, function() {
                a.carouFredSel({
                    circular: !0,
                    responsive: !0,
                    items: {
                        width: n,
                        visible: {
                            min: 1,
                            max: "auto"
                        }
                    },
                    swipe: {
                        onTouch: !0,
                        onMouse: !0,
                        options: {
                            excludedElements: "button, input, select, textarea, .noSwipe",
                            tap: function(a, n) {
                                !t(n).attr("href") || t(n).is('[target="_blank"]') || t(n).hasClass("add_to_wishlist") || t(n).hasClass("add_to_cart_button") || t(n).is('[rel^="prettyPhoto"]') || e.open(t(n).attr("href"), "_self"), !t(n).parent().attr("href") || t(n).parent().is('[target="_blank"]') || t(n).parent().hasClass("add_to_wishlist") || t(n).parent().hasClass("add_to_cart_button") || t(n).parent().is('[rel^="prettyPhoto"]') || e.open(t(n).parent().attr("href"), "_self")
                            }
                        },
                        onBefore: function() {
                            a.find(".product-wrap").trigger("mouseleave"), a.find(".product a").trigger("mouseup")
                        }
                    },
                    scroll: {
                        items: "auto",
                        easing: "easeInOutQuart",
                        duration: 800
                    },
                    prev: {
                        button: function() {
                            return a.parents(".carousel-wrap").find(".carousel-prev")
                        }
                    },
                    next: {
                        button: function() {
                            return a.parents(".carousel-wrap").find(".carousel-next")
                        }
                    },
                    auto: {
                        play: !1
                    }
                }).animate({
                    opacity: 1
                }, 1300), a.parents(".carousel-wrap").wrap('<div class="carousel-outer">'), a.addClass("finished-loading"), s.trigger("resize")
            })
        }, Mt.prototype.flickityCarousel = function() {
            var a = this.$el;
            this.$el.find(".products > li").each(function() {
                t(this).wrap('<div class="flickity-cell"></div>')
            });
            var n = !!a.is('[data-controls="bottom-pagination"]'),
                i = !a.is('[data-controls="bottom-pagination"]'),
                s = !a.is('[data-wrap="no-wrap"]'),
                o = 1 != s || n,
                l = a.is("[data-autorotate-speed]") && parseInt(a.attr("data-autorotate-speed")) > 800 ? parseInt(a.attr("data-autorotate-speed")) : 5e3;
            a.is('[data-autorotate="true"]') || (l = !1), this.$el.find("ul.products").addClass("generate-markup"), this.instance = this.$el.find("ul.products"), a.is('[data-controls="arrows-overlaid"]') && (i = !0), 1 == i && this.instance.on("ready.flickity", function() {
                var t = a.find(".flickity-prev-next-button.previous").detach(),
                    e = a.find(".flickity-prev-next-button.next").detach();
                a.find(".nectar-woo-carousel-top").append(t).append(e)
            });
            var d = !1,
                c = "center";
            r.hasClass("rtl") && (d = !0, c = "right"), a.is('[data-group-columns="no-overflow"]') ? (o = !0, c = "left") : a.is('[data-group-columns="overflow"]') && (o = !1, c = "center");
            var h = !1;
            if (e.nectarOptions && e.nectarOptions.woo_related_upsell_carousel && "true" == e.nectarOptions.woo_related_upsell_carousel && this.$el.hasClass("related-upsell-carousel") && (h = !0, s = !1, o = !0, "center" == c && this.$el.find(".products > div").length < 4 && (c = "left"), this.$el.find(".products > div").length < 5 && this.$el.addClass("desktop-controls-hidden")), this.instance.flickity({
                    draggable: !0,
                    contain: !0,
                    lazyLoad: !1,
                    imagesLoaded: !0,
                    cellAlign: c,
                    groupCells: o,
                    prevNextButtons: i,
                    pageDots: n,
                    resize: !0,
                    adaptiveHeight: !1,
                    percentPosition: !0,
                    setGallerySize: !0,
                    rightToLeft: d,
                    wrapAround: s,
                    autoPlay: l,
                    dragThreshold: pt.usingMobileBrowser ? 25 : 3,
                    accessibility: !1
                }), this.$el.is('[data-controls="touch_indicator"]')) pt.usingMobileBrowser || (L.push(new yt(this.$el, "horizontal-movement")), this.instance.on("dragMove.flickity", function(t, e) {
                pt.clientY = e.clientY, pt.clientX = e.clientX
            }), this.instance.on("pointerDown.flickity", function(e, a) {
                t(".nectar-drag-indicator").addClass("pointer-down")
            }), this.instance.on("pointerUp.flickity", function(e, a) {
                t(".nectar-drag-indicator").removeClass("pointer-down")
            }));
            else if (1 == i) {
                a.find(".flickity-prev-next-button").append('<svg width="65px" height="65px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle> <circle class="time" stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>');
                var u = t('<div class="woo-flickity-count" />');
                1 == h ? a.find("section > h2").append(u) : a.append(u);
                var p = this.instance.data("flickity");
                At({
                    data: {
                        wooFlickity: p,
                        wooFlickityCount: u
                    }
                }), this.instance.on("select.flickity", {
                    wooFlickity: p,
                    wooFlickityCount: u
                }, At)
            }
            this.$el.removeClass("animated-in"), pa()
        }, s.on("orientationchange", function() {
            setTimeout(Lt, 200)
        }), e.requestAnimationFrame = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
            setTimeout(t, 1e3 / 60)
        }, t(e).on("resize", function() {
            clearTimeout(ft), ft = setTimeout(function() {
                t(e).trigger("smartresize")
            }, 125)
        }), t.fn.smartresize = function(t) {
            return t ? this.on("smartresize", t) : this.trigger("smartresize", ["execAsap"])
        }, Dt.prototype.init = function() {
            var t, e, n, i, s, r;
            e = {
                hidden: !1
            }, n = (t = a).createElement("STYLE"), i = "addEventListener" in t, s = function(e, a) {
                i ? t.addEventListener(e, a) : t.attachEvent("on" + e, a)
            }, r = function(t) {
                n.styleSheet ? n.styleSheet.cssText = t : n.innerHTML = t
            }, t.getElementsByTagName("HEAD")[0].appendChild(n), s("mousedown", function() {
                0 == e.hidden && (r(":focus{outline:0}::-moz-focus-inner{border:0;}"), e.hidden = !0)
            }), s("keydown", function() {
                r(""), e.hidden = !1
            })
        }, Dt.prototype.events = function() {
            t(e).on("nectar-ocm-open", this.setFocus.bind(this)), t(e).on("nectar-ocm-close", this.releaseFocus.bind(this)), t("nav").on("focus.aria mouseenter.aria", '[aria-haspopup="true"]', function(e) {
                t(e.currentTarget).attr("aria-expanded", !0)
            }), t("nav").on("blur.aria mouseleave.aria", '[aria-haspopup="true"]', function(e) {
                t(e.currentTarget).attr("aria-expanded", !1)
            }), this.escCloseEvents()
        }, Dt.prototype.setFocus = function() {
            this.state.ocmFocus = !0, t("#slide-out-widget-area").attr("tabindex", "-1").focus()
        }, Dt.prototype.releaseFocus = function() {
            t("#slide-out-widget-area").attr("tabindex", "")
        }, Dt.prototype.escCloseEvents = function() {
            t(a).on("keyup", function(e) {
                27 == e.keyCode && (t(".open-search").length > 0 && (closeSearch(), h.removeClass("open-search")), t(".ocm-effect-wrap.material-ocm-open").length > 0 ? t(".slide-out-widget-area-toggle.material-open a").trigger("click") : t("#slide-out-widget-area .slide_out_area_close").length > 0 && t("#slide-out-widget-area.open").length > 0 && t("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed").trigger("click"), t(".nectar-slide-in-cart.style_slide_in_click.open").length > 0 && on(), t("#review_form_wrapper.open").length > 0 && t(".nectar-slide-in-cart-bg").trigger("click"))
            })
        }, jQuery.fn.setCursorPosition = function(e) {
            return 0 == this.length ? this : t(this).setSelection(e, e)
        }, jQuery.fn.setSelection = function(t, e) {
            if (0 == this.length) return this;
            var a = this[0];
            if (a.createTextRange) {
                var n = a.createTextRange();
                n.collapse(!0), n.moveEnd("character", e), n.moveStart("character", t), n.select()
            } else a.setSelectionRange && (a.focus(), a.setSelectionRange(t, e));
            return this
        }, t.extend(jQuery.expr.pseudos, {
            transparent: function(e, a, n) {
                return "0" === t(e).css("opacity")
            }
        }), t.cssHooks.color = {
            get: function(t) {
                var n;
                return t.currentStyle ? n = t.currentStyle.color : e.getComputedStyle && (n = a.defaultView.getComputedStyle(t, null).getPropertyValue("color")), -1 == n.search("rgb") ? n : (n = n.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + Qt(n[1]) + Qt(n[2]) + Qt(n[3]) : void 0
            }
        }, t.cssHooks.backgroundColor = {
            get: function(t) {
                var n;
                return t.currentStyle ? n = t.currentStyle.backgroundColor : e.getComputedStyle && (n = a.defaultView.getComputedStyle(t, null).getPropertyValue("background-color")), -1 == n.search("rgb") ? n : (n = n.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + Qt(n[1]) + Qt(n[2]) + Qt(n[3]) : void 0
            }
        },
        function(t) {
            function n(a, i) {
                var s = t.proxy(this.process, this);
                this.$body = t("body"), this.$scrollElement = t(t(a).is("body") ? e : a), this.options = t.extend({}, n.DEFAULTS, i), this.selector = (this.options.target || "") + " ul li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s), this.pageSubmenuHeight = 0, this.calcPageSubemnu(), this.refresh(), this.process(), t(e).on("resize", this.calcPageSubemnu.bind(this))
            }
            n.VERSION = "3.2.0", n.DEFAULTS = {
                offset: 10
            }, n.prototype.calcPageSubemnu = function() {
                (t('.page-submenu[data-sticky="true"]').length > 0 && 0 == t('body[data-hhun="1"]').length || t('.page-submenu[data-sticky="true"]').length > 0 && t('#header-outer[data-remove-fixed="1"]').length > 0) && (this.pageSubmenuHeight = t(".page-submenu").height())
            }, n.prototype.getScrollHeight = function() {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, a.documentElement.scrollHeight)
            }, n.prototype.refresh = function() {
                var e, a = "offset",
                    n = 0;
                null != (e = this.$scrollElement[0]) && e === e.window || (a = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
                var i = this;
                this.$body.find(this.selector).map(function() {
                    var e = t(this),
                        i = e.data("target") || e.attr("href");
                    "#%20" === i && (i = "");
                    var s = /^#./.test(i) && t(i);
                    return s && s.length && s.is(":visible") && [
                        [s[a]().top + n, i]
                    ] || null
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).each(function() {
                    i.offsets.push(this[0]), i.targets.push(this[1])
                })
            }, n.prototype.process = function() {
                if (gt.preventScroll) return !0;
                var e, a = pt.scrollTop + this.options.offset + this.pageSubmenuHeight,
                    n = this.getScrollHeight(),
                    i = this.options.offset + n - this.$scrollElement.height() - this.pageSubmenuHeight,
                    s = this.offsets,
                    r = this.targets,
                    o = this.activeTarget;
                if (this.activeTarget && a < this.offsets[0] && this.offsets[0] > 0) return this.activeTarget = null, void t(this.selector).parentsUntil(this.options.target, ".current-menu-item").removeClass("current-menu-item").removeClass("sfHover");
                if (this.scrollHeight != n && this.refresh(), a >= i) return o != (e = r[r.length - 1]) && this.activate(e);
                if (o && a <= s[0]) return o != (e = r[0]) && this.activate(e);
                for (e = s.length; e--;) o != r[e] && a >= s[e] && (!s[e + 1] || a <= s[e + 1]) && this.activate(r[e])
            }, n.prototype.activate = function(e) {
                this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".current-menu-item").removeClass("current-menu-item").removeClass("sfHover");
                var a = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                    n = t(a).parents("li").addClass("current-menu-item");
                n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("current-menu-item")), n.trigger("activate.bs.scrollspy")
            };
            var i = t.fn.scrollspy;
            t.fn.scrollspy = function(e) {
                return this.each(function() {
                    var a = t(this),
                        i = a.data("bs.scrollspy"),
                        s = "object" == typeof e && e;
                    i || a.data("bs.scrollspy", i = new n(this, s)), "string" == typeof e && i[e]()
                })
            }, t.fn.scrollspy.Constructor = n, t.fn.scrollspy.noConflict = function() {
                return t.fn.scrollspy = i, this
            }
        }(jQuery);
    var Kt, te, ee = function(t) {
        t = t.split("+").join(" ");
        for (var e, a = {}, n = /[?&]?([^=]+)=([^&]*)/g; e = n.exec(t);) a[decodeURIComponent(e[1])] = decodeURIComponent(e[2]);
        return a
    }(a.location.search);
    Kt = jQuery, te = Kt(e), Kt.fn.visible = function(t, e, a) {
        if (!(this.length < 1)) {
            var n = this.length > 1 ? this.eq(0) : this,
                i = n.get(0),
                s = te.width(),
                r = te.height(),
                o = (a = a || "both", !0 !== e || i.offsetWidth * i.offsetHeight);
            if ("function" == typeof i.getBoundingClientRect) {
                var l = i.getBoundingClientRect(),
                    d = l.top >= 0 && l.top < r,
                    c = l.bottom > 0 && l.bottom <= r,
                    h = l.left >= 0 && l.left < s,
                    u = l.right > 0 && l.right <= s,
                    p = t ? d || c : d && c,
                    f = t ? h || u : h && u;
                if ("both" === a) return o && p && f;
                if ("vertical" === a) return o && p;
                if ("horizontal" === a) return o && f
            } else {
                var g = te.scrollTop(),
                    m = g + r,
                    v = te.scrollLeft(),
                    b = v + s,
                    w = n.offset(),
                    y = w.top,
                    _ = y + n.height(),
                    C = w.left,
                    x = C + n.width(),
                    k = !0 === t ? _ : y,
                    $ = !0 === t ? y : _,
                    T = !0 === t ? x : C,
                    I = !0 === t ? C : x;
                if ("both" === a) return !!o && m >= $ && k >= g && b >= I && T >= v;
                if ("vertical" === a) return !!o && m >= $ && k >= g;
                if ("horizontal" === a) return !!o && b >= I && T >= v
            }
        }
    };
    var ae = function(t, n, i, s, r, o) {
            for (var l = 0, d = ["webkit", "moz", "ms", "o"], c = 0; c < d.length && !e.requestAnimationFrame; ++c) e.requestAnimationFrame = e[d[c] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[d[c] + "CancelAnimationFrame"] || e[d[c] + "CancelRequestAnimationFrame"];
            e.requestAnimationFrame || (e.requestAnimationFrame = function(t) {
                var a = (new Date).getTime(),
                    n = Math.max(0, 16 - (a - l)),
                    i = e.setTimeout(function() {
                        t(a + n)
                    }, n);
                return l = a + n, i
            }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            });
            var h = this;
            for (var u in h.options = {
                    useEasing: !0,
                    useGrouping: !0,
                    separator: ",",
                    decimal: ".",
                    easingFn: null,
                    formattingFn: null
                }, o) o.hasOwnProperty(u) && (h.options[u] = o[u]);
            "" === h.options.separator && (h.options.useGrouping = !1), h.options.prefix || (h.options.prefix = ""), h.options.suffix || (h.options.suffix = ""), h.d = "string" == typeof t ? a.getElementById(t) : t, h.startVal = Number(n), h.endVal = Number(i), h.countDown = h.startVal > h.endVal, h.frameVal = h.startVal, h.decimals = Math.max(0, s || 0), h.dec = Math.pow(10, h.decimals), h.duration = 1e3 * Number(r) || 2e3, h.formatNumber = function(t) {
                var e, a, n, i;
                if (t = t.toFixed(h.decimals), a = (e = (t += "").split("."))[0], n = e.length > 1 ? h.options.decimal + e[1] : "", i = /(\d+)(\d{3})/, h.options.useGrouping)
                    for (; i.test(a);) a = a.replace(i, "$1" + h.options.separator + "$2");
                return h.options.prefix + a + n + h.options.suffix
            }, h.easeOutExpo = function(t, e, a, n) {
                return a * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
            }, h.easingFn = h.options.easingFn ? h.options.easingFn : h.easeOutExpo, h.formattingFn = h.options.formattingFn ? h.options.formattingFn : h.formatNumber, h.version = function() {
                return "1.7.1"
            }, h.printValue = function(t) {
                var e = h.formattingFn(t);
                "INPUT" === h.d.tagName ? this.d.value = e : "text" === h.d.tagName || "tspan" === h.d.tagName ? this.d.textContent = e : this.d.innerHTML = e
            }, h.count = function(t) {
                h.startTime || (h.startTime = t), h.timestamp = t;
                var e = t - h.startTime;
                h.remaining = h.duration - e, h.options.useEasing ? h.countDown ? h.frameVal = h.startVal - h.easingFn(e, 0, h.startVal - h.endVal, h.duration) : h.frameVal = h.easingFn(e, h.startVal, h.endVal - h.startVal, h.duration) : h.countDown ? h.frameVal = h.startVal - (h.startVal - h.endVal) * (e / h.duration) : h.frameVal = h.startVal + (h.endVal - h.startVal) * (e / h.duration), h.countDown ? h.frameVal = h.frameVal < h.endVal ? h.endVal : h.frameVal : h.frameVal = h.frameVal > h.endVal ? h.endVal : h.frameVal, h.frameVal = Math.round(h.frameVal * h.dec) / h.dec, h.printValue(h.frameVal), e < h.duration ? h.rAF = requestAnimationFrame(h.count) : h.callback && h.callback()
            }, h.start = function(t) {
                return h.callback = t, h.rAF = requestAnimationFrame(h.count), !1
            }, h.pauseResume = function() {
                h.paused ? (h.paused = !1, delete h.startTime, h.duration = h.remaining, h.startVal = h.frameVal, requestAnimationFrame(h.count)) : (h.paused = !0, cancelAnimationFrame(h.rAF))
            }, h.reset = function() {
                h.paused = !1, delete h.startTime, h.startVal = n, cancelAnimationFrame(h.rAF), h.printValue(h.startVal)
            }, h.update = function(t) {
                cancelAnimationFrame(h.rAF), h.paused = !1, delete h.startTime, h.startVal = h.frameVal, h.endVal = Number(t), h.countDown = h.startVal > h.endVal, h.rAF = requestAnimationFrame(h.count)
            }, h.printValue(h.startVal)
        },
        ne = function(t, e, a, n) {
            return a * ((t = t / n - 1) * t * t + 1) + e
        };

    function ie(e, n) {
        if (e.length > 0) {
            var i = a.head || a.getElementsByTagName("head")[0],
                s = a.createElement("style");
            s.type = "text/css", s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(a.createTextNode(e)), t(s).attr("id", n), t("head").find("#" + n).remove(), i.appendChild(s)
        }
    }

    function se() {
        t("a.pp").removeClass("pp").attr("data-fancybox", ""), t("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr("rel").attr("data-fancybox", "");
        var e = Zt();
        t(".wpb_gallery .wpb_gallery_slidesnectarslider_style").each(function() {
            e = Zt(), t(this).find(".swiper-slide a:not(.ext-url-link)").attr("data-fancybox", "group_" + e)
        }), t('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function() {
            e = Zt(), t(this).find(".slides > li > a").attr("data-fancybox", "group_" + e)
        }), t(".wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style").each(function() {
            e = Zt(), t(this).find(".cell > a:not(.ext-url-link)").attr("data-fancybox", "group_" + e)
        }), t(".portfolio-items, .wpb_gallery_slidesparallax_image_grid, .nectar-post-grid-item").each(function() {
            e = Zt(), t(this).find(".pretty_photo").length > 0 ? t(this).find(".pretty_photo").removeClass("pretty_photo").attr("data-fancybox", "group_" + e) : t(this).find('a[rel*="prettyPhoto["]').length > 0 && t(this).find('a[rel*="prettyPhoto["]').removeAttr("rel").attr("data-fancybox", "group_" + e)
        }), r.hasClass("nectar-auto-lightbox") && (t(".gallery").each(function() {
            if (0 == t(this).find('.gallery-icon a[rel^="prettyPhoto"]').length) {
                var e = Zt();
                t(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').attr("data-fancybox", "group_" + e).removeClass("pretty_photo")
            }
        }), t(".wp-block-gallery").each(function() {
            var e = Zt();
            t(this).find('.wp-block-image a[href*=".jpg"], .wp-block-image a[href*=".png"], .wp-block-image a[href*=".gif"], .wp-block-image a[href*=".jpeg"], .wp-block-image a[href*=".webp"]').attr("data-fancybox", "group_" + e).removeClass("pretty_photo")
        }), t(".main-content img").each(function() {
            t(this).parent().is("[href]") && !t(this).parent().is(".magnific-popup") && 0 == t(this).parents(".tiled-gallery").length && 0 == t(this).parents(".product-image").length && 0 == t(this).parents(".gallery-icon").length && 0 == t(this).parents(".wp-block-gallery").length && 0 == t(this).parents(".woocommerce-product-gallery").length && 0 == t(this).parents(".wpb_gallery_slides.wpb_flexslider").length && 0 == t(this).parents(".iosSlider.product-slider").length && (t(this).parent().attr("href").match(/\.(jpg|png|gif)\b/) && t(this).parent().attr("data-fancybox", ""))
        }));
        var a = (t("body.admin-bar").length, [60, 100]);
        pt.winW < 1e3 && (a = [0, 0]), t("[data-fancybox]").fancybox({
            animationEffect: "zoom-in-out",
            animationDuration: 350,
            buttons: ["fullScreen", "zoom", "close"],
            margin: a,
            backFocus: !1,
            loop: !0,
            caption: function() {
                return t(this).attr("title")
            },
            hash: !1,
            beforeLoad: function(e) {
                "string" != typeof e.current.src && t.fancybox.close(!0)
            },
            mobile: {
                margin: 0
            }
        })
    }

    function re() {
        setTimeout(function() {
            t('body[data-ls="magnific"]').length > 0 || t('body[data-ls="pretty_photo"]').length > 0 ? (t("a.pp").removeClass("pp").addClass("magnific-popup"), t("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr("rel").addClass("magnific-popup"), t(".wpb_gallery .wpb_gallery_slidesnectarslider_style").each(function() {
                t(this).find(".swiper-slide a:not(.ext-url-link)").addClass("pretty_photo")
            }), t('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function() {
                t(this).find(".slides > li > a").addClass("pretty_photo")
            }), t(".wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style").each(function() {
                t(this).find(".cell > a:not(.ext-url-link)").addClass("pretty_photo")
            }), t(".portfolio-items, .wpb_gallery .swiper-slide, .wpb_gallery_slidesflickity_style .cell, .wpb_gallery_slidesflickity_static_height_style .cell, .wpb_gallery_slides.wpb_flexslider ul > li, .wpb_gallery .parallax-grid-item, .nectar-post-grid-item").each(function() {
                t(this).find(".pretty_photo").length > 0 ? t(this).find(".pretty_photo").removeClass("pretty_photo").addClass("gallery").addClass("magnific") : t(this).find('a[rel*="prettyPhoto["]').length > 0 && t(this).find('a[rel*="prettyPhoto["]').removeAttr("rel").addClass("gallery").addClass("magnific")
            }), t("a[data-rel='prettyPhoto[product-gallery]']").each(function() {
                t(this).removeAttr("data-rel").addClass("magnific").addClass("gallery")
            }), r.hasClass("nectar-auto-lightbox") && (t(".gallery").each(function() {
                0 == t(this).find('.gallery-icon a[rel^="prettyPhoto"]').length && t(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').addClass("magnific").addClass("gallery").removeClass("pretty_photo")
            }), t(".main-content img").each(function() {
                t(this).parent().is("[href]") && !t(this).parent().is(".magnific-popup") && 0 == t(this).parents(".tiled-gallery").length && 0 == t(this).parents(".product-image").length && 0 == t(this).parents(".iosSlider.product-slider").length && t(this).parent().attr("href").match(/\.(jpg|png|gif)\b/) && t(this).parent().addClass("magnific-popup").addClass("image-link")
            })), t("a.magnific-popup:not(.gallery):not(.nectar_video_lightbox):not(.nectar_video_lightbox_trigger)").magnificPopup({
                type: "image",
                callbacks: {
                    imageLoadComplete: function() {
                        var t = this;
                        setTimeout(function() {
                            t.wrap.addClass("mfp-image-loaded")
                        }, 10)
                    },
                    beforeOpen: function() {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
                    },
                    open: function() {
                        t.magnificPopup.instance.next = function() {
                            var e = this;
                            this.wrap.removeClass("mfp-image-loaded"), setTimeout(function() {
                                t.magnificPopup.proto.next.call(e)
                            }, 100)
                        }, t.magnificPopup.instance.prev = function() {
                            var e = this;
                            this.wrap.removeClass("mfp-image-loaded"), setTimeout(function() {
                                t.magnificPopup.proto.prev.call(e)
                            }, 100)
                        }
                    }
                },
                fixedContentPos: !1,
                mainClass: "mfp-zoom-in",
                removalDelay: 400
            }), t("a.magnific-popup.nectar_video_lightbox, .nectar_video_lightbox_trigger, .magnific_nectar_video_lightbox a.link_text, .swiper-slide a[href*=youtube], .swiper-slide a[href*=vimeo], .nectar-video-box a.full-link.magnific-popup").magnificPopup({
                type: "iframe",
                fixedContentPos: !1,
                mainClass: "mfp-zoom-in",
                removalDelay: 400
            }), t("a.magnific.gallery").each(function() {
                var e = t(this).closest(".wpb_column").length > 0 ? t(this).closest(".wpb_column") : t(this).parents(".row");
                e.length > 0 && !e.hasClass("lightbox-col") && (e.magnificPopup({
                    type: "image",
                    delegate: "a.magnific",
                    mainClass: "mfp-zoom-in",
                    fixedContentPos: !1,
                    callbacks: {
                        elementParse: function(e) {
                            t(e.el).is("[href]") && -1 != t(e.el).attr("href").indexOf("iframe=true") || t(e.el).is("[href]") && -1 != t(e.el).attr("href").indexOf("https://www.youtube.com/watch") ? e.type = "iframe" : t(e.el).is("[href]") && -1 != t(e.el).attr("href").indexOf("video-popup-") ? e.type = "inline" : e.type = "image"
                        },
                        imageLoadComplete: function() {
                            var t = this;
                            setTimeout(function() {
                                t.wrap.addClass("mfp-image-loaded")
                            }, 10)
                        },
                        beforeOpen: function() {
                            this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
                        },
                        open: function() {
                            if (t(this.content).find(".mejs-video video").length > 0 && t().mediaelementplayer) {
                                t(this.content).find(".mejs-video video")[0].player.remove();
                                var e = this;
                                setTimeout(function() {
                                    t(e.content).find("video").mediaelementplayer(), t(e.content).find(".mejs-video video")[0].player.play()
                                }, 50)
                            }
                            t.magnificPopup.instance.next = function() {
                                var e = this;
                                this.wrap.removeClass("mfp-image-loaded"), setTimeout(function() {
                                    t.magnificPopup.proto.next.call(e), t(e.content).find(".mejs-video video").length > 0 && t(e.content).find(".mejs-video video")[0].play()
                                }, 100)
                            }, t.magnificPopup.instance.prev = function() {
                                var e = this;
                                this.wrap.removeClass("mfp-image-loaded"), setTimeout(function() {
                                    t.magnificPopup.proto.prev.call(e), t(e.content).find(".mejs-video video").length > 0 && t(e.content).find(".mejs-video video")[0].play()
                                }, 100)
                            }
                        },
                        close: function() {
                            t(this.content).find(".mejs-video video").length > 0 && t(this.content).find(".mejs-video video")[0].load()
                        }
                    },
                    removalDelay: 400,
                    gallery: {
                        enabled: !0
                    }
                }), e.addClass("lightbox-col"))
            })) : t('body[data-ls="fancybox"]').length > 0 && (t().fancybox ? se() : setTimeout(se, 200))
        }, 60)
    }

    function oe() {
        t(ot + " .wpb_animate_when_almost_visible").each(function() {
            var e = t(this),
                a = 1 == lt ? "200%" : "90%",
                n = new Waypoint({
                    element: e[0],
                    handler: function() {
                        e.parents(".wpb_tab").length > 0 && "hidden" == e.parents(".wpb_tab").css("visibility") || e.hasClass("animated") ? n.destroy() : (e.addClass("animated"), e.addClass("wpb_start_animation"), n.destroy(), e.is(".nectar-button") && t('body[data-button-style*="rounded_shadow"]').length > 0 && setTimeout(function() {
                            e.removeClass("wpb_start_animation")
                        }, 1100))
                    },
                    offset: a
                })
        })
    }

    function le(t, e) {
        this.$el = t, this.duration = e, this.interval = "", this.words = [], this.state = {
            activeIndex: 0,
            sequenceStarted: 0,
            visible: !1
        }, this.setup()
    }

    function de() {
        t(ot + ".nectar-milestone").each(function() {
            var e = 1 == lt ? "250%" : "98%";
            pt.usingMobileBrowser && "98%" == e && (e = "110%");
            var a = 0;
            t(this).is("[data-animation-delay]") && t(this).attr("data-animation-delay").length > 0 && "false" != t(this).attr("data-animation") && (a = t(this).attr("data-animation-delay"));
            var n = t(this),
                i = new Waypoint({
                    element: n[0],
                    handler: function() {
                        if (n.parents(".wpb_tab").length > 0 && "hidden" == n.parents(".wpb_tab").css("visibility") || n.hasClass("animated-in")) i.destroy();
                        else {
                            var e = n.find(".number span:not(.symbol)").text().replace(/,/g, ""),
                                s = 0;
                            if (-1 !== e.toString().indexOf(".")) {
                                s = 2;
                                var r = e.toString().split(".")[1].length;
                                r > 2 && r < 5 && (s = r)
                            }
                            e = parseFloat(e), setTimeout(function() {
                                if (n.hasClass("motion_blur")) n.find("span").each(function(e) {
                                    var a = t(this);
                                    setTimeout(function() {
                                        a.addClass("in-sight")
                                    }, 200 * e)
                                });
                                else {
                                    var a = {
                                            easingFn: ne
                                        },
                                        i = n.find(".number span:not(.symbol)")[0];
                                    new ae(i, 0, e, s, 2.2, a).start()
                                }
                                n.addClass("animated-in")
                            }, a), i.destroy()
                        }
                    },
                    offset: e
                })
        })
    }

    function ce(t) {
        var e, a, n;
        (e = t.parent()).length ? (a = e.position().left, n = e.width()) : a = n = 0, t.parent().parent().find(".magic-line").css("transform", "translateX(" + a + "px) scaleX(" + n + ")")
    }

    function he() {
        r.on("click", ".tabbed > ul li:not(.cta-button) a", function(a) {
            if (function(a) {
                    var n = a.parents("li").index() + 1,
                        i = t("body.vc_editor").length > 0 ? "> .wpb_tab " : "";
                    if (a.closest(".tabbed").length > 0 && a.closest(".tabbed").is('[data-style="toggle_button"]') && 3 === n && (n = 2), !a.hasClass("active-tab") && !a.hasClass("loading")) {
                        a.parents("ul").find("a").removeClass("active-tab"), a.parents("ul").find("li").removeClass("active-tab"), a.addClass("active-tab"), a.parent().addClass("active-tab"), a.closest(".tabbed").find("> div:not(.clear)" + i).css({
                            visibility: "hidden",
                            position: "absolute",
                            opacity: "0",
                            left: "-9999px",
                            display: "none"
                        }).removeClass("visible-tab");
                        var o = a.parents('.tabbed[data-animation="none"]').length > 0 ? 0 : 400;
                        if (t("body.vc_editor").length > 0) {
                            var l = a.parent().is("[data-m-id]") ? a.parent().attr("data-m-id") : "";
                            a.parents('.tabbed[data-style="toggle_button"]').length > 0 && a.parents("li").index() + 1 === 3 && a.parents(".wpb_tabs_nav").find(".toggle-button[data-m-id]").length > 0 && (l = a.parents(".wpb_tabs_nav").find(".toggle-button").attr("data-m-id")), a.parents(".tabbed").find('> div[data-model-id="' + l + '"]' + i).css({
                                visibility: "visible",
                                position: "relative",
                                left: "0",
                                display: "block"
                            }).stop().transition({
                                opacity: 1
                            }, o).addClass("visible-tab"), r.is('[data-flex-cols="true"]') || pi()
                        } else a.closest(".tabbed").find("> div:nth-of-type(" + n + ")" + i).css({
                            visibility: "visible",
                            position: "relative",
                            left: "0",
                            display: "block"
                        }).stop().transition({
                            opacity: 1
                        }, o).addClass("visible-tab");
                        var d = a.closest(".tabbed").find("> div:nth-of-type(" + n + ")");
                        (d.find(".iframe-embed").length > 0 || d.find(".portfolio-items").length > 0 || d.find(".nectar-video-bg").length > 0) && setTimeout(function() {
                            s.trigger("resize")
                        }, 10)
                    }
                    var c = a.parents(".tabbed").find("> div:nth-of-type(" + n + ")" + i);
                    c.find(".nectar-progress-bar").length > 0 && Qe(), (c.find('.divider-small-border [data-animate="yes"]').length > 0 || c.find('.divider-border [data-animate="yes"]').length > 0) && Je(), (c.find("img.img-with-animation").length > 0 || c.find(".col.has-animation").length > 0 || c.find(".nectar_cascading_images").length > 0 || c.find(".wpb_column.has-animation").length > 0) && (Re(), Ve()), (c.find(".parallax-layer").length > 0 || c.parents(".nectar-parallax-enabled").length > 0) && Fe(), Se(), c.find(".nectar-milestone").length > 0 && de(), c.find('.nectar_image_with_hotspots[data-animation="true"]').length > 0 && (ea(), setTimeout(function() {
                        s.trigger("resize")
                    }, 100)), c.find(".nectar-fancy-ul").length > 0 && ke(), c.find(".nectar-split-heading").length > 0 && Ne(), c.find('.wpb_column[data-border-animation="true"]').length > 0 && Ze(), c.find(".wpb_animate_when_almost_visible").length > 0 && oe(), c.find(".nectar-animated-title").length > 0 && ha(), c.find(".nectar-highlighted-text").length > 0 && ua(), c.find(".nectar_food_menu_item").length > 0 && Ue(), c.find('.nectar-post-grid:not([data-animation="none"])').length > 0 && ca(), c.find(".nectar-waypoint-el").length > 0 && Ge(), a.parents(".wpb_row").length > 0 && ((c.find(".vc_pie_chart").length > 0 || c.find(".wp-video-shortcode").length > 0 || c.find(".post-area.masonry .posts-container").length > 0 || c.find(".twentytwenty-container").length > 0 || a.parents('#nectar_fullscreen_rows[data-content-overflow="scrollbar"]').length > 0 || a.parents(".tabbed").find("> div:nth-of-type(" + n + ")").find(".wpb_gallery").length > 0 || a.parents(".tabbed").find("> div:nth-of-type(" + n + ")").find(".swiper-container").length > 0 || a.parents(".wpb_row").next().hasClass("parallax_section")) && s.trigger("resize"), c.find(".nectar-flickity").length > 0 && "undefined" != typeof Flickity && a.parents(".tabbed").find("> div:nth-of-type(" + n + ")").find(".nectar-flickity").each(function() {
                        Flickity.data(t(this)[0]).resize()
                    }), c.find(".nectar-woo-flickity").length > 0 && "undefined" != typeof Flickity && setTimeout(function() {
                        Flickity.data(a.parents(".tabbed").find("> div:nth-of-type(" + n + ")").find(".nectar-woo-flickity > ul")[0]).resize(), t(e).trigger("nectar-product-filters-layout")
                    }, 100)), c.find(".svg-icon-holder").each(function(e) {
                        var a = t(this);
                        setTimeout(function() {
                            var t = 0;
                            a.is("[data-animation-delay]") && a.attr("data-animation-delay").length > 0 && "false" != a.attr("data-animation") && (t = a.attr("data-animation-delay")), clearTimeout(et[e]), "false" == a.attr("data-animation") ? (a.css("opacity", "1"), W[a.find("svg").attr("id").slice(-1)].finish()) : (W[a.find("svg").attr("id").slice(-1)].reset(), et[e] = setTimeout(function() {
                                W[a.find("svg").attr("id").slice(-1)].play()
                            }, t))
                        }, 150)
                    }), t(".nectar-cta .link_wrap, .nectar-cta .link_text").removeClass("hover"), a.parents(".tabbed").find(".wpb_row").each(function() {
                        if (void 0 !== t(this).find('[class*="vc_col-"]').first().offset()) {
                            var e = t(this).find('[class*="vc_col-"]').first().offset().left;
                            t(this).find('[class*="vc_col-"]').each(function() {
                                t(this).removeClass("no-left-margin"), t(this).offset().left < e + 15 ? t(this).addClass("no-left-margin") : t(this).removeClass("no-left-margin")
                            })
                        }
                    }), 0, a.parent().parent().find(".magic-line").length > 0 && ce(a), t(e).trigger("nectar-tab-changed")
                }(t(this)), void 0 !== a.originalEvent && pt.winW < 1e3 && 0 == ut.$usingFullScreenRows && !t(this).parents(".disable-mobile-tab-scroll")) {
                var n = t(this).closest(".tabbed").find("> ul");
                if (n.height() > 350) {
                    var i = n.offset().top + n.height() - pt.adminBarHeight;
                    t('#header-outer[data-mobile-fixed="1"]').length > 0 && (i = n.offset().top + n.height() - d.outerHeight() - pt.adminBarHeight), Gt(i, 700, "easeInOutQuint")
                }
            }
            return !1
        }), t("body").on("click", ".wpb_tabs_nav > .toggle-button", function() {
            t(this).parents(".wpb_tabs_nav").find("> li:not(.active-tab):not(.toggle-button) a").trigger("click")
        }), t('a[class*="nectar-tab-trigger"]').on("click", function(e) {
            if (!t(this).is('[href*="#"]') || t(this).attr("href").length < 1) return !0;
            var a = t(this).attr("href");
            a = (a = a.substr(1)).replace(/\s+/g, "-").replace(/</g, "&lt;").replace(/"/g, "&quot;").toLowerCase(), t(".wpb_tabs_nav").each(function() {
                t(this).find("li").each(function() {
                    var e = t(this).find("a").clone();
                    e.find("svg").remove(), (e = (e = e.text()).replace(/\s+/g, "-").toLowerCase()).length > 0 && "-" === e.substring(0, 1) && (e = e.substring(1)), e == a && t(this).find("a").trigger("click")
                })
            }), e.preventDefault()
        }), t(".tabbed").each(function() {
            var e;
            t(this).find(".wpb_tab").each(function(e) {
                if (t(this).is("[data-tab-icon]") && t(this).attr("data-tab-icon").length > 0 && 0 == t(this).find(".im-icon-wrap.tab-icon").length && (t(this).closest(".tabbed").addClass("using-icons"), t(this).closest(".tabbed").find(".wpb_tabs_nav li:nth-child(" + (e + 1) + ") > a").prepend('<i class="' + t(this).attr("data-tab-icon") + '"></i>'), t(this).closest(".tabbed").is('[data-style="toggle_button"]') && 1 === e && t(this).closest(".tabbed").find(".wpb_tabs_nav li:nth-child(" + (e + 2) + ") > a").prepend('<i class="' + t(this).attr("data-tab-icon") + '"></i>')), t(this).find(".im-icon-wrap.tab-icon").length > 0) {
                    var a = t(this).find(".im-icon-wrap.tab-icon").detach();
                    t(this).closest(".tabbed").find(".wpb_tabs_nav li:nth-child(" + (e + 1) + ") > a").prepend(a)
                }
            }), e = t(this), setTimeout(function() {
                e.is('[data-style="minimal_alt"]') && (e.find("> ul").append('<li class="magic-line" />'), ce(e.find("> ul > li:first-child > a")))
            }, 100)
        }), t('.tabbed[data-style="minimal_alt"]').length > 0 && s.on("smartresize", function() {
            t('.tabbed[data-style="minimal_alt"]').each(function() {
                t(this).find("a.active-tab").length > 0 && ce(t(this).find("a.active-tab"))
            })
        }), void 0 !== ee.tab && t(".wpb_tabs_nav").each(function() {
            t(this).find("li").each(function() {
                var e = t(this).find("a").clone(),
                    a = ee.tab,
                    n = t(this);
                e.find("svg").remove(), (e = (e = e.text()).replace(/\s+/g, "-").toLowerCase()).length > 0 && "-" === e.substring(0, 1) && (e = e.substring(1)), e == (a = a.replace(/\s+/g, "-").replace(/</g, "&lt;").replace(/"/g, "&quot;").toLowerCase()) && (t(this).find("a").trigger("click"), setTimeout(function() {
                    n.find("a").trigger("click")
                }, 501))
            })
        }), t(".nectar-scrolling-tabs").each(function(e) {
            pt.usingFrontEndEditor || (it[e] = new ue(t(this)))
        });
        var a = !1;
        r.on("click", ".scrolling-tab-nav-current-item", function() {
            t(this).toggleClass("open"), t(this).siblings(".wpb_tabs_nav").toggle(), Se()
        }), r.on("click", ".nectar-sticky-tabs .wpb_tabs_nav li", function(e) {
            var a = t(this).parents(".wpb_tabs_nav"),
                n = t(this).parents(".scrolling-tab-nav").find(".scrolling-tab-nav-current-item"),
                i = t(this).find(".tab-nav-heading").clone();
            n.html(i), void 0 !== e.originalEvent && (t(this).parents(".scrolling-tab-nav").find(".scrolling-tab-nav-current-item").toggleClass("open"), a.toggle())
        }), r.on("click", ".nectar-sticky-tabs .wpb_tabs_nav a", function(n) {
            var i = t(this),
                s = i.parents("li").index() + 1,
                r = t("body.vc_editor").length > 0 ? "> .wpb_tab " : "",
                o = i.parents(".nectar-sticky-tabs"),
                l = o.hasClass("content_animation_fade") ? 200 : 600;
            (i.parents("li").hasClass("active-tab") || a) && o.hasClass("loaded") || (a = !0, o.find(".wpb_tabs_nav li").removeClass("active-tab"), i.parents("li").addClass("active-tab"), o.find(".scrolling-tab-content  > div").removeClass("previously-active-tab"), o.find(".scrolling-tab-content > div.active-tab").addClass("previously-active-tab").removeClass("active-tab"), o.find(".scrolling-tab-content > div:nth-of-type(" + s + ")" + r).addClass("active-tab"), t(e).trigger("nectar-tab-changed"), setTimeout(function() {
                a = !1
            }, l)), n.preventDefault()
        }), t(".tabbed .wpb_tab").first().addClass("visible-tab"), t(".nectar-sticky-tabs .wpb_tabs_nav > li:first-child").each(function() {
            t(this).find("a").first().trigger("click")
        }), a = !1, t(".nectar-sticky-tabs").addClass("loaded"), t(e).on("nectar-tab-changed", pa)
    }

    function ue(t) {
        this.$el = t, this.$tabContent = t.find(".scrolling-tab-content"), this.$lineEl = t.find(".scrolling-tab-nav .line"), this.observer = null, this.linkFunc = this.$el.hasClass("navigation_func_active_link_only") ? "single_link" : "default", this.domSetup(), this.highlightObserve(), this.events()
    }

    function pe() {
        void 0 !== ee.toggle && t(".toggles").each(function() {
            t(this).find(".toggle").each(function() {
                var e = t(this).find("h3 a").clone(),
                    a = ee.toggle;
                t(e).find("i").remove(), (e = (e = e.text()).replace(/\s+/g, "-").toLowerCase()) == (a = a.replace(/\s+/g, "-").replace(/</g, "&lt;").replace(/"/g, "&quot;").toLowerCase()) && t(this).find("h3 a").trigger("click")
            })
        })
    }

    function fe() {
        t(".toggles").each(function() {
            var e = t(this).find(".toggle.open");
            e.length > 0 && e.each(function() {
                var e = t(this).find("> div")[0];
                e.style.maxHeight = e.scrollHeight + "px"
            })
        })
    }

    function ge() {
        setTimeout(function() {
            t('.toggles.accordion:not([data-starting="closed"])').each(function() {
                if (0 == t(this).find('.toggle[data-inner-wrap="true"]').length) t(this).find("> .toggle").first().addClass("open").find("> div").show();
                else if (!pt.usingFrontEndEditor) {
                    var e = t(this).find("> .toggle").first();
                    e.addClass("open"), e.find("> div")[0].style.maxHeight = e.find("> div")[0].scrollHeight + "px"
                }
                t(this).find("> .toggle").first().find("a:not(.nectar-button) i").attr("class", "fa fa-minus-circle")
            }), setTimeout(pe, 300)
        }, 60), t('.toggle[data-inner-wrap="true"]').length > 0 && s.on("smartresize", fe), t(".toggle > h3:not(.toggle-title)").addClass("toggle-title")
    }

    function me(t) {
        this.$el = t, this.$innerEl = this.$el.find(" > .n-sticky > .vc_column-inner"), 0 != this.$innerEl.length && (this.topOffset = 0, this.lazyInit())
    }

    function ve(t, e) {
        (t = String(t).replace(/[^0-9a-f]/gi, "")).length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
        var a, n, i = "#";
        for (n = 0; n < 3; n++) a = parseInt(t.substr(2 * n, 2), 16), i += ("00" + (a = Math.round(Math.min(Math.max(0, a + a * e), 255)).toString(16))).substr(a.length);
        return i
    }

    function be() {
        t(".nectar-3d-transparent-button").each(function() {
            if ("visible" == t(this).css("visibility")) {
                var e = t(this),
                    a = 0,
                    n = 1.7;
                if ("extra_jumbo" == e.attr("data-size")) {
                    var i;
                    pt.winW < 1e3 && pt.winW > 690 ? (a = 64, i = 34, e.find(".back-3d rect").attr("stroke-width", "12"), n = 1.7) : pt.winW <= 690 ? (a = 46, i = 16, e.find(".back-3d rect").attr("stroke-width", "10"), n = 1.7) : (a = 100, i = 64, e.find(".back-3d rect").attr("stroke-width", "20"), n = 1.6), e.find("svg text").attr("font-size", i);
                    var s = t(this).find(".back-3d .button-text")[0].getBoundingClientRect().width,
                        r = 1.5 * i;
                    e.css({
                        width: s + 1.5 * a + "px",
                        height: r + a + "px"
                    }), e.find("> a").css({
                        height: r + a + "px"
                    }), e.find(".back-3d svg, .front-3d svg").css({
                        width: s + 1.5 * a + "px",
                        height: r + a + "px"
                    }).attr("viewBox", "0 0 " + (s + 1.5 * a) + " " + (r + a)), e.find("svg text").attr("transform", "matrix(1 0 0 1 " + (s + 1.6 * a) / 2 + " " + (r + a) / n + ")"), e.find(".front-3d ").css("transform-origin", "50% 50% -" + (r + a) / 2 + "px"), e.find(".back-3d").css("transform-origin", "50% 50% -" + (r + a) / 2 + "px")
                }
            }
        })
    }

    function we() {
        if (pt.usingMobileBrowser || t('.nectar-cta[data-style="text-reveal-wave"], .menu-item-hover-text-reveal-wave, .nectar-cta[data-style="curved-arrow-animation"]').each(function() {
                t(this).find(".char").each(function(e) {
                    t(this).css("animation-delay", .015 * e + "s")
                });
                var e = t(this).is('[data-using-bg="true"]') ? ".link_wrap" : ".link_text",
                    a = !1;
                if (t(this).is('[class*="border_thickness_"]') && !t(this).is('[class*="border_thickness_0px"]') && (e = ".link_wrap", a = !0), t(this).is(".menu-item-hover-text-reveal-wave") && (e = "a"), t(this).is("[data-triggered-by]")) {
                    var n = t(this).attr("data-triggered-by");
                    t(this).parents(n).on("mouseenter", function() {
                        if (pt.winW > 999) {
                            var e = t(this).find(".link_text");
                            e.removeClass("hover"), setTimeout(function() {
                                e.addClass("hover")
                            }, 20)
                        }
                    })
                } else t(this).find(e).on("mouseenter", function() {
                    if (pt.winW > 999) {
                        var e = a ? t(this).find(".link_text") : t(this);
                        e.removeClass("hover"), setTimeout(function() {
                            e.addClass("hover")
                        }, 20)
                    }
                })
            }), t(".nectar-link-underline-effect a").on("mouseenter", function() {
                t(this).addClass("accessed")
            }), t(".nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]").each(function() {
                var e, a, n = t('body.material[data-button-style^="rounded"]').length > 0;
                if (t(this).css("visibility", "visible"), t(this).hasClass("see-through-3") && "false" == t(this).attr("data-color-override")) return !0;
                e = "false" != t(this).attr("data-color-override") ? t(this).attr("data-color-override") : t(this).parents(".dark").length > 0 ? "#000000" : "#ffffff", t(this).hasClass("see-through-3") || t(this).css("color", e), t(this).find("i").css("color", e);
                var i = parseInt(e.substring(1), 16),
                    s = t(this).has("[data-hover-color-override]") ? t(this).attr("data-hover-color-override") : "no-override",
                    r = t(this).has("[data-hover-text-color-override]") ? t(this).attr("data-hover-text-color-override") : "#fff",
                    o = (16711680 & i) >> 16,
                    l = (65280 & i) >> 8,
                    d = (255 & i) >> 0,
                    c = t(this).hasClass("see-through-3") ? "1" : "0.75";
                t(this).css("border-color", "rgba(" + o + "," + l + "," + d + "," + c + ")"), n && t(this).find("i").css({
                    "background-color": "rgba(" + o + "," + l + "," + d + ",1)",
                    "box-shadow": "0px 8px 15px rgba(" + o + "," + l + "," + d + ",0.24)"
                }), t(this).hasClass("see-through") ? (a = t(this), t(this).on("mouseenter touchstart", function() {
                    a.css("border-color", "rgba(" + o + "," + l + "," + d + ",1)")
                }), t(this).on("mouseleave touchtouchend", function() {
                    a.css("border-color", "rgba(" + o + "," + l + "," + d + ",1)"), c = t(this).hasClass("see-through-3") ? "1" : "0.75", a.css("border-color", "rgba(" + o + "," + l + "," + d + "," + c + ")")
                })) : (t(this).find("i").css("color", r), "no-override" != s ? (a = t(this), t(this).on("mouseenter touchstart", function() {
                    a.css({
                        "border-color": s,
                        "background-color": s,
                        color: r
                    }), n && a.find("i").css({
                        "background-color": "",
                        "box-shadow": ""
                    })
                }), t(this).on("mouseleave touchtouchend", function() {
                    c = t(this).hasClass("see-through-3") ? "1" : "0.75", n && a.find("i").css({
                        "background-color": "rgba(" + o + "," + l + "," + d + ",1)",
                        "box-shadow": "0px 8px 15px rgba(" + o + "," + l + "," + d + ",0.24)"
                    }), a.hasClass("see-through-3") ? a.css({
                        "border-color": "rgba(" + o + "," + l + "," + d + "," + c + ")",
                        "background-color": "transparent"
                    }) : a.css({
                        "border-color": "rgba(" + o + "," + l + "," + d + "," + c + ")",
                        "background-color": "transparent",
                        color: e
                    })
                })) : (a = t(this), t(this).on("mouseenter touchstart", function() {
                    a.css({
                        "border-color": s,
                        color: r
                    })
                }), t(this).on("mouseleave touchtouchend", function() {
                    c = a.hasClass("see-through-3") ? "1" : "0.75", a.css({
                        "border-color": "rgba(" + o + "," + l + "," + d + "," + c + ")",
                        color: r
                    })
                })))
            }), t(".nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]").each(function() {
                if (t(this).css("visibility", "visible"), "false" != t(this).attr("data-color-override")) {
                    var e = t(this).attr("data-color-override");
                    t(this).removeClass("accent-color").removeClass("extra-color-1").removeClass("extra-color-2").removeClass("extra-color-3").css("background-color", e)
                }
            }), t(".swiper-slide .solid_color_2").length > 0 || t(".tilt-button-inner").length > 0) {
            var e, a = "";
            t(".swiper-slide .solid_color_2 a").each(function(n) {
                t(this).addClass("instance-" + n), e = "false" != t(this).attr("data-color-override") ? t(this).attr("data-color-override") : t(this).parents(".dark").length > 0 ? "#000000" : "#ffffff", t(this).css("color", e), t(this).find("i").css("color", e);
                var i = t(this).css("background-color"),
                    s = ve(i, .13),
                    r = ve(i, -.15);
                a += ".swiper-slide .solid_color_2 a.instance-" + n + ":after { background-color: " + s + ";  } .swiper-slide .solid_color_2 a.instance-" + n + ":before { background-color: " + r + "; } "
            }), t(".tilt-button-wrap a").each(function(e) {
                t(this).addClass("instance-" + e);
                var n, i = t(this).css("background-color");
                "false" != t(this).attr("data-color-override") && (n = t(this).attr("data-color-override"), t(this).css("background-color", n), i = n);
                var s = ve(i, .13),
                    r = ve(i, -.15);
                a += ".tilt-button-wrap a.instance-" + e + ":after { background-color: " + s + ";  } .tilt-button-wrap a.instance-" + e + ":before { background-color: " + r + "; } "
            }), ie(a, "tilt-button")
        }
        if (t(".nectar-3d-transparent-button").length > 0) {
            var n = "";
            t(".nectar-3d-transparent-button").each(function(e) {
                t(this).on("mouseover", function() {
                    t(this).find("*").css("display", "");
                    var e = t(this);
                    setTimeout(function() {
                        e.find("*").css("display", "block")
                    }, 60)
                }), t(this).on("mouseleave", function() {
                    t(this).find("*").css("display", "block");
                    var e = t(this);
                    setTimeout(function() {
                        e.find("*").css("display", "")
                    }, 60)
                });
                var a, i = t(this),
                    s = i.attr("data-size"),
                    r = 0,
                    o = 1.5,
                    l = 1.65;
                "large" == s ? (r = 46, a = 16, o = 1.5, l = 1.7) : "medium" == s ? (r = 30, a = 16) : "small" == s ? (r = 20, a = 12) : "jumbo" == s ? (r = 54, a = 24, o = 1.5, l = 1.68) : "extra_jumbo" == s && (r = 100, a = 64, o = 1.6, l = 1.6), i.find("svg text").attr("font-size", a);
                var d = t(this).find(".back-3d .button-text")[0].getBoundingClientRect().width,
                    c = 1.5 * a;
                i.css({
                    width: d + 1.5 * r + "px",
                    height: c + r + "px"
                }), i.find("> a").css({
                    height: c + r + "px"
                }), i.find(".back-3d svg, .front-3d svg").css({
                    width: d + 1.5 * r + "px",
                    height: c + r + "px"
                }).attr("viewBox", "0 0 " + (d + 1.5 * r) + " " + (c + r)), i.find("svg text").attr("transform", "matrix(1 0 0 1 " + (d + r * o) / 2 + " " + (c + r) / l + ")"), i.find(".front-3d, .back-3d").css("transform-origin", "50% 50% -" + (c + r) / 2 + "px"), t(this).find(".front-3d svg > rect").attr("id", "masked-rect-id-" + e), t(this).find(".front-3d defs mask").attr("id", "button-text-mask-" + e), i.css("visibility", "visible"), n += "#masked-rect-id-" + e + " { mask: url(#button-text-mask-" + e + "); -webkit-mask: url(#button-text-mask-" + e + ")} "
            }), be(), s.on("smartresize", be), ie(n, "nectar-td-button")
        }
        setTimeout(function() {
            t('.nectar-button[class*="color-gradient"] .start').removeClass("loading")
        }, 150), (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.match(/Trident\/7\./)) && t('.nectar-button[class*="color-gradient"] .start').addClass("no-text-grad")
    }

    function ye() {
        t(".icon-3x").each(function() {
            t(this).closest(".col").on("mouseenter", function() {
                t(this).find(".icon-3x").addClass("hovered")
            }), t(this).closest(".col").on("mouseleave", function() {
                t(this).find(".icon-3x").removeClass("hovered")
            })
        }), (navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.match(/Trident\/7\./)) && t('[class^="icon-"][class*="color-gradient"], .nectar_icon_wrap[data-color*="extra-color-gradient"] .nectar_icon, .nectar-gradient-text').addClass("no-grad")
    }

    function _e() {
        var e = t('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 275 : 0;
        t(".nectar_team_member_overlay").css({
            width: s.width() - e,
            left: e
        })
    }

    function Ce() {
        var e = "";
        t(".wpb_column").each(function(a) {
            t(this).removeClass(function(t, e) {
                return (e.match(/(^|\s)instance-\S+/g) || []).join(" ")
            }), ("true" == t(this).attr("data-has-bg-color") || t(this).is('[data-hover-bg^="#"]')) && t(this).addClass("instance-" + a);
            var n = t(this).find("> .vc_column-inner > .column-bg-overlay-wrap").length > 0 || t(this).find("> .vc_column-inner > .column-bg-overlay").length > 0 ? " > .vc_column-inner " : "",
                i = t(this).find(n + " > .column-bg-overlay-wrap").length > 0 ? "> .column-bg-overlay-wrap " : "";
            "true" == t(this).attr("data-has-bg-color") && (e += ".wpb_column.instance-" + a + n + i + " > .column-bg-overlay { background-color:" + t(this).attr("data-bg-color") + ";  opacity: " + t(this).attr("data-bg-opacity") + "; }"), t(this).is('[data-hover-bg^="#"]') && (e += ".wpb_column.instance-" + a + ":hover " + n + i + " > .column-bg-overlay { background-color: " + t(this).attr("data-hover-bg") + "!important; opacity: " + t(this).attr("data-hover-bg-opacity") + "!important; }")
        }), ie(e, "column-bg-colors")
    }

    function xe() {
        if (t(".morphing-outline").length > 0) {
            var e = "",
                a = t("body.vc_editor").length > 0 ? "" : ">";
            t(".morphing-outline").each(function(n) {
                t(this).removeClass(function(t, e) {
                    return (e.match(/(^|\s)instance-\S+/g) || []).join(" ")
                }), t(this).addClass("instance-" + n).css({
                    visibility: "visible"
                });
                var i = t(this).find(".inner").width(),
                    s = t(this).find(".inner").height(),
                    r = parseInt(t(this).attr("data-border-thickness")),
                    o = t('body[data-button-style*="rounded"]').length > 0 ? ":hover" : "",
                    l = t('body[data-button-style*="rounded"]').length > 0 ? "" : ":hover";
                e += "body .morphing-outline.instance-" + n + " .inner > * { color: " + t(this).attr("data-starting-color") + "; } ", e += "body .morphing-outline.instance-" + n + " .inner:after  { border-width:" + t(this).attr("data-border-thickness") + "px ; border-color: " + t(this).attr("data-starting-color") + "; } ", e += "body .wpb_column:hover > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner > *, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner > * { color: " + t(this).attr("data-hover-color") + "; } ", e += "body .wpb_column:hover > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after  { border-color: " + t(this).attr("data-hover-color") + "; } ", e += "body .wpb_column" + l + " > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after, body .wpb_column" + l + " > .vc_column-inner > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after { padding: " + ((i + 100 + 2 * r - s) / 2 - r) + "px 50px}", e += ".morphing-outline.instance-" + n + " { padding: " + (30 + (i + 80 + 2 * r - s) / 2 - r) + "px 50px}", e += "body .wpb_column" + l + " > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after, body .wpb_column" + l + " > .vc_column-inner > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after { top: -" + parseInt((i + 100 + 2 * r - s) / 2 - r + r) + "px }", e += "body .wpb_column > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after, body .wpb_column > .vc_column-inner > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after { left: -" + parseInt(50 + r) + "px }", e += "body .wpb_column" + o + " > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after, body .wpb_column" + o + " > .vc_column-inner > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after { padding: 50px 50px}", e += "body .wpb_column" + o + " > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after, body .wpb_column" + o + " > .vc_column-inner > .wpb_wrapper " + a + " .morphing-outline.instance-" + n + " .inner:after { top: -" + parseInt(50 + r) + "px }"
            }), ie(e, "morphing-outlines")
        }
    }

    function ke() {
        t(ot + ".nectar-fancy-ul").each(function() {
            var e = t(this).attr("data-animation"),
                a = 0;
            if (t(this).is("[data-animation-delay]") && t(this).attr("data-animation-delay").length > 0 && "false" != t(this).attr("data-animation") && (a = t(this).attr("data-animation-delay")), "true" == e) var n = t(this),
                i = new Waypoint({
                    element: n[0],
                    handler: function() {
                        n.parents(".wpb_tab").length > 0 && "hidden" == n.parents(".wpb_tab").css("visibility") || n.hasClass("animated-in") ? i.destroy() : (setTimeout(function() {
                            n.find("li").each(function(e) {
                                t(this).delay(220 * e).transition({
                                    opacity: "1",
                                    left: "0"
                                }, 220, "easeOutCubic")
                            })
                        }, a), n.addClass("animated-in"), i.destroy())
                    },
                    offset: "bottom-in-view"
                })
        })
    }

    function $e() {
        t('.nectar-fancy-ul:not([data-list-icon="dot"]):not([data-list-icon="none"])').each(function() {
            var e = t(this).attr("data-list-icon"),
                a = t(this).attr("data-color");
            t(this).find("li").each(function() {
                t(this).find("> i").remove(), t(this).prepend('<i class="icon-default-style ' + e + " " + a + '"></i> ')
            })
        })
    }

    function Te() {
        t(".nectar-flip-box").each(function() {
            var e = parseInt(t(this).attr("data-min-height")),
                a = t(this).find(".flip-box-front .inner").height();
            t(this).find(".flip-box-back .inner").height() > t(this).find(".flip-box-front .inner").height() && (a = t(this).find(".flip-box-back .inner").height()), a >= e - 80 ? t(this).find("> div").css("height", a + 80) : t(this).find("> div").css("height", "auto"), t(this).parent().hasClass("wpb_wrapper") && t(this).parent().css("transform", "translateZ(0)")
        })
    }

    function Ie() {
        t('.wpb_row .vc_col-sm-12 .nectar-slider-wrap[data-full-width="true"]').each(function() {
            0 == t(this).parents(".wpb_row.full-width-section").length && 0 == t(this).parents(".wpb_row.full-width-content").length && t(this).parents(".wpb_row").addClass("full-width-section")
        }), !pt.usingMobileBrowser && t('body[data-boxed-style="1"]').length > 0 && t("#boxed").length > 0 && t("#boxed").length > 0 && t(".full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent], .full-width-content[data-bottom-percent]").each(function() {
            var e = t(this).attr("data-top-percent") ? t(this).attr("data-top-percent") : "skip",
                a = t(this).attr("data-bottom-percent") ? t(this).attr("data-bottom-percent") : "skip";
            "skip" != e && t(this).css("padding-top", e), "skip" != a && t(this).css("padding-bottom", a)
        })
    }

    function Ee() {
        if (0 != t('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), #boxed .full-width-content').length) {
            var n, i, r, o = pt.winW,
                l = t(".body-border-right").length > 0 && o > 1e3 ? 2 * parseInt(t(".body-border-right").width()) : 0,
                d = t(".container-wrap").length > 0 ? parseInt(t(".container-wrap").outerWidth()) : s.width(),
                c = t("body[data-ext-padding]").length > 0 ? 2 * parseInt(t("body").attr("data-ext-padding")) : 180,
                h = t(".main-content").css("max-width");
            if (h.indexOf("%") > -1) {
                var u = e.innerWidth - a.documentElement.clientWidth;
                h = parseInt(h) / 100 * (pt.winW - u)
            } else h = parseInt(h);
            if (1 == t("#boxed").length) i = (parseInt(t(".container-wrap").width()) - parseInt(t(".main-content").width())) / 2 + 4;
            else {
                var p = t('body[data-ext-responsive="true"]').length > 0 && o >= 1e3 ? c : 0;
                n = d - l <= h ? h : d - l;
                var f = h;
                t('body.single-post[data-ext-responsive="true"]').length > 0 && t(".container-wrap.no-sidebar").length > 0 && (f = t(".post-area").width(), p = 0), i = Math.ceil((n + p - f) / 2)
            }
            t(".carousel-outer").has('.carousel-wrap[data-full-width="true"]').css("overflow", "visible"), t('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), #boxed .full-width-content').each(function() {
                var e = t('#header-outer[data-format="left-header"]').length > 0 && o >= 1e3 ? parseInt(t('#header-outer[data-format="left-header"]').width()) : 0,
                    a = t(".body-border-right").length > 0 && o > 1e3 ? 2 * parseInt(t(".body-border-right").width()) - 2 : 0;
                if (1 == t("#boxed").length) {
                    var s = o >= 690 ? parseInt(t(".main-content").width()) : h;
                    r = 0 == t("#nectar_fullscreen_rows").length ? s : parseInt(t(this).parents(".container").width()), t('body.single-post[data-ext-responsive="true"]').length > 0 && t(".container-wrap.no-sidebar").length > 0 && t(this).parents(".post-area").length > 0 ? (f = t(".post-area").width(), p = 0, n = d - a, i = Math.ceil((n + p - f) / 2)) : i = t(this).parents(".page-submenu").length > 0 ? (parseInt(t(".container-wrap").width()) - r) / 2 : (parseInt(t(".container-wrap").width()) - r) / 2 + 4
                } else {
                    if (t('body.single-post[data-ext-responsive="true"]').length > 0 && t(".container-wrap.no-sidebar").length > 0 && t(this).parents(".post-area").length > 0) f = t(".post-area").width(), p = 0, n = d - a;
                    else {
                        var l = 0 == t("#nectar_fullscreen_rows").length ? h : parseInt(t(this).parents(".container").css("max-width"));
                        d - a <= l && (n = l), f = l, p = t('body[data-ext-responsive="true"]').length > 0 && pt.winW >= 1e3 ? c : 0, e > 0 && (p = t('body[data-ext-responsive="true"]').length > 0 && pt.winW >= 1e3 ? 120 : 0)
                    }
                    i = Math.ceil((n + p - f) / 2)
                }
                var u = 0;
                t(this).hasClass("carousel-wrap") && (u = 1), t(this).hasClass("portfolio-items") && (u = 5);
                var g = 1 == t("#boxed").length ? r + parseInt(2 * i) : d - a + u;
                if (0 == t("#boxed").length && t(this).hasClass("portfolio-items") && t(this).is('[data-gutter*="px"]') && t(this).attr("data-gutter").length > 0 && "none" != t(this).attr("data-gutter") && (g = d > 1e3 ? d - a + 3 : d - a), t(this).parent().hasClass("default-style")) r = 0 == t("#nectar_fullscreen_rows").length ? parseInt(t(".main-content").width()) : parseInt(t(this).parents(".container").width()), 0 != t("#boxed").length ? g = 1 == t("#boxed").length ? r + parseInt(2 * i) : d + u : (g = 1 == t("#boxed").length ? r + parseInt(2 * i) : d - a - .025 * (d - a) + u, n = d - a <= r ? r : d - a - .025 * (d - a), i = Math.ceil((n - r) / 2));
                else if (t(this).parent().hasClass("spaced"))
                    if (r = 0 == t("#nectar_fullscreen_rows").length ? parseInt(t(".main-content").width()) : parseInt(t(this).parents(".container").width()), 0 != t("#boxed").length) g = 1 == t("#boxed").length ? r + parseInt(2 * i) - .02 * d : d + u;
                    else {
                        g = 1 == t("#boxed").length ? r + parseInt(2 * i) : d - a - Math.ceil(.02 * (d - a)) + u;
                        var m = d - a <= r ? r : d - a - .02 * (d - a);
                        i = Math.ceil((m - r) / 2 + 2)
                    }!t(this).parents(".span_9").length > 0 && !t(this).parent().hasClass("span_3") && "sidebar-inner" != t(this).parent().attr("id") && !t(this).find(".nectar-carousel-flickity-fixed-content").length > 0 && "portfolio-extra" != t(this).parent().attr("id") ? t(".single-product").length > 0 && t(this).parents("#tab-description").length > 0 && 0 == t(this).parents(".full-width-tabs").length ? t(this).css({
                    visibility: "visible"
                }) : t(this).hasClass("portfolio-items") ? 0 == t(this).parents(".full-width-content").length && t(this).css({
                    "margin-left": -i,
                    left: 0,
                    width: g,
                    visibility: "visible"
                }) : t("#nectar_fullscreen_rows").length > 0 && t(this).hasClass("wpb_row") ? t(this).css({
                    "margin-left": -i,
                    width: g,
                    visibility: "visible"
                }) : 0 == t(this).parents(".full-width-content").length && t(this).css({
                    left: 0,
                    "margin-left": -i,
                    width: g,
                    visibility: "visible"
                }) : "portfolio-extra" == t(this).parent().attr("id") && 0 != t("#full_width_portfolio").length ? !t(this).find(".nectar-carousel-flickity-fixed-content").length > 0 && t(this).css({
                    left: 0,
                    "margin-left": -i,
                    width: g,
                    visibility: "visible"
                }) : t(this).css({
                    "margin-left": 0,
                    width: "auto",
                    left: "0",
                    visibility: "visible"
                })
            })
        }
    }

    function Oe() {
        t(".full-width-section.wpb_row, .full-width-content.wpb_row").each(function() {
            var e = t(this).parent();
            if (!e.hasClass("span_9") && !e.hasClass("span_3") && "sidebar-inner" != e.attr("id")) {
                if (t(this).parents("#portfolio-extra").length > 0 && 0 == t("#full_width_portfolio").length) return !1;
                "0" == t(this).index() && 0 == g.length && 0 == t(".page-header-no-bg").length && 0 == t(".project-title").length && 0 == t("body.single").length && (t(this).addClass("first-section"), t(this).addClass("loaded"))
            }
        })
    }

    function ze(t) {
        if (this.$element = t, this.$elementInner = t.find("> .vc_column-inner"), this.inView = !1, this.topLevel = !1, this.bottomLevel = !1, this.lastY = 0, this.lerp = t.data("scroll-animation-lerp") ? parseFloat(t.data("scroll-animation-lerp")) : .28, this.intensity = t.data("scroll-animation-intensity") ? Math.max(Math.min(parseFloat(t.data("scroll-animation-intensity")), 8), -8) : 3, this.intensity = this.intensity / 10, this.storedWinH = pt.winH, this.intensity < -.29 && (this.lerp = 1), this.type = "translateY", this.persistOnMobile = !(!t.is("[data-scroll-animation-mobile]") || "true" != t.attr("data-scroll-animation-mobile")), this.$element.hasClass("wpb_column") || 0 != this.$element.parents(".cell").length || (this.$elementInner = t, this.$element = t.parent(), t.is("[data-scroll-animation-movement]") && this.$element.attr("data-scroll-animation-movement", t.attr("data-scroll-animation-movement"))), !pt.usingMobileBrowser || 0 != this.persistOnMobile) {
            this.setType(), this.calculatePos(), this.trackView(), this.animate(), 0 == this.$element.parents(".wpb_column.has-animation").length && setInterval(this.calculatePos.bind(this), 1e3), s.on("resize", this.calculatePos.bind(this));
            var a = this;
            e.addEventListener("orientationchange", function() {
                this.setTimeout(function() {
                    a.orientationChange()
                }, 80)
            })
        }
    }

    function He(t, e, a, n) {
        this.$el = t, this.$parallaxEl = this.$el.find(e), this.firstSection = !1, this.nestedParallax = !1, this.type = n, this.speed = a, this.storedWinH = pt.winH, t.parents(".nectar-sticky-tabs").length > 0 || t.parents(".nectar-sticky-column-css").length > 0 || (this.setup(), this.update())
    }

    function Se() {
        for (var t = 0; t < R.length; t++) R[t].resize();
        for (t = 0; t < N.length; t++) N[t].resize();
        for (t = 0; t < X.length; t++) X[t].calculatePos();
        for (t = 0; t < V.length; t++) V[t].calculatePos();
        Waypoint.refreshAll()
    }

    function Ae(t) {
        this.$el = t, this.animations = {}, this.offsets = {}, this.topLevel = !1, this.timelines = {}, this.devices = {
            desktop: {
                min: 1e3,
                max: 1e7
            },
            tablet: {
                min: 691,
                max: 999
            },
            phone: {
                min: 0,
                max: 690
            }
        }, this.needsReset = !0, this.activeDevice = "desktop", this.storedWinH = pt.winH, this.setupProps(), this.lazyInit()
    }

    function Me() {
        N = [], t("[data-nectar-animate-settings]").each(function() {
            N.push(new Ae(t(this)))
        })
    }

    function We(t) {
        var e;
        switch (t) {
            case "slow":
                e = .6;
                break;
            case "medium":
                e = .4;
                break;
            case "medium_fast":
                e = .28;
                break;
            case "fast":
                e = .2;
                break;
            case "mid_subtle":
                e = .15;
                break;
            case "subtle":
                e = .13;
                break;
            case "very_subtle":
                e = .12;
                break;
            case "minimum":
                e = .09
        }
        return e
    }

    function Be() {
        if (!(pt.usingMobileBrowser && t('body[data-remove-m-parallax="1"]').length > 0)) {
            X = [], t('.wpb_column[data-scroll-animation="true"], .nectar-el-parallax-scroll[data-scroll-animation="true"]').each(function(e) {
                imagesLoaded(t(this), function(e) {
                    t(e.elements[0]).is('[data-scroll-animation="true"]') && 0 == t("#nectar_fullscreen_rows").length && 0 === t(e.elements[0]).parents(".n-sticky").length && X.push(new ze(t(e.elements[0])))
                })
            }), Fe();
            var e = 0;
            t('.nectar-recent-posts-single_featured, [data-n-parallax-bg="true"], .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, #page-header-bg[data-parallax="1"] .nectar-video-wrap, .parallax_slider_outer .nectar-slider-wrap').each(function() {
                t(this).is("[data-n-parallax-bg][data-parallax-speed]") ? (R[e] = new He(t(this), ".parallax-layer", We(t(this).attr("data-parallax-speed")), "regular"), e++) : 0 == t(this).find('[data-parallax-speed="fixed"]').length && (t(this).hasClass("nectar-slider-wrap") ? R[e] = new He(t(this), ".video-wrap, .image-bg", .25, "nectar-slider") : t(this).hasClass("page-header-bg-image-wrap") ? R[e] = new He(t(this), ".page-header-bg-image", .25, "page-header") : t(this).hasClass("nectar-video-wrap") && t(this).parents("#page-header-bg").length > 0 ? R[e] = new He(t(this), ".nectar-video-bg", .25, "page-header") : R[e] = new He(t(this), ".row-bg.using-image", We(t(this).find(".row-bg").attr("data-parallax-speed")), "regular"), e++), t(this).addClass("nectar-parallax-enabled")
            }), t(".woocommerce-tabs .wc-tabs li").on("click", function() {
                setTimeout(Fe, 100)
            })
        }
    }

    function Fe() {
        pt.usingMobileBrowser && t('body[data-remove-m-parallax="1"]').length > 0 || t('.nectar-recent-posts-single_featured, [data-n-parallax-bg="true"], .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap .slide-bg-wrap').each(function() {
            var e;
            if (t(this).parents(".wpb_tab:not(.visible-tab)").length > 0 && 0 == t(this).parents(".nectar-scrolling-tabs").length || t(this).parents(".wc-tab").length > 0 && "block" !== t(this).parents(".wc-tab").css("display")) return !0;
            if (0 == t(this).find(".row-bg").length && t(this).find(".page-header-bg-image").length > 0);
            else if (0 == t(this).find(".row-bg").length && t(this).find(".image-bg").length > 0) e = !1, 0 == t(".wpb_row").length && t(this).parents('.nectar-slider-wrap[data-full-width="true"]').length > 0 && t(this).parents(".parallax_slider_outer").length > 0 && "1" == t(this).parents(".parallax_slider_outer").index() && (e = !0), t("#portfolio-extra").length > 0 && t(this).parents(".wpb_row").length > 0 && t(this).parents(".parallax_slider_outer").length > 0 && "0" == t(this).parents(".wpb_row").index() && (e = !0), t(this).parents(".top-level").length > 0 && !pt.usingFrontEndEditor || e && !pt.usingFrontEndEditor ? t(this).find(".image-bg").css({
                height: Math.ceil(.25 * t(this).parent().offset().top) + t(this).outerHeight(!0)
            }) : t(this).find(".image-bg").css({
                height: Math.ceil(.25 * s.height()) + t(this).outerHeight(!0)
            });
            else if (0 == t(this).find(".row-bg").length && t(this).find(".video-wrap").length > 0) {
                e = !1, 0 == t(".wpb_row").length && t(this).parents('.nectar-slider-wrap[data-full-width="true"]').length > 0 && t(this).parents(".parallax_slider_outer").length > 0 && "1" == t(this).parents(".parallax_slider_outer").index() && (e = !0), t("#portfolio-extra").length > 0 && t(this).parents(".wpb_row").length > 0 && t(this).parents(".parallax_slider_outer").length > 0 && "0" == t(this).parents(".wpb_row").index() && (e = !0), t(this).parents(".top-level").length > 0 && !pt.usingFrontEndEditor || e && !pt.usingFrontEndEditor ? t(this).find(".video-wrap").css({
                    height: Math.ceil(.25 * t(this).parent().offset().top) + t(this).outerHeight(!0)
                }) : t(this).find(".video-wrap").css({
                    height: Math.ceil(.25 * pt.winH) + t(this).outerHeight(!0)
                });
                var a = t(this).find(".video-wrap video"),
                    n = a.parent().width() / 1280,
                    i = a.parent().height() / 720,
                    r = n > i ? n : i;
                a.width(1280 * r), a.height(720 * r)
            } else if (t(this).is(".nectar-recent-posts-single_featured") && t(this).parents(".top-level").length > 0 && !pt.usingFrontEndEditor);
            else if (t(this).is(".nectar-simple-slider") && t(this).parents(".top-level").length > 0 && !pt.usingFrontEndEditor);
            else if (t(this).is(".column-image-bg-wrap") && t(this).parents(".top-level").length > 0 && t(this).parent().parent().is(".vc_col-sm-12:not(.child_column)"));
            else if (!t(this).hasClass("top-level") || pt.usingFrontEndEditor || t(this).find(".parallax-layer").length > 0) {
                var o = ".row-bg",
                    l = t(this).find(".row-bg").attr("data-parallax-speed");
                t(this).find(".parallax-layer").length > 0 && !t(this).hasClass("wpb_row") && (o = ".parallax-layer", l = t(this).attr("data-parallax-speed"));
                var d = t(this).find(o + '[data-parallax-speed="fast"]').length > 0 ? 60 : 0;
                t(this).find(o).css({
                    height: Math.ceil(pt.winH * We(l)) + t(this).outerHeight(!0) + d
                })
            }
        })
    }

    function Le() {
        t('.wpb_wrapper > .nectar-slider-wrap[data-full-width="true"]').each(function() {
            t(this).parent().hasClass("span_9") || t(this).parent().hasClass("span_3") || "sidebar-inner" == t(this).parent().attr("id") || "0" == t(this).parents(".wpb_row").index() && t(this).addClass("first-nectar-slider")
        });
        var e = 0 == t("#portfolio-extra").length ? t(".main-content > .row > *").length : t(".main-content > .row #portfolio-extra > *").length;
        e = 0 == t("#portfolio-extra").length ? t(".main-content > .row > .wpb_row").length > 0 ? t(".main-content > .row > .wpb_row").length : t(".main-content > .row > *").length : t(".main-content > .row #portfolio-extra > *").length, t('.container-wrap .full-width-section, .container-wrap .full-width-content:not(.page-submenu .full-width-content):not(.blog-fullwidth-wrap), .row > .nectar-slider-wrap[data-full-width="true"], .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]').each(function() {
            if (t(this).parents(".nectar-global-section.before-footer").length > 0 || t(this).parents('[class*="nectar_hook_sidebar"]').length > 0) return !0;
            if (!t(this).parent().hasClass("span_9") && !t(this).parent().hasClass("span_3") && "sidebar-inner" != t(this).parent().attr("id"))
                if (t(this).parents(".wpb_row").length > 0) {
                    t(this).parent();
                    var a = t(this).parents(".wpb_row").index();
                    if (t(this).parents("#portfolio-extra").length > 0 && 0 == t("#full_width_portfolio").length) return !1;
                    "0" == a && 0 != g.length || "0" == a && 0 == g.length && 0 == t(".page-header-no-bg").length && 0 == t(".project-title").length && "0" == a && 0 == t(".project-title").length && 0 == t('body[data-bg-header="true"]').length && (0 == t(".single").length ? t(".container-wrap").css("padding-top", "0px") : t(this).addClass("first-section")), a == e - 1 && 0 == t("#respond").length && "portfolio-filters-inline" != t(this).attr("id") && (t(".container-wrap").css("padding-bottom", "0px"), t("#call-to-action .triangle").remove())
                } else {
                    if (t(this).parents("#portfolio-extra").length > 0 && 0 == t("#full_width_portfolio").length) return !1;
                    0 == t(this).find(".portfolio-filters-inline").length && "post-area" != t(this).attr("id") && ("0" == t(this).index() && 0 != g.length || "0" != t(this).index() || 0 != g.length || "0" != t(this).index() || 0 != t(".page-header-no-bg").length || "0" != t(this).index() || t(this).hasClass("blog_next_prev_buttons") || 0 != t(this).parents(".nectar-global-section").length || t(this).hasClass("nectar-shop-outer") || 0 != t(this).parents(".pum-container").length || (1 == t('body[data-header-resize="0"]').length && 0 == t(".single").length || t("body.material").length > 0 && 0 == t(".single").length ? !t("body.blog .blog-fullwidth-wrap > .masonry:not(.meta-overlaid)").length > 0 && t(".container-wrap").css("padding-top", "0px") : t(this).addClass("first-section")), t(this).index() == e - 1 && 0 == t("#respond").length && 0 == t("body.woocommerce-checkout").length && (t(".container-wrap").css("padding-bottom", "0px"), t(".bottom_controls").css("margin-top", "0px"), t("#call-to-action .triangle").remove()))
                }
        }), t('#portfolio-extra > .nectar-slider-wrap[data-full-width="true"], .portfolio-wrap').each(function() {
            t(this).index() == e - 1 && 0 == t("#commentform").length && 0 == t("#pagination").length && (parseInt(t(".container-wrap").css("padding-bottom")) > 0 && t(this).css("margin-bottom", "-40px"), t("#call-to-action .triangle").remove())
        }), t(".portfolio-filters").each(function() {
            "0" == t(this).index() && 0 != g.length || "0" == t(this).index() ? t(this).addClass("first-section nder-page-header") : ("0" == t(this).index() && 0 == g.length || "0" == t(this).index()) && t(this).css({
                "margin-top": "0px"
            }).addClass("first-section")
        }), t(".portfolio-filters-inline").each(function() {
            t(this).parents(".wpb_row").length > 0 || ("0" == t(this).index() && 0 != g.length || "0" == t(this).index() ? t(this).addClass("first-section nder-page-header") : ("0" == t(this).index() && 0 == g.length || "0" == t(this).index()) && t(this).css({
                "margin-top": "-30px",
                "padding-top": "50px"
            }).addClass("first-section"))
        })
    }

    function qe() {
        var e = t("body.vc_editor").length > 0 ? ".vc_element > " : "",
            a = r.is('[data-flex-cols="true"]');
        t(".main-content > .row > " + e + " .full-width-content, #portfolio-extra > " + e + " .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, .post-area.span_12 article .content-inner > .full-width-content").each(function() {
            if (t(this).find("> .span_12 > " + e + " .col").length > 1) {
                var n, i = 0,
                    s = 0;
                t(this).find("> .span_12 > " + e + "  .col").each(function() {
                    n = t(this).find("> .vc_column-inner > .wpb_wrapper").length > 0 ? ".vc_column-inner" : ".column-inner-wrap > .column-inner";
                    var s = a ? parseInt(t(this).find("> .vc_column-inner").css("padding-top")) : parseInt(t(this).css("padding-top")),
                        r = e.length > 2 && t(this).find("> .vc_column-inner").length > 0 ? parseInt(t(this).find("> .vc_column-inner").css("padding-top")) : 0,
                        o = t(this).find("> " + n + " > .wpb_wrapper").height();
                    o + 2 * s + r > i && (i = o + 2 * s + r)
                }), t(this).find("> .span_12 > " + e + " .col").each(function() {
                    n = t(this).find("> .vc_column-inner > .wpb_wrapper").length > 0 ? ".vc_column-inner" : ".column-inner-wrap > .column-inner", t(this).find("> " + n + " > .wpb_wrapper > *").length > 0 ? e.length < 2 && !t(this).parent().parent().hasClass("vc_row-o-equal-height") ? (t(this).css("height", i), a && t(this).find("> .vc_column-inner").css("height", i)) : e.length > 2 && !t(this).parent().parent().parent().hasClass("vc_row-o-equal-height") && (t(this).css("height", i), a && t(this).find("> .vc_column-inner").css("height", i)) : t(this).is('[data-using-bg="true"]') && 0 == t(this).parents(".vc_row-o-content-top").length && (t(this).css("min-height", i), r.is('[data-flex-cols="true"]') && t(this).find("> .vc_column-inner").css("min-height", i), t(this).is('[data-animation*="reveal"]') && t(this).find(".column-inner").css("min-height", i))
                }), pt.winW < 1e3 && t(this).find("> .span_12 > " + e + " .col .wpb_row .col").css("min-height", "0px"), t(this).hasClass("vertically-align-columns") && pt.winW > 1e3 && !t(this).hasClass("vc_row-o-equal-height") && t(this).find("> .span_12 > " + e + " .col").each(function() {
                    n = t(this).find("> .vc_column-inner > .wpb_wrapper").length > 0 ? ".vc_column-inner" : ".column-inner-wrap > .column-inner", s = t(this).find("> " + n + " > .wpb_wrapper").height();
                    var e = t(this).height() / 2 - s / 2;
                    e <= 0 && (e = 0), t(this).find("> " + n + " > .wpb_wrapper").css("margin-top", e).css("margin-bottom", e)
                })
            }
        }), 0 == t('body[data-flex-cols="true"]').length && (t(".main-content > .row > .wpb_row:not(.full-width-content).vc_row-o-equal-height").each(function() {
            if (t(this).find(">.span_12 > " + e + ' .wpb_column[data-animation*="reveal"]').length > 0) {
                var a = 0;
                t(this).find("> .span_12 > " + e + " .col").each(function() {
                    var e = parseInt(t(this).find("> .column-inner-wrap > .column-inner").css("padding-top"));
                    t(this).find("> .column-inner-wrap > .column-inner").height() + 2 * e > a && (a = t(this).find("> .column-inner-wrap > .column-inner").height() + 2 * e)
                }), t(this).find("> .span_12 > " + e + " .col").each(function() {
                    t(this).find("> .column-inner-wrap > .column-inner .wpb_wrapper > *").length > 0 ? t(this).find("> .column-inner-wrap").css("height", a) : (t(this).css("min-height", a), t(this).is('[data-animation*="reveal"]') && t(this).find(".column-inner").css("min-height", a))
                })
            }
        }), t(".wpb_row.vc_row-o-equal-height>.span_12> " + e + '.wpb_column[class*="padding-"][data-padding-pos="all"]').each(function() {
            0 == t(this).parents(".tabbed").length && t(this).css({
                "padding-top": t(this).css("padding-left"),
                "padding-bottom": t(this).css("padding-left")
            })
        }))
    }

    function je() {
        t(".wpb_row:has(.nectar-parallax-scene)").each(function(e) {
            var a = parseInt(t(this).find(".nectar-parallax-scene").attr("data-scene-strength"));
            U[e] = t(this).find(".nectar-parallax-scene").parallax({
                scalarX: a,
                scalarY: a
            });
            var n = t(this).find(".nectar-parallax-scene li");
            t.each(n, function() {
                if (t(this).find("div").length > 0) {
                    var e = t(this).find("div").css("background-image").replace(/"/g, "").replace(/url\(|\)$/gi, "");
                    e && "" !== e && "none" !== e && (n = n.add(t("<img>").attr("src", e)))
                }
            })
        })
    }

    function Pe() {
        t("ul.checks li").each(function() {
            0 == t(this).find("i.fa-check-circle").length && t(this).prepend('<i class="fa fa-check-circle"></i>')
        })
    }

    function Ye() {
        t('.nectar-cta[data-style="arrow-animation"]').addClass("loaded")
    }

    function Re() {
        var a = 1 == lt ? "500%" : "88%",
            n = 1 == lt ? "500%" : "70%",
            i = 1 == lt ? "500%" : "70%";
        t(ot + ".img-with-animation").each(function(e) {
            var n = t(this),
                i = n.is("[data-animation]") ? n.attr("data-animation") : "fade-in";
            ("ro-reveal-from-right" == i && "88%" == a || "ro-reveal-from-left" == i && "88%" == a) && (a = "75%"), "slide-up" == i && "88%" == a && (a = "99%");
            var s = O;
            t(this)[0].hasAttribute("data-animation-easing") && (s = t(this).attr("data-animation-easing"));
            var r = parseInt(z);
            (n.parents(".row_position_absolute").length > 0 || n.hasClass("position_desktop_absolute")) && (r = 500);
            var o = new Waypoint({
                element: n[0],
                handler: function() {
                    if (n.parents(".wpb_tab").length > 0 && "hidden" == n.parents(".wpb_tab").css("visibility") || n.hasClass("animated-in")) o.destroy();
                    else {
                        if (!S || t('body[data-responsive="0"]').length > 0) {
                            var e = n.is("[data-delay]") ? n.attr("data-delay") : 0,
                                a = n.parents(".hover-wrap").length > 0 ? n.parents(".hover-wrap") : n,
                                l = z;
                            n.parents(".nectar-disable-mobile-animation").length > 0 && pt.winW < 1e3 && (l = 0, r = 0, e = 0), "fade-in-from-left" == i || "fade-in-from-right" == i ? a.delay(e).transition({
                                opacity: 1,
                                x: "0px"
                            }, l, s) : "fade-in-from-bottom" == i ? tt.push(anime({
                                targets: a[0],
                                translateY: [100, 0],
                                translateZ: 0,
                                opacity: {
                                    value: [0, 1],
                                    duration: r
                                },
                                delay: e,
                                easing: s,
                                duration: l
                            })) : "slide-up" == i ? tt.push(anime({
                                targets: a[0],
                                translateY: [150, 0],
                                translateZ: 0,
                                delay: e,
                                easing: s,
                                duration: l
                            })) : "fade-in" == i ? a.delay(e).transition({
                                opacity: 1
                            }, l, s) : "grow-in" == i ? setTimeout(function() {
                                a.transition({
                                    scale: 1,
                                    opacity: 1
                                }, l, s)
                            }, e) : "flip-in" == i ? setTimeout(function() {
                                a.transition({
                                    rotateY: 0,
                                    opacity: 1
                                }, l, s)
                            }, e) : "flip-in-vertical" == i ? setTimeout(function() {
                                a.transition({
                                    rotateX: 0,
                                    opacity: 1
                                }, l, s)
                            }, e) : "ro-reveal-from-left" != i && "ro-reveal-from-right" != i && "ro-reveal-from-bottom" != i && "ro-reveal-from-top" != i || n.parents(".img-with-aniamtion-wrap").addClass("animated-in"), "none" != i && n.addClass("animated-in")
                        }
                        o.destroy()
                    }
                },
                offset: a
            })
        }), t(ot + ".nectar_cascading_images").each(function() {
            var e = t(this),
                a = t(this).is("[data-animation-timing]") ? t(this).attr("data-animation-timing") : 175;
            a = parseInt(a);
            var i = new Waypoint({
                element: e[0],
                handler: function() {
                    e.parents(".wpb_tab").length > 0 && "hidden" == e.parents(".wpb_tab").css("visibility") || e.hasClass("animated-in") ? i.destroy() : ((!S || t('body[data-responsive="0"]').length > 0) && (e.find(".cascading-image").each(function(e) {
                        var n = t(this);
                        "flip-in" == n.attr("data-animation") || "flip-in-vertical" == n.attr("data-animation") ? setTimeout(function() {
                            n.find(".inner-wrap").css({
                                opacity: 1,
                                transform: "rotate(0deg) translateZ(0px)"
                            })
                        }, e * a) : "grow-in-reveal" == n.attr("data-animation") ? setTimeout(function() {
                            n.find(".inner-wrap").css({
                                opacity: 1,
                                transform: "translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"
                            }), n.find(".inner-wrap img").css({
                                transform: "translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"
                            })
                        }, e * a) : setTimeout(function() {
                            n.find(".inner-wrap").css({
                                opacity: 1,
                                transform: "translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"
                            })
                        }, e * a)
                    }), e.addClass("animated-in")), i.destroy())
                },
                offset: n
            })
        }), t(ot + '.col.has-animation:not([data-animation*="reveal"]), ' + ot + '.wpb_column.has-animation:not([data-animation*="reveal"]), ' + ot + ".nectar-fancy-box.has-animation").each(function(n) {
            if (v && t(this).parents(".top-level").length > 0) return !0;
            var i = t(this),
                s = a;
            t(this)[0].hasAttribute("data-animation-offset") && (s = parseInt(t(this).attr("data-animation-offset")) + "%");
            var r = O;
            t(this)[0].hasAttribute("data-animation-easing") && (r = t(this).attr("data-animation-easing"));
            var o = parseInt(z);
            i.parents(".row_position_absolute").length > 0 && (o = 500);
            var l = new Waypoint({
                element: i[0],
                handler: function() {
                    if (i.parents(".wpb_tab").length > 0 && "hidden" == i.parents(".wpb_tab").css("visibility") || i.hasClass("animated-in")) l.destroy();
                    else {
                        if (!S || t('body[data-responsive="0"]').length > 0) {
                            i.addClass("triggered-animation"), t(e).trigger("nectar-column-animation-start");
                            var a = i.attr("data-delay"),
                                s = z;
                            if (i.hasClass("mobile-disable-entrance-animation") && pt.winW < 1e3 && (s = 0, o = 0, a = 0), "fade-in-from-left" == i.attr("data-animation") || "fade-in-from-right" == i.attr("data-animation")) K[n] = setTimeout(function() {
                                i.transition({
                                    opacity: 1,
                                    x: "0px"
                                }, s, r)
                            }, a);
                            else if ("fade-in-from-bottom" == i.attr("data-animation") || "slight-fade-in-from-bottom" == i.attr("data-animation")) {
                                var d = "fade-in-from-bottom" == i.attr("data-animation") ? 100 : 50;
                                tt.push(anime({
                                    targets: i[0],
                                    translateY: [d, 0],
                                    translateZ: 0,
                                    opacity: {
                                        value: [0, 1],
                                        duration: o
                                    },
                                    delay: a,
                                    easing: r,
                                    duration: s
                                }))
                            } else "fade-in" == i.attr("data-animation") ? K[n] = setTimeout(function() {
                                i.transition({
                                    opacity: 1
                                }, s, r)
                            }, a) : "grow-in" == i.attr("data-animation") || "zoom-out" == i.attr("data-animation") ? K[n] = setTimeout(function() {
                                i.transition({
                                    scale: 1,
                                    opacity: 1
                                }, s, r)
                            }, a) : "flip-in" == i.attr("data-animation") ? K[n] = setTimeout(function() {
                                i.transition({
                                    rotateY: "0",
                                    opacity: 1
                                }, s, r)
                            }, a) : "flip-in-vertical" == i.attr("data-animation") ? K[n] = setTimeout(function() {
                                i.transition({
                                    rotateX: "0",
                                    y: "0",
                                    opacity: 1
                                }, s, r)
                            }, a) : "slight-twist" == i.attr("data-animation") && (K[n] = setTimeout(function() {
                                tt.push(anime({
                                    targets: i[0],
                                    rotateY: [20, 0],
                                    rotateZ: [-4, 0],
                                    opacity: 1,
                                    easing: r,
                                    duration: s
                                }))
                            }, a));
                            i.hasClass("boxed") && (i.addClass("no-pointer-events"), setTimeout(function() {
                                i.removeClass("no-pointer-events")
                            }, parseInt(z) + parseInt(a) + 30)), i.find('.nectar-post-grid-wrap[data-style="mouse_follow_image"]') && setTimeout(function() {
                                i[0].style.transform = "none"
                            }, parseInt(z) + parseInt(a) + 30), i.addClass("animated-in")
                        }
                        l.destroy()
                    }
                },
                offset: s
            })
        }), t(ot + '.wpb_column.has-animation[data-animation*="reveal"]').each(function() {
            var e = O;
            t(this)[0].hasAttribute("data-animation-easing") && (e = t(this).attr("data-animation-easing"));
            var a = t(this).is('[data-animation="mask-reveal"]') ? "88%" : i;
            t(this)[0].hasAttribute("data-animation-offset") && (a = parseInt(t(this).attr("data-animation-offset")) + "%");
            var n = t(this),
                s = new Waypoint({
                    element: n[0],
                    handler: function() {
                        if (n.parents(".wpb_tab").length > 0 && "hidden" == n.parents(".wpb_tab").css("visibility") || n.hasClass("animated-in")) s.destroy();
                        else {
                            var a = n.attr("data-delay");
                            if (!S || t('body[data-responsive="0"]').length > 0) {
                                var i = n.find("> .vc_column-inner").length > 0;
                                "reveal-from-bottom" == n.attr("data-animation") || "reveal-from-top" == n.attr("data-animation") ? setTimeout(function() {
                                    1 == i ? n.find("> .vc_column-inner").transition({
                                        y: 0
                                    }, z, e) : n.find(".column-inner-wrap, .column-inner").transition({
                                        y: 0
                                    }, z, e, function() {
                                        n.find(".column-inner-wrap, .column-inner").addClass("no-transform")
                                    }), n.addClass("animated-in")
                                }, a) : "reveal-from-right" != n.attr("data-animation") && "reveal-from-left" != n.attr("data-animation") || setTimeout(function() {
                                    1 == i ? n.find("> .vc_column-inner").transition({
                                        x: 0
                                    }, z, e) : n.find(".column-inner-wrap, .column-inner").transition({
                                        x: 0
                                    }, z, e, function() {
                                        n.find(".column-inner-wrap, .column-inner").addClass("no-transform")
                                    }), n.addClass("animated-in")
                                }, a), setTimeout(function() {
                                    n.addClass("animated-in")
                                }, a)
                            }
                            s.destroy()
                        }
                    },
                    offset: a
                })
        })
    }

    function Ve() {
        t(".nectar_cascading_images").each(function() {
            var e = !!t(this).hasClass("forced-aspect");
            t(this).parents(".vc_row-o-equal-height").length > 0 && t(this).parents(".wpb_column").length > 0 && t(this).css("max-width", t(this).parents(".wpb_column").width()), t(this).find(".bg-color").each(function() {
                if (1 == e && 0 == t(this).parents(".cascading-image").index()) return !0;
                var a = 0,
                    n = 0;
                if (0 == t(this).parent().find(".img-wrap").length) {
                    var i = t(this).parents(".cascading-image").siblings('.cascading-image[data-has-img="true"]').first();
                    a = i.find(".img-wrap").height(), n = i.find(".img-wrap").width()
                } else a = t(this).parent().find(".img-wrap").height(), n = t(this).parent().find(".img-wrap").width();
                t(this).css({
                    height: a,
                    width: n
                }).addClass("calculated")
            })
        })
    }

    function Xe(e, a) {
        switch (this.$element = e, this.inView = !1, this.topLevel = !1, this.lastY = 0, this.layer1Parallax = !!this.$element.is('[data-layer-1-parallax="yes"]'), a) {
            case "subtle":
                this.intensity = .09;
                break;
            case "medium":
                this.intensity = .15;
                break;
            case "high":
                this.intensity = .25
        }
        this.calculatePos(), this.trackView(), this.animate(), (t(".portfolio-filters").length > 0 || t(".portfolio-filters-inline").length > 0) && setInterval(this.calculatePos.bind(this), 700), s.on("resize", this.calculatePos.bind(this))
    }

    function Ne() {
        t(ot + ".nectar-split-heading:not(.custom-trigger)").each(function(e) {
            var a = 1 == lt ? "500%" : "bottom-in-view";
            t(this)[0].hasAttribute("data-animation-offset") && 1 != lt && t(this).attr("data-animation-offset").length > 0 && (a = parseInt(t(this).attr("data-animation-offset")) + "%");
            var n = t(this),
                i = n.is("[data-animation-delay]") ? parseInt(n.attr("data-animation-delay")) : 0,
                s = new Waypoint({
                    element: n[0],
                    handler: function() {
                        if (n.parents(".wpb_tab").length > 0 && "hidden" == n.parents(".wpb_tab").css("visibility") || n.hasClass("animated-in")) s.destroy();
                        else {
                            var e;
                            if (!S || t('body[data-responsive="0"]').length > 0) setTimeout(function() {
                                if (n.is('[data-animation-type="line-reveal-by-space"]:not([data-text-effect*="letter-reveal"])')) {
                                    var a = 0;
                                    n.is('[data-stagger="true"]') && (a = 500 / n.find("> * > span").length, a = Math.min(Math.max(a, 15), 50)), e = parseInt(z) < 1100 ? z : "1100", n.is('[data-m-rm-animation="true"]') && pt.winW < 1e3 ? n.find("> * > span .inner").css({
                                        transform: "translateY(0)",
                                        opacity: "1"
                                    }) : n.find("> * > span").each(function(n) {
                                        if (0 == a) t(this).find("> .inner").delay(n * a).transition({
                                            y: "0px",
                                            opacity: "1"
                                        }, e, O);
                                        else {
                                            var i = t(this).find("> .inner");
                                            setTimeout(function() {
                                                i[0].style.transform = "translateY(0em)", i[0].style.opacity = "1"
                                            }, n * a)
                                        }
                                    })
                                } else if (n.is('[data-animation-type="line-reveal-by-space"][data-text-effect*="letter-reveal"]')) {
                                    e = parseInt(z) < 1e3 ? z : "1000";
                                    a = 0;
                                    var i = n.find("> * > span span"),
                                        s = n.is('[data-text-effect="letter-reveal-top"]') ? ["-1.3em", "0em"] : ["1.3em", "0em"];
                                    a = 400 / i.length, a = Math.min(Math.max(a, 20), 35), i.length > 0 && tt.push(anime({
                                        targets: n.find("> * > span span").toArray(),
                                        translateY: s,
                                        delay: anime.stagger(a),
                                        duration: 1200,
                                        easing: "cubicBezier(0.25,1,0.5,1)"
                                    }))
                                } else n.find(".heading-line").each(function(e) {
                                    t(this).find("> div").delay(70 * e).transition({
                                        y: "0px"
                                    }, z, O)
                                });
                                n.addClass("animated-in")
                            }, i);
                            s.destroy()
                        }
                    },
                    offset: a
                })
        }), t(ot + ".nectar-split-heading.scroll-timeline").each(function(e) {
            if (!0 === ut.$usingFullScreenRows) var a = t(this),
                n = new Waypoint({
                    element: a[0],
                    handler: function() {
                        a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("animated-in") ? n.destroy() : (!S || t('body[data-responsive="0"]').length > 0) && a.find(".inner").each(function(e) {
                            var a = t(this);
                            setTimeout(function() {
                                a.css({
                                    opacity: "1"
                                })
                            }, 30 * e)
                        })
                    },
                    offset: "500%"
                });
            else new De(t(this))
        })
    }

    function De(t) {
        this.$el = t, this.inView = !1, this.timeline = null, this.duration = 450, this.speed = 1.9, this.wordDelay = 150, this.topLevel = !1, this.topCushion = .05 * pt.winH, this.mergedGroup = !1, this.$el.parents(".wpb_row.nectar-split-heading-merged").length > 0 || (this.mergeNeighbors(), this.trackInView(), this.createTimeline(), this.events(), this.raf())
    }

    function Qe() {
        var e = 1 == lt ? "500%" : "bottom-in-view",
            a = t('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && pt.usingMobileBrowser ? ".nectar-progress-bar" : ot + ".nectar-progress-bar";
        pt.usingMobileBrowser && "bottom-in-view" == e && (e = "70%"), t(a).each(function() {
            var a = t(this),
                n = new Waypoint({
                    element: a[0],
                    handler: function() {
                        if (a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("completed")) n.destroy();
                        else {
                            "100%" == e && a.find(".bar-wrap").css("opacity", "1");
                            var t = a.find("span").attr("data-width"),
                                i = parseInt(a.find("span strong i").text());
                            a.find("span").transition({
                                width: parseInt(t) + "%"
                            }, 800, "easeInOutCubic");
                            var s = a.find("span strong i")[0];
                            new ae(s, 0, i, 0, 1, {
                                useEasing: !1
                            }).start(), a.find("span strong").transition({
                                opacity: 1
                            }, 550, "easeInCirc"), "100" == t && a.find("span strong").addClass("full"), a.addClass("completed"), n.destroy()
                        }
                    },
                    offset: e
                })
        })
    }

    function Ze() {
        var e = 1 == lt ? "500%" : "75%";
        t(ot + '.wpb_column[data-border-animation="true"]').each(function() {
            var a = t(this),
                n = new Waypoint({
                    element: a[0],
                    handler: function() {
                        if (a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("completed")) n.destroy();
                        else {
                            var t = a.attr("data-border-animation-delay").length > 0 ? parseInt(a.attr("data-border-animation-delay")) : 0;
                            setTimeout(function() {
                                a.find(".border-wrap").addClass("animation"), a.find(".border-wrap").addClass("completed")
                            }, t), n.destroy()
                        }
                    },
                    offset: e
                })
        })
    }

    function Ge() {
        t(ot + ".nectar-waypoint-el").each(function() {
            var e = !!t(this).is("[data-nectar-waypoint-el-stagger]") && t(this).attr("data-nectar-waypoint-el-stagger"),
                a = t(this).is("[data-nectar-waypoint-el-delay]") ? parseInt(t(this).attr("data-nectar-waypoint-el-delay")) : 0,
                n = t(this).is("[data-nectar-waypoint-el-offset]") ? parseInt(t(this).attr("data-nectar-waypoint-el-offset")) + "%" : "90%";
            1 == lt && (n = "500%");
            var i = t(this),
                s = new Waypoint({
                    element: i[0],
                    handler: function() {
                        i.parents(".wpb_tab").length > 0 && "hidden" == i.parents(".wpb_tab").css("visibility") || i.hasClass("completed") ? s.destroy() : (setTimeout(function() {
                            e ? i.find("." + e).each(function(e) {
                                var a = t(this);
                                setTimeout(function() {
                                    a.addClass("animated-in")
                                }, 100 * e)
                            }) : i.addClass("animated-in")
                        }, a), s.destroy())
                    },
                    offset: n
                })
        })
    }

    function Ue() {
        var e = 1 == lt ? "500%" : "80%";
        t(ot + ".nectar_food_menu_item").parent().each(function() {
            var a = t(this),
                n = new Waypoint({
                    element: a[0],
                    handler: function() {
                        a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("completed") ? n.destroy() : (a.find(".nectar_food_menu_item").each(function(e) {
                            var a = t(this);
                            setTimeout(function() {
                                a.addClass("animated-in")
                            }, 150 * e)
                        }), n.destroy())
                    },
                    offset: e
                })
        })
    }

    function Je() {
        var e = 1 == lt ? "500%" : "bottom-in-view";
        t(ot + '.divider-small-border[data-animate="yes"], ' + ot + '.divider-border[data-animate="yes"]').each(function() {
            var a = t(this).hasClass("divider-small-border") ? 1300 : 1500,
                n = t(this),
                i = new Waypoint({
                    element: n[0],
                    handler: function() {
                        n.parents(".wpb_tab").length > 0 && "hidden" == n.parents(".wpb_tab").css("visibility") || n.hasClass("completed") ? i.destroy() : (n.each(function() {
                            t(this).css({
                                transform: "scale(0,1)",
                                visibility: "visible"
                            });
                            var e = t(this);
                            e.delay(e.attr("data-animation-delay")).transition({
                                transform: "scale(1, 1)"
                            }, a, "cubic-bezier(.18,0.75,.25,1)")
                        }), n.addClass("completed"), i.destroy())
                    },
                    offset: e
                })
        })
    }

    function Ke() {
        t(".nectar_image_with_hotspots").each(function() {
            t(this).find(".nectar_hotspot_wrap").each(function() {
                if (pt.winW > 690) {
                    t(this).parents('.nectar_image_with_hotspots[data-tooltip-func="hover"]').length > 0 && (t(this).find(".nectar_hotspot").removeClass("click"), t(this).find(".nttip").removeClass("open")), t(this).find(".nttip .inner a.tipclose").remove(), t(".nttip").css("height", "auto"), t(this).css({
                        width: "auto",
                        height: "auto"
                    }), t(this).find(".nttip").removeClass("force-right").removeClass("force-left").removeClass("force-top").css("width", "auto");
                    var e = t(this).find(".nttip").offset();
                    e.left > t(this).parents(".nectar_image_with_hotspots").width() - 200 ? t(this).find(".nttip").css("width", "250px") : t(this).find(".nttip").css("width", "auto"), e.left < 0 ? t(this).find(".nttip").addClass("force-right") : e.left + t(this).find(".nttip").outerWidth(!0) > pt.winW ? t(this).find(".nttip").addClass("force-left").css("width", "250px") : e.top + t(this).find(".nttip").height() + 35 > s.height() && t("#nectar_fullscreen_rows").length > 0 && t(this).find(".nttip").addClass("force-top"), 0 == t(this).find("> .open").length && t(this).css({
                        width: "30px",
                        height: "30px"
                    })
                } else t(this).find(".nttip").removeClass("force-left").removeClass("force-right").removeClass("force-top"), t(this).find(".nectar_hotspot").addClass("click"), 0 == t(this).find(".nttip a.tipclose").length && t(this).find(".nttip .inner").append('<a href="#" class="tipclose"><span><i class="screen-reader-text">' + nectar_front_i18n.close + "</i></span></a>"), t(".nttip").css("height", s.height())
            })
        })
    }

    function ta() {
        0 != t(".nectar_image_with_hotspots").length && (! function() {
            t('.nectar_image_with_hotspots[data-hotspot-icon="numerical"]').each(function() {
                t(this).find(".nectar_hotspot_wrap").each(function(e) {
                    var a = t(this);
                    setTimeout(function() {
                        a.find(".nectar_hotspot").addClass("pulse")
                    }, 300 * e)
                })
            });
            var e = [];
            t('.nectar_image_with_hotspots:not([data-tooltip-func="click"]) .nectar_hotspot').each(function(a) {
                e[a] = "", t(this).on("mouseover", function() {
                    clearTimeout(e[a]), t(this).parent().css({
                        "z-index": "400",
                        height: "auto",
                        width: "auto"
                    })
                }), t(this).on("mouseleave", function() {
                    var n = t(this);
                    n.parent().css({
                        "z-index": "auto"
                    }), e[a] = setTimeout(function() {
                        n.parent().css({
                            height: "30px",
                            width: "30px"
                        })
                    }, 300)
                })
            })
        }(), r.on("click", ".nectar_hotspot.click", function() {
            if (t(this).parents(".nectar_image_with_hotspots").find(".nttip").removeClass("open"), t(this).parent().find(".nttip").addClass("open"), t(this).parents(".nectar_image_with_hotspots").find(".nectar_hotspot").removeClass("open"), t(this).parent().find(".nectar_hotspot").addClass("open"), pt.winW > 690) {
                t(this).parent().css({
                    "z-index": "120",
                    height: "auto",
                    width: "auto"
                });
                var e = t(this);
                setTimeout(function() {
                    e.parents(".nectar_image_with_hotspots").find(".nectar_hotspot_wrap").each(function() {
                        0 == t(this).find("> .open").length && t(this).css({
                            height: "30px",
                            width: "30px",
                            "z-index": "auto"
                        })
                    })
                }, 300)
            }
            return pt.winW <= 690 && (t("body.nectar_box_roll").length > 0 && t(".container-wrap").addClass("hotspot-open"), t(".nectar_hotspot.click").parents('.wpb_row, [class*="vc_col-"]').css("z-index", ""), t(this).parents('.wpb_row, [class*="vc_col-"]').css("z-index", "200")), !1
        }), r.on("click", ".nectar_hotspot.open", function() {
            return t(this).parent().find(".nttip").removeClass("open"), t(this).parent().find(".nectar_hotspot").removeClass("open"), t(this).parents(".wpb_row").css("z-index", "auto"), !1
        }), r.on("click", ".nttip.open", function(e) {
            if (pt.winW < 690) {
                if (e.target && t(e.target).is("a")) return;
                return t("body.nectar_box_roll").length > 0 && t(".container-wrap").removeClass("hotspot-open"), t(this).parents(".nectar_image_with_hotspots").find(".nttip").removeClass("open"), t(this).parents(".nectar_image_with_hotspots").find(".nectar_hotspot").removeClass("open"), t(this).parents(".wpb_row").css("z-index", "auto"), !1
            }
        }), Ke(), s.on("resize", Ke))
    }

    function ea() {
        var e = 1 == lt ? "500%" : "50%";
        t(ot + '.nectar_image_with_hotspots[data-animation="true"]').each(function() {
            var a = t(this),
                n = new Waypoint({
                    element: a[0],
                    handler: function() {
                        a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("completed") ? n.destroy() : (a.addClass("completed"), a.find(".nectar_hotspot_wrap").each(function(e) {
                            var a = t(this),
                                n = a.parents(".col.has-animation").length > 0 ? 1 : 0;
                            setTimeout(function() {
                                a.addClass("animated-in")
                            }, 175 * (e + n))
                        }), n.destroy())
                    },
                    offset: e
                })
        })
    }

    function aa() {
        [].slice.call(a.querySelectorAll("[data-nectar-img-src]")).forEach(function(t) {
            var e = t.getAttribute("data-nectar-img-src");
            e && na(t, e, ct)
        })
    }

    function na(a, n, i) {
        if (a.classList.contains("nectar-lazy")) {
            a.addEventListener("load", function() {
                a.classList.contains("keep-calculated-size") || (a.style.height = "", a.style.width = ""), a.classList.add("loaded"), a.removeAttribute("data-nectar-img-src"), "undefined" != typeof SalientPortfolio && a.classList.contains("image-gallery-portfolio-item") && t(e).trigger("salient-portfolio-recalculate"), pt.usingMobileBrowser || Waypoint.refreshAll(), i.unobserve(a)
            }), a.src = n;
            var s = a.getAttribute("data-nectar-img-srcset");
            s && (a.setAttribute("srcset", s), a.removeAttribute("data-nectar-img-srcset")), a.parentNode.classList.add("img-loaded")
        } else a.style.backgroundImage = "url('" + n + "')", a.classList.add("loaded"), a.removeAttribute("data-nectar-img-src"), i.unobserve(a)
    }

    function ia(t, e) {
        if (t.isIntersecting) {
            if (t.target.classList.contains("loaded")) return void e.unobserve(t.target);
            for (var a in t.target.children) {
                var n = t.target.children[a];
                "string" == typeof n.tagName && "SOURCE" === n.tagName && (n.src = n.dataset.nectarVideoSrc)
            }
            t.target.load(), t.target.classList.remove("lazy"), t.target.classList.add("loaded"), e.unobserve(t.target)
        }
    }

    function sa() {
        var t = [].slice.call(a.querySelectorAll("[data-nectar-img-src]")),
            n = [].slice.call(a.querySelectorAll(".nectar-lazy-video")),
            i = [].slice.call(a.querySelectorAll("#header-outer .nectar-lazy-video"));
        if ("IntersectionObserver" in e) {
            s.off("resize.nectarLazySizing", ra), s.on("resize.nectarLazySizing", ra), ct = new IntersectionObserver(function(t) {
                t.forEach(function(t) {
                    if (t.isIntersecting) {
                        var e = t.target,
                            a = e.getAttribute("data-nectar-img-src");
                        a && na(e, a, ct)
                    }
                })
            }, {
                rootMargin: "450px"
            }), t.forEach(function(t) {
                ct.observe(t)
            });
            var r = new IntersectionObserver(function(t, e) {
                    t.forEach(function(t) {
                        ia(t, r)
                    })
                }, {
                    root: jt() ? null : a,
                    rootMargin: "125px"
                }),
                o = new IntersectionObserver(function(t, e) {
                    t.forEach(function(t) {
                        ia(t, o)
                    })
                }, {
                    rootMargin: "125px"
                });
            i.forEach(function(t) {
                o.observe(t)
            }), n.forEach(function(t) {
                r.observe(t)
            })
        } else t.forEach(function(t) {
            if (t.classList.contains("nectar-lazy")) {
                t.classList.contains("keep-calculated-size") || (t.style.height = "", t.style.width = ""), t.src = t.getAttribute("data-nectar-img-src");
                var e = t.getAttribute("data-nectar-img-srcset");
                e && (t.setAttribute("srcset", e), t.removeAttribute("data-nectar-img-srcset")), t.parentNode.classList.add("img-loaded"), t.classList.add("loaded"), t.removeAttribute("data-nectar-img-src")
            } else t.style.backgroundImage = "url('" + t.getAttribute("data-nectar-img-src") + "')", t.classList.add("loaded"), t.removeAttribute("data-nectar-img-src")
        }), n.forEach(function(t) {
            for (var e in t.children) {
                var a = t.children[e];
                "string" == typeof a.tagName && "SOURCE" === a.tagName && (a.src = a.dataset.nectarVideoSrc)
            }
            t.load(), t.classList.remove("lazy"), t.classList.add("loaded")
        })
    }

    function ra() {
        t("img.nectar-lazy:not(.loaded):not(.image-gallery-portfolio-item)").each(function() {
            if (t(this).hasClass("attachment-shop_thumbnail") || t(this).hasClass("attachment-woocommerce_thumbnail") || t(this).parents(".nectar-post-grid-item").length > 0) return !0;
            t(this).css({
                height: "",
                width: ""
            });
            var e = parseInt(t(this).attr("height")),
                a = parseInt(t(this).attr("width")),
                n = t(this).parents(".nectar_cascading_images").length > 0 ? t(this).parents(".bg-layer").width() : t(this).width();
            t(this).parents(".img-with-aniamtion-wrap.custom-size").length > 0 && n > a && (n = a), t(this).parents('.img-with-aniamtion-wrap[data-shadow*="depth"]').length > 0 && (n = t(this).parents(".img-with-aniamtion-wrap").width()), t(this).parents(".nectar-post-grid-item-bg-wrap-inner").length > 0 && !t(this).hasClass("nectar-post-grid-item__overlaid-img") && (n = t(this).parents(".nectar-post-grid-item-bg-wrap-inner").width());
            var i = Rt(a, e, n, 2e3);
            t(this).css({
                height: i.height + "px",
                width: i.width + "px"
            })
        })
    }

    function oa() {
        q = [], Y = [], pt.usingMobileBrowser || (t('.nectar-post-grid[data-indicator="yes"]').each(function(e) {
            q[e] = new yt(t(this), "view-indicator")
        }), t('.nectar-post-grid-wrap[data-style="mouse_follow_image"] .nectar-post-grid').each(function(e) {
            Y[e] = new yt(t(this), "post-grid-images")
        }), t('.nectar-category-grid[data-style="mouse_follow_image"]').each(function(e) {
            Y[e] = new yt(t(this), "post-grid-images")
        }))
    }

    function la() {
        nt = [], oa(), t(".nectar-post-grid-wrap").each(function(e) {
            nt[e] = new da(t(this))
        })
    }

    function da(t) {
        this.el = t, this.currentPage = 0, this.activeFilter = 1, this.activeCatTotal = 0, this.settingsData = JSON.parse(this.el.attr("data-el-settings")), this.queryData = JSON.parse(this.el.attr("data-query")), this.sortable = this.el.find(".nectar-post-grid-filters").attr("data-sortable"), this.gridStyle = this.el.attr("data-style"), this.initialMarkup(), this.clickEvents(), this.deepLinking(), this.lightboxGroups(), this.externalProjectLinks()
    }

    function ca() {
        var e = 1 == lt ? "200%" : "75%";
        t(ot + ".nectar-post-grid-wrap").each(function() {
            if (!v || !t(this).hasClass("delay-js-loaded")) var a = t(this),
                n = new Waypoint({
                    element: a[0],
                    handler: function() {
                        if (a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("completed")) n.destroy();
                        else {
                            var e = a.find(".nectar-post-grid[data-animation-stagger]") ? parseInt(a.find(".nectar-post-grid").attr("data-animation-stagger")) : 90,
                                i = a.find(".nectar-post-grid[data-animation]") ? a.find(".nectar-post-grid").attr("data-animation") : "none";
                            a.attr("data-style");
                            a.find(".nectar-post-grid__reveal-image__inner").length > 0 && a.find(".nectar-post-grid__reveal-image__inner").css({
                                opacity: 0
                            }), a.find(".nectar-post-grid-filters").addClass("animated-in"), a.find(".nectar-post-grid-item").each(function(a) {
                                var n = t(this);
                                setTimeout(function() {
                                    n.addClass("animated-in"), "zoom-out-reveal" === i && Sn(n, function() {
                                        An(n)
                                    })
                                }, a * e)
                            }), setTimeout(function() {
                                a.addClass("finished-animating")
                            }, 950), n.destroy()
                        }
                    },
                    offset: e
                })
        })
    }

    function ha() {
        var e = 1 == lt ? "500%" : "bottom-in-view";
        t(ot + ".nectar-animated-title").each(function() {
            var a = t(this),
                n = new Waypoint({
                    element: a[0],
                    handler: function() {
                        a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("completed") ? n.destroy() : (a.addClass("completed"), n.destroy())
                    },
                    offset: e
                })
        })
    }

    function ua() {
        var e = 1 == lt ? "500%" : "bottom-in-view";
        pt.usingMobileBrowser && "bottom-in-view" == e && (e = "85%"), t(ot + ".nectar-highlighted-text").each(function(a) {
            var n = 0;
            if (t(this).find("i").each(function() {
                    t(this).replaceWith(function() {
                        return t("<em />").append(t(this).html())
                    })
                }), t(this).is("[data-id]")) {
                var i = t(this);
                t(this).find("em").each(function(e) {
                    e > 0 ? t(this).attr("id", i.attr("data-id") + "-" + e) : t(this).attr("id", i.attr("data-id"))
                })
            }
            if (t(this).is("[data-animation-delay]") && t(this).attr("data-animation-delay").length > 0 && "false" != t(this).attr("data-animation") && (n = t(this).attr("data-animation-delay")), t(this).find("em:has(a)").addClass("has-link"), S && t(this).find("em").addClass("animated"), t(this).is('[data-style="none"]')) return !0;
            i = t(this);
            var s = new Waypoint({
                element: i[0],
                handler: function() {
                    i.parents(".wpb_tab").length > 0 && "hidden" == i.parents(".wpb_tab").css("visibility") || i.hasClass("animated") ? s.destroy() : (setTimeout(function() {
                        i.find("em").each(function(e) {
                            var a = t(this);
                            setTimeout(function() {
                                a.addClass("animated")
                            }, 300 * e)
                        })
                    }, n), s.destroy())
                },
                offset: e
            })
        })
    }

    function pa() {
        var e = 1 == lt ? "500%" : "75%";
        t(ot + '.nectar-woo-flickity[data-animation*="fade-in"]').each(function() {
            var a = t(this),
                n = new Waypoint({
                    element: a[0],
                    handler: function() {
                        a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("animated-in") ? n.destroy() : (a.addClass("animated-in"), a.find(".flickity-cell").each(function(e) {
                            var a = t(this);
                            setTimeout(function() {
                                a.find("> .product").css({
                                    transform: "translate3d(0,0,0)",
                                    opacity: "1"
                                })
                            }, 100 * e)
                        }), n.destroy())
                    },
                    offset: e
                })
        })
    }

    function fa() {
        var e;
        t('.pricing-table[data-style="default"]').each(function() {
            e = 0, t(this).find("> div ul").each(function() {
                t(this).height() > e && (e = t(this).height())
            }), 0 == e && (e = "auto"), t(this).find("> div ul").css("height", e)
        })
    }

    function ga() {
        G = [], "undefined" != typeof NectarTestimonialSlider ? t(".testimonial_slider").each(function(e) {
            var a = t(this),
                n = t(this).is("[data-style]") ? t(this).attr("data-style") : "none";
            G[e] = new NectarTestimonialSlider(a, n, $a, qe), t(this).is('.disable-height-animation:not([data-style*="multiple_visible"])') && (G[e].testimonialSliderHeight(), setTimeout(G[e].testimonialSliderHeight.bind(G[e]), 700)), t(this).is('.testimonial_slider[data-style="multiple_visible_minimal"]') && G[e].testimonialSliderHeightMinimalMult()
        }) : Nt("#nectar-testimonial-sliders-js", 0, ga)
    }

    function ma() {
        s.off("smartresize.nectarTestimonials"), s.off("resize.nectarTestimonialsMin"), G.length > 0 && s.on("smartresize.nectarTestimonials", va), t('.testimonial_slider[data-style="multiple_visible_minimal"]').length > 0 && s.on("resize.nectarTestimonialsMin", ba)
    }

    function va() {
        for (var t = 0; t < G.length; t++) G[t].testimonialSliderHeight(), G[t].testimonialHeightResize()
    }

    function ba() {
        for (var t = 0; t < G.length; t++) G[t].testimonialSliderHeightMinimalMult()
    }

    function wa(e) {
        return e.parents('.wpb_column[data-bg-color*="#"]').length > 0 && e.parents('.wpb_column[data-bg-opacity="1"]').length > 0 ? e.parents(".wpb_column").attr("data-bg-color") : e.parents(".wpb_row").length > 0 && e.parents(".wpb_row").find(".row-bg.using-bg-color").length > 0 || e.parents(".wpb_row").length > 0 && e.parents(".wpb_row").find(".row-bg.using-bg-color-excluded").length > 0 ? e.parents(".wpb_row").find(".row-bg").css("background-color") : t("#nectar_fullscreen_rows").length > 0 ? t("#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap").css("background-color") : t(".container-wrap").css("background-color")
    }

    function ya() {
        var e = "";
        t('.nectar-icon-list[data-icon-style="border"], .nectar_icon_wrap[data-style="border-animation"][data-color*="extra-color-gradient-"]').each(function(a) {
            var n = wa(t(this));
            t(this).hasClass("nectar-icon-list") ? t(this).find(".list-icon-holder").css("background-color", n) : (t(this).removeClass(function(t, e) {
                return (e.match(/(^|\s)instance-\S+/g) || []).join(" ")
            }), t(this).addClass("instance-" + a), e += ".nectar_icon_wrap.instance-" + a + " .nectar_icon:before { background-color: " + n + "!important; }")
        }), t('body.material .nectar-button.see-through[class*="m-extra-color-gradient"]').each(function(a) {
            var n = wa(t(this));
            t(this).removeClass(function(t, e) {
                return (e.match(/(^|\s)instance-\S+/g) || []).join(" ")
            }), t(this).addClass("instance-" + a), e += ".nectar-button.see-through.instance-" + a + ":after { background-color: " + n + "!important; }"
        }), ie(e, "nectaricon-color-match")
    }

    function _a() {
        t(".col.span_3, .vc_span3, .vc_col-sm-3").each(function() {
            if (!t(this).is('[data-t-w-inherits="small_desktop"]')) {
                var e = t(this),
                    a = t(this).next("div");
                (a.hasClass("span_3") && !e.hasClass("one-fourths") || a.hasClass("vc_span3") && !e.hasClass("one-fourths") || a.hasClass("vc_col-sm-3") && !e.hasClass("one-fourths")) && (e.addClass("one-fourths clear-both"), a.addClass("one-fourths right-edge"))
            }
        }), t(".span_12 .col.span_6").each(function() {
            t(this).next("div").hasClass("span_6") && 0 == t.trim(t(this).next("div").html()).length && t(this).addClass("empty-second")
        })
    }

    function Ca() {
        t("iframe").each(function() {
            if (void 0 !== t(this).attr("src") && !t(this).hasClass("skip-nectar-video-size") && !t(this).hasClass("iframe-embed") && !t(this).hasClass("elementor-video-iframe") && 0 == t(this).parents(".gform_fields").length && 0 == t(this).parents(".ult_modal").length && 0 == t(this).parents(".ls-slide").length && 0 == t(this).parents(".woo-variation-product-gallery").length && 0 == t(this).parents(".esg-entry-media").length && 0 == t(this).parents(".wpb_video_widget.wpb_content_element").length) {
                if (t(this).parents(".woocommerce-product-gallery").length > 0 && (!t(this).is('[width="100%"]') || !t(this).is('[height="100%"]'))) return !0;
                var e = t(this).attr("src").toLowerCase();
                (e.indexOf("youtube") >= 0 || e.indexOf("vimeo") >= 0 || e.indexOf("twitch.tv") >= 0 || e.indexOf("kickstarter") >= 0 || e.indexOf("embed-ssl.ted") >= 0 || e.indexOf("dailymotion") >= 0) && (t(this).addClass("iframe-embed"), t(this).width() < t(this).parent().width() ? t(this).attr("data-aspectRatio", t(this).height() / t(this).width()).removeAttr("height").removeAttr("width") : t(this).attr("data-aspectRatio", "0.56").removeAttr("height").removeAttr("width"), t(this).parents(".post-area.masonry.classic").length > 0 && t(this).attr("data-aspectRatio", "0.56").removeAttr("height").removeAttr("width"))
            }
        })
    }

    function xa() {
        t("iframe[data-aspectRatio]").each(function() {
            var e = t(this),
                a = e.parent().width();
            t(this).parents(".swiper-slide").length > 0 ? t(this).is(":visible") && e.width(a).height(a * e.attr("data-aspectRatio")) : e.width(a).height(a * e.attr("data-aspectRatio"))
        })
    }

    function ka() {
        t(".video-wrap iframe").unwrap(), t("#sidebar iframe[src]").unwrap(), t("audio").attr("width", "100%").attr("height", "100%").css("visibility", "visible"), t("video").css("visibility", "visible"), t(".wp-video").each(function() {
            t(this).find("video").get(0).addEventListener("loadeddata", function() {
                s.trigger("resize")
            }, !1)
        }), t(".main-content iframe[src]").each(function() {
            t(this).css({
                opacity: "1",
                visibility: "visible"
            })
        })
    }

    function $a() {
        var e = 1200;
        t(".nectar-video-wrap").each(function() {
            if (v && t(this).parents(".top-level").length > 0 || v && t(this).parents(".nectar_hook_404_content").length > 0) return !0;
            var a, n;
            if (0 != t(this).find("video").length) {
                if (t(this).parents("#page-header-bg").length > 0) {
                    if (t(".container-wrap.auto-height").length > 0) return !1;
                    a = t(this).parents("#page-header-bg").outerHeight(), n = t(this).parents("#page-header-bg").outerWidth()
                } else if (t(this).hasClass("column-video"))
                    if (r.is('[data-flex-cols="true"]')) {
                        var i = t(this).parents(".vc_column-inner");
                        a = i.outerHeight(), n = i.outerWidth()
                    } else a = t(this).parents(".wpb_column").outerHeight(), n = t(this).parents(".wpb_column").outerWidth();
                else {
                    var s = t(this).parents(".wpb_row");
                    a = s.outerHeight(), n = t(this).parents(".full-width-section").length > 0 ? pt.winW : s.outerWidth()
                }
                t(this).width(n), t(this).parents("#page-header-bg").length > 0 && t(this).height(a);
                var o = n / 1280,
                    l = (a - a) / 720,
                    d = o > l ? o : l;
                1280 * d < (e = 1280 / 720 * (a + 40)) && (d = e / 1280), t(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(1280 * d + 0)), t(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(720 * d + 0)), t(this).scrollLeft((t(this).find("video").width() - n) / 2), t(this).scrollTop((t(this).find("video").height() - a) / 2), t(this).find(".mejs-overlay, .mejs-poster").scrollTop((t(this).find("video").height() - a) / 2), "center bottom" == t(this).attr("data-bg-alignment") || "bottom" == t(this).attr("data-bg-alignment") ? t(this).scrollTop(t(this).find("video").height() - (a + 6)) : "center top" != t(this).attr("data-bg-alignment") && "top" != t(this).attr("data-bg-alignment") || t(this).scrollTop(0), t(this).addClass("position-loaded")
            }
        })
    }

    function Ta() {
        function a(t) {
            var e, a, n, i, s = t.innerWidth(),
                r = t.innerHeight();
            16 / 9 > s / r ? (e = r * (16 / 9), a = r, n = -Math.round((e - s) / 2) + "px", i = -Math.round((a - r) / 2) + "px", e += "px", a += "px") : (e = s, a = s * (9 / 16), i = -Math.round((a - r) / 2) + "px", n = -Math.round((e - s) / 2) + "px", e += "px", a += "px"), t.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: n,
                marginTop: i,
                width: e,
                height: a
            })
        }
        0 == t(".nectar-video-wrap").length && 0 == t(".nectar-youtube-bg").length || (setTimeout(function() {
            $a(), s.on("resize", $a), e.addEventListener("orientationchange", function() {
                this.setTimeout(function() {
                    $a()
                }, 100)
            }), t(".video-color-overlay").each(function() {
                t(this).css("background-color", t(this).attr("data-color"))
            }), t(".nectar-video-wrap").each(function() {
                if (0 != t(this).find("video").length) {
                    var e = t(this).parents("#page-header-bg").length > 0,
                        a = t(this);
                    if (0 === t(this).find("video.nectar-lazy-video").length) var n = setInterval(function() {
                        a.find("video").get(0).readyState > 3 && (pt.usingMobileBrowser || (a.transition({
                            opacity: "1"
                        }, 400), a.find("video").transition({
                            opacity: "1"
                        }, 400), a.parent().find(".video-color-overlay").transition({
                            opacity: "0.7"
                        }, 400), 1 == e && Ga()), p.addClass("loaded"), setTimeout(function() {
                            p.addClass("hidden")
                        }, 1e3), clearInterval(n))
                    }, 60);
                    pt.usingMobileBrowser && (a.parents(".full-width-section").length > 0 && 0 == a.parents("#nectar_fullscreen_rows").length && !a.hasClass("column-video") ? a.css("left", "50%") : a.css("left", "0px"), 1 == e && Ga(), a.find("video")[0].onplay = function() {
                        a.transition({
                            opacity: "1"
                        }, 400), a.find("video").transition({
                            opacity: "1"
                        }, 400), a.parent().find(".video-color-overlay").transition({
                            opacity: "0.7"
                        }, 400)
                    })
                }
            })
        }, 300), pt.usingMobileBrowser && t(".nectar-video-wrap").each(function() {
            t(this).find("video").is("[muted]") || (t(this).parent().find(".mobile-video-image").show(), t(this).remove())
        }), t('.wpb_row:has(".nectar-video-wrap"):not(.fp-section)').each(function(e) {
            t(this).css("z-index", 100 + e)
        }), t(".vc_row").each(function() {
            var t, n = jQuery(this);
            n.find(".nectar-youtube-bg").length > 0 ? (t = function(t) {
                if (void 0 === t) return !1;
                var e = t.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                return null !== e && e[1]
            }(n.find(".nectar-youtube-bg span").text())) && (n.find(".vc_video-bg").remove(), function t(n, i, s) {
                if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (s = void 0 === s ? 0 : s) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                    t(n, i, s++)
                }, 100);
                var r = n.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find(".inner");
                var o;
                o = new YT.Player(r[0], {
                    width: "100%",
                    height: "100%",
                    videoId: i,
                    playerVars: {
                        playlist: i,
                        iv_load_policy: 3,
                        enablejsapi: 1,
                        disablekb: 1,
                        autoplay: 1,
                        controls: 0,
                        showinfo: 0,
                        rel: 0,
                        loop: 1
                    },
                    events: {
                        onStateChange: function(t) {
                            -1 === t.data && (o.mute(), o.playVideo())
                        },
                        onReady: function(t) {
                            o.mute(), o.playVideo(), a(n)
                        }
                    }
                }), a(n), jQuery(e).on("resize", function() {
                    a(n)
                });
                setTimeout(function() {
                    a(n)
                }, 100)
            }(n.find(".nectar-youtube-bg"), t)) : n.find(".nectar-youtube-bg").remove(), n.find(".nectar-youtube-bg span").remove(), pt.usingMobileBrowser || n.find(".nectar-video-wrap, .nectar-youtube-bg").css({
                opacity: "1",
                width: "100%",
                height: "100%"
            }), n.find(".video-color-overlay").transition({
                opacity: "0.7"
            }, 400)
        }))
    }

    function Ia() {
        if (r.hasClass("single-post") && t(".content-inner[data-has-gallery]").length > 0 && (t(".wp-block-gallery").length > 0 ? t(".content-inner").find(".wp-block-gallery").each(function(e) {
                0 !== e && t(this).css("display", "flex")
            }) : t(".content-inner").find(".gallery").each(function(e) {
                0 !== e && t(this).css("display", "block")
            })), r.hasClass("single-post") && t(".nectar-social.vertical").length > 0) {
            var e = t(".nectar-social.vertical");
            new Waypoint({
                element: t(".post-area")[0],
                handler: function(t) {
                    gt.materialOffCanvasOpen || ("down" === t ? e.addClass("visible") : e.removeClass("visible"))
                },
                offset: "70%"
            })
        }
    }

    function Ea() {
        if (t('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0 && (za(), u.length > 0)) {
            var a = u.detach();
            t(".ocm-effect-wrap-inner").append(a)
        }! function() {
            if (t("body.material").length > 0 && 0 == t('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length) {
                if (0 == t("#mobile-menu").length) {
                    var e = t("header#top ul .slide-out-widget-area-toggle:first a > span > i").clone();
                    e.addClass("hover-effect"), t("header#top ul .slide-out-widget-area-toggle a > span").append(e);
                    var a = t("header#top .slide-out-widget-area-toggle.mobile-icon a > span > i").clone();
                    a.addClass("hover-effect"), t("header#top .slide-out-widget-area-toggle.mobile-icon a > span").append(a)
                }
                t('body:not([data-slide-out-widget-area-style="slide-out-from-right"]) header#top .slide-out-widget-area-toggle a > span').append(t('<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>')), setTimeout(function() {
                    t("header#top .slide-out-widget-area-toggle a > span .close-wrap").addClass("loaded")
                }, 200)
            }
            t("body.material #boxed").length > 0 && t('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0 && t(".ocm-effect-wrap").length > 0 && t("#ajax-content-wrap > .slide-out-widget-area-toggle.slide-out-hover-icon-effect").insertAfter(".ocm-effect-wrap");
            t("body.material").length > 0 && 0 == t('body[data-slide-out-widget-area-style*="fullscreen"]').length && t(".ocm-effect-wrap").length > 0 && (t("body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close").insertAfter(".ocm-effect-wrap"), t("#slide-out-widget-area-bg").insertAfter(".ocm-effect-wrap"), o.insertAfter(".ocm-effect-wrap"))
        }(),
        function() {
            if (t('body.material[data-header-search="true"]').length > 0 || t("body.material .ocm-effect-wrap").length > 0) {
                var a, n = !1,
                    i = 0,
                    r = pt.winW,
                    o = pt.winH;
                e.addEventListener("orientationchange", function() {
                    i = 1
                }), s.on("resize", function() {
                    pt.usingMobileBrowser ? (s.width() != r && s.height != o || 1 === i) && (r = pt.winW, o = pt.winH, i = 0, n = !0) : n = !0, n && (clearTimeout(a), t('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').addClass("no-material-transition"), a = setTimeout(function() {
                        t('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').removeClass("no-material-transition")
                    }, 250), za(), n = !1)
                })
            }
        }(), s.on("resize", Ha)
    }

    function Oa() {
        var e, a = 0;
        t("#slide-out-widget-area > .widget").each(function() {
            a += t(this).height()
        }), e = o.height() - 25 - t(".bottom-meta-wrap").outerHeight(!0) - a > t("#slide-out-widget-area .off-canvas-menu-container:last-child").height() ? o.height() - 25 - t(".bottom-meta-wrap").outerHeight(!0) - a : t("#slide-out-widget-area .off-canvas-menu-container:last-child").height(), t("#slide-out-widget-area .inner").css({
            height: "auto",
            "min-height": e
        })
    }

    function za() {
        t("#slide-out-widget-area.slide-out-from-right").css({
            "padding-top": .1 * s.height(),
            "padding-bottom": .1 * s.height()
        }), Ma()
    }

    function Ha() {
        t(".ocm-effect-wrap.material-ocm-open").length > 0 && (t(".ocm-effect-wrap").css({
            height: s.height()
        }), t(".ocm-effect-wrap-inner").css({
            "padding-top": pt.adminBarHeight
        }))
    }

    function Sa() {
        t('#slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children').each(function() {
            t(this).find(".ocm-dropdown-arrow").css({
                top: t(this).find("a").height() / 2
            })
        }), t("#slide-out-widget-area.fullscreen-split .off-canvas-menu-container li.menu-item-has-children").each(function() {
            t(this).find(".ocm-dropdown-arrow").css({
                top: t(this).find("a").height() / 2
            })
        })
    }

    function Aa() {
        e.nectarOptions && e.nectarOptions.ocm_remove_ext_menu_items && "remove_images" == e.nectarOptions.ocm_remove_ext_menu_items && !1 === gt.ocmInit && (t('.off-canvas-menu-container .title[class*="inherit-h"], #mobile-menu .title[class*="inherit-h"]').removeClass(function(t, e) {
            return (e.match(/(^|\s)inherit-h\S+/g) || []).join(" ")
        }), t(".off-canvas-menu-container .nectar-ext-menu-item .image-layer-outer, #mobile-menu .nectar-ext-menu-item .image-layer-outer").remove(), t(".off-canvas-menu-container .nectar-ext-menu-item .menu-item-desc").removeClass("menu-item-desc").addClass("item_desc"), t(".off-canvas-menu-container .nectar-ext-menu-item .inner-content > .title").each(function() {
            0 == t(this).find(".menu-title-text").length && t(this).removeClass("title").addClass("menu-title-text")
        }), t(".off-canvas-menu-container .item_desc").each(function() {
            "none" !== t(this).css("display") && t(this).parents(".menu-item").addClass("nectar-extra-menu-item-spacing")
        }), Sa(), gt.ocmInit = !0)
    }

    function Ma() {
        pt.winW < 1e3 || t("body > #boxed").length > 0 || t(".ocm-effect-wrap-inner > #boxed").length > 0 ? (t("#slide-out-widget-area.fullscreen .off-canvas-social-links, #slide-out-widget-area.fullscreen-alt .off-canvas-social-links").appendTo("#slide-out-widget-area .inner"), t("#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text").appendTo("#slide-out-widget-area .inner")) : (t("#slide-out-widget-area.fullscreen .off-canvas-social-links,#slide-out-widget-area.fullscreen-alt .off-canvas-social-links").appendTo("#slide-out-widget-area .inner-wrap"), t("#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text").appendTo("#slide-out-widget-area .inner-wrap")), t(".slide-out-from-right.open .off-canvas-menu-container.mobile-only").length > 0 && 0 == t("body.mobile").length && t("#slide-out-widget-area .slide_out_area_close").trigger("click"), Sa()
    }

    function Wa() {
        if (Oa(), pt.usingMobileBrowser && t("#slide-out-widget-area.open").length > 0 || t(".slide-out-from-right-hover.ios-ocm-style").length > 0 && t("#slide-out-widget-area.open").length > 0) return Fa(), !1;
        (pt.usingMobileBrowser || t(".slide-out-from-right-hover.ios-ocm-style").length > 0) && (t(".slide-out-widget-area-toggle a").attr("aria-expanded", "true"), l.css({
            height: "100%",
            width: "100%"
        })), o.css({
            transform: "translate3d(0,0,0)"
        }).addClass("open"), Aa(), t(".slide-out-from-right-hover.ios-ocm-style").length > 0 && setTimeout(function() {
            t("#slide-out-widget-area .slide_out_area_close").addClass("material-ocm-open"), t("#slide-out-widget-area .slide_out_area_close").removeClass("hide_until_rendered")
        }, 350);
        var a = Ut();
        pt.winW < 1e3 && (a = !0);
        var n = e.nectarOptions && e.nectarOptions.mobile_header_format && "centered-menu" === e.nectarOptions.mobile_header_format && a ? "left" : "right";
        if (t("header#top .container .span_9 > .slide-out-widget-area-toggle").length > 0) {
            var i, c = t(".slide-out-hover-icon-effect"),
                h = pt.secondaryHeaderHeight,
                u = Ut();
            if (t('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0 && (u = !1), t("body.mobile").length > 0 || u || "left" === A) c.css({
                top: t("header#top .span_9 > .slide-out-widget-area-toggle a").offset().top - pt.scrollTop
            }), "left" === n || "left" === A ? c.css({
                left: parseInt(t("#header-outer header > .container").css("padding-right")) + 1,
                right: ""
            }) : c.css({
                right: parseInt(t("#header-outer header > .container").css("padding-right")) + 1,
                left: ""
            });
            else if (dt) {
                var p = t('#header-outer[data-has-menu="false"]').length > 0 ? 2 : 1;
                c.css({
                    top: pt.adminBarHeight + h + parseInt(t("header#top nav >ul .slide-out-widget-area-toggle a").css("padding-top")),
                    right: 29 + p
                })
            } else t('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0 ? (i = "flex" == t("header#top .span_9 > .slide-out-widget-area-toggle").css("display") ? t("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon a").offset() : t("header#top .span_3 .right-side .slide-out-widget-area-toggle > div").offset(), "flex" == t("#top .span_3 .slide-out-widget-area-toggle.mobile-icon").css("display") && (i = t("#top .span_3 .slide-out-widget-area-toggle.mobile-icon a").offset()), c.css({
                top: parseInt(i.top) - pt.scrollTop,
                right: parseInt(t("#header-outer header >.container").css("padding-right")) + 2,
                left: ""
            })) : (i = r.hasClass("ascend") ? "block" == t("header#top .span_9 > .slide-out-widget-area-toggle").css("display") ? t("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon").position() : t("header#top nav .buttons .slide-out-widget-area-toggle > div a > span:not(.screen-reader-text)").position() : "block" == t("header#top .span_9 > .slide-out-widget-area-toggle").css("display") ? t("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon").position() : t("header#top nav .buttons .slide-out-widget-area-toggle > div").position(), t("#header-secondary-outer.hide-up").length > 0 && (h = 0), c.css({
                top: pt.adminBarHeight + h + parseInt(i.top),
                right: parseInt(t("#header-outer header >.container").css("padding-right")) + 2,
                left: ""
            }))
        }
        if (t(".slide-out-hover-icon-effect .lines-button").removeClass("no-delay").addClass("unhidden-line"), 0 == t('#header-outer[data-permanent-transparent="1"]').length && 0 == t("#nectar_fullscreen_rows").length && !pt.usingFrontEndEditor && pt.winW > 1e3 && (0 == pt.scrollTop && t("#header-outer.transparent").length > 0 || 0 == t("body.mobile").length && dt && (d.attr("data-transparent", "true").addClass("no-bg-color").addClass("slide-out-hover"), t("#header-outer header, #header-outer > .cart-outer").addClass("all-hidden")), 0 == t('#header-outer[data-remove-fixed="1"]').length && 0 == t("body.mobile").length && dt && (1 == k ? (s.off("scroll", mn), s.off("scroll", gn)) : (s.off("scroll", vn), s.off("scroll", bn)))), pt.usingMobileBrowser) return !1;
        s.on("mousemove.rightOffsetCheck", Ba)
    }

    function Ba(a) {
        var n = s.width(),
            i = o.outerWidth(),
            r = Ut();
        pt.winW < 1e3 && (r = !0);
        ("left" !== (e.nectarOptions && e.nectarOptions.mobile_header_format && "centered-menu" === e.nectarOptions.mobile_header_format && r ? "left" : "right") && "left" !== A ? a.clientX < n - parseInt(i) - b : a.clientX > parseInt(i) + b) && o.hasClass("mouse-accessed") && (o.removeClass("mouse-accessed"), s.off("mousemove.rightOffsetCheck", Ba), o.css({
            transform: ""
        }).removeClass("open"), d.removeClass("style-slide-out-from-right"), t(".slide-out-hover-icon-effect .lines-button").removeClass("unhidden-line").addClass("no-delay"), 0 == t('#header-outer[data-permanent-transparent="1"]').length && (0 == t('#header-outer[data-remove-fixed="1"]').length && 0 == t("body.mobile").length && dt && 0 == t("body.mobile").length && (d.removeClass("no-bg-color"), t("#header-outer header, #header-outer > .cart-outer").removeClass("all-hidden")), 0 == t('#header-outer[data-remove-fixed="1"]').length && 0 == t("body.mobile").length && dt && (1 == k ? (s.off("scroll.headerResizeEffect"), 0 == pt.scrollTop ? (s.on("scroll.headerResizeEffect", gn), t('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && f.length > 0 && 1 == dt && t("#header-outer.pseudo-data-transparent").length > 0 && t('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
            padding: "0"
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        })) : s.on("scroll.headerResizeEffect", mn)) : (s.off("scroll.headerResizeEffectOpaque"), s.on("scroll.headerResizeEffectOpaque", vn)))))
    }

    function Fa() {
        (pt.usingMobileBrowser || t(".slide-out-from-right-hover.ios-ocm-style").length > 0) && (t(".slide-out-widget-area-toggle a").attr("aria-expanded", "false"), l.css({
            height: "1px",
            width: "1px"
        })), t(".slide-out-from-right-hover.ios-ocm-style").length > 0 && t("#slide-out-widget-area .slide_out_area_close").removeClass("material-ocm-open"), o.css({
            transform: ""
        }).removeClass("open"), d.removeClass("style-slide-out-from-right"), t(".slide-out-hover-icon-effect .lines-button").removeClass("unhidden-line").addClass("no-delay"), 0 == t('#header-outer[data-permanent-transparent="1"]').length && (d.removeClass("no-bg-color"), t("#header-outer header").removeClass("all-hidden")), 0 == t('#header-outer[data-remove-fixed="1"]').length && 0 == t("body.mobile").length && dt && (1 == k ? (s.off("scroll.headerResizeEffect"), 0 == pt.scrollTop ? (s.on("scroll.headerResizeEffect", gn), t('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && f.length > 0 && 1 == dt && t("#header-outer.pseudo-data-transparent").length > 0 && t('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
            padding: "0"
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        })) : s.on("scroll.headerResizeEffect", mn)) : (s.off("scroll.headerResizeEffectOpaque"), s.on("scroll.headerResizeEffectOpaque", vn)))
    }

    function La() {
        t(".slide-out-from-right-hover.open").length > 0 && (t(".slide-out-widget-area-toggle:not(.std-menu) a").first().addClass("non-human-allowed").trigger("click"), setTimeout(function() {
            t(".slide-out-widget-area-toggle:not(.std-menu) a").removeClass("non-human-allowed")
        }, 100))
    }

    function qa(e) {
        t("#mobile-menu").show(), t("header#top").find("." + e + ":not(.std-menu) .lines-button").addClass("close"), t("#header-outer").addClass("simple-ocm-open"), t("body.material").length > 0 && t("header#top").find("." + e + " a").addClass("menu-push-out"), setTimeout(function() {
            t("header#top").find("." + e + " > div > a").removeClass("animating")
        }, 100)
    }

    function ja(e) {
        t("#mobile-menu").hide(), t("body").find("." + e + ":not(.std-menu) .lines-button").removeClass("close"), t("#header-outer").removeClass("simple-ocm-open"), setTimeout(function() {
            t("body.material").length > 0 && t("header#top ." + e + " a").removeClass("menu-push-out"), t("body").find("." + e + " a").removeClass("animating")
        }, 350)
    }

    function Pa() {
        function a() {
            if (gt.ocmAnimating || "true" == ht.animating || t(".slide-out-from-right-hover").length > 0) return !1;
            var a = 700;
            return gt.ocmOpen = !0, Aa(), d.removeClass("no-transition"), t(this).hasClass("simple-mobile-menu") ? (qa("simple-mobile-menu"), t(this).find("a").addClass("open"), !1) : (o.hasClass("slide-out-from-right") ? function() {
                var a = f.length > 0 && 0 == t("body.mobile").length ? f.height() : 0,
                    n = Ut();
                pt.winW < 1e3 && (n = !0);
                var i = e.nectarOptions && e.nectarOptions.mobile_header_format && "centered-menu" === e.nectarOptions.mobile_header_format && n ? "left" : "right";
                if (0 == t("body.material").length) {
                    if (t("#slide-out-widget-area .inner").css({
                            height: "auto",
                            "min-height": o.height() - 25 - t(".bottom-meta-wrap").height()
                        }), t('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"] .inner > div:first-of-type > .menu > li:first-child').length > 0 && t("#slide-out-widget-area .inner > div:first-of-type > .menu > li:first-child").hasClass("menu-item-has-children") && t("#slide-out-widget-area .inner > div:first-of-type").css({
                            "margin-top": "50px"
                        }), 0 == t("#boxed").length) {
                        t(".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image, #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title").stop(!0).transition({
                            x: "left" === i || "left" === A ? "300px" : "-300px"
                        }, 700, "easeInOutCubic");
                        var h = Ut();
                        0 == t('#header-outer[data-format="centered-logo-between-menu"]').length || h ? 0 == t('#header-outer[data-transparency-option="1"]').length || t('#header-outer[data-transparency-option="1"]').length > 0 && 0 == t('#header-outer[data-full-width="true"]').length || t("body.mobile").length > 0 ? d.stop(!0).css("transform", "translateY(0)").transition({
                            x: "left" === i || "left" === A ? 300 + a + "px" : "-" + (300 + a) + "px"
                        }, 700, "easeInOutCubic") : d.stop(!0).css("transform", "translateY(0)").transition({
                            x: "left" === i || "left" === A ? 300 + a + "px" : "-" + (300 + a) + "px",
                            "background-color": "transparent",
                            "border-bottom": "1px solid rgba(255,255,255,0.22)"
                        }, 700, "easeInOutCubic") : t('#header-outer header#top nav > ul.buttons, body:not(.material) #header-outer:not([data-format="centered-logo-between-menu"]) .cart-outer .cart-menu-wrap').transition({
                            x: "left" === i || "left" === A ? "300px" : "-300px"
                        }, 700, "easeInOutCubic")
                    }
                    if (o.stop(!0).transition({
                            x: "left" === i || "left" === A ? a + "px" : "-" + a + "px"
                        }, 700, "easeInOutCubic").addClass("open"), 0 == t("#boxed").length && t('#header-outer[data-full-width="true"]').length > 0 && !r.hasClass("mobile") && (d.addClass("highzI"), t("#ascrail2000").addClass("z-index-adj"), 0 == t('#header-outer[data-format="centered-logo-between-menu"]').length && 0 == b && ("left" === A || t("header#top #logo").stop(!0).transition({
                            x: 300 + a + "px"
                        }, 700, "easeInOutCubic")), t("header#top .slide-out-widget-area-toggle .lines-button:not(.legacy-double)").addClass("close"), t("body #header-outer nav > ul > li > a").css({
                            "margin-bottom": "0"
                        })), d.addClass("style-slide-out-from-right"), l.css({
                            height: "100%",
                            width: "100%"
                        }).stop(!0).transition({
                            opacity: 1
                        }, 700, "easeInOutCubic", function() {
                            t(".slide-out-widget-area-toggle:not(.std-menu) > div > a").removeClass("animating")
                        }), 0 == t('#header-outer[data-format="centered-logo-between-menu"]').length) {
                        var u = t("#logo img:visible").length > 0 ? t("#logo img:visible").width() : t("#logo").width();
                        t("header#top nav > .sf-menu").offset().left - u - 300 < 20 && d.addClass("hidden-menu")
                    } else d.addClass("hidden-menu-items");
                    0 == t('#header-outer[data-remove-fixed="1"]').length && pt.winW > 1e3 && (1 == dt && 1 == k && "true" == d.attr("data-transparent-header") ? (d.stop(!0).transition({
                        y: "0"
                    }, 0).addClass("transparent").css("transition", "transform"), s.off("scroll", mn), s.off("scroll", gn)) : 1 == dt && "true" == d.attr("data-transparent-header") && (d.addClass("transparent"), s.off("scroll", vn), s.off("scroll", bn)))
                } else t("body.material").length > 0 && (p.length > 0 && t(".ocm-effect-wrap #ajax-loading-screen").length > 0 && p.insertBefore(".ocm-effect-wrap"), pt.scrollTop > 40 && t('body[data-hhun="1"] #header-secondary-outer').addClass("hidden"), setTimeout(function() {
                    t(".slide-out-widget-area-toggle:not(.std-menu) > div > a").removeClass("animating")
                }, 300), t("#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle").addClass("material-open"), t('body:not(.mobile) #header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && "none" != t('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css("display") && (t("#header-outer:not(.fixed-menu)").css("top", pt.adminBarHeight - pt.scrollTop + "px"), c.length > 0 && t("#header-outer.fixed-menu").length > 0 && c.css("visibility", "hidden")), t("#ajax-content-wrap").css({
                    position: "relative",
                    top: "-" + pt.scrollTop + "px"
                }), t(".ocm-effect-wrap-inner").css({
                    "padding-top": pt.adminBarHeight
                }), t("#fp-nav").addClass("material-ocm-open"), gt.materialOffCanvasOpen = !0, r.addClass("material-ocm-open"), r.addClass("nectar-no-flex-height"), t(".ocm-effect-wrap").css({
                    height: pt.winH
                }), setTimeout(function() {
                    t(".ocm-effect-wrap").addClass("material-ocm-open")
                }, 40), t("body > .slide_out_area_close").addClass("follow-body"), t('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass("effect-shown"), t('body[data-hhun="1"]:not(.no-scroll):not(.mobile) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
                    transition: "none",
                    transform: "translateY(" + pt.adminBarHeight + "px)"
                }), setTimeout(function() {
                    t("body > .slide_out_area_close").addClass("material-ocm-open"), t("body > .slide_out_area_close").removeClass("hide_until_rendered")
                }, 350));
                t(e).trigger("nectar-material-ocm-open")
            }() : o.hasClass("fullscreen") ? function() {
                t("body.material").length > 0 && t("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out");
                var e = 0,
                    a = 0;
                pt.scrollTop + s.height() > t(".blurred-wrap").height() && 0 == t("#nectar_fullscreen_rows").length && (t("body,html").stop().animate({
                    scrollTop: t(".blurred-wrap").height() - s.height()
                }, 600, "easeInOutCubic"), e = 550, a = 200), t("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").addClass("close"), setTimeout(function() {
                    t(".blurred-wrap").addClass("blurred")
                }, e), t("#slide-out-widget-area.fullscreen").show().addClass("open"), 0 == t(".nectar-social.fixed").length && Qn(), t(".container-wrap").addClass("no-shadow"), d.stop(!0).css("transform", "translateY(0)"), setTimeout(function() {
                    t(".off-canvas-menu-container .menu > li").each(function(e) {
                        t(this).delay(50 * e).transition({
                            y: 0,
                            opacity: 1
                        }, 800, "easeOutExpo")
                    }), t("#slide-out-widget-area.fullscreen .widget").each(function(e) {
                        t(this).delay(100 * e).transition({
                            y: 0,
                            opacity: 1
                        }, 800, "easeOutExpo")
                    })
                }, 370 + a), setTimeout(function() {
                    t("#slide-out-widget-area .off-canvas-social-links").addClass("line-shown"), t("#slide-out-widget-area .off-canvas-social-links li").each(function(e) {
                        t(this).delay(50 * e).transition({
                            scale: 1
                        }, 400, "easeOutCubic")
                    }), t("#slide-out-widget-area .bottom-text").transition({
                        opacity: .7
                    }, 400, "easeOutCubic")
                }, 750 + a), setTimeout(function() {
                    var e = t("body.mobile").length > 0 ? "easeOutCubic" : "easeInOutQuint";
                    l.css({
                        height: "100%",
                        width: "100%"
                    }).show().stop(!0).transition({
                        y: "0%"
                    }, 920, e, function() {
                        t(".slide-out-widget-area-toggle > div > a").removeClass("animating")
                    })
                }, 50 + a), Ma(), t('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && t(".container-wrap").hasClass("no-scroll") && t("#ajax-content-wrap").addClass("at-content");
                var n = d.offset().top - pt.scrollTop + pt.secondaryHeaderHeight;
                t("#slide-out-widget-area.fullscreen > .inner-wrap").css("padding-top", d.outerHeight() + n)
            }() : o.hasClass("fullscreen-alt") || o.hasClass("fullscreen-split") ? function() {
                var e = ".fullscreen-alt";
                o.hasClass("fullscreen-split") && (e = ".fullscreen-split"), t("body.material").length > 0 && t("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out"), t("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").addClass("close"), ".fullscreen-alt" === e ? t("#slide-out-widget-area" + e).show().addClass("open") : t("#slide-out-widget-area" + e).addClass("open").removeClass("hidden"), l.addClass("open").removeClass("hidden"), t('body > div[class*="body-border"]').css("z-index", "9995"), ".fullscreen-alt" === e && t(".off-canvas-menu-container .menu").transition({
                    y: "0px",
                    opacity: 1
                }, 0), 0 == t(".nectar-social.fixed").length && Qn(), t("#header-outer.transparent").length > 0 && f.length > 0 && (t(".admin-bar #slide-out-widget-area-bg" + e).css({
                    "padding-top": f.outerHeight(!0) + 32 + "px"
                }), t("body:not(.admin-bar) #slide-out-widget-area-bg" + e).css({
                    "padding-top": f.outerHeight(!0) + "px"
                })), d.stop(!0).css("transform", "translateY(0)"), s.width() > 1e3 && 0 == t('#header-outer[data-format="centered-menu-bottom-bar"].fixed-menu').length && 0 == t('body.material #header-outer[data-condense="true"]').length && "true" == d.attr("data-transparent-header") && !pt.usingFrontEndEditor && (t("#logo .starting-logo").length > 0 || t("#logo.no-image").length > 0) && d.stop(!0).css("transform", "translateY(0)").addClass("transparent"), t(".off-canvas-menu-container .clip-wrap").css("transition-duration", "0s"), ".fullscreen-alt" === e && (setTimeout(function() {
                    t(".off-canvas-menu-container .menu > li").each(function(e) {
                        t(this).delay(50 * e).transition({
                            y: 0,
                            opacity: 1
                        }, 750, "easeOutCubic").addClass("no-pointer-events")
                    }), setTimeout(function() {
                        t(".off-canvas-menu-container .menu > li").removeClass("no-pointer-events"), t(".off-canvas-menu-container .clip-wrap").css("transition-duration", ".45s")
                    }, 500), t("#slide-out-widget-area.fullscreen-alt .widget").each(function(e) {
                        t(this).delay(100 * e).transition({
                            y: 0,
                            opacity: 1
                        }, 650, "easeOutCubic")
                    })
                }, 200), setTimeout(function() {
                    t("#slide-out-widget-area .off-canvas-social-links").addClass("line-shown"), t("#slide-out-widget-area .off-canvas-social-links li").css("opacity", "1").each(function(e) {
                        t(this).delay(50 * e).transition({
                            scale: 1
                        }, 400, "easeOutCubic")
                    }), t("#slide-out-widget-area .bottom-text").transition({
                        opacity: 1
                    }, 600, "easeOutCubic")
                }, 200));
                var a = .4;
                l.hasClass("solid") && (a = 1), l.hasClass("dark") && (a = .97), l.hasClass("medium") && (a = .6), l.hasClass("light") && (a = .4), l.removeClass("no-transition"), ".fullscreen-alt" === e && (l.addClass("padding-removed").css({
                    height: "100%",
                    width: "100%",
                    left: "0",
                    opacity: a
                }), Ma()), setTimeout(function() {
                    t(".slide-out-widget-area-toggle > div > a").removeClass("animating")
                }, 600), t('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && t(".container-wrap").hasClass("no-scroll") && t("#ajax-content-wrap").addClass("at-content");
                var n = d.outerHeight();
                if (t('body[data-contained-header="true"]').length > 0 && (n = 1.5 * d.outerHeight()), ".fullscreen-alt" === e) {
                    var i = d.offset().top - pt.scrollTop + pt.secondaryHeaderHeight;
                    t("#slide-out-widget-area" + e + " > .inner-wrap").css("padding-top", d.outerHeight() + i)
                } else t("#slide-out-widget-area" + e + " > .inner-wrap").css("padding-top", n)
            }() : o.hasClass("fullscreen-inline-images") ? (! function() {
                var e = pt.winW < pt.winH;
                0 === t('body[data-contained-header="true"]').length && d.css({
                    "z-index": "9990",
                    transition: "transform 0.3s ease"
                }), 0 == t(".nectar-social.fixed").length && Qn(), t("body.material").length > 0 && t("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out"), t("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").addClass("close"), t("#slide-out-widget-area.fullscreen-inline-images").addClass("open").removeClass("hidden"), l.addClass("open").removeClass("hidden"), t('body > div[class*="body-border"]').css("z-index", "9995"), setTimeout(function() {
                    d.removeClass("side-widget-closed").addClass("side-widget-open"), $ || (d.attr("data-transparent-header", "true"), 0 === t("#logo .starting-logo:not(.dark-version)").length && d.addClass("lighten-logo")), pt.usingFrontEndEditor || d.stop(!0).css("transform", "translateY(0)").addClass("transparent"), t("#header-outer.dark-slide.transparent").length > 0 && 0 == t("#boxed").length && d.removeClass("dark-slide").addClass("temp-removed-dark-slide"), 0 === t('body[data-contained-header="true"]').length && setTimeout(function() {
                        anime({
                            targets: "#header-outer #top > .container",
                            opacity: [0, 1],
                            duration: 900,
                            easing: "easeOutQuad"
                        }), d.css({
                            "z-index": "",
                            transition: ""
                        })
                    }, 50)
                }, e ? 350 : 425), t(".off-canvas-menu-container .clip-wrap").css("transition-duration", "0s"), l.removeClass("no-transition"), setTimeout(function() {
                    t(".slide-out-widget-area-toggle > div > a").removeClass("animating")
                }, 600), t('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && t(".container-wrap").hasClass("no-scroll") && t("#ajax-content-wrap").addClass("at-content");
                var a = d.outerHeight();
                t('body[data-contained-header="true"]').length > 0 && (a = 2 * d.outerHeight()), t("#slide-out-widget-area.fullscreen-inline-images > .inner-wrap").css("padding-top", a)
            }(), a = 1100) : t("#header-outer #mobile-menu").length > 0 && (a = 150, qa("slide-out-widget-area-toggle")), gt.ocmAnimating = !0, setTimeout(function() {
                gt.ocmAnimating = !1
            }, a), 0 != t("#header-outer #mobile-menu").length || o.hasClass("fullscreen-inline-images") || (d.removeClass("side-widget-closed").addClass("side-widget-open"), t('#header-outer[data-transparency-option="1"]').length > 0 && 0 == t("#boxed").length && t('#header-outer[data-full-width="true"]').length > 0 && !pt.usingFrontEndEditor && 0 == t('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length && 0 == t('body.material #header-outer[data-condense="true"]').length && d.addClass("transparent"), t("#header-outer.dark-slide.transparent").length > 0 && 0 == t("#boxed").length && 0 == t("body.material-ocm-open").length && d.removeClass("dark-slide").addClass("temp-removed-dark-slide")), t(".slide-out-widget-area-toggle:not(.simple-mobile-menu) > div > a").removeClass("closed").addClass("open").attr("aria-expanded", "true"), t(".slide-out-widget-area-toggle:not(.simple-mobile-menu) > div > a").addClass("animating"), t(e).trigger("nectar-ocm-open"), !1)
        }
        if (e.nectarOcmOpen && a(), r.on("click", ".slide-out-widget-area-toggle:not(.std-menu) a.closed.animating", function() {
                return !1
            }), r.on("click touchend", ".slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating), .nectar-ocm-trigger-open", a), r.on("click", ".slide-out-widget-area-toggle:not(.std-menu) a.open.animating", function() {
                return !1
            }), r.on("click", ".slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), .nectar-ocm-trigger-open a.open, #slide-out-widget-area .slide_out_area_close, > .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right, .material-ocm-open #ajax-content-wrap", function(a) {
                var n;
                if (null != a.originalEvent || 0 != t(".slide_out_area_close.non-human-allowed").length || 0 != t(".slide-out-widget-area-toggle.mobile-icon a.non-human-allowed").length) return !(gt.ocmAnimating || t(".slide-out-widget-area-toggle:not(.std-menu) a.animating").length > 0) && (gt.ocmOpen = !1, d.removeClass("no-transition"), t(this).parents(".simple-mobile-menu").length > 0 ? (ja("simple-mobile-menu"), t(this).removeClass("open"), !1) : (t(".slide-out-widget-area-toggle:not(.std-menu):not(.simple-mobile-menu) a").removeClass("open").addClass("closed").attr("aria-expanded", "false"), t(".slide-out-widget-area-toggle:not(.simple-mobile-menu):not(.std-menu) a").addClass("animating"), o.hasClass("slide-out-from-right") ? function() {
                    if (0 == t("body.material").length) {
                        var a = Ut();
                        pt.winW < 1e3 && (a = !0);
                        var n = e.nectarOptions && e.nectarOptions.mobile_header_format && "centered-menu" === e.nectarOptions.mobile_header_format && a ? "left" : "right";
                        if (t(".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title").stop(!0).transition({
                                x: "0px"
                            }, 700, "easeInOutCubic"), t('#header-outer[data-transparency-option="1"]').length > 0 && 0 == t("#boxed").length) {
                            var i = t("#header-outer[data-current-row-bg-color]").length > 0 ? d.attr("data-current-row-bg-color") : d.attr("data-user-set-bg");
                            d.stop(!0).transition({
                                x: "0px",
                                "background-color": i
                            }, 700, "easeInOutCubic")
                        } else d.stop(!0).transition({
                            x: "0px"
                        }, 700, "easeInOutCubic");
                        o.stop(!0).transition({
                            x: "left" === n || "left" === A ? "-301px" : "301px"
                        }, 700, "easeInOutCubic").removeClass("open"), 0 == t("#boxed").length && t('#header-outer[data-full-width="true"]').length > 0 && (d.removeClass("highzI"), t("header#top #logo").stop(!0).transition({
                            x: "0px"
                        }, 700, "easeInOutCubic"), t(".lines-button").removeClass("close")), t('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && t("#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap").stop(!0).transition({
                            x: "0px"
                        }, 700, "easeInOutCubic"), l.stop(!0).transition({
                            opacity: 0
                        }, 700, "easeInOutCubic", function() {
                            t(".slide-out-widget-area-toggle a").removeClass("animating"), t(this).css({
                                height: "1px",
                                width: "1px"
                            }), 0 == t('#header-outer[data-remove-fixed="1"]').length && (d.hasClass("parallax-contained") && pt.scrollTop > 0 && 0 == t('#header-outer[data-permanent-transparent="1"]').length ? d.removeClass("parallax-contained").addClass("detached").removeClass("transparent") : (0 == pt.scrollTop && t('body[data-hhun="1"]').length > 0 && t('#page-header-bg[data-parallax="1"]').length > 0 || 0 == pt.scrollTop && t('body[data-hhun="1"]').length > 0 && t(".parallax_slider_outer").length > 0) && t('#header-outer[data-transparency-option="1"]').length > 0 && d.addClass("transparent")), t(".container-wrap").css("transform", "none")
                        }), d.removeClass("style-slide-out-from-right"), 0 == t('#header-outer[data-remove-fixed="1"]').length && (1 == dt && 1 == k && pt.winW > 1e3 ? (s.off("scroll.headerResizeEffect"), 0 == pt.scrollTop ? (s.on("scroll.headerResizeEffect", gn), t('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && f.length > 0 && 1 == dt && t("#header-outer.pseudo-data-transparent").length > 0 && t('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
                            padding: "0"
                        }, {
                            queue: !1,
                            duration: 250,
                            easing: "easeOutCubic"
                        })) : s.on("scroll.headerResizeEffect", mn), d.hasClass("pseudo-data-transparent") && d.attr("data-transparent-header", "false").removeClass("pseudo-data-transparent").removeClass("transparent"), d.css("transition", "transform")) : 1 == dt && pt.winW > 1e3 && (s.off("scroll.headerResizeEffectOpaque"), s.on("scroll.headerResizeEffectOpaque", vn), d.css("transition", "transform"), d.hasClass("pseudo-data-transparent") && d.attr("data-transparent-header", "false").removeClass("pseudo-data-transparent").removeClass("transparent")))
                    } else t("body.material").length > 0 && (o.removeClass("open"), t("#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle").removeClass("material-open"), t(".ocm-effect-wrap, .ocm-effect-wrap-shadow, body > .slide_out_area_close, #fp-nav").removeClass("material-ocm-open"), t("body > .slide_out_area_close").removeClass("follow-body"), setTimeout(function() {
                        t(".slide-out-widget-area-toggle a").removeClass("animating"), r.removeClass("material-ocm-open"), r.removeClass("nectar-no-flex-height"), t(".ocm-effect-wrap").css({
                            height: "100%"
                        }), t(".ocm-effect-wrap-inner").css({
                            "padding-top": "0"
                        }), s.scrollTop(Math.abs(parseInt(t("#ajax-content-wrap").css("top")))), t("#ajax-content-wrap").css({
                            position: "",
                            top: ""
                        }), t('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0 && "none" != t('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css("display") && 0 == t("body.mobile").length && (t("#header-outer:not(.fixed-menu)").css("top", ""), c.css("visibility", "")), t('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
                            transform: ""
                        }), setTimeout(function() {
                            t('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
                                transition: ""
                            })
                        }, 30), t('body[data-hhun="1"] #header-secondary-outer.hidden').removeClass("hidden"), gt.materialOffCanvasOpen = !1, t(e).trigger("nectar-material-ocm-close")
                    }, 900), setTimeout(function() {
                        t('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass("no-trans").removeClass("effect-shown")
                    }, 200), setTimeout(function() {
                        t('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').removeClass("no-trans")
                    }, 500))
                }() : o.hasClass("fullscreen") ? (t("body.material").length > 0 && setTimeout(function() {
                    t("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out")
                }, 350), t(".slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").removeClass("close"), t(".blurred-wrap").removeClass("blurred"), t("#slide-out-widget-area.fullscreen").transition({
                    opacity: 0
                }, 700, "easeOutQuad", function() {
                    t("#slide-out-widget-area.fullscreen").hide().css("opacity", "1")
                }).removeClass("open"), t("#slide-out-widget-area.fullscreen .widget").transition({
                    opacity: 0
                }, 700, "easeOutQuad", function() {
                    t(this).transition({
                        y: "110px"
                    }, 0)
                }), setTimeout(function() {
                    t(".off-canvas-menu-container .menu > li").transition({
                        y: "80px",
                        opacity: 0
                    }, 0), t("#slide-out-widget-area .off-canvas-social-links li").transition({
                        scale: 0
                    }, 0), t("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"), t("#slide-out-widget-area .bottom-text").transition({
                        opacity: 0
                    }, 0), t("#slide-out-widget-area .menuwrapper .menu").removeClass("subview"), t("#slide-out-widget-area .menuwrapper .menu li").removeClass("subview subviewopen"), t("#slide-out-widget-area.fullscreen .inner .menu-wrap").css("height", "auto")
                }, 800), setTimeout(function() {
                    0 == t(".nectar-social.fixed").length && Dn(), t(".container-wrap").removeClass("no-shadow")
                }, 500), l.stop(!0).transition({
                    opacity: 0
                }, 900, "easeOutQuad", function() {
                    t('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && t(".container-wrap").hasClass("no-scroll") && t("#ajax-content-wrap").removeClass("at-content"), 0 == t('.mobile #header-outer[data-permanent-transparent="false"]').length && t("#slide-out-widget-area.fullscreen > .inner-wrap").css("padding-top", "0"), t(".slide-out-widget-area-toggle a").removeClass("animating");
                    var e = .4;
                    l.hasClass("solid") && (e = 1), l.hasClass("dark") && (e = .93), l.hasClass("medium") && (e = .6), l.hasClass("light") && (e = .4), t(this).css({
                        height: "1px",
                        width: "1px",
                        opacity: e
                    }).transition({
                        y: "-100%"
                    }, 0)
                })) : o.hasClass("fullscreen-alt") || o.hasClass("fullscreen-split") || o.hasClass("fullscreen-inline-images") ? (n = ".fullscreen-alt", o.hasClass("fullscreen-inline-images") ? (n = ".fullscreen-inline-images", d.css({
                    "z-index": "9990",
                    transition: "transform 0.3s ease"
                }), setTimeout(function() {
                    d.css({
                        "z-index": "",
                        transition: ""
                    })
                }, 450), $ || (d.removeClass("lighten-logo"), d.attr("data-transparent-header", "").removeClass("transparent")), setTimeout(function() {
                    t("#slide-out-widget-area .menuwrapper .menu").removeClass("subview"), t("#slide-out-widget-area .menuwrapper .menu li").removeClass("subview subviewopen"), t("#slide-out-widget-area.fullscreen-alt .inner .menu-wrap").css("height", "auto")
                }, 550)) : o.hasClass("fullscreen-split") && (n = ".fullscreen-split"), t("body.material").length > 0 && setTimeout(function() {
                    t("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out")
                }, 350), t(".slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)").removeClass("close"), l.removeClass("open"), ".fullscreen-split" !== n && ".fullscreen-inline-images" !== n || setTimeout(function() {
                    l.addClass("hidden"), t("#slide-out-widget-area" + n).addClass("hidden")
                }, 550), ".fullscreen-alt" === n && (t(".blurred-wrap").removeClass("blurred"), t("#slide-out-widget-area.fullscreen-alt .widget").transition({
                    opacity: 0
                }, 500, "easeOutQuad", function() {
                    t(this).transition({
                        y: "40px"
                    }, 0)
                }), t("#slide-out-widget-area .bottom-text, #slide-out-widget-area .off-canvas-social-links li").transition({
                    opacity: 0
                }, 250, "easeOutQuad"), t("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"), t(".off-canvas-menu-container .menu").transition({
                    y: "-13px",
                    opacity: 0
                }, 400)), setTimeout(function() {
                    ".fullscreen-alt" === n && (t(".off-canvas-menu-container .menu > li").stop(!0, !0).transition({
                        y: "40px",
                        opacity: 0
                    }, 0), t("#slide-out-widget-area .off-canvas-social-links li").transition({
                        scale: 0
                    }, 0), t("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"), t("#slide-out-widget-area .menuwrapper .menu").removeClass("subview"), t("#slide-out-widget-area .menuwrapper .menu li").removeClass("subview subviewopen"), t("#slide-out-widget-area.fullscreen-alt .inner .menu-wrap").css("height", "auto"), l.css({
                        height: "1px",
                        width: "1px",
                        left: "-100%"
                    })), t('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && t(".container-wrap").hasClass("no-scroll") && t("#ajax-content-wrap").removeClass("at-content"), 0 == t('.mobile #header-outer[data-permanent-transparent="false"]').length && t("#slide-out-widget-area" + n + " .inner-wrap").css("padding-top", "0"), t(".slide-out-widget-area-toggle a").removeClass("animating"), ".fullscreen-alt" === n && t("#slide-out-widget-area" + n).hide().removeClass("open")
                }, 550), ".fullscreen-split" !== n && ".fullscreen-inline-images" !== n || t("#slide-out-widget-area" + n).removeClass("open"), setTimeout(function() {
                    0 == t(".nectar-social.fixed").length && Dn()
                }, 600), setTimeout(function() {
                    l.removeClass("padding-removed")
                }, 50), setTimeout(function() {
                    ".fullscreen-alt" === n && l.stop(!0).css({
                        opacity: 0
                    }), t('#header-outer[data-transparent-header="true"]').length > 0 && t('body > div[class*="body-border"]').css("z-index", "10000")
                }, 1 == dt ? 150 : 50), setTimeout(function() {
                    t('#header-outer:not([data-permanent-transparent="1"]).transparent.small-nav, body[data-hhun="1"] #header-outer:not([data-permanent-transparent="1"]).transparent.scrolling, #header-outer:not([data-permanent-transparent="1"]).transparent.scrolled-down').removeClass("transparent"), d.hasClass("pseudo-data-transparent") && d.attr("data-transparent-header", "false").removeClass("pseudo-data-transparent").removeClass("transparent")
                }, ".fullscreen-inline-images" == n ? 0 : 100)) : t("#header-outer #mobile-menu").length > 0 && ja("slide-out-widget-area-toggle"), 0 == t("#header-outer #mobile-menu").length && (t("#header-outer.temp-removed-dark-slide.transparent").length > 0 && 0 == t("#boxed").length && d.removeClass("temp-removed-dark-slide").addClass("dark-slide"), 0 == t('#header-outer[data-permanent-transparent="1"]').length && 0 == t("#slide-out-widget-area.fullscreen-alt").length && (0 == t(".nectar-box-roll").length ? (t("#header-outer.small-nav").length > 0 || t("#header-outer.scrolled-down").length > 0) && d.removeClass("transparent") : (t("#header-outer.small-nav").length > 0 || t("#header-outer.scrolled-down").length > 0 || t(".container-wrap.auto-height").length > 0) && d.removeClass("transparent")), d.removeClass("hidden-menu"), d.removeClass("side-widget-open").addClass("side-widget-closed")), t(e).trigger("nectar-ocm-close"), !1))
            }), o.hasClass("fullscreen-inline-images")) {
            var n = "";
            t('#slide-out-widget-area .off-canvas-menu-container .menu > li[class*="current"]').length > 0 && (n = t('#slide-out-widget-area .off-canvas-menu-container .menu > li[class*="current"]').attr("class"));
            var i = Ya(n);
            t(".nectar-ocm-image." + i).length > 0 && (t(".nectar-ocm-image.default").remove(), t(".nectar-ocm-image." + i).addClass("current")), t(".off-canvas-menu-container .menu > .menu-item-has-children > a").on("click", function(e) {
                var a = Ya(t(this).parent().attr("class"));
                t(".nectar-ocm-image." + a).length > 0 && (t(".nectar-ocm-image." + a).addClass("active-hold"), t(".nectar-ocm-image.current:not(.active-hold)").addClass("hidden"))
            }), t("body").on("mousedown", ".off-canvas-menu-container .menu > .menu-item-has-children > ul > .back", function(e) {
                setTimeout(function() {
                    t(".nectar-ocm-image").removeClass("active-hold")
                }, 400)
            }), t("#slide-out-widget-area .off-canvas-menu-container li[class]").on("mouseenter", function() {
                var e = Ya(t(this).attr("class"));
                0 === t(".nectar-ocm-image.active-hold").length && (t(".nectar-ocm-image." + e).addClass("active"), t(".nectar-ocm-image." + e).length > 0 && t(".nectar-ocm-image.current:not(.active)").addClass("hidden"))
            }), t("#slide-out-widget-area .off-canvas-menu-container li").on("mouseleave", function() {
                0 === t(".nectar-ocm-image.active-hold").length && (t(".nectar-ocm-image.active").removeClass("active"), t(".nectar-ocm-image.current").removeClass("hidden"))
            })
        }
    }

    function Ya(t) {
        var e = t.split(" ").filter(function(t) {
            return !(!/[0-9]+$/.test(t) || -1 === t.indexOf("menu-item"))
        });
        return 1 !== e.length ? "not-found" : e.join("")
    }

    function Ra() {
        e.nectarOptions && "1" === e.nectarOptions.simplify_ocm_mobile && pt.usingMobileBrowser && o.hasClass("slide-out-from-right") && t("body.material").length > 0 && (t("body").attr("data-slide-out-widget-area-style", "slide-out-from-right-hover"), o.removeClass("slide-out-from-right"), o.addClass("slide-out-from-right-hover").addClass("ios-ocm-style"), t("#slide-out-widget-area .inner > .widget").wrapAll('<div class="bottom-meta-wrap"></div>')), t("#slide-out-widget-area.slide-out-from-right-hover").length > 0 ? function() {
            var a = !0;
            if (0 == t("#ajax-content-wrap > .slide-out-widget-area-toggle").length) {
                var n = t('.slide-out-widget-area-toggle[data-custom-color="true"]').length > 0 ? "#slide-out-widget-area > div" : "#slide-out-widget-area";
                0 === t(".ios-ocm-style").length && t('<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#slide-out-widget-area" role="button" class="closed"> <span> <span class="screen-reader-text">' + nectar_front_i18n.menu + '</span> <i class="lines-button x2" role="none"> <i class="lines"></i> </i> </span> </a> </div> </div>').insertAfter(n), (t('#header-outer[data-has-menu="true"]').length > 0 || t('body[data-header-search="true"]').length > 0 || t(".slide-out-widget-area-toggle a.using-label").length > 0 || t('.slide-out-widget-area-toggle[data-custom-color="true"]').length > 0) && t(".slide-out-widget-area-toggle").addClass("small")
            }
            if (pt.usingMobileBrowser || 0 != t(".ios-ocm-style").length) {
                function i() {
                    return a && (Wa(), a = !1, setTimeout(function() {
                        a = !0
                    }, 350)), !1
                }
                r.on("click touchend", ".slide-out-widget-area-toggle:not(.std-menu) a", i), e.nectarOcmOpen && setTimeout(() => {
                    i()
                }, 40), r.on("click", "#slide-out-widget-area-bg", La), r.on("click", ".ios-ocm-style .slide_out_area_close", function(t) {
                    La(), t.preventDefault()
                })
            } else r.on("mouseenter", "#header-outer .slide-out-widget-area-toggle:not(.std-menu) a", Wa), o.on("mouseenter", function() {
                t(this).addClass("mouse-accessed")
            });
            s.on("smartresize", Oa)
        }() : (Pa(), 0 != t("#header-outer #mobile-menu").length && (t("#header-outer #mobile-menu li.megamenu").removeClass("megamenu"), t("#header-outer #mobile-menu ul li a").each(function() {
            t(this).hasClass("nectar-widget-link") || 0 != t(this).find(".nectar-ext-menu-item").length || t(this).wrapInner("<span></span>")
        }), t("#header-outer #mobile-menu ul li").each(function() {
            t(this).find("> ul").length > 0 && t(this).find("> a").append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>')
        }), t("#header-outer #mobile-menu").on("click", ".sf-sub-indicator", function() {
            var e = t(this).parent().parent();
            return e.toggleClass("current-open-item"), e.hasClass("current-open-item") ? (e.find("> ul").show(), setTimeout(function() {
                e.addClass("visible")
            }, 30)) : (e.find("ul").hide(), e.find("li").removeClass("visible").removeClass("current-open-item"), e.removeClass("visible")), !1
        }), s.on("smartresize", function() {
            (pt.winW > 1e3 && t(".slide-out-widget-area-toggle.mobile-icon a.open").length > 0 || pt.winW > 1e3 && t(".nectar-ocm-trigger-open.simple-mobile-menu a.open").length > 0) && (t(".slide-out-widget-area-toggle.mobile-icon a, .nectar-ocm-trigger-open.simple-mobile-menu a").addClass("non-human-allowed"), t(".slide-out-widget-area-toggle.mobile-icon a.open, .nectar-ocm-trigger-open.simple-mobile-menu a.open").trigger("click"), setTimeout(function() {
                t(".slide-out-widget-area-toggle.mobile-icon a, .nectar-ocm-trigger-open.simple-mobile-menu a").removeClass("non-human-allowed")
            }, 100))
        }))), t("#slide-out-widget-area").hasClass("fullscreen-inline-images") && 0 == t(".off-canvas-menu-container .menu > li > a span.wrap").length && t(".off-canvas-menu-container .menu > li a").wrapInner('<span class="wrap"></span>'), 0 == t("#slide-out-widget-area.fullscreen-split").length && 0 == t('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length && 0 == t('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length ? function() {
            t("#slide-out-widget-area .off-canvas-menu-container .menu").wrap('<div class="menu-wrap menuwrapper" />'), t("#slide-out-widget-area .off-canvas-menu-container .menu").addClass("menuopen");
            var e = t("#slide-out-widget-area.fullscreen-alt").length > 0 || t("#slide-out-widget-area.fullscreen-inline-images").length > 0 ? "4" : "5";
            t("#slide-out-widget-area .off-canvas-menu-container .menu-wrap").dlmenu({
                animationClasses: {
                    classin: "dl-animate-in-" + e,
                    classout: "dl-animate-out-" + e
                }
            })
        }() : t('body.using-mobile-browser[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0 && t('body #slide-out-widget-area .inner .off-canvas-menu-container li a[href*="#"]').on("click", function() {
            "#" != t(this).attr("href") && Va(t(this).parent())
        }), t("#nectar_fullscreen_rows").length > 0 && (t('body[data-slide-out-widget-area-style*="fullscreen"]').length > 0 || t('body[data-slide-out-widget-area-style="slide-out-from-right"]:not(.material)').length > 0) && t("body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]").on("click", function() {
            var e = t(this).is('[href*="#"]') ? t(this).attr("href") : "";
            "#" != e && t('div[data-fullscreen-anchor-id="' + e.substr(e.indexOf("#") + 1) + '"]').length > 0 && (setTimeout(function() {
                t("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed").trigger("click")
            }, 100), setTimeout(function() {
                t("#slide-out-widget-area .slide_out_area_close").removeClass("non-human-allowed")
            }, 150))
        }), r.on("mouseover", "#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a", function() {
            var e = t(this).text();
            t(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass("hovered"), t(".off-canvas-menu-container .menuwrapper .menu li > a:contains(" + e + ")").addClass("hovered")
        }), r.on("mouseover", ".off-canvas-menu-container .menuwrapper .menu li > a", function() {
            t(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass("hovered")
        })
    }

    function Va(a) {
        t("#slide-out-widget-area.open").length > 0 && ((e.location.href.split("#")[0] == a.find("> a").attr("href").split("#")[0] || a.find('a[href^="#"]').length > 0) && (a.parents(".slide-out-from-right-hover").length > 0 ? t(".slide-out-widget-area-toggle.slide-out-hover-icon-effect a").trigger("click") : (t(".slide-out-widget-area-toggle a").addClass("non-human-allowed").trigger("click"), setTimeout(function() {
            t(".slide-out-widget-area-toggle a").removeClass("non-human-allowed")
        }, 100))))
    }
    le.prototype.setup = function() {
        var a = this;
        this.$el.find(".dynamic-words > span").each(function(e) {
            a.words[e] = t(this)
        }), this.viewportTracking(), this.$el.hasClass("element_stagger_words") && !this.$el.hasClass("delay-js-loaded") ? (this.staggerWaypoint(), t(e).on("nectar-waypoints-reinit nectar-tab-changed", this.staggerWaypoint.bind(this))) : (clearInterval(this.interval), this.interval = setInterval(this.sequence.bind(this), this.duration)), pt.usingMobileBrowser ? e.addEventListener("orientationchange", this.calcWidth.bind(this)) : t(e).on("resize", this.calcWidth.bind(this))
    }, le.prototype.viewportTracking = function() {
        var t = this;
        if ("IntersectionObserver" in e) {
            this.observer = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    e.isIntersecting ? t.state.visible = !0 : t.state.visible = !1
                })
            }, {
                rootMargin: "0px",
                threshold: 0
            }), this.observer.observe(this.$el[0])
        } else this.state.visible = !0
    }, le.prototype.calcWidth = function() {
        var t = this,
            e = this.$el.find(".dynamic-words").width();
        this.$el.find(".dynamic-words").css({
            width: ""
        });
        var a = this.words[this.state.activeIndex].find("span").width();
        this.$el.find(".dynamic-words").css({
            width: e
        }), setTimeout(function() {
            t.$el.find(".dynamic-words").css({
                width: a
            })
        }, 30)
    }, le.prototype.sequence = function() {
        if (this.$el.find(".dynamic-words > span").length < 2 || 0 == this.state.visible) return !0;
        var t, e;
        this.state.activeIndex = (t = this.words.length, (e = this.state.activeIndex + 1) >= 0 ? e % t : (e % t + t) % t), this.calcWidth(), this.$el.find(".dynamic-words > span").removeClass("active"), this.words[this.state.activeIndex].addClass("active")
    }, le.prototype.staggerWaypoint = function() {
        var e = this;
        if (1 == lt && 0 == this.$el.parents(".active").length) return !0;
        var a = t(this).hasClass("animated-in") ? " animated" : "";
        this.$el.find(".beginning-text, .ending-text").each(function() {
            var e = t(this).text();
            e = (e = e.trim()).split(" "), t(this)[0].innerHTML = "";
            for (var n = 0; n < e.length; n++) t(this)[0].innerHTML += '<span class="text-wrap"><span class="inner' + a + '">' + e[n] + "</span></span> "
        }), this.$el.hasClass("animated-in") && this.$el.find(".beginning-text .inner, .ending-text .inner").css({
            transform: "translateY(0)"
        }), this.$el.addClass("markup-generated");
        var n = 1 == lt ? "500%" : "bottom-in-view",
            i = this.$el,
            s = i.is("[data-delay]") ? parseInt(i.attr("data-delay")) : 0,
            r = new Waypoint({
                element: i[0],
                handler: function() {
                    if (i.parents(".wpb_tab").length > 0 && "hidden" == i.parents(".wpb_tab").css("visibility") || i.hasClass("animated-in")) r.destroy();
                    else {
                        if (!S || t('body[data-responsive="0"]').length > 0) setTimeout(function() {
                            var e = 0;
                            e = 500 / i.find(".text-wrap").length, e = Math.min(Math.max(e, 15), 50), parseInt(z) < 1100 ? z : "1100";
                            var a = 0;
                            i.find(".text-wrap").each(function() {
                                var n = t(this);
                                if (t(this).parents(".dynamic-words").length > 0 && !t(this).hasClass("active")) return n.find("> span").css({
                                    transform: "translate3d(0,0,0)"
                                }), !0;
                                setTimeout(function() {
                                    n.find("> span").css({
                                        transform: "translate3d(0,0,0)"
                                    })
                                }, a * e), a++
                            }), i.addClass("animated-in")
                        }, s);
                        1 != e.state.sequenceStarted && (clearInterval(e.interval), e.interval = setInterval(e.sequence.bind(e), e.duration)), e.state.sequenceStarted = !0, r.destroy()
                    }
                },
                offset: n
            })
    }, ue.prototype.events = function() {
        var a = this;
        "single_link" == this.linkFunc && (t(e).on("resize", this.setVertCenter.bind(this)), this.setVertCenter(), this.$el.find(".wpb_tabs_nav li").on("click", function(e) {
            if (pt.winW < 1e3) {
                var n = a.$el.find(".wpb_tabs_nav");
                void 0 !== e.originalEvent && (a.$el.find(".scrolling-tab-nav .scrolling-tab-nav-current-item").toggleClass("open"), n.toggle(), Se()), a.$el.find(".scrolling-tab-nav li").removeClass("active"), t(this).addClass("active"), a.updateActiveTitle()
            }
        }))
    }, ue.prototype.setVertCenter = function() {
        var t = (pt.winH - this.$el.find(".scrolling-tab-nav").height()) / 2;
        a.documentElement.style.setProperty("--nectar-sticky-tabs-vert-y", t + "px")
    }, ue.prototype.updateActiveTitle = function() {
        var t = this.$el.find(".scrolling-tab-nav .scrolling-tab-nav-current-item"),
            e = this.$el.find(".scrolling-tab-nav .menu-item.active .tab-nav-heading").clone(),
            a = this.$el.find(".scrolling-tab-nav .menu-item.active").index();
        this.$el.find(".scrolling-tab-content > div").removeClass("active"), this.$el.find(".scrolling-tab-content > div:eq(" + a + ")").addClass("active"), this.$el.find(".scrolling-tab-nav .scrolling-tab-nav-total .inner").css("transform", "translateY(-" + 100 * a + "%)"), t.html(e)
    }, ue.prototype.domSetup = function() {
        var e = this,
            a = "";
        this.$el.find(".wpb_tab").each(function(n) {
            if (t(this).is("[data-tab-icon]") && t(this).attr("data-tab-icon").length > 0 && 0 === t(this).find(".im-icon-wrap.tab-icon").length && (e.$el.addClass("using-icons"), a = e.$el.find(".wpb_tabs_nav li:nth-child(" + (n + 1) + ") a").attr("href"), e.$el.find(".wpb_tabs_nav li:nth-child(" + (n + 1) + ")").addClass("has-icon").prepend('<a class="skip-hash" role="button" href="' + a + '"><i class="' + t(this).attr("data-tab-icon") + '"></i></a>')), t(this).find(".im-icon-wrap.tab-icon").length > 0) {
                a = e.$el.find(".wpb_tabs_nav li:nth-child(" + (n + 1) + ") a").attr("href");
                var i = t(this).find(".im-icon-wrap.tab-icon").detach();
                e.$el.find(".wpb_tabs_nav li:nth-child(" + (n + 1) + ")").addClass("has-icon").prepend('<a class="skip-hash svg-icon-link" role="button" href="' + a + '"></a>'), e.$el.find(".wpb_tabs_nav li:nth-child(" + (n + 1) + ") .svg-icon-link").append(i)
            }
        }), this.$el.find(".scrolling-tab-nav .menu-item:first").addClass("active"), this.lineAnimation(), "single_link" == e.linkFunc && this.updateActiveTitle(), 1 == this.$el.find(".scrolling-tab-nav .menu-item").length && this.$el.find(".scrolling-tab-nav").addClass("single-tab");
        var n = this.$el.find(".scrolling-tab-content");
        this.$el.find(".scrolling-tab-nav .menu-item").each(function(a) {
            a += 1;
            var i = n.find("> div:nth-child(" + a + ")");
            if ("default" == e.linkFunc) {
                var s = t(this).html();
                if (i.prepend('<div class="scrolling-tab-mobile-title"><div class="inner">' + Vt(s) + "</div></div>"), i.find(".scrolling-tab-mobile-title a").contents().unwrap(), i) {
                    var r = t(this).find("a").attr("href");
                    r = r.substr(1), i.find("> .scrolling-tab-mobile-title").attr("id", r), i.removeAttr("id")
                }
            }
        }), this.$el.addClass("initalized")
    }, ue.prototype.highlightObserve = function() {
        var n = this;
        if (!(pt.usingMobileBrowser && pt.winW < 1e3) && "IntersectionObserver" in e) {
            var i = d.is('[data-remove-fixed="1"]') ? "100px 0px 0px 0px" : "5px 0px 0px 0px",
                s = {
                    root: jt() ? null : a,
                    rootMargin: i,
                    threshold: 1
                };
            this.observer = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    var a = "#" + t(e.target).attr("id"),
                        i = n.$el.find('.scrolling-tab-nav a[href="' + a + '"]');
                    e.isIntersecting && e.intersectionRatio >= 1 ? i.parents(".menu-item").addClass("visible") : i.parents(".menu-item").removeClass("visible");
                    var s = n.$el.find(".scrolling-tab-nav .menu-item.visible:first");
                    s.length > 0 && (n.$el.find(".scrolling-tab-nav .menu-item").removeClass("active"), s.addClass("active"), n.lineAnimation())
                })
            }, s), this.$tabContent.find("> div > .scrolling-tab-mobile-title[id]").each(function() {
                n.observer.observe(t(this)[0])
            }), this.tabs = Array.from(this.$tabContent.find("> div")), this.scrollDir = "up", this.prevScroll = 0, this.prevIndex = 0, this.observer = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    if (!(pt.winW < 1e3)) {
                        pt.scrollTop > n.prevScroll ? n.scrollDir = "down" : n.scrollDir = "up";
                        var a = "down" === n.scrollDir ? n.getTargetSection(e) : e.target;
                        if (n.shouldUpdate(e)) {
                            var i = t(a).index();
                            i < n.prevIndex ? n.$el.addClass("scrolling-up") : n.$el.removeClass("scrolling-up"), n.$el.find(".scrolling-tab-nav .ui-tabs-nav > .menu-item").removeClass("prev-active"), n.$el.find(".scrolling-tab-nav .ui-tabs-nav > .menu-item.active").addClass("prev-active"), n.$el.find(".scrolling-tab-nav .ui-tabs-nav > .menu-item").removeClass("active"), n.$el.find(".scrolling-tab-nav .ui-tabs-nav > .menu-item:eq(" + i + ")").addClass("active"), n.updateActiveTitle(), n.prevIndex = i
                        }
                        n.prevScroll = pt.scrollTop
                    }
                })
            }, {
                root: jt() ? null : a,
                rootMargin: "-40% 0% -40% 0%",
                threshold: 0
            }), this.$tabContent.find("> div").each(function() {
                n.observer.observe(t(this)[0])
            })
        }
    }, ue.prototype.getTargetSection = function(t) {
        var e = this.tabs.findIndex(function(e) {
            return e == t.target
        });
        return e >= this.tabs.length - 1 ? t.target : this.tabs[e + 1]
    }, ue.prototype.shouldUpdate = function(t) {
        return "down" === this.scrollDir && !t.isIntersecting && 0 != this.prevScroll || !("up" !== this.scrollDir || !t.isIntersecting || 0 == this.prevScroll)
    }, ue.prototype.lineAnimation = function() {
        var t = this.$el.find(".scrolling-tab-nav .active");
        if (0 != t.length) {
            var e = parseInt(t.position().top),
                a = parseInt(t.height());
            this.$lineEl.css({
                "max-height": a + "px",
                transform: "translate3d(0px, " + e + "px, 0px)"
            })
        }
    }, me.prototype.init = function() {
        this.resizeEvent(), s.on("resize", this.resizeEvent.bind(this))
    }, me.prototype.lazyInit = function() {
        var t = this;
        if (!pt.usingFrontEndEditor && "IntersectionObserver" in e) {
            t = this;
            var n = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    e.isIntersecting && (t.init(), n.unobserve(e.target))
                })
            }, {
                root: jt() ? null : a,
                rootMargin: "400px 0px 400px 0px",
                threshold: 0
            });
            n.observe(this.$el[0])
        } else this.init()
    }, me.prototype.calcTopOffset = function() {
        this.topOffset = (pt.winH - this.$innerEl.height()) / 2
    }, me.prototype.resizeEvent = function() {
        pt.winW > 1e3 ? (this.calcTopOffset(), this.$innerEl.css({
            top: this.topOffset
        })) : this.$innerEl.css({
            top: ""
        })
    }, ze.prototype.setType = function() {
        this.$element.is("[data-scroll-animation-movement]") && ("transform_x" == this.$element.attr("data-scroll-animation-movement") && (this.type = "translateX"))
    }, ze.prototype.calculatePos = function() {
        1 != gt.materialOffCanvasOpen && 1 != gt.ocmAnimating && (this.offsetTop = this.$element.offset().top, this.height = this.$element.outerHeight(), this.vertCenter = this.storedWinH / 2 - this.height / 2), pt.usingMobileBrowser || (this.storedWinH = pt.winH)
    }, ze.prototype.orientationChange = function() {
        pt.usingMobileBrowser && (this.offsetTop = this.$element.offset().top, this.height = this.$element.outerHeight(), this.storedWinH = pt.winH)
    }, ze.prototype.trackView = function() {
        var t = this;
        if (this.$element.parents(".top-level").length > 0 && (this.topLevel = !0, this.offsetTop > pt.winH && (this.topLevel = !1)), this.$element.is(".nectar_hook_global_section_parallax_footer") && (this.bottomLevel = !0), "IntersectionObserver" in e) {
            var n = {
                root: jt() ? null : a,
                rootMargin: "250px"
            };
            new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    var a = e.isIntersecting;
                    t.inView = !!a
                })
            }, n).observe(this.$element[0])
        }
    }, ze.prototype.animate = function() {
        if (1 != gt.materialOffCanvasOpen) {
            if (1 == this.lerp ? this.lastY = pt.scrollTop : this.lastY = parseInt(Yt(this.lastY, pt.scrollTop, this.lerp)), 1 == gt.animatedScrolling && (this.inView = !0), this.inView) {
                var t = this.intensity;
                pt.winW < 1025 && (t /= 1.2), pt.winW < 690 && (t /= 1.35), !0 === this.topLevel && pt.winW > 1e3 || !0 === this.topLevel && this.persistOnMobile ? this.$elementInner[0].style.transform = this.type + "(" + -this.lastY * t + "px) translateZ(0)" : !0 === this.bottomLevel && pt.winW > 1e3 || !0 === this.bottomLevel && this.persistOnMobile ? this.$elementInner[0].style.transform = this.type + "(" + -(this.lastY - (this.offsetTop + this.height) + pt.winH) * t + "px) translateZ(0)" : pt.winW > 1e3 || this.persistOnMobile ? this.$elementInner[0].style.transform = this.type + "(" + -(this.lastY - this.offsetTop + this.vertCenter) * t + "px) translateZ(0)" : this.$elementInner[0].style.transform = this.type + "(0px) translateZ(0)"
            }
            e.requestAnimationFrame(this.animate.bind(this))
        } else e.requestAnimationFrame(this.animate.bind(this))
    }, He.prototype.setup = function() {
        var a = this;
        (this.$el.parents("#page-header-bg").length > 0 || this.$el.parents(".featured-media-under-header").length > 0) && (this.type = "page-header"), (this.$el.parents(".top-level").length > 0 && this.$el.parents(".parallax_slider_outer").length > 0 || this.$el.parents(".top-level").length > 0 && this.$el.hasClass("nectar-simple-slider") || this.$el.parents(".top-level").length > 0 && this.$el.hasClass("nectar-recent-posts-single_featured") || this.$el.parents(".top-level").length > 0 && this.$el.hasClass("column-image-bg-wrap") && this.$el.parent().parent().is(".vc_col-sm-12:not(.child_column)") || this.$el.is(".wpb_row.top-level") || "page-header" == this.type || 0 == t(".wpb_row").length && !this.$el.is(".blog_next_prev_buttons") && !this.$el.is("#portfolio-nav")) && (this.firstSection = !0), (0 == t(".wpb_row").length && this.$el.parents(".parallax_slider_outer").length > 0 && this.$el.is('[data-full-width="true"]') || t("#portfolio-extra").length > 0 && this.$el.parents(".parallax_slider_outer").length > 0 && this.$el.parents(".wpb_row").length > 0 && "0" == this.$el.parents(".wpb_row").index()) && (this.firstSection = !0), pt.usingFrontEndEditor && "page-header" != this.type && (this.firstSection = !1), this.$parallaxEl.addClass("translate"), this.nestedParallax = this.$parallaxEl.parents('[data-scroll-animation="true"]').length > 0, this.nestedParallax || setInterval(function() {
            1 != gt.materialOffCanvasOpen && 1 != gt.ocmAnimating && (a.offsetTop = a.$el.offset().top, a.height = a.$el.outerHeight(!0))
        }, 800), t(e).on("nectar-column-animation-start", this.checkColumnAnimation.bind(this)), t(e).on("resize load", this.resize.bind(this)), e.addEventListener("orientationchange", function() {
            this.setTimeout(function() {
                a.orientationChange()
            }, 110)
        }), this.offsetTop = this.$el.offset().top, this.height = this.$el.outerHeight(!0)
    }, He.prototype.checkColumnAnimation = function() {
        this.$parallaxEl.parents(".col.has-animation.triggered-animation:not(.animated-in)").length > 0 && this.realtimeOffsetUpdate()
    }, He.prototype.realtimeOffsetUpdate = function() {
        var t = this,
            e = setInterval(function() {
                1 != gt.materialOffCanvasOpen && (t.offsetTop = t.$el.offset().top, t.height = t.$el.outerHeight(!0))
            }, 30);
        setTimeout(function() {
            clearInterval(e)
        }, 2e3)
    }, He.prototype.resize = function() {
        pt.usingMobileBrowser ? this.nestedParallax || (this.offsetTop = this.$el.offset().top, this.height = this.$el.outerHeight(!0)) : (this.storedWinH = pt.winH, this.offsetTop = this.$el.offset().top, this.height = this.$el.outerHeight(!0))
    }, He.prototype.orientationChange = function() {
        pt.usingMobileBrowser && (this.offsetTop = this.$el.offset().top, this.height = this.$el.outerHeight(!0), this.storedWinH = pt.winH)
    }, He.prototype.update = function() {
        if (this.offsetTop + 150 + this.height < pt.scrollTop || this.offsetTop - 150 > pt.scrollTop + this.storedWinH || 1 == gt.materialOffCanvasOpen) {
            for (var t = 0; t < this.$parallaxEl.length; t++) this.$parallaxEl[t].style.willChange = "auto";
            requestAnimationFrame(this.update.bind(this))
        } else {
            for (t = 0; t < this.$parallaxEl.length; t++) !0 === this.firstSection ? this.$parallaxEl[t].style.transform = "translate3d(0, " + pt.scrollTop * this.speed + "px, 0)" : this.$parallaxEl[t].style.transform = "translate3d(0, " + (this.storedWinH + pt.scrollTop - this.offsetTop) * this.speed + "px, 0) scale(1.005)", this.$parallaxEl[t].style.willChange = "transform";
            requestAnimationFrame(this.update.bind(this))
        }
    }, t(e).on("salient-parallax-el-recalculate", Se), Ae.prototype.setupProps = function() {
        var t = JSON.parse(this.$el[0].getAttribute("data-nectar-animate-settings"));
        "function" == typeof Object.assign && (Object.assign(this.animations, t.animations), Object.assign(this.offsets, t.offsets), Object.assign(this, t.config)), (this.$el.is(".top-level") || this.$el.parents(".top-level").length > 0 || pt.usingFrontEndEditor && 1 === this.$el.parents(".vc_element").last().index()) && (this.topLevel = !0), r.hasClass("single-portfolio") && this.$el.parents("#portfolio-extra").length > 0 && this.$el.parents(".first-section").length > 0 && (this.topLevel = !0)
    }, Ae.prototype.lazyInit = function() {
        var t = this;
        if (!pt.usingFrontEndEditor && "IntersectionObserver" in e && !this.$el.hasClass("skip-lazy-init")) {
            t = this;
            var n = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    e.isIntersecting && (t.init(), n.unobserve(e.target))
                })
            }, {
                root: jt() ? null : a,
                rootMargin: "400px 0px 400px 0px",
                threshold: 0
            });
            n.observe(this.$el[0])
        } else this.init()
    }, Ae.prototype.init = function() {
        this.createTimeline(), this.events(), this.update()
    }, Ae.prototype.events = function() {
        var a = this;
        t(e).on("resize load", this.resize.bind(this)), e.addEventListener("orientationchange", function() {
            this.setTimeout(function() {
                a.orientationChange()
            }, 110)
        }), this.resize()
    }, Ae.prototype.resize = function() {
        pt.usingMobileBrowser || (this.storedWinH = pt.winH);
        var t = this.$el[0].getBoundingClientRect();
        this.offsetTop = t.top + pt.scrollTop, this.elHeight = this.$el[0].offsetHeight, this.setActiveDevice()
    }, Ae.prototype.orientationChange = function() {
        if (pt.usingMobileBrowser) {
            var t = this.$el[0].getBoundingClientRect();
            this.offsetTop = t.top + pt.scrollTop, this.elHeight = this.$el[0].offsetHeight, this.storedWinH = pt.winH
        }
    }, Ae.prototype.setActiveDevice = function() {
        var t = this;
        Object.keys(this.devices).forEach(function(e) {
            pt.winW >= t.devices[e].min && pt.winW <= t.devices[e].max && (t.activeDevice = e, void 0 !== t.timelines[e] && t.timelines[e].reset())
        })
    }, Ae.prototype.createTimeline = function() {
        var t = this;
        Object.keys(this.devices).forEach(function(e) {
            if (void 0 !== t.animations[e]) {
                t.timelines[e] = anime.timeline({
                    autoplay: !1
                });
                var a = {},
                    n = {};
                Object.keys(t.animations[e]).forEach(function(i) {
                    n[i] = t.animations[e][i].start, a[i] = [t.animations[e][i].start, t.animations[e][i].end]
                }), t.setActiveDevice();
                var i = {
                    targets: void 0 !== t.inner_selector ? t.$el[0].querySelectorAll(t.inner_selector) : t.$el[0],
                    duration: 1e3,
                    easing: "linear"
                };
                Object.assign(i, a), t.timelines[e].add(i, 0)
            }
        })
    }, Ae.prototype.progressValues = function() {
        if (void 0 !== this.timelines[this.activeDevice]) {
            var t = pt.scrollTop,
                e = this.storedWinH,
                a = parseInt(this.offsets.start) / 100,
                n = e - a * e;
            "bottom" === this.offsets.origin && (n -= this.elHeight);
            var i = (t - (this.offsetTop - n)) / e;
            "0" === this.offsets.start && "100" === this.offsets.end && (i = (t - (this.offsetTop - n)) / (e + this.elHeight)), this.topLevel && (n = 0, i = t / e);
            var s = Math.max(Math.min(i, 1), 0),
                r = parseInt(this.offsets.end) / 100,
                o = 2 + -1 * r,
                l = r - a - .01;
            o > 1 && (o *= 1 / Math.min(2 * l, .9)), s > 0 ? (this.needsReset = !0, this.timelines[this.activeDevice].seek(this.timelines[this.activeDevice].duration * s * o)) : this.needsReset && (this.timelines[this.activeDevice].reset(), this.needsReset = !1)
        }
    }, Ae.prototype.update = function() {
        1 != gt.materialOffCanvasOpen && 1 != gt.ocmAnimating && this.progressValues(), requestAnimationFrame(this.update.bind(this))
    }, t(e).on("salient-parallax-bg-recalculate", Fe), Xe.prototype.calculatePos = function() {
        1 != gt.materialOffCanvasOpen && 1 != gt.ocmAnimating && (this.offsetTop = this.$element.offset().top, this.height = this.$element.outerHeight(), this.vertCenter = pt.winH / 2 - this.height / 2)
    }, Xe.prototype.trackView = function() {
        var t = this;
        if (this.$element.parents(".top-level").length > 0 && (this.topLevel = !0), "IntersectionObserver" in e) {
            var n = {
                root: jt() ? null : a,
                rootMargin: "250px"
            };
            new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    var a = e.isIntersecting;
                    t.inView = !!a
                })
            }, n).observe(this.$element[0])
        }
    }, Xe.prototype.animate = function() {
        if (1 != gt.materialOffCanvasOpen) {
            if (1 == gt.animatedScrolling && (this.inView = !0), this.lastY = Yt(this.lastY, pt.scrollTop, .2), this.inView) {
                var a = this;
                this.$element.find(".bg-layer").each(function(e) {
                    var n = t(this).data("scale");
                    a.layer1Parallax && (e = e / 1.5 + 1), !0 === a.topLevel && pt.winW > 1e3 ? t(this)[0].style.transform = "translateY(" + -a.lastY * a.intensity * e + "px) translateZ(0) scale(" + n + ")" : t(this)[0].style.transform = "translateY(" + -(a.lastY - a.offsetTop + a.vertCenter) * a.intensity * e + "px) translateZ(0) scale(" + n + ")"
                })
            }
            e.requestAnimationFrame(this.animate.bind(this))
        } else e.requestAnimationFrame(this.animate.bind(this))
    }, De.prototype.mergeNeighbors = function() {
        var t = this.$el.parents(".wpb_row");
        t.length > 0 && t.find('.nectar-split-heading[data-text-effect="scroll-opacity-reveal"]').length > 0 && (this.$el = t, this.mergedGroup = !0, t.addClass("nectar-split-heading-merged"))
    }, De.prototype.trackInView = function() {
        var t = this;
        new IntersectionObserver(function(e) {
            e.forEach(function(e) {
                e.isIntersecting ? (t.inView = !0, t.elHeight = t.$el.outerHeight(), t.offsetTop = t.$el.offset().top) : t.inView = !1
            })
        }, {
            root: jt() ? null : a,
            rootMargin: "100px 0px 100px 0px",
            threshold: 0
        }).observe(this.$el[0]);
        var e = this.$el[0].getBoundingClientRect();
        e.top + pt.scrollTop + e.height < pt.winH && (this.topLevel = !0)
    }, De.prototype.events = function() {
        pt.usingMobileBrowser ? e.addEventListener("orientationchange", this.calc.bind(this)) : e.addEventListener("resize", this.calc.bind(this)), this.calc()
    }, De.prototype.calc = function() {
        this.offsetTop = this.$el.offset().top, this.elHeight = this.$el.outerHeight(), this.wordCount = this.mergedGroup ? this.$el.find(".nectar-split-heading .inner").length : this.$el.find(".inner").length, this.elHeight / pt.winH < .25 && this.wordCount < 40 ? this.speed = 2.5 : (this.speed = Math.max(2 - Math.min(this.elHeight / pt.winH, 1.45), .66), (this.speed < 1.2 || this.wordCount < 30 && this.speed < 1.5) && (this.topCushion = .25 * pt.winH, this.wordDelay = 250))
    }, De.prototype.createTimeline = function() {
        var t = this;
        this.timeline = anime.timeline({
            autoplay: !1
        });
        var e = {
            targets: this.mergedGroup ? this.$el[0].querySelectorAll(".nectar-split-heading .inner") : this.$el[0].querySelectorAll(".inner"),
            duration: this.duration,
            easing: "linear",
            opacity: [.2, 1],
            delay: function(e, a) {
                return a * t.wordDelay
            }
        };
        this.timeline.add(e, 0)
    }, De.prototype.raf = function() {
        var t;
        this.inView && 1 != gt.materialOffCanvasOpen ? (t = this.topLevel ? pt.scrollTop / pt.winH * 1.5 : 1 + (pt.scrollTop - (this.offsetTop + this.topCushion)) / pt.winH, this.timeline.seek(t * this.timeline.duration * this.speed), requestAnimationFrame(this.raf.bind(this))) : requestAnimationFrame(this.raf.bind(this))
    }, t(e).on("salient-lazyloading-image-reinit", sa), t(e).on("salient-lazyloading-image-reinit", ra), da.prototype.initialMarkup = function() {
        0 == this.el.find(".nectar-post-grid-filters a.active").length && this.el.find(".nectar-post-grid-filters a:first-child").addClass("active"), "load-more" === this.settingsData.pagination && 0 == this.el.find(".load-more-wrap").length && (this.el.find(".active.all-filter").length > 0 && (this.activeFilter = this.el.find(".active.all-filter").index() + 1), this.activeCatTotal = parseInt(this.el.find(".nectar-post-grid-filters a:nth-child(" + this.activeFilter + ")").attr("data-total-count")), this.el.find(".nectar-post-grid-item").length >= this.activeCatTotal ? (this.el.addClass("all-loaded"), this.el.append('<div class="load-more-wrap inactive"><a href="#" role="button" class="load-more">' + this.el.attr("data-load-more-text") + "</a></div>")) : (this.el.removeClass("all-loaded"), this.el.append('<div class="load-more-wrap"><a href="#" role="button" class="load-more">' + this.el.attr("data-load-more-text") + "</a></div>")))
    }, da.prototype.lightboxGroups = function() {
        var e = Zt(),
            a = this.el.find(".nectar-post-grid-link.pretty_photo").length > 0;
        t('body[data-ls="magnific"]').length > 0 ? this.el.find(".nectar-post-grid-link.pretty_photo").addClass("magnific").addClass("gallery").removeClass("pretty_photo") : t('body[data-ls="fancybox"]').length > 0 && (this.el.find(".nectar-post-grid-link.pretty_photo").attr("data-fancybox", "group_" + e).removeClass("pretty_photo"), this.el.find(".nectar-post-grid-link[data-fancybox]").attr("data-fancybox", "group_" + e)), a && re()
    }, da.prototype.externalProjectLinks = function() {
        this.el.hasClass("target-blank-external-urls") && (this.el.find(".nectar-post-grid-item a[href*='http://']:not([href*='" + e.location.hostname + "'])").attr("target", "_blank"), this.el.find(".nectar-post-grid-item a[href*='https://']:not([href*='" + e.location.hostname + "'])").attr("target", "_blank"))
    }, da.prototype.clickEvents = function() {
        this.el.find(".nectar-post-grid-filters h4").on("click", function() {
            t(this).parent().find("div").toggleClass("visible"), t(this).toggleClass("visible")
        }), "content_under_image" == this.gridStyle && this.el.find(".nectar-post-grid-link.pretty_photo").length > 0 && this.el.on("click", ".bg-wrap-link", function() {
            if (t(this).parents(".nectar-post-grid-item").find(".nectar-post-grid-link").length > 0) return t(this).parents(".nectar-post-grid-item").find(".nectar-post-grid-link")[0].click(), !1
        });
        var a = this.settingsData,
            n = this.queryData,
            i = this;
        this.el.find(".nectar-post-grid-filters a, .load-more-wrap .load-more").on("click", function(r) {
            var o = t(this);
            if (o.parents(".nectar-post-grid-wrap.loading").length > 0 || t(this).hasClass("active") || t(this).hasClass("inactive")) return !1;
            t(this).parents(".nectar-post-grid-filters").length > 0 ? (o.parent().find("a").removeClass("active"), o.addClass("active"), i.currentPage = 0, i.activeFilter = o.index() + 1) : i.currentPage++;
            var l = o.parents(".nectar-post-grid-wrap").find(".nectar-post-grid"),
                d = a.pagination,
                c = o.hasClass("load-more") && "load-more" === d ? "load-more" : "filter",
                h = "",
                u = "";
            if ("yes" === i.sortable) h = o.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a.active").attr("data-filter"), u = o.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a.active").attr("data-filter");
            else {
                var p = o.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a").length > 1 ? ":not(.all-filter)" : "";
                o.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a" + p).each(function() {
                    h += t(this).attr("data-filter") + ", ", u += t(this).attr("data-filter") + ", "
                }), h = h.substring(0, h.length - 2), u = u.substring(0, u.length - 2)
            }
            var f = {
                action: "nectar_get_post_grid_segment",
                post_type: n.post_type,
                cpt_name: n.cpt_name,
                custom_query_tax: u,
                category: h,
                posts_per_page: n.posts_per_page,
                current_page: i.currentPage,
                offset: n.offset,
                order: n.order,
                orderby: n.orderby,
                load_action: c,
                ignore_sticky_posts: n.ignore_sticky_posts,
                settings: {
                    pagination: d,
                    animation: a.animation,
                    post_type: a.post_type,
                    image_size: a.image_size,
                    parallax_scrolling: a.parallax_scrolling,
                    aspect_ratio_image_size: a.aspect_ratio_image_size,
                    card_bg_color: a.card_bg_color,
                    category_position: a.category_position,
                    category_display: a.category_display,
                    display_categories: a.display_categories,
                    display_estimated_reading_time: a.display_estimated_reading_time,
                    display_excerpt: a.display_excerpt,
                    excerpt_length: a.excerpt_length,
                    display_date: a.display_date,
                    display_author: a.display_author,
                    author_functionality: a.author_functionality,
                    author_position: a.author_position,
                    color_overlay: a.color_overlay,
                    color_overlay_opacity: a.color_overlay_opacity,
                    color_overlay_hover_opacity: a.color_overlay_hover_opacity,
                    grid_style: a.grid_style,
                    hover_effect: a.hover_effect,
                    heading_tag: a.heading_tag,
                    post_title_overlay: a.post_title_overlay,
                    category_style: a.category_style,
                    enable_gallery_lightbox: a.enable_gallery_lightbox,
                    overlay_secondary_project_image: a.overlay_secondary_project_image,
                    vertical_list_hover_effect: a.vertical_list_hover_effect,
                    vertical_list_read_more: a.vertical_list_read_more,
                    read_more_button: a.read_more_button
                }
            };
            "rand" == n.orderby && "load-more" == c && (f.posts_shown = "", l.find(".nectar-post-grid-item[data-post-id]").each(function() {
                f.posts_shown += t(this).attr("data-post-id") + ", "
            }), f.posts_shown = f.posts_shown.substring(0, f.posts_shown.length - 2)), o.parents(".nectar-post-grid-wrap").addClass("loading"), t.post(e.nectarLove.ajaxurl, f, function(n) {
                if ("load-more" === c) l.append(n);
                else if (l.html(n), l.parent().hasClass("nectar-post-grid-wrap--fl-sidebar_left") || l.parent().hasClass("nectar-post-grid-wrap--fl-sidebar_right")) {
                    var r = l.parent().offset().top,
                        h = 0;
                    0 == t(".page-template-template-no-header-footer").length && 0 == t(".page-template-template-no-header").length && 0 == t('body[data-header-format="left-header"]').length && (h = t("#header-outer").height()), pt.winW > 999 && pt.scrollTop > r + 200 && e.scrollTo(0, r - h)
                }
                we(), l.is("[data-animation]") && !l.is('[data-animation="none"]') && (o.parents(".nectar-post-grid-wrap").removeClass("finished-animating"), l.find(".nectar-post-grid-item:not(.animated-in)").each(function(e) {
                    t(this).find(".nectar-split-heading").length > 0 && Mn(t(this).find(".nectar-split-heading"));
                    var n = t(this);
                    setTimeout(function() {
                        n.addClass("animated-in"), "zoom-out-reveal" === a.animation && Sn(n, function() {
                            An(n)
                        })
                    }, 90 * e)
                }), setTimeout(function() {
                    o.parents(".nectar-post-grid-wrap").addClass("finished-animating")
                }, 950)), "load-more" === d && (i.activeCatTotal = parseInt(i.el.find(".nectar-post-grid-filters a:nth-child(" + i.activeFilter + ")").attr("data-total-count")), l.find(".nectar-post-grid-item").length >= i.activeCatTotal ? (i.el.find(".load-more-wrap").addClass("inactive"), i.el.addClass("all-loaded")) : (i.el.find(".load-more-wrap").removeClass("inactive"), i.el.removeClass("all-loaded"))), i.lightboxGroups(), i.externalProjectLinks(), o.parents(".nectar-post-grid-wrap").removeClass("loading"), s.trigger("resize"), t(e).trigger("nectar-post-grid-updated"), oa()
            }), r.preventDefault()
        })
    }, da.prototype.deepLinking = function() {
        void 0 !== ee["grid-filter"] && this.el.find(".nectar-post-grid-filters a").each(function() {
            var e = t(this).clone(),
                a = ee["grid-filter"];
            t(this);
            (e = (e = e.text()).replace(/\s+/g, "-").toLowerCase()).length > 0 && "-" === e.substring(0, 1) && (e = e.substring(1)), e == (a = a.replace(/\s+/g, "-").replace(/</g, "&lt;").replace(/"/g, "&quot;").toLowerCase()) && t(this).trigger("click")
        })
    }, t.DLMenu = function(e, a) {
        this.$el = t(a), this._init(e)
    }, t.DLMenu.defaults = {
        animationClasses: {
            classin: "dl-animate-in-1",
            classout: "dl-animate-out-1"
        },
        onLevelClick: function() {
            return !1
        },
        onLinkClick: function() {
            return !1
        }
    }, t.DLMenu.prototype = {
        _init: function(e) {
            this.options = t.extend(!0, {}, t.DLMenu.defaults, e), this._config();
            this.animEndEventName = "animationend.menu", this.transEndEventName = "transitionend.menu", this.supportAnimations = !0, this.supportTransitions = !0, this._initEvents()
        },
        _config: function() {
            this.open = !1, this.$trigger = this.$el.children(".trigger"), this.$menu = this.$el.children("ul.menu"), this.$menuitems = this.$menu.find("li:not(.back) > a"), this.$el.find("ul.sub-menu").prepend('<li class="back"><a href="#"> ' + o.attr("data-back-txt") + " </a></li>"), this.$back = this.$menu.find("li.back")
        },
        _initEvents: function() {
            var e = this;
            this.$trigger.on("click.menu", function() {
                return e.open ? e._closeMenu() : e._openMenu(), !1
            }), this.$menuitems.on("click.menu", function(a) {
                var n = t(this).parent("li"),
                    i = n.children("ul.sub-menu");
                if (t(".fullscreen-alt .off-canvas-menu-container .clip-wrap, .fullscreen-alt .off-canvas-menu-container .clip-wrap span").css("transition-duration", "0s"), i.length > 0) {
                    var s = i.clone().css("opacity", 0).insertAfter(e.$menu),
                        r = function() {
                            e.$menu.off(e.animEndEventName).removeClass(e.options.animationClasses.classout).addClass("subview"), n.addClass("subviewopen").parents(".subviewopen:first").removeClass("subviewopen").addClass("subview"), s.remove(), setTimeout(function() {
                                t(".off-canvas-menu-container .menu > li").removeClass("no-pointer-events"), t(".off-canvas-menu-container .clip-wrap, .off-canvas-menu-container .clip-wrap span").css("transition-duration", ".45s")
                            }, 300)
                        };
                    return setTimeout(function() {
                        s.addClass(e.options.animationClasses.classin), e.$menu.addClass(e.options.animationClasses.classout), e.supportAnimations ? e.$menu.on(e.animEndEventName, r) : r.call(), e.options.onLevelClick(n, n.children("a:first").text())
                    }), n.parents(".menu-wrap").css("height", n.parents(".off-canvas-menu-container").find(".menuwrapper .menu").height()).transition({
                        height: s.height()
                    }, 500, "easeInOutQuad"), setTimeout(Ma, 600), !1
                }
                e.options.onLinkClick(n.find("> a"), a), Va(n)
            }), this.$back.on("click.menu", function() {
                var a = t(this),
                    n = a.parents("ul.sub-menu:first"),
                    i = n.parent(),
                    s = n.clone().insertAfter(e.$menu),
                    r = function() {
                        e.$menu.off(e.animEndEventName).removeClass(e.options.animationClasses.classin), s.remove()
                    };
                return setTimeout(function() {
                    s.addClass(e.options.animationClasses.classout), e.$menu.addClass(e.options.animationClasses.classin), e.supportAnimations ? e.$menu.on(e.animEndEventName, r) : r.call(), i.removeClass("subviewopen");
                    var t = a.parents(".subview:first");
                    t.is("li") && t.addClass("subviewopen"), t.removeClass("subview")
                }), setTimeout(function() {
                    i.parents(".menu-wrap").transition({
                        height: i.parent().height()
                    }, 500, "easeInOutQuad"), setTimeout(Ma, 600)
                }, 50), !1
            })
        },
        closeMenu: function() {
            this.open && this._closeMenu()
        },
        _closeMenu: function() {
            var t = this,
                e = function() {
                    t.$menu.off(t.transEndEventName), t._resetMenu()
                };
            this.$menu.removeClass("menuopen"), this.$menu.addClass("menu-toggle"), this.$trigger.removeClass("active"), this.supportTransitions ? this.$menu.on(this.transEndEventName, e) : e.call(), this.open = !1
        },
        openMenu: function() {
            this.open || this._openMenu()
        },
        _openMenu: function() {
            var e = this;
            r.off("click").on("click.menu", function() {
                e._closeMenu()
            }), this.$menu.addClass("menuopen menu-toggle").on(this.transEndEventName, function() {
                t(this).removeClass("menu-toggle")
            }), this.$trigger.addClass("active"), this.open = !0
        },
        _resetMenu: function() {
            this.$menu.removeClass("subview"), this.$menuitems.removeClass("subview subviewopen")
        }
    };
    var Xa, Na = function(t) {
        e.console && e.console.error(t)
    };

    function Da() {
        var e = parseInt(g.outerHeight());
        t('body[data-aie="slide-down"] #page-header-wrap:not(.fullscreen-header):not([data-responsive="true"])').css("height", e + "px")
    }

    function Qa() {
        0 != t("#ajax-content-wrap").length && r.hasClass("ajax-loaded") ? 1 == t("#ajax-content-wrap").length && t('#page-header-bg[data-parallax="1"]').css({
            opacity: 1
        }) : t('#page-header-bg[data-parallax="1"]').animate({
            opacity: 1
        }, 350, "easeInCubic"), t('#page-header-bg[data-parallax="1"] .nectar-particles').append('<div class="fade-out" />')
    }

    function Za() {
        var a = {
                inView: !0
            },
            n = t("#page-header-bg .span_6 .inner-wrap"),
            i = t("#page-header-bg #canvas");
        if (t('#page-header-bg[data-parallax="1"]').length > 0) {
            var r = new Image,
                o = parseInt(g.height()),
                l = t("#header-space").height(),
                d = t(".nectar-global-section.after-nav").length > 0 ? t(".nectar-global-section.after-nav").height() : 0,
                c = Jt(t('#page-header-bg[data-parallax="1"]').css("background-image"));
            c && -1 !== c.indexOf(".") ? (r.onload = function() {
                Qa()
            }, r.src = Jt(t('#page-header-bg[data-parallax="1"]').css("background-image"))) : Qa(), pt.winW > 1e3 && p(), e.addEventListener("scroll", function() {
                pt.winW > 1e3 && e.requestAnimationFrame(p)
            }, !1)
        }
        var h = t('body[data-ajax-transitions="true"]').length > 0 && t('#page-header-bg[data-animate-in-effect="slide-down"]').length > 0 ? 350 : 0;
        if (g.length > 0) {
            setTimeout(function() {
                Da()
            }, h), t('#page-header-bg[data-animate-in-effect="fade-in"]').addClass("loaded");
            var u = Jt(g.css("background-image"));
            u && -1 !== u.indexOf(".") && g.addClass("has-bg"), s.on("smartresize", Da)
        }

        function p() {
            pt.winW >= 1e3 && null == navigator.userAgent.match(/iPad/i) && 1 != gt.materialOffCanvasOpen && (1 == a.inView && (n.css({
                transform: "translateY(" + .15 * pt.scrollTop + "px)",
                opacity: 1 - pt.scrollTop / (.7 * (d + o))
            }), i && i.css({
                transform: "translateY(" + .15 * pt.scrollTop * 2 + "px)"
            })), pt.scrollTop / (o + l + pt.adminBarHeight) > 1 ? (a.inView = !1, t(".nectar-particles, #page-header-bg .fade-out").css("visibility", "hidden").addClass("out-of-sight"), t("#page-header-bg").addClass("out-of-sight")) : (a.inView = !0, t("#page-header-bg, .nectar-particles, #page-header-bg .fade-out").css("visibility", "visible").removeClass("out-of-sight")))
        }
        g.length > 0 && ((-1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) && (e.onunload = function() {
            Za(), t('#page-header-bg[data-parallax="1"] .span_6').css({
                opacity: 1
            })
        }), 0 == t(".nectar-box-roll").length && Ua())
    }

    function Ga() {
        if (0 == t("#page-header-bg .nectar-particles").length && 0 == t('#page-header-bg[data-text-effect="none"]').length || t(".nectar-box-roll").length > 0 && 0 == t("#page-header-bg .nectar-particles").length) {
            var e = 0 == t(".nectar-box-roll").length ? "#page-header-bg .span_6" : ".nectar-box-roll .overlaid-content .span_6";
            t(e).find(".wraped").each(function(e) {
                t(this).find("span").delay(370 * e).transition({
                    rotateX: "0",
                    opacity: 1,
                    y: 0
                }, 400, "easeOutQuad")
            }), setTimeout(function() {
                t(e).find(".inner-wrap > *:not(.top-heading)").each(function(e) {
                    t(this).delay(370 * e).transition({
                        rotateX: "0",
                        opacity: 1,
                        y: 0
                    }, 650, "easeOutQuad")
                }), t(".scroll-down-wrap, .scroll-down-wrap .section-down-arrow").removeClass("hidden")
            }, 370 * t(e).find(".wraped").length)
        }
    }

    function Ua() {
        g.each(function() {
            if ("rotate_in" == t(this).attr("data-text-effect")) {
                var e = "none";
                if (t(this).find(".span_6 h1").length > 0 && (e = "h1"), "none" != e) {
                    var a = t(this).find(".nectar-particles").length > 0 ? ".inner-wrap.shape-1" : ".span_6";
                    t(this).find(a).find(e).addClass("top-heading").contents().filter(function() {
                        return 3 === this.nodeType && void 0 !== this.data && this.data.replace(/\s+/, "")
                    }).wrap('<span class="wraped"></span>'), t(this).find(a).find(".wraped").each(function() {
                        var e = t(this),
                            a = e.text().split(" "),
                            n = "";
                        t.each(a, function(t, e) {
                            e.replace(/\s+/, "") && (n += '<span class="wraped"><span>' + e + "</span></span> ")
                        }), e.replaceWith(t(n))
                    })
                }
            }
        });
        var e = p.length > 0 ? 800 : 0;
        0 == t("#page-header-bg .nectar-video-wrap video").length && setTimeout(Ga, e)
    }

    function Ja() {
        if (t('#header-outer[data-permanent-transparent="1"]').length > 0 && t('body[data-bg-header="true"]').length > 0) {
            0 == t(".container-wrap div[data-midnight]").length && t(".container-wrap").attr("data-midnight", "dark");
            var e = [];
            t("div[data-midnight]:not(.has-global-section)").each(function() {
                ("light" == t(this).attr("data-midnight") && 0 == t(this).parents(".pum-content").length || "dark" == t(this).attr("data-midnight") && 0 == t(this).parents(".pum-content").length) && (t(this).is("#page-header-bg") && t(this).parents("#page-header-wrap[data-midnight]").length > 0 || e.push(t(this)))
            }), e.length > 0 && t.each(e, function(a, n) {
                if ("light" == n.attr("data-midnight") || "dark" == n.attr("data-midnight")) {
                    var i = n;
                    new Waypoint({
                        element: i[0],
                        handler: function(n) {
                            var s;
                            t("body.material-ocm-open").length > 0 || t("#slide-out-widget-area.open").length > 0 || "none" == i.css("display") || ("down" == n ? (s = "light" == i.attr("data-midnight") ? "" : "dark-slide", d.removeClass("dark-slide").addClass(s)) : (s = "light" == e[a - 1 >= 0 ? a - 1 : a].attr("data-midnight") ? "" : "dark-slide", d.removeClass("dark-slide").addClass(s)))
                        },
                        offset: d.height()
                    })
                }
            })
        }
    }

    function Ka() {
        t(".nectar-box-roll").length > 0 && "undefined" != typeof NectarBoxRoll && (Ua(), t(e).on("nectar-box-roll-scroll-disabled", function() {
            gt.preventScroll = !0
        }), t(e).on("nectar-box-roll-scroll-enabled", function() {
            gt.preventScroll = !1
        }), (ht = new NectarBoxRoll(pt, tn, Ja, Un, $a)).inUse = !0)
    }

    function tn() {
        var e, a, i, o, l, c, h, u, p;
        a = 1 == lt ? "500%" : "93%", i = 1 == lt ? "500%" : "95%", t(ot + '.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]) .row-bg').each(function() {
                var n = t(this).parents(".row-bg-wrap").attr("data-bg-animation"),
                    s = t(this).parents(".row-bg-wrap[data-bg-animation-delay]").length > 0 ? t(this).parents(".row-bg-wrap").attr("data-bg-animation-delay") : 0;
                e = "zoom-out-reveal" != n && -1 == n.indexOf("reveal-from-") ? a : i;
                var r = t(this),
                    o = new Waypoint({
                        element: r.parents(".row-bg-wrap")[0],
                        handler: function() {
                            r.parents(".wpb_tab").length > 0 && "hidden" == r.parents(".wpb_tab").css("visibility") || r.hasClass("animated-in") ? o.destroy() : (setTimeout(function() {
                                r.parents(".inner-wrap").addClass("animated-in"), ("zoom-out-reveal" == n || n.indexOf("reveal-from-") > -1 || r.parents(".nectar-scrolling-text").length > 0) && r.parents(".row-bg-wrap").addClass("animated-in"), "clip-path" == n && r.parents(".wpb_row ").addClass("animated-in")
                            }, s), o.destroy())
                        },
                        offset: e
                    })
            }), l = 1 == lt ? "500%" : "93%", c = 1 == lt ? "500%" : "80%", t(ot + '.column-image-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]) .column-image-bg').each(function() {
                var e = t(this).parents(".column-image-bg-wrap").attr("data-bg-animation");
                o = "zoom-out-reveal" != e && -1 == e.indexOf("reveal-from-") ? l : "ro-reveal-from-bottom" == e && 0 == lt ? "95%" : "ro-reveal-from-top" == e && 0 == lt ? "65%" : c;
                var a = t(this),
                    n = new Waypoint({
                        element: a.parents(".column-image-bg-wrap")[0],
                        handler: function() {
                            a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("animated-in") ? n.destroy() : (a.parents(".inner-wrap").addClass("animated-in"), ("zoom-out-reveal" == e || e.indexOf("reveal-from-") > -1) && (a.parents(".column-image-bg-wrap").addClass("animated-in"), a.parents(".column-image-bg-wrap").siblings(".column-bg-overlay-wrap").addClass("animated-in"), a.parents(".vc_column-inner").addClass("revealed-bg")), "mask-reveal" == e && a.parents(".vc_column-inner").find(".column-bg-layer").addClass("animated-in"), n.destroy())
                        },
                        offset: o
                    })
            }), t(ot + ".column-bg-overlay-wrap[data-bg-animation]").each(function() {
                o = c;
                var e = t(this),
                    a = t(this).attr("data-bg-animation");
                if (("zoom-out-reveal" == a || "mask-reveal" == a || a.indexOf("reveal-from-") > 0) && 0 == e.parent().find(".column-image-bg-wrap").length) var n = new Waypoint({
                    element: e[0],
                    handler: function() {
                        e.hasClass("animated-in") ? n.destroy() : (e.addClass("animated-in"), e.parents(".vc_column-inner").addClass("revealed-bg"), n.destroy())
                    },
                    offset: o
                })
            }), Re(), Qe(), Je(), h = 1 == lt ? "250%" : "75%", t(ot + '.nectar-icon-list[data-animate="true"]').each(function() {
                var e = t(this),
                    a = new Waypoint({
                        element: e[0],
                        handler: function() {
                            e.parents(".wpb_tab").length > 0 && "hidden" == e.parents(".wpb_tab").css("visibility") || e.hasClass("completed") ? a.destroy() : (e.each(function() {
                                var a = e.is('[data-direction="horizontal"]') ? 100 : 300;
                                t(this).find(".nectar-icon-list-item").each(function(e) {
                                    var n = t(this);
                                    setTimeout(function() {
                                        n.addClass("animated")
                                    }, e * a)
                                })
                            }), e.addClass("completed"), a.destroy())
                        },
                        offset: h
                    })
            }), ha(), ua(), ea(), u = 1 == lt ? "200%" : "95%", t(ot + ".clients.fade-in-animation").each(function() {
                var e = t(this),
                    a = new Waypoint({
                        element: e[0],
                        handler: function() {
                            e.parents(".wpb_tab").length > 0 && "hidden" == e.parents(".wpb_tab").css("visibility") || e.hasClass("animated-in") ? a.destroy() : (e.find("> div").each(function(e) {
                                t(this).delay(80 * e).transition({
                                    opacity: "1"
                                }, 450)
                            }), setTimeout(function() {
                                e.addClass("completed")
                            }, 80 * e.find("> div").length + 450), e.addClass("animated-in"), a.destroy())
                        },
                        offset: u
                    })
            }), Ne(), p = 1 == lt ? "500%" : "bottom-in-view", 0 == W.length || pt.usingFrontEndEditor && t("#nectar_fullscreen_rows").length > 0 ? (t(".svg-icon-holder:not(.animated-in)").has("svg").each(function(e) {
                var a = t(this);
                S && a.attr("data-animation", "false"), a.find("svg").css({
                    height: parseInt(a.attr("data-size")) + "px",
                    width: parseInt(a.attr("data-size")) + "px"
                }), t(this).find("svg").attr("id", "nectar-svg-animation-instance-" + e);
                var n = a.is("[data-animation-speed]") && a.attr("data-animation-speed").length > 0 ? a.attr("data-animation-speed") : 200;
                if ("false" == a.attr("data-animation") && (n = 1, a.css("opacity", "1")), a.hasClass("bound") || (W[e] = new Vivus(a.find("svg").attr("id"), {
                        type: "delayed",
                        pathTimingFunction: Vivus.EASE_OUT,
                        animTimingFunction: Vivus.LINEAR,
                        duration: n,
                        onReady: function() {
                            a.css({
                                height: parseInt(a.attr("data-size")) + "px",
                                width: parseInt(a.attr("data-size")) + "px"
                            })
                        }
                    })), 1 !== n) var i = new Waypoint({
                    element: a[0],
                    handler: function() {
                        a.hasClass("animated-in") ? i.destroy() : (s(), a.addClass("animated-in"), i.destroy())
                    },
                    offset: p
                });
                else s();

                function s() {
                    var t = 0;
                    a.is("[data-animation-delay]") && a.attr("data-animation-delay").length > 0 && "false" != a.attr("data-animation") && (t = a.attr("data-animation-delay"));
                    var e = a.find("svg").attr("id").replace(/[^0-9]/g, "");
                    1 == W[e].isReady ? setTimeout(function() {
                        a.css("opacity", "1"), W[e].reset().play()
                    }, t) : setTimeout(s, 50)
                }
                a.addClass("bound")
            }), t('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]').length > 0 && 0 == t("#nectar_fullscreen_rows").length && s.on("smartresize", function() {
                clearTimeout(n), n = setTimeout(function() {
                    W.length > 0 && t(".svg-icon-holder.animated-in").each(function() {
                        if (t(this).css("opacity", "1"), t(this).is("[id]")) {
                            var e = t(this).attr("id").replace(/[^0-9]/g, "");
                            W[e].finish()
                        }
                    })
                }, 300)
            })) : t(".svg-icon-holder").addClass("animated-in").css("opacity", "1"), t("#nectar_fullscreen_rows .svg-icon-holder.animated-in").has("svg").each(function(e) {
                var a = 0;
                t(this).is("[data-animation-delay]") && t(this).attr("data-animation-delay").length > 0 && "false" != t(this).attr("data-animation") && (a = t(this).attr("data-animation-delay"));
                var n = t(this),
                    i = n.find("svg").attr("id").replace(/[^0-9]/g, "");
                clearTimeout(et[e]), "false" == n.attr("data-animation") ? (n.css("opacity", "1"), W[i].finish()) : t(this).parents(".active").length > 0 || t(this).parents("#footer-outer").length > 0 || t("body.mobile").length > 0 ? (W[i].reset(), et[e] = setTimeout(function() {
                    W[i].play()
                }, a)) : W[i].reset().stop()
            }),
            function() {
                if (t(".nectar-milestone").each(function() {
                        var e;
                        t(this).is("[data-symbol]") && (0 == t(this).find(".symbol-wrap").length && ("before" == t(this).attr("data-symbol-pos") ? t(this).find(".number").prepend('<div class="symbol-wrap"><span class="symbol">' + Vt(t(this).attr("data-symbol")) + "</span></div>") : t(this).find(".number").append('<div class="symbol-wrap"><span class="symbol">' + Vt(t(this).attr("data-symbol")) + "</span></div>")), e = t(this).attr("data-symbol-size") == t(this).find(".number").attr("data-number-size") && "superscript" == t(this).attr("data-symbol-alignment") ? 32 : parseInt(t(this).attr("data-symbol-size")), t(this).find(".symbol-wrap").css({
                            "font-size": e + "px",
                            "line-height": e + "px"
                        })), t(this).find(".number").css({
                            "font-size": t(this).find(".number").attr("data-number-size") + "px",
                            "line-height": t(this).find(".number").attr("data-number-size") + "px"
                        })
                    }), !S && t(".nectar-milestone").length > 0 || r.hasClass("rtl") && t(".nectar-milestone").length > 0) {
                    var e = "";
                    t(ot + ".nectar-milestone.motion_blur").each(function(a) {
                        t(this).removeClass(function(t, e) {
                            return (e.match(/(^|\s)instance-\S+/g) || []).join(" ")
                        }), t(this).addClass("instance-" + a);
                        var n = t(this).find(".number").css("color"),
                            i = parseInt(n.substring(1), 16),
                            s = (16711680 & i) >> 16,
                            r = (65280 & i) >> 8,
                            o = (255 & i) >> 0,
                            l = "rgba(" + s + "," + r + "," + o + ",0.2)",
                            d = "rgba(" + s + "," + r + "," + o + ",1)",
                            c = parseInt(t(this).find(".number").attr("data-number-size"));
                        if (e += "@keyframes motion-blur-number-" + a + " {  0% { opacity: 0;color: " + l + "; text-shadow: 0 " + c / 20 + "px 0 " + l + ", 0 " + c / 10 + "px 0 " + l + ", 0 " + c / 6 + "px 0 " + l + ", 0 " + c / 5 + "px 0 " + l + ", 0 " + c / 4 + "px 0 " + l + ", 0 -" + c / 20 + "px 0 " + l + ", 0 -" + c / 10 + "px 0 " + l + ", 0 -" + c / 6 + "px 0 " + l + ", 0 -" + c / 5 + "px 0 " + l + ", 0 -" + c / 4 + "px 0 " + l + "; transform: translateZ(0px) translateY(-100%); -webkit-transform: translateZ(0px) translateY(-100%); } 33% { opacity: 1 }100% { color: " + d + "; text-shadow: none; transform: translateZ(0px) translateY(0px); -webkit-transform: translateZ(0px) translateY(0px); } } @-webkit-keyframes motion-blur-number-" + a + " {  0% { opacity: 0;color: " + l + "; text-shadow: 0 " + c / 20 + "px 0 " + l + ", 0 " + c / 10 + "px 0 " + l + ", 0 " + c / 6 + "px 0 " + l + ", 0 " + c / 5 + "px 0 " + l + ", 0 " + c / 4 + "px 0 " + l + ", 0 -" + c / 20 + "px 0 " + l + ", 0 -" + c / 10 + "px 0 " + l + ", 0 -" + c / 6 + "px 0 " + l + ", 0 -" + c / 5 + "px 0 " + l + ", 0 -" + c / 4 + "px 0 " + l + "; transform: translateZ(0px) translateY(-100%); -webkit-transform: translateZ(0px) translateY(-100%); } 33% { opacity: 1 }100% { color: " + d + "; text-shadow: none; transform: translateZ(0px) translateY(0px); -webkit-transform: translateZ(0px) translateY(0px); } } .nectar-milestone.motion_blur.instance-" + a + " .number span.in-sight { animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-" + a + "; -webkit-animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-" + a + "; } ", 0 != ut.$usingFullScreenRows || 0 == t(this).find(".number > span").length) {
                            var h = t(this).find(".symbol-wrap").clone();
                            t(this).find(".symbol-wrap").remove();
                            var u = t(this).find(".number").text().split(""),
                                p = t(this).find(".number");
                            p.empty(), t.each(u, function(t, e) {
                                p.append("<span>" + e + "</span")
                            }), t(this).has("[data-symbol]") && ("after" == t(this).attr("data-symbol-pos") ? p.append(h) : p.prepend(h))
                        }
                    }), ie(e, "milestone-blur"), de()
                }
            }(), ke(), t(ot + '.owl-carousel[data-enable-animation="true"]').each(function() {
                var e = 1 == lt ? "200%" : "bottom-in-view",
                    a = 0;
                t(this).is("[data-animation-delay]") && t(this).attr("data-animation-delay").length > 0 && "false" != t(this).attr("data-animation") && (a = t(this).attr("data-animation-delay"));
                var n = t(this),
                    i = new Waypoint({
                        element: n[0],
                        handler: function() {
                            n.parents(".wpb_tab").length > 0 && "hidden" == n.parents(".wpb_tab").css("visibility") || n.hasClass("animated-in") ? i.destroy() : (setTimeout(function() {
                                n.find(".owl-stage > .owl-item").each(function(e) {
                                    t(this).delay(200 * e).transition({
                                        opacity: "1",
                                        y: "0"
                                    }, 600, "easeOutQuart")
                                }), n.addClass("animated-in")
                            }, a), i.destroy())
                        },
                        offset: e
                    })
            }),
            function() {
                if (t('body[data-header-inherit-rc="true"]').length > 0 && 0 == t(".mobile").length && t('#header-outer[data-transparent-header="true"]').length > 0) {
                    var e = w / 2 + y + pt.adminBarHeight;
                    0 == t('#header-outer[data-permanent-transparent="1"]').length && (e = w - _ + Math.ceil(2 * y / 1.8) + pt.adminBarHeight), t(".main-content > .row > .wpb_row, #full_width_portfolio #portfolio-extra > .wpb_row").each(function() {
                        var a, n = t(this);
                        new Waypoint({
                            element: n[0],
                            handler: function(e) {
                                "down" == e ? n.find(".row-bg.using-bg-color").length > 0 ? (a = n.find("> .col.span_12.light").length > 0 ? "light-text" : "dark-text", d.css("background-color", n.find(".row-bg").css("background-color")).removeClass("light-text").removeClass("dark-text").addClass(a), d.attr("data-current-row-bg-color", n.find(".row-bg").css("background-color")), t("body.material #header-outer .bg-color-stripe").css("background-color", n.find(".row-bg").css("background-color"))) : (d.css("background-color", d.attr("data-user-set-bg")).removeClass("light-text").removeClass("dark-text"), d.attr("data-current-row-bg-color", d.attr("data-user-set-bg")), t("body.material #header-outer .bg-color-stripe").css("background-color", "")) : n.prev("div.wpb_row").find(".row-bg.using-bg-color").length > 0 ? (a = n.prev("div.wpb_row").find("> .col.span_12.light").length > 0 ? "light-text" : "dark-text", d.css("background-color", n.prev("div.wpb_row").find(".row-bg").css("background-color")).removeClass("light-text").removeClass("dark-text").addClass(a), d.attr("data-current-row-bg-color", n.prev("div.wpb_row").find(".row-bg").css("background-color")), t("body.material #header-outer .bg-color-stripe").css("background-color", n.prev("div.wpb_row").find(".row-bg").css("background-color"))) : (d.css("background-color", d.attr("data-user-set-bg")).removeClass("light-text").removeClass("dark-text"), d.attr("data-current-row-bg-color", d.attr("data-user-set-bg")), t("body.material #header-outer .bg-color-stripe").css("background-color", ""))
                            },
                            offset: e
                        })
                    })
                }
            }(), xe(), Ze(), Ue(), oe(), ca(),
            function() {
                if (st.length > 0)
                    for (var e = 0; e < st.length; e++) clearInterval(st[e].interval);
                st = [], t(".nectar-rotating-words-title").each(function(e) {
                    var a = parseInt(t(this).attr("data-rotation"));
                    st[e] = new le(t(this), a)
                })
            }(), Ge()
    }

    function en() {
        var a;
        wt(), Ct(), setTimeout(xt, 100), It(), Ht(), Wt(), Ft(), qt(), ge(), r.on("click", ".toggle > h3 a, .toggle > .toggle-title a", function() {
                if (!t(this).parents(".toggles").hasClass("accordion")) {
                    if (0 == t(this).parents('.toggle[data-inner-wrap="true"]').length) t(this).parents(".toggle").find("> div").slideToggle(300);
                    else {
                        var a = t(this).parents(".toggle").find("> div")[0];
                        a.style.maxHeight ? a.style.maxHeight = null : a.style.maxHeight = a.scrollHeight + "px"
                    }
                    if (t(this).parents(".toggle").toggleClass("open"), t(this).parents(".toggle").hasClass("open") ? t(this).find("i").attr("class", "fa fa-minus-circle") : t(this).find("i").attr("class", "fa fa-plus-circle"), t(this).parents(".toggle").find("> div .iframe-embed").length > 0 && "0" == t(this).parents(".toggle").find("> div iframe.iframe-embed").height() && xa(), t(this).parents(".toggle").find("> div img").length > 0 && t(this).parents(".toggle").is('[data-inner-wrap="true"]'))
                        for (var n = 1; n < 10; n++) setTimeout(fe, 100 * n);
                    return setTimeout(function() {
                        t(e).trigger("salient-parallax-el-recalculate")
                    }, 500), t(this).parents(".full-width-content").length > 0 && setTimeout(function() {
                        qe()
                    }, 300), t("#nectar_fullscreen_rows").length > 0 && setTimeout(function() {
                        s.trigger("smartresize")
                    }, 300), !1
                }
            }), r.on("click", ".toggles.accordion .toggle > h3 a, .toggles.accordion .toggle > .toggle-title a", function(a) {
                var n, i = t(this).parents(".toggles"),
                    r = t(this).parents(".toggle");
                if (setTimeout(function() {
                        t(e).trigger("salient-parallax-el-recalculate")
                    }, 500), t(this).parents(".toggle").hasClass("open")) return i.find(".toggle > div").each(function() {
                    t(this)[0].style.maxHeight = null
                }), i.find(".toggle h3 a i").attr("class", "fa fa-plus-circle"), i.find(".toggle").removeClass("open"), !1;
                if (0 == t(this).parents('.toggle[data-inner-wrap="true"]').length) i.find(".toggle > div").slideUp(300), i.find(".toggle h3 a i").attr("class", "fa fa-plus-circle"), i.find(".toggle").removeClass("open"), r.find("> div").slideDown(300), r.addClass("open");
                else {
                    void 0 !== a.originalEvent && pt.winW < 1e3 && i.find(".toggle.open").length > 0 && 0 == ut.$usingFullScreenRows && (i.find(".toggle.open"), setTimeout(function() {
                        var e = r.offset().top - pt.adminBarHeight;
                        t('#header-outer[data-mobile-fixed="1"]').length > 0 && (e = r.offset().top - d.outerHeight() - pt.adminBarHeight), Gt(e, 500, "easeInOutQuint")
                    }, 50));
                    var o = r.find("> div")[0];
                    i.find(".toggle > div").each(function() {
                        t(this)[0].style.maxHeight = null
                    }), i.find(".toggle h3 a i").attr("class", "fa fa-plus-circle"), i.find(".toggle").removeClass("open"), o.style.maxHeight = o.scrollHeight + "px", r.addClass("open")
                }
                return r.hasClass("open") ? t(this).find("i").attr("class", "fa fa-minus-circle") : t(this).find("i").attr("class", "fa fa-plus-circle"), t(this).parents(".full-width-content").length > 0 && (clearTimeout(n), n = setTimeout(function() {
                    qe()
                }, 400)), t("#nectar_fullscreen_rows").length > 0 && (clearTimeout(n), n = setTimeout(function() {
                    s.trigger("smartresize")
                }, 400)), !1
            }), ye(), ya(), we(), r.on("click", '.nectar-cta:not([data-style="material"]) .link_wrap', function(e) {
                (t(this).parents('[data-using-bg="true"]').length > 0 || t(this).parents('[class*="border_thickness"]').length > 0) && (t(e.target).is("a") || 0 != t(e.target).parents("a").length || t(this).find("a.link_text")[0].click())
            }), 0 !== t(".team-member").length && (r.on("click", '.team-member[data-style="bio_fullscreen"], .team-member[data-style="bio_fullscreen_alt"]', function() {
                if (!(t(".nectar_team_member_overlay").length > 0)) {
                    var a = t("body > #boxed").length > 0 ? "in-boxed" : "",
                        n = t(this).find(".nectar_team_bio").html(),
                        i = t(this).is('[data-style="bio_fullscreen_alt"]') ? t(this).find(".team-meta h5").html() : t(this).find(".team-meta p").html(),
                        o = t(this).find(".nectar_team_bio_img[data-img-src]").length > 0 ? t(this).find(".nectar_team_bio_img").attr("data-img-src") : "",
                        l = t(this).is('[data-style="bio_fullscreen_alt"]') ? "bio-fullscreen-alt" : "bio-fullscreen",
                        c = "";
                    if (c = t(this).is('[data-style="bio_fullscreen_alt"]') ? '<div class="title">' + Vt(i) + "</div><h2>" + t(this).find(".team-meta h3").text() + "</h2>" : "<h2>" + t(this).find(".team-meta h3").text() + '</h2><div class="title">' + Vt(i) + "</div>", r.append('<div class="nectar_team_member_overlay ' + a + '" data-style="' + l + '"><div class="inner-wrap"><div class="team_member_details"><div class="bio-inner"><span class="mobile-close"></span>' + c + '<div class="team-desc">' + Vt(n) + '</div></div></div><div class="team_member_picture"><div class="team_member_image_bg_cover"></div><div class="team_member_picture_wrap"><div class="team_member_image"></div></div></div></div></div>'), o.length > 0) {
                        var h = new Image;
                        h.src = o, h.onload = function() {
                            t(".nectar_team_member_overlay .team_member_image").css("opacity", "1")
                        }, t(".nectar_team_member_overlay .team_member_image").css({
                            "background-image": 'url("' + o + '")'
                        })
                    }
                    var u = t('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 0 : d.height();
                    t(".nectar_team_member_overlay .inner-wrap").css({
                        "padding-top": u
                    }), t(".using-mobile-browser").length > 0 && t("body,html").addClass("nectar-no-scrolling"), _e(), t(".nectar_team_member_overlay").addClass("open").addClass("animating"), setTimeout(function() {
                        t(".nectar_team_member_close").addClass("visible"), t(".nectar_team_member_overlay").removeClass("animating")
                    }, 500), t('.team-member[data-style="bio_fullscreen"]').length > 0 && pt.usingMobileBrowser && t(".nectar_team_member_overlay").addClass("on-mobile"), xa(), t(e).trigger("nectar-team-member-opened")
                }
            }), r.on("click", ".nectar_team_member_overlay", function(e) {
                if (t(e.target).is("a") || t(e.target).parents("a").length > 0 || t(e.target).is(".skip-team-member-close") || t(e.target).parents(".skip-team-member-close").length > 0) return !0;
                t(this).hasClass("animating") || (t(".nectar_team_member_overlay").removeClass("open"), t(".nectar_team_member_close").removeClass("visible"), t(".using-mobile-browser").length > 0 && t("body,html").removeClass("nectar-no-scrolling"), setTimeout(function() {
                    t(".nectar_team_member_overlay, .nectar_team_member_close").remove()
                }, 820))
            }), (t('.team-member[data-style="bio_fullscreen"]').length > 0 || t('.team-member[data-style="bio_fullscreen_alt"]').length > 0) && (s.on("resize", _e), !pt.usingMobileBrowser)) && new yt("", "close-indicator"), t(".nectar-flip-box").length > 0 && (pt.usingMobileBrowser && r.on("click", ".nectar-flip-box", function() {
                t(this).toggleClass("flipped")
            }), Te(), s.on("smartresize", Te)), St(), je(), Pe(), $e(), Pn(), Rn(), Ye(), t(".morphing-outline").length > 0 && (setTimeout(xe, 100), setTimeout(qe, 125), s.on("smartresize", xe)), j = [], pt.usingMobileBrowser || t("[data-nectar-link-indicator]").each(function(e) {
                j[e] = new yt(t(this), "link-indicator")
            }), la(), t(".nectar_cascading_images").length > 0 && (V = [], t(".nectar_cascading_images").each(function(e) {
                imagesLoaded(t(this), function(a) {
                    Ve(), t(a.elements[0]).is('[data-parallax="yes"]') && !pt.usingMobileBrowser && 0 == t("#nectar_fullscreen_rows").length && (V[e] = new Xe(t(a.elements[0]), t(a.elements[0]).attr("data-parallax-intensity")))
                })
            }), s.on("resize", Ve)), ta(), fa(),
            function() {
                t('.page-submenu[data-sticky="true"]').length > 0 && 0 == t("#nectar_fullscreen_rows").length && (! function() {
                    var t = e.jQuery,
                        a = e.Waypoint,
                        n = Xt();
                    Xt();

                    function i(e) {
                        this.options = t.extend({}, a.defaults, i.defaults, e), this.element = this.options.element, this.$element = t(this.element), this.createWrapper(), this.topLevel = t(this.element).parents(".top-level").length > 0, this.createWaypoint()
                    }
                    s.on("smartresize", function() {
                        if (n = Xt(), u.length > 0 && "fixed" == u.css("position") && (n += u.height()), f.length > 0 && s.width() > 1e3 && t('body[data-hhun="1"]').length > 0 && (n += f.height()), t(".page-submenu.stuck").length > 0) {
                            if (t(".page-submenu.stuck").addClass("no-trans").css("top", n).css("transform", "translateY(0)").addClass("stuck"), setTimeout(function() {
                                    t(".page-submenu.stuck").removeClass("no-trans")
                                }, 50), t(".page-submenu.stuck").parents(".wpb_row").css("z-index", 1e4), t("#boxed").length > 0) {
                                var e = s.width() > 1e3 ? .04 * t(".container-wrap").width() : 39;
                                t(".page-submenu.stuck").css({
                                    "margin-left": "-" + e + "px",
                                    width: t(".container-wrap").width()
                                })
                            }
                        } else t(".page-submenu.stuck").css("top", "0").removeClass("stuck"), t(".page-submenu.stuck").parents(".wpb_row").css("z-index", "auto"), t("#boxed").length > 0 && t(".page-submenu.stuck").css({
                            "margin-left": "0px",
                            width: "100%"
                        })
                    }), i.prototype.createWaypoint = function() {
                        var e = this.options.handler;
                        n = Xt(), this.topLevel && t('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length > 0 && (n += 1, this.$element.css({
                            "margin-top": "-1px"
                        })), u.length > 0 && "fixed" == u.css("position") && (n += u.height()), f.length > 0 && s.width() > 1e3 && t('body[data-hhun="1"]').length > 0 && (n += f.height()), this.waypoint = new a(t.extend({}, this.options, {
                            element: this.wrapper,
                            handler: t.proxy(function(a) {
                                var i = this.options.direction.indexOf(a) > -1,
                                    r = i ? this.$element.outerHeight(!0) : "";
                                if (this.$wrapper.height(r), i) {
                                    var o = 0;
                                    if (this.topLevel && t('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length > 0) {
                                        var l = d.outerHeight(),
                                            h = 0;
                                        c.length > 0 && (l -= pt.secondaryHeaderHeight), f.length > 0 && 0 == t("body.mobile").length && (h = dt ? f.height() : 0), o = l - h
                                    }
                                    this.$element.addClass("no-trans").css("top", n).css("transform", "translateY(" + o + "px)").addClass("stuck");
                                    var u = this;
                                    if (setTimeout(function() {
                                            u.$element.removeClass("no-trans")
                                        }, 50), this.$element.parents(".wpb_row").css("z-index", 1e4), t("#boxed").length > 0) {
                                        var p = s.width() > 1e3 ? .04 * t(".container-wrap").width() : 39;
                                        this.$element.css({
                                            "margin-left": "-" + p + "px",
                                            width: t(".container-wrap").width()
                                        })
                                    }
                                } else this.$element.css("top", "0").removeClass("stuck"), t("#boxed").length > 0 && this.$element.css({
                                    "margin-left": "0px",
                                    width: "100%"
                                });
                                e && e.call(this, a)
                            }, this),
                            offset: n
                        }));
                        var i = this;
                        setInterval(function() {
                            if (t('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length > 0) {
                                var e = d.outerHeight();
                                c.length > 0 && (e -= pt.secondaryHeaderHeight), i.waypoint.options.offset = n + e
                            } else i.waypoint.options.offset = n;
                            a.refreshAll()
                        }, 100)
                    }, i.prototype.createWrapper = function() {
                        this.options.wrapper && this.$element.wrap(this.options.wrapper), this.$wrapper = this.$element.parent(), this.wrapper = this.$wrapper[0]
                    }, i.prototype.destroy = function() {
                        this.$element.parent()[0] === this.wrapper && (this.waypoint.destroy(), this.$element.removeClass(this.options.stuckClass), this.options.wrapper && this.$element.unwrap())
                    }, i.defaults = {
                        wrapper: '<div class="sticky-wrapper" />',
                        stuckClass: "stuck",
                        direction: "down right"
                    }, a.Sticky = i
                }(), t('.page-submenu[data-sticky="true"]').each(function() {
                    var e = t(this)[0];
                    if (t(this).parents(".span_12").find("> .wpb_column").length > 1) {
                        var a = t(this).clone(),
                            n = t(this).parents(".wpb_row");
                        t(this).parents(".wpb_row.has-global-section").length > 0 && (n = t(this).parents(".wpb_row.has-global-section")), t(this).remove(), n.before(a), e = a[0]
                    }
                    new Waypoint.Sticky({
                        element: e
                    })
                }));
                0 == t("#nectar_fullscreen_rows").length && t(".page-submenu").parents(".wpb_row").css("z-index", 1e4);
                t(".page-submenu .mobile-menu-link").on("click", function() {
                    return t(this).parents(".page-submenu").find("ul").stop(!0).slideToggle(350), !1
                }), t(".page-submenu ul li a").on("click", function() {
                    t("body.mobile").length > 0 && t(this).parents(".page-submenu").find("ul").stop(!0).slideToggle(350)
                })
            }(), Z = [], "undefined" == typeof NectarLiquid || pt.usingFrontEndEditor || t('.row-bg-wrap[data-bg-animation*="displace-filter"] .row-bg.using-image, .column-image-bg-wrap[data-bg-animation*="displace-filter"] .column-image-bg').each(function(e) {
                var a, n, i = t(this);
                t(this).is(".row-bg") ? (a = t(this).parents(".row-bg-wrap").attr("data-bg-animation"), n = "row") : t(this).is(".column-image-bg") && (a = t(this).parents(".column-image-bg-wrap").attr("data-bg-animation"), n = "col"), Z[e] = new NectarLiquid(i, a, n)
            }), ga(),
            function() {
                function e() {
                    t('.blog-recent[data-style="title_only"]').each(function() {
                        if (t(this).find("> .col").length > 1) return !1;
                        var e = t(this).parent().parent().parent();
                        if (e.hasClass("vc_col-sm-3") || e.hasClass("vc_col-sm-4") || e.hasClass("vc_col-sm-6") || e.hasClass("vc_col-sm-8") || e.hasClass("vc_col-sm-9"))
                            if (0 == t("body.mobile").length && 0 == t(this).next("div").length) {
                                var a = 0;
                                t(this).find("> .col").css("padding", "50px 20px"), t(this).parents(".span_12").find(" > .wpb_column").each(function() {
                                    Math.floor(t(this).height()) > a && (a = Math.floor(t(this).height()))
                                }), Math.floor(t(this).find("> .col").outerHeight(!0)) < Math.floor(t(this).parents(".wpb_row").height()) - 1 && (t(this).find("> .col").css("padding-top", (a - t(this).find("> .col").height()) / 2 + "px"), t(this).find("> .col").css("padding-bottom", (a - t(this).find("> .col").height()) / 2 + "px"))
                            } else t(this).find("> .col").css("padding", "50px 20px")
                    })
                }
                t('.blog-recent[data-style="title_only"]').length > 0 && (e(), s.on("smartresize", e))
            }(), qn(), jn(), Xn(), r.on("mouseover", '.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a', function() {
                t(this).parents(".grav-wrap").find("img").addClass("hovered")
            }), r.on("mouseleave", '.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a', function() {
                t(this).parents(".grav-wrap").find("img").removeClass("hovered")
            }), r.on("mouseleave", '.container-wrap[data-nav-pos="after_project_2"] #portfolio-nav ul li, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul li', function() {
                t(this).addClass("mouse-leaving")
            }), Jn(), ai(),
            function() {
                if (0 == t(".portfolio-items .col").length) return;
                if (t(".portfolio-items .col .style-3-alt").length > 0 || t(".portfolio-items .col .style-3").length > 0 || t(".portfolio-items .col .style-2").length > 0 || t(".portfolio-items .col .style-5").length > 0) {
                    var e = "";
                    t(".portfolio-items .col").each(function() {
                        var a = t(this).attr("data-title-color"),
                            n = t(this).attr("data-subtitle-color");
                        a.length > 0 && (e += '.col[data-title-color="' + a + '"] .vert-center h3, .portfolio-items[data-ps="6"] .col[data-title-color="' + a + '"] .work-meta h4 { color: ' + a + "!important; } ", e += ' .portfolio-items[data-ps="8"] .col[data-title-color="' + a + '"] .line { background-color: ' + a + "; }", e += '.portfolio-items[data-ps="8"] .col[data-title-color="' + a + '"] .next-arrow line { stroke: ' + a + "; } "), n.length > 0 && (e += '.col[data-subtitle-color="' + n + '"] .vert-center p, .portfolio-items[data-ps="6"] .col[data-title-color="' + a + '"] .work-meta p { color: ' + n + "!important; } ")
                    }), ie(e, "nectar-portfolio-colors")
                }
            }(), t("body.search-results").length > 0 && t("#search-results article").length > 0 && 0 == t('#search-results[data-layout="list-no-sidebar"]').length && 0 == t('#search-results[data-layout="list-with-sidebar"]').length && ((a = t("#search-results")).is('[data-layout="masonry-no-sidebar"]'), a.imagesLoaded(function() {
                a.isotope({
                    itemSelector: ".result",
                    layoutMode: "packery",
                    packery: {
                        gutter: 0
                    }
                }), a.find("article").css("opacity", "1")
            }), s.on("resize", function() {
                a.isotope({
                    layoutMode: "packery",
                    packery: {
                        gutter: 0
                    }
                })
            })),
            function() {
                t(".single-portfolio #sidebar").attr("data-follow-on-scroll");
                if (0 == t("body.single-portfolio").length || 0 == t("#sidebar[data-follow-on-scroll]").length) return;
                if (1 == t(".single-portfolio #sidebar").attr("data-follow-on-scroll") && !r.hasClass("mobile") && parseInt(t("#sidebar").height()) + 50 <= parseInt(t(".post-area").height())) {
                    var e = ni();
                    t(".single-portfolio #sidebar").theiaStickySidebar({
                        additionalMarginTop: e,
                        updateSidebarHeight: !1
                    })
                }
            }(), Wn(), t(".nectar-scrolling-text").each(function() {
                if (t(this).offset().top > pt.winH) {
                    t(this).addClass("prevent-animation");
                    var e = t(this);
                    setTimeout(function() {
                        e.removeClass("prevent-animation")
                    }, 100)
                }
            }), he()
    }

    function an() {
        this.$toggleBtn = t(".nectar-shop-filters .nectar-shop-filter-trigger"), this.$sidebar = t("#sidebar"), this.sidebarPos = this.$sidebar.hasClass("col_last") ? "right" : "left", this.state = {
            open: this.getLS() ? this.getLS() : "true"
        }, this.setup(), this.events()
    }

    function nn() {
        this.$qty = "", this.step = 1, this.ajaxTimeout = "", this.ajaxTimeoutDur = 500, this.state = {
            max: 1e5,
            min: 0,
            currentVal: 1,
            key: 0,
            removeFlag: !1
        }, this.events()
    }

    function sn() {
        this.state = {
            processing: !1,
            productID: !1,
            type: "regular"
        }, this.events()
    }

    function rn() {
        var n;
        r.on("click", ".product .add_to_cart_button", function() {
            var e = t(this).parents("li").find("h2").length > 0 ? "h2" : "h3",
                a = t(this).parents("li").find(e).text();
            t("#header-outer .cart-notification span.item-name").html(a)
        }), r.on("mouseenter", "#header-outer .cart-notification", function() {
            t(this).hide(), t("#header-outer .widget_shopping_cart").addClass("open").stop(!0, !0).show(), t("#header-outer .cart_list").stop(!0, !0).show(), clearTimeout(n)
        });
        var i;

        function o() {
            !t(".widget_shopping_cart .widget_shopping_cart_content .cart_list .empty").length && t(".widget_shopping_cart .widget_shopping_cart_content .cart_list").length > 0 && (t(".cart-menu-wrap").addClass("has_products"), t("header#top nav > ul, #search-outer #search #close a, header#top .span_9 >.slide-out-widget-area-toggle").addClass("product_added"), t(".cart-menu-wrap").hasClass("static") || t(".cart-menu-wrap, #mobile-cart-link").addClass("first-load"))
        }

        function l() {
            t("#header-outer .cart-notification").stop(!0, !0).fadeOut()
        }
        if (t("#header-outer .nectar-woo-cart").length > 0 && t("#header-outer .nectar-woo-cart").hoverIntent(function() {
                t("#header-outer .widget_shopping_cart").addClass("open").stop(!0, !0).show(), t("#header-outer .cart_list").stop(!0, !0).show(), clearTimeout(n), t("#header-outer .cart-notification").hide()
            }), r.on("mouseleave", "#header-outer .nectar-woo-cart", function() {
                var e = t(this);
                setTimeout(function() {
                    e.is(":hover") || (t("#header-outer .widget_shopping_cart").removeClass("open").stop(!0, !0).fadeOut(300), t("#header-outer .cart_list").stop(!0, !0).fadeOut(300))
                }, 200)
            }), 0 == t('#header-outer[data-cart="false"]').length && r.on("added_to_cart", function(e) {
                setTimeout(function() {
                    ! function(e) {
                        if (clearTimeout(n), !t(".widget_shopping_cart .widget_shopping_cart_content .cart_list .empty").length && t(".widget_shopping_cart .widget_shopping_cart_content .cart_list").length > 0 && void 0 !== e.type) {
                            if (t("#header-outer .cart-notification .item-name").length > 0 && 0 == t("#header-outer .cart-notification .item-name").text().length) return;
                            t("#header-outer .cart-menu-wrap").hasClass("has_products") ? t("#header-outer .cart-notification").is(":visible") ? t("#header-outer .cart-notification").show() : t("#header-outer .cart-notification").fadeIn(400) : setTimeout(function() {
                                t("#header-outer .cart-notification").fadeIn(400)
                            }, 400), t('body #header-outer [data-cart-style="slide_in_click"] .cart-menu-wrap').trigger("click"), n = setTimeout(l, 2700)
                        }
                    }(e), o()
                }, 150)
            }), 0 == t('#header-outer[data-cart="false"]').length && (i = setInterval(o, 250), setTimeout(function() {
                clearInterval(i)
            }, 4500)), function() {
                if (0 != t("body.woocommerce-account #customer_login").length) {
                    0 === t("#customer_login .nectar-form-controls").length && (t(".woocommerce-account .woocommerce > #customer_login").prepend('<div class="nectar-form-controls" />'), t(".woocommerce-account .woocommerce > #customer_login > div:not(.nectar-form-controls)").each(function() {
                        var e = t(this).find("> h2").text();
                        t("#customer_login .nectar-form-controls").append('<div class="control">' + e + "</div>")
                    })), t(".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control").on("click", function() {
                        t(".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control").removeClass("active"), t(this).addClass("active");
                        var e = t(this).index() + 1;
                        t('#customer_login div[class*="u-column"]').hide(), t('#customer_login div[class*="u-column"].col-' + e).show(), setTimeout(function() {
                            t('#customer_login div[class*="u-column"]').removeClass("visible"), t('#customer_login div[class*="u-column"].col-' + e).addClass("visible")
                        }, 30)
                    });
                    var a = "1";
                    if (void 0 !== ee.tab && "2" === ee.tab && (a = "2", e.history && e.history.replaceState && "function" == typeof URL)) {
                        var n = new URL(location);
                        n.searchParams.delete("tab"), history.replaceState(null, null, n)
                    }
                    t(".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control:nth-child(" + a + ")").trigger("click")
                }
            }(), !(t('.products[data-rm-m-hover="1"]').length > 0 && pt.usingMobileBrowser) && (r.on("mouseover", ".text_on_hover .product-wrap, .text_on_hover > a:first-child", function() {
                t(this).parent().addClass("hovered")
            }), r.on("mouseout", ".text_on_hover .product-wrap, .text_on_hover > a:first-child", function() {
                t(this).parent().removeClass("hovered")
            })), t(".material.product").length > 0 || t(".minimal.product").length > 0 || t('.nectar-fancy-box[data-style="parallax_hover"]').length > 0 || t('.nectar-category-grid[data-shadow-hover="yes"]').length > 0 || t('.nectar-post-grid[data-shadow-hover="yes"]').length > 0) {
            var d = 101;
            r.on("mouseenter", '.material.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item, .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item', function() {
                d++, t(this).css("z-index", d + 1)
            }), r.on("mouseleave", '.material.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item, .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item', function() {
                var e = t(this);
                setTimeout(function() {
                    e.is(":hover") || e.css("z-index", 100)
                }, 350)
            }), e.nectarOptions && e.nectarOptions.woo_minimal_product_effect && "default" === e.nectarOptions.woo_minimal_product_effect && (r.on("mouseenter", ".minimal.product", function() {
                d++, t(this).css("z-index", d + 1)
            }), r.on("mouseleave", ".minimal.product", function() {
                var e = t(this);
                setTimeout(function() {
                    e.is(":hover") || e.css("z-index", 100)
                }, 350)
            })), setInterval(function() {
                t('.nectar-fancy-box[data-style="parallax_hover"]:hover').length > 0 || t(".minimal.product:hover").length > 0 || (t('.material.product:not(:hover), .minimal.product:not(:hover), .nectar-fancy-box[data-style="parallax_hover"]:not(:hover), .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item:not(:hover), .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item:not(:hover)').css("z-index", 100), d = 101)
            }, 1e4)
        }

        function c(e) {
            var a = s.width();
            e.clientX < a - 370 - b && t(".nectar-slide-in-cart").hasClass("mouse-accessed") && (s.off("mousemove.rightCartOffsetCheck", c), t(".nectar-slide-in-cart").removeClass("open").removeClass("mouse-accessed"))
        }
        if (t(".products .classic .product-wrap .add_to_cart_button").wrapInner("<span />"), t(".products .classic .product-wrap .add_to_cart_button").prepend('<i class="normal icon-salient-cart"></i>'), !(t('.products[data-rm-m-hover="1"]').length > 0 && pt.usingMobileBrowser) && e.nectarOptions && e.nectarOptions.woo_minimal_product_effect && "default" === e.nectarOptions.woo_minimal_product_effect && (r.on("mouseover", ".products .minimal.product", function() {
                var e, a, n, i, s, r;
                e = t(this), n = (a = e).width(), i = a.height(), s = (parseInt(n) + 40) / parseInt(n), r = (parseInt(i) + 40) / parseInt(i), a.addClass("hover-bound"), a.find(".background-color-expand").css({
                    transform: "scale(" + s + "," + r + ") translateY(0px) translateZ(0px)"
                })
            }), r.on("mouseleave", ".products .minimal.product", function() {
                t(this).find(".background-color-expand").css({
                    transform: "scale(1, 1) translateY(0) translateZ(0px)"
                })
            })), t(".products .minimal.product").each(function() {
                t(this).is(":hover") && t(this).trigger("mouseover")
            }), t(".woocommerce #sidebar .widget.woocommerce").each(function() {
                0 == t(this).find("> h4").length && t(this).addClass("no-widget-title")
            }), r.on("click", "#sidebar .widget.woocommerce:not(.widget_price_filter) h4", function() {
                e.nectarOptions && "false" !== e.nectarOptions.woo_sidebar_toggles && s.width() < 1e3 && (t(this).parent().is(".widget_product_tag_cloud") && t(this).parent().find("> div").slideToggle(), t(this).parent().is(".woocommerce-widget-layered-nav") && t(this).parent().find("> .woocommerce-widget-layered-nav-dropdown").length > 0 && t(this).parent().find("> .woocommerce-widget-layered-nav-dropdown").slideToggle(), t(this).parent().find("> ul").slideToggle(), t(this).parent().toggleClass("open-filter"))
            }), r.on("mouseenter", '#header-outer [data-cart-style="slide_in"] .cart-menu-wrap', function() {
                t(".nectar-slide-in-cart ul.cart_list li:not(.empty)").length > 0 && (t(".nectar-slide-in-cart").addClass("open"), s.on("mousemove.rightCartOffsetCheck", c))
            }), r.on("mouseenter", ".nectar-slide-in-cart", function() {
                t(this).addClass("mouse-accessed")
            }), r.on("click", '#header-outer [data-cart-style="slide_in_click"] .cart-menu-wrap, #mobile-cart-link[data-cart-style="slide_in_click"]', function() {
                if (r.is(".woocommerce-checkout") || r.is(".woocommerce-cart")) return !0;
                return t(".nectar-slide-in-cart, .nectar-slide-in-cart-bg").addClass("open"), t(".nectar-slide-in-cart-bg").addClass("revealed"), clearTimeout(Xa), t(".style_slide_in_click div.quantity").each(function() {
                    t(this).find(".minus").length > 1 && t(this).find(".minus").first().remove(), t(this).find(".plus").length > 1 && t(this).find(".plus").first().remove()
                }), !1
            }), r.on("click", ".nectar-slide-in-cart.style_slide_in_click .close-cart, .nectar-slide-in-cart-bg", on), new nn, e.nectarOptions && "1" === e.nectarOptions.ajax_add_to_cart) new sn;
        if (e.nectarOptions && "1" === e.nectarOptions.woo_product_filter_toggle && r.is(".archive.woocommerce")) new an;
        t(a).on("yith-wcan-ajax-filtered", sa)
    }

    function on() {
        return t(".nectar-slide-in-cart, .nectar-slide-in-cart-bg").removeClass("open"), Xa = setTimeout(function() {
            t(".nectar-slide-in-cart-bg").removeClass("revealed")
        }, 400), !1
    }

    function ln() {
        this.$el = t("#search-outer #search .container #s"), this.$container = "", this.$parent = "", this.$searchEl = t("#search-outer"), this.request = "", this.timeout = "", this.setup(), this.events(), this.state = {
            requesting: !1,
            open: !1,
            prevResults: ""
        }, this.minChars = 2
    }

    function dn() {
        t('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0 && function() {
            var e = d,
                a = t('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
                n = t('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'),
                i = c,
                r = n.find("nav >ul.buttons"),
                o = parseInt(t("body.material #header-outer").attr("data-padding")),
                l = parseInt(t("body.material #header-outer").attr("data-logo-height")),
                h = parseInt(n.css("margin-bottom")),
                u = o + h + l + parseInt(pt.secondaryHeaderHeight);

            function p() {
                Ut() ? d.addClass("within-custom-breakpoint") : d.removeClass("within-custom-breakpoint")
            }

            function g() {
                if (!(pt.winW < 1e3 || t("body.page-template-template-no-header").length > 0 || t("body.page-template-template-no-header-footer").length > 0 || t("body.material-ocm-open").length > 0 || "none" == t('#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9').css("display") || "none" == t('#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9 > nav').css("display")))
                    if (f = f.length > 0 && pt.secondaryHeaderHeight > 0 ? f.height() : 0, e.hasClass("force-condense") || !e.hasClass("fixed-menu") && pt.scrollTop >= u) {
                        var n = parseInt(a.position().top) - o - parseInt(pt.adminBarHeight) + parseInt(pt.secondaryHeaderHeight) - f;
                        if (t('#header-outer[data-megamenu-rt="1"]').length > 0 && t("#header-outer .megamenu").length > 0 && t('#header-outer[data-transparent-header="true"]').length > 0 && d.removeClass("no-transition"), e.addClass("fixed-menu").removeClass("transparent").css({
                                top: "-" + n + "px",
                                position: "fixed"
                            }), !e.is('[data-menu-bottom-bar-align="left"]')) {
                            var i = t("header#top .span_9 nav > ul .menu-title-text").length > 0 ? t("header#top .span_9 nav > ul .menu-title-text").offset().top : 0,
                                s = r.find("li:first-child > *").length > 0 ? r.find("li:first-child > *").offset().top : 0,
                                l = a.find("nav .sf-menu > li > a .menu-title-text").length > 0 ? (20 - parseInt(a.find("nav .sf-menu > li > a .menu-title-text").height())) / 2 : 2;
                            r.css("transform", "translateY(" + Math.ceil(parseInt(i) - parseInt(s) - l) + "px)"), r.find(".nectar-woo-cart").css({
                                height: "auto"
                            })
                        }
                    } else(e.hasClass("force-condense-remove") || e.hasClass("fixed-menu") && pt.scrollTop < u) && (e.removeClass("fixed-menu").css({
                        top: "0",
                        position: "absolute"
                    }), r.css("transform", "translateY(0px)"), r.find(".nectar-woo-cart").css({
                        height: "",
                        position: "relative"
                    }), 0 == t("#header-outer.transparent").length && (t('#header-outer[data-megamenu-rt="1"]').length > 0 && t("#header-outer .megamenu").length > 0 && d.removeClass("no-transition"), t('#header-outer[data-megamenu-rt="1"]').length > 0 && t('#header-outer[data-transparent-header="true"]').length > 0 && t("#header-outer .megamenu").length > 0 ? "true" == d.attr("data-transparent-header") && 0 == t(".nectar-box-roll").length && 0 == t(".megamenu.sfHover:not(.width-75):not(.width-50)").length ? (d.addClass("transparent"), d.removeClass("no-transition")) : "true" == d.attr("data-transparent-header") && 0 == t(".nectar-box-roll").length && t(".megamenu.sfHover").length > 0 && d.addClass("no-transition") : "true" == d.attr("data-transparent-header") && 0 == t(".nectar-box-roll").length && d.addClass("transparent")))
            }
            i.length > 0 && 0 == t('#header-outer[data-remove-fixed="1"]').length && t('#header-outer[data-condense="true"]').length > 0 && setTimeout(function() {
                "none" != c.css("display") && (pt.secondaryHeaderHeight = c.outerHeight())
            }, 50), t('#header-outer[data-condense="true"]').length > 0 && (s.on("scroll.centeredNavCondense", g), s.trigger("scroll"), s.on("resize", function() {
                (pt.winW < 1e3 || Ut()) && (e.addClass("force-condense-remove"), s.off("scroll.centeredNavCondense"))
            }), s.on("smartresize", function() {
                p(), pt.winW >= 1e3 && 0 == Ut() && e.hasClass("force-condense-remove") && (g(), e.removeClass("force-condense-remove"), setTimeout(function() {
                    pt.scrollTop >= u && (e.addClass("force-condense"), g(), e.removeClass("force-condense")), s.on("scroll.centeredNavCondense", g)
                }, 200))
            }), p())
        }()
    }

    function cn() {
        if (pt.winW > 1e3) {
            var e, a, n = t('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li').length;
            t("#header-outer #social-in-menu").length > 0 && n--, e = 0 == t("#header-outer #top .row .col.span_3 #logo img:visible").length ? parseInt(t("#header-outer #top .row .col.span_3").width()) : parseInt(t("#header-outer #top .row .col.span_3 img:visible").width()), a = t('#header-outer[data-lhe="animated_underline"]').length > 0 ? parseInt(t("header#top nav > ul > li:first-child > a").css("margin-right")) : parseInt(t("header#top nav > ul > li:first-child > a").css("padding-right")), a += a > 30 ? 45 : a > 20 ? 40 : 30, r.hasClass("rtl") ? t('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child(' + Math.floor(n / 2) + ")").css({
                "margin-left": e + a + "px"
            }).addClass("menu-item-with-margin") : t('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child(' + Math.floor(n / 2) + ")").css({
                "margin-right": e + a + "px"
            }).addClass("menu-item-with-margin");
            var i = 0,
                s = 0;
            t('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:not(#social-in-menu)').each(function(e) {
                e + 1 <= Math.floor(n / 2) ? i += t(this).width() : s += t(this).width()
            });
            var o = Math.abs(s - i);
            i > s || r.hasClass("rtl") && i < s ? t("#header-outer #top .row > .col.span_9").css("padding-right", o) : t("#header-outer #top .row > .col.span_9").css("padding-left", o), t('#header-outer[data-format="centered-logo-between-menu"] nav').css("visibility", "visible")
        } else t('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && pt.winW < 1e3 && t("#header-outer .row > .col.span_9").css({
            "padding-right": "0",
            "padding-left": "0"
        })
    }

    function hn() {
        if (t('#header-outer[data-format="centered-logo-between-menu"]').length > 0) {
            if (x) {
                if (x && t('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && t("header#top #logo img:first[src]").length > 0) {
                    var e = new Image;
                    e.src = t("header#top #logo img:first").attr("src"), e.onload = function() {
                        cn()
                    }
                }
            } else cn();
            s.on("smartresize", cn)
        }
    }

    function un() {
        t("#nectar_fullscreen_rows").length > 0 && 1 == lt && d.attr("data-permanent-transparent", "false"), pt.usingMobileBrowser && t('#header-outer[data-mobile-fixed="1"]').length > 0 && 0 == t('#header-outer[data-transparent-header="true"]').length && t("#header-space").css("height", d.outerHeight()).addClass("calculated"), e.nectarOptions && e.nectarOptions.header_entrance && "true" == e.nectarOptions.header_entrance && (0 == pt.scrollTop ? t("#header-outer").addClass("entrance-animation") : t("#header-outer").css("opacity", "1")), 0 == t("#nectar_fullscreen_rows").length && 0 == t(".nectar-box-roll").length ? Ja() : t("#nectar_fullscreen_rows").length > 0 && 0 == lt && Ja()
    }
    t.fn.dlmenu = function(e) {
        if ("string" == typeof e) {
            var a = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var n = t.data(this, "menu");
                n ? t.isFunction(n[e]) && "_" !== e.charAt(0) ? n[e].apply(n, a) : Na("no such method '" + e + "' for menu instance") : Na("cannot call methods on menu prior to initialization; attempted to call method '" + e + "'")
            })
        } else this.each(function() {
            var a = t.data(this, "menu");
            a ? a._init() : a = t.data(this, "menu", new t.DLMenu(e, this))
        });
        return this
    }, an.prototype.events = function() {
        this.$toggleBtn.on("click", this.toggle.bind(this)), this.$sidebar.find(".nectar-close-btn-wrap").on("click", this.mobileToggle.bind(this)), t(e).on("smartresize", this.mobileToggleResize.bind(this))
    }, an.prototype.mobileToggleResize = function() {
        this.$sidebar.hasClass("open") && pt.winW > 999 && (this.$sidebar.removeClass("open"), this.$sidebar.find(".nectar-close-btn-wrap").removeClass("open"), t(".container-wrap").css("z-index", "11"))
    }, an.prototype.mobileToggle = function() {
        return this.$sidebar.hasClass("open") ? (this.$sidebar.removeClass("open"), this.$sidebar.find(".nectar-close-btn-wrap").removeClass("open"), t(".container-wrap").css("z-index", "11")) : (t(".container-wrap").css("z-index", "10000"), this.$sidebar.addClass("open"), this.$sidebar.find(".nectar-close-btn-wrap").addClass("open")), !1
    }, an.prototype.toggle = function() {
        if (pt.winW < 1e3) return this.mobileToggle(), !1;
        var a = "";
        return "true" == this.state.open ? (this.state.open = "false", a = "false", this.$toggleBtn.find(".hide").hide(), this.$toggleBtn.find(".show").show(), this.$toggleBtn.find(".top-line, .bottom-line").css({
            transform: "translateX(0)"
        }), "left" == this.sidebarPos ? this.$sidebar.css({
            "margin-right": "-25%",
            opacity: "0"
        }) : this.$sidebar.css({
            "margin-left": "-25%",
            opacity: "0"
        }), this.$sidebar.find("> .inner").css({
            transform: "left" == this.sidebarPos ? "translateX(-100%)" : "translateX(100%)"
        })) : (this.state.open = "true", a = "true", this.$toggleBtn.find(".show").hide(), this.$toggleBtn.find(".hide").show(), this.$toggleBtn.find(".top-line").css({
            transform: "translateX(10px)"
        }), this.$toggleBtn.find(".bottom-line").css({
            transform: "translateX(-10px)"
        }), "left" == this.sidebarPos ? this.$sidebar.css({
            "margin-right": "0",
            opacity: "1"
        }) : this.$sidebar.css({
            "margin-left": "0",
            opacity: "1"
        }), this.$sidebar.find("> .inner").css({
            transform: "translateX(0)"
        })), setTimeout(function() {
            t(e).trigger("nectar-product-filters-layout")
        }, 425), "undefined" != typeof Storage && localStorage.setItem("nectar_product_filters_vis", a), !1
    }, an.prototype.setup = function() {
        if (this.$sidebar.find(".widget.woocommerce").addClass("open-filter").find("ul").css({
                display: "block"
            }), this.$sidebar.find(".widget.woocommerce.widget_product_tag_cloud").find("div.tagcloud").css({
                display: "block"
            }), this.$sidebar.find(".widget.woocommerce.widget_layered_nav > .woocommerce-widget-layered-nav-dropdown").length > 0 && this.$sidebar.find(".widget.woocommerce.widget_layered_nav > .woocommerce-widget-layered-nav-dropdown").css({
                display: "block"
            }), t(".nectar-active-product-filters").length > 0) {
            var e = t(".nectar-active-product-filters").clone();
            this.$sidebar.find("> .inner").prepend(e)
        }
    }, an.prototype.getLS = function() {
        return "undefined" != typeof Storage ? localStorage.getItem("nectar_product_filters_vis") : null
    }, nn.prototype.updateState = function(t) {
        var e = 0;
        !0 === this.checkMiniCart(this.$qty) && (e = this.$qty.attr("name").match(/cart\[(\w+)\]/)[1]);
        var a = parseFloat(this.$qty.val());
        a && "" !== a && "NaN" !== a || (a = 0);
        var n = parseFloat(this.$qty.attr("max")),
            i = parseFloat(this.$qty.attr("min"));
        ("" === n || "NaN" === n || isNaN(n)) && (n = ""), ("" === i || "NaN" === i || isNaN(i)) && (i = 0), this.state = {
            currentVal: a,
            max: n,
            min: i,
            key: e
        }
    }, nn.prototype.events = function() {
        var e = this;
        t("body").on("click", ".quantity .plus", function() {
            0 == t(this).parents(".auction_form").length && (e.$qty = t(this).closest(".quantity").find(".qty"), e.setStep(), e.updateState(), e.increment(t(this)))
        }), t("body").on("click", ".quantity .minus", function() {
            0 == t(this).parents(".auction_form").length && (e.$qty = t(this).closest(".quantity").find(".qty"), e.setStep(), e.updateState(), e.decrement(t(this)))
        }), t("body").on("keyup", ".woocommerce-mini-cart .quantity .qty", function(a) {
            e.$qty = t(this), e.updateState(), e.state.max && e.$qty.val() > e.state.max && e.$qty.val(e.state.max), e.state.min && (e.state.min == e.state.currentVal || e.state.currentVal < e.state.min) && (e.state.removeFlag = !0), t(this).trigger("change")
        }), t("body").on("change", ".woocommerce-mini-cart .quantity .qty", function(t) {
            t.originalEvent || !0 !== e.checkMiniCart(e.$qty) || e.updateCart(e.$qty.val())
        })
    }, nn.prototype.setStep = function() {
        if (this.$qty.is("[step]")) {
            var t = parseInt(this.$qty.attr("step"));
            isNaN(t) || "" == t || 0 == t || (this.step = t)
        }
    }, nn.prototype.increment = function() {
        this.state.max && (this.state.max == this.state.currentVal || this.state.currentVal > this.state.max) ? this.$qty.val(this.state.max) : this.$qty.val(this.state.currentVal + parseFloat(this.step)), this.$qty.trigger("change")
    }, nn.prototype.decrement = function() {
        this.state.min && (this.state.min == this.state.currentVal || this.state.currentVal < this.state.min) ? (this.$qty.val(this.state.min), this.state.removeFlag = !0) : this.state.currentVal > 0 && this.$qty.val(this.state.currentVal - parseFloat(this.step)), this.$qty.trigger("change")
    }, nn.prototype.checkMiniCart = function(t) {
        return t.parents(".woocommerce-mini-cart").length > 0
    }, nn.prototype.updateQuantityCallback = function(n, i) {
        t(e).trigger("nectar_woo_mini_cart_updated"), i.$qty.closest(".widget_shopping_cart_content").removeClass("loading"), i.$qty.closest(".woocommerce-mini-cart-item").removeClass("blockUI").removeClass("blockOverlay");
        var s = i.$qty.closest(".widget_shopping_cart_content").find(".woocommerce-mini-cart__total");
        if (s.find(".woocommerce-Price-amount, .tax_label").remove(), s.append(n.subtotal), e.nectarOptions && e.nectarOptions.woo_using_cart_addons && "true" === e.nectarOptions.woo_using_cart_addons && n.item_price && n.item_price.length > 0) {
            var r = t(n.item_price),
                o = i.$qty.closest(".woocommerce-mini-cart-item").find(".product-price");
            r.text() !== o.find(".woocommerce-Price-amossunt").text() && (o.find(".woocommerce-Price-amount, > del, > ins").remove(), o.prepend(n.item_price))
        }!0 === i.state.removeFlag && (i.$qty.closest(".woocommerce-mini-cart-item").remove(), i.state.removeFlag = !1, t(a.body).trigger("updated_wc_div")), t("#header-outer a.cart-contents .cart-wrap span").length > 0 && t("#header-outer a.cart-contents .cart-wrap span").text(n.item_count), t("#header-outer #mobile-cart-link .cart-wrap span").length > 0 && t("#header-outer #mobile-cart-link .cart-wrap span").text(n.item_count)
    }, nn.prototype.updateCart = function(a) {
        var n = this;
        clearTimeout(this.ajaxTimeout), this.ajaxTimeout = setTimeout(function() {
            n.$qty.closest(".widget_shopping_cart_content").addClass("loading"), n.$qty.closest(".woocommerce-mini-cart-item").addClass("blockUI").addClass("blockOverlay");
            var i = {
                type: "POST",
                url: e.nectarLove.ajaxurl,
                data: {
                    action: "nectar_minicart_update_quantity",
                    quantity: a,
                    item_key: n.state.key
                },
                cache: !1,
                success: function(t) {
                    t && n.updateQuantityCallback(t, n)
                }
            };
            t.ajax(i), e.nectarOptions && e.nectarOptions.woo_using_cart_addons && "true" === e.nectarOptions.woo_using_cart_addons && setTimeout(function() {
                t.ajax(i)
            }, 1e3)
        }, this.ajaxTimeoutDur)
    }, sn.prototype.events = function() {
        t("body").on("click", "form.cart .single_add_to_cart_button", this.addToCartAJAX.bind(this))
    }, sn.prototype.addNotices = function(e) {
        var a = t(".nectar-slide-in-cart.style_slide_in_click .widget_shopping_cart_content");
        t.each(e, function(t, e) {
            a.prepend('<div class="nectar-notice">' + e.notice + "</div>")
        }), setTimeout(function() {
            a.find(".nectar-notice").slideUp(function() {
                t(this).remove()
            })
        }, 6e3)
    }, sn.prototype.addToCartAJAX = function(a) {
        var n = this,
            i = t(a.currentTarget).parents("form.cart");
        if (!(i.closest(".product").hasClass("product-type-external") || wc_add_to_cart_params && "yes" === wc_add_to_cart_params.cart_redirect_after_add) && (a.preventDefault(), 1 != n.state.processing)) {
            n.state.processing = !0, n.state.productID = !1, n.state.type = "regular", i.parents(".nectar-quick-view-box").length > 0 && (n.state.type = "quickview");
            var s = i.closest(".product"),
                r = i.find("button.single_add_to_cart_button"),
                o = i.serializeArray(),
                l = 0;
            s.is('[id*="product-"]') && (l = s.attr("id").match(/\d+/)) && l[0] && (n.state.productID = l[0]), !1 === n.state.productID && r.length > 0 && (l = r.val().match(/\d+/)) && l[0] && (n.state.productID = l[0]), !1 !== n.state.productID ? ("quickview" === n.state.type && (r = t(".single_add_to_cart_button_wrap .single_add_to_cart_button")), r.prepend('<div class="loading-wrap"><div class="loading" /></div></div>'), setTimeout(function() {
                r.addClass("processing")
            }, 50), o.push({
                name: "action",
                value: "nectar_ajax_add_to_cart"
            }, {
                name: "add-to-cart",
                value: n.state.productID
            }), t.ajax({
                type: "POST",
                url: e.nectarLove.ajaxurl,
                data: o,
                cache: !1,
                success: function(e) {
                    setTimeout(function() {
                        n.state.processing = !1, r.removeClass("processing"), r.find(".loading-wrap").remove()
                    }, 300), e && e.fragments && (t("body").trigger("added_to_cart", [e.fragments, e.cart_hash]), e.notices && e.notices.length > 0 && setTimeout(function() {
                        n.addNotices(e.notices)
                    }, 100), "quickview" === n.state.type && t(".nectar-quick-view-box .close").trigger("click"))
                }
            })) : console.log("Error: no product ID found.")
        }
    }, ln.prototype.setup = function() {
        this.$container = t('<div class="inner"></div>'), t("#search-outer").append(t('<div class="nectar-ajax-search-results"><div class="container"></div></div>')), this.$parent = t("#search-outer .nectar-ajax-search-results"), t("#search-outer .nectar-ajax-search-results .container").append(this.$container)
    }, ln.prototype.events = function() {
        var a, n, i, s = this;
        this.throttled = (a = this.getResults.bind(this), n = 350, i = !1, function() {
            i || (a.call(), i = !0, setTimeout(function() {
                i = !1
            }, n))
        }), this.$el.on("keyup", this.keyHandle.bind(this)), t(e).on("resize", this.resize.bind(this)), t(e).on("nectar-search-close", function() {
            s.resetHeight(), s.requestCheck()
        })
    }, ln.prototype.keyHandle = function(t) {
        -1 == [16, 91, 32, 37, 39, 17].indexOf(t.keyCode) && (this.throttled(), this.debouncedSearch())
    }, ln.prototype.debouncedSearch = function() {
        var t = this;
        clearTimeout(this.timeout), this.timeout = setTimeout(function() {
            t.state.requesting || t.getResults()
        }, 400)
    }, ln.prototype.resize = function() {
        this.$parent.css({
            "max-height": ""
        }), !0 === this.state.open && this.$parent.css({
            "max-height": parseInt(this.$container.outerHeight()) + "px"
        })
    }, ln.prototype.resetHeight = function() {
        this.$parent.css({
            "max-height": ""
        }), setTimeout(function() {
            d.removeClass("results-shown")
        }, 400), this.state.prevResults = "", this.state.open = !1
    }, ln.prototype.requestCheck = function() {
        !0 === this.state.requesting && (this.request.abort(), this.state.requesting = !1)
    }, ln.prototype.getResults = function() {
        var a = this,
            n = this.$el.val();
        if (0 == n.length || n.length < this.minChars) return d.removeClass("results-shown"), this.requestCheck(), void this.resetHeight();
        this.request = t.ajax({
            type: "POST",
            url: e.nectarLove.ajaxurl,
            data: {
                action: "nectar_ajax_ext_search_results",
                search: n
            },
            cache: !1,
            success: function(e) {
                a.state.requesting = !1, e || a.resetHeight(), e && e.content && e.content !== a.state.prevResults && a.$searchEl.hasClass("material-open") && (a.$container.html(e.content), a.$parent.css({
                    "max-height": parseInt(a.$container.outerHeight()) + "px"
                }), setTimeout(function() {
                    d.addClass("results-shown")
                }, 200), pt.winW >= 1e3 && !d.hasClass("results-shown") && (a.$container.find(".product, .search-post-item").css({
                    opacity: "0",
                    transform: "translateY(25px)",
                    transition: "none"
                }), setTimeout(function() {
                    a.$container.find(".product, .search-post-item").css({
                        transition: "box-shadow 0.25s ease, opacity 0.55s cubic-bezier(0.2, 0.6, 0.4, 1), transform 0.55s cubic-bezier(0.2, 0.6, 0.4, 1)"
                    })
                }, 50), a.$container.find(".product, .search-post-item").each(function(e) {
                    var a = t(this);
                    setTimeout(function() {
                        a.css({
                            opacity: "1",
                            transform: "translateY(0)"
                        })
                    }, 50 + 60 * e)
                })), a.state.open = !0, a.state.prevResults = e.content)
            }
        }), this.state.requesting = !0
    };
    var pn = {
        timeoutQueued: !1,
        visible: !0,
        init: !1,
        raf: "",
        bodyOffsetHeight: 1e4
    };

    function fn() {
        var e = 0,
            n = 0 == $ && t('#page-header-bg[data-parallax="1"]').length > 0 ? 200 : 60,
            s = 2,
            r = t('.page-submenu[data-sticky="true"]').length > 0;
        pn.bodyOffsetHeight = a.body.offsetHeight, 0 == pn.init && setInterval(function() {
            1 != gt.materialOffCanvasOpen && (pn.bodyOffsetHeight = a.body.offsetHeight)
        }, 1500), pn.raf = requestAnimationFrame(function a() {
            d[0].classList.add("detached");
            var o = pt.scrollTop,
                l = Math.abs(o - e);
            if (1 == gt.animatedScrolling || 1 == gt.preventScroll || 1 == gt.ocmOpen) return o > n && (1 == gt.animatedScrolling && 1 == $ && 0 == gt.permanentTransHeader && d.removeClass("transparent").addClass("scrolling"), e = pt.scrollTop, o = pt.scrollTop), void(pn.raf = requestAnimationFrame(a));
            if (1 == gt.materialOffCanvasOpen || 1 == gt.materialSearchOpen) return 1 == gt.materialSearchOpen && 1 == $ && (0 == gt.permanentTransHeader && o > n ? d.removeClass("transparent").addClass("scrolling") : d.addClass("transparent").removeClass("scrolling")), void(pn.raf = requestAnimationFrame(a));
            if (!d.hasClass("side-widget-open") && !t("#header-outer .slide-out-widget-area-toggle a").hasClass("animating")) {
                var h;
                if (c.length > 0 && (o > n ? (c.addClass("hide-up"), d.css("transform", "translateY(-" + pt.secondaryHeaderHeight + "px)")) : (c.removeClass("hide-up"), d.css("transform", "0px)"))), o > n) 0 == gt.permanentTransHeader && (0 == pn.timeoutQueued && setTimeout(function() {
                    0 == gt.ocmOpen && (d.removeClass("transparent"), d.addClass("scrolling")), pn.timeoutQueued = !1
                }, 400), pn.timeoutQueued = !0), d.removeClass("no-transition"), l >= s && (o > e ? (d.hasClass("invisible") || (d.addClass("invisible").removeClass("at-top"), pt.winW > 1e3 && t(".sf-menu").length > 0 && t().superfish && (t(".sf-menu").superfish("hide"), t("header#top nav > ul.sf-menu > li.menu-item-over").removeClass("menu-item-over"))), 1 == r && t(".page-submenu.stuck").css("transform", "translateY(0px)").addClass("header-not-visible")) : (d.hasClass("invisible") && d.removeClass("invisible"), 1 == r && (h = d.outerHeight(), c.length > 0 && (h -= pt.secondaryHeaderHeight), f.length > 0 && pt.winW > 999 ? (i = dt ? f.height() : 0, t(".page-submenu.stuck").css("transform", "translateY(" + (h - i) + "px)").removeClass("header-not-visible")) : t(".page-submenu.stuck").css("transform", "translateY(" + h + "px)").removeClass("header-not-visible"))));
                else {
                    var u = c.length > 0 ? 32 : 0;
                    f.length > 0 && (u = c.length > 0 ? 32 + f.height() : f.height()), o <= u && (d.addClass("at-top").removeClass("invisible").removeClass("scrolling"), pt.winW > 999 && t('#header-outer[data-megamenu-rt="1"]').length > 0 && 1 == $ && t("#header-outer .megamenu").length > 0 ? 0 == t(".nectar-box-roll").length && 0 == t(".megamenu.sfHover:not(.width-75):not(.width-50)").length ? d.addClass("transparent").css("transform", "translateY(0)").removeClass("no-transition") : t(".nectar-box-roll").length > 0 && d.css("transform", "translateY(0)").addClass("at-top-before-box") : 1 == $ && 0 == ht.inUse ? d.addClass("transparent").css("transform", "translateY(0)") : 1 == ht.inUse && d.css("transform", "translateY(0)").addClass("at-top-before-box"))
                }
                pt.winH + pt.scrollTop + 30 >= pn.bodyOffsetHeight && (d.removeClass("invisible"), 1 == r && (h = d.outerHeight(), c.length > 0 && (h -= pt.secondaryHeaderHeight), f.length > 0 && pt.winW > 999 ? (i = dt ? f.height() : 0, t(".page-submenu.stuck").css("transform", "translateY(" + (h - i) + "px)").removeClass("header-not-visible")) : t(".page-submenu.stuck").css("transform", "translateY(" + h + "px)").removeClass("header-not-visible")))
            }
            e = o, pn.raf = requestAnimationFrame(a)
        }), 0 == pn.init && (pn.init = !0)
    }

    function gn() {
        var e = pt.scrollTop,
            a = pt.winW,
            n = 30;
        1 != $ || pt.usingMobileBrowser || (n = 0), e > n && a >= 1e3 && 0 == t("body.material-ocm-open").length && (r.is(".material") && (0 == t("#search-outer.material-open").length && t('#header-outer[data-transparent-header="true"] .bg-color-stripe').css("transition", "none"), c.length > 0 && (c.addClass("hide-up"), d.css("transform", "translateY(-" + pt.secondaryHeaderHeight + "px)"))), t('#header-outer[data-megamenu-rt="1"]').length > 0 && t('#header-outer[data-transparent-header="true"]').length > 0 && t("#header-outer .megamenu").length > 0 ? "true" == d.attr("data-transparent-header") && 0 == t("#header-outer.side-widget-open").length && 0 == t('#header-outer[data-permanent-transparent="1"]').length && 0 == t(".megamenu.sfHover:not(.width-75):not(.width-50)").length && (d.removeClass("transparent"), d.removeClass("no-transition")) : "true" == d.attr("data-transparent-header") && 0 == t("#header-outer.side-widget-open").length && 0 == t('#header-outer[data-permanent-transparent="1"]').length && d.removeClass("transparent"), t("#header-outer:not(.small-nav) header#top nav > ul > li.menu-item-with-margin").stop(!0, !0).animate({
            "margin-right": parseInt(t("header#top nav > ul > li.menu-item-with-margin").css("margin-right")) - 3 * parseInt(_) + "px"
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        }), t("#header-outer, #search-outer").addClass("small-nav"), t('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && f.length > 0 && 1 == dt && t('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
            padding: "0"
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        }), t(".nectar-box-roll").length > 0 && 0 == t('#header-outer[data-permanent-transparent="1"]').length && t("#ajax-content-wrap").animate({
            "margin-top": Math.floor(w - _ + 2 * y / 1.8 + pt.adminBarHeight + pt.secondaryHeaderHeight)
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        }), s.off("scroll.headerResizeEffect", gn), s.on("scroll.headerResizeEffect", mn), t('#header-outer[data-transparent-header="true"]').css("transition", "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out, backdrop-filter 0.25s ease"), t('#header-outer[data-transparent-header="true"] .cart-menu').css("transition", "none"), setTimeout(function() {
            t('#header-outer[data-transparent-header="true"]').css("transition", "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out, backdrop-filter 0.25s ease"), t('#header-outer[data-transparent-header="true"] .cart-menu').css("transition", "border-color 0.30s ease")
        }, 300))
    }

    function mn() {
        var e = pt.scrollTop,
            a = pt.winW,
            n = 30;
        if (r.is(".material-ocm-open")) return !1;
        1 != $ || pt.usingMobileBrowser || (n = 0), (e <= n && a >= 1e3 || t(".small-nav").length > 0 && t("#ajax-content-wrap.no-scroll").length > 0) && (t("#header-outer, #search-outer").removeClass("small-nav"), t('#header-outer[data-megamenu-rt="1"]').length > 0 && t('#header-outer[data-transparent-header="true"]').length > 0 && t("#header-outer .megamenu").length > 0 ? "true" == d.attr("data-transparent-header") && 0 == t(".nectar-box-roll").length && 0 == t(".megamenu.sfHover:not(.width-75):not(.width-50)").length && (d.addClass("transparent"), d.removeClass("no-transition")) : "true" == d.attr("data-transparent-header") && 0 == t(".nectar-box-roll").length && d.addClass("transparent"), t('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && f.length > 0 && 1 == dt && t('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
            padding: "0 28px"
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        }), t("header#top nav > ul > li.menu-item-with-margin").stop(!0, !0).animate({
            "margin-right": parseInt(t("header#top nav > ul > li.menu-item-with-margin").css("margin-right")) + 3 * parseInt(_) + "px"
        }, {
            queue: !1,
            duration: 150,
            easing: "easeOutCubic"
        }), c.length > 0 && (c.removeClass("hide-up"), d.removeClass("hide-up").css("transform", "translateY(0%)")), t(".nectar-box-roll").length > 0 && 0 == t('#header-outer[data-permanent-transparent="1"]').length && t("#ajax-content-wrap").animate({
            "margin-top": Math.floor(w + 2 * y + pt.adminBarHeight + pt.secondaryHeaderHeight)
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        }), s.off("scroll.headerResizeEffect", mn), s.on("scroll.headerResizeEffect", gn), t('#header-outer[data-transparent-header="true"]').css("transition", "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out, backdrop-filter 0.25s ease"), t('#header-outer[data-transparent-header="true"] .cart-menu').css("transition", "none"), setTimeout(function() {
            t('#header-outer[data-transparent-header="true"]').css("transition", "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out, backdrop-filter 0.25s ease"), t('#header-outer[data-transparent-header="true"] .cart-menu').css("transition", "border-color 0.30s ease")
        }, 300))
    }

    function vn() {
        t('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && !d.hasClass("within-custom-breakpoint") || pt.scrollTop > 0 && (t("body.material").length > 0 && (d.addClass("scrolled-down"), c.length > 0 && pt.winW > 1e3 && (c.addClass("hide-up"), d.css("transform", "translateY(-" + pt.secondaryHeaderHeight + "px)"))), "true" == d.attr("data-transparent-header") && 0 == t('#header-outer[data-permanent-transparent="1"]').length && d.removeClass("transparent").addClass("scrolled-down"), s.off("scroll.headerResizeEffectOpaque", vn), s.on("scroll.headerResizeEffectOpaque", bn))
    }

    function bn() {
        t('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && !d.hasClass("within-custom-breakpoint") || 0 == pt.scrollTop && 0 == t("body.material-ocm-open").length && (t('#header-outer[data-megamenu-rt="1"]').length > 0 && t('#header-outer[data-transparent-header="true"]').length > 0 && t("#header-outer .megamenu").length > 0 ? "true" == d.attr("data-transparent-header") && 0 == t(".megamenu.sfHover:not(.width-75):not(.width-50)").length ? (d.addClass("transparent").removeClass("scrolled-down"), d.removeClass("no-transition")) : "true" == d.attr("data-transparent-header") && d.removeClass("scrolled-down") : "true" == d.attr("data-transparent-header") && d.addClass("transparent").removeClass("scrolled-down"), t("body.material").length > 0 && (d.removeClass("scrolled-down"), c.length > 0 && pt.winW > 1e3 && (c.removeClass("hide-up"), d.removeClass("hide-up").css("transform", "translateY(0%)"))), s.off("scroll.headerResizeEffectOpaque", bn), s.on("scroll.headerResizeEffectOpaque", vn))
    }

    function wn() {
        1 != gt.materialOffCanvasOpen ? (pt.scrollTop > 5 ? "scrolled" != gt.mobileHeader && (0 == gt.permanentTransHeader && d.removeClass("transparent"), pt.secondaryHeaderHeight > 0 ? (c.addClass("hide-up"), d.css("transform", "translateY(-" + pt.secondaryHeaderHeight + "px)").addClass("hidden-secondary")) : d.removeClass("hidden-secondary"), d.addClass("scrolled-down"), gt.mobileHeader = "scrolled") : "at-top" != gt.mobileHeader && ("true" == d.attr("data-transparent-header") && d.addClass("transparent"), pt.secondaryHeaderHeight > 0 && (c.removeClass("hide-up"), d.css("transform", "translateY(0px)")), d.removeClass("hidden-secondary").removeClass("scrolled-down"), gt.mobileHeader = "at-top"), pt.winW < 1e3 && requestAnimationFrame(wn)) : requestAnimationFrame(wn)
    }

    function yn() {
        pt.winW > 999 || (gt.mobileHeader = "", s.off("scroll.headerResizeEffect"), s.off("scroll.headerResizeEffectOpaque"), "1" == I && 0 == t('#header-outer[data-remove-fixed="1"]').length ? t('#header-outer[data-mobile-fixed="1"]').length > 0 ? (t(".nectar-box-roll").length > 0 && d.addClass("at-top-before-box"), cancelAnimationFrame(pn.raf), fn()) : (cancelAnimationFrame(pn.raf), d.removeClass("scrolled-down").removeClass("detached").removeClass("invisible").removeClass("at-top").css("transform", "none")) : t('#header-outer[data-mobile-fixed="1"]').length > 0 ? requestAnimationFrame(wn) : "true" == d.attr("data-transparent-header") && d.addClass("transparent"), s.off("smartresize.nectarNavScrollEffects"), s.on("smartresize.nectarNavScrollEffects", _n))
    }

    function _n() {
        pt.winW < 1e3 || (1 == k && "1" != I ? (s.off("scroll.headerResizeEffect"), 0 == t("#nectar_fullscreen_rows").length ? s.on("scroll.headerResizeEffect", gn) : t('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && pt.usingMobileBrowser && s.on("scroll.headerResizeEffect", gn)) : "1" != I ? (s.off("scroll.headerResizeEffectOpaque"), s.on("scroll.headerResizeEffectOpaque", vn)) : "1" == I && (t(".nectar-box-roll").length > 0 && d.addClass("at-top-before-box"), 0 == t('#header-outer[data-remove-fixed="1"]').length && (cancelAnimationFrame(pn.raf), fn())), t('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && (c.length > 0 && d.css("transform", ""), pt.scrollTop > 200 && !d.hasClass("fixed-menu") && d.addClass("fixed-menu")), s.off("smartresize.nectarNavScrollEffects"), s.on("smartresize.nectarNavScrollEffects", yn))
    }

    function Cn() {
        if (t(".mobile").length > 0) pt.winH < pt.winW && pt.winW > 1e3 ? 0 == t("#header-outer.small-nav").length && t("#header-space").css("height", d.outerHeight()).addClass("calculated") : t("#header-space").css("height", d.outerHeight()).addClass("calculated");
        else if (0 == t(".nectar-parallax-scene.first-section").length) {
            var e = y - y / 1.8,
                a = t('#header-outer[data-header-resize="1"]').length > 0 && t(".small-nav").length > 0 ? d.outerHeight() + (parseInt(_) + 2 * e) : d.outerHeight();
            Math.abs(a - t("#header-space").height()) > 7 && t("#header-space").css("height", a).addClass("calculated")
        }
    }

    function xn() {
        var e = -1,
            a = pt.scrollTop;

        function n() {
            if (!r.hasClass("compose-mode")) {
                if (a = pt.scrollTop, e == a) return requestAnimationFrame(n), !1;
                e = a, i(), requestAnimationFrame(n)
            }
        }

        function i() {
            var e = 0;
            if (pt.winW < 1e3 || 1 == C && "none" == t("#header-outer .span_9").css("display") || 1 == C && "none" == t("#header-outer .span_9 > nav").css("display")) {
                e = 0;
                var n = "fixed" == u.css("position") ? u.height() : 0;
                (e += pt.adminBarHeight) - a > n ? d.css("top", e - a + "px") : d.css("top", n)
            } else 0 == C && (e = 0, d.is('[data-remove-fixed="1"]') || (e += pt.adminBarHeight), d.css("top", e + "px"))
        }
        t('#header-outer[data-mobile-fixed="1"]').length > 0 && u.length > 0 && (0 == t("#nectar_fullscreen_rows").length ? requestAnimationFrame(n) : t("#nectar_fullscreen_rows").length > 0 && pt.usingMobileBrowser && requestAnimationFrame(n), s.on("smartresize", i))
    }

    function kn() {
        var e = 0,
            a = 0;
        if (d.is("[data-logo-height]") && d.is("[data-padding]") ? d.hasClass("transparent") || (e = "centered-menu-bottom-bar" == d.attr("data-format") && pt.winW > 1e3 ? d.outerHeight() : d.find("#logo.no-image").length > 0 ? "left-header" == T && pt.winW > 1e3 ? 0 : parseInt(d.find("#logo.no-image").height()) + parseInt(2 * d.attr("data-padding")) : "left-header" == T && pt.winW > 1e3 ? 0 : parseInt(d.attr("data-logo-height")) + parseInt(2 * d.attr("data-padding"))) : e = "left-header" == T && pt.winW > 1e3 ? 0 : d.outerHeight(), g.length > 0 && (a += g.height()), t(".page-header-no-bg").length > 0 && (a += t(".page-header-no-bg").height()), pt.winH - pt.adminBarHeight - e - pt.footerOuterHeight - 1 - a > 0) {
            var n = t('body:not(.material) #header-outer[data-header-resize="1"]').length > 0 ? 55 : 0;
            t('body[data-footer-reveal="1"]:not(.nectar_using_pfsr) .container-wrap').css({
                "margin-bottom": pt.footerOuterHeight
            }), t(".container-wrap").css({
                "min-height": pt.winH - pt.adminBarHeight - e - pt.footerOuterHeight - a + n
            })
        } else t('body[data-footer-reveal="1"]:not(.nectar_using_pfsr) .container-wrap').css({
            "margin-bottom": pt.footerOuterHeight
        });
        pt.winW < 1e3 ? m.attr("data-midnight", "light") : m.removeAttr("data-midnight")
    }

    function $n() {
        (t('body[data-footer-reveal="1"]').length > 0 || t('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) && (setTimeout(kn, 60), kn(), s.on("resize", kn), t('body[data-footer-reveal="1"][data-footer-reveal-shadow="large_2"]').length > 0 && t(".container-wrap").css({
            boxShadow: "0 70px 110px -30px " + m.css("backgroundColor")
        }))
    }

    function Tn(t) {
        this.$el = t, this.offsetTop = 0, this.fullHeight = 100, this.storedWinH = pt.winH, this.events(), this.calculate()
    }

    function In() {
        rt = [], t(".vc_row-o-full-height").each(function(e) {
            rt[e] = new Tn(t(this))
        })
    }

    function En() {
        var a = e.navigator.userAgent.indexOf("MSIE ");
        (a > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && t(".vc_row-o-full-height").each(function() {
            "flex" === t(this).find("> .span_12").css("display") && t(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
        }), (a > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && (On(), t(e).on("resize", On))
    }

    function On() {
        t(".img-with-aniamtion-wrap img.img-with-animation").each(function() {
            if (0 == t(this).parents(".tabbed").length && 0 == t(this).parents(".toggle").length) {
                var e = t(this).parents(".img-with-aniamtion-wrap");
                e.css({
                    height: ""
                });
                var a = t(this).height();
                e.css({
                    height: a
                })
            }
        })
    }

    function zn() {
        t(".nectar-recent-posts-slider").each(function() {
            var e = parseInt(t(this).attr("data-height")),
                a = t('body[data-ext-responsive="true"]').length > 0 ? s.width() / 1400 : s.width() / 1100,
                n = t(this).find(".nectar-recent-post-slide, .flickity-viewport");
            if (pt.winW > 1e3 && 0 == t("#boxed").length) 0 == t(this).parents(".full-width-content").length ? t('body[data-ext-responsive="true"]').length > 0 && pt.winW >= 1400 ? n.css("height", Math.ceil(e)) : 0 == t('body[data-ext-responsive="true"]').length && pt.winW >= 1100 ? n.css("height", Math.ceil(e)) : n.css("height", Math.ceil(e * a)) : n.css("height", Math.ceil(e * a));
            else {
                var i = t(this).parents(".wpb_column").length > 0 ? t(this).parents(".wpb_column") : t(this).parents(".col");
                if (0 == i.length && (i = t(".main-content")), i.hasClass("vc_span12") || i.hasClass("main-content") || i.hasClass("span_12") || i.hasClass("vc_col-sm-12")) e * a <= 250 ? n.css("height", 250) : n.css("height", Math.ceil(e * a));
                else {
                    var r = e / function(e) {
                        var a = 1100,
                            n = t(e).attr("class").match(/\d+/);
                        "2" == n ? a = 170 : "3" == n ? a = 260 : "4" == n ? a = 340 : "6" == n ? a = 530 : "8" == n ? a = 700 : "9" == n ? a = 805 : "10" == n ? a = 916.3 : "12" == n && (a = 1100);
                        return a
                    }(i);
                    r * i.width() <= 250 ? n.css("height", 250) : n.css("height", r * i.width())
                }
            }
        })
    }

    function Hn() {
        t(".nectar-recent-posts-single_featured.multiple_featured").each(function() {
            var e = t(this).find(".project-slides").length > 0 ? ".project-slide" : ".nectar-recent-post-slide",
                a = t(this).find(".project-slides").length > 0 ? ".project-info h1" : ".inner-wrap .large-featured-post-title a";
            t(this).find(e).each(function() {
                t(this).find(a).each(function() {
                    var e = t(this).text();
                    e = (e = e.trim()).split(" "), t(this)[0].innerHTML = "";
                    for (var a = 0; a < e.length; a++) t(this)[0].innerHTML += "<span>" + e[a] + "</span> "
                }), t(this).find(a + " > span").wrapInner('<span class="inner" />')
            })
        })
    }

    function Sn(e, a) {
        e.find(".nectar-split-heading > * > span").each(function(e) {
            var a = t(this).find("> .inner");
            setTimeout(function() {
                a[0].style.transform = "translateY(0em)", a[0].style.opacity = "1"
            }, 40 * e)
        });
        var n = 40 * e.find(".nectar-split-heading > * > span").length;
        setTimeout(function() {
            a()
        }, n + 1400)
    }

    function An(e) {
        e.find(".nectar-split-heading").each(function(e) {
            var a = t(this).text();
            t(this).addClass("effect-removed"), t(this)[0].innerHTML = a
        })
    }

    function Mn(e) {
        var a = e.hasClass("animated-in") ? " animated" : "";
        e.find("> *").each(function() {
            var e = t(this).text();
            e = (e = e.trim()).split(" "), t(this)[0].innerHTML = "";
            for (var n = 0; n < e.length; n++) t(this)[0].innerHTML += '<span><span class="inner' + a + '">' + e[n] + "</span></span> "
        }), e.addClass("markup-generated")
    }

    function Wn() {
        (t('.nectar-split-heading[data-animation-type="line-reveal-by-space"]').length > 0 || t('.nectar-split-heading[data-animation-type="letter-fade-reveal"]').length > 0) && (t('.nectar-split-heading[data-animation-type="line-reveal-by-space"]:not([data-text-effect="none"])').each(function() {
            Mn(t(this))
        }), t('.nectar-split-heading[data-animation-type="line-reveal-by-space"][data-text-effect*="letter-reveal"]').each(function() {
            if (t(this).is('[data-m-rm-animation="true"]') && pt.winW < 1e3) return !0;
            var e = t(this).hasClass("animated-in") ? ' style="transform: none;"' : "";
            t(this).find("> *").each(function() {
                var e = t(this).text();
                e = (e = e.trim()).split(" "), t(this)[0].innerHTML = "";
                for (var a = 0; a < e.length; a++) t(this)[0].innerHTML += "<span>" + e[a] + "</span> "
            }), t(this).find("span").each(function() {
                var a = t(this),
                    n = t(this).text().split("");
                a.empty(), t.each(n, function(t, n) {
                    a.append('<span class="inner"' + e + ">" + n + "</span>")
                })
            }), t(this).addClass("markup-generated")
        }))
    }

    function Bn() {
        if (t(".nectar-recent-posts-slider-inner").length > 0) {
            var e = t(".nectar-recent-posts-slider_multiple_visible").length > 0 && "90%",
                a = t(".nectar-recent-posts-slider-inner").flickity({
                    contain: !0,
                    groupCells: e,
                    draggable: !0,
                    lazyLoad: !1,
                    imagesLoaded: !0,
                    percentPosition: !0,
                    prevNextButtons: !1,
                    pageDots: !0,
                    resize: !0,
                    setGallerySize: !0,
                    wrapAround: !0,
                    dragThreshold: pt.usingMobileBrowser ? 25 : 3,
                    accessibility: !1
                });
            setTimeout(function() {
                t(".nectar-recent-posts-slider-inner").addClass("loaded")
            }, 1150);
            var n;
            a.data("flickity");
            a.on("dragStart.flickity", function() {
                t(".flickity-viewport").addClass("is-moving")
            }), a.on("dragEnd.flickity", function() {
                t(".flickity-viewport").removeClass("is-moving")
            }), a.on("select.flickity", function() {
                t(".flickity-viewport").addClass("no-hover"), clearTimeout(n), n = setTimeout(function() {
                    t(".flickity-viewport").removeClass("no-hover")
                }, 400)
            }), zn(), s.on("resize", zn), pt.usingMobileBrowser || pt.usingFrontEndEditor || s.on("resize", Ln)
        }
        t(".nectar-recent-posts-single_featured.multiple_featured").each(function(e) {
            t(this).find("> .normal-container").length > 0 && t(this).find("> .normal-container").remove(), t(this).append('<div class="normal-container container"> <ul class="controls" data-color="' + t(this).attr("data-button-color") + '" data-num="' + t(this).find(".nectar-recent-post-slide").length + '"></ul> </div>');
            var a, n = t(this),
                i = 0;
            B[e] = {
                autorotate: ""
            }, t(this).find(".nectar-recent-post-slide").each(function(e) {
                t(this).find(".recent-post-container").height() > i && (t(this).siblings().removeClass("tallest"), t(this).addClass("tallest"), i = t(this).find(".recent-post-container").height());
                var a = 0 == e && t(this).parents('.nectar-recent-posts-single_featured.multiple_featured[data-autorotate="none"]').length > 0 ? 'class="active"' : "";
                n.find(".controls").append("<li " + a + '><span class="title">' + t(this).find(".large-featured-post-title").text() + "</span></li>")
            }), t(this).addClass("js-loaded"), t(this).find(".controls li").on("click", function(n) {
                if (!t(this).hasClass("active")) {
                    void 0 !== n.originalEvent && t(this).parent().find(".active").addClass("trans-out");
                    var i = t(this).index(),
                        s = t(this).parent().find(".active").index(),
                        r = t(this);
                    clearTimeout(a), t(this).siblings().removeClass("active"), t(this).addClass("active"), a = setTimeout(function() {
                        r.parents(".multiple_featured").find(".nectar-recent-post-slide:not(:eq(" + i + "))").css("opacity", "0").removeClass("active"), r.parent().find(".trans-out").removeClass("trans-out")
                    }, 300), r.parents(".multiple_featured").find(".nectar-recent-post-slide:not(:eq(" + i + "))").css("z-index", "10"), r.parents(".multiple_featured").find(".nectar-recent-post-slide:eq(" + s + ")").css("z-index", "15"), t(this).parents(".multiple_featured").find(".nectar-recent-post-slide").eq(i).css({
                        opacity: "1",
                        "z-index": "20"
                    }).addClass("active"), "none" != t(this).parents(".multiple_featured").attr("data-autorotate") && function(t, e) {
                        if (clearInterval(B[e].autorotate), t.attr("data-autorotate").length > 0) {
                            var a = parseInt(t.attr("data-autorotate")) < 100 ? 4e3 : parseInt(t.attr("data-autorotate"));
                            B[e].autorotate = setInterval(function() {
                                Vn(t)
                            }, a)
                        }
                    }(r.parents(".nectar-recent-posts-single_featured.multiple_featured"), e)
                }
            }), n = t(this), t(this).attr("data-autorotate").length > 0 && "none" != t(this).attr("data-autorotate") && 0 == t("body.vc_editor").length && setTimeout(function() {
                var t = parseInt(n.attr("data-autorotate")) < 100 ? 4e3 : parseInt(n.attr("data-autorotate"));
                B[e].autorotate = setInterval(function() {
                    Vn(n)
                }, t), n.find(".controls > li:first-child").addClass("active")
            }, 30)
        }), Hn(), s.on("resize", Hn)
    }

    function Fn() {
        t(".nectar-recent-posts-slider").each(function() {
            var e = parseInt(t(this).find(".flickity-slider").position().left),
                a = t(this).find(".nectar-recent-post-slide"),
                n = a.length,
                i = a.width(),
                s = t(this).find(".nectar-recent-post-slide:last-child").index(),
                r = t(this).find(".nectar-recent-post-slide:first-child .nectar-recent-post-bg"),
                o = t(this).find(".nectar-recent-post-slide:last-child .nectar-recent-post-bg");
            e >= -3 ? o.css("margin-left", parseInt(Math.ceil(i / 3.5)) + "px") : o.css("margin-left", "-" + parseInt(Math.ceil(i / 3.5 * s)) + "px"), Math.abs(e) >= (n - 1) * i ? r.css("margin-left", "-" + parseInt(Math.ceil(i / 3.5 * n)) + "px") : r.css("margin-left", "0px"), t(this).find(".nectar-recent-post-bg").css("transform", "translateX(" + Math.ceil(t(this).find(".flickity-slider").position().left / -3.5) + "px)")
        }), requestAnimationFrame(Fn)
    }

    function Ln() {
        t(".nectar-recent-posts-slider").each(function() {
            var e = t(this).find(".nectar-recent-post-slide").width();
            t(this).find(".nectar-recent-post-slide").each(function(a) {
                t(this).find(".nectar-recent-post-bg").css("margin-left", "-" + parseInt(Math.ceil(e / 3.5) * a) + "px")
            })
        })
    }

    function qn() {
        t().flickity ? Bn() : setTimeout(function() {
            Bn()
        }, 200), t('.blog-recent[data-style="classic_enhanced_alt"] .inner-wrap').each(function() {
            t(this).find(".post-featured-img").each(function() {
                var e = t(this).find("img").attr("src");
                t(this).css("background-image", "url(" + e + ")")
            })
        }), t('.blog-recent[data-style="classic_enhanced"]').each(function() {
            0 == t(this).find(".inner-wrap.has-post-thumbnail").length && t(this).addClass("no-thumbs")
        }), pt.usingMobileBrowser || t(".nectar-recent-posts-slider").length > 0 && !pt.usingFrontEndEditor && e.requestAnimationFrame(Fn), pt.usingMobileBrowser || pt.usingFrontEndEditor || Ln()
    }

    function jn() {
        t(".style-5").each(function() {
            t(this).find(".sizer").insertBefore(t(this).find(".parallaxImg"))
        }), t(".style-5").parents(".wpb_row").css("z-index", "100");
        var n = a,
            i = (n.getElementsByTagName("body")[0], e),
            s = n.querySelectorAll(".parallaxImg"),
            o = s.length,
            l = "ontouchstart" in i || navigator.msMaxTouchPoints,
            d = !1;
        if (!(o <= 0)) {
            for (var c = 0; c < o; c++) {
                var h = s[c],
                    u = h.querySelectorAll(".parallaxImg-layer"),
                    p = u.length;
                if (!(p <= 0)) {
                    for (; h.firstChild;) h.removeChild(h.firstChild);
                    var f = 0,
                        g = 80;
                    navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge/") < 1 ? (g = 1, t("html").addClass("cssreflections")) : r.addClass("cssreflections");
                    var m = n.createElement("div"),
                        v = n.createElement("div"),
                        b = n.createElement("div"),
                        w = n.createElement("div"),
                        y = [];
                    h.id = "parallaxImg__" + c, m.className = "parallaxImg-container", b.className = "parallaxImg-shadow", w.className = "parallaxImg-layers";
                    for (var _ = 0; _ < p; _++) {
                        var C = n.createElement("div"),
                            x = n.createElement("div"),
                            k = u[_].getAttribute("data-img");
                        t(C).html(t(u[_]).html()), C.className = "parallaxImg-rendered-layer", C.setAttribute("data-layer", _), 0 == _ && 0 == t(h).parents(".wpb_gallery").length && (x.className = "bg-img", t(h).parents(".nectar-fancy-box").length > 0 ? (x.setAttribute("data-nectar-img-src", k), d = !0) : x.style.backgroundImage = "url(" + k + ")", C.appendChild(x)), w.appendChild(C), y.push(C)
                    }
                    m.appendChild(w), h.appendChild(m), t(h).wrap('<div class="parallaxImg-wrap" />'), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") || t(h).parent().append(b), l && t("body.using-mobile-browser").length > 0 || function(a, n, i, s) {
                            t(h).parents(".style-5").on("mousemove", function(r) {
                                var o = t(this),
                                    l = o.find(".parallaxImg-container"),
                                    d = o.find(".parallaxImg-shadow"),
                                    c = Date.now(),
                                    h = t(a).parents(".wpb_gallery").length > 0;
                                c > f + g && (f = c, e.requestAnimationFrame(function() {
                                    $(r, !1, a, n, i, s, o, l, d, h)
                                }))
                            }), t(h).parents(".style-5").on("mouseenter", function(t) {
                                T(t, a)
                            }), t(h).parents(".style-5").on("mouseleave", function(t) {
                                I(t, a)
                            })
                        }(h, y, p, v),
                        function(t, a, n, i) {
                            E(!1, t, a, n), e.addEventListener("resize", function() {
                                E(!1, t, a, n)
                            })
                        }(h, y, p)
                }
            }
            d && sa()
        }

        function $(e, a, n, i, s, r, o, l, d, c) {
            if (!t(n.firstChild).hasClass("over")) return I(e, n), !1;
            var h = .03,
                u = .063,
                p = "1.03",
                f = "-10",
                g = !1;
            t(n).parents(".col.wide").length > 0 ? (h = .03, u = .063, g = !0) : t(n).parents(".col.regular").length > 0 || t(n).parents(".wpb_gallery").length > 0 ? (h = .045, u = .045) : t(n).parents(".col.tall").length > 0 ? (h = .05, u = .015, g = !0) : t(n).parents(".col.wide_tall").length > 0 ? (h = .04, u = .04, g = !0) : o.hasClass("nectar-fancy-box") ? (h = .045, u = .022, p = "1.06", f = "-2") : (h = .045, u = .075);
            var m, v = pt.scrollTop,
                b = a ? e.touches[0].pageX : e.pageX,
                w = a ? e.touches[0].pageY : e.pageY,
                y = n.getBoundingClientRect(),
                _ = n.clientWidth || n.offsetWidth || n.scrollWidth,
                C = n.clientHeight || n.offsetHeight || n.scrollHeight,
                x = 320 / _,
                k = .52 - (b - y.left - 0) / _,
                $ = .52 - (w - y.top - v) / C,
                T = w - y.top - v - C / 2,
                E = h * x * (k - (b - y.left - 0 - _ / 2)),
                O = u * x * (T - $);
            m = 1 == c ? " perspective(" + 3 * _ + "px) rotateX(" + 1.9 * -O + "deg) rotateY(" + 1.3 * -E + "deg)" : 0 == g ? " perspective(" + 3 * _ + "px) rotateX(" + O + "deg) rotateY(" + E + "deg)  translateY(" + $ * f + "px) translateX(" + k * f + "px) scale(" + p + ")" : " perspective(" + 3 * _ + "px) rotateX(" + O + "deg) rotateY(" + E + "deg)  translateY(" + -10 * $ + "px) translateX(" + -10 * k + "px) scale(1.013)", l.css("transform", m), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") || d.css("transform", m)
        }

        function T(e, a) {
            a.firstChild.className += " over", a.className += " over", t(a).addClass("transition"), t(a).parents(".wpb_gallery").length > 0 ? setTimeout(function() {
                t(a).removeClass("transition")
            }, 450) : setTimeout(function() {
                t(a).removeClass("transition")
            }, 200)
        }

        function I(e, a) {
            var n = a.clientWidth || a.offsetWidth || a.scrollWidth,
                i = a.firstChild;
            i.className = i.className.replace(" over", ""), a.className = a.className.replace(" over", ""), t(i).css("transform", "perspective(" + 3 * n + "px) rotateX(0deg) rotateY(0deg) translateZ(0)"), t(a).parents(".parallaxImg-wrap").find(".parallaxImg-shadow").css("transform", "perspective(" + 3 * n + "px) rotateX(0deg) rotateY(0deg) translateZ(0)"), t(a).addClass("transition"), setTimeout(function() {
                t(a).removeClass("transition")
            }, 200)
        }

        function E(e, a, n, i) {
            for (var s = a.clientWidth || a.offsetWidth || a.scrollWidth, r = a.firstChild, o = 0; o < i; o++) 0 == o ? t(n[o]).css("transform", "translateZ(0px)") : t(n[o]).css("transform", "translateZ(" + 3 * s / 27 * (1.1 * o) + "px) ");
            i += 3, t(r).css("transform", "perspective(" + 3 * s + "px)")
        }
    }

    function Pn() {
        if (0 == t('.nectar-fancy-box[data-style="hover_desc"]').length) return !1;
        var e = 0;
        t("body").on("mouseenter touchstart", '.nectar-fancy-box[data-style="hover_desc"]', function() {
            e = parseInt(t(this).find(".hover-content").outerHeight(!0)), t(this).addClass("hovered"), t(this).find(".heading-wrap").css("transform", "translateY(-" + e + "px)")
        }), t("body").on("mouseleave touchend", '.nectar-fancy-box[data-style="hover_desc"]', function() {
            t(this).removeClass("hovered"), t(this).find(".heading-wrap").css("transform", "translateY(0)")
        })
    }

    function Yn(t, e) {
        this.$el = t, this.$iconEl = this.$el.find(e), this.$innerIconEl = this.$el.find(".inner"), this.initialX = this.$el.width() / 2, this.initialY = this.$el.height() / 2, this.elX = 0, this.elY = 0, this.lastScroll = 0, this.scrollAdjust = 0, this.lastX = this.initialX, this.lastY = this.initialY, this.lastY2 = this.initialY, this.innerLastX = 0, this.innerLastY = 0, this.activeFollow = !1, this.hoverOnly = !1, this.percentage = .03, this.percentageInterval, this.exitTimeout, this.$iconEl.css({
            top: "0",
            left: "0"
        }), s.on("resize", this.resizeEvent.bind(this)), this.mouseEvents(), this.rafLoop()
    }

    function Rn() {
        if (P = [], r.on("mouseenter", '.nectar_video_lightbox[data-parent-hover="1"]', function() {
                var e = t(this).parents(".wpb_row");
                e.find("> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner").addClass("transition"), e.find("> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner").css({
                    transform: "scale(1.08)"
                })
            }), r.on("mouseleave", '.nectar_video_lightbox[data-parent-hover="1"]', function() {
                t(this).parents(".wpb_row").find("> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner").css({
                    transform: "scale(1)"
                })
            }), t(".nectar_video_player_self_hosted").each(function(e) {
                !pt.usingMobileBrowser && t(this).find(".play_button.follow_mouse").length > 0 && (P[e] = new Yn(t(this), ".play_button.follow_mouse .play"))
            }), "IntersectionObserver" in e) {
            var n = new IntersectionObserver(function(t) {
                t.forEach(function(t) {
                    if (t.isIntersecting) {
                        var e = t.target,
                            a = 200;
                        e.readyState > 1 && (a = 20), setTimeout(function() {
                            e.pause(), e.currentTime = 0, e.play()
                        }, a), n.unobserve(t.target)
                    }
                })
            }, {
                root: jt() ? null : a,
                rootMargin: "-10% 0% -10% 0%",
                threshold: 0
            });
            t("video.scroll-triggered-play").each(function() {
                n.observe(t(this)[0])
            })
        }
        t(".nectar-video-box").each(function(e) {
            if (t(this).find(".play_button_mouse_follow").length > 0) {
                var a = t(this);
                t(this).imagesLoaded(function() {
                    pt.usingMobileBrowser || (P[e] = new Yn(a, ".play_button_mouse_follow"));
                    var t = a.is("[data-mouse-icon-color]") && a.attr("data-mouse-icon-color").length > 0 ? a.attr("data-mouse-icon-color") : "#000";
                    a.is('[data-mouse-style="solid_color"]') && a.find(".play_button_mouse_follow").css({
                        "background-color": t
                    }), a.find(".play_button_mouse_follow").addClass("visible")
                })
            }
        })
    }

    function Vn(e) {
        if (!(t("body.vc_editor").length > 0)) {
            var a = e.find(".project-slides").length > 0 ? ".dot-nav > span" : ".controls > li",
                n = e.find(".project-slides").length > 0 ? "span" : " li",
                i = e.find(a).length;
            e.find(a + ".active").index() + 1 == i ? e.find(a + ":first-child").trigger("click") : e.find(a + ".active").next(n).trigger("click")
        }
    }

    function Xn() {
        D = [], "undefined" != typeof SalientRecentProjectsFullScreen && t(".nectar_fullscreen_zoom_recent_projects").each(function(e) {
            D[e] = new SalientRecentProjectsFullScreen(t(this))
        })
    }

    function Nn() {
        t(".infinite_scroll").length > 0 && (t(".portfolio-items.infinite_scroll").infinitescroll({
            navSelector: "#pagination",
            nextSelector: "#pagination a:first",
            itemSelector: ".portfolio-items.infinite_scroll .element",
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            msgText: " "
        }, function(e) {
            var a = t(".portfolio-items.infinite_scroll:not(.carousel)");
            t(e).css("opacity", 0).imagesLoaded(function() {
                var n;
                (t(e).css("opacity", 1), a.isotope("appended", t(e)), t(e).find(".work-item").addClass("ajax-loaded"), t(e).addClass("ajax-loaded"), t(e).find(".work-meta, .nectar-love-wrap").css({
                    opacity: 1
                }), t(".portfolio-filters-inline").length > 0 || t(".portfolio-filters").length > 0) && (n = t(".portfolio-filters-inline").length > 0 ? t(".portfolio-filters-inline a.active").attr("data-filter") : t(".portfolio-filters a.active").attr("data-filter"), t(".portfolio-filters-inline a.active").attr("data-filter"), a.isotope({
                    filter: n
                }));
                for (var i = 0; i < M.length; i++) M[i].reLayout();
                if (t(e).find(".work-item.style-5").length > 0 && jn(), "none" == t(e).find(".inner-wrap").attr("data-animation")) t(".portfolio-items .col .inner-wrap").removeClass("animated");
                else {
                    for (i = 0; i < M.length; i++) M[i].masonryZindex(), M[i].portfolioAccentColor();
                    t(e).each(function() {
                        var e = t("#nectar_fullscreen_rows").length > 0 ? "200%" : "90%",
                            a = t(this),
                            n = new Waypoint({
                                element: a[0],
                                handler: function() {
                                    var t = a.is('[data-masonry-type="photography"].masonry-items') ? 85 : 115;
                                    setTimeout(function() {
                                        a.addClass("animated-in")
                                    }, t * a.attr("data-delay-amount")), n.destroy()
                                },
                                offset: e
                            })
                    })
                }
                t(".portfolio-items").each(function() {
                    var e = Zt();
                    t(this).find('a[rel^="prettyPhoto"], a.pretty_photo').attr("rel", "prettyPhoto[" + e + "_gal]").removeClass("pretty_photo")
                }), t(".portfolio-items").each(function() {
                    var e = Zt();
                    t(this).find('a[data-fancybox^="group_"]').attr("data-fancybox", "group_" + e)
                }), re(), setTimeout(function() {
                    for (var a = 0; a < M.length; a++) M[a].masonryZindex(), M[a].reLayout(), M[a].isotopeCatSelection();
                    t(e).removeClass("ajax-loaded")
                }, 700), Fe()
            })
        }), t(".post-area.infinite_scroll .posts-container").infinitescroll({
            navSelector: "#pagination",
            nextSelector: "#pagination a:first",
            itemSelector: ".post-area.infinite_scroll .posts-container .post",
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            msgText: " "
        }, function(e) {
            t(e).find("[data-nectar-img-src]").length > 0 && sa(), t(".masonry.classic").length > 0 || t(".post-area:not(.masonry):not(.featured_img_left)").length > 0 || t(".post-area.standard-minimal").length > 0 ? (wt(), t().mediaelementplayer && t(e).find(".wp-audio-shortcode, .wp-video-shortcode").mediaelementplayer(), re(), t(".carousel").length > 0 && (Ht(), Ft()), tn(), t(".testimonial_slider").animate({
                opacity: "1"
            }, 800), ga(), ma(), setTimeout(function() {
                Ca(), xa(), s.trigger("resize")
            }, 500), Fe(), s.trigger("resize")) : (Fe(), s.trigger("resize"));
            var a = t(".infinite_scroll .posts-container");
            a.parent().hasClass("masonry") && t(e).addClass("masonry-blog-item");
            var n = t(e);
            if (0 == n.find("img").length) n = t("body");
            else if (jt()) {
                Array.from(n.find("img[srcset]")).forEach(function(t) {
                    var e = t.getAttribute("srcset");
                    t.setAttribute("srcset", ""), t.setAttribute("srcset", e)
                })
            }
            n.imagesLoaded(function() {
                a.parent().hasClass("masonry") && !a.parent().hasClass("auto_meta_overlaid_spaced") && a.isotope("appended", t(e));
                for (var n = 0; n < J.length; n++) J[n].flickityBlogInit();
                if (t(e).addClass("ajax-loaded"), a.parent().hasClass("classic_enhanced") && (a.find(".large_featured.has-post-thumbnail.ajax-loaded .post-featured-img, .wide_tall.has-post-thumbnail.ajax-loaded .post-featured-img").each(function() {
                        var e = t(this).find("img").attr("src");
                        t(this).css("background-image", "url(" + e + ")")
                    }), a.find(".large_featured.ajax-loaded .nectar-flickity, .wide_tall.ajax-loaded .nectar-flickity").each(function() {
                        t(this).find(".cell").each(function() {
                            var e = t(this).find("img").attr("src");
                            t(this).css("background-image", "url(" + e + ")")
                        })
                    })), "none" == t(e).parents(".posts-container").attr("data-animation")) t(e).find(".inner-wrap").removeClass("animated");
                else {
                    for (n = 0; n < J.length; n++) J[n].blogMasonryZindex();
                    t(e).each(function() {
                        var e = t(this),
                            a = new Waypoint({
                                element: e[0],
                                handler: function() {
                                    setTimeout(function() {
                                        e.addClass("animated-in")
                                    }, 80 * e.attr("data-delay-amount")), a.destroy()
                                },
                                offset: "90%"
                            })
                    })
                }
                setTimeout(function() {
                    t(e).removeClass("ajax-loaded")
                }, 700)
            })
        }))
    }

    function Dn() {
        pt.scrollTop > 350 && !o.is(".fullscreen.open") && (t("#to-top").stop().transition({
            transform: "translateY(-50%)"
        }, 350, "easeInOutCubic"), s.off("scroll", Dn), s.on("scroll", Qn))
    }

    function Qn() {
        if (pt.scrollTop < 350 || o.is(".fullscreen.open")) {
            var e = t("#slide-out-widget-area.fullscreen.open").length > 0 ? 1150 : 350;
            t("#to-top").stop().transition({
                transform: "translateY(105%)"
            }, e, "easeInOutQuint"), s.off("scroll", Qn), s.on("scroll", Dn)
        }
    }

    function Zn() {
        if (0 == t(".nectar-social.fixed").length && (t("#to-top").length > 0 && pt.winW > 1020 || t("#to-top").length > 0 && t("#to-top.mobile-enabled").length > 0) && (pt.scrollTop > 350 ? s.on("scroll", Qn) : s.on("scroll", Dn)), t('body[data-button-style*="rounded"]').length > 0) {
            var e = t("#to-top .fa-angle-up").clone();
            e.addClass("top-icon"), t("#to-top").prepend(e)
        }
        r.on("click", '#to-top, a[href="#top"]', function() {
            return t("body,html").stop().animate({
                scrollTop: 0
            }, 800, "easeOutQuad", function() {
                t(".nectar-box-roll").length > 0 && r.trigger("mousewheel", [1, 0, 0])
            }), !1
        })
    }

    function Gn() {
        var a = t('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 0 : d.outerHeight();
        (t(".page-template-template-no-header-footer").length > 0 || t(".page-template-template-no-header").length > 0) && (a = 0);
        var n = !1;
        t('header#top .sf-menu li a[href="#"]').on("click", function(t) {
            t.preventDefault()
        }), 0 == t("#nectar_fullscreen_rows").length || 0 == ut.$usingFullScreenRows ? t("a.nectar-next-section").each(function() {
            if (t(this).parents(".wpb_row:not(.inner_row)").length > 0) {
                var e = t(this).parents(".wpb_row:not(.inner_row)");
                if (e.next(".wpb_row[id]:not(.inner_row)").length > 0) {
                    var a = e.next(".wpb_row[id]:not(.inner_row)").attr("id");
                    t(this).attr("href", "#" + a), n = !0
                }
            }
        }) : t().fullpage && t("a.nectar-next-section").on("click", function() {
            return t.fn.fullpage.moveSectionDown(), !1
        }), t("#slide-out-widget-area .off-canvas-menu-container").length > 0 && t("#slide-out-widget-area .off-canvas-menu-container").find("a[href*='" + location.pathname + "']").each(function() {
            var e = t(this).attr("href");
            "#" != e && -1 != e.indexOf("#") && "#" !== e.substr(e.indexOf("#")) && t("div" + e.substr(e.indexOf("#"))).length > 0 && (t(this).attr("href", e.substr(e.indexOf("#"))), t(this).parent().removeClass("current_page_item").removeClass("current-menu-item")), t('div[data-fullscreen-anchor-id="' + e.substr(e.indexOf("#") + 1) + '"]').length > 0 && t(this).parent().removeClass("current_page_item").removeClass("current-menu-item")
        }), t("#header-outer").find("a[href*='" + location.pathname + "']").each(function() {
            var e = t(this).attr("href"); - 1 != e.indexOf("#") && "#" !== e.substr(e.indexOf("#")) && t("div" + e.substr(e.indexOf("#"))).length > 0 && (t(this).attr("href", e.substr(e.indexOf("#"))), t(this).parent().removeClass("current_page_item").removeClass("current-menu-item")), t('div[data-fullscreen-anchor-id="' + e.substr(e.indexOf("#") + 1) + '"]').length > 0 && t(this).parent().removeClass("current_page_item").removeClass("current-menu-item")
        }), t("#header-outer").length > 0 && t("#header-outer").find("a[href*='#']:not([href='#'])").each(function() {
            "#" !== t(this).attr("href") && "#searchbox" !== t(this).attr("href") && "#slide-out-widget-area" !== t(this).attr("href") && (n = !0)
        }), t("#slide-out-widget-area .off-canvas-menu-container").length > 0 && t("#slide-out-widget-area .off-canvas-menu-container").find("a[href*='#']:not([href='#'])").each(function() {
            "#" !== t(this).attr("href") && (n = !0)
        });
        var i = [];
        1 == n && i.push("#header-outer nav"), t('.page-submenu[data-sticky="true"] a[href*="#"]').length > 0 && i.push('.page-submenu[data-sticky="true"]'), i.length > 0 && i.forEach(function(n, i) {
            (0 == i ? r : t(e)).scrollspy({
                target: n,
                offset: a + pt.adminBarHeight + 40
            })
        })
    }

    function Un() {
        var a = e.location.hash;
        a && a.length > 0 && (a = a.replace(/<|>/g, ""));
        var n = a && a.length > 0 ? a.substring(1, a.length) : 0,
            i = y - y / 1.8,
            o = 0;
        if (n && (o = (o = n.split("/")).length), n && o > 1 && (n = n.replace(/\//g, ""), a = a.replace(/\//g, "")), a && t(".main-content").find(a).length > 0 || a && t(".main-content").find('[data-fullscreen-anchor-id="' + n + '"]').length > 0) {
            var l = t(".main-content").find(a).length > 0 ? t(".main-content").find(a) : t(".main-content").find('[data-fullscreen-anchor-id="' + n + '"]'),
                h = t('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 0 : t("#header-space").outerHeight();
            (t(".page-template-template-no-header-footer").length > 0 || t(".page-template-template-no-header").length > 0) && (h = 0);
            var u = 100;
            t(".nectar-box-roll").length > 0 && t(".container-wrap.bottomBoxOut").length > 0 && (ht.boxRoll(null, -1), u = 2050), t("img[data-nectar-img-src]").length > 0 && (aa(), u = 200), setTimeout(function() {
                var e;
                if (!0 === E) {
                    var n = t("#header-outer").outerHeight() + 2 * parseInt(t("#header-outer").css("margin-top"));
                    e = t(a).offset().top - n - pt.adminBarHeight
                } else if (0 == t('body[data-permanent-transparent="1"]').length)
                    if (r.hasClass("mobile")) e = t('#header-outer[data-mobile-fixed="1"]').length > 0 ? l.offset().top + 2 - h + pt.adminBarHeight : l.offset().top - pt.adminBarHeight + 1;
                    else {
                        var s = t('#header-outer[data-header-resize="0"]').length > 0 ? 0 : parseInt(_) + 2 * i;
                        if (t('#header-outer[data-remove-fixed="1"]').length > 0 && (h = 0), e = l.offset().top - parseInt(h) + s + 3 - pt.adminBarHeight, 0 == t("body.mobile").length && t('#header-outer[data-condense="true"]').length > 0 && 0 === t("body.page-template-template-no-header").length && 0 === t("body.page-template-template-no-header-footer").length) {
                            var o = t('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
                                u = d.height() - (parseInt(o.height()) + parseInt(t("#header-outer #logo").css("margin-top")));
                            e = l.offset().top - parseInt(h) + u - pt.adminBarHeight
                        }
                    }
                else e = l.offset().top - pt.adminBarHeight + 1;
                t('body[data-hhun="1"]').length > 0 && 0 == t('#header-outer[data-remove-fixed="1"]').length && 0 == t("#header-outer.detached").length && (e += h), Gt(e - (t('.page-submenu[data-sticky="true"]').length > 0 ? t(".page-submenu").height() : 0) + (t("body.material").length > 0 && c.length > 0 && 0 == t('body[data-hhun="1"]').length && 0 == t('#header-outer[data-remove-fixed="1"]').length && !r.hasClass("mobile") ? c.height() : 0), 700, "easeInOutQuint"), gt.animatedScrolling = !0, setTimeout(function() {
                    gt.animatedScrolling = !1
                }, 1100)
            }, u)
        }
    }

    function Jn() {
        M = [];
        var e = 0;
        t(".portfolio-items:not(.carousel)").each(function(a) {
            if (t(this).attr("instance", a), t(this).parent().parent().find("div[class^=portfolio-filters]").attr("instance", a), "undefined" != typeof SalientPortfolio) M[e] = new SalientPortfolio(t(this), qe, ot, Ee), e++;
            else {
                var n = t(this);
                Nt("#salient-portfolio-js-js", 100, function() {
                    M[e] = new SalientPortfolio(n, qe, ot, Ee), e++
                })
            }
        })
    }

    function Kn() {
        pt.winW > 690 && t('.posts-container[data-load-animation="perspective"]').css("perspective-origin", "50% " + (pt.scrollTop + pt.winH) + "px"), requestAnimationFrame(Kn)
    }

    function ti() {
        t('.posts-container[data-load-animation="perspective"]').length > 0 && requestAnimationFrame(Kn)
    }

    function ei(e) {
        "none" == e.attr("data-load-animation") ? e.find(".inner-wrap").removeClass("animated") : e.find("article").each(function(e) {
            if (t(this).visible(!0)) t(this).delay(110 * e).queue(function(e) {
                t(this).addClass("animated-in"), e()
            });
            else var a = t(this),
                n = new Waypoint({
                    element: a[0],
                    handler: function() {
                        setTimeout(function() {
                            a.addClass("animated-in")
                        }, 80 * a.attr("data-delay-amount")), n.destroy()
                    },
                    offset: "90%"
                })
        })
    }

    function ai() {
        J = [], t(".posts-container").each(function(e) {
            if (t(this).parent().hasClass("masonry") && !t(this).parent().hasClass("auto_meta_overlaid_spaced")) {
                if ("undefined" == typeof NectarMasonryBlog) {
                    var a = t(this);
                    return void Nt("#nectar-masonry-blog-js", 0, function() {
                        J[e] = new NectarMasonryBlog(a, Ee, ei)
                    })
                }
                J[e] = new NectarMasonryBlog(t(this), Ee, ei)
            } else ei(t(this))
        })
    }

    function ni() {
        var e = 50;
        if (t('#header-outer[data-remove-fixed="0"]').length > 0 && 0 == t('#header-outer[data-format="left-header"]').length) {
            if (e += d.outerHeight(), t('body[data-contained-header="true"]').length > 0 && (e += parseInt(d.css("margin-top"))), t('#header-outer[data-shrink-num][data-header-resize="1"]').length > 0) {
                var a = parseInt(d.attr("data-padding")) - parseInt(d.attr("data-padding")) / 1.8;
                e -= _, e -= 2 * a
            }
            if (0 == t("body.mobile").length && t('#header-outer[data-condense="true"]').length > 0) {
                var n = t('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
                e = 50, e += d.height() - (parseInt(n.position().top) - parseInt(t("#header-outer #logo").css("margin-top"))) - parseInt(pt.secondaryHeaderHeight)
            }
        }
        return u.length > 0 && (e += u.outerHeight()), e
    }

    function ii() {
        var n = ni();
        if (!(pt.winW < 690 && pt.usingMobileBrowser)) {
            const t = a.querySelector(".container.main-content");
            t && t.style.setProperty("--nectar-sticky-top-distance", n + "px")
        }
        if (t(".nectar-sticky-column-css").each(function() {
                t(this).hasClass("n-sticky-initialized") || (0 == t(this).find(".n-sticky").length && t(this).wrapInner('<div class="n-sticky" />'), t(this).addClass("n-sticky-initialized"), t(this).hasClass("nectar-sticky-column-css--middle") && new me(t(this)))
            }), t().theiaStickySidebar && !(pt.usingMobileBrowser && pt.winW < 1e3) && !(0 != ut.$usingFullScreenRows && pt.winW > 1e3)) {
            var i = '#sidebar[data-nectar-ss="true"], #sidebar[data-nectar-ss="1"], .nectar-scrolling-tabs:not(.navigation_func_active_link_only) .scrolling-tab-nav, .nectar-sticky-column';
            e.nectarOptions && e.nectarOptions.woo_sticky_sidebar && "1" === e.nectarOptions.woo_sticky_sidebar && (i += ", .woocommerce.archive #sidebar"), t(i).each(function() {
                var e = n;
                t(this).parents(".wpb_widgetised_column").length > 0 ? t("body.vc_editor").length > 0 || t(this).parents(".wpb_column").theiaStickySidebar({
                    additionalMarginTop: e,
                    updateSidebarHeight: !1
                }) : t(this).theiaStickySidebar({
                    additionalMarginTop: e,
                    updateSidebarHeight: !1
                })
            })
        }
    }

    function si() {
        t(".nectar-liquid-bg").removeClass("animated-in");
        for (var e = 0; e < Z.length; e++) "displace-filter-fade" == Z[e].animationType && t(Z[e].canvasContainer).parents(".fp-section.active").length > 0 && (0 == t(Z[e].canvasContainer).find(".image-added-to-stage").length && Z[e].imgContainer.addChild(Z[e].bg), t(Z[e].canvasContainer).find(".nectar-liquid-bg").addClass("image-added-to-stage"), Z[e].animateProps(Z[e]))
    }

    function ri() {
        if (t("#nectar_fullscreen_rows").length > 0 && t().fullpage) {
            ot = e.vc_iframe ? ".vc_element.vc_vc_row.active " : ".wpb_row.active ";
            var a = t("#nectar_fullscreen_rows[data-mobile-disable]").length > 0 ? t("#nectar_fullscreen_rows").attr("data-mobile-disable") : "off";
            pt.usingMobileBrowser || (a = "off"), "on" != a ? lt = !0 : ot = "", "undefined" != typeof NectarFullScreenRows && (ut = new NectarFullScreenRows(tn, U, si, pt, Ke, K, W, tt))
        } else Nt("#nectar-fullpage-js", 100, ri)
    }

    function oi() {
        t(".wpb_column").each(function() {
            if (t(this).hasClass("backdrop_filter_blur")) {
                var e = t(this).closest(".wpb_row");
                e.addClass("row-col-gap");
                var a = t(this).closest(".wpb_row[data-column-margin]").length > 0 ? t(this).closest(".wpb_row[data-column-margin]").attr("data-column-margin") : "default";
                "default" != a && e.find(".span_12").first().css({
                    "column-gap": a
                })
            }
        }), pt.usingMobileBrowser && r.addClass("using-mobile-browser"), e.navigator.userAgent.indexOf("Edge/") > 0 && r.addClass("msie"), 0 == t("html.js").length && t("html").removeClass("no-js").addClass("js"), t("code").find("br").remove(), t(".wpcf7-form p:has(input[type=submit])").css("padding-bottom", "0px"), t(".full-width-content .wpcf7-submit").on("click", function() {
            setTimeout(function() {
                qe()
            }, 1e3), setTimeout(function() {
                qe()
            }, 2e3)
        }), t(".gform_body").on("click", function() {
            setTimeout(function() {
                qe()
            }, 200)
        }), t(".pum.pum-theme-salient-page-builder-optimized button.pum-close").wrapInner("<span />"), t(e).on("pumBeforeOpen", function() {
            e.dispatchEvent(new Event("resize"))
        }), t("#nectar_fullscreen_rows").length > 0 && t(".pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12").length > 0 && t(".pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12").unwrap(), t(".single .blog_next_prev_buttons").length > 0 && t(".container-wrap").css("padding-bottom", 0), t(".full-width-section").each(function() {
            t(this).find("> .span_12 > div.col_last").last().css("margin-bottom", "0")
        }), t(".full-width-content .col.boxed").removeClass("boxed"), t(".wpb_column.neg-marg").parents(".wpb_row:not(.inner_row):not(.zindex-set)").css("z-index", "110"), t(".wpb_row.legacy").each(function() {
            t(this).find(".wpb_column").length > 0 && t(this).removeClass("legacy")
        })
    }

    function li() {
        t(".wpb_row").each(function() {
            void 0 !== t(this).find(".span_12").offset() && t(this).find('[class*="vc_col-"]').each(function() {
                var e = t(this).parents(".span_12").offset().left;
                t(this).removeClass("no-left-margin"), t(this).offset().left < e + 27 ? t(this).addClass("no-left-margin") : t(this).removeClass("no-left-margin")
            })
        })
    }

    function di() {
        var a = pt.winW,
            n = pt.winH,
            i = 0;
        r.is('[data-flex-cols="true"]') || t('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length > 0 && (li(), pt.usingMobileBrowser ? (e.addEventListener("orientationchange", function() {
            i = 1
        }), s.on("resize", function() {
            (s.width() != a && s.height != n || 1 === i) && (li(), a = pt.winW, n = pt.winH, i = 0)
        })) : s.on("resize", li))
    }

    function ci() {
        t('body[data-fancy-form-rcs="1"]').length > 0 && 0 == t("#wcfm-main-content").length && (t("select:not(.comment-form-rating #rating)").each(function() {
            var e;
            t(this).parents(".wpcf7-form-control-wrap").length > 0 ? 1 == (e = t(this).parents(".wpcf7-form-control-wrap").find(".select2-container").length > 0 ? t(t(this).prev(".select2-container")) : t(this)).parents(".wpcf7-form-control-wrap").parent().find("label").length ? e.parents(".wpcf7-form-control-wrap").parent().wrapInner('<div class="fancy-select-wrap" />') : e.wrap('<div class="fancy-select-wrap" />') : (e = t(this).prev(".select2-container").length > 0 ? t(this).prev(".select2-container") : t(this), 0 == t(this).parents("#buddypress").length && 0 == t(this).parents(".widget_categories").length && (1 == e.prev("label").length ? e.prev("label").addBack().wrapAll('<div class="fancy-select-wrap" />') : 1 == e.next("label").length ? e.next("label").addBack().wrapAll('<div class="fancy-select-wrap" />') : e.wrap('<div class="fancy-select-wrap" />')))
        }), t("select:not(.state_select):not(.country_select):not(.comment-form-rating #rating):not(#tribe-bar-form select):not(.woocommerce-currency-switcher):not(.nectar-custom-product-attr select):not(.flatpickr-calendar select)").each(function() {
            var a = pt.winW > 690 ? 7 : 200;
            if ((t(this).hasClass("skip-select2-search") || t(this).parents(".skip-select2-search").length > 0) && (a = 1e3), 0 == t(this).parents("#buddypress").length) {
                var n = {
                    minimumResultsForSearch: a,
                    width: "100%"
                };
                ("underline" == (e.nectarOptions && e.nectarOptions.woo_product_variable_select ? e.nectarOptions.woo_product_variable_select : "default") || t(this).parents(".woocommerce-ordering").length > 0) && (n = {
                    minimumResultsForSearch: a,
                    dropdownParent: t(this).parent(),
                    dropdownAutoWidth: !0
                }), void 0 !== t().select2 && t(this).select2(n)
            }
        }))
    }

    function hi() {
        (-1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) && (e.onpageshow = function(e) {
            e.persisted && (t(".nectar-video-wrap, .nectar-slider-wrap .swiper-slide .video-wrap").each(function() {
                t(this).find("video").length > 0 && t(this).find("video")[0].play()
            }), t("body.material-ocm-open").length > 0 ? (t("body > .slide_out_area_close").addClass("non-human-allowed").trigger("click"), setTimeout(function() {
                t("body > .slide_out_area_close").removeClass("non-human-allowed")
            }, 100)) : t("#slide-out-widget-area.slide-out-from-right-hover.open").length > 0 && navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? Fa() : (t("#slide-out-widget-area.fullscreen.open").length > 0 || t("#slide-out-widget-area.fullscreen-alt.open").length > 0 || t("#slide-out-widget-area.slide-out-from-right.open").length > 0) && (t("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed"), t(".slide-out-widget-area-toggle:not(.std-menu) a.open").addClass("non-human-allowed").trigger("click"), setTimeout(function() {
                t("#slide-out-widget-area .slide_out_area_close").removeClass("non-human-allowed")
            }, 100)))
        })
    }

    function ui() {
        t(".wpb_row").removeClass("only-ns"), t('.nectar-slider-wrap[data-full-width="true"], .page-submenu, .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .blog-fullwidth-wrap').parents(".wpb_row").addClass("only-ns"), t("body.vc_editor.compose-mode .wpb_row .vc_vc_column > .wpb_column > .vc_column-inner").each(function() {
            if (t(this).find("> .vc_element-container > div").length > 0) {
                var e = t(this).find("> .vc_element-container"),
                    a = e.find("> div:first-child");
                a.is(".vc_vc_row_inner") ? a.addClass("first-inner-row-el") : e.find("> div").removeClass("first-inner-row-el")
            }
        }), t("body.vc_editor.compose-mode .vc_row.inner_row").each(function() {
            t(this).hasClass("row_position_absolute") ? t(this).parent().css({
                position: "static",
                "min-height": "0"
            }) : t(this).parent().css({
                position: "",
                "min-height": ""
            })
        }), t(".img-with-aniamtion-wrap, .nectar_icon_wrap, .nectar-lottie-wrap, .nectar-cta").each(function() {
            (t(this).hasClass("position_desktop_absolute") || t(this).hasClass("position_tablet_absolute") || t(this).hasClass("position_phone_absolute")) && t(this).parent().addClass("absolute-parent")
        })
    }

    function pi() {
        t('.vc_element > .wpb_column[class*="padding-"][class*="-percent"]').each(function() {
            var e = 4,
                a = this.className.match(/padding-\d+/);
            if (a && (e = (e = a[0].match(/\d+/)) ? e[0] / 100 : 0), e) {
                var n = t(this).parents(".span_12").width();
                t(this).is('[data-padding-pos="all"]') ? t(this).css("padding", n * e) : t(this).is('[data-padding-pos="top"]') ? t(this).css("padding-top", n * e) : t(this).is('[data-padding-pos="bottom"]') ? t(this).css("padding-bottom", n * e) : t(this).is('[data-padding-pos="left"]') ? t(this).css("padding-left", n * e) : t(this).is('[data-padding-pos="right"]') ? t(this).css("padding-right", n * e) : t(this).is('[data-padding-pos="top-bottom"]') ? t(this).css({
                    "padding-top": n * e,
                    "padding-bottom": n * e
                }) : t(this).is('[data-padding-pos="top-right"]') ? t(this).css({
                    "padding-top": n * e,
                    "padding-right": n * e
                }) : t(this).is('[data-padding-pos="bottom-right"]') ? t(this).css({
                    "padding-right": n * e,
                    "padding-bottom": n * e
                }) : t(this).is('[data-padding-pos="bottom-left"]') ? t(this).css({
                    "padding-left": n * e,
                    "padding-bottom": n * e
                }) : t(this).is('[data-padding-pos="left-right"]') && t(this).css({
                    "padding-left": n * e,
                    "padding-right": n * e
                })
            }
        }), t('.wpb_row[class*="vc_custom_"]').each(function() {
            t(this).parent().addClass("no-bottom-margin")
        })
    }

    function fi() {
        setTimeout(function() {
            t("body.compose-mode").length > 0 && t(".container-wrap").addClass("visible-editor-controls"), pt.usingFrontEndEditor && (ui(), r.is('[data-flex-cols="true"]') || (pi(), s.on("smartresize", pi)))
        }, 200), s.on("vc_reload", function() {
            if (ui(), Ce(), we(), It(), Fe(), wt(), ge(), Pe(), $e(), Pn(), _a(), qt(), la(), Wn(), Rn(), Ye(), sa(), t(".carousel").length > 0 && (Ht(), Ft(), Bt()), t(".owl-carousel").length > 0 && (t(".owl-carousel").each(function() {
                    t(this).trigger("destroy.owl.carousel").removeClass("owl-loaded"), t(this).find(".owl-stage-outer .owl-stage > *").unwrap(), t(this).find(".owl-stage-outer > *").unwrap(), t(this).find(".owl-item > *").unwrap(), t(this).find(".owl-dots").remove(), t(this).find(".owl-nav").remove()
                }), St()), t(".nectar_cascading_images").length > 0 && imagesLoaded(t(".nectar_cascading_images"), function() {
                    Ve()
                }), Ee(), Le(), qn(), t(".wpb_row.nectar-split-heading-merged").length > 0 && t(".wpb_row.nectar-split-heading-merged").removeClass("nectar-split-heading-merged"), F.length > 0)
                for (var a = 0; a < F.length; a++) F[a].instance.reloadCells(), F[a].instance.off("scroll.flickity"), F[a].instance.off("dragStart.flickity"), F[a].instance.off("dragEnd.flickity");
            if (Ct(), setTimeout(function() {
                    if (xt(), F.length > 0)
                        for (var t = 0; t < F.length; t++) F[t].instance.reloadCells(), F[t].instance.resize()
                }, 100), Q.length > 0)
                for (a = 0; a < Q.length; a++) Q[a].instance.flickity("reloadCells"), Q[a].instance.off("scroll.flickity"), Q[a].instance.off("dragStart.flickity"), Q[a].instance.off("dragEnd.flickity");
            setTimeout(function() {
                if (t(".nectar-woo-flickity").length > 0 && Wt(), Q.length > 0)
                    for (var e = 0; e < Q.length; e++) Q[e].instance.flickity("reloadCells"), Q[e].instance.flickity("resize")
            }, 100), ga();
            for (a = 0; a < G.length; a++) "multiple_visible" != G[a].type && "multiple_visible_minimal" != G[a].type || (G[a].flickityEl.flickity("reloadCells"), G[a].flickityEl.off("select.flickity"), ga(), G[a].flickityEl.resize()), G[a].testimonialSliderHeight();
            if (ma(), fa(), ya(), re(), ta(), ye(), Ja(), Ca(), xa(), qe(), setTimeout(qe, 1e3), Ta(), In(), s.off("scroll.parallaxSections").off("resize.parallaxSections"), Be(), Me(), ai(), Jn(), M.length > 0)
                for (a = 0; a < M.length; a++) M[a].portfolioAccentColor();
            if (jn(), Xn(), setTimeout(function() {
                    if (t(".nectar_fullscreen_zoom_recent_projects").length > 0 && D.length > 0)
                        for (var e = 0; e < D.length; e++) D[e].sliderCalcs()
                }, 300), s.unbind(".infscr"), Nn(), je(), t(".nectar-video-wrap").each(function() {
                    t(this).find("video").length > 0 && t(this).find("video").css("visibility", "visible")
                }), t(".wpb_column[data-t-w-inherits]").each(function() {
                    t(this).is('[data-t-w-inherits="small_desktop"]') ? t(this).parent().addClass("inherits-s-desktop-col") : t(this).parent().removeClass("inherits-s-desktop-col")
                }), t("#nectar_fullscreen_rows").length > 0) {
                0 == t("#nectar_fullscreen_rows > .vc_element").length && t("#nectar_fullscreen_rows").prepend('<div class="vc_element empty_placeholder" />'), t("#nectar_fullscreen_rows > .vc_element:not(.empty_placeholder)").length > 0 && t("#nectar_fullscreen_rows >.vc_element.empty_placeholder").remove();
                var n = t("#nectar_fullscreen_rows > div.vc_element.active").index();
                t.fn.fullpage.destroy("all"), ri();
                var i = [{
                    el: "",
                    offset: 0
                }];
                t("#nectar_fullscreen_rows > div.vc_element").each(function(e) {
                    i[e] = {
                        el: t(this),
                        offset: t(this).offset().top
                    }
                }), n > -1 && t.fn.fullpage.silentMoveTo(n + 1, 0), 1 === t("#nectar_fullscreen_rows > div.vc_element").length && t("#nectar_fullscreen_rows").css({
                    transform: "translate3d(0,0,0)"
                }), r.scrollTo(0, 0)
            } else t('body .main-content > .row > .vc_element:first > .wpb_row[class*="full-width-"]').length > 0 || t('body .main-content > .row > .vc_element:first .nectar-slider-wrap[data-full-width="true"]').length > 0 ? t(".container-wrap").css({
                "padding-top": "0",
                "margin-top": "0"
            }) : t(".container-wrap").css({
                "padding-top": "40px"
            });
            W = [], t(".svg-icon-holder").removeClass("animated-in").removeClass("bound"), t(".vc_nectar_gmap").length > 0 && setTimeout(function() {
                "object" == typeof google && "object" == typeof google.maps ? e.mapAPI_Loaded() : e.nectarLove.mapApiKey.length > 0 && t.getScript("https://maps.google.com/maps/api/js?sensor=false&key=" + e.nectarLove.mapApiKey + "&callback=mapAPI_Loaded")
            }, 100), ii(), void 0 !== e.Waypoint && (Waypoint.destroyAll(), tn())
        })
    }

    function gi() {
        var a = !1;
        if (t('body[data-ajax-transitions="true"]').length > 0 && t('#ajax-loading-screen[data-disable-mobile="1"]').length > 0 && pt.winW < 1e3 && (a = !0), t('body[data-ajax-transitions="true"]').length > 0 && t('#ajax-loading-screen[data-method="standard"]').length > 0 && 0 == a) {
            if (t("html").addClass("page-trans-loaded"), t('#ajax-loading-screen[data-effect="standard"]').length > 0 ? (0 == t(".nectar-particles").length && (p.transition({
                    opacity: 0
                }, 500, function() {
                    t(this).css({
                        display: "none"
                    })
                }), t("#ajax-loading-screen .loading-icon").transition({
                    opacity: 0
                }, 500)), 0 == t(".nectar-box-roll").length && setTimeout(function() {
                    tn()
                }, 550)) : (t('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0 && setTimeout(function() {
                    p.addClass("loaded")
                }, 60), 0 == t('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length && setTimeout(function() {
                    t("#ajax-loading-screen:not(.loaded)").addClass("loaded"), setTimeout(function() {
                        p.addClass("hidden")
                    }, 1e3)
                }, 150), 0 == t(".nectar-box-roll").length && t('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0 ? setTimeout(function() {
                    tn()
                }, 750) : 0 == t(".nectar-box-roll").length && setTimeout(function() {
                    tn()
                }, 350)), e.onpageshow = function(e) {
                    e.persisted && (t("#ajax-loading-screen").stop().transition({
                        opacity: 0
                    }, 200, function() {
                        t(this).css({
                            display: "none"
                        })
                    }), t("#ajax-loading-screen .loading-icon").transition({
                        opacity: 0
                    }, 100))
                }, t(".portfolio-loading, .nectar-slider-loading .loading-icon").remove(), 0 == t('#ajax-loading-screen[data-disable-fade-on-click="1"]').length && 0 == t('body.using-mobile-browser #ajax-loading-screen[data-method="standard"][data-disable-mobile="1"]').length) {
                var n = !1;
                t('a[href^="mailto"], a[href^="tel"], .woocommerce-order-downloads a[class*="downloads-file"], .wpdm-cta.download-link a[data-downloadurl], .nectar-ignore-beforeunload a').on("click", function() {
                    n = !0
                }), e.addEventListener("beforeunload", function() {
                    n || (p.addClass("set-to-fade"), t('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0 ? (p.removeClass("loaded"), p.addClass("in-from-right"), setTimeout(function() {
                        p.addClass("loaded")
                    }, 30)) : t('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0 ? p.css("opacity", "0").css("display", "block").transition({
                        opacity: "1"
                    }, 450) : p.show().transition({
                        opacity: "1"
                    }, 450)), n = !1
                })
            }
        } else 1 == a && p.css({
            opacity: "0",
            display: "none"
        }).addClass("loaded").addClass("hidden"), 0 != t(".nectar-box-roll").length || pt.usingFrontEndEditor || tn()
    }

    function mi(n) {
        var i, l, u, p, g;
        pt.usingMobileBrowser && pt.scrollPosRAF(), ra(),
            function() {
                var n;
                if (zt(), 0 != t('body[data-header-format="left-header"]').length || pt.usingPhoneBrowser || (n = !(t('#header-outer[data-megamenu-rt="1"]').length > 0 && t('#header-outer[data-transparent-header="true"]').length > 0), e.nectarOptions && e.nectarOptions.dropdown_hover_intent && "add" === e.nectarOptions.dropdown_hover_intent && (n = !1), t(".sf-menu:not(.buttons)").superfish({
                        delay: 500,
                        speed: "fast",
                        disableHI: n,
                        speedOut: "fast",
                        animation: {
                            opacity: "show"
                        }
                    }), t("#header-outer .sf-menu.buttons li.menu-item").on("mouseover", function() {
                        t(this).addClass("sfHover"), t('#header-outer[data-megamenu-rt="1"]').length > 0 && t(this).hasClass("megamenu") && !t(this).hasClass("width-75") && !t(this).hasClass("width-50") && "true" == t("#header-outer").attr("data-transparent-header") && (t("#header-outer").addClass("no-transition"), t("#header-outer").removeClass("transparent"))
                    }), t("#header-outer .sf-menu.buttons > li.menu-item.menu-item-has-children:not(.megamenu):not(.nectar-megamenu-menu-item)").on("mouseenter", function() {
                        var a = t("#top .container").width(),
                            n = t(this).children("ul");
                        n.offset().left - (t(e).width() - a) / 2 + n.width() <= t(e).width() - 100 ? t(this).removeClass("edge") : t(this).addClass("edge")
                    }), t("#header-outer .sf-menu.buttons li.menu-item").on("mouseleave", function() {
                        var e = t(this);
                        e.is(".menu-item-has-children") ? setTimeout(function() {
                            e.is(":hover") || (e.removeClass("sfHover"), t('#header-outer[data-megamenu-rt="1"]').length > 0 && t('#header-outer[data-transparent-header="true"]').length > 0 && (0 == t("#header-outer.scrolled-down").length && 0 == t("#header-outer.small-nav").length && 0 == t("#header-outer.detached").length && 0 == t("#header-outer.fixed-menu").length && t("#header-outer").addClass("transparent"), t('#header-outer[data-permanent-transparent="1"][data-transparent-header="true"]').length > 0 && t("#header-outer").addClass("transparent")))
                        }, 200) : e.removeClass("sfHover")
                    }), t('#header-secondary-outer li.megamenu:not(.nectar-megamenu-menu-item), #header-outer:not([data-format="menu-left-aligned"]):not([data-format="centered-logo-between-menu-alt"]) .sf-menu.buttons li.megamenu').removeClass("nectar-megamenu-menu-item").removeClass("megamenu"), t('#header-outer[data-format="centered-menu-bottom-bar"] .right-side .sf-menu li.nectar-megamenu-menu-item').removeClass("align-left").removeClass("align-middle").addClass("align-right"), t('#header-outer[data-format="centered-menu-bottom-bar"] .left-side .sf-menu li.nectar-megamenu-menu-item').removeClass("align-right").removeClass("align-middle").addClass("align-left"), t("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(function() {
                        t(this).offset().left + t(this).outerWidth() > s.width() && (t(this).addClass("on-left-side"), t(this).find("ul").addClass("on-left-side"))
                    }), t('body:not([data-header-format="left-header"]) header#top nav > ul > li.megamenu > ul > li > ul > li').each(function() {
                        t(this).find("> ul").length > 0 && t(this).addClass("has-ul")
                    }), t('body[data-megamenu-width="full-width"]').length > 0 && t("ul.sub-menu").length > 0 && (Ot(), s.on("smartresize", Ot), t("header#top nav > ul > li.megamenu > .sub-menu").css("box-sizing", "content-box")), t("header#top nav > ul.sf-menu > li.menu-item").on("mouseenter", function() {
                        t(this).addClass("menu-item-over")
                    }), t("header#top nav > ul.sf-menu > li.menu-item").on("mouseleave", function() {
                        t(this).removeClass("menu-item-over")
                    }), t("#header-outer nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator, #header-outer .megamenu .sub-menu a .sf-sub-indicator").remove(), t(".sf-menu > .nectar-megamenu-menu-item > a .menu-title-text .megamenu-bg-lazy[data-bg-src]").each(function() {
                        var e = t(this).parents(".nectar-megamenu-menu-item"),
                            a = t(this).attr("data-bg-src"),
                            n = t(this).attr("data-align").replace("_", " ");
                        e.find("> ul").css({
                            "background-position": n,
                            "background-image": 'url("' + a + '")'
                        }), t(this).remove()
                    }), t(".sf-menu > .nectar-megamenu-menu-item > ul > li > a .menu-title-text .megamenu-col-bg-lazy[data-bg-src]").each(function() {
                        var e = t(this).closest(".menu-item"),
                            a = t(this).attr("data-bg-src"),
                            n = t(this).attr("data-align").replace("_", " ");
                        e.css({
                            "background-position": n,
                            "background-image": 'url("' + a + '")'
                        }), t(this).remove()
                    }), t("#header-outer nav > ul > li.megamenu > ul.sub-menu > li > a").each(function() {
                        ("-" == t(this).text() || "–" == t(this).text() || t(this).parent().hasClass("hide-title")) && t(this).remove()
                    })), "IntersectionObserver" in e) {
                    var i = new IntersectionObserver(function(t) {
                        t.forEach(function(t) {
                            if (t.isIntersecting) {
                                var e = t.target;
                                e.classList.add("loaded");
                                var a = e.getAttribute("data-menu-img-src");
                                a && (e.setAttribute("src", a), e.removeAttribute("data-menu-img-src")), i.unobserve(e)
                            }
                        })
                    }, {
                        rootMargin: "0px",
                        threshold: 0
                    });
                    [].slice.call(a.querySelectorAll(".nectar-menu-icon-img[data-menu-img-src], #header-outer .nectar-ext-menu-item .image-layer")).forEach(function(t) {
                        i.observe(t)
                    })
                } else t(".sf-menu .nectar-menu-icon-img[data-menu-img-src]").each(function() {
                    t(this).attr("src", t(this).attr("data-menu-img-src")), t(this).removeAttr("data-menu-img-src")
                }), t(".nectar-ext-menu-item .image-layer").addClass("loaded");
                t(".sub-menu .nectar-menu-icon, .sub-menu .nectar-menu-icon-img, .off-canvas-menu-container > ul > li > a .nectar-menu-icon, .off-canvas-menu-container > ul > li > a .nectar-menu-icon-img").each(function() {
                    var e = t(this).parent(),
                        a = t(this).detach();
                    0 == e.parents(".nectar-ext-menu-item").length && (e.wrapInner('<span class="nectar-menu-icon-text" />'), e.addClass("nectar-menu-item-with-icon")), e.prepend(a)
                }), t("#slide-out-widget-area:not(.fullscreen) .nectar-menu-label").each(function() {
                    0 == t(this).parents(".nectar-ext-menu-item").length && t(this).closest("a").addClass("nectar-menu-item-with-icon")
                }), t(".off-canvas-menu-container .nectar-menu-icon, .off-canvas-menu-container .nectar-menu-icon-img").each(function() {
                    var e = t(this).parent();
                    (e.find(".item_desc").length > 0 || e.find(".nav_desc").length > 0) && e.addClass("nectar-menu-item-with-desc")
                }), Et()
            }(),
            function() {
                e.nectarOptions && e.nectarOptions.quick_search && "true" === e.nectarOptions.quick_search && new ln;
                var n = t("#search-outer #search input[type=text][data-placeholder]").length > 0 ? t("#search-outer #search input[type=text]").attr("data-placeholder") : "";

                function i() {
                    if (r.hasClass("ascend") || t('body[data-header-format="left-header"]').length > 0 && 0 == t("body.material").length ? (t("#search-outer").stop().transition({
                            opacity: 0
                        }, 300, "cubic-bezier(0.2, 1, 0.3, 1)"), h.addClass("inactive"), setTimeout(function() {
                            t("#search-outer").hide(), h.removeClass("inactive")
                        }, 300)) : 0 == t("body.material").length && t("#search-outer").stop(!0).fadeOut(450, "easeOutExpo"), r.hasClass("material")) {
                        t(e).trigger("nectar-search-close");
                        var a = d.hasClass("results-shown") ? 800 : 400;
                        setTimeout(function() {
                            t("#search-outer #s").val("")
                        }, a), t("#ajax-content-wrap").removeClass("material-open"), gt.materialSearchOpen = !1, d.removeClass("material-search-open"), t("#search-outer").removeClass("material-open"), t("#fp-nav").removeClass("material-ocm-open")
                    }
                }
                r.hasClass("material") && 0 == t("#header-outer .bg-color-stripe").length && d.append('<div class="bg-color-stripe" />'), r.on("click", "#search-btn a", function() {
                    return !1
                }), r.on("click", "#search-btn a:not(.inactive), #header-outer .mobile-search, .nectar-search-open-trigger", function() {
                    return !t(this).hasClass("open-search") && (r.hasClass("original") && t(".slide-out-widget-area-toggle.mobile-icon a.open").length > 0 && (t(".slide-out-widget-area-toggle.mobile-icon a").addClass("non-human-allowed").trigger("click"), setTimeout(function() {
                        t(".slide-out-widget-area-toggle.mobile-icon a").removeClass("non-human-allowed")
                    }, 100)), r.hasClass("ascend") || t('body[data-header-format="left-header"]').length > 0 && 0 == t("body.material").length ? (t("#search-outer > #search form, #search-outer #search .span_12 span, #search-outer #search #close").css("opacity", 0), t("#search-outer > #search form").css("transform", "translateY(-30px)"), t("#search-outer #search .span_12 span").css("transform", "translateY(20px)"), t("#search-outer").show(), t("#search-outer").stop().transition({
                        scale: "1,0",
                        opacity: 1
                    }, 0).transition({
                        scale: "1,1"
                    }, 700, "cubic-bezier(0.2, 1, 0.3, 1)"), t("#search-outer > #search form").delay(350).transition({
                        opacity: 1,
                        transform: "translateY(0)"
                    }, 700, "cubic-bezier(0.2, 1, 0.3, 1)"), t("#search-outer #search #close").delay(500).transition({
                        opacity: 1
                    }, 700, "cubic-bezier(0.2, 1, 0.3, 1)"), t("#search-outer #search .span_12 span").delay(450).transition({
                        opacity: 1,
                        transform: "translateY(0)"
                    }, 700, "cubic-bezier(0.2, 1, 0.3, 1)")) : r.hasClass("material") ? (t('#header-outer[data-transparent-header="true"] .bg-color-stripe').css("transition", ""), t("#search-outer, #ajax-content-wrap").addClass("material-open"), gt.materialSearchOpen = !0, d.addClass("material-search-open"), t("#fp-nav").addClass("material-ocm-open"), t(e).trigger("nectar-search-open")) : t("#search-outer").stop(!0).fadeIn(600, "easeOutExpo"), setTimeout(function() {
                        t("#search input[type=text]").trigger("focus"), t("#search input[type=text]").val() == n && t("#search input[type=text]").setCursorPosition(0)
                    }, 300), t(this).hasClass("nectar-search-open-trigger") || t(this).toggleClass("open-search"), t(".slide-out-widget-area-toggle a:not(#toggle-nav).open:not(.animating)").trigger("click"), !1)
                }), t("body:not(.material)").on("keydown", "#search input[type=text]", function() {
                    t(this).val() == n && t(this).val("")
                }), t("body:not(.material)").on("keyup", "#search input[type=text]", function() {
                    0 == t(this).val().length && (t(this).val(n), t(this).setCursorPosition(0))
                }), r.on("click", "#close", function() {
                    return i(), h.removeClass("open-search"), t("#header-outer .mobile-search").removeClass("open-search"), !1
                }), t("body:not(.material)").on("blur", "#search-box input[type=text]", function() {
                    i(), h.removeClass("open-search"), t("#header-outer .mobile-search").removeClass("open-search")
                }), t("body.material").on("click", "#ajax-content-wrap", function(e) {
                    void 0 !== e.originalEvent && (i(), h.removeClass("open-search"), t("#header-outer .mobile-search").removeClass("open-search"))
                }), t("body.material").length > 0 && t(a).on("keyup", function(e) {
                    27 == e.keyCode && (i(), h.removeClass("open-search"), t(".ocm-effect-wrap.material-ocm-open").length > 0 && t(".slide-out-widget-area-toggle.material-open a").trigger("click"))
                })
            }(), 0 == t('#header-outer[data-remove-fixed="1"]').length && pt.winW > 1e3 && 0 != t(e).scrollTop() && 1 == t('#header-outer.transparent[data-permanent-transparent="false"]').length && d.removeClass("transparent"), pt.winW < 1e3 ? (0 == t(".nectar-box-roll").length || "1" == I && 0 == t('#header-outer[data-remove-fixed="1"]').length) && (yn(), s.on("smartresize.nectarNavScrollEffects", yn)) : (_n(), s.on("smartresize.nectarNavScrollEffects", _n)), ii(), ma(), Ce(), i = t("#top #mobile-menu").length > 0 ? "#top #mobile-menu " : ".off-canvas-menu-container.mobile-only ", t(i + ".menu-item > ul > li > a").each(function() {
                if ("-" == t(this).text() || "–" == t(this).text() || t(this).parent().hasClass("hide-title") || t(this).find("> .remove-menu-item-title").length > 0) {
                    var e = t(this).parent().find("> ul > li:not(.back)").clone();
                    t(this).parent().find("> .widget-area-active").length > 0 ? t(this).parent().find("> a").remove() : (t(this).parent().find("ul").remove(), t(this).parent().parent().append(e), t(this).parent().remove())
                }
            }), Ra(), Ea(), "separate-dropdown-parent-link" == (t("#slide-out-widget-area[data-dropdown-func]").length > 0 ? o.attr("data-dropdown-func") : "default") && t("#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children").append('<span class="ocm-dropdown-arrow"><i class="fa fa-angle-down"></i></span>'),
            function() {
                if (!(!t('#header-outer[data-format="left-header"]').length > 0 && !t('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length > 0 && !t("#slide-out-widget-area.fullscreen-split").length > 0 && !t('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length > 0)) {
                    var a;
                    t('#header-outer[data-format="left-header"] nav li.megamenu').removeClass("nectar-megamenu-menu-item").removeClass("megamenu"), a = t('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length > 0 ? "#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children > .ocm-dropdown-arrow" : 'body.material #slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children > a, #slide-out-widget-area.fullscreen-split .off-canvas-menu-container li.menu-item-has-children > a';
                    var n = '#header-outer[data-format="left-header"] nav li.menu-item-has-children > a',
                        i = e.nectarOptions && e.nectarOptions.left_header_dropdown_func ? e.nectarOptions.left_header_dropdown_func : "default";
                    "separate-dropdown-parent-link" === i && (n = '#header-outer[data-format="left-header"] nav li.menu-item-has-children > a .sf-sub-indicator'), t(n + ", " + a).on("click", function() {
                        var e = t(this).parent();
                        if ("separate-dropdown-parent-link" === i && (e = t(this).closest(".menu-item")), e.hasClass("open-submenu")) e.find(".sub-menu").css({
                            "max-height": "0"
                        }), e.removeClass("open-submenu");
                        else {
                            var a, n = t(this);
                            e.find("> .sub-menu").addClass("no-trans"), setTimeout(function() {
                                e.find("> .sub-menu").css({
                                    "max-height": "none",
                                    position: "absolute",
                                    visibility: "hidden"
                                }), a = e.find("> .sub-menu").height(), e.find("> .sub-menu").removeClass("no-trans"), e.find("> .sub-menu").css({
                                    "max-height": "0",
                                    position: "relative",
                                    visibility: "visible"
                                })
                            }, 25), setTimeout(function() {
                                n.closest("ul").find("li.menu-item-has-children").removeClass("open-submenu"), n.closest("ul").find("li.menu-item-has-children > .sub-menu").css({
                                    "max-height": "0"
                                }), e.addClass("open-submenu"), e.find("> .sub-menu").css("max-height", a), n.parents("ul").length > 0 && n.parents("ul:not(.sf-menu)").each(function() {
                                    t(this).css("max-height"), t(this).css("max-height", parseInt(t(this).height() + 2 * parseInt(t(this).css("padding-top")) + a) + "px")
                                })
                            }, 50)
                        }
                        return !1
                    });
                    var s = t('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children');
                    if (s.length > 0 && s.find(".current-menu-item").length > 0) {
                        s.find("ul").css("transition", "none");
                        var r = s.find(".current-menu-item").parents(".current-menu-ancestor.menu-item-has-children");
                        r = Array.from(r), "separate-dropdown-parent-link" === i ? r.reverse().forEach(function(e) {
                            t(e).find("> a .sf-sub-indicator").trigger("click")
                        }) : r.reverse().forEach(function(e) {
                            t(e).find("> a").trigger("click")
                        }), setTimeout(function() {
                            s.find("ul").css("transition", "")
                        }, 100)
                    }
                }
            }(), l = 0, u = 0, t(p = ".carousel-wrap .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a").on("mousedown", function(t) {
                l = t.clientX
            }), t(p).on("mouseup", function(t) {
                u = t.clientX
            }), t(p).on("click", function() {
                if (Math.abs(l - u) > 10) return !1
            }), Me(), re(), Nn(), Zn(), g = y - y / 1.8, r.on("click", ".section-down-arrow, .scroll-down-wrap > .minimal-arrow", function() {
                if (t(this).parents(".nectar-box-roll").length > 0) return !1;
                var e = t(this).parents("#page-header-bg"),
                    a = e.height(),
                    n = 0 == e.parents(".first-section").length || t('body[data-transparent-header="false"]').length > 0 ? e.offset().top : 0,
                    i = f.length > 0 && s.width() > 1e3 ? f.height() : 0,
                    o = t('body[data-header-format="left-header"]').length > 0 ? 0 : t("#header-space").height(),
                    l = 0;
                if (t("body.material").length > 0 && c.length > 0 && (l = c.height()), 0 == t('body[data-permanent-transparent="1"]').length)
                    if (r.hasClass("mobile")) Gt((t('#header-outer[data-mobile-fixed="1"]').length > 0 ? parseInt(a) - o + parseInt(e.offset().top) + 2 : parseInt(a) + parseInt(e.offset().top) + 2) - 2 * i, 700, "easeInOutQuint");
                    else if (t('body[data-hhun="1"]').length > 0 && 0 == t('#header-outer[data-remove-fixed="1"]').length) Gt(parseInt(a) + n + 2 - 2 * i, 700, "easeInOutQuint");
                else {
                    var h = t('#header-outer[data-header-resize="0"]').length > 0 ? 0 : parseInt(_) + 2 * g;
                    if (t('#header-outer[data-remove-fixed="1"]').length > 0 && (o = 0, n = 0), 0 == t("body.mobile").length && t('#header-outer[data-condense="true"]').length > 0) {
                        var u = t('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
                        o = d.height() - (parseInt(u.position().top) - parseInt(t("#header-outer #logo").css("margin-top"))) - parseInt(pt.secondaryHeaderHeight)
                    }
                    Gt(parseInt(a - o) + h + 3 + n + l, 700, "easeInOutQuint")
                } else Gt(parseInt(a) + parseInt(e.offset().top) + 2 - 2 * i, 700, "easeInOutQuint");
                return !1
            }),
            function() {
                if (H && r.on("click", '#header-outer nav .sf-menu li:not(.slide-out-widget-area-toggle) a[href*="#"]', function() {
                        gt.ocmOpen && "#" != t(this).attr("href") && Va(t(this).parent())
                    }), t('body[data-animated-anchors="true"]').length > 0 || t('.single-product [data-gallery-style="left_thumb_sticky"]').length > 0) {
                    var a, n = y - y / 1.8;
                    setTimeout(Gn, 100), r.on("click", '#header-outer nav .sf-menu a:not([href="#slide-out-widget-area"]), #header-outer .mobile-header .sf-menu a, #footer-outer .nectar-button, #footer-outer .widget_nav_menu a, #footer-widgets .textwidget a, #mobile-menu li a, .nectar-scrolling-tabs:not(.navigation_func_active_link_only) .scrolling-tab-nav a, .container-wrap a:not(.wpb_tabs_nav a):not(.navigation_func_active_link_only .scrolling-tab-nav a):not(.comment-wrap .navigation a):not(.woocommerce-checkout a):not(.um-woo-view-order):not(.magnific):not([data-fancybox]):not(.woocommerce-tabs .tabs a):not(.slider-prev):not(.slider-next):not(.testimonial-next-prev a):not(.page-numbers), .swiper-slide .button a, #slide-out-widget-area a, #slide-out-widget-area .inner div a', function(i) {
                        var o = !0,
                            l = t(this).prop("hash");
                        l && !t(this).hasClass("nectar-next-section") && 0 == t(this).parents(".slide-out-widget-area-toggle").length && (r.addClass("animated-scrolling"), gt.animatedScrolling = !0), clearTimeout(a), a = setTimeout(function() {
                            r.removeClass("animated-scrolling"), gt.animatedScrolling = !1
                        }, 1100);
                        var h = t('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 0 : t("#header-space").outerHeight();
                        if ((t(".page-template-template-no-header-footer").length > 0 || t(".page-template-template-no-header").length > 0 || 0 == t("#header-space").length) && (h = 0), 0 != ut.$usingFullScreenRows && t('#nectar_fullscreen_rows[data-anchors="on"]').length > 0 && l && "" != l && "#top" != l && t('body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open').length > 0 && (i.preventDefault(), t(this).hasClass("skip-hash") || (history.pushState ? history.pushState(null, null, l) : location.hash = l), setTimeout(function() {
                                t(e).trigger("hashchange")
                            }, 800)), l && r.find(l).length > 0 && "#top" != l && "" != l && -1 !== t(this).attr("href").indexOf(e.location.href.split("#")[0]) || t(this).is('[href^="#"]') && "" != l && r.find(l).length > 0 && "#top" != l) {
                            if (t(this).hasClass("skip-hash") || (history.pushState ? history.pushState(null, null, l) : location.hash = l), t(this).parents("ul").length > 0 && t(this).parents("ul").find("li").removeClass("current-menu-item"), t(this).parents("#slide-out-widget-area").length > 0) {
                                if (t('body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open').length > 0) {
                                    t("body > .slide_out_area_close").addClass("non-human-allowed").trigger("click");
                                    var u = t(this);
                                    o = !1, setTimeout(function() {
                                        u.trigger("click")
                                    }, 1e3)
                                } else t("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed").trigger("click");
                                setTimeout(function() {
                                    t('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0 ? t("body > .slide_out_area_close").removeClass("non-human-allowed") : t("#slide-out-widget-area .slide_out_area_close").removeClass("non-human-allowed")
                                }, 100)
                            }
                            t(this).parents("#mobile-menu").length > 0 && (t(".slide-out-widget-area-toggle.mobile-icon a").addClass("non-human-allowed").trigger("click"), setTimeout(function() {
                                t(".slide-out-widget-area-toggle.mobile-icon a").removeClass("non-human-allowed")
                            }, 100));
                            var p = 1,
                                f = t(this);
                            t(".nectar-box-roll").length > 0 && t(".container-wrap.bottomBoxOut").length > 0 && (ht.boxRoll(null, -1), p = 2050), t("img[data-nectar-img-src]").length > 0 && (aa(), p = 200), setTimeout(function() {
                                var e;
                                if (!0 === E) {
                                    var a = t("#header-outer").outerHeight() + 2 * parseInt(t("#header-outer").css("margin-top"));
                                    e = t(l).offset().top - a - pt.adminBarHeight
                                } else if (0 == t('body[data-permanent-transparent="1"]').length)
                                    if (r.hasClass("mobile")) e = t('#header-outer[data-mobile-fixed="1"]').length > 0 ? t(l).offset().top + 2 - h + pt.adminBarHeight : t(l).offset().top - pt.adminBarHeight + 1;
                                    else {
                                        var i = t('#header-outer[data-header-resize="0"]').length > 0 ? 0 : parseInt(_) + 2 * n;
                                        if (t('#header-outer[data-remove-fixed="1"]').length > 0 && (h = 0), e = t(l).offset().top - parseInt(h) + i + 3 - pt.adminBarHeight, 0 == t("body.mobile").length && 0 === t("body.page-template-template-no-header").length && 0 === t("body.page-template-template-no-header-footer").length && t('#header-outer[data-condense="true"]').length > 0) {
                                            var s = t('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
                                                u = d.height() - (parseInt(s.height()) + parseInt(t("#header-outer #logo").css("margin-top")));
                                            e = t(l).offset().top - parseInt(h) + u - pt.adminBarHeight
                                        }
                                    }
                                else e = t(l).offset().top - pt.adminBarHeight + 1;
                                t('body[data-hhun="1"]').length > 0 && 0 == t('#header-outer[data-remove-fixed="1"]').length && ((0 == t("#header-outer.detached").length || f.parents('.page-submenu[data-sticky="true"]').length > 0) && (e += h), f.parents('.page-submenu[data-sticky="true"]').length > 0 && (t("#header-outer.detached").addClass("invisible"), t(".page-submenu").addClass("header-not-visible").css("transform", "translateY(0px)")));
                                var p, g = f.parents('.page-submenu[data-sticky="true"]').length > 0 ? f.parents(".page-submenu").height() : 0;
                                p = t("body.material").length > 0 && c.length > 0 && 0 == t('body[data-hhun="1"]').length && 0 == t('#header-outer[data-remove-fixed="1"]').length && !r.hasClass("mobile") ? c.height() : t('body[data-hhun="1"]').length > 0 && c.length > 0 && !r.hasClass("mobile") && 0 == t('#header-outer[data-remove-fixed="1"]').length ? c.height() : 0, o && Gt(e - g + p, 700, "easeInOutQuint")
                            }, p), i.preventDefault()
                        }
                        "#top" == l && t(this).parents("#slide-out-widget-area").length > 0 && t("#slide-out-widget-area .slide_out_area_close").trigger("click")
                    })
                }
            }()
    }

    function vi() {
        0 == t(e).scrollTop() && Cn(), t("video").css("visibility", "visible"), t('body[data-animated-anchors="true"]').length > 0 && (0 == t(".nectar-box-roll").length && 0 == t("#nectar_fullscreen_rows").length && (void 0 !== ee.tab ? setTimeout(function() {
            Un()
        }, 800) : Un()), t('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && 0 == t(".nectar-box-roll").length && pt.usingMobileBrowser && Un()), qe(), pt.usingMobileBrowser || Fe(), $a()
    }
    Tn.prototype.events = function() {
        var a = this;
        t(e).on("smartresize", this.resize.bind(this)), e.addEventListener("orientationchange", function() {
            this.setTimeout(function() {
                a.orientationChange()
            }, 100)
        })
    }, Tn.prototype.resize = function() {
        pt.usingMobileBrowser || (this.storedWinH = pt.winH, this.calculate())
    }, Tn.prototype.calculate = function() {
        if (1 == gt.materialOffCanvasOpen) return !0;
        this.offsetTop = this.$el.offset().top, this.offsetTop < this.storedWinH && this.$el.hasClass("top-level") && !pt.usingFrontEndEditor || (this.$el.css("min-height", this.storedWinH), this.$el.find("> .col.span_12").css("min-height", this.storedWinH))
    }, Tn.prototype.orientationChange = function() {
        pt.usingMobileBrowser && (this.storedWinH = pt.winH, this.calculate())
    }, Yn.prototype.resizeEvent = function() {
        this.initialX = this.$el.width() / 2, this.initialY = this.$el.height() / 2
    }, Yn.prototype.mouseEvents = function() {
        var a = this;
        a.$el.hasClass("play_button_hover") && (a.hoverOnly = !0), a.$el.on("mouseenter", function(t) {
            a.activeFollow = !0, a.elX = t.offsetX, a.elY = t.offsetY, a.lastScroll = 0, a.hoverOnly ? (a.percentage = 1, clearTimeout(a.exitTimeout), setTimeout(function() {
                a.percentage = .16
            }, 60)) : (clearInterval(a.percentageInterval), a.percentageInterval = setInterval(function() {
                a.percentage < .16 ? a.percentage += .008 : clearInterval(a.percentageInterval)
            }, 30))
        }), a.$el.on("mouseleave", function() {
            a.hoverOnly ? a.exitTimeout = setTimeout(function() {
                a.activeFollow = !1, a.lastScroll = 0, clearInterval(a.percentageInterval), a.percentage = .03
            }, 400) : (a.activeFollow = !1, a.lastScroll = 0, clearInterval(a.percentageInterval), a.percentage = .03)
        }), a.$el.on("mousemove", function(t) {
            a.elX = t.offsetX, a.elY = t.offsetY, a.lastScroll = 0
        }), t(e).on("scroll", function() {
            1 == a.activeFollow && 0 == a.lastScroll && (a.lastScroll = pt.scrollTop)
        })
    }, Yn.prototype.rafLoop = function() {
        1 == this.activeFollow ? (this.scrollAdjust = 0, this.alteredY = this.elY, this.lastScroll > 0 && (this.scrollAdjust = pt.scrollTop - this.lastScroll, this.alteredY += this.scrollAdjust), this.lastY = Yt(this.lastY, this.alteredY, this.percentage), this.lastX = Yt(this.lastX, this.elX, this.percentage), this.lastY2 = Yt(this.lastY2, this.alteredY, this.percentage), this.innerLastX = Yt(this.innerLastX, parseInt(this.elX) - parseInt(this.lastX), this.percentage) / 1.7, this.innerLastY = Yt(this.innerLastY, parseInt(this.alteredY) - parseInt(this.lastY2), this.percentage) / 1.7) : (this.lastY = Yt(this.lastY, this.initialY, .055), this.lastX = Yt(this.lastX, this.initialX, .055), this.innerLastX = 0, this.innerLastY = 0), this.$iconEl[0].style.transform = "translateX(" + this.lastX + "px) translateY(" + this.lastY + "px)", this.$innerIconEl.length > 0 && (this.$innerIconEl[0].style.transform = "translateX(" + Pt(this.innerLastX, 14, -14) + "px) translateY(" + Pt(this.innerLastY, 14, -14) + "px)"), requestAnimationFrame(this.rafLoop.bind(this))
    }, jQuery(a).ready(function(t) {
        pt.usingFrontEndEditor = void 0 !== e.vc_iframe, Ka(), ri(), sa(), dn(), hn(), un(), xn(), en(), di(), Ee(), Le(), Ie(), Oe(), qe(), _a(), En(), In(), Be(), Fe(), ka(), Ca(), xa(), Ta(), Ia(), Za(), $n(), rn(), ci(), ti(), mi(), new Dt, oi(), hi(), fi(), gi(), s.off("smartresize.srInit"), s.on("smartresize.srInit", mt), s.off("resize.srInit"), s.on("resize.srInit", bt), e.addEventListener("orientationchange", vt), "complete" === a.readyState && vi(), s.on("load", vi)
    })
}(window.jQuery, window, document);