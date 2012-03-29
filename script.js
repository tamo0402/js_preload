(function() {
    $(function() {

        var $imgs, loader, notify, randomSrcs, refresh;
        loader = null;
        $imgs = $('#imgs');

        notify = function(msg) {
            var $item;
            msg = msg.replace(/\?.+/, '');
            $item = $("<div>" + msg + "</div>");
            return;
        };

        randomSrcs = function() {
            var i, random, srcs;
            srcs = [];
            random = $.now();
            for (i = 1; i <= 50; i++) {
                srcs.push("../imgs/" + i + ".jpg?" + random);
            }
            return srcs;
        };

        var options;
        $imgs.empty();
        options = {
            pipesize: 3 * 1,
            delay: 100 * 1
        };
        options.srcs = randomSrcs();  
        loader = $.ImgLoader(options);
        loader.bind('itemload', function($img) {
            $imgs.append($img);
            return setTimeout((function() {
                return $img.css('opacity', 1);
            }), 1);
        });
        return loader.load();
    });
}).call(this);