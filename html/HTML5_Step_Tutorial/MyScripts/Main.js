//
// @file 
// @brief
// @author ongaeshi
// @date   2011/01/29

addEvent(window, "load", function() {
  var state = getState();

  if (state.chkStatus())
    state = getState();
  
  state.onLoad();

  //@debug
  //document.getElementById("ClearButton").style.display = "";
});

addEvent(window, "unload", function() {
});
