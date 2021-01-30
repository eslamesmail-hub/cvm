$(document).ready(function () {

    'use strict';
    
    var scrollButton = $("#scroll-up");

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 400) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    scrollButton.click(function () {
        $("html,body").animate({ scrollTop : 0});

    });
});
