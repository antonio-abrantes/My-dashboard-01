/**
 * Created by Antonio on 18/07/2018.
 */

$(document).ready(function() {

    //Menu responsive control
    $('.nav-trigger').click(function() {
        $('.side-nav').toggleClass('visible');
    });

    // Active menu section selected
    $('.menu-item').click(function() {
        $('.menu-item').removeClass('active');
        $(this).toggleClass('active');
    });

});

