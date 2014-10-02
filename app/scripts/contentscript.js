'use strict';

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

var img = document.createElement('img');
img.src = imgSrc;
img.id = 'ff15-car-footer';

document.body.appendChild(img);
