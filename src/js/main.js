'use strict';

import $ from 'jquery';
import '../../bower_components/semantic/dist/semantic.min';
import mixitup from '../../bower_components/mixitup/dist/mixitup.min';

var mixer = mixitup('.content.main .view-search', {
    selectors: {
        target: '.column'
    },
    animation: {
        effectsOut: 'fade translateY(-100%)',
        duration: 800,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
    },
    load: {
        filter: '.view-search'
    },
    debug: {
        enable: true
    }
});
$('.selection.dropdown').dropdown({
    action: 'hide'
});
$('.ui.grid.con-search .res-color .menu>.item').on('click', function() {
    $('.content.main .ui.grid.con-search .res-color .color-box').attr('data-value', $(this).attr('data-value'));
})
$('.content.main .con-search input').on('keypress', function(e) {
    var animateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    if (e.keyCode == '13') {
        $('.head').addClass('animated bounceOutLeft').one(animateEnd, function() {
            $('.content.main .con-search:not(.grid)').css('display', 'none');
            $('.content.main .con-search.grid').css('display', 'block');
            $('.content.main').addClass('animated fadeInUp').css('min-height', 'auto');
            $('.content.main>div').addClass('animated fadeInRight').removeClass('center aligned').one(animateEnd, function() {
                mixer.show().then(function(state) {
                    console.log(state.totalShow === state.totalTargets); // true
                });
                console.log(mixer);
            });
        });
    }
});

$('.content.main .view-search .column').on('click', function() {
    $('.ui.modal').modal({
        closable: false,
        blurring: true,
        transition: 'horizontal flip',
        duration: 1000,
        onShow: function() {

        }
    }).modal('show');
    return false;
});
