// ==UserScript==
// @name         why Swec
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.sweclockers.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...


(function(){
 addGlobalStyle('div.inner div.articleContent { display: block !important; ');
 addGlobalStyle('div.infoBox.adinfoBox { display: none !important; ');
}());


 function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
