var s, w, h, os, isScrolling = false,
    intimer = 0,
    outtimer = 0,
    inside = false,
    n = 0,
    mobileWidth = 768,
    mainvideo, footerIsUp = false,
    paperscript = {};
var m99 = {
    init: function() {
        var t = this;
        
        $(window).scroll(function() {
            t.scroll();
        }).scroll();
        t.activate();
        t.menu();
    },
    
    scroll: function() {
        var t = this;
        s = $(window).scrollTop();
        
        isScrolling = true;
        clearTimeout($.data(this, "scrollCheck"));
        $.data(this, "scrollCheck", setTimeout(function() {
            isScrolling = false;
            os = $(window).scrollTop();
        }, 250));
    },
 


    activate: function(ID) {
        for (i in this.actions)
            this.actions[i](ID);
        $("section").css("transform", "none");
    },
    actions: {
        links: function(ID) {
            var _ID = ID || "",
                t = m99;
            $(_ID + " a").each(function() {
                        $(this).unbind("click").click(function(event) {
                        event.preventDefault();
                        t.open({
                            url: $(this).attr("href"),
                            title: $(this).attr("title"),
                            ID: $(this).attr("data-id")
                        });
                    });
            });
        },
    },
    
    open: function(obj) {
        var t = this,
            currentPath = window.location.href.split('?')[0]; // получаем url и разбиваем адрес на масив и разбиваем его по разделителю '?'
        if (obj.url != currentPath) {
            setTimeout(function() {                 //| Если осуществлен переход по ссилке. то добавляется два класса, где добавляется ефект 
                $('body').addClass("hold loading"); //| плавного появления и исчезновения
                setTimeout(function() {       
                    t.load(obj.url);          // | Если осуществлен переход по ссилке. то плавно скролиться на начало страници 
                    window.scrollTo(0, 0);    // |
                }, 500);
            }, 500);
        }
    },
    load: function(url, ID) {
        var t = this;
        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: url,
            data: {
                "new": 1,
                "referrer": window.location.pathname
            },
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                alert(xhr.responseText);
                alert(thrownError);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                    } else {}
                }, false);
                return xhr;
            },
            beforeSend: function() {},
            complete: function() {
                $("body").removeClass("loading").addClass("done");
                setTimeout(function() {
                    $("body").removeClass("done");
                }, 500);
            },
            success: function(data) {
                var html = $(data).find("section#content");
                var title = $(data).filter("title#minus99");
                $("title").text(title.text());
                $('.frame').html(html);
                setTimeout(function() {
                    $("body").removeClass("hold");
                    
                    m99.activate();
                    registerHistory(ID, url);
                }, 1000);
            }
        });
    },

}





var mobile = function() {
    return {
        detect: function() {
            if (window.innerWidth > mobileWidth) {
                var uagent = navigator.userAgent.toLowerCase();
                var list = this.mobiles;
                var ismobile = false;
                for (var d = 0; d < list.length; d += 1)
                    if (uagent.indexOf(list[d]) != -1) ismobile = true
            } else ismobile = true;
            return ismobile
        },
        mobiles: ["midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "sda", "sgh-", "vodafone", "xda", "palm", "iphone", "ipod", "android", "ipad"]
    }
}();


m99.init();
(jQuery);