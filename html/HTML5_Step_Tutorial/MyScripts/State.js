//
// @file 
// @brief
// @author ongaeshi
// @date   2011/01/30

// --- state -------------------------------------  

var STATE_START           = 0;
var STATE_ITEM02_OPEN     = 1;
var STATE_ITEM02          = 2;
var STATE_ITEM03_OPEN     = 3;
var STATE_ITEM03          = 4;
var STATE_ITEM04_OPEN     = 5;
var STATE_ITEM04          = 6;
var STATE_ITEM05_OPEN     = 7;
var STATE_ITEM05          = 8;
var STATE_ITEM06_OPEN     = 9;
var STATE_ITEM06          = 10;
var STATE_END_OPEN        = 11;
var STATE_END             = 12;

var state_start = {
  chkStatus: function() {
    // @debug
    //setState(STATE_END_OPEN);
    //return true;
    
    if (PageCounter.count("/HTML5_Step_Tutorial/Page_01.html") > 0) {
      setState(STATE_ITEM02_OPEN);
      return true;
    }

    return false;
  },

  onLoad: function() {
    // do nothing.
  }
}

var state_item02_open = {
  chkStatus: function() {
    return false;
  },

  onLoad: function() {
    // 次のステート確定
    setState(STATE_ITEM02);

    // アニメーション
    var counter = 0;

    timer_id = setInterval(function(){
      switch (counter) {
      case 0:
        Item.text(ITEM_01);
        break;
      case 15:
        Item.arrow_anim(ITEM_01);
        break;
      case 60:
        Item.text_fade(ITEM_02);
        break;
      case 61:
        Item.text(ITEM_02);
        break;
      }

      counter++;
    }, 16);
  }
}

var state_item02 = {
  chkStatus: function() {
    if (PageCounter.count("/HTML5_Step_Tutorial/Page_02.html") > 0) {
      setState(STATE_ITEM03_OPEN);
      return true;
    }

    return false;
  },

  onLoad: function() {
    Item.text(ITEM_01); Item.arrow(ITEM_01);
    Item.text(ITEM_02);
  }
}

var state_item03_open = {
  chkStatus: function() {
    return false;
  },

  onLoad: function() {
    // 次のステート確定
    setState(STATE_ITEM03);

    // アニメーション
    var counter = 0;

    timer_id = setInterval(function(){
      switch (counter) {
      case 0:
        Item.text(ITEM_01); Item.arrow(ITEM_01);
        Item.text(ITEM_02);
        break;
      case 15:
        Item.arrow_anim(ITEM_02);
        break;
      case 60:
        Item.text_fade(ITEM_03);
        break;
      case 61:
        Item.text(ITEM_03);
        break;
      }

      counter++;
    }, 16);
  }
}

var state_item03 = {
  chkStatus: function() {
    if (PageCounter.count("/HTML5_Step_Tutorial/Page_03.html") > 0) {
      setState(STATE_ITEM04_OPEN);
      return true;
    }

    return false;
  },

  onLoad: function() {
    Item.text(ITEM_01); Item.arrow(ITEM_01);
    Item.text(ITEM_02); Item.arrow(ITEM_02);
    Item.text(ITEM_03);
  }
}

var state_item04_open = {
  chkStatus: function() {
    return false;
  },

  onLoad: function() {
    // 次のステート確定
    setState(STATE_ITEM04);

    // アニメーション
    var counter = 0;

    timer_id = setInterval(function(){
      switch (counter) {
      case 0:
        Item.text(ITEM_01); Item.arrow(ITEM_01);
        Item.text(ITEM_02); Item.arrow(ITEM_02);
        Item.text(ITEM_03);
        break;
      case 15:
        Item.arrow_anim(ITEM_03);
        break;
      case 60:
        Item.text_fade(ITEM_04);
        break;
      case 61:
        Item.text(ITEM_04);
        break;
      }

      counter++;
    }, 16);
  }
}

var state_item04 = {
  chkStatus: function() {
    if (PageCounter.count("/HTML5_Step_Tutorial/Page_04.html") > 0) {
      setState(STATE_ITEM05_OPEN);
      return true;
    }
  },

  onLoad: function() {
    Item.text(ITEM_01); Item.arrow(ITEM_01);
    Item.text(ITEM_02); Item.arrow(ITEM_02);
    Item.text(ITEM_03); Item.arrow(ITEM_03);
    Item.text(ITEM_04);
  }
}

var state_item05_open = {
  chkStatus: function() {
    return false;
  },

  onLoad: function() {
    // 次のステート確定
    setState(STATE_ITEM05);

    // アニメーション
    var counter = 0;

    timer_id = setInterval(function(){
      switch (counter) {
      case 0:
        Item.text(ITEM_01); Item.arrow(ITEM_01);
        Item.text(ITEM_02); Item.arrow(ITEM_02);
        Item.text(ITEM_03); Item.arrow(ITEM_03);
        Item.text(ITEM_04);
        break;
      case 15:
        Item.arrow_anim(ITEM_04);
        break;
      case 60:
        Item.text_fade(ITEM_05);
        break;
      case 61:
        Item.text(ITEM_05);
        break;
      }

      counter++;
    }, 16);
  }
}

var state_item05 = {
  chkStatus: function() {
    if (PageCounter.count("/HTML5_Step_Tutorial/Page_05.html") > 0) {
      setState(STATE_ITEM06_OPEN);
      return true;
    }
  },

  onLoad: function() {
    Item.text(ITEM_01); Item.arrow(ITEM_01);
    Item.text(ITEM_02); Item.arrow(ITEM_02);
    Item.text(ITEM_03); Item.arrow(ITEM_03);
    Item.text(ITEM_04); Item.arrow(ITEM_04);
    Item.text(ITEM_05); 
  }
}

var state_item06_open = {
  chkStatus: function() {
    return false;
  },

  onLoad: function() {
    // 次のステート確定
    setState(STATE_ITEM06);

    // アニメーション
    var counter = 0;

    timer_id = setInterval(function(){
      switch (counter) {
      case 0:
        Item.text(ITEM_01); Item.arrow(ITEM_01);
        Item.text(ITEM_02); Item.arrow(ITEM_02);
        Item.text(ITEM_03); Item.arrow(ITEM_03);
        Item.text(ITEM_04); Item.arrow(ITEM_04);
        Item.text(ITEM_05);
        break;
      case 15:
        Item.arrow_anim(ITEM_05);
        break;
      case 60:
        Item.text_fade(ITEM_06);
        break;
      case 61:
        Item.text(ITEM_06);
        break;
      }

      counter++;
    }, 16);
  }
}

var state_item06 = {
  chkStatus: function() {
    if (PageCounter.count("/HTML5_Step_Tutorial/Page_06.html") > 0) {
      setState(STATE_END_OPEN);
      return true;
    }
  },

  onLoad: function() {
    Item.text(ITEM_01); Item.arrow(ITEM_01);
    Item.text(ITEM_02); Item.arrow(ITEM_02);
    Item.text(ITEM_03); Item.arrow(ITEM_03);
    Item.text(ITEM_04); Item.arrow(ITEM_04);
    Item.text(ITEM_05); Item.arrow(ITEM_05);
    Item.text(ITEM_06);
  }
}

var state_end_open = {
  chkStatus: function() {
    return false;
  },

  onLoad: function() {
    // 次のステート確定
    setState(STATE_END);

    // アニメーション
    var counter = 0;

    timer_id = setInterval(function(){
      switch (counter) {
      case 0:
        Item.text(ITEM_01); Item.arrow(ITEM_01);
        Item.text(ITEM_02); Item.arrow(ITEM_02);
        Item.text(ITEM_03); Item.arrow(ITEM_03);
        Item.text(ITEM_04); Item.arrow(ITEM_04);
        Item.text(ITEM_05); Item.arrow(ITEM_05);
        Item.text(ITEM_06);
        break;
      case 30:
        Item.arrow_anim(ITEM_06);
        break;
      case 100:
        updateBGColor();
        break;
      case 180:
        document.getElementById("StaffRoll").style.display = "";
        break;
      }

      counter++;
    }, 16);
  }
}

var state_end = {
  chkStatus: function() {
    return false;
  },

  onLoad: function() {
    Item.text(ITEM_01); Item.arrow(ITEM_01);
    Item.text(ITEM_02); Item.arrow(ITEM_02);
    Item.text(ITEM_03); Item.arrow(ITEM_03);
    Item.text(ITEM_04); Item.arrow(ITEM_04);
    Item.text(ITEM_05); Item.arrow(ITEM_05);
    Item.text(ITEM_06); Item.arrow(ITEM_06);
    document.getElementById("StaffRoll").style.display = "";
    updateBGColor();
  }
}


// --- state table -------------------------------------  

var stateTable = [
  state_start,
  state_item02_open,
  state_item02,
  state_item03_open,
  state_item03,
  state_item04_open,
  state_item04,
  state_item05_open,
  state_item05,
  state_item06_open,
  state_item06,
  state_end_open,
  state_end,
]

// --- state lib ------------------------------------  
 
var getStateKind = function() {
  var v = null;
  
  if (window.localStorage)
    v = window.localStorage.getItem("State:index.html");

  // @debug
  // return STATE_ITEM02_OPEN;

  if (v)
    return v;
  else
    return STATE_START;
}    

var getState = function() {
  var kind = getStateKind();
  //console.log("state : " + kind);
  return stateTable[kind];
}

var setState = function(kind) {
  window.localStorage.setItem("State:index.html", kind);
}

// --- common lib ------------------------------------  
var updateBGColorIfEnd = function() {
  if (getStateKind() == STATE_END)
    updateBGColor();
}
    

