//
// @file 
// @brief
// @author ongaeshi
// @date   2011/01/30

var ITEM_01 = 0;
var ITEM_02 = 1;
var ITEM_03 = 2;
var ITEM_04 = 3;
var ITEM_05 = 4;
var ITEM_06 = 5;

var Item = (function() {
  var table =  [
    {page: "Page_01", canvas: null       , ypos: 116},
    {page: "Page_02", canvas: "canvas_02", ypos: 193},
    {page: "Page_03", canvas: "canvas_03", ypos: 267},
    {page: "Page_04", canvas: "canvas_04", ypos: 343},
    {page: "Page_05", canvas: "canvas_05", ypos: 423},
    {page: "Page_06", canvas: "canvas_06", ypos: 502},
  ];

  function getCanvas(id) {
    return document.getElementById(id);
  }

  function getContext(id) {
    return getCanvas(id).getContext('2d');
  }

  return {
    arrow: function(kind) {
      Canvas.draw_arrow(getContext("canvas_arrow"),
                        0,
                        table[kind].ypos);
    },

    arrow_anim: function(kind) {
      Canvas.draw_arrow_anim(getContext("canvas_arrow"),
                             0,
                             table[kind].ypos);
    },

    text: function(kind) {
      document.getElementById(table[kind].page).style.display = "block";
    },

    text_fade: function(kind) {
      Canvas.fade_in(getCanvas(table[kind].canvas), '#FFFDED', 0.015);
    }
  };
})();




