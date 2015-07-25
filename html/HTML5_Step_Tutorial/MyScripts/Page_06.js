//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/03

function changeCpick(obj){
  setBGColor(obj.nodes.target.value);
  updateBGColorIfEnd();
}

addEvent(window, "load", function() {
  if (!isSetBGColor())
    setBGColor(document.getElementById("html5jp-cpick").value);
  else
    document.getElementById("html5jp-cpick").value = getBGColor();
  
  if (getStateKind() == STATE_END)
    updateBGColor();
});
