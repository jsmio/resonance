'use strict';

import $ from 'jquery';
import moment from 'moment';
import '../../bower_components/semantic/dist/semantic.js';

var rightNow = moment().format('YYYY-MM-DD,h:mm:ss a');
$('.selection.dropdown').dropdown();
$('.content.main .ui.grid.con-search .res-color .menu>.item').on('click',function(){
  $('.content.main .ui.grid.con-search .res-color .color-box').attr('data-value',$(this).attr('data-value')) ;
})
$('.content.main .con-search input').on('keypress',function (e) {
  if (e.keyCode == '13') {
    $('.head').addClass('animated bounceOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $('.content.main .con-search:not(.grid)').css('display','none');
      $('.content.main .con-search.grid').css('display', 'block');
      $('.content.main .view-search').css('display','block');
      $('.content.main').addClass('animated fadeInUp').css('min-height','auto');
      $('.content.main>div').addClass('animated fadeInRight').removeClass('center aligned');
    });
  }
});
