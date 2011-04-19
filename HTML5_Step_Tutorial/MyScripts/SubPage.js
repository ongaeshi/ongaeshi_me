//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/03

addEvent(window, "load", function() {
  if (getStateKind() == STATE_END)
    updateBGColor();
});
