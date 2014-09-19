/*
**  TextFlip
**  jQuery Plugin
**  https://github.com/hozakar/textflip/
**
**  Copyright 2014, Hakan Özakar
**  http://beltslib.net
**
**  Licensed under CC0 1.0 Universal Licence:
**  https://creativecommons.org/publicdomain/zero/1.0/
*/

(function ($) {
    "use strict";

    var values;

    function init($tf) {
        $tf.data('working', true);
        $tf.each(function () {
            var oHTML = $(this).html();
            var modify = '';
            $(this).contents().filter(function () {
                if (this.nodeType === 3) {
                    var hoy = $(this).text();
                    for (var i = 0; i < hoy.length; i++) {
                        modify += '<span class="textflip_chr_wrapper">' + (hoy[i] == ' ' ? '&nbsp;' : hoy[i]) + '</span>';
                    }
                } else {
                    modify += '<span class="textflip_el_wrapper">' + $('<span />').append($(this).clone()).html() + '</span>';
                }
            });

            trigger($tf, $(this), modify, oHTML);
        });
    }

    function trigger($tf, $ctf, modify, oHTML) {
        $ctf.html(modify);
        var counter = 0;
        var totalTime = values.interval ? values.interval : Math.min(1500, $tf.children('.textflip_el_wrapper, .textflip_chr_wrapper').length * 25);
        $tf.children('.textflip_el_wrapper, .textflip_chr_wrapper').each(function () {
            var $el = $(this);
            counter++;
            var timing = values.sequence == 'random' ? parseInt(Math.random() * totalTime) : counter * (totalTime / $tf.children('.textflip_el_wrapper, .textflip_chr_wrapper').length);
            setTimeout(function () {
                $el.toggleClass(values.animation == 'random' ? 'tr_' + parseInt(Math.random() * 4) : values.animation);

            }, timing);
        });

        setTimeout(function () {
            $tf.html(oHTML);
            $tf.data('working', false);
        }, totalTime + 750);
    }

    /* Plug-in Start */
    $.fn.textflip = function (param) {
        if (this.data('working')) return this;

        values = $.extend({
            interval: 0,
            sequence: 'random',
            animation: 'opacity'
        }, param);

        init(this);

        return this;
    }
    /* End: Plug-in Start */
})(jQuery);