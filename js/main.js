$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();
    ///////// **search** /////////
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
        $('.search-input').focusout();
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    if ($(window).width() <= 767) {
        $(".setting-anchor").addClass("mo-accordion");
        $(".top-dropDown").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })

    ///////// **menu** /////////
    if ($(window).width() <= 991) {

        $('.mo-menu-icon').click(function () {
            $("nav").slideDown(400);
            $(".mo-menu-icon").hide();
            $(".mo-close-icon").show();
            $("body").toggleClass("overflow");
        });
        $('.mo-close-icon').click(function () {
            $("nav").slideUp(400);
            $(".mo-close-icon").hide();
            $(".mo-menu-icon").show();
            $("body").toggleClass("overflow");
        });
    }
});