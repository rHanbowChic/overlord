// ==UserScript==
// @name        Note.ms 霸屏
// @namespace   Violentmonkey Scripts
// @match       *://note.ms/*
// @grant       none
// @version     1.0
// @author      -
// @description 开这个脚本后，只要你在线，其他人都改不了
// ==/UserScript==
var $textarea = $(".content");
setInterval(function(){
  var content = $textarea.val();
  $.ajax({
                type: "POST",
                data: "&t=" + encodeURIComponent(content)
            });
}, 1000);