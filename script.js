jQuery(".toggle").click(function () {
    jQuery(".main-manu ul").slideToggle();
});

jQuery(".totop").click(function () {
    jQuery("html, body").animate({ "scrollTop": "0px" }, 1000)
});

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 300) {
        jQuery(".totop").fadeIn();
    } else {
        jQuery(".totop").fadeOut();
    }
});