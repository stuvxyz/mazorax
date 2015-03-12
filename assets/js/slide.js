function decodeString(key, encodedText) {
	decodedArray = [];
	for(j=0; j<encodedText.length; j++) {
		decodedArray.push(key.charAt(encodedText.charCodeAt(j)-48));
	}; 
	return decodedArray.join('');
}

function getQuerystring(e, t) {
    if (t == null) t = "";
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var n = new RegExp("[\\?&]" + e + "=([^&#]*)");
    var r = n.exec(window.location.href);
    if (r == null) return t;
    else return r[1]
}

function htmlspecialchars_decode(e, t) {
    var n = 0,
        r = 0,
        i = false;
    if (typeof t === "undefined") {
        t = 2
    }
    e = e.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    var s = {
        ENT_NOQUOTES: 0,
        ENT_HTML_QUOTE_SINGLE: 1,
        ENT_HTML_QUOTE_DOUBLE: 2,
        ENT_COMPAT: 2,
        ENT_QUOTES: 3,
        ENT_IGNORE: 4
    };
    if (t === 0) {
        i = true
    }
    if (typeof t !== "number") {
        t = [].concat(t);
        for (r = 0; r < t.length; r++) {
            if (s[t[r]] === 0) {
                i = true
            } else if (s[t[r]]) {
                n = n | s[t[r]]
            }
        }
        t = n
    }
    if (t & s.ENT_HTML_QUOTE_SINGLE) {
        e = e.replace(/&#0*39;/g, "'")
    }
    if (!i) {
        e = e.replace(/&quot;/g, '"')
    }
    e = e.replace(/&/g, "&");
    return e
}

jQuery(window).load(function() {
    function r() {
        jQuery("a").each(function() {
            var e = jQuery(this);
            var t = e.attr("href");
            if (t == undefined) return;
            var n = t.replace("http://", "").replace("https://", "");
            var r = t.split(".").reverse();
            var i = r[0].toLowerCase();
            var r = t.split("/").reverse();
            var s = r[2];
            var o = false;
            if (jQuery.inArray(i, analyticsFileTypes) != -1) {
                o = true;
                e.click(function() {
                    if (analyticsEventTracking == "enabled") {
                        _gaq.push(["_trackEvent", "Downloads", i.toUpperCase(), t])
                    } else _gaq.push(["_trackPageview", analyticsDownloadsPrefix + n])
                })
            }
            if (t.match(/^http/) && !t.match(document.domain) && o == false) {
                e.click(function() {
                    if (analyticsEventTracking == "enabled") {
                        _gaq.push(["_trackEvent", "Outbound Traffic", t.match(/:\/\/(.[^/]+)/)[1], t])
                    } else _gaq.push(["_trackPageview", analyticsOutboundPrefix + n])
                })
            }
        });
        if (mobile !== "mstrue") {
            var e = jQuery(window).width();
            var t = Math.round(e / 91);
            var n = Math.round(e / 85);
            var r = Math.round(e / 85);
            var i = Math.round(e / 71);
            var s = 80;
            jQuery("p.desc").css("font-size", t);
            jQuery("p.desc").css("line-height", Math.round(t * 1.35) + "px");
            jQuery("p.desc").css("margin-top", Math.round(t * 1.35) + "px");
            jQuery("p.main").css("font-size", r);
            jQuery("p.main").css("margin-bottom", Math.round(r) + "px");
            jQuery("span.tagt").css("font-size", n);
            jQuery("span.tagt").css("margin-bottom", Math.round(n * .25) + "px");
            jQuery(".project").css("font-size", i);
            jQuery(".project").css("margin-bottom", Math.round(i) + "px");
            jQuery(".first").css("display", "block");
            jQuery(window).resize(function() {
                var o = jQuery(window).height();
                var u = jQuery(window).width();
                jQuery(".topstuff").css("width", Math.round(u * .9));
                jQuery(".topstuff").css({
                    "margin-top": "4.5%",
                    height: Math.round(o * .9),
                    "margin-left": "2%"
                });
                jQuery("#slideshow").css("height", o);
                var a = u - e;
                if (a > 0) {
                    var f = Math.round(a / s);
                    var l = t + f;
                    var c = r + f;
                    var h = n + f;
                    var p = i + f;
                    jQuery("p.desc").css("font-size", l);
                    jQuery("p.desc").css("line-height", Math.round(l * 1.35) + "px");
                    jQuery("p.desc").css("margin-top", Math.round(l * 1.35) + "px");
                    jQuery("p.main").css("margin-bottom", Math.round(c) + "px");
                    jQuery("p.main").css("line-height", Math.round(c * 1.35) + "px");
                    jQuery("span.tagt").css("margin-bottom", Math.round(h * .25) + "px");
                    jQuery("span.tagt").css("line-height", Math.round(h * 1.35) + "px");
                    jQuery("p.main").css("font-size", c);
                    jQuery("span.tagt").css("font-size", h);
                    jQuery(".project").css("font-size", p);
                    jQuery(".project").css("margin-bottom", Math.round(p) + "px")
                } else {
                    var d = Math.round(Math.abs(a) / s);
                    var l = t - d;
                    var c = r - d;
                    var h = n - d;
                    var p = i - d;
                    jQuery("p.desc").css("font-size", l);
                    jQuery("p.desc").css("line-height", Math.round(l * 1.35) + "px");
                    jQuery("p.desc").css("margin-top", Math.round(l * 1.35) + "px");
                    jQuery("p.main").css("margin-bottom", Math.round(c) + "px");
                    jQuery("p.main").css("line-height", Math.round(c * 1.35) + "px");
                    jQuery("span.tagt").css("margin-bottom", Math.round(h * .25) + "px");
                    jQuery("span.tagt").css("line-height", Math.round(h * 1.35) + "px");
                    jQuery("p.main").css("font-size", c);
                    jQuery("span.tagt").css("font-size", h);
                    jQuery(".project").css("font-size", p);
                    jQuery(".project").css("margin-bottom", Math.round(p) + "px")
                }
            })
        }
    }

    function i(t) {
        function s(e, r, i, s) {
            if (!i.addSlide) return;
            if (i.slideCount == n) return;
            var o = s ? t.shift() : t.pop();
            i.addSlide(htmlspecialchars_decode(o), s == false)
            //i.addSlide(o, s == false)
        }
        var n = 1 + t.length;
        
        var i = jQuery("#slideshow");
        i.prepend(htmlspecialchars_decode(t.pop()));
        i.append(htmlspecialchars_decode(t.shift()));
        
        jQuery("#slideshow").cycle({
            fx: "scrollHorz",
            startingSlide: 1,
            timeout: 0,
            speed: 500,
            prev: "#prev",
            next: "#next",
            before: s,
            after: r
        });
        
        jQuery("#slideshow").swipe({
            allowPageScroll: "vertical",
            swipeLeft: function() {
                jQuery("#slideshow").cycle("next")
            },
            swipeRight: function() {
                jQuery("#slideshow").cycle("prev")
            }
        });
        
        jQuery(document).bind("keyup", function(t) {
            if (t.keyCode == 37) {
                jQuery("#slideshow").cycle("prev");
                jQuery("#prev").css("color", "black");
                setTimeout(function() {
                    jQuery("#prev").css("color", "#447CB6")
                }, 500)
            } else if (t.keyCode == 39) {
                jQuery("#slideshow").cycle("next");
                jQuery(next).css("color", "black");
                setTimeout(function() {
                    jQuery(next).css("color", "#447CB6")
                }, 500)
            } else if (t.keyCode == 38) {
                jQuery("#footerSlideContent").animate({
                    height: "180px"
                });
                jQuery("#footerSlideButton").css({
                    top: 0,
                    color: "black",
                    transform: "rotate(0deg)",
                    "-webkit-transform": "rotate(0deg)",
                    "-moz-transform": "rotate(0deg)",
                    filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0)"
                });
                setTimeout(function() {
                    jQuery("#footerSlideButton").css("color", "#447CB6")
                }, 500);
                e = true
            } else if (t.keyCode == 40) {
                jQuery("#footerSlideContent").animate({
                    height: "0px"
                });
                jQuery("#footerSlideButton").css({
                    top: "-5px",
                    color: "black",
                    transform: "rotate(180deg)",
                    "-webkit-transform": "rotate(180deg)",
                    "-moz-transform": "rotate(180deg)",
                    filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"
                });
                setTimeout(function() {
                    jQuery("#footerSlideButton").css("color", "#447CB6")
                }, 500);
                e = false
            }
        });
    }
    
    var e = false;
    
    jQuery("#footerSlideContainer").css("z-index", "1000");
    
    jQuery("#footerSlideButton").hover(function() {
        if (e === false) {
            jQuery(this).css("color", "black")
        } else {
            jQuery(this).css("color", "black")
        }
    }, function() {
        if (e === true) {
            jQuery(this).css("color", "#447CB6")
        } else {
            jQuery(this).css("color", "#447CB6")
        }
    });
    
    jQuery("#prev").hover(function() {
        jQuery(this).css("color", "black")
    }, function() {
        jQuery(this).css("color", "#447CB6")
    });
    
    jQuery("#next").hover(function() {
        jQuery(this).css("color", "black")
    }, function() {
        jQuery(this).css("color", "#447CB6")
    });
    
    jQuery("#footerSlideButton").click(function() {
        if (e === false) {
            if (mobile == "mstrue") {
                jQuery("#footerSlideContent").animate({
                    height: "180px"
                })
            } else {
                jQuery("#footerSlideContent").animate({
                    height: "180px"
                })
            }
            jQuery(this).css({
                top: 0,
                "-webkit-transform": "rotate(0deg)",
                transform: "rotate(0deg)",
                "-moz-transform": "rotate(0deg)",
                filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0)"
            });
            e = true
        } else {
            jQuery("#footerSlideContent").animate({
                height: "0px"
            });
            jQuery(this).css({
                top: "-5px",
                "-webkit-transform": "rotate(180deg)",
                transform: "rotate(180deg)",
                "-moz-transform": "rotate(180deg)",
                filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"
            });
            e = false
        }
    });
    
    if (mobile !== "mstrue") {
		var t = jQuery(window).height();
        jQuery(".entry-content").height(t)
    }
    
    var loadSlides = function(page_ids, callback) {
		var page_contents = [];

		var deferreds = [];
		for (var v=0; v<page_ids.length; v++) {
			var page_id = page_ids[v];
			deferreds.push(
				jQuery.ajax({
					//url: "/slides/" + page_id + ".html"
                    url: page_id
				}).done(function(data) {
					page_contents.push(data);
				})
			);
		}
		
		jQuery.when.apply(jQuery, deferreds).then(function() {
			if (callback != null) {
				callback(page_contents);
			}
		});
	}
	
	loadSlides(page_urls, i);
})
