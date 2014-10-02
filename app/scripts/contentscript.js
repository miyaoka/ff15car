'use strict';

var animTime = 300;
var imgMargin = 100;
var imgs = [
  'FF15_A_fix.png',
  'FF15_B_fix.png',
  'FF15_C_fix.png'
];
var imgSrc = chrome.extension.getURL(
  [
  'images', 'footer', imgs[Math.floor(Math.random()*imgs.length)]
  ].join('/')
);

var img = $('<img>').attr('src', imgSrc).attr('id', 'ff15-car-footer');

var lastDest = null;
function scroll(dest){
  if(lastDest == dest){
    return;
  }
  lastDest = dest;
  img.stop();
  img.animate({
    'bottom': dest + 'px'
  }, animTime);
}
$(document).ready(function () {
  $('body').append(img);
  img.css('bottom', -img.height() * .5);
  $('html').mousemove(function(e){
    var wh = window.innerHeight ? window.innerHeight: $(window).height();
    var imgTop = wh - img.height() - imgMargin;
    var diff = e.clientY - imgTop;
    if(diff > 0){
      scroll(-diff);
    } else {
      scroll(0);
    }
  });
  scroll(0);
});