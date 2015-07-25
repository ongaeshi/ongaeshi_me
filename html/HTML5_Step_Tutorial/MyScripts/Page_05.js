//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/07

var setupDragAndDrop = function() {
  var holder = document.getElementById('holder'),
    state = document.getElementById('status');

  if (typeof window.FileReader === 'undefined') {
    state.className = 'fail';
  } else {
    state.className = 'success';
    state.innerHTML = 'ドラッグ＆ドロップ可能です';
  }

  holder.ondragover = function () { this.className = 'hover'; return false; };
  holder.ondragend = function () { this.className = ''; return false; };

  holder.ondrop = function (e) {
    this.className = '';
    e.preventDefault();

    var file = e.dataTransfer.files[0],
      reader = new FileReader();
    reader.onload = function (event) {
      holder.style.background = 'url(' + event.target.result + ') no-repeat center';
    };
    reader.readAsDataURL(file);

    return false;
  };
}

addEvent(window, "load", function() {
  if (getStateKind() == STATE_END)
    updateBGColor();

  setupDragAndDrop();

});

// ---